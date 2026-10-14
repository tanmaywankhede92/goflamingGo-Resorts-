import React, { useState, useEffect } from 'react';
import { 
  Star, 
  MapPin, 
  ArrowUpRight
} from 'lucide-react';
import { Container } from '../../../components/common';
import { QUICK_CONTACT } from '../../../data/navigation';

/**
 * GuestStoriesTestimonials Component
 * 
 * Luxury Infinite Horizontal Scrolling Testimonial Marquee:
 * - Desktop & Tablet: 1 single smooth continuous row scrolling right-to-left
 * - Mobile: 2 rows of smooth continuous scrolling cards (Row 1 left, Row 2 right/reversed)
 * - Click/Tap to Pause: On mobile or desktop, clicking/tapping pauses the cards to read comfortably
 * - Scroll to Resume: Scrolling down the page automatically resumes the animation smoothly
 * - Desktop Hover: Pauses on hover, resumes on leave
 * - Authentic luxury editorial styling (No green ticks, no AI sparkles)
 */
export default function GuestStoriesTestimonials() {
  const [isPaused, setIsPaused] = useState(false);

  // Automatically resume scrolling whenever the user scrolls the page
  useEffect(() => {
    const handleScroll = () => {
      setIsPaused(false);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  const reviews = [
    {
      id: 'safari-1',
      category: 'Jungle Safari',
      rating: 5,
      quote: '“Spotted a tigress within 40 minutes of our morning drive! Sillari Gate is literally 5 minutes away, and returning to hot tea and a pool breakfast made it truly unforgettable for our family.”',
      author: 'Dr. Rahul & Sneha Kalaskar',
      city: 'Nagpur',
      stay: 'Family Safari Weekend',
      initials: 'RK',
    },
    {
      id: 'wedding-1',
      category: 'Destination Wedding',
      rating: 5,
      quote: '“Our sacred vows under the starlit teak canopy and the illuminated haveli lawns felt like a royal fairytale. Seamless 1-hour drive for all 250+ guests arriving from Nagpur airport.”',
      author: 'Priyanka & Aniket Deshmukh',
      city: 'Mumbai & Nagpur',
      stay: 'Haveli Lawn Wedding',
      initials: 'PD',
    },
    {
      id: 'corporate-1',
      category: 'Corporate Offsite',
      rating: 5,
      quote: '“Zero boardroom fatigue. Flawless presentation Wi-Fi by day, and fireside lawn baithak under starry skies by night. Our leadership team bonded better here than at any 5-star city hotel.”',
      author: 'Siddharth Mehta',
      city: 'Pune',
      stay: 'Leadership Offsite (28 Leaders)',
      initials: 'SM',
    },
    {
      id: 'weekend-1',
      category: 'Weekend Escape',
      rating: 5,
      quote: '“Nagpur ki bhaag-daud se sirf 1 ghante door. The fountain courtyard at night is pure serenity, rooms are spacious, and their authentic Vidarbha Saoji curries are worth the drive alone.”',
      author: 'Amitabh & Ritu Verma',
      city: 'Nagpur',
      stay: 'Couples Sanctuary Retreat',
      initials: 'AV',
    },
    {
      id: 'photo-1',
      category: 'Wildlife Photography',
      rating: 5,
      quote: '“The best strategic basecamp for serious Pench wildlife photographers. Early 5:45 AM packed tea and breakfast, clean rooms, quiet grounds, and helpful staff who know the forest well.”',
      author: 'Vikramaditya Roy',
      city: 'Delhi NCR',
      stay: 'Pench Safari Expedition',
      initials: 'VR',
    },
    {
      id: 'family-1',
      category: 'Family Holiday',
      rating: 5,
      quote: '“Children had a blast at the turquoise swimming pool and rain dance mist showers! Very warm hospitality, spotless cottage rooms, and pure forest peace under starry skies.”',
      author: 'Neha & Pradeep Joshi',
      city: 'Nagpur',
      stay: 'Weekend Family Trip',
      initials: 'NJ',
    },
  ];

  // Helper card component (No green tick, clean luxury linen finish)
  const renderCard = (rev, isMobile = false) => (
    <div
      key={rev.id + (isMobile ? '-mob' : '-desk')}
      className={`group relative rounded-2xl bg-[#FAF7F2] text-[#0E2718] border border-[#E3D7C3] hover:border-[#C5A880] shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.18)] transition-all duration-300 flex flex-col justify-between shrink-0 select-none ${
        isMobile ? 'w-[285px] h-[178px] p-4' : 'w-[360px] sm:w-[380px] p-6'
      }`}
    >
      {/* Top: Category Tag & Gold Star Rating */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">
          <span className="text-[10px] uppercase font-semibold tracking-[0.16em] text-[#8F6A37]">
            {rev.category}
          </span>
          <div className="flex items-center gap-0.5 text-amber-500">
            {[...Array(rev.rating)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-current" />
            ))}
          </div>
        </div>

        {/* Humanized Quote Narrative */}
        <p className={`font-serif text-[#1E2E23] leading-relaxed italic font-normal ${
          isMobile ? 'text-[12.5px] line-clamp-3' : 'text-[13.5px] sm:text-[14px]'
        }`}>
          {rev.quote}
        </p>
      </div>

      {/* Bottom: Author Details (NO GREEN TICKS) */}
      <div className={`border-t border-[#E8DDCD] flex items-center gap-3 ${
        isMobile ? 'pt-3 mt-3' : 'pt-4 mt-5'
      }`}>
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#11291B] text-[#E0C79E] flex items-center justify-center text-xs font-serif font-bold shrink-0 shadow-sm">
          {rev.initials}
        </div>

        <div className="min-w-0">
          <h4 className="font-serif text-[13px] font-semibold text-[#0E2718] truncate">
            {rev.author}
          </h4>
          <p className="text-[11px] text-[#65796E] font-light truncate mt-0.5">
            {rev.city} · <span className="text-[#8F6A37] font-normal">{rev.stay}</span>
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative py-12 sm:py-16 bg-[#09150E] text-ivory border-b border-sand/15 overflow-hidden">
      
      {/* Soft atmospheric forest glows */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-[#0A1710] to-black/70 pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[460px] h-[460px] bg-[#C5A880]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[460px] h-[460px] bg-emerald-800/8 rounded-full blur-3xl pointer-events-none" />

      <Container size="xl" className="relative z-10 mb-8 sm:mb-10">

        {/* ========================================================
            EDITORIAL HEADER ROW (NO SPARKLES, NO SILLARI GATE IN PILL)
            ======================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-white/5 border border-[#C5A880]/30 text-[#DFBF8E] text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-medium backdrop-blur-sm">
              <span>Verified Guest Stories</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-normal text-white tracking-tight leading-tight">
              Voices from the Wilderness.{' '}
              <span className="italic text-[#E8D7B8] font-normal block sm:inline">
                Real Pench Experiences.
              </span>
            </h2>
          </div>

          {/* Clean Google Review Trust Badge */}
          <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md self-start md:self-auto shrink-0 shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shrink-0 shadow-sm">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.36 24 12 24z"/>
                <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.14-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.36 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-sm font-bold text-white tracking-wide">4.9</span>
                <div className="flex items-center gap-0.5 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-[10px] text-sand-light/75 font-light">480+ Google Reviews</p>
            </div>
          </div>
        </div>

      </Container>

      {/* ========================================================
          HORIZONTAL INFINITE MARQUEE TRACK WITH EDGE FADE MASKS
          ======================================================== */}
      <div 
        className="relative w-full overflow-hidden"
        onTouchMove={() => setIsPaused(false)}
      >
        
        {/* Soft Left and Right Edge Vignette Gradient Fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-[#09150E] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-[#09150E] to-transparent z-10" />

        {/* ----------------------------------------------------
            DESKTOP & TABLET: 1 SINGLE SMOOTH HORIZONTAL ROW
            ---------------------------------------------------- */}
        <div 
          className="hidden md:block"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className={`animate-marquee-desktop flex gap-5 py-2 ${isPaused ? 'is-paused' : ''}`}>
            {/* Repeat list twice for seamless infinite loop */}
            {[...reviews, ...reviews].map((rev, idx) => (
              <div 
                key={`desk-${rev.id}-${idx}`}
                onClick={togglePause}
                className="cursor-pointer transition-transform duration-200 active:scale-[0.99]"
              >
                {renderCard(rev, false)}
              </div>
            ))}
          </div>
        </div>

        {/* ----------------------------------------------------
            MOBILE: 2 CONTINUOUS SMOOTH ROWS (OPPOSITE DIRECTIONS)
            Row 1: Right to Left
            Row 2: Left to Right (Reverse)
            ---------------------------------------------------- */}
        <div className="flex md:hidden flex-col gap-3.5 py-1">
          {/* Mobile Row 1 (Right to Left) */}
          <div className={`animate-marquee-mobile-1 flex gap-3 ${isPaused ? 'is-paused' : ''}`}>
            {[...reviews.slice(0, 3), ...reviews.slice(0, 3), ...reviews.slice(0, 3)].map((rev, idx) => (
              <div 
                key={`m1-${rev.id}-${idx}`}
                onClick={togglePause}
                className="cursor-pointer active:scale-[0.98] transition-transform duration-150"
              >
                {renderCard(rev, true)}
              </div>
            ))}
          </div>

          {/* Mobile Row 2 (Left to Right / Reversed) */}
          <div className={`animate-marquee-mobile-2 flex gap-3 ${isPaused ? 'is-paused' : ''}`}>
            {[...reviews.slice(3, 6), ...reviews.slice(3, 6), ...reviews.slice(3, 6)].map((rev, idx) => (
              <div 
                key={`m2-${rev.id}-${idx}`}
                onClick={togglePause}
                className="cursor-pointer active:scale-[0.98] transition-transform duration-150"
              >
                {renderCard(rev, true)}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ========================================================
          SUBTLE BOTTOM LINK (ELEGANT & MINIMAL)
          ======================================================== */}
      <Container size="xl" className="relative z-10">
        <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-center text-xs">
          <a
            href={QUICK_CONTACT.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-[#C5A880] hover:text-[#DFBF8E] font-medium transition-colors"
          >
            <span>Read all 480+ verified reviews on Google Maps</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </Container>

      {/* Embedded CSS for hardware-accelerated 60/120fps infinite glide */}
      <style>{`
        @keyframes marqueeScroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        @keyframes marqueeScrollReverse {
          0% {
            transform: translate3d(-50%, 0, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }
        .animate-marquee-desktop {
          display: flex;
          width: max-content;
          animation: marqueeScroll 45s linear infinite;
          will-change: transform;
        }
        .animate-marquee-mobile-1 {
          display: flex;
          width: max-content;
          animation: marqueeScroll 26s linear infinite;
          will-change: transform;
        }
        .animate-marquee-mobile-2 {
          display: flex;
          width: max-content;
          animation: marqueeScrollReverse 26s linear infinite;
          will-change: transform;
        }
        .is-paused {
          animation-play-state: paused !important;
        }
        @media (hover: hover) {
          .animate-marquee-desktop:hover,
          .animate-marquee-mobile-1:hover,
          .animate-marquee-mobile-2:hover {
            animation-play-state: paused;
          }
        }
      `}</style>
    </section>
  );
}
