import { useEffect, useRef, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Mic, MicOff, Sparkles, Dna } from 'lucide-react'
import * as THREE from 'three'
import { EffectComposer, RenderPass, EffectPass, BloomEffect, ChromaticAberrationEffect } from 'postprocessing'
import { cn } from '@/lib/utils'

type VisualizerMode = 'galaxy' | 'dna'

// Simplex noise implementation for shaders
const noiseGLSL = `
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
  const vec2 C = vec2(1.0/6.0, 1.0/3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod289(i);
  vec4 p = permute(permute(permute(
    i.z + vec4(0.0, i1.z, i2.z, 1.0))
    + i.y + vec4(0.0, i1.y, i2.y, 1.0))
    + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}
`

// Galaxy vertex shader
const galaxyVertexShader = `
${noiseGLSL}

uniform float uTime;
uniform float uBass;
uniform float uMid;
uniform float uHigh;
uniform float uAudioLevel;
uniform vec2 uOrientation;

attribute float aSize;
attribute float aRandom;

varying vec3 vColor;
varying float vAlpha;
varying float vDistance;

void main() {
  vec3 pos = position;

  // Calculate distance from center for effects
  float dist = length(pos.xz);
  vDistance = dist;

  // Multi-layered noise displacement
  float noise1 = snoise(pos * 0.1 + uTime * 0.2) * uBass * 8.0;
  float noise2 = snoise(pos * 0.3 + uTime * 0.5) * uMid * 4.0;
  float noise3 = snoise(pos * 0.8 + uTime * 1.0) * uHigh * 2.0;

  // Vertical wave based on distance and audio
  float wave = sin(dist * 0.3 - uTime * 2.0) * uBass * 5.0;

  // Apply displacement
  pos.y += noise1 + noise2 + wave;
  pos.x += noise2 * 0.5;
  pos.z += noise3 * 0.5;

  // Spiral twist based on audio
  float angle = atan(pos.z, pos.x);
  float newAngle = angle + uAudioLevel * 0.5 + uTime * 0.1;
  float radius = length(pos.xz);
  pos.x = cos(newAngle) * radius;
  pos.z = sin(newAngle) * radius;

  // Orientation-based rotation
  pos.xz = mat2(cos(uOrientation.y * 0.3), -sin(uOrientation.y * 0.3),
                sin(uOrientation.y * 0.3), cos(uOrientation.y * 0.3)) * pos.xz;
  pos.yz = mat2(cos(uOrientation.x * 0.3), -sin(uOrientation.x * 0.3),
                sin(uOrientation.x * 0.3), cos(uOrientation.x * 0.3)) * pos.yz;

  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mvPosition;

  // Size based on audio and distance
  float sizeMod = 1.0 + uBass * 2.0 + uHigh * sin(aRandom * 100.0 + uTime * 5.0);
  gl_PointSize = aSize * sizeMod * (200.0 / -mvPosition.z);

  // Color: cycle through hues based on position, time, and audio
  float hue = fract(dist * 0.02 + uTime * 0.1 + uAudioLevel * 0.5);
  float saturation = 0.8 + uMid * 0.2;
  float lightness = 0.5 + uHigh * 0.3;

  // HSL to RGB conversion
  float c = (1.0 - abs(2.0 * lightness - 1.0)) * saturation;
  float x = c * (1.0 - abs(mod(hue * 6.0, 2.0) - 1.0));
  float m = lightness - c / 2.0;
  vec3 rgb;
  if (hue < 1.0/6.0) rgb = vec3(c, x, 0.0);
  else if (hue < 2.0/6.0) rgb = vec3(x, c, 0.0);
  else if (hue < 3.0/6.0) rgb = vec3(0.0, c, x);
  else if (hue < 4.0/6.0) rgb = vec3(0.0, x, c);
  else if (hue < 5.0/6.0) rgb = vec3(x, 0.0, c);
  else rgb = vec3(c, 0.0, x);
  vColor = rgb + m;

  vAlpha = 0.6 + uAudioLevel * 0.4;
}
`

// Galaxy fragment shader
const galaxyFragmentShader = `
varying vec3 vColor;
varying float vAlpha;
varying float vDistance;

void main() {
  // Circular particle with soft edges
  vec2 center = gl_PointCoord - 0.5;
  float dist = length(center);
  if (dist > 0.5) discard;

  float alpha = smoothstep(0.5, 0.0, dist) * vAlpha;

  // Add glow
  vec3 glow = vColor * (1.0 - dist * 1.5);

  gl_FragColor = vec4(glow, alpha);
}
`

// DNA vertex shader
const dnaVertexShader = `
${noiseGLSL}

uniform float uTime;
uniform float uBass;
uniform float uMid;
uniform float uHigh;
uniform float uAudioLevel;
uniform vec2 uOrientation;
uniform float uFrequencyData[64];

varying vec3 vNormal;
varying vec3 vPosition;
varying float vFreq;
varying float vIndex;

void main() {
  vNormal = normalize(normalMatrix * normal);
  vIndex = position.y;

  vec3 pos = position;

  // Get frequency for this vertex based on Y position
  int freqIndex = int(mod(abs(position.y) * 2.0, 64.0));
  float freq = uFrequencyData[freqIndex];
  vFreq = freq;

  // Pulse outward based on frequency
  float pulse = 1.0 + freq * 0.5 + uBass * 0.3;
  pos.x *= pulse;
  pos.z *= pulse;

  // Wave distortion
  float wave = sin(position.y * 0.5 + uTime * 3.0) * uMid * 2.0;
  pos.x += wave;
  pos.z += cos(position.y * 0.5 + uTime * 3.0) * uMid * 2.0;

  // Noise displacement
  float noise = snoise(pos * 0.2 + uTime * 0.5) * uHigh * 3.0;
  pos += normal * noise;

  // Orientation-based rotation
  pos.xz = mat2(cos(uOrientation.y * 0.5), -sin(uOrientation.y * 0.5),
                sin(uOrientation.y * 0.5), cos(uOrientation.y * 0.5)) * pos.xz;
  pos.yz = mat2(cos(uOrientation.x * 0.3), -sin(uOrientation.x * 0.3),
                sin(uOrientation.x * 0.3), cos(uOrientation.x * 0.3)) * pos.yz;

  vPosition = pos;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`

// DNA fragment shader with iridescence
const dnaFragmentShader = `
uniform float uTime;
uniform float uBass;
uniform float uMid;
uniform float uHigh;
uniform float uAudioLevel;
uniform vec3 uCameraPosition;

varying vec3 vNormal;
varying vec3 vPosition;
varying float vFreq;
varying float vIndex;

vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

void main() {
  vec3 viewDir = normalize(uCameraPosition - vPosition);

  // Fresnel effect
  float fresnel = pow(1.0 - max(0.0, dot(viewDir, vNormal)), 3.0);

  // Iridescent color based on view angle and position
  float hue = fract(
    fresnel * 0.5 +
    vIndex * 0.02 +
    uTime * 0.2 +
    uAudioLevel * 0.3
  );

  float saturation = 0.8 + vFreq * 0.2;
  float brightness = 0.6 + fresnel * 0.4 + vFreq * 0.3;

  vec3 color = hsv2rgb(vec3(hue, saturation, brightness));

  // Add rim glow
  vec3 rimColor = hsv2rgb(vec3(fract(hue + 0.3), 1.0, 1.0));
  color += rimColor * fresnel * (0.5 + uBass);

  // Pulsing alpha
  float alpha = 0.7 + fresnel * 0.3 + uAudioLevel * 0.2;

  gl_FragColor = vec4(color, alpha);
}
`

// Kaleidoscope shader
const kaleidoscopeShader = `
uniform sampler2D tDiffuse;
uniform float uSegments;
uniform float uTime;
uniform float uAudioLevel;

varying vec2 vUv;

void main() {
  vec2 uv = vUv - 0.5;

  // Convert to polar coordinates
  float angle = atan(uv.y, uv.x);
  float radius = length(uv);

  // Add rotation based on time and audio
  angle += uTime * 0.2 + uAudioLevel * 0.5;

  // Kaleidoscope effect
  float segmentAngle = 3.14159 * 2.0 / uSegments;
  angle = mod(angle, segmentAngle);
  if (mod(floor(atan(uv.y, uv.x) / segmentAngle), 2.0) == 1.0) {
    angle = segmentAngle - angle;
  }

  // Convert back to cartesian
  vec2 newUv = vec2(cos(angle), sin(angle)) * radius + 0.5;

  // Add slight distortion based on audio
  newUv += vec2(
    sin(newUv.y * 10.0 + uTime) * uAudioLevel * 0.02,
    cos(newUv.x * 10.0 + uTime) * uAudioLevel * 0.02
  );

  gl_FragColor = texture2D(tDiffuse, newUv);
}
`

// Feedback shader for trails
const feedbackShader = `
uniform sampler2D tDiffuse;
uniform sampler2D tFeedback;
uniform float uFeedbackAmount;
uniform float uTime;

varying vec2 vUv;

void main() {
  vec4 current = texture2D(tDiffuse, vUv);

  // Slight zoom/rotation for feedback
  vec2 feedbackUv = (vUv - 0.5) * 0.99 + 0.5;
  feedbackUv = mat2(
    cos(0.005), -sin(0.005),
    sin(0.005), cos(0.005)
  ) * (feedbackUv - 0.5) + 0.5;

  vec4 feedback = texture2D(tFeedback, feedbackUv);

  // Color shift on feedback
  feedback.rgb = feedback.gbr * 0.99;

  // Blend
  gl_FragColor = mix(current, feedback, uFeedbackAmount);
}
`

export default function AudioVisualizer() {
  const containerRef = useRef<HTMLDivElement>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const composerRef = useRef<EffectComposer | null>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const analyserRef = useRef<AnalyserNode | null>(null)
  const audioContextRef = useRef<AudioContext | null>(null)
  const animationIdRef = useRef<number>(0)
  const galaxyRef = useRef<THREE.Points | null>(null)
  const dnaRef = useRef<THREE.Group | null>(null)
  const clockRef = useRef(new THREE.Clock())
  const orientationRef = useRef({ x: 0, y: 0 })
  const feedbackTargetRef = useRef<THREE.WebGLRenderTarget | null>(null)
  const feedbackTarget2Ref = useRef<THREE.WebGLRenderTarget | null>(null)
  const kaleidoscopeMaterialRef = useRef<THREE.ShaderMaterial | null>(null)
  const feedbackMaterialRef = useRef<THREE.ShaderMaterial | null>(null)
  const feedbackSceneRef = useRef<THREE.Scene | null>(null)
  const feedbackCameraRef = useRef<THREE.OrthographicCamera | null>(null)

  const [isListening, setIsListening] = useState(false)
  const [mode, setMode] = useState<VisualizerMode>('galaxy')
  const [error, setError] = useState<string | null>(null)

  // Initialize Three.js scene
  const initScene = useCallback(() => {
    if (!containerRef.current) return

    // Scene
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x000005)
    sceneRef.current = scene

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    )
    camera.position.z = 60
    cameraRef.current = camera

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance'
    })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.5
    containerRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Feedback render targets
    const feedbackTarget = new THREE.WebGLRenderTarget(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    )
    const feedbackTarget2 = new THREE.WebGLRenderTarget(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    )
    feedbackTargetRef.current = feedbackTarget
    feedbackTarget2Ref.current = feedbackTarget2

    // Feedback scene for ping-pong
    const feedbackScene = new THREE.Scene()
    const feedbackCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
    feedbackSceneRef.current = feedbackScene
    feedbackCameraRef.current = feedbackCamera

    // Kaleidoscope material
    const kaleidoscopeMaterial = new THREE.ShaderMaterial({
      uniforms: {
        tDiffuse: { value: null },
        uSegments: { value: 6.0 },
        uTime: { value: 0 },
        uAudioLevel: { value: 0 }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: kaleidoscopeShader
    })
    kaleidoscopeMaterialRef.current = kaleidoscopeMaterial

    // Feedback material
    const feedbackMaterial = new THREE.ShaderMaterial({
      uniforms: {
        tDiffuse: { value: null },
        tFeedback: { value: null },
        uFeedbackAmount: { value: 0.85 },
        uTime: { value: 0 }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: feedbackShader
    })
    feedbackMaterialRef.current = feedbackMaterial

    const feedbackQuad = new THREE.Mesh(
      new THREE.PlaneGeometry(2, 2),
      feedbackMaterial
    )
    feedbackScene.add(feedbackQuad)

    // Post-processing
    const composer = new EffectComposer(renderer)

    const renderPass = new RenderPass(scene, camera)
    composer.addPass(renderPass)

    // Bloom effect
    const bloomEffect = new BloomEffect({
      luminanceThreshold: 0.1,
      luminanceSmoothing: 0.9,
      intensity: 2.0,
      mipmapBlur: true
    })

    // Chromatic aberration
    const chromaticAberrationEffect = new ChromaticAberrationEffect({
      offset: new THREE.Vector2(0.002, 0.002)
    })

    const effectPass = new EffectPass(camera, bloomEffect, chromaticAberrationEffect)
    composer.addPass(effectPass)

    composerRef.current = composer

    // Create visualizations
    createGalaxy(scene)
    createDNA(scene)

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current || !camera || !renderer || !composer) return
      const width = containerRef.current.clientWidth
      const height = containerRef.current.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
      composer.setSize(width, height)
      feedbackTarget.setSize(width, height)
      feedbackTarget2.setSize(width, height)
    }
    window.addEventListener('resize', handleResize)

    // Device orientation
    const handleOrientation = (event: DeviceOrientationEvent) => {
      if (event.beta !== null && event.gamma !== null) {
        orientationRef.current = {
          x: (event.beta - 45) / 90, // -1 to 1
          y: event.gamma / 90 // -1 to 1
        }
      }
    }

    // Request permission for device orientation (iOS)
    const requestOrientationPermission = async () => {
      if (typeof (DeviceOrientationEvent as unknown as { requestPermission?: () => Promise<string> }).requestPermission === 'function') {
        try {
          const permission = await (DeviceOrientationEvent as unknown as { requestPermission: () => Promise<string> }).requestPermission()
          if (permission === 'granted') {
            window.addEventListener('deviceorientation', handleOrientation)
          }
        } catch {
          // Permission denied or not supported
        }
      } else {
        window.addEventListener('deviceorientation', handleOrientation)
      }
    }
    requestOrientationPermission()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('deviceorientation', handleOrientation)
    }
  }, [])

  // Create particle galaxy with custom shader
  const createGalaxy = (scene: THREE.Scene) => {
    const particleCount = 15000
    const positions = new Float32Array(particleCount * 3)
    const sizes = new Float32Array(particleCount)
    const randoms = new Float32Array(particleCount)

    for (let i = 0; i < particleCount; i++) {
      // Spiral galaxy distribution
      const radius = Math.random() * 50 + 2
      const spinAngle = radius * 0.3
      const branchAngle = ((i % 5) / 5) * Math.PI * 2

      const randomX = (Math.random() - 0.5) * (radius * 0.4) * Math.random()
      const randomY = (Math.random() - 0.5) * (radius * 0.15) * Math.random()
      const randomZ = (Math.random() - 0.5) * (radius * 0.4) * Math.random()

      positions[i * 3] = Math.cos(branchAngle + spinAngle) * radius + randomX
      positions[i * 3 + 1] = randomY
      positions[i * 3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ

      sizes[i] = Math.random() * 3 + 1
      randoms[i] = Math.random()
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1))
    geometry.setAttribute('aRandom', new THREE.BufferAttribute(randoms, 1))

    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uBass: { value: 0 },
        uMid: { value: 0 },
        uHigh: { value: 0 },
        uAudioLevel: { value: 0 },
        uOrientation: { value: new THREE.Vector2(0, 0) }
      },
      vertexShader: galaxyVertexShader,
      fragmentShader: galaxyFragmentShader,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    })

    const particles = new THREE.Points(geometry, material)
    particles.visible = true
    scene.add(particles)
    galaxyRef.current = particles
  }

  // Create DNA helix with custom shader
  const createDNA = (scene: THREE.Scene) => {
    const dnaGroup = new THREE.Group()
    const numPoints = 200
    const helixRadius = 10
    const helixHeight = 80
    const tubeRadius = 0.8

    // Create helix curve points
    const strand1Points: THREE.Vector3[] = []
    const strand2Points: THREE.Vector3[] = []

    for (let i = 0; i < numPoints; i++) {
      const t = i / numPoints
      const y = (t - 0.5) * helixHeight
      const angle = t * Math.PI * 8

      strand1Points.push(new THREE.Vector3(
        Math.cos(angle) * helixRadius,
        y,
        Math.sin(angle) * helixRadius
      ))

      strand2Points.push(new THREE.Vector3(
        Math.cos(angle + Math.PI) * helixRadius,
        y,
        Math.sin(angle + Math.PI) * helixRadius
      ))
    }

    const curve1 = new THREE.CatmullRomCurve3(strand1Points)
    const curve2 = new THREE.CatmullRomCurve3(strand2Points)

    const tubeGeometry1 = new THREE.TubeGeometry(curve1, 200, tubeRadius, 16, false)
    const tubeGeometry2 = new THREE.TubeGeometry(curve2, 200, tubeRadius, 16, false)

    // Frequency data uniform array
    const frequencyData = new Float32Array(64).fill(0)

    const dnaMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uBass: { value: 0 },
        uMid: { value: 0 },
        uHigh: { value: 0 },
        uAudioLevel: { value: 0 },
        uOrientation: { value: new THREE.Vector2(0, 0) },
        uCameraPosition: { value: new THREE.Vector3() },
        uFrequencyData: { value: frequencyData }
      },
      vertexShader: dnaVertexShader,
      fragmentShader: dnaFragmentShader,
      transparent: true,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending
    })

    const strand1 = new THREE.Mesh(tubeGeometry1, dnaMaterial)
    const strand2 = new THREE.Mesh(tubeGeometry2, dnaMaterial.clone())
    dnaGroup.add(strand1)
    dnaGroup.add(strand2)

    // Add connecting rungs
    for (let i = 0; i < numPoints; i += 4) {
      const t = i / numPoints
      const y = (t - 0.5) * helixHeight
      const angle = t * Math.PI * 8

      const rungGeometry = new THREE.CylinderGeometry(0.3, 0.3, helixRadius * 2, 8)
      const rungMaterial = dnaMaterial.clone()
      const rung = new THREE.Mesh(rungGeometry, rungMaterial)
      rung.position.y = y
      rung.rotation.z = Math.PI / 2
      rung.rotation.y = angle
      dnaGroup.add(rung)
    }

    dnaGroup.visible = false
    scene.add(dnaGroup)
    dnaRef.current = dnaGroup
  }

  // Start audio capture
  const startListening = async () => {
    try {
      // Request orientation permission on iOS when starting audio
      if (typeof (DeviceOrientationEvent as unknown as { requestPermission?: () => Promise<string> }).requestPermission === 'function') {
        try {
          await (DeviceOrientationEvent as unknown as { requestPermission: () => Promise<string> }).requestPermission()
        } catch {
          // Continue without orientation
        }
      }

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const audioContext = new AudioContext()
      const source = audioContext.createMediaStreamSource(stream)
      const analyser = audioContext.createAnalyser()

      analyser.fftSize = 256
      analyser.smoothingTimeConstant = 0.8
      source.connect(analyser)

      audioContextRef.current = audioContext
      analyserRef.current = analyser
      setIsListening(true)
      setError(null)
    } catch (err) {
      setError('Microphone access denied')
      console.error('Audio error:', err)
    }
  }

  // Stop audio capture
  const stopListening = () => {
    if (audioContextRef.current) {
      audioContextRef.current.close()
      audioContextRef.current = null
      analyserRef.current = null
    }
    setIsListening(false)
  }

  // Toggle mode
  const toggleMode = () => {
    setMode(prev => prev === 'galaxy' ? 'dna' : 'galaxy')
  }

  // Animation loop
  const animate = useCallback(() => {
    if (!sceneRef.current || !cameraRef.current || !rendererRef.current || !composerRef.current) return

    const time = clockRef.current.getElapsedTime()

    // Get audio data
    let dataArray = new Uint8Array(128)
    let bass = 0.3
    let mid = 0.3
    let high = 0.2
    let average = 0.3

    if (analyserRef.current) {
      analyserRef.current.getByteFrequencyData(dataArray)
      bass = dataArray.slice(0, 10).reduce((a, b) => a + b, 0) / 10 / 255
      mid = dataArray.slice(10, 50).reduce((a, b) => a + b, 0) / 40 / 255
      high = dataArray.slice(50, 128).reduce((a, b) => a + b, 0) / 78 / 255
      average = (bass + mid + high) / 3
    } else {
      // Demo mode - simulate audio with interesting patterns
      bass = 0.4 + Math.sin(time * 1.5) * 0.3 + Math.sin(time * 0.7) * 0.2
      mid = 0.3 + Math.sin(time * 2.5) * 0.25 + Math.cos(time * 1.2) * 0.15
      high = 0.2 + Math.sin(time * 4.0) * 0.2 + Math.sin(time * 2.1) * 0.1
      average = (bass + mid + high) / 3
    }

    const orientation = orientationRef.current

    // Update Galaxy
    if (galaxyRef.current) {
      galaxyRef.current.visible = mode === 'galaxy'
      if (mode === 'galaxy') {
        const material = galaxyRef.current.material as THREE.ShaderMaterial
        material.uniforms.uTime.value = time
        material.uniforms.uBass.value = bass
        material.uniforms.uMid.value = mid
        material.uniforms.uHigh.value = high
        material.uniforms.uAudioLevel.value = average
        material.uniforms.uOrientation.value.set(orientation.x, orientation.y)

        galaxyRef.current.rotation.y = time * 0.05
      }
    }

    // Update DNA
    if (dnaRef.current) {
      dnaRef.current.visible = mode === 'dna'
      if (mode === 'dna') {
        dnaRef.current.rotation.y = time * 0.3 + bass * 0.5

        // Update all DNA materials
        dnaRef.current.traverse((child) => {
          if (child instanceof THREE.Mesh && child.material instanceof THREE.ShaderMaterial) {
            child.material.uniforms.uTime.value = time
            child.material.uniforms.uBass.value = bass
            child.material.uniforms.uMid.value = mid
            child.material.uniforms.uHigh.value = high
            child.material.uniforms.uAudioLevel.value = average
            child.material.uniforms.uOrientation.value.set(orientation.x, orientation.y)
            child.material.uniforms.uCameraPosition.value.copy(cameraRef.current!.position)

            // Update frequency data
            if (analyserRef.current) {
              const freqData = new Float32Array(64)
              for (let i = 0; i < 64; i++) {
                freqData[i] = dataArray[i * 2] / 255
              }
              child.material.uniforms.uFrequencyData.value = freqData
            }
          }
        })
      }
    }

    // Camera movement based on orientation and audio
    const targetX = orientation.y * 30 + Math.sin(time * 0.5) * 10
    const targetY = orientation.x * 20 + Math.cos(time * 0.3) * 5 + bass * 10
    const targetZ = 60 + average * 20

    cameraRef.current.position.x += (targetX - cameraRef.current.position.x) * 0.05
    cameraRef.current.position.y += (targetY - cameraRef.current.position.y) * 0.05
    cameraRef.current.position.z += (targetZ - cameraRef.current.position.z) * 0.05
    cameraRef.current.lookAt(0, 0, 0)

    // Update kaleidoscope if we implement it
    if (kaleidoscopeMaterialRef.current) {
      kaleidoscopeMaterialRef.current.uniforms.uTime.value = time
      kaleidoscopeMaterialRef.current.uniforms.uAudioLevel.value = average
      // Dynamic segments based on audio
      kaleidoscopeMaterialRef.current.uniforms.uSegments.value = 4 + Math.floor(bass * 8)
    }

    // Render with post-processing
    composerRef.current.render()

    animationIdRef.current = requestAnimationFrame(animate)
  }, [mode])

  // Initialize scene
  useEffect(() => {
    const cleanup = initScene()
    return () => {
      cleanup?.()
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement)
        rendererRef.current.dispose()
      }
      if (feedbackTargetRef.current) feedbackTargetRef.current.dispose()
      if (feedbackTarget2Ref.current) feedbackTarget2Ref.current.dispose()
      stopListening()
    }
  }, [initScene])

  // Start animation
  useEffect(() => {
    animate()
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
    }
  }, [animate])

  return (
    <div className="min-h-screen flex flex-col bg-black">
      {/* Minimal floating controls */}
      <div className="absolute top-4 left-4 z-20">
        <Link
          to="/"
          className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:bg-black/70 transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
      </div>

      {/* Mode toggle - tap anywhere on top right */}
      <button
        onClick={toggleMode}
        className="absolute top-4 right-16 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:bg-black/70 transition-all"
      >
        {mode === 'galaxy' ? (
          <Sparkles className="w-5 h-5" />
        ) : (
          <Dna className="w-5 h-5" />
        )}
      </button>

      {/* Mic toggle */}
      <button
        onClick={isListening ? stopListening : startListening}
        className={cn(
          "absolute top-4 right-4 z-20 w-10 h-10 rounded-full backdrop-blur-sm flex items-center justify-center transition-all",
          isListening
            ? "bg-accent-green/30 text-accent-green"
            : "bg-black/50 text-white/70 hover:text-white hover:bg-black/70"
        )}
      >
        {isListening ? (
          <Mic className="w-5 h-5 animate-pulse" />
        ) : (
          <MicOff className="w-5 h-5" />
        )}
      </button>

      {/* Error toast */}
      {error && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-red-500/20 backdrop-blur-sm text-red-400 px-4 py-2 rounded-full text-sm">
          {error}
        </div>
      )}

      {/* Hint text */}
      {!isListening && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 text-white/30 text-sm">
          Tap mic for audio • Tilt phone to control
        </div>
      )}

      {/* Three.js Canvas */}
      <div ref={containerRef} className="flex-1 w-full" />
    </div>
  )
}
