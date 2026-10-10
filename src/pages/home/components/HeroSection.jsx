import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { Container, Button } from '../../../components/common';
import { AUTHENTIC_RESORT } from '../../../data/images';
import { cn } from '../../../utils/cn';

/**
 * HeroSection Component — Cinematic Contemporary Indian Heritage Opening
 * 
 * Features genuine resort property footage:
 * - Real two-story Rajasthani haveli-inspired architecture, scalloped arches,
 *   central courtyard lawn, and stone pitcher fountain.
 * - Human, art-directed typography without oversized headings or forced italics.
 * - Restrained, natural hospitality copy.
 * - Two clear primary actions: "Enquire / Book Your Stay" & "Explore the Resort ↓".
 * - High-performance WebP poster fallback with fetchPriority="high".
 * - Strict reduced-motion accessibility and inline muted playback.
 */
export default function HeroSection() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const contentRef = useRef(null);

  const [videoLoaded, setVideoLoaded] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);

    const handleMotionChange = (e) => {
      setPrefersReducedMotion(e.matches);
      if (e.matches && videoRef.current) {
        videoRef.current.pause();
      }
    };

    motionQuery.addEventListener('change', handleMotionChange);

    if (motionQuery.matches) return () => motionQuery.removeEventListener('change', handleMotionChange);

    const ctx = gsap.context(() => {
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.querySelectorAll('.hero-fade'),
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.9, stagger: 0.14, ease: 'power2.out', delay: 0.15 }
        );
      }
    }, containerRef);

    return () => {
      ctx.revert();
      motionQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  // Multi-shot sequence: Resort aerial descent (4.0s) + haveli courtyard arches (3.0s) + turquoise pool (2.0s)
  const heroMedia = AUTHENTIC_RESORT.videos.heroCombined || AUTHENTIC_RESORT.videos.heroAerial;

  const scrollToResort = () => {
    const target = document.getElementById('meet-the-resort');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[88dvh] sm:h-[92dvh] lg:h-[95dvh] min-h-[560px] max-h-[880px] flex items-center justify-center overflow-hidden bg-forest-dark text-ivory selection:bg-gold/40 selection:text-forest-dark"
      aria-label="Welcome to Go Flamingo Resort"
    >
      {/* ========================================================
          FULL-WIDTH CINEMATIC BACKGROUND FOOTAGE & POSTER
          ======================================================== */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        
        {/* Authentic Rajasthani Haveli Courtyard Footage */}
        {!prefersReducedMotion && (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster={heroMedia.poster}
            onLoadedData={() => setVideoLoaded(true)}
            aria-label={heroMedia.title}
            className={cn(
              "w-full h-full object-cover object-center transition-opacity duration-1000",
              videoLoaded ? "opacity-100" : "opacity-0"
            )}
          >
            <source src={heroMedia.webm} type="video/webm" />
            <source src={heroMedia.mp4} type="video/mp4" />
          </video>
        )}

        {/* Eager Fallback Poster */}
        <img
          src={heroMedia.poster}
          alt="Go Flamingo Resort aerial architecture, entrance, canopy and turquoise swimming pool"
          fetchPriority="high"
          loading="eager"
          className={cn(
            "absolute inset-0 w-full h-full object-cover object-center",
            videoLoaded && !prefersReducedMotion ? "opacity-0 pointer-events-none" : "opacity-100"
          )}
        />

        {/* Tailored architectural scrims — let property arches shine through while ensuring readable text */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-forest-deep/40 to-forest-dark/45" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-forest-dark/20 to-forest-dark/60" />
      </div>

      {/* ========================================================
          CENTERED HERO COMPOSITION — NATURAL & DIGNIFIED
          ======================================================== */}
      <Container size="lg" className="relative z-10 text-center py-10 sm:py-14">
        <div ref={contentRef} className="max-w-2xl mx-auto space-y-5 sm:space-y-6">
          
          {/* Eyebrow */}
          <div className="hero-fade inline-flex items-center gap-2 px-3.5 py-1 rounded-[2px] bg-forest-dark/70 border border-sand/25 text-[11px] sm:text-xs uppercase tracking-[0.14em] text-sand-light backdrop-blur-xs">
            <span>Sillari Gate · Pench, Maharashtra</span>
          </div>

          {/* Natural, Art-Directed Headline */}
          <h1 className="hero-fade font-serif text-[clamp(2.2rem,5vw,4.25rem)] font-normal leading-[1.12] tracking-[-0.015em] text-ivory text-balance">
            Your Stay, Beyond the Ordinary.
          </h1>

          {/* Conversational Hospitality Copy */}
          <p className="hero-fade font-sans text-sm sm:text-base md:text-lg text-sand-light/90 max-w-xl mx-auto font-light leading-relaxed text-pretty">
            Arched haveli verandahs, a quiet garden courtyard, and warm hospitality — welcoming you home after every tiger safari.
          </p>

          {/* ONLY TWO PRIMARY ACTIONS */}
          <div className="hero-fade flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
            <Button
              as={Link}
              to="/book"
              variant="gold"
              size="md"
              className="w-full sm:w-auto font-bold tracking-[0.12em] text-xs uppercase px-8 py-3.5 shadow-lg"
            >
              Enquire / Book Your Stay
            </Button>

            <Button
              as="button"
              onClick={scrollToResort}
              variant="inverted"
              size="md"
              className="w-full sm:w-auto font-semibold tracking-[0.12em] text-xs uppercase px-7 py-3.5 cursor-pointer"
            >
              Explore the Resort ↓
            </Button>
          </div>

        </div>
      </Container>

      {/* Subtle Scroll Cue */}
      <div className="absolute bottom-5 left-0 right-0 z-10 flex flex-col items-center justify-center pointer-events-none text-[9px] uppercase tracking-[0.2em] text-sand/60">
        <span className="mb-1">Discover</span>
        <div className="w-3.5 h-5 rounded-full border border-sand/40 flex items-start justify-center p-0.5">
          <div className="w-1 h-1 rounded-full bg-gold animate-bounce" />
        </div>
      </div>

    </section>
  );
}
