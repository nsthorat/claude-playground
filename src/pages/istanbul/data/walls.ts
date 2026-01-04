// Theodosian Walls GeoJSON data
// Built 413 AD by Emperor Theodosius II

export const theodosianWalls = {
  type: 'FeatureCollection' as const,
  features: [
    {
      type: 'Feature' as const,
      properties: {
        name: 'Land Walls',
        length: '6.5km',
        built: 413,
        description: 'Triple fortification system that protected Constantinople for over 1000 years',
      },
      geometry: {
        type: 'LineString' as const,
        coordinates: [
          [28.9392, 41.0414], // Ayvansaray (Golden Horn)
          [28.9380, 41.0380],
          [28.9350, 41.0320],
          [28.9300, 41.0250],
          [28.9260, 41.0180],
          [28.9240, 41.0120],
          [28.9225, 41.0060],
          [28.9220, 40.9980], // Yedikule (Marble Tower at Marmara Sea)
        ],
      },
    },
    {
      type: 'Feature' as const,
      properties: {
        name: 'Sea Walls (Golden Horn)',
        length: '5km',
        built: 439,
        description: 'Walls along the Golden Horn, later extended by subsequent emperors',
      },
      geometry: {
        type: 'LineString' as const,
        coordinates: [
          [28.9392, 41.0414], // Ayvansaray junction
          [28.9500, 41.0350],
          [28.9600, 41.0300],
          [28.9700, 41.0260],
          [28.9780, 41.0220],
          [28.9850, 41.0180], // Seraglio Point
        ],
      },
    },
    {
      type: 'Feature' as const,
      properties: {
        name: 'Sea Walls (Marmara)',
        length: '8km',
        built: 439,
        description: 'Walls along the Sea of Marmara, protecting the southern coast',
      },
      geometry: {
        type: 'LineString' as const,
        coordinates: [
          [28.9220, 40.9980], // Yedikule junction
          [28.9350, 40.9960],
          [28.9500, 40.9970],
          [28.9650, 40.9990],
          [28.9780, 41.0020],
          [28.9850, 41.0050], // Seraglio Point
        ],
      },
    },
  ],
}

// Historical landmarks with coordinates
export const historicalLandmarks = [
  {
    id: 'golden-gate',
    name: 'Golden Gate',
    coords: [28.9220, 41.0040] as [number, number],
    era: 'byzantine',
    built: 388,
    emoji: '🚪',
    description: 'Triumphal arch through which emperors entered the city after military victories',
  },
  {
    id: 'yedikule',
    name: 'Yedikule Fortress',
    coords: [28.9218, 40.9985] as [number, number],
    era: 'ottoman',
    built: 1458,
    emoji: '🏰',
    description: 'Seven Towers Fortress, built by Mehmed II incorporating the Golden Gate',
  },
  {
    id: 'edirne-gate',
    name: 'Edirne Gate',
    coords: [28.9275, 41.0175] as [number, number],
    era: 'byzantine',
    built: 413,
    emoji: '🚪',
    description: 'Main gate through the Theodosian walls, where the final breach occurred in 1453',
  },
  {
    id: 'topkapi-gate',
    name: 'Topkapı Gate',
    coords: [28.9350, 41.0320] as [number, number],
    era: 'byzantine',
    built: 413,
    emoji: '🚪',
    description: 'Gate in the land walls, not to be confused with Topkapı Palace',
  },
  {
    id: 'chora-church',
    name: 'Chora Church (Kariye)',
    coords: [28.9395, 41.0315] as [number, number],
    era: 'byzantine',
    built: 534,
    emoji: '⛪',
    description: 'Byzantine church famous for its stunning mosaics and frescoes',
  },
  {
    id: 'blachernae-palace',
    name: 'Blachernae Palace',
    coords: [28.9405, 41.0395] as [number, number],
    era: 'byzantine',
    built: 500,
    emoji: '🏛️',
    description: 'Later Byzantine imperial residence near the Golden Horn',
  },
]

// Combined GeoJSON for all walls
export function getWallsGeoJSON() {
  return theodosianWalls
}

// Get landmarks as GeoJSON points
export function getLandmarksGeoJSON() {
  return {
    type: 'FeatureCollection' as const,
    features: historicalLandmarks.map((lm) => ({
      type: 'Feature' as const,
      properties: {
        id: lm.id,
        name: lm.name,
        era: lm.era,
        built: lm.built,
        emoji: lm.emoji,
        description: lm.description,
      },
      geometry: {
        type: 'Point' as const,
        coordinates: lm.coords,
      },
    })),
  }
}
