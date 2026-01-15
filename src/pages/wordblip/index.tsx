import { useState, useRef, useEffect, useCallback } from 'react'
import { ArrowLeft, Download, Play, Pause, AlertCircle } from 'lucide-react'
import {
  renderRSVPFrame,
  calculateTiming,
  getTotalFrames,
  getWordIndexAtFrame,
  getProgressAtFrame,
  DEFAULT_CONFIG,
} from './lib/renderer'
import { encodeVideo, downloadBlob, isVideoEncoderSupported } from './lib/encoder'

const BASE_PATH = '/claude-playground'

const MIN_WORDS = 20

const SPEED_PRESETS = [
  { label: 'Relaxed', maxWpm: 220 },
  { label: 'Normal', maxWpm: 280 },
  { label: 'Fast', maxWpm: 340 },
  { label: 'Speed Reader', maxWpm: 500 },
] as const

function getSpeedLabel(wpm: number): string {
  if (wpm <= 220) return 'Relaxed'
  if (wpm <= 280) return 'Normal'
  if (wpm <= 340) return 'Fast'
  return 'Speed Reader'
}

function parseWords(text: string): string[] {
  return text
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0)
}

export default function WordBlip() {
  const [text, setText] = useState('')
  const [wpm, setWpm] = useState(280)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isEncoding, setIsEncoding] = useState(false)
  const [encodeProgress, setEncodeProgress] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | null>(null)
  const lastFrameTimeRef = useRef<number>(0)

  const words = parseWords(text)
  const hasEnoughWords = words.length >= MIN_WORDS
  const canGenerate = hasEnoughWords && !isEncoding
  const supportsVideoEncoder = isVideoEncoderSupported()

  // Preview dimensions (scaled down for display)
  const previewWidth = 640
  const previewHeight = 360

  // Render current frame to preview canvas
  const renderPreview = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas || words.length === 0) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const progress = (currentWordIndex + 1) / words.length
    const config = {
      ...DEFAULT_CONFIG,
      width: previewWidth,
      height: previewHeight,
      fontSize: 40, // Scaled down for preview
    }

    renderRSVPFrame(ctx, words, currentWordIndex, progress, config)
  }, [words, currentWordIndex, previewWidth, previewHeight])

  // Animation loop for preview
  const animate = useCallback(
    (timestamp: number) => {
      if (!lastFrameTimeRef.current) lastFrameTimeRef.current = timestamp

      const msPerWord = (60 / wpm) * 1000
      const elapsed = timestamp - lastFrameTimeRef.current

      if (elapsed >= msPerWord) {
        setCurrentWordIndex((prev) => {
          const next = prev + 1
          if (next >= words.length) {
            setIsPlaying(false)
            return 0
          }
          return next
        })
        lastFrameTimeRef.current = timestamp
      }

      if (isPlaying) {
        animationRef.current = requestAnimationFrame(animate)
      }
    },
    [wpm, words.length, isPlaying]
  )

  // Start/stop animation
  useEffect(() => {
    if (isPlaying && words.length > 0) {
      lastFrameTimeRef.current = 0
      animationRef.current = requestAnimationFrame(animate)
    } else {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
        animationRef.current = null
      }
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isPlaying, animate, words.length])

  // Render preview when word index changes
  useEffect(() => {
    renderPreview()
  }, [renderPreview])

  // Reset word index when text changes
  useEffect(() => {
    setCurrentWordIndex(0)
    setIsPlaying(false)
  }, [text])

  // Generate and download video
  const handleGenerate = async () => {
    if (!canGenerate || !supportsVideoEncoder) return

    setIsEncoding(true)
    setEncodeProgress(0)
    setError(null)

    try {
      const timing = calculateTiming(words, wpm, 30)
      const totalFrames = getTotalFrames(timing)

      const offscreenCanvas = new OffscreenCanvas(
        DEFAULT_CONFIG.width,
        DEFAULT_CONFIG.height
      )

      const blob = await encodeVideo(
        offscreenCanvas,
        (ctx, frameIndex) => {
          const wordIndex = getWordIndexAtFrame(timing, frameIndex)
          const progress = getProgressAtFrame(timing, frameIndex)
          renderRSVPFrame(ctx, words, wordIndex, progress, DEFAULT_CONFIG)
        },
        totalFrames,
        { fps: 30, bitrate: 10_000_000 },
        {
          onProgress: setEncodeProgress,
          onError: (e) => setError(e.message),
        }
      )

      // Download the video
      const filename = `wordblip-${Date.now()}.mp4`
      downloadBlob(blob, filename)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to generate video')
    } finally {
      setIsEncoding(false)
      setEncodeProgress(0)
    }
  }

  const togglePlayPause = () => {
    if (words.length === 0) return
    if (!isPlaying && currentWordIndex >= words.length - 1) {
      setCurrentWordIndex(0)
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <a
          href={`${BASE_PATH}/`}
          className="inline-flex items-center gap-2 text-text-secondary hover:text-accent-cyan mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </a>

        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#DAA520] to-[#FFD700] bg-clip-text text-transparent">
          WordBlip
        </h1>
        <p className="text-text-secondary mb-8">
          Transform any text into a speed-reading video
        </p>

        {/* Main content */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Left column - Input */}
          <div className="space-y-4">
            {/* Text input */}
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">
                Your text
              </label>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Videos autoplay silently on X — which makes them perfect for streaming text. No more &quot;read more&quot; buttons or walls of text. Just paste your post, generate a video, and watch engagement soar."
                className="w-full h-48 bg-bg-card border border-white/10 rounded-lg p-4 text-text-primary placeholder:text-text-muted resize-none focus:outline-none focus:border-[#DAA520]/50 focus:ring-1 focus:ring-[#DAA520]/50 transition-colors"
              />
              <div className="flex justify-between mt-2 text-sm">
                <span className="text-text-muted">{words.length} words</span>
                {!hasEnoughWords && words.length > 0 && (
                  <span className="text-accent-red">
                    {MIN_WORDS - words.length} more words needed
                  </span>
                )}
              </div>
            </div>

            {/* Speed control */}
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">
                Reading speed
              </label>
              <div className="bg-bg-card border border-white/10 rounded-lg p-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-white font-medium">
                    {getSpeedLabel(wpm)}
                  </span>
                  <span className="text-text-muted">{wpm} WPM</span>
                </div>
                <input
                  type="range"
                  min={150}
                  max={500}
                  value={wpm}
                  onChange={(e) => setWpm(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#DAA520]"
                />
                <div className="flex justify-between mt-2 text-xs text-text-muted">
                  {SPEED_PRESETS.map((preset) => (
                    <button
                      key={preset.label}
                      onClick={() => setWpm(preset.maxWpm - 20)}
                      className="hover:text-[#DAA520] transition-colors"
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Generate button */}
            <div className="space-y-3">
              {!supportsVideoEncoder && (
                <div className="flex items-center gap-2 text-accent-red text-sm bg-accent-red/10 p-3 rounded-lg">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>
                    VideoEncoder is not supported in this browser. Please use
                    Chrome, Edge, or Safari 16.4+.
                  </span>
                </div>
              )}

              {error && (
                <div className="flex items-center gap-2 text-accent-red text-sm bg-accent-red/10 p-3 rounded-lg">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <button
                onClick={handleGenerate}
                disabled={!canGenerate || !supportsVideoEncoder}
                className="w-full py-3 px-4 bg-[#DAA520] hover:bg-[#FFD700] disabled:bg-white/10 disabled:text-text-muted text-black font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                {isEncoding ? (
                  <>
                    <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Generating... {Math.round(encodeProgress * 100)}%
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    {hasEnoughWords
                      ? 'Generate & Download Video'
                      : `${MIN_WORDS} words minimum`}
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right column - Preview */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium text-text-secondary">
                Preview
              </label>
              {words.length > 0 && (
                <button
                  onClick={togglePlayPause}
                  className="flex items-center gap-2 text-sm text-[#DAA520] hover:text-[#FFD700] transition-colors"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-4 h-4" />
                      Pause
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4" />
                      Play
                    </>
                  )}
                </button>
              )}
            </div>

            <div className="relative aspect-video bg-black rounded-lg overflow-hidden border border-white/10">
              <canvas
                ref={canvasRef}
                width={previewWidth}
                height={previewHeight}
                className="w-full h-full"
              />
              {words.length === 0 && (
                <div className="absolute inset-0 flex items-center justify-center text-text-muted">
                  Enter text to see preview
                </div>
              )}
            </div>

            {/* Word scrubber */}
            {words.length > 0 && (
              <div>
                <input
                  type="range"
                  min={0}
                  max={words.length - 1}
                  value={currentWordIndex}
                  onChange={(e) => {
                    setIsPlaying(false)
                    setCurrentWordIndex(Number(e.target.value))
                  }}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#DAA520]"
                />
                <div className="flex justify-between mt-1 text-xs text-text-muted">
                  <span>Word {currentWordIndex + 1}</span>
                  <span>{words.length} total</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-text-muted text-sm">
          Made with care for readers everywhere
        </div>
      </div>
    </div>
  )
}
