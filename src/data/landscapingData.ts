import { ServiceItem, Testimonial, ProjectPhoto } from '../types';

export const ASSETS = {
  logo: "https://lh3.googleusercontent.com/aida/AEtjO1XDZrjeHQUVNfVfk8wrqvR6dvaE_zhy1ab19YUG6AtX6uc8cVYIU-gF1j3I1bzW1jAD715oWAT-QxjSfLlf1aIHMpiuOgIyKdIdsLHHzDAY61nch1BfZTp0J48MxzWSe_50AYKNFUFckmRHDk1rpqrbXI_uO1M-2fv06-2ejRoOWAQXl0I-u6Lmh3FVZYFHe-F-M2c940mG725ud-vOzzPrdoVsPpjZzMKIaufiH95jQLihhZceuv_qKGA",
  heroEstate: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=85",
  founderJavier: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85",
  projectWestlake: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1600&q=85",
  projectTarrytown: "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=1600&q=85",
  projectBartonCreek: "https://images.unsplash.com/photo-1584467735815-f778f274e296?auto=format&fit=crop&w=1600&q=85",
  projectRollingwood: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1600&q=85",
  beforeYard: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1600&q=85",
  afterYard: "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=1600&q=85",
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'mowing',
    title: 'Lawn Maintenance & Mowing',
    priceTag: 'From $45 / visit',
    iconName: 'content_cut',
    description: 'Precision weekly and bi-weekly mowing, sharp perimeter edging, weed-eating fence lines, crisp striping patterns, and pristine cleanup blow-off.',
    highlightTag: 'Weekly • Bi-Weekly',
    category: 'mowing',
    imageUrl: 'https://images.unsplash.com/photo-1599687351724-dfa3c4ff81b1?auto=format&fit=crop&w=1200&q=80',
    detailedInclusions: [
      'Commercial rotary cut with razor-sharpened blades changed daily',
      '90-degree crisp sidewalk & curb perimeter edging',
      'String trimmer line trimming around fenceposts, AC pads, and trees',
      'Gentle leaf blow-off on all driveways, stone patios, and pool copings',
      'Seasonal deck height calibration suited for Central Texas heat',
      'Organic bagging or micro-mulch option based on turf health'
    ]
  },
  {
    id: 'sod',
    title: 'Sod Installation & Landscaping',
    priceTag: 'Custom Estimates',
    iconName: 'grass',
    description: 'Drought-tolerant Palisades Zoysia, Tifway Bermuda, and Texas St. Augustine installation. Soil grading, loam preparation, and cut limestone borders.',
    highlightTag: 'Root Guarantee',
    category: 'sod',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    detailedInclusions: [
      'Full existing turf removal, deep tilling & weed eradication',
      '2-inch rich Hill Country organic compost & topsoil grading',
      'Farm-fresh Texas sod delivered and rolled same morning',
      'Seamless pallet interlock laying with staggered joints',
      'Starter fertilizer root booster & first heavy watering saturation',
      '100% 30-Day Root Establishment Guarantee'
    ]
  },
  {
    id: 'design',
    title: 'Flower Bed & Native Texas Design',
    priceTag: 'Design & Planting',
    iconName: 'potted_plant',
    description: 'Low-water Hill Country xeriscaping, rich organic hardwood mulch refresh, Texas sage, agave, and seasonal blooming perennials framed with stone.',
    highlightTag: 'Water-Wise Plants',
    category: 'design',
    imageUrl: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80',
    detailedInclusions: [
      'Native Texas drought-hardy plants (Texas Sage, Blackfoot Daisy, Agave, Salvia)',
      'Double-shredded dark organic cedar or hardwood mulch (3-inch depth)',
      'Natural dry-stack or mortared Texas limestone rock borders',
      'Weed barrier underlayment with drip-line integration',
      'Seasonal flower rotation (Lantana, Esperanza, Autumn Sage)',
      'Custom stone flowerbed raised tiers and decomposed granite paths'
    ]
  },
  {
    id: 'seasonal',
    title: 'Seasonal Cleanups & Property Prep',
    priceTag: 'Seasonal Prep',
    iconName: 'eco',
    description: 'Core aeration, deep overseeding, autumn live-oak leaf haul away, winter freeze canopy recovery, and meticulous shrub pruning.',
    highlightTag: 'Full Haul-Off',
    category: 'seasonal',
    imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80',
    detailedInclusions: [
      'Heavy Live Oak spring leaf drop and autumn oak leaf vacuum cleanup',
      'Hollow-tine core lawn aeration to break up hard Texas clay',
      'Deep overseeding with drought-resilient seed blends',
      'Freeze damage pruning, dead branch cutting & palm tree frond trimming',
      'Shrub shaping, formal boxwood contouring, and ornamental hedge care',
      'Complete eco-friendly debris haul-away and green waste recycling'
    ]
  },
  {
    id: 'masonry',
    title: 'Austin Limestone Masonry & Hardscape',
    priceTag: 'Custom Quote',
    iconName: 'foundation',
    description: 'Natural Hill Country white limestone retaining walls, flagstone garden patios, mortared bed curbing, tree rings, and crushed granite pathways.',
    highlightTag: 'Hill Country Stone',
    category: 'masonry',
    imageUrl: 'https://images.unsplash.com/photo-1584467735815-f778f274e296?auto=format&fit=crop&w=1200&q=80',
    detailedInclusions: [
      'Austin white limestone dry-stack or mortared retaining walls',
      'Custom cut limestone flower bed & tree ring borders',
      'Natural flagstone pathways, firepit surrounds & patios',
      'Compacted decomposed granite walkways with steel edging',
      'Drainage swales & French drains integrated with stone grading',
      'Long-lasting structural stability against heavy Central Texas rainfall'
    ]
  },
  {
    id: 'tree',
    title: 'Tree Trimming & Storm/Freeze Clearance',
    priceTag: 'Rapid Response',
    iconName: 'forest',
    description: 'Live Oak canopy lifting, ornamental tree pruning, palm tree freeze clearing, high-wind storm debris removal, and emergency limb haul-off.',
    highlightTag: 'Storm Priority',
    category: 'tree',
    imageUrl: 'https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&w=1200&q=80',
    detailedInclusions: [
      'Live Oak, Cedar Elm, and Pecan branch canopy raising & clearance',
      'Winter freeze damaged limb cutting & dead frond removal',
      'High-wind hazardous branch pruning away from rooflines & power lines',
      'Clean wood chipping & prompt haul-off with yard swept pristine',
      'Deep-root tree fertilization for drought resilience',
      'Same-day rapid crew response for emergency fallen branches'
    ]
  }
];

export const TEXAS_GRASS_GUIDE = [
  {
    id: 'zoysia',
    name: 'Palisades Zoysia',
    tagline: 'The Gold Standard of Central Texas Lawns',
    sunRequirement: '4–5+ Hours (High Shade Tolerance)',
    droughtTolerance: 'Very High (Superior drought survival)',
    mowingHeight: '1.5 – 2.5 inches',
    austinBestFor: 'Luxury Westlake & Hill Country homes with mixed shade oaks and high traffic.',
    colorGrade: 'Deep Emerald Velvet',
    accentColor: '#163620',
  },
  {
    id: 'bermuda',
    name: 'Tifway 419 Bermuda',
    tagline: 'Maximum Sun & Athletic Resilience',
    sunRequirement: '7+ Hours Full Sun (No Heavy Shade)',
    droughtTolerance: 'Extreme (Quickest recovery from drought)',
    mowingHeight: '1.0 – 1.75 inches',
    austinBestFor: 'Expansive sunny front lawns, dog play areas, and golf-course feel.',
    colorGrade: 'Vibrant Dense Green',
    accentColor: '#3e6843',
  },
  {
    id: 'staugustine',
    name: 'St. Augustine (Raleigh / Floratam)',
    tagline: 'Classic Broad-Leaf Texas Shade Turf',
    sunRequirement: '3–4 Hours (Tolerates dappled shade under trees)',
    droughtTolerance: 'Moderate (Needs deep watering during July heat)',
    mowingHeight: '3.0 – 4.0 inches',
    austinBestFor: 'Historic Tarrytown & Central Austin tree-canopied lots with rich topsoil.',
    colorGrade: 'Lush Forest Green',
    accentColor: '#2d6a4f',
  },
];

export const AUSTIN_WATERING_RULES = [
  {
    addressType: 'even' as const,
    label: 'Even Residential Addresses (Ends in 0, 2, 4, 6, 8)',
    automaticSprinklerDays: 'Sunday & Thursday',
    hoseEndSprinklerDays: 'Sunday & Thursday',
    allowedHours: 'Midnight – 10:00 AM or 7:00 PM – Midnight',
    proTip: 'Deep soak twice weekly before 8:00 AM to drive roots past shallow caliche rock layers.',
  },
  {
    addressType: 'odd' as const,
    label: 'Odd Residential Addresses (Ends in 1, 3, 5, 7, 9)',
    automaticSprinklerDays: 'Wednesday & Saturday',
    hoseEndSprinklerDays: 'Wednesday & Saturday',
    allowedHours: 'Midnight – 10:00 AM or 7:00 PM – Midnight',
    proTip: 'Drip irrigation for flowerbeds & native plants is permitted any day before 10 AM or after 7 PM.',
  },
  {
    addressType: 'commercial' as const,
    label: 'Commercial & Multi-Family Properties',
    automaticSprinklerDays: 'Tuesday & Friday',
    hoseEndSprinklerDays: 'Tuesday & Friday',
    allowedHours: 'Midnight – 8:00 AM',
    proTip: 'Javier coordinates commercial mowing schedules so turf is never cut directly after watering.',
  },
];

export const AUSTIN_SEASONAL_CYCLE = [
  {
    season: 'Spring (March – May)',
    focus: 'Turf Awakening & Pre-Emergent',
    description: 'Pre-emergent barrier against Crabgrass & Dallisgrass, core aeration to loosen hard Texas clay, and early scalp cut.',
    badgeColor: 'bg-emerald-100 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-300 border-emerald-300',
    icon: 'spa',
  },
  {
    season: 'Summer (June – August)',
    focus: 'Heat Defense & High Cut Deck',
    description: 'Blades raised to 3.5" to shade fragile root zones in 100°F+ heat; organic cedar mulch applied to lock in bed moisture.',
    badgeColor: 'bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300 border-amber-300',
    icon: 'sunny',
  },
  {
    season: 'Fall (Sept – November)',
    focus: 'Oak Leaf Cleanup & Overseed',
    description: 'Clearing heavy Live Oak leaf blanket, fall root-builder fertilization, winter rye overseeding, and perennial dividing.',
    badgeColor: 'bg-orange-100 text-orange-900 dark:bg-orange-950 dark:text-orange-300 border-orange-300',
    icon: 'energy_savings_leaf',
  },
  {
    season: 'Winter (Dec – February)',
    focus: 'Freeze Shield & Shrub Sculpting',
    description: 'Dormant pruning, wrapping sensitive palms during Arctic blasts, emergency branch clearing, and stone bed edging repairs.',
    badgeColor: 'bg-cyan-100 text-cyan-900 dark:bg-cyan-950 dark:text-cyan-300 border-cyan-300',
    icon: 'ac_unit',
  },
];

export const PROJECT_GALLERY: ProjectPhoto[] = [
  {
    id: 'westlake-retaining',
    title: 'Westlake Native Xeriscape',
    location: 'Westlake Hills, Austin',
    imageUrl: ASSETS.projectWestlake,
    alt: 'High-end limestone flower bed with crushed granite pathway, purple salvia, and clean sharp mulch installed in an Austin Texas luxury home yard',
    description: 'Complete xeriscape overhaul featuring Austin limestone masonry, deep cedar mulch, purple salvia, and water-wise Texas red yucca.'
  },
  {
    id: 'tarrytown-turf',
    title: 'Tarrytown Turf Care',
    location: 'Tarrytown, Austin',
    imageUrl: ASSETS.projectTarrytown,
    alt: 'Vibrant healthy emerald green Bermuda turf lawn with crisp sharp edging along a concrete driveway and stone mailbox in Central Texas sunshine',
    description: 'Precision bi-weekly Bermuda turf maintenance, razor-sharp concrete driveway edging, and organic fertilization program.'
  },
  {
    id: 'barton-creek-stone',
    title: 'Barton Creek Limestone & Steps',
    location: 'Barton Creek, Austin',
    imageUrl: ASSETS.projectBartonCreek,
    alt: 'Hand-hewn Hill Country white limestone retaining walls with stone steps and terraced native garden',
    description: 'Custom Austin limestone multi-tiered retaining wall with natural flagstone steps, drip line integration, and erosion control.'
  },
  {
    id: 'rollingwood-canopy',
    title: 'Rollingwood Live Oak Canopy',
    location: 'Rollingwood, Austin',
    imageUrl: ASSETS.projectRollingwood,
    alt: 'Towering mature Texas Live Oak trees with manicured shade lawn in Rollingwood estate',
    description: 'Selective canopy lifting, deadwood clearance, root zone aeration, and drought-hardy shade turf establishment.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Robert V.',
    initials: 'RV',
    neighborhood: 'Austin, TX (6-Year Client)',
    rating: 5.0,
    quote: '“I have used Javier’s services for six years now. Consistently great work, always professional, highly responsive, and completely reliable. He treats our yard like his own.”',
    avatarBg: 'bg-[#163620] text-white',
    date: 'Verified Thumbtack Review',
    serviceUsed: '6-Year Regular Grounds Maintenance'
  },
  {
    id: '2',
    name: 'Melissa T.',
    initials: 'MT',
    neighborhood: 'South Austin / Del Valle',
    rating: 5.0,
    quote: '“Initially hired Javier for a one-time clean-up and was so impressed with the value and quality that we hired him for bi-weekly service: mowing, weeding, spraying for weeds, and leaf clean-up at an amazing rate! The crew is quick and efficient.”',
    avatarBg: 'bg-[#d9822b] text-white',
    date: 'Verified Client Review',
    serviceUsed: 'Bi-Weekly Lawn Care & Weed Spray'
  },
  {
    id: '3',
    name: 'Greg K.',
    initials: 'GK',
    neighborhood: 'Westlake Hills, Austin',
    rating: 5.0,
    quote: '“Thorough and efficient clean-up! Javier showed incredible attention to detail on his very first visit, leaving our flower beds and yard pristine. We immediately hired him for ongoing monthly maintenance.”',
    avatarBg: 'bg-[#234e31] text-white',
    date: 'Verified HomeAdvisor Review',
    serviceUsed: 'Thorough Property Reset & Bed Care'
  },
  {
    id: '4',
    name: 'Sandra L.',
    initials: 'SL',
    neighborhood: 'Central Austin / Tarrytown',
    rating: 5.0,
    quote: '“Excellent service at a very fair price. Javier communicates promptly, arrives right on time, and the grass edges and tree pruning look clean every single visit.”',
    avatarBg: 'bg-[#00200d] text-white',
    date: 'Verified Austin Review',
    serviceUsed: 'Mowing, Edging & Tree Trimming'
  },
  {
    id: '5',
    name: 'Carlos M.',
    initials: 'CM',
    neighborhood: 'Del Valle / SE Austin, 78617',
    rating: 5.0,
    quote: '“Local family-run company that actually cares. Javier took down low-hanging storm branches and hauled everything away without leaving a single twig behind. Highly recommended!”',
    avatarBg: 'bg-[#3e6843] text-white',
    date: 'Verified Local Neighbor',
    serviceUsed: 'Tree Pruning & Storm Haul-Off'
  }
];

export const SERVICE_AREAS = [
  { name: 'Del Valle (Home Base)', zip: '78617', schedule: 'Daily Dispatch' },
  { name: 'West Lake Hills', zip: '78746', schedule: 'Mon & Thu' },
  { name: 'Tarrytown', zip: '78703', schedule: 'Tue & Fri' },
  { name: 'Central Austin', zip: '78701', schedule: 'Mon – Sat' },
  { name: 'South Congress / 78704', zip: '78704', schedule: 'Mon & Fri' },
  { name: 'Barton Creek', zip: '78735', schedule: 'Mon & Thu' },
  { name: 'Lakeway', zip: '78734', schedule: 'Wed & Sat' },
  { name: 'Rollingwood', zip: '78746', schedule: 'Tue & Fri' },
  { name: 'Buda / Kyle Corridor', zip: '78610', schedule: 'Tue & Sat' },
  { name: 'Circle C Ranch', zip: '78739', schedule: 'Tue & Thu' },
  { name: 'Round Rock', zip: '78681', schedule: 'Wed & Fri' },
  { name: 'Cedar Park', zip: '78613', schedule: 'Wed & Fri' },
];
