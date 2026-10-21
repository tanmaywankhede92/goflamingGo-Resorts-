import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Film,
  Camera,
  ArrowRight,
  ArrowDown,
  Sparkles,
  MapPin,
  BedDouble,
  Bath,
  Waves,
  UtensilsCrossed,
  Landmark,
  Compass,
  PartyPopper,
  Dices,
} from 'lucide-react';
import {
  Container,
  WhatsAppIcon,
} from '../../components/common';
import { AUTHENTIC_RESORT, RESORT_DRIVE_PHOTOS, IMAGES } from '../../data/images';
import { QUICK_CONTACT } from '../../data/navigation';
import { cn } from '../../utils/cn';
import { getWhatsAppTarget } from '../../utils/whatsapp';
import ClosingCallToAction from '../home/components/ClosingCallToAction';

// =========================================================================
// 1. CURATED 5-STAR LUXURY PROPERTY ASSETS (NO RAW/UNFLATTERING SHOTS)
// Every asset is verified, high-resolution, vibrant and authentically grounded
// =========================================================================
const MASTER_CURATED_MEDIA = [
  // --- REAL PROPERTY VIDEOS ---
  {
    id: 'vid-1',
    type: 'video',
    category: 'Videos',
    tag: 'Aerial Cinema',
    title: 'Aerial Resort Descent & Pool Flight',
    subtitle: 'Drone sequence sweeping over teak canopy, haveli arches and turquoise swimming pool',
    videoSrc: AUTHENTIC_RESORT.videos.heroCombined.mp4,
    webmSrc: AUTHENTIC_RESORT.videos.heroCombined.webm,
    poster: AUTHENTIC_RESORT.videos.heroCombined.poster,
    duration: '9.0s',
    aspect: 'aspect-16/9',
    ribbonWidth: 'w-80 sm:w-96 md:w-[440px]',
  },
  {
    id: 'vid-2',
    type: 'video',
    category: 'Videos',
    tag: 'Haveli Heritage',
    title: 'Haveli Courtyard & Pitcher Fountain',
    subtitle: 'Rajasthani scalloped arches, carved balconies and central water fountain',
    videoSrc: AUTHENTIC_RESORT.videos.courtyard.mp4,
    webmSrc: AUTHENTIC_RESORT.videos.courtyard.webm,
    poster: AUTHENTIC_RESORT.videos.courtyard.poster,
    duration: '4.5s',
    aspect: 'aspect-4/3',
    ribbonWidth: 'w-72 sm:w-80 md:w-96',
  },
  {
    id: 'vid-3',
    type: 'video',
    category: 'Videos',
    tag: 'Outdoor Pool',
    title: 'Turquoise Swimming Pool & Sun Deck',
    subtitle: 'Crystal clear swimming pool surrounded by teak loungers and native trees',
    videoSrc: AUTHENTIC_RESORT.videos.pool.mp4,
    webmSrc: AUTHENTIC_RESORT.videos.pool.webm,
    poster: AUTHENTIC_RESORT.videos.pool.poster,
    duration: '3.8s',
    aspect: 'aspect-16/9',
    ribbonWidth: 'w-80 sm:w-96 md:w-[420px]',
  },
  {
    id: 'vid-4',
    type: 'video',
    category: 'Videos',
    tag: 'Grand Entrance',
    title: 'Grand Arched Entrance & Lion Statues',
    subtitle: 'Palatial entrance portico, multi-tiered fountains and haveli architecture',
    videoSrc: AUTHENTIC_RESORT.videos.entrance.mp4,
    webmSrc: AUTHENTIC_RESORT.videos.entrance.webm,
    poster: AUTHENTIC_RESORT.videos.entrance.poster,
    duration: '3.0s',
    aspect: 'aspect-4/3',
    ribbonWidth: 'w-72 sm:w-80 md:w-96',
  },
  {
    id: 'vid-5',
    type: 'video',
    category: 'Videos',
    tag: 'Teak Canopy',
    title: 'Aerial Teak Forest Canopy & Grounds',
    subtitle: 'Panoramic drone flight showcasing the lush green forest perimeter at Sillari',
    videoSrc: AUTHENTIC_RESORT.videos.heroAerial.mp4,
    webmSrc: AUTHENTIC_RESORT.videos.heroAerial.webm,
    poster: AUTHENTIC_RESORT.videos.heroAerial.poster,
    duration: '7.0s',
    aspect: 'aspect-16/9',
    ribbonWidth: 'w-80 sm:w-96 md:w-[440px]',
  },

  // --- HAVELI & RESORT ARCHITECTURE ---
  {
    id: 'arch-1',
    type: 'photo',
    category: 'Resort',
    tag: 'Haveli Courtyard',
    title: 'Twilight Haveli Courtyard',
    subtitle: 'Illuminated stone walkways, scalloped arches and warm evening ambiance',
    src: AUTHENTIC_RESORT.photos.courtyardTwilight.src,
    aspect: 'aspect-4/3',
    ribbonWidth: 'w-80 sm:w-96 md:w-[420px]',
  },
  {
    id: 'arch-2',
    type: 'photo',
    category: 'Resort',
    tag: 'Heritage Arches',
    title: 'Arched Corridor & Pitcher Fountain',
    subtitle: 'Carved haveli gallery overlooking the central lawn and stone fountain',
    src: AUTHENTIC_RESORT.photos.archedCorridorFountain.src,
    aspect: 'aspect-3/4',
    ribbonWidth: 'w-60 sm:w-72 md:w-80',
  },
  {
    id: 'arch-3',
    type: 'photo',
    category: 'Resort',
    tag: 'Grand Entry',
    title: 'Grand Entrance Porch & Signage',
    subtitle: 'The palatial entry portico welcoming guests at Sillari Gate',
    src: AUTHENTIC_RESORT.photos.entrancePorch.src,
    aspect: 'aspect-16/10',
    ribbonWidth: 'w-80 sm:w-96 md:w-[440px]',
  },
  {
    id: 'arch-4',
    type: 'photo',
    category: 'Resort',
    tag: 'Garden Verandah',
    title: 'Sunlit Verandah Walkway',
    subtitle: 'Quiet arched verandah framed by manicured gardens and tall cypress trees',
    src: AUTHENTIC_RESORT.photos.sunlitVerandah.src,
    aspect: 'aspect-4/3',
    ribbonWidth: 'w-72 sm:w-88 md:w-96',
  },

  // --- POOL & LEISURE RECREATION (OMITTED AS REQUESTED) ---
  /*
  {
    id: 'pool-1',
    type: 'photo',
    category: 'Leisure',
    tag: 'Swimming Pool',
    title: 'Turquoise Outdoor Pool & Sun Deck',
    subtitle: 'Crystal clear swimming pool with wooden sun loungers and kids splash jacuzzi',
    src: RESORT_DRIVE_PHOTOS.pool.src,
    aspect: 'aspect-16/10',
    ribbonWidth: 'w-84 sm:w-96 md:w-[460px]',
  },
  {
    id: 'pool-2',
    type: 'photo',
    category: 'Leisure',
    tag: 'Rain Dance Arena',
    title: 'Outdoor Rain Dance Arena',
    subtitle: 'Overhead cooling mist showers and music floor for lively group celebrations',
    src: RESORT_DRIVE_PHOTOS.rainDance.src,
    aspect: 'aspect-4/3',
    ribbonWidth: 'w-72 sm:w-88 md:w-96',
  },
  {
    id: 'pool-3',
    type: 'photo',
    category: 'Leisure',
    tag: 'Bamboo Grove Park',
    title: 'Children’s Play Park in Bamboo Grove',
    subtitle: 'Lush green landscaped playground with swings, slides, and see-saws on lawn',
    src: RESORT_DRIVE_PHOTOS.kidsPlayArea.src,
    aspect: 'aspect-16/10',
    ribbonWidth: 'w-80 sm:w-96 md:w-[420px]',
  },
  {
    id: 'rec-1',
    type: 'photo',
    category: 'Leisure',
    tag: 'Game Zone',
    title: 'Indoor Game Zone & Billiards Club',
    subtitle: 'Tournament billiards and table tennis under classical Rajasthani arches',
    src: RESORT_DRIVE_PHOTOS.gameZone.src,
    aspect: 'aspect-4/3',
    ribbonWidth: 'w-72 sm:w-88 md:w-96',
  },
  {
    id: 'rec-2',
    type: 'photo',
    category: 'Leisure',
    tag: 'Club Lounge',
    title: 'Executive Conference Room & Lounge',
    subtitle: 'Air-conditioned conference facility with jharokha windows for corporate offsites',
    src: RESORT_DRIVE_PHOTOS.gameZoneLounge.src,
    aspect: 'aspect-16/9',
    ribbonWidth: 'w-80 sm:w-96 md:w-[440px]',
  },

  // --- WEDDINGS & CELEBRATIONS (OMITTED AS REQUESTED) ---
  {
    id: 'ev-1',
    type: 'photo',
    category: 'Events',
    tag: 'Starlit Evenings',
    title: 'Starlit Evening Lawn Celebrations',
    subtitle: 'Magical night gathering with ambient fairy lights, music, and bonfire baithaks',
    src: RESORT_DRIVE_PHOTOS.socialEventLawnNight.src,
    aspect: 'aspect-16/9',
    ribbonWidth: 'w-84 sm:w-96 md:w-[460px]',
  },
  {
    id: 'ev-2',
    type: 'photo',
    category: 'Events',
    tag: 'Royal Mandap',
    title: 'Grand Floral Wedding Mandap',
    subtitle: 'Traditional mandap with carved pillars and opulent floral canopy',
    src: RESORT_DRIVE_PHOTOS.weddingMandap.src,
    aspect: 'aspect-4/3',
    ribbonWidth: 'w-72 sm:w-88 md:w-96',
  },
  {
    id: 'ev-3',
    type: 'photo',
    category: 'Events',
    tag: 'Mehendi Decor',
    title: 'Rajasthani Themed Mehendi Stage',
    subtitle: 'Vibrant daytime mehendi decor with embroidered umbrellas and marigolds',
    src: RESORT_DRIVE_PHOTOS.weddingMehendiStage.src,
    aspect: 'aspect-16/10',
    ribbonWidth: 'w-80 sm:w-96 md:w-[420px]',
  },
  {
    id: 'ev-4',
    type: 'photo',
    category: 'Events',
    tag: 'VIP Baithak',
    title: 'Royal VIP Baithak Lawn Seating',
    subtitle: 'Traditional red cushion baithaks with low tables and floral decor',
    src: RESORT_DRIVE_PHOTOS.vipLawnBaithak.src,
    aspect: 'aspect-16/10',
    ribbonWidth: 'w-80 sm:w-96 md:w-[420px]',
  },
  {
    id: 'ev-5',
    type: 'photo',
    category: 'Events',
    tag: 'Reception Stage',
    title: 'Wedding Reception Stage in Banquet Hall',
    subtitle: 'Illuminated stage setup with chandeliers for marriage receptions',
    src: RESORT_DRIVE_PHOTOS.weddingReceptionStage.src,
    aspect: 'aspect-4/3',
    ribbonWidth: 'w-72 sm:w-88 md:w-96',
  },
  */

  // --- ROOMS & ACCOMMODATIONS ---
  {
    id: 'stay-1',
    type: 'photo',
    category: 'Rooms',
    tag: 'Super Deluxe Room',
    title: 'Super Deluxe Room Private Balcony View',
    subtitle: 'Spacious first-floor room with private balcony overlooking lush garden canopy',
    src: RESORT_DRIVE_PHOTOS.executiveBedroomBalcony.src,
    aspect: 'aspect-16/10',
    ribbonWidth: 'w-80 sm:w-96 md:w-[420px]',
  },
  {
    id: 'stay-2',
    type: 'photo',
    category: 'Rooms',
    tag: 'Deluxe Room',
    title: 'Deluxe Haveli Bedroom with Extra Bed & Teak Finishes',
    subtitle: 'Handcrafted king-size teak bed, additional bed alcove, TV console, and en-suite bath',
    src: RESORT_DRIVE_PHOTOS.deluxeBedroomFull.src,
    aspect: 'aspect-4/3',
    ribbonWidth: 'w-72 sm:w-88 md:w-96',
  },
  {
    id: 'stay-3',
    type: 'photo',
    category: 'Rooms',
    tag: 'Deluxe Room',
    title: 'Deluxe Haveli Bedroom with Bathtub Suite',
    subtitle: 'Comfortable air-conditioned deluxe room with modern en-suite bathtub and sitting area',
    src: RESORT_DRIVE_PHOTOS.bedroomSuiteBathtub.src,
    aspect: 'aspect-4/3',
    ribbonWidth: 'w-72 sm:w-80 md:w-96',
  },
  {
    id: 'stay-3b',
    type: 'photo',
    category: 'Rooms',
    tag: 'Deluxe Room',
    title: 'Deluxe En-Suite Bathtub & Modern Bath',
    subtitle: 'Deep soaking bathtub with 24/7 hot water supply and premium amenities',
    src: RESORT_DRIVE_PHOTOS.deluxeBathtubRoom.src,
    aspect: 'aspect-4/3',
    ribbonWidth: 'w-72 sm:w-80 md:w-96',
  },
  {
    id: 'stay-4',
    type: 'photo',
    category: 'Rooms',
    tag: 'Group Dormitory',
    title: 'A Comfortable Stay for Your Group',
    subtitle: 'Shared accommodation for guests with individual beds and multiple washroom facilities',
    src: AUTHENTIC_RESORT.photos.dormitoryRoom.src,
    aspect: 'aspect-4/3',
    ribbonWidth: 'w-72 sm:w-88 md:w-96',
  },

  // --- DINING & CULINARY ---
  {
    id: 'din-1',
    type: 'photo',
    category: 'Dining',
    tag: 'Restaurant & Bar',
    title: 'Restaurant & Bar with Crystal Chandeliers',
    subtitle: 'Grand indoor dining hall with crystal chandeliers, full bar and booth seating',
    src: AUTHENTIC_RESORT.photos.restaurantBarHall.src,
    aspect: 'aspect-4/3',
    ribbonWidth: 'w-76 sm:w-92 md:w-[420px]',
  },
  {
    id: 'din-2',
    type: 'photo',
    category: 'Dining',
    tag: 'Dining Banquet',
    title: 'Dining Banquet with Arched Windows',
    subtitle: 'Restaurant seating featuring stained glass arches and warm timber tables',
    src: AUTHENTIC_RESORT.photos.diningBanquetArches.src,
    aspect: 'aspect-16/10',
    ribbonWidth: 'w-80 sm:w-96 md:w-[440px]',
  },
  {
    id: 'din-3',
    type: 'photo',
    category: 'Dining',
    tag: 'Regional Cuisine',
    title: 'Authentic Regional Indian Feasts',
    subtitle: 'Fresh Vidarbha frontier curries, tandoor specials, and safari breakfast boxes',
    src: IMAGES.dining.indianFood,
    aspect: 'aspect-4/3',
    ribbonWidth: 'w-72 sm:w-80 md:w-96',
  },

  // --- PENCH WILDLIFE & SAFARIS ---
  {
    id: 'wild-1',
    type: 'photo',
    category: 'Wildlife',
    tag: 'Royal Bengal Tiger',
    title: 'Royal Bengal Tiger of Pench',
    subtitle: 'The legendary apex predator roaming through the teak woodlands of Sillari',
    src: IMAGES.wildlife.tiger,
    aspect: 'aspect-16/10',
    ribbonWidth: 'w-84 sm:w-96 md:w-[440px]',
  },
  {
    id: 'wild-2',
    type: 'photo',
    category: 'Wildlife',
    tag: '4x4 Gypsy Safari',
    title: 'Early Morning Open 4x4 Safari Gypsy',
    subtitle: 'Embarking on dawn wildlife safaris through Sillari Gate just minutes away',
    src: IMAGES.hero.safari,
    aspect: 'aspect-4/3',
    ribbonWidth: 'w-72 sm:w-88 md:w-96',
  },
  {
    id: 'wild-3',
    type: 'photo',
    category: 'Wildlife',
    tag: 'Spotted Deer',
    title: 'Spotted Chital Deer in Forest Clearing',
    subtitle: 'Gentle herds grazing peacefully in the golden morning light of Pench',
    src: IMAGES.wildlife.spottedDeer,
    aspect: 'aspect-16/9',
    ribbonWidth: 'w-80 sm:w-96 md:w-[420px]',
  },
  {
    id: 'wild-4',
    type: 'photo',
    category: 'Wildlife',
    tag: 'Birding & Canopy',
    title: 'Vibrant Forest Birding & Canopy',
    subtitle: 'Over 310 bird species documented across Pench National Park buffer zones',
    src: IMAGES.wildlife.birding,
    aspect: 'aspect-4/3',
    ribbonWidth: 'w-72 sm:w-80 md:w-96',
  },
];

// Curated Category Filter definitions with High Contrast styling & semantic luxury Lucide icons
const FILTER_TABS = [
  { id: 'All', label: 'All Highlights', icon: Sparkles, count: MASTER_CURATED_MEDIA.length },
  { id: 'Videos', label: 'Property Films', icon: Film, count: MASTER_CURATED_MEDIA.filter((m) => m.type === 'video').length },
  { id: 'Resort', label: 'Haveli Architecture', icon: Landmark, count: MASTER_CURATED_MEDIA.filter((m) => m.category === 'Resort').length },
  { id: 'Rooms', label: 'Luxury Stays', icon: BedDouble, count: MASTER_CURATED_MEDIA.filter((m) => m.category === 'Rooms').length },
  { id: 'Dining', label: 'Dining & Bar', icon: UtensilsCrossed, count: MASTER_CURATED_MEDIA.filter((m) => m.category === 'Dining').length },
  { id: 'Wildlife', label: 'Pench Safaris', icon: Compass, count: MASTER_CURATED_MEDIA.filter((m) => m.category === 'Wildlife').length },
];

// Context-aware dynamic Lucide icon matching the exact asset
function getMediaBadgeIcon(item) {
  if (item.type === 'video') return Film;

  const tag = (item.tag || '').toLowerCase();
  const category = (item.category || '').toLowerCase();
  const title = (item.title || '').toLowerCase();

  // Bathrooms
  if (tag.includes('bath') || title.includes('bath') || title.includes('tub')) {
    return Bath;
  }
  // Rooms, Bedrooms, Suites, Dormitory
  if (
    category === 'rooms' ||
    tag.includes('room') ||
    tag.includes('suite') ||
    tag.includes('dormitory') ||
    tag.includes('bed') ||
    title.includes('room') ||
    title.includes('bedroom') ||
    title.includes('suite')
  ) {
    return BedDouble;
  }
  // Pool, Water, Rain dance
  if (
    tag.includes('pool') ||
    tag.includes('rain dance') ||
    title.includes('pool') ||
    title.includes('swim')
  ) {
    return Waves;
  }
  // Game zone, Kids play park
  if (
    tag.includes('game') ||
    tag.includes('play') ||
    tag.includes('lounge') ||
    title.includes('game') ||
    title.includes('billiards') ||
    title.includes('park')
  ) {
    return Dices;
  }
  // Dining, Restaurant, Bar, Feasts
  if (
    category === 'dining' ||
    tag.includes('dine') ||
    tag.includes('food') ||
    tag.includes('restaurant') ||
    tag.includes('bar') ||
    tag.includes('cuisine') ||
    tag.includes('banquet') ||
    title.includes('dining') ||
    title.includes('restaurant') ||
    title.includes('cuisine')
  ) {
    return UtensilsCrossed;
  }
  // Weddings, Mandap, Mehendi, Celebrations
  if (
    category === 'events' ||
    tag.includes('wedding') ||
    tag.includes('mandap') ||
    tag.includes('mehendi') ||
    tag.includes('reception') ||
    tag.includes('baithak') ||
    tag.includes('starlit') ||
    title.includes('wedding') ||
    title.includes('mandap') ||
    title.includes('celebration')
  ) {
    return PartyPopper;
  }
  // Pench Wildlife, Tigers, Safari, Chital, Birds
  if (
    category === 'wildlife' ||
    tag.includes('tiger') ||
    tag.includes('safari') ||
    tag.includes('deer') ||
    tag.includes('bird') ||
    title.includes('tiger') ||
    title.includes('safari') ||
    title.includes('deer')
  ) {
    return Compass;
  }
  // Haveli Heritage Architecture
  if (
    category === 'resort' ||
    tag.includes('haveli') ||
    tag.includes('arch') ||
    tag.includes('entrance') ||
    tag.includes('verandah') ||
    title.includes('haveli') ||
    title.includes('arch')
  ) {
    return Landmark;
  }

  return Landmark;
}

/**
 * Luxury Curated Media Card Component
 * - Live autoplaying looped video for property films
 * - Natural photographic zoom and luxury shadow (Zero AI sheen or gimmicks)
 * - Compact and fast 2-column layout on mobile
 * - Grand architectural anchor on desktop
 */
function GalleryCard({ item, index, activeCategory, onOpenLightbox }) {
  const isVideo = item.type === 'video';

  // Grand architectural hero anchor for the first film in All Highlights (Matches User's Screenshot)
  const isHero = activeCategory === 'All' && index === 0;

  return (
    <div
      onClick={onOpenLightbox}
      className={cn(
        "group relative overflow-hidden rounded-2xl sm:rounded-3xl cursor-pointer select-none",
        "bg-forest-dark border border-[#E5DAC7] hover:border-[#C5A880] transition-all duration-300",
        "shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_36px_rgba(16,37,27,0.18)]",
        isHero
          ? "col-span-2 sm:col-span-2 lg:col-span-2 lg:row-span-2 h-[260px] sm:h-[420px] lg:h-[620px]"
          : "col-span-1 h-[175px] sm:h-[260px] lg:h-[298px]"
      )}
    >
      {/* Media: Real continuous live autoplaying looped video if property film, else photo */}
      <div className="relative w-full h-full overflow-hidden bg-forest-dark">
        {isVideo ? (
          <video
            src={item.videoSrc}
            poster={item.poster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onPause={(e) => {
              // Ensure video keeps playing smoothly without staying paused
              e.target.play().catch(() => {});
            }}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <img
            src={item.src}
            alt={item.title}
            loading="lazy"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-[0.98]"
          />
        )}

        {/* Natural Photographic Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/95 via-forest-deep/20 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-300" />

        {/* Center Play / Expand Icon on Hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gold/90 text-forest-deep flex items-center justify-center shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
            {isVideo ? (
              <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-forest-deep ml-0.5" />
            ) : (
              <Maximize2 className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </div>
        </div>

        {/* Bottom Caption Overlay (Visible titles & subtitles as in user screenshot) */}
        <div className="absolute bottom-0 inset-x-0 p-3 sm:p-5 z-10 transform translate-y-0.5 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="font-serif text-xs sm:text-base lg:text-lg font-bold text-ivory leading-snug drop-shadow-sm line-clamp-1 sm:line-clamp-2">
            {item.title}
          </h3>
          <p className="hidden sm:block text-xs text-sand-light/90 font-light mt-1 line-clamp-2 drop-shadow-xs">
            {item.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  
  const [isHoverPaused, setIsHoverPaused] = useState(false);

  // Featured Theater Video State
  const [activeVideoIdx, setActiveVideoIdx] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const featuredVideoRef = useRef(null);

  const theaterVideos = [
    {
      title: 'Aerial Resort Descent & Teak Canopy',
      subtitle: 'Drone flight over Go Flamingo Resort, swimming pool and Sillari forest edge',
      src: AUTHENTIC_RESORT.videos.heroCombined.mp4,
      webm: AUTHENTIC_RESORT.videos.heroCombined.webm,
      poster: AUTHENTIC_RESORT.videos.heroCombined.poster,
      duration: '0:09',
      tag: 'Aerial 4K',
    },
    {
      title: 'Haveli Courtyard & Scalloped Arches',
      subtitle: 'Traditional Rajasthani courtyard architecture, water fountain and evening lighting',
      src: AUTHENTIC_RESORT.videos.courtyard.mp4,
      webm: AUTHENTIC_RESORT.videos.courtyard.webm,
      poster: AUTHENTIC_RESORT.videos.courtyard.poster,
      duration: '0:05',
      tag: 'Haveli Heritage',
    },
    {
      title: 'Turquoise Swimming Pool & Deck',
      subtitle: 'Crystal blue waters and relaxing sun loungers for peaceful afternoons',
      src: AUTHENTIC_RESORT.videos.pool.mp4,
      webm: AUTHENTIC_RESORT.videos.pool.webm,
      poster: AUTHENTIC_RESORT.videos.pool.poster,
      duration: '0:04',
      tag: 'Outdoor Pool',
    },
    {
      title: 'Arched Entrance Porch & Lion Statues',
      subtitle: 'Palatial entry porch and stone fountains welcoming guests at Sillari',
      src: AUTHENTIC_RESORT.videos.entrance.mp4,
      webm: AUTHENTIC_RESORT.videos.entrance.webm,
      poster: AUTHENTIC_RESORT.videos.entrance.poster,
      duration: '0:03',
      tag: 'Grand Entrance',
    },
    {
      title: 'Aerial Teak Forest & Estate Panorama',
      subtitle: 'Sweeping drone survey of the lush green teak tree forest canopy bordering Pench',
      src: AUTHENTIC_RESORT.videos.heroAerial.mp4,
      webm: AUTHENTIC_RESORT.videos.heroAerial.webm,
      poster: AUTHENTIC_RESORT.videos.heroAerial.poster,
      duration: '0:07',
      tag: 'Nature Canopy',
    },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.title = 'Visual Gallery & Films | GoFlamingo Resort Pench';
  }, []);

  // Filter items
  const filteredItems = activeCategory === 'All'
    ? MASTER_CURATED_MEDIA
    : activeCategory === 'Videos'
      ? MASTER_CURATED_MEDIA.filter((item) => item.type === 'video')
      : MASTER_CURATED_MEDIA.filter((item) => item.category === activeCategory);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems]);

  // Auto-advance to next video when current video completes playing
  const handleVideoEnded = () => {
    setActiveVideoIdx((prev) => (prev + 1) % theaterVideos.length);
  };

  // Automatically trigger play and sync playback state on video index switch
  useEffect(() => {
    if (featuredVideoRef.current) {
      featuredVideoRef.current.currentTime = 0;
      const playPromise = featuredVideoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsVideoPlaying(true);
          })
          .catch(() => {
            if (featuredVideoRef.current) {
              featuredVideoRef.current.muted = true;
              setIsMuted(true);
              featuredVideoRef.current.play().then(() => setIsVideoPlaying(true)).catch(() => {});
            }
          });
      }
    }
  }, [activeVideoIdx]);

  // Initial autoplay trigger on component load
  useEffect(() => {
    const timer = setTimeout(() => {
      if (featuredVideoRef.current) {
        featuredVideoRef.current.muted = true;
        setIsMuted(true);
        featuredVideoRef.current.play().then(() => setIsVideoPlaying(true)).catch(() => {});
      }
    }, 350);
    return () => clearTimeout(timer);
  }, []);

  const toggleFeaturedPlay = () => {
    if (!featuredVideoRef.current) return;
    if (featuredVideoRef.current.paused) {
      featuredVideoRef.current.play().then(() => setIsVideoPlaying(true)).catch(() => {});
    } else {
      featuredVideoRef.current.pause();
      setIsVideoPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!featuredVideoRef.current) return;
    featuredVideoRef.current.muted = !featuredVideoRef.current.muted;
    setIsMuted(featuredVideoRef.current.muted);
  };

  const handleVideoSelect = (idx) => {
    setActiveVideoIdx(idx);
    setIsVideoPlaying(true);
  };

  // Duplicate items for continuous seamless horizon stream
  const horizonStreamItems = [...MASTER_CURATED_MEDIA, ...MASTER_CURATED_MEDIA];

  return (
    <div className="w-full bg-[#FAF8F5] text-charcoal font-sans antialiased overflow-x-hidden selection:bg-gold/30 selection:text-forest-deep">
      
      {/* ========================================================
          1. CINEMATIC LUXURY HERO BANNER (MAJESTIC ARCHITECTURE)
          ======================================================== */}
      <section className="relative w-full min-h-[520px] sm:min-h-[580px] lg:min-h-[620px] flex flex-col justify-end bg-forest-dark text-ivory overflow-hidden">
        
        {/* Background Full Frame Media */}
        <div className="absolute inset-0 z-0">
          <img
            src={AUTHENTIC_RESORT.photos.courtyardTwilight.src}
            alt="Go Flamingo Resort illuminated haveli courtyard at twilight"
            fetchPriority="high"
            className="w-full h-full object-cover object-[center_top] sm:object-center filter brightness-[0.96] contrast-[1.03]"
          />
          {/* Tailored architectural gradient scrims */}
          <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-deep/60 to-forest-dark/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/90 via-forest-dark/40 to-transparent sm:block hidden" />
        </div>

        {/* Foreground Content */}
        <Container size="xl" className="relative z-10 w-full pt-28 sm:pt-36 md:pt-40 pb-12 sm:pb-16 px-5 sm:px-8 md:px-12 lg:px-16">
          <div className="max-w-3xl space-y-3 sm:space-y-4">

            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-ivory font-normal tracking-tight leading-[1.12] text-balance">
              Visual Gallery & Property Films
            </h1>

            {/* Concise Supporting Copy */}
            <p className="text-xs sm:text-base md:text-lg text-sand-light/95 leading-relaxed font-light max-w-2xl">
              Authentic high-resolution photographs, drone aerials, and peaceful glimpses of haveli life at the threshold of Pench Tiger Reserve.
            </p>

            {/* Simple Dual Actions */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <button
                type="button"
                onClick={() => document.getElementById('featured-film-theater')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#DFBF8E] hover:bg-[#E8CA9E] text-[#0E2718] text-xs font-semibold uppercase tracking-[0.14em] shadow-lg transition-all duration-300 cursor-pointer text-center"
              >
                <span>Watch Resort Films</span>
                <Play className="w-3.5 h-3.5 fill-[#0E2718] text-[#0E2718]" />
              </button>

              <button
                type="button"
                onClick={() => document.getElementById('horizon-stream-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/30 text-xs font-medium uppercase tracking-[0.14em] backdrop-blur-sm transition-all duration-300 shadow-sm cursor-pointer text-center"
              >
                <span>View Photos ↓</span>
              </button>
            </div>

          </div>
        </Container>
      </section>


      {/* ========================================================
          2. THE GRAND HORIZON STREAM (ARCHITECTURAL LUXURY FILMSTRIP)
          Reimagined for ultra-premium luxury feel with speed controller
          ======================================================== */}
      {/* ========================================================
          2. THE GRAND HORIZON STREAM (ARCHITECTURAL LUXURY FILMSTRIP)
          Reimagined with Warm Sandstone Luxury Light Aesthetic
          ======================================================== */}
      <section
        id="horizon-stream-section"
        className="py-12 sm:py-16 bg-gradient-to-b from-[#FAF6F0] via-[#F4EDE2] to-[#EFE7D8] text-[#1A2E22] overflow-hidden border-y border-[#E2D6C0] relative scroll-mt-20"
        onMouseEnter={() => setIsHoverPaused(true)}
        onMouseLeave={() => setIsHoverPaused(false)}
        onTouchStart={() => setIsHoverPaused(true)}
        onTouchEnd={() => setTimeout(() => setIsHoverPaused(false), 2400)}
      >
        
        {/* Stream Header */}
        <Container size="xl" className="mb-6 sm:mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#10251B] font-normal tracking-tight">
              A Visual Odyssey Across GoFlamingo
            </h2>
          </div>
        </Container>

        {/* The Continuous Horizon Stream Canvas - Slow Luxury Drift by Default */}
        <div className="relative w-full overflow-hidden flex py-2">
          <div
            className={cn(
              "animate-stream-slow",
              isHoverPaused && "animation-paused"
            )}
          >
            {horizonStreamItems.map((item, idx) => (
              <div
                key={`stream-${item.id}-${idx}`}
                onClick={() => setLightboxIndex(MASTER_CURATED_MEDIA.findIndex((m) => m.id === item.id))}
                className={cn(
                  "group relative h-[360px] sm:h-[420px] md:h-[460px] rounded-3xl overflow-hidden shrink-0 cursor-pointer shadow-[0_12px_36px_rgba(16,37,27,0.10)] border border-[#DFD5C2] hover:border-[#C5A880] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(16,37,27,0.18)] mx-3 sm:mx-4 bg-white",
                  item.ribbonWidth || 'w-80 sm:w-96'
                )}
              >
                {/* Media Image / Video Poster */}
                <img
                  src={item.src || item.poster}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-1000 filter brightness-[0.98] contrast-[1.02]"
                  loading="lazy"
                />

                {/* Subtle Luxury Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08130B]/95 via-[#08130B]/25 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-300" />
                
                {/* Video Play Badge if Video */}
                {item.type === 'video' && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="w-8 h-8 rounded-full bg-white/95 backdrop-blur-md text-[#10251B] border border-[#E5DAC7] flex items-center justify-center shadow-lg group-hover:bg-[#C5A880] group-hover:text-[#08130B] transition-colors">
                      <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                    </span>
                  </div>
                )}

                {/* Minimal Elegant Bottom Caption */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-base sm:text-lg font-serif font-bold text-white tracking-tight drop-shadow-md">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#EAE2D5] font-light truncate mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.subtitle}
                  </p>
                </div>

                {/* Hover Center Magnifier */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="w-14 h-14 rounded-full bg-[#C5A880] text-[#08130B] flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    {item.type === 'video' ? (
                      <Play className="w-6 h-6 fill-[#08130B] text-[#08130B] ml-0.5" />
                    ) : (
                      <Maximize2 className="w-6 h-6 text-[#08130B]" />
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </section>


      {/* ========================================================
          3. CINEMATIC VIDEO THEATER (FEATURING REAL RESORT FILMS)
          Plays real high-definition resort drone & property videos
          ======================================================== */}
      <section id="featured-film-theater" className="py-16 sm:py-20 lg:py-24 bg-[#07130B] text-ivory scroll-mt-20 relative">
        
        {/* Ambient Backlight Glow */}
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none" />

        <Container size="xl" className="relative z-10">
          
          <div className="max-w-2xl mb-8 sm:mb-12">
            <span className="text-xs uppercase tracking-[0.22em] text-gold font-bold block mb-2">
              Cinema & Motion Showcase
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-ivory tracking-tight">
              Watch GoFlamingo Resort in Motion
            </h2>
            <p className="text-xs sm:text-sm text-sand-light/80 mt-2">
              Experience the energy of our haveli sanctuary, turquoise pool, and teak forest canopy through authentic resort films.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* The Main High-End Video Player (8 cols) */}
            <div className="lg:col-span-8">
              <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] border-2 border-[#C5A880]/40 aspect-16/9 bg-forest-dark group">
                <video
                  ref={featuredVideoRef}
                  key={theaterVideos[activeVideoIdx].src}
                  poster={theaterVideos[activeVideoIdx].poster}
                  autoPlay
                  playsInline
                  muted={isMuted}
                  onPlay={() => setIsVideoPlaying(true)}
                  onPause={() => setIsVideoPlaying(false)}
                  onEnded={handleVideoEnded}
                  className="w-full h-full object-cover object-center"
                >
                  <source src={theaterVideos[activeVideoIdx].webm} type="video/webm" />
                  <source src={theaterVideos[activeVideoIdx].src} type="video/mp4" />
                </video>

                {/* Ambient Play Overlay */}
                <div
                  onClick={toggleFeaturedPlay}
                  className={cn(
                    "absolute inset-0 bg-forest-dark/35 flex items-center justify-center transition-opacity duration-300 cursor-pointer",
                    isVideoPlaying ? "opacity-0 hover:opacity-100" : "opacity-100"
                  )}
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gold/90 hover:bg-gold text-forest-deep flex items-center justify-center shadow-2xl transition-transform hover:scale-110">
                    {isVideoPlaying ? (
                      <Pause className="w-7 h-7 sm:w-8 sm:h-8 fill-forest-deep text-forest-deep" />
                    ) : (
                      <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-forest-deep text-forest-deep ml-1" />
                    )}
                  </div>
                </div>

                {/* Bottom Video Control Scrim */}
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 bg-gradient-to-t from-forest-dark/95 via-forest-dark/60 to-transparent flex items-center justify-between pointer-events-auto">
                  <div className="min-w-0 pr-4">
                    <span className="text-[10px] uppercase tracking-wider text-gold font-bold flex items-center gap-1.5 mb-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold/80" />
                      <span>Resort Property Film • {theaterVideos[activeVideoIdx].tag}</span>
                    </span>
                    <h3 className="text-sm sm:text-base font-serif font-bold text-ivory truncate">
                      {theaterVideos[activeVideoIdx].title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={toggleMute}
                      title={isMuted ? "Unmute audio" : "Mute audio"}
                      className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 text-ivory flex items-center justify-center backdrop-blur-md transition-colors cursor-pointer"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        if (featuredVideoRef.current?.requestFullscreen) {
                          featuredVideoRef.current.requestFullscreen();
                        }
                      }}
                      title="Fullscreen"
                      className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 text-ivory flex items-center justify-center backdrop-blur-md transition-colors cursor-pointer"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Selector Playlist (4 cols) */}
            <div className="lg:col-span-4 space-y-3">
              <div className="mb-2">
                <span className="text-[11px] uppercase tracking-wider text-sand-dark font-semibold block">
                  Select Property Film ({theaterVideos.length} Reels)
                </span>
              </div>

              {theaterVideos.map((vid, idx) => (
                <div
                  key={idx}
                  onClick={() => handleVideoSelect(idx)}
                  className={cn(
                    "p-3 sm:p-3.5 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center gap-3.5 group relative overflow-hidden",
                    activeVideoIdx === idx
                      ? "bg-forest-deep border-gold shadow-lg ring-1 ring-gold/60 scale-[1.01]"
                      : "bg-[#0E2015]/70 border-sand/20 hover:border-gold/50 hover:bg-[#122b1c]"
                  )}
                >
                  {/* Thumbnail */}
                  <div className="relative w-20 h-14 rounded-xl overflow-hidden shrink-0 bg-forest-dark border border-white/10">
                    <img
                      src={vid.poster}
                      alt={vid.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
                      {activeVideoIdx === idx && isVideoPlaying ? (
                        <div className="flex items-end gap-0.5 h-3.5">
                          <span className="w-1 h-2 bg-gold animate-pulse rounded-full" />
                          <span className="w-1 h-3.5 bg-gold animate-pulse delay-100 rounded-full" />
                          <span className="w-1 h-2.5 bg-gold animate-pulse delay-200 rounded-full" />
                        </div>
                      ) : (
                        <Play className="w-4 h-4 fill-white text-white opacity-85 group-hover:scale-110 transition-transform" />
                      )}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1.5">
                      <h4 className={cn(
                        "text-xs sm:text-sm font-serif font-bold truncate transition-colors",
                        activeVideoIdx === idx ? "text-gold" : "text-ivory group-hover:text-gold"
                      )}>
                        {vid.title}
                      </h4>
                      {activeVideoIdx === idx && (
                        <span className="px-2 py-0.5 rounded-full bg-gold/20 border border-gold/40 text-[9px] uppercase font-bold text-gold shrink-0">
                          Playing
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-sand-light/70 truncate mt-0.5">
                      {vid.subtitle}
                    </p>
                    <span className="inline-block text-[10px] text-sand-dark mt-1 font-mono">
                      {vid.duration} • {vid.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </Container>
      </section>


      {/* ========================================================
          4. INTERACTIVE CATEGORY FILTER CAPSULE & VIEW SWITCHER
          High-Contrast Luxury Styling (Crystal Clear Contrast)
          ======================================================== */}
      <section id="media-grid-section" className="py-5 sm:py-6 bg-white border-y border-stone-200 sticky top-16 sm:top-20 z-30 shadow-xs backdrop-blur-md">
        <Container size="wide" className="px-3 sm:px-6 lg:px-8 max-w-[1540px]">
          
          {/* Top Bar: Curated Collection Count */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 mb-3.5 sm:mb-4 text-center sm:text-left">
            <div>
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-forest-deep font-bold block">
                Curated Photographic Portfolio
              </span>
              <span className="text-xs text-charcoal-muted">
                Displaying <strong className="text-forest-deep font-bold">{filteredItems.length}</strong> 5-Star Architectural & Nature Masterpieces
              </span>
            </div>
          </div>

          {/* Unified Single-Row Luxury Filter Tabs (No Horizontal Scroll, All in One Clean Row) */}
          <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-1.5 sm:gap-2 xl:gap-2.5 w-full">
            {FILTER_TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeCategory === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveCategory(tab.id)}
                  className={cn(
                    'inline-flex items-center justify-center gap-1.5 px-2.5 sm:px-3 xl:px-3.5 py-1.5 sm:py-2 rounded-full text-[11px] xl:text-xs font-bold uppercase tracking-wider transition-all duration-200 whitespace-nowrap cursor-pointer shadow-xs',
                    isActive
                      ? 'bg-forest-deep text-gold border-2 border-gold shadow-md font-bold ring-2 ring-gold/40'
                      : 'bg-[#FAF7F2] hover:bg-white text-[#243E2B] hover:text-forest-deep border border-[#DDD3C4] hover:border-gold/60'
                  )}
                >
                  <Icon className={cn('w-3.5 h-3.5 shrink-0', isActive ? 'text-gold' : 'text-[#8E6D3E]')} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

        </Container>
      </section>


      {/* ========================================================
          5. CURATED GALLERY MEDIA GRID (EXCLUSIVE 5-STAR QUALITY)
          Clean, unified, fast-loading responsive grid
          ======================================================== */}
      <section className="py-8 sm:py-12 lg:py-16 bg-[#FAF8F5]">
        <Container size="xl">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4 lg:gap-6">
            {filteredItems.map((item, index) => (
              <GalleryCard
                key={item.id}
                item={item}
                index={index}
                activeCategory={activeCategory}
                onOpenLightbox={() => setLightboxIndex(index)}
              />
            ))}
          </div>
        </Container>
      </section>


      {/* ========================================================
          6. FULLSCREEN INTERACTIVE LIGHTBOX
          Keyboard navigation, prev/next, high-res video & photo view
          ======================================================== */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 text-ivory flex flex-col justify-between p-4 sm:p-6 backdrop-blur-2xl animate-in fade-in-0 duration-200"
        >
          {/* Lightbox Header Bar */}
          <div className="flex items-center justify-between w-full max-w-6xl mx-auto z-10 py-2">
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-widest text-gold font-bold px-3 py-1 rounded-full bg-white/10 border border-gold/40">
                {filteredItems[lightboxIndex].type === 'video' ? 'Property Film' : 'Photograph'}
              </span>
              <span className="text-xs text-sand-light/80 font-mono">
                {lightboxIndex + 1} of {filteredItems.length}
              </span>
            </div>

            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer"
              title="Close (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Lightbox Center Media Canvas */}
          <div className="relative flex-1 flex items-center justify-center w-full max-w-5xl mx-auto my-auto px-2 sm:px-12">
            
            {/* Prev Button */}
            <button
              type="button"
              onClick={() => setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length)}
              className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/70 hover:bg-gold hover:text-forest-deep text-white border border-white/25 flex items-center justify-center transition-all cursor-pointer z-10"
              title="Previous (Left Arrow)"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Media Presentation */}
            <div className="relative max-h-[72dvh] max-w-full rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-black flex items-center justify-center">
              {filteredItems[lightboxIndex].type === 'video' ? (
                <video
                  key={filteredItems[lightboxIndex].videoSrc}
                  controls
                  autoPlay
                  playsInline
                  className="max-h-[72dvh] max-w-full rounded-xl object-contain bg-black"
                >
                  <source src={filteredItems[lightboxIndex].webmSrc} type="video/webm" />
                  <source src={filteredItems[lightboxIndex].videoSrc} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={filteredItems[lightboxIndex].src}
                  alt={filteredItems[lightboxIndex].title}
                  className="max-h-[72dvh] max-w-full object-contain rounded-xl select-none"
                />
              )}
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={() => setLightboxIndex((prev) => (prev + 1) % filteredItems.length)}
              className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/70 hover:bg-gold hover:text-forest-deep text-white border border-white/25 flex items-center justify-center transition-all cursor-pointer z-10"
              title="Next (Right Arrow)"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Footer Caption Bar & Inquiry Action */}
          <div className="w-full max-w-3xl mx-auto text-center py-2">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-ivory">
              {filteredItems[lightboxIndex].title}
            </h3>
            <p className="text-xs sm:text-sm text-sand-light/80 mt-1 font-light">
              {filteredItems[lightboxIndex].subtitle}
            </p>

            <div className="mt-3">
              <a
                href={`${QUICK_CONTACT.whatsappUrl}?text=${encodeURIComponent(`Hello GoFlamingo Resort, I saw "${filteredItems[lightboxIndex].title}" in your website gallery and would like to inquire about booking/stay details.`)}`}
                target={getWhatsAppTarget()}
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#128C7E] hover:bg-[#25D366] text-white text-xs font-semibold transition-colors shadow-sm"
              >
                <WhatsAppIcon size="sm" className="text-white" />
                <span>Inquire About This on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}


      {/* ========================================================
          7. MASTER VISIT & RESERVATION CTA CARD (UNIFIED CHAMPAGNE CARD)
          ======================================================== */}
      <ClosingCallToAction
        eyebrow="Visit Pench · Sillari Gate"
        title="Experience the Sanctuary in Person"
        description="Photographs and films are only the beginning. Step inside our tranquil haveli verandahs, feel the evening forest breeze, and set out for dawn tiger safaris."
        primaryBtnLabel="Book Your Stay Online"
        whatsappLabel="WhatsApp Instant Inquiry"
        whatsappMsg="Hello Go Flamingo Resort, I was viewing your website gallery and would like to inquire about room availability and safari booking at Sillari Gate."
      />

    </div>
  );
}
