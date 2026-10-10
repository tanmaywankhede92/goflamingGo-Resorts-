import React from 'react';
import { Link } from 'react-router-dom';
import { Container, WhatsAppIcon } from '../../../components/common';
import { AUTHENTIC_RESORT } from '../../../data/images';
import { QUICK_CONTACT } from '../../../data/navigation';

/**
 * WelcomeManifesto Component (Section 2 — The Haveli & Courtyard Experience)
 * 
 * Screen-Fitted, High-Aesthetic Architecture Spread:
 * - Concise, punchy copy without text bloat or information overload
 * - Balanced 1-screen viewport framing on desktop and mobile
 * - Clean side-by-side presentation: Authentic photo on left, 3 sleek highlights on right
 */
export default function WelcomeManifesto() {
  const corridorPhoto = AUTHENTIC_RESORT.photos.archedCorridorFountain;

  return (
    <section
      id="meet-the-resort"
      className="relative py-14 sm:py-18 lg:py-20 bg-ivory-pure text-charcoal border-b border-stone-200/70 overflow-hidden"
    >
      <Container size="xl" className="relative z-10">
        
        {/* ========================================================
            SECTION HEADER — COMPACT & REFINED
            ======================================================== */}
        <div className="max-w-2xl mb-8 sm:mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#163824] text-ivory text-[10px] sm:text-[11px] uppercase tracking-[0.16em] font-semibold">
            <span>The Resort & Architecture</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal leading-[1.2] text-[#163824] text-balance">
            Rajasthani Haveli Soul, Wild Central Indian Heart.
          </h2>

          <p className="font-sans text-xs sm:text-sm md:text-base text-charcoal/75 font-light leading-relaxed max-w-xl text-pretty">
            Built around an open-air central courtyard with sculpted arches, shaded stone verandahs, and a tranquil fountain — an authentic sanctuary just <strong className="font-semibold text-[#163824]">65 km from Nagpur</strong>.
          </p>
        </div>

        {/* ========================================================
            SCREEN-BALANCED GRID (PHOTO LEFT, 3 CLEAN HIGHLIGHTS RIGHT)
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Authentic Haveli Architecture Photo */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-stone-900 border border-stone-200/90 shadow-lg group">
              <img
                src={corridorPhoto.src}
                srcSet={corridorPhoto.srcSet}
                sizes={corridorPhoto.sizes}
                width={corridorPhoto.width}
                height={corridorPhoto.height}
                alt={corridorPhoto.alt}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Floating Pill: 65 KM Nagpur */}
              <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 z-10">
                <div className="px-3 py-1.5 rounded-full bg-white/95 text-[#163824] border border-stone-200/80 shadow-sm backdrop-blur-md flex items-center gap-1.5 text-[11px] sm:text-xs font-bold tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-terracotta animate-pulse" />
                  <span>📍 65 km from Nagpur · NH 44 Drive</span>
                </div>
              </div>

              {/* Bottom In-Image Caption */}
              <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-5 text-ivory">
                <span className="text-[10px] uppercase tracking-[0.16em] text-[#C5A880] font-semibold block">
                  Sculpted Arches & Fountain
                </span>
                <p className="font-serif text-sm sm:text-base font-normal leading-snug">
                  Shaded verandahs looking onto the tranquil central lawn.
                </p>
              </div>
            </div>
          </div>

          {/* Right: 3 Concise Highlights + Action */}
          <div className="lg:col-span-5 space-y-3.5">
            
            {/* Feature 1 */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-stone-200/70 shadow-xs hover:border-[#163824]/20 transition-colors">
              <div className="flex items-start gap-3">
                <span className="text-xl shrink-0 pt-0.5">🚗</span>
                <div>
                  <h3 className="font-serif text-sm sm:text-base text-[#163824] font-semibold">
                    Smooth 1-Hour Drive from Nagpur
                  </h3>
                  <p className="font-sans text-xs text-charcoal/70 font-light mt-0.5 leading-relaxed">
                    Direct access via smooth 4-lane NH 44 with zero rough interior roads.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-stone-200/70 shadow-xs hover:border-[#163824]/20 transition-colors">
              <div className="flex items-start gap-3">
                <span className="text-xl shrink-0 pt-0.5">🏛️</span>
                <div>
                  <h3 className="font-serif text-sm sm:text-base text-[#163824] font-semibold">
                    Open-Air Haveli Courtyard
                  </h3>
                  <p className="font-sans text-xs text-charcoal/70 font-light mt-0.5 leading-relaxed">
                    Sculpted stone corridors, pitcher water fountain, and open lawns.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-stone-200/70 shadow-xs hover:border-[#163824]/20 transition-colors">
              <div className="flex items-start gap-3">
                <span className="text-xl shrink-0 pt-0.5">🐅</span>
                <div>
                  <h3 className="font-serif text-sm sm:text-base text-[#163824] font-semibold">
                    Minutes to Sillari Safari Gate
                  </h3>
                  <p className="font-sans text-xs text-charcoal/70 font-light mt-0.5 leading-relaxed">
                    Board your Gypsy on time with direct proximity to Pench’s core gate.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Action Link */}
            <div className="pt-2">
              <Link
                to="/resort"
                className="group inline-flex items-center gap-2 pl-4 pr-1.5 py-1.5 rounded-full bg-[#163824] text-white text-[11px] uppercase tracking-[0.12em] font-semibold hover:bg-[#0E2A1B] transition-colors shadow-xs"
              >
                <span>Explore Facilities & Lawns</span>
                <span className="w-6 h-6 rounded-full bg-[#C5A880] text-[#0E2A1B] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 shrink-0">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Link>
            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}
