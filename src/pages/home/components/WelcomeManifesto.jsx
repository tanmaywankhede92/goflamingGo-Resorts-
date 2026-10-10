import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container, Button } from '../../../components/common';
import { IMAGES } from '../../../data/images';
import { cn } from '../../../utils/cn';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * WelcomeManifesto Component
 * 
 * Senses of Sillari — An expressive, art-directed editorial statement.
 * Strictly avoids conventional "About Us" corporate templates:
 * - Expressive large-scale typography
 * - Asymmetrical image and floating detail badge
 * - Restrained, poetic storytelling letting authentic photography lead
 */
export default function WelcomeManifesto() {
  const sectionRef = useRef(null);
  const imageBoxRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (imageBoxRef.current) {
        gsap.fromTo(
          imageBoxRef.current.querySelector('img'),
          { scale: 1.08 },
          {
            scale: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 sm:py-32 lg:py-40 bg-ivory-pure text-charcoal border-b border-sand/30 overflow-hidden"
    >
      <Container size="xl">
        
        {/* ========================================================
            TOP MONOGRAPH STATEMENT
            ======================================================== */}
        <div className="max-w-4xl mb-16 sm:mb-20 space-y-4">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-terracotta font-semibold">
            <span className="w-6 h-px bg-terracotta/40" />
            <span>The Retreat · Sillari, Pench</span>
          </div>

          <h2 className="font-serif text-[clamp(2.25rem,5.5vw,4.5rem)] font-normal leading-[1.08] tracking-[-0.02em] text-forest-deep text-balance">
            Some places are visited.{' '}
            <br className="hidden sm:inline" />
            <span className="italic font-normal text-terracotta-dark">
              Pench settles into your pulse.
            </span>
          </h2>

          <p className="font-serif text-lg sm:text-xl text-charcoal-muted max-w-2xl font-light italic leading-relaxed pt-2">
            "We built Go Flamingo under the shade of mature teak trees rather than clearing them. The forest was here first; we are merely guests in its presence."
          </p>
        </div>

        {/* ========================================================
            ASYMMETRICAL EDITORIAL COMPOSITION (8 COLS IMAGE + 4 COLS NARRATIVE)
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Visual Media (7-8 Cols) with Overlapping Coordinate Tag */}
          <div className="lg:col-span-7 xl:col-span-8 relative">
            <div
              ref={imageBoxRef}
              className="relative aspect-[16/11] sm:aspect-[16/10] overflow-hidden rounded-[3px] bg-forest-dark border border-sand/40 shadow-lg"
            >
              <img
                src={IMAGES.home.resort}
                alt="Evening dusk at Go Flamingo Resort showing stone cottages, illuminated pool and towering teak trees"
                loading="lazy"
                className="w-full h-full object-cover object-center will-change-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent opacity-60 pointer-events-none" />

              {/* Bottom In-Image Legend */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 text-ivory">
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold-light font-semibold block mb-0.5">
                  Natural Stone & Teak Architecture
                </span>
                <p className="text-xs sm:text-sm text-sand-light/95 font-light max-w-md leading-relaxed">
                  Tranquil cottages arranged along stone pathways under native shade trees.
                </p>
              </div>
            </div>

            {/* Overlapping Precision Metadata Pill (Desktop) */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 lg:-right-8 bg-forest-dark text-ivory border border-sand/30 p-4 sm:p-5 rounded-[3px] shadow-2xl max-w-xs backdrop-blur-md">
              <span className="text-[9px] uppercase tracking-[0.24em] text-gold font-semibold block mb-1">
                Sanctuary Specifications
              </span>
              <div className="font-serif text-base text-ivory font-semibold mb-1">
                20 Rooms · 1 Dormitory
              </div>
              <p className="text-[11px] text-sand/75 font-light leading-relaxed">
                Low-density wilderness living designed to protect acoustic quietude and personal space.
              </p>
            </div>
          </div>

          {/* Narrative Pillar Column (5-4 Cols) */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-6 lg:pl-4">
            
            <div className="space-y-3">
              <h3 className="font-serif text-xl sm:text-2xl text-forest-deep font-semibold leading-snug">
                An unhurried base for your safari days.
              </h3>
              <p className="font-sans text-xs sm:text-sm text-charcoal/80 font-light leading-relaxed">
                Located right by Sillari Gate on the Maharashtra side of Pench Tiger Reserve, Go Flamingo allows you to avoid the exhausting pre-dawn highway rush. Sip freshly brewed chai on your private verandah as the first langur calls ring through the canopy, board your Gypsy without hurry, and return to wholesome meals and a restorative pool swim.
              </p>
            </div>

            {/* 3 Core Experience Facets */}
            <div className="space-y-4 pt-3 border-t border-sand/30">
              
              <div className="flex items-start gap-3.5">
                <span className="font-serif text-base font-bold text-gold shrink-0">
                  01
                </span>
                <div>
                  <h4 className="font-serif text-sm font-semibold text-forest-deep mb-0.5">
                    Minutes from Core Safari Entry
                  </h4>
                  <p className="text-xs text-charcoal-muted font-light leading-relaxed">
                    Sillari Gate is Pench's most celebrated entrance, famed for riverine teak valleys and active wildlife corridors.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <span className="font-serif text-base font-bold text-gold shrink-0">
                  02
                </span>
                <div>
                  <h4 className="font-serif text-sm font-semibold text-forest-deep mb-0.5">
                    Family & Group Harmony
                  </h4>
                  <p className="text-xs text-charcoal-muted font-light leading-relaxed">
                    Private deluxe rooms, expansive cottages, and a spacious group dormitory ensuring comfort for every travel style.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <span className="font-serif text-base font-bold text-gold shrink-0">
                  03
                </span>
                <div>
                  <h4 className="font-serif text-sm font-semibold text-forest-deep mb-0.5">
                    Active Leisure on the Grounds
                  </h4>
                  <p className="text-xs text-charcoal-muted font-light leading-relaxed">
                    Swimming pool, rain dance, outdoor lawns, play area, game zone, and an executive conference hall.
                  </p>
                </div>
              </div>

            </div>

            {/* Call to Action */}
            <div className="pt-2 flex items-center gap-4">
              <Button as={Link} to="/resort" variant="primary" size="md">
                Explore Property Details →
              </Button>
              <Link
                to="/resort/about"
                className="text-xs uppercase tracking-wider font-semibold text-forest hover:text-gold transition-colors"
              >
                Our Story
              </Link>
            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}
