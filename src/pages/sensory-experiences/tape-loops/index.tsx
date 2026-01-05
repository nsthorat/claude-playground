import { useState, useEffect, useRef, useCallback } from 'react'
import { ArrowLeft, Play, Pause, Volume2 } from 'lucide-react'
import { NeuroNoise } from '@paper-design/shaders-react'
import { cn } from '@/lib/utils'

const BASE_PATH = '/claude-playground'

// Incommensurable loop lengths (in seconds) - inspired by Music for Airports
// These prime-ish ratios ensure loops rarely align the same way
const loops = [
  {
    id: 1,
    name: 'Loop A',
    length: 17.25,
    note: 'C4',
    color: '#ff6b6b',
  },
  {
    id: 2,
    name: 'Loop B',
    length: 23.5,
    note: 'E4',
    color: '#4ecdc4',
  },
  {
    id: 3,
    name: 'Loop C',
    length: 29.75,
    note: 'G4',
    color: '#ffe66d',
  },
  {
    id: 4,
    name: 'Loop D',
    length: 19.125,
    note: 'B4',
    color: '#95e1d3',
  },
  {
    id: 5,
    name: 'Loop E',
    length: 31.625,
    note: 'D5',
    color: '#f38181',
  },
  {
    id: 6,
    name: 'Loop F',
    length: 26.375,
    note: 'F4',
    color: '#aa96da',
  },
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

function createTapeLoopSynth(audioContext: AudioContext) {
  const masterGain = audioContext.createGain()
  masterGain.gain.value = 0.3

  // Lush reverb
  const convolver = audioContext.createConvolver()
  const reverbGain = audioContext.createGain()
  reverbGain.gain.value = 0.7

  // Long reverb tail for ambient feel
  const sampleRate = audioContext.sampleRate
  const length = sampleRate * 5
  const impulse = audioContext.createBuffer(2, length, sampleRate)
  for (let channel = 0; channel < 2; channel++) {
    const channelData = impulse.getChannelData(channel)
    for (let i = 0; i < length; i++) {
      const decay = Math.pow(1 - i / length, 1.2)
      channelData[i] = (Math.random() * 2 - 1) * decay
    }
  }
  convolver.buffer = impulse

  // Warm filter
  const filter = audioContext.createBiquadFilter()
  filter.type = 'lowpass'
  filter.frequency.value = 2500
  filter.Q.value = 0.5

  // Routing
  masterGain.connect(filter)
  filter.connect(audioContext.destination)
  filter.connect(convolver)
  convolver.connect(reverbGain)
  reverbGain.connect(audioContext.destination)

  return {
    playTone: (freq: number, duration: number = 4) => {
      const now = audioContext.currentTime

      // Soft, tape-like tone
      const osc1 = audioContext.createOscillator()
      const osc2 = audioContext.createOscillator()
      const gainNode = audioContext.createGain()

      osc1.type = 'sine'
      osc1.frequency.value = freq

      // Slight detune for tape warble effect
      osc2.type = 'sine'
      osc2.frequency.value = freq * 1.002
      const osc2Gain = audioContext.createGain()
      osc2Gain.gain.value = 0.3

      // Soft envelope
      gainNode.gain.setValueAtTime(0, now)
      gainNode.gain.linearRampToValueAtTime(0.3, now + 0.5) // Slow attack
      gainNode.gain.setValueAtTime(0.3, now + duration - 1)
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + duration)

      osc1.connect(gainNode)
      osc2.connect(osc2Gain)
      osc2Gain.connect(gainNode)
      gainNode.connect(masterGain)

      osc1.start(now)
      osc2.start(now)
      osc1.stop(now + duration)
      osc2.stop(now + duration)

      return freq
    },
    setVolume: (vol: number) => {
      masterGain.gain.value = vol * 0.3
    },
    setReverb: (amount: number) => {
      reverbGain.gain.value = amount
    },
  }
}

interface LoopState {
  progress: number
  lastTrigger: number
  active: boolean
}

export default function TapeLoops() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.8)
  const [reverb, setReverb] = useState(0.7)
  const [loopStates, setLoopStates] = useState<Record<number, LoopState>>(() =>
    Object.fromEntries(loops.map(l => [l.id, { progress: 0, lastTrigger: 0, active: true }]))
  )
  const [activeNotes, setActiveNotes] = useState<number[]>([])

  const audioContextRef = useRef<AudioContext | null>(null)
  const synthRef = useRef<ReturnType<typeof createTapeLoopSynth> | null>(null)
  const animationRef = useRef<number | null>(null)
  const startTimeRef = useRef<number>(0)

  const startPlaying = useCallback(async () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContext()
      synthRef.current = createTapeLoopSynth(audioContextRef.current)
    }

    if (audioContextRef.current.state === 'suspended') {
      await audioContextRef.current.resume()
    }

    startTimeRef.current = performance.now()
    // Play first note immediately in click handler for iOS
    const firstActiveLoop = loops.find(l => loopStates[l.id].active)
    if (firstActiveLoop) {
      synthRef.current?.playTone(noteToFreq(firstActiveLoop.note), 4)
    }
    setIsPlaying(true)
  }, [loopStates])

  const stopPlaying = useCallback(() => {
    setIsPlaying(false)
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
      animationRef.current = null
    }
  }, [])

  const toggleLoop = useCallback((loopId: number) => {
    setLoopStates(prev => ({
      ...prev,
      [loopId]: { ...prev[loopId], active: !prev[loopId].active }
    }))
  }, [])

  // Animation and playback loop
  useEffect(() => {
    if (!isPlaying || !synthRef.current) return

    const animate = () => {
      const now = performance.now()
      const elapsed = (now - startTimeRef.current) / 1000

      const newStates: Record<number, LoopState> = {}
      const newActiveNotes: number[] = []

      loops.forEach(loop => {
        const state = loopStates[loop.id]
        if (!state.active) {
          newStates[loop.id] = { ...state, progress: 0 }
          return
        }

        const progress = (elapsed % loop.length) / loop.length
        const shouldTrigger = progress < 0.02 && state.progress > 0.98

        if (shouldTrigger && synthRef.current) {
          const freq = noteToFreq(loop.note)
          synthRef.current.playTone(freq, 4)
          newActiveNotes.push(loop.id)
        }

        newStates[loop.id] = {
          progress,
          lastTrigger: shouldTrigger ? now : state.lastTrigger,
          active: state.active,
        }
      })

      setLoopStates(prev => ({ ...prev, ...newStates }))
      if (newActiveNotes.length > 0) {
        setActiveNotes(newActiveNotes)
        setTimeout(() => setActiveNotes([]), 500)
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isPlaying, loopStates])

  // Update synth parameters
  useEffect(() => {
    if (synthRef.current) {
      synthRef.current.setVolume(volume)
      synthRef.current.setReverb(reverb)
    }
  }, [volume, reverb])

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background shader */}
      <div className="absolute inset-0">
        <NeuroNoise
          colorFront="#2a1810"
          colorBack="#0a0a0f"
          scale={1.5}
          speed={0.3 + (activeNotes.length > 0 ? 0.2 : 0)}
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
            Tape Loops
          </h1>
          <p className="text-white/50 text-center mb-8 text-sm">
            Inspired by Brian Eno's Music for Airports
          </p>

          {/* Play button */}
          <button
            onClick={isPlaying ? stopPlaying : startPlaying}
            className={cn(
              'w-20 h-20 rounded-full flex items-center justify-center mb-8 transition-all',
              'bg-white/10 hover:bg-white/20 backdrop-blur-sm',
              isPlaying && 'ring-2 ring-amber-500/50'
            )}
          >
            {isPlaying ? (
              <Pause className="w-8 h-8 text-white" />
            ) : (
              <Play className="w-8 h-8 text-white ml-1" />
            )}
          </button>

          {/* Loop visualization */}
          <div className="w-full space-y-3 mb-8">
            {loops.map(loop => {
              const state = loopStates[loop.id]
              const isActive = activeNotes.includes(loop.id)

              return (
                <button
                  key={loop.id}
                  onClick={() => toggleLoop(loop.id)}
                  className={cn(
                    'w-full p-3 rounded-lg transition-all text-left',
                    state.active ? 'bg-white/10' : 'bg-white/5 opacity-50',
                    isActive && 'ring-2 ring-white/30'
                  )}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-white/80">
                      {loop.name}
                    </span>
                    <span className="text-xs font-mono text-white/40">
                      {loop.length}s · {loop.note}
                    </span>
                  </div>
                  {/* Progress bar */}
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-100"
                      style={{
                        width: state.active ? `${state.progress * 100}%` : '0%',
                        backgroundColor: loop.color,
                        opacity: state.active ? 1 : 0.3,
                      }}
                    />
                  </div>
                </button>
              )
            })}
          </div>

          {/* Controls */}
          <div className="w-full space-y-4 bg-white/5 backdrop-blur-sm rounded-xl p-4">
            <div className="flex items-center gap-4">
              <Volume2 className="w-4 h-4 text-white/60" />
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={e => setVolume(parseFloat(e.target.value))}
                className="flex-1 accent-amber-500"
              />
              <span className="text-sm font-mono text-white/40 w-12">
                {Math.round(volume * 100)}%
              </span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-white/60 w-16">Reverb</span>
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={reverb}
                onChange={e => setReverb(parseFloat(e.target.value))}
                className="flex-1 accent-amber-500"
              />
              <span className="text-sm font-mono text-white/40 w-12">
                {reverb.toFixed(2)}
              </span>
            </div>
          </div>

          {/* Info */}
          <p className="text-white/30 text-xs text-center mt-6 max-w-sm">
            Each loop plays a single note at its own interval. Because the lengths
            are incommensurable, they never align the same way twice - creating
            endless unique combinations.
          </p>
        </div>
      </div>
    </div>
  )
}
