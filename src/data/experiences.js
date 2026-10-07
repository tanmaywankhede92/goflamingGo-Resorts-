import { IMAGES } from './images';

/**
 * GO FLAMINGO RESORT — MASTER EXPERIENCES HUB DATA
 * 
 * Central structured data for /experiences overview page.
 * Unifies the four experience pillars, slow-wilderness philosophy,
 * illustrative safari day timeline, and conversion pathways.
 */

export const EXPERIENCES_HUB_DATA = {
  hero: {
    badge: 'Pench Wilderness Experiences',
    eyebrow: 'Unrivaled Forest Immersion',
    title: 'Into the Heart of the Wild',
    subtitle: 'From dawn Gypsy safaris across teak forests to birdwatching among approximately 310 species and quiet evenings beneath starlit skies—discover the untamed rhythms of Pench from Go Flamingo Resort.',
    image: IMAGES.home.hero,
  },

  philosophy: {
    eyebrow: 'Our Wilderness Philosophy',
    title: 'Slow Wilderness & Forest Immersion',
    lead: 'We believe true luxury in the wild is not about rushing through the forest, but tuning into its unhurried pace.',
    body: [
      'At Go Flamingo Resort, we approach Pench Tiger Reserve with profound respect for its natural inhabitants. We advocate for responsible, ethical wildlife tourism that values every forest encounter—from fresh tiger pugmarks on dry riverbeds to the call of a hornbill across the canopy.',
      'Our resort serves as a peaceful, comfortable sanctuary where you can recharge in nature. Located minutes from Sillari Gate, your journey transitions effortlessly from the thrill of the forest to the comfort of private cottages, warm regional cuisine, and starlit evening bonfires.'
    ]
  },

  fourPillars: [
    {
      id: 'safari',
      eyebrow: '4x4 Forest Drives',
      title: 'Jungle Safaris at Sillari Gate',
      description: 'Explore the teak forests of Pench in open 4x4 Gypsies guided by certified Forest Department naturalists across morning and afternoon shifts.',
      image: IMAGES.home.safari,
      link: '/experiences/safari',
      ctaLabel: 'Explore Safaris',
      badge: 'Core & Buffer Drives'
    },
    {
      id: 'wildlife',
      eyebrow: 'Fauna & Avifauna',
      title: 'Wildlife & Birdwatching',
      description: 'Discover rich biodiversity including Royal Bengal Tigers, leopards, and approximately 310 documented bird species in their natural habitat.',
      image: IMAGES.home.tiger,
      link: '/experiences/wildlife',
      ctaLabel: 'Explore Wildlife',
      badge: '~310 Bird Species'
    },
    {
      id: 'nature',
      eyebrow: 'On Foot in the Forest',
      title: 'Nature & Forest Trails',
      description: 'Slow down along permitted buffer nature paths to examine the Ghost Tree, indigenous Mahua, vibrant butterflies, and forest floor ecology.',
      image: IMAGES.wildlife.forestCanopy,
      link: '/experiences/nature',
      ctaLabel: 'Explore Nature Trails',
      badge: 'Buffer Walking Trails'
    },
    {
      id: 'evenings',
      eyebrow: 'After Dark at Resort',
      title: 'Starlit Evenings & Bonfires',
      description: 'Unwind around a crackling outdoor campfire on resort lawns, stargaze under clear Central Indian skies, and listen to the acoustic forest night.',
      image: IMAGES.home.dining,
      link: '/experiences/nature',
      ctaLabel: 'Discover Evenings',
      badge: 'Night Wilderness'
    }
  ],

  safariAtGlance: {
    eyebrow: 'At a Glance',
    title: 'Jungle Safari from Sillari Gate',
    lead: 'Pench Tiger Reserve offers an exceptional wildlife experience with regulated open 4x4 Gypsy drives.',
    points: [
      {
        title: 'Authorized 4x4 Gypsies',
        desc: 'All drives use open safari vehicles accompanied by mandatory certified Forest Department guides and registered drivers.'
      },
      {
        title: 'Morning & Afternoon Shifts',
        desc: 'Safaris operate during two daily windows structured around seasonal sunrise and sunset timings.'
      },
      {
        title: 'Sillari Gate Accessibility',
        desc: 'Explore Pench conveniently from Sillari Gate in Maharashtra, just minutes from Go Flamingo Resort.'
      },
      {
        title: 'Advance Permit Guidance',
        desc: 'Forest permits are quota-controlled and require valid original photo IDs. Our concierge assists with planning.'
      }
    ],
    cta: {
      label: 'Explore Complete Safari Guide',
      to: '/experiences/safari'
    }
  },

  wildlifeSpotlight: {
    eyebrow: 'Biodiversity Spotlight',
    title: 'The Inhabitants of Pench',
    lead: 'An ecological sanctuary sheltering iconic Central Indian fauna.',
    species: [
      { name: 'Royal Bengal Tiger', tag: 'Apex Carnivore' },
      { name: 'Indian Leopard', tag: 'Elusive Predator' },
      { name: 'Gaur (Indian Bison)', tag: 'Magnificent Herbivore' },
      { name: 'Spotted Deer (Chital)', tag: 'Graceful Herds' },
      { name: 'Sambar & Nilgai', tag: 'Woodland Grazers' },
      { name: 'Over 310 Bird Species', tag: 'Avian Riches' }
    ],
    disclaimer: 'Wildlife sightings are never guaranteed. Every safari is an authentic wilderness search shaped by forest conditions.',
    cta: {
      label: 'Discover Wildlife & Birds',
      to: '/experiences/wildlife'
    }
  },

  naturePreview: {
    eyebrow: 'Gentle Exploration',
    title: 'Walking & Nature Observation',
    lead: 'Step out onto designated buffer paths where walking is officially permitted to appreciate the forest’s botanical wonders.',
    highlights: [
      'The ghostly pale bark of Kullu trees against rocky ridges',
      'Ancient Mahua groves sweet with spring blossoms',
      'Towering teak canopies filtering morning mist',
      'Dragonflies, butterflies, and intricate insect architecture'
    ],
    cta: {
      label: 'Explore Nature & Flora',
      to: '/experiences/nature'
    }
  },

  eveningsPreview: {
    eyebrow: 'Twilight to Night',
    title: 'Evenings at Go Flamingo Resort',
    lead: 'A peaceful, fireside conclusion to an exciting day in the wild.',
    description: 'When the sun sets over Pench, the resort grounds come alive with warm firelight and peaceful forest sounds. Enjoy starlit dining, relax around our open lawn bonfire with regional snacks, and gaze at unpolluted constellations.',
    note: 'Note: These peaceful evening experiences take place within resort grounds and are distinct from official forest reserve drives.'
  },

  sillariAdvantage: {
    eyebrow: 'Location Advantage',
    title: 'Explore Pench from Sillari Gate',
    lead: 'The convenience of staying close to the park entrance transforms your safari journey.',
    points: [
      {
        title: 'No Exhausting Pre-Dawn Drives',
        desc: 'Rest comfortably in your cottage bed until minutes before departure time instead of traveling hours across highways.'
      },
      {
        title: 'Morning Chai & Packed Breakfast',
        desc: 'Enjoy piping hot morning tea before boarding and carry fresh, wholesome breakfast boxes on your morning safari.'
      },
      {
        title: 'Fast Midday Return',
        desc: 'Return quickly to the resort after your morning drive to shower, relax in the pool, and enjoy a leisurely brunch.'
      }
    ]
  },

  dayInPench: {
    eyebrow: 'Illustrative Schedule',
    title: 'A Day in the Pench Wilderness',
    lead: 'An illustrative look at how your days unfold when staying with us at Go Flamingo Resort.',
    timeline: [
      {
        time: 'Dawn',
        title: 'Wake-Up Call & Morning Chai',
        desc: 'Wake up to forest birdsong. Sip hot masala chai or coffee on your verandah before your morning safari.'
      },
      {
        time: 'Morning',
        title: 'Forest Safari Excursion',
        desc: 'Board your open 4x4 Gypsy at Sillari Gate. Explore forest tracks, read alarm calls, and enjoy mid-morning packed breakfast.'
      },
      {
        time: 'Midday',
        title: 'Country Brunch & Pool Relaxation',
        desc: 'Return to Go Flamingo for a hot shower, a refreshing dip in the forest swimming pool, and a wholesome regional lunch.'
      },
      {
        time: 'Afternoon',
        title: 'Second Shift or Quiet Nature Walk',
        desc: 'Head out for an afternoon safari drive or embark on a gentle nature walk along the forest buffer.'
      },
      {
        time: 'Evening',
        title: 'Fireside Warmth & Stargazing',
        desc: 'Gather around the resort lawn bonfire for appetizers, exchange safari stories, and marvel at the starlit sky.'
      }
    ]
  },

  stayConnection: {
    eyebrow: 'Where You Recharge',
    title: 'Stay at Go Flamingo Resort',
    lead: 'Pair your wilderness adventures with restful comfort under the teak canopy.',
    cottage: {
      title: 'Luxury Forest Cottage',
      desc: 'Standalone sanctuary with private sit-out verandah facing lush foliage. Perfect for couples and wildlife photographers.',
      image: IMAGES.rooms.cottage,
      to: '/rooms/luxury-cottage'
    },
    suite: {
      title: 'Spacious Family Suite',
      desc: 'Generous connected living space ensuring comfort for families and groups traveling together to Pench.',
      image: IMAGES.rooms.suite,
      to: '/rooms/family-suite'
    }
  }
};
