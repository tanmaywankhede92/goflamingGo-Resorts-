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
import ClosingCallToAction from '../home/components/ClosingCallToAction';

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

  // The Resort at a Glance Specification Badges
  const glanceItems = [
    {
      label: '20 Rooms',
      icon: (
        <svg viewBox="0 0 48 48" className="w-9 h-9 text-[#163824]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 16v20M41 16v20" />
          <path d="M7 20h34" />
          <rect x="11" y="22" width="11" height="5.5" rx="1.5" />
          <rect x="26" y="22" width="11" height="5.5" rx="1.5" />
          <path d="M7 27.5h34v6H7z" />
        </svg>
      ),
    },
    {
      label: '1 Dormitory',
      icon: (
        <svg viewBox="0 0 48 48" className="w-9 h-9 text-[#163824]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 8v32M40 8v32" />
          <path d="M8 15h32M8 21h32" />
          <path d="M8 31h32" />
          <path d="M29 15v16" />
          <path d="M29 19h11M29 23h11M29 27h11" />
        </svg>
      ),
    },
    {
      label: 'Swimming Pool',
      icon: (
        <svg viewBox="0 0 48 48" className="w-9 h-9 text-[#163824]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 10v18M29 10v18" />
          <path d="M15 13a4 4 0 0 1 4-3M33 13a4 4 0 0 0-4-3" />
          <path d="M19 16h10M19 21h10M19 26h10" />
          <path d="M8 32c4-1.8 8-1.8 12 0s8 1.8 12 0 8-1.8 12 0" />
          <path d="M8 37c4-1.8 8-1.8 12 0s8 1.8 12 0 8-1.8 12 0" />
        </svg>
      ),
    },
    {
      label: 'Restaurant & Bar',
      icon: (
        <svg viewBox="0 0 48 48" className="w-9 h-9 text-[#163824]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 13v9a3 3 0 0 0 3 3v10M10 13v5M13 13v5M16 13v5a3 3 0 0 1-3 3" />
          <path d="M24 16a10 10 0 0 1 10 10H14a10 10 0 0 1 10-10z" />
          <path d="M24 13v3M12 28h24" />
          <path d="M37 13v22M37 13c2.5 0 3.5 3.5 3.5 8s-1 4-3.5 4" />
        </svg>
      ),
    },
    {
      label: 'Game Zone',
      icon: (
        <svg viewBox="0 0 48 48" className="w-9 h-9 text-[#163824]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="19" cy="19" r="9.5" />
          <path d="M13 26l-5 5a2 2 0 0 0 2.8 2.8l5-5" />
          <circle cx="28" cy="12" r="2.5" />
          <circle cx="36" cy="18" r="2.5" />
          <path d="M33.5 24h5M34.5 24l-2 9h8l-2-9M31 33h10" />
        </svg>
      ),
    },
    {
      label: 'Conference Room',
      icon: (
        <svg viewBox="0 0 48 48" className="w-9 h-9 text-[#163824]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="10" y="10" width="28" height="16" rx="1.5" />
          <path d="M24 26v5M18 36l6-5 6 5" />
          <circle cx="15" cy="30" r="2" />
          <path d="M12 36a3 3 0 0 1 6 0" />
          <circle cx="24" cy="27" r="2.5" />
          <path d="M20 33a4 4 0 0 1 8 0" />
          <circle cx="33" cy="30" r="2" />
          <path d="M30 36a3 3 0 0 1 6 0" />
        </svg>
      ),
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
      <section className="relative w-full h-[100dvh] max-h-[100dvh] min-h-[580px] flex flex-col justify-end bg-forest-dark text-ivory overflow-hidden">
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
                target={getWhatsAppTarget()}
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


            </div>

          </div>
        </Container>
      </section>


      {/* ========================================================
          THE RESORT AT A GLANCE (QUICK SPECIFICATION ICONS)
          ======================================================== */}
      <section className="py-14 sm:py-18 bg-[#FBF9F4] border-y border-[#EAE3D4]/90">
        <Container size="xl">
          <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#A6865A] font-semibold block mb-2">
              The Resort at a Glance
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#0E2718] font-normal tracking-tight">
              The Resort at a Glance
            </h2>
            <div className="w-14 h-0.5 bg-[#C5A880]/80 mx-auto mt-3.5 rounded-full" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {glanceItems.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group cursor-default">
                <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-[#F3EDE2] border border-[#E8DEC9] flex items-center justify-center mb-3.5 shadow-[0_2px_8px_rgba(0,0,0,0.03)] group-hover:scale-105 group-hover:bg-[#EFE7D8] group-hover:border-[#C5A880]/60 transition-all duration-300">
                  {item.icon}
                </div>
                <span className="text-sm sm:text-base font-serif font-medium text-[#163824] tracking-tight group-hover:text-[#A6865A] transition-colors duration-200">
                  {item.label}
                </span>
              </div>
            ))}
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
          7. CLOSING BOOKING CTA (SHARED HOMEPAGE COMPONENT)
          ======================================================== */}
      <ClosingCallToAction />

    </div>
  );
}
