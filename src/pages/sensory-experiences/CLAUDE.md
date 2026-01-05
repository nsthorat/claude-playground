# Sensory Experiences - Creative Guidelines

A collection of **immersive audio-visual experiences** - each its own sonic and visual world. These are not loops, not background media - they are **compositions that breathe and change**, with sections that flow into each other like movements of a symphony.

The user presses play and gets lost in it.

---

## Philosophy

> "I am interested in perceptible processes. I want to be able to hear the process happening throughout the sounding music." — Steve Reich

> "One of my long-term interests has been the invention of 'machines' and 'systems' that could produce musical and visual experiences... the point of them was to make music with materials and processes I specified, but in combinations and interactions that I did not." — Brian Eno

Each piece should feel **alive** - not randomly chaotic, but **purposefully evolving**. Like watching clouds form and reform, or waves on a shore. The listener/viewer should feel they're witnessing something unfold, not hearing/seeing something repeat.

---

## Structure (Mirrors Recipes)

```
sensory-experiences/
├── index.html                    # Experience listing page entry
├── midnight-piano/
│   └── index.html               # Individual piece entry
├── night-drive/
│   └── index.html
└── ...

src/
├── apps/sensory-experiences/
│   ├── main.tsx                 # Experience listing React entry
│   └── midnight-piano/
│       └── main.tsx             # Individual piece entry
└── pages/sensory-experiences/
    ├── index.tsx                # Experience listing component
    ├── app.config.tsx           # For home page discovery
    ├── CLAUDE.md                # This file
    └── midnight-piano/
        ├── index.tsx            # The piece component
        └── piece.config.tsx     # Piece metadata (auto-discovered)
```

### piece.config.tsx Format

```tsx
import { Piano } from 'lucide-react'

export const pieceConfig = {
  id: 'midnight-piano',
  title: 'Midnight Piano',
  description: 'Sparse piano notes floating in endless reverb',
  icon: <Piano className="w-5 h-5" />,
  path: '/sensory-experiences/midnight-piano/',

  // Musical metadata
  bpm: 60,
  key: 'C minor',
  mood: 'contemplative',
  duration: 'endless',  // or '~8 min' for fixed-length pieces

  // Visual
  gradient: 'from-indigo-500/20 to-purple-500/20',
  shader: 'mesh-gradient',  // Paper Shader to use

  order: 1,
}
```

---

## Section System

Each piece is composed of **named sections** with different musical content:

```tsx
const sections = {
  A: {
    name: 'Dawn',
    pattern: `note("c3 e3 g3").sound("piano").room(0.8)`,
    bars: 8,
    description: 'Single notes, lots of space'
  },
  B: {
    name: 'Rising',
    pattern: `note("<c3 e3 g3 b3>*2").sound("piano").room(0.8)`,
    bars: 8,
    description: 'Arpeggios begin'
  },
  C: {
    name: 'Full',
    pattern: `chord("<Cm7 Fm7 Gm7 Cm7>").sound("piano").room(0.9)`,
    bars: 4,
    description: 'Chords, climax'
  }
}

const structure = ['A', 'A', 'B', 'A', 'C', 'B', 'A']
```

**Transition types:**
- `cut` - Instant switch (good for techno, dramatic changes)
- `crossfade` - Smooth 2-bar blend (ambient, chill)
- `filter-sweep` - Low-pass fade out/in (builds, drops)
- `reverb-tail` - Let previous section ring out naturally

---

## Audio Libraries

### Primary: Strudel (@strudel packages)

**Best for:** Pattern-based music, live coding style, most pieces

```bash
npm install @strudel/core @strudel/mini @strudel/webaudio @strudel/tonal
```

**Pros:**
- Incredibly expressive pattern mini-notation
- Built-in drum machines (808, 909, LinnDrum, etc.)
- 1000+ wavetables from AKWF set
- Rich effects: reverb, delay, lpf, hpf, phaser, distort, crush
- Designed for live performance (low latency)
- Can load custom samples from GitHub/URLs

**Cons:**
- Learning curve for pattern notation
- Less precise timing control than Tone.js
- Documentation can be sparse

**Pattern Examples:**
```javascript
// Basic beat
s("bd sd bd sd")

// Euclidean rhythm
s("bd").euclid(3, 8)

// Arpeggios
note("<c3 e3 g3 b3>*4").sound("sawtooth").lpf(800)

// Polyrhythms
stack(
  s("bd*4"),
  s("hh*6"),
  s("cp*3")
)

// Effects
note("c3").sound("piano")
  .room(0.8)      // reverb
  .delay(0.3)     // delay
  .lpf(2000)      // low-pass filter
  .pan(sine.slow(4)) // auto-panning
```

**Built-in Sounds:**
- Drums: `bd`, `sd`, `hh`, `oh`, `cp`, `rim`, `cb`, `cr`, `rd`
- Drum machines: `RolandTR808_bd`, `RolandTR909_sd`, etc.
- Synths: `sine`, `saw`, `square`, `triangle`
- Noise: `white`, `pink`, `brown`
- Use `.bank()` to access different drum machine kits

---

### Secondary: Tone.js

**Best for:** Precise synthesis, complex envelopes, pieces needing fine control

```bash
npm install tone
```

**Pros:**
- Most flexible Web Audio wrapper
- Excellent effects library
- Precise timing with Transport
- Good documentation
- Works well on mobile

**Cons:**
- More verbose than Strudel
- Requires more code for patterns

**When to use:**
- Pieces requiring precise envelope control
- Complex synthesis (FM, granular)
- When you need audio analysis for visualization

---

### For Piano: smplr or @tonejs/piano

**smplr** - Zero setup, high-quality SplendidGrandPiano:
```javascript
import { SplendidGrandPiano, Reverb } from 'smplr'

const piano = new SplendidGrandPiano(context)
piano.output.addEffect('reverb', new Reverb(context), 0.5)
piano.start({ note: 'C4', velocity: 80 })
```

**@tonejs/piano** - Salamander samples (Yamaha C5):
```javascript
import { Piano } from '@tonejs/piano'

const piano = new Piano({ velocities: 5 })
piano.toDestination()
await piano.load()
piano.keyDown({ note: 'E4', velocity: 0.7 })
```

---

### For Tiny Synth Sounds: ZzFX

**Best for:** Procedurally generated sounds, tiny bundle size

```javascript
import { zzfx } from 'zzfx'

// Generate a sound with 20 parameters
zzfx(...[.5,,925,.04,.3,.6,1,.3,,6.27,-184,.09,.17])
```

**Pros:** < 1KB, no samples needed, infinite variety
**Cons:** Retro/chiptune aesthetic, not realistic

---

## Visualization with Paper Shaders

Install: `npm install @paper-design/shaders-react`

### Shader Catalog & Mood Pairings

| Shader | Best For | Parameters |
|--------|----------|------------|
| **MeshGradient** | Ambient, piano, chill | `colors`, `speed`, `distortion` |
| **Waves** | Techno, house, rhythmic | `speed`, `amplitude`, `frequency` |
| **NeuroNoise** | Experimental, glitch | `scale`, `speed` |
| **Voronoi** | Minimal, geometric | `scale`, `speed`, `colors` |
| **GodRays** | Synthwave, dramatic | `exposure`, `decay` |
| **Spiral** | Hypnotic, trance | `speed`, `density` |
| **Metaballs** | Organic, evolving | `numBalls`, `speed` |
| **SmokeRing** | Dreamy, soft | `speed`, `radius` |
| **GrainGradient** | Lo-fi, vintage | `grainAmount`, `colors` |
| **DotGrid** | Minimal, Reich-style | `spacing`, `dotSize` |
| **Warp** | Experimental, psychedelic | `distortion`, `speed` |

### Usage

```tsx
import { MeshGradient } from '@paper-design/shaders-react'

<MeshGradient
  colors={['#1a1a2e', '#16213e', '#0f3460', '#533483']}
  speed={0.1}
  distortion={0.5}
  style={{ position: 'absolute', inset: 0 }}
/>
```

### Audio-Reactive Parameters

Connect audio analysis to shader parameters:

```tsx
// In your piece component
const [audioLevel, setAudioLevel] = useState(0)
const [bassLevel, setBassLevel] = useState(0)

// Update shader based on audio
<MeshGradient
  speed={0.05 + audioLevel * 0.2}
  distortion={0.3 + bassLevel * 0.5}
/>
```

Use Web Audio AnalyserNode:
```javascript
const analyser = audioContext.createAnalyser()
analyser.fftSize = 256
const dataArray = new Uint8Array(analyser.frequencyBinCount)

function updateVisualization() {
  analyser.getByteFrequencyData(dataArray)
  const bass = dataArray.slice(0, 4).reduce((a, b) => a + b) / 4 / 255
  const overall = dataArray.reduce((a, b) => a + b) / dataArray.length / 255
  setBassLevel(bass)
  setAudioLevel(overall)
  requestAnimationFrame(updateVisualization)
}
```

---

## Creative Piece Ideas

### 🌙 Ambient / Generative

1. **Tape Loops** (Eno-inspired)
   - Multiple async loops at incommensurable lengths (17.25s, 23.5s, 29.75s)
   - Piano/synth notes that never align the same way twice
   - Shader: NeuroNoise or MeshGradient (very slow)

2. **Rain on Glass**
   - Generative rain texture using `white` noise + filter sweeps
   - Sparse piano phrases emerging and fading
   - Shader: GrainGradient with subtle movement

3. **Midnight Piano**
   - Single notes, cavernous reverb
   - Each note precious, lots of silence
   - Shader: Simple dark MeshGradient

4. **Drone Cathedral**
   - Long evolving drones with slow harmonic shifts
   - Layered sine waves with subtle detuning
   - Shader: SmokeRing

### 🔥 Bangers

5. **Night Drive**
   - Synthwave: driving arpeggios, fat 80s bass, gated drums
   - Builds to euphoria
   - Shader: GodRays or Spiral

6. **Warehouse**
   - Dark industrial techno
   - Pounding 909 kicks, metallic textures
   - Shader: Waves (aggressive settings)

7. **Pocket Rocket**
   - Funky house, bouncy bassline
   - Disco stabs, makes you move
   - Shader: Pulsing/rhythmic MeshGradient

8. **Neon Blood**
   - Aggressive synthwave
   - Distorted leads, action movie energy
   - Shader: GodRays (intense)

### 😌 Chill / Lo-fi

9. **Sunday Morning**
   - Dusty boom-bap drums, jazzy Rhodes
   - Vinyl crackle, tape saturation
   - Shader: GrainGradient

10. **Coffee Shop**
    - Mellow keys, tape-saturated drums
    - Warm and cozy
    - Shader: Soft MeshGradient

11. **Golden Hour**
    - Warm analog pads, gentle groove
    - Sunset vibes
    - Shader: MeshGradient (orange/gold tones)

### 🧪 Experimental / Minimalist

12. **Phase Music**
    - Two patterns slowly drifting out of phase (Reich-style)
    - Hypnotic, meditative
    - Shader: DotGrid or Voronoi

13. **Polyrhythm Garden**
    - 3 vs 4 vs 5 interlocking rhythms
    - Phase in and out of alignment
    - Shader: DotGrid

14. **Glitch Garden**
    - Granular textures, stuttering samples
    - Controlled chaos
    - Shader: Warp or Metaballs

15. **Glass & Steel**
    - Marimba/vibes patterns that multiply
    - Music for 18 Musicians vibes
    - Shader: Voronoi

---

## UI Components

### Play Button (handles audio unlock)

```tsx
function PlayButton({ onClick, isPlaying }) {
  const handleClick = async () => {
    // Resume AudioContext on user gesture (required for mobile)
    if (audioContext.state === 'suspended') {
      await audioContext.resume()
    }
    onClick()
  }

  return (
    <button
      onClick={handleClick}
      className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-cyan to-accent-purple"
    >
      {isPlaying ? <Pause /> : <Play />}
    </button>
  )
}
```

### Section Timeline

```tsx
function SectionTimeline({ sections, structure, currentIndex }) {
  return (
    <div className="flex gap-2">
      {structure.map((sectionId, i) => (
        <div
          key={i}
          className={cn(
            'px-3 py-1 rounded text-sm',
            i === currentIndex
              ? 'bg-accent-cyan text-bg-primary'
              : 'bg-bg-card text-text-muted'
          )}
        >
          {sectionId}
        </div>
      ))}
    </div>
  )
}
```

### Parameter Slider

```tsx
function ParamSlider({ label, value, onChange, min = 0, max = 1 }) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-sm text-text-secondary w-24">{label}</span>
      <input
        type="range"
        min={min}
        max={max}
        step={0.01}
        value={value}
        onChange={e => onChange(parseFloat(e.target.value))}
        className="flex-1"
      />
      <span className="text-sm font-mono text-text-muted w-12">
        {value.toFixed(2)}
      </span>
    </div>
  )
}
```

---

## Mobile Considerations

1. **Audio Context Resume** - MUST happen on user gesture (tap)
2. **Large touch targets** - Minimum 44x44px for buttons
3. **Shader performance** - Test on real devices, reduce complexity if needed
4. **Viewport** - Use `max-scale=1.0, user-scalable=no` to prevent zoom issues

---

## Sensor-Driven Modulation

Use phone sensors to add physical expressivity to pieces. These turn passive listening into active performance.

### Available Sensors (iOS Safari)

| Sensor | API | Permission | Data |
|--------|-----|------------|------|
| **Motion** | `DeviceMotionEvent` | Required | acceleration (x,y,z), rotationRate (α,β,γ) |
| **Orientation** | `DeviceOrientationEvent` | Required | alpha (compass 0-360°), beta (front/back -180 to 180°), gamma (left/right -90 to 90°) |
| **Touch** | `TouchEvent` | None | touches count, force (0-1 with 3D Touch) |

### Top Modulation Ideas (Recommended)

#### 1. Tilt → Filter & Pan (Most Intuitive)
- **Beta (front/back tilt)**: Open/close lowpass filter
  - Phone flat → neutral (1500Hz)
  - Tilt forward → bright (4000Hz)
  - Tilt back → muffled (300Hz)
- **Gamma (left/right tilt)**: Stereo panning
  - Maps naturally to spatial audio

**Best for:** Drone Cathedral, Golden Hour, any pad-based pieces

```tsx
const filterFreq = mapRange(tilt.beta, -45, 45, 300, 4000)
const pan = mapRange(tilt.gamma, -45, 45, -1, 1)
filter.frequency.value = filterFreq
panner.pan.value = pan
```

#### 2. Shake → Chaos/Glitch
- Calculate shake intensity from acceleration magnitude
- Higher values trigger glitch events, stutters, bursts
- Threshold to avoid accidental triggers

**Best for:** Glitch Garden, Warehouse

```tsx
const shakeMagnitude = Math.sqrt(accel.x**2 + accel.y**2 + accel.z**2)
if (shakeMagnitude > 15) triggerGlitch()
```

#### 3. Rotation → Phase Offset (Perfect for Phase Music)
- Alpha (compass heading) controls phase offset between voices
- Physically "spin" through phase relationships
- Full 360° rotation = full phase cycle

**Best for:** Phase Music, Polyrhythm Garden

```tsx
const phaseOffset = (orientation.alpha / 360) * patternLength
voice2.offset = phaseOffset
```

#### 4. Touch Force → Intensity/Dynamics
- 3D Touch pressure (0-1) controls volume, brightness, harmonic content
- Light touch = soft, gentle
- Press hard = loud, bright, rich harmonics

**Best for:** All pieces with sustained interaction

```tsx
const intensity = touchForce || 0.5 // fallback if no 3D Touch
masterGain.gain.value = 0.2 + intensity * 0.5
filter.frequency.value = 800 + intensity * 2000
```

#### 5. Touch Position → Pitch/Timbre
- Y-position: pitch (top = high, bottom = low)
- X-position: timbre or pan
- Turn the entire screen into a theremin/XY pad

**Best for:** Experimental pieces, new "Theremin" piece

```tsx
const pitch = mapRange(touch.y, 0, screenHeight, 880, 110) // A5 to A2
const timbre = mapRange(touch.x, 0, screenWidth, 0, 1)
oscillator.frequency.value = pitch
```

### Utility Hook: `useSensorModulation`

```tsx
import { useState, useEffect, useCallback } from 'react'

interface SensorState {
  tilt: { alpha: number; beta: number; gamma: number }
  accel: { x: number; y: number; z: number }
  shake: number
  touch: { x: number; y: number; force: number; active: boolean }
}

export function useSensorModulation() {
  const [sensors, setSensors] = useState<SensorState>({
    tilt: { alpha: 0, beta: 0, gamma: 0 },
    accel: { x: 0, y: 0, z: 0 },
    shake: 0,
    touch: { x: 0, y: 0, force: 0, active: false },
  })
  const [permissionGranted, setPermissionGranted] = useState(false)

  const requestPermission = useCallback(async () => {
    // @ts-expect-error iOS specific
    if (typeof DeviceMotionEvent.requestPermission === 'function') {
      // @ts-expect-error iOS specific
      const motionPerm = await DeviceMotionEvent.requestPermission()
      // @ts-expect-error iOS specific
      const orientPerm = await DeviceOrientationEvent.requestPermission()
      if (motionPerm === 'granted' && orientPerm === 'granted') {
        setPermissionGranted(true)
      }
    } else {
      setPermissionGranted(true) // Android doesn't need permission
    }
  }, [])

  useEffect(() => {
    if (!permissionGranted) return

    const handleMotion = (e: DeviceMotionEvent) => {
      const accel = {
        x: e.acceleration?.x ?? 0,
        y: e.acceleration?.y ?? 0,
        z: e.acceleration?.z ?? 0,
      }
      const shake = Math.sqrt(accel.x ** 2 + accel.y ** 2 + accel.z ** 2)
      setSensors(prev => ({ ...prev, accel, shake }))
    }

    const handleOrientation = (e: DeviceOrientationEvent) => {
      setSensors(prev => ({
        ...prev,
        tilt: {
          alpha: e.alpha ?? 0,
          beta: e.beta ?? 0,
          gamma: e.gamma ?? 0,
        },
      }))
    }

    window.addEventListener('devicemotion', handleMotion)
    window.addEventListener('deviceorientation', handleOrientation)

    return () => {
      window.removeEventListener('devicemotion', handleMotion)
      window.removeEventListener('deviceorientation', handleOrientation)
    }
  }, [permissionGranted])

  useEffect(() => {
    const handleTouch = (e: TouchEvent) => {
      const t = e.touches[0]
      if (t) {
        setSensors(prev => ({
          ...prev,
          touch: { x: t.clientX, y: t.clientY, force: t.force, active: true },
        }))
      }
    }

    const handleTouchEnd = () => {
      setSensors(prev => ({ ...prev, touch: { ...prev.touch, active: false } }))
    }

    window.addEventListener('touchstart', handleTouch, { passive: true })
    window.addEventListener('touchmove', handleTouch, { passive: true })
    window.addEventListener('touchend', handleTouchEnd)

    return () => {
      window.removeEventListener('touchstart', handleTouch)
      window.removeEventListener('touchmove', handleTouch)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [])

  return { ...sensors, requestPermission, permissionGranted }
}

// Utility function
function mapRange(value: number, inMin: number, inMax: number, outMin: number, outMax: number) {
  return ((value - inMin) / (inMax - inMin)) * (outMax - outMin) + outMin
}
```

### Integration Example

```tsx
export default function DroneCathedral() {
  const { tilt, shake, touch, requestPermission, permissionGranted } = useSensorModulation()
  const filterRef = useRef<BiquadFilterNode | null>(null)
  const pannerRef = useRef<StereoPannerNode | null>(null)

  // Apply sensor modulation in audio effect loop
  useEffect(() => {
    if (!filterRef.current || !pannerRef.current) return

    // Tilt controls filter
    const filterFreq = mapRange(
      Math.max(-45, Math.min(45, tilt.beta)), // clamp
      -45, 45,
      300, 4000
    )
    filterRef.current.frequency.value = filterFreq

    // Tilt controls pan
    const pan = mapRange(
      Math.max(-45, Math.min(45, tilt.gamma)),
      -45, 45,
      -1, 1
    )
    pannerRef.current.pan.value = pan
  }, [tilt])

  return (
    <div>
      {!permissionGranted && (
        <button onClick={requestPermission}>
          Enable Motion Control
        </button>
      )}
      {/* ... rest of piece */}
    </div>
  )
}
```

### Piece Ideas with Sensor Control

| Piece | Primary Sensor | Modulation |
|-------|---------------|------------|
| **Drone Cathedral** | Tilt | Filter sweep + pan |
| **Phase Music** | Rotation (alpha) | Phase offset between voices |
| **Glitch Garden** | Shake | Chaos/glitch trigger |
| **Golden Hour** | Tilt | Reverb wetness + filter |
| **New: Theremin** | Touch position | XY pitch/timbre control |
| **New: Tilt Synth** | All sensors | Full gestural instrument |

### UI Considerations

1. **Permission Button** - Add "Enable Motion" button that appears before first play
2. **Visual Feedback** - Show current tilt/shake values subtly in UI
3. **Calibration** - Consider a "hold flat to calibrate" step
4. **Fallback** - Always work without sensors (desktop, denied permission)

---

## Creative Freedom

**Claude, when composing pieces:**

1. **Be bold** - Don't play it safe. Experiment with unusual combinations.

2. **Tell a story** - Each piece should have an arc. Beginning, development, climax, resolution.

3. **Less is more** - A single perfect note with beautiful reverb beats a flurry of mediocre ones.

4. **Embrace silence** - Space between notes is music too.

5. **Think in systems** - Like Eno's tape loops: set up conditions and let them play out.

6. **Visual-audio synergy** - The shader should feel inevitable for that piece, not decorative.

7. **Mobile-first** - Test that it works on a phone. No one should need a laptop.

8. **Surprise yourself** - If a pattern does something unexpected, lean into it.

---

## Sample Sources

**Built into Strudel:**
- tidal-drum-machines (808, 909, Linn, etc.)
- VCSL instruments
- AKWF wavetables (1000+)

**Free samples to consider:**
- Freesound.org (CC licensed)
- SampleSwap.org (19,000+ sounds)
- Looperman (royalty-free)
- Record your own!

Load custom samples in Strudel:
```javascript
samples('github:user/repo')
// or
samples('https://example.com/samples/')
```

---

## References & Inspiration

### Music
- Brian Eno - Music for Airports, Ambient 1
- Steve Reich - Piano Phase, Music for 18 Musicians
- Boards of Canada - Music Has the Right to Children
- Aphex Twin - Selected Ambient Works 85-92
- Tycho - Dive
- Kavinsky - Nightcall
- Burial - Untrue

### Generative Music Platforms
- Generative.fm - https://generative.fm/
- Strudel - https://strudel.cc/
- Sonic Pi - https://sonic-pi.net/

### Technical
- Paper Shaders - https://shaders.paper.design/
- Tone.js - https://tonejs.github.io/
- Web Audio API - https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API

---

## Checklist for Each Piece

- [ ] Unique `piece.config.tsx` with all metadata
- [ ] Section system with A/B/C (or more) sections
- [ ] Structure array defining section order
- [ ] Appropriate shader selected and configured
- [ ] Audio-reactive parameters connected
- [ ] Play/pause works correctly
- [ ] Section advancement (auto or manual)
- [ ] At least one tweakable parameter for user
- [ ] Mobile tested (audio unlock, touch, performance)
- [ ] No console errors
- [ ] Beautiful

---

*"The idea is like a seed. You plant it and then it grows by itself."* — Brian Eno
