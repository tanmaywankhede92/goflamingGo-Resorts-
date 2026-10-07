import { IMAGES } from './images';

/**
 * GO FLAMINGO RESORT — WILDLIFE & BIRDWATCHING STRUCTURED DATA
 * 
 * Factual biodiversity data for Pench Tiger Reserve.
 * Includes apex predators, large herbivores, approx. 310 documented bird species,
 * ethical wildlife guidelines, and photography advice.
 */

export const WILDLIFE_DATA = {
  hero: {
    badge: 'Biodiversity Hotspot · Pench',
    eyebrow: 'Fauna & Avifauna Expeditions',
    title: 'Wildlife & Birdwatching in Pench',
    subtitle: 'From apex predators tracking through teak canopies to approximately 310 documented bird species across wetlands and forests, Pench is one of Central India’s most vibrant ecological sanctuaries.',
    image: IMAGES.home.tiger,
  },

  livingForest: {
    eyebrow: 'The Ecosystem',
    title: 'The Living Forest of Pench',
    lead: 'Spanning the Satpura hill ranges, Pench Tiger Reserve is characterized by dry deciduous forests dominated by teak, interspersed with bamboo clumps, seasonal nalas, and the majestic Pench River.',
    body: [
      'This diverse mosaic of habitats creates exceptional prey density, supporting a healthy food web. Vast herds of spotted deer, sambar, and gaur graze across open meadows, while troops of northern plains grey langurs keep vigilant watch from the tree canopy.',
      'The reserve served as the natural inspiration for Rudyard Kipling’s famous jungle tales, preserving an untamed ecological landscape where every sound signals life and movement.'
    ]
  },

  predators: [
    {
      name: 'Royal Bengal Tiger',
      scientific: 'Panthera tigris tigris',
      tag: 'Apex Predator',
      desc: 'Solitary, powerful, and majestic. Pench’s teak forests and riverine valleys provide ideal cover and abundant prey for tigers. Tracks are followed through fresh pugmarks, territorial scrape marks on trunks, and piercing deer alarm calls.',
      image: IMAGES.home.tiger,
    },
    {
      name: 'Indian Leopard',
      scientific: 'Panthera pardus fusca',
      tag: 'Master of Camouflage',
      desc: 'Stealthy and highly adaptable, leopards thrive across the rocky outcrops, denser buffer foliage, and teak boughs of Pench. Known for their rosette patterns that blend invisibly into dappled forest light.',
      image: IMAGES.wildlife.tiger,
    },
    {
      name: 'Dhole (Asiatic Wild Dog)',
      scientific: 'Cuon alpinus',
      tag: 'Cooperative Pack Hunter',
      desc: 'Distinctive whistling calls and extraordinary coordination make dhole packs among the most formidable hunters in Central India. Sighting a pack on the move is an unforgettable safari highlight.',
      image: IMAGES.home.safari,
    }
  ],

  herbivores: [
    {
      name: 'Gaur (Indian Bison)',
      scientific: 'Bos gaurus',
      desc: 'The world’s largest bovine species, standing up to six feet tall at the shoulder. Herds graze peacefully along grassy fire-lines and near waterbodies in the early morning.'
    },
    {
      name: 'Chital (Spotted Deer)',
      scientific: 'Axis axis',
      desc: 'The ubiquitous and beautiful primary prey of the forest. Their mutualistic relationship with langurs provides the forest’s most reliable early-warning alarm system.'
    },
    {
      name: 'Sambar Deer',
      scientific: 'Rusa unicolor',
      desc: 'The largest Asian deer, favoring dense woodland and water pools. Their sharp, bell-like alarm bark indicates the immediate presence of a hunting tiger or leopard.'
    },
    {
      name: 'Sloth Bear',
      scientific: 'Melursus ursinus',
      desc: 'Shaggy, nocturnal foragers with specialized long claws and snout for digging into termite mounds and feasting on fallen Mahua blossoms.'
    }
  ],

  birdlife: {
    eyebrow: 'Avian Diversity',
    title: 'Approximately 310 Documented Bird Species',
    lead: 'Pench Tiger Reserve is an internationally recognized Important Bird Area (IBA), sheltering resident woodland species and seasonal migratory visitors.',
    description: 'The varied landscape of high teak canopies, open grasslands, riverine beds, and Totladoh reservoir banks creates micro-habitats for diverse birdlife throughout the year.',
    groups: [
      {
        category: 'Canopy & Woodland Birds',
        species: [
          'Malabar Pied Hornbill',
          'Indian Pitta (seasonal summer migrant)',
          'Crested Serpent Eagle',
          'Indian Roller (Neelkanth)',
          'Changeable Hawk-Eagle',
          'Asian Paradise Flycatcher',
          'Golden Oriole'
        ]
      },
      {
        category: 'Riverine, Wetland & Waterfowl',
        species: [
          'Grey-headed Fish Eagle',
          'White-throated Kingfisher',
          'Pied Kingfisher',
          'Stork-billed Kingfisher',
          'Woolly-necked Stork',
          'Black Stork (winter visitor)',
          'Little Cormorant & River Tern'
        ]
      },
      {
        category: 'Nocturnal & Forest Floor Dwellers',
        species: [
          'Jungle Owlet',
          'Brown Fish Owl',
          'Mottled Wood Owl',
          'Indian Nightjar',
          'Painted Spurfowl',
          'Jungle Bush Quail',
          'Indian Peafowl'
        ]
      }
    ]
  },

  birdwatchingAtResort: {
    title: 'Birding within Go Flamingo Grounds',
    desc: 'You do not have to leave the resort to begin birdwatching. The native trees, garden flowering plants, and quiet perimeter of Go Flamingo attract numerous resident birds including sunbirds, barbets, treepies, and parakeets right outside your private cottage verandah.'
  },

  photographyTips: [
    {
      title: 'Optimal Focal Lengths',
      desc: 'A versatile telephoto lens such as 100-400mm or a prime 500mm/600mm is ideal for capturing distant birds and clear portraits of wildlife from an open Gypsy.'
    },
    {
      title: 'Managing Dappled Light',
      desc: 'Teak forests create sharp contrasts between sunlight and deep shade. Use spot metering and keep shutter speeds high (at least 1/1000s) for moving animals.'
    },
    {
      title: 'Dust Protection for Gear',
      desc: 'Forest tracks are unpaved and dusty. Carry sealed camera bags, dry microfiber cloths, and protective rain/dust sleeves for your lenses.'
    },
    {
      title: 'Use Beanbags in Gypsies',
      desc: 'Tripods cannot be set up inside safari vehicles. Rest your telephoto lens on a soft beanbag draped over the Gypsy roll bar for stability.'
    }
  ],

  readingTheForest: [
    {
      title: 'The Langur Bark',
      desc: 'From high in the canopy, grey langurs have a clear panoramic view. A sudden, staccato coughing bark signals a moving predator below.'
    },
    {
      title: 'The Chital Sneeze',
      desc: 'Spotted deer stomp their hooves and emit a high-pitched sneeze-like alarm call when they spot a carnivore lurking in the grass.'
    },
    {
      title: 'Pugmarks in the Dust',
      desc: 'Fresh tracks reveal the direction of movement, animal size, gender, and whether the predator was walking casually or in a hunting stalk.'
    },
    {
      title: 'The Sudden Jungle Silence',
      desc: 'When insects stop buzzing and songbirds fall silent, the entire forest has paused to track a predator passing through the corridor.'
    }
  ],

  ethicalWildlifeTourism: [
    'Always maintain silence in wildlife presence to avoid stress or alteration of natural behavior.',
    'Strictly avoid using flash photography or artificial lighting on wild animals.',
    'Do not prompt drivers to position vehicles closer than the safe distance mandated by park rules.',
    'Never playback bird calls or audio lures to attract nesting or breeding avifauna.'
  ]
};
