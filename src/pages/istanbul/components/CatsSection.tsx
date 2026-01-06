import { useState } from 'react'
import {
  ChevronDown, ChevronUp, Heart, MapPin, Calendar,
  Shield, Users, Camera, AlertTriangle, Building2,
  BookOpen, TrendingUp, Scale, Clock, Sparkles,
  Star, ExternalLink
} from 'lucide-react'
import { cn } from '@/lib/utils'

// Cat icon SVG since lucide doesn't have one
const CatIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3.1-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z" />
    <path d="M8 14v.5" />
    <path d="M16 14v.5" />
    <path d="M11.25 16.25h1.5L12 17l-.75-.75Z" />
  </svg>
)

interface CatTopic {
  id: string
  title: string
  icon: React.ReactNode
  summary: string
  content: string[]
  highlights?: { label: string; value: string }[]
  images?: { url: string; caption: string }[]
}

const catTopics: CatTopic[] = [
  {
    id: 'intro',
    title: 'The Cat Capital of the World',
    icon: <CatIcon className="w-5 h-5" />,
    summary: 'Istanbul is home to 125,000 to over 1 million street cats who have lived alongside humans for more than two millennia.',
    content: [
      'Unlike stray animals in most cities, Istanbul\'s cats are not unwanted outcasts—they are communally owned, religiously revered, and culturally celebrated residents who embody the soul of the ancient city itself.',
      'This extraordinary relationship between humans and felines, rooted in Byzantine practicality, Ottoman charity, Islamic theology, and modern Turkish law, represents a unique paradigm for urban coexistence found nowhere else on Earth.',
      'The cats are called "sokak kedisi" (street cats) but locals prefer to think of them as belonging to everyone and no one—community cats that reflect the city\'s soul back to its human inhabitants.'
    ],
    highlights: [
      { label: 'Population', value: '125K-1M+' },
      { label: 'History', value: '2,000+ years' },
      { label: 'Status', value: 'Protected' }
    ]
  },
  {
    id: 'byzantine',
    title: 'Byzantine Origins',
    icon: <Building2 className="w-5 h-5" />,
    summary: 'The story begins not with Ottoman sultans but with Byzantine merchants who recognized cats as essential partners in urban survival.',
    content: [
      'Archaeological excavations during the construction of the Marmaray rail tunnel (2004-2014) unearthed numerous cat skeletons dating to the Byzantine era, revealing that felines lived "in pretty good conditions compared to those in Europe" with no pathological disorders—evidence of deliberate care rather than mere tolerance.',
      'Professor Vedat Onar and Professor Altan Armutak of Cerrahpaşa University analyzed these remains and discovered cats concentrated around fishmongers in districts like Kumkapı, Yenikapı, and Aksaray, suggesting an already-established pattern of merchants feeding strays.',
      'The contrast with medieval Europe proves instructive. While Pope Gregory IX\'s 1233 decree "Vox in Rama" made cat extermination obligatory—claiming the devil peered through their eyes—Constantinople\'s cats flourished. Professor Armutak notes that "there weren\'t plagues that lasted months and years in Byzantine lands" thanks to cat populations controlling rodents.'
    ],
    highlights: [
      { label: 'Era', value: '4th-15th century' },
      { label: 'Key Finding', value: 'No pathological disorders' },
      { label: 'Protection', value: 'Plague prevention' }
    ]
  },
  {
    id: 'ottoman',
    title: 'Ottoman Compassion',
    icon: <Heart className="w-5 h-5" />,
    summary: 'The Ottomans transformed informal cat care into state-sponsored animal welfare funded through the Islamic waqf system.',
    content: [
      'By the early 1800s, more than half of all arable land in the Ottoman Empire was classified as waqf, and a portion of these inalienable endowments was dedicated specifically to animal care. Special waqfs established houses for dogs and cats throughout cities, paid workers to supply food and water daily, and even funded animal clinics from the 1700s onward.',
      'Some waqf deeds specified that "cats near mosques must be provided with liver every day." Sultan Bayezid II\'s foundation purchased bread for both cats and dogs and mandated that injured animals "were to be cared for and treated."',
      'The mancacı system professionalized street feeding. These vendors would buy liver, spleen, and hearts from butchers each morning, cook them, and walk through neighborhoods crying "Dog food!" and "Cat manca!" Wealthy families hired mancacılar on certain days to ensure every animal in their neighborhood was fed.',
      'Sultan Abdul Hamid II (r. 1876-1909) kept 1,500 cats of different breeds at Yıldız Palace, including 12 Persian cats specially brought from Van and Ankara. His daughter Ayşe Sultan wrote about the royal cat "Agha Effendi," a white Angora "so spoiled that he wouldn\'t eat unless his food was served to him with a fork."'
    ],
    highlights: [
      { label: 'Waqf System', value: '50%+ of land' },
      { label: 'Palace Cats', value: '1,500' },
      { label: 'Animal Clinics', value: 'Since 1700s' }
    ]
  },
  {
    id: 'islam',
    title: 'Islamic Reverence',
    icon: <Sparkles className="w-5 h-5" />,
    summary: 'Islamic jurisprudence grants cats a unique status: they are ritually clean (tahir) and may enter mosques freely.',
    content: [
      'The primary legal basis comes from an authenticated hadith: Abu Qatadah explained that the Messenger of Allah said: "They (cats) are not impure (najis). They are among those who go around among you." This designation means cats\' saliva does not contaminate food or water, and water from which cats have drunk is permitted for wudu (ritual ablution).',
      'Abu Hurayrah, one of the most prolific narrators of hadith with over 5,000 recorded traditions, received his very name—meaning "Father of the Kitten"—from Prophet Muhammad himself because he cared for a small male cat.',
      'The Quran contains severe warnings against cruelty to cats. One authenticated hadith in Sahih al-Bukhari states: "A woman was tortured and was put in Hell because of a cat which she had kept locked till it died of hunger." A popular Turkish saying warns: "If you\'ve killed a cat, you need to build a mosque to be forgiven by God."'
    ],
    highlights: [
      { label: 'Status', value: 'Ritually Clean' },
      { label: 'Mosque Access', value: 'Permitted' },
      { label: 'Cruelty', value: 'Severely forbidden' }
    ]
  },
  {
    id: 'geography',
    title: 'The Perfect Cat City',
    icon: <MapPin className="w-5 h-5" />,
    summary: 'Istanbul\'s geography, climate, and urban fabric create ideal feline habitat.',
    content: [
      'As a major port astride the Bosphorus Strait, connecting the Mediterranean and Black Sea, the city received continuous feline immigration for millennia. Ship\'s cats kept on merchant vessels to control rodents would disembark during the weeks vessels stayed docked. Many never returned, spreading throughout the city\'s warrens.',
      'The urban fabric itself creates ideal feline habitat. The vast majority of Istanbul\'s historic houses were made of wood, which gave shelter and enabled the proliferation of mouse and rat populations. This made cats\' presence a necessity. Ottoman-era mosques feature open courtyards where cats have lived among worshippers for centuries.',
      'Istanbul\'s modified Mediterranean climate—averaging 6.2°C in January and 25.8°C in August—rarely drops below -6°C or rises above 33°C, making year-round outdoor survival feasible. Community support intensifies during winter with municipalities building wooden cat houses (kedi evi) throughout the city.'
    ],
    highlights: [
      { label: 'Winter Avg', value: '6.2°C' },
      { label: 'Summer Avg', value: '25.8°C' },
      { label: 'Key Feature', value: 'Maritime port' }
    ]
  },
  {
    id: 'law',
    title: 'Turkish Animal Law',
    icon: <Scale className="w-5 h-5" />,
    summary: 'Turkey\'s Animal Protection Law No. 5199 (2004) established one of the world\'s most progressive frameworks for street animal welfare.',
    content: [
      'Article 1 defines its purpose as "ensuring that animals are afforded a comfortable life and receive good and proper treatment, to protect them in the best manner possible from the infliction of pain, suffering and torture." Article 4 declares: "All animals are born equal and have a right to life within the framework of this Law."',
      'The law mandated municipalities to sterilize, vaccinate, and return stray animals to their place of origin—the CNVR (Catch-Neuter-Vaccinate-Return) method. Crucially, euthanasia was banned except for incurable diseases, establishing Turkey\'s no-kill policy.',
      'A 2021 amendment further elevated animal status, reclassifying them from "commodities" to "living beings" under Turkish law. Criminal penalties of 6 months to 4 years imprisonment now apply for crimes against animals. Pet shops were banned from selling cats and dogs.',
      'A controversial 2024 amendment sparked massive protests. A Change.org petition against it gathered over 6 million signatures—Turkey\'s most popular campaign in 2024. A Metropoll survey found only 2.7% of Turks support euthanasia, while 63% believe the government should find solutions without killing animals.'
    ],
    highlights: [
      { label: 'Law', value: 'No. 5199 (2004)' },
      { label: 'Method', value: 'CNVR' },
      { label: 'Petition', value: '6M+ signatures' }
    ]
  },
  {
    id: 'population',
    title: 'Population & Demographics',
    icon: <Users className="w-5 h-5" />,
    summary: 'Official estimates range from 125,000 to over 1 million street cats across the city.',
    content: [
      'Istanbul Metropolitan Municipality (2018) estimates approximately 165,000 stray cats. The Istanbul Chamber of Veterinary Surgeons suggests over 200,000 cats. Animal rescuers\' assessments (2024-2025) indicate actual numbers likely more than double official figures.',
      'The European side\'s Cihangir district (Beyoğlu) has earned the nickname "cat capital," a bohemian neighborhood with dense feline populations and strong community feeding networks. Nearby Galata, Sultanahmet, Karaköy, and Beyazıt all host significant populations.',
      'On the Asian side, Kadıköy/Moda rivals Cihangir\'s fame—home to the legendary Tombili—with bookstores and cafés treating cats "almost like family." Parks including Göztepe Park and Maçka Park support large colonies.',
      'Most Istanbul street cats are domestic shorthairs (mixed breeds) displaying diverse characteristics: tabby patterns, calico, tortoiseshell, tuxedo, and solid colors. Native Turkish breeds—the Turkish Van (known for heterochromia and water affinity) and Turkish Angora (elegant, long-haired)—exist but remain rare among street populations.'
    ],
    highlights: [
      { label: 'Official Est.', value: '~165,000' },
      { label: 'Cat Capital', value: 'Cihangir' },
      { label: 'Common Type', value: 'Mixed breeds' }
    ]
  },
  {
    id: 'veterinary',
    title: 'Municipal Veterinary Care',
    icon: <Shield className="w-5 h-5" />,
    summary: 'Istanbul operates 6 veterinary hospitals, mobile clinics, and 39 animal shelters—all free for strays.',
    content: [
      'Istanbul Metropolitan Municipality operates an impressive veterinary infrastructure: 6 veterinary hospitals distributed across the city, 1 mobile Vetbüs (converted bus serving as mobile clinic, operational since 2018), 1 Vetkabin and 1 Motovet mobile units, 29 animal transportation vehicles, 384 total personnel including 79 veterinarians, and 39 animal shelters with total capacity of 16,700 animals.',
      'All services are free of charge for stray animals, including sterilization (keyhole surgery for faster recovery), vaccination, microchipping, and emergency care. In 2019, 139,910 stray animals received veterinary services, and 32,435 were microchipped.',
      'TNR (Trap-Neuter-Return) serves as the official population management method. Neutered cats receive a small triangular notch ("ear tip") on one ear for identification.',
      'Istanbul reports no rabies cases since 2016, though Turkey remains classified as a high-risk country by the CDC, with dogs (not cats) as the principal vector. Standard cat vaccination includes protection against Feline Panleukopenia, Calicivirus, Rhinotracheitis, and rabies.'
    ],
    highlights: [
      { label: 'Hospitals', value: '6' },
      { label: 'Veterinarians', value: '79' },
      { label: 'Rabies Cases', value: '0 since 2016' }
    ]
  },
  {
    id: 'community',
    title: 'Kedi Annesi Tradition',
    icon: <Heart className="w-5 h-5" />,
    summary: 'The "kedi annesi" (cat mother) tradition dates to Ottoman times—informal caretakers who feed and monitor neighborhood cats.',
    content: [
      'The Turkish tradition of "kedi annesi" (cat mother) and "kedi babası" (cat father)—informal caretakers who feed neighborhood cats—dates to Ottoman times. These individuals, often elderly residents, maintain feeding schedules, build shelters, monitor cat health, and coordinate veterinary care.',
      'The municipality supports this culture with 199 official feeding stations across Istanbul, distributing approximately 1 ton of dry food daily (149 tons annually). Pet food vending machines allow citizens to insert coins to dispense food.',
      'The innovative Pugedon machines, invented by Engin Girgin, dispense pet food when plastic bottles are deposited for recycling—now implemented in 29 countries.',
      'Local businesses commonly maintain food stations and provide shelter—restaurants save portions for local cats, hotels care for resident felines, and fish markets set aside scraps. Bright-painted wooden "kedi evi" (cat houses) shelter cats from weather throughout the city.'
    ],
    highlights: [
      { label: 'Feeding Stations', value: '199' },
      { label: 'Daily Food', value: '~1 ton' },
      { label: 'Pugedon', value: '29 countries' }
    ]
  },
  {
    id: 'celebrities',
    title: 'Famous Istanbul Cats',
    icon: <Star className="w-5 h-5" />,
    summary: 'From Tombili\'s bronze statue to Gli\'s 118,000 Instagram followers, Istanbul\'s cats are global celebrities.',
    content: [
      'TOMBILI: A tabby cat from Kadıköy\'s Ziverbey neighborhood became a global phenomenon for her distinctive way of leaning against steps, one paw draped over her tubby white belly. After she died of kidney failure on August 1, 2016, a Change.org campaign gathered over 17,000 signatures for a commemorative sculpture. The bronze statue was unveiled on October 4, 2016 (World Animal Day) at the exact spot of the famous photo.',
      'GLI: A cross-eyed domestic shorthair born around 2004, Gli lived her entire 16 years at Hagia Sophia. She first gained international fame when cameras captured Barack Obama and Turkish President Erdoğan petting her during Obama\'s 2009 visit. Her Instagram account @hagiasophiacat accumulated over 118,000 followers before she died on November 7, 2020.',
      'THE KEDI DOCUMENTARY: Director Ceyda Torun\'s 2016 documentary "Kedi" (Turkish for "Cat") brought Istanbul\'s cat culture to global audiences. The film achieved a 98% Rotten Tomatoes rating, grossed over $5 million worldwide, and Time Magazine named it one of the top ten films of 2017.',
      'The film follows seven protagonists: Sarı (the hustler), Duman (who paws at windows but never enters), Bengü, Aslan Parçası (the mischievous one), Gamsız (the boss), Psikopat (the fearsome one), and Deniz.'
    ],
    highlights: [
      { label: 'Tombili Petition', value: '17,000+' },
      { label: 'Gli Followers', value: '118,000+' },
      { label: 'Kedi Rating', value: '98% RT' }
    ]
  },
  {
    id: 'safety',
    title: 'Is It Safe to Pet Them?',
    icon: <AlertTriangle className="w-5 h-5" />,
    summary: 'Generally yes, with precautions. Istanbul\'s cats are famously friendly thanks to generations of positive human contact.',
    content: [
      'DISEASE CONSIDERATIONS: Turkey remains CDC-classified as high-risk for rabies, though Istanbul reports no cases since 2016. Cat Scratch Disease (Bartonella) affects approximately 40% of cats. Ringworm and fleas are common among strays.',
      'APPROACH SAFELY: Let cats come to you. Extend your hand slowly, palm down, allowing the cat to sniff before petting. Safe zones include back of head, chin, cheeks, and along the back. Avoid bellies. Recognize warning signs: flattened ears, puffed tail, hissing, arched back with raised fur.',
      'HYGIENE ESSENTIALS: Wash hands immediately with soap for 20 seconds after contact. Carry alcohol-based sanitizer. Avoid touching your face. Don\'t allow cats to lick open wounds.',
      'IF SCRATCHED OR BITTEN: Wash the wound immediately with soap and running water for at least 5 minutes. Apply antiseptic. Seek medical care within 8 hours—30% of people treated for cat bites on hands require hospitalization. Emergency number: 112. English-speaking hospitals include Acıbadem, Medical Park, and Memorial.'
    ],
    highlights: [
      { label: 'Rabies Risk', value: 'Low in Istanbul' },
      { label: 'Hand Washing', value: '20+ seconds' },
      { label: 'Emergency', value: '112' }
    ]
  },
  {
    id: 'feeding',
    title: 'Feeding Etiquette',
    icon: <Heart className="w-5 h-5" />,
    summary: 'Feeding street cats is culturally celebrated. Cat food is readily available at any Turkish supermarket.',
    content: [
      'Feeding street cats is culturally celebrated in Istanbul. Cat food (kuru mama) is readily available and affordable at any Turkish supermarket—look for Migros, CarrefourSA, A101, or BİM.',
      'APPROPRIATE FOODS: Commercial dry/wet cat food (best option), plain cooked chicken without bones.',
      'FOODS TO AVOID: Raw meat, fish with bones, dairy products (most cats are lactose intolerant), anything seasoned, and especially onion, garlic, or chocolate (all toxic to cats).',
      'Many locals keep bags of dry food in their cars or bags to distribute while walking through neighborhoods. You\'ll often see communal food and water bowls on sidewalks—feel free to top them up!'
    ],
    highlights: [
      { label: 'Best Food', value: 'Dry cat food' },
      { label: 'Supermarkets', value: 'Migros, A101, BİM' },
      { label: 'Toxic Foods', value: 'Onion, garlic, chocolate' }
    ]
  },
  {
    id: 'tourism',
    title: 'Cat Tourism',
    icon: <Camera className="w-5 h-5" />,
    summary: 'Cat tourism is a recognized phenomenon with dedicated tours, museums, and cat cafes.',
    content: [
      'THE CAT MUSEUM: Istanbul\'s first animal-themed museum opened in October 2023 in Beşiktaş. Founded by poet Sunay Akın, it features a collection spanning 15 years of research on cats in fairy tales, toys, and comics. Half of profits support stray cat welfare. A second Cat Museum in Galata documents cats\' interaction with the city through local and international artists.',
      'CAT CAFES: İki Kedi Kafe in Moda (named for two cats forming a yin-yang) and Catmosfer Cat Cafe are popular spots to interact with resident felines while enjoying Turkish coffee.',
      'CAT TOURS: Tour operators offer dedicated cat tours visiting Kadıköy, the Tombili statue, and the Princes\' Islands. "Istanbul Cat Tour" by The Other Tour is well-reviewed.',
      'SOCIAL MEDIA: Follow @catsofistanbul (nearly 24,000 followers) and @istanbulcatsoffical (13,000+ followers) for daily feline content. The hashtags #CatsOfIstanbul and #CityOfCats aggregate countless tourist photographs.'
    ],
    highlights: [
      { label: 'Cat Museum', value: 'Beşiktaş (2023)' },
      { label: 'Popular Cafe', value: 'İki Kedi Kafe' },
      { label: 'Hashtag', value: '#CatsOfIstanbul' }
    ]
  },
  {
    id: 'philosophy',
    title: 'The Philosophy of Coexistence',
    icon: <BookOpen className="w-5 h-5" />,
    summary: '"In Istanbul, cats are the mirrors to the people, allowing them to reflect on their lives in ways nothing else could."',
    content: [
      'Istanbul\'s cat culture offers profound lessons about urban life. The city presents what anthropologist Anna Tsing calls "multispecies entanglements"—everyday moments where human and nonhuman lives intertwine without dominance or extraction.',
      'The documentary Kedi articulates this philosophy: "In Istanbul, cats are the mirrors to the people, allowing them to reflect on their lives in ways nothing else could." This challenges the Western distinction between humans with language and creatures who merely express pleasure and pain. Istanbul residents insist "they talk to the cats, and the cats talk back."',
      'American observer Michael Jensen contrasts Western pet culture—"quid pro quo: you follow my rules, adore me… and I\'ll keep taking care of you"—with Istanbul\'s model, where humans care for cats who "largely ignore them. Or sit and judge them in that uniquely feline way." Care given without expectation of return represents a fundamentally different ethical relationship.',
      'As one cat cafe owner quoted in Kedi puts it: "Dogs think people are God, but cats don\'t. They know better."'
    ],
    highlights: [
      { label: 'Key Concept', value: 'Multispecies entanglement' },
      { label: 'Kedi Quote', value: 'Cats as mirrors' },
      { label: 'Relationship', value: 'Care without return' }
    ]
  }
]

const keyStats = [
  { label: 'Street Cat Population', value: '125K-1M+' },
  { label: 'Official Estimate (2018)', value: '~165,000' },
  { label: 'Municipal Vet Hospitals', value: '6' },
  { label: 'Veterinarians Employed', value: '79' },
  { label: 'Animals Serviced (2019)', value: '139,910' },
  { label: 'Official Feeding Stations', value: '199' },
  { label: 'Daily Food Distribution', value: '~1 ton' },
  { label: 'Animal Shelters', value: '39' },
  { label: 'Shelter Capacity', value: '16,700' },
  { label: 'Rabies Cases Since 2016', value: '0' },
  { label: 'Kedi RT Score', value: '98%' },
  { label: 'Kedi Gross', value: '$5M+' },
]

const timeline = [
  { year: '4th-15th c.', event: 'Byzantine Era: Cats concentrated around fishmongers; evidence of designated cat burial sites' },
  { year: '1233', event: 'Pope Gregory IX\'s "Vox in Rama" orders cat extermination in Europe' },
  { year: '1453', event: 'Ottoman conquest; cat culture preserved and enhanced through waqf system' },
  { year: '1599', event: 'Baron Wenceslas Wratislaw documents cats waiting in gardens for "alms"' },
  { year: '1600s', event: 'Killing cats becomes a crime in Ottoman Empire' },
  { year: '1876-1909', event: 'Sultan Abdul Hamid II keeps 1,500 cats at Yıldız Palace' },
  { year: '2004', event: 'Animal Protection Law No. 5199 establishes no-kill policy' },
  { year: '2009', event: 'Barack Obama pets Gli at Hagia Sophia' },
  { year: 'Aug 2016', event: 'Tombili dies; statue unveiled October 4' },
  { year: 'Feb 2016', event: 'Kedi documentary premieres' },
  { year: '2021', event: 'Animals reclassified from "commodities" to "living beings"' },
  { year: 'Nov 2020', event: 'Gli dies at age 16 at Hagia Sophia' },
  { year: 'Oct 2023', event: 'Cat Museum opens in Beşiktaş' },
  { year: 'Jul 2024', event: 'Controversial stray animal law passed; 6M+ petition signatures against' },
]

export function CatsSection() {
  const [expandedTopic, setExpandedTopic] = useState<string | null>('intro')
  const [showAllStats, setShowAllStats] = useState(false)
  const [showTimeline, setShowTimeline] = useState(false)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-500/30 mb-4">
          <CatIcon className="w-8 h-8 text-orange-400" />
        </div>
        <h2 className="text-2xl font-bold text-text-primary mb-2">The Cats of Istanbul</h2>
        <p className="text-text-secondary">A 2,000-year love story</p>
        <p className="text-xs text-orange-400 mt-2">The undisputed cat capital of the world</p>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-xl p-3 text-center border border-orange-500/20">
          <div className="text-2xl font-bold text-orange-400">1M+</div>
          <div className="text-xs text-text-secondary">Street Cats</div>
        </div>
        <div className="bg-white/5 rounded-xl p-3 text-center border border-white/10">
          <div className="text-2xl font-bold text-text-primary">2,000+</div>
          <div className="text-xs text-text-secondary">Years of History</div>
        </div>
        <div className="bg-white/5 rounded-xl p-3 text-center border border-white/10">
          <div className="text-2xl font-bold text-green-400">0</div>
          <div className="text-xs text-text-secondary">Rabies Since 2016</div>
        </div>
      </div>

      {/* Feature Quote */}
      <div className="bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-xl p-4 border border-orange-500/20">
        <p className="text-sm text-text-secondary italic text-center">
          "In Istanbul, cats are the mirrors to the people, allowing them to reflect on their lives in ways nothing else could."
        </p>
        <p className="text-xs text-orange-400 text-center mt-2">— Kedi (2016 Documentary)</p>
      </div>

      {/* Topic Cards */}
      <div className="space-y-4">
        {catTopics.map((topic) => (
          <div
            key={topic.id}
            className="bg-bg-card rounded-xl border border-white/10 overflow-hidden transition-all"
          >
            {/* Header */}
            <button
              onClick={() => setExpandedTopic(expandedTopic === topic.id ? null : topic.id)}
              className="w-full p-4 text-left hover:bg-white/5 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500/20 to-amber-500/20 flex items-center justify-center flex-shrink-0 text-orange-400">
                  {topic.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-text-primary mb-1">{topic.title}</h3>
                  <p className="text-sm text-text-muted line-clamp-2">{topic.summary}</p>
                </div>
                {expandedTopic === topic.id ? (
                  <ChevronUp className="w-5 h-5 text-text-muted flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-text-muted flex-shrink-0" />
                )}
              </div>
            </button>

            {/* Expanded Content */}
            {expandedTopic === topic.id && (
              <div className="px-4 pb-4 space-y-4">
                {/* Highlights */}
                {topic.highlights && (
                  <div className="grid grid-cols-3 gap-2">
                    {topic.highlights.map((h, i) => (
                      <div key={i} className="bg-white/5 rounded-lg p-2 text-center">
                        <div className="text-sm font-bold text-orange-400">{h.value}</div>
                        <div className="text-xs text-text-muted">{h.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Content */}
                <div className="space-y-3">
                  {topic.content.map((paragraph, i) => (
                    <p key={i} className="text-sm text-text-secondary leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Timeline Section */}
      <div className="bg-bg-card rounded-xl border border-white/10 overflow-hidden">
        <button
          onClick={() => setShowTimeline(!showTimeline)}
          className="w-full p-4 text-left hover:bg-white/5 transition-colors flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0 text-purple-400">
            <Calendar className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-text-primary">Historical Timeline</h3>
            <p className="text-sm text-text-muted">Key moments in Istanbul's cat history</p>
          </div>
          {showTimeline ? (
            <ChevronUp className="w-5 h-5 text-text-muted" />
          ) : (
            <ChevronDown className="w-5 h-5 text-text-muted" />
          )}
        </button>

        {showTimeline && (
          <div className="px-4 pb-4">
            <div className="relative pl-6 border-l-2 border-orange-500/30 space-y-4">
              {timeline.map((item, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[25px] w-4 h-4 rounded-full bg-orange-500/20 border-2 border-orange-500/50" />
                  <div className="text-xs text-orange-400 font-mono mb-1">{item.year}</div>
                  <p className="text-sm text-text-secondary">{item.event}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Statistics Section */}
      <div className="bg-bg-card rounded-xl border border-white/10 overflow-hidden">
        <button
          onClick={() => setShowAllStats(!showAllStats)}
          className="w-full p-4 text-left hover:bg-white/5 transition-colors flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0 text-cyan-400">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-text-primary">Key Statistics</h3>
            <p className="text-sm text-text-muted">Numbers behind the cat capital</p>
          </div>
          {showAllStats ? (
            <ChevronUp className="w-5 h-5 text-text-muted" />
          ) : (
            <ChevronDown className="w-5 h-5 text-text-muted" />
          )}
        </button>

        {showAllStats && (
          <div className="px-4 pb-4">
            <div className="grid grid-cols-2 gap-3">
              {keyStats.map((stat, i) => (
                <div key={i} className="bg-white/5 rounded-lg p-3">
                  <div className="text-lg font-bold text-text-primary">{stat.value}</div>
                  <div className="text-xs text-text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Watch Kedi CTA */}
      <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl p-4 border border-orange-500/30">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
            <Camera className="w-5 h-5 text-orange-400" />
          </div>
          <div>
            <h3 className="font-bold text-text-primary mb-1">Watch Before You Go</h3>
            <p className="text-sm text-text-secondary mb-2">
              The documentary "Kedi" (2016) is essential viewing—98% on Rotten Tomatoes. Available on most streaming platforms.
            </p>
            <a
              href="https://www.rottentomatoes.com/m/kedi_2017"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-orange-400 hover:text-orange-300 transition-colors"
            >
              View on Rotten Tomatoes <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Final Quote */}
      <div className="text-center py-4">
        <p className="text-sm text-text-muted italic">
          "Dogs think people are God, but cats don't. They know better."
        </p>
        <p className="text-xs text-text-muted mt-1">— Istanbul cat cafe owner, Kedi</p>
      </div>
    </div>
  )
}
