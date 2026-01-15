# WordBlip App Analysis

**URL**: https://wordblip.com/
**Purpose**: Transform text into speed-reading (RSVP) videos optimized for social media

## What It Does

WordBlip converts any text into a video that displays words one at a time using RSVP (Rapid Serial Visual Presentation) technique. This is designed specifically for platforms like X/Twitter where videos autoplay silently.

### User Flow

1. **Input Text**: User pastes or types text into a textarea
2. **Adjust Speed**: User selects reading speed (WPM) via slider
3. **Preview**: Real-time preview shows how the video will look
4. **Generate**: Click button to encode the video
5. **Download**: Save the MP4 file locally

### Key Features

- **Adjustable WPM**: Slider from ~150 to 500+ WPM
- **Speed Presets**:
  - Relaxed: ≤220 WPM
  - Normal: ≤280 WPM (default)
  - Fast: ≤340 WPM
  - Speed Reader: >340 WPM
- **Minimum 20 words** required to generate
- **Progress indicator** at bottom of video
- **Three-word display**: Shows previous word (dim), current word (highlighted), and next word (dim)

---

## Technical Implementation

### Video Generation Stack

| Component | Technology |
|-----------|------------|
| **Video Encoding** | WebCodecs API (`VideoEncoder`) |
| **Container Format** | MP4 |
| **Video Codec** | AVC/H.264 (also supports VP8, VP9, AV1) |
| **Resolution** | 1920×1080 (Full HD) |
| **Rendering** | Canvas 2D API |
| **Muxing** | MP4 muxer library (client-side) |
| **Framework** | Next.js (React) |

### No Server-Side Processing

All video generation happens **entirely in the browser**:
1. Canvas renders each frame
2. VideoEncoder encodes frames to H.264
3. MP4 muxer packages encoded chunks
4. Blob is created and downloaded via anchor element

### Visual Design

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                      [Background: #000000]                      │
│                                                                 │
│                                                                 │
│        previous          CURRENT          next                  │
│        (white, dim)      (gold)          (white, dim)           │
│        right-aligned     centered        left-aligned           │
│                                                                 │
│                                                                 │
│     ████████████████░░░░░░░░░░░░░░░░░░░░  (progress bar)        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Colors Used

| Element | Color |
|---------|-------|
| Background | `#000000` (black) |
| Current word | `#DAA520` (goldenrod) |
| Secondary gold | `#B8860B` |
| Surrounding text | `#ffffff` (white) |
| Dimmed text | `rgba(255, 255, 255, 0.3)` |
| Medium dimmed | `rgba(255, 255, 255, 0.6)` |

### Font

```css
font-family: Inter, system-ui, sans-serif;
```

Font sizes observed: 48px, 56px, 240px (varies by viewport/element)

### Text Rendering (Canvas 2D)

```javascript
// Simplified reconstruction of the rendering logic
function renderFrame(ctx, words, currentIndex, width, height) {
  const centerX = width / 2;
  const centerY = height / 2;

  // Previous word (right-aligned, white, dimmed)
  ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
  ctx.textAlign = "right";
  ctx.fillText(words[currentIndex - 1] || "", centerX - offset, centerY);

  // Current word (centered, gold, bold)
  ctx.fillStyle = "#DAA520";
  ctx.font = "bold 56px Inter, system-ui, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(words[currentIndex], centerX, centerY);

  // Next word (left-aligned, white, dimmed)
  ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
  ctx.textAlign = "left";
  ctx.fillText(words[currentIndex + 1] || "", centerX + offset, centerY);
}
```

### Download Mechanism

```javascript
function downloadVideo(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
```

---

## Implementation Plan for Clone

### Required Dependencies

```json
{
  "mp4-muxer": "^5.x",  // For MP4 container creation
  "react": "^19.x"       // UI framework (or vanilla JS)
}
```

Alternatively, can use `webm-muxer` for WebM output (better browser support but worse compatibility with some platforms).

### Core Components Needed

1. **TextInput.tsx** - Textarea with word count display
2. **SpeedControl.tsx** - Slider with WPM presets
3. **VideoPreview.tsx** - Canvas-based live preview
4. **VideoEncoder.ts** - WebCodecs-based video generation
5. **DownloadButton.tsx** - Blob download trigger

### Key Algorithms

#### 1. Word Timing Calculation

```typescript
function calculateFramesPerWord(wpm: number, fps: number): number {
  const secondsPerWord = 60 / wpm;
  return Math.round(secondsPerWord * fps);
}

// Example: 280 WPM at 30fps = ~6.4 frames per word
```

#### 2. Video Generation Loop

```typescript
async function generateVideo(words: string[], wpm: number) {
  const fps = 30;
  const framesPerWord = calculateFramesPerWord(wpm, fps);

  const canvas = new OffscreenCanvas(1920, 1080);
  const ctx = canvas.getContext("2d");

  const muxer = new Mp4Muxer({
    target: new ArrayBufferTarget(),
    video: { codec: "avc", width: 1920, height: 1080 },
    fastStart: "in-memory"
  });

  const encoder = new VideoEncoder({
    output: (chunk, meta) => muxer.addVideoChunk(chunk, meta),
    error: console.error
  });

  encoder.configure({
    codec: "avc1.42001f",
    width: 1920,
    height: 1080,
    bitrate: 10_000_000,
    framerate: fps
  });

  let frameIndex = 0;
  for (let wordIndex = 0; wordIndex < words.length; wordIndex++) {
    for (let f = 0; f < framesPerWord; f++) {
      renderFrame(ctx, words, wordIndex);

      const frame = new VideoFrame(canvas, {
        timestamp: (frameIndex / fps) * 1_000_000 // microseconds
      });

      encoder.encode(frame);
      frame.close();
      frameIndex++;
    }
  }

  await encoder.flush();
  muxer.finalize();

  return new Blob([muxer.target.buffer], { type: "video/mp4" });
}
```

### Browser Compatibility

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| VideoEncoder | ✅ 94+ | ❌ | ✅ 16.4+ | ✅ 94+ |
| OffscreenCanvas | ✅ | ✅ | ✅ 16.4+ | ✅ |

**Fallback Options**:
- Use `canvas.captureStream()` + `MediaRecorder` for Firefox
- Consider `ffmpeg.wasm` for broader compatibility (larger bundle)

---

## UX Considerations

1. **Word count indicator** - Show "X words" live as user types
2. **Minimum word validation** - Disable generate button until 20+ words
3. **Progress during encoding** - Show percentage complete
4. **Preview responsiveness** - Real-time canvas preview updates
5. **Error handling** - Graceful fallback messages

---

## Estimated File Structure

```
src/pages/wordblip/
├── index.tsx              # Main app component
├── app.config.tsx         # App metadata for home page
├── components/
│   ├── TextInput.tsx      # Textarea with word count
│   ├── SpeedSlider.tsx    # WPM control
│   ├── VideoPreview.tsx   # Canvas preview
│   └── ExportButton.tsx   # Generate + download
├── lib/
│   ├── encoder.ts         # WebCodecs video generation
│   ├── renderer.ts        # Canvas frame rendering
│   └── timing.ts          # WPM calculations
└── styles.css             # Component styles
```

---

## Summary

WordBlip is a **client-side video generator** that:
1. Takes text input from user
2. Renders frames to canvas using RSVP technique
3. Encodes frames using WebCodecs VideoEncoder
4. Muxes to MP4 container
5. Triggers download of the resulting video file

The app requires **no backend** - all processing happens in the browser using modern Web APIs (WebCodecs, OffscreenCanvas, Blob).
