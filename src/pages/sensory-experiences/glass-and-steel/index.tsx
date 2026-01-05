import { useState, useEffect, useRef, useCallback } from 'react'
import { ArrowLeft, Play, Pause } from 'lucide-react'
import { Dithering } from '@paper-design/shaders-react'
import { cn } from '@/lib/utils'

const BASE_PATH = '/claude-playground'

const BPM = 72
const BEAT_MS = 60000 / BPM

// Pentatonic scale for marimba (warm, resonant)
const marimbaScale = [196, 220, 261.63, 293.66, 329.63, 392, 440, 523.25] // G3 to C5

// Higher range for vibraphone (crystalline)
const vibesScale = [523.25, 587.33, 659.25, 783.99, 880, 987.77, 1046.5] // C5 to C6

// Patterns - melodic fragments that interlock
const patterns = {
  A: { name: 'Morning Light', marimba: [0, 2, 4, 2], vibes: [2, 4, 6, 4], density: 1 },
  B: { name: 'Refraction', marimba: [1, 3, 5, 3, 1], vibes: [3, 5, 3, 1], density: 1.5 },
  C: { name: 'Cascade', marimba: [0, 1, 2, 3, 4], vibes: [6, 5, 4, 3], density: 2 },
  D: { name: 'Still Water', marimba: [0, 4], vibes: [2, 6], density: 0.5 },
}

const structure = ['D', 'A', 'A', 'B', 'C', 'B', 'A', 'D']

function createGlassSynth(audioContext: AudioContext) {
  const masterGain = audioContext.createGain()
  masterGain.gain.value = 0.4

  // Hall reverb - long, diffuse
  const convolver = audioContext.createConvolver()
  const reverbGain = audioContext.createGain()
  reverbGain.gain.value = 0.5
  const sampleRate = audioContext.sampleRate
  const length = sampleRate * 3
  const impulse = audioContext.createBuffer(2, length, sampleRate)
  for (let ch = 0; ch < 2; ch++) {
    const data = impulse.getChannelData(ch)
    for (let i = 0; i < length; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, 1.5)
    }
  }
  convolver.buffer = impulse

  masterGain.connect(audioContext.destination)
  masterGain.connect(convolver)
  convolver.connect(reverbGain)
  reverbGain.connect(audioContext.destination)

  return {
    // Marimba - warm, woody resonance
    marimba: (freq: number, pan: number = 0) => {
      const now = audioContext.currentTime

      // Fundamental + harmonic series (marimba has weak odd harmonics)
      const harmonics = [
        { ratio: 1, amp: 1 },
        { ratio: 4, amp: 0.3 },     // 2nd mode ~4:1 ratio
        { ratio: 9.2, amp: 0.08 },  // Higher mode
      ]

      const noteGain = audioContext.createGain()
      const panner = audioContext.createStereoPanner()
      panner.pan.value = pan

      harmonics.forEach(({ ratio, amp }) => {
        const osc = audioContext.createOscillator()
        const oscGain = audioContext.createGain()

        osc.type = 'sine'
        osc.frequency.value = freq * ratio

        // Marimba envelope - quick attack, medium decay
        oscGain.gain.setValueAtTime(0, now)
        oscGain.gain.linearRampToValueAtTime(amp * 0.4, now + 0.003)
        oscGain.gain.exponentialRampToValueAtTime(amp * 0.15, now + 0.1)
        oscGain.gain.exponentialRampToValueAtTime(0.001, now + 1.2)

        osc.connect(oscGain)
        oscGain.connect(noteGain)

        osc.start(now)
        osc.stop(now + 1.2)
      })

      // Click transient
      const clickOsc = audioContext.createOscillator()
      const clickGain = audioContext.createGain()
      clickOsc.type = 'triangle'
      clickOsc.frequency.value = freq * 8
      clickGain.gain.setValueAtTime(0.15, now)
      clickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.01)
      clickOsc.connect(clickGain)
      clickGain.connect(noteGain)
      clickOsc.start(now)
      clickOsc.stop(now + 0.02)

      noteGain.connect(panner)
      panner.connect(masterGain)
    },

    // Vibraphone - metallic shimmer with motor vibrato
    vibes: (freq: number, pan: number = 0) => {
      const now = audioContext.currentTime

      const noteGain = audioContext.createGain()
      const panner = audioContext.createStereoPanner()
      panner.pan.value = pan

      // Vibes have more inharmonic partials
      const partials = [
        { ratio: 1, amp: 1 },
        { ratio: 2, amp: 0.6 },
        { ratio: 3, amp: 0.2 },
        { ratio: 4.17, amp: 0.1 }, // Slightly inharmonic
      ]

      partials.forEach(({ ratio, amp }) => {
        const osc = audioContext.createOscillator()
        const oscGain = audioContext.createGain()

        osc.type = 'sine'
        osc.frequency.value = freq * ratio

        // Add subtle vibrato (motor effect)
        const lfo = audioContext.createOscillator()
        const lfoGain = audioContext.createGain()
        lfo.frequency.value = 5.5 // Motor speed
        lfoGain.gain.value = freq * 0.003 // Subtle pitch wobble
        lfo.connect(lfoGain)
        lfoGain.connect(osc.frequency)
        lfo.start(now)
        lfo.stop(now + 3)

        // Vibes envelope - longer sustain
        oscGain.gain.setValueAtTime(0, now)
        oscGain.gain.linearRampToValueAtTime(amp * 0.25, now + 0.002)
        oscGain.gain.setValueAtTime(amp * 0.2, now + 0.1)
        oscGain.gain.exponentialRampToValueAtTime(0.001, now + 2.5)

        osc.connect(oscGain)
        oscGain.connect(noteGain)

        osc.start(now)
        osc.stop(now + 2.5)
      })

      noteGain.connect(panner)
      panner.connect(masterGain)
    },

    // Wind chime - high pitched, glassy
    chime: (freq: number) => {
      const now = audioContext.currentTime

      const osc = audioContext.createOscillator()
      const osc2 = audioContext.createOscillator()
      const gain = audioContext.createGain()

      osc.type = 'sine'
      osc.frequency.value = freq
      osc2.type = 'sine'
      osc2.frequency.value = freq * 2.76 // Inharmonic partial

      const osc2Gain = audioContext.createGain()
      osc2Gain.gain.value = 0.3

      gain.gain.setValueAtTime(0, now)
      gain.gain.linearRampToValueAtTime(0.08, now + 0.001)
      gain.gain.exponentialRampToValueAtTime(0.001, now + 4)

      osc.connect(gain)
      osc2.connect(osc2Gain)
      osc2Gain.connect(gain)
      gain.connect(masterGain)

      osc.start(now)
      osc2.start(now)
      osc.stop(now + 4)
      osc2.stop(now + 4)
    },

    setVolume: (v: number) => { masterGain.gain.value = v * 0.4 },
  }
}

export default function GlassAndSteel() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0)
  const [volume, setVolume] = useState(0.8)
  const [lastNotes, setLastNotes] = useState<{ marimba: number; vibes: number }>({ marimba: 0, vibes: 0 })

  const audioContextRef = useRef<AudioContext | null>(null)
  const synthRef = useRef<ReturnType<typeof createGlassSynth> | null>(null)
  const intervalRef = useRef<number | null>(null)
  const patternIndexRef = useRef({ marimba: 0, vibes: 0 })

  const currentPattern = patterns[structure[currentSectionIndex] as keyof typeof patterns]

  const startPlaying = useCallback(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContext()
      synthRef.current = createGlassSynth(audioContextRef.current)
    }
    if (audioContextRef.current.state === 'suspended') {
      audioContextRef.current.resume()
    }
    patternIndexRef.current = { marimba: 0, vibes: 0 }
    setIsPlaying(true)
  }, [])

  const stopPlaying = useCallback(() => {
    setIsPlaying(false)
    if (intervalRef.current) clearInterval(intervalRef.current)
  }, [])

  useEffect(() => {
    if (!isPlaying || !synthRef.current) return

    let beatCount = 0
    const synth = synthRef.current

    const tick = () => {
      const pattern = patterns[structure[currentSectionIndex] as keyof typeof patterns]
      const beatInBar = beatCount % 8

      // Marimba pattern
      if (beatInBar % Math.floor(2 / pattern.density) === 0) {
        const noteIndex = pattern.marimba[patternIndexRef.current.marimba % pattern.marimba.length]
        const freq = marimbaScale[noteIndex]
        const pan = (noteIndex / marimbaScale.length) * 1.2 - 0.6
        synth.marimba(freq, pan)
        setLastNotes(prev => ({ ...prev, marimba: noteIndex }))
        patternIndexRef.current.marimba++
      }

      // Vibes pattern (offset)
      if ((beatInBar + 1) % Math.floor(2 / pattern.density) === 0) {
        const noteIndex = pattern.vibes[patternIndexRef.current.vibes % pattern.vibes.length]
        const freq = vibesScale[noteIndex]
        const pan = (noteIndex / vibesScale.length) * 1.2 - 0.6
        synth.vibes(freq, pan)
        setLastNotes(prev => ({ ...prev, vibes: noteIndex }))
        patternIndexRef.current.vibes++
      }

      // Occasional wind chime
      if (beatCount % 32 === 0 && Math.random() > 0.5) {
        synth.chime(1760 + Math.random() * 880)
      }

      beatCount++

      // Advance section every 32 beats
      if (beatCount % 32 === 0) {
        setCurrentSectionIndex(prev => (prev + 1) % structure.length)
      }
    }

    intervalRef.current = window.setInterval(tick, BEAT_MS / 2) // 8th notes

    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [isPlaying, currentSectionIndex])

  useEffect(() => {
    if (synthRef.current) synthRef.current.setVolume(volume)
  }, [volume])

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background - subtle dithered texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900">
        <Dithering
          colorBack="#0c1929"
          colorFront="#1e3a5f"
          speed={0.3}
          style={{ width: '100%', height: '100%', opacity: 0.7 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen p-4 md:p-8 flex flex-col">
        <a
          href={`${BASE_PATH}/sensory-experiences/`}
          className="inline-flex items-center gap-2 text-sky-300/60 hover:text-sky-200 mb-6 transition-colors w-fit"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Experiences
        </a>

        <div className="flex-1 flex flex-col items-center justify-center max-w-lg mx-auto w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-slate-300 mb-2 text-center">
            Glass & Steel
          </h1>
          <p className="text-sky-300/60 text-center mb-8">
            {currentPattern.name}
          </p>

          {/* Note visualization */}
          <div className="w-full grid grid-cols-2 gap-4 mb-8">
            {/* Marimba */}
            <div className="bg-amber-900/20 backdrop-blur-sm rounded-xl p-4 border border-amber-500/20">
              <div className="text-xs text-amber-300/50 mb-2">Marimba</div>
              <div className="flex gap-1 justify-center">
                {marimbaScale.map((_, i) => (
                  <div
                    key={i}
                    className={cn(
                      'w-3 h-8 rounded-sm transition-all',
                      i === lastNotes.marimba ? 'bg-amber-400 scale-y-125' : 'bg-amber-800/40'
                    )}
                  />
                ))}
              </div>
            </div>

            {/* Vibes */}
            <div className="bg-sky-900/20 backdrop-blur-sm rounded-xl p-4 border border-sky-500/20">
              <div className="text-xs text-sky-300/50 mb-2">Vibraphone</div>
              <div className="flex gap-1 justify-center">
                {vibesScale.map((_, i) => (
                  <div
                    key={i}
                    className={cn(
                      'w-3 h-8 rounded-sm transition-all',
                      i === lastNotes.vibes ? 'bg-sky-400 scale-y-125' : 'bg-sky-800/40'
                    )}
                  />
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={isPlaying ? stopPlaying : startPlaying}
            className={cn(
              'w-24 h-24 rounded-full flex items-center justify-center mb-8 transition-all',
              'bg-sky-500/20 hover:bg-sky-500/30 backdrop-blur-sm border border-sky-400/30',
              isPlaying && 'ring-2 ring-sky-400/50'
            )}
          >
            {isPlaying ? (
              <Pause className="w-10 h-10 text-sky-200" />
            ) : (
              <Play className="w-10 h-10 text-sky-200 ml-1" />
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
                    ? 'bg-sky-500/50 text-sky-100 scale-110'
                    : 'bg-slate-800/30 text-slate-400/50'
                )}
              >
                {sectionId}
              </div>
            ))}
          </div>

          <div className="text-center mb-8">
            <div className="text-sky-300/40 text-sm">{BPM} BPM</div>
          </div>

          {/* Volume */}
          <div className="w-full bg-slate-800/30 backdrop-blur-sm rounded-xl p-4 border border-sky-500/20">
            <div className="flex items-center gap-4">
              <span className="text-sm text-sky-300/60 w-16">Volume</span>
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={e => setVolume(parseFloat(e.target.value))}
                className="flex-1 accent-sky-400"
              />
              <span className="text-sm font-mono text-sky-300/40 w-12">
                {Math.round(volume * 100)}%
              </span>
            </div>
          </div>

          {/* Info */}
          <p className="text-sky-300/30 text-xs text-center mt-6 max-w-sm">
            Marimba and vibraphone interlocking melodies.
            Crystal tones with metallic shimmer.
          </p>
        </div>
      </div>
    </div>
  )
}
