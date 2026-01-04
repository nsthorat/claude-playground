import { useState } from 'react'
import { Map, Clock, Layers, Ship, Tag } from 'lucide-react'
import MapView from './MapView'
import TimeSlider from './TimeSlider'
import RegionCard from './RegionCard'
import { regions } from '../../data/regions'
import { cn } from '@/lib/utils'

type Mode = 'explore' | 'time'

export default function GeographySection() {
  const [mode, setMode] = useState<Mode>('explore')
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)
  const [timeOfDay, setTimeOfDay] = useState(12) // Default to noon
  const [visibleLayers, setVisibleLayers] = useState({
    regions: true,
    ferryRoutes: true,
    waterLabels: true,
  })

  const selectedRegionData = selectedRegion
    ? regions.find(r => r.id === selectedRegion)
    : null

  return (
    <div className="space-y-4">
      {/* Mode Toggle */}
      <div className="flex gap-2 p-1 bg-bg-card rounded-xl">
        <button
          onClick={() => setMode('explore')}
          className={cn(
            'flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg text-sm font-medium transition-all',
            mode === 'explore'
              ? 'bg-accent-cyan text-black'
              : 'text-text-secondary hover:text-white'
          )}
        >
          <Map className="w-4 h-4" />
          Explore
        </button>
        <button
          onClick={() => setMode('time')}
          className={cn(
            'flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg text-sm font-medium transition-all',
            mode === 'time'
              ? 'bg-accent-cyan text-black'
              : 'text-text-secondary hover:text-white'
          )}
        >
          <Clock className="w-4 h-4" />
          Time of Day
        </button>
      </div>

      {/* Map Container */}
      <div className="relative">
        <div className="h-[450px] rounded-xl overflow-hidden border border-white/10">
          <MapView
            mode={mode}
            selectedRegion={selectedRegion}
            onRegionClick={setSelectedRegion}
            timeOfDay={timeOfDay}
            visibleLayers={visibleLayers}
          />
        </div>

        {/* Layer Toggles - Top Left */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          <button
            onClick={() => setVisibleLayers(prev => ({ ...prev, regions: !prev.regions }))}
            className={cn(
              'flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all',
              visibleLayers.regions
                ? 'bg-accent-cyan/20 text-accent-cyan border border-accent-cyan/30'
                : 'bg-black/50 text-text-muted border border-white/10'
            )}
          >
            <Layers className="w-3 h-3" />
            Regions
          </button>
          <button
            onClick={() => setVisibleLayers(prev => ({ ...prev, ferryRoutes: !prev.ferryRoutes }))}
            className={cn(
              'flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all',
              visibleLayers.ferryRoutes
                ? 'bg-accent-cyan/20 text-accent-cyan border border-accent-cyan/30'
                : 'bg-black/50 text-text-muted border border-white/10'
            )}
          >
            <Ship className="w-3 h-3" />
            Ferries
          </button>
          <button
            onClick={() => setVisibleLayers(prev => ({ ...prev, waterLabels: !prev.waterLabels }))}
            className={cn(
              'flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all',
              visibleLayers.waterLabels
                ? 'bg-accent-cyan/20 text-accent-cyan border border-accent-cyan/30'
                : 'bg-black/50 text-text-muted border border-white/10'
            )}
          >
            <Tag className="w-3 h-3" />
            Labels
          </button>
        </div>
      </div>

      {/* Time Slider (Time Mode Only) */}
      {mode === 'time' && (
        <TimeSlider
          value={timeOfDay}
          onChange={setTimeOfDay}
        />
      )}

      {/* Instructions */}
      {mode === 'explore' && !selectedRegion && (
        <div className="text-center py-4 text-text-muted text-sm">
          Tap a neighborhood to learn more • Your hotel is marked with ★
        </div>
      )}

      {mode === 'time' && !selectedRegion && (
        <div className="text-center py-2 text-text-muted text-sm">
          Drag the slider to see how busy each area gets throughout the day
        </div>
      )}

      {/* Region Card */}
      {selectedRegionData && (
        <RegionCard
          region={selectedRegionData}
          onClose={() => setSelectedRegion(null)}
          currentHour={mode === 'time' ? timeOfDay : undefined}
        />
      )}

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-bg-card rounded-xl p-4 border border-white/10">
          <div className="text-2xl font-bold text-white mb-1">
            {regions.filter(r => r.side === 'europe').length}
          </div>
          <div className="text-sm text-text-muted">European neighborhoods</div>
        </div>
        <div className="bg-bg-card rounded-xl p-4 border border-white/10">
          <div className="text-2xl font-bold text-white mb-1">
            {regions.filter(r => r.side === 'asia').length}
          </div>
          <div className="text-sm text-text-muted">Asian neighborhoods</div>
        </div>
      </div>

      {/* Two Continents Note */}
      <div className="bg-gradient-to-r from-accent-cyan/10 to-accent-purple/10 rounded-xl p-4 border border-white/10">
        <h4 className="font-semibold text-white mb-2">🌍 Two Continents, One City</h4>
        <p className="text-sm text-text-secondary">
          Istanbul is the only city in the world that spans two continents. The Bosphorus strait
          separates Europe (west) from Asia (east). Take a 20-minute ferry ride to cross between them!
        </p>
      </div>
    </div>
  )
}
