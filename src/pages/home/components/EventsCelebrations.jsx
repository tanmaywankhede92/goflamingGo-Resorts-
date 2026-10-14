import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Container, WhatsAppIcon } from '../../../components/common';
import { QUICK_CONTACT } from '../../../data/navigation';
import { getWhatsAppTarget } from '../../../utils/whatsapp';

/**
 * EventsCelebrations Component
 * 
 * Luxury two-column auto-rotating showcase (Weddings, Conferences, Celebrations)
 * - Left: Large portrait photo with seamless stacked cross-fade animation
 * - Right: Crisp headline, concise description, feature badges, and direct action buttons
 * - Uninterrupted 5.5s auto-rotation: No hover pause; clicking any tab restarts auto-play seamlessly
 * - Mobile-first luxury segmented dock: All 3 tabs fit in a sleek single horizontal bar (no awkward stacking)
 */
export default function EventsCelebrations() {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoPlayRef = useRef(null);

  const slides = [
    {
      id: 'weddings',
      num: '01',
      tabLabel: 'Destination Weddings',
      mobileLabel: 'Weddings',
      tag: 'DESTINATION CELEBRATIONS',
      title: 'WEDDINGS & GRAND EVENTS IN THE FOREST.',
      desc: 'Host your sacred vows and landmark celebrations across 25 acres of untamed wilderness. 250+ guest lawns, illuminated canopy, royal Vidarbha feasting, and luxury villa stays.',
      badges: ['Sprawling Banquet Lawns', 'Illuminated Canopy', 'Royal Vidarbha Feast', '20 AC Villas'],
      photo: '/assets/resort_drive/wedding_lawn_enhanced.jpg',
      alt: 'Grand destination wedding lawn celebration under festive illuminated canopy at Go Flamingo Resort Pench',
      primaryCta: 'EXPLORE WEDDINGS & EVENTS',
      link: '/events',
      whatsappMsg: 'Hello Go Flamingo Resort, I would like to enquire about hosting a destination wedding / sangeet in the forest.',
    },
    {
      id: 'corporate',
      num: '02',
      tabLabel: 'Conferences & Offsites',
      mobileLabel: 'Conferences',
      tag: 'EXECUTIVE RETREATS',
      title: 'CORPORATE OFFSITES & STRATEGY SUMMITS.',
      desc: 'Step outside traditional city boardrooms into rejuvenating nature. Air-conditioned conference hall, high-speed Wi-Fi, audio-visual presentation setup, and Pench tiger safaris.',
      badges: ['AC Conference Hall', 'High-Speed Wi-Fi', 'AV Presentation Setup', 'Pench Safaris'],
      photo: '/assets/resort_drive/conference_hall_enhanced.jpg',
      alt: 'Corporate executive conference and strategy meeting in the club lounge at Go Flamingo Resort Pench',
      primaryCta: 'EXPLORE CORPORATE OFFSITES',
      link: '/events',
      whatsappMsg: 'Hello Go Flamingo Resort, I would like to enquire about booking the Conference Room and corporate offsite package.',
    },
    {
      id: 'social',
      num: '03',
      tabLabel: 'Social Celebrations',
      mobileLabel: 'Celebrations',
      tag: 'STARLIT CELEBRATIONS',
      title: 'STARLIT PARTIES & MILESTONE GATHERINGS.',
      desc: 'Celebrate milestone birthdays, anniversaries, and family reunions under starlit skies. Elevated DJ stages, fairy-lit lawns, rain dance mist sessions, and poolside sundowners.',
      badges: ['Fairy-lit Lawns', 'Rain Dance Mist Arena', 'Poolside Sundowners', 'Royal Baithak'],
      photo: '/assets/resort_drive/social_celebrations_enhanced.jpg',
      alt: 'Magical evening lawn celebration under fairy lights and bonfires at Go Flamingo Resort Pench',
      primaryCta: 'EXPLORE CELEBRATIONS',
      link: '/events',
      whatsappMsg: 'Hello Go Flamingo Resort, I would like to enquire about holding a private milestone celebration / party.',
    },
  ];

  // Helper to restart uninterrupted 7s auto-play countdown from current activeIndex
  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 7000);
  }, [slides.length]);

  const goToSlide = (idx) => {
    setActiveIndex(idx);
    startAutoPlay(); // Immediately restarts timer from this chosen slide without pausing
  };

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
    startAutoPlay();
  }, [slides.length, startAutoPlay]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
    startAutoPlay();
  }, [slides.length, startAutoPlay]);

  // Continuous auto-play with NO mouse pause
  useEffect(() => {
    startAutoPlay();
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [startAutoPlay]);

  const current = slides[activeIndex];

  return (
    <section 
      className="relative py-12 sm:py-20 bg-[#09150E] text-ivory border-b border-sand/15 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#0A1710] to-black/75 pointer-events-none" />
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-24 w-96 h-96 bg-emerald-800/10 rounded-full blur-3xl pointer-events-none" />

      <Container size="xl" className="relative z-10">

        {/* ========================================================
            TOP CATEGORY TABS WITH AUTO-PROGRESS INDICATOR
            Mobile: Sleek single-row segmented control (Weddings | Conferences | Celebrations)
            Desktop: Spacious pill tabs with full titles + counter
            ======================================================== */}
        <div className="flex items-center justify-between gap-3 mb-6 sm:mb-12 pb-3 sm:pb-4 border-b border-white/10">
          
          {/* Segmented Pill Dock */}
          <div className="w-full sm:w-auto flex items-center gap-1 sm:gap-3 p-1 sm:p-0 bg-white/[0.04] sm:bg-transparent rounded-full border border-white/10 sm:border-0">
            {slides.map((slide, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(idx)}
                  className={`group relative flex-1 sm:flex-initial text-center px-3 sm:px-4 py-2 sm:py-2 rounded-full text-[11px] sm:text-xs uppercase tracking-[0.08em] sm:tracking-[0.14em] font-semibold transition-all duration-300 cursor-pointer overflow-hidden whitespace-nowrap ${
                    isActive
                      ? 'bg-white/20 sm:bg-white/15 text-[#E8D7B8] border border-[#C5A880]/60 shadow-sm'
                      : 'text-sand-light/60 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  {/* Short label on mobile, full label on tablet/desktop */}
                  <span className="relative z-10 sm:hidden">
                    {slide.mobileLabel}
                  </span>
                  <span className="relative z-10 hidden sm:inline">
                    {slide.tabLabel}
                  </span>

                  {/* Active Slide Timer Progress Bar (7s synchronized) */}
                  {isActive && (
                    <span 
                      key={`progress-${activeIndex}`}
                      className="absolute bottom-0 left-0 h-[2px] sm:h-[2.5px] bg-[#C5A880]"
                      style={{
                        animation: 'eventProgress 7s linear forwards',
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Desktop Prev / Next controls */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <button
              onClick={prevSlide}
              aria-label="Previous event showcase"
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-sand-light hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-[11px] font-mono text-sand-light/60 px-1">
              0{activeIndex + 1} / 0{slides.length}
            </span>
            <button
              onClick={nextSlide}
              aria-label="Next event showcase"
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-sand-light hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ========================================================
            TWO-COLUMN EDITORIAL SHOWCASE (MATCHING REFERENCE)
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* LEFT: Large Photo with Stacked Cross-Fade Animation */}
          <div className="lg:col-span-6 order-1">
            <div className="relative aspect-[4/3] sm:aspect-[4/3.5] lg:aspect-[4/3.5] rounded-2xl sm:rounded-3xl overflow-hidden bg-black/40 border border-white/10 shadow-2xl">
              {slides.map((slide, idx) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-all duration-1000 ease-out ${
                    idx === activeIndex
                      ? 'opacity-100 scale-100 z-10'
                      : 'opacity-0 scale-103 z-0 pointer-events-none'
                  }`}
                >
                  <img
                    src={slide.photo}
                    alt={slide.alt}
                    loading={idx === 0 ? 'eager' : 'lazy'}
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Subtle luxury vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/25 pointer-events-none" />
                </div>
              ))}

              {/* Floating Slide Badge on Photo */}
              <div className="absolute top-4 left-4 z-20">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-semibold text-white bg-black/60 backdrop-blur-md border border-white/20 shadow-md">
                  {current.tag}
                </span>
              </div>

              {/* Mobile Prev / Next overlay buttons */}
              <div className="sm:hidden absolute bottom-3 right-3 z-20 flex items-center gap-1.5 bg-black/60 backdrop-blur-md rounded-full p-1 border border-white/20">
                <button
                  onClick={prevSlide}
                  className="w-7 h-7 rounded-full flex items-center justify-center text-white"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <span className="text-[10px] font-mono text-sand-light px-1">
                  0{activeIndex + 1}/0{slides.length}
                </span>
                <button
                  onClick={nextSlide}
                  className="w-7 h-7 rounded-full flex items-center justify-center text-white"
                  aria-label="Next"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT: Typography & Details with Smooth Motion Transition */}
          <div className="lg:col-span-6 order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-4 sm:space-y-6"
              >
                {/* Category Tag */}
                <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-[#C5A880]">
                  {current.tag}
                </div>

                {/* Big Serif Heading */}
                <h2 className="font-serif text-2xl sm:text-4xl lg:text-[42px] font-normal leading-[1.12] text-ivory tracking-tight">
                  {current.title}
                </h2>

                {/* Concise Description */}
                <p className="font-sans text-xs sm:text-sm md:text-[15px] text-sand-light/85 font-light leading-relaxed max-w-xl">
                  {current.desc}
                </p>

                {/* Quick Feature Badges */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {current.badges.map((badge, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center px-3 py-1 rounded-full text-[11px] text-sand-light bg-white/5 border border-white/10 backdrop-blur-sm"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3 sm:pt-4">
                  {/* Primary Exploration Button */}
                  <Link
                    to={current.link}
                    className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#B38E5D] hover:bg-[#C5A06E] text-[#09150E] text-[11px] sm:text-xs uppercase tracking-[0.14em] font-bold transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <span>{current.primaryCta}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>

                  {/* Secondary WhatsApp / Proposal Button */}
                  <a
                    href={`${QUICK_CONTACT.whatsappUrl}?text=${encodeURIComponent(current.whatsappMsg)}`}
                    target={getWhatsAppTarget()}
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-transparent hover:bg-white/5 text-ivory border border-white/25 hover:border-white/50 text-[11px] sm:text-xs uppercase tracking-[0.14em] font-medium transition-all duration-300 cursor-pointer"
                  >
                    <WhatsAppIcon size="sm" className="text-[#25D366]" />
                    <span>Request Proposal</span>
                  </a>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </Container>

      {/* Embedded CSS for smooth progress animation */}
      <style>{`
        @keyframes eventProgress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </section>
  );
}
