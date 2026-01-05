import { useState, useEffect, useRef, useCallback } from 'react'
import { ArrowLeft, Play, Pause, SkipForward } from 'lucide-react'
import { Waves } from '@paper-design/shaders-react'
import { cn } from '@/lib/utils'

const BASE_PATH = '/claude-playground'

const BPM = 118
const BEAT_MS = 60000 / BPM

// Sections with different intensity levels
const sections = {
  A: {
    name: 'Cruise',
    description: 'Building the vibe',
    drums: true,
    bass: true,
    arp: false,
    lead: false,
  },
  B: {
    name: 'Accelerate',
    description: 'Adding the arpeggios',
    drums: true,
    bass: true,
    arp: true,
    lead: false,
  },
  C: {
    name: 'Full Speed',
    description: 'Everything unleashed',
    drums: true,
    bass: true,
    arp: true,
    lead: true,
  },
}

const structure = ['A', 'A', 'B', 'A', 'B', 'C', 'B', 'A']

function noteToFreq(note: string): number {
  const notes: Record<string, number> = {
    'C': 0, 'C#': 1, 'D': 2, 'D#': 3, 'E': 4, 'F': 5,
    'F#': 6, 'G': 7, 'G#': 8, 'A': 9, 'A#': 10, 'B': 11
  }
  const match = note.match(/^([A-G]#?)(\d)$/)
  if (!match) return 440
  const [, noteName, octave] = match
  const semitone = notes[noteName] + (parseInt(octave) + 1) * 12
  return 440 * Math.pow(2, (semitone - 69) / 12)
}

function createSynthwaveSynth(audioContext: AudioContext) {
  const masterGain = audioContext.createGain()
  masterGain.gain.value = 0.4

  // Compressor for punch
  const compressor = audioContext.createDynamicsCompressor()
  compressor.threshold.value = -20
  compressor.knee.value = 10
  compressor.ratio.value = 4
  compressor.attack.value = 0.003
  compressor.release.value = 0.25

  // Reverb
  const convolver = audioContext.createConvolver()
  const reverbGain = audioContext.createGain()
  reverbGain.gain.value = 0.3
  const sampleRate = audioContext.sampleRate
  const impulse = audioContext.createBuffer(2, sampleRate * 1.5, sampleRate)
  for (let ch = 0; ch < 2; ch++) {
    const data = impulse.getChannelData(ch)
    for (let i = 0; i < data.length; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / data.length, 2)
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
    // 808-style kick
    kick: () => {
      const now = audioContext.currentTime
      const osc = audioContext.createOscillator()
      const gain = audioContext.createGain()

      osc.type = 'sine'
      osc.frequency.setValueAtTime(150, now)
      osc.frequency.exponentialRampToValueAtTime(40, now + 0.1)

      gain.gain.setValueAtTime(1, now)
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4)

      osc.connect(gain)
      gain.connect(masterGain)
      osc.start(now)
      osc.stop(now + 0.4)
    },

    // Snare/clap
    snare: () => {
      const now = audioContext.currentTime
      // Noise
      const bufferSize = audioContext.sampleRate * 0.1
      const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate)
      const data = buffer.getChannelData(0)
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1
      }
      const noise = audioContext.createBufferSource()
      noise.buffer = buffer

      const noiseGain = audioContext.createGain()
      const filter = audioContext.createBiquadFilter()
      filter.type = 'highpass'
      filter.frequency.value = 1000

      noiseGain.gain.setValueAtTime(0.8, now)
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.15)

      noise.connect(filter)
      filter.connect(noiseGain)
      noiseGain.connect(masterGain)
      noise.start(now)
      noise.stop(now + 0.15)
    },

    // Hi-hat
    hihat: (open = false) => {
      const now = audioContext.currentTime
      const bufferSize = audioContext.sampleRate * (open ? 0.3 : 0.05)
      const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate)
      const data = buffer.getChannelData(0)
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1
      }
      const noise = audioContext.createBufferSource()
      noise.buffer = buffer

      const gain = audioContext.createGain()
      const filter = audioContext.createBiquadFilter()
      filter.type = 'highpass'
      filter.frequency.value = 7000

      gain.gain.setValueAtTime(0.3, now)
      gain.gain.exponentialRampToValueAtTime(0.001, now + (open ? 0.2 : 0.05))

      noise.connect(filter)
      filter.connect(gain)
      gain.connect(masterGain)
      noise.start(now)
    },

    // Fat saw bass
    bass: (note: string) => {
      const now = audioContext.currentTime
      const freq = noteToFreq(note)

      const oscs = [0, 0.1, -0.1].map(detune => {
        const osc = audioContext.createOscillator()
        osc.type = 'sawtooth'
        osc.frequency.value = freq
        osc.detune.value = detune * 10
        return osc
      })

      const gain = audioContext.createGain()
      const filter = audioContext.createBiquadFilter()
      filter.type = 'lowpass'
      filter.frequency.value = 800
      filter.Q.value = 2

      gain.gain.setValueAtTime(0.4, now)
      gain.gain.setValueAtTime(0.4, now + 0.2)
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25)

      oscs.forEach(osc => osc.connect(filter))
      filter.connect(gain)
      gain.connect(masterGain)
      oscs.forEach(osc => { osc.start(now); osc.stop(now + 0.25) })
    },

    // Arpeggio synth
    arp: (note: string) => {
      const now = audioContext.currentTime
      const freq = noteToFreq(note)

      const osc = audioContext.createOscillator()
      const osc2 = audioContext.createOscillator()
      const gain = audioContext.createGain()
      const filter = audioContext.createBiquadFilter()

      osc.type = 'sawtooth'
      osc.frequency.value = freq
      osc2.type = 'square'
      osc2.frequency.value = freq * 1.01
      osc2.detune.value = 5

      filter.type = 'lowpass'
      filter.frequency.setValueAtTime(2000, now)
      filter.frequency.exponentialRampToValueAtTime(500, now + 0.15)

      gain.gain.setValueAtTime(0.2, now)
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15)

      osc.connect(filter)
      osc2.connect(filter)
      filter.connect(gain)
      gain.connect(masterGain)

      osc.start(now)
      osc2.start(now)
      osc.stop(now + 0.15)
      osc2.stop(now + 0.15)
    },

    // Lead synth
    lead: (note: string) => {
      const now = audioContext.currentTime
      const freq = noteToFreq(note)

      const osc = audioContext.createOscillator()
      const osc2 = audioContext.createOscillator()
      const gain = audioContext.createGain()

      osc.type = 'sawtooth'
      osc.frequency.value = freq
      osc2.type = 'square'
      osc2.frequency.value = freq * 2
      const osc2Gain = audioContext.createGain()
      osc2Gain.gain.value = 0.3

      gain.gain.setValueAtTime(0, now)
      gain.gain.linearRampToValueAtTime(0.25, now + 0.05)
      gain.gain.setValueAtTime(0.25, now + 0.3)
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5)

      osc.connect(gain)
      osc2.connect(osc2Gain)
      osc2Gain.connect(gain)
      gain.connect(masterGain)

      osc.start(now)
      osc2.start(now)
      osc.stop(now + 0.5)
      osc2.stop(now + 0.5)
    },

    setVolume: (v: number) => { masterGain.gain.value = v * 0.4 },
  }
}

export default function NightDrive() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0)
  const [volume, setVolume] = useState(0.8)
  const [beat, setBeat] = useState(0)

  const audioContextRef = useRef<AudioContext | null>(null)
  const synthRef = useRef<ReturnType<typeof createSynthwaveSynth> | null>(null)
  const intervalRef = useRef<number | null>(null)
  const beatCountRef = useRef(0)

  const currentSection = sections[structure[currentSectionIndex] as keyof typeof sections]

  const startPlaying = useCallback(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContext()
      synthRef.current = createSynthwaveSynth(audioContextRef.current)
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

    const bassNotes = ['E1', 'E1', 'G1', 'A1']
    const arpNotes = ['E3', 'G3', 'B3', 'E4', 'B3', 'G3', 'E3', 'D3']
    const leadNotes = ['E4', 'G4', 'A4', 'B4']

    const tick = () => {
      const synth = synthRef.current!
      const section = sections[structure[currentSectionIndex] as keyof typeof sections]
      const beatInBar = beatCountRef.current % 16

      setBeat(beatInBar)

      // Drums
      if (section.drums) {
        if (beatInBar % 4 === 0) synth.kick()
        if (beatInBar % 4 === 2) synth.snare()
        if (beatInBar % 2 === 0) synth.hihat(beatInBar % 8 === 6)
        else synth.hihat(false)
      }

      // Bass (8th notes)
      if (section.bass && beatInBar % 2 === 0) {
        const bassNote = bassNotes[Math.floor(beatInBar / 4) % bassNotes.length]
        synth.bass(bassNote)
      }

      // Arp (16th notes)
      if (section.arp) {
        const arpNote = arpNotes[beatInBar % arpNotes.length]
        synth.arp(arpNote)
      }

      // Lead (every 4 beats, section C only)
      if (section.lead && beatInBar % 4 === 0) {
        const leadNote = leadNotes[Math.floor(beatInBar / 4) % leadNotes.length]
        synth.lead(leadNote)
      }

      beatCountRef.current++

      // Auto advance section every 32 beats (2 bars)
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
    <div className="min-h-screen relative overflow-hidden">
      {/* Background shader */}
      <div className="absolute inset-0">
        <Waves
          color1="#0a0010"
          color2="#ff00ff"
          color3="#4400ff"
          speed={0.5 + (beat % 4 === 0 ? 0.3 : 0)}
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen p-4 md:p-8 flex flex-col">
        <a
          href={`${BASE_PATH}/sensory-experiences/`}
          className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-6 transition-colors w-fit"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Experiences
        </a>

        <div className="flex-1 flex flex-col items-center justify-center max-w-lg mx-auto w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-2 text-center">
            Night Drive
          </h1>
          <p className="text-white/50 text-center mb-8">
            {currentSection.description}
          </p>

          {/* Beat indicator */}
          <div className="flex gap-1 mb-6">
            {Array.from({ length: 16 }).map((_, i) => (
              <div
                key={i}
                className={cn(
                  'w-2 h-2 rounded-full transition-all',
                  i === beat ? 'bg-pink-500 scale-150' : 'bg-white/20',
                  i % 4 === 0 && 'bg-purple-500/50'
                )}
              />
            ))}
          </div>

          <button
            onClick={isPlaying ? stopPlaying : startPlaying}
            className={cn(
              'w-24 h-24 rounded-full flex items-center justify-center mb-8 transition-all',
              'bg-gradient-to-br from-pink-500/20 to-purple-500/20 hover:from-pink-500/30 hover:to-purple-500/30',
              isPlaying && 'ring-2 ring-pink-500/50'
            )}
          >
            {isPlaying ? (
              <Pause className="w-10 h-10 text-white" />
            ) : (
              <Play className="w-10 h-10 text-white ml-1" />
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
                      ? 'bg-pink-500/50 text-white scale-110'
                      : 'bg-white/10 text-white/50'
                  )}
                >
                  {sectionId}
                </div>
              ))}
            </div>
            <button
              onClick={nextSection}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white/60 hover:text-white"
            >
              <SkipForward className="w-4 h-4" />
            </button>
          </div>

          <div className="text-center mb-8">
            <div className="text-white/70 text-lg font-medium">{currentSection.name}</div>
            <div className="text-white/40 text-sm">{BPM} BPM</div>
          </div>

          {/* Active elements indicator */}
          <div className="flex gap-3 mb-8">
            {[
              { label: 'Drums', active: currentSection.drums },
              { label: 'Bass', active: currentSection.bass },
              { label: 'Arp', active: currentSection.arp },
              { label: 'Lead', active: currentSection.lead },
            ].map(({ label, active }) => (
              <div
                key={label}
                className={cn(
                  'px-3 py-1 rounded-full text-xs transition-all',
                  active ? 'bg-pink-500/30 text-pink-300' : 'bg-white/10 text-white/30'
                )}
              >
                {label}
              </div>
            ))}
          </div>

          {/* Volume */}
          <div className="w-full bg-white/5 backdrop-blur-sm rounded-xl p-4">
            <div className="flex items-center gap-4">
              <span className="text-sm text-white/60 w-16">Volume</span>
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={e => setVolume(parseFloat(e.target.value))}
                className="flex-1 accent-pink-500"
              />
              <span className="text-sm font-mono text-white/40 w-12">
                {Math.round(volume * 100)}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
