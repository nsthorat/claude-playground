import { useState, useEffect, useCallback, useRef } from 'react'
import { Play, Pause, SkipForward, SkipBack, X, ChevronRight } from 'lucide-react'
import { tours, type Tour, type TourChapter } from '../../data/tours'
import { cn } from '@/lib/utils'
import type { MapRef } from 'react-map-gl/mapbox'

interface TourModeProps {
  mapRef: React.RefObject<MapRef | null>
}

export default function TourMode({ mapRef }: TourModeProps) {
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null)
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const currentChapter = selectedTour?.chapters[currentChapterIndex]

  // Fly to chapter location
  const flyToChapter = useCallback((chapter: TourChapter) => {
    if (mapRef.current) {
      mapRef.current.flyTo({
        center: chapter.location.center,
        zoom: chapter.location.zoom,
        pitch: chapter.location.pitch,
        bearing: chapter.location.bearing,
        duration: 2000,
      })
    }
  }, [mapRef])

  // Start tour
  const startTour = useCallback((tour: Tour) => {
    setSelectedTour(tour)
    setCurrentChapterIndex(0)
    setProgress(0)
    setIsPlaying(true)
    flyToChapter(tour.chapters[0])
  }, [flyToChapter])

  // Play/pause
  const togglePlayback = useCallback(() => {
    setIsPlaying(prev => !prev)
  }, [])

  // Next chapter
  const nextChapter = useCallback(() => {
    if (!selectedTour) return
    if (currentChapterIndex < selectedTour.chapters.length - 1) {
      const nextIndex = currentChapterIndex + 1
      setCurrentChapterIndex(nextIndex)
      setProgress(0)
      flyToChapter(selectedTour.chapters[nextIndex])
    } else {
      // Tour finished
      setIsPlaying(false)
    }
  }, [selectedTour, currentChapterIndex, flyToChapter])

  // Previous chapter
  const prevChapter = useCallback(() => {
    if (!selectedTour) return
    if (currentChapterIndex > 0) {
      const prevIndex = currentChapterIndex - 1
      setCurrentChapterIndex(prevIndex)
      setProgress(0)
      flyToChapter(selectedTour.chapters[prevIndex])
    }
  }, [selectedTour, currentChapterIndex, flyToChapter])

  // Exit tour
  const exitTour = useCallback(() => {
    setSelectedTour(null)
    setCurrentChapterIndex(0)
    setIsPlaying(false)
    setProgress(0)
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }
    // Reset map view
    if (mapRef.current) {
      mapRef.current.flyTo({
        center: [28.9784, 41.0150],
        zoom: 12,
        pitch: 0,
        bearing: 0,
        duration: 1500,
      })
    }
  }, [mapRef])

  // Auto-advance chapters
  useEffect(() => {
    if (!isPlaying || !currentChapter) {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
      return
    }

    const startTime = Date.now()
    const duration = currentChapter.duration * 1000

    timerRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime
      const newProgress = Math.min((elapsed / duration) * 100, 100)
      setProgress(newProgress)

      if (elapsed >= duration) {
        nextChapter()
      }
    }, 100)

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [isPlaying, currentChapter, nextChapter])

  // Tour selection view
  if (!selectedTour) {
    return (
      <div className="space-y-4">
        <div className="text-center mb-4">
          <h3 className="text-lg font-semibold text-white mb-1">Guided Tours</h3>
          <p className="text-sm text-text-secondary">
            Experience Istanbul's history through narrated journeys
          </p>
        </div>

        <div className="space-y-3">
          {tours.map((tour) => (
            <button
              key={tour.id}
              onClick={() => startTour(tour)}
              className="w-full text-left bg-bg-card hover:bg-bg-card/80 rounded-xl p-4 border border-white/10 hover:border-accent-cyan/30 transition-all group"
            >
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 flex items-center justify-center text-2xl flex-shrink-0">
                  {tour.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-white group-hover:text-accent-cyan transition-colors">
                    {tour.title}
                  </h4>
                  <p className="text-sm text-text-secondary line-clamp-2">
                    {tour.description}
                  </p>
                  <div className="flex items-center gap-2 mt-2 text-xs text-text-muted">
                    <span>{tour.chapters.length} chapters</span>
                    <span>•</span>
                    <span>{tour.duration}</span>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-text-muted group-hover:text-accent-cyan transition-colors flex-shrink-0" />
              </div>
            </button>
          ))}
        </div>

        <div className="bg-bg-card/50 rounded-xl p-4 text-center">
          <p className="text-xs text-text-muted">
            💡 Tours will animate the map and tell the story of Istanbul's history
          </p>
        </div>
      </div>
    )
  }

  // Tour player view
  return (
    <div className="space-y-4">
      {/* Chapter overlay */}
      <div className="bg-gradient-to-b from-bg-card to-bg-card/90 rounded-xl p-4 border border-white/10">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-xl">{selectedTour.emoji}</span>
            <span className="text-sm font-medium text-text-secondary">
              {currentChapterIndex + 1} / {selectedTour.chapters.length}
            </span>
          </div>
          <button
            onClick={exitTour}
            className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="w-4 h-4 text-text-muted" />
          </button>
        </div>

        {/* Chapter content */}
        {currentChapter && (
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-white mb-2">
              {currentChapter.title}
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              {currentChapter.content}
            </p>
          </div>
        )}

        {/* Progress bar */}
        <div className="h-1 bg-white/10 rounded-full overflow-hidden mb-4">
          <div
            className="h-full bg-gradient-to-r from-accent-cyan to-accent-purple transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={prevChapter}
            disabled={currentChapterIndex === 0}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <SkipBack className="w-5 h-5 text-white" />
          </button>

          <button
            onClick={togglePlayback}
            className="p-3 bg-accent-cyan hover:bg-accent-cyan/90 rounded-full transition-colors"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 text-black" />
            ) : (
              <Play className="w-6 h-6 text-black ml-0.5" />
            )}
          </button>

          <button
            onClick={nextChapter}
            disabled={currentChapterIndex === selectedTour.chapters.length - 1}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <SkipForward className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Chapter dots */}
        <div className="flex items-center justify-center gap-1.5 mt-4">
          {selectedTour.chapters.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentChapterIndex(index)
                setProgress(0)
                flyToChapter(selectedTour.chapters[index])
              }}
              className={cn(
                'w-2 h-2 rounded-full transition-all',
                index === currentChapterIndex
                  ? 'bg-accent-cyan w-4'
                  : index < currentChapterIndex
                  ? 'bg-accent-cyan/50'
                  : 'bg-white/20'
              )}
            />
          ))}
        </div>
      </div>

      {/* Tour title */}
      <div className="text-center">
        <p className="text-xs text-text-muted">
          Now playing: <span className="text-white">{selectedTour.title}</span>
        </p>
      </div>
    </div>
  )
}
