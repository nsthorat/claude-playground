import { useRef, useMemo, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

interface OceanProps {
  tilt: { x: number; y: number }
  onReady?: () => void
}

// Gerstner wave parameters for realistic ocean
const WAVE_PARAMS = [
  { amplitude: 0.15, wavelength: 8, speed: 1.2, direction: [1, 0] },
  { amplitude: 0.1, wavelength: 5, speed: 0.9, direction: [0.7, 0.7] },
  { amplitude: 0.08, wavelength: 3, speed: 1.5, direction: [-0.5, 0.8] },
  { amplitude: 0.05, wavelength: 2, speed: 2.0, direction: [0.3, -0.9] },
  { amplitude: 0.03, wavelength: 1.5, speed: 2.5, direction: [-0.8, -0.5] },
]

const vertexShader = `
  uniform float uTime;
  uniform vec2 uTilt;
  uniform float uWaveAmplitudes[5];
  uniform float uWavelengths[5];
  uniform float uSpeeds[5];
  uniform vec2 uDirections[5];

  varying vec3 vWorldPosition;
  varying vec3 vNormal;
  varying float vHeight;

  // Gerstner wave function
  vec3 gerstnerWave(vec2 pos, float amplitude, float wavelength, float speed, vec2 direction, float time) {
    float k = 2.0 * 3.14159 / wavelength;
    float c = sqrt(9.8 / k); // Phase speed
    vec2 d = normalize(direction);
    float f = k * (dot(d, pos) - c * speed * time);
    float a = amplitude;

    // Steepness (Q factor)
    float Q = 0.5;

    return vec3(
      Q * a * d.x * cos(f),
      a * sin(f),
      Q * a * d.y * cos(f)
    );
  }

  void main() {
    vec3 pos = position;
    vec3 tangent = vec3(1.0, 0.0, 0.0);
    vec3 binormal = vec3(0.0, 0.0, 1.0);

    // Apply tilt influence to wave directions
    vec2 tiltInfluence = uTilt * 0.5;

    // Sum all Gerstner waves
    for (int i = 0; i < 5; i++) {
      vec2 dir = uDirections[i] + tiltInfluence;
      vec3 wave = gerstnerWave(
        pos.xz,
        uWaveAmplitudes[i],
        uWavelengths[i],
        uSpeeds[i],
        dir,
        uTime
      );

      pos += wave;

      // Calculate tangent and binormal for normal computation
      float k = 2.0 * 3.14159 / uWavelengths[i];
      float c = sqrt(9.8 / k);
      vec2 d = normalize(dir);
      float f = k * (dot(d, position.xz) - c * uSpeeds[i] * uTime);
      float Q = 0.5;
      float a = uWaveAmplitudes[i];

      tangent += vec3(
        -Q * a * k * d.x * d.x * sin(f),
        a * k * d.x * cos(f),
        -Q * a * k * d.x * d.y * sin(f)
      );

      binormal += vec3(
        -Q * a * k * d.x * d.y * sin(f),
        a * k * d.y * cos(f),
        -Q * a * k * d.y * d.y * sin(f)
      );
    }

    vNormal = normalize(cross(binormal, tangent));
    vHeight = pos.y;
    vWorldPosition = (modelMatrix * vec4(pos, 1.0)).xyz;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`

const fragmentShader = `
  uniform float uTime;
  uniform vec3 uDeepColor;
  uniform vec3 uShallowColor;
  uniform vec3 uFoamColor;
  uniform vec3 uSkyColor;
  uniform vec3 uSunDirection;

  varying vec3 vWorldPosition;
  varying vec3 vNormal;
  varying float vHeight;

  void main() {
    vec3 normal = normalize(vNormal);
    vec3 viewDir = normalize(cameraPosition - vWorldPosition);
    vec3 sunDir = normalize(uSunDirection);

    // Fresnel effect for realistic water reflection
    float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 4.0);
    fresnel = mix(0.02, 1.0, fresnel);

    // Water color based on depth/viewing angle
    float depthFactor = smoothstep(-0.3, 0.3, vHeight);
    vec3 waterColor = mix(uDeepColor, uShallowColor, depthFactor);

    // Sky reflection
    vec3 reflectDir = reflect(-viewDir, normal);
    float skyGradient = reflectDir.y * 0.5 + 0.5;
    vec3 skyReflection = mix(uSkyColor * 0.3, uSkyColor, skyGradient);

    // Sun specular
    vec3 halfDir = normalize(sunDir + viewDir);
    float sunSpec = pow(max(dot(normal, halfDir), 0.0), 256.0);
    vec3 sunColor = vec3(1.0, 0.95, 0.8) * sunSpec * 2.0;

    // Secondary specular (broader)
    float spec2 = pow(max(dot(normal, halfDir), 0.0), 32.0);
    sunColor += vec3(1.0, 0.9, 0.7) * spec2 * 0.5;

    // Foam on wave crests
    float foam = smoothstep(0.1, 0.2, vHeight);
    foam *= foam;

    // Subsurface scattering approximation
    float sss = pow(max(dot(-sunDir, normal), 0.0), 2.0) * 0.4;
    vec3 sssColor = uShallowColor * sss;

    // Combine all effects
    vec3 color = mix(waterColor, skyReflection, fresnel * 0.7);
    color += sunColor;
    color += sssColor;
    color = mix(color, uFoamColor, foam * 0.6);

    // Slight distance fog for depth
    float dist = length(vWorldPosition - cameraPosition);
    float fog = 1.0 - exp(-dist * 0.01);
    color = mix(color, uSkyColor * 0.2, fog * 0.5);

    gl_FragColor = vec4(color, 1.0);
  }
`

export default function Ocean({ tilt, onReady }: OceanProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const materialRef = useRef<THREE.ShaderMaterial>(null)
  const { viewport } = useThree()

  // Create uniforms
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uTilt: { value: new THREE.Vector2(0, 0) },
      uWaveAmplitudes: { value: WAVE_PARAMS.map((w) => w.amplitude) },
      uWavelengths: { value: WAVE_PARAMS.map((w) => w.wavelength) },
      uSpeeds: { value: WAVE_PARAMS.map((w) => w.speed) },
      uDirections: {
        value: WAVE_PARAMS.map(
          (w) => new THREE.Vector2(w.direction[0], w.direction[1])
        ),
      },
      uDeepColor: { value: new THREE.Color(0x001030) },
      uShallowColor: { value: new THREE.Color(0x0066aa) },
      uFoamColor: { value: new THREE.Color(0xaaddff) },
      uSkyColor: { value: new THREE.Color(0x102040) },
      uSunDirection: { value: new THREE.Vector3(0.5, 0.8, 0.3).normalize() },
    }),
    []
  )

  // Signal ready
  useEffect(() => {
    const timer = setTimeout(() => onReady?.(), 100)
    return () => clearTimeout(timer)
  }, [onReady])

  // Update uniforms each frame
  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime
      materialRef.current.uniforms.uTilt.value.set(tilt.x, tilt.y)
    }
  })

  // Calculate plane size to fill viewport
  const planeSize = Math.max(viewport.width, viewport.height) * 8

  return (
    <mesh
      ref={meshRef}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, 0, 0]}
    >
      <planeGeometry args={[planeSize, planeSize, 256, 256]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}
