import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Badge } from '../../../components/common';
import { IMAGES } from '../../../data/images';
import { cn } from '../../../utils/cn';

/**
 * AmenitiesInteractive Component
 * 
 * Immersive showcase of Go Flamingo Resort's verified facilities:
 * 1. Swimming Pool
 * 2. Rain Dance
 * 3. Restaurant & Bar
 * 4. Landscaped Garden & Open Lawns
 * 5. Kids' Play Area
 * 6. Game Zone (table tennis, snooker, carrom, chess, badminton)
 * 7. Conference Room
 * 
 * Uses an asymmetrical editorial stage with interactive switching rather than
 * repetitive icon cards.
 */
export default function AmenitiesInteractive() {
  const [activeIndex, setActiveIndex] = useState(0);

  const amenities = [
    {
      id: 'pool',
      number: '01',
      title: 'Natural Stone Swimming Pool',
      category: 'Water & Relaxation',
      image: IMAGES.resort.pool,
      alt: 'Natural stone swimming pool surrounded by teak trees at Go Flamingo Resort',
      link: '/resort/pool',
      linkLabel: 'Explore Pool & Loungers →',
      lead: 'A cool, restorative forest oasis for unhurried afternoons.',
      body: 'Surrounded by the natural shade of teak branches and birdsong, our central swimming pool provides deep relaxation after dusty morning Gypsy safaris across Pench.',
      highlights: ['Teak Canopy Shade', 'Sun Loungers & Umbrellas', 'Clear Natural Water', 'Post-Safari Afternoon Access'],
    },
    {
      id: 'raindance',
      number: '02',
      title: 'Rain Dance & Mist Installation',
      category: 'Celebration & Joy',
      image: IMAGES.home.family,
      alt: 'Family and group outdoor celebration at Go Flamingo Resort',
      link: '/resort/facilities',
      linkLabel: 'View Resort Facilities →',
      lead: 'Open-air overhead rainfall mist set against landscaped grass lawns.',
      body: 'A beloved highlight for families, children, and celebration groups. Enjoy cool mist dances under the Central Indian sky accompanied by celebratory music and refreshments.',
      highlights: ['Overhead Rain Sprays', 'Safe Lawn Surfacing', 'Family & Group Friendly', 'Afternoon Sessions'],
    },
    {
      id: 'dining',
      number: '03',
      title: 'Restaurant & Forest Bar',
      category: 'Central Indian Cuisine',
      image: IMAGES.home.dining,
      alt: 'Lantern-lit outdoor dining table under trees at Go Flamingo Resort',
      link: '/dining',
      linkLabel: 'Discover Dining Experience →',
      lead: 'Hearty regional flavors cooked with local Vidarbha spices and care.',
      body: 'From steaming pre-dawn masala chai before your safari to hearty breakfast spreads and lantern-lit al fresco dinners under ancient trees, every meal is celebratory.',
      highlights: ['Central Indian Specialties', 'Al Fresco Lawn Seating', 'Beverage & Bar Lounge', 'Fresh Seasonal Cooking'],
    },
    {
      id: 'gardens',
      number: '04',
      title: 'Landscaped Garden & Open Lawns',
      category: 'Sprawling Outdoors',
      image: IMAGES.rooms.hero,
      alt: 'Manicured green resort lawns and stone cottages under mature trees',
      link: '/resort/facilities',
      linkLabel: 'View Outdoor Lawns →',
      lead: 'Expansive green acreage crafted to protect natural tree canopies.',
      body: 'Stone pathways wind through manicured grass lawns, native flowering shrubs, and heritage teak trees. An open setting for barefoot morning strolls, badminton, and starlit bonfires.',
      highlights: ['Mature Shade Trees', 'Night Lantern Pathways', 'Campfire Gathering Spaces', 'Safe Enclosed Campus'],
    },
    {
      id: 'kids',
      number: '05',
      title: "Kids' Forest Play Area",
      category: 'Family Recreation',
      image: IMAGES.resort.pathway,
      alt: 'Peaceful garden grounds and outdoor pathways for children and families',
      link: '/resort/facilities',
      linkLabel: 'Family Activities →',
      lead: 'Dedicated open-air play zone for young wilderness explorers.',
      body: 'Set upon safe grass lawns under natural shade, our children’s area is equipped with swings and outdoor play equipment so younger guests can play freely and safely.',
      highlights: ['Safe Lawn Grounding', 'Outdoor Swings & Slides', 'Tree Shade Protection', 'Close to Cottages'],
    },
    {
      id: 'games',
      number: '06',
      title: 'Game Zone & Sports Club',
      category: 'Indoor & Lawn Games',
      image: IMAGES.resort.exterior,
      alt: 'Resort recreation facilities and club grounds at Go Flamingo',
      link: '/resort/facilities',
      linkLabel: 'Explore Games →',
      lead: 'Table tennis, snooker, carrom, chess, and outdoor badminton.',
      body: 'Unwind between safari shifts with friendly tournaments. Our recreation space features a full snooker table, table tennis, classic wooden carrom boards, chess, and lawn badminton racquets.',
      highlights: ['Snooker / Billiards Table', 'Table Tennis Board', 'Carrom & Board Chess', 'Outdoor Badminton Court'],
    },
    {
      id: 'conference',
      number: '07',
      title: 'Executive Conference Hall',
      category: 'Corporate & Conclaves',
      image: IMAGES.events.corporate,
      alt: 'Executive meeting and conclave space in nature at Go Flamingo',
      link: '/corporate',
      linkLabel: 'Corporate Enquiries →',
      lead: 'Air-conditioned conference facility for leadership retreats & offsites.',
      body: 'Break away from conventional urban boardrooms. Our dedicated meeting space accommodates corporate strategy sessions, presentations, and group workshops right in the wilderness.',
      highlights: ['Air Conditioned Hall', 'Audio-Visual Integration', 'Custom Seating Layouts', 'Post-Meeting Safari Tours'],
    },
  ];

  const active = amenities[activeIndex];

  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-forest-dark text-ivory border-b border-sand/20 overflow-hidden relative">
      
      {/* Background ambient texture */}
      <div className="absolute inset-0 z-0 opacity-15 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold via-transparent to-transparent pointer-events-none" />

      <Container size="xl" className="relative z-10">
        
        {/* ========================================================
            HEADER
            ======================================================== */}
        <div className="max-w-3xl mb-14 sm:mb-20 space-y-3">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-gold font-semibold">
            <span className="w-6 h-px bg-gold/50" />
            <span>On-Property Amenities</span>
          </div>

          <h2 className="font-serif text-[clamp(2rem,4.5vw,3.75rem)] font-normal leading-[1.1] tracking-[-0.015em] text-ivory text-balance">
            Life within the sanctuary.{' '}
            <br />
            <span className="italic font-normal text-gold-light">
              From dawn swims to starlit bonfires.
            </span>
          </h2>

          <p className="font-sans text-xs sm:text-sm md:text-base text-sand/80 font-light leading-relaxed max-w-2xl">
            A thoughtful balance of wilderness relaxation and active leisure: swimming pool, rain dance, wholesome dining, game zone, and corporate conference facilities.
          </p>
        </div>

        {/* ========================================================
            ASYMMETRIC INTERACTIVE STAGE (7 COLS VISUAL + 5 COLS DIRECTORY)
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Visual Stage (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="relative aspect-[16/10] sm:aspect-[16/10] rounded-[3px] overflow-hidden bg-forest-deep border border-sand/25 shadow-2xl group">
              <img
                key={active.image}
                src={active.image}
                alt={active.alt}
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-104"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-deep/60 to-transparent opacity-75 pointer-events-none" />

              {/* Floating Category Pill */}
              <div className="absolute top-4 left-4 sm:top-5 sm:left-5">
                <Badge variant="gold" size="sm" className="tracking-wider uppercase font-semibold">
                  {active.category}
                </Badge>
              </div>

              {/* Bottom In-Image Details */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 text-ivory space-y-2">
                <span className="text-[10px] uppercase tracking-[0.24em] text-gold block font-semibold">
                  Facility {active.number} of 07
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-ivory font-semibold">
                  {active.title}
                </h3>
                <p className="text-xs sm:text-sm text-sand-light/95 font-light max-w-lg leading-relaxed">
                  {active.lead}
                </p>
              </div>
            </div>

            {/* Narrative & Verified Highlights below image */}
            <div className="p-6 sm:p-7 rounded-[3px] bg-forest-deep/80 border border-sand/20 space-y-4">
              <p className="text-xs sm:text-sm text-sand/85 font-light leading-relaxed">
                {active.body}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-sand/15">
                {active.highlights.map((hl, idx) => (
                  <div key={idx} className="text-[11px] text-sand-light font-medium flex items-center gap-1.5">
                    <span className="text-gold">✦</span>
                    <span>{hl}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex items-center justify-between">
                <Link
                  to={active.link}
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-gold hover:text-gold-light font-semibold transition-colors"
                >
                  {active.linkLabel}
                </Link>
                <span className="text-[10px] uppercase tracking-widest text-sand/60">
                  Confirmed Amenity
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Facility Directory (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-2">
            <span className="text-[10px] uppercase tracking-[0.2em] text-gold/80 font-semibold block mb-2 px-2">
              Select Facility to Inspect
            </span>

            <div className="space-y-2">
              {amenities.map((item, index) => {
                const isSelected = activeIndex === index;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    onMouseEnter={() => setActiveIndex(index)}
                    className={cn(
                      'w-full text-left p-4 sm:p-4.5 rounded-[3px] border transition-all duration-200 cursor-pointer flex items-center justify-between gap-4 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold',
                      isSelected
                        ? 'bg-forest-deep border-gold/70 shadow-md ring-1 ring-gold/30'
                        : 'bg-forest-dark/70 border-sand/15 hover:border-sand/40 hover:bg-forest-deep/40'
                    )}
                  >
                    <div className="flex items-center gap-3.5">
                      <span className={cn(
                        'font-serif text-sm font-semibold transition-colors',
                        isSelected ? 'text-gold' : 'text-sand/50 group-hover:text-sand/80'
                      )}>
                        {item.number}
                      </span>
                      <div>
                        <h4 className={cn(
                          'font-serif text-sm sm:text-base transition-colors font-medium',
                          isSelected ? 'text-ivory font-semibold' : 'text-sand/85 group-hover:text-ivory'
                        )}>
                          {item.title}
                        </h4>
                        <span className="text-[10px] uppercase tracking-wider text-sand/50 block font-light">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    <span className={cn(
                      'text-xs transition-transform duration-200',
                      isSelected ? 'text-gold translate-x-1' : 'text-sand/30 group-hover:text-sand/70'
                    )}>
                      →
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Bottom concierge assurance */}
            <div className="pt-4 px-2 text-[11px] text-sand/65 font-light border-t border-sand/15 flex items-center justify-between">
              <span>All amenities located on resort grounds</span>
              <Link to="/contact" className="text-gold hover:underline">
                Ask Concierge
              </Link>
            </div>
          </div>

        </div>

      </Container>
    </section>
  );
}
