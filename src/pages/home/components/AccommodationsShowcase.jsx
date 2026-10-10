import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, WhatsAppIcon } from '../../../components/common';
import { AUTHENTIC_RESORT } from '../../../data/images';
import { QUICK_CONTACT } from '../../../data/navigation';
import { cn } from '../../../utils/cn';

/**
 * AccommodationsShowcase Component (Section 3 — Luxury Suites & Stay)
 * 
 * Screen-Fitted, High-Aesthetic Room Spread:
 * - Clean, concise room presentation without information overload
 * - Fits within a single balanced viewport frame on desktop and mobile
 * - Interactive room switcher with quick visual amenities and direct action
 */
export default function AccommodationsShowcase() {
  const [activeTab, setActiveTab] = useState('deluxe');

  const photos = AUTHENTIC_RESORT.photos;

  const rooms = {
    'deluxe': {
      id: 'deluxe',
      tabLabel: 'Deluxe Rooms',
      category: 'Couples & Small Families · 20 Keys',
      title: 'Deluxe Air-Conditioned Haveli Rooms',
      lead: 'Teak wood furnishings, crisp linens, split AC, and private balcony overlooking gardens.',
      photo: photos.deluxeBedroom,
      badge: 'Private Balcony',
      amenities: ['King Bed', 'Private Balcony', 'Split AC', 'Hot Water En-suite'],
    },
    'super-deluxe': {
      id: 'super-deluxe',
      tabLabel: 'Super Deluxe Cottages',
      category: 'Premium Leisure & Extra Space',
      title: 'Super Deluxe Garden Verandah Suites',
      lead: 'Expanded living space with traditional haveli arch views and direct courtyard access.',
      photo: photos.sunlitVerandah,
      badge: 'Direct Courtyard Walkway',
      amenities: ['Arch Views', 'Lawn Sitout', 'Split AC', 'Tea/Coffee Setup'],
    },
    'dormitory': {
      id: 'dormitory',
      tabLabel: 'Group Dormitory',
      category: 'Wildlife Groups & Family Conclaves',
      title: 'Air-Conditioned Group Wilderness Dormitory',
      lead: 'Comfortable individual beds, crisp linens, powerful split AC, and multi-stall washrooms.',
      photo: photos.dormitoryRoom,
      badge: 'Group Facility',
      amenities: ['Individual Beds', 'Split AC', 'Multiple Washrooms', 'Personal Lockers'],
    },
  };

  const current = rooms[activeTab];

  return (
    <section className="relative py-14 sm:py-18 lg:py-20 bg-[#F9F6F0] text-charcoal border-b border-stone-200/70 overflow-hidden">
      <Container size="xl">
        
        {/* ========================================================
            HEADER & TAB SWITCHER (COMPACT ONE-LINE BAR)
            ======================================================== */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#163824] text-ivory text-[10px] sm:text-[11px] uppercase tracking-[0.16em] font-semibold">
              <span>Accommodations</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#163824]">
              Rest Crafted Between Tiger Safaris.
            </h2>
          </div>

          {/* Clean Pill Selector */}
          <div className="flex items-center gap-1.5 p-1 rounded-full bg-white border border-stone-200 shadow-xs self-start sm:self-auto">
            {Object.values(rooms).map((r) => {
              const isActive = activeTab === r.id;
              return (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => setActiveTab(r.id)}
                  className={cn(
                    'px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-colors cursor-pointer',
                    isActive
                      ? 'bg-[#163824] text-white shadow-xs'
                      : 'text-stone-600 hover:text-[#163824] hover:bg-stone-50'
                  )}
                >
                  {r.tabLabel}
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            BALANCED ROOM SHOWCASE (PHOTO LEFT, DETAILS RIGHT)
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Room Photo (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-stone-900 border border-stone-200/90 shadow-lg group">
              <img
                key={current.photo.src}
                src={current.photo.src}
                srcSet={current.photo.srcSet}
                sizes={current.photo.sizes}
                width={current.photo.width}
                height={current.photo.height}
                alt={current.photo.alt}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />

              {/* In-Image Floating Badge */}
              <div className="absolute top-3.5 left-3.5 z-10">
                <span className="px-3 py-1 rounded-full bg-white/95 text-[#163824] border border-stone-200/80 text-[11px] font-bold tracking-wide shadow-xs backdrop-blur-md">
                  ✨ {current.badge}
                </span>
              </div>

              {/* Bottom In-Image Title */}
              <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-5 text-ivory">
                <span className="text-[10px] uppercase tracking-[0.16em] text-[#C5A880] font-semibold block">
                  {current.category}
                </span>
                <p className="font-serif text-base sm:text-lg font-normal leading-snug">
                  {current.title}
                </p>
              </div>
            </div>
          </div>

          {/* Room Details & Actions (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#163824] font-semibold">
                {current.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-charcoal/75 font-light leading-relaxed mt-1.5">
                {current.lead}
              </p>
            </div>

            {/* Quick 4 Amenities Badges */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              {current.amenities.map((item, idx) => (
                <div
                  key={idx}
                  className="px-3 py-2 rounded-lg bg-white border border-stone-200/70 text-xs text-[#163824] font-medium flex items-center gap-2 shadow-2xs"
                >
                  <span className="text-[#C5A880] font-bold">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Direct Conversion Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                to={`/book?room=${current.id}`}
                className="group inline-flex items-center gap-2 pl-4 pr-1.5 py-2 rounded-full bg-[#163824] text-white text-xs uppercase tracking-[0.12em] font-semibold hover:bg-[#0E2A1B] transition-colors shadow-xs"
              >
                <span>Book This Room</span>
                <span className="w-6 h-6 rounded-full bg-[#C5A880] text-[#0E2A1B] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 shrink-0">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Link>

              <a
                href={`${QUICK_CONTACT.whatsappUrl}?text=${encodeURIComponent(`Hello Go Flamingo Resort, I would like to inquire about availability for ${current.title}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white border border-stone-200 text-xs font-semibold text-charcoal hover:text-[#163824] hover:border-[#163824]/30 shadow-2xs transition-colors"
              >
                <WhatsAppIcon size="sm" className="text-[#25D366]" />
                <span>WhatsApp Inquiry</span>
              </a>
            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}
