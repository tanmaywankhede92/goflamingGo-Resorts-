import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '../../../components/common';
import { AUTHENTIC_RESORT } from '../../../data/images';

/**
 * WelcomeManifesto Component (Section 2 — Meet the Resort)
 * 
 * Concise, human hospitality introduction:
 * - Real haveli architecture: Scalloped arches, shaded corridors, central courtyard & fountain
 * - Authentic property photography from Sillari Gate, Pench
 * - Natural typography and balanced proportions without oversized text or repetitive italics
 */
export default function WelcomeManifesto() {
  const corridorPhoto = AUTHENTIC_RESORT.photos.archedCorridorFountain;
  const courtyardPhoto = AUTHENTIC_RESORT.photos.courtyardTwilight;

  return (
    <section
      id="meet-the-resort"
      className="py-18 sm:py-24 lg:py-28 bg-ivory-pure text-charcoal border-b border-sand/30 overflow-hidden"
    >
      <Container size="xl">
        
        {/* ========================================================
            INTRODUCTORY TITLE — NATURAL & ART-DIRECTED
            ======================================================== */}
        <div className="max-w-2xl mb-12 sm:mb-14 space-y-2.5">
          <div className="flex items-center gap-2.5 text-[11px] uppercase tracking-[0.14em] text-terracotta font-semibold">
            <span className="w-5 h-px bg-terracotta/40" />
            <span>The Resort & Architecture</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal leading-snug text-forest-deep text-balance">
            Traditional Haveli Architecture, Set in the Wilderness of Pench
          </h2>

          <p className="font-sans text-sm sm:text-base text-charcoal-muted font-light leading-relaxed max-w-xl">
            Built with traditional scalloped arches around a peaceful garden courtyard, Go Flamingo Resort offers a quiet retreat just minutes from Pench’s Sillari Safari Gate.
          </p>
        </div>

        {/* ========================================================
            ASYMMETRICAL DUAL-PHOTO & CONCISE NARRATIVE COMPOSITION
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Architectural Photo (7 Cols) */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[16/11] overflow-hidden rounded-[3px] bg-forest-dark border border-sand/40 shadow-lg group">
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
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/75 via-transparent to-transparent opacity-60 pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 text-ivory">
                <span className="text-[10px] uppercase tracking-wider text-gold-light font-semibold block mb-0.5">
                  Haveli Corridors & Fountain
                </span>
                <p className="text-xs sm:text-sm text-sand-light font-light max-w-md leading-relaxed">
                  Sculpted pillars and shaded verandahs look out onto our central lawn and stone pitcher fountain.
                </p>
              </div>
            </div>

            {/* Overlapping Secondary Thumbnail (Twilight Courtyard) */}
            <div className="hidden sm:block absolute -bottom-5 -right-5 w-52 aspect-[4/3] rounded-[3px] overflow-hidden border-2 border-ivory shadow-xl bg-forest-dark">
              <img
                src={courtyardPhoto.src}
                alt={courtyardPhoto.alt}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-forest-dark/20" />
              <div className="absolute bottom-2 left-2 text-[10px] text-ivory uppercase tracking-wider font-semibold">
                Twilight Courtyard
              </div>
            </div>
          </div>

          {/* Narrative & Practical Pillars (5 Cols) */}
          <div className="lg:col-span-5 space-y-6 lg:pl-2">
            
            <div className="space-y-3">
              <h3 className="font-serif text-xl sm:text-2xl text-forest-deep font-semibold leading-snug">
                Designed for rest between morning and evening safaris.
              </h3>
              <p className="font-sans text-xs sm:text-sm text-charcoal/80 font-light leading-relaxed">
                Rather than an impersonal hotel block, our two-story arched wings wrap around an open-air central lawn. Wake to birdsong, board your Gypsy without highway rush, and return to wholesome Vidarbha meals and a restorative pool swim.
              </p>
            </div>

            {/* Verified Highlights Grid */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="p-3 rounded-[2px] bg-ivory-warm/60 border border-sand/35">
                <span className="text-[10px] uppercase tracking-wider font-bold text-terracotta block mb-0.5">
                  20 Rooms + 1 Dorm
                </span>
                <span className="text-xs text-charcoal-muted font-light leading-tight block">
                  Low-density sanctuary with spacious rooms.
                </span>
              </div>
              <div className="p-3 rounded-[2px] bg-ivory-warm/60 border border-sand/35">
                <span className="text-[10px] uppercase tracking-wider font-bold text-terracotta block mb-0.5">
                  Sillari Safari Gate
                </span>
                <span className="text-xs text-charcoal-muted font-light leading-tight block">
                  Minutes from Pench's prime core entry gate.
                </span>
              </div>
              <div className="p-3 rounded-[2px] bg-ivory-warm/60 border border-sand/35">
                <span className="text-[10px] uppercase tracking-wider font-bold text-terracotta block mb-0.5">
                  Pool & Gardens
                </span>
                <span className="text-xs text-charcoal-muted font-light leading-tight block">
                  Turquoise pool, rain dance & green lawns.
                </span>
              </div>
              <div className="p-3 rounded-[2px] bg-ivory-warm/60 border border-sand/35">
                <span className="text-[10px] uppercase tracking-wider font-bold text-terracotta block mb-0.5">
                  ~85 km from Nagpur
                </span>
                <span className="text-xs text-charcoal-muted font-light leading-tight block">
                  Comfortable 4-lane highway drive via NH 44.
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 flex items-center gap-4">
              <Button as={Link} to="/rooms" variant="primary" size="md">
                Explore Accommodations →
              </Button>
              <Link
                to="/resort"
                className="text-xs uppercase tracking-wider font-semibold text-forest hover:text-gold transition-colors"
              >
                Property Details
              </Link>
            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}
