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
      className="relative w-full h-screen h-[100dvh] min-h-[580px] flex items-end justify-center overflow-hidden bg-forest-dark text-ivory selection:bg-gold/40 selection:text-forest-dark"
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
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/95 via-forest-deep/45 to-forest-dark/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/65 via-transparent to-transparent sm:hidden" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-forest-dark/20 to-forest-dark/60" />
      </div>

      {/* ========================================================
          HERO COMPOSITION — ANCHORED AT THE BOTTOM
          WITH SAFE CLEARANCE ABOVE MOBILE WHATSAPP & STICKY BAR
          ======================================================== */}
      <Container size="lg" className="relative z-10 w-full text-left sm:text-center pb-52 sm:pb-16 lg:pb-20 pt-24 px-5 sm:px-6 pr-14 sm:pr-6">
        <div ref={contentRef} className="max-w-2xl mx-0 sm:mx-auto space-y-3 sm:space-y-5">

          {/* Natural, Art-Directed Headline */}
          <h1 className="hero-fade font-serif text-[clamp(1.85rem,5.5vw,4.25rem)] font-normal leading-[1.15] tracking-[-0.015em] text-ivory text-balance">
            Your Stay, Beyond the Ordinary.
          </h1>

          {/* Conversational Hospitality Copy with 65 km naturally highlighted */}
          <p className="hero-fade font-sans text-xs sm:text-base md:text-lg text-sand-light/95 max-w-xl mx-0 sm:mx-auto font-light leading-relaxed text-pretty border-l border-gold/50 pl-3 sm:border-l-0 sm:pl-0">
            Just 65 km from Nagpur (1 hr via NH 44) — arched haveli verandahs, a quiet garden courtyard, and warm hospitality welcoming you home after every tiger safari.
          </p>

          {/* PRIMARY ACTIONS: On mobile, only 'Explore the Resort ↓' placed naturally */}
          <div className="hero-fade flex flex-row items-center justify-start sm:justify-center gap-3 sm:gap-4 pt-1 sm:pt-2">
            <Button
              as={Link}
              to="/book"
              variant="gold"
              size="md"
              className="hidden sm:inline-flex w-full sm:w-auto font-bold tracking-[0.12em] text-xs uppercase px-8 py-3.5 shadow-lg"
            >
              Enquire / Book Your Stay
            </Button>

            <Button
              as="button"
              onClick={scrollToResort}
              variant="inverted"
              size="md"
              className="w-auto font-semibold tracking-[0.12em] text-xs uppercase px-5 sm:px-7 py-2.5 sm:py-3.5 cursor-pointer shadow-md inline-flex items-center gap-2"
            >
              <span>Explore the Resort ↓</span>
            </Button>
          </div>

        </div>
      </Container>
    </section>
  );
}
