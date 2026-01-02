import { useRef, useEffect, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { GPUComputationRenderer } from 'three/examples/jsm/misc/GPUComputationRenderer.js'

// Based on Three.js official GPGPU water example
// https://threejs.org/examples/webgl_gpgpu_water.html

const WIDTH = 128 // Simulation resolution
const BOUNDS = 512 // Water surface size

// Heightmap simulation shader - proper wave equation
// Stores: x = current height, y = previous height
const heightmapShader = `
  uniform vec2 uMousePos;
  uniform float uMouseSize;
  uniform float uViscosity;
  uniform float uDropStrength;
  uniform vec2 uTilt;

  #define PI 3.141592653589793

  void main() {
    vec2 cellSize = 1.0 / resolution.xy;
    vec2 uv = gl_FragCoord.xy * cellSize;

    // Get current and neighboring heights
    vec4 heightmapValue = texture2D(heightmap, uv);
    vec4 north = texture2D(heightmap, uv + vec2(0.0, cellSize.y));
    vec4 south = texture2D(heightmap, uv + vec2(0.0, -cellSize.y));
    vec4 east = texture2D(heightmap, uv + vec2(cellSize.x, 0.0));
    vec4 west = texture2D(heightmap, uv + vec2(-cellSize.x, 0.0));

    // Wave equation: new height = (average of neighbors * 2 - previous) * damping
    // This creates proper wave propagation with interference patterns
    float newHeight = ((north.x + south.x + east.x + west.x) * 0.5 - heightmapValue.y) * uViscosity;

    // Add tilt-based gravity effect - water flows to the lower side
    // This creates the "sloshing" effect when the phone is tilted
    vec2 pos = (uv - 0.5) * 2.0; // -1 to 1
    float tiltForce = dot(pos, uTilt) * 0.015; // Much stronger tilt response
    newHeight += tiltForce;

    // Add velocity from tilt changes (creates waves when tilting quickly)
    float tiltMagnitude = length(uTilt);
    if (tiltMagnitude > 0.1) {
      // Push water away from the high side
      vec2 tiltDir = normalize(uTilt);
      float edgeWave = max(0.0, dot(pos, tiltDir) + 0.3);
      newHeight += edgeWave * tiltMagnitude * 0.02;
    }

    // Mouse/touch interaction - create ripples
    if (uMousePos.x > -0.4) {
      float mousePhase = clamp(
        length((uv - vec2(0.5)) * float(${BOUNDS}) - vec2(uMousePos.x, -uMousePos.y)) * PI / uMouseSize,
        0.0,
        PI
      );
      newHeight -= (cos(mousePhase) + 1.0) * uDropStrength;
    }

    // Boundary conditions - dampen at edges
    float edgeDist = min(min(uv.x, 1.0 - uv.x), min(uv.y, 1.0 - uv.y));
    float edgeDamping = smoothstep(0.0, 0.05, edgeDist);
    newHeight *= edgeDamping;

    // Store: x = new height, y = old height (for next frame)
    heightmapValue.y = heightmapValue.x;
    heightmapValue.x = newHeight;

    gl_FragColor = heightmapValue;
  }
`

// Water vertex shader - displace vertices based on heightmap
const waterVertexShader = `
  uniform sampler2D uHeightmap;

  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vViewPosition;
  varying float vHeight;

  void main() {
    vUv = uv;

    // Sample height
    float heightValue = texture2D(uHeightmap, uv).x;
    vHeight = heightValue;

    // Calculate normal from heightmap gradient
    vec2 cellSize = vec2(1.0 / ${WIDTH}.0, 1.0 / ${WIDTH}.0);
    float hL = texture2D(uHeightmap, uv - vec2(cellSize.x, 0.0)).x;
    float hR = texture2D(uHeightmap, uv + vec2(cellSize.x, 0.0)).x;
    float hD = texture2D(uHeightmap, uv - vec2(0.0, cellSize.y)).x;
    float hU = texture2D(uHeightmap, uv + vec2(0.0, cellSize.y)).x;

    vec3 objectNormal = normalize(vec3(
      (hL - hR) * ${WIDTH}.0 / ${BOUNDS}.0,
      (hD - hU) * ${WIDTH}.0 / ${BOUNDS}.0,
      1.0
    ));
    vNormal = normalMatrix * objectNormal;

    // Displace vertex
    vec3 transformed = vec3(position.x, position.y, heightValue);

    vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.0);
    vViewPosition = -mvPosition.xyz;

    gl_Position = projectionMatrix * mvPosition;
  }
`

// Water fragment shader - realistic pool/bucket water
const waterFragmentShader = `
  uniform vec3 uWaterColor;
  uniform vec3 uDeepColor;
  uniform float uTime;

  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vViewPosition;
  varying float vHeight;

  void main() {
    vec3 normal = normalize(vNormal);
    vec3 viewDir = normalize(vViewPosition);

    // Base water color - deeper blue where water is lower
    float depthFactor = smoothstep(-15.0, 15.0, vHeight);
    vec3 waterBase = mix(uDeepColor, uWaterColor, depthFactor * 0.7 + 0.3);

    // Subtle gradient based on surface normal tilt
    float normalTilt = (normal.x + normal.y) * 0.5;
    waterBase += normalTilt * vec3(0.02, 0.05, 0.08);

    // Soft diffuse lighting from above
    vec3 lightDir = normalize(vec3(0.2, 0.2, 1.0));
    float diffuse = max(dot(normal, lightDir), 0.0);
    waterBase *= 0.7 + diffuse * 0.4;

    // Gentle specular highlights - not too sharp
    vec3 halfDir = normalize(lightDir + viewDir);
    float spec = pow(max(dot(normal, halfDir), 0.0), 64.0);
    vec3 specular = vec3(0.9, 0.95, 1.0) * spec * 0.5;

    // Second softer specular
    vec3 lightDir2 = normalize(vec3(-0.3, 0.1, 0.9));
    vec3 halfDir2 = normalize(lightDir2 + viewDir);
    float spec2 = pow(max(dot(normal, halfDir2), 0.0), 32.0);
    specular += vec3(0.7, 0.8, 0.9) * spec2 * 0.3;

    // Fresnel - subtle edge brightening
    float fresnel = pow(1.0 - max(dot(viewDir, normal), 0.0), 2.0);
    fresnel = fresnel * 0.3;

    // Combine
    vec3 color = waterBase;
    color += specular;
    color = mix(color, vec3(0.4, 0.6, 0.8), fresnel);

    // Caustic pattern on the "bottom" - visible through water
    float caustic1 = sin(vUv.x * 40.0 + uTime * 0.5) * sin(vUv.y * 40.0 + uTime * 0.3);
    float caustic2 = sin(vUv.x * 30.0 - uTime * 0.4) * sin(vUv.y * 35.0 - uTime * 0.6);
    float caustics = (caustic1 + caustic2) * 0.25 + 0.5;
    caustics = caustics * 0.08 * (1.0 - depthFactor * 0.5);
    color += caustics * vec3(0.1, 0.2, 0.3);

    // Darken edges (bucket/pool walls)
    float edge = min(min(vUv.x, 1.0 - vUv.x), min(vUv.y, 1.0 - vUv.y));
    float vignette = smoothstep(0.0, 0.1, edge);
    color *= mix(0.3, 1.0, vignette);

    // Slightly desaturate for more natural look
    float gray = dot(color, vec3(0.299, 0.587, 0.114));
    color = mix(vec3(gray), color, 0.85);

    gl_FragColor = vec4(color, 1.0);
  }
`

interface WaterSurfaceProps {
  tiltRef: React.RefObject<{ x: number; y: number }>
  onReady?: () => void
}

export default function WaterSurface({ tiltRef, onReady }: WaterSurfaceProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const materialRef = useRef<THREE.ShaderMaterial>(null)
  const gpuComputeRef = useRef<GPUComputationRenderer | null>(null)
  const heightmapVarRef = useRef<ReturnType<GPUComputationRenderer['addVariable']> | null>(null)

  const mousePosRef = useRef({ x: -1000, y: -1000 })
  const lastDropRef = useRef(0)
  const autoAnimRef = useRef(0)

  const { gl, viewport } = useThree()

  // Water material uniforms
  const uniforms = useMemo(() => ({
    uHeightmap: { value: null as THREE.Texture | null },
    uWaterColor: { value: new THREE.Color(0x0077be) },
    uDeepColor: { value: new THREE.Color(0x001e3c) },
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

    // Initialize heightmap with some noise for initial ripples
    const heightmap0 = gpuCompute.createTexture()
    const data = heightmap0.image.data as Float32Array

    for (let i = 0; i < data.length; i += 4) {
      const x = (i / 4) % WIDTH
      const y = Math.floor((i / 4) / WIDTH)

      // Create initial wave pattern
      const nx = x / WIDTH - 0.5
      const ny = y / WIDTH - 0.5
      const dist = Math.sqrt(nx * nx + ny * ny)

      // Concentric ripples from center
      const ripple = Math.sin(dist * 30) * Math.exp(-dist * 4) * 15
      // Add some random noise
      const noise = (Math.random() - 0.5) * 2

      data[i] = ripple + noise     // current height
      data[i + 1] = ripple + noise // previous height (same initially)
      data[i + 2] = 0
      data[i + 3] = 1
    }

    const heightmapVar = gpuCompute.addVariable('heightmap', heightmapShader, heightmap0)
    gpuCompute.setVariableDependencies(heightmapVar, [heightmapVar])

    // Set uniforms
    heightmapVar.material.uniforms.uMousePos = { value: new THREE.Vector2(-1000, -1000) }
    heightmapVar.material.uniforms.uMouseSize = { value: 40.0 }
    heightmapVar.material.uniforms.uViscosity = { value: 0.98 }
    heightmapVar.material.uniforms.uDropStrength = { value: 0.0 }
    heightmapVar.material.uniforms.uTilt = { value: new THREE.Vector2(0, 0) }

    const error = gpuCompute.init()
    if (error !== null) {
      console.error('GPGPU error:', error)
      return
    }

    gpuComputeRef.current = gpuCompute
    heightmapVarRef.current = heightmapVar

    onReady?.()

    return () => {
      gpuCompute.dispose()
    }
  }, [gl, onReady])

  // Animation loop
  useFrame((state) => {
    const gpuCompute = gpuComputeRef.current
    const heightmapVar = heightmapVarRef.current
    const time = state.clock.elapsedTime

    if (!gpuCompute || !heightmapVar) return

    // Read tilt from ref (updated by deviceorientation events)
    const tilt = tiltRef.current
    const hasDeviceTilt = tilt && (Math.abs(tilt.x) > 0.02 || Math.abs(tilt.y) > 0.02)

    if (hasDeviceTilt && tilt) {
      // Apply device tilt with amplification
      heightmapVar.material.uniforms.uTilt.value.set(tilt.x * 1.5, tilt.y * 1.5)
    } else {
      // Auto-animate for desktop - more dramatic sloshing
      const autoTiltX = Math.sin(time * 0.5) * 0.5 + Math.sin(time * 0.9) * 0.25
      const autoTiltY = Math.cos(time * 0.4) * 0.4 + Math.cos(time * 0.8) * 0.2
      heightmapVar.material.uniforms.uTilt.value.set(autoTiltX, autoTiltY)
    }

    // Periodic drops for visual interest
    const dropInterval = 2.0
    if (time - lastDropRef.current > dropInterval) {
      lastDropRef.current = time

      // Random position for drop
      const dropX = (Math.random() - 0.5) * BOUNDS * 0.7
      const dropY = (Math.random() - 0.5) * BOUNDS * 0.7

      heightmapVar.material.uniforms.uMousePos.value.set(dropX, dropY)
      heightmapVar.material.uniforms.uDropStrength.value = 3.0 + Math.random() * 2.0
      heightmapVar.material.uniforms.uMouseSize.value = 30 + Math.random() * 30
    } else if (time - lastDropRef.current > 0.1) {
      // Reset drop
      heightmapVar.material.uniforms.uDropStrength.value = 0
    }

    // Run simulation (multiple steps for stability)
    for (let i = 0; i < 2; i++) {
      gpuCompute.compute()
    }

    // Update water material
    if (materialRef.current) {
      materialRef.current.uniforms.uHeightmap.value =
        gpuCompute.getCurrentRenderTarget(heightmapVar).texture
      materialRef.current.uniforms.uTime.value = time
    }
  })

  // Size to fill viewport
  const size = Math.max(viewport.width, viewport.height) * 1.5

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[size, size, WIDTH - 1, WIDTH - 1]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={waterVertexShader}
        fragmentShader={waterFragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  )
}
