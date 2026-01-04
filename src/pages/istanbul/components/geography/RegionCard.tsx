import { X, Clock, DollarSign, MapPin, Navigation, Sparkles } from 'lucide-react'
import type { Region } from '../../data/regions'

interface RegionCardProps {
  region: Region
  onClose: () => void
  currentHour?: number
}

export default function RegionCard({ region, onClose, currentHour }: RegionCardProps) {
  const priceIndicator = '₺'.repeat(region.priceLevel)

  const currentActivity = currentHour !== undefined
    ? region.activityByHour[currentHour]
    : 'moderate'

  const activityLabel = {
    low: 'Quiet now',
    moderate: 'Moderate activity',
    high: 'Getting busy',
    packed: 'Very crowded',
  }[currentActivity]

  const activityColor = {
    low: 'text-green-400',
    moderate: 'text-yellow-400',
    high: 'text-orange-400',
    packed: 'text-red-400',
  }[currentActivity]

  return (
    <div
      className="bg-bg-card rounded-xl p-4 border border-white/10 animate-in slide-in-from-bottom-4 duration-300"
      style={{ borderLeftColor: region.color, borderLeftWidth: '4px' }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-lg font-bold text-white">{region.name}</h3>
            <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-text-secondary">
              {region.side === 'europe' ? '🇪🇺 Europe' : '🌏 Asia'}
            </span>
          </div>
          <p className="text-sm text-accent-cyan">{region.tagline}</p>
        </div>
        <button
          onClick={onClose}
          className="p-1 text-text-muted hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Description */}
      <p className="text-sm text-text-secondary mb-4">
        {region.description}
      </p>

      {/* Historical Note */}
      {region.historicalNote && (
        <div className="flex items-start gap-2 mb-4 p-2 bg-white/5 rounded-lg">
          <Sparkles className="w-4 h-4 text-accent-purple mt-0.5 flex-shrink-0" />
          <p className="text-xs text-text-muted italic">{region.historicalNote}</p>
        </div>
      )}

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="text-center p-2 bg-white/5 rounded-lg">
          <Clock className="w-4 h-4 mx-auto mb-1 text-text-muted" />
          <p className="text-xs text-text-secondary">{region.walkingTimeFromGalata}</p>
        </div>
        <div className="text-center p-2 bg-white/5 rounded-lg">
          <DollarSign className="w-4 h-4 mx-auto mb-1 text-text-muted" />
          <p className="text-xs text-text-secondary">{priceIndicator}</p>
        </div>
        <div className="text-center p-2 bg-white/5 rounded-lg">
          <MapPin className="w-4 h-4 mx-auto mb-1 text-text-muted" />
          <p className={`text-xs ${activityColor}`}>{activityLabel}</p>
        </div>
      </div>

      {/* Best Time */}
      <div className="mb-4">
        <p className="text-xs text-text-muted mb-1">Best time to visit</p>
        <p className="text-sm text-white">{region.bestTimeOfDay}</p>
      </div>

      {/* Top Spots */}
      <div className="mb-4">
        <p className="text-xs text-text-muted mb-2">Top spots</p>
        <div className="flex flex-wrap gap-2">
          {region.topSpots.slice(0, 4).map((spot) => (
            <span
              key={spot.name}
              className="text-xs px-2 py-1 rounded-full bg-white/10 text-text-secondary"
            >
              {spot.name}
            </span>
          ))}
        </div>
      </div>

      {/* Vibes */}
      <div className="flex flex-wrap gap-2">
        {region.vibes.map((vibe) => (
          <span
            key={vibe}
            className="text-xs px-2 py-1 rounded-full"
            style={{
              backgroundColor: `${region.color}20`,
              color: region.color,
            }}
          >
            {vibe}
          </span>
        ))}
      </div>

      {/* Transit Info */}
      {region.transitFromGalata && (
        <div className="mt-4 pt-4 border-t border-white/10">
          <div className="flex items-center gap-2 text-sm text-text-secondary">
            <Navigation className="w-4 h-4" />
            <span>{region.transitFromGalata}</span>
          </div>
        </div>
      )}
    </div>
  )
}
