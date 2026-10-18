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
      image: AUTHENTIC_RESORT.photos.archedCorridorFountain.src,
      title: 'Haveli Living & Garden Suites',
      description: '20 comfortable air-conditioned rooms, haveli verandahs, swimming pool, and pristine Sillari Gate proximity.',
      cta: 'Explore Stays & Facilities',
      path: '/stay',
    },
    sections: [
      {
        title: 'Accommodations',
        items: [
          { label: 'Deluxe Rooms', path: '/stay/deluxe-rooms', desc: 'Teak king bed, split AC & private balcony garden views' },
          { label: 'Super Deluxe Rooms', path: '/stay/super-deluxe-rooms', desc: 'Arched haveli verandah suites with direct lawn access' },
          { label: 'Group Dormitory', path: '/stay/dormitory', desc: 'Spacious air-conditioned communal hall for large groups' },
        ]
      },
      {
        title: 'Resort Facilities & Amenities',
        items: [
          { label: 'Resort Amenities & Activities', path: '/resort/facilities', desc: 'Swimming pool, rain dance, dining hall, kids park & game zone' },
        ]
      }
    ]
  },
  {
    id: 'pench',
    label: 'Pench Safari',
    path: '/pench-safari',
    matchPaths: ['/pench', '/pench-safari', '/experiences'],
    hasMegaMenu: false,
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
