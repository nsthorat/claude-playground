// Region data for Istanbul neighborhoods
// Coordinates are [longitude, latitude] (GeoJSON format)

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
  boundary: [number, number][] // GeoJSON polygon coordinates [lng, lat]
  center: [number, number] // [lng, lat]
  // Activity levels by hour (0-23)
  activityByHour: Record<number, 'low' | 'moderate' | 'high' | 'packed'>
  bestTimeOfDay: string
  topSpots: { name: string; type: string; coords: [number, number] }[]
  color: string
}

// Activity patterns
const touristPattern: Record<number, 'low' | 'moderate' | 'high' | 'packed'> = {
  0: 'low', 1: 'low', 2: 'low', 3: 'low', 4: 'low', 5: 'low',
  6: 'low', 7: 'low', 8: 'moderate', 9: 'high', 10: 'packed', 11: 'packed',
  12: 'high', 13: 'high', 14: 'high', 15: 'high', 16: 'moderate', 17: 'moderate',
  18: 'low', 19: 'low', 20: 'low', 21: 'low', 22: 'low', 23: 'low',
}

const nightlifePattern: Record<number, 'low' | 'moderate' | 'high' | 'packed'> = {
  0: 'high', 1: 'moderate', 2: 'low', 3: 'low', 4: 'low', 5: 'low',
  6: 'low', 7: 'low', 8: 'low', 9: 'low', 10: 'moderate', 11: 'moderate',
  12: 'moderate', 13: 'moderate', 14: 'moderate', 15: 'moderate', 16: 'moderate', 17: 'high',
  18: 'high', 19: 'high', 20: 'packed', 21: 'packed', 22: 'packed', 23: 'packed',
}

const localPattern: Record<number, 'low' | 'moderate' | 'high' | 'packed'> = {
  0: 'low', 1: 'low', 2: 'low', 3: 'low', 4: 'low', 5: 'low',
  6: 'low', 7: 'moderate', 8: 'moderate', 9: 'high', 10: 'high', 11: 'high',
  12: 'packed', 13: 'packed', 14: 'high', 15: 'high', 16: 'moderate', 17: 'moderate',
  18: 'high', 19: 'high', 20: 'moderate', 21: 'moderate', 22: 'low', 23: 'low',
}

const cafePattern: Record<number, 'low' | 'moderate' | 'high' | 'packed'> = {
  0: 'low', 1: 'low', 2: 'low', 3: 'low', 4: 'low', 5: 'low',
  6: 'low', 7: 'moderate', 8: 'high', 9: 'high', 10: 'high', 11: 'high',
  12: 'high', 13: 'high', 14: 'high', 15: 'high', 16: 'high', 17: 'high',
  18: 'moderate', 19: 'moderate', 20: 'moderate', 21: 'low', 22: 'low', 23: 'low',
}

export const regions: Region[] = [
  {
    id: 'sultanahmet',
    name: 'Sultanahmet',
    nameTurkish: 'Sultanahmet',
    side: 'europe',
    tagline: 'The Historic Peninsula',
    description: 'The ancient heart of Constantinople and Istanbul. Home to Hagia Sophia, Blue Mosque, Topkapi Palace, and the Basilica Cistern.',
    historicalNote: 'Capital of Byzantine & Ottoman Empires for 1,600 years',
    vibes: ['historic', 'touristy'],
    priceLevel: 3,
    walkingTimeFromGalata: '20 min via Galata Bridge',
    boundary: [
      [28.9650, 41.0120], [28.9750, 41.0130], [28.9850, 41.0110],
      [28.9870, 41.0050], [28.9830, 41.0000], [28.9700, 40.9980],
      [28.9620, 41.0020], [28.9610, 41.0080], [28.9650, 41.0120],
    ],
    center: [28.9769, 41.0054],
    activityByHour: touristPattern,
    bestTimeOfDay: 'Early morning (8-9am) before crowds',
    topSpots: [
      { name: 'Hagia Sophia', type: 'landmark', coords: [28.9800, 41.0086] },
      { name: 'Blue Mosque', type: 'landmark', coords: [28.9767, 41.0054] },
      { name: 'Topkapi Palace', type: 'landmark', coords: [28.9833, 41.0115] },
      { name: 'Basilica Cistern', type: 'landmark', coords: [28.9778, 41.0084] },
    ],
    color: '#f59e0b', // amber
  },
  {
    id: 'galata',
    name: 'Galata & Karaköy',
    nameTurkish: 'Galata ve Karaköy',
    side: 'europe',
    tagline: 'Your Home Base',
    description: 'Medieval tower, steep cobbled streets, indie boutiques, rooftop bars, and the best coffee scene in Istanbul.',
    historicalNote: 'Former Genoese trading colony with 14th century tower',
    vibes: ['trendy', 'nightlife'],
    priceLevel: 2,
    walkingTimeFromGalata: 'You are here!',
    boundary: [
      [28.9680, 41.0300], [28.9780, 41.0310], [28.9820, 41.0260],
      [28.9800, 41.0200], [28.9720, 41.0190], [28.9660, 41.0230],
      [28.9680, 41.0300],
    ],
    center: [28.9744, 41.0256],
    activityByHour: cafePattern,
    bestTimeOfDay: 'Morning for coffee, evening for rooftops',
    topSpots: [
      { name: 'Galata Tower', type: 'landmark', coords: [28.9741, 41.0256] },
      { name: 'Karaköy Pier', type: 'transport', coords: [28.9770, 41.0220] },
      { name: 'Serdar-ı Ekrem St', type: 'shopping', coords: [28.9735, 41.0268] },
    ],
    color: '#06b6d4', // cyan
  },
  {
    id: 'beyoglu',
    name: 'Beyoğlu & Istiklal',
    nameTurkish: 'Beyoğlu',
    side: 'europe',
    tagline: 'Shopping & Nightlife',
    description: 'The famous pedestrian avenue with the historic red tram, museums, shops, and vibrant nightlife.',
    historicalNote: '19th century European quarter, called "Pera" by foreigners',
    vibes: ['nightlife', 'trendy', 'touristy'],
    priceLevel: 2,
    walkingTimeFromGalata: '10 min walk uphill',
    boundary: [
      [28.9700, 41.0350], [28.9820, 41.0380], [28.9880, 41.0340],
      [28.9850, 41.0290], [28.9780, 41.0300], [28.9700, 41.0310],
      [28.9700, 41.0350],
    ],
    center: [28.9770, 41.0335],
    activityByHour: nightlifePattern,
    bestTimeOfDay: 'Evening and night for atmosphere',
    topSpots: [
      { name: 'Istiklal Street', type: 'street', coords: [28.9770, 41.0340] },
      { name: 'Taksim Square', type: 'landmark', coords: [28.9850, 41.0370] },
      { name: 'Çiçek Pasajı', type: 'food', coords: [28.9765, 41.0340] },
    ],
    color: '#8b5cf6', // violet
  },
  {
    id: 'balat',
    name: 'Balat & Fener',
    nameTurkish: 'Balat ve Fener',
    side: 'europe',
    tagline: 'Colorful History',
    description: 'Instagram-famous colorful houses, historic synagogues, Greek Orthodox heritage, and charming cafes.',
    historicalNote: 'Historic Jewish quarter with Ottoman wooden houses',
    vibes: ['historic', 'trendy', 'local'],
    priceLevel: 1,
    walkingTimeFromGalata: '15 min by taxi or bus',
    boundary: [
      [28.9450, 41.0300], [28.9550, 41.0330], [28.9600, 41.0290],
      [28.9580, 41.0240], [28.9500, 41.0220], [28.9430, 41.0260],
      [28.9450, 41.0300],
    ],
    center: [28.9490, 41.0280],
    activityByHour: cafePattern,
    bestTimeOfDay: 'Morning for best light on colorful houses',
    topSpots: [
      { name: 'Colorful Houses', type: 'photo', coords: [28.9485, 41.0285] },
      { name: 'Ecumenical Patriarchate', type: 'landmark', coords: [28.9510, 41.0295] },
      { name: 'Café Naftalin', type: 'cafe', coords: [28.9480, 41.0275] },
    ],
    color: '#ec4899', // pink
  },
  {
    id: 'eminonu',
    name: 'Eminönü',
    nameTurkish: 'Eminönü',
    side: 'europe',
    tagline: 'Bazaars & Ferries',
    description: 'The bustling heart of old Istanbul with the Spice Bazaar, Grand Bazaar nearby, and ferries to Asia.',
    historicalNote: 'Historic port district since Byzantine era',
    vibes: ['historic', 'touristy', 'local'],
    priceLevel: 2,
    walkingTimeFromGalata: '10 min across Galata Bridge',
    boundary: [
      [28.9620, 41.0200], [28.9720, 41.0210], [28.9750, 41.0160],
      [28.9700, 41.0100], [28.9620, 41.0110], [28.9580, 41.0150],
      [28.9620, 41.0200],
    ],
    center: [28.9680, 41.0165],
    activityByHour: localPattern,
    bestTimeOfDay: 'Morning for markets, evening for fish sandwiches',
    topSpots: [
      { name: 'Spice Bazaar', type: 'market', coords: [28.9705, 41.0165] },
      { name: 'Grand Bazaar', type: 'market', coords: [28.9680, 41.0108] },
      { name: 'Galata Bridge', type: 'landmark', coords: [28.9730, 41.0200] },
    ],
    color: '#f97316', // orange
  },
  {
    id: 'kadikoy',
    name: 'Kadıköy',
    nameTurkish: 'Kadıköy',
    side: 'asia',
    tagline: 'The Local\'s Istanbul',
    description: 'Take the ferry across the Bosphorus to experience local life, amazing food markets, and the trendy Moda neighborhood.',
    historicalNote: 'Ancient Chalcedon, founded before Constantinople',
    vibes: ['local', 'trendy'],
    priceLevel: 2,
    walkingTimeFromGalata: '20 min ferry from Karaköy',
    transitFromGalata: 'Ferry from Karaköy pier',
    boundary: [
      [29.0200, 40.9950], [29.0350, 40.9980], [29.0400, 40.9900],
      [29.0350, 40.9820], [29.0250, 40.9800], [29.0150, 40.9850],
      [29.0200, 40.9950],
    ],
    center: [29.0260, 40.9900],
    activityByHour: localPattern,
    bestTimeOfDay: 'Lunch for food market, afternoon for Moda walk',
    topSpots: [
      { name: 'Kadıköy Market', type: 'market', coords: [29.0250, 40.9905] },
      { name: 'Moda Waterfront', type: 'walk', coords: [29.0280, 40.9830] },
      { name: 'Çiya Sofrası', type: 'restaurant', coords: [29.0255, 40.9898] },
    ],
    color: '#22c55e', // green
  },
  {
    id: 'uskudar',
    name: 'Üsküdar',
    nameTurkish: 'Üsküdar',
    side: 'asia',
    tagline: 'Traditional Asian Side',
    description: 'More conservative neighborhood with beautiful mosques, Maiden\'s Tower views, and authentic local life.',
    historicalNote: 'Ancient Scutari, important Ottoman religious center',
    vibes: ['historic', 'local'],
    priceLevel: 1,
    walkingTimeFromGalata: '15 min ferry from Eminönü',
    transitFromGalata: 'Ferry from Eminönü',
    boundary: [
      [29.0100, 41.0280], [29.0250, 41.0320], [29.0300, 41.0250],
      [29.0250, 41.0180], [29.0150, 41.0150], [29.0050, 41.0200],
      [29.0100, 41.0280],
    ],
    center: [29.0150, 41.0230],
    activityByHour: localPattern,
    bestTimeOfDay: 'Sunset for Maiden\'s Tower views',
    topSpots: [
      { name: 'Maiden\'s Tower', type: 'landmark', coords: [29.0040, 41.0210] },
      { name: 'Çamlıca Hill', type: 'viewpoint', coords: [29.0680, 41.0280] },
      { name: 'Şemsi Paşa Mosque', type: 'landmark', coords: [29.0140, 41.0235] },
    ],
    color: '#14b8a6', // teal
  },
  {
    id: 'besiktas',
    name: 'Beşiktaş',
    nameTurkish: 'Beşiktaş',
    side: 'europe',
    tagline: 'Local European Side',
    description: 'Vibrant local neighborhood with great fish market, football culture, and ferry connections along the Bosphorus.',
    historicalNote: 'Home to Dolmabahçe Palace, final Ottoman palace',
    vibes: ['local', 'trendy'],
    priceLevel: 2,
    walkingTimeFromGalata: '20 min by tram or bus',
    boundary: [
      [29.0000, 41.0420], [29.0100, 41.0480], [29.0180, 41.0450],
      [29.0150, 41.0380], [29.0080, 41.0350], [28.9980, 41.0380],
      [29.0000, 41.0420],
    ],
    center: [29.0050, 41.0420],
    activityByHour: localPattern,
    bestTimeOfDay: 'Morning for fish market, afternoon for Bosphorus walk',
    topSpots: [
      { name: 'Dolmabahçe Palace', type: 'landmark', coords: [29.0003, 41.0392] },
      { name: 'Beşiktaş Fish Market', type: 'market', coords: [29.0060, 41.0430] },
      { name: 'Ortaköy Square', type: 'landmark', coords: [29.0270, 41.0480] },
    ],
    color: '#3b82f6', // blue
  },
]

// Ferry routes as GeoJSON LineStrings
export const ferryRoutes = {
  type: 'FeatureCollection' as const,
  features: [
    {
      type: 'Feature' as const,
      properties: { name: 'Karaköy - Kadıköy', duration: '20 min' },
      geometry: {
        type: 'LineString' as const,
        coordinates: [
          [28.9770, 41.0220], // Karaköy
          [29.0000, 41.0050], // mid-Bosphorus
          [29.0250, 40.9920], // Kadıköy
        ],
      },
    },
    {
      type: 'Feature' as const,
      properties: { name: 'Eminönü - Üsküdar', duration: '15 min' },
      geometry: {
        type: 'LineString' as const,
        coordinates: [
          [28.9720, 41.0175], // Eminönü
          [29.0000, 41.0200], // mid-Bosphorus
          [29.0140, 41.0230], // Üsküdar
        ],
      },
    },
    {
      type: 'Feature' as const,
      properties: { name: 'Kabataş - Kadıköy', duration: '20 min' },
      geometry: {
        type: 'LineString' as const,
        coordinates: [
          [28.9870, 41.0320], // Kabataş
          [29.0100, 41.0100], // mid-Bosphorus
          [29.0250, 40.9920], // Kadıköy
        ],
      },
    },
  ],
}

// Bosphorus line for continental divide
export const bosphorusLine = {
  type: 'Feature' as const,
  properties: { name: 'Bosphorus Strait' },
  geometry: {
    type: 'LineString' as const,
    coordinates: [
      [29.0600, 41.2200], // Black Sea entrance
      [29.0550, 41.1800],
      [29.0400, 41.1400],
      [29.0350, 41.1000],
      [29.0250, 41.0600],
      [29.0150, 41.0300],
      [29.0050, 41.0100],
      [29.0000, 40.9800],
      [28.9950, 40.9500], // Marmara Sea
    ],
  },
}

// Golden Horn inlet
export const goldenHorn = {
  type: 'Feature' as const,
  properties: { name: 'Golden Horn' },
  geometry: {
    type: 'LineString' as const,
    coordinates: [
      [28.9730, 41.0200], // Galata Bridge
      [28.9600, 41.0250],
      [28.9450, 41.0280],
      [28.9300, 41.0350],
      [28.9100, 41.0450],
    ],
  },
}

// Convert regions to GeoJSON for map rendering
export function regionsToGeoJSON(timeOfDay?: number) {
  return {
    type: 'FeatureCollection' as const,
    features: regions.map(region => ({
      type: 'Feature' as const,
      id: region.id,
      properties: {
        id: region.id,
        name: region.name,
        color: region.color,
        side: region.side,
        activity: timeOfDay !== undefined ? region.activityByHour[timeOfDay] : 'moderate',
      },
      geometry: {
        type: 'Polygon' as const,
        coordinates: [region.boundary],
      },
    })),
  }
}
