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
  emoji: string
  chapters: TourChapter[]
}

export const tours: Tour[] = [
  {
    id: 'conquest-1453',
    title: 'The Fall of Constantinople',
    description: 'Experience the 1453 Ottoman conquest that changed history',
    duration: '~3 min',
    emoji: '⚔️',
    chapters: [
      {
        id: 'walls',
        title: 'The Theodosian Walls',
        content: 'For over 1,000 years, these massive walls protected Constantinople from countless sieges. Built by Emperor Theodosius II in 413 AD, they were considered impenetrable—until 1453.',
        location: {
          center: [28.9240, 41.0150],
          zoom: 14,
          pitch: 60,
          bearing: -20,
        },
        duration: 10,
      },
      {
        id: 'siege',
        title: 'The 53-Day Siege',
        content: 'In April 1453, Sultan Mehmed II arrived with 80,000 soldiers and the largest cannons ever built. The defenders numbered only 7,000. For 53 days, they held the walls against relentless bombardment.',
        location: {
          center: [28.9400, 41.0200],
          zoom: 13,
          pitch: 45,
          bearing: 0,
        },
        duration: 10,
      },
      {
        id: 'breach',
        title: 'The Final Assault',
        content: 'On May 29, 1453, Ottoman forces breached the walls near the Gate of St. Romanus. Emperor Constantine XI died fighting, and Constantinople fell after 1,123 years as the heart of the Byzantine Empire.',
        location: {
          center: [28.9220, 41.0120],
          zoom: 15,
          pitch: 60,
          bearing: 45,
        },
        duration: 12,
      },
      {
        id: 'hagia-sophia',
        title: 'A New Era Begins',
        content: 'Sultan Mehmed II rode to Hagia Sophia and declared it a mosque. The church that had stood for 916 years began its transformation. Istanbul was born from the ashes of Constantinople.',
        location: {
          center: [28.9797, 41.0086],
          zoom: 16,
          pitch: 60,
          bearing: -30,
        },
        duration: 12,
        highlights: ['sultanahmet'],
      },
    ],
  },
  {
    id: 'seven-hills',
    title: 'The Seven Hills',
    description: 'Discover why Istanbul mirrors Rome with its seven hills',
    duration: '~4 min',
    emoji: '🏔️',
    chapters: [
      {
        id: 'intro',
        title: 'Constantinople, the New Rome',
        content: 'Emperor Constantine deliberately chose a site with seven hills, mirroring Rome itself. Each hill would be crowned with monuments, creating a city of grandeur to rival the ancient capital.',
        location: {
          center: [28.9700, 41.0150],
          zoom: 12,
          pitch: 30,
          bearing: 0,
        },
        duration: 10,
      },
      {
        id: 'hill1',
        title: 'First Hill: Topkapi Palace',
        content: 'The first and most prominent hill hosts Topkapi Palace, former residence of Ottoman sultans for 400 years. From here, rulers surveyed their vast empire across three continents.',
        location: {
          center: [28.9834, 41.0115],
          zoom: 15,
          pitch: 60,
          bearing: -45,
        },
        duration: 10,
        highlights: ['sultanahmet'],
      },
      {
        id: 'hill2',
        title: 'Second Hill: Grand Bazaar',
        content: 'The second hill centers on the Grand Bazaar, one of the world\'s oldest covered markets. Its 4,000+ shops have operated continuously since 1461.',
        location: {
          center: [28.9680, 41.0106],
          zoom: 15,
          pitch: 50,
          bearing: 30,
        },
        duration: 10,
        highlights: ['fatih'],
      },
      {
        id: 'hill3',
        title: 'Third Hill: University',
        content: 'The third hill is home to Istanbul University, built on the grounds of the old Ottoman War Ministry. The Beyazit Tower, once a fire watch station, still stands sentinel.',
        location: {
          center: [28.9640, 41.0120],
          zoom: 15,
          pitch: 45,
          bearing: 0,
        },
        duration: 8,
      },
      {
        id: 'fatih',
        title: 'Fourth Hill: Fatih Mosque',
        content: 'Sultan Mehmed II built his mosque on the fourth hill, atop the ruins of the Church of the Holy Apostles. This hill became the spiritual heart of Ottoman Istanbul.',
        location: {
          center: [28.9500, 41.0197],
          zoom: 15,
          pitch: 55,
          bearing: 20,
        },
        duration: 10,
        highlights: ['fatih'],
      },
    ],
  },
  {
    id: 'two-continents',
    title: 'Two Continents',
    description: 'Journey across the Bosphorus from Europe to Asia',
    duration: '~2 min',
    emoji: '🌍',
    chapters: [
      {
        id: 'bosphorus',
        title: 'The Bosphorus Strait',
        content: 'Istanbul is the only city in the world that spans two continents. The Bosphorus, just 700 meters wide at its narrowest, has been a strategic waterway for millennia.',
        location: {
          center: [29.0100, 41.0400],
          zoom: 12,
          pitch: 45,
          bearing: 0,
        },
        duration: 10,
      },
      {
        id: 'galata',
        title: 'The European Shore',
        content: 'Galata Tower has watched over the European side since 1348. Once a Genoese watchtower, it now offers panoramic views of a city that has been the capital of four empires.',
        location: {
          center: [28.9744, 41.0256],
          zoom: 16,
          pitch: 60,
          bearing: 45,
        },
        duration: 10,
        highlights: ['beyoglu'],
      },
      {
        id: 'ferry',
        title: 'Crossing the Strait',
        content: 'Every day, millions take the 20-minute ferry ride between continents. It\'s a commute unlike any other—breakfast in Europe, lunch in Asia.',
        location: {
          center: [29.0000, 41.0200],
          zoom: 13,
          pitch: 30,
          bearing: 90,
        },
        duration: 8,
      },
      {
        id: 'kadikoy',
        title: 'The Asian Shore',
        content: 'Kadıköy, ancient Chalcedon, was founded 17 years before Constantinople. Today it\'s a vibrant neighborhood of markets, cafes, and locals who prefer the "quiet side" of Istanbul.',
        location: {
          center: [29.0250, 40.9900],
          zoom: 14,
          pitch: 45,
          bearing: -30,
        },
        duration: 10,
        highlights: ['kadikoy'],
      },
    ],
  },
]
