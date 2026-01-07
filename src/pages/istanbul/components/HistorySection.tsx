import { useState, ReactNode } from 'react'
import {
  ChevronDown, ChevronUp, Landmark, Anchor, Crown,
  Flame, Church, Swords, Moon, Castle, Users,
  Ship, Building2, BookOpen, Scale, TrendingDown,
  AlertTriangle, Layers, Clock, Star, ExternalLink
} from 'lucide-react'
import { cn } from '@/lib/utils'

// Inline link component for citations
const Source = ({ href, children }: { href: string; children: ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-orange-400 hover:text-orange-300 underline decoration-orange-400/50 hover:decoration-orange-300 transition-colors"
  >
    {children}
  </a>
)

interface HistoryTopic {
  id: string
  title: string
  icon: ReactNode
  summary: string
  content: ReactNode[]
  highlights?: { label: string; value: string }[]
  image?: {
    url: string
    alt: string
    caption: string
    credit: string
    creditUrl?: string
  }
}

const historyTopics: HistoryTopic[] = [
  {
    id: 'oracle',
    title: 'When an Oracle Called the Neighbors "Blind"',
    icon: <Anchor className="w-5 h-5" />,
    summary: 'Around 657 BCE, a Greek colonist named Byzas consulted the Oracle at Delphi about where to establish a new settlement.',
    image: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Delphi_tholos_cbread.jpg/800px-Delphi_tholos_cread.jpg',
      alt: 'The Tholos at Delphi',
      caption: 'The Tholos at Delphi, where Byzas received the famous oracle',
      credit: 'Wikimedia Commons',
      creditUrl: 'https://commons.wikimedia.org/wiki/File:Delphi_tholos_cread.jpg'
    },
    content: [
      <p key="1">
        The Pythia delivered one of antiquity's most memorable riddles: <strong>"Settle opposite the land of the blind."</strong> Puzzled, Byzas sailed northeast. When he reached the Bosphorus strait, everything suddenly made sense. Fellow{' '}
        <Source href="https://en.wikipedia.org/wiki/Megara">Megarians</Source>{' '}
        had already founded{' '}
        <Source href="https://en.wikipedia.org/wiki/Chalcedon">Chalcedon</Source>{' '}
        on the Asian shore seventeen years earlier—and they had completely overlooked the far superior European promontory.
      </p>,
      <p key="2">
        The Chalcedonians were metaphorically blind. They had missed a <strong>7.5-kilometer natural harbor</strong> (the{' '}
        <Source href="https://en.wikipedia.org/wiki/Golden_Horn">Golden Horn</Source>), a defensible peninsula surrounded by water on three sides, and control of the only water entrance to the Black Sea.
      </p>,
      <p key="3">
        The geographer{' '}
        <Source href="https://en.wikipedia.org/wiki/Strabo">Strabo</Source>{' '}
        added another detail: the currents and underwater geography naturally directed migrating fish toward Byzantion's shore. The valuable tuna that Chalcedon's fishermen struggled to catch essentially swam into Byzantion's nets.
      </p>,
      <p key="4">
        Mythology offered an even more dramatic origin. One tradition claimed{' '}
        <Source href="https://en.wikipedia.org/wiki/Byzas">Byzas</Source>{' '}
        was the son of Poseidon and a woman named Ceroessa—herself the daughter of Zeus and{' '}
        <Source href="https://en.wikipedia.org/wiki/Io_(mythology)">Io</Source>. According to this version, Zeus had transformed Io into a cow to hide his affair from jealous Hera. The Golden Horn itself took its name ("Ceras," meaning horn) from Ceroessa.
      </p>
    ],
    highlights: [
      { label: 'Founded', value: '~657 BCE' },
      { label: 'Founder', value: 'Byzas of Megara' },
      { label: 'Harbor', value: '7.5 km' }
    ]
  },
  {
    id: 'fish-city',
    title: 'A City That Smelled Like Fish',
    icon: <Anchor className="w-5 h-5" />,
    summary: 'Greek Byzantion was nicknamed "the tuna metropolis" and held a state monopoly on salt for its fishing industry.',
    image: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Bluefin-big.jpg/800px-Bluefin-big.jpg',
      alt: 'Atlantic bluefin tuna',
      caption: 'The prized bluefin tuna that made Byzantion wealthy',
      credit: 'NOAA, Wikimedia Commons',
      creditUrl: 'https://commons.wikimedia.org/wiki/File:Bluefin-big.jpg'
    },
    content: [
      <p key="1">
        The writer{' '}
        <Source href="https://en.wikipedia.org/wiki/Athenaeus">Athenaeus</Source>{' '}
        nicknamed the place "the tuna metropolis," and this was no exaggeration. The city held a state monopoly on salt because the fishing and brine industry consumed so much of it. Citizens, according to ancient sources, "ate their food very salty and with garlic."
      </p>,
      <p key="2">
        Every autumn, cold northern winds stirred the Black Sea and sent waves of fish through the Bosphorus—first mackerel, then the prized{' '}
        <Source href="https://en.wikipedia.org/wiki/Atlantic_bluefin_tuna">bluefin tuna</Source>, then more mackerel. Fishermen used rods, tridents, nets blessed by priests, and even fire fishing at night. Byzantine fishers <strong>sacrificed a tonne of tuna to Poseidon</strong> to bless their next hunt.
      </p>,
      <p key="3">
        The city's coins frequently featured fish imagery, and{' '}
        <Source href="https://en.wikipedia.org/wiki/Aristotle">Aristotle</Source>{' '}
        noted that fishermen formed their own distinct social class with formal political representation—an unusual recognition for manual laborers in the Greek world.
      </p>,
      <p key="4">
        Because prevailing northerly winds made it nearly impossible to sail up through the Bosphorus, sailors had to wait in Byzantion until conditions changed—sometimes for weeks. This transformed the city into a natural gathering point where Greeks from multiple city-states mixed with Thracian neighbors and traders from across the Mediterranean and Black Sea.
      </p>
    ],
    highlights: [
      { label: 'Nickname', value: 'Tuna Metropolis' },
      { label: 'Resource', value: 'Salt Monopoly' },
      { label: 'Culture', value: 'Cosmopolitan' }
    ]
  },
  {
    id: 'philip-siege',
    title: 'The Night the Dogs Saved the City',
    icon: <Moon className="w-5 h-5" />,
    summary: 'In 340-339 BCE, Philip II of Macedon—father of Alexander the Great—besieged Byzantion. A divine light and barking dogs saved the city.',
    image: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Philip_II_of_Macedon_CdM.jpg/474px-Philip_II_of_Macedon_CdM.jpg',
      alt: 'Gold medallion depicting Philip II of Macedon',
      caption: 'Philip II of Macedon, whose siege of Byzantion failed',
      credit: 'Cabinet des Médailles, Wikimedia Commons',
      creditUrl: 'https://commons.wikimedia.org/wiki/File:Philip_II_of_Macedon_CdM.jpg'
    },
    content: [
      <p key="1">
        <Source href="https://en.wikipedia.org/wiki/Philip_II_of_Macedon">Philip II of Macedon</Source>—the greatest general of his age and father of Alexander the Great—besieged the city after it refused to support his campaigns. The Byzantines and their Athenian allies held out stubbornly, and Philip grew desperate.
      </p>,
      <p key="2">
        On a dark, wet night, Philip launched a surprise attack. Then, according to legend, a bright light suddenly appeared in the sky—variously described as the moon breaking through clouds, a meteor, or divine intervention. The light startled every dog in the city, and their barking roused the garrison just in time to repel the assault.
      </p>,
      <p key="3">
        The Byzantines attributed their salvation to the goddess{' '}
        <Source href="https://en.wikipedia.org/wiki/Hecate">Hecate</Source>, the "light-bearer" associated with crossroads, boundaries, and dogs. They erected a statue in her honor, and <strong>the crescent moon became the city's symbol</strong>—appearing on Byzantine coins for centuries afterward. This symbol would ultimately be inherited by the Ottoman Empire and modern Turkey.
      </p>,
      <p key="4">
        Philip was forced to lift the siege—one of his rare failures. The{' '}
        <Source href="https://en.wikipedia.org/wiki/Serpent_Column">Serpent Column</Source>, erected at Delphi after the Greek victory against Persia at Plataea in 479 BCE, listed Byzantion among the <strong>31 Greek city-states</strong> that had fought together. That column still stands today in Istanbul's Sultanahmet Square.
      </p>
    ],
    highlights: [
      { label: 'Year', value: '340-339 BCE' },
      { label: 'Attacker', value: 'Philip II' },
      { label: 'Legacy', value: 'Crescent Symbol' }
    ]
  },
  {
    id: 'constantine',
    title: 'Constantinople Rises from Divine Ambition',
    icon: <Crown className="w-5 h-5" />,
    summary: 'In 324 CE, Emperor Constantine arrived with plans to build a "New Rome" that would remake the Roman world.',
    image: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Cristofano_dell%27Altissimo_Costantino_il_Grande.jpg/458px-Cristofano_dell%27Altissimo_Costantino_il_Grande.jpg',
      alt: 'Portrait of Constantine the Great',
      caption: 'Constantine the Great, founder of Constantinople',
      credit: 'Cristofano dell\'Altissimo, Wikimedia Commons',
      creditUrl: 'https://commons.wikimedia.org/wiki/File:Cristofano_dell%27Altissimo_Costantino_il_Grande.jpg'
    },
    content: [
      <p key="1">
        <Source href="https://en.wikipedia.org/wiki/Constantine_the_Great">Constantine</Source>{' '}
        considered several locations for his "New Rome"—Serdica (Sofia), Thessalonica, even the legendary site of Troy. Later generations told the story that <strong>an angel no one else could see</strong> led Constantine on a circuit marking the new walls.
      </p>,
      <p key="2">
        The city was consecrated on <strong>May 11, 330 CE</strong>, with celebrations lasting forty days. Constantine populated his capital through incentives and plunder. He announced that{' '}
        <Source href="https://en.wikipedia.org/wiki/Grain_supply_to_the_city_of_Rome">80,000 free food rations</Source>{' '}
        would be distributed daily. He promised householders gifts of land. And he stripped the ancient world of its treasures—columns, marbles, doors, and the greatest Greek and Roman artworks.
      </p>,
      <p key="3">
        A statue of Alexander the Great was installed. Constantine himself was depicted as Apollo. The population called it Constantinople, though the official name was Nova Roma. Greeks would eventually refer to it simply as <strong>"The City" (Η Πόλη)</strong>—a habit that persists to this day when Greeks speak of Istanbul.
      </p>
    ],
    highlights: [
      { label: 'Founded', value: 'May 11, 330 CE' },
      { label: 'Food Rations', value: '80,000/day' },
      { label: 'Name', value: '"The City"' }
    ]
  },
  {
    id: 'theodora',
    title: 'Theodora: From the Brothel to the Throne',
    icon: <Crown className="w-5 h-5" />,
    summary: 'No figure captures Byzantine drama like Empress Theodora—daughter of a bear-keeper who rose to become one of history\'s most powerful women.',
    image: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Meister_von_San_Vitale_in_Ravenna_008.jpg/502px-Meister_von_San_Vitale_in_Ravenna_008.jpg',
      alt: 'Mosaic of Empress Theodora from Ravenna',
      caption: 'Empress Theodora, mosaic from Basilica of San Vitale, Ravenna (c. 547 CE)',
      credit: 'Wikimedia Commons',
      creditUrl: 'https://commons.wikimedia.org/wiki/File:Meister_von_San_Vitale_in_Ravenna_008.jpg'
    },
    content: [
      <p key="1">
        According to the hostile account of{' '}
        <Source href="https://en.wikipedia.org/wiki/Procopius">Procopius</Source>, her father Acacius was a bear-keeper at the{' '}
        <Source href="https://en.wikipedia.org/wiki/Hippodrome_of_Constantinople">Hippodrome</Source>{' '}
        who died young, leaving the family destitute. Young{' '}
        <Source href="https://en.wikipedia.org/wiki/Theodora_(6th_century)">Theodora</Source>{' '}
        became a performer in explicit stage shows before working in a brothel.
      </p>,
      <p key="2">
        What happened next should have been impossible. Roman law, dating back to Constantine himself, <strong>prevented senators from marrying actresses</strong>. But the heir to the throne,{' '}
        <Source href="https://en.wikipedia.org/wiki/Justinian_I">Justinian</Source>, was smitten. His uncle Emperor Justin I changed the law to raise her status, then created another law permitting the marriage.
      </p>,
      <p key="3">
        Even Justinian's aunt—Empress Euphemia, herself a former slave—opposed the match. But after Euphemia's death, the couple married in 525 CE. Theodora became a formidable political partner who, in one extraordinary moment, saved her husband's throne.
      </p>
    ],
    highlights: [
      { label: 'Origin', value: 'Bear-keeper\'s daughter' },
      { label: 'Marriage', value: '525 CE' },
      { label: 'Status', value: 'Empress & Co-Ruler' }
    ]
  },
  {
    id: 'nika-riots',
    title: 'The Nika Riots: When Constantinople Nearly Burned',
    icon: <Flame className="w-5 h-5" />,
    summary: 'In January 532, a botched execution sparked the deadliest urban riot in history. 30,000-35,000 died.',
    image: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Justinian_mosaik_ravenna.jpg/456px-Justinian_mosaik_ravenna.jpg',
      alt: 'Mosaic of Emperor Justinian I',
      caption: 'Emperor Justinian I, whose throne was saved by Theodora during the Nika Riots',
      credit: 'Basilica of San Vitale, Ravenna, Wikimedia Commons',
      creditUrl: 'https://commons.wikimedia.org/wiki/File:Justinian_mosaik_ravenna.jpg'
    },
    content: [
      <p key="1">
        The chariot racing factions—the{' '}
        <Source href="https://en.wikipedia.org/wiki/Chariot_racing#Byzantine_era">Blues and Greens</Source>—were far more than sports fans. They functioned as "a combination of fans, street gangs, and political parties," and the Hippodrome, which held <strong>up to 100,000 spectators</strong>, was the only place citizens could directly address the emperor.
      </p>,
      <p key="2">
        Several Blues and Greens condemned for murder were to be hanged, but two men survived when the rope failed. At the races on January 13, the crowd chanted for mercy through twenty-two of twenty-four races. Justinian gave no response. Then came an unprecedented cry: <strong>"Long live the merciful Blues and Greens!"</strong> The mortal enemies had united against the emperor.
      </p>,
      <p key="3">
        With "NIKA!" ("Conquer!") as their battle cry, the united factions set fires and burned much of Constantinople over five days. They destroyed the original Hagia Sophia. With a ship waiting at the palace harbor, Justinian prepared to flee. Then{' '}
        <Source href="https://en.wikipedia.org/wiki/Theodora_(6th_century)#Nika_riots">Theodora spoke</Source>:
      </p>,
      <p key="4" className="italic border-l-2 border-orange-400/50 pl-4 my-4">
        "For one who has been an emperor, it is unendurable to be a fugitive… May I never be separated from this purple, and may I not live that day on which those who meet me shall not address me as mistress. <strong>Royalty is a good burial-shroud.</strong>"
      </p>,
      <p key="5">
        Her resolve shamed Justinian into action. Generals Belisarius and Mundus led troops into the Hippodrome, trapping the mob inside. Contemporary sources report <strong>30,000-35,000 killed</strong> in the massacre that followed.
      </p>
    ],
    highlights: [
      { label: 'Year', value: 'January 532' },
      { label: 'Deaths', value: '30,000-35,000' },
      { label: 'Aftermath', value: 'Hagia Sophia rebuilt' }
    ]
  },
  {
    id: 'hagia-sophia',
    title: 'A Dome That Hangs from Heaven',
    icon: <Church className="w-5 h-5" />,
    summary: 'Justinian rebuilt Hagia Sophia in just five years with 10,000 laborers. It would remain the world\'s largest cathedral for a thousand years.',
    image: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Hagia_Sophia_Mars_2013.jpg/800px-Hagia_Sophia_Mars_2013.jpg',
      alt: 'Hagia Sophia exterior',
      caption: 'Hagia Sophia, whose dome "seems suspended from heaven by a golden chain"',
      credit: 'Arild Vågen, Wikimedia Commons',
      creditUrl: 'https://commons.wikimedia.org/wiki/File:Hagia_Sophia_Mars_2013.jpg'
    },
    content: [
      <p key="1">
        The{' '}
        <Source href="https://en.wikipedia.org/wiki/Hagia_Sophia">Hagia Sophia's</Source>{' '}
        central dome rises <strong>55.6 meters</strong> from the floor, spans <strong>32.6 meters</strong> in diameter, and is only <strong>0.61 meters thick</strong>—remarkably light for its size. The architects{' '}
        <Source href="https://en.wikipedia.org/wiki/Anthemius_of_Tralles">Anthemius of Tralles</Source>{' '}
        and Isidore of Miletus achieved something revolutionary: the dome rests on forty arched windows that flood the interior with light.
      </p>,
      <p key="2">
        Procopius captured what visitors felt: the dome <em>"seems not to be founded on solid masonry, but to be <strong>suspended from heaven by that golden chain</strong>."</em> When the original dome collapsed from earthquake damage in 558, Isidore the Younger rebuilt it even higher and more stable.
      </p>,
      <p key="3">
        When Hagia Sophia was completed in 537, Justinian reportedly exclaimed: <em>"Glory to God who has deemed me worthy to complete such a work. <strong>O Solomon, I have surpassed thee!</strong>"</em>
      </p>,
      <p key="4">
        Constantinople's engineering extended far beyond a single church. The{' '}
        <Source href="https://en.wikipedia.org/wiki/Basilica_Cistern">Basilica Cistern</Source>{' '}
        alone could hold <strong>80,000 cubic meters</strong> of water, supported by 336 columns recycled from ruined temples. The{' '}
        <Source href="https://en.wikipedia.org/wiki/Walls_of_Constantinople">Theodosian Walls</Source>, completed in 413 CE, would prove <strong>impregnable for over a thousand years</strong>.
      </p>
    ],
    highlights: [
      { label: 'Dome Height', value: '55.6 m' },
      { label: 'Dome Diameter', value: '32.6 m' },
      { label: 'Workers', value: '10,000' }
    ]
  },
  {
    id: 'fourth-crusade',
    title: 'When Crusaders Sacked the Wrong City',
    icon: <Swords className="w-5 h-5" />,
    summary: 'The Fourth Crusade, called to recapture Jerusalem, instead sacked Constantinople in 1204—the greatest Christian city in the world.',
    image: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Eugène_Delacroix_-_The_Entry_of_the_Crusaders_into_Constantinople_-_WGA6237.jpg/800px-Eugène_Delacroix_-_The_Entry_of_the_Crusaders_into_Constantinople_-_WGA6237.jpg',
      alt: 'The Entry of the Crusaders into Constantinople by Delacroix',
      caption: 'The Entry of the Crusaders into Constantinople (1840) by Eugène Delacroix',
      credit: 'Eugène Delacroix, Louvre Museum, Wikimedia Commons',
      creditUrl: 'https://commons.wikimedia.org/wiki/File:Eugène_Delacroix_-_The_Entry_of_the_Crusaders_into_Constantinople_-_WGA6237.jpg'
    },
    content: [
      <p key="1">
        The{' '}
        <Source href="https://en.wikipedia.org/wiki/Fourth_Crusade">Fourth Crusade</Source>, called by Pope Innocent III to recapture Jerusalem, never reached the Holy Land. The crusaders had contracted with Venice for transport ships but couldn't pay. To settle the debt, they agreed to attack Zara—a Christian city—for which the Pope excommunicated them.
      </p>,
      <p key="2">
        On April 12-15, 1204, they conquered Constantinople. For three days, citizens were "raped and massacred, buildings torched, churches desecrated." The crusaders stole <strong>900,000 silver marks</strong>—seven times England's annual royal revenue. The famous bronze{' '}
        <Source href="https://en.wikipedia.org/wiki/Horses_of_Saint_Mark">Horses of Saint Mark</Source>{' '}
        were shipped to Venice, where they still adorn St. Mark's Basilica.
      </p>,
      <p key="3">
        The historian{' '}
        <Source href="https://en.wikipedia.org/wiki/Niketas_Choniates">Niketas Choniates</Source>{' '}
        witnessed it: <em>"In the alleys, in the streets, in the temples—complaints, weeping, lamentations, grief, the groaning of men, the shrieks of women, wounds, rape, captivity, the separation of those most closely united."</em>
      </p>,
      <p key="4">
        Historian{' '}
        <Source href="https://en.wikipedia.org/wiki/Steven_Runciman">Steven Runciman</Source>{' '}
        delivered the verdict: <strong>"There was never a greater crime against humanity than the Fourth Crusade."</strong> Constantinople would be recovered in 1261, but it never regained its former glory.
      </p>
    ],
    highlights: [
      { label: 'Year', value: 'April 1204' },
      { label: 'Loot', value: '900,000 marks' },
      { label: 'Impact', value: 'Permanent decline' }
    ]
  },
  {
    id: 'fall-1453',
    title: 'The Marble Emperor\'s Last Stand',
    icon: <Castle className="w-5 h-5" />,
    summary: 'On May 29, 1453, after a 53-day siege, Constantinople fell to the Ottoman Sultan Mehmed II. Constantine XI died fighting.',
    image: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Zonaro_GatesofConworpen.jpg/800px-Zonaro_GatesofConworpen.jpg',
      alt: 'Mehmed II entering Constantinople',
      caption: 'Mehmed II entering Constantinople (1903) by Fausto Zonaro',
      credit: 'Fausto Zonaro, Wikimedia Commons',
      creditUrl: 'https://commons.wikimedia.org/wiki/File:Zonaro_GatesofConworpen.jpg'
    },
    content: [
      <p key="1">
        On the night of May 28, 1453,{' '}
        <Source href="https://en.wikipedia.org/wiki/Constantine_XI_Palaiologos">Emperor Constantine XI</Source>{' '}
        held a final service in Hagia Sophia—Orthodox and Catholic Christians praying together. He addressed his defenders: <em>"Into your hands I give this most illustrious and renowned city, the Queen of Cities and your homeland."</em> When advisors begged him to escape, he refused: <strong>"Never, never, will I leave you. I am resolved to die here with you."</strong>
      </p>,
      <p key="2">
        The 21-year-old{' '}
        <Source href="https://en.wikipedia.org/wiki/Mehmed_II">Sultan Mehmed II</Source>{' '}
        had prepared meticulously. He commissioned massive cannons from a Hungarian engineer—including a monster <strong>27 feet long</strong> that could hurl 1,300-pound projectiles over a mile. When a chain stretched across the Golden Horn blocked his ships, he had them <strong>dragged overland on greased logs</strong> around the barrier.
      </p>,
      <p key="3">
        The final siege lasted 53 days. A lunar eclipse on May 22 terrified the population. On the morning of May 29, Ottoman troops poured through a breach. Constantine XI threw off his imperial regalia and charged into the fighting, dying as a common soldier.
      </p>,
      <p key="4">
        His body was never conclusively identified—legend says he was recognized only by <strong>the imperial eagles embroidered on his shoes</strong>. Another legend claimed an angel rescued him, turned him to marble, and placed him in a cave under the Golden Gate, where he waits to return when Constantinople becomes Christian again.
      </p>,
      <p key="5">
        Mehmed rode to Hagia Sophia, dismounted, and "bent down to take a handful of earth, which he then sprinkled over his turban as an act of humility before God." The cathedral became a mosque. Constantinople became Istanbul.
      </p>
    ],
    highlights: [
      { label: 'Date', value: 'May 29, 1453' },
      { label: 'Siege Duration', value: '53 days' },
      { label: 'Ottoman Army', value: '80,000-120,000' }
    ]
  },
  {
    id: 'ottomans-rebuild',
    title: 'The Ottomans Remake a Ruined City',
    icon: <Building2 className="w-5 h-5" />,
    summary: 'Mehmed II—"the Conqueror"—inherited a half-empty shell and set about rebuilding it into the largest city in Europe.',
    image: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Gentile_Bellini_003.jpg/416px-Gentile_Bellini_003.jpg',
      alt: 'Portrait of Mehmed II by Gentile Bellini',
      caption: 'Mehmed the Conqueror (1480) by Gentile Bellini',
      credit: 'Gentile Bellini, National Gallery London, Wikimedia Commons',
      creditUrl: 'https://commons.wikimedia.org/wiki/File:Gentile_Bellini_003.jpg'
    },
    content: [
      <p key="1">
        <Source href="https://en.wikipedia.org/wiki/Mehmed_II">Mehmed II</Source>{' '}
        inherited a half-empty shell. Constantinople's population had crashed; whole neighborhoods stood abandoned. The young sultan set about rebuilding immediately: repairing the Theodosian walls, constructing a hospital, building barracks for the Janissaries, and establishing the core of the{' '}
        <Source href="https://en.wikipedia.org/wiki/Grand_Bazaar,_Istanbul">Grand Bazaar</Source>{' '}
        in the winter of 1455-56.
      </p>,
      <p key="2">
        Mehmed was a remarkable figure: a conqueror who treasured Christian relics. When his royal librarian stepped on a sacred stone to reach a book, the sultan became "greatly distressed." When Venetians offered 30,000 ducats for a relic, Mehmed replied he wouldn't sell it for even 100,000 ducats. He lit candles before relics of St. John the Baptist "as a sign of veneration."
      </p>,
      <p key="3">
        He preserved the Byzantine mosaics inside Hagia Sophia—which can still be seen today alongside Islamic calligraphy. Within a generation, Constantinople—now increasingly called Istanbul—would become the largest city in Europe and the capital of one of history's most powerful states.
      </p>
    ],
    highlights: [
      { label: 'Grand Bazaar', value: 'Founded 1455-56' },
      { label: 'Vision', value: 'World Empire' },
      { label: 'Policy', value: 'Preserved relics' }
    ]
  },
  {
    id: 'suleiman-hurrem',
    title: 'The Poet Sultan and the Slave Who Became Queen',
    icon: <Crown className="w-5 h-5" />,
    summary: 'Suleiman the Magnificent broke every tradition to marry Hürrem—a captured Ukrainian slave who became the most powerful woman in the Ottoman world.',
    image: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Khourrem.jpg/417px-Khourrem.jpg',
      alt: 'Portrait of Hürrem Sultan (Roxelana)',
      caption: 'Hürrem Sultan (Roxelana), the slave who became empress',
      credit: 'Titian (attributed), Wikimedia Commons',
      creditUrl: 'https://commons.wikimedia.org/wiki/File:Khourrem.jpg'
    },
    content: [
      <p key="1">
        <Source href="https://en.wikipedia.org/wiki/Suleiman_the_Magnificent">Suleiman the Magnificent</Source>{' '}
        (r. 1520-1566) presided over the Ottoman Golden Age. He spoke Ottoman Turkish, Arabic, Persian, and Serbian. He was a distinguished goldsmith. And under the pen name "Muhibbi" (the Lover), he wrote poetry to the woman who upended every tradition of the Ottoman court.
      </p>,
      <p key="2">
        She was born{' '}
        <Source href="https://en.wikipedia.org/wiki/Hurrem_Sultan">Aleksandra Lisowska</Source>{' '}
        around 1505 in Rohatyn (modern Ukraine), daughter of an Orthodox priest. Crimean Tatars captured her in a slave raid and brought her to Constantinople's slave market. Her Turkish name "Hürrem" means "joyful one"—given for her vivacious personality.
      </p>,
      <p key="3">
        What followed broke every rule. Ottoman custom limited concubines to bearing one son—Hürrem bore <strong>six children</strong>. Sultans simply did not marry—around 1534, Suleiman <strong>legally married her</strong> in "an unprecedentedly magnificent formal ceremony which scandalised the whole empire." By marrying her, he freed her from slavery. Then he became monogamous: "He refused to know any other women: something that had never been done by any of his predecessors."
      </p>,
      <p key="4">
        Venetian ambassadors reported what people whispered: that Hürrem had <strong>"bewitched him."</strong> They called her "ziadi"—a witch. In reality, she was the first "Haseki Sultan" (chief consort), signing documents in Suleiman's absence, attending council meetings, and corresponding with foreign rulers including the King of Poland.
      </p>,
      <p key="5">
        Suleiman wrote her verses: <em>"My Istanbul, my Karaman, the earth of my Anatolia, / My Badakhshan, my Baghdad and Khorasan… / My woman of the beautiful hair, my love of the slanted brow."</em>
      </p>
    ],
    highlights: [
      { label: 'Origin', value: 'Ukrainian slave' },
      { label: 'Children', value: '6 (broke custom)' },
      { label: 'Marriage', value: 'c. 1534 (unprecedented)' }
    ]
  },
  {
    id: 'sinan',
    title: 'The Architect Who Reshaped the Skyline',
    icon: <Building2 className="w-5 h-5" />,
    summary: 'Mimar Sinan served as chief royal architect for nearly 50 years, constructing over 300 major structures including the Süleymaniye Mosque.',
    image: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Exterior_of_S%C3%BCleymaniye_Mosque_%282%29.jpg/800px-Exterior_of_S%C3%BCleymaniye_Mosque_%282%29.jpg',
      alt: 'Süleymaniye Mosque exterior',
      caption: 'Süleymaniye Mosque, Sinan\'s masterpiece in Istanbul',
      credit: 'Wikimedia Commons',
      creditUrl: 'https://commons.wikimedia.org/wiki/File:Exterior_of_S%C3%BCleymaniye_Mosque_(2).jpg'
    },
    content: [
      <p key="1">
        <Source href="https://en.wikipedia.org/wiki/Mimar_Sinan">Mimar Sinan</Source>{' '}
        was born around 1490 as the son of a Christian stonemason. Recruited into the Janissary corps, he rose through military ranks to become chief royal architect at age fifty—a position he held for nearly fifty years under three sultans. He constructed over <strong>300 major structures</strong>: mosques, bridges, madrasas, caravanserais.
      </p>,
      <p key="2">
        His masterpiece, the{' '}
        <Source href="https://en.wikipedia.org/wiki/S%C3%BCleymaniye_Mosque">Süleymaniye Mosque</Source>, took seven years (1550-1557) and employed <strong>more than 3,500 workers</strong>. The central dome rises 53 meters high with a 26.5-meter diameter. Its four minarets feature ten balconies, reflecting Suleiman as the tenth Ottoman sultan.
      </p>,
      <p key="3">
        But Sinan understood his work in competition with the past. The Hagia Sophia haunted every Ottoman architect. Sinan studied it intensively, learning from its revolutionary dome-and-pendentive system. He considered his late-career Selimiye Mosque in Edirne his true masterpiece, because there he finally <strong>"built a dome larger than Hagia Sophia."</strong>
      </p>,
      <p key="4">
        His modest tomb stands just outside the Süleymaniye complex walls, in a structure he designed himself.
      </p>
    ],
    highlights: [
      { label: 'Career', value: '~50 years' },
      { label: 'Buildings', value: '300+' },
      { label: 'Süleymaniye', value: '1550-1557' }
    ]
  },
  {
    id: 'coffeehouses',
    title: 'Where Coffee Was Born (in Europe)',
    icon: <Users className="w-5 h-5" />,
    summary: 'The world\'s first coffeehouse opened in Istanbul in 1555. By the 1570s, there were over 600—just 15 years after coffee arrived.',
    image: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Ottoman_coffeehouse.jpg/800px-Ottoman_coffeehouse.jpg',
      alt: 'Ottoman coffeehouse illustration',
      caption: 'A traditional Ottoman coffeehouse scene',
      credit: 'Wikimedia Commons',
      creditUrl: 'https://commons.wikimedia.org/wiki/File:Ottoman_coffeehouse.jpg'
    },
    content: [
      <p key="1">
        The world's first{' '}
        <Source href="https://en.wikipedia.org/wiki/Turkish_coffee">coffeehouse</Source>{' '}
        opened in Istanbul in 1555 during Suleiman's reign, founded by two Damascus merchants. By the 1570s, there were <strong>over 600 coffeehouses</strong>—just fifteen years after coffee arrived. By the early nineteenth century, there were over 2,500 for a population of roughly 400,000.
      </p>,
      <p key="2">
        These weren't just places to drink; they were where business was negotiated, family conflicts resolved, friendships forged. Poetry recitals and shadow puppet shows provided entertainment. Different social classes mingled more equally than elsewhere.
      </p>,
      <p key="3">
        There was even an Ottoman saying that <strong>a woman could demand divorce if her husband would not provide her daily coffee</strong>.
      </p>,
      <p key="4">
        The{' '}
        <Source href="https://en.wikipedia.org/wiki/Grand_Bazaar,_Istanbul">Grand Bazaar</Source>—one of the world's first "shopping malls"—covered 61 streets, over 4,000 shops, with 67 roads named for specific goods: Halıcılar Caddesi for carpet sellers, Kalpakçılar Caddesi for hat makers. The aroma of saffron, sumac, and Turkish coffee followed visitors for days.
      </p>
    ],
    highlights: [
      { label: 'First Coffeehouse', value: '1555' },
      { label: 'By 1570s', value: '600+ coffeehouses' },
      { label: 'Grand Bazaar', value: '4,000+ shops' }
    ]
  },
  {
    id: 'republic',
    title: 'The Republic That Turned Its Back',
    icon: <Scale className="w-5 h-5" />,
    summary: 'In 1923, Mustafa Kemal Atatürk chose Ankara—not Istanbul—as the capital of the new Turkish Republic, deliberately abandoning the Ottoman past.',
    image: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Ataturk1930s.jpg/437px-Ataturk1930s.jpg',
      alt: 'Mustafa Kemal Atatürk',
      caption: 'Mustafa Kemal Atatürk, founder of the Turkish Republic',
      credit: 'Wikimedia Commons',
      creditUrl: 'https://commons.wikimedia.org/wiki/File:Ataturk1930s.jpg'
    },
    content: [
      <p key="1">
        On October 13, 1923—just sixteen days before the Republic of Turkey was proclaimed—a dusty Anatolian town of 35,000 inhabitants became the new capital.{' '}
        <Source href="https://en.wikipedia.org/wiki/Mustafa_Kemal_Atatürk">Mustafa Kemal Atatürk</Source>{' '}
        chose Ankara, not Istanbul, for reasons both strategic and symbolic. Istanbul had been occupied by Allied forces from 1918-1923; its location left it exposed. More importantly, Istanbul was synonymous with 470 years of Ottoman rule.
      </p>,
      <p key="2">
        The reforms came fast. In 1925, the fez was banned; men were required to wear Western hats. In 1928, the Arabic script used by Turks for a thousand years was replaced with a modified Latin alphabet—Atatürk personally traveled the country with chalk and blackboard, teaching the new letters.
      </p>,
      <p key="3">
        Experts had predicted the alphabet transition would take five years; it was completed in <strong>five months</strong>. Literacy, which had been less than 9% in 1923, rose to more than <strong>33% by 1938</strong>.
      </p>,
      <p key="4">
        Istanbul, with its cosmopolitan character, adapted more readily than conservative Anatolia. But the deliberate abandonment stung. State-controlled economic policies channeled resources to other cities. Istanbul—a trading port with international enterprises, seen as too cosmopolitan—was left to decline.
      </p>
    ],
    highlights: [
      { label: 'New Capital', value: 'Ankara (1923)' },
      { label: 'Alphabet Change', value: '5 months' },
      { label: 'Literacy', value: '9% → 33%' }
    ]
  },
  {
    id: 'pogrom-1955',
    title: 'The Night the Minorities Fled',
    icon: <TrendingDown className="w-5 h-5" />,
    summary: 'On September 6-7, 1955, a pogrom devastated Istanbul\'s Greek, Armenian, and Jewish communities. The Greek population crashed from 100,000 to under 3,000 today.',
    image: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Istanbul_pogrom.jpg/800px-Istanbul_pogrom.jpg',
      alt: 'Destruction from the 1955 Istanbul pogrom',
      caption: 'Aftermath of the 1955 Istanbul pogrom',
      credit: 'Wikimedia Commons',
      creditUrl: 'https://commons.wikimedia.org/wiki/File:Istanbul_pogrom.jpg'
    },
    content: [
      <p key="1">
        The cosmopolitan Istanbul of Greeks, Armenians, Jews, and Muslims unraveled over decades, but one night accelerated the process catastrophically. On{' '}
        <Source href="https://en.wikipedia.org/wiki/Istanbul_pogrom">September 6-7, 1955</Source>, a pogrom triggered by a false report that Greeks had bombed the Turkish consulate in Thessaloniki (the bomb was actually planted by a Turkish usher) devastated the city's minority communities.
      </p>,
      <p key="2">
        Over two days: <strong>4,348 merchant stores destroyed</strong>, 110 hotels damaged, 73 Greek Orthodox churches burned, 23 schools destroyed, 1,000+ homes looted. Financial damage reached $150-500 million.
      </p>,
      <p key="3">
        The Greek population, which had numbered roughly 100,000 in 1955, crashed to 49,081 by 1960 and stands at approximately <strong>2,000-3,000 today</strong>. In 1964, Turkey expelled 40,000 ethnic Greeks holding Greek passports, allowing them only 20 kg of belongings and $22 in cash.
      </p>,
      <p key="4">
        The Nobel laureate{' '}
        <Source href="https://en.wikipedia.org/wiki/Orhan_Pamuk">Orhan Pamuk</Source>{' '}
        has written of Istanbul's transformation through the lens of <em>hüzün</em>—a collective melancholy. His memoir describes a city haunted by "the ruins of a lost empire, the departure of Greeks, Armenians, and Jews, the burning and replacement of old wooden houses with ghastly concrete buildings."
      </p>
    ],
    highlights: [
      { label: 'Date', value: 'Sept 6-7, 1955' },
      { label: 'Stores Destroyed', value: '4,348' },
      { label: 'Greeks Today', value: '~2,000-3,000' }
    ]
  },
  {
    id: 'modern-megacity',
    title: 'Sixteen Million People on a Fault Line',
    icon: <AlertTriangle className="w-5 h-5" />,
    summary: 'Istanbul\'s population exploded from 700,000 in 1923 to over 16 million today—and scientists warn of a major earthquake within the next decade.',
    image: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/İstanbul_skyline.jpg/800px-İstanbul_skyline.jpg',
      alt: 'Modern Istanbul skyline',
      caption: 'Modern Istanbul: a megacity of 16 million',
      credit: 'Wikimedia Commons',
      creditUrl: 'https://commons.wikimedia.org/wiki/File:İstanbul_skyline.jpg'
    },
    content: [
      <p key="1">
        Istanbul's population in 1923 was approximately 700,000. By 1950, it reached one million. By 2000, <strong>10.9 million</strong>—a tenfold increase in fifty years. Today it exceeds 16 million, making it larger than most countries.
      </p>,
      <p key="2">
        The transformation came through the{' '}
        <Source href="https://en.wikipedia.org/wiki/Gecekondu">gecekondu</Source>{' '}
        phenomenon—literally "built overnight." A legal loophole meant that if construction began after dusk and was completed before dawn without authorities noticing, the building could not be demolished without court proceedings. By 2004, roughly <strong>half the residents—perhaps six million people—dwelled in gecekondu homes</strong>.
      </p>,
      <p key="3">
        And beneath it all, the fault lines wait. On August 17, 1999, a{' '}
        <Source href="https://en.wikipedia.org/wiki/1999_%C4%B0zmit_earthquake">magnitude 7.4 earthquake</Source>{' '}
        struck near İzmit, roughly 100 km from Istanbul. Over <strong>17,000 died</strong>; 500,000 were made homeless.
      </p>,
      <p key="4">
        Scientists now warn of a <strong>50% probability</strong> of a major earthquake within the next seven years, rising to greater than 90% by 2070. Projections estimate 5,000+ buildings could collapse instantly; 20-40% of buildings could be rendered uninhabitable.
      </p>
    ],
    highlights: [
      { label: 'Population', value: '16+ million' },
      { label: '1999 Quake Deaths', value: '17,000' },
      { label: 'Quake Risk (7 yrs)', value: '50%' }
    ]
  },
  {
    id: 'what-survives',
    title: 'What Survives from 2,700 Years',
    icon: <Layers className="w-5 h-5" />,
    summary: 'Walk through Istanbul today and the layers are visible: Greek columns, Byzantine churches, Ottoman mosques, and ferries crossing between continents.',
    image: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Serpent_Column_Hippodrome_Constantinople_2007_001.jpg/450px-Serpent_Column_Hippodrome_Constantinople_2007_001.jpg',
      alt: 'The Serpent Column in Istanbul',
      caption: 'The Serpent Column, made from Persian armor in 479 BCE—still standing in Sultanahmet',
      credit: 'Wikimedia Commons',
      creditUrl: 'https://commons.wikimedia.org/wiki/File:Serpent_Column_Hippodrome_Constantinople_2007_001.jpg'
    },
    content: [
      <p key="1">
        The{' '}
        <Source href="https://en.wikipedia.org/wiki/Serpent_Column">Serpent Column</Source>{' '}
        in Sultanahmet Square was made from melted Persian armor in 479 BCE—<strong>2,500 years ago</strong>. The{' '}
        <Source href="https://en.wikipedia.org/wiki/Hagia_Sophia">Hagia Sophia</Source>{' '}
        has stood since 537 CE, transformed from cathedral to mosque to museum and back to mosque in 2020. The Theodosian Walls, built in 413 CE, still stretch for kilometers.
      </p>,
      <p key="2">
        From the Ottoman era: the Grand Bazaar still operates with 4,000+ shops. The Süleymaniye Mosque still welcomes worshippers. Historic{' '}
        <Source href="https://en.wikipedia.org/wiki/Turkish_bath">hamams</Source>{' '}
        like Çemberlitaş (designed by Sinan, over 500 years old) still offer foam massages. Turkish coffee culture is now UNESCO Intangible Cultural Heritage.
      </p>,
      <p key="3">
        The <strong>yalıs</strong>—roughly 620 Ottoman-era waterfront mansions along the Bosphorus—survive as monuments to lost grandeur. The oldest, Köprülü Amcazade Hüseyin Pasha Yalı from 1699, is now in disrepair. The most expensive, Erbilgin Yalısı in Yeniköy, is valued at $100 million.
      </p>,
      <p key="4">
        And the ferries—the iconic <em>vapur</em> with their distinctive yellow-sashed funnels—still connect European and Asian sides, passing historic sites while serving Turkish tea in tulip-shaped glasses. For a few lira, you can ride with commuting residents past palaces, fortresses, and yalıs, experiencing what has always made this city extraordinary: the collision of worlds at the narrowest point between continents.
      </p>
    ],
    highlights: [
      { label: 'Serpent Column', value: '2,500 years old' },
      { label: 'Yalıs', value: '~620 mansions' },
      { label: 'Grand Bazaar', value: '4,000+ shops' }
    ]
  }
]

const timeline = [
  { year: '~657 BCE', event: 'Byzas founds Byzantion', era: 'greek' },
  { year: '340 BCE', event: 'Philip II\'s siege fails', era: 'greek' },
  { year: '330 CE', event: 'Constantine founds Constantinople', era: 'byzantine' },
  { year: '532', event: 'Nika Riots; Hagia Sophia rebuilt', era: 'byzantine' },
  { year: '1204', event: 'Fourth Crusade sacks city', era: 'byzantine' },
  { year: '1453', event: 'Ottoman conquest', era: 'ottoman' },
  { year: '1520-1566', event: 'Suleiman\'s Golden Age', era: 'ottoman' },
  { year: '1555', event: 'First coffeehouse opens', era: 'ottoman' },
  { year: '1923', event: 'Turkish Republic; capital moves to Ankara', era: 'modern' },
  { year: '1955', event: 'Istanbul pogrom', era: 'modern' },
  { year: '2020', event: 'Hagia Sophia reconverted to mosque', era: 'modern' }
]

const keyStats = [
  { label: 'City Founded', value: '~657 BCE' },
  { label: 'Total History', value: '2,700 years' },
  { label: 'Names', value: '3 (Byzantion, Constantinople, Istanbul)' },
  { label: 'Empires', value: 'Greek → Roman → Byzantine → Ottoman → Turkish' },
  { label: 'Byzantine Era', value: '1,123 years (330-1453)' },
  { label: 'Ottoman Era', value: '470 years (1453-1923)' },
  { label: 'Longest as Capital', value: '1,593 years' },
  { label: 'Hagia Sophia Age', value: '1,489 years' },
  { label: 'Theodosian Walls', value: '1,613 years old' },
  { label: 'Population Peak (Byzantine)', value: '~500,000' },
  { label: 'Population Peak (Ottoman)', value: '~700,000' },
  { label: 'Population Today', value: '16+ million' }
]

export default function HistorySection() {
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null)

  const getEraColor = (era: string) => {
    switch (era) {
      case 'greek': return 'bg-blue-500'
      case 'byzantine': return 'bg-purple-500'
      case 'ottoman': return 'bg-orange-500'
      case 'modern': return 'bg-green-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <div className="space-y-6 pb-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-orange-500/30 to-purple-500/30 border border-orange-500/30 mb-4">
          <Landmark className="w-8 h-8 text-orange-400" />
        </div>
        <h2 className="text-2xl font-bold text-text-primary mb-2">Three Names, One City</h2>
        <p className="text-text-secondary">Istanbul's extraordinary 2,700-year journey</p>
        <p className="text-xs text-orange-400 mt-2">From Byzantion to Constantinople to Istanbul</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl p-3 text-center border border-blue-500/20">
          <div className="text-2xl font-bold text-blue-400">2,700</div>
          <div className="text-xs text-text-secondary">Years of History</div>
        </div>
        <div className="bg-gradient-to-br from-purple-500/20 to-orange-500/20 rounded-xl p-3 text-center border border-purple-500/20">
          <div className="text-2xl font-bold text-purple-400">5</div>
          <div className="text-xs text-text-secondary">Major Empires</div>
        </div>
        <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl p-3 text-center border border-orange-500/20">
          <div className="text-2xl font-bold text-orange-400">3</div>
          <div className="text-xs text-text-secondary">City Names</div>
        </div>
      </div>

      {/* Feature Quote */}
      <div className="bg-gradient-to-r from-orange-500/10 to-purple-500/10 rounded-xl p-4 border border-orange-500/20">
        <p className="text-sm text-text-secondary italic text-center">
          "Few places on Earth have witnessed history quite like this narrow strait where Europe meets Asia. What makes Istanbul unique isn't just its strategic location but its capacity for reinvention."
        </p>
      </div>

      {/* Topic Cards */}
      <div className="space-y-3">
        {historyTopics.map((topic) => (
          <div
            key={topic.id}
            className={cn(
              'bg-bg-card rounded-xl border overflow-hidden transition-all',
              expandedTopic === topic.id ? 'border-orange-500/30' : 'border-white/10'
            )}
          >
            {/* Header */}
            <button
              onClick={() => setExpandedTopic(expandedTopic === topic.id ? null : topic.id)}
              className="w-full p-4 text-left hover:bg-white/5 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500/20 to-purple-500/20 flex items-center justify-center text-orange-400 flex-shrink-0">
                  {topic.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-text-primary text-sm leading-tight mb-1">{topic.title}</h3>
                  <p className="text-xs text-text-muted line-clamp-2">{topic.summary}</p>
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
                {/* Image */}
                {topic.image && (
                  <div className="rounded-lg overflow-hidden border border-white/10">
                    <img
                      src={topic.image.url}
                      alt={topic.image.alt}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                    <div className="bg-white/5 px-3 py-2">
                      <p className="text-xs text-text-secondary">{topic.image.caption}</p>
                      {topic.image.creditUrl ? (
                        <a
                          href={topic.image.creditUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-text-muted hover:text-orange-400 transition-colors"
                        >
                          Photo: {topic.image.credit}
                        </a>
                      ) : (
                        <p className="text-xs text-text-muted">Photo: {topic.image.credit}</p>
                      )}
                    </div>
                  </div>
                )}

                {/* Highlights */}
                {topic.highlights && topic.highlights.length > 0 && (
                  <div className="grid grid-cols-3 gap-2">
                    {topic.highlights.map((highlight, i) => (
                      <div key={i} className="bg-white/5 rounded-lg p-2 text-center">
                        <div className="text-xs text-text-muted">{highlight.label}</div>
                        <div className="text-sm font-medium text-text-primary">{highlight.value}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Content */}
                <div className="space-y-3 text-sm text-text-secondary leading-relaxed">
                  {topic.content}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Timeline Section */}
      <div className="bg-bg-card rounded-xl border border-white/10 p-4 mt-8">
        <h3 className="font-bold text-text-primary mb-4 flex items-center gap-2">
          <Clock className="w-5 h-5 text-orange-400" />
          Timeline
        </h3>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 via-orange-500 to-green-500" />

          <div className="space-y-3">
            {timeline.map((item, i) => (
              <div key={i} className="flex items-start gap-3 relative">
                <div className={cn('w-4 h-4 rounded-full flex-shrink-0 mt-0.5 z-10', getEraColor(item.era))} />
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-orange-400 font-medium">{item.year}</div>
                  <div className="text-sm text-text-secondary">{item.event}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Era Legend */}
        <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-white/10">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-blue-500" />
            <span className="text-xs text-text-muted">Greek</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-purple-500" />
            <span className="text-xs text-text-muted">Byzantine</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-orange-500" />
            <span className="text-xs text-text-muted">Ottoman</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-xs text-text-muted">Modern</span>
          </div>
        </div>
      </div>

      {/* Key Stats Section */}
      <div className="bg-bg-card rounded-xl border border-white/10 p-4">
        <h3 className="font-bold text-text-primary mb-4 flex items-center gap-2">
          <Star className="w-5 h-5 text-orange-400" />
          Key Statistics
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {keyStats.map((stat, i) => (
            <div key={i} className="bg-white/5 rounded-lg p-3">
              <div className="text-xs text-text-muted mb-1">{stat.label}</div>
              <div className="text-sm font-medium text-text-primary">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-orange-500/10 to-purple-500/10 rounded-xl p-4 border border-orange-500/20">
        <h3 className="font-bold text-text-primary mb-2 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-orange-400" />
          Dive Deeper
        </h3>
        <p className="text-sm text-text-secondary mb-3">
          Explore Istanbul's layered history in person—walk the Theodosian Walls, stand beneath Hagia Sophia's dome, and cross between continents on a ferry.
        </p>
        <a
          href="https://en.wikipedia.org/wiki/History_of_Istanbul"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 hover:bg-orange-500/30 rounded-lg text-orange-400 text-sm font-medium transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          Read Full History on Wikipedia
        </a>
      </div>

      {/* Closing Quote */}
      <div className="text-center py-4">
        <p className="text-sm text-text-secondary italic max-w-md mx-auto">
          "The city exists in perpetual tension: between secular and religious, between heritage and modernity, between tourist spectacle and lived experience of 16 million residents. It is haunted by what it has lost—but continues to remake itself, as it has always done, at the crossroads of everything."
        </p>
      </div>
    </div>
  )
}
