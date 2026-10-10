import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, WhatsAppIcon } from '../../../components/common';
import { AUTHENTIC_RESORT } from '../../../data/images';
import { QUICK_CONTACT } from '../../../data/navigation';

/**
 * WelcomeManifesto Component (Section 2 — The Haveli & Courtyard Experience)
 * 
 * Creative, High-Aesthetic Architecture Spread:
 * - Replaces dull "blog article" text blocks with a dynamic, layered visual composition.
 * - Showcases genuine Rajasthani haveli arches, shaded walkways, fountain & twilight courtyard.
 * - Prominently highlights the 65 km distance from Nagpur (1-hour weekend drive).
 * - Luxury hospitality typography, floating badges, and direct booking actions.
 */
export default function WelcomeManifesto() {
  const corridorPhoto = AUTHENTIC_RESORT.photos.archedCorridorFountain;
  const courtyardPhoto = AUTHENTIC_RESORT.photos.courtyardTwilight;

  return (
    <section
      id="meet-the-resort"
      className="relative py-20 sm:py-28 lg:py-36 bg-ivory-pure text-charcoal border-b border-sand/30 overflow-hidden"
    >
      {/* Subtle ambient decorative gradient in background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sand/20 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-forest-pale/40 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <Container size="xl" className="relative z-10">
        
        {/* ========================================================
            SECTION HEADER — ART-DIRECTED & EXPRESSIVE
            ======================================================== */}
        <div className="max-w-3xl mb-14 sm:mb-18 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-deep text-ivory text-[11px] uppercase tracking-[0.16em] font-semibold">
            <span>The Resort & Architecture</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.18] text-forest-deep text-balance">
            Rajasthani Haveli Soul, Wild Central Indian Heart.
          </h2>

          <p className="font-sans text-sm sm:text-base md:text-lg text-charcoal-muted font-light leading-relaxed max-w-2xl text-pretty">
            Rather than a generic hotel block, Go Flamingo Resort is built around an open-air central courtyard framed by scalloped arches, shaded stone verandahs, and a gentle pitcher fountain — an authentic wilderness sanctuary just <strong className="font-semibold text-forest-deep">65 km from Nagpur</strong>.
          </p>
        </div>

        {/* ========================================================
            CREATIVE LAYERED VISUAL SPREAD (7 COLS VISUAL, 5 COLS CARDS)
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Visual Architecture Composition (7 Cols) */}
          <div className="lg:col-span-7 relative">
            
            {/* Primary Hero Architectural Photo */}
            <div className="relative aspect-[16/11] rounded-2xl overflow-hidden bg-forest-dark border border-stone-200 shadow-2xl group">
              <img
                src={corridorPhoto.src}
                srcSet={corridorPhoto.srcSet}
                sizes={corridorPhoto.sizes}
                width={corridorPhoto.width}
                height={corridorPhoto.height}
                alt={corridorPhoto.alt}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/85 via-forest-deep/20 to-transparent pointer-events-none" />

              {/* Floating Top Pill: 65 KM Nagpur Highlight */}
              <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-10">
                <div className="px-4 py-2 rounded-full bg-white/95 text-forest-deep border border-stone-200/80 shadow-md backdrop-blur-md flex items-center gap-2 text-xs font-bold tracking-wide">
                  <span className="w-2.5 h-2.5 rounded-full bg-terracotta animate-pulse" />
                  <span>📍 Just 65 km from Nagpur · NH 44 Drive</span>
                </div>
              </div>

              {/* Bottom In-Image Architecture Details */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 text-ivory">
                <span className="text-[11px] uppercase tracking-[0.16em] text-gold-light font-semibold block mb-1">
                  Sculpted Arches & Fountain
                </span>
                <p className="font-serif text-lg sm:text-xl font-normal leading-snug max-w-md">
                  Shaded stone verandahs looking out onto the tranquil central lawn.
                </p>
              </div>
            </div>

            {/* Overlapping Floating Secondary Photo (Twilight Courtyard) */}
            <div className="hidden sm:block absolute -bottom-8 -right-6 w-60 sm:w-64 aspect-[4/3] rounded-xl overflow-hidden border-4 border-white shadow-2xl bg-forest-dark group">
              <img
                src={courtyardPhoto.src}
                alt={courtyardPhoto.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-2.5 left-3 text-ivory">
                <span className="text-[10px] uppercase tracking-wider text-gold-light font-bold block">
                  Courtyard at Dusk
                </span>
                <span className="text-xs text-sand-light font-light">Warm ambient lighting</span>
              </div>
            </div>

          </div>

          {/* Luxury Feature Pillars (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Feature Card 1: Nagpur Proximity */}
            <div className="p-4 sm:p-5 rounded-xl bg-white border border-stone-200/80 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-forest-pale text-forest-deep flex items-center justify-center shrink-0 font-bold text-lg">
                  🚗
                </div>
                <div>
                  <h3 className="font-serif text-base sm:text-lg text-forest-deep font-semibold">
                    65 KM Quick Highway Escape
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-charcoal-muted font-light leading-relaxed mt-1">
                    Direct access via smooth 4-lane NH 44. Reach the resort in ~1 hour from Nagpur without tiring travel or rough interior roads.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature Card 2: Haveli Courtyard Design */}
            <div className="p-4 sm:p-5 rounded-xl bg-white border border-stone-200/80 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-900 flex items-center justify-center shrink-0 font-bold text-lg">
                  🏰
                </div>
                <div>
                  <h3 className="font-serif text-base sm:text-lg text-forest-deep font-semibold">
                    Traditional Haveli Courtyard
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-charcoal-muted font-light leading-relaxed mt-1">
                    Two-story arched wings wrap around an open-air central lawn. Wake to birdsong and enjoy barefoot morning tea by the fountain.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature Card 3: Sillari Core Safari Gate */}
            <div className="p-4 sm:p-5 rounded-xl bg-white border border-stone-200/80 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-900 flex items-center justify-center shrink-0 font-bold text-lg">
                  🐅
                </div>
                <div>
                  <h3 className="font-serif text-base sm:text-lg text-forest-deep font-semibold">
                    Minutes to Sillari Safari Gate
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-charcoal-muted font-light leading-relaxed mt-1">
                    Prime proximity to Pench’s most celebrated core safari zone. Board your Gypsy on time with zero early morning highway rush.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature Card 4: Leisure Amenities */}
            <div className="p-4 sm:p-5 rounded-xl bg-white border border-stone-200/80 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-sky-50 text-sky-900 flex items-center justify-center shrink-0 font-bold text-lg">
                  🏊
                </div>
                <div>
                  <h3 className="font-serif text-base sm:text-lg text-forest-deep font-semibold">
                    Turquoise Pool & Chandelier Dining
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-charcoal-muted font-light leading-relaxed mt-1">
                    Cool off in our clean swimming pool, enjoy rain dance on the lawn, and savor home-cooked Central Indian meals in our chandelier hall.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons in Studio Modular Pill Style */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <Link
                to="/rooms"
                className="group inline-flex items-center gap-2.5 pl-5 pr-2 py-2 rounded-full bg-forest-deep text-ivory text-xs uppercase tracking-[0.12em] font-semibold hover:bg-forest-dark transition-all duration-300 shadow-sm"
              >
                <span>View Guest Rooms</span>
                <span className="w-7 h-7 rounded-full bg-[#BCE0FD] text-forest-deep flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 shadow-xs shrink-0">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Link>

              <a
                href={`${QUICK_CONTACT.whatsappUrl}?text=${encodeURIComponent('Hello Go Flamingo Resort, I am planning a trip from Nagpur (65 km). Please share room availability and tariff.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-stone-200 text-xs font-semibold text-stone-700 hover:text-forest-deep hover:border-forest shadow-xs transition-colors"
              >
                <WhatsAppIcon size="sm" className="text-[#25D366]" />
                <span>Quick WhatsApp Inquiry</span>
              </a>
            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}
