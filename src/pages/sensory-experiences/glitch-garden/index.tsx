import { useState, useEffect, useRef, useCallback } from 'react'
import { ArrowLeft, Play, Pause, Vibrate } from 'lucide-react'
import { NeuroNoise } from '@paper-design/shaders-react'
import { cn } from '@/lib/utils'
import { useSensorModulation } from '@/hooks/useSensorModulation'

const BASE_PATH = '/claude-playground'

const BPM = 100
const BEAT_MS = 60000 / BPM

// Grain sources - base frequencies to granularize
const grainSources = [
  { freq: 220, name: 'bass', color: '#84cc16' },
  { freq: 440, name: 'mid', color: '#22d3ee' },
  { freq: 880, name: 'high', color: '#f472b6' },
]

// Patterns for density and chaos
const patterns = {
  A: { name: 'Seed', density: 0.3, chaos: 0.1 },
  B: { name: 'Sprout', density: 0.5, chaos: 0.3 },
  C: { name: 'Bloom', density: 0.8, chaos: 0.5 },
  D: { name: 'Decay', density: 0.4, chaos: 0.7 },
}

const structure = ['A', 'B', 'B', 'C', 'D', 'C', 'B', 'A']

function createGlitchSynth(audioContext: AudioContext) {
  const masterGain = audioContext.createGain()
  masterGain.gain.value = 0.3

  // Short, metallic reverb
  const convolver = audioContext.createConvolver()
  const reverbGain = audioContext.createGain()
  reverbGain.gain.value = 0.3
  const sampleRate = audioContext.sampleRate
  const length = sampleRate * 0.5
  const impulse = audioContext.createBuffer(2, length, sampleRate)
  for (let ch = 0; ch < 2; ch++) {
    const data = impulse.getChannelData(ch)
    for (let i = 0; i < length; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, 3)
    }
  }
  convolver.buffer = impulse

  masterGain.connect(audioContext.destination)
  masterGain.connect(convolver)
  convolver.connect(reverbGain)
  reverbGain.connect(audioContext.destination)

  // Pre-generate grain buffers
  const grainBuffers: AudioBuffer[] = []
  const grainDurations = [0.02, 0.04, 0.08, 0.12]

  grainDurations.forEach(dur => {
    const length = Math.floor(sampleRate * dur)
    const buffer = audioContext.createBuffer(1, length, sampleRate)
    const data = buffer.getChannelData(0)
    for (let i = 0; i < length; i++) {
      // Hanning window
      const window = 0.5 * (1 - Math.cos(2 * Math.PI * i / length))
      data[i] = window
    }
    grainBuffers.push(buffer)
  })

  return {
    // Single grain - micro fragment of sound
    grain: (freq: number, pan: number = 0, grainSize: number = 0) => {
      const now = audioContext.currentTime

      const osc = audioContext.createOscillator()
      const gain = audioContext.createGain()
      const panner = audioContext.createStereoPanner()

      // Random waveform for variety
      const waveforms: OscillatorType[] = ['sine', 'triangle', 'square', 'sawtooth']
      osc.type = waveforms[Math.floor(Math.random() * waveforms.length)]
      osc.frequency.value = freq * (0.95 + Math.random() * 0.1) // Slight detune

      const duration = grainDurations[grainSize] || 0.04

      // Grain envelope
      gain.gain.setValueAtTime(0, now)
      gain.gain.linearRampToValueAtTime(0.3, now + duration * 0.1)
      gain.gain.setValueAtTime(0.3, now + duration * 0.5)
      gain.gain.linearRampToValueAtTime(0, now + duration)

      panner.pan.value = pan

      osc.connect(gain)
      gain.connect(panner)
      panner.connect(masterGain)

      osc.start(now)
      osc.stop(now + duration)
    },

    // Burst - rapid succession of grains
    burst: (freq: number, count: number = 5) => {
      const now = audioContext.currentTime
      const burstDuration = 0.15

      for (let i = 0; i < count; i++) {
        const osc = audioContext.createOscillator()
        const gain = audioContext.createGain()
        const panner = audioContext.createStereoPanner()

        osc.type = Math.random() > 0.5 ? 'sine' : 'triangle'
        osc.frequency.value = freq * (0.9 + Math.random() * 0.2)

        const startTime = now + (i / count) * burstDuration
        const grainLen = burstDuration / count * 0.8

        gain.gain.setValueAtTime(0, startTime)
        gain.gain.linearRampToValueAtTime(0.15, startTime + grainLen * 0.2)
        gain.gain.linearRampToValueAtTime(0, startTime + grainLen)

        panner.pan.value = (Math.random() - 0.5) * 1.5

        osc.connect(gain)
        gain.connect(panner)
        panner.connect(masterGain)

        osc.start(startTime)
        osc.stop(startTime + grainLen)
      }
    },

    // Stutter - repeating fragment
    stutter: (freq: number, repeats: number = 4) => {
      const now = audioContext.currentTime
      const interval = 0.06

      for (let i = 0; i < repeats; i++) {
        const osc = audioContext.createOscillator()
        const gain = audioContext.createGain()

        osc.type = 'square'
        osc.frequency.value = freq

        const startTime = now + i * interval
        const duration = interval * 0.5

        gain.gain.setValueAtTime(0.2, startTime)
        gain.gain.exponentialRampToValueAtTime(0.01, startTime + duration)

        osc.connect(gain)
        gain.connect(masterGain)

        osc.start(startTime)
        osc.stop(startTime + duration)
      }
    },

    // Static - noise burst
    static: (duration: number = 0.1) => {
      const now = audioContext.currentTime
      const bufferSize = Math.floor(audioContext.sampleRate * duration)
      const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate)
      const data = buffer.getChannelData(0)

      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / bufferSize, 2)
      }

      const noise = audioContext.createBufferSource()
      noise.buffer = buffer

      const gain = audioContext.createGain()
      const filter = audioContext.createBiquadFilter()
      filter.type = 'bandpass'
      filter.frequency.value = 2000 + Math.random() * 4000
      filter.Q.value = 2

      gain.gain.value = 0.15

      noise.connect(filter)
      filter.connect(gain)
      gain.connect(masterGain)
      noise.start(now)
    },

    setVolume: (v: number) => { masterGain.gain.value = v * 0.3 },
  }
}

export default function GlitchGarden() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0)
  const [volume, setVolume] = useState(0.8)
  const [activeGrains, setActiveGrains] = useState<number[]>([])
  const [shakeEnabled, setShakeEnabled] = useState(false)
  const [shakeIntensity, setShakeIntensity] = useState(0)

  const audioContextRef = useRef<AudioContext | null>(null)
  const synthRef = useRef<ReturnType<typeof createGlitchSynth> | null>(null)
  const intervalRef = useRef<number | null>(null)
  const lastShakeTimeRef = useRef(0)

  const { shake, requestPermission, permissionGranted } = useSensorModulation()

  const currentPattern = patterns[structure[currentSectionIndex] as keyof typeof patterns]

  // Handle shake enable
  const handleEnableShake = useCallback(async () => {
    await requestPermission()
    setShakeEnabled(true)
  }, [requestPermission])

  // Shake detection and glitch trigger
  useEffect(() => {
    if (!shakeEnabled || !permissionGranted || !isPlaying || !synthRef.current) return

    // Update intensity display
    setShakeIntensity(Math.min(shake / 20, 1))

    // Trigger glitch on shake above threshold
    const now = Date.now()
    const SHAKE_THRESHOLD = 12
    const SHAKE_COOLDOWN = 100 // ms between triggers

    if (shake > SHAKE_THRESHOLD && now - lastShakeTimeRef.current > SHAKE_COOLDOWN) {
      lastShakeTimeRef.current = now
      const synth = synthRef.current

      // Intensity determines glitch type
      const intensity = Math.min((shake - SHAKE_THRESHOLD) / 20, 1)

      if (intensity > 0.7) {
        // Big shake = multiple effects
        const source = grainSources[Math.floor(Math.random() * grainSources.length)]
        synth.burst(source.freq, 5 + Math.floor(Math.random() * 5))
        synth.stutter(source.freq * 2, 4)
        synth.static(0.15)
      } else if (intensity > 0.4) {
        // Medium shake = burst + stutter
        const source = grainSources[Math.floor(Math.random() * grainSources.length)]
        synth.burst(source.freq, 3 + Math.floor(Math.random() * 3))
        synth.stutter(source.freq, 2)
      } else {
        // Light shake = single effect
        const source = grainSources[Math.floor(Math.random() * grainSources.length)]
        if (Math.random() > 0.5) {
          synth.burst(source.freq, 3)
        } else {
          synth.static(0.08)
        }
      }
    }
  }, [shake, shakeEnabled, permissionGranted, isPlaying])

  const startPlaying = useCallback(async () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContext()
      synthRef.current = createGlitchSynth(audioContextRef.current)
    }
    if (audioContextRef.current.state === 'suspended') {
      await audioContextRef.current.resume()
    }
    // Play first grain immediately in click handler for iOS
    const source = grainSources[0]
    synthRef.current?.grain(source.freq, -0.5, 1)
    setIsPlaying(true)
  }, [])

  const stopPlaying = useCallback(() => {
    setIsPlaying(false)
    if (intervalRef.current) clearInterval(intervalRef.current)
    setActiveGrains([])
  }, [])

  useEffect(() => {
    if (!isPlaying || !synthRef.current) return

    let beatCount = 0
    const synth = synthRef.current

    const tick = () => {
      const pattern = patterns[structure[currentSectionIndex] as keyof typeof patterns]
      const activeIndices: number[] = []

      // Base grains based on density
      grainSources.forEach((source, i) => {
        if (Math.random() < pattern.density) {
          const pan = (i / grainSources.length) * 1.6 - 0.8
          const grainSize = Math.floor(Math.random() * 4)
          synth.grain(source.freq, pan, grainSize)
          activeIndices.push(i)
        }
      })

      // Chaos events
      if (Math.random() < pattern.chaos * 0.3) {
        const source = grainSources[Math.floor(Math.random() * grainSources.length)]
        synth.burst(source.freq, 3 + Math.floor(Math.random() * 5))
      }

      if (Math.random() < pattern.chaos * 0.2) {
        const source = grainSources[Math.floor(Math.random() * grainSources.length)]
        synth.stutter(source.freq, 2 + Math.floor(Math.random() * 4))
      }

      if (Math.random() < pattern.chaos * 0.15) {
        synth.static(0.05 + Math.random() * 0.1)
      }

      setActiveGrains(activeIndices)

      beatCount++

      // Advance section every 32 beats
      if (beatCount % 32 === 0) {
        setCurrentSectionIndex(prev => (prev + 1) % structure.length)
      }
    }

    // Faster tick rate for granular feel
    intervalRef.current = window.setInterval(tick, BEAT_MS / 4) // 16th notes

    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [isPlaying, currentSectionIndex])

  useEffect(() => {
    if (synthRef.current) synthRef.current.setVolume(volume)
  }, [volume])

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background - organic digital texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-emerald-950 to-zinc-950">
        <NeuroNoise
          colorFront="#22c55e"
          colorBack="#0a0a0a"
          scale={1.5}
          speed={0.4}
          style={{ width: '100%', height: '100%', opacity: 0.5 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen p-4 md:p-8 flex flex-col">
        <a
          href={`${BASE_PATH}/sensory-experiences/`}
          className="inline-flex items-center gap-2 text-lime-300/60 hover:text-lime-200 mb-6 transition-colors w-fit"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Experiences
        </a>

        <div className="flex-1 flex flex-col items-center justify-center max-w-lg mx-auto w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-cyan-300 mb-2 text-center">
            Glitch Garden
          </h1>
          <p className="text-lime-300/60 text-center mb-2">
            {currentPattern.name}
          </p>
          <p className="text-lime-400/30 text-xs mb-8">
            Density: {Math.round(currentPattern.density * 100)}% · Chaos: {Math.round(currentPattern.chaos * 100)}%
          </p>

          {/* Grain visualization */}
          <div className="flex gap-4 mb-8">
            {grainSources.map((source, i) => (
              <div
                key={source.name}
                className={cn(
                  'w-16 h-16 rounded-full flex items-center justify-center transition-all',
                  activeGrains.includes(i) ? 'scale-125' : 'scale-100'
                )}
                style={{
                  backgroundColor: activeGrains.includes(i) ? source.color : `${source.color}33`,
                  boxShadow: activeGrains.includes(i) ? `0 0 30px ${source.color}66` : 'none',
                }}
              >
                <span className="text-xs font-mono text-white/80">{source.name}</span>
              </div>
            ))}
          </div>

          <button
            onClick={isPlaying ? stopPlaying : startPlaying}
            className={cn(
              'w-24 h-24 rounded-full flex items-center justify-center mb-8 transition-all',
              'bg-lime-500/20 hover:bg-lime-500/30 backdrop-blur-sm border border-lime-400/30',
              isPlaying && 'ring-2 ring-lime-400/50'
            )}
          >
            {isPlaying ? (
              <Pause className="w-10 h-10 text-lime-200" />
            ) : (
              <Play className="w-10 h-10 text-lime-200 ml-1" />
            )}
          </button>

          {/* Section indicator */}
          <div className="flex gap-2 mb-8">
            {structure.map((sectionId, i) => (
              <div
                key={i}
                className={cn(
                  'w-8 h-8 rounded-lg flex items-center justify-center text-sm font-mono transition-all',
                  i === currentSectionIndex
                    ? 'bg-lime-500/50 text-lime-100 scale-110'
                    : 'bg-zinc-800/30 text-zinc-400/50'
                )}
              >
                {sectionId}
              </div>
            ))}
          </div>

          <div className="text-center mb-8">
            <div className="text-lime-300/40 text-sm">{BPM} BPM</div>
          </div>

          {/* Controls */}
          <div className="w-full bg-zinc-800/30 backdrop-blur-sm rounded-xl p-4 border border-lime-500/20 space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-sm text-lime-300/60 w-16">Volume</span>
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={e => setVolume(parseFloat(e.target.value))}
                className="flex-1 accent-lime-400"
              />
              <span className="text-sm font-mono text-lime-300/40 w-12">
                {Math.round(volume * 100)}%
              </span>
            </div>

            {/* Shake control */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Vibrate className="w-4 h-4 text-lime-400/60" />
                <span className="text-sm text-lime-300/60">Shake to glitch</span>
              </div>
              {!shakeEnabled ? (
                <button
                  onClick={handleEnableShake}
                  className="px-3 py-1 rounded-lg text-sm bg-lime-900/30 text-lime-400 hover:bg-lime-800/30 transition-all"
                >
                  Enable
                </button>
              ) : (
                <div className="flex items-center gap-2">
                  {/* Shake intensity meter */}
                  <div className="w-16 h-2 bg-zinc-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-lime-400 transition-all"
                      style={{ width: `${shakeIntensity * 100}%` }}
                    />
                  </div>
                  <span className="px-2 py-0.5 rounded text-xs bg-lime-500/30 text-lime-200">
                    Active
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Info */}
          <p className="text-lime-300/30 text-xs text-center mt-6 max-w-sm">
            Micro-loops and fragmented textures.
            Digital organisms growing in the gaps.
          </p>
        </div>
      </div>
    </div>
  )
}
