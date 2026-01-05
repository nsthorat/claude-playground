import { useState, useEffect, useRef, useCallback } from 'react'
import { ArrowLeft, Play, Pause, Volume2, Smartphone } from 'lucide-react'
import { MeshGradient } from '@paper-design/shaders-react'
import { cn } from '@/lib/utils'
import { useSensorModulation, mapRange } from '@/hooks/useSensorModulation'
import { initIOSAudioUnlock } from '@/lib/ios-audio-unlock'

const BASE_PATH = '/claude-playground'

// Harmonic series based on fundamental
const harmonicRatios = [1, 2, 3, 4, 5, 6, 8]

// Chord progressions in pure ratios (just intonation)
const chordSets = {
  A: { name: 'Foundation', fundamental: 55, ratios: [1, 1.5, 2, 3] }, // A1, E2, A2, A3
  B: { name: 'Fifth', fundamental: 55, ratios: [1, 1.5, 2, 2.25, 3] }, // A1, E2, A2, B2, A3
  C: { name: 'Modal', fundamental: 55, ratios: [1, 1.2, 1.5, 2, 2.4, 3] }, // More complex
  D: { name: 'Ascension', fundamental: 73.42, ratios: [1, 1.5, 2, 3, 4] }, // D2
}

const structure = ['A', 'A', 'B', 'A', 'C', 'B', 'D', 'A']

function createDroneSynth(audioContext: AudioContext) {
  const masterGain = audioContext.createGain()
  masterGain.gain.value = 0.3

  // Cathedral reverb - very long
  const convolver = audioContext.createConvolver()
  const reverbGain = audioContext.createGain()
  reverbGain.gain.value = 0.8
  const sampleRate = audioContext.sampleRate
  const length = sampleRate * 6 // 6 second tail
  const impulse = audioContext.createBuffer(2, length, sampleRate)
  for (let ch = 0; ch < 2; ch++) {
    const data = impulse.getChannelData(ch)
    for (let i = 0; i < length; i++) {
      const decay = Math.pow(1 - i / length, 1.1)
      const modulation = 1 + Math.sin(i / 5000) * 0.05
      data[i] = (Math.random() * 2 - 1) * decay * modulation
    }
  }
  convolver.buffer = impulse

  // Pre-delay for reverb
  const preDelay = audioContext.createDelay(0.1)
  preDelay.delayTime.value = 0.05

  // Warmth filter (exposed for sensor modulation)
  const warmth = audioContext.createBiquadFilter()
  warmth.type = 'lowpass'
  warmth.frequency.value = 2500
  warmth.Q.value = 0.5

  // Panner (exposed for sensor modulation)
  const panner = audioContext.createStereoPanner()
  panner.pan.value = 0

  // Routing
  masterGain.connect(warmth)
  warmth.connect(panner)
  panner.connect(audioContext.destination)
  warmth.connect(preDelay)
  preDelay.connect(convolver)
  convolver.connect(reverbGain)
  reverbGain.connect(audioContext.destination)

  // Active oscillators
  const activeOscillators: { osc: OscillatorNode; gain: GainNode }[] = []

  return {
    // Start a continuous drone
    startDrone: (fundamental: number, ratios: number[]) => {
      // Fade out existing drones
      activeOscillators.forEach(({ osc, gain }) => {
        const now = audioContext.currentTime
        gain.gain.setValueAtTime(gain.gain.value, now)
        gain.gain.exponentialRampToValueAtTime(0.001, now + 4)
        setTimeout(() => {
          try { osc.stop() } catch {}
        }, 5000)
      })
      activeOscillators.length = 0

      // Create new drones with crossfade
      ratios.forEach((ratio, i) => {
        const freq = fundamental * ratio
        const osc = audioContext.createOscillator()
        const gain = audioContext.createGain()

        // Use sine for pure drone
        osc.type = 'sine'
        osc.frequency.value = freq

        // Slight random detune for richness
        osc.detune.value = (Math.random() - 0.5) * 5

        // Each partial has different volume
        const partialGain = 0.15 / Math.sqrt(i + 1)
        const now = audioContext.currentTime

        gain.gain.setValueAtTime(0, now)
        // Slow fade in
        gain.gain.linearRampToValueAtTime(partialGain, now + 4 + i * 0.5)

        osc.connect(gain)
        gain.connect(masterGain)
        osc.start(now)

        activeOscillators.push({ osc, gain })
      })

      // Add subtle harmonic shimmer
      const shimmerOsc = audioContext.createOscillator()
      const shimmerGain = audioContext.createGain()
      shimmerOsc.type = 'triangle'
      shimmerOsc.frequency.value = fundamental * 8
      shimmerGain.gain.setValueAtTime(0, audioContext.currentTime)
      shimmerGain.gain.linearRampToValueAtTime(0.02, audioContext.currentTime + 6)

      shimmerOsc.connect(shimmerGain)
      shimmerGain.connect(masterGain)
      shimmerOsc.start()

      activeOscillators.push({ osc: shimmerOsc, gain: shimmerGain })
    },

    stopAll: () => {
      activeOscillators.forEach(({ osc, gain }) => {
        const now = audioContext.currentTime
        gain.gain.setValueAtTime(gain.gain.value, now)
        gain.gain.exponentialRampToValueAtTime(0.001, now + 3)
        setTimeout(() => {
          try { osc.stop() } catch {}
        }, 4000)
      })
      activeOscillators.length = 0
    },

    setVolume: (v: number) => { masterGain.gain.value = v * 0.3 },

    // Expose for sensor modulation
    setFilterFreq: (freq: number) => { warmth.frequency.value = freq },
    setPan: (pan: number) => { panner.pan.value = pan },
  }
}

export default function DroneCathedral() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0)
  const [volume, setVolume] = useState(0.8)
  const [autoAdvance, setAutoAdvance] = useState(true)
  const [motionEnabled, setMotionEnabled] = useState(false)

  const audioContextRef = useRef<AudioContext | null>(null)
  const synthRef = useRef<ReturnType<typeof createDroneSynth> | null>(null)
  const sectionTimeoutRef = useRef<number | null>(null)

  const { tilt, requestPermission, permissionGranted, needsPermission } = useSensorModulation()

  const currentChord = chordSets[structure[currentSectionIndex] as keyof typeof chordSets]

  // Handle motion permission request
  const handleEnableMotion = useCallback(async () => {
    await requestPermission()
    setMotionEnabled(true)
  }, [requestPermission])

  // Apply sensor modulation when tilt changes
  useEffect(() => {
    if (!motionEnabled || !permissionGranted || !synthRef.current || !isPlaying) return

    // Map beta (front/back tilt) to filter frequency
    // Phone flat (0°) = 1500Hz, forward (+45°) = 4000Hz, back (-45°) = 300Hz
    const filterFreq = mapRange(tilt.beta, -45, 45, 300, 4000)
    synthRef.current.setFilterFreq(filterFreq)

    // Map gamma (left/right tilt) to pan
    // Left tilt = pan left, right tilt = pan right
    const pan = mapRange(tilt.gamma, -45, 45, -1, 1)
    synthRef.current.setPan(pan)
  }, [tilt, motionEnabled, permissionGranted, isPlaying])

  // Initialize iOS audio unlock on mount
  useEffect(() => {
    initIOSAudioUnlock()
  }, [])

  const startPlaying = useCallback(async () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContext()
      synthRef.current = createDroneSynth(audioContextRef.current)
    }
    if (audioContextRef.current.state === 'suspended') {
      await audioContextRef.current.resume()
    }
    // Start audio immediately in the click handler for iOS
    const chord = chordSets[structure[currentSectionIndex] as keyof typeof chordSets]
    synthRef.current?.startDrone(chord.fundamental, chord.ratios)
    setIsPlaying(true)
  }, [currentSectionIndex])

  const stopPlaying = useCallback(() => {
    setIsPlaying(false)
    synthRef.current?.stopAll()
    if (sectionTimeoutRef.current) {
      clearTimeout(sectionTimeoutRef.current)
      sectionTimeoutRef.current = null
    }
  }, [])

  const nextSection = useCallback(() => {
    setCurrentSectionIndex(prev => (prev + 1) % structure.length)
  }, [])

  // Track previous section to detect changes (not initial play)
  const prevSectionRef = useRef(currentSectionIndex)

  // Update drone when section changes (not on initial play - that's handled in startPlaying)
  useEffect(() => {
    if (!isPlaying || !synthRef.current) return

    // Only start drone if section actually changed (not on initial play)
    if (prevSectionRef.current !== currentSectionIndex) {
      const chord = chordSets[structure[currentSectionIndex] as keyof typeof chordSets]
      synthRef.current.startDrone(chord.fundamental, chord.ratios)
    }
    prevSectionRef.current = currentSectionIndex

    // Auto advance every 45 seconds
    if (autoAdvance) {
      sectionTimeoutRef.current = window.setTimeout(() => {
        nextSection()
      }, 45000)
    }

    return () => {
      if (sectionTimeoutRef.current) {
        clearTimeout(sectionTimeoutRef.current)
      }
    }
  }, [isPlaying, currentSectionIndex, autoAdvance, nextSection])

  useEffect(() => {
    if (synthRef.current) synthRef.current.setVolume(volume)
  }, [volume])

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background - deep ethereal gradient */}
      <div className="absolute inset-0">
        <MeshGradient
          colors={['#0a0015', '#150030', '#0a0020', '#100025']}
          speed={0.03}
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle light rays */}
      {isPlaying && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-violet-300/20 via-violet-500/5 to-transparent"
            style={{ animation: 'pulse 8s ease-in-out infinite' }}
          />
          <div
            className="absolute top-0 left-1/3 -translate-x-1/2 w-px h-full bg-gradient-to-b from-indigo-300/10 via-indigo-500/5 to-transparent"
            style={{ animation: 'pulse 10s ease-in-out infinite', animationDelay: '2s' }}
          />
          <div
            className="absolute top-0 left-2/3 -translate-x-1/2 w-px h-full bg-gradient-to-b from-purple-300/10 via-purple-500/5 to-transparent"
            style={{ animation: 'pulse 12s ease-in-out infinite', animationDelay: '4s' }}
          />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 min-h-screen p-4 md:p-8 flex flex-col">
        <a
          href={`${BASE_PATH}/sensory-experiences/`}
          className="inline-flex items-center gap-2 text-violet-300/60 hover:text-violet-200 mb-6 transition-colors w-fit"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Experiences
        </a>

        <div className="flex-1 flex flex-col items-center justify-center max-w-lg mx-auto w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-indigo-300 mb-2 text-center">
            Drone Cathedral
          </h1>
          <p className="text-violet-300/50 text-center mb-8 text-sm">
            {currentChord.name}
          </p>

          {/* Frequency visualization */}
          <div className="flex gap-2 mb-8 items-end h-20">
            {currentChord.ratios.map((ratio, i) => (
              <div
                key={i}
                className={cn(
                  'w-4 rounded-full transition-all duration-1000',
                  isPlaying ? 'bg-violet-400/60' : 'bg-violet-900/30'
                )}
                style={{
                  height: isPlaying ? `${Math.min(80, 20 + (1 / ratio) * 60)}px` : '10px',
                  animationDuration: `${2 + ratio}s`,
                }}
              />
            ))}
          </div>

          <button
            onClick={isPlaying ? stopPlaying : startPlaying}
            className={cn(
              'w-24 h-24 rounded-full flex items-center justify-center mb-8 transition-all',
              'bg-violet-900/30 hover:bg-violet-800/30 backdrop-blur-sm border border-violet-500/20',
              isPlaying && 'ring-2 ring-violet-400/30'
            )}
          >
            {isPlaying ? (
              <Pause className="w-10 h-10 text-violet-200" />
            ) : (
              <Play className="w-10 h-10 text-violet-200 ml-1" />
            )}
          </button>

          {/* Section indicator */}
          <div className="flex gap-2 mb-6">
            {structure.map((sectionId, i) => (
              <button
                key={i}
                onClick={() => setCurrentSectionIndex(i)}
                className={cn(
                  'w-8 h-8 rounded-lg flex items-center justify-center text-sm font-mono transition-all',
                  i === currentSectionIndex
                    ? 'bg-violet-500/40 text-violet-100'
                    : 'bg-violet-900/20 text-violet-500/50 hover:bg-violet-800/20'
                )}
              >
                {sectionId}
              </button>
            ))}
          </div>

          {/* Fundamental frequency */}
          <div className="text-center mb-8">
            <div className="text-violet-300/40 text-xs font-mono">
              Fundamental: {currentChord.fundamental.toFixed(2)} Hz
            </div>
          </div>

          {/* Controls */}
          <div className="w-full space-y-4 bg-violet-900/20 backdrop-blur-sm rounded-xl p-4 border border-violet-500/10">
            <div className="flex items-center gap-4">
              <Volume2 className="w-4 h-4 text-violet-400/60" />
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={e => setVolume(parseFloat(e.target.value))}
                className="flex-1 accent-violet-400"
              />
              <span className="text-sm font-mono text-violet-400/40 w-12">
                {Math.round(volume * 100)}%
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-violet-400/60">Auto-evolve</span>
              <button
                onClick={() => setAutoAdvance(!autoAdvance)}
                className={cn(
                  'px-3 py-1 rounded-lg text-sm transition-all',
                  autoAdvance
                    ? 'bg-violet-500/30 text-violet-200'
                    : 'bg-violet-900/30 text-violet-500'
                )}
              >
                {autoAdvance ? 'On' : 'Off'}
              </button>
            </div>

            {/* Motion control */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-violet-400/60" />
                <span className="text-sm text-violet-400/60">Tilt control</span>
              </div>
              {!motionEnabled ? (
                <button
                  onClick={handleEnableMotion}
                  className="px-3 py-1 rounded-lg text-sm bg-violet-900/30 text-violet-400 hover:bg-violet-800/30 transition-all"
                >
                  Enable
                </button>
              ) : (
                <div className="flex items-center gap-2">
                  <span className="text-xs text-violet-300/50 font-mono">
                    {tilt.beta.toFixed(0)}° / {tilt.gamma.toFixed(0)}°
                  </span>
                  <span className="px-2 py-0.5 rounded text-xs bg-violet-500/30 text-violet-200">
                    Active
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Info */}
          <p className="text-violet-400/30 text-xs text-center mt-6 max-w-sm">
            Pure sine wave drones based on harmonic ratios.
            Let the overtones wash over you.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  )
}
