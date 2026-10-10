import React from 'react';
import { Link } from 'react-router-dom';
import { Container, WhatsAppIcon } from '../../../components/common';
import { AUTHENTIC_RESORT } from '../../../data/images';
import { QUICK_CONTACT } from '../../../data/navigation';

/**
 * AmenitiesInteractive Component (Section 4 — Resort Spaces & Experiences)
 * 
 * Creative Visual Bento Grid:
 * - Eliminates the dull numbered list in favor of a rich, high-density visual bento showcase.
 * - Highlights genuine resort facilities:
 *   1. Turquoise Swimming Pool & Kids Splash Area (Autoplay real video)
 *   2. Grand Dining Hall with Crystal Chandeliers & Bar
 *   3. Open Lawn Rain Dance & Festivities
 *   4. Central Courtyard & Evening Starlit Bonfires
 *   5. Game Zone with Snooker, Table Tennis & Carrom
 * - Directly displays authentic property assets so guests immediately see the resort.
 */
export default function AmenitiesInteractive() {
  const videos = AUTHENTIC_RESORT.videos;
  const photos = AUTHENTIC_RESORT.photos;

  return (
    <section className="relative py-20 sm:py-28 lg:py-36 bg-ivory-pure text-charcoal border-b border-sand/30 overflow-hidden">
      <Container size="xl">
        
        {/* ========================================================
            SECTION HEADER
            ======================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 sm:mb-16">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-deep text-ivory text-[11px] uppercase tracking-[0.16em] font-semibold">
              <span>Spaces & Experiences</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.18] text-forest-deep text-balance">
              Spaces to Swim, Feast, and Celebrate.
            </h2>

            <p className="font-sans text-sm sm:text-base text-charcoal-muted font-light leading-relaxed">
              From our restorative swimming pool surrounded by trees to crystal chandelier dining and outdoor rain dance, experience genuine resort hospitality.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start lg:self-auto">
            <Link
              to="/resort"
              className="group inline-flex items-center gap-2.5 pl-5 pr-2 py-2 rounded-full bg-forest-deep text-ivory text-xs uppercase tracking-[0.12em] font-semibold hover:bg-forest-dark transition-all duration-300 shadow-sm"
            >
              <span>Explore All Facilities</span>
              <span className="w-7 h-7 rounded-full bg-[#BCE0FD] text-forest-deep flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 shadow-xs shrink-0">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>

        {/* ========================================================
            CREATIVE VISUAL BENTO GRID
            ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 lg:gap-6">
          
          {/* Tile 1 (Large 8 Cols Hero Tile): Real Turquoise Pool Video */}
          <div className="lg:col-span-8 group relative rounded-2xl overflow-hidden bg-forest-dark border border-stone-200/90 shadow-xl min-h-[360px] sm:min-h-[420px] flex flex-col justify-end">
            <div className="absolute inset-0 z-0">
              <video
                autoPlay
                loop
                muted
                playsInline
                poster={videos.pool.poster}
                aria-label="Go Flamingo Resort turquoise swimming pool and kids splash area"
                className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
              >
                {videos.pool.webm && <source src={videos.pool.webm} type="video/webm" />}
                <source src={videos.pool.mp4} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-forest-deep/30 to-transparent pointer-events-none" />
            </div>

            {/* In-Tile Badge */}
            <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-10">
              <span className="px-3.5 py-1.5 rounded-full bg-white/95 text-forest-deep border border-stone-200/80 text-xs font-bold tracking-wide shadow-md backdrop-blur-md flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
                <span>Water & Refreshment · Real Footage</span>
              </span>
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 p-6 sm:p-8 text-ivory space-y-2">
              <h3 className="font-serif text-2xl sm:text-3xl font-normal leading-snug">
                Turquoise Swimming Pool & Kids Splash Oasis
              </h3>
              <p className="font-sans text-xs sm:text-sm text-sand-light/90 font-light max-w-xl leading-relaxed">
                Surrounded by green trees, our sparkling turquoise swimming pool and circular shallow splash area offer restorative afternoon swims after dusty morning Gypsy safaris.
              </p>
              <div className="pt-2 flex items-center gap-3">
                <Link
                  to="/resort/pool"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-gold-light hover:text-white transition-colors"
                >
                  <span>Pool Details</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Tile 2 (4 Cols): Grand Restaurant & Chandelier Dining */}
          <div className="lg:col-span-4 group relative rounded-2xl overflow-hidden bg-forest-dark border border-stone-200/90 shadow-xl min-h-[320px] flex flex-col justify-end">
            <div className="absolute inset-0 z-0">
              <img
                src={photos.restaurantBarHall.src}
                alt="Grand indoor dining restaurant with crystal chandeliers at Go Flamingo Resort"
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-forest-deep/40 to-transparent pointer-events-none" />
            </div>

            <div className="absolute top-4 left-4 z-10">
              <span className="px-3 py-1 rounded-full bg-forest-deep/85 text-gold-light border border-sand/30 text-[11px] font-semibold tracking-wide backdrop-blur-xs">
                Dining & Bar Counter
              </span>
            </div>

            <div className="relative z-10 p-5 sm:p-6 text-ivory space-y-1.5">
              <h3 className="font-serif text-xl sm:text-2xl font-normal leading-snug">
                Grand Dining & Crystal Chandeliers
              </h3>
              <p className="font-sans text-xs text-sand-light/85 font-light leading-relaxed">
                Plush booth seating, chandeliers, authentic Vidarbha regional delicacies, and early morning safari tea.
              </p>
              <div className="pt-1">
                <Link to="/dining" className="text-xs uppercase tracking-wider font-bold text-gold hover:text-white transition-colors">
                  Explore Dining →
                </Link>
              </div>
            </div>
          </div>

          {/* Tile 3 (4 Cols): Open Lawn Rain Dance */}
          <div className="lg:col-span-4 group relative rounded-2xl overflow-hidden bg-forest-dark border border-stone-200/90 shadow-xl min-h-[300px] flex flex-col justify-end">
            <div className="absolute inset-0 z-0">
              <img
                src={photos.sunlitVerandah.src}
                alt="Rain dance and celebration grounds at Go Flamingo Resort"
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-forest-deep/40 to-transparent pointer-events-none" />
            </div>

            <div className="absolute top-4 left-4 z-10">
              <span className="px-3 py-1 rounded-full bg-forest-deep/85 text-gold-light border border-sand/30 text-[11px] font-semibold tracking-wide backdrop-blur-xs">
                Celebration & Joy
              </span>
            </div>

            <div className="relative z-10 p-5 sm:p-6 text-ivory space-y-1.5">
              <h3 className="font-serif text-xl font-normal leading-snug">
                Open Lawn Rain Dance
              </h3>
              <p className="font-sans text-xs text-sand-light/85 font-light leading-relaxed">
                Overhead mist sprayers and party music on green grass lawns for group & family celebrations.
              </p>
            </div>
          </div>

          {/* Tile 4 (4 Cols): Central Courtyard & Twilight Bonfire */}
          <div className="lg:col-span-4 group relative rounded-2xl overflow-hidden bg-forest-dark border border-stone-200/90 shadow-xl min-h-[300px] flex flex-col justify-end">
            <div className="absolute inset-0 z-0">
              <img
                src={photos.courtyardTwilight.src}
                alt="Illuminated courtyard at dusk at Go Flamingo Resort"
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-forest-deep/40 to-transparent pointer-events-none" />
            </div>

            <div className="absolute top-4 left-4 z-10">
              <span className="px-3 py-1 rounded-full bg-forest-deep/85 text-gold-light border border-sand/30 text-[11px] font-semibold tracking-wide backdrop-blur-xs">
                Starlit Courtyard
              </span>
            </div>

            <div className="relative z-10 p-5 sm:p-6 text-ivory space-y-1.5">
              <h3 className="font-serif text-xl font-normal leading-snug">
                Manicured Lawns & Campfires
              </h3>
              <p className="font-sans text-xs text-sand-light/85 font-light leading-relaxed">
                Ornamental pitcher water fountain, shaded walkways, cypress trees, and evening campfire gatherings.
              </p>
            </div>
          </div>

          {/* Tile 5 (4 Cols): Game Zone & Sports Club */}
          <div className="lg:col-span-4 group relative rounded-2xl overflow-hidden bg-white border border-stone-200/90 shadow-xl min-h-[300px] p-6 sm:p-7 flex flex-col justify-between hover:border-forest/40 transition-colors">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-forest-pale text-forest-deep text-[11px] font-bold tracking-wide">
                  Indoor & Lawn Sports
                </span>
                <span className="text-2xl">🎱</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-forest-deep font-semibold">
                Game Zone & Recreation
              </h3>
              <p className="font-sans text-xs sm:text-sm text-charcoal-muted font-light leading-relaxed">
                Full-size snooker/billiards table, table tennis, carrom boards, chess, and outdoor lawn badminton for post-safari leisure.
              </p>
            </div>

            <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
              <span className="text-xs text-forest-deep font-medium">Free Access for Guests</span>
              <a
                href={`${QUICK_CONTACT.whatsappUrl}?text=${encodeURIComponent('Hello Go Flamingo Resort, I would like to inquire about resort amenities and group packages.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-wider font-bold text-terracotta hover:text-forest-deep transition-colors"
              >
                Enquire Facilities →
              </a>
            </div>
          </div>

        </div>

        {/* Quick Reassurance Strip */}
        <div className="mt-10 p-4 rounded-xl bg-white border border-stone-200/80 shadow-xs flex flex-wrap items-center justify-around gap-4 text-xs text-stone-700">
          <span className="flex items-center gap-2 font-medium">
            <span>📍</span> <strong>Just 65 km from Nagpur</strong> via smooth 4-lane NH 44
          </span>
          <span className="hidden sm:inline text-stone-300">|</span>
          <span className="flex items-center gap-2 font-medium">
            <span>🐅</span> <strong>Minutes from Sillari Safari Gate</strong> (Pench Core Zone)
          </span>
          <span className="hidden sm:inline text-stone-300">|</span>
          <span className="flex items-center gap-2 font-medium">
            <span>🛡️</span> <strong>Secure Gated Campus</strong> with 24/7 security & parking
          </span>
        </div>

      </Container>
    </section>
  );
}
