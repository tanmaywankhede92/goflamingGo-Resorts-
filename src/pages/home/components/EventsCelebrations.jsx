import React from 'react';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { Container, WhatsAppIcon } from '../../../components/common';
import { RESORT_DRIVE_PHOTOS } from '../../../data/images';
import { QUICK_CONTACT } from '../../../data/navigation';
import { getWhatsAppTarget } from '../../../utils/whatsapp';

/**
 * EventsCelebrations Component (Section 5 — Weddings, Corporate Events & Social Celebrations)
 * 
 * Specifically highlights:
 * 1. Forest Destination Weddings & Pre-wedding Ceremonies (Lawns & Mandap)
 * 2. Corporate Events, Executive Offsites & Conference Room
 * 3. Social Celebrations, Poolside Gatherings & Milestone Parties
 * 4. Dedicated Event Enquiries (Direct WhatsApp & Phone desk)
 * 
 * Powered by authentic on-site photos from Google Drive.
 */
export default function EventsCelebrations() {
  const eventPillars = [
    {
      id: 'weddings',
      title: 'Forest Weddings & Sangeet',
      tag: 'Destination Weddings',
      venue: 'Sprawling Banquet Lawns & Haveli Facade',
      desc: 'Celebrate your sacred rituals amidst open skies and ancient teak trees. Sprawling lawns for 250+ guests, thematic mandap & mehendi stages, illuminated entryways, and royal Vidarbha catering.',
      highlights: [
        'Grand banquet lawn & open-air buffet setups',
        'Traditional mandap & Rajasthani themed mehendi stages',
        'Bridal suite & comfortable stays for wedding families',
      ],
      photo: RESORT_DRIVE_PHOTOS?.weddingLawnBuffet?.src || '/assets/resort_drive/IMG-20261010-WA0017.jpg',
      alt: RESORT_DRIVE_PHOTOS?.weddingLawnBuffet?.alt || 'Outdoor lawn banquet with colorful canopy for destination weddings',
      enquiryMsg: 'Hello Go Flamingo Resort, I would like to enquire about hosting a destination wedding / sangeet.',
    },
    {
      id: 'corporate',
      title: 'Corporate Offsites & Conference Room',
      tag: 'Conference & Offsites',
      venue: 'Dedicated AC Conference Room & Dining Banquet',
      desc: 'Step outside traditional city boardrooms. Combine high-focus strategy conclaves in our dedicated air-conditioned Conference Room with evening fireside discussions and morning tiger safaris.',
      highlights: [
        'Dedicated air-conditioned Conference Hall & audio-visual setup',
        'High-speed Wi-Fi, presentation screens & executive seating',
        'Team-building lawn activities & synchronized Pench safaris',
      ],
      photo: RESORT_DRIVE_PHOTOS?.gameZoneLounge?.src || RESORT_DRIVE_PHOTOS?.gameZone?.src || '/assets/resort_drive/IMG-20261003-WA0014.jpg',
      alt: RESORT_DRIVE_PHOTOS?.gameZoneLounge?.alt || 'Corporate conference hall and executive lounge at Go Flamingo Resort',
      enquiryMsg: 'Hello Go Flamingo Resort, I would like to enquire about booking the Conference Room for a corporate offsite.',
    },
    {
      id: 'social',
      title: 'Social Celebrations & Milestones',
      tag: 'Parties & Milestones',
      venue: 'Starlit Lawns, Rain Dance & Pool Grounds',
      desc: 'Host landmark birthdays, anniversaries, family reunions, and music evenings with elevated stages, DJ setups, pool splashes, rain dance sessions, and mouth-watering barbecues.',
      highlights: [
        'Illuminated night stage with sound & DJ lighting',
        'Poolside parties, rain dance sessions & barbecue lawn',
        'VIP baithak seating with royal cushions & low tables',
      ],
      photo: RESORT_DRIVE_PHOTOS?.socialEventLawnNight?.src || '/assets/resort_drive/social_celebrations_enhanced.jpg',
      alt: RESORT_DRIVE_PHOTOS?.socialEventLawnNight?.alt || 'Evening event lawn celebration at Go Flamingo Resort',
      enquiryMsg: 'Hello Go Flamingo Resort, I would like to enquire about hosting a social party / birthday celebration.',
    },
  ];

  return (
    <section className="relative py-16 sm:py-22 lg:py-26 bg-[#08150D] text-ivory border-b border-sand/20 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#0A1810]/95 to-black/85 pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-[500px] h-[500px] bg-emerald-700/10 rounded-full blur-3xl pointer-events-none" />

      <Container size="xl" className="relative z-10">
        
        {/* ========================================================
            SECTION HEADER
            ======================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-white/10 text-[#C5A880] text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-semibold border border-[#C5A880]/30 backdrop-blur-md">
              Weddings · Corporate Events · Social Celebrations
            </div>

            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal leading-tight text-ivory text-balance">
              Celebrate in the Wild.{' '}
              <span className="italic text-[#E8D7B8] font-normal block sm:inline">
                Memorable Venues at Pench.
              </span>
            </h2>

            <p className="font-sans text-xs sm:text-sm md:text-base text-sand-light/80 font-light leading-relaxed">
              From open-air forest weddings on our landscaped banquet lawns to executive strategy summits in our dedicated Conference Room — tailored hospitality for every gathering.
            </p>
          </div>

          {/* Primary Section Header CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 self-start lg:self-auto shrink-0">
            <a
              href={`${QUICK_CONTACT.whatsappUrl}?text=${encodeURIComponent('Hello Go Flamingo Resort, I would like to enquire about holding an event / wedding / conference at your resort.')}`}
              target={getWhatsAppTarget()}
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 pl-4 pr-1.5 py-2 sm:pl-5 sm:pr-2 sm:py-2.5 rounded-full bg-[#C5A880] hover:bg-[#D5B890] text-[#08130B] text-[11px] sm:text-xs uppercase tracking-[0.14em] font-bold transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
            >
              <WhatsAppIcon size="sm" className="text-[#08130B] shrink-0" />
              <span>Enquire for Events</span>
              <span className="w-5.5 h-5.5 sm:w-6 sm:h-6 rounded-full bg-[#08130B] text-[#C5A880] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 shrink-0 shadow-inner">
                <ArrowRight className="w-3 h-3 text-[#C5A880]" />
              </span>
            </a>
          </div>
        </div>

        {/* ========================================================
            3-CARD PILLARS GRID WITH REAL PHOTOS
            ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {eventPillars.map((item) => (
            <div
              key={item.id}
              className="group bg-gradient-to-b from-[#EDE5DA] via-[#F4EEE6] to-[#E9DFD2] border-2 border-[#C5A880]/40 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-[#C5A880] transition-all duration-300 shadow-2xl hover:-translate-y-1"
            >
              {/* Photo Banner with Forest Shadow Bleed */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black/20">
                <img
                  src={item.photo}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E2718]/70 via-black/15 to-black/30 pointer-events-none" />
                
                {/* Refined Luxury Floating Badge */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.16em] font-semibold text-white bg-black/75 backdrop-blur-md border border-white/20 shadow-md">
                    {item.tag}
                  </span>
                </div>
              </div>

              {/* Card Body with Warm Sand Depth & Forest Inner Shadow */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4 text-charcoal bg-gradient-to-b from-[#EFE8DE] via-[#F6F1EA] to-[#EAE0D4] shadow-[inset_0_8px_20px_-4px_rgba(14,39,24,0.18),inset_0_-8px_20px_-6px_rgba(14,39,24,0.12)]">
                <div className="space-y-2.5">
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[#8A6836] font-bold block">
                    Venue: {item.venue}
                  </span>
                  
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#0E2718] group-hover:text-[#18482C] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  
                  <p className="font-sans text-xs sm:text-[13px] text-charcoal/85 font-light leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="space-y-2 pt-3 border-t border-[#163824]/15">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-charcoal/90 font-normal leading-snug">
                        <span className="w-4 h-4 rounded-full bg-[#163824]/12 text-[#163824] flex items-center justify-center shrink-0 mt-0.5 shadow-inner">
                          <Check className="w-2.5 h-2.5 text-[#163824]" />
                        </span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct Action Button with Prominent Luxury Style */}
                <div className="pt-4 border-t border-[#163824]/15 flex items-center justify-between">
                  <a
                    href={`${QUICK_CONTACT.whatsappUrl}?text=${encodeURIComponent(item.enquiryMsg)}`}
                    target={getWhatsAppTarget()}
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-2 pl-4 pr-1.5 py-2 sm:pl-5 sm:pr-2 sm:py-2.5 rounded-full bg-[#0E2718] hover:bg-[#163824] text-white text-[11px] sm:text-xs uppercase tracking-[0.12em] font-bold transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap"
                  >
                    <span>Enquire on WhatsApp</span>
                    <span className="w-5.5 h-5.5 sm:w-6 sm:h-6 rounded-full bg-[#C5A880] text-[#0E2718] flex items-center justify-center transition-transform duration-300 group-hover/btn:translate-x-0.5 shrink-0 shadow-inner">
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#0E2718]" />
                    </span>
                  </a>
                  
                  <span className="text-[10px] text-stone-500 uppercase tracking-widest font-mono font-semibold">
                    Pench
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}
