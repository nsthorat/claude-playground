import { useState, useEffect, useCallback, CSSProperties } from 'react'

type SensorStatus = 'unknown' | 'checking' | 'available' | 'unavailable' | 'granted' | 'denied' | 'prompt'

interface SensorData {
  motion: {
    acceleration: { x: number | null; y: number | null; z: number | null }
    rotationRate: { alpha: number | null; beta: number | null; gamma: number | null }
  }
  orientation: {
    alpha: number | null
    beta: number | null
    gamma: number | null
    compass: number | null
  }
  geolocation: {
    latitude: number | null
    longitude: number | null
    accuracy: number | null
  }
  touch: {
    force: number | null
    touches: number
  }
}

const styles: Record<string, CSSProperties> = {
  container: {
    padding: '16px',
    paddingBottom: '48px',
    maxWidth: '600px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '32px',
    animation: 'fadeInUp 0.6s ease-out',
  },
  title: {
    fontSize: 'clamp(1.75rem, 6vw, 2.5rem)',
    fontWeight: 700,
    margin: 0,
    background: 'linear-gradient(135deg, #00d4ff, #aa66ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    letterSpacing: '-0.02em',
  },
  subtitle: {
    color: 'var(--text-secondary)',
    fontSize: '0.9rem',
    marginTop: '8px',
    fontWeight: 300,
  },
  section: {
    marginBottom: '24px',
  },
  sectionTitle: {
    fontSize: '0.7rem',
    fontWeight: 600,
    color: 'var(--text-muted)',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.1em',
    marginBottom: '12px',
    paddingLeft: '4px',
  },
  card: {
    background: 'var(--bg-card)',
    borderRadius: '16px',
    padding: '20px',
    border: '1px solid var(--border-subtle)',
    marginBottom: '12px',
    transition: 'all 0.2s ease',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '12px',
  },
  cardTitle: {
    fontSize: '1rem',
    fontWeight: 600,
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  statusBadge: {
    padding: '4px 10px',
    borderRadius: '20px',
    fontSize: '0.7rem',
    fontWeight: 600,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
  },
  dataGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '8px',
    marginTop: '12px',
  },
  dataItem: {
    background: 'var(--bg-secondary)',
    borderRadius: '8px',
    padding: '10px',
    textAlign: 'center' as const,
  },
  dataLabel: {
    fontSize: '0.65rem',
    color: 'var(--text-muted)',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
    marginBottom: '4px',
  },
  dataValue: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.85rem',
    fontWeight: 700,
    color: 'var(--accent-cyan)',
  },
  button: {
    width: '100%',
    padding: '14px 20px',
    borderRadius: '12px',
    border: 'none',
    background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.15), rgba(170, 102, 255, 0.15))',
    color: 'var(--text-primary)',
    fontSize: '0.9rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    fontFamily: 'inherit',
    marginTop: '8px',
  },
  icon: {
    fontSize: '1.25rem',
  },
  description: {
    fontSize: '0.8rem',
    color: 'var(--text-secondary)',
    lineHeight: 1.5,
  },
  unavailableNote: {
    fontSize: '0.75rem',
    color: 'var(--text-muted)',
    fontStyle: 'italic' as const,
    marginTop: '8px',
  },
}

const getStatusStyle = (status: SensorStatus): CSSProperties => {
  const colors: Record<SensorStatus, { bg: string; color: string }> = {
    unknown: { bg: 'rgba(85, 85, 102, 0.3)', color: '#888' },
    checking: { bg: 'rgba(255, 204, 0, 0.2)', color: '#ffcc00' },
    available: { bg: 'rgba(0, 255, 136, 0.15)', color: '#00ff88' },
    unavailable: { bg: 'rgba(255, 68, 102, 0.15)', color: '#ff4466' },
    granted: { bg: 'rgba(0, 255, 136, 0.15)', color: '#00ff88' },
    denied: { bg: 'rgba(255, 68, 102, 0.15)', color: '#ff4466' },
    prompt: { bg: 'rgba(0, 212, 255, 0.15)', color: '#00d4ff' },
  }
  return { ...styles.statusBadge, background: colors[status].bg, color: colors[status].color }
}

const formatNumber = (n: number | null, decimals = 1): string => {
  if (n === null) return '—'
  return n.toFixed(decimals)
}

export default function App() {
  const [motionStatus, setMotionStatus] = useState<SensorStatus>('unknown')
  const [orientationStatus, setOrientationStatus] = useState<SensorStatus>('unknown')
  const [geoStatus, setGeoStatus] = useState<SensorStatus>('unknown')
  const [cameraStatus, setCameraStatus] = useState<SensorStatus>('unknown')
  const [touchStatus, setTouchStatus] = useState<SensorStatus>('unknown')
  const [vibrationStatus, setVibrationStatus] = useState<SensorStatus>('unknown')
  const [bluetoothStatus, setBluetoothStatus] = useState<SensorStatus>('unknown')
  const [nfcStatus, setNfcStatus] = useState<SensorStatus>('unknown')
  const [batteryStatus, setBatteryStatus] = useState<SensorStatus>('unknown')

  const [sensorData, setSensorData] = useState<SensorData>({
    motion: { acceleration: { x: null, y: null, z: null }, rotationRate: { alpha: null, beta: null, gamma: null } },
    orientation: { alpha: null, beta: null, gamma: null, compass: null },
    geolocation: { latitude: null, longitude: null, accuracy: null },
    touch: { force: null, touches: 0 },
  })

  // Check API availability on mount
  useEffect(() => {
    // Vibration
    setVibrationStatus('vibrate' in navigator ? 'available' : 'unavailable')

    // Bluetooth
    setBluetoothStatus('bluetooth' in navigator ? 'available' : 'unavailable')

    // NFC
    setNfcStatus('NDEFReader' in window ? 'available' : 'unavailable')

    // Battery
    setBatteryStatus('getBattery' in navigator ? 'available' : 'unavailable')

    // Touch force (basic check)
    setTouchStatus('ontouchstart' in window ? 'available' : 'unavailable')

    // Motion/Orientation - check if API exists
    if ('DeviceMotionEvent' in window) {
      setMotionStatus('prompt')
    } else {
      setMotionStatus('unavailable')
    }

    if ('DeviceOrientationEvent' in window) {
      setOrientationStatus('prompt')
    } else {
      setOrientationStatus('unavailable')
    }

    // Geolocation
    if ('geolocation' in navigator) {
      setGeoStatus('prompt')
    } else {
      setGeoStatus('unavailable')
    }

    // Camera
    if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
      setCameraStatus('prompt')
    } else {
      setCameraStatus('unavailable')
    }
  }, [])

  // Touch handlers
  useEffect(() => {
    const handleTouch = (e: TouchEvent) => {
      const touch = e.touches[0]
      setSensorData(prev => ({
        ...prev,
        touch: {
          force: touch?.force ?? null,
          touches: e.touches.length,
        }
      }))
    }

    const handleTouchEnd = () => {
      setSensorData(prev => ({
        ...prev,
        touch: { force: null, touches: 0 }
      }))
    }

    window.addEventListener('touchstart', handleTouch, { passive: true })
    window.addEventListener('touchmove', handleTouch, { passive: true })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })

    return () => {
      window.removeEventListener('touchstart', handleTouch)
      window.removeEventListener('touchmove', handleTouch)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [])

  const requestMotionPermission = useCallback(async () => {
    setMotionStatus('checking')
    try {
      // @ts-expect-error - requestPermission is iOS specific
      if (typeof DeviceMotionEvent.requestPermission === 'function') {
        // @ts-expect-error - requestPermission is iOS specific
        const permission = await DeviceMotionEvent.requestPermission()
        if (permission === 'granted') {
          setMotionStatus('granted')
          window.addEventListener('devicemotion', (e) => {
            setSensorData(prev => ({
              ...prev,
              motion: {
                acceleration: {
                  x: e.acceleration?.x ?? null,
                  y: e.acceleration?.y ?? null,
                  z: e.acceleration?.z ?? null,
                },
                rotationRate: {
                  alpha: e.rotationRate?.alpha ?? null,
                  beta: e.rotationRate?.beta ?? null,
                  gamma: e.rotationRate?.gamma ?? null,
                }
              }
            }))
          })
        } else {
          setMotionStatus('denied')
        }
      } else {
        // Non-iOS, permission not needed
        setMotionStatus('granted')
        window.addEventListener('devicemotion', (e) => {
          setSensorData(prev => ({
            ...prev,
            motion: {
              acceleration: {
                x: e.acceleration?.x ?? null,
                y: e.acceleration?.y ?? null,
                z: e.acceleration?.z ?? null,
              },
              rotationRate: {
                alpha: e.rotationRate?.alpha ?? null,
                beta: e.rotationRate?.beta ?? null,
                gamma: e.rotationRate?.gamma ?? null,
              }
            }
          }))
        })
      }
    } catch {
      setMotionStatus('denied')
    }
  }, [])

  const requestOrientationPermission = useCallback(async () => {
    setOrientationStatus('checking')
    try {
      // @ts-expect-error - requestPermission is iOS specific
      if (typeof DeviceOrientationEvent.requestPermission === 'function') {
        // @ts-expect-error - requestPermission is iOS specific
        const permission = await DeviceOrientationEvent.requestPermission()
        if (permission === 'granted') {
          setOrientationStatus('granted')
          window.addEventListener('deviceorientation', (e) => {
            setSensorData(prev => ({
              ...prev,
              orientation: {
                alpha: e.alpha,
                beta: e.beta,
                gamma: e.gamma,
                // @ts-expect-error - webkitCompassHeading is Safari specific
                compass: e.webkitCompassHeading ?? null,
              }
            }))
          })
        } else {
          setOrientationStatus('denied')
        }
      } else {
        setOrientationStatus('granted')
        window.addEventListener('deviceorientation', (e) => {
          setSensorData(prev => ({
            ...prev,
            orientation: {
              alpha: e.alpha,
              beta: e.beta,
              gamma: e.gamma,
              // @ts-expect-error - webkitCompassHeading is Safari specific
              compass: e.webkitCompassHeading ?? null,
            }
          }))
        })
      }
    } catch {
      setOrientationStatus('denied')
    }
  }, [])

  const requestGeolocation = useCallback(() => {
    setGeoStatus('checking')
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setGeoStatus('granted')
        setSensorData(prev => ({
          ...prev,
          geolocation: {
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
            accuracy: pos.coords.accuracy,
          }
        }))
      },
      () => {
        setGeoStatus('denied')
      },
      { enableHighAccuracy: true }
    )
  }, [])

  const requestCamera = useCallback(async () => {
    setCameraStatus('checking')
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      setCameraStatus('granted')
      stream.getTracks().forEach(track => track.stop())
    } catch {
      setCameraStatus('denied')
    }
  }, [])

  const getAnimationDelay = (index: number): CSSProperties => ({
    animation: `fadeInUp 0.5s ease-out ${index * 0.08}s both`,
  })

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Sensor Diagnostics</h1>
        <p style={styles.subtitle}>iOS Web API Compatibility Test</p>
      </header>

      {/* Permission Required */}
      <section style={{ ...styles.section, ...getAnimationDelay(0) }}>
        <h2 style={styles.sectionTitle}>Requires Permission</h2>

        {/* Motion */}
        <div style={{ ...styles.card, ...getAnimationDelay(1) }}>
          <div style={styles.cardHeader}>
            <h3 style={styles.cardTitle}>
              <span style={styles.icon}>📱</span>
              Motion (Accelerometer)
            </h3>
            <span style={getStatusStyle(motionStatus)}>{motionStatus}</span>
          </div>
          <p style={styles.description}>
            Device acceleration and rotation rate from gyroscope.
          </p>
          {motionStatus === 'granted' && (
            <div style={styles.dataGrid}>
              <div style={styles.dataItem}>
                <div style={styles.dataLabel}>Accel X</div>
                <div style={styles.dataValue}>{formatNumber(sensorData.motion.acceleration.x)}</div>
              </div>
              <div style={styles.dataItem}>
                <div style={styles.dataLabel}>Accel Y</div>
                <div style={styles.dataValue}>{formatNumber(sensorData.motion.acceleration.y)}</div>
              </div>
              <div style={styles.dataItem}>
                <div style={styles.dataLabel}>Accel Z</div>
                <div style={styles.dataValue}>{formatNumber(sensorData.motion.acceleration.z)}</div>
              </div>
            </div>
          )}
          {(motionStatus === 'prompt' || motionStatus === 'unknown') && (
            <button style={styles.button} onClick={requestMotionPermission}>
              Request Permission
            </button>
          )}
        </div>

        {/* Orientation */}
        <div style={{ ...styles.card, ...getAnimationDelay(2) }}>
          <div style={styles.cardHeader}>
            <h3 style={styles.cardTitle}>
              <span style={styles.icon}>🧭</span>
              Orientation & Compass
            </h3>
            <span style={getStatusStyle(orientationStatus)}>{orientationStatus}</span>
          </div>
          <p style={styles.description}>
            Device orientation angles and compass heading.
          </p>
          {orientationStatus === 'granted' && (
            <div style={styles.dataGrid}>
              <div style={styles.dataItem}>
                <div style={styles.dataLabel}>Alpha</div>
                <div style={styles.dataValue}>{formatNumber(sensorData.orientation.alpha)}°</div>
              </div>
              <div style={styles.dataItem}>
                <div style={styles.dataLabel}>Beta</div>
                <div style={styles.dataValue}>{formatNumber(sensorData.orientation.beta)}°</div>
              </div>
              <div style={styles.dataItem}>
                <div style={styles.dataLabel}>Compass</div>
                <div style={styles.dataValue}>{formatNumber(sensorData.orientation.compass)}°</div>
              </div>
            </div>
          )}
          {(orientationStatus === 'prompt' || orientationStatus === 'unknown') && (
            <button style={styles.button} onClick={requestOrientationPermission}>
              Request Permission
            </button>
          )}
        </div>

        {/* Geolocation */}
        <div style={{ ...styles.card, ...getAnimationDelay(3) }}>
          <div style={styles.cardHeader}>
            <h3 style={styles.cardTitle}>
              <span style={styles.icon}>📍</span>
              Geolocation
            </h3>
            <span style={getStatusStyle(geoStatus)}>{geoStatus}</span>
          </div>
          <p style={styles.description}>
            GPS coordinates and location accuracy.
          </p>
          {geoStatus === 'granted' && (
            <div style={styles.dataGrid}>
              <div style={styles.dataItem}>
                <div style={styles.dataLabel}>Lat</div>
                <div style={styles.dataValue}>{formatNumber(sensorData.geolocation.latitude, 4)}</div>
              </div>
              <div style={styles.dataItem}>
                <div style={styles.dataLabel}>Lng</div>
                <div style={styles.dataValue}>{formatNumber(sensorData.geolocation.longitude, 4)}</div>
              </div>
              <div style={styles.dataItem}>
                <div style={styles.dataLabel}>Accuracy</div>
                <div style={styles.dataValue}>{formatNumber(sensorData.geolocation.accuracy, 0)}m</div>
              </div>
            </div>
          )}
          {(geoStatus === 'prompt' || geoStatus === 'unknown') && (
            <button style={styles.button} onClick={requestGeolocation}>
              Request Permission
            </button>
          )}
        </div>

        {/* Camera */}
        <div style={{ ...styles.card, ...getAnimationDelay(4) }}>
          <div style={styles.cardHeader}>
            <h3 style={styles.cardTitle}>
              <span style={styles.icon}>📷</span>
              Camera & Microphone
            </h3>
            <span style={getStatusStyle(cameraStatus)}>{cameraStatus}</span>
          </div>
          <p style={styles.description}>
            WebRTC getUserMedia for video and audio capture.
          </p>
          {(cameraStatus === 'prompt' || cameraStatus === 'unknown') && (
            <button style={styles.button} onClick={requestCamera}>
              Request Permission
            </button>
          )}
        </div>
      </section>

      {/* Always Available */}
      <section style={{ ...styles.section, ...getAnimationDelay(5) }}>
        <h2 style={styles.sectionTitle}>Always Available</h2>

        {/* Touch Force */}
        <div style={{ ...styles.card, ...getAnimationDelay(6) }}>
          <div style={styles.cardHeader}>
            <h3 style={styles.cardTitle}>
              <span style={styles.icon}>👆</span>
              Touch & Force
            </h3>
            <span style={getStatusStyle(touchStatus)}>{touchStatus}</span>
          </div>
          <p style={styles.description}>
            Touch events with 3D Touch / Haptic Touch pressure.
          </p>
          {touchStatus === 'available' && (
            <div style={styles.dataGrid}>
              <div style={styles.dataItem}>
                <div style={styles.dataLabel}>Touches</div>
                <div style={styles.dataValue}>{sensorData.touch.touches}</div>
              </div>
              <div style={styles.dataItem}>
                <div style={styles.dataLabel}>Force</div>
                <div style={styles.dataValue}>{formatNumber(sensorData.touch.force, 2)}</div>
              </div>
              <div style={styles.dataItem}>
                <div style={styles.dataLabel}>Status</div>
                <div style={styles.dataValue}>{sensorData.touch.touches > 0 ? 'Active' : 'Idle'}</div>
              </div>
            </div>
          )}
          <p style={styles.unavailableNote}>Touch anywhere to see live data</p>
        </div>
      </section>

      {/* Not Supported */}
      <section style={{ ...styles.section, ...getAnimationDelay(7) }}>
        <h2 style={styles.sectionTitle}>Not Supported on iOS Safari</h2>

        <div style={{ ...styles.card, opacity: 0.7, ...getAnimationDelay(8) }}>
          <div style={styles.cardHeader}>
            <h3 style={styles.cardTitle}>
              <span style={styles.icon}>📳</span>
              Vibration API
            </h3>
            <span style={getStatusStyle(vibrationStatus)}>{vibrationStatus}</span>
          </div>
          <p style={styles.description}>
            Haptic feedback through navigator.vibrate()
          </p>
          <p style={styles.unavailableNote}>Apple declined due to privacy concerns</p>
        </div>

        <div style={{ ...styles.card, opacity: 0.7, ...getAnimationDelay(9) }}>
          <div style={styles.cardHeader}>
            <h3 style={styles.cardTitle}>
              <span style={styles.icon}>📶</span>
              Web Bluetooth
            </h3>
            <span style={getStatusStyle(bluetoothStatus)}>{bluetoothStatus}</span>
          </div>
          <p style={styles.description}>
            Connect to nearby Bluetooth devices
          </p>
          <p style={styles.unavailableNote}>Apple declined due to fingerprinting risks</p>
        </div>

        <div style={{ ...styles.card, opacity: 0.7, ...getAnimationDelay(10) }}>
          <div style={styles.cardHeader}>
            <h3 style={styles.cardTitle}>
              <span style={styles.icon}>📡</span>
              Web NFC
            </h3>
            <span style={getStatusStyle(nfcStatus)}>{nfcStatus}</span>
          </div>
          <p style={styles.description}>
            Read/write NFC tags
          </p>
          <p style={styles.unavailableNote}>Not exposed to web apps on iOS</p>
        </div>

        <div style={{ ...styles.card, opacity: 0.7, ...getAnimationDelay(11) }}>
          <div style={styles.cardHeader}>
            <h3 style={styles.cardTitle}>
              <span style={styles.icon}>🔋</span>
              Battery Status
            </h3>
            <span style={getStatusStyle(batteryStatus)}>{batteryStatus}</span>
          </div>
          <p style={styles.description}>
            Battery level and charging status
          </p>
          <p style={styles.unavailableNote}>Apple declined due to fingerprinting risks</p>
        </div>
      </section>

      <footer style={{ textAlign: 'center', marginTop: '40px', color: 'var(--text-muted)', fontSize: '0.75rem', ...getAnimationDelay(12) }}>
        <p>Built for iOS Safari sensor testing</p>
        <p style={{ fontFamily: "'JetBrains Mono', monospace", marginTop: '4px' }}>
          {new Date().toLocaleDateString()}
        </p>
      </footer>
    </div>
  )
}
