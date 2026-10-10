import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Badge } from '../../../components/common';
import { IMAGES } from '../../../data/images';
import { QUICK_CONTACT } from '../../../data/navigation';
import { cn } from '../../../utils/cn';

/**
 * EventsCelebrations Component
 * 
 * Showcases gatherings, weddings, and corporate conclaves strictly grounded
 * in the resort's confirmed venues:
 * - Landscaped open-air event lawns under mature teak trees
 * - Dedicated air-conditioned Conference Room
 * - Full resort buyout options (20 rooms + 1 dormitory)
 * - Regional catering and fireside evening gatherings
 */
export default function EventsCelebrations() {
  const eventPillars = [
    {
      id: 'weddings',
      title: 'Forest Destination Weddings',
      tag: 'Intimate Ceremonies',
      desc: 'Exchange vows under open skies framed by ancient teak trees. Sprawling lawns for mehendi and reception, warm regional catering, and comfortable cottage stays for close friends and family.',
      venue: 'Landscaped Forest Lawns',
      link: '/weddings',
      linkLabel: 'Explore Wedding Options →',
      image: IMAGES.events.wedding,
      alt: 'Open air destination wedding setup on green lawn at resort',
    },
    {
      id: 'corporate',
      title: 'Executive Offsites & Conclaves',
      tag: 'Conference Room & Strategy',
      desc: 'Break free from conventional urban hotels. Combine focused strategy sessions in our dedicated air-conditioned Conference Room with morning tiger safaris and fireside discussions.',
      venue: 'Dedicated Conference Room + Lawns',
      link: '/corporate',
      linkLabel: 'Corporate Offsite Details →',
      image: IMAGES.events.corporate,
      alt: 'Corporate retreat and executive gathering in nature',
    },
    {
      id: 'milestones',
      title: 'Celebrations & Family Reunions',
      tag: 'Milestones & Birthdays',
      desc: 'Celebrate milestone anniversaries, birthdays, and multi-generation family gatherings with natural stone pool sessions, rain dance moments, and personalized lawn banquets.',
      venue: 'Resort Lawns & Poolside Grounds',
      link: '/weddings/celebrations',
      linkLabel: 'Celebration Enquiries →',
      image: IMAGES.dining.bonfireDinner,
      alt: 'Evening celebration with warm campfire and lights under trees',
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
              From intimate open-air forest weddings on our lawns to executive leadership offsites utilizing our dedicated conference hall.
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
            THREE PILLAR EDITORIAL CARDS
            ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {eventPillars.map((pillar) => (
            <div
              key={pillar.id}
              className="group rounded-[3px] bg-forest-dark border border-sand/20 hover:border-gold/50 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg"
            >
              {/* Image Banner */}
              <div className="relative aspect-[16/11] overflow-hidden bg-forest-deep">
                <img
                  src={pillar.image}
                  alt={pillar.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-deep/50 to-transparent opacity-70 pointer-events-none" />

                <div className="absolute top-3.5 left-3.5">
                  <Badge variant="gold" size="sm" className="font-semibold text-[10px] tracking-wider uppercase">
                    {pillar.tag}
                  </Badge>
                </div>

                <div className="absolute bottom-3 left-3.5 right-3.5 text-xs text-sand-light font-medium">
                  Venue: {pillar.venue}
                </div>
              </div>

              {/* Text Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <h3 className="font-serif text-xl sm:text-2xl text-ivory font-semibold group-hover:text-gold transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-sand/80 font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-sand/15">
                  <Link
                    to={pillar.link}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-gold hover:text-gold-light font-semibold transition-colors"
                  >
                    {pillar.linkLabel}
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
