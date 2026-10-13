import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Container } from '../../../components/common';
import { RESORT_DRIVE_PHOTOS } from '../../../data/images';

/**
 * AmenitiesInteractive Component (Section 4 — Resort Experiences & Amenities)
 * 
 * Showcases all 6 core property experiences requested with authentic photography:
 * 1. Swimming Pool (Adult + Kid splash pool)
 * 2. Rain Dance (Outdoor platform with mist showers & sound setup)
 * 3. Restaurant and Bar (Grand chandelier dining hall & Vidarbha cuisine)
 * 4. Landscaped Garden (Illuminated haveli courtyard & open lawns)
 * 5. Kids' Play Area (Slides, swings, see-saws in shaded bamboo grove)
 * 6. Game Zone & Club Lounge (Table tennis, full-size billiards & lounge)
 */
export default function AmenitiesInteractive() {
  const amenitiesList = [
    {
      id: 'pool',
      title: 'Swimming Pool',
      tag: 'Outdoor Pool',
      desc: 'Crystal-clear turquoise outdoor pool with an adjoining shallow kids splash zone and teak sun loungers, framed by forest canopy.',
      feature: 'Adult Pool & Kids Splash Zone',
      photo: RESORT_DRIVE_PHOTOS?.pool?.src || '/assets/resort_drive/swimming_pool_enhanced.jpg',
      alt: RESORT_DRIVE_PHOTOS?.pool?.alt || 'Swimming Pool at Go Flamingo Resort',
      link: '/resort/pool',
    },
    {
      id: 'rain-dance',
      title: 'Rain Dance Arena',
      tag: 'Rain Dance Arena',
      desc: 'Dedicated open-air rain dance platform with overhead mist showers and high-fidelity sound system for lively group celebrations.',
      feature: 'Overhead Showers & Music Setup',
      photo: RESORT_DRIVE_PHOTOS?.rainDance?.src || '/assets/resort_drive/rain_dance_enhanced.jpg',
      alt: RESORT_DRIVE_PHOTOS?.rainDance?.alt || 'Rain Dance Platform at Go Flamingo Resort',
      link: '/resort/facilities',
    },
    {
      id: 'restaurant-bar',
      title: 'Restaurant & Bar',
      tag: 'Restaurant & Bar',
      desc: 'Grand air-conditioned dining hall featuring crystal chandeliers, booth seating, authentic Vidarbha specialties, and cocktail bar.',
      feature: 'Regional Vidarbha & Multi-Cuisine',
      photo: RESORT_DRIVE_PHOTOS?.restaurantBar?.src || '/assets/images/resort-authentic/restaurant-bar-hall.webp',
      alt: RESORT_DRIVE_PHOTOS?.restaurantBar?.alt || 'Restaurant & Bar Dining Hall',
      link: '/dining',
    },
    {
      id: 'garden',
      title: 'Landscaped Garden',
      tag: 'Courtyard & Lawns',
      desc: 'Expansive haveli courtyard with sculpted pitcher water fountain, scalloped arches, and manicured lawns under open skies.',
      feature: 'Manicured Lawns & Starlit Bonfires',
      photo: RESORT_DRIVE_PHOTOS?.landscapedGarden?.src || '/assets/images/resort-authentic/arched-corridor-fountain.webp',
      alt: RESORT_DRIVE_PHOTOS?.landscapedGarden?.alt || 'Landscaped Garden Courtyard',
      link: '/resort/facilities',
    },
    {
      id: 'kids-play',
      title: "Kids' Play Area",
      tag: "Kids' Play Area",
      desc: 'Lush outdoor playground shaded by bamboo groves, equipped with swings, slides, see-saws, and play bridges for young adventurers.',
      feature: 'Swings, Slides, See-Saws & Play Zones',
      photo: RESORT_DRIVE_PHOTOS?.kidsPlayArea?.src || '/assets/resort_drive/kids_play_area_enhanced.jpg',
      alt: RESORT_DRIVE_PHOTOS?.kidsPlayArea?.alt || "Kids' Play Area",
      link: '/resort/facilities',
    },
    {
      id: 'game-zone',
      title: 'Game Zone & Club Lounge',
      tag: 'Indoor Recreation',
      desc: 'Spacious recreation hall with tournament table tennis, full-size billiards table, carrom board, and lounge seating under jharokha arches.',
      feature: 'Billiards, Table Tennis & Lounges',
      photo: RESORT_DRIVE_PHOTOS?.gameZone?.src || '/assets/resort_drive/IMG-20261003-WA0013.jpg',
      alt: RESORT_DRIVE_PHOTOS?.gameZone?.alt || 'Game Zone & Club Lounge',
      link: '/resort/facilities',
    },
  ];

  return (
    <section className="relative py-14 sm:py-20 lg:py-24 bg-ivory-pure text-charcoal border-b border-stone-200/70 overflow-hidden">
      
      {/* Background ambient accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#163824]/5 rounded-full blur-3xl pointer-events-none" />

      <Container size="xl" className="relative z-10">
        
        {/* ========================================================
            SECTION HEADER
            ======================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10 sm:mb-12">
          <div className="max-w-2xl space-y-2.5">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#163824] text-[#E8D7B8] text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-medium border border-[#C5A880]/30 shadow-xs">
              Resort Experiences & Amenities
            </div>
            
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#163824] leading-tight text-balance">
              Spaces to Swim, Feast, Play & Celebrate.
            </h2>
            
            <p className="font-sans text-xs sm:text-sm text-stone-600 font-light leading-relaxed max-w-xl">
              Thoughtfully curated recreation for safari mornings, sun-drenched afternoons, and celebratory family evenings within our peaceful haveli sanctuary.
            </p>
          </div>

          <Link
            to="/resort/facilities"
            className="group inline-flex items-center gap-2 pl-4 pr-1.5 py-2 sm:pl-5 sm:pr-2 sm:py-2.5 rounded-full bg-[#163824] hover:bg-[#0E2A1B] text-white text-[11px] sm:text-xs uppercase tracking-[0.14em] font-semibold transition-all duration-300 shadow-sm hover:shadow-md self-start md:self-auto shrink-0 cursor-pointer"
          >
            <span>Explore All Facilities</span>
            <span className="w-5.5 h-5.5 sm:w-6 sm:h-6 rounded-full bg-[#C5A880] text-[#0E2A1B] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 shrink-0 shadow-inner">
              <ArrowRight className="w-3 h-3 text-[#0E2A1B]" />
            </span>
          </Link>
        </div>

        {/* ========================================================
            6-CARD AUTHENTIC EXPERIENCES GRID
            ======================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {amenitiesList.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden bg-stone-900 border border-[#C5A880]/20 shadow-md h-[340px] sm:h-[370px] flex flex-col justify-end transition-all duration-300 hover:shadow-2xl hover:border-[#C5A880]/50 hover:-translate-y-1"
            >
              {/* Authentic Photo */}
              <div className="absolute inset-0 z-0">
                <img
                  src={item.photo}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Visual Scrims */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 via-50% to-black/15 pointer-events-none" />
              </div>

              {/* Refined Luxury Floating Badge (NO DOTS, Frosted Black Glass & Gold Border) */}
              <div className="absolute top-3.5 left-3.5 z-10">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-medium tracking-[0.16em] uppercase text-[#E8D7B8] bg-black/60 backdrop-blur-md border border-[#C5A880]/35 shadow-xs">
                  {item.tag}
                </span>
              </div>

              {/* Bottom Content Card Info */}
              <div className="relative z-10 p-5 text-ivory space-y-2">
                <h3 className="font-serif text-lg sm:text-xl font-normal leading-snug text-white group-hover:text-[#E8D7B8] transition-colors">
                  {item.title}
                </h3>
                
                <p className="font-sans text-xs text-sand-light/85 font-light leading-relaxed line-clamp-2">
                  {item.desc}
                </p>

                {/* Feature Pill */}
                <div className="pt-2 flex items-center justify-between border-t border-white/15">
                  <span className="text-[10px] text-[#C5A880] font-medium tracking-wider uppercase">
                    {item.feature}
                  </span>
                  
                  <Link
                    to={item.link}
                    className="group/link text-[11px] text-[#E8D7B8] hover:text-white font-medium inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3 h-3 text-[#C5A880] transition-transform duration-300 group-hover/link:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
