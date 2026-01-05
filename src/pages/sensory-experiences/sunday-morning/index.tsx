import { useState, useEffect, useRef, useCallback } from 'react'
import { ArrowLeft, Play, Pause, SkipForward } from 'lucide-react'
import { Dithering } from '@paper-design/shaders-react'
import { cn } from '@/lib/utils'

const BASE_PATH = '/claude-playground'

const BPM = 75
const BEAT_MS = 60000 / BPM

// Jazz chord progressions
const chordProgressions = {
  A: ['Dm7', 'G7', 'Cmaj7', 'Fmaj7'],
  B: ['Am7', 'D7', 'Gmaj7', 'Cmaj7'],
  C: ['Fm7', 'Bb7', 'Ebmaj7', 'Abmaj7'],
}

const structure = ['A', 'A', 'B', 'A', 'C', 'B', 'A']

// Chord to frequencies mapping (simplified)
function chordToFreqs(chord: string): number[] {
  const chordMap: Record<string, number[]> = {
    'Dm7': [293.66, 349.23, 440, 523.25],
    'G7': [196, 246.94, 293.66, 349.23],
    'Cmaj7': [261.63, 329.63, 392, 493.88],
    'Fmaj7': [174.61, 220, 261.63, 329.63],
    'Am7': [220, 261.63, 329.63, 392],
    'D7': [293.66, 369.99, 440, 523.25],
    'Gmaj7': [196, 246.94, 293.66, 369.99],
    'Fm7': [174.61, 207.65, 261.63, 311.13],
    'Bb7': [233.08, 293.66, 349.23, 415.30],
    'Ebmaj7': [155.56, 196, 233.08, 293.66],
    'Abmaj7': [207.65, 261.63, 311.13, 392],
  }
  return chordMap[chord] || [261.63]
}

function createLofiSynth(audioContext: AudioContext) {
  const masterGain = audioContext.createGain()
  masterGain.gain.value = 0.35

  // Lo-fi warmth filter
  const warmth = audioContext.createBiquadFilter()
  warmth.type = 'lowpass'
  warmth.frequency.value = 3500
  warmth.Q.value = 0.7

  // Subtle saturation via waveshaper
  const waveshaper = audioContext.createWaveShaper()
  const curve = new Float32Array(256)
  for (let i = 0; i < 256; i++) {
    const x = (i / 128) - 1
    curve[i] = Math.tanh(x * 1.5)
  }
  waveshaper.curve = curve

  // Lo-fi reverb
  const convolver = audioContext.createConvolver()
  const reverbGain = audioContext.createGain()
  reverbGain.gain.value = 0.4
  const sampleRate = audioContext.sampleRate
  const impulse = audioContext.createBuffer(2, sampleRate * 1.2, sampleRate)
  for (let ch = 0; ch < 2; ch++) {
    const data = impulse.getChannelData(ch)
    for (let i = 0; i < data.length; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / data.length, 1.5)
    }
  }
  convolver.buffer = impulse

  // Routing
  masterGain.connect(warmth)
  warmth.connect(waveshaper)
  waveshaper.connect(audioContext.destination)
  waveshaper.connect(convolver)
  convolver.connect(reverbGain)
  reverbGain.connect(audioContext.destination)

  return {
    // Boom-bap kick
    kick: () => {
      const now = audioContext.currentTime
      const osc = audioContext.createOscillator()
      const gain = audioContext.createGain()

      osc.type = 'sine'
      osc.frequency.setValueAtTime(100, now)
      osc.frequency.exponentialRampToValueAtTime(50, now + 0.08)

      gain.gain.setValueAtTime(0.8, now)
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3)

      osc.connect(gain)
      gain.connect(masterGain)
      osc.start(now)
      osc.stop(now + 0.3)
    },

    // Snappy snare
    snare: () => {
      const now = audioContext.currentTime
      const bufferSize = audioContext.sampleRate * 0.15
      const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate)
      const data = buffer.getChannelData(0)
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / bufferSize, 1.5)
      }
      const noise = audioContext.createBufferSource()
      noise.buffer = buffer

      const gain = audioContext.createGain()
      const filter = audioContext.createBiquadFilter()
      filter.type = 'bandpass'
      filter.frequency.value = 1500
      filter.Q.value = 1

      gain.gain.setValueAtTime(0.6, now)
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12)

      noise.connect(filter)
      filter.connect(gain)
      gain.connect(masterGain)
      noise.start(now)
    },

    // Soft hi-hat
    hihat: () => {
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
      filter.frequency.value = 6000

      gain.gain.setValueAtTime(0.15, now)
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04)

      noise.connect(filter)
      filter.connect(gain)
      gain.connect(masterGain)
      noise.start(now)
    },

    // Rhodes-like keys
    keys: (freqs: number[]) => {
      const now = audioContext.currentTime

      freqs.forEach((freq, i) => {
        // Slight timing humanization
        const delay = i * 0.015 + Math.random() * 0.01

        const osc = audioContext.createOscillator()
        const osc2 = audioContext.createOscillator()
        const gain = audioContext.createGain()

        osc.type = 'sine'
        osc.frequency.value = freq

        osc2.type = 'sine'
        osc2.frequency.value = freq * 2
        const osc2Gain = audioContext.createGain()
        osc2Gain.gain.value = 0.2

        // Soft attack, medium release
        gain.gain.setValueAtTime(0, now + delay)
        gain.gain.linearRampToValueAtTime(0.12, now + delay + 0.05)
        gain.gain.setValueAtTime(0.12, now + delay + 0.8)
        gain.gain.exponentialRampToValueAtTime(0.001, now + delay + 1.5)

        osc.connect(gain)
        osc2.connect(osc2Gain)
        osc2Gain.connect(gain)
        gain.connect(masterGain)

        osc.start(now + delay)
        osc2.start(now + delay)
        osc.stop(now + delay + 1.5)
        osc2.stop(now + delay + 1.5)
      })
    },

    // Simple bass
    bass: (freq: number) => {
      const now = audioContext.currentTime
      const osc = audioContext.createOscillator()
      const gain = audioContext.createGain()
      const filter = audioContext.createBiquadFilter()

      osc.type = 'triangle'
      osc.frequency.value = freq / 2

      filter.type = 'lowpass'
      filter.frequency.value = 400

      gain.gain.setValueAtTime(0.4, now)
      gain.gain.setValueAtTime(0.4, now + 0.3)
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35)

      osc.connect(filter)
      filter.connect(gain)
      gain.connect(masterGain)
      osc.start(now)
      osc.stop(now + 0.35)
    },

    setVolume: (v: number) => { masterGain.gain.value = v * 0.35 },
  }
}

export default function SundayMorning() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0)
  const [volume, setVolume] = useState(0.8)
  const [swing, setSwing] = useState(0.15)
  const [beat, setBeat] = useState(0)

  const audioContextRef = useRef<AudioContext | null>(null)
  const synthRef = useRef<ReturnType<typeof createLofiSynth> | null>(null)
  const intervalRef = useRef<number | null>(null)
  const beatCountRef = useRef(0)

  const currentSectionId = structure[currentSectionIndex]
  const currentChords = chordProgressions[currentSectionId as keyof typeof chordProgressions]

  const startPlaying = useCallback(async () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContext()
      synthRef.current = createLofiSynth(audioContextRef.current)
    }
    if (audioContextRef.current.state === 'suspended') {
      await audioContextRef.current.resume()
    }
    beatCountRef.current = 0
    // Play first sound immediately in click handler for iOS
    synthRef.current?.kick()
    setIsPlaying(true)
  }, [])

  const stopPlaying = useCallback(() => {
    setIsPlaying(false)
    if (intervalRef.current) clearInterval(intervalRef.current)
  }, [])

  const nextSection = useCallback(() => {
    setCurrentSectionIndex(prev => (prev + 1) % structure.length)
  }, [])

  useEffect(() => {
    if (!isPlaying || !synthRef.current) return

    const tick = () => {
      const synth = synthRef.current!
      const beatInBar = beatCountRef.current % 8
      const chordIndex = Math.floor(beatCountRef.current / 8) % 4
      const chords = chordProgressions[structure[currentSectionIndex] as keyof typeof chordProgressions]

      setBeat(beatInBar)

      // Swing offset for off-beats
      const swingOffset = beatInBar % 2 === 1 ? swing * BEAT_MS : 0

      setTimeout(() => {
        // Drums - boom bap pattern
        if (beatInBar === 0 || beatInBar === 5) synth.kick()
        if (beatInBar === 2 || beatInBar === 6) synth.snare()
        synth.hihat()

        // Keys on chord changes (every 2 beats)
        if (beatInBar % 2 === 0) {
          const chord = chords[chordIndex]
          synth.keys(chordToFreqs(chord))
        }

        // Bass follows root
        if (beatInBar === 0 || beatInBar === 4) {
          const chord = chords[chordIndex]
          const root = chordToFreqs(chord)[0]
          synth.bass(root)
        }
      }, swingOffset)

      beatCountRef.current++

      // Auto advance section
      if (beatCountRef.current % 64 === 0) nextSection()
    }

    intervalRef.current = window.setInterval(tick, BEAT_MS / 2) // 8th notes

    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [isPlaying, currentSectionIndex, swing, nextSection])

  useEffect(() => {
    if (synthRef.current) synthRef.current.setVolume(volume)
  }, [volume])

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background - warm grain */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 via-orange-900/20 to-amber-950/40">
        <Dithering
          color1="#2d1810"
          color2="#4a2c1a"
          color3="#1a0f08"
          style={{ width: '100%', height: '100%', opacity: 0.5 }}
        />
      </div>

      <div className="relative z-10 min-h-screen p-4 md:p-8 flex flex-col">
        <a
          href={`${BASE_PATH}/sensory-experiences/`}
          className="inline-flex items-center gap-2 text-amber-200/60 hover:text-amber-200 mb-6 transition-colors w-fit"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Experiences
        </a>

        <div className="flex-1 flex flex-col items-center justify-center max-w-lg mx-auto w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-100/90 mb-2 text-center">
            Sunday Morning
          </h1>
          <p className="text-amber-200/50 text-center mb-8 text-sm">
            Lo-fi beats to relax to
          </p>

          {/* Beat indicator */}
          <div className="flex gap-2 mb-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className={cn(
                  'w-3 h-3 rounded-full transition-all',
                  i === beat ? 'bg-amber-400 scale-150' : 'bg-amber-200/20',
                  (i === 0 || i === 4) && 'bg-amber-500/40'
                )}
              />
            ))}
          </div>

          <button
            onClick={isPlaying ? stopPlaying : startPlaying}
            className={cn(
              'w-24 h-24 rounded-full flex items-center justify-center mb-8 transition-all',
              'bg-amber-500/20 hover:bg-amber-500/30 backdrop-blur-sm',
              isPlaying && 'ring-2 ring-amber-400/50'
            )}
          >
            {isPlaying ? (
              <Pause className="w-10 h-10 text-amber-100" />
            ) : (
              <Play className="w-10 h-10 text-amber-100 ml-1" />
            )}
          </button>

          {/* Current chord */}
          <div className="text-center mb-6">
            <div className="text-2xl font-mono text-amber-200/80">
              {currentChords[Math.floor(beatCountRef.current / 8) % 4]}
            </div>
            <div className="text-amber-200/40 text-sm">
              {BPM} BPM · Section {currentSectionId}
            </div>
          </div>

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
                      : 'bg-amber-200/10 text-amber-200/50'
                  )}
                >
                  {sectionId}
                </div>
              ))}
            </div>
            <button onClick={nextSection} className="p-2 rounded-lg bg-amber-200/10 hover:bg-amber-200/20 text-amber-200/60">
              <SkipForward className="w-4 h-4" />
            </button>
          </div>

          {/* Controls */}
          <div className="w-full space-y-4 bg-amber-200/5 backdrop-blur-sm rounded-xl p-4">
            <div className="flex items-center gap-4">
              <span className="text-sm text-amber-200/60 w-16">Volume</span>
              <input type="range" min={0} max={1} step={0.01} value={volume}
                onChange={e => setVolume(parseFloat(e.target.value))}
                className="flex-1 accent-amber-500" />
              <span className="text-sm font-mono text-amber-200/40 w-12">{Math.round(volume * 100)}%</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-amber-200/60 w-16">Swing</span>
              <input type="range" min={0} max={0.3} step={0.01} value={swing}
                onChange={e => setSwing(parseFloat(e.target.value))}
                className="flex-1 accent-amber-500" />
              <span className="text-sm font-mono text-amber-200/40 w-12">{Math.round(swing * 100)}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
