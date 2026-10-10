import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Badge } from '../../../components/common';
import { IMAGES } from '../../../data/images';
import { QUICK_CONTACT } from '../../../data/navigation';
import { cn } from '../../../utils/cn';

/**
 * CuratedGalleryJournal Component
 * 
 * Art-directed visual monograph of authentic property photography:
 * - Standalone cottages, private verandahs, stone bathrooms, pool & lantern dining
 * - Strictly zero fake awards or fabricated testimonials
 * - Transparent guest trust & official contact credentials
 */
export default function CuratedGalleryJournal() {
  const images = [
    {
      src: IMAGES.rooms.hero,
      alt: 'Standalone sandstone cottages at Go Flamingo Resort beneath Pench teak canopy',
      caption: 'Standalone Forest Cottages · Shaded Pathways',
      span: 'lg:col-span-7 aspect-[16/10]',
    },
    {
      src: IMAGES.rooms.verandah,
      alt: 'Private wooden verandah sit-out with steaming morning masala chai',
      caption: 'Verandah Solitude · Dawn Birdsong',
      span: 'lg:col-span-5 aspect-[4/3] lg:aspect-auto',
    },
    {
      src: IMAGES.home.dining,
      alt: 'Evening dinner table illuminated by lanterns under teak trees',
      caption: 'Al Fresco Lawn Dining · Central Indian Cuisine',
      span: 'lg:col-span-4 aspect-[4/3]',
    },
    {
      src: IMAGES.resort.pool,
      alt: 'Natural stone swimming pool framed by trees at resort',
      caption: 'Natural Stone Pool · Afternoon Refreshment',
      span: 'lg:col-span-5 aspect-[16/10]',
    },
    {
      src: IMAGES.rooms.bathroom,
      alt: 'Artisanal stone bathroom with walk-in rain shower at Go Flamingo',
      caption: 'Natural Stone Bath · 24/7 Hot Water',
      span: 'lg:col-span-3 aspect-[4/3] lg:aspect-auto',
    },
  ];

  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-ivory text-charcoal border-b border-sand/30 overflow-hidden">
      <Container size="xl">
        
        {/* ========================================================
            HEADER
            ======================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 sm:mb-20">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-gold-dark font-semibold">
              <span className="w-6 h-px bg-gold-dark/40" />
              <span>Authentic Visual Journal</span>
            </div>

            <h2 className="font-serif text-[clamp(2rem,4.5vw,3.75rem)] font-normal leading-[1.1] tracking-[-0.015em] text-forest-deep text-balance">
              Scenes of the sanctuary.{' '}
              <br />
              <span className="italic font-normal text-gold-dark">
                Captured on the grounds.
              </span>
            </h2>

            <p className="font-sans text-xs sm:text-sm text-charcoal-muted font-light leading-relaxed">
              Real spaces, natural light, and quiet moments — exploring the architecture, pool, dining, and surrounding nature of Go Flamingo Resort.
            </p>
          </div>

          <Button as={Link} to="/gallery" variant="secondary" size="md">
            View Complete Gallery →
          </Button>
        </div>

        {/* ========================================================
            ART-DIRECTED ASYMMETRICAL MOSAIC
            ======================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
          {images.map((item, idx) => (
            <div
              key={idx}
              className={cn(
                'group relative rounded-[3px] overflow-hidden bg-forest-dark border border-sand/35 shadow-md',
                item.span
              )}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/85 via-transparent to-transparent opacity-50 group-hover:opacity-75 transition-opacity" />

              <div className="absolute bottom-3 left-3 right-3 text-ivory flex items-center justify-between text-xs">
                <span className="font-light text-[11px] tracking-wide text-sand-light">
                  {item.caption}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================
            GUEST TRUST & ESSENTIAL DETAILS ANCHOR
            ======================================================== */}
        <div className="mt-14 sm:mt-18 pt-10 border-t border-sand/30">
          <div className="bg-ivory-warm/60 border border-sand/40 rounded-[4px] p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-sand/30">
              
              {/* Trust Box 1 */}
              <div className="space-y-1.5 md:pr-4">
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold-dark font-semibold block">
                  Official Property Address
                </span>
                <div className="font-serif text-base text-forest-deep font-semibold">
                  Sillari Gate, Sitapur
                </div>
                <p className="text-xs text-charcoal-muted font-light leading-relaxed">
                  Maharashtra 441401, India · Minutes from the official entry gate of Pench Tiger Reserve.
                </p>
              </div>

              {/* Trust Box 2 */}
              <div className="pt-4 md:pt-0 md:px-6 space-y-1.5">
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold-dark font-semibold block">
                  Direct Contact & Concierge
                </span>
                <div className="font-serif text-base text-forest-deep font-semibold">
                  <a href="tel:+919561957009" className="hover:text-gold transition-colors">
                    +91 95619 57009
                  </a>
                </div>
                <p className="text-xs text-charcoal-muted font-light leading-relaxed">
                  WhatsApp: <a href={QUICK_CONTACT.whatsappUrl} className="text-forest font-medium hover:underline">+91 93724 25968</a> · Email: <a href="mailto:info@goflamingoresorts.com" className="text-forest hover:underline">info@goflamingoresorts.com</a>
                </p>
              </div>

              {/* Trust Box 3 */}
              <div className="pt-4 md:pt-0 md:pl-6 space-y-1.5">
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold-dark font-semibold block">
                  Connectivity from Nagpur
                </span>
                <div className="font-serif text-base text-forest-deep font-semibold">
                  ~85 km (1.5 – 2 Hours)
                </div>
                <p className="text-xs text-charcoal-muted font-light leading-relaxed">
                  Seamless 4-lane highway via NH 44 from Dr. Babasaheb Ambedkar International Airport (NAG) and Railway Station.
                </p>
              </div>

            </div>
          </div>
        </div>

      </Container>
    </section>
  );
}
