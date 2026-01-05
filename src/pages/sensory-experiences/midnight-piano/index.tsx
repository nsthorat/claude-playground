import { useState, useEffect, useRef, useCallback } from 'react'
import { ArrowLeft, Play, Pause, SkipForward } from 'lucide-react'
import { MeshGradient } from '@paper-design/shaders-react'
import { cn } from '@/lib/utils'
import { initIOSAudioUnlock } from '@/lib/ios-audio-unlock'

const BASE_PATH = '/claude-playground'

// Define sections for the piece
const sections = {
  A: {
    name: 'Solitude',
    description: 'Single notes in the dark',
    notes: ['C3', 'E3', 'G3', 'B3', 'C4'],
    tempo: 0.3, // notes per second
    velocity: 0.4,
  },
  B: {
    name: 'Awakening',
    description: 'Gentle arpeggios emerge',
    notes: ['C3', 'E3', 'G3', 'C4', 'E4', 'G4', 'C5'],
    tempo: 0.5,
    velocity: 0.5,
  },
  C: {
    name: 'Reverie',
    description: 'Full chords, climax',
    notes: ['C3', 'E3', 'G3', 'B3', 'D4', 'F4', 'A4', 'C5'],
    tempo: 0.7,
    velocity: 0.6,
  },
}

const structure = ['A', 'A', 'B', 'A', 'C', 'B', 'A']

// Piano synth with rich harmonics using Web Audio API
function createPianoSynth(audioContext: AudioContext) {
  const masterGain = audioContext.createGain()
  masterGain.gain.value = 0.25

  // High quality reverb using convolver
  const convolver = audioContext.createConvolver()
  const reverbGain = audioContext.createGain()
  reverbGain.gain.value = 0.6

  // Create longer, more natural impulse response
  const sampleRate = audioContext.sampleRate
  const length = sampleRate * 4 // 4 second reverb tail
  const impulse = audioContext.createBuffer(2, length, sampleRate)
  for (let channel = 0; channel < 2; channel++) {
    const channelData = impulse.getChannelData(channel)
    for (let i = 0; i < length; i++) {
      // Exponential decay with subtle modulation for more natural sound
      const decay = Math.pow(1 - i / length, 1.5)
      const noise = Math.random() * 2 - 1
      const modulation = 1 + Math.sin(i / 1000) * 0.1
      channelData[i] = noise * decay * modulation
    }
  }
  convolver.buffer = impulse

  // Low-pass filter for warmer reverb
  const reverbFilter = audioContext.createBiquadFilter()
  reverbFilter.type = 'lowpass'
  reverbFilter.frequency.value = 3000

  // Routing
  masterGain.connect(audioContext.destination)
  masterGain.connect(convolver)
  convolver.connect(reverbFilter)
  reverbFilter.connect(reverbGain)
  reverbGain.connect(audioContext.destination)

  return {
    playNote: (note: string, velocity: number = 0.5) => {
      const freq = noteToFreq(note)
      const now = audioContext.currentTime

      // Create multiple oscillators for richer piano timbre
      const oscillators: OscillatorNode[] = []
      const gains: GainNode[] = []
      const mainGain = audioContext.createGain()

      // Fundamental + harmonics (piano has rich overtones)
      const harmonics = [
        { ratio: 1, gain: 1.0, type: 'sine' as OscillatorType },
        { ratio: 2, gain: 0.4, type: 'sine' as OscillatorType },
        { ratio: 3, gain: 0.2, type: 'sine' as OscillatorType },
        { ratio: 4, gain: 0.15, type: 'triangle' as OscillatorType },
      ]

      harmonics.forEach(({ ratio, gain, type }) => {
        const osc = audioContext.createOscillator()
        const oscGain = audioContext.createGain()

        osc.type = type
        osc.frequency.value = freq * ratio
        // Slight detuning for warmth
        osc.detune.value = (Math.random() - 0.5) * 4

        oscGain.gain.value = gain * velocity

        osc.connect(oscGain)
        oscGain.connect(mainGain)
        oscillators.push(osc)
        gains.push(oscGain)
      })

      // Piano-like ADSR envelope
      mainGain.gain.setValueAtTime(0, now)
      mainGain.gain.linearRampToValueAtTime(velocity * 0.4, now + 0.01) // Attack
      mainGain.gain.exponentialRampToValueAtTime(velocity * 0.25, now + 0.1) // Decay
      mainGain.gain.exponentialRampToValueAtTime(velocity * 0.15, now + 1) // Sustain decay
      mainGain.gain.exponentialRampToValueAtTime(0.001, now + 5) // Release

      mainGain.connect(masterGain)

      // Start and stop all oscillators
      oscillators.forEach(osc => {
        osc.start(now)
        osc.stop(now + 5)
      })
    },
    setReverb: (amount: number) => {
      reverbGain.gain.value = amount
    },
  }
}

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

export default function MidnightPiano() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0)
  const [reverb, setReverb] = useState(0.6)
  const [density, setDensity] = useState(1)
  const [audioLevel, setAudioLevel] = useState(0)

  const audioContextRef = useRef<AudioContext | null>(null)
  const synthRef = useRef<ReturnType<typeof createPianoSynth> | null>(null)
  const intervalRef = useRef<number | null>(null)
  const sectionTimeoutRef = useRef<number | null>(null)

  const currentSection = sections[structure[currentSectionIndex] as keyof typeof sections]

  // Initialize iOS audio unlock on mount
  useEffect(() => {
    initIOSAudioUnlock()
  }, [])

  const startPlaying = useCallback(async () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContext()
      synthRef.current = createPianoSynth(audioContextRef.current)
    }

    if (audioContextRef.current.state === 'suspended') {
      await audioContextRef.current.resume()
    }

    // Play first note immediately in click handler for iOS
    const section = sections[structure[currentSectionIndex] as keyof typeof sections]
    const note = section.notes[Math.floor(Math.random() * section.notes.length)]
    synthRef.current?.playNote(note, section.velocity)

    setIsPlaying(true)
  }, [currentSectionIndex])

  const stopPlaying = useCallback(() => {
    setIsPlaying(false)
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    if (sectionTimeoutRef.current) {
      clearTimeout(sectionTimeoutRef.current)
      sectionTimeoutRef.current = null
    }
  }, [])

  const nextSection = useCallback(() => {
    setCurrentSectionIndex(prev => (prev + 1) % structure.length)
  }, [])

  // Play notes based on current section
  useEffect(() => {
    if (!isPlaying || !synthRef.current) return

    const section = sections[structure[currentSectionIndex] as keyof typeof sections]
    const baseInterval = 1000 / section.tempo / density

    const playRandomNote = () => {
      if (!synthRef.current) return
      const note = section.notes[Math.floor(Math.random() * section.notes.length)]
      synthRef.current.playNote(note, section.velocity)
      setAudioLevel(section.velocity)
      setTimeout(() => setAudioLevel(0), 500)
    }

    // Play first note immediately
    playRandomNote()

    intervalRef.current = window.setInterval(() => {
      // Add randomness to timing
      const randomDelay = Math.random() * baseInterval * 0.5
      setTimeout(playRandomNote, randomDelay)
    }, baseInterval)

    // Auto advance section after ~30 seconds
    sectionTimeoutRef.current = window.setTimeout(() => {
      nextSection()
    }, 30000)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      if (sectionTimeoutRef.current) clearTimeout(sectionTimeoutRef.current)
    }
  }, [isPlaying, currentSectionIndex, density, nextSection])

  // Update reverb when changed
  useEffect(() => {
    if (synthRef.current) {
      synthRef.current.setReverb(reverb)
    }
  }, [reverb])

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background shader */}
      <div className="absolute inset-0">
        <MeshGradient
          colors={['#0a0a1a', '#1a1a3a', '#0f0f2f', '#151530']}
          speed={0.05 + audioLevel * 0.1}
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen p-4 md:p-8 flex flex-col">
        {/* Back link */}
        <a
          href={`${BASE_PATH}/sensory-experiences/`}
          className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-6 transition-colors w-fit"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Experiences
        </a>

        {/* Main content */}
        <div className="flex-1 flex flex-col items-center justify-center max-w-lg mx-auto w-full">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white/90 mb-2 text-center">
            Midnight Piano
          </h1>
          <p className="text-white/50 text-center mb-8">
            {currentSection.description}
          </p>

          {/* Play button */}
          <button
            onClick={isPlaying ? stopPlaying : startPlaying}
            className={cn(
              'w-24 h-24 rounded-full flex items-center justify-center mb-8 transition-all',
              'bg-white/10 hover:bg-white/20 backdrop-blur-sm',
              isPlaying && 'ring-2 ring-white/30 ring-offset-2 ring-offset-transparent'
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
                      ? 'bg-white/30 text-white scale-110'
                      : 'bg-white/10 text-white/50'
                  )}
                >
                  {sectionId}
                </div>
              ))}
            </div>
            <button
              onClick={nextSection}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white/60 hover:text-white transition-all"
              title="Next section"
            >
              <SkipForward className="w-4 h-4" />
            </button>
          </div>

          {/* Current section info */}
          <div className="text-center mb-8">
            <div className="text-white/70 text-lg font-medium">
              {currentSection.name}
            </div>
            <div className="text-white/40 text-sm">
              Section {currentSectionIndex + 1} of {structure.length}
            </div>
          </div>

          {/* Controls */}
          <div className="w-full space-y-4 bg-white/5 backdrop-blur-sm rounded-xl p-4">
            <div className="flex items-center gap-4">
              <span className="text-sm text-white/60 w-20">Reverb</span>
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={reverb}
                onChange={e => setReverb(parseFloat(e.target.value))}
                className="flex-1 accent-white"
              />
              <span className="text-sm font-mono text-white/40 w-12">
                {reverb.toFixed(2)}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-white/60 w-20">Density</span>
              <input
                type="range"
                min={0.5}
                max={2}
                step={0.1}
                value={density}
                onChange={e => setDensity(parseFloat(e.target.value))}
                className="flex-1 accent-white"
              />
              <span className="text-sm font-mono text-white/40 w-12">
                {density.toFixed(1)}x
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
