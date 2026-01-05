import { ArrowLeft, Play, Clock } from 'lucide-react'
import { MagicCard } from '@/components/ui/magic-card'
import { cn } from '@/lib/utils'

const BASE_PATH = '/claude-playground'

interface Piece {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  path: string
  bpm?: number
  mood?: string
  duration?: string
  gradient: string
  shader?: string
  order?: number
}

// Auto-discover pieces from piece.config.tsx files
const pieceConfigModules = import.meta.glob<{ pieceConfig: Piece }>(
  './*/piece.config.tsx',
  { eager: true }
)

// Extract and sort piece configs
const discoveredPieces: Piece[] = Object.values(pieceConfigModules)
  .map(module => module.pieceConfig)
  .sort((a, b) => (a.order ?? 999) - (b.order ?? 999))

function PieceCard({ piece, index }: { piece: Piece; index: number }) {
  // Construct preview image path from piece path
  const previewImage = `${BASE_PATH}${piece.path}og-image.png`

  return (
    <a href={`${BASE_PATH}${piece.path}`} className="contents">
      <MagicCard
        className="group cursor-pointer overflow-hidden"
        gradientColor="#aa66ff"
      >
        <div
          className="h-full flex flex-col"
          style={{
            animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
          }}
        >
          {/* Preview Image */}
          <div className="relative w-full aspect-[1200/630] overflow-hidden bg-bg-primary">
            <img
              src={previewImage}
              alt={`${piece.title} preview`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              onError={(e) => {
                // Hide image if not found
                (e.target as HTMLImageElement).style.display = 'none'
              }}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-bg-card/90 via-bg-card/20 to-transparent" />

            {/* Icon badge */}
            <div
              className={cn(
                'absolute top-3 left-3 w-10 h-10 rounded-lg flex items-center justify-center',
                'bg-gradient-to-br backdrop-blur-sm',
                piece.gradient,
                'text-text-primary shadow-lg'
              )}
            >
              {piece.icon}
            </div>

            {/* Play indicator */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Play className="w-8 h-8 text-white fill-white ml-1" />
              </div>
            </div>

            {/* Duration/BPM badge */}
            {(piece.duration || piece.bpm) && (
              <div className="absolute top-3 right-3 px-2 py-1 rounded-lg bg-black/50 backdrop-blur-sm text-xs font-mono text-white flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {piece.duration || `${piece.bpm} bpm`}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-4 flex flex-col flex-1">
            {/* Title */}
            <h3 className="text-lg font-semibold text-text-primary mb-1 group-hover:text-accent-purple transition-colors">
              {piece.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-text-secondary flex-1 line-clamp-2">
              {piece.description}
            </p>

            {/* Mood tag */}
            {piece.mood && (
              <div className="mt-3 flex items-center gap-2">
                <span className="text-xs px-2 py-0.5 rounded-full bg-accent-purple/20 text-accent-purple">
                  {piece.mood}
                </span>
              </div>
            )}

            {/* Open link */}
            <div className="mt-3">
              <span className="inline-flex items-center text-xs font-medium text-accent-purple group-hover:translate-x-1 transition-transform">
                Experience Now →
              </span>
            </div>
          </div>
        </div>
      </MagicCard>
    </a>
  )
}

export default function SensoryExperiences() {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        {/* Back link */}
        <a
          href={`${BASE_PATH}/`}
          className="inline-flex items-center gap-2 text-text-secondary hover:text-accent-purple mb-6 transition-colors"
          style={{ animation: 'fadeInUp 0.4s ease-out' }}
          data-og-hide
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Apps
        </a>

        {/* Header */}
        <header className="text-center mb-12" style={{ animation: 'fadeInUp 0.5s ease-out' }}>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Sensory Experiences
          </h1>
          <p className="text-text-secondary text-lg">
            Immersive audio-visual journeys
          </p>
          <p className="text-text-muted text-sm mt-2">
            Press play and get lost
          </p>
        </header>

        {/* Piece Grid */}
        {discoveredPieces.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {discoveredPieces.map((piece, index) => (
              <PieceCard key={piece.id} piece={piece} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-text-muted">
            <p className="text-lg mb-2">No experiences yet</p>
            <p className="text-sm">Compositions coming soon...</p>
          </div>
        )}
      </div>
    </div>
  )
}
