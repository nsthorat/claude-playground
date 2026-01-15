export interface RenderConfig {
  width: number
  height: number
  backgroundColor: string
  currentWordColor: string
  surroundingWordColor: string
  dimmedWordColor: string
  fontFamily: string
  fontSize: number
  progressBarColor: string
  progressBarBgColor: string
}

export const DEFAULT_CONFIG: RenderConfig = {
  width: 1920,
  height: 1080,
  backgroundColor: '#000000',
  currentWordColor: '#DAA520', // Goldenrod
  surroundingWordColor: 'rgba(255, 255, 255, 0.6)',
  dimmedWordColor: 'rgba(255, 255, 255, 0.3)',
  fontFamily: 'Inter, system-ui, sans-serif',
  fontSize: 120,
  progressBarColor: '#DAA520',
  progressBarBgColor: 'rgba(255, 255, 255, 0.1)',
}

export interface WordTimingInfo {
  words: string[]
  framesPerWord: number
  fps: number
}

export function calculateTiming(words: string[], wpm: number, fps: number = 30): WordTimingInfo {
  const secondsPerWord = 60 / wpm
  const framesPerWord = Math.max(1, Math.round(secondsPerWord * fps))

  return {
    words,
    framesPerWord,
    fps,
  }
}

export function getTotalFrames(timing: WordTimingInfo): number {
  return timing.words.length * timing.framesPerWord
}

export function getWordIndexAtFrame(timing: WordTimingInfo, frameIndex: number): number {
  return Math.floor(frameIndex / timing.framesPerWord)
}

export function getProgressAtFrame(timing: WordTimingInfo, frameIndex: number): number {
  const totalFrames = getTotalFrames(timing)
  return frameIndex / totalFrames
}

export function renderRSVPFrame(
  ctx: OffscreenCanvasRenderingContext2D | CanvasRenderingContext2D,
  words: string[],
  currentWordIndex: number,
  progress: number,
  config: RenderConfig = DEFAULT_CONFIG
): void {
  const { width, height, backgroundColor, currentWordColor, surroundingWordColor, dimmedWordColor, fontFamily, fontSize, progressBarColor, progressBarBgColor } = config

  // Clear canvas with background
  ctx.fillStyle = backgroundColor
  ctx.fillRect(0, 0, width, height)

  const centerX = width / 2
  const centerY = height / 2

  // Get words to display
  const prevWord = currentWordIndex > 0 ? words[currentWordIndex - 1] : ''
  const currentWord = words[currentWordIndex] || ''
  const nextWord = currentWordIndex < words.length - 1 ? words[currentWordIndex + 1] : ''

  // Calculate word spacing based on font metrics
  ctx.font = `bold ${fontSize}px ${fontFamily}`
  const currentWordWidth = ctx.measureText(currentWord).width
  const spacing = Math.max(currentWordWidth * 0.6, fontSize * 1.5)

  // Draw previous word (right-aligned, dimmed)
  if (prevWord) {
    ctx.fillStyle = dimmedWordColor
    ctx.font = `${fontSize}px ${fontFamily}`
    ctx.textAlign = 'right'
    ctx.textBaseline = 'middle'
    ctx.fillText(prevWord, centerX - spacing, centerY)
  }

  // Draw current word (centered, gold, bold)
  ctx.fillStyle = currentWordColor
  ctx.font = `bold ${fontSize}px ${fontFamily}`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(currentWord, centerX, centerY)

  // Draw next word (left-aligned, dimmed)
  if (nextWord) {
    ctx.fillStyle = surroundingWordColor
    ctx.font = `${fontSize}px ${fontFamily}`
    ctx.textAlign = 'left'
    ctx.textBaseline = 'middle'
    ctx.fillText(nextWord, centerX + spacing, centerY)
  }

  // Draw progress bar
  const progressBarHeight = 8
  const progressBarY = height - 60
  const progressBarWidth = width * 0.6
  const progressBarX = (width - progressBarWidth) / 2

  // Background
  ctx.fillStyle = progressBarBgColor
  ctx.fillRect(progressBarX, progressBarY, progressBarWidth, progressBarHeight)

  // Progress fill
  ctx.fillStyle = progressBarColor
  ctx.fillRect(progressBarX, progressBarY, progressBarWidth * progress, progressBarHeight)

  // Draw word counter
  ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'
  ctx.font = `${fontSize * 0.2}px ${fontFamily}`
  ctx.textAlign = 'center'
  ctx.fillText(
    `${currentWordIndex + 1} / ${words.length}`,
    centerX,
    progressBarY + progressBarHeight + 30
  )
}

export function createPreviewRenderer(
  canvas: HTMLCanvasElement,
  words: string[],
  wpm: number,
  config: RenderConfig = DEFAULT_CONFIG
): { start: () => void; stop: () => void; setWordIndex: (index: number) => void } {
  const ctx = canvas.getContext('2d')
  if (!ctx) throw new Error('Failed to get canvas context')

  let animationId: number | null = null
  let currentWordIndex = 0
  let lastFrameTime = 0
  const msPerWord = (60 / wpm) * 1000

  const render = (timestamp: number) => {
    if (!lastFrameTime) lastFrameTime = timestamp

    const elapsed = timestamp - lastFrameTime
    if (elapsed >= msPerWord) {
      currentWordIndex = (currentWordIndex + 1) % words.length
      lastFrameTime = timestamp
    }

    const progress = (currentWordIndex + 1) / words.length
    renderRSVPFrame(ctx, words, currentWordIndex, progress, config)

    animationId = requestAnimationFrame(render)
  }

  return {
    start: () => {
      if (animationId === null) {
        lastFrameTime = 0
        animationId = requestAnimationFrame(render)
      }
    },
    stop: () => {
      if (animationId !== null) {
        cancelAnimationFrame(animationId)
        animationId = null
      }
    },
    setWordIndex: (index: number) => {
      currentWordIndex = Math.max(0, Math.min(index, words.length - 1))
      const progress = (currentWordIndex + 1) / words.length
      renderRSVPFrame(ctx, words, currentWordIndex, progress, config)
    },
  }
}
