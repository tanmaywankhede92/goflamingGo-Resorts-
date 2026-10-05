import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageHero from '../../components/hero/PageHero';
import {
  Container,
  Heading,
  Text,
  SectionEyebrow,
  Button,
  Badge,
  WhatsAppIcon,
} from '../../components/common';
import { IMAGES } from '../../data/images';
import { QUICK_CONTACT } from '../../data/navigation';
import { cn } from '../../utils/cn';

// Room category data definitions
const ROOMS_DATA = {
  'luxury-cottage': {
    slug: 'luxury-cottage',
    title: 'Luxury Forest Cottage',
    subtitle: 'Standalone sanctuary beneath the teak canopy with an expansive private verandah and serene forest views.',
    badge: 'Couples & Solo Explorers',
    eyebrow: 'Sanctuary in the Forest',
    heroImage: IMAGES.rooms.cottage,
    gallery: [
      { src: IMAGES.rooms.cottage, alt: 'Luxury Forest Cottage Bedroom with Verandah View' },
      { src: IMAGES.rooms.verandah, alt: 'Private Wooden Verandah with Morning Masala Chai' },
      { src: IMAGES.rooms.bathroom, alt: 'Natural Stone En-Suite Bathroom with Rain Shower' },
      { src: IMAGES.rooms.hero, alt: 'Cottage Exterior nestled among Pench Teak Trees' },
    ],
    specs: {
      occupancy: '2 Adults (Optional extra bed on request)',
      bedType: 'Handcrafted Teak King Bed',
      verandah: 'Private Wooden Sit-Out facing Teak Canopy',
      view: 'Forest Canopy & Native Garden',
      bathroom: 'En-suite Stone Bath with Walk-in Shower',
      climate: 'Individual Split Air-Conditioning & Fan',
    },
    story: `Step into an unhurried world crafted from natural sandstone, warm timber rafters, and earthy Central Indian hues. The Luxury Forest Cottage is an independent standalone retreat situated under the cooling canopy of mature teak trees. 

Large glass French doors bring the wild outdoors into your bedroom. In the early morning, wake to the rhythmic dawn calls of coucals and jungle babblers, sip freshly brewed masala chai on your private wooden verandah, and prepare for your morning safari drive just minutes from Sillari Gate.`,
    highlights: [
      'Generous standalone cottage layout ensuring complete privacy',
      'Direct forest-facing private wooden verandah with cane armchairs',
      'Handcrafted teakwood king bed with premium high thread-count cotton linens',
      'Artisanal stone bathroom with hot & cold rain shower and herbal toiletries',
      'Quiet split air-conditioning ensuring deep rest during warm afternoons',
      'Complimentary early morning safari wake-up tea & biscuits',
    ],
    amenities: [
      { category: 'Bedding & Comfort', items: ['Plush King Bed', 'Hypoallergenic Pillows', 'Crisp Cotton Linens', 'Luggage Bench', 'Wardrobe & Hangers'] },
      { category: 'Verandah & Outdoors', items: ['Private Wooden Sit-out', 'Cane Armchairs & Table', 'Forest Canopy View', 'Ambient Lantern Lighting'] },
      { category: 'Bathroom & Care', items: ['En-suite River-Stone Bath', 'Walk-in Rain Shower', '24/7 Hot Running Water', 'Fluffy Cotton Towels', 'Artisanal Toiletries'] },
      { category: 'Hospitality & Safari', items: ['Early Safari Wake-up Call', 'Morning Tea/Coffee Station', 'Forest Pool Access', 'Daily Housekeeping', 'Complimentary Parking'] },
    ],
    idealFor: 'Couples looking for a peaceful wilderness escape, wildlife photographers seeking early access to Sillari Gate, and solo travelers desiring restorative nature immersion.',
    otherCategory: {
      slug: 'family-suite',
      title: 'Spacious Family Suite',
      image: IMAGES.rooms.suite,
      desc: 'Spacious multi-bed suite with vaulted timber ceiling designed for families and small groups.',
    },
  },
  'family-suite': {
    slug: 'family-suite',
    title: 'Spacious Family Suite',
    subtitle: 'Expansive family retreat with vaulted timber ceilings, dedicated lounge area, and seamless garden connection.',
    badge: 'Families & Travel Groups',
    eyebrow: 'Bonding in Nature',
    heroImage: IMAGES.rooms.suite,
    gallery: [
      { src: IMAGES.rooms.suite, alt: 'Spacious Family Suite with Master Bed and Lounge' },
      { src: IMAGES.rooms.verandah, alt: 'Private Sit-Out Verandah overlooking Garden Greenery' },
      { src: IMAGES.rooms.bathroom, alt: 'Spacious Stone En-suite Bathroom' },
      { src: IMAGES.rooms.hero, alt: 'Standalone Cottage Pathways at Go Flamingo' },
    ],
    specs: {
      occupancy: 'Up to 4 Guests (2 Adults + 2 Children or 3 Adults)',
      bedType: '1 King Bed + Comfortable Daybed / Twin Setup',
      verandah: 'Expansive Verandah with Garden Access',
      view: 'Lush Forest Gardens & Teak Groves',
      bathroom: 'Generous En-suite Stone Bath with Rain Shower',
      climate: 'Dual Air-Conditioning & Ceiling Fans',
    },
    story: `Traveling to Pench with family should mean shared laughter, communal story-swapping, and ample space for everyone to unwind comfortably. The Spacious Family Suite features high vaulted ceilings supported by rustic timber trusses, imparting an airy, open feel reminiscent of classic Indian forest lodges.

The layout thoughtfully balances togetherness with personal space: a plush master king sleeping zone transitions into a cozy living alcove with a daybed for children or extra companions. Large window doors open out onto serene lawns where young explorers can spot butterflies under the safe shade of ancient trees.`,
    highlights: [
      'Expansive open-plan suite comfortably accommodating family dynamics',
      'Distinct master sleeping space and cozy daybed/lounge corner',
      'Vaulted ceilings and warm wooden beams providing an airy forest lodge atmosphere',
      'Private verandah with direct access to safe, manicured resort lawns',
      'Generous en-suite stone bathroom designed for easy family use',
      'Complimentary early morning safari wake-up service and kid-friendly breakfast options',
    ],
    amenities: [
      { category: 'Bedding & Comfort', items: ['1 King Bed + Twin Daybed', 'Extra Mattresses on Request', 'Crisp Cotton Linens', 'Comfortable Lounge Seating', 'Generous Wardrobe Space'] },
      { category: 'Verandah & Outdoors', items: ['Extended Private Verandah', 'Garden Seating Table', 'Safe Lawn Proximity', 'Ambient Evening Lighting'] },
      { category: 'Bathroom & Care', items: ['Spacious Stone En-suite', 'Rain Shower with 24/7 Hot Water', 'Family Towel Sets', 'Child-Friendly Amenities', 'Artisanal Herbal Toiletries'] },
      { category: 'Hospitality & Safari', items: ['Early Safari Wake-up Call', 'Tea & Milk Station', 'Forest Pool & Kids Section', 'Daily Housekeeping', 'Complimentary Parking'] },
    ],
    idealFor: 'Multi-generational families traveling with children or grandparents, and small groups of friends seeking a comfortable shared home base for Pench wildlife adventures.',
    otherCategory: {
      slug: 'luxury-cottage',
      title: 'Luxury Forest Cottage',
      image: IMAGES.rooms.cottage,
      desc: 'Independent standalone cottage with private sit-out verandah, perfect for couples and quiet wilderness retreats.',
    },
  },
};

/**
 * 1. ROOMS OVERVIEW PAGE (`/rooms`)
 * World-class editorial showcase of all accommodations at Go Flamingo Resort.
 */
export function RoomsOverview() {
  const [filter, setFilter] = useState('all'); // 'all' | 'cottage' | 'suite'

  return (
    <div className="w-full bg-ivory-pure text-charcoal font-sans selection:bg-gold/30 selection:text-forest-deep">
      
      {/* ========================================================
          01. HERO
          ======================================================== */}
      <PageHero
        variant="large"
        badge="Forest Sanctuary · Sillari Gate"
        eyebrow="ACCOMMODATIONS & COTTAGES"
        title="Rest well. Wake to the wild."
        subtitle="Thoughtfully appointed standalone cottages nestled under the mature teak canopy of Pench. Private verandahs, natural materials, and the unhurried warmth of Indian hospitality."
        image={IMAGES.rooms.hero}
        imageAlt="Standalone sandstone cottages at Go Flamingo Resort nestled under Pench teak forest in golden morning light"
        breadcrumbs={[{ label: 'Stay' }]}
        actions={[
          { label: 'Check Availability', to: '/book', variant: 'gold' },
          { label: 'View Safari Itineraries', to: '/packages', variant: 'inverted' },
        ]}
      />

      {/* ========================================================
          02. SANCTUARY PHILOSOPHY & FILTER BAR
          ======================================================== */}
      <section className="py-12 bg-ivory-warm/60 border-b border-sand/30">
        <Container size="xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="text-[0.6875rem] uppercase tracking-wider text-charcoal-muted font-semibold block mb-1">
                Accommodations Portfolio
              </span>
              <h2 className="font-serif text-xl sm:text-2xl text-forest-deep font-semibold">
                Designed to let the forest in.
              </h2>
            </div>

            {/* Quick Filter Switcher */}
            <div className="flex items-center gap-2 p-1.5 rounded-[4px] bg-ivory border border-sand/40 self-start md:self-auto">
              <button
                type="button"
                onClick={() => setFilter('all')}
                className={cn(
                  'px-4 py-2 rounded-[3px] text-xs uppercase tracking-wider font-semibold transition-all',
                  filter === 'all'
                    ? 'bg-forest text-ivory shadow-xs'
                    : 'text-charcoal-muted hover:text-forest'
                )}
              >
                All Accommodations
              </button>
              <button
                type="button"
                onClick={() => setFilter('cottage')}
                className={cn(
                  'px-4 py-2 rounded-[3px] text-xs uppercase tracking-wider font-semibold transition-all',
                  filter === 'cottage'
                    ? 'bg-forest text-ivory shadow-xs'
                    : 'text-charcoal-muted hover:text-forest'
                )}
              >
                Luxury Cottages
              </button>
              <button
                type="button"
                onClick={() => setFilter('suite')}
                className={cn(
                  'px-4 py-2 rounded-[3px] text-xs uppercase tracking-wider font-semibold transition-all',
                  filter === 'suite'
                    ? 'bg-forest text-ivory shadow-xs'
                    : 'text-charcoal-muted hover:text-forest'
                )}
              >
                Family Suites
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================
          03. DETAILED ROOM CATEGORIES SHOWCASE
          ======================================================== */}
      <section className="py-20 md:py-28">
        <Container size="xl">
          <div className="space-y-20">

            {/* ROOM CATEGORY 01: Luxury Forest Cottage */}
            {(filter === 'all' || filter === 'cottage') && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                
                {/* Visual Side (7 Cols) */}
                <div className="lg:col-span-7">
                  <div className="relative group overflow-hidden rounded-[4px] bg-forest-dark border border-sand/30 shadow-md">
                    <img
                      src={IMAGES.rooms.cottage}
                      alt="Luxury Forest Cottage Bedroom with French doors opening to private wooden verandah"
                      loading="lazy"
                      className="w-full aspect-[16/10] object-cover group-hover:scale-103 transition-transform duration-700 ease-slow"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent opacity-60" />
                    <div className="absolute top-4 left-4">
                      <Badge variant="gold">Couples & Solo Explorers</Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 text-ivory">
                      <span className="text-[0.6875rem] uppercase tracking-wider text-gold font-semibold block mb-1">
                        Private Verandah Living
                      </span>
                      <p className="text-xs sm:text-sm text-sand-light font-light max-w-lg leading-relaxed">
                        Handcrafted teak king bed, wooden rafters, and glass doors looking out into native teak canopy.
                      </p>
                    </div>
                  </div>

                  {/* Thumbnail Row */}
                  <div className="grid grid-cols-3 gap-3 mt-3">
                    <div className="aspect-[16/10] overflow-hidden rounded-[2px] border border-sand/30">
                      <img src={IMAGES.rooms.verandah} alt="Verandah morning tea" className="w-full h-full object-cover" />
                    </div>
                    <div className="aspect-[16/10] overflow-hidden rounded-[2px] border border-sand/30">
                      <img src={IMAGES.rooms.bathroom} alt="Stone en-suite bathroom" className="w-full h-full object-cover" />
                    </div>
                    <div className="aspect-[16/10] overflow-hidden rounded-[2px] border border-sand/30">
                      <img src={IMAGES.rooms.hero} alt="Cottage exterior grounds" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>

                {/* Narrative Side (5 Cols) */}
                <div className="lg:col-span-5 space-y-5">
                  <SectionEyebrow color="terracotta" withLine>
                    Category 01 · Standalone Cottage
                  </SectionEyebrow>
                  <Heading as="h2" variant="h2" font="serif" color="forest" className="leading-[1.15]">
                    Luxury Forest Cottage
                  </Heading>
                  <Text variant="body" color="muted" className="leading-relaxed font-light">
                    An independent standalone haven nestled beneath tall teak trees. Crafted with warm timber beams, local sandstone walls, and private wooden sit-outs that catch dawn birdsong and gentle forest breezes.
                  </Text>

                  {/* Key Specifications Grid */}
                  <div className="grid grid-cols-2 gap-3 py-3 border-y border-sand/30 text-xs">
                    <div>
                      <span className="text-charcoal-muted uppercase tracking-wider block text-[0.6875rem]">Occupancy</span>
                      <strong className="text-forest font-semibold block mt-0.5">2 Adults</strong>
                    </div>
                    <div>
                      <span className="text-charcoal-muted uppercase tracking-wider block text-[0.6875rem]">Bedding</span>
                      <strong className="text-forest font-semibold block mt-0.5">Teak King Bed</strong>
                    </div>
                    <div>
                      <span className="text-charcoal-muted uppercase tracking-wider block text-[0.6875rem]">Verandah</span>
                      <strong className="text-forest font-semibold block mt-0.5">Private Forest Sit-out</strong>
                    </div>
                    <div>
                      <span className="text-charcoal-muted uppercase tracking-wider block text-[0.6875rem]">Bath</span>
                      <strong className="text-forest font-semibold block mt-0.5">En-suite Stone Shower</strong>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 pt-1">
                    <div className="flex items-center gap-2 text-xs text-charcoal-soft font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      <span>Complimentary morning safari wake-up tea served at your verandah</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-charcoal-soft font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      <span>Split air-conditioning for comfortable post-safari relaxation</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-charcoal-soft font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      <span>Just minutes from Sillari Gate for effortless early morning safari access</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-3">
                    <Button as={Link} to="/rooms/luxury-cottage" variant="primary" size="md">
                      Explore Cottage Details →
                    </Button>
                    <Button as={Link} to="/book" variant="gold" size="md">
                      Check Availability
                    </Button>
                  </div>
                </div>

              </div>
            )}

            {/* ROOM CATEGORY 02: Spacious Family Suite */}
            {(filter === 'all' || filter === 'suite') && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center pt-8 border-t border-sand/30">
                
                {/* Narrative Side (5 Cols - Desktop Order 1) */}
                <div className="lg:col-span-5 space-y-5 order-2 lg:order-1">
                  <SectionEyebrow color="terracotta" withLine>
                    Category 02 · Family & Group Retreat
                  </SectionEyebrow>
                  <Heading as="h2" variant="h2" font="serif" color="forest" className="leading-[1.15]">
                    Spacious Family Suite
                  </Heading>
                  <Text variant="body" color="muted" className="leading-relaxed font-light">
                    Designed for multi-generational families and travel groups desiring shared togetherness without compromise. Featuring high vaulted timber ceilings, a distinct master sleeping zone, and an inviting daybed lounge area for children.
                  </Text>

                  {/* Key Specifications Grid */}
                  <div className="grid grid-cols-2 gap-3 py-3 border-y border-sand/30 text-xs">
                    <div>
                      <span className="text-charcoal-muted uppercase tracking-wider block text-[0.6875rem]">Occupancy</span>
                      <strong className="text-forest font-semibold block mt-0.5">Up to 4 Guests</strong>
                    </div>
                    <div>
                      <span className="text-charcoal-muted uppercase tracking-wider block text-[0.6875rem]">Bedding</span>
                      <strong className="text-forest font-semibold block mt-0.5">1 King + Twin Daybed</strong>
                    </div>
                    <div>
                      <span className="text-charcoal-muted uppercase tracking-wider block text-[0.6875rem]">Verandah</span>
                      <strong className="text-forest font-semibold block mt-0.5">Extended Garden Verandah</strong>
                    </div>
                    <div>
                      <span className="text-charcoal-muted uppercase tracking-wider block text-[0.6875rem]">Setting</span>
                      <strong className="text-forest font-semibold block mt-0.5">Direct Lawn Access</strong>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 pt-1">
                    <div className="flex items-center gap-2 text-xs text-charcoal-soft font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-terracotta shrink-0" />
                      <span>Comfortable shared layout accommodating parents, kids, or grandparents</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-charcoal-soft font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-terracotta shrink-0" />
                      <span>Direct proximity to safe green lawns and natural swimming pool</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-charcoal-soft font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-terracotta shrink-0" />
                      <span>Custom family meal options and early morning safari breakfast packs</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-3">
                    <Button as={Link} to="/rooms/family-suite" variant="primary" size="md">
                      Explore Suite Details →
                    </Button>
                    <Button as={Link} to="/book" variant="gold" size="md">
                      Check Availability
                    </Button>
                  </div>
                </div>

                {/* Visual Side (7 Cols - Desktop Order 2) */}
                <div className="lg:col-span-7 order-1 lg:order-2">
                  <div className="relative group overflow-hidden rounded-[4px] bg-forest-dark border border-sand/30 shadow-md">
                    <img
                      src={IMAGES.rooms.suite}
                      alt="Spacious Family Suite with vaulted timber ceiling, master bed, and comfortable daybed lounge"
                      loading="lazy"
                      className="w-full aspect-[16/10] object-cover group-hover:scale-103 transition-transform duration-700 ease-slow"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent opacity-60" />
                    <div className="absolute top-4 left-4">
                      <Badge variant="terracotta">Families & Travel Groups</Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 text-ivory">
                      <span className="text-[0.6875rem] uppercase tracking-wider text-gold font-semibold block mb-1">
                        Open-Plan Forest Living
                      </span>
                      <p className="text-xs sm:text-sm text-sand-light font-light max-w-lg leading-relaxed">
                        Vaulted timber ceiling, distinct sleeping zones, study desk, and lush garden outlook.
                      </p>
                    </div>
                  </div>

                  {/* Thumbnail Row */}
                  <div className="grid grid-cols-3 gap-3 mt-3">
                    <div className="aspect-[16/10] overflow-hidden rounded-[2px] border border-sand/30">
                      <img src={IMAGES.rooms.verandah} alt="Private verandah tea" className="w-full h-full object-cover" />
                    </div>
                    <div className="aspect-[16/10] overflow-hidden rounded-[2px] border border-sand/30">
                      <img src={IMAGES.rooms.bathroom} alt="Stone en-suite bathroom" className="w-full h-full object-cover" />
                    </div>
                    <div className="aspect-[16/10] overflow-hidden rounded-[2px] border border-sand/30">
                      <img src={IMAGES.home.family} alt="Family laughing on resort lawns" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>

              </div>
            )}

          </div>
        </Container>
      </section>

      {/* ========================================================
          04. IN-ROOM AMENITIES GRID
          ======================================================== */}
      <section className="py-20 bg-ivory-warm/40 border-y border-sand/25">
        <Container size="xl">
          <div className="max-w-2xl mx-auto text-center mb-14 space-y-3">
            <Badge variant="forest">Thoughtful Comfort</Badge>
            <SectionEyebrow color="terracotta" withLine className="justify-center">
              Amenities & Inclusions
            </SectionEyebrow>
            <Heading as="h2" variant="h2" font="serif" color="forest">
              Everything for a restful forest stay.
            </Heading>
            <Text variant="body" color="muted" className="font-light">
              We focus on warm, essential comforts that elevate your wilderness holiday without excessive technological clutter.
            </Text>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-[3px] bg-ivory border border-sand/40 space-y-2.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-forest block">
                Climate & Comfort
              </span>
              <p className="text-xs text-charcoal-muted leading-relaxed font-light">
                Quiet split air-conditioning and ceiling fans ensure deep, restful sleep through warm Central Indian afternoons.
              </p>
            </div>

            <div className="p-6 rounded-[3px] bg-ivory border border-sand/40 space-y-2.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-forest block">
                Private Sit-Out Verandah
              </span>
              <p className="text-xs text-charcoal-muted leading-relaxed font-light">
                Every cottage features an independent wooden verandah with cane armchairs facing mature teak trees.
              </p>
            </div>

            <div className="p-6 rounded-[3px] bg-ivory border border-sand/40 space-y-2.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-forest block">
                Stone En-Suite Baths
              </span>
              <p className="text-xs text-charcoal-muted leading-relaxed font-light">
                Walk-in stone rain showers with 24/7 hot running water, fluffy cotton bath sheets, and natural herbal soaps.
              </p>
            </div>

            <div className="p-6 rounded-[3px] bg-ivory border border-sand/40 space-y-2.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-forest block">
                Dawn Safari Wake-up Call
              </span>
              <p className="text-xs text-charcoal-muted leading-relaxed font-light">
                Gentle early wake-up knock accompanied by hot spiced chai or coffee and biscuits before your morning game drive.
              </p>
            </div>

            <div className="p-6 rounded-[3px] bg-ivory border border-sand/40 space-y-2.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-forest block">
                Forest Pool Access
              </span>
              <p className="text-xs text-charcoal-muted leading-relaxed font-light">
                Complimentary access to the natural stone swimming pool surrounded by leafy forest greenery and sun loungers.
              </p>
            </div>

            <div className="p-6 rounded-[3px] bg-ivory border border-sand/40 space-y-2.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-forest block">
                Tea & Coffee Station
              </span>
              <p className="text-xs text-charcoal-muted leading-relaxed font-light">
                In-room electric kettle with curated Indian teas, coffee, and pure drinking water replenished daily.
              </p>
            </div>

            <div className="p-6 rounded-[3px] bg-ivory border border-sand/40 space-y-2.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-forest block">
                Attentive Housekeeping
              </span>
              <p className="text-xs text-charcoal-muted leading-relaxed font-light">
                Daily cleaning, evening turn-down, and prompt assistance from our dedicated on-site hospitality staff.
              </p>
            </div>

            <div className="p-6 rounded-[3px] bg-ivory border border-sand/40 space-y-2.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-forest block">
                Safari Permit Coordination
              </span>
              <p className="text-xs text-charcoal-muted leading-relaxed font-light">
                Direct guidance for Sillari Gate booking, verified Gypsy allocation, and certified forest naturalist briefing.
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================
          05. A DAY IN THE WILD — STAY RHYTHM
          ======================================================== */}
      <section className="py-20 md:py-28 bg-forest-dark text-ivory relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-deep/90 to-forest-dark" />

        <Container size="xl" className="relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
            <Badge variant="gold">The Safari Rhythm</Badge>
            <SectionEyebrow color="gold" withLine className="justify-center text-gold-light">
              Experience Flow
            </SectionEyebrow>
            <Heading as="h2" variant="h2" font="serif" className="text-ivory">
              A day of forest living at Go Flamingo.
            </Heading>
            <Text variant="lead" className="text-sand/80 font-light">
              Life in Pench moves to the rhythm of the forest. Here is how your days unfold.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-[3px] bg-forest-deep/80 border border-sand/20 space-y-2">
              <span className="text-gold font-serif text-xl block">05:00 AM</span>
              <h3 className="font-serif text-lg text-ivory">Dawn Wake-up & Chai</h3>
              <p className="text-xs text-sand/75 font-light leading-relaxed">
                A warm knock at your cottage door. Steaming masala chai and biscuits served on your verandah as the forest begins to stir.
              </p>
            </div>

            <div className="p-6 rounded-[3px] bg-forest-deep/80 border border-sand/20 space-y-2">
              <span className="text-gold font-serif text-xl block">05:45 AM</span>
              <h3 className="font-serif text-lg text-ivory">Morning Game Drive</h3>
              <p className="text-xs text-sand/75 font-light leading-relaxed">
                Board your open 4x4 Gypsy at Sillari Gate just minutes away. Track fresh pugmarks through golden mist in the core zone.
              </p>
            </div>

            <div className="p-6 rounded-[3px] bg-forest-deep/80 border border-sand/20 space-y-2">
              <span className="text-gold font-serif text-xl block">10:30 AM</span>
              <h3 className="font-serif text-lg text-ivory">Hearty Forest Breakfast</h3>
              <p className="text-xs text-sand/75 font-light leading-relaxed">
                Return dusty and exhilarated to an expansive spread of regional poha, parathas, fresh fruits, eggs, and freshly brewed coffee.
              </p>
            </div>

            <div className="p-6 rounded-[3px] bg-forest-deep/80 border border-sand/20 space-y-2">
              <span className="text-gold font-serif text-xl block">01:00 PM</span>
              <h3 className="font-serif text-lg text-ivory">Pool & Verandah Rest</h3>
              <p className="text-xs text-sand/75 font-light leading-relaxed">
                Cool down with an afternoon swim in the natural stone pool, followed by an undisturbed afternoon nap or reading session.
              </p>
            </div>

            <div className="p-6 rounded-[3px] bg-forest-deep/80 border border-sand/20 space-y-2">
              <span className="text-gold font-serif text-xl block">03:30 PM</span>
              <h3 className="font-serif text-lg text-ivory">Evening Safari or Trail</h3>
              <p className="text-xs text-sand/75 font-light leading-relaxed">
                Head out for the afternoon safari shift or take a gentle guided nature trail around the forest buffer to spot rare birds.
              </p>
            </div>

            <div className="p-6 rounded-[3px] bg-forest-deep/80 border border-sand/20 space-y-2">
              <span className="text-gold font-serif text-xl block">07:30 PM</span>
              <h3 className="font-serif text-lg text-ivory">Bonfire & Starlit Dinner</h3>
              <p className="text-xs text-sand/75 font-light leading-relaxed">
                Gather around the crackling lawn bonfire to trade tiger sighting stories, followed by home-style regional dinner under clear skies.
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================
          06. QUICK COMPARISON MATRIX
          ======================================================== */}
      <section className="py-20">
        <Container size="xl">
          <SectionEyebrow color="terracotta" withLine className="mb-2">
            At a Glance
          </SectionEyebrow>
          <Heading as="h2" variant="h2" font="serif" color="forest" className="mb-8">
            Compare Accommodations
          </Heading>

          <div className="overflow-x-auto border border-sand/40 rounded-[3px] bg-ivory">
            <table className="w-full text-left text-xs">
              <thead className="bg-sand-light/60 border-b border-sand/30 font-semibold text-forest uppercase tracking-wider">
                <tr>
                  <th className="p-4 sm:p-5">Feature</th>
                  <th className="p-4 sm:p-5">Luxury Forest Cottage</th>
                  <th className="p-4 sm:p-5">Spacious Family Suite</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sand/20">
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-forest-deep">Standard Occupancy</td>
                  <td className="p-4 sm:p-5 text-charcoal">2 Adults</td>
                  <td className="p-4 sm:p-5 text-charcoal">Up to 4 Guests (2 Adults + 2 Kids or 3 Adults)</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-forest-deep">Bedding Configuration</td>
                  <td className="p-4 sm:p-5 text-charcoal">1 Handcrafted King Bed</td>
                  <td className="p-4 sm:p-5 text-charcoal">1 King Bed + Twin Daybed / Sofa</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-forest-deep">Verandah Type</td>
                  <td className="p-4 sm:p-5 text-charcoal">Private Sit-out with Forest Canopy View</td>
                  <td className="p-4 sm:p-5 text-charcoal">Extended Verandah with Garden Lawn Access</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-forest-deep">Bathroom Setup</td>
                  <td className="p-4 sm:p-5 text-charcoal">En-suite River-Stone Bath & Shower</td>
                  <td className="p-4 sm:p-5 text-charcoal">Generous Family En-suite Bath & Shower</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-forest-deep">Climate Control</td>
                  <td className="p-4 sm:p-5 text-charcoal">Split Air Conditioning & Fan</td>
                  <td className="p-4 sm:p-5 text-charcoal">Dual Air Conditioning & Ceiling Fans</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-forest-deep">Ideal For</td>
                  <td className="p-4 sm:p-5 text-charcoal">Couples, Solo Travelers, Photographers</td>
                  <td className="p-4 sm:p-5 text-charcoal">Families with Children, Group Companions</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-forest-deep">Direct Enquiry</td>
                  <td className="p-4 sm:p-5">
                    <Link to="/rooms/luxury-cottage" className="text-gold font-semibold hover:underline">
                      View Cottage Details →
                    </Link>
                  </td>
                  <td className="p-4 sm:p-5">
                    <Link to="/rooms/family-suite" className="text-gold font-semibold hover:underline">
                      View Suite Details →
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* ========================================================
          07. GUEST GUIDELINES & ESSENTIAL INFORMATION
          ======================================================== */}
      <section className="py-16 bg-ivory-warm/50 border-t border-sand/30">
        <Container size="xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-wider text-terracotta font-semibold block">
                Timings & Sync
              </span>
              <h4 className="font-serif text-lg text-forest-deep">Check-in & Check-out</h4>
              <p className="text-xs text-charcoal-muted leading-relaxed font-light">
                Standard Check-in is <strong>1:00 PM</strong> and Check-out is <strong>11:00 AM</strong>. These hours align smoothly with morning and afternoon safari timings at Sillari Gate.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-wider text-terracotta font-semibold block">
                Safari Permits
              </span>
              <h4 className="font-serif text-lg text-forest-deep">Advance Booking Guidance</h4>
              <p className="text-xs text-charcoal-muted leading-relaxed font-light">
                Pench core safari permits are strictly managed by the Forest Department and sell out weeks in advance. We recommend connecting with our team early to coordinate your permits.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-wider text-terracotta font-semibold block">
                Jungle Etiquette
              </span>
              <h4 className="font-serif text-lg text-forest-deep">Peaceful Wilderness Harmony</h4>
              <p className="text-xs text-charcoal-muted leading-relaxed font-light">
                We maintain quiet hours after 10:00 PM to respect the surrounding wildlife corridors and ensure all guests enjoy peaceful sleep before early morning jungle wake-up calls.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================
          08. FINAL RESERVATION CTA
          ======================================================== */}
      <section className="py-20 bg-forest-dark text-ivory text-center">
        <Container size="lg">
          <SectionEyebrow color="gold" withLine className="justify-center text-gold-light mb-3">
            RESERVE YOUR STAY
          </SectionEyebrow>
          <Heading as="h2" variant="h2" font="serif" className="text-ivory mb-4">
            Ready to wake up in Pench?
          </Heading>
          <Text variant="lead" className="text-sand/85 font-light max-w-xl mx-auto mb-8">
            Check seasonal availability, choose your preferred cottage, and let us coordinate your Sillari Gate wildlife experience.
          </Text>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button as={Link} to="/book" variant="gold" size="lg">
              Book Your Stay Online
            </Button>
            <a
              href="https://wa.me/919372425968?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20room%20availability%20at%20Go%20Flamingo%20Resort."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-[3px] border border-sand/40 bg-forest-deep text-ivory text-xs uppercase tracking-wider font-semibold hover:border-gold hover:bg-forest-jungle transition-all duration-200 min-h-[50px]"
            >
              <WhatsAppIcon size="md" className="text-[#25D366]" />
              <span>Enquire on WhatsApp (+91 93724 25968)</span>
            </a>
          </div>
        </Container>
      </section>

    </div>
  );
}

/**
 * 2. ROOM DETAILS PAGE (`/rooms/:slug`)
 * Comprehensive deep-dive page for a specific accommodation category.
 */
export function RoomDetails() {
  const { slug } = useParams();
  const roomKey = slug && ROOMS_DATA[slug] ? slug : 'luxury-cottage';
  const room = ROOMS_DATA[roomKey];

  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="w-full bg-ivory-pure text-charcoal font-sans selection:bg-gold/30 selection:text-forest-deep">
      
      {/* ========================================================
          01. DEDICATED ROOM HERO
          ======================================================== */}
      <PageHero
        variant="large"
        badge={room.badge}
        eyebrow={room.eyebrow}
        title={room.title}
        subtitle={room.subtitle}
        image={room.heroImage}
        imageAlt={room.title}
        breadcrumbs={[
          { label: 'Stay', to: '/rooms' },
          { label: room.title },
        ]}
        actions={[
          { label: 'Book This Room', to: `/book?room=${room.slug}`, variant: 'gold' },
          { label: 'Enquire via WhatsApp', to: `https://wa.me/919372425968?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20booking%20the%20${encodeURIComponent(room.title)}%20at%20Go%20Flamingo%20Resort.`, variant: 'inverted' },
        ]}
      />

      {/* ========================================================
          02. MAIN CONTENT + STICKY RESERVATIONS SIDEBAR
          ======================================================== */}
      <section className="py-16 md:py-24">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Visual Showcase & Storytelling (8 Cols) */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Interactive Photo Gallery */}
              <div className="space-y-4">
                <div className="overflow-hidden rounded-[4px] bg-forest-dark border border-sand/30 aspect-[16/10] shadow-md">
                  <img
                    src={room.gallery[activeImage]?.src || room.heroImage}
                    alt={room.gallery[activeImage]?.alt || room.title}
                    className="w-full h-full object-cover transition-opacity duration-300"
                  />
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {room.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImage(idx)}
                      className={cn(
                        'aspect-[16/10] overflow-hidden rounded-[2px] border transition-all',
                        activeImage === idx
                          ? 'border-gold ring-2 ring-gold/40'
                          : 'border-sand/40 opacity-70 hover:opacity-100'
                      )}
                    >
                      <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Room Story & Architecture */}
              <div className="space-y-4">
                <SectionEyebrow color="terracotta" withLine>
                  Architectural Narrative
                </SectionEyebrow>
                <Heading as="h2" variant="h2" font="serif" color="forest">
                  Sanctuary surrounded by teak.
                </Heading>
                <div className="space-y-4 text-sm sm:text-base text-charcoal-muted leading-relaxed font-light">
                  {room.story.split('\n\n').map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>

              {/* Specifications Table */}
              <div className="border border-sand/40 rounded-[3px] p-6 bg-ivory-warm/40 space-y-4">
                <h3 className="font-serif text-lg text-forest-deep font-semibold">
                  Key Specifications
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-charcoal-muted uppercase tracking-wider block text-[0.6875rem]">Occupancy</span>
                    <strong className="text-forest text-sm font-semibold">{room.specs.occupancy}</strong>
                  </div>
                  <div>
                    <span className="text-charcoal-muted uppercase tracking-wider block text-[0.6875rem]">Bedding</span>
                    <strong className="text-forest text-sm font-semibold">{room.specs.bedType}</strong>
                  </div>
                  <div>
                    <span className="text-charcoal-muted uppercase tracking-wider block text-[0.6875rem]">Verandah</span>
                    <strong className="text-forest text-sm font-semibold">{room.specs.verandah}</strong>
                  </div>
                  <div>
                    <span className="text-charcoal-muted uppercase tracking-wider block text-[0.6875rem]">View</span>
                    <strong className="text-forest text-sm font-semibold">{room.specs.view}</strong>
                  </div>
                  <div>
                    <span className="text-charcoal-muted uppercase tracking-wider block text-[0.6875rem]">Bathroom</span>
                    <strong className="text-forest text-sm font-semibold">{room.specs.bathroom}</strong>
                  </div>
                  <div>
                    <span className="text-charcoal-muted uppercase tracking-wider block text-[0.6875rem]">Climate</span>
                    <strong className="text-forest text-sm font-semibold">{room.specs.climate}</strong>
                  </div>
                </div>
              </div>

              {/* Comprehensive Amenities Categorized */}
              <div className="space-y-6">
                <SectionEyebrow color="terracotta" withLine>
                  Room Features
                </SectionEyebrow>
                <Heading as="h3" variant="h3" font="serif" color="forest">
                  Included Amenities & In-Room Comforts
                </Heading>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {room.amenities.map((cat, idx) => (
                    <div key={idx} className="p-5 rounded-[3px] bg-ivory border border-sand/40 space-y-3">
                      <h4 className="font-serif text-sm font-semibold text-forest uppercase tracking-wider">
                        {cat.category}
                      </h4>
                      <ul className="space-y-1.5 text-xs text-charcoal-soft font-light">
                        {cat.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ideal Traveler Profile */}
              <div className="p-6 rounded-[3px] bg-sand-light/60 border border-sand/40 space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-forest block">
                  Best Suited For
                </span>
                <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-light">
                  {room.idealFor}
                </p>
              </div>

            </div>

            {/* Right Column: Sticky Reservation & Inquiry Sidebar (4 Cols) */}
            <div className="lg:col-span-4 sticky top-24 space-y-6">
              
              <div className="p-6 sm:p-8 rounded-[4px] bg-ivory-warm/80 border border-sand/60 shadow-lg space-y-6">
                <div>
                  <Badge variant="gold" className="mb-2">Verified Category</Badge>
                  <h3 className="font-serif text-2xl text-forest-deep font-semibold">
                    {room.title}
                  </h3>
                  <span className="text-xs text-charcoal-muted font-light block mt-1">
                    Direct Booking & Sillari Safari Coordination
                  </span>
                </div>

                <div className="py-3 border-y border-sand/40 space-y-1.5 text-xs text-charcoal-muted font-light">
                  <div className="flex justify-between">
                    <span>Direct Rates:</span>
                    <strong className="text-forest font-semibold">[Inquire for seasonal tariffs]</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Sillari Gate:</span>
                    <strong className="text-forest font-semibold">5 minutes away</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Breakfast:</span>
                    <strong className="text-forest font-semibold">Included in packages</strong>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button
                    as={Link}
                    to={`/book?room=${room.slug}`}
                    variant="gold"
                    size="lg"
                    className="w-full justify-center font-bold tracking-wider"
                  >
                    Check Availability
                  </Button>

                  <a
                    href={`https://wa.me/919372425968?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20booking%20the%20${encodeURIComponent(room.title)}%20at%20Go%20Flamingo%20Resort.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[3px] border border-sand/60 bg-forest text-ivory text-xs uppercase tracking-wider font-semibold hover:bg-forest-dark transition-colors"
                  >
                    <WhatsAppIcon size="sm" className="text-[#25D366]" />
                    <span>WhatsApp Inquiry</span>
                  </a>

                  <a
                    href="tel:+919372425968"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs uppercase tracking-wider font-semibold text-charcoal-muted hover:text-forest transition-colors text-center"
                  >
                    <span>Direct Call: +91 93724 25968</span>
                  </a>
                </div>

                {/* Direct Benefits Checklist */}
                <div className="pt-4 border-t border-sand/40 space-y-2 text-xs text-charcoal-soft font-light">
                  <span className="font-semibold uppercase tracking-wider text-[0.6875rem] text-forest block mb-2">
                    Why Book Directly With Us:
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-gold font-bold">✓</span>
                    <span>Best seasonal rates with no middleman commission</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gold font-bold">✓</span>
                    <span>Assistance with Sillari Gate safari permit coordination</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gold font-bold">✓</span>
                    <span>Flexible reschedule policy in case of permit date changes</span>
                  </div>
                </div>

              </div>

              {/* Other Accommodation Card */}
              {room.otherCategory && (
                <div className="p-5 rounded-[4px] bg-ivory border border-sand/40 space-y-3">
                  <span className="text-[0.6875rem] uppercase tracking-wider text-charcoal-muted font-semibold block">
                    You May Also Consider
                  </span>
                  <div className="aspect-[16/10] overflow-hidden rounded-[2px]">
                    <img
                      src={room.otherCategory.image}
                      alt={room.otherCategory.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-serif text-lg text-forest-deep">
                    {room.otherCategory.title}
                  </h4>
                  <p className="text-xs text-charcoal-muted font-light leading-relaxed">
                    {room.otherCategory.desc}
                  </p>
                  <Link
                    to={`/rooms/${room.otherCategory.slug}`}
                    className="text-xs uppercase tracking-wider font-semibold text-gold hover:underline inline-block pt-1"
                  >
                    View {room.otherCategory.title} →
                  </Link>
                </div>
              )}

            </div>

          </div>
        </Container>
      </section>

    </div>
  );
}
