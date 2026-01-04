import { useState, useEffect } from 'react'
import { Navigation, Loader2, MapPin, RefreshCw, AlertCircle } from 'lucide-react'
import { useGeolocation, useNearbyPOIs, useWikipedia, type POI } from './hooks'
import { cn } from '@/lib/utils'
import type { MapRef } from 'react-map-gl/mapbox'

const categories = [
  { id: 'all', label: 'All', emoji: '📍' },
  { id: 'food', label: 'Food', emoji: '🍽️' },
  { id: 'sights', label: 'Sights', emoji: '🏛️' },
  { id: 'historic', label: 'Historic', emoji: '🏺' },
  { id: 'shopping', label: 'Shopping', emoji: '🛍️' },
]

const radiusOptions = [200, 500, 1000]

interface HereModeProps {
  mapRef: React.RefObject<MapRef | null>
  onLocationChange: (lat: number, lon: number) => void
  selectedPOI: POI | null
  onSelectPOI: (poi: POI | null) => void
}

export default function HereMode({ mapRef, onLocationChange, selectedPOI, onSelectPOI }: HereModeProps) {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [radius, setRadius] = useState(500)

  const { location, loading: geoLoading, error: geoError, requestLocation } = useGeolocation()
  const { pois, loading: poisLoading, error: poisError, refetch } = useNearbyPOIs(
    location?.lat,
    location?.lon,
    radius,
    selectedCategory
  )
  const { data: wikiData, loading: wikiLoading } = useWikipedia(selectedPOI?.name || null)

  // Fly to user location when found
  useEffect(() => {
    if (location && mapRef.current) {
      mapRef.current.flyTo({
        center: [location.lon, location.lat],
        zoom: 16,
        pitch: 45,
        duration: 2000,
      })
      onLocationChange(location.lat, location.lon)
    }
  }, [location, mapRef, onLocationChange])

  // Not in Istanbul check
  const isInIstanbul = location &&
    location.lat > 40.8 && location.lat < 41.3 &&
    location.lon > 28.5 && location.lon < 29.5

  if (!location) {
    return (
      <div className="space-y-4">
        <div className="bg-bg-card rounded-xl p-6 text-center space-y-4">
          <div className="w-16 h-16 mx-auto rounded-full bg-accent-cyan/20 flex items-center justify-center">
            <Navigation className="w-8 h-8 text-accent-cyan" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Discover What's Nearby</h3>
            <p className="text-sm text-text-secondary">
              Find restaurants, museums, historic sites, and more around your current location.
            </p>
          </div>
          <button
            onClick={requestLocation}
            disabled={geoLoading}
            className="w-full py-3 bg-accent-cyan hover:bg-accent-cyan/90 rounded-xl flex items-center justify-center gap-2 text-black font-medium transition-colors disabled:opacity-50"
          >
            {geoLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Finding your location...
              </>
            ) : (
              <>
                <Navigation className="w-5 h-5" />
                Use My Location
              </>
            )}
          </button>
          {geoError && (
            <p className="text-sm text-accent-red flex items-center gap-2 justify-center">
              <AlertCircle className="w-4 h-4" />
              {geoError}
            </p>
          )}
        </div>

        <div className="bg-bg-card/50 rounded-xl p-4 text-center">
          <p className="text-xs text-text-muted">
            💡 Tip: You can also tap on the map to explore any area in Istanbul
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* Location Status */}
      {!isInIstanbul && (
        <div className="bg-accent-purple/20 rounded-xl p-3 text-sm text-accent-purple flex items-center gap-2">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          You're not in Istanbul! Showing demo data near Galata.
        </div>
      )}

      {/* Category Filter */}
      <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={cn(
              'flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors',
              selectedCategory === cat.id
                ? 'bg-accent-cyan text-black'
                : 'bg-bg-card hover:bg-bg-card/80 text-text-secondary'
            )}
          >
            <span>{cat.emoji}</span>
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Radius & Refresh */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-text-muted">Radius:</span>
          {radiusOptions.map((r) => (
            <button
              key={r}
              onClick={() => setRadius(r)}
              className={cn(
                'px-2 py-1 rounded text-xs font-medium transition-colors',
                radius === r
                  ? 'bg-accent-cyan/20 text-accent-cyan'
                  : 'hover:bg-white/10 text-text-secondary'
              )}
            >
              {r}m
            </button>
          ))}
        </div>
        <button
          onClick={refetch}
          disabled={poisLoading}
          className="p-2 hover:bg-white/10 rounded-lg transition-colors text-text-secondary"
        >
          <RefreshCw className={cn('w-4 h-4', poisLoading && 'animate-spin')} />
        </button>
      </div>

      {/* POI List */}
      <div className="space-y-2">
        {poisLoading && pois.length === 0 ? (
          <div className="bg-bg-card rounded-xl p-8 text-center">
            <Loader2 className="w-6 h-6 animate-spin mx-auto text-accent-cyan mb-2" />
            <p className="text-sm text-text-secondary">Finding nearby places...</p>
          </div>
        ) : poisError ? (
          <div className="bg-bg-card rounded-xl p-4 text-center text-accent-red text-sm">
            {poisError}
          </div>
        ) : pois.length === 0 ? (
          <div className="bg-bg-card rounded-xl p-8 text-center">
            <p className="text-text-secondary">No places found nearby. Try increasing the radius.</p>
          </div>
        ) : (
          <div className="space-y-2 max-h-[300px] overflow-y-auto">
            {pois.map((poi) => (
              <button
                key={poi.id}
                onClick={() => onSelectPOI(selectedPOI?.id === poi.id ? null : poi)}
                className={cn(
                  'w-full text-left bg-bg-card rounded-xl p-3 transition-all',
                  selectedPOI?.id === poi.id
                    ? 'ring-2 ring-accent-cyan bg-accent-cyan/10'
                    : 'hover:bg-bg-card/80'
                )}
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-bg-primary flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent-cyan" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-white truncate">{poi.name}</h4>
                    <p className="text-xs text-text-muted capitalize">{poi.type.replace(/_/g, ' ')}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-sm font-medium text-accent-cyan">{poi.distance}m</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Selected POI Detail */}
      {selectedPOI && (
        <div className="bg-bg-card rounded-xl p-4 space-y-3 border border-accent-cyan/30">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold text-white">{selectedPOI.name}</h3>
              <p className="text-sm text-text-muted capitalize">{selectedPOI.type.replace(/_/g, ' ')}</p>
            </div>
            <button
              onClick={() => onSelectPOI(null)}
              className="p-1 hover:bg-white/10 rounded"
            >
              ✕
            </button>
          </div>

          {wikiLoading ? (
            <div className="flex items-center gap-2 text-sm text-text-secondary">
              <Loader2 className="w-4 h-4 animate-spin" />
              Loading info...
            </div>
          ) : wikiData ? (
            <div className="space-y-2">
              {wikiData.thumbnail && (
                <img
                  src={wikiData.thumbnail}
                  alt={wikiData.title}
                  className="w-full h-32 object-cover rounded-lg"
                />
              )}
              <p className="text-sm text-text-secondary line-clamp-3">
                {wikiData.extract}
              </p>
              <a
                href={wikiData.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent-cyan hover:underline"
              >
                Read more on Wikipedia →
              </a>
            </div>
          ) : (
            <p className="text-sm text-text-muted">
              {selectedPOI.tags.cuisine && `Cuisine: ${selectedPOI.tags.cuisine}`}
              {selectedPOI.tags.opening_hours && ` • ${selectedPOI.tags.opening_hours}`}
              {!selectedPOI.tags.cuisine && !selectedPOI.tags.opening_hours && 'No additional info available'}
            </p>
          )}

          {/* Directions button */}
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${selectedPOI.lat},${selectedPOI.lon}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-2 bg-accent-cyan/20 hover:bg-accent-cyan/30 rounded-lg text-center text-sm text-accent-cyan font-medium transition-colors"
          >
            Get Directions
          </a>
        </div>
      )}
    </div>
  )
}
