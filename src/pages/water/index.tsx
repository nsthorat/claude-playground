import { useState, useCallback, useEffect, useRef, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { ArrowLeft, Smartphone, Hand, RotateCcw } from 'lucide-react'
import GPUWater from './GPUWater'
import { cn } from '@/lib/utils'

const BASE_PATH = '/claude-playground'

type ControlMode = 'tilt' | 'touch'

function LoadingFallback() {
  return (
    <mesh>
      <planeGeometry args={[10, 10]} />
      <meshBasicMaterial color="#003366" transparent opacity={0.5} />
    </mesh>
  )
}

export default function WaterSimulation() {
  const [controlMode, setControlMode] = useState<ControlMode>('tilt')
  const [orientationStatus, setOrientationStatus] = useState<
    'unknown' | 'prompt' | 'granted' | 'denied' | 'unavailable'
  >('unknown')
  const [gravity, setGravity] = useState({ x: 0, y: 0 })
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null)
  const [showControls, setShowControls] = useState(true)
  const [isReady, setIsReady] = useState(false)

  const canvasRef = useRef<HTMLDivElement>(null)
  const smoothGravityRef = useRef({ x: 0, y: 0 })

  // Check for device orientation support
  useEffect(() => {
    if ('DeviceOrientationEvent' in window) {
      setOrientationStatus('prompt')
    } else {
      setOrientationStatus('unavailable')
      setControlMode('touch')
    }
  }, [])

  // Smooth gravity updates
  useEffect(() => {
    let animationId: number

    const updateGravity = () => {
      smoothGravityRef.current.x +=
        (gravity.x - smoothGravityRef.current.x) * 0.1
      smoothGravityRef.current.y +=
        (gravity.y - smoothGravityRef.current.y) * 0.1
      animationId = requestAnimationFrame(updateGravity)
    }

    animationId = requestAnimationFrame(updateGravity)
    return () => cancelAnimationFrame(animationId)
  }, [gravity])

  // Request orientation permission
  const requestOrientation = useCallback(async () => {
    try {
      // @ts-expect-error - requestPermission is iOS specific
      if (typeof DeviceOrientationEvent.requestPermission === 'function') {
        // @ts-expect-error - requestPermission is iOS specific
        const permission = await DeviceOrientationEvent.requestPermission()
        if (permission === 'granted') {
          setOrientationStatus('granted')
          startOrientationListener()
        } else {
          setOrientationStatus('denied')
          setControlMode('touch')
        }
      } else {
        // Non-iOS devices
        setOrientationStatus('granted')
        startOrientationListener()
      }
    } catch {
      setOrientationStatus('denied')
      setControlMode('touch')
    }
  }, [])

  const startOrientationListener = () => {
    window.addEventListener('deviceorientation', (e) => {
      const beta = e.beta ?? 0 // -180 to 180 (front-back tilt)
      const gamma = e.gamma ?? 0 // -90 to 90 (left-right tilt)

      // Map tilt to gravity vector
      // gamma: left/right tilt -> x gravity
      // beta: front/back tilt -> y gravity (offset so flat phone = no gravity)
      const targetX = Math.max(-1, Math.min(1, gamma / 30))
      const targetY = Math.max(-1, Math.min(1, (beta - 45) / 30))

      setGravity({ x: targetX, y: targetY })
    })
  }

  // Handle pointer events for touch/mouse interaction
  const handlePointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      const rect = canvasRef.current?.getBoundingClientRect()
      if (!rect) return

      const x = (e.clientX - rect.left) / rect.width
      const y = 1 - (e.clientY - rect.top) / rect.height

      setMousePos({ x, y })
    },
    []
  )

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (e.buttons === 0) {
        setMousePos(null)
        return
      }

      const rect = canvasRef.current?.getBoundingClientRect()
      if (!rect) return

      const x = (e.clientX - rect.left) / rect.width
      const y = 1 - (e.clientY - rect.top) / rect.height

      setMousePos({ x, y })
    },
    []
  )

  const handlePointerUp = useCallback(() => {
    setMousePos(null)
  }, [])

  const handleReset = useCallback(() => {
    // Trigger page reload to reset simulation
    window.location.reload()
  }, [])

  return (
    <div className="h-[100dvh] flex flex-col bg-bg-primary overflow-hidden">
      {/* 3D Canvas */}
      <div
        ref={canvasRef}
        className="absolute inset-0 touch-none"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <Canvas
          camera={{ position: [0, 8, 8], fov: 50 }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
          }}
          dpr={[1, 2]}
        >
          <color attach="background" args={['#0a0a0f']} />
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 15, 5]} intensity={1.5} />
          <pointLight position={[-5, 10, -5]} intensity={0.5} color="#00d4ff" />

          <Suspense fallback={<LoadingFallback />}>
            <GPUWater
              gravity={
                controlMode === 'tilt' && orientationStatus === 'granted'
                  ? smoothGravityRef.current
                  : { x: 0, y: 0 }
              }
              mousePos={mousePos}
              onReady={() => setIsReady(true)}
            />
          </Suspense>

          <OrbitControls
            enablePan={false}
            enableZoom={true}
            minDistance={5}
            maxDistance={20}
            minPolarAngle={0.2}
            maxPolarAngle={Math.PI / 2.5}
            target={[0, 0, 0]}
          />
        </Canvas>
      </div>

      {/* Loading indicator */}
      {!isReady && (
        <div className="absolute inset-0 flex items-center justify-center bg-bg-primary/80 z-20">
          <div className="text-accent-cyan animate-pulse">
            Initializing water simulation...
          </div>
        </div>
      )}

      {/* Header overlay */}
      <header className="relative z-10 p-4 flex items-center justify-between">
        <a
          href={`${BASE_PATH}/`}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-bg-card/80 backdrop-blur-sm text-text-secondary hover:text-accent-cyan transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </a>

        <h1 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Water Simulation
        </h1>

        <button
          onClick={() => setShowControls(!showControls)}
          className="w-10 h-10 rounded-full bg-bg-card/80 backdrop-blur-sm text-text-secondary flex items-center justify-center"
        >
          <span className="text-lg">{showControls ? '−' : '+'}</span>
        </button>
      </header>

      {/* Tilt indicator */}
      {controlMode === 'tilt' && orientationStatus === 'granted' && (
        <div className="absolute top-20 left-1/2 -translate-x-1/2 z-10">
          <div className="relative w-16 h-16 rounded-full border-2 border-blue-400/30 bg-bg-card/50 backdrop-blur-sm">
            <div
              className="absolute w-3 h-3 rounded-full bg-blue-400 shadow-lg shadow-blue-400/50"
              style={{
                left: `${50 + smoothGravityRef.current.x * 40}%`,
                top: `${50 + smoothGravityRef.current.y * 40}%`,
                transform: 'translate(-50%, -50%)',
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-text-muted" />
            </div>
          </div>
        </div>
      )}

      {/* Bottom controls */}
      {showControls && (
        <div className="absolute bottom-0 left-0 right-0 z-10 p-4 pb-8 bg-gradient-to-t from-bg-primary/90 to-transparent">
          {/* Permission prompt */}
          {orientationStatus === 'prompt' && controlMode === 'tilt' && (
            <button
              onClick={requestOrientation}
              className="w-full mb-4 py-3 px-4 rounded-xl bg-blue-500/20 border border-blue-400/30 text-blue-400 font-medium flex items-center justify-center gap-2"
            >
              <Smartphone className="w-5 h-5" />
              Enable Tilt Control
            </button>
          )}

          {orientationStatus === 'denied' && (
            <div className="mb-4 py-2 px-4 rounded-xl bg-accent-red/10 border border-accent-red/20 text-accent-red text-sm text-center">
              Orientation access denied. Using touch mode.
            </div>
          )}

          {/* Mode toggle */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <button
              onClick={() => setControlMode('tilt')}
              disabled={
                orientationStatus === 'unavailable' ||
                orientationStatus === 'denied'
              }
              className={cn(
                'flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all',
                controlMode === 'tilt'
                  ? 'bg-blue-500/20 text-blue-400'
                  : 'bg-bg-card/80 text-text-secondary',
                (orientationStatus === 'unavailable' ||
                  orientationStatus === 'denied') &&
                  'opacity-50 cursor-not-allowed'
              )}
            >
              <Smartphone className="w-4 h-4" />
              Tilt
            </button>
            <button
              onClick={() => setControlMode('touch')}
              className={cn(
                'flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all',
                controlMode === 'touch'
                  ? 'bg-cyan-500/20 text-cyan-400'
                  : 'bg-bg-card/80 text-text-secondary'
              )}
            >
              <Hand className="w-4 h-4" />
              Touch
            </button>
          </div>

          {/* Action buttons */}
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={handleReset}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-bg-card/80 text-text-secondary text-sm font-medium"
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </button>
          </div>

          {/* Instructions */}
          <p className="mt-4 text-center text-text-muted text-xs">
            {controlMode === 'tilt'
              ? 'Tilt your phone to make waves slosh. Touch to create ripples.'
              : 'Drag to create ripples in the water. Pinch to zoom.'}
          </p>
        </div>
      )}
    </div>
  )
}
