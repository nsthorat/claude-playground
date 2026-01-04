import { useRef, useCallback, useEffect, useState, forwardRef, useImperativeHandle } from 'react'
import Map, { Source, Layer, Marker, NavigationControl } from 'react-map-gl/mapbox'
import type { MapRef } from 'react-map-gl/mapbox'
import { Star, AlertCircle, MapPin } from 'lucide-react'
import { regions, regionsToGeoJSON, ferryRoutes, bosphorusLine, goldenHorn } from '../../data/regions'
import { getWallsGeoJSON, historicalLandmarks } from '../../data/walls'
import type { Region } from '../../data/regions'
import type { POI } from './hooks'
import 'mapbox-gl/dist/mapbox-gl.css'

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN

// Dark style matching app theme
const MAP_STYLE = 'mapbox://styles/mapbox/dark-v11'

// Istanbul center (Galata area)
const INITIAL_VIEW = {
  longitude: 28.9784,
  latitude: 41.0150,
  zoom: 12,
  pitch: 0,
  bearing: 0,
}

interface MapViewProps {
  mode: 'explore' | 'time' | 'here' | 'tour'
  selectedRegion: string | null
  onRegionClick: (regionId: string | null) => void
  timeOfDay: number
  visibleLayers: {
    regions: boolean
    ferryRoutes: boolean
    waterLabels: boolean
    walls: boolean
  }
  userLocation?: { lat: number; lon: number } | null
  selectedPOI?: POI | null
}

const MapView = forwardRef<MapRef, MapViewProps>(function MapView({
  mode,
  selectedRegion,
  onRegionClick,
  timeOfDay,
  visibleLayers,
  userLocation,
  selectedPOI,
}, ref) {
  const mapRef = useRef<MapRef>(null)

  // Expose mapRef to parent via forwardRef
  useImperativeHandle(ref, () => mapRef.current!, [mapRef.current])
  const [mapLoaded, setMapLoaded] = useState(false)

  // If no token, show setup message
  if (!MAPBOX_TOKEN) {
    return (
      <div className="w-full h-full bg-bg-card rounded-xl flex flex-col items-center justify-center p-8 text-center">
        <AlertCircle className="w-12 h-12 text-accent-cyan mb-4" />
        <h3 className="text-lg font-semibold text-white mb-2">Mapbox Token Required</h3>
        <p className="text-text-secondary text-sm mb-4 max-w-md">
          To view the interactive map, add your Mapbox access token to the environment:
        </p>
        <code className="bg-bg-primary px-4 py-2 rounded-lg text-accent-cyan text-sm">
          VITE_MAPBOX_TOKEN=pk.eyJ...
        </code>
        <p className="text-text-muted text-xs mt-4">
          Get a free token at <a href="https://mapbox.com" className="text-accent-cyan hover:underline" target="_blank" rel="noopener noreferrer">mapbox.com</a>
        </p>
      </div>
    )
  }

  // Fly to region when selected
  const flyToRegion = useCallback((regionId: string) => {
    const region = regions.find(r => r.id === regionId)
    if (region && mapRef.current) {
      mapRef.current.flyTo({
        center: region.center,
        zoom: 14,
        pitch: 45,
        bearing: 0,
        duration: 2000,
      })
    }
  }, [])

  // Reset view
  const resetView = useCallback(() => {
    if (mapRef.current) {
      mapRef.current.flyTo({
        center: [INITIAL_VIEW.longitude, INITIAL_VIEW.latitude],
        zoom: INITIAL_VIEW.zoom,
        pitch: 0,
        bearing: 0,
        duration: 1500,
      })
    }
  }, [])

  // Handle region selection
  useEffect(() => {
    if (selectedRegion) {
      flyToRegion(selectedRegion)
    }
  }, [selectedRegion, flyToRegion])

  // Calculate opacity based on activity level
  const getActivityOpacity = (activity: string) => {
    switch (activity) {
      case 'packed': return 0.7
      case 'high': return 0.5
      case 'moderate': return 0.35
      case 'low': return 0.2
      default: return 0.3
    }
  }

  // Generate GeoJSON with current time-based activity
  const regionsGeoJSON = regionsToGeoJSON(mode === 'time' ? timeOfDay : undefined)

  return (
    <Map
      ref={mapRef}
      mapboxAccessToken={MAPBOX_TOKEN}
      initialViewState={INITIAL_VIEW}
      style={{ width: '100%', height: '100%' }}
      mapStyle={MAP_STYLE}
      onLoad={() => setMapLoaded(true)}
      onClick={(e) => {
        // Check if clicked on a region
        const features = e.features?.filter(f => f.layer?.id === 'regions-fill')
        if (features?.length) {
          const clickedRegion = features[0].properties?.id
          if (clickedRegion === selectedRegion) {
            // Clicking same region deselects
            onRegionClick(null)
            resetView()
          } else {
            onRegionClick(clickedRegion)
          }
        } else {
          // Clicked outside regions
          onRegionClick(null)
          resetView()
        }
      }}
      interactiveLayerIds={['regions-fill']}
      fog={{
        color: 'rgb(10, 10, 15)',
        'high-color': 'rgb(20, 20, 30)',
        'horizon-blend': 0.1,
      }}
      cursor="pointer"
    >
      {/* Navigation Controls */}
      <NavigationControl position="top-right" showCompass={false} />

      {/* Continental Labels */}
      {visibleLayers.waterLabels && (
        <>
          {/* Europe Label */}
          <Marker longitude={28.94} latitude={41.05} anchor="center">
            <div className="text-2xl font-bold tracking-[0.3em] text-white/10 select-none pointer-events-none">
              EUROPE
            </div>
          </Marker>
          {/* Asia Label */}
          <Marker longitude={29.05} latitude={41.02} anchor="center">
            <div className="text-2xl font-bold tracking-[0.3em] text-white/10 select-none pointer-events-none">
              ASIA
            </div>
          </Marker>
        </>
      )}

      {/* Bosphorus line */}
      <Source id="bosphorus" type="geojson" data={bosphorusLine}>
        <Layer
          id="bosphorus-line"
          type="line"
          paint={{
            'line-color': '#1e3a5f',
            'line-width': 8,
            'line-opacity': 0.3,
          }}
        />
      </Source>

      {/* Golden Horn */}
      <Source id="golden-horn" type="geojson" data={goldenHorn}>
        <Layer
          id="golden-horn-line"
          type="line"
          paint={{
            'line-color': '#1e3a5f',
            'line-width': 6,
            'line-opacity': 0.3,
          }}
        />
      </Source>

      {/* Region Polygons */}
      {visibleLayers.regions && (
        <Source id="regions" type="geojson" data={regionsGeoJSON}>
          {/* Fill */}
          <Layer
            id="regions-fill"
            type="fill"
            paint={{
              'fill-color': ['get', 'color'],
              'fill-opacity': mode === 'time'
                ? [
                    'match',
                    ['get', 'activity'],
                    'packed', 0.7,
                    'high', 0.5,
                    'moderate', 0.35,
                    'low', 0.2,
                    0.3
                  ]
                : [
                    'case',
                    ['==', ['get', 'id'], selectedRegion || ''],
                    0.5,
                    0.25
                  ],
            }}
          />
          {/* Outline */}
          <Layer
            id="regions-outline"
            type="line"
            paint={{
              'line-color': ['get', 'color'],
              'line-width': [
                'case',
                ['==', ['get', 'id'], selectedRegion || ''],
                3,
                1.5
              ],
              'line-opacity': 0.8,
            }}
          />
          {/* Labels */}
          <Layer
            id="regions-labels"
            type="symbol"
            layout={{
              'text-field': ['get', 'name'],
              'text-size': 12,
              'text-anchor': 'center',
              'text-allow-overlap': false,
            }}
            paint={{
              'text-color': '#ffffff',
              'text-halo-color': '#000000',
              'text-halo-width': 1,
            }}
          />
        </Source>
      )}

      {/* Ferry Routes */}
      {visibleLayers.ferryRoutes && (
        <Source id="ferry-routes" type="geojson" data={ferryRoutes}>
          <Layer
            id="ferry-lines"
            type="line"
            paint={{
              'line-color': '#00d4ff',
              'line-width': 2,
              'line-dasharray': [2, 2],
              'line-opacity': 0.6,
            }}
          />
        </Source>
      )}

      {/* Theodosian Walls */}
      {visibleLayers.walls && (
        <Source id="walls" type="geojson" data={getWallsGeoJSON()}>
          <Layer
            id="walls-line"
            type="line"
            paint={{
              'line-color': '#aa66ff',
              'line-width': 4,
              'line-opacity': 0.8,
            }}
          />
          <Layer
            id="walls-glow"
            type="line"
            paint={{
              'line-color': '#aa66ff',
              'line-width': 12,
              'line-opacity': 0.2,
              'line-blur': 4,
            }}
          />
        </Source>
      )}

      {/* Historical Landmarks */}
      {visibleLayers.walls && historicalLandmarks.map((landmark) => (
        <Marker
          key={landmark.id}
          longitude={landmark.coords[0]}
          latitude={landmark.coords[1]}
          anchor="center"
        >
          <div className="relative group cursor-pointer">
            <div className="w-8 h-8 bg-accent-purple/80 rounded-full flex items-center justify-center shadow-lg shadow-accent-purple/30 border-2 border-white/30">
              <span className="text-sm">{landmark.emoji}</span>
            </div>
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 bg-black/90 px-3 py-2 rounded-lg text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
              <div className="font-semibold">{landmark.name}</div>
              <div className="text-text-muted">Built {landmark.built} AD</div>
            </div>
          </div>
        </Marker>
      ))}

      {/* Galata Marker (Home Base) - hide in here mode */}
      {mode !== 'here' && (
        <Marker longitude={28.9744} latitude={41.0256} anchor="center">
          <div className="relative group">
            <div className="w-8 h-8 bg-accent-cyan rounded-full flex items-center justify-center shadow-lg shadow-accent-cyan/30 animate-pulse">
              <Star className="w-4 h-4 text-black fill-black" />
            </div>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black/80 px-2 py-1 rounded text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              Your Hotel
            </div>
          </div>
        </Marker>
      )}

      {/* User Location Marker (Here Mode) */}
      {mode === 'here' && userLocation && (
        <Marker longitude={userLocation.lon} latitude={userLocation.lat} anchor="center">
          <div className="relative">
            {/* Accuracy ring */}
            <div className="absolute inset-0 w-16 h-16 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 bg-blue-500/20 rounded-full animate-ping" />
            {/* Blue dot */}
            <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg shadow-blue-500/50" />
          </div>
        </Marker>
      )}

      {/* Selected POI Marker (Here Mode) */}
      {mode === 'here' && selectedPOI && (
        <Marker longitude={selectedPOI.lon} latitude={selectedPOI.lat} anchor="bottom">
          <div className="relative animate-bounce">
            <MapPin className="w-8 h-8 text-accent-purple drop-shadow-lg" fill="currentColor" />
          </div>
        </Marker>
      )}
    </Map>
  )
})

export default MapView
