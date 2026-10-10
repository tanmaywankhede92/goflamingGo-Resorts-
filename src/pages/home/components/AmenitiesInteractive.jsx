import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Badge } from '../../../components/common';
import { AUTHENTIC_RESORT } from '../../../data/images';
import { QUICK_CONTACT } from '../../../data/navigation';
import { cn } from '../../../utils/cn';

/**
 * AmenitiesInteractive Component — Real Footage & Facility Integration
 * 
 * Immersive showcase of Go Flamingo Resort's verified facilities:
 * 1. Swimming Pool (Real video footage & poster)
 * 2. Rain Dance & Mist Installation (Celebration on lawns)
 * 3. Restaurant & Bar (Real photo with crystal chandeliers & bar counter)
 * 4. Landscaped Garden & Open Lawns (Real courtyard video/twilight photo)
 * 5. Kids' Forest Play Area (Grass playground & swings)
 * 6. Game Zone & Sports Club (Real snooker/billiards table, table tennis, carrom)
 * 7. Executive Conference Hall (Air-conditioned corporate meeting venue)
 */
export default function AmenitiesInteractive() {
  const [activeIndex, setActiveIndex] = useState(0);

  const videos = AUTHENTIC_RESORT.videos;
  const photos = AUTHENTIC_RESORT.photos;

  const amenities = [
    {
      id: 'pool',
      number: '01',
      title: 'Turquoise Swimming Pool & Kids Splash Area',
      category: 'Water & Refreshment',
      isVideo: true,
      videoMp4: videos.pool.mp4,
      videoWebm: videos.pool.webm,
      poster: videos.pool.poster,
      alt: 'Go Flamingo Resort turquoise swimming pool and children splash pool surrounded by green trees',
      link: '/resort/pool',
      linkLabel: 'Explore Pool Details →',
      lead: 'A sparkling, restorative water retreat for warm Pench afternoons.',
      body: 'Surrounded by lush green foliage and the shade of trees, our resort swimming pool features crystal-clear turquoise waters and a circular shallow splash pool for kids. Unwind on comfortable poolside loungers after dusty morning Gypsy safaris.',
      highlights: ['Sparkling Blue Water', 'Shallow Splash Area for Kids', 'Poolside Sun Loungers', 'Post-Safari Afternoon Access'],
    },
    {
      id: 'raindance',
      number: '02',
      title: 'Rain Dance & Overhead Mist Installation',
      category: 'Celebration & Joy',
      isVideo: false,
      photo: photos.sunlitVerandah,
      alt: 'Outdoor garden grounds and rain dance installation area at Go Flamingo Resort',
      link: '/resort/facilities',
      linkLabel: 'View Resort Facilities →',
      lead: 'Open-air overhead rainfall showers set against landscaped grass lawns.',
      body: 'A favorite celebration for families, school groups, and celebration trips visiting Pench. Enjoy exhilarating rain dance sessions under the Central Indian sky accompanied by celebratory music and refreshments.',
      highlights: ['Overhead Rain Sprayers', 'Safe Lawn Surfacing', 'Family & Group Friendly', 'Afternoon Sessions'],
    },
    {
      id: 'dining',
      number: '03',
      title: 'Grand Restaurant & Bar with Crystal Chandeliers',
      category: 'Dining & Central Indian Cuisine',
      isVideo: false,
      photo: photos.restaurantBarHall,
      alt: 'Grand indoor dining restaurant with crystal chandeliers, booth seating and bar counter at Go Flamingo Resort',
      link: '/dining',
      linkLabel: 'Discover Dining Experience →',
      lead: 'Elegant vaulted dining hall with sparkling chandeliers and dedicated bar counter.',
      body: 'Dine in an airy hall adorned with classic crystal chandeliers, patterned etched-glass windows, and plush booth seating. Savor authentic Vidarbha specialties, generous buffet spreads, freshly brewed pre-dawn safari tea, and evening bar refreshments.',
      highlights: ['Crystal Chandelier Decor', 'Full Service Bar Counter', 'Central Indian Vidarbha Specialties', 'Safari Pre-Dawn Tea Service'],
    },
    {
      id: 'gardens',
      number: '04',
      title: 'Landscaped Courtyard Garden & Open Lawns',
      category: 'Sprawling Outdoors',
      isVideo: true,
      videoMp4: videos.courtyard.mp4,
      videoWebm: videos.courtyard.webm,
      poster: videos.courtyard.poster,
      alt: 'Elevated view of Go Flamingo Resort central courtyard garden and haveli balconies',
      link: '/resort/facilities',
      linkLabel: 'View Garden Lawns →',
      lead: 'Expansive green courtyard framed by haveli arches and sculptured water fountains.',
      body: 'Our haveli guest wings wrap around a tranquil central lawn featuring tall cypress trees, vibrant flower borders, stone pathways, and an ornamental pitcher fountain. An idyllic setting for barefoot morning strolls and starlit evening bonfires.',
      highlights: ['Haveli-Style Arch Enclosure', 'Sculptural Water Fountain', 'Cypress & Teak Foliage', 'Evening Campfire Proximity'],
    },
    {
      id: 'kids',
      number: '05',
      title: "Kids' Forest Play Area",
      category: 'Family Recreation',
      isVideo: false,
      photo: photos.entrancePorch,
      alt: 'Go Flamingo Resort family campus and outdoor recreation area',
      link: '/resort/facilities',
      linkLabel: 'Family Activities →',
      lead: 'Dedicated open-air play zone for young wilderness explorers.',
      body: 'Set upon safe grass lawns under natural shade, our children’s area is equipped with outdoor play equipment so younger guests can play freely and safely within our secure gated resort campus.',
      highlights: ['Safe Lawn Grounding', 'Outdoor Swings & Play Equipment', 'Natural Shade Protection', 'Secure Gated Campus'],
    },
    {
      id: 'games',
      number: '06',
      title: 'Game Zone: Snooker, Table Tennis & Carrom',
      category: 'Indoor & Lawn Games',
      isVideo: false,
      photo: photos.restaurantBarHall,
      alt: 'Indoor recreation area with full snooker table and table tennis at Go Flamingo Resort',
      link: '/resort/facilities',
      linkLabel: 'Explore Games →',
      lead: 'Full snooker/billiards table, table tennis, and lawn games.',
      body: 'Unwind between safari drives with friendly matches. Our spacious indoor recreation wing features a full billiards/pool table, table tennis board, carrom boards, chess, and outdoor badminton racquets for afternoon leisure.',
      highlights: ['Full Snooker / Pool Table', 'Table Tennis Board', 'Carrom & Board Chess', 'Outdoor Lawn Badminton'],
    },
    {
      id: 'conference',
      number: '07',
      title: 'Air-Conditioned Executive Conference Hall',
      category: 'Corporate & Conclaves',
      isVideo: false,
      photo: photos.diningBanquetArches,
      alt: 'Banquet and conference hall setup with arched windows at Go Flamingo Resort',
      link: '/corporate',
      linkLabel: 'Corporate Enquiries →',
      lead: 'Dedicated conference facility for leadership offsites, conclaves & workshops.',
      body: 'Break away from conventional urban boardrooms. Our dedicated meeting space accommodates corporate strategy sessions, presentations, seminars, and group workshops right in the wilderness, complete with custom safari coordination.',
      highlights: ['Air-Conditioned Hall', 'Audio-Visual Presentation Setup', 'Custom Theater & U-Shape Seating', 'Post-Session Gypsy Safaris'],
    },
  ];

  const active = amenities[activeIndex];

  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-ivory-warm/40 text-charcoal border-b border-sand/30 overflow-hidden">
      <Container size="xl">
        
        {/* ========================================================
            HEADER
            ======================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 sm:mb-18">
          <div className="max-w-2xl space-y-2.5">
            <div className="flex items-center gap-2.5 text-[11px] uppercase tracking-[0.14em] text-gold-dark font-semibold">
              <span className="w-5 h-px bg-gold-dark/40" />
              <span>Resort Amenities & Leisure</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal leading-snug text-forest-deep text-balance">
              Spaces to Gather, Swim, and Celebrate
            </h2>

            <p className="font-sans text-xs sm:text-sm md:text-base text-charcoal-muted font-light leading-relaxed">
              Explore the verified leisure amenities of Go Flamingo Resort — from our restorative swimming pool and open lawn rain dance to chandelier dining and indoor snooker.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start lg:self-auto">
            <Button as={Link} to="/resort" variant="primary" size="md">
              View All Facilities →
            </Button>
          </div>
        </div>

        {/* ========================================================
            INTERACTIVE ASYMMETRICAL AMENITY STAGE
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Interactive Navigation List (5 Cols) */}
          <div className="lg:col-span-5 space-y-2 order-2 lg:order-1">
            {amenities.map((item, idx) => {
              const isSelected = activeIndex === idx;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={cn(
                    'w-full text-left p-4 sm:p-5 rounded-[3px] border transition-all duration-200 cursor-pointer flex items-center justify-between gap-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold',
                    isSelected
                      ? 'bg-forest-deep text-ivory border-forest-deep shadow-lg ring-1 ring-gold/40'
                      : 'bg-ivory border-sand/35 text-charcoal hover:bg-ivory-warm/70 hover:border-sand/60'
                  )}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={cn(
                        'font-serif text-base sm:text-lg font-bold shrink-0',
                        isSelected ? 'text-gold' : 'text-charcoal-muted group-hover:text-forest'
                      )}
                    >
                      {item.number}
                    </span>
                    <div>
                      <span
                        className={cn(
                          'text-[9px] uppercase tracking-[0.2em] font-semibold block mb-0.5',
                          isSelected ? 'text-gold-light' : 'text-terracotta'
                        )}
                      >
                        {item.category}
                      </span>
                      <h3
                        className={cn(
                          'font-serif text-sm sm:text-base font-semibold leading-snug',
                          isSelected ? 'text-ivory' : 'text-forest-deep group-hover:text-forest'
                        )}
                      >
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <span
                    className={cn(
                      'text-xs font-semibold transition-transform duration-200 shrink-0',
                      isSelected ? 'text-gold translate-x-1' : 'text-charcoal-muted group-hover:translate-x-1'
                    )}
                  >
                    →
                  </span>
                </button>
              );
            })}
          </div>

          {/* Featured Visual & Editorial Deep-Dive (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            
            {/* Visual Box — Supports Real Video Clips & Responsive Photos */}
            <div className="relative aspect-[16/10] sm:aspect-[16/10] rounded-[3px] overflow-hidden bg-forest-dark border border-sand/35 shadow-xl">
              
              {active.isVideo ? (
                <video
                  key={active.videoMp4}
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={active.poster}
                  aria-label={active.alt}
                  className="w-full h-full object-cover object-center"
                >
                  {active.videoWebm && <source src={active.videoWebm} type="video/webm" />}
                  <source src={active.videoMp4} type="video/mp4" />
                </video>
              ) : (
                <img
                  key={active.photo.src}
                  src={active.photo.src}
                  srcSet={active.photo.srcSet}
                  sizes={active.photo.sizes}
                  width={active.photo.width}
                  height={active.photo.height}
                  alt={active.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/85 via-transparent to-transparent opacity-60 pointer-events-none" />

              {/* In-Image Tag */}
              <div className="absolute top-4 left-4 sm:top-5 sm:left-5">
                <Badge variant="gold" size="sm" className="tracking-wider uppercase font-semibold">
                  {active.isVideo ? "Real Footage · Go Flamingo" : "Authentic Property"}
                </Badge>
              </div>

              {/* Bottom In-Image Lead */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 text-ivory">
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-semibold block mb-0.5">
                  {active.category}
                </span>
                <div className="font-serif text-lg sm:text-2xl font-semibold mb-1">
                  {active.title}
                </div>
                <p className="text-xs text-sand-light font-light max-w-lg leading-relaxed hidden sm:block">
                  {active.lead}
                </p>
              </div>
            </div>

            {/* Narrative & Highlights Panel */}
            <div className="p-6 sm:p-7 rounded-[3px] bg-ivory border border-sand/35 space-y-5 shadow-sm">
              <div className="space-y-2">
                <h4 className="font-serif text-xl text-forest-deep font-semibold">
                  {active.lead}
                </h4>
                <p className="font-sans text-xs sm:text-sm text-charcoal/80 font-light leading-relaxed">
                  {active.body}
                </p>
              </div>

              {/* Verified Highlights Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-3 border-t border-sand/30">
                {active.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-[2px] bg-ivory-warm/70 border border-sand/30 text-[11px] text-forest-deep font-medium"
                  >
                    <span className="text-gold mr-1">✦</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Quick Action Button */}
              <div className="pt-2 flex items-center justify-between">
                <Link
                  to={active.link}
                  className="text-xs uppercase tracking-wider font-semibold text-forest hover:text-gold transition-colors inline-flex items-center gap-1.5"
                >
                  <span>{active.linkLabel}</span>
                </Link>

                <Button
                  as="a"
                  href={`${QUICK_CONTACT.whatsappUrl}?text=${encodeURIComponent(`Hello Go Flamingo Resort, I would like to inquire about ${active.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="gold"
                  size="sm"
                  className="font-bold tracking-wider text-[11px]"
                >
                  Enquire About Facility
                </Button>
              </div>
            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}
