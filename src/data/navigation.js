import { IMAGES } from './images';

/**
 * GO FLAMINGO RESORT — NAVIGATION & MEGA-MENU ARCHITECTURE
 * 
 * Multi-page hospitality navigation with rich editorial metadata,
 * sub-routes, and photographic preview assets for mega-menus.
 */

export const NAV_ITEMS = [
  {
    id: 'about',
    label: 'About',
    path: '/resort',
    matchPaths: ['/resort', '/about'],
    hasMegaMenu: true,
    preview: {
      image: IMAGES.resort.exterior,
      title: 'Tranquil Forest Sanctuary',
      description: 'Nestled on the threshold of Sillari Gate amidst teak groves, birdsong, and serene nature.',
      cta: 'About Go Flamingo',
      path: '/resort/about',
    },
    sections: [
      {
        title: 'Our Story & Sanctuary',
        items: [
          { label: 'About Go Flamingo', path: '/resort/about', desc: 'Our vision of warm Pench hospitality & philosophy' },
          { label: 'Resort Overview', path: '/resort', desc: 'Expansive campus, teak groves & nature ambience' },
          { label: 'Resort Facilities', path: '/resort/facilities', desc: 'Lush lawns, open lounge, bonfire & guest amenities' },
          { label: 'Forest Stone Pool', path: '/resort/pool', desc: 'Natural stone swimming pool framed by native trees' },
          { label: 'Regional Dining', path: '/resort/dining', desc: 'Authentic Central Indian flavors & classic culinary comfort' },
        ]
      }
    ]
  },
  {
    id: 'stay',
    label: 'Stay',
    path: '/rooms',
    matchPaths: ['/rooms', '/packages'],
    hasMegaMenu: true,
    preview: {
      image: IMAGES.rooms.cottage,
      title: 'Comfort in the Forest',
      description: 'Thoughtfully appointed cottages with private sit-outs and quiet verandahs.',
      cta: 'View All Rooms',
      path: '/rooms',
    },
    sections: [
      {
        title: 'Accommodations',
        items: [
          { label: 'All Rooms & Cottages', path: '/rooms', desc: 'Spacious wilderness stays for families & couples' },
          { label: 'Featured Cottage', path: '/rooms/luxury-cottage', desc: 'Private verandah facing the forest greenery' },
          { label: 'Family Suite', path: '/rooms/family-suite', desc: 'Generous multi-bed layout for family travel' },
          { label: 'Packages & Offers', path: '/packages', desc: 'Curated stay & safari itineraries' },
        ]
      }
    ]
  },
  {
    id: 'pench',
    label: 'Pench',
    path: '/pench',
    matchPaths: ['/pench', '/experiences'],
    hasMegaMenu: true,
    preview: {
      image: IMAGES.wildlife.tiger,
      title: 'The Land of Mowgli',
      description: 'Morning safaris through Sillari Gate into the storied heart of tiger country.',
      cta: 'Explore Pench & Safaris',
      path: '/pench',
    },
    sections: [
      {
        title: 'Wilderness Experiences',
        items: [
          { label: 'Jungle Safari', path: '/experiences/safari', desc: 'Open 4x4 gypsies led by certified forest guides' },
          { label: 'Wildlife & Birding', path: '/experiences/wildlife', desc: 'Approximately 310 documented bird species & rich fauna' },
          { label: 'Forest Trails & Nature', path: '/experiences/nature', desc: 'Guided nature walks along the forest buffer zone' },
          { label: 'Family & Couples Moments', path: '/experiences/family', desc: 'Bonfires, star gazing & peaceful forest relaxation' },
          { label: 'All Experiences Hub', path: '/experiences', desc: 'Complete catalogue of wilderness memories' },
        ]
      },
      {
        title: 'Destination & Travel Guide',
        items: [
          { label: 'Discover Pench', path: '/pench', desc: 'Forest geography, flora, fauna & history' },
          { label: 'Sillari Gate Guide', path: '/pench/sillari-gate', desc: 'Location advantage & gate entrance details' },
          { label: 'Safari Timings & Permits', path: '/pench/safari-guide', desc: 'Booking guidance, zones, morning & evening shifts' },
          { label: 'Things To Do', path: '/pench/things-to-do', desc: 'Pottery villages, Totladoh dam & birdwatching' },
          { label: 'How To Reach', path: '/pench/how-to-reach', desc: 'Just 85 km / 90 mins from Nagpur airport & station' },
          { label: 'Best Time To Visit', path: '/pench/best-time-to-visit', desc: 'Seasonal weather & wildlife spotting calendar' },
        ]
      }
    ]
  },
  {
    id: 'events',
    label: 'Events',
    path: '/weddings',
    matchPaths: ['/weddings', '/corporate', '/events'],
    hasMegaMenu: true,
    preview: {
      image: IMAGES.events.wedding,
      title: 'Forest Weddings & Corporate Offsites',
      description: 'Host unforgettable destination weddings, milestone galas, and executive retreats amidst nature.',
      cta: 'Plan Your Event',
      path: '/weddings',
    },
    sections: [
      {
        title: 'Weddings & Celebrations',
        items: [
          { label: 'Destination Weddings', path: '/weddings', desc: 'Unforgettable forest ceremonies amidst teak groves' },
          { label: 'Milestones & Celebrations', path: '/weddings/celebrations', desc: 'Anniversaries, birthdays & family reunions' },
          { label: 'Sprawling Event Lawns', path: '/weddings/events', desc: 'Open-air gatherings under canopy lights & stars' },
        ]
      },
      {
        title: 'Corporate & Offsites',
        items: [
          { label: 'Corporate Retreats', path: '/corporate/retreats', desc: 'Leadership retreats and strategic thinking in wilderness' },
          { label: 'Meetings & Conclaves', path: '/corporate/meetings', desc: 'Facilities for focused presentations & workshops' },
          { label: 'Team Safari Offsites', path: '/corporate', desc: 'Team bonding with wildlife safaris & bonfire evenings' },
        ]
      }
    ]
  },
  {
    id: 'gallery',
    label: 'Gallery',
    path: '/gallery',
    matchPaths: ['/gallery'],
    hasMegaMenu: false,
  },
  {
    id: 'contact',
    label: 'Contact',
    path: '/contact',
    matchPaths: ['/contact'],
    hasMegaMenu: false,
  }
];

export const QUICK_CONTACT = {
  phone: "+91 95619 57009",
  phoneSecondary: "+91 93724 25968",
  phoneRaw: "+919561957009",
  whatsapp: "+91 93724 25968",
  whatsappNumber: "919372425968",
  whatsappUrl: "https://wa.me/919372425968",
  email: "Info@Goflamingoresorts.Com",
  hours: "07:00 AM – 22:00 PM (Monday – Sunday)",
  address: "Sillari Gate Pench National Park, Sitapur, Maharashtra 441401, India",
  nagpurDistance: "~85 km (1.5 - 2 hrs drive via NH 44)",
};
