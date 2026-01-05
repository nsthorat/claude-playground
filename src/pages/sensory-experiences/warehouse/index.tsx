import { useState, useEffect, useRef, useCallback } from 'react'
import { ArrowLeft, Play, Pause, SkipForward } from 'lucide-react'
import { Waves } from '@paper-design/shaders-react'
import { cn } from '@/lib/utils'
import { initIOSAudioUnlock } from '@/lib/ios-audio-unlock'

const BASE_PATH = '/claude-playground'

const BPM = 138
const BEAT_MS = 60000 / BPM

// Sections with different intensity levels
const sections = {
  A: {
    name: 'Underground',
    description: 'The pulse begins',
    kick: true,
    hihat: true,
    bass: true,
    metal: false,
    acid: false,
  },
  B: {
    name: 'Industrial',
    description: 'Metallic textures emerge',
    kick: true,
    hihat: true,
    bass: true,
    metal: true,
    acid: false,
  },
  C: {
    name: 'Rave',
    description: 'Full intensity',
    kick: true,
    hihat: true,
    bass: true,
    metal: true,
    acid: true,
  },
}

const structure = ['A', 'A', 'B', 'A', 'B', 'C', 'B', 'C', 'A']

function createTechnoSynth(audioContext: AudioContext) {
  const masterGain = audioContext.createGain()
  masterGain.gain.value = 0.5

  // Hard compressor for punch
  const compressor = audioContext.createDynamicsCompressor()
  compressor.threshold.value = -15
  compressor.knee.value = 0
  compressor.ratio.value = 8
  compressor.attack.value = 0.001
  compressor.release.value = 0.1

  // Short room reverb
  const convolver = audioContext.createConvolver()
  const reverbGain = audioContext.createGain()
  reverbGain.gain.value = 0.15
  const sampleRate = audioContext.sampleRate
  const impulse = audioContext.createBuffer(2, sampleRate * 0.5, sampleRate)
  for (let ch = 0; ch < 2; ch++) {
    const data = impulse.getChannelData(ch)
    for (let i = 0; i < data.length; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / data.length, 3)
    }
  }
  convolver.buffer = impulse

  // Routing
  masterGain.connect(compressor)
  compressor.connect(audioContext.destination)
  compressor.connect(convolver)
  convolver.connect(reverbGain)
  reverbGain.connect(audioContext.destination)

  return {
    // Hard 909-style kick
    kick: () => {
      const now = audioContext.currentTime
      const osc = audioContext.createOscillator()
      const gain = audioContext.createGain()

      // Click transient
      const click = audioContext.createOscillator()
      const clickGain = audioContext.createGain()
      click.type = 'square'
      click.frequency.value = 1500
      clickGain.gain.setValueAtTime(0.3, now)
      clickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.01)
      click.connect(clickGain)
      clickGain.connect(masterGain)
      click.start(now)
      click.stop(now + 0.01)

      // Main kick body
      osc.type = 'sine'
      osc.frequency.setValueAtTime(180, now)
      osc.frequency.exponentialRampToValueAtTime(35, now + 0.08)

      gain.gain.setValueAtTime(1, now)
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3)

      osc.connect(gain)
      gain.connect(masterGain)
      osc.start(now)
      osc.stop(now + 0.3)
    },

    // Tight closed hihat
    hihat: (accent = false) => {
      const now = audioContext.currentTime
      const bufferSize = audioContext.sampleRate * 0.03
      const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate)
      const data = buffer.getChannelData(0)
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / bufferSize, 4)
      }
      const noise = audioContext.createBufferSource()
      noise.buffer = buffer

      const gain = audioContext.createGain()
      const filter = audioContext.createBiquadFilter()
      filter.type = 'bandpass'
      filter.frequency.value = 8000
      filter.Q.value = 2

      gain.gain.setValueAtTime(accent ? 0.4 : 0.2, now)
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03)

      noise.connect(filter)
      filter.connect(gain)
      gain.connect(masterGain)
      noise.start(now)
    },

    // Dark sub bass
    bass: (freq: number) => {
      const now = audioContext.currentTime
      const osc = audioContext.createOscillator()
      const osc2 = audioContext.createOscillator()
      const gain = audioContext.createGain()
      const filter = audioContext.createBiquadFilter()

      osc.type = 'sawtooth'
      osc.frequency.value = freq
      osc2.type = 'square'
      osc2.frequency.value = freq
      const osc2Gain = audioContext.createGain()
      osc2Gain.gain.value = 0.3

      filter.type = 'lowpass'
      filter.frequency.setValueAtTime(400, now)
      filter.frequency.exponentialRampToValueAtTime(100, now + 0.1)
      filter.Q.value = 5

      gain.gain.setValueAtTime(0.4, now)
      gain.gain.setValueAtTime(0.4, now + 0.08)
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1)

      osc.connect(filter)
      osc2.connect(osc2Gain)
      osc2Gain.connect(filter)
      filter.connect(gain)
      gain.connect(masterGain)
      osc.start(now)
      osc2.start(now)
      osc.stop(now + 0.1)
      osc2.stop(now + 0.1)
    },

    // Metallic percussion
    metal: () => {
      const now = audioContext.currentTime
      const osc1 = audioContext.createOscillator()
      const osc2 = audioContext.createOscillator()
      const gain = audioContext.createGain()
      const filter = audioContext.createBiquadFilter()

      // Inharmonic frequencies for metallic sound
      osc1.type = 'square'
      osc1.frequency.value = 800
      osc2.type = 'square'
      osc2.frequency.value = 1237 // Non-integer ratio

      filter.type = 'bandpass'
      filter.frequency.value = 2000
      filter.Q.value = 10

      gain.gain.setValueAtTime(0.15, now)
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08)

      osc1.connect(filter)
      osc2.connect(filter)
      filter.connect(gain)
      gain.connect(masterGain)
      osc1.start(now)
      osc2.start(now)
      osc1.stop(now + 0.08)
      osc2.stop(now + 0.08)
    },

    // Acid-style TB-303 line
    acid: (note: number) => {
      const now = audioContext.currentTime
      const osc = audioContext.createOscillator()
      const gain = audioContext.createGain()
      const filter = audioContext.createBiquadFilter()

      osc.type = 'sawtooth'
      osc.frequency.value = note

      filter.type = 'lowpass'
      filter.frequency.setValueAtTime(3000, now)
      filter.frequency.exponentialRampToValueAtTime(200, now + 0.15)
      filter.Q.value = 15 // High resonance for that acid squelch

      gain.gain.setValueAtTime(0.25, now)
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2)

      osc.connect(filter)
      filter.connect(gain)
      gain.connect(masterGain)
      osc.start(now)
      osc.stop(now + 0.2)
    },

    setVolume: (v: number) => { masterGain.gain.value = v * 0.5 },
  }
}

export default function Warehouse() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0)
  const [volume, setVolume] = useState(0.8)
  const [beat, setBeat] = useState(0)

  const audioContextRef = useRef<AudioContext | null>(null)
  const synthRef = useRef<ReturnType<typeof createTechnoSynth> | null>(null)
  const intervalRef = useRef<number | null>(null)
  const beatCountRef = useRef(0)

  const currentSection = sections[structure[currentSectionIndex] as keyof typeof sections]

  // Initialize iOS audio unlock on mount
  useEffect(() => {
    initIOSAudioUnlock()
  }, [])

  const startPlaying = useCallback(async () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContext()
      synthRef.current = createTechnoSynth(audioContextRef.current)
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

  // Main sequencer
  useEffect(() => {
    if (!isPlaying || !synthRef.current) return

    const bassFreqs = [55, 55, 55, 62] // A1, A1, A1, B1
    const acidNotes = [110, 138.59, 110, 82.41, 110, 146.83, 110, 123.47]

    const tick = () => {
      const synth = synthRef.current!
      const section = sections[structure[currentSectionIndex] as keyof typeof sections]
      const beatInBar = beatCountRef.current % 16

      setBeat(beatInBar)

      // Four-on-the-floor kick
      if (section.kick && beatInBar % 4 === 0) {
        synth.kick()
      }

      // Off-beat hihat pattern
      if (section.hihat) {
        if (beatInBar % 2 === 1) {
          synth.hihat(beatInBar % 4 === 3)
        }
      }

      // Bass on beats 1 and 9
      if (section.bass && (beatInBar === 0 || beatInBar === 8)) {
        const bassFreq = bassFreqs[Math.floor(beatCountRef.current / 16) % bassFreqs.length]
        synth.bass(bassFreq)
      }

      // Metallic hits on upbeats
      if (section.metal && (beatInBar === 2 || beatInBar === 6 || beatInBar === 10 || beatInBar === 14)) {
        synth.metal()
      }

      // Acid line - 16th note pattern
      if (section.acid) {
        const acidNote = acidNotes[beatInBar % acidNotes.length]
        synth.acid(acidNote)
      }

      beatCountRef.current++

      // Auto advance section every 64 beats (4 bars)
      if (beatCountRef.current % 64 === 0) {
        nextSection()
      }
    }

    intervalRef.current = window.setInterval(tick, BEAT_MS / 4) // 16th notes

    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [isPlaying, currentSectionIndex, nextSection])

  useEffect(() => {
    if (synthRef.current) synthRef.current.setVolume(volume)
  }, [volume])

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Background shader */}
      <div className="absolute inset-0">
        <Waves
          color1="#0a0000"
          color2="#300000"
          color3="#000000"
          speed={0.8 + (beat % 4 === 0 ? 0.5 : 0)}
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Strobe effect on kick */}
      {beat % 4 === 0 && isPlaying && (
        <div className="absolute inset-0 bg-red-900/10 pointer-events-none animate-pulse" />
      )}

      {/* Content */}
      <div className="relative z-10 min-h-screen p-4 md:p-8 flex flex-col">
        <a
          href={`${BASE_PATH}/sensory-experiences/`}
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-300 mb-6 transition-colors w-fit"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Experiences
        </a>

        <div className="flex-1 flex flex-col items-center justify-center max-w-lg mx-auto w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-red-600 mb-2 text-center">
            Warehouse
          </h1>
          <p className="text-zinc-500 text-center mb-8">
            {currentSection.description}
          </p>

          {/* Beat indicator */}
          <div className="flex gap-1 mb-6">
            {Array.from({ length: 16 }).map((_, i) => (
              <div
                key={i}
                className={cn(
                  'w-2 h-2 rounded-full transition-all',
                  i === beat ? 'bg-red-500 scale-150' : 'bg-zinc-700',
                  i % 4 === 0 && 'bg-zinc-500'
                )}
              />
            ))}
          </div>

          <button
            onClick={isPlaying ? stopPlaying : startPlaying}
            className={cn(
              'w-24 h-24 rounded-full flex items-center justify-center mb-8 transition-all',
              'bg-zinc-900 hover:bg-zinc-800 border border-zinc-700',
              isPlaying && 'ring-2 ring-red-500/50'
            )}
          >
            {isPlaying ? (
              <Pause className="w-10 h-10 text-zinc-300" />
            ) : (
              <Play className="w-10 h-10 text-zinc-300 ml-1" />
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
                      ? 'bg-red-900/50 text-red-400 scale-110'
                      : 'bg-zinc-800 text-zinc-600'
                  )}
                >
                  {sectionId}
                </div>
              ))}
            </div>
            <button
              onClick={nextSection}
              className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-500 hover:text-zinc-300"
            >
              <SkipForward className="w-4 h-4" />
            </button>
          </div>

          <div className="text-center mb-8">
            <div className="text-zinc-400 text-lg font-medium">{currentSection.name}</div>
            <div className="text-zinc-600 text-sm">{BPM} BPM</div>
          </div>

          {/* Active elements indicator */}
          <div className="flex gap-3 mb-8">
            {[
              { label: 'Kick', active: currentSection.kick },
              { label: 'HiHat', active: currentSection.hihat },
              { label: 'Bass', active: currentSection.bass },
              { label: 'Metal', active: currentSection.metal },
              { label: 'Acid', active: currentSection.acid },
            ].map(({ label, active }) => (
              <div
                key={label}
                className={cn(
                  'px-3 py-1 rounded-full text-xs transition-all',
                  active ? 'bg-red-900/30 text-red-400' : 'bg-zinc-800 text-zinc-600'
                )}
              >
                {label}
              </div>
            ))}
          </div>

          {/* Volume */}
          <div className="w-full bg-zinc-900/50 backdrop-blur-sm rounded-xl p-4 border border-zinc-800">
            <div className="flex items-center gap-4">
              <span className="text-sm text-zinc-500 w-16">Volume</span>
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={e => setVolume(parseFloat(e.target.value))}
                className="flex-1 accent-red-500"
              />
              <span className="text-sm font-mono text-zinc-500 w-12">
                {Math.round(volume * 100)}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
