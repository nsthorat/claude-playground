# Implementation Plan: "Here" Tab + Remaining Features

## Overview

This plan covers:
1. **"Here" Tab** - Live geolocation with nearby POIs from Overpass API
2. **Tour Mode** - Scrollytelling narratives with camera animations
3. **Historical Layers** - Theodosian walls, Byzantine landmarks

---

## Part 1: "Here" Tab (Nearby POIs)

### 1.1 Concept

A new mode in the Geography section that:
- Uses browser geolocation to find user's current position
- Fetches nearby POIs from Overpass API (OpenStreetMap)
- Displays them as markers on the map
- Shows a scrollable list of nearby places
- Clicking a place shows quick info card with Wikipedia data

### 1.2 Data Sources (All Free, CORS-enabled)

| API | Use | Limits |
|-----|-----|--------|
| **Overpass API** | Nearby POIs (restaurants, museums, attractions) | Free, no key |
| **Wikipedia API** | Rich descriptions, images | Free, no key |
| **Nominatim** | Reverse geocoding (address from coords) | Free, 1 req/sec |

### 1.3 POI Categories

```typescript
const poiCategories = [
  { id: 'food', label: 'Food & Drink', icon: '🍽️', query: 'amenity~"restaurant|cafe|bar"' },
  { id: 'sights', label: 'Sights', icon: '🏛️', query: 'tourism~"attraction|museum|viewpoint"' },
  { id: 'historic', label: 'Historic', icon: '🏺', query: 'historic' },
  { id: 'shopping', label: 'Shopping', icon: '🛍️', query: 'shop~"mall|department_store|gift"' },
  { id: 'transport', label: 'Transport', icon: '🚇', query: 'amenity~"ferry_terminal"|railway=station' },
]
```

### 1.4 Components

```
src/pages/istanbul/components/geography/
├── HereMode.tsx          # Main "Here" mode container
├── NearbyList.tsx        # Scrollable list of nearby places
├── POICard.tsx           # Quick info card for selected POI
├── CategoryFilter.tsx    # Toggle buttons for POI categories
├── LocationButton.tsx    # "Use my location" button
└── hooks/
    ├── useGeolocation.ts # Browser geolocation hook
    ├── useNearbyPOIs.ts  # Overpass API fetcher
    └── useWikipedia.ts   # Wikipedia API fetcher
```

### 1.5 HereMode Component

```tsx
// src/pages/istanbul/components/geography/HereMode.tsx

import { useState, useEffect } from 'react'
import { MapPin, Loader2, Navigation } from 'lucide-react'
import { useGeolocation } from './hooks/useGeolocation'
import { useNearbyPOIs } from './hooks/useNearbyPOIs'
import NearbyList from './NearbyList'
import POICard from './POICard'
import CategoryFilter from './CategoryFilter'

interface HereModeProps {
  mapRef: React.RefObject<MapRef>
  onPOISelect: (poi: POI) => void
}

export default function HereMode({ mapRef, onPOISelect }: HereModeProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedPOI, setSelectedPOI] = useState<POI | null>(null)
  const [radius, setRadius] = useState(500) // meters

  const { location, loading: geoLoading, error: geoError, requestLocation } = useGeolocation()
  const { pois, loading: poisLoading, error: poisError } = useNearbyPOIs(
    location?.lat,
    location?.lon,
    radius,
    selectedCategory
  )

  // Fly to user location when found
  useEffect(() => {
    if (location && mapRef.current) {
      mapRef.current.flyTo({
        center: [location.lon, location.lat],
        zoom: 16,
        pitch: 45,
      })
    }
  }, [location])

  return (
    <div className="space-y-4">
      {/* Location Status */}
      {!location ? (
        <button
          onClick={requestLocation}
          disabled={geoLoading}
          className="w-full py-3 bg-accent-cyan/20 hover:bg-accent-cyan/30 rounded-xl flex items-center justify-center gap-2 text-accent-cyan"
        >
          {geoLoading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Navigation className="w-5 h-5" />
          )}
          {geoLoading ? 'Finding your location...' : 'Use my location'}
        </button>
      ) : (
        <>
          {/* Category Filter */}
          <CategoryFilter
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />

          {/* Radius Selector */}
          <div className="flex items-center gap-2 text-sm text-text-secondary">
            <span>Radius:</span>
            {[200, 500, 1000].map(r => (
              <button
                key={r}
                onClick={() => setRadius(r)}
                className={cn(
                  'px-2 py-1 rounded',
                  radius === r ? 'bg-accent-cyan/20 text-accent-cyan' : 'hover:bg-white/10'
                )}
              >
                {r}m
              </button>
            ))}
          </div>

          {/* POI List */}
          <NearbyList
            pois={pois}
            loading={poisLoading}
            onSelect={(poi) => {
              setSelectedPOI(poi)
              onPOISelect(poi)
            }}
          />
        </>
      )}

      {/* POI Detail Card */}
      {selectedPOI && (
        <POICard
          poi={selectedPOI}
          onClose={() => setSelectedPOI(null)}
        />
      )}
    </div>
  )
}
```

### 1.6 Overpass API Hook

```typescript
// src/pages/istanbul/components/geography/hooks/useNearbyPOIs.ts

import { useState, useEffect } from 'react'

interface POI {
  id: number
  name: string
  type: string
  category: string
  lat: number
  lon: number
  tags: Record<string, string>
  distance?: number
}

const OVERPASS_URL = 'https://overpass-api.de/api/interpreter'

export function useNearbyPOIs(lat?: number, lon?: number, radius = 500, category = 'all') {
  const [pois, setPois] = useState<POI[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!lat || !lon) return

    const fetchPOIs = async () => {
      setLoading(true)
      setError(null)

      // Build Overpass query based on category
      const categoryQueries: Record<string, string> = {
        all: `
          node["tourism"~"attraction|museum|viewpoint"](around:${radius},${lat},${lon});
          node["amenity"~"restaurant|cafe|bar"](around:${radius},${lat},${lon});
          node["historic"](around:${radius},${lat},${lon});
        `,
        food: `node["amenity"~"restaurant|cafe|bar"](around:${radius},${lat},${lon});`,
        sights: `node["tourism"~"attraction|museum|viewpoint"](around:${radius},${lat},${lon});`,
        historic: `node["historic"](around:${radius},${lat},${lon});`,
      }

      const query = `
        [out:json][timeout:25];
        (
          ${categoryQueries[category] || categoryQueries.all}
        );
        out body;
      `

      try {
        const response = await fetch(OVERPASS_URL, {
          method: 'POST',
          body: 'data=' + encodeURIComponent(query),
        })

        if (!response.ok) throw new Error('Failed to fetch POIs')

        const data = await response.json()

        // Transform and sort by distance
        const transformed: POI[] = data.elements
          .filter((el: any) => el.tags?.name) // Only named places
          .map((el: any) => ({
            id: el.id,
            name: el.tags.name,
            type: el.tags.tourism || el.tags.amenity || el.tags.historic || 'place',
            category: el.tags.tourism ? 'sights' : el.tags.amenity ? 'food' : 'historic',
            lat: el.lat,
            lon: el.lon,
            tags: el.tags,
            distance: getDistance(lat, lon, el.lat, el.lon),
          }))
          .sort((a: POI, b: POI) => (a.distance || 0) - (b.distance || 0))

        setPois(transformed)
      } catch (e: any) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }

    fetchPOIs()
  }, [lat, lon, radius, category])

  return { pois, loading, error }
}

// Haversine distance in meters
function getDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371000
  const φ1 = (lat1 * Math.PI) / 180
  const φ2 = (lat2 * Math.PI) / 180
  const Δφ = ((lat2 - lat1) * Math.PI) / 180
  const Δλ = ((lon2 - lon1) * Math.PI) / 180
  const a = Math.sin(Δφ / 2) ** 2 + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) ** 2
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
}
```

### 1.7 Wikipedia Hook

```typescript
// src/pages/istanbul/components/geography/hooks/useWikipedia.ts

import { useState, useEffect } from 'react'

interface WikiData {
  title: string
  description: string
  extract: string
  thumbnail?: string
  url: string
}

export function useWikipedia(title: string | null) {
  const [data, setData] = useState<WikiData | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!title) {
      setData(null)
      return
    }

    const fetchWiki = async () => {
      setLoading(true)
      try {
        // Clean up title for Wikipedia search
        const searchTitle = title
          .replace(/\s+/g, '_')
          .replace(/[()]/g, '')

        const response = await fetch(
          `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(searchTitle)}`
        )

        if (response.ok) {
          const json = await response.json()
          setData({
            title: json.title,
            description: json.description || '',
            extract: json.extract || '',
            thumbnail: json.thumbnail?.source,
            url: json.content_urls?.desktop?.page || '',
          })
        } else {
          setData(null)
        }
      } catch {
        setData(null)
      } finally {
        setLoading(false)
      }
    }

    fetchWiki()
  }, [title])

  return { data, loading }
}
```

### 1.8 UI Components

**NearbyList.tsx** - Scrollable list of POIs with icons and distances
**POICard.tsx** - Expanded card with Wikipedia data, photos, directions button
**CategoryFilter.tsx** - Horizontal scroll of category pills

---

## Part 2: Tour Mode (Scrollytelling)

### 2.1 Concept

Guided narrative tours that:
- Auto-play through chapters with camera animations
- Show story text overlays
- Highlight landmarks on the map
- Can be paused/resumed

### 2.2 Tours to Implement

1. **The Fall of Constantinople (1453)**
   - The Theodosian Walls
   - The Golden Gate
   - Hagia Sophia's conversion
   - The first call to prayer

2. **The Seven Hills**
   - Hill 1: Topkapi Palace
   - Hill 2: Nuruosmaniye Mosque
   - ... etc

3. **Two Continents**
   - Bosphorus strait
   - Galata Bridge
   - Asian shore

### 2.3 Components

```
src/pages/istanbul/components/geography/
├── TourMode.tsx        # Tour selection and player container
├── TourPlayer.tsx      # Playback controls, chapter progress
├── TourCard.tsx        # Tour selection cards
├── ChapterOverlay.tsx  # Story text overlay during tour
└── data/
    └── tours.ts        # Tour definitions with chapters
```

### 2.4 Tour Data Structure

```typescript
// src/pages/istanbul/data/tours.ts

export interface TourChapter {
  id: string
  title: string
  content: string
  location: {
    center: [number, number]
    zoom: number
    pitch: number
    bearing: number
  }
  duration: number // seconds to show this chapter
  highlights?: string[] // region IDs to highlight
}

export interface Tour {
  id: string
  title: string
  description: string
  duration: string
  coverImage?: string
  chapters: TourChapter[]
}

export const tours: Tour[] = [
  {
    id: 'conquest-1453',
    title: 'The Fall of Constantinople',
    description: 'Experience the 1453 Ottoman conquest that changed history',
    duration: '~4 min',
    chapters: [
      {
        id: 'walls',
        title: 'The Theodosian Walls',
        content: 'For over 1,000 years, these massive walls protected Constantinople from countless sieges. Built by Emperor Theodosius II in 413 AD, they were considered impenetrable.',
        location: {
          center: [28.9240, 41.0150],
          zoom: 14,
          pitch: 60,
          bearing: -20,
        },
        duration: 12,
      },
      {
        id: 'siege',
        title: 'The 53-Day Siege',
        content: 'In April 1453, Sultan Mehmed II arrived with an army of 80,000 men and the largest cannons ever built. The city of 50,000 defenders prepared for the inevitable.',
        location: {
          center: [28.9500, 41.0200],
          zoom: 12,
          pitch: 45,
          bearing: 0,
        },
        duration: 10,
      },
      // ... more chapters
    ]
  },
  // ... more tours
]
```

---

## Part 3: Historical Layers

### 3.1 Theodosian Walls GeoJSON

```typescript
// src/pages/istanbul/data/walls.ts

export const theodosianWalls = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: { name: 'Land Walls', length: '6.5km' },
      geometry: {
        type: 'LineString',
        coordinates: [
          [28.9192, 41.0344], // Golden Horn
          [28.9230, 41.0280],
          [28.9260, 41.0200],
          [28.9280, 41.0120],
          [28.9310, 41.0040], // Marble Tower (Marmara)
        ]
      }
    },
    {
      type: 'Feature',
      properties: { name: 'Golden Horn Walls' },
      geometry: {
        type: 'LineString',
        coordinates: [
          [28.9192, 41.0344],
          [28.9500, 41.0280],
          [28.9780, 41.0200], // Galata
        ]
      }
    }
  ]
}
```

### 3.2 Historical Landmarks

```typescript
export const historicalLandmarks = [
  {
    id: 'golden-gate',
    name: 'Golden Gate',
    coords: [28.9220, 41.0080],
    era: 'byzantine',
    built: 388,
    description: 'Triumphal arch through which emperors entered the city'
  },
  // ... more landmarks
]
```

---

## Part 4: Integration

### 4.1 Update GeographySection

Add "Here" as a new mode alongside Explore and Time:

```tsx
type Mode = 'explore' | 'time' | 'here' | 'tour'

// In mode selector
const modes = [
  { id: 'explore', label: 'Explore', icon: <Map /> },
  { id: 'time', label: 'Time', icon: <Clock /> },
  { id: 'here', label: 'Here', icon: <Navigation /> },
  { id: 'tour', label: 'Tours', icon: <Play /> },
]
```

### 4.2 Update MapView

Add support for:
- User location marker (pulsing blue dot)
- POI markers from Here mode
- Tour highlights
- Walls layer toggle

---

## Part 5: Testing Plan

### 5.1 Playwright Tests

```typescript
// Test Here mode
await page.click('button:has-text("Here")')
await page.click('button:has-text("Use my location")')
// Mock geolocation
await page.evaluate(() => {
  navigator.geolocation.getCurrentPosition = (cb) => {
    cb({ coords: { latitude: 41.0256, longitude: 28.9744 } })
  }
})
// Verify POIs load
await page.waitForSelector('[data-testid="poi-list"]')
await page.screenshot({ path: '/tmp/here-mode.png' })

// Test Tour mode
await page.click('button:has-text("Tours")')
await page.click('text=The Fall of Constantinople')
await page.click('button:has-text("Play")')
await page.waitForTimeout(5000)
await page.screenshot({ path: '/tmp/tour-playing.png' })
```

---

## Implementation Order

1. **Phase 1: Here Mode** (Core)
   - useGeolocation hook
   - useNearbyPOIs hook (Overpass)
   - useWikipedia hook
   - NearbyList component
   - POICard component
   - Integration with MapView

2. **Phase 2: Tour Mode**
   - Tour data structure
   - TourPlayer component
   - Camera animation system
   - ChapterOverlay component

3. **Phase 3: Historical Layers**
   - Walls GeoJSON data
   - Walls layer toggle
   - Historical landmark markers

4. **Phase 4: Polish**
   - Animations
   - Loading states
   - Error handling
   - Responsive design

---

## Files to Create

```
src/pages/istanbul/
├── components/geography/
│   ├── HereMode.tsx
│   ├── NearbyList.tsx
│   ├── POICard.tsx
│   ├── CategoryFilter.tsx
│   ├── TourMode.tsx
│   ├── TourPlayer.tsx
│   ├── TourCard.tsx
│   ├── ChapterOverlay.tsx
│   └── hooks/
│       ├── useGeolocation.ts
│       ├── useNearbyPOIs.ts
│       └── useWikipedia.ts
└── data/
    ├── tours.ts
    └── walls.ts
```
