import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Badge } from '../../../components/common';
import { IMAGES } from '../../../data/images';
import { cn } from '../../../utils/cn';

/**
 * PenchDestinationChapter Component
 * 
 * Factual, cinematic exploration of Pench Tiger Reserve & Sillari Gate:
 * - Clear distinction between resort grounds and government forest reserve
 * - Responsible wildlife perspective (zero false guarantees of sightings)
 * - Factual seasonal shifts (October opening, winter mist, summer waterholes)
 * - Direct links to existing safari guides and Sillari Gate pages
 */
export default function PenchDestinationChapter() {
  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-ivory-pure text-charcoal border-b border-sand/30 overflow-hidden">
      <Container size="xl">
        
        {/* ========================================================
            TOP MONOGRAPH STATEMENT
            ======================================================== */}
        <div className="max-w-3xl mb-16 sm:mb-20 space-y-3">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-terracotta font-semibold">
            <span className="w-6 h-px bg-terracotta/40" />
            <span>The Destination · Sillari Gate</span>
          </div>

          <h2 className="font-serif text-[clamp(2.25rem,5vw,4.25rem)] font-normal leading-[1.08] tracking-[-0.02em] text-forest-deep text-balance">
            The legendary forests <br />
            <span className="italic font-normal text-terracotta-dark">
              of Rudyard Kipling’s Pench.
            </span>
          </h2>

          <p className="font-sans text-xs sm:text-sm md:text-base text-charcoal-muted font-light leading-relaxed max-w-2xl">
            Go Flamingo sits right at the threshold of Sillari Gate — the premier safari entrance on the Maharashtra side of Pench Tiger Reserve.
          </p>
        </div>

        {/* ========================================================
            CINEMATIC DUAL-IMAGE COMPOSITION WITH OVERLAPPING FACT PANEL
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Visual Pair (7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 items-end">
            
            {/* Main Featured Photo: Tiger in natural habitat (7-8 cols) */}
            <div className="sm:col-span-7 relative aspect-[4/5] rounded-[3px] overflow-hidden bg-forest-dark border border-sand/40 shadow-xl group">
              <img
                src={IMAGES.home.tiger}
                alt="Royal Bengal Tiger walking calmly along an earthen track in Pench Tiger Reserve"
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-104"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/85 via-transparent to-transparent opacity-65 pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 text-ivory">
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-semibold block mb-0.5">
                  Apex Predator
                </span>
                <div className="font-serif text-lg font-semibold">
                  Royal Bengal Tiger
                </div>
                <p className="text-[11px] text-sand-light/80 font-light mt-0.5">
                  Pench teak corridors are home to carnivores, sloth bears & wild dogs.
                </p>
              </div>
            </div>

            {/* Supporting Photo: Open 4x4 Gypsy drive (5 cols) */}
            <div className="sm:col-span-5 space-y-4">
              <div className="relative aspect-[4/4] rounded-[3px] overflow-hidden bg-forest-dark border border-sand/40 shadow-md group">
                <img
                  src={IMAGES.home.safari}
                  alt="Open 4x4 safari Gypsy in morning teak forest of Pench"
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-104"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent opacity-60 pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-ivory">
                  <span className="text-[9px] uppercase tracking-wider text-gold font-semibold block">
                    Sillari Safari Shifts
                  </span>
                  <span className="text-xs font-serif font-medium block">
                    Open 4x4 Gypsies
                  </span>
                </div>
              </div>

              {/* Verified Responsible Sightings Note */}
              <div className="p-4 rounded-[3px] bg-ivory-warm/60 border border-sand/40 text-[11px] text-charcoal-muted font-light leading-relaxed">
                <strong className="text-forest-deep block mb-1 font-semibold uppercase text-[10px] tracking-wider">
                  Responsible Wildlife Reality:
                </strong>
                Sightings are an authentic forest privilege, not a manufactured spectacle. Animal movement is guided by natural instinct and seasons.
              </div>
            </div>

          </div>

          {/* Narrative & Destination Guide Links (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="space-y-3">
              <span className="text-[10px] uppercase tracking-[0.2em] text-terracotta font-semibold block">
                Forest Geography & Timing
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-forest-deep font-semibold leading-snug">
                Why Sillari Gate is Central India’s preferred safari gateway.
              </h3>
              <p className="font-sans text-xs sm:text-sm text-charcoal/85 font-light leading-relaxed">
                Straddling the Maharashtra–Madhya Pradesh border, Sillari offers direct access to the rich riverine core of Pench Tiger Reserve. Open 4x4 Gypsies depart twice daily (morning and afternoon shifts), accompanied by registered Forest Department nature guides.
              </p>
            </div>

            {/* Quick Gate Facts */}
            <div className="space-y-3 pt-3 border-t border-sand/30">
              
              <div className="p-3.5 rounded-[2px] bg-ivory-warm/40 border border-sand/30 flex items-start gap-3">
                <span className="text-terracotta font-serif font-bold text-base shrink-0">✦</span>
                <div className="text-xs">
                  <strong className="text-forest-deep font-semibold block mb-0.5">
                    Pre-Dawn Proximity
                  </strong>
                  <span className="text-charcoal-muted font-light leading-relaxed">
                    Stay right next to the gate. Savor hot coffee and wake-up calls rather than spending 90 minutes commuting from distant towns.
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-[2px] bg-ivory-warm/40 border border-sand/30 flex items-start gap-3">
                <span className="text-terracotta font-serif font-bold text-base shrink-0">✦</span>
                <div className="text-xs">
                  <strong className="text-forest-deep font-semibold block mb-0.5">
                    Verified Seasonal Timings
                  </strong>
                  <span className="text-charcoal-muted font-light leading-relaxed">
                    October post-monsoon lushness, crisp winter birding (Nov–Feb), and dry summer waterhole tracking (Mar–June).
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-[2px] bg-ivory-warm/40 border border-sand/30 flex items-start gap-3">
                <span className="text-terracotta font-serif font-bold text-base shrink-0">✦</span>
                <div className="text-xs">
                  <strong className="text-forest-deep font-semibold block mb-0.5">
                    Permit Liaison Assistance
                  </strong>
                  <span className="text-charcoal-muted font-light leading-relaxed">
                    Forest Department permits must be booked in advance. Our concierge guides guests on official government portal procedures.
                  </span>
                </div>
              </div>

            </div>

            {/* Action Links to Existing Pages */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button as={Link} to="/experiences/safari" variant="primary" size="md">
                Jungle Safari Guide →
              </Button>
              <Link
                to="/pench/sillari-gate"
                className="text-xs uppercase tracking-wider font-semibold text-forest hover:text-gold transition-colors"
              >
                Sillari Gate Details
              </Link>
              <Link
                to="/pench/how-to-reach"
                className="text-xs uppercase tracking-wider font-semibold text-charcoal-muted hover:text-forest transition-colors"
              >
                Route from Nagpur
              </Link>
            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}
