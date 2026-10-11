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
  Layers,
  MapPin,
  Grid,
  Columns,
  Eye,
  Zap,
} from 'lucide-react';
import {
  Container,
  WhatsAppIcon,
} from '../../components/common';
import { AUTHENTIC_RESORT, RESORT_DRIVE_PHOTOS, IMAGES } from '../../data/images';
import { QUICK_CONTACT } from '../../data/navigation';
import { cn } from '../../utils/cn';
import { getWhatsAppTarget } from '../../utils/whatsapp';

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

  // --- POOL & LEISURE RECREATION (ENHANCED 5-STAR QUALITY) ---
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

  // --- WEDDINGS & CELEBRATIONS ---
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

  // --- ROOMS & ACCOMMODATIONS ---
  {
    id: 'stay-1',
    type: 'photo',
    category: 'Rooms',
    tag: 'Executive Suite',
    title: 'Executive Room Private Balcony View',
    subtitle: 'Spacious super deluxe room with glass doors opening to lush garden canopy',
    src: RESORT_DRIVE_PHOTOS.executiveBedroomBalcony.src,
    aspect: 'aspect-16/10',
    ribbonWidth: 'w-80 sm:w-96 md:w-[420px]',
  },
  {
    id: 'stay-2',
    type: 'photo',
    category: 'Rooms',
    tag: 'Deluxe Room',
    title: 'Deluxe Bedroom with Teak Finishes',
    subtitle: 'Handcrafted king-size teak bed, split air-conditioning and private sit-out',
    src: AUTHENTIC_RESORT.photos.deluxeBedroom.src,
    aspect: 'aspect-4/3',
    ribbonWidth: 'w-72 sm:w-88 md:w-96',
  },
  {
    id: 'stay-3',
    type: 'photo',
    category: 'Rooms',
    tag: 'Suite Bathroom',
    title: 'Suite Bathroom with Deep Bathtub',
    subtitle: 'Contemporary luxury bathroom suite with bathtub, shower and premium fittings',
    src: RESORT_DRIVE_PHOTOS.bedroomSuiteBathtub.src,
    aspect: 'aspect-4/3',
    ribbonWidth: 'w-72 sm:w-80 md:w-96',
  },
  {
    id: 'stay-4',
    type: 'photo',
    category: 'Rooms',
    tag: 'Group Dormitory',
    title: 'Air-Conditioned Group Dormitory Hall',
    subtitle: 'Large group hall with individual beds, clean linens and attached baths',
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

// Curated Category Filter definitions with High Contrast styling
const FILTER_TABS = [
  { id: 'All', label: 'All Highlights', icon: Sparkles, count: MASTER_CURATED_MEDIA.length },
  { id: 'Videos', label: 'Property Films', icon: Film, count: MASTER_CURATED_MEDIA.filter((m) => m.type === 'video').length },
  { id: 'Resort', label: 'Haveli Architecture', icon: Camera, count: MASTER_CURATED_MEDIA.filter((m) => m.category === 'Resort').length },
  { id: 'Leisure', label: 'Pool & Recreation', icon: Zap, count: MASTER_CURATED_MEDIA.filter((m) => m.category === 'Leisure').length },
  { id: 'Events', label: 'Weddings & Celebrations', icon: Sparkles, count: MASTER_CURATED_MEDIA.filter((m) => m.category === 'Events').length },
  { id: 'Rooms', label: 'Luxury Stays', icon: Layers, count: MASTER_CURATED_MEDIA.filter((m) => m.category === 'Rooms').length },
  { id: 'Dining', label: 'Dining & Bar', icon: Camera, count: MASTER_CURATED_MEDIA.filter((m) => m.category === 'Dining').length },
  { id: 'Wildlife', label: 'Pench Safaris', icon: Eye, count: MASTER_CURATED_MEDIA.filter((m) => m.category === 'Wildlife').length },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [viewMode, setViewMode] = useState('masonry'); // 'masonry' | 'grid'
  
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

  const toggleFeaturedPlay = () => {
    if (!featuredVideoRef.current) return;
    if (featuredVideoRef.current.paused) {
      featuredVideoRef.current.play();
      setIsVideoPlaying(true);
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
    if (featuredVideoRef.current) {
      featuredVideoRef.current.load();
      featuredVideoRef.current.play().catch(() => {});
    }
  };

  // Duplicate items for continuous seamless horizon stream
  const horizonStreamItems = [...MASTER_CURATED_MEDIA, ...MASTER_CURATED_MEDIA];

  return (
    <div className="w-full bg-[#FAF8F5] text-charcoal font-sans antialiased overflow-x-hidden selection:bg-gold/30 selection:text-forest-deep">
      
      {/* ========================================================
          1. FULL-FRAME CINEMATIC HERO (100DVH VIEWPORT)
          Bleeds edge-to-edge behind floating navbar without top gap
          ======================================================== */}
      <section className="relative w-full h-[100dvh] max-h-[100dvh] min-h-[600px] flex flex-col justify-end bg-forest-dark text-ivory overflow-hidden snap-start">
        
        {/* Background Full Frame Media */}
        <div className="absolute inset-0 z-0">
          <img
            src={AUTHENTIC_RESORT.photos.courtyardTwilight.src}
            alt="Go Flamingo Resort illuminated haveli courtyard at twilight"
            fetchPriority="high"
            className="w-full h-full object-cover object-[center_top] sm:object-center filter brightness-[0.98] contrast-[1.03] scale-102 transition-transform duration-1000"
          />
          {/* Lighter architectural gradient scrims: keeps top vibrant */}
          <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-deep/65 to-forest-dark/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/90 via-forest-dark/45 to-transparent sm:block hidden" />
        </div>

        {/* Foreground Content */}
        <Container size="xl" className="relative z-10 w-full pt-28 sm:pt-36 md:pt-40 pb-8 sm:pb-12">
          <div className="max-w-3xl">

            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-black/45 border border-gold/50 text-gold-light text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-3 sm:mb-4 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span>Architectural Showcase • Sillari, Pench</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-ivory font-normal tracking-tight leading-[1.12] mb-3 sm:mb-4 text-balance drop-shadow-sm">
              The <span className="text-gold font-serif italic">Gallery & Films</span>
            </h1>

            {/* Concise Supporting Copy */}
            <p className="text-xs sm:text-base md:text-lg text-sand-light/95 leading-relaxed font-light mb-6 sm:mb-8 max-w-2xl border-l-2 border-gold/80 pl-3.5 drop-shadow-xs">
              Explore authentic high-resolution moments from GoFlamingo Resort—from drone aerials and palatial haveli arches to turquoise pool loungers, destination weddings, and thrilling Pench tiger safaris.
            </p>

            {/* Fast Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
              <button
                type="button"
                onClick={() => document.getElementById('featured-film-theater')?.scrollIntoView({ behavior: 'smooth' })}
                className="group inline-flex items-center justify-center gap-2 pl-5 pr-2 py-2.5 rounded-full bg-gradient-to-r from-[#DFBF8E] via-[#C5A880] to-[#B39366] hover:from-[#E8CA9E] hover:to-[#C5A880] text-[#08130B] text-xs uppercase tracking-[0.12em] font-bold shadow-[0_4px_16px_rgba(197,168,128,0.25)] hover:shadow-[0_6px_22px_rgba(197,168,128,0.4)] border border-[#F3DFC1] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
              >
                <span>Watch Resort Films</span>
                <span className="w-6 h-6 rounded-full bg-[#08130B] text-[#DFBF8E] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shrink-0 shadow-inner">
                  <Play className="w-3 h-3 fill-[#DFBF8E] text-[#DFBF8E]" />
                </span>
              </button>

              <button
                type="button"
                onClick={() => document.getElementById('horizon-stream-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white/15 hover:bg-white/25 border border-white/25 text-xs uppercase tracking-[0.10em] font-semibold text-white backdrop-blur-md transition-all duration-200 cursor-pointer whitespace-nowrap"
              >
                <span>Explore Grand Gallery</span>
                <ArrowDown className="w-3.5 h-3.5 text-gold" />
              </button>
            </div>

          </div>
        </Container>

        {/* Bottom Quick-Fact Highlight Bar */}
        <div className="relative z-10 w-full border-t border-sand/20 bg-forest-deep/95 backdrop-blur-md py-3.5 sm:py-4 shadow-lg">
          <Container size="xl">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-center divide-x-0 sm:divide-x divide-sand/15">
              <div className="px-2">
                <span className="block text-[10px] sm:text-[11px] uppercase tracking-wider text-sand-dark font-medium">Curated Highlights</span>
                <span className="text-xs sm:text-sm font-serif font-bold text-ivory">5-Star Authentic Imagery</span>
              </div>
              <div className="px-2">
                <span className="block text-[10px] sm:text-[11px] uppercase tracking-wider text-sand-dark font-medium">Property Films</span>
                <span className="text-xs sm:text-sm font-serif font-bold text-gold">5 High-Def Drone & Video Reels</span>
              </div>
              <div className="px-2">
                <span className="block text-[10px] sm:text-[11px] uppercase tracking-wider text-sand-dark font-medium">Resolution</span>
                <span className="text-xs sm:text-sm font-serif font-bold text-ivory">Full HD & 4K Aerials</span>
              </div>
              <div className="px-2">
                <span className="block text-[10px] sm:text-[11px] uppercase tracking-wider text-sand-dark font-medium">Location</span>
                <span className="text-xs sm:text-sm font-serif font-bold text-gold">Sillari Gate, Pench</span>
              </div>
            </div>
          </Container>
        </div>
      </section>


      {/* ========================================================
          2. THE GRAND HORIZON STREAM (ARCHITECTURAL LUXURY FILMSTRIP)
          Reimagined for ultra-premium luxury feel with speed controller
          ======================================================== */}
      <section
        id="horizon-stream-section"
        className="py-12 sm:py-16 bg-[#08150D] text-ivory overflow-hidden border-b border-[#1A3323] relative scroll-mt-20"
        onMouseEnter={() => setIsHoverPaused(true)}
        onMouseLeave={() => setIsHoverPaused(false)}
      >
        
        {/* Stream Header & Dynamic Speed Bar */}
        <Container size="xl" className="mb-6 sm:mb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            
            {/* Title & Eyebrow */}
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-gold font-bold mb-1.5">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                <span>The Living Stream • Authentic Resort Moments</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif text-ivory font-normal tracking-tight">
                A Visual Odyssey Across GoFlamingo
              </h2>
            </div>

            {/* Subtle Minimalist Indicator */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D2216]/90 border border-gold/30 text-xs text-sand-light/80 font-light backdrop-blur-md shadow-sm self-start md:self-auto">
              <span className="w-2 h-2 rounded-full bg-gold/80 animate-pulse" />
              <span>Hover to pause • Click to expand</span>
            </div>

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
                  "group relative h-[360px] sm:h-[420px] md:h-[460px] rounded-3xl overflow-hidden shrink-0 cursor-pointer shadow-[0_12px_40px_rgba(0,0,0,0.5)] border border-sand/20 hover:border-gold/90 transition-all duration-500 hover:scale-[1.02] mx-3 sm:mx-4 bg-forest-dark",
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
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/95 via-forest-deep/15 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                
                {/* Floating Top Luxury Tag (Frosted Pill) */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-gold text-[11px] font-semibold tracking-wider uppercase border border-gold/30 shadow-md">
                    {item.type === 'video' ? <Film className="w-3 h-3 text-gold" /> : <Camera className="w-3 h-3 text-gold" />}
                    <span>{item.tag || item.category}</span>
                  </span>
                </div>

                {/* Video Play Badge if Video */}
                {item.type === 'video' && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md text-gold border border-gold/40 flex items-center justify-center shadow-lg">
                      <Play className="w-3.5 h-3.5 fill-gold ml-0.5" />
                    </span>
                  </div>
                )}

                {/* Minimal Elegant Bottom Caption */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[10px] text-gold uppercase tracking-[0.2em] font-bold block mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-serif font-bold text-ivory tracking-tight drop-shadow-md">
                    {item.title}
                  </h3>
                  <p className="text-xs text-sand-light/85 font-light truncate mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.subtitle}
                  </p>
                </div>

                {/* Hover Center Magnifier */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="w-14 h-14 rounded-full bg-gold/90 text-forest-deep flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    {item.type === 'video' ? (
                      <Play className="w-6 h-6 fill-forest-deep ml-0.5" />
                    ) : (
                      <Maximize2 className="w-6 h-6" />
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Hover Hint */}
        <div className="mt-4 text-center text-xs text-sand-dark/70 font-light">
          <span>Tip: Hover cursor over any frame to pause and admire • Click to view in full-screen 4K lightbox</span>
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
                  loop
                  playsInline
                  muted={isMuted}
                  onPlay={() => setIsVideoPlaying(true)}
                  onPause={() => setIsVideoPlaying(false)}
                  className="w-full h-full object-cover object-center"
                >
                  <source src={theaterVideos[activeVideoIdx].webm} type="video/webm" />
                  <source src={theaterVideos[activeVideoIdx].src} type="video/mp4" />
                </video>

                {/* Ambient Play Overlay */}
                <div
                  onClick={toggleFeaturedPlay}
                  className={cn(
                    "absolute inset-0 bg-forest-dark/40 flex items-center justify-center transition-opacity duration-300 cursor-pointer",
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
                    <span className="text-[10px] uppercase tracking-wider text-gold font-bold block">
                      Now Playing • {theaterVideos[activeVideoIdx].tag}
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
              <span className="text-[11px] uppercase tracking-wider text-sand-dark font-semibold block mb-1">
                Select Property Film ({theaterVideos.length} Reels)
              </span>

              {theaterVideos.map((vid, idx) => (
                <div
                  key={idx}
                  onClick={() => handleVideoSelect(idx)}
                  className={cn(
                    "p-3 sm:p-3.5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center gap-3.5 group",
                    activeVideoIdx === idx
                      ? "bg-forest-deep border-gold shadow-md ring-1 ring-gold/50"
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
                      <Play className="w-4 h-4 fill-white text-white opacity-85 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className={cn(
                      "text-xs sm:text-sm font-serif font-bold truncate transition-colors",
                      activeVideoIdx === idx ? "text-gold" : "text-ivory group-hover:text-gold"
                    )}>
                      {vid.title}
                    </h4>
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
      <section id="media-grid-section" className="py-6 sm:py-8 bg-white border-y border-stone-200 sticky top-16 sm:top-20 z-30 shadow-xs backdrop-blur-md">
        <Container size="xl">
          
          {/* Top Bar: Headline & Layout Toggle */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-forest-deep font-bold block">
                Curated Photographic Portfolio
              </span>
              <span className="text-xs text-charcoal-muted">
                Displaying <strong className="text-forest-deep font-bold">{filteredItems.length}</strong> 5-Star Architectural & Nature Masterpieces
              </span>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-1.5 bg-stone-100 p-1 rounded-full border border-stone-300">
              <button
                type="button"
                onClick={() => setViewMode('masonry')}
                className={cn(
                  'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer',
                  viewMode === 'masonry'
                    ? 'bg-forest-deep text-white shadow-xs'
                    : 'text-stone-600 hover:text-forest-deep'
                )}
                title="Editorial Masonry Flow"
              >
                <Columns className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Masonry</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={cn(
                  'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer',
                  viewMode === 'grid'
                    ? 'bg-forest-deep text-white shadow-xs'
                    : 'text-stone-600 hover:text-forest-deep'
                )}
                title="Curated Grid View"
              >
                <Grid className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Grid</span>
              </button>
            </div>
          </div>

          {/* High Contrast Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {FILTER_TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeCategory === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveCategory(tab.id)}
                  className={cn(
                    'inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 whitespace-nowrap cursor-pointer shadow-xs',
                    isActive
                      ? 'bg-forest-deep text-white border-2 border-gold shadow-md font-bold ring-2 ring-gold/40'
                      : 'bg-stone-50 hover:bg-stone-100 text-stone-700 hover:text-forest-deep border border-stone-300 hover:border-forest-deep/40'
                  )}
                >
                  <Icon className={cn('w-3.5 h-3.5', isActive ? 'text-gold' : 'text-stone-500')} />
                  <span>{tab.label}</span>
                  <span className={cn(
                    'px-1.5 py-0.5 rounded-full text-[10px] font-mono',
                    isActive ? 'bg-gold text-forest-deep font-bold' : 'bg-stone-200 text-stone-600'
                  )}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

        </Container>
      </section>


      {/* ========================================================
          5. CURATED GALLERY MEDIA GRID (EXCLUSIVE 5-STAR QUALITY)
          Supporting Masonry & Uniform Grid Modes
          ======================================================== */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#FAF8F5]">
        <Container size="xl">
          
          <div className={cn(
            viewMode === 'masonry'
              ? 'columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6'
              : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
          )}>
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className="group relative rounded-3xl overflow-hidden break-inside-avoid shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.18)] border border-stone-200/90 hover:border-gold transition-all duration-500 cursor-pointer bg-forest-dark"
              >
                {/* Media Image / Video Poster */}
                <div className={cn("relative w-full overflow-hidden bg-forest-dark", item.aspect || "aspect-4/3")}>
                  <img
                    src={item.src || item.poster}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-1000 filter brightness-[0.98]"
                  />

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/95 via-forest-deep/20 to-transparent opacity-65 group-hover:opacity-95 transition-opacity duration-300" />

                  {/* Floating Tag */}
                  <div className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 text-gold text-[10px] font-bold uppercase tracking-wider backdrop-blur-md border border-gold/40 shadow-sm">
                    {item.type === 'video' ? <Film className="w-3 h-3 text-gold" /> : <Camera className="w-3 h-3 text-gold" />}
                    <span>{item.type === 'video' ? `Video (${item.duration})` : (item.tag || item.category)}</span>
                  </div>

                  {/* Hover Center Play / Expand Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 rounded-full bg-gold/90 text-forest-deep flex items-center justify-center shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      {item.type === 'video' ? (
                        <Play className="w-6 h-6 fill-forest-deep ml-0.5" />
                      ) : (
                        <Maximize2 className="w-6 h-6" />
                      )}
                    </div>
                  </div>

                  {/* Bottom Caption Overlay */}
                  <div className="absolute bottom-0 inset-x-0 p-5 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[10px] text-gold uppercase tracking-widest font-bold block mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-ivory leading-snug drop-shadow-sm">
                      {item.title}
                    </h3>
                    <p className="text-xs text-sand-light/85 font-light mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>
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
                {filteredItems[lightboxIndex].category}
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
          7. MASTER VISIT & RESERVATION CTA CARD
          ======================================================== */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-[#FAF6F1] text-charcoal border-t border-stone-200/80 overflow-hidden">
        
        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#163824]/5 rounded-full blur-3xl pointer-events-none" />

        <Container size="lg" className="relative z-10">
          
          <div className="relative rounded-3xl border-2 border-[#C5A880]/40 bg-gradient-to-br from-[#0F291B] via-[#0C2417] to-[#07160E] p-8 sm:p-12 md:p-14 text-center shadow-[0_20px_50px_-15px_rgba(15,41,27,0.4)] overflow-hidden ring-1 ring-inset ring-white/10">

            {/* Inner champagne & emerald light glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-[220px] bg-[#C5A880]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-10 w-60 h-60 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

            {/* Eyebrow Pill */}
            <div className="relative z-10 inline-flex items-center px-4 py-1 rounded-full bg-white/10 border border-[#C5A880]/40 text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#DFBF8E] font-semibold mb-4 backdrop-blur-sm">
              <span>Visit Pench • Sillari Gate</span>
            </div>

            {/* Headline */}
            <h2 className="relative z-10 font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-normal leading-[1.2] text-white mb-3.5 max-w-2xl mx-auto text-balance">
              Experience the Sanctuary in Person
            </h2>

            {/* Supporting Copy */}
            <p className="relative z-10 font-sans text-xs sm:text-sm md:text-base text-sand-light/85 max-w-lg mx-auto mb-8 font-light leading-relaxed">
              Photographs and films are only the beginning. Step inside our tranquil haveli verandahs, feel the evening forest breeze, and set out for dawn tiger safaris.
            </p>

            {/* High-Intent Dual Actions with Signature Arrow Capsule */}
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-xl mx-auto mb-8">
              
              <Link
                to="/contact?book=true#reservation-form-card"
                className="group flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 pl-5 pr-2 py-2.5 rounded-full bg-gradient-to-r from-[#DFBF8E] via-[#C5A880] to-[#B39366] hover:from-[#E8CA9E] hover:to-[#C5A880] text-[#08130B] text-xs uppercase tracking-[0.12em] font-bold shadow-[0_4px_16px_rgba(197,168,128,0.25)] hover:shadow-[0_6px_22px_rgba(197,168,128,0.4)] border border-[#F3DFC1] transition-all duration-300 w-full sm:w-auto cursor-pointer whitespace-nowrap"
              >
                <span>Book Your Stay Online</span>
                <span className="w-6 h-6 rounded-full bg-[#08130B] text-[#DFBF8E] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 shrink-0 shadow-inner">
                  <ArrowRight className="w-3.5 h-3.5 text-[#DFBF8E]" />
                </span>
              </Link>

              <a
                href={`${QUICK_CONTACT.whatsappUrl}?text=${encodeURIComponent('Hello Go Flamingo Resort, I was viewing your website gallery and would like to inquire about room availability and safari booking at Sillari Gate.')}`}
                target={getWhatsAppTarget()}
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#0D2418]/90 hover:bg-[#133522] border-2 border-[#25D366]/60 hover:border-[#25D366] text-xs uppercase tracking-[0.08em] font-bold text-white shadow-[0_4px_16px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.2)] transition-all duration-300 w-full sm:w-auto cursor-pointer whitespace-nowrap"
              >
                <WhatsAppIcon size="sm" className="text-[#25D366] shrink-0" />
                <span>WhatsApp Instant Inquiry</span>
              </a>

            </div>

            {/* Reassurance Footer Strip */}
            <div className="relative z-10 pt-6 border-t border-white/15 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-sand-light/75 font-light">
              <span>
                Direct Assistance:{' '}
                <a href={`tel:${QUICK_CONTACT.phoneRaw}`} className="text-[#DFBF8E] font-semibold hover:underline">
                  {QUICK_CONTACT.phone}
                </a>
              </span>
              <span className="hidden sm:inline text-white/30">·</span>
              <span>Sillari Gate, Sitapur, Pench</span>
              <span className="hidden sm:inline text-white/30">·</span>
              <span className="text-[#DFBF8E] font-medium inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Just 65 km from Nagpur via NH 44 (1 Hr)</span>
              </span>
            </div>

          </div>

        </Container>
      </section>

    </div>
  );
}
