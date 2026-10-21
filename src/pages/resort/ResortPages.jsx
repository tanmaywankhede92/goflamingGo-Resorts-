import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import PlaceholderPage from '../../components/common/PlaceholderPage';
import { Container, WhatsAppIcon } from '../../components/common';
import { IMAGES, AUTHENTIC_RESORT } from '../../data/images';
import { RESORT_AMENITIES } from '../rooms/RoomsPages';
import { QUICK_CONTACT } from '../../data/navigation';
import { getWhatsAppTarget } from '../../utils/whatsapp';
import ClosingCallToAction from '../home/components/ClosingCallToAction';

const RESORT_ROUTES = [
  { label: 'Resort Overview', path: '/resort' },
  { label: 'About Go Flamingo', path: '/resort/about' },
  { label: 'Facilities & Lawns', path: '/resort/facilities' },
  { label: 'Forest Pool', path: '/resort/pool' },
  { label: 'Regional Dining', path: '/resort/dining' },
];

export function ResortOverview() {
  return (
    <PlaceholderPage
      title="The Resort at Sillari Gate"
      eyebrow="Pench Wildlife Retreat"
      subtitle="Designed to harmonise with the surrounding teak woodlands, Go Flamingo Resort offers a peaceful wilderness haven with warm Indian hospitality, expansive green lawns, and restorative amenities."
      heroVariant="large"
      heroImage={IMAGES.resort.exterior}
      breadcrumbs={[{ label: 'Resort' }]}
      badge="Threshold of Pench"
      highlights={[
        { title: 'Prime Sillari Location', desc: 'Situated minutes from Sillari Gate, the primary entrance to Pench Tiger Reserve on the Maharashtra/MP border.' },
        { title: 'Forest-Framed Architecture', desc: 'Low-impact stone and timber structures designed to respect the natural topography and tree canopy.' },
        { title: 'Restful Forest Pool', desc: 'Natural stone swimming pool surrounded by native flora and sun decks for afternoon relaxation.' },
        { title: 'Authentic Care', desc: 'Courteous Indian hospitality attentive to families, safari-goers, and nature lovers.' },
      ]}
      relatedRoutes={RESORT_ROUTES}
    />
  );
}

export function ResortAbout() {
  return (
    <PlaceholderPage
      title="About Go Flamingo Resort"
      eyebrow="Our Story & Vision"
      subtitle="Founded on a love for Pench’s wilderness, Go Flamingo Resort was conceived as a sanctuary where travelers can slow down, connect with the forest, and experience genuine Indian warmth."
      heroVariant="split"
      heroImage={IMAGES.resort.pathway}
      breadcrumbs={[{ label: 'Resort', to: '/resort' }, { label: 'About' }]}
      badge="The Vision"
      highlights={[
        { title: 'Living in Harmony', desc: 'Retaining existing teak and sal trees while crafting comfortable resort cottages.' },
        { title: 'Local Community Care', desc: 'Employing local staff from surrounding villages to deliver heartfelt regional hospitality.' },
        { title: 'Destination Focus', desc: 'Dedicated to helping guests make the most of Pench through guided safaris and naturalist expertise.' },
      ]}
      relatedRoutes={RESORT_ROUTES}
    />
  );
}

export function ResortFacilities() {
  const [activeFilter, setActiveFilter] = React.useState('all');

  const filteredAmenities = activeFilter === 'all'
    ? RESORT_AMENITIES
    : RESORT_AMENITIES.filter((a) => a.id === activeFilter);

  return (
    <div className="w-full bg-[#FAF6F1] text-charcoal font-sans selection:bg-[#C5A880]/30 selection:text-[#0E2718]">
      {/* 1. CINEMATIC LUXURY HERO BANNER */}
      <section className="relative w-full min-h-[500px] sm:min-h-[560px] lg:min-h-[600px] flex flex-col justify-end bg-forest-dark text-ivory overflow-hidden">
        {/* Full-Bleed Authentic Resort Pool & Grounds Photo */}
        <div className="absolute inset-0 z-0">
          <img
            src={AUTHENTIC_RESORT.videos.pool.poster}
            alt="Go Flamingo Resort turquoise outdoor pool, teak trees and haveli leisure facilities"
            fetchPriority="high"
            className="w-full h-full object-cover object-[center_top] sm:object-center filter brightness-[0.96] contrast-[1.03]"
          />
          {/* Tailored architectural gradient scrims */}
          <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-deep/60 to-forest-dark/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/90 via-forest-dark/40 to-transparent sm:block hidden" />
        </div>

        <Container size="xl" className="relative z-10 w-full pt-28 sm:pt-36 md:pt-40 pb-12 sm:pb-16 px-5 sm:px-8 md:px-12 lg:px-16">
          <div className="max-w-3xl space-y-3 sm:space-y-4">
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] text-ivory text-balance">
              Resort Amenities, Lawns & Recreation
            </h1>

            <p className="font-sans text-xs sm:text-base md:text-lg text-sand-light/95 font-light leading-relaxed max-w-2xl">
              Complete on-site leisure at Go Flamingo Resort — crystal outdoor pool, rain dance arena, chandelier restaurant, landscaped haveli lawns, kids play park, indoor games, and executive meeting room.
            </p>

            {/* Clean Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <button
                type="button"
                onClick={() => document.getElementById('amenities-grid-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#DFBF8E] hover:bg-[#E8CA9E] text-[#0E2718] text-xs font-semibold uppercase tracking-[0.14em] shadow-lg transition-all duration-300 cursor-pointer text-center"
              >
                <span>Explore All Facilities ↓</span>
              </button>

              <Link
                to="/contact?book=true#reservation-form-card"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/30 text-xs font-medium uppercase tracking-[0.14em] backdrop-blur-sm transition-all duration-300 shadow-sm text-center"
              >
                <span>Reserve Your Stay</span>
              </Link>

              <a
                href={`${QUICK_CONTACT.whatsappUrl}?text=${encodeURIComponent('Hello Go Flamingo Resort, I would like to inquire about resort amenities, swimming pool, and day visit packages at Sillari Gate.')}`}
                target={getWhatsAppTarget()}
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-[#25D366]/40 text-xs font-medium uppercase tracking-[0.14em] backdrop-blur-sm transition-all duration-300 shadow-sm text-center"
              >
                <WhatsAppIcon size="sm" className="text-[#25D366] shrink-0" />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. AMENITIES SHOWCASE GRID */}
      <section className="py-14 sm:py-20 lg:py-24">
        <Container size="xl">
          {/* Section Header with Quick Filter Tabs */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#8A6836] font-bold block mb-1.5">
                The Complete On-Site Experience
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl text-[#0E2718] font-normal">
                Resort Facilities & Activities
              </h2>
            </div>

            {/* Quick Segmented Filter */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <button
                type="button"
                onClick={() => setActiveFilter('all')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeFilter === 'all'
                    ? 'bg-[#0E2718] text-[#DFBF8E] shadow-sm'
                    : 'bg-stone-200/80 text-charcoal/80 hover:bg-stone-300'
                }`}
              >
                All Facilities (7)
              </button>
              {RESORT_AMENITIES.map((am) => (
                <button
                  key={am.id}
                  type="button"
                  onClick={() => setActiveFilter(am.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    activeFilter === am.id
                      ? 'bg-[#0E2718] text-[#DFBF8E] shadow-sm'
                      : 'bg-stone-200/80 text-charcoal/80 hover:bg-stone-300'
                  }`}
                >
                  {am.title.split('&')[0].trim()}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {filteredAmenities.map((amenity) => {
              const IconComponent = amenity.icon;

              return (
                <div
                  key={amenity.id}
                  className="group bg-gradient-to-b from-[#EDE5DA] via-[#F4EEE6] to-[#E9DFD2] border-2 border-[#C5A880]/40 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-[#C5A880] transition-all duration-300 shadow-xl hover:-translate-y-1"
                >
                  {/* Photo */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-black/20">
                    <img
                      src={amenity.photo}
                      alt={amenity.alt}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E2718]/70 via-black/15 to-black/30 pointer-events-none" />
                    
                    <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-2">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.16em] font-semibold text-white bg-black/75 backdrop-blur-md border border-white/20 shadow-md">
                        {amenity.tag}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4 text-charcoal bg-gradient-to-b from-[#EFE8DE] via-[#F6F1EA] to-[#EAE0D4] shadow-[inset_0_8px_20px_-4px_rgba(14,39,24,0.18),inset_0_-8px_20px_-6px_rgba(14,39,24,0.12)]">
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-2">
                        <span className="w-7 h-7 rounded-full bg-[#163824]/12 text-[#163824] flex items-center justify-center shrink-0">
                          <IconComponent className="w-3.5 h-3.5 text-[#163824]" />
                        </span>
                        <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[#8A6836] font-bold">
                          {amenity.category}
                        </span>
                      </div>

                      <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#0E2718] group-hover:text-[#18482C] transition-colors leading-snug">
                        {amenity.title}
                      </h3>

                      <p className="font-sans text-xs sm:text-[13px] text-charcoal/85 font-light leading-relaxed">
                        {amenity.desc}
                      </p>

                      {amenity.activities && (
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {amenity.activities.map((act, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-0.5 rounded-md bg-[#163824]/10 text-[#0E2718] text-[10.5px] font-semibold"
                            >
                              • {act}
                            </span>
                          ))}
                        </div>
                      )}

                      <ul className="space-y-2 pt-3 border-t border-[#163824]/15">
                        {amenity.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs text-charcoal/90 font-normal leading-snug">
                            <span className="w-4 h-4 rounded-full bg-[#163824]/12 text-[#163824] flex items-center justify-center shrink-0 mt-0.5 shadow-inner">
                              <Check className="w-2.5 h-2.5 text-[#163824]" />
                            </span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-[#163824]/15 flex items-center justify-between">
                      <a
                        href={`${QUICK_CONTACT.whatsappUrl}?text=${encodeURIComponent(`Hello Go Flamingo Resort, I would like to inquire about the ${amenity.title} facility.`)}`}
                        target={getWhatsAppTarget()}
                        rel="noopener noreferrer"
                        className="group/btn inline-flex items-center gap-2 pl-4 pr-1.5 py-2 sm:pl-5 sm:pr-2 sm:py-2.5 rounded-full bg-[#0E2718] hover:bg-[#163824] text-white text-[11px] sm:text-xs uppercase tracking-[0.12em] font-bold transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap"
                      >
                        <span>Enquire on WhatsApp</span>
                        <span className="w-5.5 h-5.5 sm:w-6 sm:h-6 rounded-full bg-[#C5A880] text-[#0E2718] flex items-center justify-center transition-transform duration-300 group-hover/btn:translate-x-0.5 shrink-0 shadow-inner">
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#0E2718]" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 3. CLOSING CTA */}
      <ClosingCallToAction
        eyebrow="Direct Leisure Reservations · Sillari Gate"
        title="Experience Go Flamingo Resort Pench"
        description="Swimming pool, rain dance, banquet dining, outdoor haveli courtyards, and direct 5-minute access to Sillari Safari Gate."
        primaryBtnLabel="Book Your Stay Online"
        whatsappLabel="Inquire on WhatsApp"
        whatsappMsg="Hello Go Flamingo Resort, I would like to inquire about room availability and resort amenities."
      />
    </div>
  );
}

export function ResortPool() {
  return (
    <PlaceholderPage
      title="The Forest Swimming Pool"
      eyebrow="Rest & Rejuvenate"
      subtitle="Unwind after a dusty morning safari in our serene swimming pool, surrounded by tall trees, comfortable loungers, and birdsong."
      heroVariant="large"
      heroImage={IMAGES.resort.pool}
      breadcrumbs={[{ label: 'Resort', to: '/resort' }, { label: 'Pool' }]}
      badge="Cool Sanctuary"
      highlights={[
        { title: 'Natural Stone Setting', desc: 'Thoughtfully integrated into the garden landscape with native trees.' },
        { title: 'Family Friendly', desc: 'Safe depths for children and relaxing sun decks for adults.' },
        { title: 'Poolside Refreshments', desc: 'Fresh local juices, iced teas, and light snacks served pool-side.' },
      ]}
      relatedRoutes={RESORT_ROUTES}
    />
  );
}

export function ResortDining() {
  return (
    <PlaceholderPage
      title="Regional & Indian Dining"
      eyebrow="Flavors of Central India"
      subtitle="Savor fresh, homestyle Indian culinary traditions alongside classic comfort foods, prepared with fresh local produce and warm hospitality."
      heroVariant="split"
      heroImage={IMAGES.dining.indianFood}
      breadcrumbs={[{ label: 'Resort', to: '/resort' }, { label: 'Dining' }]}
      badge="Forest Kitchen"
      highlights={[
        { title: 'Regional Specialities', desc: 'Authentic Maharashtrian & MP frontier recipes cooked to perfection.' },
        { title: 'Safari Packed Breakfasts', desc: 'Freshly packed morning boxes prepared before early 5:30 AM safari departures.' },
        { title: 'Starlit Dinners', desc: 'Outdoor dining experiences arranged under the forest canopy.' },
      ]}
      relatedRoutes={RESORT_ROUTES}
    />
  );
}
