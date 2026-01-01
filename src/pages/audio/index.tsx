import { useEffect, useRef, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Mic, MicOff, Music, Sparkles, Dna } from 'lucide-react'
import * as THREE from 'three'
import { cn } from '@/lib/utils'

type VisualizerMode = 'galaxy' | 'dna'

export default function AudioVisualizer() {
  const containerRef = useRef<HTMLDivElement>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const analyserRef = useRef<AnalyserNode | null>(null)
  const audioContextRef = useRef<AudioContext | null>(null)
  const animationIdRef = useRef<number>(0)
  const particlesRef = useRef<THREE.Points | null>(null)
  const dnaRef = useRef<THREE.Group | null>(null)

  const [isListening, setIsListening] = useState(false)
  const [mode, setMode] = useState<VisualizerMode>('galaxy')
  const [error, setError] = useState<string | null>(null)

  // Initialize Three.js scene
  const initScene = useCallback(() => {
    if (!containerRef.current) return

    // Scene
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x0a0a0f)
    sceneRef.current = scene

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    )
    camera.position.z = 50
    cameraRef.current = camera

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    containerRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Create both visualizations
    createGalaxy(scene)
    createDNA(scene)

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current || !camera || !renderer) return
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Create particle galaxy
  const createGalaxy = (scene: THREE.Scene) => {
    const particleCount = 5000
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    const sizes = new Float32Array(particleCount)

    const colorCyan = new THREE.Color(0x00d4ff)
    const colorPurple = new THREE.Color(0xaa66ff)
    const colorPink = new THREE.Color(0xff66aa)

    for (let i = 0; i < particleCount; i++) {
      // Spiral galaxy distribution
      const radius = Math.random() * 40
      const spinAngle = radius * 0.5
      const branchAngle = ((i % 3) / 3) * Math.PI * 2

      const randomX = (Math.random() - 0.5) * (radius * 0.3)
      const randomY = (Math.random() - 0.5) * (radius * 0.3)
      const randomZ = (Math.random() - 0.5) * (radius * 0.3)

      positions[i * 3] = Math.cos(branchAngle + spinAngle) * radius + randomX
      positions[i * 3 + 1] = randomY
      positions[i * 3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ

      // Color gradient from center to edge
      const mixedColor = colorCyan.clone()
      mixedColor.lerp(colorPurple, radius / 40)
      if (Math.random() > 0.8) mixedColor.lerp(colorPink, 0.5)

      colors[i * 3] = mixedColor.r
      colors[i * 3 + 1] = mixedColor.g
      colors[i * 3 + 2] = mixedColor.b

      sizes[i] = Math.random() * 2 + 0.5
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1))

    const material = new THREE.PointsMaterial({
      size: 0.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    })

    const particles = new THREE.Points(geometry, material)
    particles.visible = true
    scene.add(particles)
    particlesRef.current = particles
  }

  // Create DNA helix
  const createDNA = (scene: THREE.Scene) => {
    const dnaGroup = new THREE.Group()
    const numRungs = 64
    const helixRadius = 8
    const helixHeight = 60
    const rungSpacing = helixHeight / numRungs

    // Materials
    const strandMaterial1 = new THREE.MeshBasicMaterial({ color: 0x00d4ff })
    const strandMaterial2 = new THREE.MeshBasicMaterial({ color: 0xaa66ff })
    const rungMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ff88,
      transparent: true,
      opacity: 0.6
    })

    // Create spheres for DNA strands
    const sphereGeometry = new THREE.SphereGeometry(0.4, 16, 16)

    for (let i = 0; i < numRungs; i++) {
      const t = i / numRungs
      const y = (t - 0.5) * helixHeight
      const angle = t * Math.PI * 4

      // Strand 1 sphere
      const x1 = Math.cos(angle) * helixRadius
      const z1 = Math.sin(angle) * helixRadius
      const sphere1 = new THREE.Mesh(sphereGeometry, strandMaterial1)
      sphere1.position.set(x1, y, z1)
      sphere1.userData = { baseY: y, index: i, strand: 1 }
      dnaGroup.add(sphere1)

      // Strand 2 sphere (opposite side)
      const x2 = Math.cos(angle + Math.PI) * helixRadius
      const z2 = Math.sin(angle + Math.PI) * helixRadius
      const sphere2 = new THREE.Mesh(sphereGeometry, strandMaterial2)
      sphere2.position.set(x2, y, z2)
      sphere2.userData = { baseY: y, index: i, strand: 2 }
      dnaGroup.add(sphere2)

      // Connecting rung (every 2nd position)
      if (i % 2 === 0) {
        const rungGeometry = new THREE.CylinderGeometry(0.15, 0.15, helixRadius * 2, 8)
        const rung = new THREE.Mesh(rungGeometry, rungMaterial.clone())
        rung.position.set(0, y, 0)
        rung.rotation.z = Math.PI / 2
        rung.rotation.y = angle
        rung.userData = { baseScale: 1, index: i }
        dnaGroup.add(rung)
      }
    }

    dnaGroup.visible = false
    dnaGroup.position.y = 0
    scene.add(dnaGroup)
    dnaRef.current = dnaGroup
  }

  // Start audio capture
  const startListening = async () => {
    try {
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
      setError('Microphone access denied. Please allow microphone access to use the visualizer.')
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

  // Animation loop
  const animate = useCallback(() => {
    if (!sceneRef.current || !cameraRef.current || !rendererRef.current) return

    const time = Date.now() * 0.001

    // Get audio data
    let dataArray = new Uint8Array(128)
    let average = 0
    let bass = 0
    let mid = 0
    let high = 0

    if (analyserRef.current) {
      analyserRef.current.getByteFrequencyData(dataArray)
      average = dataArray.reduce((a, b) => a + b, 0) / dataArray.length / 255
      bass = dataArray.slice(0, 10).reduce((a, b) => a + b, 0) / 10 / 255
      mid = dataArray.slice(10, 50).reduce((a, b) => a + b, 0) / 40 / 255
      high = dataArray.slice(50, 128).reduce((a, b) => a + b, 0) / 78 / 255
    } else {
      // Demo mode - simulate audio
      average = 0.3 + Math.sin(time * 2) * 0.2
      bass = 0.4 + Math.sin(time * 1.5) * 0.3
      mid = 0.3 + Math.sin(time * 3) * 0.2
      high = 0.2 + Math.sin(time * 5) * 0.15
    }

    // Update Galaxy visualization
    if (particlesRef.current && mode === 'galaxy') {
      particlesRef.current.visible = true
      if (dnaRef.current) dnaRef.current.visible = false

      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array
      const colors = particlesRef.current.geometry.attributes.color.array as Float32Array

      for (let i = 0; i < positions.length / 3; i++) {
        const i3 = i * 3

        // Get original position info
        const x = positions[i3]
        const y = positions[i3 + 1]
        const z = positions[i3 + 2]
        const radius = Math.sqrt(x * x + z * z)

        // Pulse effect based on audio
        const pulseStrength = bass * 5
        const angle = Math.atan2(z, x)
        const freqIndex = Math.floor((angle + Math.PI) / (Math.PI * 2) * 128) % 128
        const freqValue = analyserRef.current ? dataArray[freqIndex] / 255 : (0.5 + Math.sin(time * 2 + i * 0.01) * 0.3)

        // Update Y position for wave effect
        positions[i3 + 1] = y + Math.sin(time * 2 + radius * 0.1) * freqValue * pulseStrength

        // Color intensity based on audio
        const intensity = 0.5 + average * 0.5
        colors[i3] = Math.min(1, colors[i3] * intensity + high * 0.3)
        colors[i3 + 1] = Math.min(1, colors[i3 + 1] * intensity + mid * 0.2)
        colors[i3 + 2] = Math.min(1, colors[i3 + 2] * intensity + bass * 0.2)
      }

      particlesRef.current.geometry.attributes.position.needsUpdate = true
      particlesRef.current.geometry.attributes.color.needsUpdate = true
      particlesRef.current.rotation.y += 0.002 + bass * 0.01

      // Camera movement
      cameraRef.current.position.y = Math.sin(time * 0.5) * 10 + average * 10
      cameraRef.current.lookAt(0, 0, 0)
    }

    // Update DNA visualization
    if (dnaRef.current && mode === 'dna') {
      dnaRef.current.visible = true
      if (particlesRef.current) particlesRef.current.visible = false

      dnaRef.current.rotation.y += 0.01 + bass * 0.02

      dnaRef.current.children.forEach((child) => {
        if (child instanceof THREE.Mesh) {
          const userData = child.userData

          if (userData.strand) {
            // Strand spheres - pulse size with audio
            const freqIndex = Math.floor(userData.index / 64 * 128) % 128
            const freqValue = analyserRef.current ? dataArray[freqIndex] / 255 : (0.5 + Math.sin(time * 3 + userData.index * 0.1) * 0.3)
            const scale = 1 + freqValue * 1.5
            child.scale.setScalar(scale)

            // Color shift
            if (child.material instanceof THREE.MeshBasicMaterial) {
              const hue = (userData.strand === 1 ? 0.5 : 0.75) + freqValue * 0.1
              child.material.color.setHSL(hue, 1, 0.5 + freqValue * 0.3)
            }
          } else if (userData.baseScale !== undefined) {
            // Rungs - scale with mid frequencies
            const scale = 1 + mid * 0.5
            child.scale.y = scale

            if (child.material instanceof THREE.MeshBasicMaterial) {
              child.material.opacity = 0.3 + high * 0.7
            }
          }
        }
      })

      cameraRef.current.position.x = Math.sin(time * 0.3) * 30
      cameraRef.current.position.z = Math.cos(time * 0.3) * 30
      cameraRef.current.position.y = Math.sin(time * 0.2) * 10
      cameraRef.current.lookAt(0, 0, 0)
    }

    rendererRef.current.render(sceneRef.current, cameraRef.current)
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
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="p-4 flex items-center justify-between z-10 relative">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-text-secondary hover:text-accent-cyan transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>

        <h1 className="text-xl font-bold bg-gradient-to-r from-accent-purple to-accent-red bg-clip-text text-transparent flex items-center gap-2">
          <Music className="w-5 h-5 text-accent-purple" />
          Audio Visualizer
        </h1>

        <div className="w-16" /> {/* Spacer for centering */}
      </header>

      {/* Controls */}
      <div className="px-4 pb-4 flex flex-wrap items-center justify-center gap-4 z-10 relative">
        {/* Mode Toggle */}
        <div className="flex items-center bg-bg-card rounded-full p-1 border border-text-muted/20">
          <button
            onClick={() => setMode('galaxy')}
            className={cn(
              'flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all',
              mode === 'galaxy'
                ? 'bg-accent-cyan/20 text-accent-cyan'
                : 'text-text-secondary hover:text-text-primary'
            )}
          >
            <Sparkles className="w-4 h-4" />
            Galaxy
          </button>
          <button
            onClick={() => setMode('dna')}
            className={cn(
              'flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all',
              mode === 'dna'
                ? 'bg-accent-purple/20 text-accent-purple'
                : 'text-text-secondary hover:text-text-primary'
            )}
          >
            <Dna className="w-4 h-4" />
            DNA Helix
          </button>
        </div>

        {/* Mic Toggle */}
        <button
          onClick={isListening ? stopListening : startListening}
          className={cn(
            'flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all border',
            isListening
              ? 'bg-accent-green/20 text-accent-green border-accent-green/30'
              : 'bg-bg-card text-text-secondary border-text-muted/20 hover:text-text-primary hover:border-text-muted/40'
          )}
        >
          {isListening ? (
            <>
              <Mic className="w-4 h-4 animate-pulse" />
              Listening...
            </>
          ) : (
            <>
              <MicOff className="w-4 h-4" />
              Enable Mic
            </>
          )}
        </button>
      </div>

      {/* Error message */}
      {error && (
        <div className="px-4 pb-4 z-10 relative">
          <div className="max-w-md mx-auto bg-accent-red/10 border border-accent-red/30 rounded-lg p-3 text-accent-red text-sm text-center">
            {error}
          </div>
        </div>
      )}

      {/* Demo mode indicator */}
      {!isListening && !error && (
        <div className="px-4 pb-2 z-10 relative">
          <p className="text-center text-text-muted text-sm">
            Demo mode - Enable mic for real audio visualization
          </p>
        </div>
      )}

      {/* Three.js Canvas */}
      <div ref={containerRef} className="flex-1 relative" />
    </div>
  )
}
