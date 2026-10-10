import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Badge } from '../../../components/common';
import { IMAGES } from '../../../data/images';
import { cn } from '../../../utils/cn';

/**
 * AccommodationsShowcase Component
 * 
 * Showcases the authentic accommodation inventory of Go Flamingo Resort:
 * 1. Deluxe Rooms
 * 2. Super Deluxe Rooms / Luxury Forest Cottages
 * 3. Group Dormitory (1 dedicated dormitory for groups)
 * 
 * Features an interactive visual lookbook with authentic imagery, verified specifications,
 * and direct links to the existing `/rooms` pages.
 */
export default function AccommodationsShowcase() {
  const [activeTab, setActiveTab] = useState('super-deluxe');

  const categories = {
    'deluxe': {
      id: 'deluxe',
      label: 'Deluxe Rooms',
      title: 'Deluxe Forest Rooms',
      subtitle: 'Comfortable air-conditioned rooms nestled under the trees with private verandah sit-outs.',
      image: IMAGES.rooms.cottage,
      alt: 'Deluxe Room bedroom with king bed and verandah view at Go Flamingo Resort',
      link: '/rooms',
      badge: 'Couples & Small Families',
      specs: [
        { label: 'Bed Type', value: 'Plush King Bed' },
        { label: 'Climate', value: 'Individual Split Air-Conditioning' },
        { label: 'Bathroom', value: 'En-suite Stone Bath with 24/7 Hot Water' },
        { label: 'Outdoors', value: 'Private Verandah Sit-Out facing Greenery' },
      ],
      description: 'Our Deluxe Rooms offer unhurried comfort in the heart of nature. Thoughtfully furnished with natural wood and clean linens, each room opens out to an inviting verandah where morning birdsong provides a peaceful start to your day.',
      features: ['Air Conditioning', 'En-suite Bathroom', 'Private Verandah', 'Safari Wake-up Tea', 'Pool Access'],
    },
    'super-deluxe': {
      id: 'super-deluxe',
      label: 'Super Deluxe Rooms',
      title: 'Super Deluxe Cottages',
      subtitle: 'Standalone forest sanctuaries featuring vaulted timber ceilings and expansive verandahs facing the teak canopy.',
      image: IMAGES.rooms.hero,
      secondaryImage: IMAGES.rooms.suite,
      alt: 'Standalone Super Deluxe Cottages beneath the teak trees at Go Flamingo Resort',
      link: '/rooms/luxury-cottage',
      badge: 'Standalone Cottages',
      specs: [
        { label: 'Bed Type', value: 'Handcrafted King Bed + Daybed Alcove' },
        { label: 'Architecture', value: 'Standalone Sandstone & Timber Cottage' },
        { label: 'Bathroom', value: 'Artisanal River-Stone En-suite with Rain Shower' },
        { label: 'Verandah', value: 'Extended Teakwood Sit-out into Forest Canopy' },
      ],
      description: 'Designed to let the wild outdoors in, our Super Deluxe Cottages feature generous spatial volume, high rustic rafters, and full-length glass doors. Savor undisturbed privacy, pristine forest views, and restorative quietude.',
      features: ['Standalone Privacy', 'Dual Climate Control', 'Rainfall Stone Shower', 'Extended Verandah', 'Garden Lawn Access'],
    },
    'dormitory': {
      id: 'dormitory',
      label: 'Group Dormitory',
      title: 'The Group Wilderness Dormitory',
      subtitle: 'A dedicated multi-bed air-conditioned dormitory built for wildlife groups, photographers & family conclaves.',
      image: IMAGES.rooms.verandah,
      alt: 'Peaceful garden grounds and group accommodation veranda at Go Flamingo Resort',
      link: '/rooms',
      badge: '1 Dedicated Group Facility',
      specs: [
        { label: 'Arrangement', value: 'Multiple Comfortable Individual Beds' },
        { label: 'Climate', value: 'High-Capacity Split Air-Conditioning' },
        { label: 'Facilities', value: 'Dedicated Multiple Bathrooms & Storage' },
        { label: 'Setting', value: 'Direct Access to Main Lawns & Pool' },
      ],
      description: 'A dedicated sanctuary for group travelers, wildlife photographic tours, student nature clubs, and large family reunions. Offers comfortable shared camaraderie while maintaining resort quality, cleanliness, and security.',
      features: ['Group Air-Conditioning', 'Multiple Washrooms', 'Secure Luggage Benches', 'Safari Liaison', 'Campfire Proximity'],
    },
  };

  const current = categories[activeTab];

  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-ivory text-charcoal border-b border-sand/30 overflow-hidden">
      <Container size="xl">
        
        {/* ========================================================
            SECTION HEADER & CATEGORY SWITCHER TABS
            ======================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 sm:mb-18">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-gold-dark font-semibold">
              <span className="w-6 h-px bg-gold-dark/40" />
              <span>Accommodations Portfolio</span>
            </div>

            <h2 className="font-serif text-[clamp(2rem,4.5vw,3.75rem)] font-normal leading-[1.1] tracking-[-0.015em] text-forest-deep text-balance">
              Rest deeply. <br />
              <span className="italic font-normal text-gold-dark">Wake to the wild.</span>
            </h2>

            <p className="font-sans text-xs sm:text-sm md:text-base text-charcoal-muted font-light leading-relaxed">
              Total property inventory: <strong>20 private guest rooms and 1 dedicated group dormitory</strong> crafted beneath the mature shade of Sillari’s teak forest.
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
                key={current.image}
                src={current.image}
                alt={current.alt}
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
                  Private Sit-out
                </span>
                <span>Direct tree canopy views</span>
              </div>
              <div className="p-3 rounded-[2px] bg-ivory-warm/40 border border-sand/30">
                <span className="block text-[10px] uppercase tracking-wider font-semibold text-forest-deep mb-0.5">
                  Safari Dawn Tea
                </span>
                <span>Complimentary pre-safari service</span>
              </div>
              <div className="p-3 rounded-[2px] bg-ivory-warm/40 border border-sand/30">
                <span className="block text-[10px] uppercase tracking-wider font-semibold text-forest-deep mb-0.5">
                  Pool & Grounds
                </span>
                <span>Full access included with stay</span>
              </div>
            </div>
          </div>

          {/* Narrative & Specifications (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="space-y-3">
              <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-semibold block">
                Category Overview
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
                View Full Room Details →
              </Button>
              <Button
                as={Link}
                to="/book"
                variant="gold"
                size="md"
                className="font-bold tracking-wider"
              >
                Book This Room
              </Button>
            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}
