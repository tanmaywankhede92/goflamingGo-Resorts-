import { IMAGES } from './images';

/**
 * GO FLAMINGO RESORT — JUNGLE SAFARI STRUCTURED DATA
 * 
 * Factually grounded safari data for Pench Tiger Reserve & Sillari Gate.
 * Features verified seasonal timings, Core vs Buffer comparisons,
 * packing guidance, and resort concierge support.
 */

export const SAFARI_DATA = {
  hero: {
    badge: 'Pench Tiger Reserve · Maharashtra',
    eyebrow: 'Wildlife Jungle Safaris',
    title: 'Jungle Safaris at Sillari Gate',
    subtitle: 'Venture into the teak forests of Pench in open 4x4 Gypsies. Guided by certified Forest Department nature guides, track wildlife through natural alarm calls and forest trails.',
    image: IMAGES.home.safari,
  },
  
  sillariAdvantage: {
    eyebrow: 'Strategic Location',
    title: 'Explore Pench from Sillari Gate',
    lead: 'Sillari Gate provides direct access to Pench Tiger Reserve in Maharashtra, positioned off the National Highway 44 corridor.',
    body: [
      'Staying at Go Flamingo Resort places you minutes from the Sillari Gate check-post. This proximity eliminates the stress of long pre-dawn transfers from distant towns, ensuring you arrive rested and early for gate verification.',
      'Our guests enjoy pre-safari morning wake-up calls, freshly brewed tea and coffee, and packed breakfast boxes to take along on their morning forest excursion.'
    ],
    features: [
      {
        title: 'Minutes from Entry Check-Post',
        desc: 'Relax in your cottage until departure time without exhausting highway commutes before dawn.'
      },
      {
        title: 'Seamless Morning Rhythm',
        desc: 'Wake-up calls, hot tea/coffee flasks, and wholesome safari breakfast packs prepared fresh by our kitchen.'
      },
      {
        title: 'Forest Department Coordination',
        desc: 'Our concierge assists with local operator liaison, registered Gypsy lineup, and permit verification guidance.'
      }
    ]
  },

  gypsyFormat: {
    eyebrow: 'Forest Department Regulations',
    title: 'The Open 4x4 Gypsy Experience',
    description: 'All jungle safaris inside Pench Tiger Reserve are strictly regulated by the Forest Department to ensure wildlife conservation and guest safety.',
    details: [
      {
        title: 'Authorized 4x4 Vehicles',
        desc: 'Custom open-top Maruti Gypsies designed specifically for forest terrain, offering 360-degree unobstructed views for wildlife observation and photography.'
      },
      {
        title: 'Certified Nature Guide',
        desc: 'Every Gypsy is accompanied by a mandatory Forest Department certified nature guide who reads alarm calls, tracks pugmarks, and shares ecological insights.'
      },
      {
        title: 'Dedicated Forest Driver',
        desc: 'Registered local drivers trained in wildlife navigation, park speed limits, safe vehicle distancing, and forest track regulations.'
      },
      {
        title: 'Permit & ID Verification',
        desc: 'Entry is strictly permitted against valid government-issued photo identity cards matching the names on the advance forest permit.'
      }
    ]
  },

  coreVsBuffer: {
    eyebrow: 'Zonal Perspective',
    title: 'Understanding Core vs Buffer Zones',
    description: 'Pench Tiger Reserve features distinct conservation zones, each offering unique landscapes, wildlife movement patterns, and access rules governed by the Forest Department.',
    core: {
      name: 'Core Forest Zones',
      badge: 'Protected Heartland',
      summary: 'Deeper protected forest areas with strict conservation guidelines and daily vehicle entry quotas.',
      points: [
        'High density of natural teak groves, water reservoirs, and established predator territories',
        'Strictly limited Gypsy entry permits allocated per shift through government quotas',
        'Mandatory advance booking recommended well ahead of peak holiday seasons',
        'Subject to annual seasonal closures during peak monsoon months per Forest Department circulars'
      ]
    },
    buffer: {
      name: 'Buffer Forest Zones',
      badge: 'Peripheral Woodland Belts',
      summary: 'Forested peripheral belts that cushion the core reserve and provide active wildlife movement corridors.',
      points: [
        'Picturesque woodlands, scrub terrain, and diverse birdwatching and photography opportunities',
        'Flexible permit accessibility offering an excellent safari experience when core quotas are exhausted',
        'Often accessible across extended seasonal windows subject to local forest department weather notifications',
        'Rich in mammal movement, spotted deer herds, and varied avifauna'
      ]
    },
    disclaimer: 'Zone accessibility, gate assignments, and route allocations are governed strictly by the Maharashtra Forest Department and seasonal forest orders.'
  },

  seasonalTimings: {
    eyebrow: 'Operational Shifts',
    title: 'Seasonal Safari Timings',
    disclaimer: 'Safari timings are seasonal and subject to Maharashtra Forest Department regulations based on sunrise and sunset.',
    seasons: [
      {
        season: 'October',
        tag: 'Post-Monsoon Opening',
        morning: '06:00 AM – 10:00 AM',
        afternoon: '02:30 PM – 06:30 PM',
        notes: 'Lush green forest canopy, flowing streams, active herbivore grazing.'
      },
      {
        season: 'November – January',
        tag: 'Winter Shifts',
        morning: '06:30 AM – 10:30 AM',
        afternoon: '02:00 PM – 06:00 PM',
        notes: 'Crisp misty dawn, active raptor and waterfowl birding, early evening light.'
      },
      {
        season: 'February – March',
        tag: 'Spring Transition',
        morning: '06:00 AM – 10:00 AM',
        afternoon: '02:30 PM – 06:30 PM',
        notes: 'Blooming Mahua and Palas trees, warm afternoons, wildlife gathering near waterholes.'
      },
      {
        season: 'April – June',
        tag: 'Summer Shifts',
        morning: '05:30 AM – 09:30 AM',
        afternoon: '03:00 PM – 07:00 PM',
        notes: 'Earliest dawn starts, dry foliage enhancing visibility across waterholes.'
      }
    ]
  },

  planningGuide: {
    eyebrow: 'Permit Preparation',
    title: 'Safari Planning & Required Documents',
    steps: [
      {
        step: '01',
        title: 'Plan Well in Advance',
        desc: 'Permits for Pench Tiger Reserve are released online through official forest portals and have strict capacity limits per shift.'
      },
      {
        step: '02',
        title: 'Government Photo ID',
        desc: 'Every traveler must carry the original government photo ID (Aadhaar, Passport, or Voter ID) entered during booking. Gate verification is strict.'
      },
      {
        step: '03',
        title: 'Consult Resort Concierge',
        desc: 'Our team assists guests with Gypsy operator coordination, shift planning, gate logistics, and safari breakfast arrangements.'
      }
    ]
  },

  packingChecklist: [
    { item: 'Neutral Earthy Attire', note: 'Khaki, olive, beige, or brown clothing that blends into the forest. Avoid bright colors.' },
    { item: 'Layered Warm Clothing', note: 'Warm fleece, beanie, and windproof jacket for open Gypsy morning drives (especially Nov–Feb).' },
    { item: 'Sun Protection', note: 'Wide-brim hat, polarized sunglasses, and sunscreen for afternoon drives.' },
    { item: 'Dust Protection', note: 'A light cotton scarf or bandana to shield against unpaved forest track dust.' },
    { item: 'Binoculars & Camera Gear', note: '8x42 or 10x42 binoculars and camera with dust covers and extra batteries.' },
    { item: 'Original Identity Proof', note: 'Original ID card matching the permit name for every traveler. Non-negotiable.' }
  ],

  etiquetteRules: [
    { title: 'Maintain Silence', desc: 'Speak in whispers. Loud noises startle wildlife and mask crucial alarm calls.' },
    { title: 'Remain Inside Vehicle', desc: 'Never step out of the Gypsy except at designated Forest Department rest points.' },
    { title: 'Zero Littering', desc: 'Carry all wrappers and plastic back to the resort. Pench is a zero-tolerance plastic zone.' },
    { title: 'No Feeding Animals', desc: 'Feeding wildlife is strictly prohibited, dangerous, and punishable under wildlife laws.' },
    { title: 'Follow Guide Instructions', desc: 'Certified guides understand animal temperament and park rules. Follow their lead at all times.' },
    { title: 'No Off-Road Driving', desc: 'Vehicles must stay on marked forest tracks. Off-roading disrupts natural habitats.' }
  ],

  wildlifeExpectations: {
    title: 'Wildlife Realities',
    lead: 'Wildlife sightings are never guaranteed.',
    body: 'Pench Tiger Reserve is an untamed wilderness of over a thousand square kilometers. Animals roam freely according to their natural instincts and territories. Every safari is an authentic exploration shaped by alarm calls of spotted deer and langurs, pugmarks on dusty tracks, and the collective expertise of your guide and driver. Cherish the whole forest—from majestic raptors in the canopy to stealthy predators on the ground.'
  },

  resortSupport: {
    title: 'How Go Flamingo Supports Your Safari',
    subtitle: 'Hospitality Designed Around the Wilderness Rhythm',
    services: [
      {
        title: 'Safari Wake-up Calls',
        desc: 'A gentle dawn wake-up service so you never miss your scheduled gate departure.'
      },
      {
        title: 'Pre-Dawn Tea & Coffee',
        desc: 'Hot, freshly brewed masala chai, artisanal coffee, and biscuits before you board your Gypsy.'
      },
      {
        title: 'Packed Safari Breakfast',
        desc: 'Wholesome breakfast boxes with sandwiches, boiled eggs/fruit, juice, and snacks for mid-morning forest stops.'
      },
      {
        title: 'Post-Safari Rejuvenation',
        desc: 'Warm hospitality upon return—fresh towels, poolside relaxation, and hearty Central Indian brunch.'
      }
    ]
  }
};
