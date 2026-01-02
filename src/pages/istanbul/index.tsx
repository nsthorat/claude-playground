import { useState, useEffect } from 'react'
import {
  ArrowLeft, MapPin, Calendar, Utensils, Compass, Info,
  Clock, DollarSign, Star, ExternalLink, Navigation,
  Coffee, Wine, Camera, Waves, Building2, Train,
  Sun, Sunset, ChevronDown, ChevronUp, Check,
  Smartphone, CreditCard, Phone, Heart, Sparkles,
  Landmark, BookOpen
} from 'lucide-react'
import { cn } from '@/lib/utils'

const BASE_PATH = '/claude-playground'

// Types
interface Place {
  name: string
  description: string
  category: string
  price?: string
  coords: { lat: number; lng: number }
  googleMapsUrl?: string
  tip?: string
  mustTry?: string
  hours?: string
}

interface DayPlan {
  day: number
  date: string
  title: string
  theme: string
  activities: Activity[]
}

interface Activity {
  time: string
  title: string
  description: string
  tips?: string[]
  icon?: React.ReactNode
}

// ============================================
// DATA
// ============================================

const GALATA_CENTER = { lat: 41.0256, lng: 28.9744 }

const neighborhoods = [
  {
    id: 'galata',
    name: 'Galata & Karaköy',
    tagline: 'Your home base',
    description: 'Medieval tower, steep cobbled streets, indie boutiques, rooftop bars, and the best coffee scene in Istanbul.',
    highlights: ['Galata Tower', 'Camondo Stairs', 'Street Art', 'Rooftop Bars', 'Coffee Culture'],
    walkingTime: '0 min from hotel',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    id: 'sultanahmet',
    name: 'Sultanahmet',
    tagline: 'Historic peninsula',
    description: 'The ancient heart of Constantinople. Home to Hagia Sophia, Blue Mosque, Topkapi Palace, and the Basilica Cistern.',
    highlights: ['Hagia Sophia', 'Blue Mosque', 'Topkapi Palace', 'Basilica Cistern', 'Hippodrome'],
    walkingTime: '20 min walk via Galata Bridge',
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    id: 'kadikoy',
    name: 'Kadıköy',
    tagline: 'Asian side adventure',
    description: 'Take the ferry across the Bosphorus to experience local life, amazing food markets, and the trendy Moda neighborhood.',
    highlights: ['Food Market', 'Moda Waterfront', 'Street Art', 'Local Cafes', 'Antique Street'],
    walkingTime: '20 min ferry from Karaköy',
    gradient: 'from-green-500 to-teal-600',
  },
  {
    id: 'balat',
    name: 'Balat & Fener',
    tagline: 'Colorful history',
    description: 'Instagram-famous colorful houses, historic synagogues, Greek Orthodox heritage, and charming cafes.',
    highlights: ['Colorful Houses', 'Kiremit Street', 'Ahrida Synagogue', 'Ecumenical Patriarchate'],
    walkingTime: '15 min by taxi/tram',
    gradient: 'from-pink-500 to-purple-600',
  },
  {
    id: 'istiklal',
    name: 'Istiklal & Beyoğlu',
    tagline: 'Shopping & culture',
    description: 'The famous pedestrian avenue with the historic red tram, museums, shops, and vibrant nightlife.',
    highlights: ['Istiklal Street', 'Historic Tram', 'Museum of Innocence', 'Cihangir', 'Nevizade'],
    walkingTime: '15 min walk uphill',
    gradient: 'from-violet-500 to-indigo-600',
  },
]

const foodPlaces: Place[] = [
  // Street Food
  { name: 'Tarihi Karaköy Galata Simitçisi', description: 'Legendary simit (Turkish bagel) since forever', category: 'Street Food', price: '₺', coords: { lat: 41.0220, lng: 28.9770 }, mustTry: 'Fresh simit with cheese', tip: 'Go early morning for warm simit' },
  { name: 'Dürümzade', description: 'No-frills spot for the best dürüm wraps', category: 'Street Food', price: '₺', coords: { lat: 41.0320, lng: 28.9760 }, mustTry: 'Beef or lamb dürüm', tip: 'Small and quick - perfect for lunch' },
  { name: 'Sokak Lezzeti', description: 'Best balık ekmek (fish sandwich) in Karaköy', category: 'Street Food', price: '₺', coords: { lat: 41.0215, lng: 28.9750 }, mustTry: 'Balık ekmek wrap version', tip: 'Avoid the tourist boats at Galata Bridge' },

  // Cafes
  { name: 'Viyana Kahvesi', description: 'Famous for San Sebastian cheesecake right by Galata Tower', category: 'Cafe', price: '₺₺', coords: { lat: 41.0256, lng: 28.9742 }, mustTry: 'San Sebastian Cheesecake', tip: 'Tourist spot but worth it for the cheesecake' },
  { name: 'Petra Roasting Co.', description: 'Specialty coffee roasters with industrial vibes', category: 'Cafe', price: '₺₺', coords: { lat: 41.0235, lng: 28.9755 }, mustTry: 'Pour-over coffee', tip: 'Great for morning coffee ritual' },
  { name: 'MOC Karaköy', description: 'Minimalist third-wave coffee spot', category: 'Cafe', price: '₺₺', coords: { lat: 41.0225, lng: 28.9765 }, mustTry: 'Cold brew', hours: '8am-10pm' },
  { name: 'Galata Konak Cafe', description: 'Hidden rooftop with panoramic Bosphorus views', category: 'Cafe', price: '₺₺', coords: { lat: 41.0258, lng: 28.9740 }, tip: 'Entrance is behind the bakery, take elevator to top' },

  // Restaurants
  { name: 'Karaköy Lokantası', description: 'Modern meyhane with Ottoman-inspired dishes', category: 'Restaurant', price: '₺₺₺', coords: { lat: 41.0225, lng: 28.9775 }, mustTry: 'Meze spread + grilled fish', tip: 'Reservations recommended' },
  { name: 'Mikla', description: 'Michelin-starred rooftop with the best view in Istanbul', category: 'Fine Dining', price: '₺₺₺₺', coords: { lat: 41.0340, lng: 28.9780 }, mustTry: 'Tasting menu', tip: 'Book weeks in advance, sunset dinner ideal' },
  { name: 'Güney Restaurant', description: 'Great food and views near Galata Tower', category: 'Restaurant', price: '₺₺', coords: { lat: 41.0255, lng: 28.9745 }, mustTry: 'Mixed grill' },
  { name: 'Community Kitchen', description: 'Vegetarian/vegan-friendly Turkish food', category: 'Restaurant', price: '₺₺', coords: { lat: 41.0260, lng: 28.9750 }, tip: 'Great for plant-based options' },

  // Sweets
  { name: 'Karaköy Güllüoğlu', description: 'The most famous baklava in Istanbul', category: 'Sweets', price: '₺₺', coords: { lat: 41.0215, lng: 28.9760 }, mustTry: 'Pistachio baklava', tip: 'Go early to see fresh baklava from ovens' },
  { name: 'Hafız Mustafa 1864', description: 'Historic confectionery with Turkish delight', category: 'Sweets', price: '₺₺', coords: { lat: 41.0165, lng: 28.9705 }, mustTry: 'Lokum variety box', hours: '8am-12am' },

  // Rooftop Bars
  { name: 'Mikla Bar', description: 'Iconic rooftop at Marmara Pera with 360° views', category: 'Rooftop Bar', price: '₺₺₺', coords: { lat: 41.0340, lng: 28.9780 }, tip: 'Come for sunset drinks even if not dining' },
  { name: '360 Istanbul', description: 'Wrap-around views from Hagia Sophia to the Bosphorus', category: 'Rooftop Bar', price: '₺₺₺', coords: { lat: 41.0335, lng: 28.9765 }, hours: '12pm-2am' },
  { name: 'Roof 106', description: 'Galata rooftop with craft cocktails', category: 'Rooftop Bar', price: '₺₺₺', coords: { lat: 41.0258, lng: 28.9738 }, mustTry: 'Signature cocktails' },
  { name: 'Le Fumoir', description: 'Sophisticated terrace at Georges Hotel Galata', category: 'Rooftop Bar', price: '₺₺₺', coords: { lat: 41.0250, lng: 28.9748 }, tip: 'Great for late-night cocktails' },
  { name: 'Leb-i Derya', description: 'Romantic panorama spanning Hagia Sophia to Asian side', category: 'Rooftop Bar', price: '₺₺₺', coords: { lat: 41.0330, lng: 28.9760 } },

  // Meyhane (Traditional)
  { name: 'Nevizade Street', description: 'Whole street of meyhanes with live music', category: 'Meyhane', price: '₺₺', coords: { lat: 41.0345, lng: 28.9770 }, tip: 'Order rakı with meze, let the night unfold' },
]

const experiences = [
  {
    id: 'hammam',
    title: 'Turkish Hammam',
    icon: <Waves className="w-6 h-6" />,
    description: 'The ultimate relaxation experience - steam, scrub, and foam massage in centuries-old bathhouses.',
    places: [
      { name: 'Kılıç Ali Paşa Hamamı', price: '€60-80', description: 'Mimar Sinan-designed masterpiece from 1580. The most refined hammam experience.', tip: 'Gender-separated hours - check schedule and book ahead', coords: { lat: 41.0265, lng: 28.9820 } },
      { name: 'Tarihi Çeşme Hamamı', price: '€40-60', description: '300-year-old hammam in the heart of Galata. Mixed service with female therapists.', tip: '5 min walk from Karaköy tram', coords: { lat: 41.0252, lng: 28.9755 } },
      { name: 'Galatasaray Hamamı', price: '~$45', description: 'Operating since 1481 near Istiklal Street. Budget-friendly option.', tip: 'Less polished but authentic experience', coords: { lat: 41.0340, lng: 28.9770 } },
    ],
    tips: [
      'Bring swimsuit and flip-flops',
      'Tip 10-15% for your attendant',
      'Full experience takes 90 minutes',
      'Book ahead, especially weekends',
    ]
  },
  {
    id: 'bosphorus',
    title: 'Bosphorus Cruise',
    icon: <Waves className="w-6 h-6" />,
    description: 'Sail between two continents and see Istanbul from the water.',
    places: [
      { name: 'Şehir Hatları Long Tour', price: '640 TL (~€14)', description: '6-hour round trip to Anadolu Kavağı. The full experience.', tip: 'Departs from Eminönü', coords: { lat: 41.0175, lng: 28.9720 } },
      { name: 'Turyol Short Cruise', price: '250 TL (~€5)', description: '1.5-hour cruise, departs hourly. Convenient and affordable.', tip: '5 min walk from Spice Bazaar', coords: { lat: 41.0170, lng: 28.9700 } },
      { name: 'Sunset Dinner Cruise', price: '~$30', description: 'Evening cruise with dinner and entertainment.', tip: 'Book through hotels', coords: { lat: 41.0175, lng: 28.9720 } },
    ],
    tips: [
      'Short cruises are better value per hour',
      'Sit on the right side going up for European palaces',
      'Bring a jacket - it gets windy',
      'Morning cruises are less crowded',
    ]
  },
  {
    id: 'dervish',
    title: 'Whirling Dervishes',
    icon: <Sparkles className="w-6 h-6" />,
    description: 'Witness the mesmerizing Sufi ceremony of spiritual devotion.',
    places: [
      { name: 'Galata Mevlevi Museum', price: '~€15-25', description: 'Authentic Sema ceremony in historic lodge. The real experience.', tip: 'Sunday evenings, book ahead', coords: { lat: 41.0268, lng: 28.9730 } },
      { name: 'Hodjapasha Culture Center', price: '~€30', description: 'Nightly performances in restored 550-year-old hammam.', tip: 'More touristy but convenient', coords: { lat: 41.0120, lng: 28.9740 } },
    ],
    tips: [
      'Silent observation required during ceremony',
      'No flash photography',
      'Arrive 15 min early for good seats',
      'Galata lodge is more authentic',
    ]
  },
  {
    id: 'bazaars',
    title: 'Bazaar Shopping',
    icon: <Building2 className="w-6 h-6" />,
    description: 'Navigate the world\'s oldest shopping malls.',
    places: [
      { name: 'Grand Bazaar', price: 'Free entry', description: '4,000+ shops since 1461. Carpets, jewelry, ceramics, lamps.', tip: 'Closed Sundays, open 9am-7pm', coords: { lat: 41.0108, lng: 28.9680 } },
      { name: 'Spice Bazaar', price: 'Free entry', description: 'Smaller, more manageable. Spices, lokum, dried fruits.', tip: 'Cheaper than Grand Bazaar for same items', coords: { lat: 41.0165, lng: 28.9705 } },
    ],
    tips: [
      'Bargain! Start at 50% of asking price',
      'Turkish lira gets better prices than euros',
      'Go early to avoid crowds',
      'Skip the tea offers if you\'re not buying',
      'Hafız Mustafa near Spice Bazaar for lokum',
    ]
  },
]

const photoSpots = [
  { name: 'Galata Tower', description: 'Iconic medieval tower with 360° rooftop views', coords: { lat: 41.0256, lng: 28.9744 }, bestTime: 'Sunrise or sunset', tip: '€30 entry, or view from nearby rooftop bars for free with drinks' },
  { name: 'Camondo Stairs', description: 'Art Nouveau stairs built by the Camondo banking family', coords: { lat: 41.0248, lng: 28.9752 }, bestTime: 'Morning light', tip: 'Less crowded on weekdays' },
  { name: 'Kiremit Street (Balat)', description: 'The famous colorful houses of Instagram', coords: { lat: 41.0295, lng: 28.9490 }, bestTime: 'Sunny days, morning', tip: 'Respect residents - it\'s a neighborhood' },
  { name: 'Rainbow Stairs (Balat)', description: 'Painted staircases in the heart of Balat', coords: { lat: 41.0290, lng: 28.9485 }, bestTime: 'Midday for even lighting' },
  { name: 'Galata Bridge Sunset', description: 'Watch fishermen against the Old City skyline', coords: { lat: 41.0200, lng: 28.9730 }, bestTime: 'Golden hour', tip: 'Lower deck for fish sandwich, upper deck for views' },
  { name: 'Süleymaniye Mosque Terrace', description: 'Best panorama of Golden Horn and Old City', coords: { lat: 41.0162, lng: 28.9640 }, bestTime: 'Sunset', tip: 'Less touristy than Blue Mosque area' },
]

const practicalInfo = {
  transport: [
    { title: 'Istanbulkart', description: 'Rechargeable transit card for all public transport. Buy at any metro station.', tip: 'Much cheaper than single tickets' },
    { title: 'Ferries', description: 'Use Istanbulkart. Karaköy → Kadıköy is 28 TL. Scenic and practical.', tip: 'Ferries run until ~11pm' },
    { title: 'Trams', description: 'T1 line connects Kabataş-Sultanahmet-Grand Bazaar. Very useful.', tip: 'Can get very crowded' },
    { title: 'Taxis', description: 'Affordable but insist on meter ("taksimetre"). Yellow cabs only.', tip: 'BiTaksi app to avoid scams' },
    { title: 'Walking', description: 'Galata is very walkable. Wear comfortable shoes - hills everywhere!', tip: 'Use Tünel funicular to avoid steep climb to Istiklal' },
  ],
  mosques: [
    { title: 'Dress Code', description: 'Shoulders and knees covered for everyone. Women need headscarves (provided at entrance).', tip: 'Carry a scarf in your bag' },
    { title: 'Shoes', description: 'Remove shoes before entering. Bags provided.', tip: 'Wear easy slip-on shoes' },
    { title: 'Prayer Times', description: 'Mosques close to tourists during prayer (5x daily, ~30 min each).', tip: 'Check times before visiting' },
    { title: 'Photography', description: 'Usually allowed but no flash. Be respectful.', tip: 'Hagia Sophia now requires silence as active mosque' },
  ],
  money: [
    { title: 'Currency', description: 'Turkish Lira (TL/₺). Currently ~1 EUR = 37 TL', tip: 'Rates change fast - check before trip' },
    { title: 'ATMs', description: 'Everywhere. Use bank ATMs inside branches for safety.', tip: 'Decline "conversion" - use lira rate' },
    { title: 'Cards', description: 'Widely accepted in tourist areas. Cash for small vendors/taxis.', tip: 'Notify your bank before traveling' },
    { title: 'Tipping', description: '10-15% at restaurants. Round up for taxis. Hammam 10-20%.', tip: 'Not expected at casual spots' },
  ],
  phrases: [
    { turkish: 'Merhaba', english: 'Hello', pronunciation: 'MEHR-hah-bah' },
    { turkish: 'Teşekkür ederim', english: 'Thank you', pronunciation: 'teh-sheh-KOOR eh-deh-REEM' },
    { turkish: 'Evet / Hayır', english: 'Yes / No', pronunciation: 'eh-VET / hah-YUR' },
    { turkish: 'Ne kadar?', english: 'How much?', pronunciation: 'neh kah-DAHR' },
    { turkish: 'Hesap lütfen', english: 'Check please', pronunciation: 'heh-SAHP LOOT-fen' },
    { turkish: 'Çok güzel', english: 'Very beautiful', pronunciation: 'chok goo-ZEL' },
  ],
}

// Historical Sites - Deep Research
const historicalSites = [
  {
    id: 'hagia-sophia',
    name: 'Hagia Sophia',
    turkishName: 'Ayasofya',
    era: 'Byzantine, 537 AD',
    visitInfo: { price: '€25', duration: '1.5-2 hours', closedDay: 'None (prayer times)', dressCode: true },
    fromGalata: { walking: '25 min', transit: '15 min (tram T1)', distance: '2.0 km' },
    coords: { lat: 41.0086, lng: 28.9802 },
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Hagia_Sophia',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Hagia_Sophia_%28228968325%29.jpeg',
    quickFacts: [
      'Built in just 5 years (532-537 AD)',
      'Largest cathedral in the world for nearly 1,000 years',
      'Dome is 31m in diameter, 55m high',
      'Church → Mosque → Museum → Mosque again (2020)',
    ],
    description: [
      `The Hagia Sophia stands as perhaps the most significant architectural achievement in human history—a building that changed the trajectory of architecture forever. Commissioned by Byzantine Emperor Justinian I in 532 AD after the previous church was destroyed in the Nika Riots, it was built in an astonishing five years by two mathematical geniuses: Isidore of Miletus and Anthemius of Tralles. When Justinian first entered the completed building on December 27, 537 AD, he reportedly exclaimed, "Solomon, I have surpassed thee!"—comparing his achievement to the legendary Temple of Solomon.`,

      `The engineering of the dome was revolutionary and remained unmatched for centuries. The central dome, measuring 31 meters in diameter and soaring 55 meters above the floor, appears to float on a ring of 40 windows that flood the interior with light. This illusion of a "dome suspended from heaven" was achieved through the innovative use of pendentives—curved triangular sections that transfer the dome's weight to massive piers below. The Byzantine historian Procopius wrote that the dome "seems not to rest upon solid masonry, but to cover the space with its golden dome suspended from Heaven."`,

      `For 916 years, Hagia Sophia served as the seat of the Orthodox Patriarch of Constantinople and the site of imperial coronations. Its walls witnessed some of history's most dramatic moments: crusaders ransacking it in 1204, Byzantine emperors pleading for divine intervention against Ottoman sieges, and finally, on May 29, 1453, Sultan Mehmed II entering to claim it as a mosque. The Sultan was so awed by its beauty that he ordered its immediate protection and conversion, adding minarets, a mihrab, and Islamic calligraphy while preserving the Byzantine mosaics beneath plaster.`,

      `The Byzantine mosaics that survive are among the finest examples of medieval art. In the upper gallery, the stunning Deësis mosaic (c. 1261) depicts Christ flanked by the Virgin Mary and John the Baptist—their faces rendered with a naturalism that wouldn't be seen again until the Renaissance. The southwestern vestibule contains a magnificent mosaic of the Virgin and Child receiving offerings from Emperors Constantine and Justinian. These mosaics were uncovered when the building became a museum in 1934 under Atatürk, and they now coexist with massive Islamic calligraphic medallions.`,

      `Today, Hagia Sophia exists in a remarkable state of spiritual duality. Reconverted to a mosque in 2020, it remains open to visitors outside of prayer times. Walking through its massive bronze doors, you enter a space where 1,500 years of human devotion, artistic achievement, and architectural genius converge. The building influenced everything from the Blue Mosque beside it to St. Peter's Basilica in Rome. As architectural historian Rowland Mainstone wrote, "No building has had a greater influence on architectural history than Hagia Sophia."`,
    ],
  },
  {
    id: 'blue-mosque',
    name: 'Blue Mosque',
    turkishName: 'Sultan Ahmed Camii',
    era: 'Ottoman, 1609-1617',
    visitInfo: { price: 'Free', duration: '30-45 min', closedDay: 'Prayer times (5x daily)', dressCode: true },
    fromGalata: { walking: '25 min', transit: '15 min (tram T1)', distance: '2.1 km' },
    coords: { lat: 41.0054, lng: 28.9768 },
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Blue_Mosque,_Istanbul',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Istanbul_%2834223582516%29_%28cropped%29.jpg',
    quickFacts: [
      'Over 20,000 handmade Iznik tiles',
      '6 minarets (controversial at the time)',
      'Architect was student of the great Sinan',
      'Named for the blue tiles covering the interior',
    ],
    description: [
      `The Blue Mosque, officially the Sultan Ahmed Mosque, represents the culmination of two centuries of Ottoman mosque architecture. Built between 1609 and 1617 by Sultan Ahmed I, who was just 19 years old when he commissioned it, the mosque was a bold statement of Ottoman power after a humiliating peace treaty with the Habsburgs. Ahmed I wanted to build something that would rival—and in his eyes, surpass—the ancient Hagia Sophia that stood directly across the plaza. The mosque was designed by Sedefkâr Mehmed Ağa, a student of the legendary architect Mimar Sinan.`,

      `The most striking external feature is the unprecedented six minarets. Ottoman tradition dictated that mosques have one, two, or four minarets—six was the exclusive count of the Masjid al-Haram in Mecca. Legend says that Ahmed I wanted gold (altın) minarets, but the architect misheard and built six (altı) instead. More likely, the young sultan was making an audacious claim to religious authority. The controversy was resolved when Ahmed funded the construction of a seventh minaret in Mecca, preserving the holy city's precedence.`,

      `Step inside and you understand why it's called the Blue Mosque. Over 20,000 handmade ceramic tiles from Iznik (the Ottoman center of tile production) cover the lower walls and upper galleries, creating an overwhelming sense of blue. These tiles feature traditional motifs—tulips, roses, carnations, and cypress trees—painted in more than 50 different tulip designs alone. The effect at different times of day, as light filters through 250 stained-glass windows (originally a gift from the Signoria of Venice), transforms the interior from pale blue to deep cobalt.`,

      `The mosque's design masterfully synthesizes Byzantine and Islamic architecture. The cascading system of domes—a central dome surrounded by semi-domes and smaller domes—echoes Hagia Sophia while introducing a more rational, symmetrical plan. The central dome rises 43 meters and spans 23.5 meters, supported by four massive "elephant leg" pillars. The interior feels remarkably unified and spacious, with low-hanging chandeliers (originally lit by thousands of oil lamps) creating an intimate atmosphere despite the vast scale.`,

      `Sultan Ahmed I died just a year after his mosque was completed, at age 27, and was buried in a mausoleum just outside its walls. The Blue Mosque remains one of the few Ottoman mosques to have given its name to an entire district—Sultanahmet, the historic heart of Istanbul. Today it functions as a working mosque serving over 10,000 worshippers during Friday prayers, while welcoming millions of visitors who come to witness this masterpiece of Ottoman art. The courtyard, nearly as large as the mosque itself, features a beautiful ablution fountain and offers one of the best views of the Hagia Sophia.`,
    ],
  },
  {
    id: 'topkapi',
    name: 'Topkapi Palace',
    turkishName: 'Topkapı Sarayı',
    era: 'Ottoman, 1459-1856',
    visitInfo: { price: '€15 + €10 Harem', duration: '2-3 hours', closedDay: 'Tuesday', dressCode: false },
    fromGalata: { walking: '30 min', transit: '20 min (tram T1)', distance: '2.4 km' },
    coords: { lat: 41.0115, lng: 28.9833 },
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Topkap%C4%B1_Palace',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Topkap%C4%B1_-_01.jpg',
    quickFacts: [
      'Home to 36 Ottoman sultans over 400 years',
      'Houses the 86-carat Spoonmaker\'s Diamond',
      'The Harem contained over 300 rooms',
      'Contains relics attributed to Prophet Muhammad',
    ],
    description: [
      `Topkapi Palace was the beating heart of one of history's greatest empires. Constructed between 1459 and 1465 by Sultan Mehmed II—"the Conqueror" who had captured Constantinople just six years earlier—the palace served as the primary residence of Ottoman sultans for nearly 400 years. At its peak, it housed over 4,000 people: the sultan, his family, the Imperial Council, the entire government bureaucracy, and an army of servants, guards, and eunuchs. It wasn't just a residence; it was a self-contained city that controlled an empire spanning three continents.`,

      `The palace is organized around four successive courtyards, each more exclusive than the last. The First Courtyard was semi-public, containing the imperial mint and the terrifying executioner's fountain (where heads were washed after beheadings). The Second Courtyard housed the Imperial Council (Divan), where the empire's business was conducted—the sultan sometimes observed through a grilled window without being seen. The Third Courtyard was the sultan's private domain, containing the Audience Chamber, the Treasury, and the sacred Relics of the Prophet Muhammad. The Fourth Courtyard was for rest and pleasure, with garden pavilions overlooking the Bosphorus.`,

      `The Imperial Treasury holds treasures that seem almost mythical in their splendor. The Spoonmaker's Diamond, an 86-carat pear-shaped stone surrounded by 49 smaller diamonds, is the fourth-largest diamond in the world. Legend says it was found in a garbage heap by a poor fisherman who traded it to a spoon-maker for three wooden spoons. The Topkapi Dagger, with three enormous emeralds on its hilt and a watch hidden in the pommel, was meant as a gift for a Persian shah who was assassinated before it arrived. Throne after throne glitters with gold, rubies, and pearls.`,

      `The Harem, a maze of over 300 rooms, was the most secretive part of the palace—the word itself means "forbidden." Here lived the sultan's mother (the most powerful woman in the empire), his wives, concubines, and children, all guarded by black eunuchs. The most influential women, like Roxelana (Hürrem Sultan), wife of Suleiman the Magnificent, wielded enormous political power from within these walls. The Harem's architecture is intimate and ornate: tiled walls, stained glass windows, gilded ceilings, and fountains designed to mask conversations from eavesdroppers.`,

      `In 1856, the sultans moved to the more European-style Dolmabahçe Palace, and Topkapi began its transformation into a museum (officially in 1924). Today, walking through these courtyards is to walk through 400 years of Ottoman history. The Sacred Relics room (open only to Muslims until 1962) contains what are believed to be items belonging to the Prophet Muhammad, including his cloak, sword, and a hair from his beard—making Topkapi one of Islam's most important pilgrimage sites. From the Fourth Courtyard, the view across the Bosphorus reminds you why the sultans chose this spot: beauty, power, and the command of worlds.`,
    ],
  },
  {
    id: 'basilica-cistern',
    name: 'Basilica Cistern',
    turkishName: 'Yerebatan Sarnıcı',
    era: 'Byzantine, 532 AD',
    visitInfo: { price: '€10', duration: '30-45 min', closedDay: 'None', dressCode: false },
    fromGalata: { walking: '20 min', transit: '12 min (tram T1)', distance: '1.8 km' },
    coords: { lat: 41.0084, lng: 28.9779 },
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Basilica_Cistern',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Cisterna_Bas%C3%ADlica%2C_Estambul%2C_Turqu%C3%ADa%2C_2024-09-28%2C_DD_58-60_HDR.jpg',
    quickFacts: [
      '336 marble columns, mostly recycled from ruins',
      'Could hold 80,000 cubic meters of water',
      'Two mysterious Medusa head column bases',
      'Forgotten for centuries, rediscovered in 1545',
    ],
    description: [
      `Beneath the bustling streets of Istanbul lies one of the ancient world's most spectacular engineering achievements. The Basilica Cistern, built by Emperor Justinian I in 532 AD (the same year he began Hagia Sophia), was designed to supply water to the Great Palace and surrounding buildings on Constantinople's First Hill. Measuring 138 by 65 meters, it could hold 80,000 cubic meters of water—enough to fill about 32 Olympic swimming pools. The name "Basilica" comes from the public square (Stoa Basilica) that once stood above it.`,

      `The cistern is supported by a forest of 336 marble columns, each 9 meters tall, arranged in 12 rows of 28. Walking among them feels like entering a submerged cathedral. Most of these columns were recycled—salvaged from ruined temples and buildings across the Byzantine Empire. Look closely and you'll notice they don't match: different styles, different capitals, different sources. Some have ornate Corinthian capitals; others are plain. This recycling was both practical and symbolic, representing the triumph of Christianity over paganism.`,

      `The most famous features are two massive Medusa heads used as column bases in the northwest corner. One is sideways; the other is upside-down. Why? The practical explanation is that they were simply the right size for the job. The symbolic explanation is that inverting pagan symbols neutralized their power—a Christian triumph over old gods. The mysterious explanation, whispered by guides, is that their gaze was intentionally averted to prevent them from turning visitors to stone. The truth is lost to history, but the effect is undeniably eerie.`,

      `For nearly a thousand years, the cistern was lost to memory. The Byzantines used it, then the city fell to the Ottomans, and somehow knowledge of its existence faded. In 1545, French scholar Petrus Gyllius came to Constantinople searching for Byzantine antiquities. He heard rumors of locals drawing water—and even catching fish—through holes in their basement floors. Following the stories, he discovered the enormous cistern below. It took until the 1980s for proper restoration to begin, when 50,000 tons of mud were removed to reveal the original Byzantine brick floor.`,

      `Today, atmospheric lighting, classical music, and the soft splash of carp in the shallow water create an otherworldly experience. The temperature drops noticeably as you descend the 52 steps into this subterranean palace. Raised wooden walkways wind past column after column, each one throwing shadows in the dim light. The cistern has appeared in numerous films, most famously in James Bond's "From Russia with Love." It remains one of Istanbul's most magical spaces—a reminder that beneath this modern city lies layer upon layer of buried history, waiting to be discovered.`,
    ],
  },
  {
    id: 'galata-tower',
    name: 'Galata Tower',
    turkishName: 'Galata Kulesi',
    era: 'Genoese/Medieval, 1348',
    visitInfo: { price: '€25', duration: '30-45 min', closedDay: 'None', dressCode: false },
    fromGalata: { walking: '2 min', transit: 'N/A', distance: '0.1 km' },
    coords: { lat: 41.0256, lng: 28.9744 },
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Galata_Tower',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Galata_tower_01_23.jpg',
    quickFacts: [
      'Built by Genoese merchants in 1348',
      '67 meters tall—once the tallest building in Istanbul',
      'Legend says a man flew from it in 1632',
      'Served as fire watchtower and prison',
    ],
    description: [
      `The Galata Tower rises like a stone finger pointing at the sky, a medieval sentinel that has watched over Istanbul for nearly 700 years. Built in 1348 by Genoese colonists, it was originally called "Christea Turris" (Tower of Christ) and served as the highest point of the defensive walls surrounding their trading colony. The Genoese had been granted this land across the Golden Horn from Constantinople, and they built their tower tall enough to see everything—and to be seen. At 67 meters, it was the tallest structure in the city for centuries.`,

      `The tower's history reads like a adventure novel. After the Ottoman conquest of 1453, the Genoese colony was abolished, but the tower was too useful to destroy. It became a prison, then an observatory under the astronomer Takiyuddin (briefly—the observatory was demolished when conservative clerics blamed it for causing plague). For centuries, it served as a fire watchtower; guards at the top could spot flames rising from Istanbul's wooden neighborhoods and raise the alarm. The distinctive conical cap was added during Ottoman restorations.`,

      `One of the tower's most famous legends involves Hezarfen Ahmed Çelebi, who in 1632 reportedly attached wings to his arms and flew from the tower across the Bosphorus to the Asian side—a distance of about 6 kilometers. Sultan Murad IV was so impressed that he rewarded Hezarfen with gold, then promptly exiled him to Algeria, reasoning that "such a man is capable of anything." Whether the story is true or not (engineers remain skeptical), it captures the tower's mystique as a place where impossible things might happen.`,

      `Archaeological excavations in 1965 uncovered a secret tunnel beneath the tower, 70 centimeters wide and 140 centimeters high, lined with stone and heading toward the sea. Historians believe it was an escape route for the Genoese in case of siege. More grimly, skeletons found in the tunnel may belong to prisoners who tried to dig their way out during the tower's use as a dungeon under Suleiman the Magnificent. The walls are nearly 4 meters thick—built to withstand siege, earthquake, and time itself.`,

      `Today, the tower offers one of Istanbul's most spectacular panoramas. An elevator and stairs bring visitors to the observation deck, where the entire city unfolds: the Golden Horn, the Bosphorus, the minarets of the Old City, the sprawl of the Asian side. At sunset, with the call to prayer echoing from a hundred mosques, it's one of those views that makes you understand why Constantinople was called "the city of the world's desire." The neighborhood below—also called Galata—has become one of Istanbul's trendiest, filled with cafes, galleries, and boutiques. But the tower remains, medieval and immovable, a fixed point in a changing city.`,
    ],
  },
  {
    id: 'suleymaniye',
    name: 'Süleymaniye Mosque',
    turkishName: 'Süleymaniye Camii',
    era: 'Ottoman, 1550-1557',
    visitInfo: { price: 'Free', duration: '45 min - 1 hour', closedDay: 'Prayer times', dressCode: true },
    fromGalata: { walking: '25 min', transit: '15 min (tram + walk)', distance: '1.9 km' },
    coords: { lat: 41.0162, lng: 28.9640 },
    wikipediaUrl: 'https://en.wikipedia.org/wiki/S%C3%BCleymaniye_Mosque',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/38/S%C3%BCleymaniyeMosqueIstanbul_%28cropped%29.jpg',
    quickFacts: [
      'Designed by the legendary architect Mimar Sinan',
      '10 balconies on minarets = Suleiman was 10th sultan',
      'Complex includes schools, hospital, soup kitchen',
      'Both Suleiman and Sinan are buried here',
    ],
    description: [
      `If Hagia Sophia represents the genius of Byzantine architecture and the Blue Mosque the ambition of youth, then the Süleymaniye Mosque is the wisdom of maturity—the point where Ottoman architecture reached its serene perfection. Commissioned by Suleiman the Magnificent at the height of Ottoman power and designed by the greatest architect the empire ever produced, Mimar Sinan, it was built between 1550 and 1557 on the Third Hill of Istanbul. Sinan considered it his masterpiece; walking inside, you understand why.`,

      `Mimar Sinan was one of history's most prolific architects, designing over 300 structures across the Ottoman Empire. Born Christian in Anatolia, he was recruited through the devşirme system, converted to Islam, and rose through the military before becoming chief imperial architect at age 50. He held the position for 50 years, until his death at age 98. His goal with the Süleymaniye was nothing less than to surpass Hagia Sophia—not in size, but in harmony. The dome is slightly smaller, but the interior feels more perfectly proportioned, more luminous, more peaceful.`,

      `The mosque sits within a larger complex (külliye) that demonstrates the Ottoman ideal of imperial charity. Surrounding the mosque are four madrasas (theological schools), a medical school, a hospital, a public kitchen (imaret) that fed the poor, a bathhouse, and shops whose rent supported the charitable works. The public kitchen alone fed over 1,000 people daily. This wasn't just a place of worship; it was a social welfare system built in stone. The complex took 3,500 workers seven years to complete.`,

      `Symbolism runs through every detail. The four minarets represent Suleiman as the fourth sultan to rule from Istanbul. The ten balconies (şerefes) on those minarets indicate he was the tenth Ottoman sultan. The interior achieves what Sinan called "perfect proportion"—the central dome is exactly twice as high as it is wide, creating a sense of effortless balance. Light pours through windows designed to change the interior's character throughout the day. At the mihrab (prayer niche), Iznik tiles glow with cobalt, turquoise, and white.`,

      `Both Suleiman and his architect are buried within the complex—the emperor in a magnificent türbe (mausoleum) behind the qibla wall, Sinan in a modest tomb he designed himself at the corner of the complex. The view from the mosque's courtyard, looking across the Golden Horn to the Asian side, is one of Istanbul's finest. Unlike the Blue Mosque area, the Süleymaniye rarely feels overcrowded. This is where Istanbullus come to pray, where couples get married, where the city feels most authentically itself. Sinan built over 300 buildings; this is the one where he put his soul.`,
    ],
  },
  {
    id: 'grand-bazaar',
    name: 'Grand Bazaar',
    turkishName: 'Kapalıçarşı',
    era: 'Ottoman, 1461',
    visitInfo: { price: 'Free', duration: '1-3 hours', closedDay: 'Sunday', dressCode: false },
    fromGalata: { walking: '20 min', transit: '12 min (tram T1)', distance: '1.6 km' },
    coords: { lat: 41.0108, lng: 28.9680 },
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Grand_Bazaar,_Istanbul',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Istanbul_asv2021-11_img41_Grand_Bazaar.jpg',
    quickFacts: [
      'World\'s oldest and largest covered market',
      '4,000+ shops across 61 covered streets',
      '250,000-400,000 visitors per day',
      'Built to fund the maintenance of Hagia Sophia',
    ],
    description: [
      `The Grand Bazaar is not just a market—it is the world's first shopping mall, a living organism of commerce that has been beating for over 560 years. Commissioned by Sultan Mehmed II immediately after the conquest of Constantinople in 1453, the bazaar was designed with a specific purpose: the rents from its shops would fund the maintenance of Hagia Sophia. Construction began in 1461, and what started as two covered bedestens (secure market halls) has grown into a labyrinthine city-within-a-city covering over 30,000 square meters with 61 covered streets and more than 4,000 shops.`,

      `The architecture tells the story of centuries of commerce. The two original bedestens—the İç Bedesten (Inner Bedesten) and the Sandal Bedesten—are masterpieces of Ottoman architecture, with thick stone walls and sturdy domes designed to protect the most valuable goods: gold, jewelry, and precious fabrics. These fireproof vaults were the medieval equivalent of bank deposit boxes. Around them, the bazaar grew organically, each guild claiming its own street: jewelers here, leather workers there, carpet sellers in their own district.`,

      `For centuries, the Grand Bazaar was the beating commercial heart of an empire spanning three continents. Caravans arrived bearing silk from China, spices from India, amber from the Baltic, and slaves from the Crimea. The bazaar functioned as a commodities exchange, a bank, and a social hub where deals were sealed over countless glasses of tea. At its peak in the 17th century, it employed over 20,000 people. The tradition of fixed prices was so strong that haggling was considered dishonorable—a custom that has since reversed dramatically.`,

      `The bazaar has survived 20 fires and several earthquakes, most catastrophically the great earthquake of 1894 that damaged much of its structure. Yet each time, it was rebuilt, a testament to its economic importance. Some elements endure: the hans (caravanserais) where merchants once lodged still function as workshops and showrooms; the fountains where traders performed ablutions before prayer still flow; the thick walls still keep the interior cool in summer and warm in winter. The maze-like layout that confuses tourists today was intentional—designed to slow down thieves and invaders.`,

      `Today, the Grand Bazaar attracts between 250,000 and 400,000 visitors daily, making it one of the world's most visited tourist attractions. Yes, it can be overwhelming—the calls of shopkeepers, the narrow passages packed with tour groups, the aggressive salesmanship. But step off the main tourist routes, find a quieter han, accept a glass of tea from a craftsman who still works the way his grandfather did, and the old magic reveals itself. This is where the Ottoman Empire did business. The echoes of a thousand years of commerce still resonate beneath the vaulted ceilings.`,
    ],
  },
  {
    id: 'dolmabahce',
    name: 'Dolmabahçe Palace',
    turkishName: 'Dolmabahçe Sarayı',
    era: 'Ottoman, 1843-1856',
    visitInfo: { price: '€20', duration: '1.5-2 hours', closedDay: 'Monday', dressCode: false },
    fromGalata: { walking: '25 min', transit: '10 min (tram T1)', distance: '2.0 km' },
    coords: { lat: 41.0391, lng: 29.0003 },
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Dolmabah%C3%A7e_Palace',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Dolmabahce_Istanbul_Turkey.jpg',
    quickFacts: [
      'Largest palace in Turkey (45,000 m²)',
      '4.5-ton crystal chandelier—world\'s largest',
      '14 tons of gold used in decoration',
      'Where Atatürk died on November 10, 1938',
    ],
    description: [
      `If Topkapi Palace represents the austere power of the early Ottoman Empire, Dolmabahçe represents its final, glittering excess. Built between 1843 and 1856 by Sultan Abdülmecid I, it was a deliberate statement that the Ottomans could compete with the palaces of European monarchs. The name means "filled-in garden"—the site was once a bay of the Bosphorus, filled with rubble over centuries to create land. The palace cost 5 million Ottoman gold pounds (equivalent to about 35 tons of gold), a sum so staggering it contributed to the empire's eventual bankruptcy.`,

      `The architecture is an audacious fusion of Baroque, Rococo, and Neoclassical styles with Ottoman elements, designed by Armenian architects Garabet Balyan and his son Nigoğayos. The palace stretches 600 meters along the Bosphorus shoreline, containing 285 rooms, 46 halls, 68 toilets, and 6 hammams. An estimated 14 tons of gold leaf were used to gild the ceilings, while 6 tons of silver decorated the walls and furniture. Every surface drips with ornament—marble columns, crystal staircases, parquet floors of rare woods arranged in intricate patterns.`,

      `The Ceremonial Hall is the palace's heart, and suspended from its 36-meter dome hangs the world's largest chandelier: a 4.5-ton behemoth of Bohemian crystal with 750 lights. Long believed to be a gift from Queen Victoria, it was actually purchased from England. The hall could hold thousands for state occasions, its floor designed to bear the weight of the entire Ottoman elite at once. Throughout the palace, the world's largest collection of Baccarat and Bohemian crystal chandeliers and lighting fixtures—750 in total—creates a forest of prismatic light.`,

      `After Abdülmecid I, five more sultans would call Dolmabahçe home until the abolition of the Ottoman sultanate in 1922. But the palace's most poignant connection is to Mustafa Kemal Atatürk, founder of the Turkish Republic. He used it as a presidential residence and conducted crucial state business from its rooms. It was here, in a modest bedroom overlooking the Bosphorus, that Atatürk died on November 10, 1938, at 9:05 AM—a time at which all the palace's clocks are still set. His deathbed, draped with a Turkish flag, remains exactly as it was.`,

      `Today, Dolmabahçe functions as a museum that receives over a million visitors annually. Tours are guided and mandatory, moving through room after room of staggering opulence. Critics call it gaudy, a symbol of imperial decline—and there's truth in that. But there's also undeniable craftsmanship, a monument to what skilled artisans could achieve when given unlimited resources. Standing in the Ceremonial Hall, beneath that impossible chandelier, with the Bosphorus glittering through the tall windows, you understand why sultans chose to abandon the medieval fortress of Topkapi for this palace of light.`,
    ],
  },
  {
    id: 'chora',
    name: 'Chora Church',
    turkishName: 'Kariye Camii',
    era: 'Byzantine, 11th-14th century',
    visitInfo: { price: '€20', duration: '45 min - 1 hour', closedDay: 'Friday', dressCode: true },
    fromGalata: { walking: '50 min', transit: '25 min (bus/taxi)', distance: '4.2 km' },
    coords: { lat: 41.0314, lng: 28.9394 },
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Chora_Church',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Chora_Church_2024.jpg',
    quickFacts: [
      'Finest surviving Byzantine mosaics and frescoes',
      'Name means "in the countryside" (originally outside walls)',
      'Mosaics hidden under plaster for 500 years',
      'Recently restored and reopened (2024)',
    ],
    description: [
      `Hidden in the Fatih district, away from the main tourist routes, the Chora Church contains what may be the most magnificent Byzantine art anywhere in the world. The name—meaning "in the countryside"—dates from when the church stood outside Constantinople's original walls. The current structure is mostly 11th century, but its glory lies in the mosaics and frescoes added between 1315 and 1321 by Theodore Metochites, one of the most powerful men in the Byzantine Empire. He poured his fortune into decorating this church, and the result is a jewel box of gold, lapis, and narrative brilliance.`,

      `The mosaics depict the life of Christ and the Virgin Mary with an emotional intensity and naturalistic detail that seems to anticipate the Italian Renaissance. In the outer narthex, scenes from Christ's life unfold in luminous gold and deep blue: the Baptism, the Temptation, the Miracles. In the inner narthex, the life of Mary is told with tender domesticity—her first steps, her presentation at the Temple, her marriage to Joseph. Above the entrance to the nave, a colossal Christ Pantocrator gazes down, his expression somehow both severe and compassionate.`,

      `The parekklesion (side chapel) contains the church's most profound work: a monumental fresco of the Anastasis (Resurrection). Christ, radiant in white, stands on the shattered gates of Hell, reaching down to pull Adam and Eve from their tombs. Satan lies bound beneath his feet, surrounded by broken locks and scattered keys. The dynamism is extraordinary—Christ's robes swirl, bodies twist with effort and hope, the whole scene charged with redemptive energy. Art historians consider it one of the great images of Christian art.`,

      `When the Ottomans conquered Constantinople, the Chora was converted into a mosque, and its figural art—forbidden in Islamic tradition—was covered with plaster. There it remained, hidden and protected, for nearly 500 years. In 1948, American scholars from the Byzantine Institute began the painstaking work of uncovering the mosaics, carefully removing layer after layer of whitewash to reveal the brilliance beneath. The church became a museum in 1958. In 2020, it was reconverted to a mosque, and after extensive restoration, reopened in 2024.`,

      `Today, some mosaics in the prayer section are covered with curtains during services, respecting Islamic practice while preserving the art. But most of the decoration remains visible, and the effect is overwhelming. Unlike Hagia Sophia's vast spaces, Chora is intimate—you stand close enough to see individual tesserae, to trace the curve of a mosaic eyebrow, to feel the weight of Theodore Metochites' devotion. The journey to reach it (it's far from the tourist center) is worth every step. This is Byzantine art at its luminous, mystical best.`,
    ],
  },
  {
    id: 'hippodrome',
    name: 'Hippodrome',
    turkishName: 'At Meydanı / Sultanahmet Meydanı',
    era: 'Roman/Byzantine, 203-330 AD',
    visitInfo: { price: 'Free', duration: '20-30 min', closedDay: 'None', dressCode: false },
    fromGalata: { walking: '22 min', transit: '14 min (tram T1)', distance: '1.9 km' },
    coords: { lat: 41.0062, lng: 28.9754 },
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Hippodrome_of_Constantinople',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Sultanahmet_Square%2C_Obelisk_of_Theodosius%2C_Istanbul_%2852121868925%29.jpg',
    quickFacts: [
      'Held 100,000 spectators for chariot races',
      '3,500-year-old Egyptian obelisk still stands',
      'Site of the deadly Nika Riots (532 AD)',
      'Serpent Column is 2,500 years old from Delphi',
    ],
    description: [
      `Before Sultanahmet Square was a peaceful park surrounded by mosques, it was the Hippodrome of Constantinople—the largest chariot-racing arena in the ancient world after Rome's Circus Maximus. Begun by Emperor Septimius Severus in 203 AD and completed by Constantine the Great in 330 AD, it could seat over 100,000 screaming spectators. Chariot racing wasn't just sport here; it was politics, religion, and tribal identity rolled into one. The racing factions—Blues and Greens—were essentially political parties whose rivalries could topple emperors.`,

      `Three monuments from the Hippodrome's glory days still stand, survivors of 1,700 years of history. The Obelisk of Theodosius, a pink granite needle carved in Egypt around 1490 BC for Pharaoh Thutmose III, was brought from Luxor by Emperor Theodosius I in 390 AD. It's approximately 3,500 years old and still in excellent condition. The marble base, carved with scenes of the emperor and his family watching the races, shows us exactly what this arena once meant. Workers are depicted raising the obelisk—a glimpse into ancient engineering.`,

      `The Serpent Column is even older and perhaps more remarkable. Cast in bronze in 479 BC from the weapons of defeated Persian soldiers, it originally stood at the Temple of Apollo in Delphi, Greece, commemorating the Greek victory at the Battle of Plataea. Constantine I plundered it in 324 AD—one of many treasures he stripped from the ancient world to adorn his new capital. The column once stood 8 meters tall, topped by three serpent heads; the serpents were damaged in 1700, and fragments of the heads now rest in the Istanbul Archaeological Museum.`,

      `The Hippodrome was also a crucible of violence. In 532 AD, during the reign of Justinian I, the Blues and Greens temporarily united against the emperor in the Nika Riots (named for their battle cry: "Nika!"—"Win!"). The rebellion nearly succeeded; Justinian was ready to flee when his wife Theodora shamed him into standing firm. The emperor's generals trapped the rioters in the Hippodrome and slaughtered perhaps 30,000 people. The bloodbath secured Justinian's reign and cleared the way for his ambitious building program, including Hagia Sophia.`,

      `Today, the Hippodrome is Sultanahmet Square, a grassy esplanade where tourists photograph the monuments and vendors sell corn. The racing track's outline is still visible in the square's elongated shape, and the spina (central barrier) ran roughly where the obelisk now stands. Almost nothing remains of the tiered seats that once held 100,000 voices roaring for their teams. But stand by the obelisk at sunset, when the Blue Mosque and Hagia Sophia glow golden, and imagine the thunder of hooves, the crack of whips, the crowd's deafening roar. This peaceful square was once the heart of an empire's passion.`,
    ],
  },
]

// The girlfriend's itinerary
const itinerary: DayPlan[] = [
  {
    day: 1,
    date: 'Friday, Jan 3',
    title: 'Arrival & Gentle Start',
    theme: 'Settle in, easy Galata exploration',
    activities: [
      { time: '1:00pm', title: 'Land from Boston', description: 'Welcome to Istanbul!', icon: <Navigation className="w-4 h-4" /> },
      { time: '~3:00pm', title: 'Arrive at Galata hotel', description: 'Unpack and settle in', icon: <Building2 className="w-4 h-4" /> },
      { time: 'Late afternoon', title: 'Easy Galata Exploration', description: 'Walk around the immediate area to orient everyone. Visit Camondo Stairs for quick photos. Peek at Galata Tower from outside.', tips: ['Take it easy - jet lag is real', 'Maybe short waterfront walk in Karaköy if feeling good'], icon: <Compass className="w-4 h-4" /> },
      { time: '5:30-6:30pm', title: 'Early, relaxed dinner', description: 'Traditional pide or mantı (dumplings) - comfort food close to hotel.', tips: ['Keep it low-key, close to hotel', 'Watch sunset over Bosphorus from Galata'], icon: <Utensils className="w-4 h-4" /> },
      { time: '8:00-9:00pm', title: 'Early to bed', description: 'Everyone rest up for jet lag recovery.', icon: <Sun className="w-4 h-4" /> },
    ]
  },
  {
    day: 2,
    date: 'Saturday, Jan 4',
    title: 'Galata + Istiklal',
    theme: 'Coffee culture, views, and bohemian vibes',
    activities: [
      { time: '8:30-9:00am', title: 'Climb Galata Tower', description: 'Opens at 8:30am. Amazing 360° views of the city.', tips: ['Stairs + elevator combo - take it slow', 'Best views before crowds arrive'], icon: <Building2 className="w-4 h-4" /> },
      { time: 'Morning', title: 'Coffee & Breakfast', description: 'Old Java Coffee Roasters or Petra Roasting Co. for excellent specialty coffee.', icon: <Coffee className="w-4 h-4" /> },
      { time: 'Late morning', title: 'Istiklal Street', description: 'Walk to Istiklal Street (15 min). Take the historic red tram up the street!', tips: ['Museum of Innocence - perfect for history buffs', 'About 1 hour, not crowded, very interesting'], icon: <Train className="w-4 h-4" /> },
      { time: 'Lunch', title: 'Side street off Istiklal', description: 'Avoid main drag restaurants. Try Falafel Köy or other local spots.', icon: <Utensils className="w-4 h-4" /> },
      { time: 'Afternoon', title: 'Cihangir + Karaköy', description: 'Wander Cihangir neighborhood - bohemian, artistic. Beautiful cafes with Bosphorus views. Walk down to Karaköy for street art and design shops.', tips: ['Lots of places to sit and rest', 'MOZK vintage store worth checking out'], icon: <Camera className="w-4 h-4" /> },
      { time: 'Afternoon break', title: 'Turkish tea and baklava', description: 'Find a nice cafe. Rest time for everyone.', icon: <Coffee className="w-4 h-4" /> },
      { time: 'Evening', title: 'Meyhane dinner', description: 'Traditional meyhane in Karaköy. Keep it early-ish for jet lag adjustment.', icon: <Wine className="w-4 h-4" /> },
    ]
  },
  {
    day: 3,
    date: 'Sunday, Jan 5',
    title: 'Hagia Sophia + Sultanahmet',
    theme: 'THE history day - all the major sites',
    activities: [
      { time: '9:00am SHARP', title: 'Hagia Sophia', description: '€25 per person. 1,500 years of history - Byzantine → Ottoman. Massive engineering feat with 31m dome.', tips: ['Arrive when it opens - crucial!', 'Dress code: shoulders/knees covered, women need headscarves', 'Photography allowed (no flash)', 'Upper gallery has amazing Byzantine mosaics'], icon: <Building2 className="w-4 h-4" /> },
      { time: '11:00am', title: 'Basilica Cistern', description: 'Ancient underground Byzantine water system from 6th century. Atmospheric and mysterious.', tips: ['Right across from Hagia Sophia', 'Easy walking - flat, underground', '30-45 min visit'], icon: <Waves className="w-4 h-4" /> },
      { time: '12:00pm', title: 'Lunch Break', description: 'Get OUT of Sultanahmet Square for lunch - tourist trap. Walk 5-10 min away to find authentic spots.', icon: <Utensils className="w-4 h-4" /> },
      { time: 'Afternoon', title: 'Choose Your Adventure', description: 'Option A: Topkapi Palace (lots of walking, incredible history). Option B: Süleymaniye Mosque (less walking, equally stunning). Option C: Quick Blue Mosque exterior + Hippodrome, then taxi back.', tips: ['Pace to energy levels', 'Topkapi closed on Tuesdays'], icon: <Compass className="w-4 h-4" /> },
      { time: '4:30-5pm', title: 'Back to hotel', description: 'Everyone can rest. Optional: younger group can explore more Galata/Karaköy.', icon: <Building2 className="w-4 h-4" /> },
      { time: 'Evening', title: 'Relaxed dinner in Galata', description: 'Keep it chill after a big sightseeing day.', icon: <Utensils className="w-4 h-4" /> },
    ]
  },
  {
    day: 4,
    date: 'Monday, Jan 6',
    title: 'SPA DAY',
    theme: 'Relaxation and self-care',
    activities: [
      { time: 'Morning', title: 'Süleymaniye Mosque (optional)', description: 'If you didn\'t visit yesterday. Mimar Sinan masterpiece from 1557. Less crowded than tourist mosques.', tips: ['Beautiful courtyards', 'Everyone should do this one together', '1 hour visit'], icon: <Building2 className="w-4 h-4" /> },
      { time: 'Morning alt', title: 'Relaxed neighborhood time', description: 'Slow morning with coffee. Light walking around Galata at own pace.', icon: <Coffee className="w-4 h-4" /> },
      { time: '2:30-3:00pm', title: 'HAMMAM TIME', description: 'You three only - 90-minute experience. Steam room → full-body scrub (kese) → foam massage → tea.', tips: ['Top pick: Kılıç Ali Paşa Hamamı (Mimar Sinan designed!)', 'Closest: Ağa Hamamı (10-min walk)', 'Bring swimsuit and flip-flops', 'Tip 10-15% for attendant'], icon: <Waves className="w-4 h-4" /> },
      { time: 'While at hammam', title: 'Dad can relax', description: 'Relax at hotel, read, enjoy cafe nearby. Or visit Turkish Hamam Culture Museum in Beyazıt (free, fascinating!).', icon: <Building2 className="w-4 h-4" /> },
      { time: 'Evening', title: 'Reconvene for dinner', description: 'You\'ll feel amazing post-hammam!', icon: <Utensils className="w-4 h-4" /> },
    ]
  },
  {
    day: 5,
    date: 'Tuesday, Jan 7',
    title: 'Asian Side – Kadıköy',
    theme: 'Ferry across continents, local life',
    activities: [
      { time: 'Morning', title: 'Ferry to Kadıköy', description: 'Take ferry from Karaköy/Eminönü (~20 min). Tea vendors on ferry, stunning Bosphorus views.', tips: ['Historical ferry system - cultural experience itself', 'Sit outside for best views'], icon: <Waves className="w-4 h-4" /> },
      { time: 'All morning', title: 'Kadıköy Produce Market', description: 'Colorful, authentic, amazing photos. Fish market, seasonal vegetables, nuts, honeycomb, pickles.', tips: ['Easy walking - flat area', 'Lots of cafes for breaks', 'This is where locals shop'], icon: <Utensils className="w-4 h-4" /> },
      { time: 'Lunch', title: 'Brunch in Kadıköy', description: 'Amazing cafe scene. Modern Turkish cuisine or traditional street food.', icon: <Coffee className="w-4 h-4" /> },
      { time: 'Afternoon', title: 'Moda neighborhood', description: 'Charming tree-lined streets, waterfront promenade. Art galleries, bookstores. Tellalzade Sokak (Antique Street).', tips: ['Pace to energy levels', 'Alternative: Kuzguncuk - quieter, less walking', 'Lots of tea break options'], icon: <Compass className="w-4 h-4" /> },
      { time: 'Late afternoon', title: 'Sunset ferry back', description: 'Magical views as you sail back to Europe!', icon: <Sunset className="w-4 h-4" /> },
      { time: 'Evening', title: 'Relaxed dinner + packing', description: 'Last dinner in Galata. Pack for departure tomorrow.', icon: <Utensils className="w-4 h-4" /> },
    ]
  },
  {
    day: 6,
    date: 'Wednesday, Jan 8',
    title: 'Departure Day',
    theme: 'Balat morning, then airport',
    activities: [
      { time: '9:30-10:00am', title: 'Ferry to Balat', description: 'Light breakfast first, then ferry from Karaköy to Balat.', icon: <Waves className="w-4 h-4" /> },
      { time: 'Morning', title: 'Balat (Jewish Quarter)', description: 'Colorful Ottoman houses - perfect for photos. Historic synagogues (Ahrida Synagogue). Antique shops, local cafes.', tips: ['Cobblestone streets - take it slow', 'Respect residents', 'Great for history buffs'], icon: <Camera className="w-4 h-4" /> },
      { time: 'Late morning', title: 'Fener (Greek Quarter)', description: 'Walk to adjacent Fener. Ecumenical Patriarchate (Greek Orthodox center). Beautiful 19th-century architecture.', icon: <Building2 className="w-4 h-4" /> },
      { time: '~12:00pm', title: 'Light lunch', description: 'Traditional Turkish lunch in Balat/Fener. Or grab börek (savory pastry) from local bakery.', icon: <Utensils className="w-4 h-4" /> },
      { time: '12:30-1:00pm', title: 'Ferry back to Galata', description: 'Back to hotel by 1:30-2pm for final packing.', icon: <Waves className="w-4 h-4" /> },
      { time: '3:30-4:00pm', title: 'Leave for airport', description: 'Traffic buffer built in.', icon: <Navigation className="w-4 h-4" /> },
      { time: '5:00pm', title: 'Airport departure', description: 'Güle güle Istanbul!', icon: <Navigation className="w-4 h-4" /> },
    ]
  },
]

// ============================================
// COMPONENTS
// ============================================

function TabButton({ active, onClick, children, icon }: { active: boolean; onClick: () => void; children: React.ReactNode; icon: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap',
        active
          ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
          : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
      )}
    >
      {icon}
      {children}
    </button>
  )
}

function ExpandableCard({ title, children, defaultOpen = false, icon, badge }: { title: string; children: React.ReactNode; defaultOpen?: boolean; icon?: React.ReactNode; badge?: string }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="bg-bg-card rounded-xl border border-white/10 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors"
      >
        <div className="flex items-center gap-3">
          {icon && <span className="text-orange-400">{icon}</span>}
          <span className="font-medium text-text-primary">{title}</span>
          {badge && <span className="px-2 py-0.5 text-xs rounded-full bg-orange-500/20 text-orange-400">{badge}</span>}
        </div>
        {isOpen ? <ChevronUp className="w-5 h-5 text-text-muted" /> : <ChevronDown className="w-5 h-5 text-text-muted" />}
      </button>
      {isOpen && <div className="px-4 pb-4">{children}</div>}
    </div>
  )
}

function PlaceCard({ place }: { place: Place }) {
  const [expanded, setExpanded] = useState(false)
  const mapsUrl = place.googleMapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.name + ' Istanbul')}`

  return (
    <div className="bg-white/5 rounded-lg overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-4 text-left hover:bg-white/5 transition-colors"
      >
        <div className="flex justify-between items-start gap-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-medium text-text-primary">{place.name}</h4>
              {place.price && <span className="text-xs text-orange-400">{place.price}</span>}
            </div>
            <p className="text-sm text-text-secondary mb-2">{place.description}</p>
            {place.mustTry && (
              <p className="text-sm text-green-400 flex items-center gap-1">
                <Star className="w-3 h-3" /> Must try: {place.mustTry}
              </p>
            )}
            {place.tip && (
              <p className="text-xs text-text-muted mt-1 italic">💡 {place.tip}</p>
            )}
          </div>
          <div className="flex-shrink-0 p-2 rounded-lg bg-orange-500/20 text-orange-400">
            {expanded ? <ChevronUp className="w-4 h-4" /> : <MapPin className="w-4 h-4" />}
          </div>
        </div>
      </button>

      {expanded && (
        <div className="px-4 pb-4 space-y-3">
          {/* Embedded Map */}
          <div className="rounded-lg overflow-hidden border border-white/10 aspect-[4/3]">
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(place.name + ' Istanbul')}&zoom=14`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Open in Maps Button */}
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-orange-500/20 text-orange-400 hover:bg-orange-500/30 transition-colors text-sm"
          >
            <ExternalLink className="w-4 h-4" />
            Open in Google Maps
          </a>
        </div>
      )}
    </div>
  )
}

// ============================================
// SECTIONS
// ============================================

function MapSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null)

  const categories = ['all', 'Street Food', 'Cafe', 'Restaurant', 'Rooftop Bar', 'Sweets', 'Meyhane']

  const filteredPlaces = selectedCategory === 'all'
    ? foodPlaces
    : foodPlaces.filter(p => p.category === selectedCategory)

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          })
        },
        (error) => {
          console.error('Error getting location:', error)
        }
      )
    }
  }

  // Create Google Maps embed URL with markers
  const mapUrl = `https://www.google.com/maps/embed/v1/view?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&center=${GALATA_CENTER.lat},${GALATA_CENTER.lng}&zoom=13&maptype=roadmap`

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-text-primary mb-2">Interactive Map</h2>
        <p className="text-text-secondary">Explore Galata and find the best spots</p>
      </div>

      {/* Map Embed */}
      <div className="rounded-xl overflow-hidden border border-white/10 aspect-video">
        <iframe
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Location Button */}
      <button
        onClick={handleGetLocation}
        className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium hover:opacity-90 transition-opacity"
      >
        <Navigation className="w-5 h-5" />
        {userLocation ? 'Location found!' : 'Find My Location'}
      </button>

      {/* Category Filter */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={cn(
              'px-3 py-1.5 rounded-full text-sm whitespace-nowrap transition-colors',
              selectedCategory === cat
                ? 'bg-orange-500 text-white'
                : 'bg-white/10 text-text-secondary hover:bg-white/20'
            )}
          >
            {cat === 'all' ? 'All Places' : cat}
          </button>
        ))}
      </div>

      {/* Places List */}
      <div className="grid gap-3">
        {filteredPlaces.map((place, i) => (
          <PlaceCard key={i} place={place} />
        ))}
      </div>
    </div>
  )
}

function ItinerarySection() {
  const [expandedDay, setExpandedDay] = useState<number>(1)

  // Map queries for each day's main area
  const dayMapQueries: Record<number, string> = {
    1: 'Galata Tower Istanbul',
    2: 'Istiklal Street Istanbul',
    3: 'Hagia Sophia Istanbul',
    4: 'Galata Istanbul hammam',
    5: 'Kadıköy Istanbul',
    6: 'Balat Istanbul',
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-text-primary mb-2">5-Day Itinerary</h2>
        <p className="text-text-secondary">January 3-8 | Galata-based adventure</p>
        <p className="text-sm text-orange-400 mt-2 flex items-center justify-center gap-2">
          <Heart className="w-4 h-4" /> Curated with love
        </p>
      </div>

      {/* Quick Jump */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {itinerary.map(day => (
          <button
            key={day.day}
            onClick={() => setExpandedDay(day.day)}
            className={cn(
              'px-3 py-2 rounded-lg text-sm whitespace-nowrap transition-all',
              expandedDay === day.day
                ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
                : 'bg-white/10 text-text-secondary hover:bg-white/20'
            )}
          >
            Day {day.day}
          </button>
        ))}
      </div>

      {/* Day Cards */}
      <div className="space-y-4">
        {itinerary.map(day => (
          <div
            key={day.day}
            className={cn(
              'bg-bg-card rounded-xl border overflow-hidden transition-all',
              expandedDay === day.day ? 'border-orange-500/50' : 'border-white/10'
            )}
          >
            <button
              onClick={() => setExpandedDay(expandedDay === day.day ? 0 : day.day)}
              className="w-full p-4 flex items-center justify-between hover:bg-white/5 transition-colors"
            >
              <div className="text-left">
                <div className="flex items-center gap-3 mb-1">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-white font-bold text-sm">
                    {day.day}
                  </span>
                  <div>
                    <h3 className="font-bold text-text-primary">{day.title}</h3>
                    <p className="text-sm text-text-secondary">{day.date}</p>
                  </div>
                </div>
                <p className="text-sm text-orange-400 ml-11">{day.theme}</p>
              </div>
              {expandedDay === day.day ? (
                <ChevronUp className="w-5 h-5 text-text-muted" />
              ) : (
                <ChevronDown className="w-5 h-5 text-text-muted" />
              )}
            </button>

            {expandedDay === day.day && (
              <div className="px-4 pb-4 space-y-3">
                {/* Embedded Map for the day's area */}
                <div className="rounded-lg overflow-hidden border border-white/10 aspect-[4/3]">
                  <iframe
                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(dayMapQueries[day.day] || 'Istanbul')}&zoom=14`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {day.activities.map((activity, i) => (
                  <div key={i} className="flex gap-3 p-3 bg-white/5 rounded-lg">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400">
                      {activity.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs text-orange-400 font-medium">{activity.time}</span>
                      </div>
                      <h4 className="font-medium text-text-primary mb-1">{activity.title}</h4>
                      <p className="text-sm text-text-secondary">{activity.description}</p>
                      {activity.tips && activity.tips.length > 0 && (
                        <ul className="mt-2 space-y-1">
                          {activity.tips.map((tip, j) => (
                            <li key={j} className="text-xs text-text-muted flex items-start gap-1">
                              <Check className="w-3 h-3 text-green-400 flex-shrink-0 mt-0.5" />
                              {tip}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Special Notes */}
      <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-xl p-4 border border-orange-500/20">
        <h3 className="font-bold text-text-primary mb-3 flex items-center gap-2">
          <Info className="w-5 h-5 text-orange-400" />
          Tips for Dad (77, history buff)
        </h3>
        <ul className="space-y-2 text-sm text-text-secondary">
          <li className="flex items-start gap-2">
            <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
            Build in coffee/tea breaks every 1.5-2 hours
          </li>
          <li className="flex items-start gap-2">
            <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
            Ferries are easy - flat, lots of seating
          </li>
          <li className="flex items-start gap-2">
            <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
            Use taxis when needed - very affordable
          </li>
          <li className="flex items-start gap-2">
            <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
            Skip Grand Bazaar - too chaotic and overwhelming
          </li>
          <li className="flex items-start gap-2">
            <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
            Hagia Sophia, Basilica Cistern, Süleymaniye = perfect for history lovers
          </li>
        </ul>
      </div>
    </div>
  )
}

function FoodSection() {
  const categories = ['Street Food', 'Cafe', 'Restaurant', 'Fine Dining', 'Sweets', 'Rooftop Bar', 'Meyhane']

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-text-primary mb-2">Eat & Drink</h2>
        <p className="text-text-secondary">From street food to Michelin stars</p>
      </div>

      {/* Must-Try Dishes */}
      <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-xl p-4 border border-orange-500/20 mb-6">
        <h3 className="font-bold text-text-primary mb-3">Must-Try Dishes</h3>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="bg-white/5 rounded-lg p-3">
            <span className="font-medium text-orange-400">Balık Ekmek</span>
            <p className="text-text-secondary">Fish sandwich - Istanbul's soul food</p>
          </div>
          <div className="bg-white/5 rounded-lg p-3">
            <span className="font-medium text-orange-400">Simit</span>
            <p className="text-text-secondary">Sesame bread ring - perfect breakfast</p>
          </div>
          <div className="bg-white/5 rounded-lg p-3">
            <span className="font-medium text-orange-400">Lahmacun</span>
            <p className="text-text-secondary">Thin lamb "pizza" - roll it up</p>
          </div>
          <div className="bg-white/5 rounded-lg p-3">
            <span className="font-medium text-orange-400">Meze + Rakı</span>
            <p className="text-text-secondary">Small plates + anise liquor</p>
          </div>
          <div className="bg-white/5 rounded-lg p-3">
            <span className="font-medium text-orange-400">Baklava</span>
            <p className="text-text-secondary">Pistachio perfection</p>
          </div>
          <div className="bg-white/5 rounded-lg p-3">
            <span className="font-medium text-orange-400">Turkish Coffee</span>
            <p className="text-text-secondary">Strong, sweet, fortune-telling</p>
          </div>
        </div>
      </div>

      {/* Categories */}
      {categories.map(category => {
        const places = foodPlaces.filter(p => p.category === category)
        if (places.length === 0) return null

        return (
          <ExpandableCard
            key={category}
            title={category}
            badge={`${places.length} spots`}
            icon={
              category === 'Cafe' ? <Coffee className="w-4 h-4" /> :
              category === 'Rooftop Bar' ? <Wine className="w-4 h-4" /> :
              <Utensils className="w-4 h-4" />
            }
          >
            <div className="space-y-3">
              {places.map((place, i) => (
                <PlaceCard key={i} place={place} />
              ))}
            </div>
          </ExpandableCard>
        )
      })}
    </div>
  )
}

function NeighborhoodsSection() {
  const [expandedHood, setExpandedHood] = useState<string | null>(null)

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-text-primary mb-2">Neighborhoods</h2>
        <p className="text-text-secondary">Explore Istanbul's distinct districts</p>
      </div>

      <div className="space-y-4">
        {neighborhoods.map(hood => (
          <div
            key={hood.id}
            className="bg-bg-card rounded-xl border border-white/10 overflow-hidden"
          >
            <div className={cn('h-2 bg-gradient-to-r', hood.gradient)} />
            <button
              onClick={() => setExpandedHood(expandedHood === hood.id ? null : hood.id)}
              className="w-full p-4 text-left hover:bg-white/5 transition-colors"
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-bold text-text-primary text-lg">{hood.name}</h3>
                  <p className="text-sm text-orange-400">{hood.tagline}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-text-muted bg-white/5 px-2 py-1 rounded">
                    {hood.walkingTime}
                  </span>
                  {expandedHood === hood.id ? (
                    <ChevronUp className="w-4 h-4 text-text-muted" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-text-muted" />
                  )}
                </div>
              </div>
              <p className="text-sm text-text-secondary mb-3">{hood.description}</p>
              <div className="flex flex-wrap gap-2">
                {hood.highlights.map(h => (
                  <span key={h} className="text-xs bg-white/10 text-text-secondary px-2 py-1 rounded">
                    {h}
                  </span>
                ))}
              </div>
            </button>

            {expandedHood === hood.id && (
              <div className="px-4 pb-4 space-y-3">
                {/* Embedded Map */}
                <div className="rounded-lg overflow-hidden border border-white/10 aspect-[4/3]">
                  <iframe
                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(hood.name + ' Istanbul')}&zoom=13`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* Open in Maps Button */}
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hood.name + ' Istanbul')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-orange-500/20 text-orange-400 hover:bg-orange-500/30 transition-colors text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  Explore in Google Maps
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function ExperiencesSection() {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-text-primary mb-2">Experiences</h2>
        <p className="text-text-secondary">Unforgettable Istanbul moments</p>
      </div>

      {/* Photo Spots */}
      <ExpandableCard
        title="Best Photo Spots"
        icon={<Camera className="w-4 h-4" />}
        badge={`${photoSpots.length} spots`}
        defaultOpen
      >
        <div className="space-y-3">
          {photoSpots.map((spot, i) => (
            <div key={i} className="bg-white/5 rounded-lg p-3">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-text-primary">{spot.name}</h4>
                  <p className="text-sm text-text-secondary">{spot.description}</p>
                  <div className="flex items-center gap-4 mt-2 text-xs">
                    <span className="text-orange-400 flex items-center gap-1">
                      <Sun className="w-3 h-3" /> {spot.bestTime}
                    </span>
                  </div>
                  {spot.tip && <p className="text-xs text-text-muted mt-1">💡 {spot.tip}</p>}
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${spot.coords.lat},${spot.coords.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-orange-500/20 text-orange-400 hover:bg-orange-500/30"
                >
                  <MapPin className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </ExpandableCard>

      {/* Experiences */}
      {experiences.map(exp => (
        <ExpandableCard
          key={exp.id}
          title={exp.title}
          icon={exp.icon}
          badge={`${exp.places.length} options`}
        >
          <div className="space-y-4">
            <p className="text-sm text-text-secondary">{exp.description}</p>

            <div className="space-y-3">
              {exp.places.map((place, i) => (
                <div key={i} className="bg-white/5 rounded-lg p-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium text-text-primary">{place.name}</h4>
                        <span className="text-xs text-green-400">{place.price}</span>
                      </div>
                      <p className="text-sm text-text-secondary">{place.description}</p>
                      {place.tip && <p className="text-xs text-text-muted mt-1">💡 {place.tip}</p>}
                    </div>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.name + ' Istanbul')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-orange-500/20 text-orange-400 hover:bg-orange-500/30"
                    >
                      <MapPin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {exp.tips && (
              <div className="bg-orange-500/10 rounded-lg p-3">
                <h5 className="text-sm font-medium text-orange-400 mb-2">Tips</h5>
                <ul className="space-y-1">
                  {exp.tips.map((tip, i) => (
                    <li key={i} className="text-xs text-text-secondary flex items-start gap-2">
                      <Check className="w-3 h-3 text-green-400 flex-shrink-0 mt-0.5" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </ExpandableCard>
      ))}
    </div>
  )
}

function PracticalSection() {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-text-primary mb-2">Practical Info</h2>
        <p className="text-text-secondary">Everything you need to know</p>
      </div>

      {/* Transport */}
      <ExpandableCard title="Getting Around" icon={<Train className="w-4 h-4" />} defaultOpen>
        <div className="space-y-3">
          {practicalInfo.transport.map((item, i) => (
            <div key={i} className="bg-white/5 rounded-lg p-3">
              <h4 className="font-medium text-text-primary mb-1">{item.title}</h4>
              <p className="text-sm text-text-secondary">{item.description}</p>
              <p className="text-xs text-orange-400 mt-1">💡 {item.tip}</p>
            </div>
          ))}
        </div>
      </ExpandableCard>

      {/* Mosque Etiquette */}
      <ExpandableCard title="Mosque Etiquette" icon={<Building2 className="w-4 h-4" />}>
        <div className="space-y-3">
          {practicalInfo.mosques.map((item, i) => (
            <div key={i} className="bg-white/5 rounded-lg p-3">
              <h4 className="font-medium text-text-primary mb-1">{item.title}</h4>
              <p className="text-sm text-text-secondary">{item.description}</p>
              <p className="text-xs text-orange-400 mt-1">💡 {item.tip}</p>
            </div>
          ))}
        </div>
      </ExpandableCard>

      {/* Money */}
      <ExpandableCard title="Money Matters" icon={<CreditCard className="w-4 h-4" />}>
        <div className="space-y-3">
          {practicalInfo.money.map((item, i) => (
            <div key={i} className="bg-white/5 rounded-lg p-3">
              <h4 className="font-medium text-text-primary mb-1">{item.title}</h4>
              <p className="text-sm text-text-secondary">{item.description}</p>
              <p className="text-xs text-orange-400 mt-1">💡 {item.tip}</p>
            </div>
          ))}
        </div>
      </ExpandableCard>

      {/* Useful Phrases */}
      <ExpandableCard title="Useful Turkish Phrases" icon={<Smartphone className="w-4 h-4" />}>
        <div className="space-y-2">
          {practicalInfo.phrases.map((phrase, i) => (
            <div key={i} className="bg-white/5 rounded-lg p-3 flex justify-between items-center">
              <div>
                <span className="font-medium text-text-primary">{phrase.turkish}</span>
                <span className="text-text-muted mx-2">—</span>
                <span className="text-text-secondary">{phrase.english}</span>
              </div>
              <span className="text-xs text-orange-400 italic">{phrase.pronunciation}</span>
            </div>
          ))}
        </div>
      </ExpandableCard>

      {/* Emergency */}
      <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/20">
        <h3 className="font-bold text-text-primary mb-3 flex items-center gap-2">
          <Phone className="w-5 h-5 text-red-400" />
          Emergency Numbers
        </h3>
        <p className="text-xs text-text-muted mb-3">Tap to call</p>
        <div className="space-y-2">
          <a href="tel:112" className="flex justify-between items-center p-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 transition-colors">
            <span className="text-text-secondary text-sm">Emergency (all)</span>
            <span className="text-red-400 font-bold">112</span>
          </a>
          <a href="tel:155" className="flex justify-between items-center p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
            <span className="text-text-secondary text-sm">Police</span>
            <span className="text-text-primary font-medium">155</span>
          </a>
          <a href="tel:+902125274503" className="flex justify-between items-center p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
            <span className="text-text-secondary text-sm">Tourist Police</span>
            <span className="text-text-primary font-medium">+90 212 527 4503</span>
          </a>
          <a href="tel:110" className="flex justify-between items-center p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
            <span className="text-text-secondary text-sm">Fire</span>
            <span className="text-text-primary font-medium">110</span>
          </a>
          <a href="tel:+902124573500" className="flex justify-between items-center p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
            <span className="text-text-secondary text-sm">US Consulate</span>
            <span className="text-text-primary font-medium text-xs">+90 212 457 3500</span>
          </a>
        </div>
        <p className="text-xs text-text-muted mt-3">
          Pharmacies (Eczane) have green cross signs. Many speak English.
        </p>
      </div>
    </div>
  )
}

function HistoricalSection() {
  const [expandedSite, setExpandedSite] = useState<string | null>(null)

  // Rank sites by importance (this order is based on historical significance and must-see status)
  const rankedSites = [
    { ...historicalSites.find(s => s.id === 'hagia-sophia')!, rank: 1, mustSee: true },
    { ...historicalSites.find(s => s.id === 'topkapi')!, rank: 2, mustSee: true },
    { ...historicalSites.find(s => s.id === 'blue-mosque')!, rank: 3, mustSee: true },
    { ...historicalSites.find(s => s.id === 'basilica-cistern')!, rank: 4, mustSee: true },
    { ...historicalSites.find(s => s.id === 'suleymaniye')!, rank: 5, mustSee: true },
    { ...historicalSites.find(s => s.id === 'galata-tower')!, rank: 6, mustSee: true },
    { ...historicalSites.find(s => s.id === 'grand-bazaar')!, rank: 7, mustSee: false },
    { ...historicalSites.find(s => s.id === 'dolmabahce')!, rank: 8, mustSee: false },
    { ...historicalSites.find(s => s.id === 'chora')!, rank: 9, mustSee: false },
    { ...historicalSites.find(s => s.id === 'hippodrome')!, rank: 10, mustSee: false },
  ]

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-text-primary mb-2">Historical Musts</h2>
        <p className="text-text-secondary">10 essential sites ranked by significance</p>
        <p className="text-xs text-orange-400 mt-2">Deep-dive into 1,500+ years of history</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl p-3 text-center border border-orange-500/20">
          <div className="text-2xl font-bold text-orange-400">6</div>
          <div className="text-xs text-text-secondary">Must-See</div>
        </div>
        <div className="bg-white/5 rounded-xl p-3 text-center border border-white/10">
          <div className="text-2xl font-bold text-text-primary">4</div>
          <div className="text-xs text-text-secondary">If Time Permits</div>
        </div>
        <div className="bg-white/5 rounded-xl p-3 text-center border border-white/10">
          <div className="text-2xl font-bold text-text-primary">3</div>
          <div className="text-xs text-text-secondary">Free Entry</div>
        </div>
      </div>

      {/* Site Cards */}
      <div className="space-y-4">
        {rankedSites.map((site) => (
          <div
            key={site.id}
            className={cn(
              'bg-bg-card rounded-xl border overflow-hidden transition-all',
              site.mustSee ? 'border-orange-500/30' : 'border-white/10'
            )}
          >
            {/* Header */}
            <button
              onClick={() => setExpandedSite(expandedSite === site.id ? null : site.id)}
              className="w-full p-4 text-left hover:bg-white/5 transition-colors"
            >
              <div className="flex items-start gap-3">
                {/* Rank Badge */}
                <div className={cn(
                  'w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0',
                  site.mustSee
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
                    : 'bg-white/10 text-text-secondary'
                )}>
                  {site.rank}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-text-primary">{site.name}</h3>
                    {site.mustSee && (
                      <span className="px-2 py-0.5 text-xs rounded-full bg-orange-500/20 text-orange-400">Must-See</span>
                    )}
                  </div>
                  <p className="text-sm text-text-muted">{site.turkishName} • {site.era}</p>

                  {/* Quick Info Row */}
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs">
                    <span className="text-green-400">{site.visitInfo.price}</span>
                    <span className="text-text-secondary">{site.visitInfo.duration}</span>
                    <span className="text-text-muted">
                      {site.fromGalata.walking} walk
                    </span>
                  </div>
                </div>

                {expandedSite === site.id ? (
                  <ChevronUp className="w-5 h-5 text-text-muted flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-text-muted flex-shrink-0" />
                )}
              </div>
            </button>

            {/* Expanded Content */}
            {expandedSite === site.id && (
              <div className="px-4 pb-4 space-y-4">
                {/* Hero Image */}
                <div className="relative rounded-lg overflow-hidden aspect-video bg-white/5">
                  <img
                    src={site.imageUrl}
                    alt={site.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                    <p className="text-xs text-white/70">Photo: Wikimedia Commons</p>
                  </div>
                </div>

                {/* Embedded Map */}
                <div className="rounded-lg overflow-hidden border border-white/10 aspect-[4/3]">
                  <iframe
                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(site.name + ' Istanbul')}&zoom=14`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* Distance from Galata */}
                <div className="bg-white/5 rounded-lg p-3">
                  <h4 className="text-sm font-medium text-text-primary mb-2 flex items-center gap-2">
                    <Navigation className="w-4 h-4 text-orange-400" />
                    From Galata Tower
                  </h4>
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div>
                      <div className="text-sm font-medium text-text-primary">{site.fromGalata.walking}</div>
                      <div className="text-xs text-text-muted">Walking</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-text-primary">{site.fromGalata.transit}</div>
                      <div className="text-xs text-text-muted">Transit</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-text-primary">{site.fromGalata.distance}</div>
                      <div className="text-xs text-text-muted">Distance</div>
                    </div>
                  </div>
                </div>

                {/* Visit Info */}
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="text-text-muted">Entry:</span>
                      <span className="text-text-primary ml-2">{site.visitInfo.price}</span>
                    </div>
                    <div>
                      <span className="text-text-muted">Duration:</span>
                      <span className="text-text-primary ml-2">{site.visitInfo.duration}</span>
                    </div>
                    <div>
                      <span className="text-text-muted">Closed:</span>
                      <span className="text-text-primary ml-2">{site.visitInfo.closedDay}</span>
                    </div>
                    <div>
                      <span className="text-text-muted">Dress Code:</span>
                      <span className="text-text-primary ml-2">{site.visitInfo.dressCode ? 'Yes' : 'No'}</span>
                    </div>
                  </div>
                </div>

                {/* Quick Facts */}
                <div className="bg-orange-500/10 rounded-lg p-3 border border-orange-500/20">
                  <h4 className="text-sm font-medium text-orange-400 mb-2">Quick Facts</h4>
                  <ul className="space-y-1">
                    {site.quickFacts.map((fact, i) => (
                      <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                        <Star className="w-3 h-3 text-orange-400 flex-shrink-0 mt-1" />
                        {fact}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Full Description */}
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-text-primary flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-orange-400" />
                    Why It's Incredible
                  </h4>
                  {site.description.map((paragraph, i) => (
                    <p key={i} className="text-sm text-text-secondary leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${site.coords.lat},${site.coords.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/10 text-text-primary hover:bg-white/20 transition-colors text-sm"
                  >
                    <MapPin className="w-4 h-4" />
                    Open Maps
                  </a>
                  <a
                    href={site.wikipediaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-orange-500/20 text-orange-400 hover:bg-orange-500/30 transition-colors text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Wikipedia
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Pro Tips */}
      <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-xl p-4 border border-orange-500/20">
        <h3 className="font-bold text-text-primary mb-3 flex items-center gap-2">
          <Landmark className="w-5 h-5 text-orange-400" />
          Pro Tips for History Lovers
        </h3>
        <ul className="space-y-2 text-sm text-text-secondary">
          <li className="flex items-start gap-2">
            <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
            Visit Hagia Sophia right when it opens (9am) to beat the crowds
          </li>
          <li className="flex items-start gap-2">
            <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
            Combine Blue Mosque + Hagia Sophia + Basilica Cistern in one morning
          </li>
          <li className="flex items-start gap-2">
            <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
            Topkapi Palace is closed Tuesdays—plan accordingly
          </li>
          <li className="flex items-start gap-2">
            <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
            Süleymaniye is less crowded and equally stunning as Blue Mosque
          </li>
          <li className="flex items-start gap-2">
            <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
            Chora Church is far but has the best Byzantine mosaics anywhere
          </li>
        </ul>
      </div>
    </div>
  )
}

// ============================================
// MAIN APP
// ============================================

export default function Istanbul() {
  const [activeTab, setActiveTab] = useState<string>('itinerary')

  const tabs = [
    { id: 'itinerary', label: 'Itinerary', icon: <Calendar className="w-4 h-4" /> },
    { id: 'history', label: 'History', icon: <Landmark className="w-4 h-4" /> },
    { id: 'map', label: 'Map', icon: <MapPin className="w-4 h-4" /> },
    { id: 'food', label: 'Eat & Drink', icon: <Utensils className="w-4 h-4" /> },
    { id: 'neighborhoods', label: 'Areas', icon: <Compass className="w-4 h-4" /> },
    { id: 'experiences', label: 'Do', icon: <Camera className="w-4 h-4" /> },
    { id: 'practical', label: 'Info', icon: <Info className="w-4 h-4" /> },
  ]

  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-bg-primary/95 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-2xl mx-auto px-4 py-3">
          <div className="flex items-center gap-4 mb-3">
            <a
              href={`${BASE_PATH}/`}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-text-secondary" />
            </a>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Istanbul Guide
              </h1>
              <p className="text-xs text-text-muted">Galata & Beyond</p>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-1 overflow-x-auto pb-1 scrollbar-hide -mx-4 px-4">
            {tabs.map(tab => (
              <TabButton
                key={tab.id}
                active={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
                icon={tab.icon}
              >
                {tab.label}
              </TabButton>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 py-6">
        {activeTab === 'itinerary' && <ItinerarySection />}
        {activeTab === 'history' && <HistoricalSection />}
        {activeTab === 'map' && <MapSection />}
        {activeTab === 'food' && <FoodSection />}
        {activeTab === 'neighborhoods' && <NeighborhoodsSection />}
        {activeTab === 'experiences' && <ExperiencesSection />}
        {activeTab === 'practical' && <PracticalSection />}
      </div>
    </div>
  )
}
