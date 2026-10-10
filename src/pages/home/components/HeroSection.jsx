import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container, Button, Badge } from '../../../components/common';
import { IMAGES } from '../../../data/images';
import { cn } from '../../../utils/cn';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * HeroSection Component
 * 
 * Cinematic, monumental opening chapter inspired by NOTH's design confidence:
 * - High-contrast editorial typography as visual structure
 * - Verified coordinates and location anchors (Sillari Gate, Maharashtra)
 * - Restrained, poetic storytelling with prominent enquiry CTAs
 * - Lifecycle-safe GSAP choreography with reduced-motion awareness
 */
export default function HeroSection() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const metaRef = useRef(null);
  const barRef = useRef(null);

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Entrance timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Image gentle settle
      if (imageRef.current) {
        tl.fromTo(
          imageRef.current,
          { scale: 1.1, opacity: 0.8 },
          { scale: 1.02, opacity: 1, duration: 1.8, ease: 'power2.out' },
          0
        );

        // ScrollTrigger parallax
        gsap.to(imageRef.current, {
          yPercent: 18,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      // Metadata coordinates fade
      if (metaRef.current) {
        tl.fromTo(
          metaRef.current,
          { opacity: 0, y: -15 },
          { opacity: 1, y: 0, duration: 0.9 },
          0.3
        );
      }

      // Headline line stagger
      if (contentRef.current) {
        const elements = contentRef.current.querySelectorAll('.hero-anim-item');
        tl.fromTo(
          elements,
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0, duration: 1, stagger: 0.15 },
          0.5
        );
      }

      // Quick discovery bar entrance
      if (barRef.current) {
        tl.fromTo(
          barRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.9 },
          0.9
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[92dvh] lg:min-h-[98dvh] flex flex-col justify-between overflow-hidden bg-forest-dark text-ivory selection:bg-gold/40 selection:text-forest-dark"
      aria-label="Welcome to Go Flamingo Resort"
    >
      {/* ========================================================
          BACKGROUND PHOTOGRAPHY & MULTI-LAYERED SCRIMS
          ======================================================== */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          ref={imageRef}
          src={IMAGES.home.hero}
          alt="Golden morning sunlight illuminating misty teak forest in Pench Tiger Reserve near Sillari Gate"
          fetchPriority="high"
          loading="eager"
          className="w-full h-full object-cover object-center will-change-transform"
        />

        {/* Ambient editorial scrims for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-deep/60 to-forest-dark/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/90 via-forest-dark/45 to-transparent sm:block hidden" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(181,138,69,0.12),transparent_70%)]" />
      </div>

      {/* ========================================================
          TOP EDITORIAL METADATA & GEOGRAPHICAL COORDINATES
          ======================================================== */}
      <div
        ref={metaRef}
        className="relative z-10 pt-6 sm:pt-8 md:pt-10 w-full"
      >
        <Container size="xl">
          <div className="flex flex-wrap items-center justify-between gap-3 text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.22em] text-sand-light/80 border-b border-sand/20 pb-4">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <span>Sillari Gateway · Pench, Maharashtra</span>
            </div>
            <div className="hidden md:flex items-center gap-4 text-sand/65">
              <span>Lat 21°39'N · Long 79°19'E</span>
              <span>·</span>
              <span>20 Rooms · 1 Dormitory</span>
              <span>·</span>
              <span>~85 km from Nagpur</span>
            </div>
            <div className="text-gold-light font-medium">
              Authentic Indian Wilderness
            </div>
          </div>
        </Container>
      </div>

      {/* ========================================================
          CENTRAL MONUMENTAL HEADLINE & NARRATIVE
          ======================================================== */}
      <div
        ref={contentRef}
        className="relative z-10 my-auto py-12 sm:py-16 md:py-20 w-full"
      >
        <Container size="xl">
          <div className="max-w-4xl space-y-6 sm:space-y-8">
            
            {/* Pill Eyebrow */}
            <div className="hero-anim-item inline-flex items-center gap-2 px-3 py-1 rounded-[3px] bg-forest-deep/80 border border-sand/30 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gold-light backdrop-blur-sm">
              <span className="text-gold">✦</span>
              <span>Pench Tiger Reserve · Threshold of Sillari Gate</span>
            </div>

            {/* Monumental Headline */}
            <h1 className="hero-anim-item font-serif text-[clamp(2.75rem,7vw,6.25rem)] font-normal leading-[1.04] tracking-[-0.025em] text-ivory text-balance">
              Your Escape.{' '}
              <br className="hidden sm:inline" />
              Your Kind of{' '}
              <span className="italic font-normal text-gold-light underline decoration-gold/40 decoration-1 underline-offset-8">
                Wild.
              </span>
            </h1>

            {/* Restrained Editorial Narrative */}
            <p className="hero-anim-item font-sans text-sm sm:text-base md:text-lg text-sand-light/90 max-w-2xl font-light leading-relaxed text-pretty">
              Nestled beneath the ancient teak canopy at Sillari, Go Flamingo is an unhurried resort sanctuary where the quiet rhythm of the forest meets authentic hospitality. Wake to dawn mist, open Gypsy safaris, and starlit evenings.
            </p>

            {/* Intentional Primary Actions */}
            <div className="hero-anim-item flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
              <Button
                as={Link}
                to="/book"
                variant="gold"
                size="lg"
                className="justify-center font-bold tracking-[0.14em] text-xs uppercase px-8 py-4 shadow-xl"
              >
                Check Availability & Book
              </Button>

              <Button
                as={Link}
                to="/rooms"
                variant="inverted"
                size="lg"
                className="justify-center font-semibold tracking-[0.14em] text-xs uppercase px-7 py-4"
              >
                Explore Rooms & Cottages
              </Button>

              <Link
                to="/experiences/safari"
                className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.16em] text-sand-light hover:text-gold transition-colors py-2 px-3 self-center sm:self-auto font-medium"
              >
                <span>Safari Guide</span>
                <span>→</span>
              </Link>
            </div>

          </div>
        </Container>
      </div>

      {/* ========================================================
          BOTTOM QUICK DISCOVERY ANCHORS & SCROLL INDICATOR
          ======================================================== */}
      <div
        ref={barRef}
        className="relative z-10 pb-6 sm:pb-8 w-full"
      >
        <Container size="xl">
          <div className="bg-forest-deep/85 border border-sand/30 rounded-[4px] p-4 sm:p-5 backdrop-blur-md shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-y md:divide-y-0 md:divide-x divide-sand/20">
              
              {/* Anchor 1 */}
              <div className="pt-2 md:pt-0 md:px-3 first:pt-0">
                <span className="text-[10px] uppercase tracking-[0.18em] text-gold font-semibold block mb-0.5">
                  01 · Prime Gateway
                </span>
                <span className="font-serif text-sm sm:text-base text-ivory font-medium block">
                  Sillari Gate (MH)
                </span>
                <span className="text-[11px] text-sand/70 font-light block mt-0.5">
                  Minutes from Core Safari entry
                </span>
              </div>

              {/* Anchor 2 */}
              <div className="pt-2 md:pt-0 md:px-3">
                <span className="text-[10px] uppercase tracking-[0.18em] text-gold font-semibold block mb-0.5">
                  02 · Easy Highway Access
                </span>
                <span className="font-serif text-sm sm:text-base text-ivory font-medium block">
                  ~85 km from Nagpur
                </span>
                <span className="text-[11px] text-sand/70 font-light block mt-0.5">
                  1.5 - 2 hrs drive via NH 44
                </span>
              </div>

              {/* Anchor 3 */}
              <div className="pt-2 md:pt-0 md:px-3">
                <span className="text-[10px] uppercase tracking-[0.18em] text-gold font-semibold block mb-0.5">
                  03 · Accommodations
                </span>
                <span className="font-serif text-sm sm:text-base text-ivory font-medium block">
                  Deluxe & Cottages
                </span>
                <span className="text-[11px] text-sand/70 font-light block mt-0.5">
                  20 Private Rooms + 1 Dormitory
                </span>
              </div>

              {/* Anchor 4 */}
              <div className="pt-2 md:pt-0 md:px-3">
                <span className="text-[10px] uppercase tracking-[0.18em] text-gold font-semibold block mb-0.5">
                  04 · Leisure & Events
                </span>
                <span className="font-serif text-sm sm:text-base text-ivory font-medium block">
                  Pool, Lawn & Conclaves
                </span>
                <span className="text-[11px] text-sand/70 font-light block mt-0.5">
                  Rain Dance, Games & Conference
                </span>
              </div>

            </div>
          </div>

          {/* Micro Scroll Indicator */}
          <div className="hidden sm:flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-sand/60 pt-3">
            <span>Go Flamingo Resort · Sitapur, Pench</span>
            <div className="flex items-center gap-2">
              <span>Scroll to Explore</span>
              <span className="w-6 h-px bg-sand/40" />
            </div>
          </div>
        </Container>
      </div>

    </section>
  );
}
