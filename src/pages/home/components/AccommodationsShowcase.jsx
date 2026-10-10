import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, WhatsAppIcon, CheckIcon } from '../../../components/common';
import { AUTHENTIC_RESORT } from '../../../data/images';
import { QUICK_CONTACT } from '../../../data/navigation';
import { cn } from '../../../utils/cn';

const ROOM_KEYS = ['deluxe', 'super-deluxe', 'dormitory'];

/**
 * AccommodationsShowcase Component (Section 3 — Luxury Suites & Stay)
 * 
 * Deep Forest Sanctuary Theme (#0C1E14):
 * - Deep green luxury background with warm ivory/gold typography
 * - Left: Room narrative, 4 luxury amenities pills, and direct conversion actions
 * - Right: Authentic room photography in high-impact 16/10 frame
 * - Automated 4.5s Tab & Photo Shift with smooth transitions & hover pause
 */
export default function AccommodationsShowcase() {
  const [activeTab, setActiveTab] = useState('deluxe');
  const [isPaused, setIsPaused] = useState(false);

  const photos = AUTHENTIC_RESORT.photos;

  const rooms = {
    'deluxe': {
      id: 'deluxe',
      tabLabel: 'Deluxe Rooms',
      category: 'Couples & Small Families · 20 Keys',
      title: 'Deluxe Air-Conditioned Haveli Rooms',
      lead: 'Teak wood furnishings, crisp linens, split AC, and private balcony overlooking lush gardens.',
      photo: photos.deluxeBedroom,
      badge: 'Private Balcony',
      amenities: ['King Bed & Daybed', 'Private Balcony', 'Split Air-Conditioning', 'Hot Water En-suite'],
    },
    'super-deluxe': {
      id: 'super-deluxe',
      tabLabel: 'Super Deluxe Cottages',
      category: 'Premium Leisure & Extra Space',
      title: 'Super Deluxe Garden Verandah Suites',
      lead: 'Expanded living volume with traditional haveli arch views and direct corridor access to central lawns.',
      photo: photos.sunlitVerandah,
      badge: 'Direct Courtyard Walkway',
      amenities: ['Haveli Arch Views', 'Direct Lawn Sitout', 'Split Air-Conditioning', 'In-Room Tea & Coffee'],
    },
    'dormitory': {
      id: 'dormitory',
      tabLabel: 'Group Dormitory',
      category: 'Wildlife Groups & Family Conclaves',
      title: 'Air-Conditioned Group Wilderness Dormitory',
      lead: 'Comfortable individual beds, neat linens, powerful split AC, and dedicated multi-stall washrooms.',
      photo: photos.dormitoryRoom,
      badge: 'Group Facility',
      amenities: ['Individual Beds', 'Split Air-Conditioning', 'Multi-Stall Washrooms', 'Secure Personal Lockers'],
    },
  };

  const current = rooms[activeTab];

  // Auto-shift tabs & photo every 2.8 seconds (resumes on mouse leave)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveTab((prev) => {
        const idx = ROOM_KEYS.indexOf(prev);
        const nextIdx = (idx + 1) % ROOM_KEYS.length;
        return ROOM_KEYS[nextIdx];
      });
    }, 2800);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section 
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative py-14 sm:py-18 lg:py-20 bg-[#0C1E14] text-ivory border-y border-white/10 overflow-hidden"
    >
      {/* Subtle forest ambient radial vignette */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#C5A880]/5 rounded-full blur-3xl pointer-events-none" />

      <Container size="xl" className="relative z-10">
        
        {/* ========================================================
            HEADER & FAST AUTO-SHIFTING TAB SELECTOR
            ======================================================== */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-[#DFBF8E] text-[11px] sm:text-xs uppercase tracking-[0.18em] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] animate-pulse" />
              <span>Authentic Accommodations</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-white">
              Rest Crafted Between Tiger Safaris.
            </h2>
          </div>

          {/* Interactive / Fast Auto-Shifting Pill Selector */}
          <div className="flex items-center gap-1.5 sm:gap-2 p-1.5 rounded-full bg-black/60 border border-white/20 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.4)] self-start sm:self-auto">
            {Object.values(rooms).map((r) => {
              const isActive = activeTab === r.id;
              return (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => setActiveTab(r.id)}
                  className={cn(
                    'relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-[13px] font-bold tracking-wide transition-all duration-300 cursor-pointer',
                    isActive
                      ? 'bg-gradient-to-r from-[#DFBF8E] via-[#C5A880] to-[#B39366] text-[#08130B] shadow-[0_2px_14px_rgba(197,168,128,0.45)] border border-[#F3DFC1]'
                      : 'text-sand-light/80 hover:text-white hover:bg-white/10 border border-transparent'
                  )}
                >
                  <span>{r.tabLabel}</span>
                  {isActive && !isPaused && (
                    <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-[#08130B]/60 rounded-full animate-pulse" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            BALANCED ROOM SHOWCASE (TEXT LEFT, PHOTO RIGHT)
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (5 Cols): Room Details & Actions */}
          <div className="lg:col-span-5 space-y-5">
            
            <div className="space-y-1.5">
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#DFBF8E] font-semibold block">
                {current.category}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-[2rem] text-white font-normal leading-snug">
                {current.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-sand-light/85 font-light leading-relaxed pt-1 max-w-lg">
                {current.lead}
              </p>
            </div>

            {/* 4 Luxury Amenities Pills with CheckIcon */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              {current.amenities.map((item, idx) => (
                <div
                  key={idx}
                  className="px-3.5 py-2.5 rounded-xl bg-white/[0.05] border border-white/15 text-xs sm:text-[13px] text-white/95 font-medium flex items-center gap-2.5 shadow-[0_2px_10px_rgba(0,0,0,0.2)] hover:border-[#C5A880]/50 hover:bg-white/[0.08] transition-all"
                >
                  <span className="w-5 h-5 rounded-full bg-[#C5A880]/20 flex items-center justify-center shrink-0">
                    <CheckIcon className="w-3.5 h-3.5 text-[#C5A880]" />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Direct Conversion Actions — Sharper, Larger & Prominent */}
            <div className="pt-3 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <Link
                to={`/book?room=${current.id}`}
                className="group inline-flex items-center gap-3 pl-6 sm:pl-7 pr-3 sm:pr-3.5 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#DFBF8E] via-[#C5A880] to-[#B39366] hover:from-[#E8CA9E] hover:to-[#C5A880] text-[#08130B] text-xs sm:text-[13px] uppercase tracking-[0.14em] font-bold transition-all duration-300 shadow-[0_4px_20px_rgba(197,168,128,0.35)] hover:shadow-[0_6px_28px_rgba(197,168,128,0.55)] border border-[#F3DFC1] cursor-pointer"
              >
                <span>Book This Room</span>
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#08130B] text-[#DFBF8E] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 shrink-0 text-sm font-bold shadow-inner">
                  →
                </span>
              </Link>

              <a
                href={`${QUICK_CONTACT.whatsappUrl}?text=${encodeURIComponent(`Hello Go Flamingo Resort, I would like to inquire about availability for ${current.title}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-[#0D2418]/90 hover:bg-[#133522] border-2 border-[#25D366]/50 hover:border-[#25D366] text-xs sm:text-[13px] uppercase tracking-[0.10em] font-bold text-white transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_6px_25px_rgba(37,211,102,0.25)] cursor-pointer"
              >
                <WhatsAppIcon size="md" className="text-[#25D366] shrink-0" />
                <span>WhatsApp Inquiry</span>
              </a>
            </div>

          </div>

          {/* Right Column (7 Cols): Authentic Room Photo with Crisp Luxury Border */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-black/60 border-2 border-[#C5A880]/30 shadow-[0_20px_50px_rgba(0,0,0,0.7)] group">
              <img
                key={current.photo.src}
                src={current.photo.src}
                srcSet={current.photo.srcSet}
                sizes={current.photo.sizes}
                width={current.photo.width}
                height={current.photo.height}
                alt={current.photo.alt}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* In-Image Floating Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3.5 py-1.5 rounded-full bg-black/75 text-[#DFBF8E] border border-[#C5A880]/50 text-xs font-bold tracking-wide shadow-md backdrop-blur-md flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C5A880] animate-pulse" />
                  <span>{current.badge}</span>
                </span>
              </div>

              {/* Bottom In-Image Category & Title */}
              <div className="absolute bottom-4 left-5 right-5 sm:bottom-5 sm:left-6 text-ivory">
                <span className="text-[11px] uppercase tracking-[0.18em] text-[#DFBF8E] font-semibold block mb-1">
                  {current.category}
                </span>
                <p className="font-serif text-lg sm:text-xl font-normal leading-snug text-white">
                  {current.title}
                </p>
              </div>
            </div>
          </div>

        </div>

      </Container>
    </section>
  );
}
