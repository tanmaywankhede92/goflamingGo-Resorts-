import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Badge } from '../../../components/common';
import { AUTHENTIC_RESORT } from '../../../data/images';
import { cn } from '../../../utils/cn';

/**
 * AccommodationsShowcase Component — Authentic Rooms & Dormitory Showcase
 * 
 * Features real property photography of Go Flamingo Resort:
 * 1. Deluxe Forest Rooms (real teak bed, split AC, TV, private balcony)
 * 2. Super Deluxe Cottages (arched verandah, premium comfort)
 * 3. Group Wilderness Dormitory (clean individual beds, air-conditioned, dedicated group facility)
 */
export default function AccommodationsShowcase() {
  const [activeTab, setActiveTab] = useState('deluxe');

  const photos = AUTHENTIC_RESORT.photos;

  const categories = {
    'deluxe': {
      id: 'deluxe',
      label: 'Deluxe Rooms',
      title: 'Deluxe Air-Conditioned Rooms',
      subtitle: 'Spacious rooms with solid teak king bed, daybed, split AC, TV, and private balcony sit-out.',
      photo: photos.deluxeBedroom,
      link: '/rooms',
      badge: 'Couples & Small Families',
      specs: [
        { label: 'Bed Type', value: 'Teak King Bed + Daybed Alcove' },
        { label: 'Climate', value: 'Individual Split Air-Conditioning' },
        { label: 'Entertainment', value: 'Flat Screen TV with Wooden Console' },
        { label: 'Outdoor Living', value: 'Sliding Glass Door to Private Balcony' },
      ],
      description: 'Our authentic Deluxe Rooms feature rich wood furnishings, clean linens, and warm ambient lighting. A full-height glass door opens onto your private balcony overlooking green trees and the courtyard, offering an unhurried perch for morning coffee before your safari.',
      features: ['Split Air-Conditioning', 'Flat Screen TV', 'Private Balcony', 'En-suite Bath with 24/7 Hot Water', 'Pool Access'],
    },
    'super-deluxe': {
      id: 'super-deluxe',
      label: 'Super Deluxe Rooms',
      title: 'Super Deluxe Garden Rooms',
      subtitle: 'Expanded private rooms with enhanced spatial volume, haveli arched views and garden access.',
      photo: photos.sunlitVerandah,
      link: '/rooms/luxury-cottage',
      badge: 'Premium Leisure',
      specs: [
        { label: 'Bed Type', value: 'Handcrafted King Bed + Seating Area' },
        { label: 'Architecture', value: 'Haveli-Style Arch Verandah Outlook' },
        { label: 'Bathroom', value: 'Spacious Modern En-suite with Hot Water' },
        { label: 'Verandah', value: 'Direct Corridor Access to Central Lawns' },
      ],
      description: 'Designed for extra roominess and quietude, our Super Deluxe accommodations combine traditional arched verandah perspectives with modern amenities. Step directly out into the shaded walkway and central gardens.',
      features: ['Dual Climate Control', 'Expansive Living Space', 'Garden Verandah Walkway', 'Safari Dawn Tea Service', 'Campfire Proximity'],
    },
    'dormitory': {
      id: 'dormitory',
      label: 'Group Dormitory',
      title: 'Group Wilderness Dormitory',
      subtitle: 'A dedicated air-conditioned multi-bed dormitory built for wildlife groups, student camps & family gatherings.',
      photo: photos.dormitoryRoom,
      link: '/rooms',
      badge: '1 Dedicated Group Facility',
      specs: [
        { label: 'Bed Setup', value: 'Multiple Comfortable Individual Beds' },
        { label: 'Climate', value: 'High-Capacity Split Air-Conditioning' },
        { label: 'Facilities', value: 'Clean Linens, Folded Blankets & Power Outlets' },
        { label: 'Campus Access', value: 'Direct Access to Lawns, Pool & Dining Hall' },
      ],
      description: 'Our dedicated group dormitory is fully equipped with comfortable individual beds, crisp linens, and split air-conditioning. It provides an economical, clean, and sociable stay for birdwatching groups, photography clubs, school trips, and large family conclaves visiting Pench.',
      features: ['Full Air-Conditioning', 'Multiple Washrooms', 'Personal Bedding & Storage', 'Group Safari Coordination', 'Budget Friendly'],
    },
  };

  const current = categories[activeTab];

  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-ivory text-charcoal border-b border-sand/30 overflow-hidden">
      <Container size="xl">
        
        {/* ========================================================
            SECTION HEADER & CATEGORY SWITCHER TABS
            ======================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 sm:mb-16">
          <div className="max-w-2xl space-y-2.5">
            <div className="flex items-center gap-2.5 text-[11px] uppercase tracking-[0.14em] text-gold-dark font-semibold">
              <span className="w-5 h-px bg-gold-dark/40" />
              <span>Accommodations Portfolio</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal leading-snug text-forest-deep text-balance">
              Guest Rooms Designed for Rest Between Safaris
            </h2>

            <p className="font-sans text-xs sm:text-sm md:text-base text-charcoal-muted font-light leading-relaxed">
              With 20 private guest rooms and 1 dedicated group dormitory, our air-conditioned accommodations offer solid teak furnishings, clean linens, and quiet garden outlooks.
            </p>
          </div>

          {/* Interactive Room Tabs */}
          <div className="flex items-center gap-2 p-1.5 rounded-[4px] bg-ivory-warm/60 border border-sand/40 self-start lg:self-auto overflow-x-auto max-w-full">
            {Object.values(categories).map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveTab(cat.id)}
                  className={cn(
                    'px-4 sm:px-6 py-2.5 rounded-[3px] text-xs uppercase tracking-[0.14em] font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold',
                    isActive
                      ? 'bg-forest-deep text-ivory shadow-md ring-1 ring-gold/40'
                      : 'text-charcoal-muted hover:text-forest-deep hover:bg-ivory'
                  )}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            ACTIVE CATEGORY SHOWCASE (LARGE EDITORIAL SPREAD)
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Visual Showcase (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-[16/11] sm:aspect-[16/10] overflow-hidden rounded-[3px] bg-forest-dark border border-sand/35 shadow-xl group">
              <img
                key={current.photo.src}
                src={current.photo.src}
                srcSet={current.photo.srcSet}
                sizes={current.photo.sizes}
                width={current.photo.width}
                height={current.photo.height}
                alt={current.photo.alt}
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-104"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/85 via-transparent to-transparent opacity-65 pointer-events-none" />

              {/* In-Image Category Badge */}
              <div className="absolute top-4 left-4 sm:top-5 sm:left-5">
                <Badge variant="gold" size="sm" className="tracking-wider uppercase font-semibold">
                  {current.badge}
                </Badge>
              </div>

              {/* Bottom In-Image Title */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 text-ivory">
                <h3 className="font-serif text-xl sm:text-2xl font-semibold mb-1">
                  {current.title}
                </h3>
                <p className="text-xs text-sand-light font-light max-w-lg leading-relaxed">
                  {current.subtitle}
                </p>
              </div>
            </div>

            {/* Thumbnail pair strip */}
            <div className="grid grid-cols-3 gap-3 text-xs text-charcoal-muted font-light">
              <div className="p-3 rounded-[2px] bg-ivory-warm/40 border border-sand/30">
                <span className="block text-[10px] uppercase tracking-wider font-semibold text-forest-deep mb-0.5">
                  Climate Control
                </span>
                <span>Individual Split AC in every room</span>
              </div>
              <div className="p-3 rounded-[2px] bg-ivory-warm/40 border border-sand/30">
                <span className="block text-[10px] uppercase tracking-wider font-semibold text-forest-deep mb-0.5">
                  Safari Dawn Tea
                </span>
                <span>Freshly brewed pre-safari service</span>
              </div>
              <div className="p-3 rounded-[2px] bg-ivory-warm/40 border border-sand/30">
                <span className="block text-[10px] uppercase tracking-wider font-semibold text-forest-deep mb-0.5">
                  Pool & Grounds
                </span>
                <span>Full access included with every booking</span>
              </div>
            </div>
          </div>

          {/* Narrative & Specifications (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="space-y-3">
              <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-semibold block">
                Real Property Inventory
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-forest-deep font-semibold">
                {current.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-charcoal/85 font-light leading-relaxed">
                {current.description}
              </p>
            </div>

            {/* Verified Specifications Table */}
            <div className="space-y-3 pt-3 border-t border-sand/30">
              <span className="text-[10px] uppercase tracking-[0.2em] text-charcoal-muted font-semibold block mb-2">
                Room Highlights & Furnishings
              </span>
              <div className="grid grid-cols-1 gap-2.5">
                {current.specs.map((spec, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-[2px] bg-ivory-warm/50 border border-sand/30 flex items-start justify-between gap-3 text-xs"
                  >
                    <span className="text-charcoal-muted font-medium shrink-0 uppercase tracking-wider text-[10px]">
                      {spec.label}
                    </span>
                    <span className="font-serif font-semibold text-forest-deep text-right">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {current.features.map((feat, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-[2px] bg-sand/20 border border-sand/35 text-[11px] text-forest-deep font-medium"
                >
                  ✓ {feat}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                as={Link}
                to={current.link}
                variant="primary"
                size="md"
                className="font-semibold tracking-wider"
              >
                View Room Gallery →
              </Button>
              <Button
                as={Link}
                to="/book"
                variant="gold"
                size="md"
                className="font-bold tracking-wider"
              >
                Check Availability & Book
              </Button>
            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}
