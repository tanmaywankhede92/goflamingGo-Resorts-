import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowDown,
  MapPin,
  Phone,
  Compass,
  Users,
  TreePine,
  Building2,
  Briefcase,
  Sparkles,
  CheckCircle2,
  Globe,
  ExternalLink,
  Waves,
  UtensilsCrossed,
  Music,
  Gamepad2,
  Baby,
} from 'lucide-react';
import {
  Container,
  Heading,
  Text,
  SectionEyebrow,
  Button,
  Badge,
  WhatsAppIcon,
} from '../../components/common';
import { AUTHENTIC_RESORT, RESORT_DRIVE_PHOTOS, IMAGES } from '../../data/images';
import { QUICK_CONTACT } from '../../data/navigation';
import { cn } from '../../utils/cn';
import { getWhatsAppTarget } from '../../utils/whatsapp';

/**
 * AboutPage Component — GoFlamingo Resort (Pench • Sillari Gate)
 * 
 * Refined Hospitality Experience:
 * - Full-Frame Hero without top white lines/gaps (bleeds behind floating navbar).
 * - Realistic luxury SVG icons (Lucide Icons) replacing casual emojis.
 * - Consistent site-wide arrow badges matching homepage button styling.
 * - Luxury inner-bordered & shadowed CTA box preventing any plain/empty aesthetic.
 */
export default function AboutPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.title = 'About GoFlamingo Resort | Sillari, Pench National Park';
  }, []);

  const whatsappUrl = `${QUICK_CONTACT.whatsappUrl}?text=${encodeURIComponent(
    'Hello Go Flamingo Resort, I would like to inquire about rooms, facilities, and safari booking at Sillari Gate.'
  )}`;

  // Key Property Facts Grid
  const propertySpecs = [
    {
      label: 'Resort Name',
      value: 'GoFlamingo Resort',
      highlight: 'Sillari, Pench',
      icon: <Building2 className="w-5 h-5 text-gold" />,
    },
    {
      label: 'Location',
      value: 'Sillari, Pench Region',
      highlight: 'Maharashtra, India',
      icon: <MapPin className="w-5 h-5 text-gold" />,
    },
    {
      label: 'Accommodation',
      value: '20 Rooms + 1 Dormitory',
      highlight: 'Deluxe & Super Deluxe',
      icon: <CheckCircle2 className="w-5 h-5 text-gold" />,
    },
    {
      label: 'Meeting Facility',
      value: 'Conference Room',
      highlight: 'Offsites & Conclaves',
      icon: <Briefcase className="w-5 h-5 text-gold" />,
    },
    {
      label: 'Official Website',
      value: 'goflamingoresorts.com',
      highlight: 'Direct Bookings',
      isLink: true,
      href: 'https://goflamingoresorts.com/',
      icon: <Globe className="w-5 h-5 text-gold" />,
    },
    {
      label: 'Sillari Gate Distance',
      value: 'Just Minutes Away',
      highlight: 'Direct Tiger Safari',
      icon: <Compass className="w-5 h-5 text-gold" />,
    },
  ];

  // Room Categories Showcase
  const roomTypes = [
    {
      title: 'Deluxe Rooms',
      category: 'Comfort & Nature Sit-out',
      image: AUTHENTIC_RESORT.photos.deluxeBedroom.src,
      alt: 'Go Flamingo Deluxe Room with King Bed and Teak Finishes',
      description:
        'Elegantly appointed air-conditioned rooms featuring handcrafted king beds, warm teak finishes, and modern attached bathrooms. Perfect for couples and peaceful weekend getaways.',
      specs: ['King Size Bed', 'Split AC & LED TV', 'Attached Modern Bath', 'Garden Sit-out'],
      badge: 'Popular for Couples',
      link: '/rooms/luxury-cottage',
    },
    {
      title: 'Super Deluxe Rooms',
      category: 'Premium Balcony & Spacious Suite',
      image: RESORT_DRIVE_PHOTOS.executiveBedroomBalcony.src,
      alt: 'Go Flamingo Super Deluxe Room with Private Balcony and Forest View',
      description:
        'Spacious luxury rooms featuring panoramic glass doors opening to a private balcony overlooking green gardens and tall trees. Includes bathtub amenities and plush lounge seating.',
      specs: ['Private Forest Balcony', 'Bathtub & Rain Shower', 'Spacious Seating Area', 'Tea / Coffee Station'],
      badge: 'Luxury Stays',
      link: '/rooms/luxury-cottage',
    },
    {
      title: 'Group Dormitory',
      category: '1 Dedicated AC Hall for Groups',
      image: AUTHENTIC_RESORT.photos.dormitoryRoom.src,
      alt: 'Go Flamingo Group Dormitory Accommodation with Multiple Beds',
      description:
        'Spacious, fully air-conditioned group hall equipped with comfortable individual beds and clean linens. Specially designed for student excursions, wildlife photography clubs, and family reunions.',
      specs: ['1 Large AC Dormitory', 'Individual Bunk/Cots', 'Dedicated Washrooms', 'Secure Luggage Storage'],
      badge: 'Groups & Wildlife Tours',
      link: '/rooms',
    },
  ];

  // Facilities & Recreation Options
  const facilities = [
    {
      title: 'Conference Room',
      category: 'Meetings & Conclaves',
      image: RESORT_DRIVE_PHOTOS.gameZoneLounge.src,
      alt: 'Go Flamingo Conference Room and Club Lounge',
      description:
        'Dedicated air-conditioned facility equipped for corporate meetings, workshops, strategy retreats, and group presentations in a quiet wilderness setting.',
      badge: 'Corporate Facility',
      icon: <Briefcase className="w-4 h-4 text-gold" />,
    },
    {
      title: 'Outdoor Swimming Pool',
      category: 'Leisure & Relaxation',
      image: RESORT_DRIVE_PHOTOS.pool.src,
      alt: 'Go Flamingo Outdoor Swimming Pool with Sun Loungers',
      description:
        'Turquoise swimming pool framed by native foliage, sun loungers, and a dedicated kids splash pool for family afternoon fun.',
      badge: 'Kids & Adults',
      icon: <Waves className="w-4 h-4 text-gold" />,
    },
    {
      title: 'Restaurant & Bar',
      category: 'Dining & Socializing',
      image: AUTHENTIC_RESORT.photos.restaurantBarHall.src,
      alt: 'Go Flamingo Restaurant and Bar with Crystal Chandeliers',
      description:
        'Grand indoor dining space featuring crystal chandeliers, booth seating, regional Vidarbha delicacies, multi-cuisine favorites, and early safari breakfast boxes.',
      badge: 'Multi-Cuisine',
      icon: <UtensilsCrossed className="w-4 h-4 text-gold" />,
    },
    {
      title: 'Rain Dance Arena',
      category: 'Music & Outdoor Fun',
      image: RESORT_DRIVE_PHOTOS.rainDance.src,
      alt: 'Go Flamingo Rain Dance Arena with Mist Showers',
      description:
        'Overhead mist showers and dance floor with sound setup, creating an energetic celebration space for group get-togethers and celebrations.',
      badge: 'Interactive Fun',
      icon: <Music className="w-4 h-4 text-gold" />,
    },
    {
      title: 'Indoor Game Zone',
      category: 'Recreation & Club',
      image: RESORT_DRIVE_PHOTOS.gameZone.src,
      alt: 'Go Flamingo Indoor Game Zone with Billiards and Table Tennis',
      description:
        'Club recreation lounge featuring tournament billiards and table tennis under classical Rajasthani arches for relaxed indoor downtime.',
      badge: 'Billiards & TT',
      icon: <Gamepad2 className="w-4 h-4 text-gold" />,
    },
    {
      title: 'Kids Play Grove & Lawns',
      category: 'Family Friendly',
      image: RESORT_DRIVE_PHOTOS.kidsPlayArea.src,
      alt: "Go Flamingo Children's Playground and Bamboo Grove",
      description:
        'Shaded playground with swings, slides, and see-saws in a tranquil bamboo grove, plus open manicured lawns for evening bonfires.',
      badge: 'Family & Children',
      icon: <Baby className="w-4 h-4 text-gold" />,
    },
  ];

  return (
    <div className="w-full bg-ivory-pure text-charcoal font-sans antialiased overflow-x-hidden selection:bg-gold/30 selection:text-forest-deep">
      
      {/* ========================================================
          1. FULL-FRAME EDITORIAL HERO BANNER (100DVH VIEWPORT)
          ======================================================== */}
      <section className="relative w-full h-[100dvh] max-h-[100dvh] min-h-[580px] flex flex-col justify-end bg-forest-dark text-ivory overflow-hidden snap-start">
        {/* Full Frame Background Image - Anchored to top so resort entrance sign is fully visible */}
        <div className="absolute inset-0 z-0">
          <img
            src={AUTHENTIC_RESORT.photos.entrancePorch.src}
            alt="GoFlamingo Resort Sillari Pench Grand Entrance Porch and Stone Fountains"
            fetchPriority="high"
            className="w-full h-full object-cover object-[center_top] sm:object-[center_16%] filter brightness-[0.95] contrast-[1.02]"
          />
          {/* Lighter architectural gradient scrims: Top remains clear so building & signage show through */}
          <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-deep/50 to-forest-dark/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/90 via-forest-dark/35 to-transparent sm:block hidden" />
        </div>

        {/* Foreground Hero Content: Balanced clearance above floating navbar and bottom bar */}
        <Container size="xl" className="relative z-10 w-full pt-28 sm:pt-36 md:pt-40 pb-8 sm:pb-12">
          <div className="max-w-3xl">

            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-black/35 border border-gold/45 text-gold-light text-[11px] sm:text-sm font-medium tracking-wide mb-3 sm:mb-4 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span>Sillari Area • Pench Region, Maharashtra</span>
            </div>

            {/* Main Title */}
            <h1 className="text-2.5xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-ivory font-normal tracking-tight leading-[1.12] mb-3 sm:mb-4 text-balance drop-shadow-sm">
              About <span className="text-gold font-serif italic">GoFlamingo Resort</span>
            </h1>

            {/* Core Requirement Lead Paragraph */}
            <p className="text-xs sm:text-base md:text-lg text-sand-light/95 leading-relaxed font-light mb-5 sm:mb-7 max-w-2xl border-l-2 border-gold/70 pl-3 sm:pl-3.5 drop-shadow-xs">
              GoFlamingo Resort is a premier hospitality property located in the Sillari area of Maharashtra's Pench region. The resort offers accommodation, leisure facilities, dining and recreation options, and facilities for meetings and gatherings.
            </p>

            {/* MOBILE ONLY: Single Clean Explore Action (No CTA Clutter on mobile) */}
            <div className="sm:hidden flex items-center pt-1 pb-2">
              <button
                type="button"
                onClick={() => document.getElementById('property-overview')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 hover:bg-white/30 active:bg-white/40 text-ivory border border-white/30 text-xs font-semibold uppercase tracking-wider backdrop-blur-md cursor-pointer transition-all shadow-md"
              >
                <span>Explore Resort Overview</span>
                <ArrowDown className="w-3.5 h-3.5 text-gold animate-bounce" />
              </button>
            </div>

            {/* DESKTOP ONLY: High-Intent Dual Actions */}
            <div className="hidden sm:flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
              <Link
                to="/rooms"
                className="group inline-flex items-center justify-center gap-2 pl-5 pr-2 py-2.5 rounded-full bg-gradient-to-r from-[#DFBF8E] via-[#C5A880] to-[#B39366] hover:from-[#E8CA9E] hover:to-[#C5A880] text-[#08130B] text-xs uppercase tracking-[0.12em] font-bold shadow-[0_4px_16px_rgba(197,168,128,0.25)] hover:shadow-[0_6px_22px_rgba(197,168,128,0.4)] border border-[#F3DFC1] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
              >
                <span>View Accommodations</span>
                <span className="w-6 h-6 rounded-full bg-[#08130B] text-[#DFBF8E] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 shrink-0 shadow-inner">
                  <ArrowRight className="w-3.5 h-3.5 text-[#DFBF8E]" />
                </span>
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#0D2418]/90 hover:bg-[#133522] border-2 border-[#25D366]/60 hover:border-[#25D366] text-xs uppercase tracking-[0.10em] font-bold text-white shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                <WhatsAppIcon size="sm" className="text-[#25D366] shrink-0" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

          </div>
        </Container>

        {/* Bottom Quick-Fact Highlight Bar */}
        <div id="property-overview" className="relative z-10 w-full border-t border-sand/20 bg-forest-deep/95 backdrop-blur-md py-3.5 sm:py-5 shadow-lg">
          <Container size="xl">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center divide-x-0 sm:divide-x divide-sand/15">
              <div className="px-2">
                <span className="block text-[11px] uppercase tracking-wider text-sand-dark font-medium">Rooms</span>
                <span className="text-sm sm:text-base font-serif font-bold text-ivory">20 AC Rooms</span>
              </div>
              <div className="px-2">
                <span className="block text-[11px] uppercase tracking-wider text-sand-dark font-medium">Dormitory</span>
                <span className="text-sm sm:text-base font-serif font-bold text-gold">1 Large Hall</span>
              </div>
              <div className="px-2">
                <span className="block text-[11px] uppercase tracking-wider text-sand-dark font-medium">Categories</span>
                <span className="text-sm sm:text-base font-serif font-bold text-ivory">Deluxe & Super Deluxe</span>
              </div>
              <div className="px-2">
                <span className="block text-[11px] uppercase tracking-wider text-sand-dark font-medium">Meetings</span>
                <span className="text-sm sm:text-base font-serif font-bold text-ivory">Conference Room</span>
              </div>
              <div className="px-2">
                <span className="block text-[11px] uppercase tracking-wider text-sand-dark font-medium">Location</span>
                <span className="text-sm sm:text-base font-serif font-bold text-ivory">Sillari, Pench</span>
              </div>
              <div className="px-2">
                <span className="block text-[11px] uppercase tracking-wider text-sand-dark font-medium">Recreation</span>
                <span className="text-sm sm:text-base font-serif font-bold text-gold">Pool & Rain Dance</span>
              </div>
            </div>
          </Container>
        </div>
      </section>


      {/* ========================================================
          2. KEY PROPERTY DETAILS (FACTSHEET GRID WITH INNER SHADOWS)
          ======================================================== */}
      <section className="py-14 sm:py-18 bg-white border-b border-sand/30">
        <Container size="xl">
          <div className="max-w-2xl mb-8 sm:mb-12">
            <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold block mb-2">
              Property Overview
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-forest-deep tracking-tight">
              Key Property Details
            </h2>
            <p className="text-sm sm:text-base text-charcoal-muted mt-2">
              Essential facts and infrastructure specifications of GoFlamingo Resort, Sillari.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {propertySpecs.map((spec, index) => (
              <div
                key={index}
                className="p-5 sm:p-6 rounded-2xl bg-[#FCFAF6] border border-stone-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:border-gold/50 transition-all duration-300 flex items-start gap-4 group ring-1 ring-inset ring-black/5"
              >
                <div className="w-12 h-12 rounded-xl bg-forest-deep/5 group-hover:bg-gold/15 border border-sand/40 flex items-center justify-center shrink-0 transition-colors duration-200 shadow-xs">
                  {spec.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block text-[11px] uppercase tracking-wider text-charcoal-light font-medium mb-1">
                    {spec.label}
                  </span>
                  {spec.isLink ? (
                    <a
                      href={spec.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base sm:text-lg font-serif font-bold text-forest-deep group-hover:text-gold transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>{spec.value}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-gold shrink-0" />
                    </a>
                  ) : (
                    <span className="text-base sm:text-lg font-serif font-bold text-forest-deep block truncate">
                      {spec.value}
                    </span>
                  )}
                  <span className="inline-block text-xs font-medium text-gold-dark mt-0.5">
                    {spec.highlight}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>


      {/* ========================================================
          3. OUR STORY & SUITED GUEST PROFILE (WITH REALISTIC ICONS)
          ======================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-ivory-pure">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Visual Mosaic (Left 6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative rounded-3xl overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.12)] aspect-4/3 border-4 border-white">
                <img
                  src={AUTHENTIC_RESORT.photos.courtyardTwilight.src}
                  alt="Go Flamingo Resort illuminated haveli courtyard at twilight"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/85 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-6 right-6 text-ivory">
                  <span className="text-xs uppercase tracking-widest text-gold font-semibold block mb-1">
                    Sanctuary at Dusk
                  </span>
                  <p className="text-sm font-serif">
                    Stone pathways, scalloped haveli arches and warm night lighting.
                  </p>
                </div>
              </div>

              {/* Sub Image Duo */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden aspect-4/3 shadow-md border-2 border-white">
                  <img
                    src={AUTHENTIC_RESORT.photos.archedCorridorFountain.src}
                    alt="Arched haveli corridor overlooking pitcher fountain"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-4/3 shadow-md border-2 border-white">
                  <img
                    src={AUTHENTIC_RESORT.photos.sunlitVerandah.src}
                    alt="Sunlit verandah walkway with manicured gardens"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Narrative Content (Right 6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold block mb-2">
                  The Sanctuary Experience
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-forest-deep leading-tight">
                  Suited for Leisure, Family, Groups & Celebrations
                </h2>
              </div>

              <div className="space-y-4 text-charcoal-muted text-sm sm:text-base leading-relaxed">
                <p>
                  <strong className="text-forest-deep font-semibold">The resort is suited to guests seeking leisure stays, family getaways, group accommodation and event experiences.</strong>
                </p>
                <p>
                  Situated close to the Sillari Gate of Pench Tiger Reserve, GoFlamingo Resort combines the peaceful charm of the forest with comprehensive hospitality services. Whether returning from an early morning tiger safari or gathering around an evening starlit bonfire, our campus is designed to be calm, comfortable, and welcoming.
                </p>
                <p>
                  From single leisure travelers and couple retreats to large group tours and corporate strategy offsites, our 20 air-conditioned guest rooms and large group dormitory provide the right balance of privacy and shared togetherness.
                </p>
              </div>

              {/* 4 Pillars Grid with REALISTIC LUXURY ICONS (No Emojis) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                
                {/* Pillar 1 */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-stone-200/90 shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:shadow-md hover:border-gold/50 transition-all duration-300 ring-1 ring-inset ring-black/5 group">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200/60 flex items-center justify-center shrink-0">
                      <Compass className="w-4 h-4 text-emerald-700" />
                    </div>
                    <span className="text-sm font-serif font-bold text-forest-deep">
                      Leisure & Wildlife Stays
                    </span>
                  </div>
                  <p className="text-xs text-charcoal-muted leading-relaxed pl-11">
                    Instant proximity to Sillari Gate for hassle-free morning and evening safaris.
                  </p>
                </div>

                {/* Pillar 2 */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-stone-200/90 shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:shadow-md hover:border-gold/50 transition-all duration-300 ring-1 ring-inset ring-black/5 group">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-800 border border-amber-200/60 flex items-center justify-center shrink-0">
                      <Users className="w-4 h-4 text-amber-700" />
                    </div>
                    <span className="text-sm font-serif font-bold text-forest-deep">
                      Family Getaways
                    </span>
                  </div>
                  <p className="text-xs text-charcoal-muted leading-relaxed pl-11">
                    Safe swimming pool, children’s play grove, and delicious multi-cuisine meals.
                  </p>
                </div>

                {/* Pillar 3 */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-stone-200/90 shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:shadow-md hover:border-gold/50 transition-all duration-300 ring-1 ring-inset ring-black/5 group">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-800 border border-teal-200/60 flex items-center justify-center shrink-0">
                      <Building2 className="w-4 h-4 text-teal-700" />
                    </div>
                    <span className="text-sm font-serif font-bold text-forest-deep">
                      Group Accommodation
                    </span>
                  </div>
                  <p className="text-xs text-charcoal-muted leading-relaxed pl-11">
                    Dedicated AC Dormitory + 20 rooms for wildlife clubs, schools and big families.
                  </p>
                </div>

                {/* Pillar 4 */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-stone-200/90 shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:shadow-md hover:border-gold/50 transition-all duration-300 ring-1 ring-inset ring-black/5 group">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-800 border border-rose-200/60 flex items-center justify-center shrink-0">
                      <Briefcase className="w-4 h-4 text-rose-700" />
                    </div>
                    <span className="text-sm font-serif font-bold text-forest-deep">
                      Event & Meeting Facilities
                    </span>
                  </div>
                  <p className="text-xs text-charcoal-muted leading-relaxed pl-11">
                    Conference room for corporate conclaves and sprawling lawns for social events.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </Container>
      </section>


      {/* ========================================================
          4. ACCOMMODATION: 20 ROOMS & 1 DORMITORY
          ======================================================== */}
      <section className="py-16 sm:py-20 bg-forest-dark text-ivory">
        <Container size="xl">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold block mb-2">
              Stay & Accommodations
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-ivory tracking-tight">
              20 Rooms & 1 Group Dormitory
            </h2>
            <p className="text-sm sm:text-base text-sand-light/80 mt-3">
              Comfortable, air-conditioned accommodations crafted for deep rest between jungle drives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {roomTypes.map((room, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-forest-deep/80 border border-sand/20 overflow-hidden flex flex-col group hover:border-gold/50 transition-all duration-300 shadow-xl"
              >
                {/* Image */}
                <div className="relative aspect-16/10 overflow-hidden bg-forest-dark">
                  <img
                    src={room.image}
                    alt={room.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-forest-dark/85 text-gold border border-gold/30 backdrop-blur-sm">
                      {room.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-sand-dark block mb-1">
                      {room.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif text-ivory font-bold mb-3">
                      {room.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-sand-light/80 leading-relaxed font-light mb-4">
                      {room.description}
                    </p>

                    {/* Specs Checklist */}
                    <ul className="space-y-2 border-t border-sand/15 pt-4">
                      {room.specs.map((item, sIdx) => (
                        <li key={sIdx} className="text-xs text-sand-light flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to={room.link}
                    className="group inline-flex items-center justify-center gap-2 w-full pl-4 pr-2 py-2.5 rounded-full bg-white/10 hover:bg-gold hover:text-forest-deep text-ivory text-xs font-semibold tracking-wider uppercase transition-all duration-200 border border-sand/20 cursor-pointer"
                  >
                    <span>Explore Room Details</span>
                    <span className="w-5.5 h-5.5 rounded-full bg-forest-dark/70 group-hover:bg-forest-deep text-gold group-hover:text-gold-light flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5 shrink-0">
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Summary Pill */}
          <div className="mt-10 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-3 px-6 py-3 rounded-full bg-forest-deep border border-sand/20 text-xs sm:text-sm text-sand-light shadow-md">
              <span>All 20 rooms feature split AC, en-suite bathrooms & forest views.</span>
              <span className="text-gold">•</span>
              <Link to="/rooms" className="text-gold hover:underline font-semibold inline-flex items-center gap-1">
                <span>View Full Room Gallery & Inventory</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </Container>
      </section>


      {/* ========================================================
          5. LEISURE, DINING & MEETING FACILITIES
          ======================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-sand/20">
        <Container size="xl">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold block mb-2">
              On-Property Amenities
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-forest-deep tracking-tight">
              Leisure, Recreation & Gathering Facilities
            </h2>
            <p className="text-sm sm:text-base text-charcoal-muted mt-2">
              From corporate conference meetings to poolside relaxation and starlit banquets.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {facilities.map((fac, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-ivory-warm/30 border border-sand/40 overflow-hidden flex flex-col group hover:shadow-lg hover:border-gold/50 transition-all duration-300"
              >
                <div className="relative aspect-16/10 overflow-hidden bg-sand-light">
                  <img
                    src={fac.image}
                    alt={fac.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-forest-deep/85 text-gold border border-gold/30 backdrop-blur-sm">
                      {fac.icon}
                      <span>{fac.badge}</span>
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-charcoal-light font-medium block mb-1">
                      {fac.category}
                    </span>
                    <h3 className="text-xl font-serif font-bold text-forest-deep">
                      {fac.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed mt-2">
                      {fac.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>


      {/* ========================================================
          6. SILLARI GATE & PENCH LOCATION ADVANTAGE
          ======================================================== */}
      <section className="py-16 sm:py-20 bg-ivory-pure">
        <Container size="xl">
          <div className="rounded-3xl bg-forest-deep text-ivory p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl border border-sand/20">
            {/* Background Texture & Gradient Scrim */}
            <div className="absolute inset-0 z-0 opacity-20">
              <img
                src={IMAGES.wildlife.tiger}
                alt="Pench Tiger Reserve forest scenery"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-forest-deep via-forest-deep/95 to-forest-deep/80 z-0" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-5">
                <span className="inline-block px-3 py-1 rounded-full bg-gold/20 border border-gold/30 text-gold-light text-xs font-semibold tracking-wider uppercase">
                  Destination Advantage
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-ivory leading-tight">
                  Located at Sillari — The Heart of Pench Tiger Country
                </h2>
                <p className="text-sand-light/90 text-sm sm:text-base leading-relaxed max-w-2xl font-light">
                  Sillari is Maharashtra’s primary gateway into the pristine forests of Pench Tiger Reserve. Situated just ~65 km (approx. 1 hour drive via 4-lane NH 44) from Nagpur Airport and Railway Station, GoFlamingo Resort provides effortless connectivity combined with pure wildlife tranquility.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-3">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
                    <span className="block text-xs text-sand-dark uppercase">Sillari Gate</span>
                    <span className="text-sm sm:text-base font-serif font-bold text-gold">Minutes Away</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
                    <span className="block text-xs text-sand-dark uppercase">From Nagpur</span>
                    <span className="text-sm sm:text-base font-serif font-bold text-ivory">65 km / 1 hr</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
                    <span className="block text-xs text-sand-dark uppercase">Highway</span>
                    <span className="text-sm sm:text-base font-serif font-bold text-ivory">NH 44 (4-Lane)</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3">
                <Link
                  to="/pench"
                  className="group w-full inline-flex items-center justify-center gap-2 pl-5 pr-2 py-3 rounded-full bg-gradient-to-r from-[#DFBF8E] via-[#C5A880] to-[#B39366] hover:from-[#E8CA9E] hover:to-[#C5A880] text-[#08130B] font-bold text-xs uppercase tracking-[0.12em] transition-all duration-200 shadow-md"
                >
                  <span>Explore Pench & Safaris</span>
                  <span className="w-6 h-6 rounded-full bg-[#08130B] text-[#DFBF8E] flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5 shrink-0">
                    <ArrowRight className="w-3.5 h-3.5 text-[#DFBF8E]" />
                  </span>
                </Link>
                <Link
                  to="/contact"
                  className="w-full text-center py-3 px-6 rounded-full bg-white/10 hover:bg-white/20 text-ivory border border-white/20 text-xs uppercase tracking-wider font-semibold transition-all duration-200"
                >
                  Get Driving Directions
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>


      {/* ========================================================
          7. LUXURY ARCHITECTURAL CTA BOX (SCREENSHOT 3 REDESIGNED)
          Inner Border, Deep Shadows & Ambient Light Glow
          ======================================================== */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-[#FAF6F1] text-charcoal border-t border-stone-200/80 overflow-hidden">
        
        {/* Subtle warm ambient background glow on outer light section */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#163824]/5 rounded-full blur-3xl pointer-events-none" />

        <Container size="lg" className="relative z-10">
          
          {/* Luxury Architectural Box: Deep Emerald Card with Gold Inner Border & Strong Drop Shadow */}
          <div className="relative rounded-3xl border-2 border-[#C5A880]/40 bg-gradient-to-br from-[#0F291B] via-[#0C2417] to-[#07160E] p-8 sm:p-12 md:p-14 text-center shadow-[0_20px_50px_-15px_rgba(15,41,27,0.4)] overflow-hidden ring-1 ring-inset ring-white/10">

            {/* Ambient inner champagne & emerald light glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-[220px] bg-[#C5A880]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-10 w-60 h-60 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

            {/* Eyebrow Pill */}
            <div className="relative z-10 inline-flex items-center px-4 py-1 rounded-full bg-white/10 border border-[#C5A880]/40 text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#DFBF8E] font-semibold mb-4 backdrop-blur-sm">
              <span>Plan Your Visit · Sillari Gate</span>
            </div>

            {/* Headline */}
            <h2 className="relative z-10 font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-normal leading-[1.2] text-white mb-3.5 max-w-2xl mx-auto text-balance">
              Experience GoFlamingo Resort, Sillari
            </h2>

            {/* Grounded Supporting Copy */}
            <p className="relative z-10 font-sans text-xs sm:text-sm md:text-base text-sand-light/85 max-w-lg mx-auto mb-8 font-light leading-relaxed">
              Whether you are planning a weekend safari holiday, a family reunion, group tour accommodation, or a corporate offsite, our reservations team is ready to assist you.
            </p>

            {/* High-Intent Dual Actions with Signature Home Page Arrow Capsule */}
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-xl mx-auto mb-8">
              
              {/* Online Booking Button with Signature Arrow Capsule */}
              <Link
                to="/contact?book=true#reservation-form-card"
                className="group flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 pl-5 pr-2 py-2.5 rounded-full bg-gradient-to-r from-[#DFBF8E] via-[#C5A880] to-[#B39366] hover:from-[#E8CA9E] hover:to-[#C5A880] text-[#08130B] text-xs uppercase tracking-[0.12em] font-bold shadow-[0_4px_16px_rgba(197,168,128,0.25)] hover:shadow-[0_6px_22px_rgba(197,168,128,0.4)] border border-[#F3DFC1] transition-all duration-300 w-full sm:w-auto cursor-pointer whitespace-nowrap"
              >
                <span>Book Your Stay Online</span>
                <span className="w-6 h-6 rounded-full bg-[#08130B] text-[#DFBF8E] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 shrink-0 shadow-inner">
                  <ArrowRight className="w-3.5 h-3.5 text-[#DFBF8E]" />
                </span>
              </Link>

              {/* Direct Call Button */}
              <a
                href={`tel:${QUICK_CONTACT.phoneRaw}`}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs uppercase tracking-[0.10em] font-semibold text-white backdrop-blur-sm transition-all duration-200 w-full sm:w-auto whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5 text-gold-light" />
                <span>Call {QUICK_CONTACT.phone}</span>
              </a>

              {/* WhatsApp Button */}
              <a
                href={whatsappUrl}
                target={getWhatsAppTarget()}
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#0D2418]/90 hover:bg-[#133522] border-2 border-[#25D366]/60 hover:border-[#25D366] text-xs uppercase tracking-[0.08em] font-bold text-white shadow-[0_4px_16px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.2)] transition-all duration-300 w-full sm:w-auto cursor-pointer whitespace-nowrap"
              >
                <WhatsAppIcon size="sm" className="text-[#25D366] shrink-0" />
                <span>WhatsApp Instant Inquiry</span>
              </a>

            </div>

            {/* Reassurance Footer Strip with MapPin */}
            <div className="relative z-10 pt-6 border-t border-white/15 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-sand-light/75 font-light">
              <span>
                Official Website:{' '}
                <a
                  href="https://goflamingoresorts.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#DFBF8E] font-medium hover:underline"
                >
                  https://goflamingoresorts.com/
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
