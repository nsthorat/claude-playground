import { Muxer, ArrayBufferTarget } from 'mp4-muxer'

export interface EncoderOptions {
  width: number
  height: number
  fps: number
  bitrate: number
}

export interface EncoderCallbacks {
  onProgress?: (progress: number) => void
  onError?: (error: Error) => void
}

const DEFAULT_OPTIONS: EncoderOptions = {
  width: 1920,
  height: 1080,
  fps: 30,
  bitrate: 10_000_000,
}

export async function encodeVideo(
  canvas: OffscreenCanvas,
  renderFrame: (ctx: OffscreenCanvasRenderingContext2D, frameIndex: number) => void,
  totalFrames: number,
  options: Partial<EncoderOptions> = {},
  callbacks: EncoderCallbacks = {}
): Promise<Blob> {
  const opts = { ...DEFAULT_OPTIONS, ...options }
  const { width, height, fps, bitrate } = opts
  const { onProgress, onError } = callbacks

  // Check for VideoEncoder support
  if (typeof VideoEncoder === 'undefined') {
    throw new Error('VideoEncoder is not supported in this browser. Please use Chrome, Edge, or Safari 16.4+.')
  }

  const ctx = canvas.getContext('2d', { alpha: false })
  if (!ctx) {
    throw new Error('Failed to get canvas context')
  }

  // Create MP4 muxer
  const target = new ArrayBufferTarget()
  const muxer = new Muxer({
    target,
    video: {
      codec: 'avc',
      width,
      height,
    },
    fastStart: 'in-memory',
  })

  let encodedFrames = 0
  let encodingError: Error | null = null

  // Create video encoder
  const encoder = new VideoEncoder({
    output: (chunk, meta) => {
      muxer.addVideoChunk(chunk, meta)
    },
    error: (e) => {
      encodingError = e
      onError?.(e)
    },
  })

  // Configure encoder
  encoder.configure({
    codec: 'avc1.42001f', // H.264 Baseline Profile Level 3.1
    width,
    height,
    bitrate,
    framerate: fps,
  })

  // Encode all frames
  for (let frameIndex = 0; frameIndex < totalFrames; frameIndex++) {
    if (encodingError) {
      throw encodingError
    }

    // Render the frame
    renderFrame(ctx, frameIndex)

    // Create video frame from canvas
    const frame = new VideoFrame(canvas, {
      timestamp: (frameIndex / fps) * 1_000_000, // microseconds
      duration: (1 / fps) * 1_000_000,
    })

    // Encode the frame (keyframe every 30 frames)
    encoder.encode(frame, { keyFrame: frameIndex % 30 === 0 })
    frame.close()

    encodedFrames++
    onProgress?.(encodedFrames / totalFrames)

    // Yield to prevent blocking UI
    if (frameIndex % 10 === 0) {
      await new Promise((resolve) => setTimeout(resolve, 0))
    }
  }

  // Wait for encoding to complete
  await encoder.flush()
  encoder.close()

  // Finalize the MP4
  muxer.finalize()

  // Return the video blob
  return new Blob([target.buffer], { type: 'video/mp4' })
}

export function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

export function isVideoEncoderSupported(): boolean {
  return typeof VideoEncoder !== 'undefined'
}
