import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, WhatsAppIcon, CheckIcon } from '../../../components/common';
import { ArrowRight } from 'lucide-react';
import { AUTHENTIC_RESORT, RESORT_DRIVE_PHOTOS } from '../../../data/images';
import { QUICK_CONTACT } from '../../../data/navigation';
import { cn } from '../../../utils/cn';

const ROOM_KEYS = ['deluxe', 'super-deluxe', 'dormitory'];

/**
 * AccommodationsShowcase Component (Section 3 — Luxury Suites & Stay)
 * 
 * Architecture:
 * - Desktop: Left Column (5 Cols) holds Section Heading, Toggle Pills, Room Narrative,
 *   Amenities, and Action Buttons. Right Column (7 Cols) is ONLY the high-impact authentic photo.
 * - Mobile: Heading -> Toggle Pills -> Photo Frame -> Room Details -> Action Buttons in ONE ROW.
 * - Automated 2.8s Tab & Photo Shift with smooth transitions & hover pause.
 */
export default function AccommodationsShowcase() {
  const [activeTab, setActiveTab] = useState('deluxe');
  const [isPaused, setIsPaused] = useState(false);

  const photos = AUTHENTIC_RESORT.photos;

  const rooms = {
    'deluxe': {
      id: 'deluxe',
      tabLabel: 'Deluxe Rooms',
      shortLabel: 'Deluxe',
      category: 'Couples & Small Families · 20 Keys',
      title: 'Deluxe Air-Conditioned Haveli Rooms',
      lead: 'Teak wood furnishings, crisp linens, split AC, and modern en-suite bathroom with bathtub, offering a relaxing sanctuary after a day exploring Pench.',
      photo: {
        src: RESORT_DRIVE_PHOTOS.bedroomSuiteBathtub.src,
        alt: 'Deluxe Air-Conditioned Haveli Room with King Bed, Sitting Area and En-Suite Bathroom with Bathtub',
      },
      badge: 'DELUXE ROOM',
      imageBadge: 'DELUXE ROOM',
      imageSmallLabel: 'COUPLES & SMALL FAMILIES · 20 KEYS',
      caption: 'Deluxe Air-Conditioned Haveli Rooms',
      amenities: [
        'King Bed & Sitting Area',
        'En-Suite Bath with Bathtub',
        'Split Air-Conditioning',
        'Hot Water En-suite',
      ],
      primaryButtonText: 'Book This Room',
      whatsappButtonText: 'WhatsApp Inquiry',
      whatsappMessage: 'Hello Go Flamingo Resort, I would like to inquire about booking the Deluxe Air-Conditioned Haveli Room.',
    },
    'super-deluxe': {
      id: 'super-deluxe',
      tabLabel: 'Super Deluxe Rooms',
      shortLabel: 'Super Deluxe',
      category: 'PREMIUM COMFORT & BEAUTIFUL VIEWS',
      title: 'Super Deluxe Rooms with Private Balcony',
      lead: 'Our most spacious and luxurious rooms are located on the first floor and feature private balconies with beautiful views. Enjoy extra space, comfort and a relaxing setting during your stay at GoFlamingo Resort.',
      photo: {
        src: RESORT_DRIVE_PHOTOS.executiveBedroomBalcony.src,
        alt: 'Super Deluxe Room with private balcony overlooking garden canopy',
      },
      badge: 'PRIVATE BALCONY',
      imageBadge: 'PRIVATE BALCONY',
      imageSmallLabel: 'PREMIUM COMFORT & BEAUTIFUL VIEWS',
      caption: 'Super Deluxe Rooms with Private Balcony',
      amenities: [
        'Spacious Interiors',
        'Private Balcony',
        'First-Floor Location',
        'Beautiful Views',
      ],
      primaryButtonText: 'Book This Room',
      whatsappButtonText: 'WhatsApp Inquiry',
      whatsappMessage: 'Hello Go Flamingo Resort, I would like to inquire about booking the Super Deluxe Room with Private Balcony.',
    },
    'dormitory': {
      id: 'dormitory',
      tabLabel: 'Group Dormitory',
      shortLabel: 'Dormitory',
      category: 'STAYS FOR GROUPS',
      title: 'A Comfortable Stay for Your Group',
      lead: 'Travelling to Pench with friends, family or a larger group? Our dormitory offers shared accommodation for guests who want to stay together and enjoy the experience.',
      photo: photos.dormitoryRoom,
      badge: 'GROUP DORMITORY',
      imageBadge: 'GROUP DORMITORY',
      imageSmallLabel: 'STAYS FOR GROUPS',
      caption: 'A practical and comfortable option for group stays.',
      amenities: [
        'Individual Beds',
        'Shared Group Accommodation',
        'Air Conditioning',
        'Multiple Washroom Facilities',
      ],
      primaryButtonText: 'Enquire About the Dormitory',
      whatsappButtonText: 'WhatsApp Enquiry',
      whatsappMessage: 'Hello Go Flamingo Resort, I would like to inquire about dormitory shared accommodation for our group.',
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

  // High-Impact Authentic Photo Frame
  const renderPhotoFrame = (isMobile = false) => (
    <div
      className={cn(
        'relative rounded-2xl overflow-hidden bg-black/60 border-2 border-[#C5A880]/35 shadow-[0_20px_50px_rgba(0,0,0,0.7)] group transition-all duration-500',
        isMobile ? 'aspect-[16/10] my-2 w-full' : 'aspect-[16/11] w-full'
      )}
    >
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
      <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 z-10">
        <span className="px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-black/75 text-[#DFBF8E] border border-[#C5A880]/50 text-[11px] sm:text-xs font-medium uppercase tracking-[0.16em] shadow-md backdrop-blur-md">
          {current.imageBadge || current.badge}
        </span>
      </div>

      {/* Bottom In-Image Category & Caption */}
      <div className="absolute bottom-3.5 left-4 right-4 sm:bottom-4 sm:left-5 text-ivory">
        <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[#DFBF8E] font-semibold block mb-0.5 sm:mb-1">
          {current.imageSmallLabel || current.category}
        </span>
        <p className="font-serif text-base sm:text-lg lg:text-xl font-normal leading-snug text-white">
          {current.caption || current.title}
        </p>
      </div>
    </div>
  );

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
            RESPONSIVE ARCHITECTURE:
            - Desktop: Left Column (5 Cols) = Heading + Toggles + Info + Actions
                       Right Column (7 Cols) = ONLY Photo Frame
            - Mobile: Heading -> Toggles -> Photo -> Info -> Actions in ONE ROW
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 xl:gap-20 items-center">
          
          {/* Left Column (5 Cols on desktop): All Controls & Narrative */}
          <div className="lg:col-span-5 flex flex-col space-y-5">
            
            {/* 1. SECTION HEADING */}
            <div className="space-y-2">
              <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-[#DFBF8E] text-[11px] sm:text-xs uppercase tracking-[0.18em] font-semibold">
                <span>Comfortable Stays</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-white">
                Deluxe Rooms for a Relaxing Getaway
              </h2>
            </div>

            {/* 2. CATEGORY TOGGLE SELECTOR (Sleek, Compact, Zero-Scroll on Mobile) */}
            <div className="w-full sm:w-auto grid grid-cols-3 sm:inline-flex sm:items-center gap-1 p-1 rounded-full bg-black/50 border border-white/15 backdrop-blur-md shadow-inner">
              {Object.values(rooms).map((r) => {
                const isActive = activeTab === r.id;
                return (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => setActiveTab(r.id)}
                    className={cn(
                      'relative py-1.5 px-1.5 sm:px-4 rounded-full text-[10.5px] sm:text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer text-center',
                      isActive
                        ? 'bg-[#C5A880] text-[#08130B] shadow-sm font-bold'
                        : 'text-sand-light/80 hover:text-white hover:bg-white/10'
                    )}
                  >
                    <span className="sm:hidden">{r.shortLabel}</span>
                    <span className="hidden sm:inline">{r.tabLabel}</span>
                    {isActive && !isPaused && (
                      <span className="absolute bottom-0.5 left-2 right-2 h-0.5 bg-[#08130B]/50 rounded-full animate-pulse" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* 3. MOBILE ONLY: PHOTO FRAME (Rendered after Toggles, before Details) */}
            <div className="block lg:hidden">
              {renderPhotoFrame(true)}
            </div>

            {/* 4. ROOM DETAILS */}
            <div className="space-y-1.5 pt-1">
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

            {/* 5. LUXURY AMENITIES PILLS */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 pt-1">
              {current.amenities.map((item, idx) => (
                <div
                  key={idx}
                  className="px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-xl bg-white/[0.05] border border-white/15 text-xs sm:text-[13px] text-white/95 font-medium flex items-center gap-2 sm:gap-2.5 shadow-[0_2px_10px_rgba(0,0,0,0.2)] hover:border-[#C5A880]/50 hover:bg-white/[0.08] transition-all"
                >
                  <span className="w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full bg-[#C5A880]/20 flex items-center justify-center shrink-0">
                    <CheckIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C5A880]" />
                  </span>
                  <span className="truncate">{item}</span>
                </div>
              ))}
            </div>

            {/* 6. DIRECT CONVERSION ACTIONS (Sleek unified size matching all site CTAs) */}
            <div className="pt-2 flex flex-row items-center gap-2.5 sm:gap-3.5 w-full">
              <Link
                to={`/contact?room=${current.id}&book=true#reservation-form-card`}
                className="group flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 pl-4 pr-1.5 py-2 sm:pl-5 sm:pr-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#DFBF8E] via-[#C5A880] to-[#B39366] hover:from-[#E8CA9E] hover:to-[#C5A880] text-[#08130B] text-[11px] sm:text-xs uppercase tracking-[0.12em] font-bold transition-all duration-300 shadow-[0_4px_16px_rgba(197,168,128,0.25)] hover:shadow-[0_6px_22px_rgba(197,168,128,0.4)] border border-[#F3DFC1] cursor-pointer whitespace-nowrap"
              >
                <span>{current.primaryButtonText || 'Book This Room'}</span>
                <span className="w-5.5 h-5.5 sm:w-6 sm:h-6 rounded-full bg-[#08130B] text-[#DFBF8E] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 shrink-0 shadow-inner">
                  <ArrowRight className="w-3 h-3 text-[#DFBF8E]" />
                </span>
              </Link>

              <a
                href={`${QUICK_CONTACT.whatsappUrl}?text=${encodeURIComponent(current.whatsappMessage || `Hello Go Flamingo Resort, I would like to inquire about availability for ${current.title}.`)}`}
                target={typeof navigator !== 'undefined' && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#0D2418]/90 hover:bg-[#133522] border-2 border-[#25D366]/50 hover:border-[#25D366] text-[11px] sm:text-xs uppercase tracking-[0.08em] sm:tracking-[0.10em] font-bold text-white transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.2)] cursor-pointer whitespace-nowrap"
              >
                <WhatsAppIcon size="sm" className="text-[#25D366] shrink-0" />
                <span>{current.whatsappButtonText || 'WhatsApp Inquiry'}</span>
              </a>
            </div>

          </div>

          {/* Right Column (7 Cols on desktop): ONLY LARGE PHOTO SHOWCASE */}
          <div className="hidden lg:block lg:col-span-7">
            {renderPhotoFrame(false)}
          </div>

        </div>

      </Container>
    </section>
  );
}
