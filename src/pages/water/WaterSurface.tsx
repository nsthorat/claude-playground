import { useRef, useEffect, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { GPUComputationRenderer } from 'three/examples/jsm/misc/GPUComputationRenderer.js'

const WIDTH = 128 // Simulation resolution
const MESH_RES = 256 // Higher geometry resolution for smoother rendering

// Heightmap simulation shader - wave equation with tilt gravity
const heightmapShader = `
  uniform vec2 uTilt;        // Current tilt (-1 to 1)
  uniform vec2 uTiltVelocity; // Rate of tilt change (for impulses)
  uniform float uDamping;
  uniform float uWaveSpeed;
  uniform float uTime;
  uniform vec2 uDropPos;     // Position for rain drop
  uniform float uDropStrength; // Strength of drop

  void main() {
    vec2 cellSize = 1.0 / resolution.xy;
    vec2 uv = gl_FragCoord.xy * cellSize;

    // Sample neighbors
    float center = texture2D(heightmap, uv).x;
    float velocity = texture2D(heightmap, uv).y;

    float north = texture2D(heightmap, uv + vec2(0.0, cellSize.y)).x;
    float south = texture2D(heightmap, uv + vec2(0.0, -cellSize.y)).x;
    float east = texture2D(heightmap, uv + vec2(cellSize.x, 0.0)).x;
    float west = texture2D(heightmap, uv + vec2(-cellSize.x, 0.0)).x;

    // Wave equation: acceleration = laplacian of height
    float laplacian = (north + south + east + west) - 4.0 * center;
    float acceleration = laplacian * uWaveSpeed;

    // Gravity from tilt - pushes water toward the "low" side
    vec2 pos = uv - 0.5; // Center coordinates
    float gravityForce = dot(pos, uTilt) * 0.3;
    acceleration += gravityForce;

    // Impulse from rapid tilt changes - creates ripples at edges
    float tiltSpeed = length(uTiltVelocity);
    if (tiltSpeed > 0.01) {
      vec2 impulseDir = normalize(uTiltVelocity);
      // Create wave from the edge in the direction of tilt
      float edgeProximity = max(0.0, dot(pos, impulseDir) + 0.4);
      acceleration += edgeProximity * tiltSpeed * 1.5;
    }

    // Rain drop effect
    if (uDropStrength > 0.0) {
      float dropDist = distance(uv, uDropPos);
      if (dropDist < 0.05) {
        float dropEffect = (0.05 - dropDist) / 0.05;
        velocity -= dropEffect * uDropStrength * 0.5;
      }
    }

    // Update velocity with damping
    velocity = velocity * uDamping + acceleration;

    // Update height
    float newHeight = center + velocity;

    // Boundary - waves reflect off edges
    float edgeDist = min(min(uv.x, 1.0 - uv.x), min(uv.y, 1.0 - uv.y));
    float boundary = smoothstep(0.0, 0.08, edgeDist);

    // Hard boundary push - repel water from edges
    if (edgeDist < 0.08) {
      vec2 toCenter = normalize(vec2(0.5) - uv);
      float pushStrength = (0.08 - edgeDist) / 0.08;
      velocity += pushStrength * 0.1 * sign(dot(toCenter, vec2(1.0)));
    }

    newHeight *= boundary;
    velocity *= mix(0.9, 1.0, boundary);

    // Clamp to prevent instability
    newHeight = clamp(newHeight, -1.0, 1.0);
    velocity = clamp(velocity, -0.3, 0.3);

    gl_FragColor = vec4(newHeight, velocity, 0.0, 1.0);
  }
`

// Water surface vertex shader
const waterVertexShader = `
  uniform sampler2D uHeightmap;
  uniform float uHeightScale;

  varying vec2 vUv;
  varying float vHeight;
  varying vec3 vNormal;

  void main() {
    vUv = uv;

    // Sample height
    float height = texture2D(uHeightmap, uv).x;
    vHeight = height;

    // Calculate normal from heightmap - match simulation resolution
    float texel = 1.0 / 128.0;
    float hL = texture2D(uHeightmap, uv + vec2(-texel, 0.0)).x;
    float hR = texture2D(uHeightmap, uv + vec2(texel, 0.0)).x;
    float hD = texture2D(uHeightmap, uv + vec2(0.0, -texel)).x;
    float hU = texture2D(uHeightmap, uv + vec2(0.0, texel)).x;

    // Smoother normal with less aggressive scaling
    vec3 normal = normalize(vec3(
      (hL - hR) * uHeightScale * 0.8,
      0.4,
      (hD - hU) * uHeightScale * 0.8
    ));
    vNormal = normalMatrix * normal;

    // Vertex position with height displacement
    vec3 pos = position;
    pos.z = height * uHeightScale;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`

// Water surface fragment shader - top-down view with visible ripples
const waterFragmentShader = `
  uniform vec3 uWaterColor;
  uniform vec3 uDeepColor;
  uniform vec3 uHighlightColor;
  uniform float uTime;

  varying vec2 vUv;
  varying float vHeight;
  varying vec3 vNormal;

  void main() {
    vec3 normal = normalize(vNormal);

    // Multiple light sources for better wave visibility
    vec3 lightDir1 = normalize(vec3(0.5, 1.0, 0.3));
    vec3 lightDir2 = normalize(vec3(-0.3, 1.0, -0.5));

    float diffuse1 = max(dot(normal, lightDir1), 0.0);
    float diffuse2 = max(dot(normal, lightDir2), 0.0) * 0.5;

    // View from above
    vec3 viewDir = vec3(0.0, 1.0, 0.0);

    // Specular highlights - make waves shimmer
    vec3 halfDir1 = normalize(lightDir1 + viewDir);
    vec3 halfDir2 = normalize(lightDir2 + viewDir);
    float spec1 = pow(max(dot(normal, halfDir1), 0.0), 128.0);
    float spec2 = pow(max(dot(normal, halfDir2), 0.0), 64.0);

    // Height-based coloring - exaggerate for visibility
    float heightFactor = clamp(vHeight * 2.0 + 0.5, 0.0, 1.0);
    vec3 baseColor = mix(uDeepColor, uWaterColor, heightFactor);

    // Wave peaks are lighter
    float peakHighlight = smoothstep(0.0, 0.3, vHeight) * 0.4;
    baseColor += vec3(0.1, 0.2, 0.3) * peakHighlight;

    // Wave troughs are darker
    float troughShadow = smoothstep(0.0, -0.3, vHeight) * 0.3;
    baseColor -= vec3(0.05, 0.1, 0.15) * troughShadow;

    // Normal-based shading - tilted surfaces catch light differently
    float normalShade = (normal.x * 0.3 + normal.z * 0.2) * 0.5 + 0.5;
    baseColor *= mix(0.8, 1.2, normalShade);

    // Fresnel rim lighting
    float fresnel = 1.0 - abs(normal.y);
    fresnel = pow(fresnel, 3.0);

    // Subtle caustics in troughs
    float caustic = sin(vUv.x * 40.0 + uTime * 2.0) * sin(vUv.y * 40.0 + uTime * 1.7);
    caustic = caustic * 0.5 + 0.5;
    caustic *= (1.0 - heightFactor) * 0.15;

    // Combine all effects
    vec3 color = baseColor;
    color += (diffuse1 + diffuse2) * 0.2;
    color += spec1 * uHighlightColor * 1.2;
    color += spec2 * uHighlightColor * 0.4;
    color += fresnel * uHighlightColor * 0.3;
    color += caustic * vec3(0.2, 0.4, 0.6);

    // Edge darkening (bucket walls)
    float edge = min(min(vUv.x, 1.0 - vUv.x), min(vUv.y, 1.0 - vUv.y));
    float vignette = smoothstep(0.0, 0.1, edge);
    color *= mix(0.4, 1.0, vignette);

    gl_FragColor = vec4(color, 1.0);
  }
`

interface WaterSurfaceProps {
  tilt: { x: number; y: number }
  onReady?: () => void
}

export default function WaterSurface({ tilt, onReady }: WaterSurfaceProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const materialRef = useRef<THREE.ShaderMaterial>(null)
  const gpuComputeRef = useRef<GPUComputationRenderer | null>(null)
  const heightmapVarRef = useRef<{ material: THREE.ShaderMaterial } | null>(null)
  const prevTiltRef = useRef({ x: 0, y: 0 })
  const autoTiltRef = useRef({ x: 0, y: 0 })
  const lastDropTimeRef = useRef(0)

  const { gl, viewport } = useThree()

  // Water material uniforms
  const uniforms = useMemo(() => ({
    uHeightmap: { value: null as THREE.Texture | null },
    uHeightScale: { value: 0.5 }, // Balanced for visible but smooth waves
    uWaterColor: { value: new THREE.Color(0x2288cc) },
    uDeepColor: { value: new THREE.Color(0x0a4060) },
    uHighlightColor: { value: new THREE.Color(0xccffff) },
    uTime: { value: 0 },
  }), [])

  // Initialize GPGPU
  useEffect(() => {
    // iOS compatibility
    const isWebGL2 = gl.capabilities.isWebGL2
    const floatSupport = gl.extensions.get('EXT_color_buffer_float')
    const textureType = isWebGL2 && floatSupport ? THREE.FloatType : THREE.HalfFloatType

    const gpuCompute = new GPUComputationRenderer(WIDTH, WIDTH, gl)
    gpuCompute.setDataType(textureType)

    // Initialize heightmap with visible initial waves
    const heightmap0 = gpuCompute.createTexture()
    const data = heightmap0.image.data as Float32Array
    for (let i = 0; i < data.length; i += 4) {
      const x = (i / 4) % WIDTH
      const y = Math.floor((i / 4) / WIDTH)
      const ux = x / WIDTH
      const uy = y / WIDTH
      // Create initial concentric ripples from center
      const dist = Math.sqrt((ux - 0.5) ** 2 + (uy - 0.5) ** 2)
      const wave = Math.sin(dist * 20) * Math.exp(-dist * 3) * 0.1
      data[i] = wave + (Math.random() - 0.5) * 0.01 // height
      data[i + 1] = 0 // velocity
      data[i + 2] = 0
      data[i + 3] = 1
    }

    const heightmapVar = gpuCompute.addVariable('heightmap', heightmapShader, heightmap0)
    gpuCompute.setVariableDependencies(heightmapVar, [heightmapVar])

    // Set uniforms - tuned for smooth, visible waves
    heightmapVar.material.uniforms.uTilt = { value: new THREE.Vector2(0, 0) }
    heightmapVar.material.uniforms.uTiltVelocity = { value: new THREE.Vector2(0, 0) }
    heightmapVar.material.uniforms.uDamping = { value: 0.985 } // More damping for smoother waves
    heightmapVar.material.uniforms.uWaveSpeed = { value: 0.3 } // Slower propagation
    heightmapVar.material.uniforms.uTime = { value: 0 }
    heightmapVar.material.uniforms.uDropPos = { value: new THREE.Vector2(-1, -1) }
    heightmapVar.material.uniforms.uDropStrength = { value: 0 }

    const error = gpuCompute.init()
    if (error) {
      console.error('GPGPU error:', error)
      return
    }

    gpuComputeRef.current = gpuCompute
    heightmapVarRef.current = heightmapVar

    onReady?.()

    return () => gpuCompute.dispose()
  }, [gl, onReady])

  // Animation loop
  useFrame((state) => {
    const gpuCompute = gpuComputeRef.current
    const heightmapVar = heightmapVarRef.current
    const time = state.clock.elapsedTime

    if (!gpuCompute || !heightmapVar) return

    // Auto-animate tilt for desktop testing when no device tilt input
    const hasDeviceTilt = Math.abs(tilt.x) > 0.01 || Math.abs(tilt.y) > 0.01

    let effectiveTilt = { ...tilt }
    if (!hasDeviceTilt) {
      // Gentle oscillating tilt to create smooth waves
      autoTiltRef.current.x = Math.sin(time * 0.5) * 0.15 + Math.sin(time * 0.8) * 0.08
      autoTiltRef.current.y = Math.cos(time * 0.4) * 0.12 + Math.cos(time * 0.7) * 0.06
      effectiveTilt = autoTiltRef.current
    }

    // Calculate tilt velocity (for impulse generation)
    const tiltVelocity = {
      x: effectiveTilt.x - prevTiltRef.current.x,
      y: effectiveTilt.y - prevTiltRef.current.y,
    }
    prevTiltRef.current = { ...effectiveTilt }

    // Update simulation uniforms
    heightmapVar.material.uniforms.uTilt.value.set(effectiveTilt.x, effectiveTilt.y)
    heightmapVar.material.uniforms.uTiltVelocity.value.set(
      tiltVelocity.x * 15,
      tiltVelocity.y * 15
    )
    heightmapVar.material.uniforms.uTime.value = time

    // Periodic rain drops for visual interest
    const dropInterval = 1.5 // seconds between drops
    if (time - lastDropTimeRef.current > dropInterval) {
      lastDropTimeRef.current = time
      heightmapVar.material.uniforms.uDropPos.value.set(
        0.15 + Math.random() * 0.7,
        0.15 + Math.random() * 0.7
      )
      heightmapVar.material.uniforms.uDropStrength.value = 1.0 + Math.random() * 0.5
    } else if (time - lastDropTimeRef.current > 0.15) {
      // Reset drop after a short time
      heightmapVar.material.uniforms.uDropStrength.value = 0
    }

    // Run simulation
    gpuCompute.compute()

    // Update water material
    if (materialRef.current) {
      materialRef.current.uniforms.uHeightmap.value =
        gpuCompute.getCurrentRenderTarget(heightmapVar).texture
      materialRef.current.uniforms.uTime.value = time
    }
  })

  // Size to fill viewport
  const size = Math.max(viewport.width, viewport.height) * 1.2

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[size, size, MESH_RES, MESH_RES]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={waterVertexShader}
        fragmentShader={waterFragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  )
}
