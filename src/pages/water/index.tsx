import { useState, useCallback, useEffect, useRef, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { ArrowLeft, Smartphone } from 'lucide-react'
import WaterSurface from './WaterSurface'

const BASE_PATH = '/claude-playground'

export default function WaterSimulation() {
  const [orientationStatus, setOrientationStatus] = useState<
    'unknown' | 'prompt' | 'granted' | 'denied' | 'unavailable'
  >('unknown')
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [isReady, setIsReady] = useState(false)

  const smoothTiltRef = useRef({ x: 0, y: 0 })

  // Check for device orientation support
  useEffect(() => {
    if ('DeviceOrientationEvent' in window) {
      setOrientationStatus('prompt')
    } else {
      setOrientationStatus('unavailable')
    }
  }, [])

  // Smooth tilt updates
  useEffect(() => {
    let animationId: number

    const updateTilt = () => {
      smoothTiltRef.current.x += (tilt.x - smoothTiltRef.current.x) * 0.15
      smoothTiltRef.current.y += (tilt.y - smoothTiltRef.current.y) * 0.15
      animationId = requestAnimationFrame(updateTilt)
    }

    animationId = requestAnimationFrame(updateTilt)
    return () => cancelAnimationFrame(animationId)
  }, [tilt])

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
        }
      } else {
        setOrientationStatus('granted')
        startOrientationListener()
      }
    } catch {
      setOrientationStatus('denied')
    }
  }, [])

  const startOrientationListener = () => {
    window.addEventListener('deviceorientation', (e) => {
      const beta = e.beta ?? 0
      const gamma = e.gamma ?? 0
      // Tilt range: -1 to 1
      const x = Math.max(-1, Math.min(1, gamma / 30))
      const y = Math.max(-1, Math.min(1, (beta - 45) / 30))
      setTilt({ x, y })
    })
  }

  return (
    <div className="h-[100dvh] w-full fixed inset-0 overflow-hidden">
      {/* Fullscreen top-down water view */}
      <Canvas
        orthographic
        camera={{
          zoom: 50,
          position: [0, 10, 0],
          near: 0.1,
          far: 100,
        }}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: 'high-performance',
        }}
        dpr={[1, 2]}
        style={{ position: 'absolute', inset: 0 }}
      >
        <color attach="background" args={['#0a2035']} />

        <Suspense fallback={null}>
          <WaterSurface
            tilt={smoothTiltRef.current}
            onReady={() => setIsReady(true)}
          />
        </Suspense>
      </Canvas>

      {/* Loading */}
      {!isReady && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#0a2035] z-20">
          <div className="text-cyan-400 animate-pulse">Loading water...</div>
        </div>
      )}

      {/* Back button */}
      <a
        href={`${BASE_PATH}/`}
        className="absolute top-4 left-4 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-black/30 backdrop-blur text-white/70 hover:text-white"
      >
        <ArrowLeft className="w-5 h-5" />
      </a>

      {/* Tilt button */}
      {orientationStatus === 'prompt' && (
        <button
          onClick={requestOrientation}
          className="absolute top-4 right-4 z-10 flex items-center gap-2 px-3 py-2 rounded-full bg-cyan-500/20 backdrop-blur border border-cyan-400/30 text-cyan-300 text-sm"
        >
          <Smartphone className="w-4 h-4" />
          Enable Tilt
        </button>
      )}

      {/* Tilt indicator */}
      {orientationStatus === 'granted' && (
        <div className="absolute bottom-4 right-4 z-10 w-10 h-10 rounded-full border border-cyan-400/30 bg-black/30 backdrop-blur">
          <div
            className="absolute w-2 h-2 rounded-full bg-cyan-400"
            style={{
              left: `${50 + smoothTiltRef.current.x * 35}%`,
              top: `${50 + smoothTiltRef.current.y * 35}%`,
              transform: 'translate(-50%, -50%)',
            }}
          />
        </div>
      )}
    </div>
  )
}
