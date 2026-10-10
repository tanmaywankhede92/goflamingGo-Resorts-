import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, WhatsAppIcon } from '../../../components/common';
import { AUTHENTIC_RESORT } from '../../../data/images';
import { QUICK_CONTACT } from '../../../data/navigation';
import { cn } from '../../../utils/cn';

/**
 * AccommodationsShowcase Component (Section 3 — Luxury Suites & Stay)
 * 
 * Creative, High-Aesthetic Room Spread:
 * - Replaces dry tabular specification sheets with rich, photography-first luxury suite spreads.
 * - Interactive pill selector for Deluxe Haveli Rooms, Super Deluxe Cottages & Group Dormitory.
 * - Glassmorphic floating highlight badges on real room photography.
 * - Direct 1-click booking and WhatsApp inquiry actions.
 */
export default function AccommodationsShowcase() {
  const [activeTab, setActiveTab] = useState('deluxe');

  const photos = AUTHENTIC_RESORT.photos;

  const rooms = {
    'deluxe': {
      id: 'deluxe',
      tabLabel: 'Deluxe Haveli Rooms',
      category: 'Couples & Small Families · 20 Keys',
      title: 'Deluxe Air-Conditioned Haveli Rooms',
      lead: 'Handcrafted teak wood furnishings, crisp clean linens, and full-height glass doors opening to your private balcony sit-out.',
      photo: photos.deluxeBedroom,
      badge: 'Private Balcony & Garden View',
      link: '/rooms',
      highlights: [
        { icon: '🛏️', label: 'Solid Teak King Bed', desc: 'With extra daybed alcove' },
        { icon: '🌿', label: 'Private Balcony', desc: 'Overlooking tree canopies' },
        { icon: '❄️', label: 'Split Air-Conditioning', desc: 'Individual digital climate control' },
        { icon: '🚿', label: '24/7 Hot Water En-suite', desc: 'Modern sanitary fittings' },
      ],
      inclusions: ['Pre-Dawn Safari Tea', 'Swimming Pool Access', 'Complimentary Wi-Fi', 'Free Private Parking'],
    },
    'super-deluxe': {
      id: 'super-deluxe',
      tabLabel: 'Super Deluxe Cottages',
      category: 'Premium Leisure & Extra Space',
      title: 'Super Deluxe Garden Verandah Suites',
      lead: 'Expanded living volume framed by traditional haveli arch views, with direct corridor access to the central manicured lawn.',
      photo: photos.sunlitVerandah,
      badge: 'Direct Courtyard Walkway',
      link: '/rooms/luxury-cottage',
      highlights: [
        { icon: '🏰', label: 'Haveli Arch Architecture', desc: 'Traditional sculpted perspectives' },
        { icon: '🛋️', label: 'Expansive Living Area', desc: 'Additional sofa & seating space' },
        { icon: '🍃', label: 'Garden Verandah', desc: 'Step out directly to the lawn' },
        { icon: '☕', label: 'In-Room Tea/Coffee', desc: 'Electric kettle with condiments' },
      ],
      inclusions: ['Buffet Breakfast Options', 'Pool Access Included', 'Safari Booking Desk', 'Lawn Stroll Access'],
    },
    'dormitory': {
      id: 'dormitory',
      tabLabel: 'Group Wilderness Dormitory',
      category: 'Wildlife Groups, Students & Family Conclaves',
      title: 'Air-Conditioned Group Wilderness Dormitory',
      lead: 'A dedicated high-capacity sanctuary with comfortable individual beds, crisp sheets, split AC, and dedicated multi-stall washrooms.',
      photo: photos.dormitoryRoom,
      badge: '1 Dedicated Group Facility',
      link: '/rooms',
      highlights: [
        { icon: '🛌', label: 'Individual Comfortable Beds', desc: 'Neat linens & personal charging points' },
        { icon: '❄️', label: 'High-Capacity Split AC', desc: 'Cool comfort throughout the day' },
        { icon: '🚿', label: 'Multiple Dedicated Washrooms', desc: 'Continuous hot & cold water' },
        { icon: '👥', label: 'Economical Group Rate', desc: 'Best value for Pench expeditions' },
      ],
      inclusions: ['Group Safari Coordination', 'Campfire Proximity', 'Dining Hall Access', 'Secure Gated Campus'],
    },
  };

  const current = rooms[activeTab];

  return (
    <section className="relative py-20 sm:py-28 lg:py-36 bg-[#F8F5EE] text-charcoal border-b border-sand/30 overflow-hidden">
      <Container size="xl">
        
        {/* ========================================================
            SECTION HEADER & PILL SELECTOR TABS
            ======================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 sm:mb-16">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-deep text-ivory text-[11px] uppercase tracking-[0.16em] font-semibold">
              <span>Authentic Accommodations</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.18] text-forest-deep text-balance">
              Rest Crafted Between Tiger Safaris.
            </h2>

            <p className="font-sans text-sm sm:text-base text-charcoal-muted font-light leading-relaxed">
              With 20 private air-conditioned rooms and 1 dedicated group dormitory, every space features solid wood, clean linens, and quiet garden outlooks.
            </p>
          </div>

          {/* Interactive Room Tabs in Floating Pill Style */}
          <div className="flex items-center gap-2 p-1.5 rounded-full bg-white border border-stone-200/80 shadow-xs self-start lg:self-auto overflow-x-auto max-w-full">
            {Object.values(rooms).map((r) => {
              const isActive = activeTab === r.id;
              return (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => setActiveTab(r.id)}
                  className={cn(
                    'px-4 sm:px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer whitespace-nowrap',
                    isActive
                      ? 'bg-forest-deep text-white shadow-sm'
                      : 'text-stone-600 hover:text-forest-deep hover:bg-stone-100/70'
                  )}
                >
                  {r.tabLabel}
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            HERO SUITE SPREAD (7 COLS PHOTO, 5 COLS EDITORIAL)
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Visual Room Showcase (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-[16/10] sm:aspect-[16/10] rounded-2xl overflow-hidden bg-forest-dark border border-stone-200 shadow-xl group">
              <img
                key={current.photo.src}
                src={current.photo.src}
                srcSet={current.photo.srcSet}
                sizes={current.photo.sizes}
                width={current.photo.width}
                height={current.photo.height}
                alt={current.photo.alt}
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-forest-deep/15 to-transparent pointer-events-none" />

              {/* Floating Badge (Top Left) */}
              <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-10">
                <span className="px-3.5 py-1.5 rounded-full bg-white/95 text-forest-deep border border-stone-200/80 text-xs font-bold tracking-wide shadow-md backdrop-blur-md">
                  ✨ {current.badge}
                </span>
              </div>

              {/* In-Image Caption (Bottom Left) */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 text-ivory">
                <span className="text-[10px] uppercase tracking-[0.18em] text-gold-light font-semibold block mb-0.5">
                  {current.category}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-normal leading-snug">
                  {current.title}
                </h3>
              </div>
            </div>

            {/* Quick Inclusions Bar */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-charcoal-muted">
              <span className="font-semibold text-forest-deep text-[11px] uppercase tracking-wider">Includes:</span>
              {current.inclusions.map((inc, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-white border border-stone-200/80 text-stone-700 text-[11px] font-medium"
                >
                  ✓ {inc}
                </span>
              ))}
            </div>
          </div>

          {/* Luxury Room Highlights & Booking Actions (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.16em] text-terracotta font-bold block">
                {current.category}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-forest-deep font-semibold leading-snug">
                {current.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-charcoal-muted font-light leading-relaxed">
                {current.lead}
              </p>
            </div>

            {/* 4 Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {current.highlights.map((h, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white border border-stone-200/80 shadow-xs space-y-1 hover:border-forest/40 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-base">{h.icon}</span>
                    <span className="font-serif text-xs sm:text-sm font-semibold text-forest-deep">
                      {h.label}
                    </span>
                  </div>
                  <p className="text-[11px] text-charcoal-muted font-light leading-snug">
                    {h.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Booking & WhatsApp Dual Actions (Studio Modular Style) */}
            <div className="pt-3 space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to={`/book?room=${current.id}`}
                  className="group inline-flex items-center gap-2.5 pl-5 pr-2 py-2 rounded-full bg-forest-deep text-ivory text-xs uppercase tracking-[0.12em] font-semibold hover:bg-forest-dark transition-all duration-300 shadow-sm"
                >
                  <span>Book This Room</span>
                  <span className="w-7 h-7 rounded-full bg-[#BCE0FD] text-forest-deep flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 shadow-xs shrink-0">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </Link>

                <a
                  href={`${QUICK_CONTACT.whatsappUrl}?text=${encodeURIComponent(`Hello Go Flamingo Resort, I would like to inquire about availability and rates for ${current.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-stone-200 text-xs font-semibold text-stone-700 hover:text-forest-deep hover:border-forest shadow-xs transition-colors"
                >
                  <WhatsAppIcon size="sm" className="text-[#25D366]" />
                  <span>Check Availability</span>
                </a>
              </div>

              <p className="text-[11px] text-charcoal-muted font-light">
                ⚡ Only 65 km from Nagpur · Easy same-day reservation confirmation via WhatsApp.
              </p>
            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}
