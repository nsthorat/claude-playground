import { useState, ReactNode } from 'react'
import {
  ChevronDown, ChevronUp, Heart, MapPin, Calendar,
  Shield, Users, Camera, AlertTriangle, Building2,
  BookOpen, TrendingUp, Scale, Sparkles, Clock,
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

interface CatTopic {
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
    credit?: string
  }
}

const catTopics: CatTopic[] = [
  {
    id: 'intro',
    title: 'The Cat Capital of the World',
    icon: <CatIcon className="w-5 h-5" />,
    summary: 'Istanbul is home to 125,000 to over 1 million street cats who have lived alongside humans for more than two millennia.',
    image: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Feral_cats_in_Istanbul_-b.jpg/800px-Feral_cats_in_Istanbul_-b.jpg',
      alt: 'Street cats lounging on a bench in Istanbul',
      caption: 'Feral cats relaxing on a bench in Istanbul',
      credit: 'Wikimedia Commons'
    },
    content: [
      <p key="1">
        <strong>Istanbul is the undisputed cat capital of the world</strong>, home to an estimated{' '}
        <Source href="https://www.nytimes.com/2019/07/23/world/europe/istanbul-street-cats.html">125,000 to over 1 million street cats</Source>{' '}
        who have lived alongside humans for more than two millennia. Unlike stray animals in most cities, Istanbul's cats are not unwanted outcasts—they are communally owned, religiously revered, and culturally celebrated residents who embody the soul of the ancient city itself.
      </p>,
      <p key="2">
        This extraordinary relationship between humans and felines, rooted in Byzantine practicality, Ottoman charity, Islamic theology, and modern Turkish law, represents a unique paradigm for urban coexistence found nowhere else on Earth. The cats are called <em>"sokak kedisi"</em> (street cats) but locals prefer to think of them as belonging to everyone and no one.
      </p>
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
      <p key="1">
        Archaeological excavations during the construction of the{' '}
        <Source href="https://en.wikipedia.org/wiki/Marmaray">Marmaray rail tunnel (2004-2014)</Source>{' '}
        unearthed numerous cat skeletons dating to the Byzantine era, revealing that felines lived "in pretty good conditions compared to those in Europe" with no pathological disorders—evidence of deliberate care rather than mere tolerance.
      </p>,
      <p key="2">
        <Source href="https://www.hurriyetdailynews.com/byzantine-cats-lived-better-than-european-cousins-study-51055">Professor Vedat Onar and Professor Altan Armutak</Source>{' '}
        of Cerrahpaşa University analyzed these remains and discovered cats concentrated around fishmongers in districts like Kumkapı, Yenikapı, and Aksaray, suggesting an already-established pattern of merchants feeding strays.
      </p>,
      <p key="3">
        The contrast with medieval Europe proves instructive. While{' '}
        <Source href="https://en.wikipedia.org/wiki/Vox_in_Rama">Pope Gregory IX's 1233 decree "Vox in Rama"</Source>{' '}
        made cat extermination obligatory—claiming the devil peered through their eyes—Constantinople's cats flourished. Professor Armutak notes that "there weren't plagues that lasted months and years in Byzantine lands" thanks to cat populations controlling rodents.
      </p>
    ],
    highlights: [
      { label: 'Era', value: '4th-15th century' },
      { label: 'Key Finding', value: 'No disorders' },
      { label: 'Benefit', value: 'Plague prevention' }
    ]
  },
  {
    id: 'ottoman',
    title: 'Ottoman Compassion',
    icon: <Heart className="w-5 h-5" />,
    summary: 'The Ottomans transformed informal cat care into state-sponsored animal welfare funded through the Islamic waqf system.',
    content: [
      <p key="1">
        By the early 1800s, more than half of all arable land in the Ottoman Empire was classified as{' '}
        <Source href="https://en.wikipedia.org/wiki/Waqf">waqf</Source>, and a portion of these inalienable endowments was dedicated specifically to animal care. Special waqfs established houses for dogs and cats throughout cities, paid workers to supply food and water daily, and even funded animal clinics from the 1700s onward.
      </p>,
      <p key="2">
        Some waqf deeds specified that "cats near mosques must be provided with liver every day."{' '}
        <Source href="https://en.wikipedia.org/wiki/Bayezid_II">Sultan Bayezid II's</Source> foundation purchased bread for both cats and dogs and mandated that injured animals "were to be cared for and treated."
      </p>,
      <p key="3">
        The <em>mancacı</em> system professionalized street feeding. These vendors would buy liver, spleen, and hearts from butchers each morning, cook them, and walk through neighborhoods crying "Dog food!" and "Cat manca!" (from Italian <em>manca</em>, meaning animal food). Wealthy families hired mancacılar to ensure every animal in their neighborhood was fed.
      </p>,
      <p key="4">
        <Source href="https://en.wikipedia.org/wiki/Abdul_Hamid_II">Sultan Abdul Hamid II (r. 1876-1909)</Source>{' '}
        kept <strong>1,500 cats</strong> at{' '}
        <Source href="https://en.wikipedia.org/wiki/Y%C4%B1ld%C4%B1z_Palace">Yıldız Palace</Source>, including 12 Persian cats specially brought from Van and Ankara. His daughter wrote about the royal cat "Agha Effendi," a white Angora "so spoiled that he wouldn't eat unless his food was served to him with a fork."
      </p>
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
      <p key="1">
        The primary legal basis comes from an{' '}
        <Source href="https://sunnah.com/ibnmajah:367">authenticated hadith</Source>: Abu Qatadah explained that the Messenger of Allah said: <em>"They (cats) are not impure (najis). They are among those who go around among you."</em> This designation means cats' saliva does not contaminate food or water, and water from which cats have drunk is permitted for <em>wudu</em> (ritual ablution).
      </p>,
      <p key="2">
        <Source href="https://en.wikipedia.org/wiki/Abu_Hurairah">Abu Hurayrah</Source>, one of the most prolific narrators of hadith with over 5,000 recorded traditions, received his very name—meaning "Father of the Kitten"—from Prophet Muhammad himself because he cared for a small male cat.
      </p>,
      <p key="3">
        The Quran contains severe warnings against cruelty to cats. One authenticated hadith in{' '}
        <Source href="https://sunnah.com/bukhari:3482">Sahih al-Bukhari</Source> states: <em>"A woman was tortured and was put in Hell because of a cat which she had kept locked till it died of hunger."</em> A popular Turkish saying warns: "If you've killed a cat, you need to build a mosque to be forgiven by God."
      </p>
    ],
    highlights: [
      { label: 'Status', value: 'Ritually Clean' },
      { label: 'Mosque Access', value: 'Permitted' },
      { label: 'Cruelty', value: 'Forbidden' }
    ]
  },
  {
    id: 'geography',
    title: 'The Perfect Cat City',
    icon: <MapPin className="w-5 h-5" />,
    summary: 'Istanbul\'s geography, climate, and urban fabric create ideal feline habitat.',
    content: [
      <p key="1">
        As a major port astride the{' '}
        <Source href="https://en.wikipedia.org/wiki/Bosphorus">Bosphorus Strait</Source>, connecting the Mediterranean and Black Sea, the city received continuous feline immigration for millennia. Ship's cats kept on merchant vessels to control rodents would disembark during the weeks vessels stayed docked. Many never returned, spreading throughout the city's warrens.
      </p>,
      <p key="2">
        The urban fabric itself creates ideal feline habitat. The vast majority of Istanbul's historic houses were made of wood, which gave shelter and enabled the proliferation of mouse populations.{' '}
        <Source href="https://en.wikipedia.org/wiki/Topkap%C4%B1_Palace">Topkapı Palace</Source> (begun 1459) featured built-in cat doors allowing cats to move freely through the Harem. In October 2025, a historic cat door was reopened after restoration.
      </p>,
      <p key="3">
        Istanbul's modified Mediterranean climate—averaging 6.2°C in January and 25.8°C in August—makes year-round outdoor survival feasible. Community support intensifies during winter: municipalities build wooden <em>kedi evi</em> (cat houses) throughout the city.
      </p>
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
      <p key="1">
        Turkey's{' '}
        <Source href="https://www.lav.it/cpanelav/js/ckeditor/kcfinder/upload/files/files/animal_protection_law_turkey.pdf">Animal Protection Law No. 5199</Source>, enacted July 1, 2004, established one of the world's most progressive frameworks. Article 4 declares: <em>"All animals are born equal and have a right to life within the framework of this Law."</em>
      </p>,
      <p key="2">
        The law mandated municipalities to sterilize, vaccinate, and return stray animals to their place of origin—the <strong>CNVR (Catch-Neuter-Vaccinate-Return)</strong> method. Crucially, euthanasia was banned except for incurable diseases. Between 2004 and 2018, approximately 1.2 million street animals were neutered.
      </p>,
      <p key="3">
        A 2021 amendment reclassified animals from "commodities" to <strong>"living beings"</strong> under Turkish law. Criminal penalties of 6 months to 4 years imprisonment now apply for crimes against animals.
      </p>,
      <p key="4">
        A controversial 2024 amendment sparked massive protests. A{' '}
        <Source href="https://www.change.org/p/t%C3%BCrkiye-deki-sokak-hayvanlar%C4%B1-i%C3%A7in-imza-kampanyas%C4%B1">Change.org petition</Source>{' '}
        gathered over <strong>6 million signatures</strong>—Turkey's most popular campaign in 2024. A Metropoll survey found only 2.7% of Turks support euthanasia.
      </p>
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
    image: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Red_Turkish_Van_Male_Tom.png/800px-Red_Turkish_Van_Male_Tom.png',
      alt: 'A Turkish Van cat with distinctive coloring',
      caption: 'Turkish Van - a native breed known for its love of water',
      credit: 'Wikimedia Commons'
    },
    content: [
      <p key="1">
        <Source href="https://www.ibb.istanbul/en">Istanbul Metropolitan Municipality</Source> (2018) estimates approximately 165,000 stray cats. The Istanbul Chamber of Veterinary Surgeons suggests over 200,000 cats. Animal rescuers' assessments (2024-2025) indicate actual numbers likely more than double official figures.
      </p>,
      <p key="2">
        The European side's{' '}
        <Source href="https://en.wikipedia.org/wiki/Cihangir,_Beyo%C4%9Flu">Cihangir district</Source> (Beyoğlu) has earned the nickname "cat capital," a bohemian neighborhood with dense feline populations. On the Asian side,{' '}
        <Source href="https://en.wikipedia.org/wiki/Kad%C4%B1k%C3%B6y">Kadıköy/Moda</Source>{' '}
        rivals Cihangir's fame—home to the legendary Tombili.
      </p>,
      <p key="3">
        Most Istanbul street cats are domestic shorthairs (mixed breeds) displaying diverse characteristics: tabby patterns, calico, tortoiseshell, tuxedo, and solid colors. Native breeds—the{' '}
        <Source href="https://en.wikipedia.org/wiki/Turkish_Van">Turkish Van</Source>{' '}
        (known for heterochromia and water affinity) and{' '}
        <Source href="https://en.wikipedia.org/wiki/Turkish_Angora">Turkish Angora</Source>{' '}
        (elegant, long-haired)—remain rare among street populations.
      </p>
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
      <p key="1">
        <Source href="https://www.ibb.istanbul/en">Istanbul Metropolitan Municipality</Source>{' '}
        operates impressive veterinary infrastructure: <strong>6 veterinary hospitals</strong>, 1 mobile Vetbüs (converted bus serving as mobile clinic since 2018), 29 animal transportation vehicles, <strong>384 total personnel including 79 veterinarians</strong>, and 39 animal shelters with capacity of 16,700 animals.
      </p>,
      <p key="2">
        All services are <strong>free of charge</strong> for stray animals, including sterilization (keyhole surgery for faster recovery), vaccination, microchipping, and emergency care. In 2019, 139,910 stray animals received veterinary services, and 32,435 were microchipped.
      </p>,
      <p key="3">
        TNR (Trap-Neuter-Return) serves as the official population management method. Neutered cats receive a small triangular notch ("ear tip") on one ear for identification. Istanbul reports no rabies cases since 2016, though Turkey remains{' '}
        <Source href="https://wwwnc.cdc.gov/travel/destinations/traveler/none/turkey">CDC-classified as high-risk</Source>{' '}
        (with dogs, not cats, as principal vector).
      </p>
    ],
    highlights: [
      { label: 'Hospitals', value: '6' },
      { label: 'Veterinarians', value: '79' },
      { label: 'Rabies Cases', value: '0 since 2016' }
    ]
  },
  {
    id: 'lifespan',
    title: 'Lifespan & Survival',
    icon: <Clock className="w-5 h-5" />,
    summary: 'Street cats face harsh realities: 2-5 years without care, but well-fed colony cats can live 10-15 years.',
    content: [
      <p key="1">
        <strong>THE HARSH REALITY:</strong> The average lifespan of a stray cat varies dramatically based on circumstances. According to{' '}
        <Source href="https://www.feralcatproject.org/myths-controversies">research compiled by the Feral Cat Spay/Neuter Project</Source>, a solitary, un-neutered feral cat has an expected lifespan of just <strong>2-3 years</strong>. However, cats in managed colonies with regular feeding can live <strong>10-15 years</strong>—comparable to indoor pets.
      </p>,
      <p key="2">
        <strong>INDOOR VS OUTDOOR:</strong> The contrast is stark. Indoor cats typically live{' '}
        <Source href="https://khpet.com/blogs/cats/how-long-do-outdoor-cats-live-indoor-vs-outdoor-cats">12-18 years on average</Source>, with some reaching their 20s. Outdoor cats face a "constant barrage of environmental threats" including traffic, disease, fighting, and predators. A{' '}
        <Source href="https://phys.org/news/2025-04-road-traffic-accidents-pet-cat.html">UK study found</Source> that <strong>road traffic accidents are the leading cause of death</strong> for cats under 8 years old (45.6% of deaths).
      </p>,
      <p key="3">
        <strong>KITTEN MORTALITY:</strong> The greatest tragedy is kitten survival rates. According to{' '}
        <Source href="https://www.saveacat.org/feral-kittens.html">Alley Cat Rescue</Source>, <strong>75-80% of feral kittens die</strong> before reaching 6 months of age from disease, exposure, malnutrition, or predation. Nearly half die within the first 4 weeks. This harsh reality is why TNR programs focus heavily on preventing births.
      </p>,
      <p key="4">
        <strong>ISTANBUL'S ADVANTAGE:</strong> Istanbul's community care model significantly improves these odds. A{' '}
        <Source href="https://humanepro.org/page/community-cats-scientific-studies-and-data">University of Florida study</Source> found that <strong>83% of cats in managed TNR colonies</strong> were still alive after 6+ years. With Istanbul's network of feeding stations, kedi annesi caretakers, and free municipal veterinary care, street cats here likely have among the best survival rates of any urban feral population.
      </p>,
      <p key="5">
        <strong>DISEASE PREVALENCE:</strong> A{' '}
        <Source href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10829192/">peer-reviewed Istanbul study</Source> found FIV (feline immunodeficiency virus) affects <strong>11-22% of cats</strong>, while FeLV (feline leukemia) is relatively rare at 1-7%. The higher FIV rate is attributed to more cats having outdoor access and fewer being neutered historically. Neutering through TNR reduces fighting and thus disease transmission.
      </p>,
      <p key="6">
        <strong>THE RECORD HOLDERS:</strong> For perspective, the{' '}
        <Source href="https://www.guinnessworldrecords.com/world-records/oldest-cat-ever">oldest cat ever recorded</Source> was <strong>Creme Puff</strong>, who lived an astonishing <strong>38 years and 3 days</strong> (1967-2005) in Austin, Texas. The current oldest living cat is{' '}
        <Source href="https://en.wikipedia.org/wiki/Flossie_(cat)">Flossie</Source> in the UK, who turned 30 in December 2025.
      </p>,
      <p key="7">
        <strong>CAT YEARS TO HUMAN YEARS:</strong> Cats age rapidly in their first two years. The first year equals roughly <strong>15 human years</strong>, and year two adds another 9 (so a 2-year-old cat is ~24 in human years). After that, each cat year equals about 4 human years. So a 10-year-old street cat who has survived against the odds is roughly <strong>56 in human years</strong>—truly a survivor.
      </p>
    ],
    highlights: [
      { label: 'Without Care', value: '2-3 years' },
      { label: 'With Colony Care', value: '10-15 years' },
      { label: 'Kitten Mortality', value: '75-80%' }
    ]
  },
  {
    id: 'community',
    title: 'Kedi Annesi Tradition',
    icon: <Heart className="w-5 h-5" />,
    summary: 'The "kedi annesi" (cat mother) tradition dates to Ottoman times—informal caretakers who feed and monitor neighborhood cats.',
    content: [
      <p key="1">
        The Turkish tradition of <strong>"kedi annesi"</strong> (cat mother) and <strong>"kedi babası"</strong> (cat father)—informal caretakers who feed neighborhood cats—dates to Ottoman times. These individuals, often elderly residents, maintain feeding schedules, build shelters, monitor cat health, and coordinate veterinary care.
      </p>,
      <p key="2">
        The municipality supports this culture with <strong>199 official feeding stations</strong> across Istanbul, distributing approximately 1 ton of dry food daily (149 tons annually). Pet food vending machines allow citizens to insert coins to dispense food.
      </p>,
      <p key="3">
        The innovative{' '}
        <Source href="https://en.wikipedia.org/wiki/Pugedon">Pugedon</Source>{' '}
        machines, invented by Engin Girgin, dispense pet food when plastic bottles are deposited for recycling—now implemented in <strong>29 countries</strong>.
      </p>,
      <p key="4">
        Local businesses commonly maintain food stations—restaurants save portions for local cats, hotels care for resident felines, and fish markets set aside scraps. Bright-painted wooden <em>kedi evi</em> (cat houses) shelter cats from weather throughout the city.
      </p>
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
    image: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Tombili_the_cat_n2.jpg/800px-Tombili_the_cat_n2.jpg',
      alt: 'Tombili the cat in her iconic lounging pose',
      caption: 'The iconic photo of Tombili that went viral worldwide',
      credit: 'Wikimedia Commons'
    },
    content: [
      <p key="1">
        <strong>TOMBILI:</strong>{' '}
        <Source href="https://en.wikipedia.org/wiki/Tombili">A tabby cat from Kadıköy's Ziverbey neighborhood</Source>{' '}
        became a global phenomenon for her distinctive way of leaning against steps, one paw draped over her tubby belly. After she died on August 1, 2016, a Change.org campaign gathered over 17,000 signatures. A bronze statue was unveiled on <strong>October 4, 2016 (World Animal Day)</strong>. In a bizarre twist, the statue was stolen in November 2016—Turkish MP Tuncay Özkan declared "They are enemies of everything beautiful." Within a week, the thieves returned it after massive public outcry.
      </p>,
      <p key="2">
        <strong>GLI:</strong>{' '}
        <Source href="https://en.wikipedia.org/wiki/Gli_(cat)">A cross-eyed domestic shorthair</Source>{' '}
        born around 2004, Gli lived her entire 16 years at{' '}
        <Source href="https://en.wikipedia.org/wiki/Hagia_Sophia">Hagia Sophia</Source>. She gained international fame when cameras captured{' '}
        <Source href="https://obamawhitehouse.archives.gov/blog/2009/04/07/presidents-first-trip-abroad">Barack Obama</Source>{' '}
        and Turkish President Erdoğan petting her during Obama's 2009 visit. Her Instagram account{' '}
        <Source href="https://www.instagram.com/hagiasophiacat/">@hagiasophiacat</Source>{' '}
        had <strong>118,000+ followers</strong>. She died November 7, 2020.
      </p>,
      <p key="3">
        <strong>THE KEDI DOCUMENTARY:</strong> Director{' '}
        <Source href="https://en.wikipedia.org/wiki/Kedi_(2016_film)">Ceyda Torun's 2016 documentary "Kedi"</Source>{' '}
        brought Istanbul's cat culture to global audiences. It achieved a{' '}
        <Source href="https://www.rottentomatoes.com/m/kedi_2017"><strong>98% Rotten Tomatoes rating</strong></Source>, grossed over $5 million worldwide, and Time Magazine named it one of the top ten films of 2017.
      </p>
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
      <p key="1">
        <strong>DISEASE CONSIDERATIONS:</strong> Turkey remains{' '}
        <Source href="https://wwwnc.cdc.gov/travel/destinations/traveler/none/turkey">CDC-classified as high-risk for rabies</Source>, though Istanbul reports no cases since 2016.{' '}
        <Source href="https://en.wikipedia.org/wiki/Cat-scratch_disease">Cat Scratch Disease (Bartonella)</Source>{' '}
        affects approximately 40% of cats. Ringworm and fleas are common among strays.
      </p>,
      <p key="2">
        <strong>APPROACH SAFELY:</strong> Let cats come to you. Extend your hand slowly, palm down, allowing the cat to sniff before petting. Safe zones include back of head, chin, cheeks, and along the back. <strong>Avoid bellies.</strong> Warning signs: flattened ears, puffed tail, hissing, arched back with raised fur.
      </p>,
      <p key="3">
        <strong>HYGIENE ESSENTIALS:</strong> Wash hands immediately with soap for 20 seconds after contact. Carry alcohol-based sanitizer. Avoid touching your face. Don't allow cats to lick open wounds.
      </p>,
      <p key="4">
        <strong>IF SCRATCHED OR BITTEN:</strong> Wash the wound immediately with soap and running water for at least 5 minutes. Apply antiseptic. <strong>Seek medical care within 8 hours</strong>—30% of people treated for cat bites on hands require hospitalization. Emergency number: <strong>112</strong>. English-speaking hospitals: Acıbadem, Medical Park, Memorial.
      </p>
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
      <p key="1">
        Feeding street cats is <strong>culturally celebrated</strong> in Istanbul. Cat food (<em>kuru mama</em>) is readily available at any Turkish supermarket—look for{' '}
        <Source href="https://www.migros.com.tr/">Migros</Source>,{' '}
        <Source href="https://www.carrefoursa.com/">CarrefourSA</Source>,{' '}
        <Source href="https://www.a101.com.tr/">A101</Source>, or{' '}
        <Source href="https://www.bim.com.tr/">BİM</Source>.
      </p>,
      <p key="2">
        <strong>APPROPRIATE FOODS:</strong> Commercial dry/wet cat food (best option), plain cooked chicken without bones.
      </p>,
      <p key="3">
        <strong>FOODS TO AVOID:</strong> Raw meat, fish with bones, dairy products (most cats are lactose intolerant), anything seasoned, and especially <strong>onion, garlic, or chocolate</strong> (all toxic to cats).
      </p>,
      <p key="4">
        Many locals keep bags of dry food in their cars or bags to distribute while walking through neighborhoods. You'll often see communal food and water bowls on sidewalks—feel free to top them up!
      </p>
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
      <p key="1">
        <strong>THE CAT MUSEUM:</strong> Istanbul's first animal-themed museum opened in October 2023 in{' '}
        <Source href="https://catmuseumistanbul.com/">Beşiktaş</Source>. Founded by poet Sunay Akın, it features a collection spanning 15 years of research on cats in fairy tales, toys, and comics. Half of profits support stray cat welfare.
      </p>,
      <p key="2">
        <strong>CAT CAFES:</strong> İki Kedi Kafe in Moda (named for two cats forming a yin-yang) and Catmosfer Cat Cafe are popular spots to interact with resident felines while enjoying Turkish coffee.
      </p>,
      <p key="3">
        <strong>CAT TOURS:</strong> Tour operators offer dedicated cat tours visiting Kadıköy, the{' '}
        <Source href="https://www.google.com/maps/place/Tombili+Heykeli/">Tombili statue</Source>, and the Princes' Islands.
      </p>,
      <p key="4">
        <strong>SOCIAL MEDIA:</strong> Follow{' '}
        <Source href="https://www.instagram.com/catsofistanbul/">@catsofistanbul</Source>{' '}
        (nearly 24,000 followers) for daily feline content. The hashtags <strong>#CatsOfIstanbul</strong> and <strong>#CityOfCats</strong> aggregate countless tourist photographs.
      </p>
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
      <p key="1">
        Istanbul's cat culture offers profound lessons about urban life. The city presents what anthropologist{' '}
        <Source href="https://en.wikipedia.org/wiki/Anna_Lowenhaupt_Tsing">Anna Tsing</Source>{' '}
        calls "multispecies entanglements"—everyday moments where human and nonhuman lives intertwine without dominance or extraction.
      </p>,
      <p key="2">
        The documentary Kedi articulates this philosophy: <em>"In Istanbul, cats are the mirrors to the people, allowing them to reflect on their lives in ways nothing else could."</em> This challenges the Western distinction between humans with language and creatures who merely express pleasure and pain.
      </p>,
      <p key="3">
        American observer Michael Jensen contrasts Western pet culture—"quid pro quo: you follow my rules, adore me… and I'll keep taking care of you"—with Istanbul's model, where humans care for cats who "largely ignore them. Or sit and judge them in that uniquely feline way." Care given without expectation of return represents a fundamentally different ethical relationship.
      </p>,
      <p key="4">
        As one cat cafe owner quoted in Kedi puts it: <em>"Dogs think people are God, but cats don't. They know better."</em>
      </p>
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
        <p className="text-xs text-center mt-2">
          <Source href="https://www.rottentomatoes.com/m/kedi_2017">— Kedi (2016 Documentary)</Source>
        </p>
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
                      {topic.image.credit && (
                        <p className="text-xs text-text-muted mt-0.5">Photo: {topic.image.credit}</p>
                      )}
                    </div>
                  </div>
                )}

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
                <div className="space-y-3 text-sm text-text-secondary leading-relaxed">
                  {topic.content}
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
