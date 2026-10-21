import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ArrowRight,
  ArrowDown,
  MapPin,
  Phone,
  Sparkles,
  Users,
  Briefcase,
  Calendar,
  CheckCircle2,
  Waves,
  Music,
  UtensilsCrossed,
  Tv,
  Wifi,
  Clock,
} from 'lucide-react';
import {
  Container,
  WhatsAppIcon,
} from '../../components/common';
import { AUTHENTIC_RESORT, RESORT_DRIVE_PHOTOS, IMAGES } from '../../data/images';
import { QUICK_CONTACT } from '../../data/navigation';
import { cn } from '../../utils/cn';
import { getWhatsAppTarget } from '../../utils/whatsapp';
import ClosingCallToAction from '../home/components/ClosingCallToAction';

/**
 * EventsPage Component — GoFlamingo Resort (Pench • Sillari)
 * 
 * Comprehensive 4-Category Architecture:
 * 5.1 Weddings (Mandap, lawns, catering & stays)
 * 5.2 Corporate Events (Team offsites, wilderness retreats & safari bonding)
 * 5.3 Conferences (Dedicated AC conference room & AV meeting setup)
 * 5.4 Social Celebrations (Birthdays, anniversaries, rain dance & family gatherings)
 * 
 * Features:
 * - Full-frame 100dvh hero without top white lines.
 * - In-page smooth hash jump navigation for all 4 categories.
 * - Genuine on-site photography from Google Drive.
 * - Crisp, uncluttered hospitality copy.
 */
export default function EventsPage() {
  const { hash } = useLocation();

  useEffect(() => {
    document.title = 'Events & Celebrations | GoFlamingo Resort Pench';
    if (hash) {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 120);
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [hash]);

  const scrollToCategory = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 4 Event Categories Data
  const categories = [
    {
      id: 'weddings',
      badge: 'WEDDINGS & SPECIAL OCCASIONS',
      title: 'Weddings & Celebrations to Remember',
      paragraph1: 'Celebrate your special day surrounded by loved ones at GoFlamingo Resort. With outdoor spaces, welcoming surroundings and accommodation for your guests, the resort offers a lovely setting for wedding celebrations and special occasions near Pench.',
      paragraph2: 'From intimate ceremonies to joyful gatherings, our team can discuss your event requirements, accommodation needs and available arrangements to help you plan a celebration that feels your own.',
      specs: [
        'Outdoor Spaces for Celebrations',
        'Accommodation for Guests',
        'Green Surroundings',
        'Personalised Event Enquiries',
        'Convenient Location in the Pench Region',
      ],
      buttonText: 'ENQUIRE FOR WEDDINGS',
      primaryPhoto: RESORT_DRIVE_PHOTOS.weddingMandap.src,
      primaryAlt: 'Grand wedding mandap with floral canopy and pillars at Go Flamingo Resort',
      secondaryPhotos: [
        {
          src: RESORT_DRIVE_PHOTOS.weddingMehendiStage.src,
          alt: 'Rajasthani themed mehendi stage with umbrellas',
          label: 'Themed Mehendi Stage',
        },
        {
          src: RESORT_DRIVE_PHOTOS.weddingLawnBuffet.src,
          alt: 'Outdoor lawn banquet with colorful canopy and buffet',
          label: 'Banquet Lawn Buffet',
        },
      ],
      whatsappMsg: 'Hello Go Flamingo Resort, I would like to enquire about weddings and special occasions at Pench.',
    },
    {
      id: 'corporate',
      badge: 'CORPORATE GATHERINGS & TEAM RETREATS',
      title: 'Corporate Events & Team Getaways',
      paragraph1: 'Bring your team together in a refreshing setting away from the usual workplace. GoFlamingo Resort offers a conference room, accommodation and recreational facilities for corporate gatherings, team meetings and offsite stays.',
      paragraph2: "Whether you're planning a team outing, a business meeting or time to reconnect outside the office, contact us to discuss your group's requirements and the facilities available for your event.",
      specs: [
        'Conference Room',
        'Accommodation for Groups',
        'Recreational Facilities',
        'Outdoor Spaces',
        'Enquiries for Corporate Gatherings',
      ],
      buttonText: 'ENQUIRE FOR CORPORATE EVENTS',
      primaryPhoto: AUTHENTIC_RESORT.photos.restaurantBarHall.src,
      primaryAlt: 'Grand indoor dining hall and lounge for corporate banquets',
      secondaryPhotos: [
        {
          src: RESORT_DRIVE_PHOTOS.gameZone.src,
          alt: 'Recreation club with billiards and table tennis',
          label: 'Game Zone & Team Recreation',
        },
        {
          src: RESORT_DRIVE_PHOTOS.socialEventLawnNight.src,
          alt: 'Evening lawn gathering under fairy lights',
          label: 'Evening Lawns',
        },
      ],
      whatsappMsg: 'Hello Go Flamingo Resort, I would like to enquire about corporate events and team getaways.',
    },
    {
      id: 'conferences',
      badge: 'MEETINGS & CONFERENCES',
      title: 'A Comfortable Setting for Meetings & Conferences',
      paragraph1: 'Host your next meeting or gathering at GoFlamingo Resort. Our conference room provides a dedicated space for business discussions, presentations and group meetings in a relaxed resort environment.',
      paragraph2: 'With accommodation and recreational facilities available at the resort, guests can discuss their meeting requirements and stay arrangements with our team before planning their visit.',
      specs: [
        'Conference Room',
        'Meeting & Presentation Space',
        'Accommodation Options',
        'Resort Facilities',
        'Enquire About Availability',
      ],
      buttonText: 'ENQUIRE FOR CONFERENCES',
      primaryPhoto: RESORT_DRIVE_PHOTOS.gameZoneLounge.src,
      primaryAlt: 'Go Flamingo Resort air-conditioned conference hall and executive club lounge',
      secondaryPhotos: [
        {
          src: AUTHENTIC_RESORT.photos.diningBanquetArches.src,
          alt: 'Restaurant dining hall with arched windows and comfortable booth seating',
          label: 'Executive Dining & Breakout Space',
        },
        {
          src: AUTHENTIC_RESORT.photos.sunlitVerandah.src,
          alt: 'Sunlit arched verandah for tea breaks',
          label: 'Verandah Coffee Break Lounge',
        },
      ],
      whatsappMsg: 'Hello Go Flamingo Resort, I would like to enquire about meetings and conferences at the resort.',
    },
    {
      id: 'social-celebrations',
      badge: 'FAMILY & SOCIAL CELEBRATIONS',
      title: 'Bring Everyone Together for the Moments That Matter',
      paragraph1: 'Make birthdays, anniversaries, family reunions and other special occasions memorable at GoFlamingo Resort. Enjoy time together in a welcoming setting surrounded by greenery and open spaces.',
      paragraph2: "Whether you're planning a family get-together or a milestone celebration, our team can help you explore available spaces, accommodation options and arrangements suited to your gathering.",
      specs: [
        'Family Gatherings',
        'Birthday & Anniversary Celebrations',
        'Outdoor Spaces',
        'Resort Accommodation',
        'Recreational Facilities',
      ],
      buttonText: 'ENQUIRE FOR SOCIAL CELEBRATIONS',
      primaryPhoto: RESORT_DRIVE_PHOTOS.socialEventLawnNight.src,
      primaryAlt: 'Magical evening lawn celebration with ambient fairy lights and bonfire baithak',
      secondaryPhotos: [
        {
          src: RESORT_DRIVE_PHOTOS.vipLawnBaithak.src,
          alt: 'Royal baithak VIP lawn seating with red cushions',
          label: 'Royal Baithak Seating',
        },
        {
          src: RESORT_DRIVE_PHOTOS.rainDance.src,
          alt: 'Outdoor rain dance arena with mist showers',
          label: 'Rain Dance Mist Arena',
        },
      ],
      whatsappMsg: 'Hello Go Flamingo Resort, I would like to enquire about family and social celebrations.',
    },
  ];

  return (
    <div className="w-full bg-ivory-pure text-charcoal font-sans antialiased overflow-x-hidden selection:bg-gold/30 selection:text-forest-deep">
      
      {/* ========================================================
          1. CINEMATIC LUXURY HERO BANNER (FAIRY-LIT NIGHT LAWNS)
          ======================================================== */}
      <section className="relative w-full min-h-[520px] sm:min-h-[580px] lg:min-h-[620px] flex flex-col justify-end bg-forest-dark text-ivory overflow-hidden">
        {/* Full-Frame Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={RESORT_DRIVE_PHOTOS.socialEventLawnNight.src}
            alt="Go Flamingo Resort evening lawn celebrations under fairy lights"
            fetchPriority="high"
            className="w-full h-full object-cover object-[center_top] sm:object-center filter brightness-[0.96] contrast-[1.03]"
          />
          {/* Tailored architectural gradient scrims */}
          <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-deep/60 to-forest-dark/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/90 via-forest-dark/40 to-transparent sm:block hidden" />
        </div>

        {/* Foreground Content */}
        <Container size="xl" className="relative z-10 w-full pt-28 sm:pt-36 md:pt-40 pb-12 sm:pb-16 px-5 sm:px-8 md:px-12 lg:px-16">
          <div className="max-w-3xl space-y-3 sm:space-y-4">

            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-ivory font-normal tracking-tight leading-[1.12] text-balance">
              Weddings & Celebrations in the Heart of Pench
            </h1>

            {/* Concise Supporting Copy */}
            <p className="text-xs sm:text-base md:text-lg text-sand-light/95 leading-relaxed font-light max-w-2xl">
              From memorable family celebrations to corporate gatherings, GoFlamingo Resort offers inviting spaces, comfortable accommodation and a refreshing setting for bringing people together.
            </p>

            {/* Clean Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <Link
                to="/contact?book=true#reservation-form-card"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#DFBF8E] hover:bg-[#E8CA9E] text-[#0E2718] text-xs font-semibold uppercase tracking-[0.14em] shadow-lg transition-all duration-300 cursor-pointer text-center"
              >
                <span>Plan Your Event</span>
              </Link>

              <button
                type="button"
                onClick={() => scrollToCategory('weddings')}
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/30 text-xs font-medium uppercase tracking-[0.14em] backdrop-blur-sm transition-all duration-300 shadow-sm cursor-pointer text-center"
              >
                <span>Explore Venues</span>
              </button>

              <a
                href={`https://wa.me/919561957009?text=${encodeURIComponent('Hello Go Flamingo Resort, I would like to enquire about event dates, venues and arrangements.')}`}
                target={getWhatsAppTarget()}
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-[#25D366]/40 text-xs font-medium uppercase tracking-[0.14em] backdrop-blur-sm transition-all duration-300 shadow-sm cursor-pointer whitespace-nowrap"
              >
                <WhatsAppIcon size="sm" className="text-[#25D366] shrink-0" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>

          </div>
        </Container>
      </section>


      {/* ========================================================
          2. THE EVENT CATEGORIES DETAILED SECTIONS
          ======================================================== */}
      <div className="pt-6 sm:pt-8 pb-14 sm:pb-20 space-y-12 sm:space-y-16 bg-white">
        {categories.map((category, idx) => {
          const isEven = idx % 2 === 1;
          const whatsappUrl = `https://wa.me/919561957009?text=${encodeURIComponent(category.whatsappMsg)}`;

          return (
            <section
              key={category.id}
              id={category.id}
              className="scroll-mt-28 border-b border-sand/20 pb-12 sm:pb-16 last:border-b-0"
            >
              <Container size="xl">
                
                {/* Section Top Header Pill */}
                <div className="mb-3.5 sm:mb-4">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/15 border border-gold/40 text-gold-dark text-xs font-semibold tracking-wider uppercase">
                    <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
                    <span>{category.badge}</span>
                  </div>
                </div>

                <div className={cn(
                  'grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center',
                  isEven ? 'lg:grid-flow-dense' : ''
                )}>

                  {/* 1. VISUAL SHOWCASE (6 cols) */}
                  <div className={cn(
                    'lg:col-span-6 space-y-4',
                    isEven ? 'lg:col-start-7' : ''
                  )}>
                    {/* Primary Hero Photo */}
                    <div className="relative rounded-3xl overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.12)] aspect-16/10 border-4 border-white group">
                      <img
                        src={category.primaryPhoto}
                        alt={category.primaryAlt}
                        className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-5 right-5 text-ivory">
                        <span className="text-[11px] uppercase tracking-wider text-gold font-semibold block mb-0.5">
                          {category.badge}
                        </span>
                        <p className="text-sm font-serif font-medium">
                          {category.title}
                        </p>
                      </div>
                    </div>

                    {/* Secondary Dual Photo Grid */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      {category.secondaryPhotos.map((thumb, tIdx) => (
                        <div
                          key={tIdx}
                          className="relative rounded-2xl overflow-hidden aspect-16/10 shadow-md border-2 border-white group"
                        >
                          <img
                            src={thumb.src}
                            alt={thumb.alt}
                            className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/75 via-transparent to-transparent" />
                          <span className="absolute bottom-2 left-2.5 text-[10px] sm:text-xs text-ivory font-medium drop-shadow-xs">
                            {thumb.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 2. NARRATIVE & SPECIFICATIONS (6 cols) */}
                  <div className={cn(
                    'lg:col-span-6 space-y-5',
                    isEven ? 'lg:col-start-1' : ''
                  )}>
                    <div>
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-forest-deep leading-tight font-normal">
                        {category.title}
                      </h2>
                    </div>

                    <div className="space-y-3 text-xs sm:text-sm text-charcoal-muted leading-relaxed font-light">
                      <p>{category.paragraph1}</p>
                      <p>{category.paragraph2}</p>
                    </div>

                    {/* Venue Specs Checklist */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-[#FCFAF6] border border-stone-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)] ring-1 ring-inset ring-black/5 space-y-2.5">
                      <span className="text-[11px] uppercase tracking-wider text-charcoal-light font-semibold block mb-1">
                        Key Venue Highlights
                      </span>
                      {category.specs.map((item, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal">
                          <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Dual Action Buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <a
                        href={whatsappUrl}
                        target={getWhatsAppTarget()}
                        rel="noopener noreferrer"
                        className="group inline-flex items-center justify-center gap-2 pl-4 pr-2 py-2.5 rounded-full bg-gradient-to-r from-[#DFBF8E] via-[#C5A880] to-[#B39366] hover:from-[#E8CA9E] hover:to-[#C5A880] text-[#08130B] text-xs uppercase tracking-[0.12em] font-bold shadow-md hover:shadow-lg border border-[#F3DFC1] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
                      >
                        <WhatsAppIcon size="sm" className="text-[#08130B] shrink-0" />
                        <span>{category.buttonText}</span>
                        <span className="w-6 h-6 rounded-full bg-[#08130B] text-[#DFBF8E] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 shrink-0 shadow-inner">
                          <ArrowRight className="w-3.5 h-3.5 text-[#DFBF8E]" />
                        </span>
                      </a>

                      <a
                        href={`tel:${QUICK_CONTACT.phoneRaw}`}
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-white hover:bg-stone-50 border border-sand/50 text-xs uppercase tracking-wider font-semibold text-forest-deep shadow-xs transition-all duration-200 cursor-pointer whitespace-nowrap"
                      >
                        <Phone className="w-3.5 h-3.5 text-gold-dark" />
                        <span>CALL</span>
                      </a>
                    </div>

                  </div>

                </div>

              </Container>
            </section>
          );
        })}
      </div>


      {/* ========================================================
          3. CLOSING CTA (UNIFIED RADIANT CHAMPAGNE CARD)
          ======================================================== */}
      <ClosingCallToAction
        eyebrow="Event Planning · Sillari Gate"
        title="Plan Your Gathering at Go Flamingo Resort"
        description="Whether you need customized wedding mandap setups, executive conference dates, or social celebration lawns, our hospitality team will prepare a tailored package for your group."
        primaryBtnLabel="Plan Your Event Online"
        whatsappLabel="WhatsApp Event Inquiry"
        whatsappMsg="Hello Go Flamingo Resort, I would like to enquire about wedding, corporate, or celebration venue bookings."
      />

    </div>
  );
}
