import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
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
            A Touch of Heritage, Surrounded by Nature.
          </h2>

          <p className="font-sans text-xs sm:text-sm md:text-base text-charcoal/75 font-light leading-relaxed max-w-xl text-pretty">
            Inspired by timeless haveli architecture, GoFlamingo Resort offers a peaceful escape with graceful arches, open verandahs and a tranquil garden courtyard. A place to slow down, unwind and enjoy your time in the heart of the Pench region.
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

              {/* Floating Pill: 65 KM Nagpur with Vector Pin (Direct Google Maps Link) */}
              <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 z-10">
                <a
                  href="https://share.google/1tQOcUc44JyN7u8JJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View Go Flamingo Resort on Google Maps"
                  className="px-3 py-1.5 rounded-full bg-white/95 hover:bg-white text-[#163824] hover:text-[#C5A880] border border-stone-200/80 shadow-sm backdrop-blur-md flex items-center gap-1.5 text-[11px] sm:text-xs font-bold tracking-wide transition-all group cursor-pointer"
                >
                  <PinIcon className="w-3.5 h-3.5 text-[#163824] group-hover:text-[#C5A880] transition-colors" />
                  <span>65 km from Nagpur · NH 44 Drive</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#163824] group-hover:text-[#C5A880] transition-colors" />
                </a>
              </div>

              {/* Bottom In-Image Caption */}
              <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-5 text-ivory">
                <span className="text-[10px] uppercase tracking-[0.16em] text-[#C5A880] font-semibold block">
                  Arches, Verandahs & Gardens
                </span>
                <p className="font-serif text-sm sm:text-base font-normal leading-snug">
                  Quiet corners and open spaces made for unhurried moments.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Architectural Warm Light Sanctuary Highlights Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white/95 border border-stone-200/90 shadow-xl text-charcoal space-y-4">
            
            {/* Card Header */}
            <div>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#163824] font-bold block mb-1">
                The GoFlamingo Experience
              </span>
              <h3 className="font-serif text-lg sm:text-xl text-[#163824] font-medium">
                The Little Things Make the Stay.
              </h3>
            </div>

            {/* 3 Concise Feature Rows */}
            <div className="space-y-3">
              
              {/* Feature 1 */}
              <div className="p-3 sm:p-3.5 rounded-xl bg-stone-50/90 border border-stone-200/80 hover:border-[#C5A880]/50 transition-colors flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-[#163824]/10 text-[#163824] flex items-center justify-center shrink-0">
                  <HighwayCarIcon className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm sm:text-base text-[#163824] font-semibold">
                    A Welcome Escape
                  </h4>
                  <p className="font-sans text-xs text-charcoal/75 font-light mt-0.5 leading-relaxed">
                    Leave the pace of the city behind and settle into the calm of the countryside.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="p-3 sm:p-3.5 rounded-xl bg-stone-50/90 border border-stone-200/80 hover:border-[#C5A880]/50 transition-colors flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-[#163824]/10 text-[#163824] flex items-center justify-center shrink-0">
                  <HaveliArchIcon className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm sm:text-base text-[#163824] font-semibold">
                    Spaces with Character
                  </h4>
                  <p className="font-sans text-xs text-charcoal/75 font-light mt-0.5 leading-relaxed">
                    Explore inviting verandahs, distinctive arches and green outdoor spaces.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="p-3 sm:p-3.5 rounded-xl bg-stone-50/90 border border-stone-200/80 hover:border-[#C5A880]/50 transition-colors flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-[#163824]/10 text-[#163824] flex items-center justify-center shrink-0">
                  <SafariBinocularsIcon className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm sm:text-base text-[#163824] font-semibold">
                    Close to the Wild
                  </h4>
                  <p className="font-sans text-xs text-charcoal/75 font-light mt-0.5 leading-relaxed">
                    Enjoy a comfortable base for your Pench getaway, just minutes from the wild.
                  </p>
                </div>
              </div>

            </div>

            {/* Direct Action Link in Royal Gold */}
            <div className="pt-2">
              <Link
                to="/resort"
                className="group inline-flex items-center gap-2 pl-4 pr-1.5 py-2 sm:pl-5 sm:pr-2 sm:py-2.5 rounded-full bg-[#163824] hover:bg-[#0E2A1B] text-white text-[11px] sm:text-xs uppercase tracking-[0.12em] font-bold transition-all duration-300 shadow-md hover:shadow-lg border border-[#163824] cursor-pointer"
              >
                <span>Explore Facilities & Lawns</span>
                <span className="w-5.5 h-5.5 sm:w-6 sm:h-6 rounded-full bg-[#C5A880] text-[#0E2A1B] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 shrink-0 shadow-inner">
                  <ArrowRight className="w-3 h-3 text-[#0E2A1B]" />
                </span>
              </Link>
            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}
