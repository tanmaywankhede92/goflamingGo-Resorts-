import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  PinIcon,
  HighwayCarIcon,
  HaveliArchIcon,
  SafariBinocularsIcon,
} from '../../../components/common';
import { AUTHENTIC_RESORT } from '../../../data/images';

/**
 * WelcomeManifesto Component (Section 2 — The Haveli & Courtyard Experience)
 * 
 * Screen-Fitted Architecture Spread:
 * - Left: Authentic Haveli photo with floating 65 km location pill
 * - Right: Rich secondary forest-green luxury card (#163824) with ivory/gold text
 * - 100% Vector monoline SVG icons — zero cartoon emojis
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
            SCREEN-BALANCED GRID (PHOTO LEFT, GREEN LUXURY CARD RIGHT)
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left: Authentic Haveli Architecture Photo */}
          <div className="lg:col-span-7 flex flex-col justify-center">
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

              {/* Floating Pill: 65 KM Nagpur with Vector Pin */}
              <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 z-10">
                <div className="px-3 py-1.5 rounded-full bg-white/95 text-[#163824] border border-stone-200/80 shadow-sm backdrop-blur-md flex items-center gap-1.5 text-[11px] sm:text-xs font-bold tracking-wide">
                  <PinIcon className="w-3.5 h-3.5 text-[#163824]" />
                  <span>65 km from Nagpur · NH 44 Drive</span>
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

          {/* Right: Secondary Deep Forest Green Luxury Card Container */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#163824] border border-[#C5A880]/30 shadow-xl text-ivory space-y-4">
            
            {/* Card Header */}
            <div>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#C5A880] font-semibold block mb-1">
                Sanctuary Highlights
              </span>
              <h3 className="font-serif text-lg sm:text-xl text-white font-medium">
                Why Guests Choose Go Flamingo
              </h3>
            </div>

            {/* 3 Concise Feature Rows */}
            <div className="space-y-3">
              
              {/* Feature 1: Highway Drive */}
              <div className="p-3 sm:p-3.5 rounded-xl bg-white/8 border border-white/10 hover:border-[#C5A880]/40 transition-colors flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-[#C5A880]/20 text-[#C5A880] flex items-center justify-center shrink-0">
                  <HighwayCarIcon className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm sm:text-base text-white font-semibold">
                    Smooth 1-Hour Drive from Nagpur
                  </h4>
                  <p className="font-sans text-xs text-sand-light/80 font-light mt-0.5 leading-relaxed">
                    Direct access via 4-lane NH 44 with zero rough interior roads.
                  </p>
                </div>
              </div>

              {/* Feature 2: Haveli Courtyard */}
              <div className="p-3 sm:p-3.5 rounded-xl bg-white/8 border border-white/10 hover:border-[#C5A880]/40 transition-colors flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-[#C5A880]/20 text-[#C5A880] flex items-center justify-center shrink-0">
                  <HaveliArchIcon className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm sm:text-base text-white font-semibold">
                    Open-Air Haveli Courtyard
                  </h4>
                  <p className="font-sans text-xs text-sand-light/80 font-light mt-0.5 leading-relaxed">
                    Sculpted stone corridors, pitcher water fountain, and open lawns.
                  </p>
                </div>
              </div>

              {/* Feature 3: Sillari Gate */}
              <div className="p-3 sm:p-3.5 rounded-xl bg-white/8 border border-white/10 hover:border-[#C5A880]/40 transition-colors flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-[#C5A880]/20 text-[#C5A880] flex items-center justify-center shrink-0">
                  <SafariBinocularsIcon className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm sm:text-base text-white font-semibold">
                    Minutes to Sillari Safari Gate
                  </h4>
                  <p className="font-sans text-xs text-sand-light/80 font-light mt-0.5 leading-relaxed">
                    Direct core gate proximity for peaceful morning Gypsy departures.
                  </p>
                </div>
              </div>

            </div>

            {/* Direct Action Link in Royal Gold */}
            <div className="pt-2">
              <Link
                to="/resort"
                className="group inline-flex items-center gap-3 pl-6 pr-3 py-3 rounded-full bg-gradient-to-r from-[#DFBF8E] via-[#C5A880] to-[#B39366] hover:from-[#E8CA9E] hover:to-[#C5A880] text-[#08130B] text-xs sm:text-[13px] uppercase tracking-[0.14em] font-bold transition-all duration-300 shadow-[0_4px_18px_rgba(197,168,128,0.35)] hover:shadow-[0_6px_25px_rgba(197,168,128,0.5)] border border-[#F3DFC1] cursor-pointer"
              >
                <span>Explore Facilities & Lawns</span>
                <span className="w-7 h-7 rounded-full bg-[#08130B] text-[#DFBF8E] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 shrink-0 text-sm font-bold shadow-inner">
                  →
                </span>
              </Link>
            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}
