import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../../components/common';
import { AUTHENTIC_RESORT } from '../../../data/images';

/**
 * AmenitiesInteractive Component (Section 4 — Resort Spaces & Experiences)
 * 
 * Screen-Fitted, High-Aesthetic Facilities Showcase:
 * - Clean 3-card balanced visual layout (no endless tile sprawl)
 * - Autoplay real pool video + authentic dining & courtyard photography
 * - Concise, punchy copy without information overload
 */
export default function AmenitiesInteractive() {
  const videos = AUTHENTIC_RESORT.videos;
  const photos = AUTHENTIC_RESORT.photos;

  return (
    <section className="relative py-14 sm:py-18 lg:py-20 bg-ivory-pure text-charcoal border-b border-stone-200/70 overflow-hidden">
      <Container size="xl">
        
        {/* ========================================================
            SECTION HEADER (COMPACT ROW)
            ======================================================== */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#163824] text-ivory text-[10px] sm:text-[11px] uppercase tracking-[0.16em] font-semibold">
              <span>Spaces & Experiences</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#163824]">
              Spaces to Swim, Feast, and Celebrate.
            </h2>
          </div>

          <Link
            to="/resort"
            className="group inline-flex items-center gap-2 pl-4 pr-1.5 py-1.5 rounded-full bg-[#163824] text-white text-[11px] uppercase tracking-[0.12em] font-semibold hover:bg-[#0E2A1B] transition-colors shadow-xs self-start sm:self-auto"
          >
            <span>Explore All Facilities</span>
            <span className="w-6 h-6 rounded-full bg-[#C5A880] text-[#0E2A1B] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 shrink-0">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </Link>
        </div>

        {/* ========================================================
            BALANCED 3-CARD VISUAL GRID (EQUAL HEIGHT, 1 SCREEN ROW)
            ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Real Turquoise Pool Video */}
          <div className="group relative rounded-2xl overflow-hidden bg-stone-900 border border-stone-200/80 shadow-md min-h-[300px] sm:min-h-[360px] flex flex-col justify-end">
            <div className="absolute inset-0 z-0">
              <video
                autoPlay
                loop
                muted
                playsInline
                poster={videos.pool.poster}
                aria-label="Go Flamingo Resort turquoise swimming pool"
                className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
              >
                {videos.pool.webm && <source src={videos.pool.webm} type="video/webm" />}
                <source src={videos.pool.mp4} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
            </div>

            <div className="absolute top-3.5 left-3.5 z-10">
              <span className="px-3 py-1 rounded-full bg-white/95 text-[#163824] text-[10px] sm:text-[11px] font-bold tracking-wide shadow-xs backdrop-blur-md flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
                <span>Turquoise Pool</span>
              </span>
            </div>

            <div className="relative z-10 p-5 text-ivory space-y-1">
              <h3 className="font-serif text-lg sm:text-xl font-normal leading-snug">
                Turquoise Swimming Pool
              </h3>
              <p className="font-sans text-xs text-sand-light/90 font-light leading-relaxed">
                Restorative afternoon swims and splash area surrounded by green trees.
              </p>
            </div>
          </div>

          {/* Card 2: Grand Dining & Chandeliers */}
          <div className="group relative rounded-2xl overflow-hidden bg-stone-900 border border-stone-200/80 shadow-md min-h-[300px] sm:min-h-[360px] flex flex-col justify-end">
            <div className="absolute inset-0 z-0">
              <img
                src={photos.restaurantBarHall.src}
                alt="Grand indoor dining restaurant with crystal chandeliers"
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
            </div>

            <div className="absolute top-3.5 left-3.5 z-10">
              <span className="px-3 py-1 rounded-full bg-white/95 text-[#163824] text-[10px] sm:text-[11px] font-bold tracking-wide shadow-xs backdrop-blur-md">
                Chandelier Dining
              </span>
            </div>

            <div className="relative z-10 p-5 text-ivory space-y-1">
              <h3 className="font-serif text-lg sm:text-xl font-normal leading-snug">
                Grand Dining Hall & Cuisine
              </h3>
              <p className="font-sans text-xs text-sand-light/90 font-light leading-relaxed">
                Crystal chandeliers, authentic Vidarbha regional delicacies, and pre-safari tea.
              </p>
            </div>
          </div>

          {/* Card 3: Central Courtyard & Evening Campfires */}
          <div className="group relative rounded-2xl overflow-hidden bg-stone-900 border border-stone-200/80 shadow-md min-h-[300px] sm:min-h-[360px] flex flex-col justify-end">
            <div className="absolute inset-0 z-0">
              <img
                src={photos.courtyardTwilight.src}
                alt="Central courtyard at dusk at Go Flamingo Resort"
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
            </div>

            <div className="absolute top-3.5 left-3.5 z-10">
              <span className="px-3 py-1 rounded-full bg-white/95 text-[#163824] text-[10px] sm:text-[11px] font-bold tracking-wide shadow-xs backdrop-blur-md">
                Starlit Lawns
              </span>
            </div>

            <div className="relative z-10 p-5 text-ivory space-y-1">
              <h3 className="font-serif text-lg sm:text-xl font-normal leading-snug">
                Courtyard Lawns & Bonfires
              </h3>
              <p className="font-sans text-xs text-sand-light/90 font-light leading-relaxed">
                Manicured lawns, stone pitcher fountain, and evening campfire gatherings.
              </p>
            </div>
          </div>

        </div>

      </Container>
    </section>
  );
}
