import { useState, useEffect, useRef, useCallback } from 'react'
import { ArrowLeft, Play, Pause } from 'lucide-react'
import { MeshGradient } from '@paper-design/shaders-react'
import { cn } from '@/lib/utils'

const BASE_PATH = '/claude-playground'

const BPM = 120
const BEAT_MS = 60000 / BPM

// Three voices with different divisions
const voices = [
  { id: 3, name: 'Threes', color: '#10b981', note: 'C4', divisions: 3 },
  { id: 4, name: 'Fours', color: '#06b6d4', note: 'E4', divisions: 4 },
  { id: 5, name: 'Fives', color: '#8b5cf6', note: 'G4', divisions: 5 },
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

function createPolySynth(audioContext: AudioContext) {
  const masterGain = audioContext.createGain()
  masterGain.gain.value = 0.3

  // Reverb
  const convolver = audioContext.createConvolver()
  const reverbGain = audioContext.createGain()
  reverbGain.gain.value = 0.4
  const sampleRate = audioContext.sampleRate
  const length = sampleRate * 1.5
  const impulse = audioContext.createBuffer(2, length, sampleRate)
  for (let ch = 0; ch < 2; ch++) {
    const data = impulse.getChannelData(ch)
    for (let i = 0; i < length; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, 2)
    }
  }
  convolver.buffer = impulse

  masterGain.connect(audioContext.destination)
  masterGain.connect(convolver)
  convolver.connect(reverbGain)
  reverbGain.connect(audioContext.destination)

  return {
    // Wood block / marimba-like tone
    playTone: (freq: number, pan: number = 0) => {
      const now = audioContext.currentTime

      const osc = audioContext.createOscillator()
      const osc2 = audioContext.createOscillator()
      const gain = audioContext.createGain()
      const panner = audioContext.createStereoPanner()

      osc.type = 'triangle'
      osc.frequency.value = freq

      osc2.type = 'sine'
      osc2.frequency.value = freq * 3 // Third harmonic
      const osc2Gain = audioContext.createGain()
      osc2Gain.gain.value = 0.15

      // Sharp attack, quick decay
      gain.gain.setValueAtTime(0, now)
      gain.gain.linearRampToValueAtTime(0.35, now + 0.005)
      gain.gain.exponentialRampToValueAtTime(0.15, now + 0.05)
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3)

      panner.pan.value = pan

      osc.connect(gain)
      osc2.connect(osc2Gain)
      osc2Gain.connect(gain)
      gain.connect(panner)
      panner.connect(masterGain)

      osc.start(now)
      osc2.start(now)
      osc.stop(now + 0.3)
      osc2.stop(now + 0.3)
    },

    setVolume: (v: number) => { masterGain.gain.value = v * 0.3 },
  }
}

export default function PolyrhythmGarden() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.8)
  const [activeVoices, setActiveVoices] = useState({ 3: true, 4: true, 5: true })
  const [voicePositions, setVoicePositions] = useState({ 3: 0, 4: 0, 5: 0 })
  const [cycle, setCycle] = useState(0)

  const audioContextRef = useRef<AudioContext | null>(null)
  const synthRef = useRef<ReturnType<typeof createPolySynth> | null>(null)
  const intervalsRef = useRef<Record<number, number>>({})

  const startPlaying = useCallback(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContext()
      synthRef.current = createPolySynth(audioContextRef.current)
    }
    if (audioContextRef.current.state === 'suspended') {
      audioContextRef.current.resume()
    }
    setIsPlaying(true)
  }, [])

  const stopPlaying = useCallback(() => {
    setIsPlaying(false)
    Object.values(intervalsRef.current).forEach(clearInterval)
    intervalsRef.current = {}
  }, [])

  const toggleVoice = useCallback((id: number) => {
    setActiveVoices(prev => ({ ...prev, [id]: !prev[id] }))
  }, [])

  // Separate interval for each polyrhythm voice
  useEffect(() => {
    if (!isPlaying || !synthRef.current) return

    // Clear existing intervals
    Object.values(intervalsRef.current).forEach(clearInterval)
    intervalsRef.current = {}

    // LCM of 3, 4, 5 is 60 - full cycle
    const cycleBeats = 60
    const cycleDuration = cycleBeats * BEAT_MS

    // Track cycle progress
    let cycleCount = 0
    const cycleInterval = setInterval(() => {
      cycleCount++
      setCycle(cycleCount)
    }, cycleDuration)

    // Create interval for each voice
    voices.forEach(voice => {
      // Interval for this division within one bar (4 beats)
      const interval = (BEAT_MS * 4) / voice.divisions
      let position = 0

      intervalsRef.current[voice.id] = window.setInterval(() => {
        if (activeVoices[voice.id as keyof typeof activeVoices] && synthRef.current) {
          const freq = noteToFreq(voice.note)
          const pan = voice.id === 3 ? -0.5 : voice.id === 5 ? 0.5 : 0
          synthRef.current.playTone(freq, pan)
        }

        position = (position + 1) % voice.divisions
        setVoicePositions(prev => ({ ...prev, [voice.id]: position }))
      }, interval)
    })

    return () => {
      Object.values(intervalsRef.current).forEach(clearInterval)
      clearInterval(cycleInterval)
    }
  }, [isPlaying, activeVoices])

  useEffect(() => {
    if (synthRef.current) synthRef.current.setVolume(volume)
  }, [volume])

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <MeshGradient
          colors={['#022c22', '#064e3b', '#065f46', '#047857']}
          speed={0.05}
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen p-4 md:p-8 flex flex-col">
        <a
          href={`${BASE_PATH}/sensory-experiences/`}
          className="inline-flex items-center gap-2 text-emerald-300/60 hover:text-emerald-200 mb-6 transition-colors w-fit"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Experiences
        </a>

        <div className="flex-1 flex flex-col items-center justify-center max-w-lg mx-auto w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-300 mb-2 text-center">
            Polyrhythm Garden
          </h1>
          <p className="text-emerald-300/50 text-center mb-2 text-sm">
            3 against 4 against 5
          </p>
          <p className="text-emerald-400/30 text-xs mb-8">
            Cycle {cycle} · LCM alignment every 60 beats
          </p>

          {/* Voice visualizations */}
          <div className="w-full space-y-6 mb-8">
            {voices.map(voice => (
              <button
                key={voice.id}
                onClick={() => toggleVoice(voice.id)}
                className={cn(
                  'w-full p-4 rounded-xl transition-all',
                  activeVoices[voice.id as keyof typeof activeVoices]
                    ? 'bg-emerald-900/30 border border-emerald-500/30'
                    : 'bg-emerald-950/20 border border-emerald-900/20 opacity-50'
                )}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-emerald-200">
                    {voice.name}
                  </span>
                  <span className="text-xs font-mono text-emerald-400/50">
                    {voice.note} · ÷{voice.divisions}
                  </span>
                </div>

                {/* Beat dots */}
                <div className="flex gap-2 justify-center">
                  {Array.from({ length: voice.divisions }).map((_, i) => (
                    <div
                      key={i}
                      className={cn(
                        'w-4 h-4 rounded-full transition-all duration-100',
                        i === voicePositions[voice.id as keyof typeof voicePositions] && activeVoices[voice.id as keyof typeof activeVoices]
                          ? 'scale-150'
                          : ''
                      )}
                      style={{
                        backgroundColor: i === voicePositions[voice.id as keyof typeof voicePositions] && activeVoices[voice.id as keyof typeof activeVoices]
                          ? voice.color
                          : `${voice.color}33`,
                      }}
                    />
                  ))}
                </div>
              </button>
            ))}
          </div>

          <button
            onClick={isPlaying ? stopPlaying : startPlaying}
            className={cn(
              'w-24 h-24 rounded-full flex items-center justify-center mb-8 transition-all',
              'bg-emerald-500/20 hover:bg-emerald-500/30 backdrop-blur-sm border border-emerald-400/30',
              isPlaying && 'ring-2 ring-emerald-400/50'
            )}
          >
            {isPlaying ? (
              <Pause className="w-10 h-10 text-emerald-200" />
            ) : (
              <Play className="w-10 h-10 text-emerald-200 ml-1" />
            )}
          </button>

          {/* Volume */}
          <div className="w-full bg-emerald-900/20 backdrop-blur-sm rounded-xl p-4 border border-emerald-500/20">
            <div className="flex items-center gap-4">
              <span className="text-sm text-emerald-300/60 w-16">Volume</span>
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={e => setVolume(parseFloat(e.target.value))}
                className="flex-1 accent-emerald-400"
              />
              <span className="text-sm font-mono text-emerald-300/40 w-12">
                {Math.round(volume * 100)}%
              </span>
            </div>
          </div>

          {/* Info */}
          <p className="text-emerald-400/30 text-xs text-center mt-6 max-w-sm">
            Three rhythmic cycles of different lengths. They align completely every 60 beats.
            Toggle voices to hear different combinations.
          </p>
        </div>
      </div>
    </div>
  )
}
