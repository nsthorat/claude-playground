import { useState, useEffect, useRef, useCallback } from 'react'
import { ArrowLeft, Play, Pause, RotateCw } from 'lucide-react'
import { MeshGradient } from '@paper-design/shaders-react'
import { cn } from '@/lib/utils'
import { useSensorModulation, mapRange } from '@/hooks/useSensorModulation'
import { initIOSAudioUnlock } from '@/lib/ios-audio-unlock'

const BASE_PATH = '/claude-playground'

// The pattern - inspired by Steve Reich's Piano Phase
// 12 notes that create beautiful phasing relationships
const PATTERN = ['E4', 'F#4', 'B4', 'C#5', 'D5', 'F#4', 'E4', 'C#5', 'B4', 'F#4', 'D5', 'C#5']

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

function createPhaseSynth(audioContext: AudioContext) {
  const masterGain = audioContext.createGain()
  masterGain.gain.value = 0.3

  // Soft reverb
  const convolver = audioContext.createConvolver()
  const reverbGain = audioContext.createGain()
  reverbGain.gain.value = 0.25
  const sampleRate = audioContext.sampleRate
  const impulse = audioContext.createBuffer(2, sampleRate * 1.5, sampleRate)
  for (let ch = 0; ch < 2; ch++) {
    const data = impulse.getChannelData(ch)
    for (let i = 0; i < data.length; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / data.length, 2)
    }
  }
  convolver.buffer = impulse

  masterGain.connect(audioContext.destination)
  masterGain.connect(convolver)
  convolver.connect(reverbGain)
  reverbGain.connect(audioContext.destination)

  return {
    // Marimba-like tone
    playNote: (freq: number, pan: number = 0, velocity: number = 0.5) => {
      const now = audioContext.currentTime

      const osc = audioContext.createOscillator()
      const osc2 = audioContext.createOscillator()
      const gain = audioContext.createGain()
      const panner = audioContext.createStereoPanner()

      // Main tone
      osc.type = 'sine'
      osc.frequency.value = freq

      // Harmonic for brightness
      osc2.type = 'sine'
      osc2.frequency.value = freq * 4
      const osc2Gain = audioContext.createGain()
      osc2Gain.gain.value = 0.1

      // Sharp attack, quick decay (marimba-like)
      gain.gain.setValueAtTime(0, now)
      gain.gain.linearRampToValueAtTime(velocity * 0.4, now + 0.005)
      gain.gain.exponentialRampToValueAtTime(velocity * 0.2, now + 0.05)
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4)

      panner.pan.value = pan

      osc.connect(gain)
      osc2.connect(osc2Gain)
      osc2Gain.connect(gain)
      gain.connect(panner)
      panner.connect(masterGain)

      osc.start(now)
      osc2.start(now)
      osc.stop(now + 0.4)
      osc2.stop(now + 0.4)
    },

    setVolume: (v: number) => { masterGain.gain.value = v * 0.3 },
  }
}

export default function PhaseMusic() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.8)
  const [phaseOffset, setPhaseOffset] = useState(0)
  const [phaseRate, setPhaseRate] = useState(0.002) // How fast voice 2 drifts
  const [voice1Index, setVoice1Index] = useState(0)
  const [voice2Index, setVoice2Index] = useState(0)
  const [rotationMode, setRotationMode] = useState(false)

  const audioContextRef = useRef<AudioContext | null>(null)
  const synthRef = useRef<ReturnType<typeof createPhaseSynth> | null>(null)
  const intervalRef = useRef<number | null>(null)
  const phaseRef = useRef(0)
  const baseAlphaRef = useRef<number | null>(null)

  const { tilt, requestPermission, permissionGranted } = useSensorModulation()

  const BPM = 144
  const NOTE_MS = 60000 / BPM / 2 // 16th notes

  // Handle rotation mode toggle
  const handleEnableRotation = useCallback(async () => {
    await requestPermission()
    setRotationMode(true)
    baseAlphaRef.current = null // Will be set on first reading
  }, [requestPermission])

  // Initialize iOS audio unlock on mount
  useEffect(() => {
    initIOSAudioUnlock()
  }, [])

  const startPlaying = useCallback(async () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContext()
      synthRef.current = createPhaseSynth(audioContextRef.current)
    }
    if (audioContextRef.current.state === 'suspended') {
      await audioContextRef.current.resume()
    }
    phaseRef.current = 0
    // Play first note immediately in click handler for iOS
    const note = PATTERN[0]
    synthRef.current?.playNote(noteToFreq(note), -0.5, 0.5)
    setIsPlaying(true)
  }, [])

  const stopPlaying = useCallback(() => {
    setIsPlaying(false)
    if (intervalRef.current) clearInterval(intervalRef.current)
  }, [])

  // Calculate rotation-based phase offset
  const rotationPhaseOffset = useCallback(() => {
    if (!rotationMode || !permissionGranted) return null

    // Set base alpha on first reading
    if (baseAlphaRef.current === null) {
      baseAlphaRef.current = tilt.alpha
    }

    // Calculate rotation from base position
    let rotation = tilt.alpha - baseAlphaRef.current
    // Handle wraparound at 0/360
    if (rotation > 180) rotation -= 360
    if (rotation < -180) rotation += 360

    // Map full rotation (-180 to 180) to full pattern length
    return mapRange(rotation, -180, 180, 0, PATTERN.length)
  }, [rotationMode, permissionGranted, tilt.alpha])

  useEffect(() => {
    if (!isPlaying || !synthRef.current) return

    let v1Index = 0
    let v2Phase = 0

    const tick = () => {
      const synth = synthRef.current!

      // Voice 1 - left channel, steady tempo
      const note1 = PATTERN[v1Index % PATTERN.length]
      synth.playNote(noteToFreq(note1), -0.5, 0.5)
      setVoice1Index(v1Index % PATTERN.length)

      // Voice 2 - right channel
      let v2Index: number
      let currentOffset: number

      if (rotationMode && permissionGranted) {
        // Rotation mode: phase offset controlled by phone rotation
        const rotOffset = rotationPhaseOffset() ?? 0
        v2Index = Math.floor(v1Index + rotOffset) % PATTERN.length
        if (v2Index < 0) v2Index += PATTERN.length
        currentOffset = rotOffset
      } else {
        // Auto mode: gradually drifting phase
        v2Index = Math.floor(v2Phase) % PATTERN.length
        v2Phase += 1 + phaseRate
        currentOffset = (v2Phase - v1Index) % PATTERN.length
      }

      const note2 = PATTERN[v2Index]
      synth.playNote(noteToFreq(note2), 0.5, 0.5)
      setVoice2Index(v2Index)

      // Advance indices
      v1Index++

      // Update phase display
      setPhaseOffset(currentOffset)
      phaseRef.current = currentOffset
    }

    intervalRef.current = window.setInterval(tick, NOTE_MS)

    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [isPlaying, phaseRate, NOTE_MS, rotationMode, permissionGranted, rotationPhaseOffset])

  useEffect(() => {
    if (synthRef.current) synthRef.current.setVolume(volume)
  }, [volume])

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <MeshGradient
          colors={['#0a1520', '#102030', '#0a2020', '#051515']}
          speed={0.1}
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10 min-h-screen p-4 md:p-8 flex flex-col">
        <a
          href={`${BASE_PATH}/sensory-experiences/`}
          className="inline-flex items-center gap-2 text-cyan-200/60 hover:text-cyan-200 mb-6 transition-colors w-fit"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Experiences
        </a>

        <div className="flex-1 flex flex-col items-center justify-center max-w-lg mx-auto w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 mb-2 text-center">
            Phase Music
          </h1>
          <p className="text-cyan-200/50 text-center mb-8 text-sm">
            Inspired by Steve Reich
          </p>

          {/* Pattern visualization */}
          <div className="w-full mb-8 space-y-4">
            {/* Voice 1 */}
            <div>
              <div className="text-xs text-cyan-300/50 mb-2 font-mono">Voice 1 (Left)</div>
              <div className="flex gap-1">
                {PATTERN.map((note, i) => (
                  <div
                    key={`v1-${i}`}
                    className={cn(
                      'flex-1 h-8 rounded flex items-center justify-center text-xs font-mono transition-all',
                      i === voice1Index
                        ? 'bg-cyan-500/60 text-white scale-y-125'
                        : 'bg-cyan-500/10 text-cyan-300/30'
                    )}
                  >
                    {note.replace('4', '').replace('5', '')}
                  </div>
                ))}
              </div>
            </div>

            {/* Voice 2 */}
            <div>
              <div className="text-xs text-teal-300/50 mb-2 font-mono">Voice 2 (Right)</div>
              <div className="flex gap-1">
                {PATTERN.map((note, i) => (
                  <div
                    key={`v2-${i}`}
                    className={cn(
                      'flex-1 h-8 rounded flex items-center justify-center text-xs font-mono transition-all',
                      i === voice2Index
                        ? 'bg-teal-500/60 text-white scale-y-125'
                        : 'bg-teal-500/10 text-teal-300/30'
                    )}
                  >
                    {note.replace('4', '').replace('5', '')}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Phase indicator */}
          <div className="text-center mb-6">
            <div className="text-sm text-white/50 mb-1">Phase Offset</div>
            <div className="text-3xl font-mono text-cyan-300">
              {phaseOffset.toFixed(2)}
            </div>
            <div className="text-xs text-white/30">
              of {PATTERN.length} notes
            </div>
          </div>

          <button
            onClick={isPlaying ? stopPlaying : startPlaying}
            className={cn(
              'w-24 h-24 rounded-full flex items-center justify-center mb-8 transition-all',
              'bg-cyan-500/20 hover:bg-cyan-500/30 backdrop-blur-sm',
              isPlaying && 'ring-2 ring-cyan-400/50'
            )}
          >
            {isPlaying ? (
              <Pause className="w-10 h-10 text-white" />
            ) : (
              <Play className="w-10 h-10 text-white ml-1" />
            )}
          </button>

          {/* Controls */}
          <div className="w-full space-y-4 bg-white/5 backdrop-blur-sm rounded-xl p-4">
            <div className="flex items-center gap-4">
              <span className="text-sm text-cyan-200/60 w-20">Volume</span>
              <input type="range" min={0} max={1} step={0.01} value={volume}
                onChange={e => setVolume(parseFloat(e.target.value))}
                className="flex-1 accent-cyan-500" />
              <span className="text-sm font-mono text-cyan-200/40 w-12">{Math.round(volume * 100)}%</span>
            </div>

            {!rotationMode && (
              <div className="flex items-center gap-4">
                <span className="text-sm text-cyan-200/60 w-20">Drift Rate</span>
                <input type="range" min={0.0005} max={0.01} step={0.0005} value={phaseRate}
                  onChange={e => setPhaseRate(parseFloat(e.target.value))}
                  className="flex-1 accent-cyan-500" />
                <span className="text-sm font-mono text-cyan-200/40 w-12">{(phaseRate * 1000).toFixed(1)}</span>
              </div>
            )}

            {/* Rotation control mode */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <RotateCw className="w-4 h-4 text-cyan-400/60" />
                <span className="text-sm text-cyan-200/60">Spin to phase</span>
              </div>
              {!rotationMode ? (
                <button
                  onClick={handleEnableRotation}
                  className="px-3 py-1 rounded-lg text-sm bg-cyan-900/30 text-cyan-400 hover:bg-cyan-800/30 transition-all"
                >
                  Enable
                </button>
              ) : (
                <div className="flex items-center gap-2">
                  <span className="text-xs text-cyan-300/50 font-mono">
                    {tilt.alpha.toFixed(0)}°
                  </span>
                  <button
                    onClick={() => { setRotationMode(false); baseAlphaRef.current = null }}
                    className="px-2 py-0.5 rounded text-xs bg-cyan-500/30 text-cyan-200"
                  >
                    Auto
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Info */}
          <p className="text-cyan-200/30 text-xs text-center mt-6 max-w-sm">
            Two voices play the same pattern. Voice 2 is slightly faster,
            gradually shifting out of phase. Listen for emergent melodies
            as notes align in new ways.
          </p>
        </div>
      </div>
    </div>
  )
}
