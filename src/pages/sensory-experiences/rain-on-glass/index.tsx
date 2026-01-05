import { useState, useEffect, useRef, useCallback } from 'react'
import { ArrowLeft, Play, Pause, Volume2 } from 'lucide-react'
import { Dithering } from '@paper-design/shaders-react'
import { cn } from '@/lib/utils'

const BASE_PATH = '/claude-playground'

// Piano notes for sparse phrases
const pianoNotes = ['C4', 'E4', 'G4', 'A4', 'C5', 'D5', 'E5', 'G5']
const phrases = [
  ['C4', 'E4', 'G4'],
  ['E4', 'G4', 'C5'],
  ['G4', 'A4', 'D5'],
  ['A4', 'C5', 'E5'],
  ['C5', 'D5', 'G5'],
]

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

function createRainSynth(audioContext: AudioContext) {
  const masterGain = audioContext.createGain()
  masterGain.gain.value = 0.4

  // Long reverb for rainy atmosphere
  const convolver = audioContext.createConvolver()
  const reverbGain = audioContext.createGain()
  reverbGain.gain.value = 0.7
  const sampleRate = audioContext.sampleRate
  const length = sampleRate * 4
  const impulse = audioContext.createBuffer(2, length, sampleRate)
  for (let ch = 0; ch < 2; ch++) {
    const data = impulse.getChannelData(ch)
    for (let i = 0; i < length; i++) {
      const decay = Math.pow(1 - i / length, 1.3)
      data[i] = (Math.random() * 2 - 1) * decay
    }
  }
  convolver.buffer = impulse

  // Low-pass for warmth
  const warmthFilter = audioContext.createBiquadFilter()
  warmthFilter.type = 'lowpass'
  warmthFilter.frequency.value = 4000

  masterGain.connect(warmthFilter)
  warmthFilter.connect(audioContext.destination)
  warmthFilter.connect(convolver)
  convolver.connect(reverbGain)
  reverbGain.connect(audioContext.destination)

  // Rain noise generator
  let rainSource: AudioBufferSourceNode | null = null
  let rainGain: GainNode | null = null

  return {
    startRain: () => {
      if (rainSource) return

      // Create longer noise buffer for continuous rain
      const bufferSize = audioContext.sampleRate * 2
      const buffer = audioContext.createBuffer(2, bufferSize, audioContext.sampleRate)

      for (let ch = 0; ch < 2; ch++) {
        const data = buffer.getChannelData(ch)
        for (let i = 0; i < bufferSize; i++) {
          // Shaped noise for rain-like texture
          data[i] = (Math.random() * 2 - 1) * 0.5
          // Add occasional "drops" with bursts
          if (Math.random() < 0.001) {
            data[i] = (Math.random() - 0.5) * 2
          }
        }
      }

      rainSource = audioContext.createBufferSource()
      rainSource.buffer = buffer
      rainSource.loop = true

      rainGain = audioContext.createGain()
      rainGain.gain.value = 0.15

      // Band-pass filter for rain character
      const rainFilter = audioContext.createBiquadFilter()
      rainFilter.type = 'bandpass'
      rainFilter.frequency.value = 3000
      rainFilter.Q.value = 0.5

      // High-pass for shimmer
      const shimmerFilter = audioContext.createBiquadFilter()
      shimmerFilter.type = 'highpass'
      shimmerFilter.frequency.value = 6000
      const shimmerGain = audioContext.createGain()
      shimmerGain.gain.value = 0.05

      rainSource.connect(rainFilter)
      rainFilter.connect(rainGain)
      rainGain.connect(masterGain)

      rainSource.connect(shimmerFilter)
      shimmerFilter.connect(shimmerGain)
      shimmerGain.connect(masterGain)

      rainSource.start()
    },

    stopRain: () => {
      if (rainSource) {
        rainSource.stop()
        rainSource = null
        rainGain = null
      }
    },

    setRainIntensity: (intensity: number) => {
      if (rainGain) {
        rainGain.gain.value = intensity * 0.2
      }
    },

    // Soft piano note with lots of reverb
    playPiano: (freq: number, velocity: number = 0.3) => {
      const now = audioContext.currentTime

      // Soft piano with rich harmonics
      const harmonics = [
        { ratio: 1, gain: 1.0, type: 'sine' as OscillatorType },
        { ratio: 2, gain: 0.3, type: 'sine' as OscillatorType },
        { ratio: 3, gain: 0.1, type: 'triangle' as OscillatorType },
      ]

      const noteGain = audioContext.createGain()

      harmonics.forEach(({ ratio, gain, type }) => {
        const osc = audioContext.createOscillator()
        const oscGain = audioContext.createGain()

        osc.type = type
        osc.frequency.value = freq * ratio
        osc.detune.value = (Math.random() - 0.5) * 3

        oscGain.gain.value = gain * velocity

        osc.connect(oscGain)
        oscGain.connect(noteGain)

        osc.start(now)
        osc.stop(now + 6)
      })

      // Very soft attack, long decay
      noteGain.gain.setValueAtTime(0, now)
      noteGain.gain.linearRampToValueAtTime(velocity * 0.3, now + 0.1)
      noteGain.gain.exponentialRampToValueAtTime(velocity * 0.1, now + 2)
      noteGain.gain.exponentialRampToValueAtTime(0.001, now + 5)

      noteGain.connect(masterGain)
    },

    // Play a sparse phrase
    playPhrase: (notes: string[]) => {
      notes.forEach((note, i) => {
        const delay = i * (1.5 + Math.random() * 1) // Random spacing
        setTimeout(() => {
          const freq = noteToFreq(note)
          const velocity = 0.2 + Math.random() * 0.15
          // @ts-ignore
          createRainSynth.instance?.playPiano(freq, velocity)
        }, delay * 1000)
      })
    },

    setVolume: (v: number) => { masterGain.gain.value = v * 0.4 },
  }
}

export default function RainOnGlass() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.8)
  const [rainIntensity, setRainIntensity] = useState(0.7)
  const [lastNote, setLastNote] = useState('')

  const audioContextRef = useRef<AudioContext | null>(null)
  const synthRef = useRef<ReturnType<typeof createRainSynth> | null>(null)
  const phraseIntervalRef = useRef<number | null>(null)

  const startPlaying = useCallback(async () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContext()
      synthRef.current = createRainSynth(audioContextRef.current)
    }
    if (audioContextRef.current.state === 'suspended') {
      await audioContextRef.current.resume()
    }

    // Start rain immediately in click handler for iOS
    synthRef.current?.startRain()
    setIsPlaying(true)
  }, [])

  const stopPlaying = useCallback(() => {
    setIsPlaying(false)
    synthRef.current?.stopRain()
    if (phraseIntervalRef.current) {
      clearInterval(phraseIntervalRef.current)
      phraseIntervalRef.current = null
    }
  }, [])

  // Sparse piano phrases
  useEffect(() => {
    if (!isPlaying || !synthRef.current) return

    const playRandomNote = () => {
      if (!synthRef.current) return

      // Sometimes play single notes, sometimes short phrases
      if (Math.random() < 0.4) {
        // Single note
        const note = pianoNotes[Math.floor(Math.random() * pianoNotes.length)]
        synthRef.current.playPiano(noteToFreq(note), 0.2 + Math.random() * 0.15)
        setLastNote(note)
      } else if (Math.random() < 0.3) {
        // Short phrase
        const phrase = phrases[Math.floor(Math.random() * phrases.length)]
        phrase.forEach((note, i) => {
          setTimeout(() => {
            if (synthRef.current) {
              synthRef.current.playPiano(noteToFreq(note), 0.15 + Math.random() * 0.1)
              setLastNote(note)
            }
          }, i * (1200 + Math.random() * 800))
        })
      }
      // Sometimes silence - the most important part
    }

    // Random intervals between 3-12 seconds
    const scheduleNext = () => {
      const nextDelay = 3000 + Math.random() * 9000
      phraseIntervalRef.current = window.setTimeout(() => {
        playRandomNote()
        scheduleNext()
      }, nextDelay)
    }

    // Start with a note after 2 seconds
    setTimeout(playRandomNote, 2000)
    scheduleNext()

    return () => {
      if (phraseIntervalRef.current) {
        clearTimeout(phraseIntervalRef.current)
      }
    }
  }, [isPlaying])

  // Update synth parameters
  useEffect(() => {
    if (synthRef.current) {
      synthRef.current.setVolume(volume)
      synthRef.current.setRainIntensity(rainIntensity)
    }
  }, [volume, rainIntensity])

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background - grainy, rainy aesthetic */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950">
        <Dithering
          color1="#1e293b"
          color2="#334155"
          color3="#0f172a"
          style={{ width: '100%', height: '100%', opacity: 0.6 }}
        />
      </div>

      {/* Rain drops visual effect */}
      {isPlaying && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                height: `${20 + Math.random() * 40}px`,
                animation: `fall ${2 + Math.random() * 3}s linear infinite`,
                animationDelay: `${Math.random() * 2}s`,
                opacity: rainIntensity * 0.5,
              }}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 min-h-screen p-4 md:p-8 flex flex-col">
        <a
          href={`${BASE_PATH}/sensory-experiences/`}
          className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-200 mb-6 transition-colors w-fit"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Experiences
        </a>

        <div className="flex-1 flex flex-col items-center justify-center max-w-lg mx-auto w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-blue-300 mb-2 text-center">
            Rain on Glass
          </h1>
          <p className="text-slate-400 text-center mb-8 text-sm">
            Watch the rain, let thoughts drift
          </p>

          {/* Current note indicator */}
          {lastNote && isPlaying && (
            <div className="text-slate-500 font-mono text-sm mb-4 animate-pulse">
              {lastNote}
            </div>
          )}

          <button
            onClick={isPlaying ? stopPlaying : startPlaying}
            className={cn(
              'w-24 h-24 rounded-full flex items-center justify-center mb-8 transition-all',
              'bg-slate-800/50 hover:bg-slate-700/50 backdrop-blur-sm border border-slate-600/30',
              isPlaying && 'ring-2 ring-blue-400/30'
            )}
          >
            {isPlaying ? (
              <Pause className="w-10 h-10 text-slate-300" />
            ) : (
              <Play className="w-10 h-10 text-slate-300 ml-1" />
            )}
          </button>

          {/* Controls */}
          <div className="w-full space-y-4 bg-slate-800/30 backdrop-blur-sm rounded-xl p-4 border border-slate-700/30">
            <div className="flex items-center gap-4">
              <Volume2 className="w-4 h-4 text-slate-500" />
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={e => setVolume(parseFloat(e.target.value))}
                className="flex-1 accent-blue-400"
              />
              <span className="text-sm font-mono text-slate-500 w-12">
                {Math.round(volume * 100)}%
              </span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-slate-500 w-16">Rain</span>
              <input
                type="range"
                min={0.2}
                max={1}
                step={0.01}
                value={rainIntensity}
                onChange={e => setRainIntensity(parseFloat(e.target.value))}
                className="flex-1 accent-blue-400"
              />
              <span className="text-sm font-mono text-slate-500 w-12">
                {Math.round(rainIntensity * 100)}%
              </span>
            </div>
          </div>

          {/* Info */}
          <p className="text-slate-500 text-xs text-center mt-6 max-w-sm">
            Generative rain ambience with sparse piano notes emerging at random intervals.
            Each listening session is unique.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fall {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
      `}</style>
    </div>
  )
}
