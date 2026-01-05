import { useState, useEffect, useCallback, useRef } from 'react'

interface SensorState {
  tilt: { alpha: number; beta: number; gamma: number }
  accel: { x: number; y: number; z: number }
  shake: number
  touch: { x: number; y: number; force: number; active: boolean }
}

interface UseSensorModulationReturn extends SensorState {
  requestPermission: () => Promise<void>
  permissionGranted: boolean
  permissionDenied: boolean
  needsPermission: boolean
}

export function useSensorModulation(): UseSensorModulationReturn {
  const [sensors, setSensors] = useState<SensorState>({
    tilt: { alpha: 0, beta: 0, gamma: 0 },
    accel: { x: 0, y: 0, z: 0 },
    shake: 0,
    touch: { x: 0, y: 0, force: 0, active: false },
  })
  const [permissionGranted, setPermissionGranted] = useState(false)
  const [permissionDenied, setPermissionDenied] = useState(false)
  const [needsPermission, setNeedsPermission] = useState(false)

  // Smoothing for shake detection
  const shakeHistoryRef = useRef<number[]>([])

  // Check if we need permission on mount
  useEffect(() => {
    // @ts-expect-error iOS specific
    const needsMotionPermission = typeof DeviceMotionEvent?.requestPermission === 'function'
    setNeedsPermission(needsMotionPermission)

    // On Android/desktop, auto-grant
    if (!needsMotionPermission && 'DeviceMotionEvent' in window) {
      setPermissionGranted(true)
    }
  }, [])

  const requestPermission = useCallback(async () => {
    try {
      // @ts-expect-error iOS specific
      if (typeof DeviceMotionEvent?.requestPermission === 'function') {
        // @ts-expect-error iOS specific
        const motionPerm = await DeviceMotionEvent.requestPermission()
        // @ts-expect-error iOS specific
        const orientPerm = await DeviceOrientationEvent.requestPermission()

        if (motionPerm === 'granted' && orientPerm === 'granted') {
          setPermissionGranted(true)
          setPermissionDenied(false)
        } else {
          setPermissionDenied(true)
        }
      } else {
        // Android/desktop - no permission needed
        setPermissionGranted(true)
      }
    } catch {
      setPermissionDenied(true)
    }
  }, [])

  // Motion and orientation listeners
  useEffect(() => {
    if (!permissionGranted) return

    const handleMotion = (e: DeviceMotionEvent) => {
      const accel = {
        x: e.acceleration?.x ?? 0,
        y: e.acceleration?.y ?? 0,
        z: e.acceleration?.z ?? 0,
      }

      // Calculate shake magnitude with smoothing
      const magnitude = Math.sqrt(accel.x ** 2 + accel.y ** 2 + accel.z ** 2)
      shakeHistoryRef.current.push(magnitude)
      if (shakeHistoryRef.current.length > 5) {
        shakeHistoryRef.current.shift()
      }
      const smoothedShake = shakeHistoryRef.current.reduce((a, b) => a + b, 0) / shakeHistoryRef.current.length

      setSensors(prev => ({ ...prev, accel, shake: smoothedShake }))
    }

    const handleOrientation = (e: DeviceOrientationEvent) => {
      setSensors(prev => ({
        ...prev,
        tilt: {
          alpha: e.alpha ?? 0,
          beta: e.beta ?? 0,
          gamma: e.gamma ?? 0,
        },
      }))
    }

    window.addEventListener('devicemotion', handleMotion)
    window.addEventListener('deviceorientation', handleOrientation)

    return () => {
      window.removeEventListener('devicemotion', handleMotion)
      window.removeEventListener('deviceorientation', handleOrientation)
    }
  }, [permissionGranted])

  // Touch listeners (always active, no permission needed)
  useEffect(() => {
    const handleTouch = (e: TouchEvent) => {
      const t = e.touches[0]
      if (t) {
        setSensors(prev => ({
          ...prev,
          touch: {
            x: t.clientX,
            y: t.clientY,
            force: t.force || 0,
            active: true,
          },
        }))
      }
    }

    const handleTouchEnd = () => {
      setSensors(prev => ({
        ...prev,
        touch: { ...prev.touch, active: false },
      }))
    }

    window.addEventListener('touchstart', handleTouch, { passive: true })
    window.addEventListener('touchmove', handleTouch, { passive: true })
    window.addEventListener('touchend', handleTouchEnd)

    return () => {
      window.removeEventListener('touchstart', handleTouch)
      window.removeEventListener('touchmove', handleTouch)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [])

  return {
    ...sensors,
    requestPermission,
    permissionGranted,
    permissionDenied,
    needsPermission,
  }
}

// Utility function for mapping ranges
export function mapRange(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number {
  const clamped = Math.max(inMin, Math.min(inMax, value))
  return ((clamped - inMin) / (inMax - inMin)) * (outMax - outMin) + outMin
}

// Utility for smooth value transitions
export function lerp(current: number, target: number, factor: number): number {
  return current + (target - current) * factor
}
