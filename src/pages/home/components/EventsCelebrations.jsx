import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Badge } from '../../../components/common';
import { AUTHENTIC_RESORT } from '../../../data/images';
import { QUICK_CONTACT } from '../../../data/navigation';
import { cn } from '../../../utils/cn';

/**
 * EventsCelebrations Component — Real Venue & Conclave Showcase
 * 
 * Showcases gatherings, weddings, and corporate conclaves strictly grounded
 * in the resort's confirmed venues:
 * - Landscaped open-air event lawns under mature teak trees
 * - Dedicated air-conditioned Conference Room
 * - Full resort buyout options (20 rooms + 1 dormitory)
 * - Regional Vidarbha catering and fireside evening gatherings
 */
export default function EventsCelebrations() {
  const photos = AUTHENTIC_RESORT.photos;

  const eventPillars = [
    {
      id: 'weddings',
      title: 'Forest Destination Weddings',
      tag: 'Intimate Ceremonies',
      desc: 'Exchange vows under open skies framed by ancient teak trees. Sprawling lawns for mehendi and reception, warm regional Vidarbha catering, and comfortable room stays for close family.',
      venue: 'Landscaped Forest Lawns & Central Courtyard',
      link: '/weddings',
      linkLabel: 'Explore Wedding Options →',
      photo: photos.courtyardTwilight,
      alt: 'Go Flamingo Resort illuminated central courtyard at twilight for events and celebrations',
    },
    {
      id: 'corporate',
      title: 'Executive Offsites & Conclaves',
      tag: 'Conference Room & Strategy',
      desc: 'Break free from conventional urban hotels. Combine focused strategy sessions in our dedicated air-conditioned Conference Room with morning tiger safaris and fireside discussions.',
      venue: 'Dedicated Conference Room + Dining Hall',
      link: '/corporate',
      linkLabel: 'Corporate Offsite Details →',
      photo: photos.restaurantBarHall,
      alt: 'Grand banquet and dining hall with chandeliers at Go Flamingo Resort for corporate gatherings',
    },
    {
      id: 'milestones',
      title: 'Celebrations & Family Reunions',
      tag: 'Milestones & Birthdays',
      desc: 'Celebrate milestone anniversaries, birthdays, and multi-generation family gatherings with swimming pool sessions, rain dance moments, and personalized lawn banquets.',
      venue: 'Resort Lawns, Poolside Grounds & Verandahs',
      link: '/weddings/celebrations',
      linkLabel: 'Celebration Enquiries →',
      photo: photos.sunlitVerandah,
      alt: 'Sunlit arched verandahs and garden grounds at Go Flamingo Resort for family gatherings',
    },
  ];

  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-forest-deep text-ivory border-b border-sand/20 overflow-hidden relative">
      
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/40 via-transparent to-forest-dark/70 pointer-events-none" />

      <Container size="xl" className="relative z-10">
        
        {/* ========================================================
            HEADER
            ======================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 sm:mb-20">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-gold font-semibold">
              <span className="w-6 h-px bg-gold/50" />
              <span>Gatherings & Celebrations</span>
            </div>

            <h2 className="font-serif text-[clamp(2rem,4.5vw,3.75rem)] font-normal leading-[1.1] tracking-[-0.015em] text-ivory text-balance">
              Celebrate in the wild.{' '}
              <br />
              <span className="italic font-normal text-gold-light">
                Where moments stay memorable.
              </span>
            </h2>

            <p className="font-sans text-xs sm:text-sm md:text-base text-sand/80 font-light leading-relaxed">
              From intimate open-air celebrations on our central lawns to executive leadership offsites utilizing our dedicated conference hall and dining banquet.
            </p>
          </div>

          <div className="flex items-center gap-4 self-start lg:self-auto">
            <Button
              as="a"
              href={`${QUICK_CONTACT.whatsappUrl}?text=${encodeURIComponent('Hello Go Flamingo Resort, I would like to inquire about hosting an event/offsite.')}`}
              target="_blank"
              rel="noopener noreferrer"
              variant="gold"
              size="md"
              className="font-bold tracking-wider"
            >
              Discuss Event on WhatsApp
            </Button>
          </div>
        </div>

        {/* ========================================================
            EVENT TILES WITH AUTHENTIC VENUE PHOTOGRAPHY
            ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {eventPillars.map((item) => (
            <div
              key={item.id}
              className="group bg-forest-dark/70 border border-sand/20 rounded-[3px] overflow-hidden flex flex-col justify-between hover:border-gold/50 transition-all duration-300 shadow-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-forest-dark">
                <img
                  src={item.photo.src}
                  srcSet={item.photo.srcSet}
                  sizes={item.photo.sizes}
                  width={item.photo.width}
                  height={item.photo.height}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-transparent to-transparent opacity-60" />
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-0.5 rounded-[2px] bg-forest-deep/80 text-[10px] uppercase tracking-wider text-gold-light border border-sand/30 font-semibold">
                    {item.tag}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-gold font-semibold block">
                    Venue: {item.venue}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-ivory group-hover:text-gold-light transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-sand/80 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-sand/15">
                  <Link
                    to={item.link}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-gold-light hover:text-ivory transition-colors"
                  >
                    <span>{item.linkLabel}</span>
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* ========================================================
            FULL PROPERTY BUYOUT NOTICE
            ======================================================== */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-[4px] bg-forest-dark/90 border border-sand/30 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-2xl">
          <div className="max-w-2xl space-y-1.5">
            <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-semibold block">
              Exclusive Sanctuary Buyout
            </span>
            <div className="font-serif text-lg sm:text-xl text-ivory font-semibold">
              Host Your Gathering in Complete Seclusion
            </div>
            <p className="text-xs text-sand/75 font-light leading-relaxed">
              Reserve all 20 private rooms and the group dormitory exclusively for your wedding guests or corporate delegation. Includes dedicated restaurant catering, private lawn access, and synchronized safari jeep coordination.
            </p>
          </div>

          <Button
            as={Link}
            to="/contact"
            variant="inverted"
            size="md"
            className="shrink-0 font-semibold uppercase tracking-wider text-xs"
          >
            Enquire for Full Buyout
          </Button>
        </div>

      </Container>
    </section>
  );
}
