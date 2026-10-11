import { IMAGES, AUTHENTIC_RESORT, RESORT_DRIVE_PHOTOS } from './images';

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
    path: '/about',
    matchPaths: ['/about', '/resort'],
    hasMegaMenu: false,
  },
  {
    id: 'stay',
    label: 'Stay',
    path: '/stay',
    matchPaths: ['/stay', '/rooms'],
    hasMegaMenu: true,
    preview: {
      image: AUTHENTIC_RESORT.photos.deluxeBedroom.src,
      title: 'Deluxe & Super Deluxe Stays',
      description: '20 comfortable haveli rooms and 1 group dormitory with swimming pool, dining, and Sillari Gate proximity.',
      cta: 'Explore Accommodations & Facilities',
      path: '/stay',
    },
    sections: [
      {
        title: 'Accommodations (20 Rooms & 1 Dormitory)',
        items: [
          { label: '2.1 Deluxe Rooms', path: '/stay/deluxe-rooms', desc: 'Teak king bed, split AC & private balcony garden views' },
          { label: '2.2 Super Deluxe Rooms', path: '/stay/super-deluxe-rooms', desc: 'Arched haveli verandah suites with direct lawn access' },
          { label: '2.3 Group Dormitory', path: '/stay/dormitory', desc: 'Spacious air-conditioned communal hall for large groups' },
        ]
      },
      {
        title: 'Resort Facilities & Amenities',
        items: [
          { label: 'Resort Amenities & Activities', path: '/stay#amenities', desc: 'Swimming pool, rain dance, dining hall, kids park & game zone' },
          { label: 'Conference & Meeting Hall', path: '/stay#conference-room', desc: 'Air-conditioned conference space for corporate gatherings & offsites' },
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
          { label: 'How To Reach', path: '/pench/how-to-reach', desc: 'Just 65 km / 1 hr from Nagpur airport & station' },
          { label: 'Best Time To Visit', path: '/pench/best-time-to-visit', desc: 'Seasonal weather & wildlife spotting calendar' },
        ]
      }
    ]
  },
  {
    id: 'events',
    label: 'Events',
    path: '/events',
    matchPaths: ['/events', '/weddings', '/corporate'],
    hasMegaMenu: false,
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
  nagpurDistance: "~65 km (1 hr drive via NH 44)",
  mapUrl: "https://share.google/1tQOcUc44JyN7u8JJ",
};
