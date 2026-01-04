# Geography Tab Implementation Plan

## Overview

Add a new "Geography" tab to the Istanbul travel guide featuring an interactive Mapbox map with historical layers, time-based visualization, and scrollytelling narratives.

---

## Phase 1: Setup & Infrastructure

### 1.1 Install Dependencies

```bash
bun add mapbox-gl react-map-gl @turf/turf
bun add -D @types/mapbox-gl
```

- `mapbox-gl` - Core Mapbox GL JS library
- `react-map-gl` - React wrapper (by Uber/Vis.gl team)
- `@turf/turf` - Geospatial analysis for animations

### 1.2 Environment Setup

**Create `.env` file (gitignored):**
```
VITE_MAPBOX_TOKEN=pk.eyJ1...
```

**Update `.github/workflows/deploy.yml`:**
```yaml
- name: Build
  run: bun run build
  env:
    VITE_MAPBOX_TOKEN: ${{ secrets.MAPBOX_ACCESS_TOKEN }}
```

**Create Mapbox account & token:**
1. Sign up at mapbox.com
2. Create new access token with URL restrictions:
   - `nikubaba.com`
   - `*.nikubaba.com`
   - `localhost:5173` (for dev)

### 1.3 Add Mapbox CSS

In `src/index.css` or the Geography component:
```css
@import 'mapbox-gl/dist/mapbox-gl.css';
```

---

## Phase 2: Data Structures

### 2.1 Region Definitions

```typescript
// src/pages/istanbul/data/regions.ts

export interface Region {
  id: string
  name: string
  nameTurkish: string
  side: 'europe' | 'asia'
  tagline: string
  description: string
  historicalNote?: string
  vibes: ('historic' | 'trendy' | 'local' | 'touristy' | 'nightlife')[]
  priceLevel: 1 | 2 | 3 | 4
  walkingTimeFromGalata: string
  transitFromGalata?: string
  // GeoJSON polygon coordinates
  boundary: number[][]
  center: [number, number]
  // Activity levels by hour (0-23)
  activityByHour: Record<number, 'low' | 'moderate' | 'high' | 'packed'>
  bestTimeOfDay: string
  topSpots: { name: string; type: string; coords: [number, number] }[]
  color: string
}

export const regions: Region[] = [
  {
    id: 'sultanahmet',
    name: 'Sultanahmet',
    nameTurkish: 'Sultanahmet',
    side: 'europe',
    tagline: 'The Historic Peninsula',
    description: 'The ancient heart of Constantinople and Istanbul...',
    historicalNote: 'Capital of Byzantine & Ottoman Empires for 1,600 years',
    vibes: ['historic', 'touristy'],
    priceLevel: 3,
    walkingTimeFromGalata: '20 min via Galata Bridge',
    boundary: [[28.97, 41.01], [28.98, 41.01], ...], // GeoJSON coords
    center: [28.9769, 41.0082],
    activityByHour: {
      6: 'low', 7: 'low', 8: 'moderate', 9: 'high', 10: 'packed',
      // ... etc
    },
    bestTimeOfDay: 'Early morning (8-9am) or late afternoon',
    topSpots: [
      { name: 'Hagia Sophia', type: 'landmark', coords: [28.9800, 41.0086] },
      { name: 'Blue Mosque', type: 'landmark', coords: [28.9767, 41.0054] },
    ],
    color: '#f59e0b', // amber
  },
  // ... more regions (Galata, Kadıköy, Balat, Beyoğlu, Eminönü, Beşiktaş, Üsküdar)
]
```

### 2.2 Historical Data

```typescript
// src/pages/istanbul/data/historical.ts

export interface HistoricalEra {
  id: string
  name: string
  yearStart: number
  yearEnd: number
  description: string
  mapStyle?: string // Custom Mapbox style for era
  landmarks: HistoricalLandmark[]
  wallsVisible: boolean
  territoryGeoJSON?: GeoJSON.FeatureCollection
}

export interface HistoricalLandmark {
  id: string
  name: string
  nameHistorical?: string // e.g., "Church of Holy Wisdom" for Hagia Sophia
  coords: [number, number]
  builtYear: number
  builtBy: string
  currentUse: string
  historicalUse: string
  transformations: { year: number; event: string }[]
}

export const eras: HistoricalEra[] = [
  {
    id: 'byzantine',
    name: 'Byzantine Constantinople',
    yearStart: 330,
    yearEnd: 1453,
    description: 'Capital of the Eastern Roman Empire',
    landmarks: [
      {
        id: 'hagia-sophia',
        name: 'Hagia Sophia',
        nameHistorical: 'Church of Holy Wisdom',
        coords: [28.9800, 41.0086],
        builtYear: 537,
        builtBy: 'Emperor Justinian I',
        currentUse: 'Mosque',
        historicalUse: 'Cathedral',
        transformations: [
          { year: 537, event: 'Completed as Christian cathedral' },
          { year: 1453, event: 'Converted to mosque' },
          { year: 1934, event: 'Converted to museum' },
          { year: 2020, event: 'Reconverted to mosque' },
        ]
      },
      // ... more landmarks
    ],
    wallsVisible: true,
  },
  {
    id: 'ottoman',
    name: 'Ottoman Istanbul',
    yearStart: 1453,
    yearEnd: 1922,
    // ...
  },
  {
    id: 'modern',
    name: 'Modern Istanbul',
    yearStart: 1923,
    yearEnd: 2024,
    // ...
  }
]
```

### 2.3 Tour/Story Data

```typescript
// src/pages/istanbul/data/tours.ts

export interface TourChapter {
  id: string
  title: string
  description: string
  location: {
    center: [number, number]
    zoom: number
    pitch: number
    bearing: number
  }
  onChapterEnter?: {
    layer: string
    opacity: number
  }[]
  media?: {
    type: 'image' | 'video'
    url: string
  }
}

export interface Tour {
  id: string
  title: string
  description: string
  duration: string // "~5 min"
  chapters: TourChapter[]
}

export const tours: Tour[] = [
  {
    id: 'conquest-1453',
    title: 'The Fall of Constantinople',
    description: 'Experience the 1453 Ottoman conquest',
    duration: '~5 min',
    chapters: [
      {
        id: 'walls',
        title: 'The Theodosian Walls',
        description: 'For over 1,000 years, these walls protected the city...',
        location: {
          center: [28.9240, 41.0150],
          zoom: 14,
          pitch: 60,
          bearing: -20,
        },
      },
      // ... more chapters
    ]
  },
  {
    id: 'seven-hills',
    title: 'The Seven Hills',
    description: 'Like Rome, Istanbul was built on seven hills',
    duration: '~7 min',
    chapters: [/* ... */]
  },
  {
    id: 'bosphorus',
    title: 'Two Continents',
    description: 'The only city spanning Europe and Asia',
    duration: '~4 min',
    chapters: [/* ... */]
  }
]
```

---

## Phase 3: Components

### 3.1 Component Structure

```
src/pages/istanbul/
├── index.tsx                    # Main Istanbul page (existing)
├── components/
│   └── geography/
│       ├── GeographySection.tsx # Main geography tab container
│       ├── MapView.tsx          # Mapbox map wrapper
│       ├── TimeSlider.tsx       # Time of day slider
│       ├── RegionCard.tsx       # Popup card for selected region
│       ├── TourPlayer.tsx       # Scrollytelling tour player
│       ├── LayerToggles.tsx     # Toggle controls for map layers
│       ├── LegendPanel.tsx      # Map legend
│       └── ModeSelector.tsx     # Switch between Explore/Tour/Time modes
├── data/
│   ├── regions.ts
│   ├── historical.ts
│   └── tours.ts
└── hooks/
    └── useMapAnimation.ts       # Animation helpers
```

### 3.2 GeographySection Component

```tsx
// src/pages/istanbul/components/geography/GeographySection.tsx

import { useState } from 'react'
import MapView from './MapView'
import TimeSlider from './TimeSlider'
import RegionCard from './RegionCard'
import TourPlayer from './TourPlayer'
import ModeSelector from './ModeSelector'
import LayerToggles from './LayerToggles'
import { regions } from '../../data/regions'
import { tours } from '../../data/tours'

type Mode = 'explore' | 'tour' | 'time'

export default function GeographySection() {
  const [mode, setMode] = useState<Mode>('explore')
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)
  const [selectedTour, setSelectedTour] = useState<string | null>(null)
  const [timeOfDay, setTimeOfDay] = useState(12) // 0-23 hours
  const [visibleLayers, setVisibleLayers] = useState({
    regions: true,
    landmarks: true,
    ferryRoutes: true,
    walls: false,
  })

  return (
    <div className="space-y-4">
      {/* Mode Selector */}
      <ModeSelector mode={mode} onModeChange={setMode} />

      {/* Map Container */}
      <div className="relative h-[500px] rounded-xl overflow-hidden">
        <MapView
          mode={mode}
          selectedRegion={selectedRegion}
          onRegionClick={setSelectedRegion}
          timeOfDay={timeOfDay}
          visibleLayers={visibleLayers}
          activeTour={selectedTour ? tours.find(t => t.id === selectedTour) : null}
        />

        {/* Layer Toggles (overlay) */}
        <LayerToggles
          layers={visibleLayers}
          onToggle={(layer) => setVisibleLayers(prev => ({
            ...prev,
            [layer]: !prev[layer]
          }))}
        />

        {/* Legend */}
        <LegendPanel mode={mode} />
      </div>

      {/* Time Slider (Time Mode) */}
      {mode === 'time' && (
        <TimeSlider
          value={timeOfDay}
          onChange={setTimeOfDay}
        />
      )}

      {/* Tour Selector (Tour Mode) */}
      {mode === 'tour' && (
        <div className="grid grid-cols-1 gap-3">
          {tours.map(tour => (
            <TourCard
              key={tour.id}
              tour={tour}
              active={selectedTour === tour.id}
              onClick={() => setSelectedTour(tour.id)}
            />
          ))}
        </div>
      )}

      {/* Region Card (Explore Mode) */}
      {mode === 'explore' && selectedRegion && (
        <RegionCard
          region={regions.find(r => r.id === selectedRegion)!}
          onClose={() => setSelectedRegion(null)}
        />
      )}
    </div>
  )
}
```

### 3.3 MapView Component

```tsx
// src/pages/istanbul/components/geography/MapView.tsx

import { useRef, useCallback } from 'react'
import Map, { Source, Layer, Marker, NavigationControl } from 'react-map-gl'
import type { MapRef } from 'react-map-gl'
import { regions } from '../../data/regions'

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN

// Dark style matching app theme
const MAP_STYLE = 'mapbox://styles/mapbox/dark-v11'

// Istanbul center
const INITIAL_VIEW = {
  longitude: 28.9784,
  latitude: 41.0082,
  zoom: 12,
  pitch: 0,
  bearing: 0,
}

interface MapViewProps {
  mode: 'explore' | 'tour' | 'time'
  selectedRegion: string | null
  onRegionClick: (regionId: string) => void
  timeOfDay: number
  visibleLayers: Record<string, boolean>
  activeTour: Tour | null
}

export default function MapView({
  mode,
  selectedRegion,
  onRegionClick,
  timeOfDay,
  visibleLayers,
  activeTour,
}: MapViewProps) {
  const mapRef = useRef<MapRef>(null)

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

  // Calculate heatmap opacity based on time
  const getRegionOpacity = (region: Region) => {
    if (mode !== 'time') return 0.3
    const activity = region.activityByHour[timeOfDay]
    switch (activity) {
      case 'packed': return 0.8
      case 'high': return 0.6
      case 'moderate': return 0.4
      case 'low': return 0.2
      default: return 0.3
    }
  }

  // Convert regions to GeoJSON
  const regionsGeoJSON = {
    type: 'FeatureCollection',
    features: regions.map(region => ({
      type: 'Feature',
      id: region.id,
      properties: {
        name: region.name,
        color: region.color,
        opacity: getRegionOpacity(region),
      },
      geometry: {
        type: 'Polygon',
        coordinates: [region.boundary],
      },
    })),
  }

  return (
    <Map
      ref={mapRef}
      mapboxAccessToken={MAPBOX_TOKEN}
      initialViewState={INITIAL_VIEW}
      style={{ width: '100%', height: '100%' }}
      mapStyle={MAP_STYLE}
      onClick={(e) => {
        // Check if clicked on a region
        const features = e.features?.filter(f => f.layer?.id === 'regions-fill')
        if (features?.length) {
          onRegionClick(features[0].id as string)
          flyToRegion(features[0].id as string)
        }
      }}
      interactiveLayerIds={['regions-fill']}
      fog={{
        color: 'rgb(10, 10, 15)',
        'high-color': 'rgb(20, 20, 30)',
        'horizon-blend': 0.1,
      }}
    >
      {/* Navigation Controls */}
      <NavigationControl position="top-right" />

      {/* Region Polygons */}
      {visibleLayers.regions && (
        <Source id="regions" type="geojson" data={regionsGeoJSON}>
          <Layer
            id="regions-fill"
            type="fill"
            paint={{
              'fill-color': ['get', 'color'],
              'fill-opacity': ['get', 'opacity'],
            }}
          />
          <Layer
            id="regions-outline"
            type="line"
            paint={{
              'line-color': ['get', 'color'],
              'line-width': 2,
              'line-opacity': 0.8,
            }}
          />
        </Source>
      )}

      {/* Galata Marker (Home Base) */}
      <Marker longitude={28.9744} latitude={41.0256}>
        <div className="w-8 h-8 bg-accent-cyan rounded-full flex items-center justify-center animate-pulse">
          <span className="text-sm">★</span>
        </div>
      </Marker>

      {/* Ferry Routes */}
      {visibleLayers.ferryRoutes && (
        <Source id="ferry-routes" type="geojson" data={ferryRoutesGeoJSON}>
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

      {/* Historical Walls */}
      {visibleLayers.walls && (
        <Source id="walls" type="geojson" data={wallsGeoJSON}>
          <Layer
            id="walls-line"
            type="line"
            paint={{
              'line-color': '#aa66ff',
              'line-width': 3,
              'line-opacity': 0.8,
            }}
          />
        </Source>
      )}
    </Map>
  )
}
```

### 3.4 TimeSlider Component

```tsx
// src/pages/istanbul/components/geography/TimeSlider.tsx

import { Sun, Moon, Sunrise, Sunset } from 'lucide-react'

interface TimeSliderProps {
  value: number // 0-23
  onChange: (hour: number) => void
}

export default function TimeSlider({ value, onChange }: TimeSliderProps) {
  const getTimeIcon = () => {
    if (value >= 6 && value < 8) return <Sunrise className="w-5 h-5 text-orange-400" />
    if (value >= 8 && value < 18) return <Sun className="w-5 h-5 text-yellow-400" />
    if (value >= 18 && value < 20) return <Sunset className="w-5 h-5 text-orange-500" />
    return <Moon className="w-5 h-5 text-blue-400" />
  }

  const formatTime = (hour: number) => {
    const h = hour % 12 || 12
    const ampm = hour < 12 ? 'AM' : 'PM'
    return `${h}:00 ${ampm}`
  }

  const getTimeDescription = () => {
    if (value >= 5 && value < 7) return 'Dawn - Call to prayer, fishermen on Galata Bridge'
    if (value >= 7 && value < 9) return 'Morning - Fresh simit, quiet museums'
    if (value >= 9 && value < 12) return 'Mid-morning - Tourist sites filling up'
    if (value >= 12 && value < 14) return 'Lunch - Markets buzzing, Kadıköy peak'
    if (value >= 14 && value < 17) return 'Afternoon - Museums, Turkish coffee time'
    if (value >= 17 && value < 19) return 'Golden Hour - Rooftops, Bosphorus views'
    if (value >= 19 && value < 21) return 'Evening - Dinner reservations, meyhanes'
    if (value >= 21 && value < 24) return 'Night - Istiklal alive, nightlife begins'
    return 'Late Night - Clubs, late-night köfte'
  }

  return (
    <div className="bg-bg-card rounded-xl p-4 space-y-3">
      {/* Time Display */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {getTimeIcon()}
          <span className="text-lg font-semibold">{formatTime(value)}</span>
        </div>
        <span className="text-sm text-text-secondary">{getTimeDescription()}</span>
      </div>

      {/* Slider */}
      <div className="relative">
        <input
          type="range"
          min={0}
          max={23}
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value))}
          className="w-full h-2 bg-bg-primary rounded-lg appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right,
              #1e3a5f 0%,
              #f97316 25%,
              #fbbf24 50%,
              #f97316 75%,
              #1e3a5f 100%
            )`,
          }}
        />
        {/* Hour markers */}
        <div className="flex justify-between text-xs text-text-muted mt-1">
          <span>6am</span>
          <span>12pm</span>
          <span>6pm</span>
          <span>12am</span>
        </div>
      </div>
    </div>
  )
}
```

### 3.5 TourPlayer Component

```tsx
// src/pages/istanbul/components/geography/TourPlayer.tsx

import { useState, useEffect, useRef } from 'react'
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react'
import type { Tour, TourChapter } from '../../data/tours'

interface TourPlayerProps {
  tour: Tour
  mapRef: React.RefObject<MapRef>
  onExit: () => void
}

export default function TourPlayer({ tour, mapRef, onExit }: TourPlayerProps) {
  const [currentChapter, setCurrentChapter] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const chapter = tour.chapters[currentChapter]

  // Fly to chapter location when it changes
  useEffect(() => {
    if (mapRef.current && chapter) {
      mapRef.current.flyTo({
        center: chapter.location.center,
        zoom: chapter.location.zoom,
        pitch: chapter.location.pitch,
        bearing: chapter.location.bearing,
        duration: 3000,
        essential: true,
      })
    }
  }, [currentChapter, chapter])

  // Auto-advance when playing
  useEffect(() => {
    if (!isPlaying) return
    const timer = setTimeout(() => {
      if (currentChapter < tour.chapters.length - 1) {
        setCurrentChapter(c => c + 1)
      } else {
        setIsPlaying(false)
      }
    }, 8000) // 8 seconds per chapter
    return () => clearTimeout(timer)
  }, [isPlaying, currentChapter, tour.chapters.length])

  return (
    <div className="absolute bottom-4 left-4 right-4 bg-bg-card/95 backdrop-blur-lg rounded-xl p-4">
      {/* Progress */}
      <div className="flex gap-1 mb-3">
        {tour.chapters.map((_, i) => (
          <div
            key={i}
            className={cn(
              'h-1 flex-1 rounded-full transition-colors',
              i === currentChapter ? 'bg-accent-cyan' :
              i < currentChapter ? 'bg-accent-cyan/50' : 'bg-white/20'
            )}
          />
        ))}
      </div>

      {/* Chapter Content */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-white mb-1">
          {chapter.title}
        </h3>
        <p className="text-sm text-text-secondary">
          {chapter.description}
        </p>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setCurrentChapter(c => Math.max(0, c - 1))}
          disabled={currentChapter === 0}
          className="p-2 text-text-secondary hover:text-white disabled:opacity-30"
        >
          <SkipBack className="w-5 h-5" />
        </button>

        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-12 h-12 rounded-full bg-accent-cyan flex items-center justify-center"
        >
          {isPlaying ? (
            <Pause className="w-6 h-6 text-black" />
          ) : (
            <Play className="w-6 h-6 text-black ml-1" />
          )}
        </button>

        <button
          onClick={() => setCurrentChapter(c => Math.min(tour.chapters.length - 1, c + 1))}
          disabled={currentChapter === tour.chapters.length - 1}
          className="p-2 text-text-secondary hover:text-white disabled:opacity-30"
        >
          <SkipForward className="w-5 h-5" />
        </button>
      </div>

      {/* Exit */}
      <button
        onClick={onExit}
        className="absolute top-2 right-2 text-text-secondary hover:text-white"
      >
        ✕
      </button>
    </div>
  )
}
```

---

## Phase 4: GeoJSON Data

### 4.1 Region Boundaries

Need to create/source polygon boundaries for:
- Sultanahmet (Historic Peninsula)
- Galata & Karaköy
- Beyoğlu & Istiklal
- Balat & Fener
- Eminönü
- Beşiktaş
- Ortaköy
- Kadıköy
- Üsküdar

**Source options:**
1. Draw manually in geojson.io
2. Extract from OpenStreetMap
3. Use administrative boundaries from Mapbox

### 4.2 Ferry Routes

GeoJSON LineStrings for:
- Karaköy → Kadıköy
- Eminönü → Üsküdar
- Kabataş → Kadıköy
- Bosphorus cruise route

### 4.3 Historical Walls

GeoJSON for Theodosian Walls:
- Land walls (6.5km)
- Sea walls (Golden Horn)
- Sea walls (Marmara)
- Galata walls

**Source**: Can trace from satellite imagery or find existing datasets

### 4.4 Landmarks

Point data for major landmarks with historical metadata:
- Hagia Sophia
- Blue Mosque
- Topkapi Palace
- Galata Tower
- Süleymaniye Mosque
- Grand Bazaar
- etc.

---

## Phase 5: Integration

### 5.1 Add Tab to Istanbul Page

```tsx
// In src/pages/istanbul/index.tsx

import { Globe } from 'lucide-react' // Add to imports
import GeographySection from './components/geography/GeographySection'

// Update tabs array:
const tabs = [
  { id: 'itinerary', label: 'Itinerary', icon: <Calendar className="w-4 h-4" /> },
  { id: 'geography', label: 'Map', icon: <Globe className="w-4 h-4" /> }, // NEW
  { id: 'history', label: 'History', icon: <Landmark className="w-4 h-4" /> },
  // ... rest
]

// Add render case:
{activeTab === 'geography' && <GeographySection />}
```

### 5.2 Update OG Image Generator

```tsx
// In scripts/generate-og-images.ts

// Update Istanbul to use geography tab for OG preview (shows the map)
if (app.path.includes('istanbul')) {
  url = `${BASE_URL}${app.path}?og=1#geography`
}
```

---

## Phase 6: Polish & Features

### 6.1 Map Styling

Create custom Mapbox style that:
- Matches app dark theme (bg: #0a0a0f)
- Uses accent colors (cyan: #00d4ff, purple: #aa66ff)
- Shows water with subtle blue
- Reduces label clutter
- Emphasizes parks/green spaces

### 6.2 Animations

- Region highlight on hover (opacity change)
- Smooth flyTo transitions
- Pulsing markers for key spots
- Animated ferry routes (moving dashes)
- Line drawing animation for walls

### 6.3 Responsive Design

- Full-width map on mobile
- Touch-friendly controls
- Collapsible panels
- Swipe between tour chapters

### 6.4 Performance

- Lazy load Mapbox only when Geography tab is active
- Use vector tiles (not raster)
- Cluster markers at low zoom
- Debounce time slider

---

## Phase 7: Future Enhancements (Optional)

### 7.1 Historical Map Overlay

- Source: David Rumsey Collection
- Georeference 1572 or 1720 Constantinople map
- Swipe comparison with modern

### 7.2 3D Buildings

- Enable Mapbox 3D buildings layer
- Custom extrusion for landmarks
- Day/night lighting

### 7.3 Offline Support

- Cache map tiles for trip
- Service worker integration

### 7.4 User Location

- Show current location on map
- "Navigate to" functionality
- Integration with phone maps app

---

## Implementation Order

1. **Day 1**: Setup (dependencies, env, Mapbox account)
2. **Day 1**: Basic MapView component with dark style
3. **Day 2**: Region data & polygons
4. **Day 2**: Region selection & cards
5. **Day 3**: Time slider & activity heatmap
6. **Day 3**: Ferry routes & landmarks
7. **Day 4**: Tour data & TourPlayer
8. **Day 4**: Historical walls layer
9. **Day 5**: Polish, animations, responsive
10. **Day 5**: Testing & OG image update

---

## Files to Create

```
src/pages/istanbul/
├── components/geography/
│   ├── GeographySection.tsx
│   ├── MapView.tsx
│   ├── TimeSlider.tsx
│   ├── RegionCard.tsx
│   ├── TourPlayer.tsx
│   ├── TourCard.tsx
│   ├── LayerToggles.tsx
│   ├── LegendPanel.tsx
│   └── ModeSelector.tsx
├── data/
│   ├── regions.ts
│   ├── historical.ts
│   ├── tours.ts
│   ├── ferryRoutes.ts
│   └── walls.ts
└── hooks/
    └── useMapAnimation.ts
```

---

## Dependencies Summary

```json
{
  "dependencies": {
    "mapbox-gl": "^3.x",
    "react-map-gl": "^7.x",
    "@turf/turf": "^7.x"
  },
  "devDependencies": {
    "@types/mapbox-gl": "^3.x"
  }
}
```

---

## Environment Variables

```
VITE_MAPBOX_TOKEN=pk.eyJ1...
```

GitHub Secret: `MAPBOX_ACCESS_TOKEN`

---

## Testing Checklist

- [ ] Map loads with dark theme
- [ ] Regions render as polygons
- [ ] Click region → card appears + flyTo
- [ ] Time slider changes region opacity
- [ ] Ferry routes visible
- [ ] Walls layer toggles
- [ ] Tour plays through chapters
- [ ] Camera follows tour
- [ ] Mobile responsive
- [ ] No console errors
- [ ] OG image captures map
