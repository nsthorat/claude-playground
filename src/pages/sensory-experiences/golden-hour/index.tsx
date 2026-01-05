import { useState, useEffect, useRef, useCallback } from 'react'
import { ArrowLeft, Play, Pause, SkipForward } from 'lucide-react'
import { MeshGradient } from '@paper-design/shaders-react'
import { cn } from '@/lib/utils'

const BASE_PATH = '/claude-playground'

const BPM = 95
const BEAT_MS = 60000 / BPM

// Warm major chords
const chords = {
  A: { name: 'Dawn', notes: [196, 246.94, 293.66, 392] }, // G maj7
  B: { name: 'Rising', notes: [220, 277.18, 329.63, 440] }, // A maj7
  C: { name: 'Peak', notes: [261.63, 329.63, 392, 493.88] }, // C maj7
  D: { name: 'Glow', notes: [293.66, 369.99, 440, 587.33] }, // D maj7
}

const structure = ['A', 'A', 'B', 'C', 'D', 'C', 'B', 'A']

function createGoldenSynth(audioContext: AudioContext) {
  const masterGain = audioContext.createGain()
  masterGain.gain.value = 0.35

  // Warm reverb
  const convolver = audioContext.createConvolver()
  const reverbGain = audioContext.createGain()
  reverbGain.gain.value = 0.5
  const sampleRate = audioContext.sampleRate
  const length = sampleRate * 2.5
  const impulse = audioContext.createBuffer(2, length, sampleRate)
  for (let ch = 0; ch < 2; ch++) {
    const data = impulse.getChannelData(ch)
    for (let i = 0; i < length; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, 1.8)
    }
  }
  convolver.buffer = impulse

  // Warmth filter
  const warmth = audioContext.createBiquadFilter()
  warmth.type = 'lowpass'
  warmth.frequency.value = 3000
  warmth.Q.value = 0.3

  // Routing
  masterGain.connect(warmth)
  warmth.connect(audioContext.destination)
  warmth.connect(convolver)
  convolver.connect(reverbGain)
  reverbGain.connect(audioContext.destination)

  return {
    // Warm analog-style pad
    pad: (freqs: number[]) => {
      const now = audioContext.currentTime

      freqs.forEach((freq, i) => {
        // Two detuned oscillators per note
        const oscs = [
          { type: 'sawtooth' as OscillatorType, detune: -8 },
          { type: 'sawtooth' as OscillatorType, detune: 8 },
          { type: 'triangle' as OscillatorType, detune: 0 },
        ]

        const noteGain = audioContext.createGain()
        const filter = audioContext.createBiquadFilter()
        filter.type = 'lowpass'
        filter.frequency.setValueAtTime(800, now)
        filter.frequency.linearRampToValueAtTime(1500, now + 0.5)
        filter.frequency.linearRampToValueAtTime(600, now + 3)
        filter.Q.value = 1

        oscs.forEach(({ type, detune }) => {
          const osc = audioContext.createOscillator()
          const oscGain = audioContext.createGain()

          osc.type = type
          osc.frequency.value = freq
          osc.detune.value = detune + (Math.random() - 0.5) * 4

          oscGain.gain.value = type === 'triangle' ? 0.15 : 0.1

          osc.connect(oscGain)
          oscGain.connect(filter)

          osc.start(now + i * 0.03) // Slight strum
          osc.stop(now + 4)
        })

        // Envelope
        noteGain.gain.setValueAtTime(0, now + i * 0.03)
        noteGain.gain.linearRampToValueAtTime(0.12, now + i * 0.03 + 0.2)
        noteGain.gain.setValueAtTime(0.12, now + 2.5)
        noteGain.gain.exponentialRampToValueAtTime(0.001, now + 4)

        filter.connect(noteGain)
        noteGain.connect(masterGain)
      })
    },

    // Soft kick for groove
    kick: () => {
      const now = audioContext.currentTime
      const osc = audioContext.createOscillator()
      const gain = audioContext.createGain()

      osc.type = 'sine'
      osc.frequency.setValueAtTime(80, now)
      osc.frequency.exponentialRampToValueAtTime(40, now + 0.1)

      gain.gain.setValueAtTime(0.4, now)
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3)

      osc.connect(gain)
      gain.connect(masterGain)
      osc.start(now)
      osc.stop(now + 0.3)
    },

    // Shaker/percussion
    shaker: () => {
      const now = audioContext.currentTime
      const bufferSize = audioContext.sampleRate * 0.04
      const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate)
      const data = buffer.getChannelData(0)
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / bufferSize, 3)
      }

      const noise = audioContext.createBufferSource()
      noise.buffer = buffer

      const gain = audioContext.createGain()
      const filter = audioContext.createBiquadFilter()
      filter.type = 'highpass'
      filter.frequency.value = 5000

      gain.gain.setValueAtTime(0.08, now)
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04)

      noise.connect(filter)
      filter.connect(gain)
      gain.connect(masterGain)
      noise.start(now)
    },

    // Plucky bass
    bass: (freq: number) => {
      const now = audioContext.currentTime
      const osc = audioContext.createOscillator()
      const gain = audioContext.createGain()
      const filter = audioContext.createBiquadFilter()

      osc.type = 'triangle'
      osc.frequency.value = freq / 2

      filter.type = 'lowpass'
      filter.frequency.setValueAtTime(600, now)
      filter.frequency.exponentialRampToValueAtTime(200, now + 0.3)

      gain.gain.setValueAtTime(0.35, now)
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5)

      osc.connect(filter)
      filter.connect(gain)
      gain.connect(masterGain)
      osc.start(now)
      osc.stop(now + 0.5)
    },

    setVolume: (v: number) => { masterGain.gain.value = v * 0.35 },
  }
}

export default function GoldenHour() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0)
  const [volume, setVolume] = useState(0.8)
  const [beat, setBeat] = useState(0)

  const audioContextRef = useRef<AudioContext | null>(null)
  const synthRef = useRef<ReturnType<typeof createGoldenSynth> | null>(null)
  const intervalRef = useRef<number | null>(null)
  const beatCountRef = useRef(0)

  const currentChord = chords[structure[currentSectionIndex] as keyof typeof chords]

  const startPlaying = useCallback(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContext()
      synthRef.current = createGoldenSynth(audioContextRef.current)
    }
    if (audioContextRef.current.state === 'suspended') {
      audioContextRef.current.resume()
    }
    beatCountRef.current = 0
    setIsPlaying(true)
  }, [])

  const stopPlaying = useCallback(() => {
    setIsPlaying(false)
    if (intervalRef.current) clearInterval(intervalRef.current)
  }, [])

  const nextSection = useCallback(() => {
    setCurrentSectionIndex(prev => (prev + 1) % structure.length)
  }, [])

  // Main sequencer
  useEffect(() => {
    if (!isPlaying || !synthRef.current) return

    const tick = () => {
      const synth = synthRef.current!
      const chord = chords[structure[currentSectionIndex] as keyof typeof chords]
      const beatInBar = beatCountRef.current % 8

      setBeat(beatInBar)

      // Pad on first beat of each bar
      if (beatInBar === 0) {
        synth.pad(chord.notes)
      }

      // Soft kick on 1 and 5
      if (beatInBar === 0 || beatInBar === 4) {
        synth.kick()
      }

      // Shaker pattern
      if (beatInBar % 2 === 1) {
        synth.shaker()
      }

      // Bass on beat 1
      if (beatInBar === 0) {
        synth.bass(chord.notes[0])
      }

      beatCountRef.current++

      // Auto advance every 32 beats (4 bars)
      if (beatCountRef.current % 32 === 0) {
        nextSection()
      }
    }

    intervalRef.current = window.setInterval(tick, BEAT_MS / 2) // 8th notes

    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [isPlaying, currentSectionIndex, nextSection])

  useEffect(() => {
    if (synthRef.current) synthRef.current.setVolume(volume)
  }, [volume])

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background - warm sunset gradient */}
      <div className="absolute inset-0">
        <MeshGradient
          colors={['#7c2d12', '#c2410c', '#f97316', '#fbbf24']}
          speed={0.08}
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Sun glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-gradient-to-t from-amber-500/30 via-orange-400/10 to-transparent blur-3xl" />

      {/* Content */}
      <div className="relative z-10 min-h-screen p-4 md:p-8 flex flex-col">
        <a
          href={`${BASE_PATH}/sensory-experiences/`}
          className="inline-flex items-center gap-2 text-orange-200/60 hover:text-orange-100 mb-6 transition-colors w-fit"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Experiences
        </a>

        <div className="flex-1 flex flex-col items-center justify-center max-w-lg mx-auto w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-orange-200 mb-2 text-center">
            Golden Hour
          </h1>
          <p className="text-orange-200/60 text-center mb-8">
            {currentChord.name}
          </p>

          {/* Beat indicator */}
          <div className="flex gap-2 mb-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className={cn(
                  'w-3 h-3 rounded-full transition-all',
                  i === beat ? 'bg-amber-300 scale-150' : 'bg-orange-300/30',
                  (i === 0 || i === 4) && 'bg-orange-400/50'
                )}
              />
            ))}
          </div>

          <button
            onClick={isPlaying ? stopPlaying : startPlaying}
            className={cn(
              'w-24 h-24 rounded-full flex items-center justify-center mb-8 transition-all',
              'bg-orange-500/30 hover:bg-orange-500/40 backdrop-blur-sm border border-orange-400/30',
              isPlaying && 'ring-2 ring-amber-400/50'
            )}
          >
            {isPlaying ? (
              <Pause className="w-10 h-10 text-amber-100" />
            ) : (
              <Play className="w-10 h-10 text-amber-100 ml-1" />
            )}
          </button>

          {/* Section indicator */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex gap-2">
              {structure.map((sectionId, i) => (
                <div
                  key={i}
                  className={cn(
                    'w-8 h-8 rounded-lg flex items-center justify-center text-sm font-mono transition-all',
                    i === currentSectionIndex
                      ? 'bg-amber-500/50 text-amber-100 scale-110'
                      : 'bg-orange-900/30 text-orange-300/50'
                  )}
                >
                  {sectionId}
                </div>
              ))}
            </div>
            <button
              onClick={nextSection}
              className="p-2 rounded-lg bg-orange-900/30 hover:bg-orange-800/30 text-orange-200/60 hover:text-orange-100"
            >
              <SkipForward className="w-4 h-4" />
            </button>
          </div>

          <div className="text-center mb-8">
            <div className="text-orange-200/40 text-sm">{BPM} BPM</div>
          </div>

          {/* Volume */}
          <div className="w-full bg-orange-900/20 backdrop-blur-sm rounded-xl p-4 border border-orange-500/20">
            <div className="flex items-center gap-4">
              <span className="text-sm text-orange-200/60 w-16">Volume</span>
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={e => setVolume(parseFloat(e.target.value))}
                className="flex-1 accent-amber-400"
              />
              <span className="text-sm font-mono text-orange-200/40 w-12">
                {Math.round(volume * 100)}%
              </span>
            </div>
          </div>

          {/* Info */}
          <p className="text-orange-200/30 text-xs text-center mt-6 max-w-sm">
            Warm detuned pads with a gentle groove.
            Like watching the sun set over the horizon.
          </p>
        </div>
      </div>
    </div>
  )
}
