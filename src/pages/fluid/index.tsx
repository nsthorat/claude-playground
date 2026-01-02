import { useEffect, useRef, useState, useCallback } from 'react'
import { ArrowLeft, Smartphone, Hand, Trash2, RotateCcw } from 'lucide-react'

const BASE_PATH = '/claude-playground'
import { FluidSimulation } from './simulation'
import { cn } from '@/lib/utils'

type ColorPalette = 'rainbow' | 'fire' | 'ocean' | 'neon'
type ControlMode = 'tilt' | 'touch'

// Color intensity multiplier - lower values prevent white-washing when colors overlap
const COLOR_INTENSITY = 0.4

const palettes: Record<ColorPalette, () => [number, number, number]> = {
  rainbow: () => {
    const hue = Math.random()
    const [r, g, b] = hslToRgb(hue, 1, 0.5)
    return [r * COLOR_INTENSITY, g * COLOR_INTENSITY, b * COLOR_INTENSITY]
  },
  fire: () => {
    const t = Math.random()
    return [1 * COLOR_INTENSITY, (0.2 + t * 0.5) * COLOR_INTENSITY, t * 0.2 * COLOR_INTENSITY]
  },
  ocean: () => {
    const t = Math.random()
    return [t * 0.3 * COLOR_INTENSITY, (0.5 + t * 0.3) * COLOR_INTENSITY, (0.8 + t * 0.2) * COLOR_INTENSITY]
  },
  neon: () => {
    const colors: [number, number, number][] = [
      [0, 0.82 * COLOR_INTENSITY, 1 * COLOR_INTENSITY],    // cyan
      [0.67 * COLOR_INTENSITY, 0.4 * COLOR_INTENSITY, 1 * COLOR_INTENSITY],  // purple
      [1 * COLOR_INTENSITY, 0.4 * COLOR_INTENSITY, 0.67 * COLOR_INTENSITY],  // pink
      [0, 1 * COLOR_INTENSITY, 0.53 * COLOR_INTENSITY],    // green
    ]
    return colors[Math.floor(Math.random() * colors.length)]
  },
}

function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  let r, g, b
  if (s === 0) {
    r = g = b = l
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1
      if (t > 1) t -= 1
      if (t < 1/6) return p + (q - p) * 6 * t
      if (t < 1/2) return q
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6
      return p
    }
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s
    const p = 2 * l - q
    r = hue2rgb(p, q, h + 1/3)
    g = hue2rgb(p, q, h)
    b = hue2rgb(p, q, h - 1/3)
  }
  return [r, g, b]
}

export default function FluidSim() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const simRef = useRef<FluidSimulation | null>(null)
  const animationRef = useRef<number>(0)
  const lastTimeRef = useRef<number>(0)
  const pointerRef = useRef<{ x: number; y: number; id: number }[]>([])

  const [controlMode, setControlMode] = useState<ControlMode>('tilt')
  const [palette, setPalette] = useState<ColorPalette>('neon')
  const [orientationStatus, setOrientationStatus] = useState<'unknown' | 'prompt' | 'granted' | 'denied' | 'unavailable'>('unknown')
  const [tilt, setTilt] = useState({ beta: 0, gamma: 0 })
  const [showControls, setShowControls] = useState(true)

  // Smoothed gravity values
  const gravityRef = useRef({ x: 0, y: 0 })

  // Check for device orientation support
  useEffect(() => {
    if ('DeviceOrientationEvent' in window) {
      setOrientationStatus('prompt')
    } else {
      setOrientationStatus('unavailable')
      setControlMode('touch')
    }
  }, [])

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
      const beta = e.beta ?? 0   // -180 to 180 (front-back tilt)
      const gamma = e.gamma ?? 0 // -90 to 90 (left-right tilt)
      setTilt({ beta, gamma })
    })
  }

  // Initialize simulation
  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    canvas.width = canvas.clientWidth * window.devicePixelRatio
    canvas.height = canvas.clientHeight * window.devicePixelRatio

    try {
      simRef.current = new FluidSimulation(canvas)
    } catch (e) {
      console.error('Failed to initialize fluid simulation:', e)
      return
    }

    // Add initial splats
    setTimeout(() => {
      if (simRef.current) {
        for (let i = 0; i < 5; i++) {
          const x = 0.3 + Math.random() * 0.4
          const y = 0.3 + Math.random() * 0.4
          const dx = (Math.random() - 0.5) * 100
          const dy = (Math.random() - 0.5) * 100
          simRef.current.splat(x, y, dx, dy, palettes[palette]())
        }
      }
    }, 100)

    // Handle resize
    const handleResize = () => {
      if (canvas && simRef.current) {
        canvas.width = canvas.clientWidth * window.devicePixelRatio
        canvas.height = canvas.clientHeight * window.devicePixelRatio
        simRef.current.resize()
      }
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  // Update gravity based on tilt
  useEffect(() => {
    if (controlMode !== 'tilt' || orientationStatus !== 'granted') return

    // Convert degrees to radians
    const betaRad = (tilt.beta * Math.PI) / 180
    const gammaRad = (tilt.gamma * Math.PI) / 180

    // Use sine for smooth gravity mapping:
    // - Phone flat (beta=0): sin(0) = 0, no vertical gravity
    // - Phone tilted forward (beta=90): sin(90°) = 1, gravity pulls down (negative Y in WebGL)
    // - Phone tilted right (gamma>0): sin(gamma) > 0, gravity pulls right (positive X)
    const targetX = Math.sin(gammaRad)
    // Negative because positive beta (tilted toward user) should pull fluid DOWN (negative Y)
    const targetY = -Math.sin(betaRad)

    // Clamp to [-1, 1] range
    const clampedX = Math.max(-1, Math.min(1, targetX))
    const clampedY = Math.max(-1, Math.min(1, targetY))

    // Smooth the gravity (lerp) for fluid feel
    gravityRef.current.x += (clampedX - gravityRef.current.x) * 0.15
    gravityRef.current.y += (clampedY - gravityRef.current.y) * 0.15
  }, [tilt, controlMode, orientationStatus])

  // Animation loop
  useEffect(() => {
    const animate = (time: number) => {
      if (!simRef.current) {
        animationRef.current = requestAnimationFrame(animate)
        return
      }

      const dt = Math.min((time - lastTimeRef.current) / 1000, 0.016)
      lastTimeRef.current = time

      // Apply gravity in tilt mode
      if (controlMode === 'tilt' && orientationStatus === 'granted') {
        simRef.current.setGravity(gravityRef.current.x, gravityRef.current.y)
      } else {
        simRef.current.setGravity(0, 0)
      }

      simRef.current.step(dt)
      simRef.current.render()

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [controlMode, orientationStatus])

  // Touch/pointer handlers
  const getPointerPos = (e: React.PointerEvent | PointerEvent): { x: number; y: number } => {
    const canvas = canvasRef.current
    if (!canvas) return { x: 0, y: 0 }
    const rect = canvas.getBoundingClientRect()
    return {
      x: (e.clientX - rect.left) / rect.width,
      y: 1 - (e.clientY - rect.top) / rect.height, // Flip Y
    }
  }

  const handlePointerDown = (e: React.PointerEvent) => {
    const pos = getPointerPos(e)
    pointerRef.current.push({ ...pos, id: e.pointerId })

    // Add initial splat on touch
    if (simRef.current) {
      simRef.current.splat(pos.x, pos.y, 0, 0, palettes[palette]())
    }
  }

  const handlePointerMove = (e: React.PointerEvent) => {
    const pointer = pointerRef.current.find(p => p.id === e.pointerId)
    if (!pointer || !simRef.current) return

    const pos = getPointerPos(e)
    const dx = (pos.x - pointer.x) * 1000
    const dy = (pos.y - pointer.y) * 1000

    if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
      simRef.current.splat(pos.x, pos.y, dx, dy, palettes[palette]())
    }

    pointer.x = pos.x
    pointer.y = pos.y
  }

  const handlePointerUp = (e: React.PointerEvent) => {
    pointerRef.current = pointerRef.current.filter(p => p.id !== e.pointerId)
  }

  const handleClear = () => {
    simRef.current?.clear()
  }

  const handleReset = () => {
    if (simRef.current) {
      simRef.current.clear()
      // Add fresh splats
      for (let i = 0; i < 5; i++) {
        const x = 0.3 + Math.random() * 0.4
        const y = 0.3 + Math.random() * 0.4
        const dx = (Math.random() - 0.5) * 100
        const dy = (Math.random() - 0.5) * 100
        simRef.current.splat(x, y, dx, dy, palettes[palette]())
      }
    }
  }

  return (
    <div className="h-[100dvh] flex flex-col bg-bg-primary overflow-hidden">
      {/* Canvas - full screen behind everything */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full touch-none"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onPointerCancel={handlePointerUp}
      />

      {/* Header overlay */}
      <header className="relative z-10 p-4 flex items-center justify-between">
        <a
          href={`${BASE_PATH}/`}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-bg-card/80 backdrop-blur-sm text-text-secondary hover:text-accent-cyan transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </a>

        <h1 className="text-lg font-bold bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent">
          Fluid Sim
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
          <div className="relative w-16 h-16 rounded-full border-2 border-accent-cyan/30 bg-bg-card/50 backdrop-blur-sm">
            <div
              className="absolute w-3 h-3 rounded-full bg-accent-cyan shadow-lg shadow-accent-cyan/50"
              style={{
                left: `${50 + gravityRef.current.x * 40}%`,
                top: `${50 + gravityRef.current.y * 40}%`,
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
              className="w-full mb-4 py-3 px-4 rounded-xl bg-accent-cyan/20 border border-accent-cyan/30 text-accent-cyan font-medium flex items-center justify-center gap-2"
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
              disabled={orientationStatus === 'unavailable' || orientationStatus === 'denied'}
              className={cn(
                'flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all',
                controlMode === 'tilt'
                  ? 'bg-accent-cyan/20 text-accent-cyan'
                  : 'bg-bg-card/80 text-text-secondary',
                (orientationStatus === 'unavailable' || orientationStatus === 'denied') && 'opacity-50 cursor-not-allowed'
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
                  ? 'bg-accent-purple/20 text-accent-purple'
                  : 'bg-bg-card/80 text-text-secondary'
              )}
            >
              <Hand className="w-4 h-4" />
              Touch
            </button>
          </div>

          {/* Color palette */}
          <div className="flex items-center justify-center gap-2 mb-4">
            {(['rainbow', 'fire', 'ocean', 'neon'] as ColorPalette[]).map((p) => (
              <button
                key={p}
                onClick={() => setPalette(p)}
                className={cn(
                  'px-3 py-1.5 rounded-full text-xs font-medium capitalize transition-all',
                  palette === p
                    ? 'bg-white/20 text-white'
                    : 'bg-bg-card/60 text-text-secondary'
                )}
              >
                {p}
              </button>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={handleClear}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-bg-card/80 text-text-secondary text-sm font-medium"
            >
              <Trash2 className="w-4 h-4" />
              Clear
            </button>
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
              ? 'Tilt your phone to move the fluid. Touch to add color.'
              : 'Drag to add force and color to the fluid.'}
          </p>
        </div>
      )}
    </div>
  )
}
