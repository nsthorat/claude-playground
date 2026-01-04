import { useState, useEffect, useCallback } from 'react'

export interface POI {
  id: number
  name: string
  type: string
  category: 'food' | 'sights' | 'historic' | 'shopping' | 'transport'
  lat: number
  lon: number
  tags: Record<string, string>
  distance: number
}

const OVERPASS_URL = 'https://overpass-api.de/api/interpreter'

// Haversine distance in meters
function getDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371000
  const φ1 = (lat1 * Math.PI) / 180
  const φ2 = (lat2 * Math.PI) / 180
  const Δφ = ((lat2 - lat1) * Math.PI) / 180
  const Δλ = ((lon2 - lon1) * Math.PI) / 180
  const a = Math.sin(Δφ / 2) ** 2 + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) ** 2
  return Math.round(R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)))
}

function categorize(tags: Record<string, string>): POI['category'] {
  if (tags.tourism) return 'sights'
  if (tags.historic) return 'historic'
  if (tags.amenity && ['restaurant', 'cafe', 'bar', 'fast_food'].includes(tags.amenity)) return 'food'
  if (tags.shop) return 'shopping'
  if (tags.railway || tags.amenity === 'ferry_terminal') return 'transport'
  return 'sights'
}

function getType(tags: Record<string, string>): string {
  return tags.tourism || tags.historic || tags.amenity || tags.shop || 'place'
}

interface UseNearbyPOIsReturn {
  pois: POI[]
  loading: boolean
  error: string | null
  refetch: () => void
}

export function useNearbyPOIs(
  lat: number | undefined,
  lon: number | undefined,
  radius: number = 500,
  category: string = 'all'
): UseNearbyPOIsReturn {
  const [pois, setPois] = useState<POI[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchPOIs = useCallback(async () => {
    if (!lat || !lon) return

    setLoading(true)
    setError(null)

    // Build Overpass query based on category
    const categoryQueries: Record<string, string> = {
      all: `
        node["tourism"~"attraction|museum|viewpoint|artwork"](around:${radius},${lat},${lon});
        node["amenity"~"restaurant|cafe|bar"](around:${radius},${lat},${lon});
        node["historic"](around:${radius},${lat},${lon});
      `,
      food: `node["amenity"~"restaurant|cafe|bar|fast_food"](around:${radius},${lat},${lon});`,
      sights: `node["tourism"~"attraction|museum|viewpoint|artwork|gallery"](around:${radius},${lat},${lon});`,
      historic: `node["historic"](around:${radius},${lat},${lon});`,
      shopping: `node["shop"~"mall|department_store|gift|clothes|jewelry"](around:${radius},${lat},${lon});`,
      transport: `node["amenity"="ferry_terminal"](around:${radius},${lat},${lon});node["railway"="station"](around:${radius},${lat},${lon});`,
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
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: 'data=' + encodeURIComponent(query),
      })

      if (!response.ok) throw new Error('Failed to fetch nearby places')

      const data = await response.json()

      // Transform and sort by distance
      const transformed: POI[] = data.elements
        .filter((el: any) => el.tags?.name) // Only named places
        .map((el: any) => ({
          id: el.id,
          name: el.tags.name,
          type: getType(el.tags),
          category: categorize(el.tags),
          lat: el.lat,
          lon: el.lon,
          tags: el.tags,
          distance: getDistance(lat, lon, el.lat, el.lon),
        }))
        .sort((a: POI, b: POI) => a.distance - b.distance)
        .slice(0, 30) // Limit to 30 results

      setPois(transformed)
    } catch (e: any) {
      setError(e.message || 'Failed to load nearby places')
    } finally {
      setLoading(false)
    }
  }, [lat, lon, radius, category])

  useEffect(() => {
    fetchPOIs()
  }, [fetchPOIs])

  return { pois, loading, error, refetch: fetchPOIs }
}
