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
    subtitle: 'Air-conditioned haveli guest rooms crafted with teak wood furnishings, plush king beds, and private balcony views overlooking lush garden greenery.',
    badge: 'Couples & Small Families · 20 Keys Total',
    eyebrow: 'Category 2.1 · Haveli Living',
    count: 'Part of 20 Rooms Portfolio',
    heroImage: AUTHENTIC_RESORT.photos.deluxeBedroom.src,
    gallery: [
      { src: AUTHENTIC_RESORT.photos.deluxeBedroom.src, alt: 'Deluxe Room Teak Wood King Bed with Private Balcony View' },
      { src: AUTHENTIC_RESORT.photos.sunlitVerandah.src, alt: 'Sunlit Arched Verandah Walkway connecting Deluxe Wings' },
      { src: AUTHENTIC_RESORT.photos.archedCorridorFountain.src, alt: 'Haveli Courridor and Central Courtyard Lawn' },
      { src: AUTHENTIC_RESORT.photos.courtyardTwilight.src, alt: 'Illuminated Evening Haveli Courtyard' },
    ],
    specs: {
      occupancy: '2 Adults + 1 Child (Extra mattress available on request)',
      bedType: 'Handcrafted Teak King Bed & Premium Mattress',
      verandah: 'Private Balcony overlooking garden greenery',
      view: 'Lush Garden Greenery & Haveli Courtyard',
      bathroom: 'En-suite Western Bathroom with 24/7 Hot Water Rain Shower',
      climate: 'Quiet Split Air-Conditioning & Ceiling Fan',
      powerBackup: '100% Silent Generator Backup for 24/7 uninterrupted comfort',
    },
    story: `Deluxe Rooms are a prime accommodation category at GoFlamingo Resort, providing comfortable and welcoming stays for guests visiting the Pench tiger reserve. 

Crafted with teak wood furniture, crisp white cotton linens, quiet split air-conditioning, and expansive private balconies that overlook the resort's lush landscaped gardens. Wake up to the natural morning calls of native birds, enjoy fresh tea on your balcony, and reach Sillari Safari Gate in just 5-7 minutes.`,
    highlights: [
      '20 beautifully appointed air-conditioned rooms across the haveli wings',
      'Private balcony with views of tranquil garden foliage and teak trees',
      'Handcrafted teakwood king bed with premium high-thread-count linens',
      'En-suite modern bathroom with hot and cold running water',
      'Quiet split air-conditioning for peaceful afternoon post-safari relaxation',
      '100% generator power backup for seamless illumination & cooling',
      'Complimentary morning safari wake-up tea & biscuits',
    ],
    amenities: [
      { category: 'Bedding & Comfort', items: ['Plush King Bed', 'Crisp Cotton Linens', 'Comfortable Day Pillow Set', 'Luggage Rack', 'Wardrobe & Hangers'] },
      { category: 'Balcony & Views', items: ['Private Balcony Sit-Out', 'Garden & Courtyard Views', 'Ambient Lighting', 'Fresh Forest Air'] },
      { category: 'Bathroom & Care', items: ['En-suite Western Bathroom', 'Hot & Cold Rain Shower', '24/7 Running Water', 'Clean Bath Towels', 'Complimentary Toiletries'] },
      { category: 'Resort Inclusions', items: ['Swimming Pool Access', 'Restaurant & Bar Dining', 'Indoor Game Zone Access', 'Free Wi-Fi in Public Areas', 'Complimentary Parking'] },
    ],
    idealFor: 'Individual travellers, couples seeking a quiet forest haven, and wildlife photographers looking for early morning access to Sillari Gate.',
    otherCategory: {
      slug: 'super-deluxe-rooms',
      title: 'Super Deluxe Rooms',
      image: AUTHENTIC_RESORT.photos.sunlitVerandah.src,
      desc: 'Expanded luxury suites with scalloped haveli arches, personal sit-outs, and direct central lawn connectivity.',
    },
  },

  'super-deluxe-rooms': {
    slug: 'super-deluxe-rooms',
    title: 'Super Deluxe Rooms',
    subtitle: 'Expanded luxury suites featuring traditional Rajasthani scalloped arches, private verandah sit-outs, and direct central lawn connectivity.',
    badge: 'Premium Leisure & Extra Space',
    eyebrow: 'Category 2.2 · Premium Comfort',
    count: 'Part of 20 Rooms Portfolio',
    heroImage: AUTHENTIC_RESORT.photos.sunlitVerandah.src,
    gallery: [
      { src: AUTHENTIC_RESORT.photos.sunlitVerandah.src, alt: 'Super Deluxe Arched Verandah overlooking Lawns' },
      { src: AUTHENTIC_RESORT.photos.deluxeBedroom.src, alt: 'Plush King Bed & Expanded Living Area' },
      { src: AUTHENTIC_RESORT.photos.courtyardTwilight.src, alt: 'Illuminated Haveli Corridor at Twilight' },
      { src: AUTHENTIC_RESORT.photos.archedCorridorFountain.src, alt: 'Central Fountain & Sculpted Stone Arches' },
    ],
    specs: {
      occupancy: 'Up to 3-4 Guests (2 Adults + 2 Children or 3 Adults)',
      bedType: 'Handcrafted Teak King Bed + Plush Daybed / Sofa',
      verandah: 'Extended Arched Haveli Verandah with Lawn Access',
      view: 'Central Stone Fountain & Manicured Lawns',
      bathroom: 'Spacious En-suite Stone Bath with Rain Shower',
      climate: 'Powerful Split Air-Conditioning & Fans',
      powerBackup: '100% Silent Generator Backup for 24/7 uninterrupted comfort',
    },
    story: `Super Deluxe Rooms are designed for guests seeking extra space, refined aesthetics, and seamless connectivity to the outdoors. Presented separately on the website to help guests easily discover our enhanced accommodation options.

Featuring high ceilings, traditional Rajasthani scalloped archways, and extended verandah sit-outs where families can sit together in the morning sun. Located with direct access to the central courtyard and fountain, these rooms offer the premier residential experience at GoFlamingo Resort.`,
    highlights: [
      'Expanded floor plan with distinct sleeping and lounge alcove zones',
      'Authentic haveli archways with private outdoor seating overlooking lawns',
      'Accommodates families comfortably with extra daybed / sofa setup',
      'Direct ground-level corridor access to pool, restaurant, and gardens',
      'In-room electric kettle with curated tea & coffee station',
      '100% generator power backup for uninterrupted comfort',
      'Complimentary early safari wake-up call and kid-friendly dining options',
    ],
    amenities: [
      { category: 'Bedding & Comfort', items: ['Teakwood King Bed', 'Plush Sofa / Daybed', 'Extra Mattresses on Request', 'Spacious Wardrobe', 'Luggage Bench'] },
      { category: 'Verandah & Outdoors', items: ['Extended Private Verandah', 'Courtyard Fountain Outlook', 'Outdoor Cane Chairs', 'Direct Garden Lawn Access'] },
      { category: 'Bathroom & Care', items: ['Spacious En-suite Bathroom', 'Rain Shower with 24/7 Hot Water', 'Family Bath Linen Sets', 'Artisanal Herbal Toiletries'] },
      { category: 'Resort Inclusions', items: ['Swimming Pool & Splash Pool', 'Rain Dance Arena Access', 'Restaurant & Bar Dining', 'Indoor Recreation Hall', 'Dedicated Concierge'] },
    ],
    idealFor: 'Families with children or grandparents, small friend circles, and couples desiring generous living space and heritage architectural charm.',
    otherCategory: {
      slug: 'dormitory',
      title: 'Group Dormitory',
      image: AUTHENTIC_RESORT.photos.dormitoryRoom.src,
      desc: 'Spacious air-conditioned communal hall for large student groups, safari teams, and wedding entourages.',
    },
  },

  'dormitory': {
    slug: 'dormitory',
    title: 'Group Dormitory',
    subtitle: 'Spacious air-conditioned communal living facility with individual teak beds, secure lockers, and dedicated multi-stall washrooms.',
    badge: 'Group Accommodation · 1 Dedicated Hall',
    eyebrow: 'Category 2.3 · Group Stays',
    count: '1 Dedicated Group Facility',
    heroImage: AUTHENTIC_RESORT.photos.dormitoryRoom.src,
    gallery: [
      { src: AUTHENTIC_RESORT.photos.dormitoryRoom.src, alt: 'Spacious Group Dormitory with Individual Beds and Split AC' },
      { src: AUTHENTIC_RESORT.photos.restaurantBarHall.src, alt: 'Communal Dining Hall and Recreation' },
      { src: AUTHENTIC_RESORT.photos.archedCorridorFountain.src, alt: 'Courtyard Corridors connecting Dormitory' },
      { src: AUTHENTIC_RESORT.photos.courtyardTwilight.src, alt: 'Night Lawns for Group Gatherings' },
    ],
    specs: {
      occupancy: 'Large Groups, Student Teams, Safari Squads & Wedding Entourages',
      bedType: 'Individual Single Beds with Clean Linens & Fresh Pillows',
      washrooms: 'Dedicated Attached Multi-Stall Washrooms & Rain Showers',
      climate: 'Multiple High-Capacity Split Air Conditioners',
      security: 'Personal Storage Lockers & Individual Power Outlets',
      powerBackup: '100% Silent Generator Backup for 24/7 uninterrupted comfort',
    },
    story: `The resort offers one dedicated dormitory as an economical and cohesive group accommodation option. Designed specifically for wildlife photographer groups, corporate retreats, student expeditions, and wedding family entourages visiting Pench together.

The dormitory features high-capacity split air conditioners, clean individual beds with fresh linens, dedicated multi-stall washrooms with 24/7 hot running water, and personal charging hubs for camera gear and phones. It brings the joy of shared camaraderie under one roof with full access to all resort amenities.`,
    highlights: [
      '1 dedicated, large-capacity air-conditioned group dormitory',
      'Individual comfortable beds with crisp fresh bedsheets and pillows',
      'Multiple heavy-duty split AC units ensuring cool air throughout the hall',
      'Attached multi-stall western washrooms with 24/7 hot & cold water',
      'Dedicated electrical charging points beside each bed for gadgets & cameras',
      '100% generator power backup for non-stop air conditioning',
      'Full access to swimming pool, rain dance arena, game zone, and dining',
    ],
    amenities: [
      { category: 'Bedding & Space', items: ['Individual Single Beds', 'Fresh Daily Linens', 'Comfortable Pillows', 'Personal Locker Space', 'Wide Luggage Area'] },
      { category: 'Climate & Power', items: ['High-Capacity Split ACs', 'Ceiling Air Circulation', 'Individual Power Sockets', '100% Generator Power Backup'] },
      { category: 'Washrooms & Hygiene', items: ['Multiple Private Shower Stalls', 'Multiple Western Commodes', '24/7 Hot Running Water', 'Separate Handwash Sinks'] },
      { category: 'Group Inclusions', items: ['Full Pool & Rain Dance Access', 'Group Buffet Dining Arrangements', 'Game Zone Recreation', 'Campfire Lawn Evenings'] },
    ],
    idealFor: 'School and college wildlife tours, photography groups, corporate team-building delegations, and wedding guest entourages.',
    otherCategory: {
      slug: 'deluxe-rooms',
      title: 'Deluxe Rooms',
      image: AUTHENTIC_RESORT.photos.deluxeBedroom.src,
      desc: 'Independent air-conditioned haveli rooms with private balcony, king bed, and en-suite bath.',
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
                ? 'Book Dormitory'
                : item.slug === 'super-deluxe-rooms'
                  ? 'Book Super Deluxe'
                  : 'Book Deluxe Room'}
            </span>
            <span className="w-6 h-6 rounded-full bg-[#C5A880] text-[#0E2718] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 shrink-0 shadow-inner">
              <ArrowRight className="w-3 h-3 text-[#0E2718]" />
            </span>
          </Link>

          <a
            href={`${QUICK_CONTACT.whatsappUrl}?text=${encodeURIComponent(`Hello Go Flamingo Resort, I would like to inquire about booking the ${item.title}.`)}`}
            target={getWhatsAppTarget()}
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-2.5 rounded-full bg-white hover:bg-stone-50 border-2 border-[#25D366]/70 text-xs uppercase tracking-[0.10em] font-bold text-[#163824] shadow-xs hover:shadow-md transition-all cursor-pointer text-center"
          >
            <WhatsAppIcon size="sm" className="text-[#25D366] shrink-0" />
            <span>WhatsApp Inquiry</span>
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
  { id: 'super-deluxe', label: '2.2 Super Deluxe Rooms', shortLabel: 'Super Deluxe', desc: 'Arched haveli suites with verandah & lawn connectivity', targetId: 'super-deluxe-rooms' },
  { id: 'dormitory', label: '2.3 Group Dormitory', shortLabel: 'Group Dormitory', desc: 'Spacious air-conditioned communal hall for large squads', targetId: 'dormitory' },
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
      <section className="relative pt-24 pb-10 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 bg-[#0C1E14] text-ivory border-b border-sand/20 overflow-hidden">
        {/* Subtle ambient lighting */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-[#0A1810]/95 to-black/85 pointer-events-none" />
        <div className="absolute top-1/4 -right-20 w-[550px] h-[550px] bg-[#C5A880]/12 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 -left-20 w-[500px] h-[500px] bg-emerald-700/12 rounded-full blur-3xl pointer-events-none" />

        <Container size="xl" className="relative z-10">
          <div className="max-w-3xl space-y-4">
            
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-[#C5A880]/35 text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#DFBF8E] font-semibold backdrop-blur-md">
              Accommodations & Stays · Sillari Gate
            </div>

            {/* Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] text-white text-balance">
              Rest in Haveli Comfort.{' '}
              <span className="italic text-[#E8D7B8] block sm:inline">
                Wake to the Pench Wild.
              </span>
            </h1>

            {/* Hospitality Subtitle */}
            <p className="font-sans text-xs sm:text-base md:text-lg text-sand-light/85 font-light leading-relaxed max-w-2xl">
              GoFlamingo Resort offers thoughtfully appointed haveli rooms and a spacious group dormitory, providing comfortable accommodation options for individual travellers, families, and wildlife groups just minutes from Sillari Gate.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3.5 sm:gap-4 pt-4 w-full sm:w-auto">
              <Link
                to="/contact?book=true#reservation-form-card"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 pl-5 pr-2 py-3 sm:py-2.5 rounded-full bg-gradient-to-r from-[#DFBF8E] via-[#C5A880] to-[#B39366] hover:from-[#E8CA9E] hover:to-[#C5A880] text-[#08130B] text-xs uppercase tracking-[0.12em] font-bold transition-all duration-300 shadow-[0_4px_16px_rgba(197,168,128,0.25)] hover:shadow-[0_6px_22px_rgba(197,168,128,0.4)] border border-[#F3DFC1] cursor-pointer text-center"
              >
                <span>Check Availability & Book</span>
                <span className="w-6 h-6 rounded-full bg-[#08130B] text-[#DFBF8E] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 shrink-0 shadow-inner">
                  <ArrowRight className="w-3 h-3 text-[#DFBF8E]" />
                </span>
              </Link>

              <a
                href={`${QUICK_CONTACT.whatsappUrl}?text=${encodeURIComponent('Hello Go Flamingo Resort, I would like to inquire about room availability and tariffs.')}`}
                target={getWhatsAppTarget()}
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-2.5 rounded-full bg-[#0D2418]/90 hover:bg-[#133522] border-2 border-[#25D366]/50 hover:border-[#25D366] text-xs uppercase tracking-[0.10em] font-bold text-white transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.2)] cursor-pointer text-center"
              >
                <WhatsAppIcon size="sm" className="text-[#25D366] shrink-0" />
                <span>WhatsApp Inquiry</span>
              </a>
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
              ✦ 2. Accommodation Portfolio
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
      
      {/* Detail Page Hero */}
      <section className="relative pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20 bg-[#0C1E14] text-ivory border-b border-sand/20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-[#0A1810]/95 to-black/85 pointer-events-none" />
        <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none" />

        <Container size="xl" className="relative z-10">
          <div className="max-w-3xl space-y-3.5">
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-white/10 text-[#DFBF8E] text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-semibold border border-[#C5A880]/30 backdrop-blur-md">
              {room.badge}
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl font-normal leading-tight text-white">
              {room.title}
            </h1>

            <p className="font-sans text-xs sm:text-base text-sand-light/85 font-light leading-relaxed max-w-2xl">
              {room.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-3 w-full sm:w-auto">
              <Link
                to={`/contact?room=${room.slug}&book=true#reservation-form-card`}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 pl-5 pr-2 py-3 sm:py-2.5 rounded-full bg-gradient-to-r from-[#DFBF8E] via-[#C5A880] to-[#B39366] text-[#08130B] text-xs uppercase tracking-[0.12em] font-bold shadow-md cursor-pointer text-center"
              >
                <span>Book This Category</span>
                <span className="w-6 h-6 rounded-full bg-[#08130B] text-[#DFBF8E] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 shrink-0 shadow-inner">
                  <ArrowRight className="w-3 h-3 text-[#DFBF8E]" />
                </span>
              </Link>

              <a
                href={whatsappInquiryUrl}
                target={getWhatsAppTarget()}
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-2.5 rounded-full bg-[#0D2418]/90 border-2 border-[#25D366]/50 text-xs uppercase tracking-[0.10em] font-bold text-white cursor-pointer text-center"
              >
                <WhatsAppIcon size="sm" className="text-[#25D366] shrink-0" />
                <span>WhatsApp Inquiry</span>
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
                  Accommodation Overview
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#0E2718] font-normal">
                  Authentic Haveli Hospitality in Pench
                </h2>
                <div className="space-y-3 text-xs sm:text-sm text-charcoal/80 leading-relaxed font-light">
                  {room.story.split('\n\n').map((para, i) => (
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
                  <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/70">
                    <span className="text-charcoal/60 uppercase tracking-wider block text-[10px] font-semibold">Occupancy</span>
                    <strong className="text-[#0E2718] text-sm font-semibold block mt-1">{room.specs.occupancy}</strong>
                  </div>
                  <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/70">
                    <span className="text-charcoal/60 uppercase tracking-wider block text-[10px] font-semibold">Bedding Setup</span>
                    <strong className="text-[#0E2718] text-sm font-semibold block mt-1">{room.specs.bedType}</strong>
                  </div>
                  <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/70">
                    <span className="text-charcoal/60 uppercase tracking-wider block text-[10px] font-semibold">Climate & AC</span>
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
                    Direct Inquiry & Booking
                  </span>
                  <h3 className="font-serif text-2xl text-[#0E2718] font-normal">
                    {room.title}
                  </h3>
                  <span className="text-xs text-charcoal/70 font-light block mt-1">
                    GoFlamingo Resort · Sillari Gate, Pench
                  </span>
                </div>

                <div className="py-3.5 border-y border-stone-200/90 space-y-2 text-xs text-charcoal/80">
                  <div className="flex justify-between">
                    <span>Gate Proximity:</span>
                    <strong className="text-[#0E2718] font-semibold">5 mins to Sillari</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Power Backup:</span>
                    <strong className="text-[#0E2718] font-semibold">100% Generator</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Amenities Access:</span>
                    <strong className="text-[#0E2718] font-semibold">Pool, Dining, Games</strong>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link
                    to={`/contact?room=${room.slug}&book=true#reservation-form-card`}
                    className="w-full inline-flex items-center justify-center gap-2 pl-4 pr-1.5 py-2.5 sm:pl-5 sm:pr-2 sm:py-3 rounded-full bg-gradient-to-r from-[#DFBF8E] via-[#C5A880] to-[#B39366] text-[#08130B] text-xs uppercase tracking-[0.12em] font-bold shadow-md cursor-pointer text-center"
                  >
                    <span>Check Availability & Book</span>
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
                    <span>Inquire on WhatsApp</span>
                  </a>

                  <a
                    href="tel:+919561957009"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-semibold text-charcoal/70 hover:text-[#0E2718] transition-colors text-center"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#0E2718]" />
                    <span>Call: +91 95619 57009</span>
                  </a>
                </div>

                <div className="pt-4 border-t border-stone-200/90 space-y-2 text-xs text-charcoal/75 font-light">
                  <span className="font-bold uppercase tracking-wider text-[10px] text-[#0E2718] block mb-1">
                    Direct Booking Advantages:
                  </span>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#8A6836] shrink-0" />
                    <span>Best seasonal rates with zero middleman fee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#8A6836] shrink-0" />
                    <span>Sillari Gate Gypsy & safari coordination</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#8A6836] shrink-0" />
                    <span>All-inclusive meal package options available</span>
                  </div>
                </div>

              </div>

              {/* Other Category Recommendation */}
              {room.otherCategory && (
                <div className="p-6 rounded-3xl bg-white border border-stone-200/90 shadow-md space-y-3">
                  <span className="text-[10px] uppercase tracking-wider text-charcoal/60 font-semibold block">
                    You May Also Consider
                  </span>
                  <div className="aspect-[16/10] overflow-hidden rounded-xl">
                    <img
                      src={room.otherCategory.image}
                      alt={room.otherCategory.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-serif text-lg text-[#0E2718]">
                    {room.otherCategory.title}
                  </h4>
                  <p className="text-xs text-charcoal/70 font-light leading-relaxed">
                    {room.otherCategory.desc}
                  </p>
                  <Link
                    to={`/rooms/${room.otherCategory.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-[#8A6836] hover:text-[#0E2718] pt-1"
                  >
                    <span>View {room.otherCategory.title}</span>
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
