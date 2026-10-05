import { IMAGES } from './images';

/**
 * GO FLAMINGO RESORT — NAVIGATION & MEGA-MENU ARCHITECTURE
 * 
 * Multi-page hospitality navigation with rich editorial metadata,
 * sub-routes, and photographic preview assets for mega-menus.
 */

export const NAV_ITEMS = [
  {
    id: 'resort',
    label: 'Resort',
    path: '/resort',
    hasMegaMenu: true,
    preview: {
      image: IMAGES.resort.exterior,
      title: 'Tranquil Wildlife Retreat',
      description: 'Nestled on the threshold of Sillari Gate amidst teak groves and birdsong.',
      cta: 'Explore Resort',
      path: '/resort',
    },
    sections: [
      {
        title: 'The Property',
        items: [
          { label: 'About Go Flamingo', path: '/resort/about', desc: 'Our vision of warm Pench hospitality' },
          { label: 'Resort Facilities', path: '/resort/facilities', desc: 'Lawns, lounge, bonfire & guest services' },
          { label: 'Forest Pool', path: '/resort/pool', desc: 'Natural stone swimming pool framed by trees' },
          { label: 'Regional Dining', path: '/resort/dining', desc: 'Flavors of Central India & classic comfort' },
        ]
      }
    ]
  },
  {
    id: 'stay',
    label: 'Stay',
    path: '/rooms',
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
          { label: 'Featured Cottage', path: '/rooms/luxury-cottage', desc: 'Private verandah facing the greenery' },
          { label: 'Family Suite', path: '/rooms/family-suite', desc: 'Generous multi-bed layout for family travel' },
          { label: 'Packages & Offers', path: '/packages', desc: 'Curated stay & safari itineraries' },
        ]
      }
    ]
  },
  {
    id: 'experiences',
    label: 'Experiences',
    path: '/experiences',
    hasMegaMenu: true,
    preview: {
      image: IMAGES.hero.safari,
      title: 'Into the Wild',
      description: 'Morning safaris through Sillari Gate into the heart of tiger country.',
      cta: 'Discover Experiences',
      path: '/experiences',
    },
    sections: [
      {
        title: 'Jungle & Safari',
        items: [
          { label: 'Jungle Safari', path: '/experiences/safari', desc: 'Open 4x4 gypsies led by certified forest guides' },
          { label: 'Wildlife & Birding', path: '/experiences/wildlife', desc: 'Over 285 bird species and rich fauna' },
          { label: 'Forest Trails & Nature', path: '/experiences/nature', desc: 'Guided nature walks along the forest buffer' },
        ]
      },
      {
        title: 'Resort Moments',
        items: [
          { label: 'Family Stays', path: '/experiences/family', desc: 'Activities, pool time & unforgettable memories' },
          { label: 'Couples Escape', path: '/experiences/couples', desc: 'Quiet dinners under starlit canopy' },
        ]
      }
    ]
  },
  {
    id: 'weddings',
    label: 'Weddings',
    path: '/weddings',
    hasMegaMenu: true,
    preview: {
      image: IMAGES.events.wedding,
      title: 'Forest Destination Weddings',
      description: 'Intimate ceremonies surrounded by natural teak woodland and starlit skies.',
      cta: 'Plan Your Wedding',
      path: '/weddings',
    },
    sections: [
      {
        title: 'Celebrations',
        items: [
          { label: 'Weddings at Pench', path: '/weddings', desc: 'Unforgettable forest wedding celebrations' },
          { label: 'Milestones & Celebrations', path: '/weddings/celebrations', desc: 'Anniversaries, birthdays & reunions' },
          { label: 'Event Lawns & Dining', path: '/weddings/events', desc: 'Open-air gatherings under canopy lights' },
        ]
      }
    ]
  },
  {
    id: 'corporate',
    label: 'Corporate',
    path: '/corporate',
    hasMegaMenu: true,
    preview: {
      image: IMAGES.events.corporate,
      title: 'Executive Forest Offsites',
      description: 'Break free from boardrooms. Reconnect teams in inspiring wilderness.',
      cta: 'Corporate Enquiries',
      path: '/corporate',
    },
    sections: [
      {
        title: 'Work & Wilderness',
        items: [
          { label: 'Corporate Retreats', path: '/corporate/retreats', desc: 'Leadership retreats and strategic thinking' },
          { label: 'Meetings & Conclaves', path: '/corporate/meetings', desc: 'Facilities for focused presentations & workshops' },
          { label: 'Team Safari Offsites', path: '/corporate', desc: 'Team bonding with wildlife safaris & bonfires' },
        ]
      }
    ]
  },
  {
    id: 'pench',
    label: 'Pench',
    path: '/pench',
    hasMegaMenu: true,
    preview: {
      image: IMAGES.wildlife.tiger,
      title: 'The Land of Mowgli',
      description: 'Explore the storied forests of Pench Tiger Reserve through Sillari Gate.',
      cta: 'Pench Travel Guide',
      path: '/pench',
    },
    sections: [
      {
        title: 'Destination Guide',
        items: [
          { label: 'Discover Pench', path: '/pench', desc: 'Forest geography, flora, fauna & history' },
          { label: 'Sillari Gate Guide', path: '/pench/sillari-gate', desc: 'Location advantage & gate entrance details' },
          { label: 'Safari Guide & Timings', path: '/pench/safari-guide', desc: 'Permits, zones, morning and evening shifts' },
        ]
      },
      {
        title: 'Trip Planning',
        items: [
          { label: 'Things To Do', path: '/pench/things-to-do', desc: 'Pottery villages, dams, birdwatching & trails' },
          { label: 'How To Reach', path: '/pench/how-to-reach', desc: 'Just 80-90 km from Nagpur airport & station' },
          { label: 'Best Time To Visit', path: '/pench/best-time-to-visit', desc: 'Seasonal weather & wildlife spotting guide' },
        ]
      }
    ]
  },
  {
    id: 'gallery',
    label: 'Gallery',
    path: '/gallery',
    hasMegaMenu: false,
  },
  {
    id: 'contact',
    label: 'Contact',
    path: '/contact',
    hasMegaMenu: false,
  }
];

export const QUICK_CONTACT = {
  phone: "+91 93724 25968",
  phoneRaw: "+919372425968",
  whatsapp: "+91 93724 25968",
  whatsappNumber: "919372425968",
  whatsappUrl: "https://wa.me/919372425968",
  email: "stay@goflamingoresort.com",
  address: "Near Sillari Gate, Pench Tiger Reserve, Madhya Pradesh, India",
  nagpurDistance: "~85 km (1.5 - 2 hrs drive via NH 44)",
};
