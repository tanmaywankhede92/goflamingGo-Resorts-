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
      num: '5.1',
      badge: 'Forest Destination Weddings',
      title: 'Weddings & Sacred Vows',
      lead: 'A dedicated venue for wedding celebrations, sacred ceremonies, and memorable destination gatherings surrounded by ancient teak trees.',
      desc: 'Celebrate your special day with authentic Rajasthani haveli backdrops and open manicured lawns. From colorful mehendi afternoons to grand evening receptions under illuminated canopies, our venue accommodates up to 250+ guests with royal hospitality.',
      specs: [
        'Sprawling banquet lawns accommodating 250+ guests',
        'Grand floral mandap & themed mehendi stages',
        'Authentic Vidarbha & North Indian wedding feasts with live counters',
        '20 AC rooms & dormitory for family & guest accommodation',
        'Morning safari drives arranged for wedding attendees',
      ],
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
      whatsappMsg: 'Hello Go Flamingo Resort, I would like to enquire about wedding dates, lawn venue, and catering options.',
    },
    {
      id: 'corporate',
      num: '5.2',
      badge: 'Corporate Getaways & Offsites',
      title: 'Corporate Events & Team Retreats',
      lead: 'An inspiring wilderness environment for companies seeking executive strategy sessions, team bonding, and refreshing group getaways.',
      desc: 'Step away from urban boardroom fatigue. Just 65 km (1 hour) from Nagpur via 4-lane NH 44, GoFlamingo Resort combines distraction-free focus with high-energy wilderness bonding—including jungle safaris, lawn team games, and evening bonfire discussions.',
      specs: [
        'Dedicated team offsite planning & seamless logistics',
        'Synchronized morning Pench tiger safaris via Sillari Gate',
        'Expansive lawns for team-building outdoor activities',
        'Spacious group stay across 20 AC rooms and 1 group dormitory',
        'Customized corporate meal packages and evening barbecues',
      ],
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
          label: 'Bonfire Baithak & Evening Lawns',
        },
      ],
      whatsappMsg: 'Hello Go Flamingo Resort, I would like to enquire about hosting a corporate offsite / team retreat.',
    },
    {
      id: 'conferences',
      num: '5.3',
      badge: 'Meeting Facilities',
      title: 'Conferences & Meeting Facilities',
      lead: 'A dedicated air-conditioned conference room equipped for executive conclaves, workshops, and business presentations.',
      desc: 'Our private indoor conference hall provides a focused, professional setting amidst the calm of the forest. Featuring flexible seating setups, audio-visual support, and attentive food and beverage service throughout your proceedings.',
      specs: [
        'Dedicated air-conditioned Conference Hall',
        'Flexible seating configurations (Boardroom, U-Shape, Cluster, Theater)',
        'Audio-visual projection screen & sound system support',
        'High-speed Wi-Fi connectivity for presentations',
        'Continuous tea, coffee, cookies & executive lunch buffets',
      ],
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
      whatsappMsg: 'Hello Go Flamingo Resort, I would like to check availability for the Conference Room and meeting setup.',
    },
    {
      id: 'social-celebrations',
      num: '5.4',
      badge: 'Milestone Celebrations',
      title: 'Social Celebrations & Family Gatherings',
      lead: 'A vibrant setting for birthdays, anniversaries, family reunions, and festive milestones under starlit skies.',
      desc: 'Whether it is a 25th wedding anniversary, an energetic 50th birthday gala, or a long-awaited family reunion, we bring events to life with fairy-lit night lawns, poolside sundowners, rain dance mist sessions, and royal baithak seating.',
      specs: [
        'Illuminated night lawns with DJ and sound setup capabilities',
        'Rain dance arena with cooling mist showers and music',
        'Turquoise swimming pool and kids splash zone for daytime fun',
        'Royal VIP baithak seating with traditional red bolsters and low tables',
        'Delicious regional Vidarbha and multi-cuisine celebration feasts',
      ],
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
      whatsappMsg: 'Hello Go Flamingo Resort, I would like to enquire about hosting a family celebration / birthday party.',
    },
  ];

  return (
    <div className="w-full bg-ivory-pure text-charcoal font-sans antialiased overflow-x-hidden selection:bg-gold/30 selection:text-forest-deep">
      
      {/* ========================================================
          1. FULL-FRAME CINEMATIC HERO (100DVH VIEWPORT)
          ======================================================== */}
      <section className="relative w-full h-[100dvh] max-h-[100dvh] min-h-[580px] flex flex-col justify-end bg-forest-dark text-ivory overflow-hidden snap-start">
        {/* Full-Frame Background Image with Natural Lighter Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src={RESORT_DRIVE_PHOTOS.socialEventLawnNight.src}
            alt="Go Flamingo Resort evening lawn celebrations under fairy lights"
            fetchPriority="high"
            className="w-full h-full object-cover object-[center_top] sm:object-center filter brightness-[0.95] contrast-[1.03]"
          />
          {/* Gradients protecting text readability without over-darkening the scene */}
          <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-deep/60 to-forest-dark/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/90 via-forest-dark/40 to-transparent sm:block hidden" />
        </div>

        {/* Foreground Content */}
        <Container size="xl" className="relative z-10 w-full pt-28 sm:pt-36 md:pt-40 pb-8 sm:pb-12">
          <div className="max-w-3xl">

            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-black/40 border border-gold/45 text-gold-light text-[11px] sm:text-sm font-medium tracking-wide mb-3 sm:mb-4 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span>Venues & Gatherings • Sillari, Pench</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-ivory font-normal tracking-tight leading-[1.12] mb-3 sm:mb-4 text-balance drop-shadow-sm">
              Events & <span className="text-gold font-serif italic">Celebrations</span>
            </h1>

            {/* Concise Supporting Copy */}
            <p className="text-xs sm:text-base md:text-lg text-sand-light/95 leading-relaxed font-light mb-6 sm:mb-8 max-w-2xl border-l-2 border-gold/70 pl-3 sm:pl-3.5 drop-shadow-xs">
              The resort features dedicated facilities across four distinct event categories—from forest destination weddings and company offsites to air-conditioned conferences and joyful milestone gatherings.
            </p>

            {/* MOBILE ONLY: Single Clean Explore Action */}
            <div className="sm:hidden flex items-center pt-1 pb-2">
              <button
                type="button"
                onClick={() => scrollToCategory('weddings')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 hover:bg-white/30 active:bg-white/40 text-ivory border border-white/30 text-xs font-semibold uppercase tracking-wider backdrop-blur-md cursor-pointer transition-all shadow-md"
              >
                <span>Explore 4 Categories</span>
                <ArrowDown className="w-3.5 h-3.5 text-gold animate-bounce" />
              </button>
            </div>

            {/* DESKTOP ONLY: 4 Category Jump Pills Bar */}
            <div className="hidden sm:flex flex-wrap items-center gap-2.5 pt-1">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => scrollToCategory(cat.id)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-forest-dark/80 hover:bg-gold hover:text-forest-deep text-ivory border border-sand/30 hover:border-gold text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
                >
                  <span className="text-gold group-hover:text-forest-deep font-bold">{cat.num}</span>
                  <span>{cat.id === 'social-celebrations' ? 'Social Celebrations' : cat.title.split('&')[0].trim()}</span>
                  <ArrowDown className="w-3 h-3 ml-0.5 opacity-70" />
                </button>
              ))}
            </div>

          </div>
        </Container>

        {/* Bottom Quick Jump Anchor Strip */}
        <div className="relative z-10 w-full border-t border-sand/20 bg-forest-deep/95 backdrop-blur-md py-3.5 sm:py-4 shadow-lg">
          <Container size="xl">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-center divide-x-0 sm:divide-x divide-sand/15">
              {categories.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => scrollToCategory(c.id)}
                  className="px-2 text-left sm:text-center group cursor-pointer transition-colors"
                >
                  <span className="block text-[10px] sm:text-[11px] uppercase tracking-wider text-sand-dark font-medium group-hover:text-gold">
                    {c.num} Category
                  </span>
                  <span className="text-xs sm:text-sm font-serif font-bold text-ivory group-hover:text-gold flex items-center justify-start sm:justify-center gap-1">
                    <span>{c.badge.replace('Forest Destination ', '').replace('Meeting Facilities', 'Conferences')}</span>
                  </span>
                </button>
              ))}
            </div>
          </Container>
        </div>
      </section>


      {/* ========================================================
          2. THE 4 EVENT CATEGORIES DETAILED SECTIONS
          ======================================================== */}
      <div className="py-12 sm:py-16 space-y-16 sm:space-y-24 bg-white">
        {categories.map((category, idx) => {
          const isEven = idx % 2 === 1;
          const whatsappUrl = `https://wa.me/919372425968?text=${encodeURIComponent(category.whatsappMsg)}`;

          return (
            <section
              key={category.id}
              id={category.id}
              className="scroll-mt-24 border-b border-sand/20 pb-16 sm:pb-24 last:border-b-0"
            >
              <Container size="xl">
                
                {/* Section Top Header Pill */}
                <div className="flex items-center justify-between gap-4 mb-6 sm:mb-8">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/15 border border-gold/40 text-gold-dark text-xs font-semibold tracking-wider uppercase">
                    <span>Category {category.num}</span>
                    <span className="text-stone-400">•</span>
                    <span>{category.badge}</span>
                  </div>

                  <span className="hidden sm:inline-block text-xs uppercase tracking-widest text-charcoal-light font-medium">
                    GoFlamingo Venues
                  </span>
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
                      <p className="text-sm sm:text-base text-forest-jungle font-medium mt-2 leading-snug">
                        {category.lead}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-light">
                      {category.desc}
                    </p>

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
                        <span>Enquire for {category.title.split('&')[0].trim()}</span>
                        <span className="w-6 h-6 rounded-full bg-[#08130B] text-[#DFBF8E] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 shrink-0 shadow-inner">
                          <ArrowRight className="w-3.5 h-3.5 text-[#DFBF8E]" />
                        </span>
                      </a>

                      <a
                        href={`tel:${QUICK_CONTACT.phoneRaw}`}
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-white hover:bg-stone-50 border border-sand/50 text-xs uppercase tracking-wider font-semibold text-forest-deep shadow-xs transition-all duration-200 cursor-pointer whitespace-nowrap"
                      >
                        <Phone className="w-3.5 h-3.5 text-gold-dark" />
                        <span>Call Desk</span>
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
          3. MASTER EVENT ENQUIRY CARD (LUXURY SHADOWED BOX)
          ======================================================== */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-[#FAF6F1] text-charcoal border-t border-stone-200/80 overflow-hidden">
        
        {/* Ambient subtle glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#163824]/5 rounded-full blur-3xl pointer-events-none" />

        <Container size="lg" className="relative z-10">
          
          <div className="relative rounded-3xl border-2 border-[#C5A880]/40 bg-gradient-to-br from-[#0F291B] via-[#0C2417] to-[#07160E] p-8 sm:p-12 md:p-14 text-center shadow-[0_20px_50px_-15px_rgba(15,41,27,0.4)] overflow-hidden ring-1 ring-inset ring-white/10">

            {/* Inner champagne & emerald light glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-[220px] bg-[#C5A880]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-10 w-60 h-60 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

            {/* Eyebrow Pill */}
            <div className="relative z-10 inline-flex items-center px-4 py-1 rounded-full bg-white/10 border border-[#C5A880]/40 text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#DFBF8E] font-semibold mb-4 backdrop-blur-sm">
              <span>Event Coordinator Desk · Pench</span>
            </div>

            {/* Headline */}
            <h2 className="relative z-10 font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-normal leading-[1.2] text-white mb-3.5 max-w-2xl mx-auto text-balance">
              Plan Your Gathering at Go Flamingo Resort
            </h2>

            {/* Supporting Copy */}
            <p className="relative z-10 font-sans text-xs sm:text-sm md:text-base text-sand-light/85 max-w-lg mx-auto mb-8 font-light leading-relaxed">
              Whether you need customized wedding mandap setups, executive conference dates, or social celebration lawns, our hospitality team will prepare a tailored package for your group.
            </p>

            {/* High-Intent Dual Actions with Signature Home Page Arrow Capsule */}
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-xl mx-auto mb-8">
              
              {/* WhatsApp Coordinator Action */}
              <a
                href="https://wa.me/919372425968?text=Hello%20Go%20Flamingo%20Resort%2C%20I%20would%20like%20to%20enquire%20about%20event%20and%20wedding%20venue%20bookings."
                target={getWhatsAppTarget()}
                rel="noopener noreferrer"
                className="group flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 pl-4 pr-2 py-2.5 rounded-full bg-gradient-to-r from-[#DFBF8E] via-[#C5A880] to-[#B39366] hover:from-[#E8CA9E] hover:to-[#C5A880] text-[#08130B] text-xs uppercase tracking-[0.12em] font-bold shadow-[0_4px_16px_rgba(197,168,128,0.25)] hover:shadow-[0_6px_22px_rgba(197,168,128,0.4)] border border-[#F3DFC1] transition-all duration-300 w-full sm:w-auto cursor-pointer whitespace-nowrap"
              >
                <WhatsAppIcon size="sm" className="text-[#08130B] shrink-0" />
                <span>WhatsApp Event Desk</span>
                <span className="w-6 h-6 rounded-full bg-[#08130B] text-[#DFBF8E] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 shrink-0 shadow-inner">
                  <ArrowRight className="w-3.5 h-3.5 text-[#DFBF8E]" />
                </span>
              </a>

              {/* Direct Call Button */}
              <a
                href={`tel:${QUICK_CONTACT.phoneRaw}`}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs uppercase tracking-[0.10em] font-semibold text-white backdrop-blur-sm transition-all duration-200 w-full sm:w-auto whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5 text-gold-light" />
                <span>Call {QUICK_CONTACT.phone}</span>
              </a>

            </div>

            {/* Reassurance Footer Strip */}
            <div className="relative z-10 pt-6 border-t border-white/15 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-sand-light/75 font-light">
              <span>
                Direct Coordination:{' '}
                <a href="tel:+919561957009" className="text-[#DFBF8E] font-semibold hover:underline">
                  +91 95619 57009
                </a>
              </span>
              <span className="hidden sm:inline text-white/30">·</span>
              <span>20 Rooms & Dormitory Accommodation Available</span>
              <span className="hidden sm:inline text-white/30">·</span>
              <span className="text-[#DFBF8E] font-medium inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Sillari Gate, Pench National Park (1 Hr from Nagpur)</span>
              </span>
            </div>

          </div>

        </Container>
      </section>

    </div>
  );
}
