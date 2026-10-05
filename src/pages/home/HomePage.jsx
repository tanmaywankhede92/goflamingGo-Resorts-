import React from 'react';
import { Link } from 'react-router-dom';
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

/**
 * HomePage Component — Phase 3 Visual Storytelling Experience
 * 
 * Embodies the complete 8-Chapter Emotional Journey:
 * ARRIVE → DISCOVER → STAY → EXPLORE → INDULGE → CELEBRATE → PLAN → BOOK
 * 
 * Art Direction:
 * - 70% visual storytelling, 30% user interface
 * - Authentic Pench teak forest imagery
 * - Human, warm Indian travel hospitality copy
 * - Zero unsupported claims or fake statistics
 * - Fully responsive across 360px to 1920px+ viewports
 */
export default function HomePage() {
  return (
    <div className="w-full bg-ivory-pure text-charcoal font-sans selection:bg-gold/30 selection:text-forest-deep">
      
      {/* ========================================================
          01. HERO CHAPTER (ARRIVE)
          ======================================================== */}
      <PageHero
        variant="cinematic"
        badge="Pench Tiger Reserve · Sillari Gate"
        eyebrow="PENCH · SILLARI GATE"
        title="Your Pench story starts here."
        subtitle="A warm, immersive stay at the edge of Pench, where the forest becomes part of the journey. Wake to dawn mist, tall teak groves, and authentic Indian hospitality."
        image={IMAGES.home.hero}
        imageAlt="Golden morning sunlight streaming through teak trees in Pench Tiger Reserve with spotted deer in mist"
        actions={[
          { label: 'Book Your Stay', to: '/book', variant: 'gold' },
          { label: 'Explore Pench', to: '/pench', variant: 'inverted', hideOnMobile: true },
        ]}
      />

      {/* ========================================================
          BOOKING & DISCOVERY BAR (REFINED CONVERSION)
          ======================================================== */}
      <section className="relative z-20 -mt-10 sm:-mt-12 px-4">
        <Container size="xl">
          <div className="bg-ivory-pure/98 border border-sand/50 shadow-2xl rounded-[4px] p-5 sm:p-7 backdrop-blur-md">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-center">
              
              {/* Destination Column */}
              <div className="border-b sm:border-b-0 sm:border-r border-sand/30 pb-3 sm:pb-0 sm:pr-4">
                <span className="text-[0.6875rem] uppercase tracking-wider text-charcoal-muted font-sans font-semibold block mb-1">
                  Destination Gate
                </span>
                <div className="text-base font-serif font-semibold text-forest-deep">
                  Pench – Sillari Gate
                </div>
                <span className="text-[0.75rem] text-charcoal-muted font-light block mt-0.5">
                  Direct Core Safari Access (MP / MH)
                </span>
              </div>

              {/* Experience Column */}
              <div className="border-b sm:border-b-0 lg:border-r border-sand/30 pb-3 sm:pb-0 sm:pr-4">
                <span className="text-[0.6875rem] uppercase tracking-wider text-charcoal-muted font-sans font-semibold block mb-1">
                  Experience Style
                </span>
                <div className="text-base font-serif font-semibold text-forest-deep">
                  Safari · Wildlife · Family
                </div>
                <span className="text-[0.75rem] text-charcoal-muted font-light block mt-0.5">
                  Tailored Wilderness Itineraries
                </span>
              </div>

              {/* Route & Distance Column */}
              <div className="border-b sm:border-b-0 sm:border-r border-sand/30 pb-3 sm:pb-0 sm:pr-4">
                <span className="text-[0.6875rem] uppercase tracking-wider text-charcoal-muted font-sans font-semibold block mb-1">
                  Travel Route
                </span>
                <div className="text-base font-serif font-semibold text-forest-deep">
                  ~85 km from Nagpur
                </div>
                <span className="text-[0.75rem] text-charcoal-muted font-light block mt-0.5">
                  1.5 - 2 hrs via 4-lane NH 44
                </span>
              </div>

              {/* Action Trigger */}
              <div className="pt-2 sm:pt-0">
                <Button
                  as={Link}
                  to="/book"
                  variant="gold"
                  size="md"
                  className="w-full justify-center font-bold text-sm shadow-sm tracking-wider"
                >
                  Check Availability
                </Button>
              </div>

            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================
          02. CHAPTER 1 — DISCOVER PENCH (ARRIVE / DISCOVER)
          ======================================================== */}
      <section className="py-20 md:py-32">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Visual Media (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="relative group overflow-hidden rounded-[3px] bg-forest-dark border border-sand/30 shadow-md">
                <img
                  src={IMAGES.home.tiger}
                  alt="Royal Bengal Tiger walking calmly along an earthen safari trail in the teak forest of Pench Tiger Reserve"
                  loading="lazy"
                  className="w-full aspect-[16/10] object-cover group-hover:scale-103 transition-transform duration-1000 ease-slow"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 text-ivory">
                  <span className="text-[0.6875rem] uppercase tracking-wider text-gold font-semibold block mb-1">
                    Pench Wildlife Heritage
                  </span>
                  <p className="text-xs sm:text-sm text-sand-light font-light max-w-lg leading-relaxed">
                    Dry-deciduous teak woodlands of Central India — home to the Royal Bengal Tiger and over 285 documented bird species.
                  </p>
                </div>
              </div>
            </div>

            {/* Editorial Narrative (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              <Badge variant="gold">01 — The Destination</Badge>
              <SectionEyebrow color="terracotta" withLine>
                Sillari Gate Advantage
              </SectionEyebrow>
              <Heading as="h2" variant="h2" font="serif" color="forest" className="leading-[1.15]">
                Enter the legendary forests of Pench.
              </Heading>
              <Text variant="body" color="muted" className="leading-relaxed font-light">
                The inspiration for Rudyard Kipling’s <em>The Jungle Book</em>, Pench Tiger Reserve spans rolling teak hills, tranquil watercourses, and rich biodiversity. Situated minutes from Sillari Gate—the primary safari gateway on the Maharashtra/Madhya Pradesh border—Go Flamingo places you right at the threshold of prime wildlife territory.
              </Text>
              
              {/* Verified Fact Highlights */}
              <div className="grid grid-cols-2 gap-4 pt-2 border-t border-sand/30">
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-wider text-forest font-semibold block">
                    Core Zone Entry
                  </span>
                  <p className="text-xs text-charcoal-muted font-light">
                    Sillari Gate is renowned for frequent carnivore and herbivore sightings.
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-wider text-forest font-semibold block">
                    Effortless Transit
                  </span>
                  <p className="text-xs text-charcoal-muted font-light">
                    Just ~85 km from Nagpur Airport and railway junction via 4-lane highway.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Button as={Link} to="/pench" variant="primary" size="md">
                  Discover Pench & Safari Guide →
                </Button>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================
          03. CHAPTER 2 — GO FLAMINGO RESORT (THE RETREAT)
          ======================================================== */}
      <section className="py-20 md:py-32 bg-ivory-warm/40 border-y border-sand/25">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Editorial Narrative (5 Cols) */}
            <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
              <Badge variant="forest">02 — The Sanctuary</Badge>
              <SectionEyebrow color="forest" withLine>
                Why Go Flamingo?
              </SectionEyebrow>
              <Heading as="h2" variant="h2" font="serif" color="forest" className="leading-[1.15]">
                Comfort deeply rooted in the wild.
              </Heading>
              <Text variant="body" color="muted" className="leading-relaxed font-light">
                Wilderness retreats should immerse you in natural serenity without compromising on warmth, thoughtful amenities, or wholesome dining. Built with local sandstone and timber while carefully preserving the mature teak trees on the grounds, Go Flamingo offers peaceful stone pathways, a natural pool, and the genuine care of Indian hospitality.
              </Text>

              {/* Four Pillars */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                  <p className="text-xs sm:text-sm text-charcoal-soft font-light">
                    <strong>Mature Teak Canopy:</strong> Cottages nestled under tall shade trees that keep the property cool and birdsong continuous.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                  <p className="text-xs sm:text-sm text-charcoal-soft font-light">
                    <strong>Natural Stone Pool:</strong> Restorative afternoon swims surrounded by forest greenery after dusty morning safaris.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                  <p className="text-xs sm:text-sm text-charcoal-soft font-light">
                    <strong>Minutes to Sillari Gate:</strong> No exhausting pre-dawn transit; reach your gypsy briefing smoothly.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Button as={Link} to="/resort" variant="primary" size="md">
                  Discover The Resort →
                </Button>
              </div>
            </div>

            {/* Visual Media (7 Cols) */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="relative group overflow-hidden rounded-[3px] bg-forest-dark border border-sand/30 shadow-md">
                <img
                  src={IMAGES.home.resort}
                  alt="Evening twilight at Go Flamingo Resort with stone cottages, swimming pool and illuminated forest walkways"
                  loading="lazy"
                  className="w-full aspect-[16/10] object-cover group-hover:scale-103 transition-transform duration-1000 ease-slow"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/85 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 text-ivory">
                  <span className="text-[0.6875rem] uppercase tracking-wider text-gold font-semibold block mb-1">
                    Tranquil Forest Retreat
                  </span>
                  <p className="text-xs sm:text-sm text-sand-light font-light max-w-lg leading-relaxed">
                    Designed to harmonise with the surrounding teak habitat — quiet stone walkways and ambient lantern light.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================
          04. CHAPTER 3 — STAY (COTTAGES & SUITES)
          ======================================================== */}
      <section className="py-20 md:py-32">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Visual Media (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="relative group overflow-hidden rounded-[3px] bg-forest-dark border border-sand/30 shadow-md">
                <img
                  src={IMAGES.home.stay}
                  alt="Luxury wooden cottage bedroom at Go Flamingo opening out to a private verandah facing teak greenery"
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover group-hover:scale-103 transition-transform duration-1000 ease-slow"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/75 via-transparent to-transparent opacity-50" />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 text-ivory">
                  <span className="text-[0.6875rem] uppercase tracking-wider text-gold font-semibold block mb-1">
                    Forest Living
                  </span>
                  <p className="text-xs sm:text-sm text-sand-light font-light max-w-lg leading-relaxed">
                    Private verandahs looking out directly into teak foliage — your quiet sanctuary after jungle excursions.
                  </p>
                </div>
              </div>
            </div>

            {/* Editorial Narrative (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              <Badge variant="gold">03 — Rest & Sanctuary</Badge>
              <SectionEyebrow color="terracotta" withLine>
                Accommodations
              </SectionEyebrow>
              <Heading as="h2" variant="h2" font="serif" color="forest" className="leading-[1.15]">
                Rest well. Wake to the wild.
              </Heading>
              <Text variant="body" color="muted" className="leading-relaxed font-light">
                After hours of tracking wildlife along dusty morning trails, step into a spacious, air-conditioned cottage crafted from natural wood and warm textiles. Draw open the glass doors to your private wooden verandah, listen to jungle babblers, and let the quiet rhythm of the forest restore your senses.
              </Text>

              {/* Room Feature Highlights */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-[2px] bg-ivory-warm/60 border border-sand/30">
                  <span className="text-xs font-semibold text-forest block mb-0.5">Private Verandah</span>
                  <span className="text-[0.72rem] text-charcoal-muted font-light">Sit-out overlooking trees</span>
                </div>
                <div className="p-3.5 rounded-[2px] bg-ivory-warm/60 border border-sand/30">
                  <span className="text-xs font-semibold text-forest block mb-0.5">Climate Control</span>
                  <span className="text-[0.72rem] text-charcoal-muted font-light">Air-conditioned comfort</span>
                </div>
                <div className="p-3.5 rounded-[2px] bg-ivory-warm/60 border border-sand/30">
                  <span className="text-xs font-semibold text-forest block mb-0.5">Plush King Bedding</span>
                  <span className="text-[0.72rem] text-charcoal-muted font-light">Crisp linens & pillows</span>
                </div>
                <div className="p-3.5 rounded-[2px] bg-ivory-warm/60 border border-sand/30">
                  <span className="text-xs font-semibold text-forest block mb-0.5">En-suite Bath</span>
                  <span className="text-[0.72rem] text-charcoal-muted font-light">Modern stone fittings</span>
                </div>
              </div>

              <div className="pt-2">
                <Button as={Link} to="/rooms" variant="primary" size="md">
                  Explore Rooms & Cottages →
                </Button>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================
          05. CHAPTER 4 — SAFARI (ENTER THE WILD)
          ======================================================== */}
      <section className="py-24 md:py-36 bg-forest-dark text-ivory relative overflow-hidden">
        {/* Background Image Texture */}
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src={IMAGES.home.safari}
            alt="Open green 4x4 safari gypsy with passengers in Pench Tiger Reserve"
            loading="lazy"
            className="w-full h-full object-cover object-center transform scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-deep/90 to-forest-dark" />

        <Container size="xl" className="relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge variant="gold" className="mb-3">04 — Core Experience</Badge>
            <SectionEyebrow color="gold" withLine className="mb-3 justify-center text-gold-light">
              Jungle Safari at Sillari
            </SectionEyebrow>
            <Heading as="h2" variant="h1" font="serif" className="text-ivory mb-5 leading-tight">
              Enter the wild.
            </Heading>
            <Text variant="lead" className="text-sand/85 font-light leading-relaxed max-w-2xl mx-auto">
              At dawn, golden light filters through tall teak foliage as your open 4x4 gypsy sets out from Sillari Gate. Guided by expert forest naturalists, track fresh pugmarks and listen for alarm calls signaling the presence of the tiger.
            </Text>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
              <Button as={Link} to="/experiences/safari" variant="gold" size="md" className="w-full sm:w-auto justify-center font-bold tracking-wider">
                Discover Safari Experience
              </Button>
              <Button as={Link} to="/pench/safari-guide" variant="inverted" size="md" className="w-full sm:w-auto justify-center font-semibold">
                Safari Timings & Permits Guide
              </Button>
            </div>
          </div>

          {/* Safari Photo Teaser Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group overflow-hidden rounded-[3px] bg-forest-deep border border-sand/20 hover:border-gold/50 transition-colors">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={IMAGES.home.safari}
                  alt="Open safari gypsy in morning Pench forest"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-5">
                <span className="text-[0.6875rem] uppercase tracking-editorial text-gold font-semibold block mb-1">
                  Morning & Evening Shifts
                </span>
                <h3 className="font-serif text-lg text-ivory">
                  Open 4x4 Gypsy Excursions
                </h3>
                <p className="text-xs text-sand/70 font-light mt-1.5">
                  Accompanied by certified forest department guides through prime tiger territory.
                </p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-[3px] bg-forest-deep border border-sand/20 hover:border-gold/50 transition-colors">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={IMAGES.home.tiger}
                  alt="Royal Bengal Tiger in natural forest"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-5">
                <span className="text-[0.6875rem] uppercase tracking-editorial text-gold font-semibold block mb-1">
                  Sillari Wildlife
                </span>
                <h3 className="font-serif text-lg text-ivory">
                  Tigers, Leopards & Dhole
                </h3>
                <p className="text-xs text-sand/70 font-light mt-1.5">
                  Rich carnivore and herbivore diversity thriving in dry-deciduous teak woodland.
                </p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-[3px] bg-forest-deep border border-sand/20 hover:border-gold/50 transition-colors">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={IMAGES.wildlife.birding}
                  alt="Indian jungle birdlife"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-5">
                <span className="text-[0.6875rem] uppercase tracking-editorial text-gold font-semibold block mb-1">
                  285+ Bird Species
                </span>
                <h3 className="font-serif text-lg text-ivory">
                  Avifauna & Birding Trails
                </h3>
                <p className="text-xs text-sand/70 font-light mt-1.5">
                  Spotted owlets, Malabar pied hornbills, Indian rollers, and migratory species.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================
          06. CHAPTER 5 — EXPERIENCES SYSTEM (ASYMMETRIC COMPOSITION)
          ======================================================== */}
      <section className="py-20 md:py-32">
        <Container size="xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <Badge variant="terracotta" className="mb-2">05 — Life in the Forest</Badge>
              <SectionEyebrow color="terracotta" withLine>
                Curated Experiences
              </SectionEyebrow>
              <Heading as="h2" variant="h2" font="serif" color="forest">
                Moments beyond the safari.
              </Heading>
            </div>
            <Button as={Link} to="/experiences" variant="secondary" size="md">
              View All Experiences →
            </Button>
          </div>

          {/* Asymmetric Modular Experience Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Major Spotlight Item (7 Cols) */}
            <Link
              to="/experiences/nature"
              className="lg:col-span-7 group relative overflow-hidden rounded-[3px] bg-forest-dark border border-sand/30 min-h-[340px] flex flex-col justify-end p-6 sm:p-10 shadow-sm"
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={IMAGES.wildlife.forestCanopy}
                  alt="Teak and sal canopy walk in Pench"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/60 to-transparent opacity-85" />
              </div>
              <div className="relative z-10 space-y-2">
                <span className="text-[0.6875rem] uppercase tracking-editorial text-gold font-semibold block">
                  Guided Walking Route
                </span>
                <h3 className="font-serif text-2xl text-ivory group-hover:text-gold transition-colors">
                  Forest Trails & Canopy Walks
                </h3>
                <p className="text-xs sm:text-sm text-sand/80 font-light max-w-lg leading-relaxed">
                  Gentle morning walks along the forest boundary accompanied by a local naturalist to discover medicinal plants, butterflies, and smaller wildlife.
                </p>
                <span className="text-xs text-gold uppercase tracking-wider font-semibold inline-block pt-1">
                  Discover Nature Walks →
                </span>
              </div>
            </Link>

            {/* Supporting Tiles (5 Cols Stacked) */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              
              <Link
                to="/resort/pool"
                className="group relative overflow-hidden rounded-[3px] bg-forest-dark border border-sand/30 min-h-[160px] flex flex-col justify-end p-6 shadow-sm"
              >
                <div className="absolute inset-0 z-0">
                  <img
                    src={IMAGES.resort.pool}
                    alt="Natural stone swimming pool"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/60 to-transparent opacity-85" />
                </div>
                <div className="relative z-10">
                  <span className="text-[0.6875rem] uppercase tracking-wider text-gold font-semibold block mb-0.5">
                    Restorative Leisure
                  </span>
                  <h4 className="font-serif text-lg text-ivory group-hover:text-gold transition-colors">
                    Forest Pool & Sun Loungers
                  </h4>
                  <span className="text-xs text-sand/80 font-light block">
                    Cool off under teak canopy after your morning game drive.
                  </span>
                </div>
              </Link>

              <Link
                to="/resort/facilities"
                className="group relative overflow-hidden rounded-[3px] bg-forest-dark border border-sand/30 min-h-[160px] flex flex-col justify-end p-6 shadow-sm"
              >
                <div className="absolute inset-0 z-0">
                  <img
                    src={IMAGES.dining.bonfireDinner}
                    alt="Evening bonfire and outdoor dining"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/60 to-transparent opacity-85" />
                </div>
                <div className="relative z-10">
                  <span className="text-[0.6875rem] uppercase tracking-wider text-gold font-semibold block mb-0.5">
                    Evening Gathering
                  </span>
                  <h4 className="font-serif text-lg text-ivory group-hover:text-gold transition-colors">
                    Bonfires & Starlit Lawns
                  </h4>
                  <span className="text-xs text-sand/80 font-light block">
                    Share sightings around crackling embers under clear Pench skies.
                  </span>
                </div>
              </Link>

            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================
          07. CHAPTER 6 — DINING (GATHER AROUND GOOD FOOD)
          ======================================================== */}
      <section className="py-20 md:py-32 bg-ivory-warm/40 border-y border-sand/25">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Editorial Narrative (5 Cols) */}
            <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
              <Badge variant="terracotta">06 — Regional Hospitality</Badge>
              <SectionEyebrow color="terracotta" withLine>
                Dining at Go Flamingo
              </SectionEyebrow>
              <Heading as="h2" variant="h2" font="serif" color="forest" className="leading-[1.15]">
                Gather around good food.
              </Heading>
              <Text variant="body" color="muted" className="leading-relaxed font-light">
                Meals in the forest are celebratory moments to be shared with friends and family. Enjoy hearty breakfast spreads on return from dawn safaris, home-style regional Indian dishes cooked with seasonal vegetables and fresh spices, and al fresco dinners beneath the lantern-lit trees.
              </Text>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-terracotta mt-2 shrink-0" />
                  <p className="text-xs sm:text-sm text-charcoal-soft font-light">
                    <strong>Central Indian Specialties:</strong> Freshly prepared regional curries, seasonal dals, and tandoor-baked breads.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-terracotta mt-2 shrink-0" />
                  <p className="text-xs sm:text-sm text-charcoal-soft font-light">
                    <strong>Al Fresco Lawn Dining:</strong> Tables arranged outdoors under leafy teak branches with glowing brass lanterns.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-terracotta mt-2 shrink-0" />
                  <p className="text-xs sm:text-sm text-charcoal-soft font-light">
                    <strong>Family-Friendly Care:</strong> Mild meals and special requests welcomed for both children and elders.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Button as={Link} to="/dining" variant="primary" size="md">
                  Discover Dining Experience →
                </Button>
              </div>
            </div>

            {/* Visual Media (7 Cols) */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="relative group overflow-hidden rounded-[3px] bg-forest-dark border border-sand/30 shadow-md">
                <img
                  src={IMAGES.home.dining}
                  alt="Outdoor dining table under illuminated trees with brass lanterns and delicious regional Indian dishes"
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover group-hover:scale-103 transition-transform duration-1000 ease-slow"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 text-ivory">
                  <span className="text-[0.6875rem] uppercase tracking-wider text-gold font-semibold block mb-1">
                    Warm Wilderness Evenings
                  </span>
                  <p className="text-xs sm:text-sm text-sand-light font-light max-w-lg leading-relaxed">
                    Wholesome meals served under illuminated trees — an authentic tradition of Indian hospitality.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================
          08. CHAPTER 7 — CONTRASTING STORIES: FAMILY & COUPLES
          ======================================================== */}
      <section className="py-20 md:py-32">
        <Container size="xl">
          <div className="max-w-2xl mx-auto text-center mb-16 space-y-3">
            <Badge variant="gold">07 — Meaningful Stays</Badge>
            <SectionEyebrow color="terracotta" withLine className="justify-center">
              Tailored For You
            </SectionEyebrow>
            <Heading as="h2" variant="h2" font="serif" color="forest">
              Crafted for family joy and quiet romance.
            </Heading>
            <Text variant="body" color="muted" className="font-light">
              Whether traveling with three generations or escaping for an intimate retreat for two, Go Flamingo offers distinct spaces and attentive care.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Story A: Family Wildlife Holiday */}
            <div className="group rounded-[3px] bg-ivory-warm/40 border border-sand/30 overflow-hidden shadow-xs hover:border-gold/40 transition-colors flex flex-col">
              <div className="aspect-[4/3] overflow-hidden bg-forest-dark">
                <img
                  src={IMAGES.home.family}
                  alt="Multi-generation Indian family laughing together on pool lawn at Pench resort"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                />
              </div>
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[0.6875rem] uppercase tracking-wider text-terracotta font-semibold block mb-1">
                    Multi-Generation Connection
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-forest-deep mb-2">
                    The Family Safari Holiday
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-muted font-light leading-relaxed">
                    Spacious connected cottages, safe green lawns for children to run freely, afternoon pool time, and evening bonfires where grandparents share tales under ancient trees. An authentic jungle experience everyone treasures.
                  </p>
                </div>
                <div className="pt-2">
                  <Link
                    to="/experiences/family"
                    className="text-xs uppercase tracking-wider font-semibold text-forest hover:text-gold transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Explore Family Stays</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Story B: Couples Forest Escape */}
            <div className="group rounded-[3px] bg-ivory-warm/40 border border-sand/30 overflow-hidden shadow-xs hover:border-gold/40 transition-colors flex flex-col">
              <div className="aspect-[4/3] overflow-hidden bg-forest-dark">
                <img
                  src={IMAGES.home.couples}
                  alt="Couple relaxing with candlelight on wooden verandah at twilight overlooking teak canopy"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                />
              </div>
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[0.6875rem] uppercase tracking-wider text-gold-dark font-semibold block mb-1">
                    Intimate Wilderness Retreat
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-forest-deep mb-2">
                    The Couples Forest Escape
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-muted font-light leading-relaxed">
                    Wake to peaceful silence on your private verandah, share leisurely meals after dawn safaris, and spend undisturbed evenings under starlit skies. A tranquil, restorative sanctuary designed for quality time together.
                  </p>
                </div>
                <div className="pt-2">
                  <Link
                    to="/experiences/couples"
                    className="text-xs uppercase tracking-wider font-semibold text-forest hover:text-gold transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Explore Romantic Escapes</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================
          09. CHAPTER 8 — WEDDINGS & CORPORATE
          ======================================================== */}
      <section className="py-20 md:py-28 bg-forest-deep text-ivory relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep via-forest-deep/95 to-forest-dark pointer-events-none" />

        <Container size="xl" className="relative z-10">
          <div className="max-w-2xl mb-12 space-y-2">
            <Badge variant="gold">08 — Gather & Celebrate</Badge>
            <Heading as="h2" variant="h2" font="serif" className="text-ivory">
              Celebrations & executive retreats in nature.
            </Heading>
            <Text variant="body" className="text-sand/80 font-light">
              From unforgettable forest destination weddings to inspiring leadership conclaves far removed from city rush.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Wedding Card */}
            <div className="p-8 sm:p-10 rounded-[3px] bg-forest-dark/80 border border-sand/20 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-editorial text-gold font-semibold block">
                  Forest Destination Weddings
                </span>
                <h3 className="font-serif text-2xl text-ivory">
                  Celebrate surrounded by nature.
                </h3>
                <p className="text-xs sm:text-sm text-sand/80 font-light leading-relaxed">
                  Host an intimate destination wedding beneath open teak skies. Generous event lawns, warm regional catering, and comfortable guest accommodations for your closest friends and family.
                </p>
              </div>
              <div className="pt-2">
                <Button as={Link} to="/weddings" variant="gold" size="sm">
                  Plan Your Wedding →
                </Button>
              </div>
            </div>

            {/* Corporate Offsites Card */}
            <div className="p-8 sm:p-10 rounded-[3px] bg-forest-dark/80 border border-sand/20 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-editorial text-gold font-semibold block">
                  Executive Offsites
                </span>
                <h3 className="font-serif text-2xl text-ivory">
                  Step away from the city and reconnect.
                </h3>
                <p className="text-xs sm:text-sm text-sand/80 font-light leading-relaxed">
                  Break free from conventional boardrooms. Re-energise your leadership team with strategic conclaves, fireside discussions, and shared morning wildlife safaris.
                </p>
              </div>
              <div className="pt-2">
                <Button as={Link} to="/corporate" variant="inverted" size="sm">
                  Explore Corporate Offsites →
                </Button>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================
          10. CHAPTER 9 — PENCH TRIP PLANNER HUB
          ======================================================== */}
      <section className="py-20 md:py-32">
        <Container size="xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <Badge variant="gold" className="mb-2">09 — Useful Guidance</Badge>
              <SectionEyebrow color="terracotta" withLine>
                Trip Planning
              </SectionEyebrow>
              <Heading as="h2" variant="h2" font="serif" color="forest">
                Plan your journey to Pench.
              </Heading>
            </div>
            <p className="text-xs sm:text-sm text-charcoal-muted font-light max-w-md">
              Everything you need to plan your route, pick the ideal safari shift, and explore local Central Indian culture.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <Link
              to="/pench/sillari-gate"
              className="p-6 rounded-[3px] bg-ivory-warm/40 border border-sand/30 hover:border-gold/50 transition-colors group flex flex-col justify-between"
            >
              <div>
                <span className="text-[0.6875rem] uppercase tracking-wider text-terracotta font-semibold block mb-1">
                  Location Guide
                </span>
                <h4 className="font-serif text-lg text-forest-deep group-hover:text-gold transition-colors mb-2">
                  Sillari Gate Overview
                </h4>
                <p className="text-xs text-charcoal-muted font-light leading-relaxed">
                  Location details, gate entry advantages, and why Sillari is Pench's most convenient safari entry point.
                </p>
              </div>
              <span className="text-xs text-forest font-semibold mt-4 block group-hover:text-gold transition-colors">
                Read Gate Guide →
              </span>
            </Link>

            <Link
              to="/pench/safari-guide"
              className="p-6 rounded-[3px] bg-ivory-warm/40 border border-sand/30 hover:border-gold/50 transition-colors group flex flex-col justify-between"
            >
              <div>
                <span className="text-[0.6875rem] uppercase tracking-wider text-terracotta font-semibold block mb-1">
                  Permits & Timing
                </span>
                <h4 className="font-serif text-lg text-forest-deep group-hover:text-gold transition-colors mb-2">
                  Safari Booking & Shifts
                </h4>
                <p className="text-xs text-charcoal-muted font-light leading-relaxed">
                  Morning versus evening shifts, vehicle rules, seasonal timings, and how to plan safari permits in advance.
                </p>
              </div>
              <span className="text-xs text-forest font-semibold mt-4 block group-hover:text-gold transition-colors">
                View Safari Guide →
              </span>
            </Link>

            <Link
              to="/pench/how-to-reach"
              className="p-6 rounded-[3px] bg-ivory-warm/40 border border-sand/30 hover:border-gold/50 transition-colors group flex flex-col justify-between"
            >
              <div>
                <span className="text-[0.6875rem] uppercase tracking-wider text-terracotta font-semibold block mb-1">
                  Travel Route
                </span>
                <h4 className="font-serif text-lg text-forest-deep group-hover:text-gold transition-colors mb-2">
                  How To Reach Pench
                </h4>
                <p className="text-xs text-charcoal-muted font-light leading-relaxed">
                  Smooth 4-lane highway drive from Nagpur Airport (NAG) and Railway Junction (~85 km, 1.5–2 hours).
                </p>
              </div>
              <span className="text-xs text-forest font-semibold mt-4 block group-hover:text-gold transition-colors">
                Directions & Route Map →
              </span>
            </Link>

            <Link
              to="/pench/best-time-to-visit"
              className="p-6 rounded-[3px] bg-ivory-warm/40 border border-sand/30 hover:border-gold/50 transition-colors group flex flex-col justify-between"
            >
              <div>
                <span className="text-[0.6875rem] uppercase tracking-wider text-terracotta font-semibold block mb-1">
                  Seasonal Patterns
                </span>
                <h4 className="font-serif text-lg text-forest-deep group-hover:text-gold transition-colors mb-2">
                  Best Time To Visit
                </h4>
                <p className="text-xs text-charcoal-muted font-light leading-relaxed">
                  Winter misty mornings (Oct–Feb) versus peak summer wildlife waterhole spotting (Mar–June).
                </p>
              </div>
              <span className="text-xs text-forest font-semibold mt-4 block group-hover:text-gold transition-colors">
                Seasonal Weather Guide →
              </span>
            </Link>

            <Link
              to="/pench/things-to-do"
              className="p-6 rounded-[3px] bg-ivory-warm/40 border border-sand/30 hover:border-gold/50 transition-colors group flex flex-col justify-between"
            >
              <div>
                <span className="text-[0.6875rem] uppercase tracking-wider text-terracotta font-semibold block mb-1">
                  Local Exploration
                </span>
                <h4 className="font-serif text-lg text-forest-deep group-hover:text-gold transition-colors mb-2">
                  Things To Do Around Pench
                </h4>
                <p className="text-xs text-charcoal-muted font-light leading-relaxed">
                  Totladoh reservoir, local potter communities, birding trails, and organic agricultural visits.
                </p>
              </div>
              <span className="text-xs text-forest font-semibold mt-4 block group-hover:text-gold transition-colors">
                Explore Activities →
              </span>
            </Link>

            <Link
              to="/packages"
              className="p-6 rounded-[3px] bg-forest-deep text-ivory border border-sand/30 hover:border-gold/50 transition-colors group flex flex-col justify-between"
            >
              <div>
                <span className="text-[0.6875rem] uppercase tracking-wider text-gold font-semibold block mb-1">
                  Curated Packages
                </span>
                <h4 className="font-serif text-lg text-ivory group-hover:text-gold transition-colors mb-2">
                  Stay & Safari Itineraries
                </h4>
                <p className="text-xs text-sand/80 font-light leading-relaxed">
                  Weekend getaways and extended wildlife holidays combining cottage stay, meals, and safari bookings.
                </p>
              </div>
              <span className="text-xs text-gold font-semibold mt-4 block group-hover:text-sand-light transition-colors">
                View Packages →
              </span>
            </Link>

          </div>
        </Container>
      </section>

      {/* ========================================================
          11. CHAPTER 10 — CURATED EDITORIAL GALLERY PREVIEW
          ======================================================== */}
      <section className="py-20 md:py-28 bg-ivory-warm/40 border-y border-sand/25">
        <Container size="xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <Badge variant="forest" className="mb-2">10 — Visual Journal</Badge>
              <SectionEyebrow color="forest" withLine>
                Scenes of Pench & Go Flamingo
              </SectionEyebrow>
              <Heading as="h2" variant="h2" font="serif" color="forest">
                A glimpse into our sanctuary.
              </Heading>
            </div>
            <Button as={Link} to="/gallery" variant="secondary" size="md">
              View Complete Gallery →
            </Button>
          </div>

          {/* Asymmetrical Editorial Collage */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Image 1 (Large 6 Cols) */}
            <div className="lg:col-span-6 group relative overflow-hidden rounded-[3px] bg-forest-dark border border-sand/30 aspect-[4/3] sm:aspect-[16/11]">
              <img
                src={IMAGES.home.hero}
                alt="Golden dawn sunlight in Pench forest"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent opacity-50" />
              <div className="absolute bottom-3 left-3 text-ivory text-xs font-light">
                Misty teak forest at dawn
              </div>
            </div>

            {/* Image 2 (3 Cols) */}
            <div className="lg:col-span-3 group relative overflow-hidden rounded-[3px] bg-forest-dark border border-sand/30 aspect-[4/3] sm:aspect-[16/11] lg:aspect-auto">
              <img
                src={IMAGES.home.stay}
                alt="Cottage verandah facing forest"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent opacity-50" />
              <div className="absolute bottom-3 left-3 text-ivory text-xs font-light">
                Private cottage verandah
              </div>
            </div>

            {/* Image 3 (3 Cols) */}
            <div className="lg:col-span-3 group relative overflow-hidden rounded-[3px] bg-forest-dark border border-sand/30 aspect-[4/3] sm:aspect-[16/11] lg:aspect-auto">
              <img
                src={IMAGES.home.dining}
                alt="Evening lantern dining under trees"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent opacity-50" />
              <div className="absolute bottom-3 left-3 text-ivory text-xs font-light">
                Lantern-lit lawn dinner
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================
          12. CHAPTER 11 — FINAL IMMERSIVE CALL TO ACTION (BOOK)
          ======================================================== */}
      <section className="py-24 md:py-36 bg-forest-dark text-ivory relative overflow-hidden text-center">
        {/* Ambient forest texture */}
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src={IMAGES.home.resort}
            alt="Go Flamingo Resort illuminated in forest twilight"
            loading="lazy"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-deep/90 to-forest-dark" />

        <Container size="lg" className="relative z-10">
          <SectionEyebrow color="gold" withLine className="mb-3 justify-center text-gold-light">
            BEGIN YOUR JOURNEY
          </SectionEyebrow>
          <Heading as="h2" variant="h1" font="serif" className="text-ivory mb-5 leading-tight">
            Come closer to the wild.
          </Heading>
          <Text variant="lead" className="text-sand/85 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Plan your stay at Go Flamingo Resort, Pench — Sillari Gate. Direct safari access, peaceful cottages, and genuine Indian hospitality.
          </Text>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              as={Link}
              to="/book"
              variant="gold"
              size="lg"
              className="w-full sm:w-auto font-bold tracking-wider shadow-md"
            >
              Book Your Stay
            </Button>
            <a
              href="https://wa.me/919372425968"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-[3px] border border-sand/40 bg-forest-deep text-ivory text-xs uppercase tracking-wider font-semibold hover:border-gold hover:bg-forest-jungle transition-all duration-200 min-h-[50px]"
            >
              <WhatsAppIcon size="md" className="text-[#25D366]" />
              <span>Enquire on WhatsApp</span>
            </a>
          </div>

          <div className="mt-8 pt-8 border-t border-sand/15 flex flex-wrap items-center justify-center gap-6 text-xs text-sand/70 font-light">
            <span>Direct Call: <a href="tel:+919372425968" className="text-ivory font-medium hover:text-gold">+91 93724 25968</a></span>
            <span>·</span>
            <span>Location: Near Sillari Gate, Pench Tiger Reserve</span>
            <span>·</span>
            <span>Nagpur: ~85 km (NH 44)</span>
          </div>
        </Container>
      </section>

    </div>
  );
}
