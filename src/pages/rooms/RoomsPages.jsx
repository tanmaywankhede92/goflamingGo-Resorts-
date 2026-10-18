import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Check,
  MapPin,
  Users,
  BedDouble,
  Wind,
  Bath,
  Waves,
  CloudRain,
  Utensils,
  Trees,
  Baby,
  Gamepad2,
  Briefcase,
  Sparkles,
  Phone,
  ShieldCheck,
  Clock,
  Zap,
} from 'lucide-react';
import {
  Container,
  Heading,
  Text,
  SectionEyebrow,
  Button,
  Badge,
  WhatsAppIcon,
  PinIcon,
} from '../../components/common';
import { AUTHENTIC_RESORT, RESORT_DRIVE_PHOTOS, IMAGES } from '../../data/images';
import { QUICK_CONTACT } from '../../data/navigation';
import { cn } from '../../utils/cn';
import { getWhatsAppTarget } from '../../utils/whatsapp';
import ClosingCallToAction from '../home/components/ClosingCallToAction';

/**
 * =========================================================================
 * GO FLAMINGO RESORT — ACCOMMODATIONS PORTFOLIO & SPECIFICATIONS
 * 
 * 2. ACCOMMODATION (20 Rooms & 1 Dormitory)
 * - 2.1 Deluxe Rooms (Part of 20 Rooms)
 * - 2.2 Super Deluxe Rooms (Part of 20 Rooms)
 * - 2.3 Dormitory (1 Group Dormitory Facility)
 * 
 * 3. RESORT AMENITIES AND FACILITIES (Integrated in Stay Experience)
 * - 3.1 Swimming Pool
 * - 3.2 Rain Dance
 * - 3.3 Restaurant and Bar
 * - 3.4 Landscaped Garden and Outdoor Spaces
 * - 3.5 Kids' Play Area
 * - 3.6 Game Zone (Table tennis, Snooker, Carrom, Chess, Badminton)
 * - 3.7 Conference Room
 * =========================================================================
 */

export const ROOMS_DATA = {
  'deluxe-rooms': {
    slug: 'deluxe-rooms',
    title: 'Deluxe Rooms',
    subtitle: 'Thoughtfully furnished rooms with teak wood furnishings, comfortable king beds, crisp cotton linens and modern essentials. Enjoy a relaxing stay at GoFlamingo Resort during your visit to Pench.',
    primaryBtnLabel: 'BOOK THIS CATEGORY',
    secondaryBtnLabel: 'WHATSAPP INQUIRY',
    sidebarLabel: 'DIRECT ENQUIRY & BOOKING',
    sidebarTitle: 'Deluxe Rooms',
    locationText: 'GoFlamingo Resort · Sillari, Pench',
    badge: 'Couples & Small Families · 20 Keys Total',
    eyebrow: 'Category 2.1 · Haveli Living',
    count: 'Part of 20 Rooms Portfolio',
    heroImage: RESORT_DRIVE_PHOTOS.bedroomSuiteBathtub.src,
    gallery: [
      { src: RESORT_DRIVE_PHOTOS.bedroomSuiteBathtub.src, alt: 'Deluxe Room Teak Wood King Bed with En-Suite Bathtub' },
      { src: AUTHENTIC_RESORT.photos.sunlitVerandah.src, alt: 'Sunlit Arched Verandah Walkway connecting Deluxe Wings' },
      { src: AUTHENTIC_RESORT.photos.archedCorridorFountain.src, alt: 'Haveli Courridor and Central Courtyard Lawn' },
      { src: AUTHENTIC_RESORT.photos.courtyardTwilight.src, alt: 'Illuminated Evening Haveli Courtyard' },
    ],
    quickDetails: [
      { label: 'Gate Proximity', value: 'Sillari Gate nearby' },
      { label: 'Power Backup', value: '100% Generator Backup' },
      { label: 'Amenities Access', value: 'Pool, Dining, Games' },
    ],
    sidebarPrimaryBtn: 'CHECK AVAILABILITY & BOOK',
    sidebarSecondaryBtn: 'INQUIRE ON WHATSAPP',
    phone: 'CALL: +91 95619 57009',
    phoneTel: '+919561957009',
    bookingAdvantages: [
      'Best seasonal rates',
      'Assistance with safari enquiries',
      'Meal package options available',
    ],
    overviewLabel: 'ACCOMMODATION OVERVIEW',
    overviewHeading: 'A Comfortable Stay in the Heart of Pench',
    storyParagraphs: [
      "Deluxe Rooms at GoFlamingo Resort offer a welcoming retreat for guests visiting the Pench region. Whether you're here for a wildlife safari, a family holiday or a peaceful break, enjoy a comfortable stay surrounded by the resort's inviting spaces.",
      "Featuring teak wood furnishings, crisp white cotton linens, quality bedding, split air-conditioning and a television, these rooms offer the essentials for a relaxing stay. After a day exploring Pench, return to a comfortable space to rest and recharge.",
    ],
    story: `Deluxe Rooms at GoFlamingo Resort offer a welcoming retreat for guests visiting the Pench region. Whether you're here for a wildlife safari, a family holiday or a peaceful break, enjoy a comfortable stay surrounded by the resort's inviting spaces.\n\nFeaturing teak wood furnishings, crisp white cotton linens, quality bedding, split air-conditioning and a television, these rooms offer the essentials for a relaxing stay. After a day exploring Pench, return to a comfortable space to rest and recharge.`,
    specsList: [
      { label: 'OCCUPANCY', value: '2 Adults + 1 Child (Extra mattress available on request)' },
      { label: 'BEDDING SETUP', value: 'Handcrafted Teak King Bed & Premium Mattress' },
      { label: 'CLIMATE & COMFORT', value: 'Quiet Split Air-Conditioning & Ceiling Fan' },
      { label: 'POWER RELIABILITY', value: '100% Silent Generator Backup for 24/7 Uninterrupted Comfort' },
      { label: 'BATHROOM FACILITIES', value: 'En-suite Western Bathroom with 24/7 Hot Water Rain Shower' },
      { label: 'VIEW / OUTDOOR ACCESS', value: 'Lush Garden Greenery & Haveli Courtyard' },
    ],
    specs: {
      occupancy: '2 Adults + 1 Child (Extra mattress available on request)',
      bedType: 'Handcrafted Teak King Bed & Premium Mattress',
      verandah: 'Garden Sit-out & Courtyard Views',
      view: 'Lush Garden Greenery & Haveli Courtyard',
      bathroom: 'En-suite Western Bathroom with 24/7 Hot Water Rain Shower',
      climate: 'Quiet Split Air-Conditioning & Ceiling Fan',
      powerBackup: '100% Silent Generator Backup for 24/7 Uninterrupted Comfort',
    },
    highlights: [
      'Thoughtfully furnished rooms with handcrafted teak wood furnishings',
      'Comfortable king bed, crisp cotton linens, and quiet split air-conditioning',
      'En-suite western bathroom with hot water rain shower and bathtub',
      'Lush garden greenery, courtyard access, and ambient lighting',
      '100% silent generator backup for 24/7 uninterrupted comfort',
      'Full access to swimming pool, dining restaurant, and indoor game zone',
      'Proximity to Sillari Gate with personalized safari booking assistance',
    ],
    amenities: [
      {
        category: 'BEDDING & COMFORT',
        items: [
          'Plush King Bed',
          'Crisp Cotton Linens',
          'Comfortable Day Pillow Set',
          'Luggage Rack',
          'Wardrobe & Hangers',
        ],
      },
      {
        category: 'BALCONY & VIEWS',
        items: [
          'Garden Sit-out',
          'Garden & Courtyard Views',
          'Ambient Lighting',
          'Fresh Forest Air',
        ],
      },
      {
        category: 'BATHROOM & CARE',
        items: [
          'En-suite Western Bathroom',
          'Bathtubs',
          '24/7 Running Water',
          'Clean Bath Towels',
          'Complimentary Toiletries',
        ],
      },
      {
        category: 'RESORT INCLUSIONS',
        items: [
          'Swimming Pool Access',
          'Restaurant & Bar Dining',
          'Indoor Game Zone Access',
          'Free Wi-Fi in Public Areas',
          'Complimentary Parking',
        ],
      },
    ],
    idealFor: 'Individual travellers, couples seeking a quiet forest haven, and families looking for comfort and early morning access to Sillari Gate.',
    otherCategoryCard: {
      smallLabel: 'YOU MAY ALSO CONSIDER',
      title: 'Super Deluxe Rooms',
      desc: 'Enjoy more space, a private balcony and beautiful views from our most spacious and luxurious rooms, located on the first floor.',
      slug: 'super-deluxe-rooms',
      image: RESORT_DRIVE_PHOTOS.executiveBedroomBalcony.src,
    },
    otherCategory: {
      slug: 'super-deluxe-rooms',
      title: 'Super Deluxe Rooms',
      image: RESORT_DRIVE_PHOTOS.executiveBedroomBalcony.src,
      desc: 'Enjoy more space, a private balcony and beautiful views from our most spacious and luxurious rooms, located on the first floor.',
    },
  },

  'super-deluxe-rooms': {
    slug: 'super-deluxe-rooms',
    title: 'Super Deluxe Rooms',
    subtitle: 'Our most spacious and luxurious rooms, located on the first floor, feature private balconies with beautiful views. Enjoy added comfort, elegant interiors and a relaxing retreat during your stay at GoFlamingo Resort near Pench National Park.',
    primaryBtnLabel: 'BOOK THIS CATEGORY',
    secondaryBtnLabel: 'WHATSAPP INQUIRY',
    sidebarLabel: 'DIRECT ENQUIRY & BOOKING',
    sidebarTitle: 'Super Deluxe Rooms',
    locationText: 'GoFlamingo Resort · Sillari, Pench',
    badge: 'PREMIUM COMFORT & BEAUTIFUL VIEWS',
    eyebrow: 'Category 2.2 · Premium Comfort',
    count: 'Part of 20 Rooms Portfolio',
    heroImage: RESORT_DRIVE_PHOTOS.executiveBedroomBalcony.src,
    gallery: [
      { src: RESORT_DRIVE_PHOTOS.executiveBedroomBalcony.src, alt: 'Super Deluxe Room Private Balcony View' },
      { src: AUTHENTIC_RESORT.photos.deluxeBedroom.src, alt: 'Super Deluxe Bedroom with Teak Finishes and King Bed' },
      { src: AUTHENTIC_RESORT.photos.sunlitVerandah.src, alt: 'First-Floor Balcony Corridor and Sunlit Archways' },
      { src: AUTHENTIC_RESORT.photos.courtyardTwilight.src, alt: 'Illuminated Haveli Courtyard View from Balcony' },
    ],
    quickDetails: [
      { label: 'Room Location', value: 'First Floor' },
      { label: 'Outdoor Access', value: 'Private Balcony' },
      { label: 'Amenities Access', value: 'Pool, Dining, Games' },
    ],
    sidebarPrimaryBtn: 'CHECK AVAILABILITY & BOOK',
    sidebarSecondaryBtn: 'INQUIRE ON WHATSAPP',
    phone: 'CALL: +91 95619 57009',
    phoneTel: '+919561957009',
    bookingAdvantages: [
      'Best seasonal rates',
      'Assistance with safari enquiries',
      'Meal package options available',
    ],
    overviewLabel: 'ACCOMMODATION OVERVIEW',
    overviewHeading: 'Extra Space, Beautiful Views & Added Comfort',
    storyParagraphs: [
      "Designed for guests who appreciate extra space and comfort, the Super Deluxe Rooms offer a premium stay at GoFlamingo Resort. Located on the first floor, these spacious rooms feature private balconies with beautiful views, creating a relaxing setting for your Pench getaway.",
      "Enjoy thoughtfully furnished interiors, comfortable king-size bedding, air-conditioning and the added luxury of a bathtub. Whether you're returning from a wildlife safari or spending a leisurely day at the resort, these rooms offer a welcoming space to unwind.",
    ],
    story: `Designed for guests who appreciate extra space and comfort, the Super Deluxe Rooms offer a premium stay at GoFlamingo Resort. Located on the first floor, these spacious rooms feature private balconies with beautiful views, creating a relaxing setting for your Pench getaway.\n\nEnjoy thoughtfully furnished interiors, comfortable king-size bedding, air-conditioning and the added luxury of a bathtub. Whether you're returning from a wildlife safari or spending a leisurely day at the resort, these rooms offer a welcoming space to unwind.`,
    specsList: [
      { label: 'OCCUPANCY', value: '2 Adults + 1 Child (Extra mattress available on request)' },
      { label: 'BEDDING SETUP', value: 'Comfortable King Bed & Quality Mattress' },
      { label: 'CLIMATE & COMFORT', value: 'Split Air-Conditioning & Ceiling Fan' },
      { label: 'POWER RELIABILITY', value: 'Generator Backup' },
      { label: 'BATHROOM FACILITIES', value: 'Attached Bathroom with Bathtub, Shower & Hot Water' },
      { label: 'VIEW / OUTDOOR ACCESS', value: 'Private Balcony with Beautiful Views' },
    ],
    specs: {
      occupancy: '2 Adults + 1 Child (Extra mattress available on request)',
      bedType: 'Comfortable King Bed & Quality Mattress',
      verandah: 'Private Balcony with Beautiful Views',
      view: 'Private Balcony with Beautiful Views',
      bathroom: 'Attached Bathroom with Bathtub, Shower & Hot Water',
      climate: 'Split Air-Conditioning & Ceiling Fan',
      powerBackup: 'Generator Backup',
    },
    highlights: [
      'Most spacious and luxurious rooms on the first floor with private balconies',
      'Comfortable king bed, crisp cotton linens, and split air-conditioning',
      'Attached bathroom with bathtub, shower, and running hot water',
      'Beautiful open outdoor views of the lush garden and haveli courtyard',
      '100% generator power backup for uninterrupted comfort',
      'Full access to swimming pool, rain dance arena, restaurant & bar, and game zone',
      'Prime location near Sillari Gate with direct safari booking assistance',
    ],
    amenities: [
      {
        category: 'BEDDING & COMFORT',
        items: [
          'Comfortable King Bed',
          'Crisp Cotton Linens',
          'Pillows & Bedding',
          'Luggage Rack',
          'Wardrobe & Hangers',
        ],
      },
      {
        category: 'BALCONY & VIEWS',
        items: [
          'Private Balcony',
          'Beautiful Outdoor Views',
          'Garden & Courtyard Surroundings',
          'Ambient Lighting',
          'Fresh Air & Open Views',
        ],
      },
      {
        category: 'BATHROOM & CARE',
        items: [
          'Attached Bathroom',
          'Bathtub',
          'Shower with Hot Water',
          'Fresh Bath Towels',
          'Complimentary Toiletries',
        ],
      },
      {
        category: 'RESORT INCLUSIONS',
        items: [
          'Swimming Pool Access',
          'Restaurant & Bar Dining',
          'Indoor Game Zone Access',
          'Free Wi-Fi in Public Areas',
          'Complimentary Parking',
        ],
      },
    ],
    idealFor: 'Families with children, couples desiring generous living space, and wildlife travellers seeking refined comfort with private balcony views.',
    otherCategoryCard: {
      smallLabel: 'YOU MAY ALSO CONSIDER',
      title: 'Group Dormitory',
      desc: 'Travelling to Pench with family, friends or a group? Our air-conditioned dormitory offers a comfortable shared stay with individual beds.',
      slug: 'dormitory',
      image: AUTHENTIC_RESORT.photos.dormitoryRoom.src,
    },
    otherCategory: {
      slug: 'dormitory',
      title: 'Group Dormitory',
      image: AUTHENTIC_RESORT.photos.dormitoryRoom.src,
      desc: 'Travelling to Pench with family, friends or a group? Our air-conditioned dormitory offers a comfortable shared stay with individual beds.',
    },
  },

  'dormitory': {
    slug: 'dormitory',
    title: 'Group Dormitory',
    subtitle: 'Travelling to Pench with family, friends or a group? Our air-conditioned dormitory offers a comfortable shared stay with individual beds, making it a practical option for guests exploring the region together.',
    primaryBtnLabel: 'ENQUIRE ABOUT DORMITORY',
    secondaryBtnLabel: 'WHATSAPP INQUIRY',
    sidebarLabel: 'DIRECT ENQUIRY & BOOKING',
    sidebarTitle: 'Group Dormitory',
    locationText: 'GoFlamingo Resort · Sillari, Pench',
    badge: 'STAYS FOR GROUPS',
    eyebrow: 'Category 2.3 · Group Stays',
    count: '1 Dedicated Group Facility',
    heroImage: AUTHENTIC_RESORT.photos.dormitoryRoom.src,
    gallery: [
      { src: AUTHENTIC_RESORT.photos.dormitoryRoom.src, alt: 'Spacious Group Dormitory with Individual Beds and Split AC' },
      { src: AUTHENTIC_RESORT.photos.restaurantBarHall.src, alt: 'Communal Dining Hall and Recreation' },
      { src: AUTHENTIC_RESORT.photos.archedCorridorFountain.src, alt: 'Courtyard Corridors connecting Dormitory' },
      { src: AUTHENTIC_RESORT.photos.courtyardTwilight.src, alt: 'Night Lawns for Group Gatherings' },
    ],
    quickDetails: [
      { label: 'Accommodation', value: 'Shared Dormitory' },
      { label: 'Climate & Comfort', value: 'Air-Conditioned' },
      { label: 'Amenities Access', value: 'Pool, Dining, Games' },
    ],
    sidebarPrimaryBtn: 'CHECK AVAILABILITY',
    sidebarSecondaryBtn: 'INQUIRE ON WHATSAPP',
    phone: 'CALL: +91 95619 57009',
    phoneTel: '+919561957009',
    bookingAdvantages: [
      'Direct enquiry for group stays',
      'Assistance with safari enquiries',
      'Meal package options available',
    ],
    overviewLabel: 'ACCOMMODATION OVERVIEW',
    overviewHeading: 'Stay Together, Explore Pench Together',
    storyParagraphs: [
      "Planning a wildlife getaway with friends, family or a larger group? The Group Dormitory at GoFlamingo Resort provides shared accommodation for guests who prefer to stay together while exploring the Pench region.",
      "With individual beds, air-conditioning and essential comforts, the dormitory is a practical base for group trips and wildlife outings. Guests can also enjoy the resort's swimming pool, restaurant, game zone and outdoor spaces during their stay.",
    ],
    story: `Planning a wildlife getaway with friends, family or a larger group? The Group Dormitory at GoFlamingo Resort provides shared accommodation for guests who prefer to stay together while exploring the Pench region.\n\nWith individual beds, air-conditioning and essential comforts, the dormitory is a practical base for group trips and wildlife outings. Guests can also enjoy the resort's swimming pool, restaurant, game zone and outdoor spaces during their stay.`,
    specsList: [
      { label: 'ACCOMMODATION TYPE', value: 'Shared Group Dormitory' },
      { label: 'BEDDING SETUP', value: 'Individual Beds with Bedding' },
      { label: 'CLIMATE & COMFORT', value: 'Split Air-Conditioning' },
      { label: 'POWER RELIABILITY', value: 'Generator Backup' },
      { label: 'BATHROOM FACILITIES', value: 'Shared Washroom Facilities with Hot Water' },
      { label: 'ROOM SETUP', value: 'Shared Accommodation for Groups' },
    ],
    specs: {
      occupancy: 'Shared Group Dormitory',
      bedType: 'Individual Beds with Bedding',
      washrooms: 'Shared Washroom Facilities with Hot Water',
      bathroom: 'Shared Washroom Facilities with Hot Water',
      climate: 'Split Air-Conditioning',
      security: 'Shared Accommodation for Groups',
      view: 'Shared Accommodation for Groups',
      powerBackup: 'Generator Backup',
    },
    highlights: [
      'Individual beds with fresh bed linen and comfortable pillows',
      'Shared group accommodation designed for friends, families, and tour groups',
      'Split air-conditioning maintaining a cool and comfortable indoor climate',
      'Shared washroom facilities with hot water and toiletries',
      'Generator power backup for reliable stay comfort',
      'Full access to swimming pool, restaurant & bar dining, and indoor game zone',
      'Direct assistance with Pench safari permits and group meal packages',
    ],
    amenities: [
      {
        category: 'BEDDING & COMFORT',
        items: [
          'Individual Beds',
          'Fresh Bed Linen',
          'Pillows & Bedding',
          'Comfortable Sleeping Arrangements',
        ],
      },
      {
        category: 'ROOM FEATURES',
        items: [
          'Shared Group Accommodation',
          'Air-Conditioning',
          'Convenient Room Layout',
          'Indoor Comfort',
        ],
      },
      {
        category: 'BATHROOM & CARE',
        items: [
          'Shared Washroom Facilities',
          'Hot Water',
          'Fresh Bath Towels',
          'Toiletries',
        ],
      },
      {
        category: 'RESORT INCLUSIONS',
        items: [
          'Swimming Pool Access',
          'Restaurant & Bar Dining',
          'Indoor Game Zone Access',
          'Free Wi-Fi in Public Areas',
          'Complimentary Parking',
        ],
      },
    ],
    idealFor: 'School and college wildlife tours, photography groups, corporate team-building delegations, family reunions, and wedding entourages.',
    otherCategoryCard: {
      smallLabel: 'YOU MAY ALSO CONSIDER',
      title: 'Deluxe Rooms',
      desc: 'Thoughtfully furnished rooms with teak wood furnishings, comfortable king beds, crisp cotton linens and modern essentials.',
      slug: 'deluxe-rooms',
      image: RESORT_DRIVE_PHOTOS.bedroomSuiteBathtub.src,
    },
    otherCategory: {
      slug: 'deluxe-rooms',
      title: 'Deluxe Rooms',
      image: RESORT_DRIVE_PHOTOS.bedroomSuiteBathtub.src,
      desc: 'Thoughtfully furnished rooms with teak wood furnishings, comfortable king beds, crisp cotton linens and modern essentials.',
    },
  },
};

// Backward-compatible alias mappings for existing links
ROOMS_DATA['luxury-cottage'] = ROOMS_DATA['deluxe-rooms'];
ROOMS_DATA['family-suite'] = ROOMS_DATA['super-deluxe-rooms'];

/**
 * RESORT AMENITIES AND FACILITIES (Requested explicitly in Stay Page)
 */
export const RESORT_AMENITIES = [
  {
    id: 'pool',
    num: '3.1',
    title: 'Swimming Pool',
    category: 'Water Recreation',
    tag: 'Outdoor Pool',
    desc: 'The resort features a swimming pool for guest recreation and relaxation. Clear turquoise water surrounded by shaded sun loungers, teak trees, and a dedicated shallow splash zone for children.',
    photo: RESORT_DRIVE_PHOTOS.pool.src,
    alt: 'Outdoor turquoise swimming pool and sun deck at Go Flamingo Resort',
    icon: Waves,
    highlights: [
      'Adult deep area & safe kids splash zone',
      'Teak sun loungers under forest shade',
      'Daily filtration and crystal-clear water',
    ],
  },
  {
    id: 'rain-dance',
    num: '3.2',
    title: 'Rain Dance Arena',
    category: 'Entertainment',
    tag: 'Mist & Music',
    desc: 'The resort offers a rain dance facility for guest entertainment. A dedicated non-slip outdoor arena equipped with overhead mist shower nozzles and a high-energy music setup for memorable celebrations.',
    photo: RESORT_DRIVE_PHOTOS.rainDance.src,
    alt: 'Outdoor rain dance arena with overhead mist showers at Go Flamingo Resort',
    icon: CloudRain,
    highlights: [
      'Overhead high-pressure cooling mist showers',
      'Safe non-slip paved dance platform',
      'Music setup for pool parties & reunions',
    ],
  },
  {
    id: 'restaurant-bar',
    num: '3.3',
    title: 'Restaurant and Bar',
    category: 'Dining & Lounge',
    tag: 'Chandelier Dining',
    desc: 'GoFlamingo Resort has a restaurant and bar, providing dining and beverage facilities for guests. Savor authentic regional Vidarbha recipes, North Indian delicacies, and a full-service evening beverage bar.',
    photo: AUTHENTIC_RESORT.photos.restaurantBarHall.src,
    alt: 'Grand indoor dining restaurant and bar with crystal chandeliers and booth seating',
    icon: Utensils,
    highlights: [
      'Authentic Vidarbha, North Indian & Continental dishes',
      'Grand dining hall with crystal chandeliers & booth seating',
      'Full-service beverage bar for evening unwinding',
    ],
  },
  {
    id: 'landscaped-garden',
    num: '3.4',
    title: 'Landscaped Garden & Outdoor Spaces',
    category: 'Nature & Lawns',
    tag: 'Haveli Courtyard',
    desc: 'The resort features landscaped garden and outdoor green spaces that contribute to the property’s natural setting and leisure experience, complemented by sculpted stone arches, a central pitcher fountain, and evening bonfire lawns.',
    photo: AUTHENTIC_RESORT.photos.archedCorridorFountain.src,
    alt: 'Arched haveli corridor overlooking central garden courtyard with pitcher fountain',
    icon: Trees,
    highlights: [
      'Manicured open lawns for morning relaxation',
      'Sculpted stone pitcher fountain & heritage arches',
      'Evening bonfire baithak under clear Pench skies',
    ],
  },
  {
    id: 'kids-play-area',
    num: '3.5',
    title: "Kids' Play Area",
    category: 'Family Recreation',
    tag: 'Play Park',
    desc: "The resort has a kids' play area for younger guests. Set amidst shaded garden trees with outdoor playground equipment where children can play safely while parents unwind.",
    photo: RESORT_DRIVE_PHOTOS.kidsPlayArea.src,
    alt: "Children's playground with swings, slides and see-saws in lush garden grove",
    icon: Baby,
    highlights: [
      'Multi-tier slides, swings, and see-saws',
      'Soft lawn ground under shaded bamboo grove',
      'Directly visible from verandahs & dining hall',
    ],
  },
  {
    id: 'game-zone',
    num: '3.6',
    title: 'Game Zone & Indoor Recreation',
    category: 'Indoor Sports',
    tag: 'Club Recreation',
    desc: 'The resort has a game zone with recreational activities, providing fun indoor leisure for guests between morning and evening tiger safaris.',
    photo: RESORT_DRIVE_PHOTOS.gameZone.src,
    alt: 'Indoor recreation hall featuring table tennis, billiards and indoor games',
    icon: Gamepad2,
    highlights: [
      'Table Tennis (Tournament-size table)',
      'Snooker / Billiards with cues & chalk',
      'Carrom boards & Chess tables',
      'Badminton equipment with lawn play court',
    ],
    activities: ['Table Tennis', 'Snooker', 'Carrom', 'Chess', 'Badminton'],
  },
  {
    id: 'conference-room',
    num: '3.7',
    title: 'Conference Room & Executive Lounge',
    category: 'Corporate & Offsites',
    tag: 'Executive Conclave',
    desc: 'GoFlamingo Resort has a conference room that can be used for meetings and corporate gatherings. Fully air-conditioned with audio-visual presentation equipment, executive seating, and high-speed Wi-Fi.',
    photo: RESORT_DRIVE_PHOTOS.gameZoneLounge.src,
    alt: 'Club lounge and air-conditioned conference hall with executive seating',
    icon: Briefcase,
    highlights: [
      'Dedicated air-conditioned hall with executive seating',
      'Audio-visual presentation display & screen setup',
      'Flexible layouts for boardroom & strategy conclaves',
    ],
  },
];

/**
 * Interactive Accommodation Card with Auto-Advancing Gallery & Clickable Thumbnails
 */
function AccommodationCard({ item, index }) {
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);

  const gallery = item.gallery && item.gallery.length > 0
    ? item.gallery
    : [{ src: item.heroImage, alt: item.title }];

  // Auto-scroll / auto-advance every 3.8 seconds
  useEffect(() => {
    if (isPaused || gallery.length <= 1) return;
    const timer = setInterval(() => {
      setActiveImageIdx((prev) => (prev + 1) % gallery.length);
    }, 3800);
    return () => clearInterval(timer);
  }, [isPaused, gallery.length]);

  const handlePrev = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setActiveImageIdx((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  const handleNext = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setActiveImageIdx((prev) => (prev + 1) % gallery.length);
  };

  // Only pause on true mouse hover (prevents mobile touch from permanently freezing auto-scroll)
  const handleMouseEnter = () => {
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(hover: hover)').matches) {
      setIsPaused(true);
    }
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  // Touch swipe support for mobile phones
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    setTouchStartX(null);
  };

  const currentPhoto = gallery[activeImageIdx] || gallery[0];

  return (
    <div
      id={item.slug}
      className="scroll-mt-24 sm:scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center p-5 sm:p-8 md:p-11 rounded-3xl bg-white border-2 border-[#C5A880]/35 shadow-xl hover:border-[#C5A880]/70 transition-all duration-300"
    >
      {/* Visual Showcase (7 Columns) with interactive auto-sliding gallery */}
      <div
        className={cn('lg:col-span-7 space-y-3 sm:space-y-3.5', index % 2 === 1 ? 'lg:order-2' : '')}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Main Display Image */}
        <div
          className="relative group overflow-hidden rounded-2xl bg-black/40 border border-stone-200/80 aspect-[16/10] shadow-md touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <img
            key={currentPhoto.src}
            src={currentPhoto.src}
            alt={currentPhoto.alt || item.title}
            loading="lazy"
            className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-104 animate-in fade-in duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
          
          {/* Badge */}
          <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 z-10">
            <span className="inline-flex items-center px-3 py-1 sm:px-3.5 sm:py-1 rounded-full text-[9.5px] sm:text-[10px] uppercase tracking-[0.16em] font-bold text-white bg-black/75 backdrop-blur-md border border-white/20 shadow-md">
              {item.badge}
            </span>
          </div>

          {/* Navigation Arrows for manual clicking */}
          {gallery.length > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous photo"
                className="absolute left-2.5 sm:left-3.5 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-md border border-white/25 transition-all opacity-90 sm:opacity-0 group-hover:opacity-100 z-10 cursor-pointer shadow-md hover:scale-105"
              >
                <ChevronLeft className="w-4 h-4 text-white" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next photo"
                className="absolute right-2.5 sm:right-3.5 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-md border border-white/25 transition-all opacity-90 sm:opacity-0 group-hover:opacity-100 z-10 cursor-pointer shadow-md hover:scale-105"
              >
                <ChevronRight className="w-4 h-4 text-white" />
              </button>
            </>
          )}

          {/* Photo Counter Indicator */}
          <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-10">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] tracking-wider font-semibold text-white/90 bg-black/60 backdrop-blur-md border border-white/10 shadow-xs">
              {activeImageIdx + 1} / {gallery.length}
            </span>
          </div>

          {/* Slide Progress Indicator Dots (Visual auto-scroll feedback) */}
          {gallery.length > 1 && (
            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-10 flex items-center gap-1.5 bg-black/55 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
              {gallery.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImageIdx(dotIdx);
                  }}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                  className={cn(
                    "rounded-full transition-all duration-300 cursor-pointer",
                    activeImageIdx === dotIdx
                      ? "w-4 h-1.5 bg-[#C5A880]"
                      : "w-1.5 h-1.5 bg-white/50 hover:bg-white"
                  )}
                />
              ))}
            </div>
          )}

          {/* In-Image Caption */}
          <div className="absolute bottom-3 left-3 right-16 sm:bottom-5 sm:left-6 sm:right-24 text-white pointer-events-none">
            <span className="text-[9.5px] sm:text-[10px] uppercase tracking-[0.2em] text-[#DFBF8E] font-semibold block mb-0.5">
              {item.count}
            </span>
            <p className="font-serif text-sm sm:text-base md:text-lg font-normal text-white drop-shadow-sm line-clamp-1">
              {currentPhoto.alt || item.title}
            </p>
          </div>
        </div>

        {/* Thumbnail Previews (Clickable with active border state) */}
        <div className="grid grid-cols-4 gap-2 sm:gap-2.5 md:gap-3">
          {gallery.map((thumb, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveImageIdx(idx)}
              aria-label={`View photo ${idx + 1}: ${thumb.alt || item.title}`}
              className={cn(
                'relative aspect-[16/10] overflow-hidden rounded-xl border-2 transition-all duration-300 cursor-pointer text-left',
                activeImageIdx === idx
                  ? 'border-[#C5A880] ring-2 ring-[#0E2718]/30 shadow-md scale-[1.02]'
                  : 'border-stone-200/90 opacity-70 hover:opacity-100 hover:border-[#C5A880]/60'
              )}
            >
              <img
                src={thumb.src}
                alt={thumb.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-108"
              />
              {activeImageIdx === idx && (
                <div className="absolute inset-0 bg-[#C5A880]/20 pointer-events-none" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Narrative & Specification Showcase (5 Columns) */}
      <div className={cn('lg:col-span-5 flex flex-col justify-between space-y-4 sm:space-y-5', index % 2 === 1 ? 'lg:order-1' : '')}>
        <div>
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#8A6836] font-bold block mb-1">
            {item.eyebrow}
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl lg:text-[2rem] text-[#0E2718] font-normal leading-snug">
            {item.title}
          </h3>
          <p className="font-sans text-xs sm:text-sm text-charcoal/80 font-light leading-relaxed mt-2 sm:mt-2.5">
            {item.story.split('\n\n')[0]}
          </p>
        </div>

        {/* Key Specifications Grid */}
        <div className="grid grid-cols-2 gap-3 py-3 border-y border-stone-200/90 text-xs">
          <div>
            <span className="text-charcoal/60 uppercase tracking-wider block text-[10px] font-medium">Occupancy</span>
            <strong className="text-[#0E2718] font-semibold block mt-0.5">{item.specs.occupancy.split('(')[0]}</strong>
          </div>
          <div>
            <span className="text-charcoal/60 uppercase tracking-wider block text-[10px] font-medium">Bed Setup</span>
            <strong className="text-[#0E2718] font-semibold block mt-0.5">{item.specs.bedType.split('+')[0]}</strong>
          </div>
          <div>
            <span className="text-charcoal/60 uppercase tracking-wider block text-[10px] font-medium">Air Conditioning</span>
            <strong className="text-[#0E2718] font-semibold block mt-0.5">Split AC + 100% Backup</strong>
          </div>
          <div>
            <span className="text-charcoal/60 uppercase tracking-wider block text-[10px] font-medium">Bathroom</span>
            <strong className="text-[#0E2718] font-semibold block mt-0.5">En-suite 24/7 Hot Water</strong>
          </div>
        </div>

        {/* Key Highlights Checklist */}
        <div className="space-y-1.5 sm:space-y-2">
          {item.highlights.slice(0, 3).map((h, i) => (
            <div key={i} className="flex items-start gap-2.5 text-xs text-charcoal/90 font-light leading-snug">
              <span className="w-4 h-4 rounded-full bg-[#163824]/10 text-[#163824] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-2.5 h-2.5 text-[#163824]" />
              </span>
              <span>{h}</span>
            </div>
          ))}
        </div>

        {/* Direct Action Buttons */}
        <div className="pt-3 flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-2.5 sm:gap-3.5 w-full">
          <Link
            to={`/contact?room=${item.slug}&book=true#reservation-form-card`}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 pl-5 pr-2 py-3 sm:py-2.5 rounded-full bg-[#0E2718] hover:bg-[#163824] text-white text-xs uppercase tracking-[0.12em] font-bold transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer text-center"
          >
            <span>
              {item.slug === 'dormitory'
                ? 'Enquire About the Dormitory'
                : 'Book This Room'}
            </span>
            <span className="w-6 h-6 rounded-full bg-[#C5A880] text-[#0E2718] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 shrink-0 shadow-inner">
              <ArrowRight className="w-3 h-3 text-[#0E2718]" />
            </span>
          </Link>

          <a
            href={`${QUICK_CONTACT.whatsappUrl}?text=${encodeURIComponent(
              item.slug === 'dormitory'
                ? 'Hello Go Flamingo Resort, I would like to inquire about dormitory shared accommodation for our group.'
                : `Hello Go Flamingo Resort, I would like to inquire about booking the ${item.title}.`
            )}`}
            target={getWhatsAppTarget()}
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-2.5 rounded-full bg-white hover:bg-stone-50 border-2 border-[#25D366]/70 text-xs uppercase tracking-[0.10em] font-bold text-[#163824] shadow-xs hover:shadow-md transition-all cursor-pointer text-center"
          >
            <WhatsAppIcon size="sm" className="text-[#25D366] shrink-0" />
            <span>
              {item.slug === 'dormitory' ? 'WhatsApp Enquiry' : 'WhatsApp Inquiry'}
            </span>
          </a>

          <Link
            to={`/rooms/${item.slug}`}
            className="w-full sm:w-auto inline-flex items-center justify-center sm:justify-start gap-1.5 text-xs uppercase tracking-wider font-bold text-[#8A6836] hover:text-[#0E2718] transition-colors py-1 cursor-pointer"
          >
            <span>Full Room Details</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </div>
  );
}

/**
 * =========================================================================
 * 1. ROOMS OVERVIEW PAGE (`/stay` and `/rooms`)
 * World-class editorial showcase of all 20 rooms + 1 dormitory,
 * followed by the 7 resort amenities & facilities.
 * =========================================================================
 */
const FILTER_OPTIONS = [
  { id: 'all', label: 'All Accommodations (3)', shortLabel: 'All Rooms (3)', desc: 'Full portfolio of 20 haveli rooms & 1 group dormitory', targetId: 'deluxe-rooms' },
  { id: 'deluxe', label: '2.1 Deluxe Rooms', shortLabel: 'Deluxe Rooms', desc: 'Teak king bed & garden balcony (20 Keys Total)', targetId: 'deluxe-rooms' },
  { id: 'super-deluxe', label: '2.2 Super Deluxe Rooms', shortLabel: 'Super Deluxe', desc: 'First-floor rooms with private balcony & beautiful views', targetId: 'super-deluxe-rooms' },
  { id: 'dormitory', label: '2.3 Group Dormitory', shortLabel: 'Group Dormitory', desc: 'Shared group accommodation for friends, family & squads', targetId: 'dormitory' },
];

/**
 * =========================================================================
 * 1. ROOMS OVERVIEW PAGE (`/stay` and `/rooms`)
 * World-class editorial showcase of all 20 rooms + 1 dormitory,
 * followed by the 7 resort amenities & facilities.
 * =========================================================================
 */
export function RoomsOverview() {
  const [activeFilter, setActiveFilter] = useState('all'); // 'all' | 'deluxe' | 'super-deluxe' | 'dormitory'
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const categories = [
    ROOMS_DATA['deluxe-rooms'],
    ROOMS_DATA['super-deluxe-rooms'],
    ROOMS_DATA['dormitory'],
  ];

  const filteredCategories = categories.filter((cat) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'deluxe') return cat.slug === 'deluxe-rooms';
    if (activeFilter === 'super-deluxe') return cat.slug === 'super-deluxe-rooms';
    if (activeFilter === 'dormitory') return cat.slug === 'dormitory';
    return true;
  });

  const handleFilterSelect = (filterId, targetSlug) => {
    setActiveFilter(filterId);
    setIsMobileDropdownOpen(false);

    // Smooth auto-scroll down to the selected accommodation section
    setTimeout(() => {
      const targetElement = document.getElementById(targetSlug || 'deluxe-rooms');
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 120);
  };

  const currentOption = FILTER_OPTIONS.find((opt) => opt.id === activeFilter) || FILTER_OPTIONS[0];

  return (
    <div className="w-full bg-[#FAF6F1] text-charcoal font-sans selection:bg-[#C5A880]/30 selection:text-[#0E2718]">
      
      {/* ========================================================
          01. HERO SECTION — CINEMATIC HAVELI RESORT ARRIVAL
          ======================================================== */}
      <section className="relative w-full min-h-[520px] sm:min-h-[580px] lg:min-h-[620px] flex flex-col justify-end bg-forest-dark text-ivory overflow-hidden">
        {/* Full-Bleed Authentic Haveli Suite Photo */}
        <div className="absolute inset-0 z-0">
          <img
            src={AUTHENTIC_RESORT.photos.deluxeBedroom.src}
            alt="GoFlamingo Resort authentic air-conditioned haveli bedroom with warm wood interiors"
            fetchPriority="high"
            className="w-full h-full object-cover object-[center_top] sm:object-center filter brightness-[0.96] contrast-[1.03]"
          />
          {/* Tailored architectural gradient scrims */}
          <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-deep/60 to-forest-dark/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/90 via-forest-dark/40 to-transparent sm:block hidden" />
        </div>

        <Container size="xl" className="relative z-10 w-full pt-28 sm:pt-36 md:pt-40 pb-12 sm:pb-16 px-5 sm:px-8 md:px-12 lg:px-16">
          <div className="max-w-3xl space-y-3 sm:space-y-4">
            
            {/* Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] text-ivory text-balance">
              Rest in Haveli Comfort, Wake to the Pench Wild
            </h1>

            {/* Hospitality Subtitle */}
            <p className="font-sans text-xs sm:text-base md:text-lg text-sand-light/95 font-light leading-relaxed max-w-2xl">
              20 boutique air-conditioned haveli rooms and a spacious group dormitory, providing peaceful comfort and warm hospitality just 5 minutes from Sillari Safari Gate.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <Link
                to="/contact?book=true#reservation-form-card"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#DFBF8E] hover:bg-[#E8CA9E] text-[#0E2718] text-xs font-semibold uppercase tracking-[0.14em] shadow-lg transition-all duration-300 cursor-pointer text-center"
              >
                <span>Check Availability & Book</span>
              </Link>

              <a
                href={`${QUICK_CONTACT.whatsappUrl}?text=${encodeURIComponent('Hello Go Flamingo Resort, I would like to inquire about room availability and tariffs.')}`}
                target={getWhatsAppTarget()}
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-[#25D366]/40 text-xs font-medium uppercase tracking-[0.14em] backdrop-blur-sm transition-all duration-300 shadow-sm text-center"
              >
                <WhatsAppIcon size="sm" className="text-[#25D366] shrink-0" />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => document.getElementById('accommodation-categories')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/30 text-xs font-medium uppercase tracking-[0.14em] backdrop-blur-sm transition-all duration-300 shadow-sm text-center cursor-pointer"
              >
                <span>View Categories ↓</span>
              </button>
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================
          02. ACCOMMODATION CATEGORIES FILTER & PRESENTATION
          ======================================================== */}
      <section className="py-12 sm:py-16 bg-[#F4EEE6] border-b border-stone-300/70">
        <Container size="xl">
          {/* Centered Editorial Section Header */}
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-8 sm:mb-12">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#8A6836]/10 text-[#8A6836] text-[10px] sm:text-[11px] uppercase tracking-[0.22em] font-bold border border-[#8A6836]/20 mb-3">
              ✦ Accommodation Portfolio
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-[#0E2718] font-normal leading-tight tracking-tight mb-3">
              Explore Available Room Options
            </h2>

            <p className="text-charcoal/70 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed mb-6 sm:mb-8">
              Discover 20 boutique haveli rooms and our spacious group dormitory, tailored for peaceful stays in the buffer zone of Pench National Park.
            </p>

            {/* DESKTOP & TABLET VIEW: Ultra-sleek centered horizontal pill selector directly below heading */}
            <div className="hidden md:flex justify-center items-center w-full">
              <div className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-full bg-white/95 backdrop-blur-md border border-[#C5A880]/50 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
                {FILTER_OPTIONS.map((opt) => {
                  const isSelected = activeFilter === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => handleFilterSelect(opt.id, opt.targetId)}
                      className={cn(
                        'px-4 sm:px-5 py-2.5 rounded-full text-[11px] sm:text-xs uppercase tracking-[0.08em] sm:tracking-[0.10em] font-bold transition-all duration-300 cursor-pointer whitespace-nowrap flex items-center gap-2',
                        isSelected
                          ? 'bg-[#0E2718] text-white shadow-md border border-[#C5A880]/40'
                          : 'text-charcoal/70 hover:text-[#0E2718] hover:bg-[#F4EEE6]/80'
                      )}
                    >
                      {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#DFBF8E] shrink-0" />}
                      <span>{opt.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* MOBILE VIEW (Smart Phone Screens): Full-width Luxury Dropdown (Zero Cut-Off, Auto-scrolls on select) */}
          <div className="block md:hidden w-full max-w-md mx-auto relative mb-8">
            <div className="flex items-center justify-between mb-1.5 px-1">
              <span className="text-[10px] uppercase tracking-[0.18em] text-[#8A6836] font-bold">
                Select Room Category
              </span>
              <span className="text-[10px] text-charcoal/60 font-medium">
                Auto-scrolls to room
              </span>
            </div>

            {/* Dropdown Button */}
            <button
              type="button"
              onClick={() => setIsMobileDropdownOpen((prev) => !prev)}
              aria-expanded={isMobileDropdownOpen}
              className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-white border-2 border-[#C5A880]/60 hover:border-[#C5A880] text-left shadow-md transition-all cursor-pointer active:scale-[0.99]"
            >
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-full bg-[#163824]/10 text-[#163824] flex items-center justify-center shrink-0">
                  <BedDouble className="w-4 h-4 text-[#163824]" />
                </span>
                <div>
                  <span className="text-[9.5px] uppercase tracking-wider text-[#8A6836] font-bold block leading-tight">
                    Active View
                  </span>
                  <span className="font-serif text-base text-[#0E2718] font-semibold leading-tight">
                    {currentOption.label}
                  </span>
                </div>
              </div>
              
              <span className={cn(
                "w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center transition-transform duration-300 text-[#0E2718] shrink-0",
                isMobileDropdownOpen ? "rotate-180 bg-[#0E2718] text-white" : ""
              )}>
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>

            {/* Dropdown Menu Overlay */}
            {isMobileDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 z-40 bg-white border-2 border-[#C5A880]/70 rounded-2xl shadow-2xl p-2 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
                {FILTER_OPTIONS.map((opt) => {
                  const isSelected = activeFilter === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => handleFilterSelect(opt.id, opt.targetId)}
                      className={cn(
                        "w-full flex items-center justify-between p-3 rounded-xl transition-all cursor-pointer text-left",
                        isSelected
                          ? "bg-[#0E2718] text-white shadow-sm"
                          : "hover:bg-stone-50 active:bg-stone-100 text-charcoal"
                      )}
                    >
                      <div>
                        <span className={cn(
                          "font-serif text-sm font-semibold block",
                          isSelected ? "text-white" : "text-[#0E2718]"
                        )}>
                          {opt.label}
                        </span>
                        <span className={cn(
                          "text-[11px] font-light block mt-0.5",
                          isSelected ? "text-sand-light/80" : "text-charcoal/60"
                        )}>
                          {opt.desc}
                        </span>
                      </div>
                      {isSelected && (
                        <span className="w-6 h-6 rounded-full bg-[#C5A880] text-[#0E2718] flex items-center justify-center shrink-0 shadow-inner">
                          <Check className="w-3.5 h-3.5 text-[#0E2718]" />
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Detailed Accommodation Cards (Deluxe, Super Deluxe, Dormitory) */}
          <div className="space-y-12 sm:space-y-16">
            {filteredCategories.map((item, index) => (
              <AccommodationCard
                key={item.slug}
                item={item}
                index={index}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================
          03. RESORT AMENITIES AND FACILITIES (Requested in Stay Page)
          3.1 Swimming Pool
          3.2 Rain Dance
          3.3 Restaurant and Bar
          3.4 Landscaped Garden and Outdoor Spaces
          3.5 Kids' Play Area
          3.6 Game Zone (Table tennis, Snooker, Carrom, Chess, Badminton)
          3.7 Conference Room
          ======================================================== */}
      <section id="amenities" className="relative py-18 sm:py-24 lg:py-28 bg-[#08150D] text-ivory border-y border-sand/20 overflow-hidden scroll-mt-16">
        {/* Ambient lighting */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#0A1810]/95 to-black/85 pointer-events-none" />
        <div className="absolute top-1/3 -left-20 w-[500px] h-[500px] bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 -right-20 w-[500px] h-[500px] bg-emerald-700/10 rounded-full blur-3xl pointer-events-none" />

        <Container size="xl" className="relative z-10">
          
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-white/10 text-[#C5A880] text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-semibold border border-[#C5A880]/30 backdrop-blur-md">
                3. Resort Amenities & Facilities
              </div>

              <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal leading-tight text-white text-balance">
                Full Leisure Experience.{' '}
                <span className="italic text-[#E8D7B8] block sm:inline">
                  On-Site Facilities for Every Guest.
                </span>
              </h2>

              <p className="font-sans text-xs sm:text-sm md:text-base text-sand-light/80 font-light leading-relaxed">
                From our turquoise outdoor swimming pool and rain dance arena to our chandelier-lit restaurant, shaded children’s play park, game zone, and executive conference room.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Link
                to="/resort/facilities"
                className="group inline-flex items-center gap-2 pl-4 pr-1.5 py-2 sm:pl-5 sm:pr-2 sm:py-2.5 rounded-full bg-[#C5A880] hover:bg-[#D5B890] text-[#08130B] text-[11px] sm:text-xs uppercase tracking-[0.14em] font-bold transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Explore All Facilities</span>
                <span className="w-5.5 h-5.5 sm:w-6 sm:h-6 rounded-full bg-[#08130B] text-[#C5A880] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 shrink-0 shadow-inner">
                  <ArrowRight className="w-3 h-3 text-[#C5A880]" />
                </span>
              </Link>
            </div>
          </div>

          {/* 7 Amenities Visual Showcase Grid (Using warm sand depth + inner shadow style) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {RESORT_AMENITIES.map((amenity) => {
              const IconComponent = amenity.icon;

              return (
                <div
                  key={amenity.id}
                  id={amenity.id === 'conference' ? 'conference-room' : amenity.id}
                  className="group bg-gradient-to-b from-[#EDE5DA] via-[#F4EEE6] to-[#E9DFD2] border-2 border-[#C5A880]/40 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-[#C5A880] transition-all duration-300 shadow-2xl hover:-translate-y-1 scroll-mt-24"
                >
                  {/* Photo with Forest Shadow Bleed */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-black/20">
                    <img
                      src={amenity.photo}
                      alt={amenity.alt}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E2718]/70 via-black/15 to-black/30 pointer-events-none" />
                    
                    {/* Floating Pill */}
                    <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-2">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.16em] font-semibold text-white bg-black/75 backdrop-blur-md border border-white/20 shadow-md">
                        {amenity.num} · {amenity.tag}
                      </span>
                    </div>
                  </div>

                  {/* Card Body with Warm Sand Depth & Forest Inner Shadow */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4 text-charcoal bg-gradient-to-b from-[#EFE8DE] via-[#F6F1EA] to-[#EAE0D4] shadow-[inset_0_8px_20px_-4px_rgba(14,39,24,0.18),inset_0_-8px_20px_-6px_rgba(14,39,24,0.12)]">
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-2">
                        <span className="w-7 h-7 rounded-full bg-[#163824]/12 text-[#163824] flex items-center justify-center shrink-0">
                          <IconComponent className="w-3.5 h-3.5 text-[#163824]" />
                        </span>
                        <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[#8A6836] font-bold">
                          {amenity.category}
                        </span>
                      </div>

                      <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#0E2718] group-hover:text-[#18482C] transition-colors leading-snug">
                        {amenity.title}
                      </h3>

                      <p className="font-sans text-xs sm:text-[13px] text-charcoal/85 font-light leading-relaxed">
                        {amenity.desc}
                      </p>

                      {/* Game Zone Specific Activities List */}
                      {amenity.activities && (
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {amenity.activities.map((act, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-0.5 rounded-md bg-[#163824]/10 text-[#0E2718] text-[10.5px] font-semibold"
                            >
                              • {act}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Bullet Highlights */}
                      <ul className="space-y-2 pt-3 border-t border-[#163824]/15">
                        {amenity.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs text-charcoal/90 font-normal leading-snug">
                            <span className="w-4 h-4 rounded-full bg-[#163824]/12 text-[#163824] flex items-center justify-center shrink-0 mt-0.5 shadow-inner">
                              <Check className="w-2.5 h-2.5 text-[#163824]" />
                            </span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom Action / Inquiry Button */}
                    <div className="pt-4 border-t border-[#163824]/15 flex items-center justify-between">
                      <a
                        href={`${QUICK_CONTACT.whatsappUrl}?text=${encodeURIComponent(`Hello Go Flamingo Resort, I would like to inquire about the ${amenity.title} facility.`)}`}
                        target={getWhatsAppTarget()}
                        rel="noopener noreferrer"
                        className="group/btn inline-flex items-center gap-2 pl-4 pr-1.5 py-2 sm:pl-5 sm:pr-2 sm:py-2.5 rounded-full bg-[#0E2718] hover:bg-[#163824] text-white text-[11px] sm:text-xs uppercase tracking-[0.12em] font-bold transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap"
                      >
                        <span>Enquire on WhatsApp</span>
                        <span className="w-5.5 h-5.5 sm:w-6 sm:h-6 rounded-full bg-[#C5A880] text-[#0E2718] flex items-center justify-center transition-transform duration-300 group-hover/btn:translate-x-0.5 shrink-0 shadow-inner">
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#0E2718]" />
                        </span>
                      </a>

                      <span className="text-[10px] text-stone-500 uppercase tracking-widest font-mono font-semibold">
                        Pench
                      </span>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </Container>
      </section>

      {/* ========================================================
          04. ACCOMMODATION COMPARISON MATRIX & ESSENTIAL GUIDELINES
          ======================================================== */}
      <section className="py-16 sm:py-22 bg-[#FAF6F1]">
        <Container size="xl">
          <div className="max-w-3xl mb-10">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#8A6836] font-bold block mb-1">
              At a Glance
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#0E2718] font-normal">
              Compare Room Categories
            </h2>
            <p className="font-sans text-xs sm:text-sm text-charcoal/80 font-light mt-1">
              Select the ideal stay option for your Pench wildlife holiday.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto border-2 border-[#C5A880]/30 rounded-2xl bg-white shadow-lg mb-16">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#F4EEE6] border-b border-stone-200/90 font-bold text-[#0E2718] uppercase tracking-wider">
                <tr>
                  <th className="p-4 sm:p-5">Feature</th>
                  <th className="p-4 sm:p-5">2.1 Deluxe Rooms</th>
                  <th className="p-4 sm:p-5">2.2 Super Deluxe Rooms</th>
                  <th className="p-4 sm:p-5">2.3 Dormitory</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200/80">
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-[#0E2718]">Inventory</td>
                  <td className="p-4 sm:p-5 text-charcoal/85">Part of 20 Rooms Portfolio</td>
                  <td className="p-4 sm:p-5 text-charcoal/85">Part of 20 Rooms Portfolio</td>
                  <td className="p-4 sm:p-5 text-charcoal/85">1 Dedicated Group Facility</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-[#0E2718]">Capacity</td>
                  <td className="p-4 sm:p-5 text-charcoal/85">2 Adults + 1 Child</td>
                  <td className="p-4 sm:p-5 text-charcoal/85">Up to 3-4 Guests (Families)</td>
                  <td className="p-4 sm:p-5 text-charcoal/85">Large Groups / Entourages</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-[#0E2718]">Bed Configuration</td>
                  <td className="p-4 sm:p-5 text-charcoal/85">1 Handcrafted Teak King Bed</td>
                  <td className="p-4 sm:p-5 text-charcoal/85">1 King Bed + Plush Daybed</td>
                  <td className="p-4 sm:p-5 text-charcoal/85">Individual Single Beds</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-[#0E2718]">Verandah / Sit-out</td>
                  <td className="p-4 sm:p-5 text-charcoal/85">Private Garden Balcony</td>
                  <td className="p-4 sm:p-5 text-charcoal/85">Extended Arched Verandah</td>
                  <td className="p-4 sm:p-5 text-charcoal/85">Courtyard Walkway Proximity</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-[#0E2718]">Bathroom Setup</td>
                  <td className="p-4 sm:p-5 text-charcoal/85">En-suite Hot Water Bath</td>
                  <td className="p-4 sm:p-5 text-charcoal/85">Spacious Stone Rain Shower</td>
                  <td className="p-4 sm:p-5 text-charcoal/85">Attached Multi-Stall Washrooms</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-[#0E2718]">Climate Control</td>
                  <td className="p-4 sm:p-5 text-charcoal/85">Split AC + 100% Power Backup</td>
                  <td className="p-4 sm:p-5 text-charcoal/85">Dual Split AC + Power Backup</td>
                  <td className="p-4 sm:p-5 text-charcoal/85">Heavy-Duty Multi-Unit Split ACs</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-[#0E2718]">Best Suited For</td>
                  <td className="p-4 sm:p-5 text-charcoal/85">Couples & Solo Explorers</td>
                  <td className="p-4 sm:p-5 text-charcoal/85">Families & Upgraded Stays</td>
                  <td className="p-4 sm:p-5 text-charcoal/85">Students, Teams & Wedding Groups</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-[#0E2718]">Direct Action</td>
                  <td className="p-4 sm:p-5">
                    <Link to="/rooms/deluxe-rooms" className="text-[#8A6836] font-bold hover:underline">
                      View Details →
                    </Link>
                  </td>
                  <td className="p-4 sm:p-5">
                    <Link to="/rooms/super-deluxe-rooms" className="text-[#8A6836] font-bold hover:underline">
                      View Details →
                    </Link>
                  </td>
                  <td className="p-4 sm:p-5">
                    <Link to="/rooms/dormitory" className="text-[#8A6836] font-bold hover:underline">
                      View Details →
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 3 Essential Information Tiles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-md space-y-2">
              <div className="w-9 h-9 rounded-full bg-[#163824]/10 text-[#163824] flex items-center justify-center">
                <Clock className="w-4.5 h-4.5 text-[#163824]" />
              </div>
              <h4 className="font-serif text-lg text-[#0E2718] font-semibold">Check-in & Check-out</h4>
              <p className="text-xs text-charcoal/80 font-light leading-relaxed">
                Standard Check-in is <strong>1:00 PM</strong> and Check-out is <strong>11:00 AM</strong>. These hours seamlessly align with morning and afternoon tiger safari departures at Sillari Gate.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-md space-y-2">
              <div className="w-9 h-9 rounded-full bg-[#163824]/10 text-[#163824] flex items-center justify-center">
                <Zap className="w-4.5 h-4.5 text-[#163824]" />
              </div>
              <h4 className="font-serif text-lg text-[#0E2718] font-semibold">100% Power Backup</h4>
              <p className="text-xs text-charcoal/80 font-light leading-relaxed">
                Enjoy continuous, uninterrupted split air-conditioning, lights, and hot water showers powered by our automatic silent generator backup system throughout your forest holiday.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-md space-y-2">
              <div className="w-9 h-9 rounded-full bg-[#163824]/10 text-[#163824] flex items-center justify-center">
                <ShieldCheck className="w-4.5 h-4.5 text-[#163824]" />
              </div>
              <h4 className="font-serif text-lg text-[#0E2718] font-semibold">Sillari Gate Safari Permits</h4>
              <p className="text-xs text-charcoal/80 font-light leading-relaxed">
                Pench core forest safari permits are managed directly by the Forest Department. Our on-site manager provides full guidance on booking slots, Gypsy allocation, and naturalist briefings.
              </p>
            </div>
          </div>

        </Container>
      </section>

      {/* ========================================================
          05. CLOSING CTA (UNIFIED RADIANT CHAMPAGNE CARD)
          ======================================================== */}
      <ClosingCallToAction
        eyebrow="Plan Your Stay · Sillari Gate"
        title="Ready to Experience Go Flamingo Resort?"
        description="20 comfortable rooms, 1 group dormitory, swimming pool, and authentic regional hospitality right beside Pench National Park. Inquire directly for seasonal packages."
        primaryBtnLabel="Check Availability & Book"
        whatsappLabel="Chat on WhatsApp"
        whatsappMsg="Hello Go Flamingo Resort, I would like to inquire about room availability and safari booking at Sillari Gate."
      />

    </div>
  );
}

/**
 * =========================================================================
 * 2. ROOM DETAILS PAGE (`/rooms/:slug` and `/stay/:slug`)
 * Deep-dive detail page for specific category (Deluxe, Super Deluxe, Dormitory)
 * =========================================================================
 */
export function RoomDetails() {
  const { slug } = useParams();
  
  // Resolve room key with backward compatibility
  let roomKey = 'deluxe-rooms';
  if (slug) {
    if (ROOMS_DATA[slug]) {
      roomKey = slug;
    } else if (slug === 'deluxe') {
      roomKey = 'deluxe-rooms';
    } else if (slug === 'super-deluxe') {
      roomKey = 'super-deluxe-rooms';
    }
  }

  const room = ROOMS_DATA[roomKey] || ROOMS_DATA['deluxe-rooms'];
  const [activeImage, setActiveImage] = useState(0);

  const whatsappInquiryUrl = `${QUICK_CONTACT.whatsappUrl}?text=${encodeURIComponent(
    `Hello Go Flamingo Resort, I would like to inquire about booking the ${room.title} at Sillari Gate.`
  )}`;

  return (
    <div className="w-full bg-[#FAF6F1] text-charcoal font-sans selection:bg-[#C5A880]/30 selection:text-[#0E2718]">
      
      {/* Detail Page Hero — Cinematic Photography Banner */}
      <section className="relative w-full min-h-[460px] sm:min-h-[520px] lg:min-h-[560px] flex flex-col justify-end bg-forest-dark text-ivory overflow-hidden">
        {/* Full-Bleed Authentic Room Category Photo */}
        <div className="absolute inset-0 z-0">
          <img
            src={room.gallery[0]?.src || room.heroImage}
            alt={room.title}
            fetchPriority="high"
            className="w-full h-full object-cover object-[center_top] sm:object-center filter brightness-[0.96] contrast-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-deep/60 to-forest-dark/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/90 via-forest-dark/40 to-transparent sm:block hidden" />
        </div>

        <Container size="xl" className="relative z-10 w-full pt-28 sm:pt-36 pb-12 sm:pb-16 px-5 sm:px-8 md:px-12 lg:px-16">
          <div className="max-w-3xl space-y-3 sm:space-y-4">
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] text-ivory text-balance">
              {room.title}
            </h1>

            <p className="font-sans text-xs sm:text-base md:text-lg text-sand-light/95 font-light leading-relaxed max-w-2xl">
              {room.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <Link
                to={`/contact?room=${room.slug}&book=true#reservation-form-card`}
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#DFBF8E] hover:bg-[#E8CA9E] text-[#0E2718] text-xs font-semibold uppercase tracking-[0.14em] shadow-lg transition-all duration-300 cursor-pointer text-center"
              >
                <span>{room.primaryBtnLabel || (room.slug === 'dormitory' ? 'ENQUIRE ABOUT DORMITORY' : 'BOOK THIS CATEGORY')}</span>
              </Link>

              <a
                href={whatsappInquiryUrl}
                target={getWhatsAppTarget()}
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-[#25D366]/40 text-xs font-medium uppercase tracking-[0.14em] backdrop-blur-sm transition-all duration-300 shadow-sm text-center"
              >
                <WhatsAppIcon size="sm" className="text-[#25D366] shrink-0" />
                <span>{room.secondaryBtnLabel || 'WHATSAPP INQUIRY'}</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content Showcase + Sticky Sidebar */}
      <section className="py-14 sm:py-20 lg:py-24">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Visual Showcase & Specifications (8 Cols) */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Photo Showcase & Thumbnails */}
              <div className="space-y-3">
                <div className="overflow-hidden rounded-2xl bg-black/50 border border-stone-200/90 aspect-[16/10] shadow-xl">
                  <img
                    src={room.gallery[activeImage]?.src || room.heroImage}
                    alt={room.gallery[activeImage]?.alt || room.title}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                </div>
                
                <div className="grid grid-cols-4 gap-2.5 sm:gap-3">
                  {room.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImage(idx)}
                      className={cn(
                        'aspect-[16/10] overflow-hidden rounded-xl border-2 transition-all cursor-pointer',
                        activeImage === idx
                          ? 'border-[#C5A880] ring-2 ring-[#C5A880]/40'
                          : 'border-stone-200 opacity-75 hover:opacity-100'
                      )}
                    >
                      <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Story Narrative */}
              <div className="p-7 sm:p-9 rounded-2xl bg-white border border-stone-200/90 shadow-md space-y-3">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#8A6836] font-bold block">
                  {room.overviewLabel || 'ACCOMMODATION OVERVIEW'}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#0E2718] font-normal">
                  {room.overviewHeading || 'Accommodation Overview'}
                </h2>
                <div className="space-y-3 text-xs sm:text-sm text-charcoal/80 leading-relaxed font-light">
                  {(room.storyParagraphs || room.story.split('\n\n')).map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>

              {/* Key Specifications Grid */}
              <div className="p-7 sm:p-9 rounded-2xl bg-white border border-stone-200/90 shadow-md space-y-4">
                <h3 className="font-serif text-xl sm:text-2xl text-[#0E2718] font-normal">
                  Key Specifications
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  {room.specsList ? (
                    room.specsList.map((spec, i) => (
                      <div key={i} className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/70">
                        <span className="text-charcoal/60 uppercase tracking-wider block text-[10px] font-semibold">{spec.label}</span>
                        <strong className="text-[#0E2718] text-sm font-semibold block mt-1">{spec.value}</strong>
                      </div>
                    ))
                  ) : (
                    <>
                      <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/70">
                        <span className="text-charcoal/60 uppercase tracking-wider block text-[10px] font-semibold">Occupancy</span>
                        <strong className="text-[#0E2718] text-sm font-semibold block mt-1">{room.specs.occupancy}</strong>
                      </div>
                      <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/70">
                        <span className="text-charcoal/60 uppercase tracking-wider block text-[10px] font-semibold">Bedding Setup</span>
                        <strong className="text-[#0E2718] text-sm font-semibold block mt-1">{room.specs.bedType}</strong>
                      </div>
                      <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/70">
                        <span className="text-charcoal/60 uppercase tracking-wider block text-[10px] font-semibold">Climate & Comfort</span>
                        <strong className="text-[#0E2718] text-sm font-semibold block mt-1">{room.specs.climate}</strong>
                      </div>
                      <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/70">
                        <span className="text-charcoal/60 uppercase tracking-wider block text-[10px] font-semibold">Power Reliability</span>
                        <strong className="text-[#0E2718] text-sm font-semibold block mt-1">{room.specs.powerBackup}</strong>
                      </div>
                      <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/70">
                        <span className="text-charcoal/60 uppercase tracking-wider block text-[10px] font-semibold">Bathroom Facilities</span>
                        <strong className="text-[#0E2718] text-sm font-semibold block mt-1">{room.specs.bathroom || room.specs.washrooms}</strong>
                      </div>
                      <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/70">
                        <span className="text-charcoal/60 uppercase tracking-wider block text-[10px] font-semibold">View / Outdoor Access</span>
                        <strong className="text-[#0E2718] text-sm font-semibold block mt-1">{room.specs.view || room.specs.security}</strong>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Categorized Inclusions & Amenities */}
              <div className="space-y-5">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#8A6836] font-bold block mb-1">
                    What is Included
                  </span>
                  <h3 className="font-serif text-2xl text-[#0E2718] font-normal">
                    Included Amenities & Features
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {room.amenities.map((cat, idx) => (
                    <div key={idx} className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-md space-y-3">
                      <h4 className="font-serif text-base font-semibold text-[#0E2718]">
                        {cat.category}
                      </h4>
                      <ul className="space-y-2 text-xs text-charcoal/80 font-light">
                        {cat.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-center gap-2.5">
                            <Check className="w-3.5 h-3.5 text-[#0E2718] shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Sticky Booking & Assistance Sidebar (4 Cols) */}
            <div className="lg:col-span-4 sticky top-24 space-y-6">
              
              <div className="p-7 sm:p-8 rounded-3xl bg-white border-2 border-[#C5A880]/35 shadow-xl space-y-6">
                <div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.16em] font-bold text-[#8A6836] bg-[#C5A880]/15 mb-2">
                    {room.sidebarLabel || 'DIRECT ENQUIRY & BOOKING'}
                  </span>
                  <h3 className="font-serif text-2xl text-[#0E2718] font-normal">
                    {room.sidebarTitle || room.title}
                  </h3>
                  <span className="text-xs text-charcoal/70 font-light block mt-1">
                    {room.locationText || 'GoFlamingo Resort · Sillari, Pench'}
                  </span>
                </div>

                <div className="py-3.5 border-y border-stone-200/90 space-y-2 text-xs text-charcoal/80">
                  {room.quickDetails ? (
                    room.quickDetails.map((qd, i) => (
                      <div key={i} className="flex justify-between">
                        <span>{qd.label}:</span>
                        <strong className="text-[#0E2718] font-semibold">{qd.value}</strong>
                      </div>
                    ))
                  ) : (
                    <>
                      <div className="flex justify-between">
                        <span>Gate Proximity:</span>
                        <strong className="text-[#0E2718] font-semibold">Sillari Gate nearby</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Power Backup:</span>
                        <strong className="text-[#0E2718] font-semibold">100% Generator Backup</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Amenities Access:</span>
                        <strong className="text-[#0E2718] font-semibold">Pool, Dining, Games</strong>
                      </div>
                    </>
                  )}
                </div>

                <div className="space-y-3">
                  <Link
                    to={`/contact?room=${room.slug}&book=true#reservation-form-card`}
                    className="w-full inline-flex items-center justify-center gap-2 pl-4 pr-1.5 py-2.5 sm:pl-5 sm:pr-2 sm:py-3 rounded-full bg-gradient-to-r from-[#DFBF8E] via-[#C5A880] to-[#B39366] text-[#08130B] text-xs uppercase tracking-[0.12em] font-bold shadow-md cursor-pointer text-center"
                  >
                    <span>{room.sidebarPrimaryBtn || (room.slug === 'dormitory' ? 'CHECK AVAILABILITY' : 'CHECK AVAILABILITY & BOOK')}</span>
                    <span className="w-6 h-6 rounded-full bg-[#08130B] text-[#DFBF8E] flex items-center justify-center shrink-0 shadow-inner">
                      <ArrowRight className="w-3 h-3 text-[#DFBF8E]" />
                    </span>
                  </Link>

                  <a
                    href={whatsappInquiryUrl}
                    target={getWhatsAppTarget()}
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 rounded-full bg-[#0E2718] hover:bg-[#163824] text-white text-xs uppercase tracking-[0.10em] font-bold shadow-md transition-colors cursor-pointer text-center"
                  >
                    <WhatsAppIcon size="sm" className="text-[#25D366] shrink-0" />
                    <span>{room.sidebarSecondaryBtn || 'INQUIRE ON WHATSAPP'}</span>
                  </a>

                  <a
                    href={`tel:${room.phoneTel || '+919561957009'}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-semibold text-charcoal/70 hover:text-[#0E2718] transition-colors text-center"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#0E2718]" />
                    <span>{room.phone || 'CALL: +91 95619 57009'}</span>
                  </a>
                </div>

                <div className="pt-4 border-t border-stone-200/90 space-y-2 text-xs text-charcoal/75 font-light">
                  <span className="font-bold uppercase tracking-wider text-[10px] text-[#0E2718] block mb-1">
                    Direct Booking Advantages:
                  </span>
                  {(room.bookingAdvantages || [
                    'Best seasonal rates',
                    'Assistance with safari enquiries',
                    'Meal package options available',
                  ]).map((adv, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#8A6836] shrink-0" />
                      <span>{adv}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Other Category Recommendation */}
              {(room.otherCategoryCard || room.otherCategory) && (
                <div className="p-6 rounded-3xl bg-white border border-stone-200/90 shadow-md space-y-3">
                  <span className="text-[10px] uppercase tracking-wider text-charcoal/60 font-semibold block">
                    {room.otherCategoryCard?.smallLabel || 'YOU MAY ALSO CONSIDER'}
                  </span>
                  <div className="aspect-[16/10] overflow-hidden rounded-xl">
                    <img
                      src={room.otherCategoryCard?.image || room.otherCategory.image}
                      alt={room.otherCategoryCard?.title || room.otherCategory.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-serif text-lg text-[#0E2718]">
                    {room.otherCategoryCard?.title || room.otherCategory.title}
                  </h4>
                  <p className="text-xs text-charcoal/70 font-light leading-relaxed">
                    {room.otherCategoryCard?.desc || room.otherCategory.desc}
                  </p>
                  <Link
                    to={`/rooms/${room.otherCategoryCard?.slug || room.otherCategory.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-[#8A6836] hover:text-[#0E2718] pt-1"
                  >
                    <span>View {room.otherCategoryCard?.title || room.otherCategory.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}

            </div>

          </div>
        </Container>
      </section>

      {/* Unified Closing CTA */}
      <ClosingCallToAction
        eyebrow="Direct Reservation · Sillari Gate"
        title="Reserve Your Stay at Go Flamingo Resort"
        description="Comfortable air-conditioned cottages, swimming pool, rain dance arena, and immediate proximity to Sillari Gate in Pench."
        primaryBtnLabel="Book This Room Online"
        whatsappLabel="Inquire on WhatsApp"
        whatsappMsg="Hello Go Flamingo Resort, I would like to inquire about booking a room at Sillari Gate."
      />

    </div>
  );
}
