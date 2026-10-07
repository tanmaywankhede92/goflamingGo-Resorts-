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
  Card,
  EditorialSplit,
  WhatsAppIcon,
} from '../../components/common';
import { IMAGES } from '../../data/images';
import { EXPERIENCES_HUB_DATA } from '../../data/experiences';
import { SAFARI_DATA } from '../../data/safari';
import { WILDLIFE_DATA } from '../../data/wildlife';
import { NATURE_DATA } from '../../data/nature';
import SafariSeasonalSchedule from './components/SafariSeasonalSchedule';
import CoreVsBufferCard from './components/CoreVsBufferCard';
import WildlifeSpeciesGrid from './components/WildlifeSpeciesGrid';
import ExperienceInquiryBanner from './components/ExperienceInquiryBanner';
import { cn } from '../../utils/cn';

/**
 * =========================================================================
 * 1. EXPERIENCES OVERVIEW HUB (/experiences)
 * =========================================================================
 * Visual Masterpiece connecting all wilderness, safari, birding,
 * and evening experiences at Go Flamingo Resort with cinematic rhythm.
 */
export function ExperiencesOverview() {
  const {
    hero,
    philosophy,
    fourPillars,
    safariAtGlance,
    wildlifeSpotlight,
    naturePreview,
    eveningsPreview,
    sillariAdvantage,
    dayInPench,
    stayConnection,
  } = EXPERIENCES_HUB_DATA;

  const whatsappInquiryUrl = `https://wa.me/919372425968?text=${encodeURIComponent(
    'Hello Go Flamingo Resort, I would like to inquire about wilderness experiences and safari planning.'
  )}`;

  return (
    <div className="bg-ivory text-charcoal font-sans antialiased pb-[calc(5.5rem+env(safe-area-inset-bottom,0px))] lg:pb-0">
      
      {/* ========================================================
          01. SIGNATURE CINEMATIC HERO
          ======================================================== */}
      <PageHero
        variant="cinematic"
        badge={hero.badge}
        eyebrow={hero.eyebrow}
        title={hero.title}
        subtitle={hero.subtitle}
        image={hero.image}
        imageAlt="Pench Wilderness and Teak Forest Dawn"
        breadcrumbs={[{ label: 'Experiences' }]}
        actions={[
          {
            label: 'Explore Safaris',
            to: '/experiences/safari',
            variant: 'gold',
          },
          {
            label: 'WhatsApp Concierge',
            href: whatsappInquiryUrl,
            variant: 'inverted',
          },
        ]}
      />

      {/* ========================================================
          02. RESORT MANIFESTO & PHILOSOPHY (Large Editorial Statement)
          ======================================================== */}
      <section className="py-20 sm:py-28 bg-ivory-warm/50 border-b border-sand/30">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Big Typography Manifesto */}
            <div className="lg:col-span-6 space-y-4">
              <SectionEyebrow color="gold" withLine>
                {philosophy.eyebrow}
              </SectionEyebrow>
              <Heading as="h2" variant="h1" font="serif" className="text-forest-deep text-3xl sm:text-4xl lg:text-5xl leading-[1.12] font-semibold">
                Some places are visited. <br className="hidden sm:inline" />
                <span className="italic font-normal text-gold-dark">Pench is experienced.</span>
              </Heading>
              <p className="font-serif text-lg sm:text-xl text-charcoal/90 leading-relaxed pt-2">
                "{philosophy.lead}"
              </p>
            </div>

            {/* Right Narrative Reflection */}
            <div className="lg:col-span-6 space-y-5 text-charcoal/80 text-sm sm:text-base font-light leading-relaxed lg:pl-6 lg:border-l border-sand/35">
              {philosophy.body.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
              <div className="pt-2 flex items-center gap-6">
                <div>
                  <strong className="block text-xl font-serif text-forest-deep font-semibold">Sillari Gate</strong>
                  <span className="text-xs uppercase tracking-wider text-charcoal-muted font-medium">Minutes Away</span>
                </div>
                <div className="w-px h-8 bg-sand/40" />
                <div>
                  <strong className="block text-xl font-serif text-forest-deep font-semibold">~310</strong>
                  <span className="text-xs uppercase tracking-wider text-charcoal-muted font-medium">Bird Species</span>
                </div>
                <div className="w-px h-8 bg-sand/40" />
                <div>
                  <strong className="block text-xl font-serif text-forest-deep font-semibold">100%</strong>
                  <span className="text-xs uppercase tracking-wider text-charcoal-muted font-medium">Forest Immersion</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================
          03. FOUR EXPERIENCE PILLARS (Magazine Asymmetric Composition)
          ======================================================== */}
      <section className="py-20 sm:py-28 bg-ivory border-b border-sand/25">
        <Container size="xl">
          <div className="max-w-3xl mb-14 sm:mb-18 space-y-3">
            <SectionEyebrow color="gold" withLine>
              Curated Wilderness Pillars
            </SectionEyebrow>
            <Heading as="h2" variant="section" font="serif" className="text-forest-deep text-3xl sm:text-4xl lg:text-5xl font-semibold">
              The Four Dimensions of Pench
            </Heading>
            <Text variant="lead" className="text-charcoal/80 text-base sm:text-lg font-light leading-relaxed">
              From open 4x4 Gypsy drives across dawn riverbeds to quiet moments beside an evening campfire, explore how the forest reveals itself.
            </Text>
          </div>

          {/* Editorial Magazine Grid (7 cols feature + 5 cols stacked) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* FEATURE PILLAR: Jungle Safari (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between group overflow-hidden rounded-[4px] bg-forest-dark text-ivory border border-sand/30 shadow-md">
              <div className="relative aspect-[16/11] overflow-hidden">
                <img
                  src={fourPillars[0].image}
                  alt={fourPillars[0].title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-deep/50 to-transparent" />
                <div className="absolute top-5 left-5">
                  <Badge variant="gold" size="sm" className="tracking-wider uppercase font-semibold">
                    {fourPillars[0].badge}
                  </Badge>
                </div>
                <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6">
                  <span className="text-[0.6875rem] uppercase tracking-wider text-gold font-bold block mb-1">
                    {fourPillars[0].eyebrow}
                  </span>
                  <Heading as="h3" variant="title" font="serif" className="text-ivory text-2xl sm:text-3xl font-semibold">
                    {fourPillars[0].title}
                  </Heading>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <Text variant="body" className="text-sand/85 text-sm sm:text-base leading-relaxed font-light mb-6">
                  {fourPillars[0].description}
                </Text>
                <div>
                  <Button
                    as={Link}
                    to={fourPillars[0].link}
                    variant="gold"
                    size="md"
                    className="w-full sm:w-auto font-bold tracking-wider text-center"
                  >
                    {fourPillars[0].ctaLabel} →
                  </Button>
                </div>
              </div>
            </div>

            {/* STACKED PILLARS (5 Cols - 3 Cards) */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              {fourPillars.slice(1).map((pillar) => (
                <div
                  key={pillar.id}
                  className="group p-5 sm:p-6 rounded-[3px] bg-ivory-pure border border-sand/40 hover:border-gold/60 transition-all duration-300 flex flex-col sm:flex-row gap-5 items-center justify-between"
                >
                  <div className="relative w-full sm:w-36 aspect-[16/10] sm:aspect-[4/3] rounded-[2px] overflow-hidden bg-forest-dark shrink-0">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-forest-dark/20" />
                  </div>

                  <div className="flex-1 space-y-1.5 w-full">
                    <span className="text-[0.625rem] uppercase tracking-wider text-gold font-bold block">
                      {pillar.eyebrow}
                    </span>
                    <Heading as="h4" variant="title" font="serif" className="text-forest-deep text-lg font-semibold leading-snug">
                      {pillar.title}
                    </Heading>
                    <p className="text-xs text-charcoal-muted leading-relaxed font-light line-clamp-2">
                      {pillar.description}
                    </p>
                    <div className="pt-2">
                      <Link
                        to={pillar.link}
                        className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-forest hover:text-gold transition-colors"
                      >
                        {pillar.ctaLabel} <span className="ml-1">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================
          04. FULL-WIDTH CINEMATIC SAFARI IMAGE BANNER
          ======================================================== */}
      <section className="relative w-full py-28 sm:py-36 md:py-44 bg-forest-dark text-ivory overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.home.safari}
            alt="Dawn safari through Pench teak forest in open 4x4 Gypsy"
            loading="lazy"
            className="w-full h-full object-cover object-center transform scale-102"
          />
          {/* Deep cinematic gradient scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-deep/80 to-forest-dark/60 sm:bg-gradient-to-r sm:from-forest-dark/95 sm:via-forest-deep/85 sm:to-forest-deep/30" />
        </div>

        <Container size="xl" className="relative z-10 w-full">
          <div className="max-w-2xl space-y-4 sm:space-y-5">
            <span className="text-xs uppercase tracking-wider text-gold font-bold block">
              Dawn in the Tiger Reserve
            </span>
            <Heading as="h2" variant="h1" font="serif" className="text-ivory text-3xl sm:text-4xl md:text-5xl leading-[1.1] font-semibold">
              Every safari begins before the forest wakes.
            </Heading>
            <Text variant="lead" className="text-sand/90 text-sm sm:text-base md:text-lg font-light leading-relaxed">
              Open 4x4 Gypsies depart through Sillari Gate just as golden light filters through the towering teak canopy. The silence breaks only for the alarm cough of a langur high above.
            </Text>
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <Button as={Link} to="/experiences/safari" variant="gold" size="lg" className="font-bold tracking-wider">
                Explore Jungle Safari
              </Button>
              <Button as="a" href={whatsappInquiryUrl} target="_blank" rel="noopener noreferrer" variant="inverted" size="lg" className="font-semibold tracking-wider">
                Plan Your Safari
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================
          05. WILDLIFE EDITORIAL SECTION (Tiger & Birdlife Spotlight)
          ======================================================== */}
      <section className="py-20 sm:py-28 bg-ivory-pure border-b border-sand/25">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Visual Side: Tiger Hero with Thumbnails */}
            <div className="lg:col-span-7 space-y-3">
              <div className="relative group overflow-hidden rounded-[4px] bg-forest-dark border border-sand/35 shadow-md">
                <img
                  src={IMAGES.home.tiger}
                  alt="Royal Bengal Tiger in Pench National Park"
                  loading="lazy"
                  className="w-full aspect-[16/10] object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/85 via-transparent to-transparent opacity-60" />
                <div className="absolute top-4 left-4">
                  <Badge variant="gold" size="sm" className="font-semibold tracking-wider uppercase">
                    Apex Predator · Pench
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-ivory">
                  <span className="text-[0.6875rem] uppercase tracking-wider text-gold font-bold block mb-1">
                    Royal Bengal Tiger
                  </span>
                  <p className="text-xs sm:text-sm text-sand-light font-light max-w-lg leading-relaxed">
                    Solitary ruler of the Satpura riverine valleys and teak corridors.
                  </p>
                </div>
              </div>

              {/* Supporting Wildlife Thumbnails */}
              <div className="grid grid-cols-3 gap-3">
                <div className="aspect-[16/10] overflow-hidden rounded-[2px] border border-sand/30 bg-forest-dark relative group">
                  <img src={IMAGES.wildlife.spottedDeer} alt="Chital deer in morning mist" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  <span className="absolute bottom-1.5 left-2 text-[0.6rem] text-ivory font-semibold bg-forest-dark/80 px-1.5 py-0.5 rounded-[2px]">Chital Herds</span>
                </div>
                <div className="aspect-[16/10] overflow-hidden rounded-[2px] border border-sand/30 bg-forest-dark relative group">
                  <img src={IMAGES.wildlife.birding} alt="Birdlife in Pench" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  <span className="absolute bottom-1.5 left-2 text-[0.6rem] text-ivory font-semibold bg-forest-dark/80 px-1.5 py-0.5 rounded-[2px]">~310 Birds</span>
                </div>
                <div className="aspect-[16/10] overflow-hidden rounded-[2px] border border-sand/30 bg-forest-dark relative group">
                  <img src={IMAGES.hero.pench} alt="Gaur in forest clearing" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  <span className="absolute bottom-1.5 left-2 text-[0.6rem] text-ivory font-semibold bg-forest-dark/80 px-1.5 py-0.5 rounded-[2px]">Indian Gaur</span>
                </div>
              </div>
            </div>

            {/* Narrative Side */}
            <div className="lg:col-span-5 space-y-5">
              <SectionEyebrow color="gold" withLine>
                {wildlifeSpotlight.eyebrow}
              </SectionEyebrow>
              <Heading as="h2" variant="section" font="serif" className="text-forest-deep text-3xl sm:text-4xl leading-tight font-semibold">
                {wildlifeSpotlight.title}
              </Heading>
              <Text variant="lead" className="text-charcoal/85 text-sm sm:text-base font-light leading-relaxed">
                Pench protects an extraordinary ecological web. Dominated by tall teak trees and seasonal streams, the forest sustains vast herds of spotted deer, elusive leopards, and approximately 310 documented bird species.
              </Text>

              <div className="p-4 rounded-[3px] bg-sand/15 border border-sand/30 text-xs sm:text-[0.8125rem] text-charcoal/85 font-light leading-relaxed">
                <strong className="font-semibold text-forest-deep block mb-1">Ethical Wildlife Standard:</strong>
                {wildlifeSpotlight.disclaimer}
              </div>

              <div className="pt-2">
                <Button as={Link} to={wildlifeSpotlight.cta.to} variant="primary" size="md" className="font-semibold tracking-wider">
                  {wildlifeSpotlight.cta.label} →
                </Button>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================
          06. DARK FOREST SECTION: "Read the Forest Differently"
          ======================================================== */}
      <section className="py-20 sm:py-28 bg-forest-dark text-ivory border-b border-sand/15 relative overflow-hidden">
        {/* Subtle radial ambience */}
        <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold via-transparent to-transparent pointer-events-none" />

        <Container size="xl" className="relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-18 space-y-3">
            <Badge variant="gold">Jungle Field Craft</Badge>
            <SectionEyebrow color="gold" withLine className="justify-center text-gold-light">
              Jungle Language
            </SectionEyebrow>
            <Heading as="h2" variant="h2" font="serif" className="text-ivory text-3xl sm:text-4xl lg:text-5xl font-semibold">
              Read the Forest Differently
            </Heading>
            <Text variant="lead" className="text-sand/80 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
              A jungle safari is not merely looking for animals—it is learning to listen, track pugmarks, and anticipate movement before the predator appears.
            </Text>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-[3px] bg-forest-deep/80 border border-sand/20 space-y-2.5">
              <span className="text-gold font-serif text-xl font-bold block">01</span>
              <h4 className="font-serif text-lg text-ivory font-semibold">Alarm Calls</h4>
              <p className="text-xs text-sand/80 font-light leading-relaxed">
                The throaty cough of a grey langur or the sharp whistle of spotted deer alerting the jungle of a stalking big cat.
              </p>
            </div>

            <div className="p-6 rounded-[3px] bg-forest-deep/80 border border-sand/20 space-y-2.5">
              <span className="text-gold font-serif text-xl font-bold block">02</span>
              <h4 className="font-serif text-lg text-ivory font-semibold">Pugmarks in Sand</h4>
              <p className="text-xs text-sand/80 font-light leading-relaxed">
                Fresh clawless pad impressions left on dry nala beds reveal a tiger's direction, gait, and territorial patrol from dawn.
              </p>
            </div>

            <div className="p-6 rounded-[3px] bg-forest-deep/80 border border-sand/20 space-y-2.5">
              <span className="text-gold font-serif text-xl font-bold block">03</span>
              <h4 className="font-serif text-lg text-ivory font-semibold">Canopy Signals</h4>
              <p className="text-xs text-sand/80 font-light leading-relaxed">
                The sudden flapping flight of hornbills or peacocks honking from high branches pinpoint ground predator movement.
              </p>
            </div>

            <div className="p-6 rounded-[3px] bg-forest-deep/80 border border-sand/20 space-y-2.5">
              <span className="text-gold font-serif text-xl font-bold block">04</span>
              <h4 className="font-serif text-lg text-ivory font-semibold">Scent of the Wild</h4>
              <p className="text-xs text-sand/80 font-light leading-relaxed">
                Fresh territorial spray marks on dry teak trunks tell guides which resident cat walked the fireline just minutes earlier.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================
          07. NATURE TRAILS & ON-FOOT BUFFER WALKS (Light Editorial)
          ======================================================== */}
      <section className="py-20 sm:py-28 bg-ivory border-b border-sand/25">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Visual Side */}
            <div className="lg:col-span-6 relative aspect-[4/3] rounded-[3px] overflow-hidden bg-forest-dark border border-sand/35 shadow-sm">
              <img
                src={IMAGES.wildlife.forestCanopy}
                alt="Teak canopy and walking trail in Pench"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-ivory">
                <span className="text-[0.6875rem] uppercase tracking-wider text-gold font-bold block mb-1">
                  Permitted Buffer Trails
                </span>
                <p className="text-xs sm:text-sm font-serif italic text-sand-light">
                  Touch the paper bark of the Ghost tree, observe intricate insect architecture, and breathe pure teak air.
                </p>
              </div>
            </div>

            {/* Narrative Side */}
            <div className="lg:col-span-6 space-y-5">
              <SectionEyebrow color="gold" withLine>
                {naturePreview.eyebrow}
              </SectionEyebrow>
              <Heading as="h2" variant="section" font="serif" className="text-forest-deep text-3xl sm:text-4xl font-semibold">
                {naturePreview.title}
              </Heading>
              <Text variant="lead" className="text-charcoal/80 text-sm sm:text-base font-light leading-relaxed">
                {naturePreview.lead}
              </Text>

              <div className="space-y-3 pt-2">
                {naturePreview.highlights.map((hl, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-charcoal/90 font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3">
                <Button as={Link} to={naturePreview.cta.to} variant="secondary" size="md" className="font-semibold tracking-wider">
                  {naturePreview.cta.label} →
                </Button>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================
          08. RESORT EVENINGS SECTION (Starlit Campfire Moments)
          ======================================================== */}
      <section className="py-20 sm:py-28 bg-forest-deep text-ivory border-b border-sand/15 relative overflow-hidden">
        {/* Subtle background photo scrim */}
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src={IMAGES.dining.bonfireDinner}
            alt="Evening campfire under starlit sky at Go Flamingo Resort"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-deep/90 to-forest-dark" />

        <Container size="xl" className="relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 sm:mb-16">
            <Badge variant="gold">Resort Fireside Experience</Badge>
            <SectionEyebrow color="gold" withLine className="justify-center text-gold-light">
              {eveningsPreview.eyebrow}
            </SectionEyebrow>
            <Heading as="h2" variant="section" font="serif" className="text-ivory text-3xl sm:text-4xl lg:text-5xl font-semibold">
              {eveningsPreview.title}
            </Heading>
            <Text variant="lead" className="text-sand/85 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
              {eveningsPreview.description}
            </Text>
            <p className="text-xs text-sand/65 italic font-light">
              *{eveningsPreview.note}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-7 rounded-[3px] bg-forest-dark/85 border border-sand/20 text-center space-y-3">
              <span className="text-2xl block text-gold">✦</span>
              <h4 className="text-ivory font-serif text-lg sm:text-xl font-semibold">Dark Sky Stargazing</h4>
              <p className="text-xs sm:text-sm text-sand/80 font-light leading-relaxed">
                Clear Central Indian skies reveal brilliant constellations and the Milky Way away from urban light pollution.
              </p>
            </div>
            <div className="p-7 rounded-[3px] bg-forest-dark/85 border border-sand/20 text-center space-y-3">
              <span className="text-2xl block text-gold">🔥</span>
              <h4 className="text-ivory font-serif text-lg sm:text-xl font-semibold">Lawn Bonfire & Chai</h4>
              <p className="text-xs sm:text-sm text-sand/80 font-light leading-relaxed">
                Exchange wildlife stories around the crackling lawn fire with hot regional snacks and spiced masala chai.
              </p>
            </div>
            <div className="p-7 rounded-[3px] bg-forest-dark/85 border border-sand/20 text-center space-y-3">
              <span className="text-2xl block text-gold">🦉</span>
              <h4 className="text-ivory font-serif text-lg sm:text-xl font-semibold">Acoustic Symphony</h4>
              <p className="text-xs sm:text-sm text-sand/80 font-light leading-relaxed">
                Unwind to the natural night sounds of Pench—the quiet call of jungle owlets and rustling teak foliage.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================
          09. A DAY IN PENCH (Illustrative Editorial Timeline)
          ======================================================== */}
      <section className="py-20 sm:py-28 bg-ivory-warm/40 border-b border-sand/30">
        <Container size="xl">
          <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-18 space-y-3">
            <SectionEyebrow color="gold" withLine className="justify-center">
              {dayInPench.eyebrow}
            </SectionEyebrow>
            <Heading as="h2" variant="section" font="serif" className="text-forest-deep text-3xl sm:text-4xl lg:text-5xl font-semibold">
              {dayInPench.title}
            </Heading>
            <Text variant="lead" className="text-charcoal/80 text-sm sm:text-base font-light">
              {dayInPench.lead}
            </Text>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-6">
            {dayInPench.timeline.map((item, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-[3px] bg-ivory border border-sand/40 hover:border-gold/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[0.6875rem] uppercase tracking-wider font-bold text-gold block mb-1">
                    {item.time}
                  </span>
                  <Heading as="h4" variant="title" font="serif" className="text-forest-deep text-base sm:text-lg mb-2 font-semibold">
                    {item.title}
                  </Heading>
                  <Text variant="body" className="text-charcoal/80 text-xs leading-relaxed font-light">
                    {item.desc}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================
          10. STAY CONNECTION (Where You Recharge)
          ======================================================== */}
      <section className="py-20 sm:py-28 bg-ivory border-b border-sand/25">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-5 space-y-5">
              <SectionEyebrow color="terracotta" withLine>
                {stayConnection.eyebrow}
              </SectionEyebrow>
              <Heading as="h2" variant="section" font="serif" className="text-forest-deep text-3xl sm:text-4xl font-semibold leading-tight">
                After the forest, come home to comfort.
              </Heading>
              <Text variant="lead" className="text-charcoal/80 text-sm sm:text-base font-light leading-relaxed">
                Step into standalone sandstone cottages crafted beneath mature teak trees. Generous wooden verandahs, natural stone rain showers, and the gentle sounds of Pench.
              </Text>
              <div className="pt-2 flex flex-wrap gap-4">
                <Button as={Link} to="/rooms" variant="primary" size="md">
                  Explore Accommodations →
                </Button>
                <Button as={Link} to="/book" variant="gold" size="md">
                  Check Stay Availability
                </Button>
              </div>
            </div>

            {/* Right Visual Pair */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="group overflow-hidden rounded-[3px] bg-ivory-pure border border-sand/35 shadow-xs">
                <div className="aspect-[16/11] overflow-hidden bg-forest-dark">
                  <img
                    src={stayConnection.cottage.image}
                    alt={stayConnection.cottage.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 sm:p-6 space-y-2">
                  <Heading as="h4" variant="title" font="serif" className="text-forest-deep text-lg font-semibold">
                    {stayConnection.cottage.title}
                  </Heading>
                  <p className="text-xs text-charcoal/80 font-light leading-relaxed">
                    {stayConnection.cottage.desc}
                  </p>
                  <div className="pt-2">
                    <Link to={stayConnection.cottage.to} className="text-xs font-semibold text-forest uppercase tracking-wider hover:text-gold">
                      View Cottage Details →
                    </Link>
                  </div>
                </div>
              </div>

              <div className="group overflow-hidden rounded-[3px] bg-ivory-pure border border-sand/35 shadow-xs">
                <div className="aspect-[16/11] overflow-hidden bg-forest-dark">
                  <img
                    src={stayConnection.suite.image}
                    alt={stayConnection.suite.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 sm:p-6 space-y-2">
                  <Heading as="h4" variant="title" font="serif" className="text-forest-deep text-lg font-semibold">
                    {stayConnection.suite.title}
                  </Heading>
                  <p className="text-xs text-charcoal/80 font-light leading-relaxed">
                    {stayConnection.suite.desc}
                  </p>
                  <div className="pt-2">
                    <Link to={stayConnection.suite.to} className="text-xs font-semibold text-forest uppercase tracking-wider hover:text-gold">
                      View Suite Details →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================
          11. FINAL CONVERSION BANNER
          ======================================================== */}
      <ExperienceInquiryBanner
        eyebrow="Pench Awaits"
        title="Ready to Begin Your Wilderness Journey?"
        subtitle="Reserve your luxury forest cottage and plan your safari itinerary with our dedicated concierge team at Go Flamingo Resort."
        whatsappTopic="I would like to explore wilderness experiences and room availability at Go Flamingo Resort."
      />
    </div>
  );
}

/**
 * =========================================================================
 * 2. JUNGLE SAFARI PAGE (/experiences/safari)
 * =========================================================================
 * Cinematic safari guide: 4x4 open Gypsies, Sillari Gate access,
 * Core vs. Buffer perspectives, verified seasonal timings & concierge support.
 */
export function SafariPage() {
  const {
    hero,
    sillariAdvantage,
    gypsyFormat,
    coreVsBuffer,
    seasonalTimings,
    packingChecklist,
    etiquetteRules,
    wildlifeExpectations,
    resortSupport,
  } = SAFARI_DATA;

  const whatsappInquiryUrl = `https://wa.me/919372425968?text=${encodeURIComponent(
    'Hello Go Flamingo Resort, I would like to inquire about safari planning and permits for Sillari Gate.'
  )}`;

  return (
    <div className="bg-ivory text-charcoal font-sans antialiased pb-[calc(5.5rem+env(safe-area-inset-bottom,0px))] lg:pb-0">
      
      {/* ========================================================
          01. SIGNATURE SAFARI CINEMATIC HERO
          ======================================================== */}
      <PageHero
        variant="cinematic"
        badge={hero.badge}
        eyebrow={hero.eyebrow}
        title={hero.title}
        subtitle={hero.subtitle}
        image={hero.image}
        imageAlt="Open 4x4 Gypsy on a morning safari in Pench"
        breadcrumbs={[
          { label: 'Experiences', to: '/experiences' },
          { label: 'Jungle Safari' },
        ]}
        actions={[
          {
            label: 'Plan on WhatsApp',
            href: whatsappInquiryUrl,
            variant: 'gold',
          },
          {
            label: 'Check Stay Availability',
            to: '/book',
            variant: 'inverted',
          },
        ]}
      />

      {/* ========================================================
          02. EDITORIAL MANIFESTO: IN PENCH, THE FOREST DICTATES THE PACE
          ======================================================== */}
      <section className="py-20 sm:py-28 bg-ivory-warm/50 border-b border-sand/30">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-4">
              <SectionEyebrow color="gold" withLine>
                {sillariAdvantage.eyebrow}
              </SectionEyebrow>
              <Heading as="h2" variant="h1" font="serif" className="text-forest-deep text-3xl sm:text-4xl lg:text-5xl leading-[1.12] font-semibold">
                In Pench, the forest <br className="hidden sm:inline" />
                <span className="italic font-normal text-gold-dark">dictates the pace.</span>
              </Heading>
              <p className="font-serif text-lg sm:text-xl text-charcoal/90 leading-relaxed pt-2">
                "{sillariAdvantage.lead}"
              </p>
            </div>

            <div className="lg:col-span-6 space-y-5 text-charcoal/80 text-sm sm:text-base font-light leading-relaxed lg:pl-6 lg:border-l border-sand/35">
              {sillariAdvantage.body.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-sand/25">
                {sillariAdvantage.features.map((feat, idx) => (
                  <div key={idx}>
                    <strong className="block text-sm font-serif text-forest-deep font-semibold mb-1">
                      {feat.title}
                    </strong>
                    <p className="text-xs text-charcoal-muted font-light leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================
          03. FULL-WIDTH CINEMATIC SAFARI VISUAL & QUOTE
          ======================================================== */}
      <section className="relative w-full py-28 sm:py-36 bg-forest-dark text-ivory overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.hero.pench}
            alt="Pench savanna and teak landscape in morning mist"
            loading="lazy"
            className="w-full h-full object-cover object-center transform scale-102"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-deep/80 to-forest-dark/60 sm:bg-gradient-to-r sm:from-forest-dark/95 sm:via-forest-deep/80 sm:to-transparent" />
        </div>

        <Container size="xl" className="relative z-10 w-full">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs uppercase tracking-wider text-gold font-bold block">
              The Morning Forest
            </span>
            <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl italic text-ivory leading-snug">
              "Fresh pugmarks etched into morning sand. The sudden, sharp alarm bark of a spotted deer. In an open Gypsy, you are part of the forest."
            </blockquote>
            <p className="text-xs sm:text-sm text-sand/80 font-light">
              Maharashtra Forest Department registered safari operations · Sillari Gate
            </p>
          </div>
        </Container>
      </section>

      {/* ========================================================
          04. OPEN 4X4 GYPSY EXPERIENCE & FOREST REGULATIONS
          ======================================================== */}
      <section className="py-20 sm:py-28 bg-ivory border-b border-sand/25">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Narrative & Points */}
            <div className="lg:col-span-6 space-y-5">
              <SectionEyebrow color="gold" withLine>
                {gypsyFormat.eyebrow}
              </SectionEyebrow>
              <Heading as="h2" variant="section" font="serif" className="text-forest-deep text-3xl sm:text-4xl font-semibold">
                {gypsyFormat.title}
              </Heading>
              <Text variant="lead" className="text-charcoal/80 text-sm sm:text-base font-light leading-relaxed">
                {gypsyFormat.description}
              </Text>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                {gypsyFormat.details.map((item, idx) => (
                  <div key={idx} className="p-5 rounded-[3px] bg-ivory-pure border border-sand/40 space-y-1.5">
                    <span className="text-gold font-serif text-sm font-bold block">0{idx + 1}</span>
                    <Heading as="h4" variant="title" font="serif" className="text-forest-deep text-base font-semibold">
                      {item.title}
                    </Heading>
                    <p className="text-xs text-charcoal-muted leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Side */}
            <div className="lg:col-span-6 relative aspect-[4/3] rounded-[3px] overflow-hidden bg-forest-dark border border-sand/35 shadow-md">
              <img
                src={IMAGES.home.safari}
                alt="Open 4x4 Gypsy on trail in Pench"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/85 via-transparent to-transparent opacity-70" />
              <div className="absolute bottom-5 left-5 right-5 text-ivory">
                <span className="text-[0.6875rem] uppercase tracking-wider text-gold font-bold block mb-1">
                  Forest Department Compliance
                </span>
                <p className="text-xs sm:text-sm font-serif italic text-sand-light">
                  Strictly regulated speed limits, registered naturalists, and zero off-road disturbance.
                </p>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================
          05. CORE VS BUFFER ZONAL PERSPECTIVES
          ======================================================== */}
      <section className="py-20 sm:py-28 bg-forest-deep text-ivory border-b border-sand/15">
        <Container size="xl">
          <div className="max-w-3xl mx-auto text-center mb-14 space-y-3">
            <Badge variant="gold">Reserve Geography</Badge>
            <SectionEyebrow color="gold" withLine className="justify-center text-gold-light">
              {coreVsBuffer.eyebrow}
            </SectionEyebrow>
            <Heading as="h2" variant="section" font="serif" className="text-ivory text-3xl sm:text-4xl lg:text-5xl font-semibold">
              {coreVsBuffer.title}
            </Heading>
            <Text variant="lead" className="text-sand/85 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
              {coreVsBuffer.description}
            </Text>
          </div>

          <CoreVsBufferCard data={coreVsBuffer} />
        </Container>
      </section>

      {/* ========================================================
          06. SEASONAL SAFARI TIMINGS
          ======================================================== */}
      <section className="py-20 sm:py-28 bg-ivory-pure border-b border-sand/25">
        <Container size="xl">
          <div className="max-w-3xl mx-auto text-center mb-14 space-y-3">
            <SectionEyebrow color="gold" withLine className="justify-center">
              {seasonalTimings.eyebrow}
            </SectionEyebrow>
            <Heading as="h2" variant="section" font="serif" className="text-forest-deep text-3xl sm:text-4xl lg:text-5xl font-semibold">
              {seasonalTimings.title}
            </Heading>
            <Text variant="lead" className="text-charcoal/80 text-sm sm:text-base font-light">
              Plan your jungle drives around verified seasonal sunrise and sunset timings.
            </Text>
          </div>

          <SafariSeasonalSchedule
            seasons={seasonalTimings.seasons}
            disclaimer={seasonalTimings.disclaimer}
          />
        </Container>
      </section>

      {/* ========================================================
          07. WILDLIFE EXPECTATIONS (Factual Safeguard Callout Banner)
          ======================================================== */}
      <section className="py-14 sm:py-18 bg-sand/20 border-b border-sand/35">
        <Container size="lg" className="text-center space-y-3">
          <span className="text-[0.6875rem] uppercase tracking-wider text-forest-deep font-bold block">
            Responsible Wildlife Tourism
          </span>
          <Heading as="h3" variant="h3" font="serif" className="text-forest-deep text-2xl sm:text-3xl font-semibold">
            Wildlife sightings are never guaranteed.
          </Heading>
          <Text variant="body" className="text-charcoal/85 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-light">
            Every safari into Pench is an authentic expedition into a wild and protected ecosystem. The privilege is in the tracking, the fresh pugmarks, the tension of the forest alarm calls, and being present in one of India’s finest tiger habitats.
          </Text>
        </Container>
      </section>

      {/* ========================================================
          08. WHAT TO PACK & FOREST ETIQUETTE (Side-by-Side)
          ======================================================== */}
      <section className="py-20 sm:py-28 bg-ivory border-b border-sand/25">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            
            {/* Column 1: Packing */}
            <div className="p-8 sm:p-10 rounded-[3px] bg-ivory-pure border border-sand/40 space-y-5">
              <span className="text-[0.6875rem] uppercase tracking-wider text-gold font-bold block">
                Safari Preparation
              </span>
              <Heading as="h3" variant="title" font="serif" className="text-forest-deep text-2xl font-semibold">
                What to Pack for Your Drive
              </Heading>
              <ul className="space-y-3 pt-2">
                {packingChecklist.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-charcoal/90 font-light leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2" />
                    <span>
                      <strong className="font-semibold text-forest-deep">{typeof item === 'object' ? item.item : item}</strong>
                      {typeof item === 'object' && item.note && (
                        <span className="text-charcoal/75 block text-xs mt-0.5">{item.note}</span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Etiquette */}
            <div className="p-8 sm:p-10 rounded-[3px] bg-ivory-pure border border-sand/40 space-y-5">
              <span className="text-[0.6875rem] uppercase tracking-wider text-forest-jungle font-bold block">
                Reserve Code of Conduct
              </span>
              <Heading as="h3" variant="title" font="serif" className="text-forest-deep text-2xl font-semibold">
                Forest Department Etiquette
              </Heading>
              <ul className="space-y-3 pt-2">
                {etiquetteRules.map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-charcoal/90 font-light leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-forest-jungle shrink-0 mt-2" />
                    <span>
                      <strong className="font-semibold text-forest-deep">{typeof rule === 'object' ? rule.title : rule}</strong>
                      {typeof rule === 'object' && rule.desc && (
                        <span className="text-charcoal/75 block text-xs mt-0.5">{rule.desc}</span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================
          09. GO FLAMINGO RESORT CONCIERGE & SAFARI WAKE-UP
          ======================================================== */}
      <section className="py-20 sm:py-28 bg-forest-dark text-ivory border-b border-sand/15">
        <Container size="xl">
          <div className="max-w-3xl mx-auto text-center mb-14 space-y-3">
            <span className="text-[0.6875rem] uppercase tracking-wider text-gold font-bold block">
              Resort Hospitality
            </span>
            <Heading as="h2" variant="section" font="serif" className="text-ivory text-3xl sm:text-4xl lg:text-5xl font-semibold">
              {resortSupport.title}
            </Heading>
            <Text variant="lead" className="text-sand/80 text-sm sm:text-base font-light">
              {resortSupport.subtitle}
            </Text>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {resortSupport.services.map((srv, idx) => (
              <div key={idx} className="p-6 rounded-[3px] bg-forest-deep border border-sand/20 space-y-2">
                <span className="text-gold font-serif text-lg font-bold block">
                  ✦
                </span>
                <h4 className="text-ivory font-serif text-lg font-semibold">
                  {srv.title}
                </h4>
                <p className="text-xs text-sand/80 leading-relaxed font-light">
                  {srv.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================
          10. STAY CONNECTION & FINAL CONVERSION
          ======================================================== */}
      <ExperienceInquiryBanner
        eyebrow="Sillari Gate Safari"
        title="Ready for Your Dawn Forest Drive?"
        subtitle="Stay close to the gate at Go Flamingo Resort. Our concierge assists with Gypsy liaison, wake-up calls, and breakfast packs."
        whatsappTopic="I would like to plan a jungle safari from Sillari Gate and check room availability at Go Flamingo Resort."
      />
    </div>
  );
}

/**
 * =========================================================================
 * 3. WILDLIFE & BIRDWATCHING PAGE (/experiences/wildlife)
 * =========================================================================
 * Visually dramatic biodiversity guide: apex predators, herbivores,
 * approx. 310 bird species, field tracking craft & photography ethics.
 */
export function WildlifePage() {
  const {
    hero,
    livingForest,
    predators,
    herbivores,
    birdlife,
    birdwatchingAtResort,
    photographyTips,
    readingTheForest,
    ethicalWildlifeTourism,
  } = WILDLIFE_DATA;

  const whatsappInquiryUrl = `https://wa.me/919372425968?text=${encodeURIComponent(
    'Hello Go Flamingo Resort, I am interested in a wildlife and birdwatching stay in Pench.'
  )}`;

  return (
    <div className="bg-ivory text-charcoal font-sans antialiased pb-[calc(5.5rem+env(safe-area-inset-bottom,0px))] lg:pb-0">
      
      {/* ========================================================
          01. SIGNATURE DRAMATIC WILDLIFE HERO
          ======================================================== */}
      <PageHero
        variant="cinematic"
        badge={hero.badge}
        eyebrow={hero.eyebrow}
        title={hero.title}
        subtitle={hero.subtitle}
        image={hero.image}
        imageAlt="Royal Bengal Tiger in Pench Tiger Reserve"
        breadcrumbs={[
          { label: 'Experiences', to: '/experiences' },
          { label: 'Wildlife & Birding' },
        ]}
        actions={[
          {
            label: 'Plan on WhatsApp',
            href: whatsappInquiryUrl,
            variant: 'gold',
          },
          {
            label: 'Check Stay Availability',
            to: '/book',
            variant: 'inverted',
          },
        ]}
      />

      {/* ========================================================
          02. FULL-WIDTH CINEMATIC TIGER STRIP & MANIFESTO
          ======================================================== */}
      {/* <section className="relative w-full py-28 sm:py-36 bg-forest-dark text-ivory overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.home.tiger}
            alt="Royal Bengal Tiger walking silently through dry teak forest"
            loading="lazy"
            className="w-full h-full object-cover object-center transform scale-102"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-deep/85 to-forest-dark/60 sm:bg-gradient-to-r sm:from-forest-dark/95 sm:via-forest-deep/85 sm:to-transparent" />
        </div>

        {/* <Container size="xl" className="relative z-10 w-full">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs uppercase tracking-wider text-gold font-bold block">
              The Living Forest
            </span>
            <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl italic text-ivory leading-snug">
              "A flash of amber through the dry teak leaves. An explosion of alarm calls echoing across the canopy. The jungle stands still."
            </blockquote>
            <p className="text-xs sm:text-sm text-sand/80 font-light">
              Royal Bengal Tiger habitat · Pench Tiger Reserve
            </p>
          </div>
        </Container> 
      </section> */}

      {/* ========================================================
          03. THE LIVING FOREST ECOSYSTEM
          ======================================================== */}
      <section className="py-20 sm:py-28 bg-ivory-warm/40 border-b border-sand/30">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-4">
              <SectionEyebrow color="gold" withLine>
                {livingForest.eyebrow}
              </SectionEyebrow>
              <Heading as="h2" variant="h1" font="serif" className="text-forest-deep text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
                {livingForest.title}
              </Heading>
              <p className="font-serif text-lg sm:text-xl text-charcoal/90 leading-relaxed pt-2">
                "{livingForest.lead}"
              </p>
            </div>

            <div className="lg:col-span-6 space-y-5 text-charcoal/80 text-sm sm:text-base font-light leading-relaxed lg:pl-6 lg:border-l border-sand/35">
              {livingForest.body.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================
          04. BIODIVERSITY SHOWCASE (Predators, Herbivores & ~310 Birds)
          ======================================================== */}
      <section className="py-20 sm:py-28 bg-ivory border-b border-sand/25">
        <Container size="xl">
          <div className="max-w-3xl mx-auto text-center mb-14 space-y-3">
            <Badge variant="gold">Species Catalog</Badge>
            <SectionEyebrow color="gold" withLine className="justify-center">
              Pench Fauna & Avifauna
            </SectionEyebrow>
            <Heading as="h2" variant="section" font="serif" className="text-forest-deep text-3xl sm:text-4xl lg:text-5xl font-semibold">
              The Wildlife of Pench
            </Heading>
            <Text variant="lead" className="text-charcoal/80 text-sm sm:text-base font-light">
              Explore key apex predators, herbivore herds, and approximately 310 documented bird species.
            </Text>
          </div>

          <WildlifeSpeciesGrid
            predators={predators}
            herbivores={herbivores}
            birdlife={birdlife}
          />
        </Container>
      </section>

      {/* ========================================================
          05. DARK FOREST SECTION: "Read the Signs of the Forest"
          ======================================================== */}
      <section className="py-20 sm:py-28 bg-forest-dark text-ivory border-b border-sand/15">
        <Container size="xl">
          <div className="max-w-3xl mx-auto text-center mb-14 space-y-3">
            <span className="text-[0.6875rem] uppercase tracking-wider text-gold font-bold block">
              Jungle Signals
            </span>
            <Heading as="h2" variant="section" font="serif" className="text-ivory text-3xl sm:text-4xl lg:text-5xl font-semibold">
              Read the Signs of the Forest
            </Heading>
            <Text variant="lead" className="text-sand/80 text-sm sm:text-base font-light">
              How the jungle speaks: alarm calls, warning signs, and fresh tracks.
            </Text>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(Array.isArray(readingTheForest) ? readingTheForest : (readingTheForest?.signals || [])).map((sig, idx) => (
              <div key={idx} className="p-6 rounded-[3px] bg-forest-deep border border-sand/20 space-y-2">
                <span className="text-gold font-serif text-lg font-bold block">
                  0{idx + 1}
                </span>
                <Heading as="h4" variant="title" font="serif" className="text-ivory text-lg font-semibold">
                  {sig.title}
                </Heading>
                <p className="text-xs text-sand/80 leading-relaxed font-light">
                  {sig.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================
          06. WILDLIFE PHOTOGRAPHY FIELD ADVICE
          ======================================================== */}
      <section className="py-20 sm:py-28 bg-ivory-pure border-b border-sand/25">
        <Container size="xl">
          <div className="max-w-3xl mx-auto text-center mb-14 space-y-3">
            <SectionEyebrow color="gold" withLine className="justify-center">
              Field Craft
            </SectionEyebrow>
            <Heading as="h2" variant="section" font="serif" className="text-forest-deep text-3xl sm:text-4xl lg:text-5xl font-semibold">
              Wildlife Photography in Pench
            </Heading>
            <Text variant="lead" className="text-charcoal/80 text-sm sm:text-base font-light">
              Essential tips for capturing the light, fauna, and rapid motion of the Central Indian jungle.
            </Text>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {photographyTips.map((tip, idx) => (
              <div key={idx} className="p-6 rounded-[3px] bg-ivory border border-sand/40 space-y-2.5">
                <span className="text-gold font-serif text-lg font-bold block">
                  0{idx + 1}
                </span>
                <Heading as="h4" variant="title" font="serif" className="text-forest-deep text-lg font-semibold">
                  {tip.title}
                </Heading>
                <Text variant="body" className="text-charcoal/80 text-xs sm:text-[0.8125rem] leading-relaxed font-light">
                  {tip.desc}
                </Text>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================
          07. RESPONSIBLE WILDLIFE TOURISM (No Sighting Guarantees)
          ======================================================== */}
      <section className="py-20 sm:py-28 bg-forest-deep text-ivory border-b border-sand/15">
        <Container size="lg" className="text-center space-y-5">
          <Badge variant="gold">Conservation Ethics</Badge>
          <Heading as="h2" variant="section" font="serif" className="text-ivory text-3xl sm:text-4xl font-semibold">
            Ethical Wildlife Tourism & Park Code
          </Heading>
          <Text variant="lead" className="text-sand/85 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-light">
            Respecting the habitat, keeping safe distance, and prioritizing forest conservation over sightings.
          </Text>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 text-left">
            {(Array.isArray(ethicalWildlifeTourism) ? ethicalWildlifeTourism : (ethicalWildlifeTourism?.tenets || [])).map((tenet, idx) => (
              <div key={idx} className="p-5 rounded-[3px] bg-forest-dark/80 border border-sand/20 space-y-1.5">
                <span className="text-gold font-serif text-sm font-bold block">✦ Rule 0{idx + 1}</span>
                <p className="text-xs text-sand/80 font-light leading-relaxed">
                  {typeof tenet === 'string' ? tenet : (tenet.desc || tenet.title)}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================
          08. FINAL CONVERSION & STAY CONNECTION
          ======================================================== */}
      {/* <ExperienceInquiryBanner
        eyebrow="Pench Wildlife Stay"
        title="Experience Pench's Living Forest"
        subtitle="Book your cottage sanctuary near Sillari Gate and plan your wildlife expeditions with our concierge."
        whatsappTopic="I would like to inquire about wildlife tours and room bookings at Go Flamingo Resort."
      /> */}
    </div>
  );
}

/**
 * =========================================================================
 * 4. NATURE & FOREST TRAILS PAGE (/experiences/nature)
 * =========================================================================
 * Slow-travel atmospheric nature guide: walking on foot on permitted buffer routes,
 * botanical wonders (Ghost tree, Mahua, Teak, Bamboo), and resort starlit evenings.
 */
export function NaturePage() {
  const {
    hero,
    walkingPhilosophy,
    flora,
    forestDetails,
    eveningsAtResort,
    localCulture,
    mindfulWilderness,
  } = NATURE_DATA;

  const whatsappInquiryUrl = `https://wa.me/919372425968?text=${encodeURIComponent(
    'Hello Go Flamingo Resort, I would like to inquire about guided buffer nature trails and stay options.'
  )}`;

  return (
    <div className="bg-ivory text-charcoal font-sans antialiased pb-[calc(5.5rem+env(safe-area-inset-bottom,0px))] lg:pb-0">
      
      {/* ========================================================
          01. SIGNATURE IMMERSIVE NATURE HERO
          ======================================================== */}
      <PageHero
        variant="cinematic"
        badge={hero.badge}
        eyebrow={hero.eyebrow}
        title={hero.title}
        subtitle={hero.subtitle}
        image={hero.image}
        imageAlt="Forest nature trails and ancient canopy in Pench"
        breadcrumbs={[
          { label: 'Experiences', to: '/experiences' },
          { label: 'Nature Trails' },
        ]}
        actions={[
          {
            label: 'Explore Nature Trails',
            to: '#nature-trails',
            variant: 'gold',
          },
          {
            label: 'Talk to Our Concierge',
            href: whatsappInquiryUrl,
            variant: 'inverted',
          },
        ]}
      />

      {/* ========================================================
          02. EDITORIAL STATEMENT: "SLOW DOWN & WALK THE FOREST"
          ======================================================== */}
      <section className="py-20 sm:py-28 bg-ivory-warm/40 border-b border-sand/30">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-4">
              <SectionEyebrow color="gold" withLine>
                {walkingPhilosophy.eyebrow}
              </SectionEyebrow>
              <Heading as="h2" variant="h1" font="serif" className="text-forest-deep text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.12]">
                Beyond the Gypsy tracks, <br className="hidden sm:inline" />
                <span className="italic font-normal text-gold-dark">the forest breathes.</span>
              </Heading>
              <p className="font-serif text-lg sm:text-xl text-charcoal/90 leading-relaxed pt-2">
                "{walkingPhilosophy.lead}"
              </p>
            </div>

            <div className="lg:col-span-6 space-y-5 text-charcoal/80 text-sm sm:text-base font-light leading-relaxed lg:pl-6 lg:border-l border-sand/35">
              {walkingPhilosophy.body.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-sand/25">
                {walkingPhilosophy.highlights.map((hl, idx) => (
                  <div key={idx}>
                    <strong className="block text-sm font-serif text-forest-deep font-semibold mb-1">
                      {hl.title}
                    </strong>
                    <p className="text-xs text-charcoal-muted font-light leading-relaxed">
                      {hl.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================
          03. NATURE TRAILS & WALKING PATHS (Permitted Buffer Routes)
          ======================================================== */}
      <section id="nature-trails" className="py-20 sm:py-28 bg-ivory border-b border-sand/25">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Visual Side */}
            <div className="lg:col-span-6 relative aspect-[4/3] rounded-[3px] overflow-hidden bg-forest-dark border border-sand/35 shadow-md">
              <img
                src={IMAGES.resort.pathway}
                alt="Walking path along forest boundary"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent opacity-70" />
              <div className="absolute bottom-5 left-5 right-5 text-ivory">
                <span className="text-[0.6875rem] uppercase tracking-wider text-gold font-bold block mb-1">
                  Permitted Buffer Trails
                </span>
                <p className="text-xs sm:text-sm font-serif italic text-sand-light">
                  Accompanied walks along authorized reserve buffer paths where slow exploration is permitted.
                </p>
              </div>
            </div>

            {/* Narrative Side */}
            <div className="lg:col-span-6 space-y-5">
              <SectionEyebrow color="gold" withLine>
                Sensory Forest Exploration
              </SectionEyebrow>
              <Heading as="h2" variant="section" font="serif" className="text-forest-deep text-3xl sm:text-4xl font-semibold">
                Walk the Edges of Pench
              </Heading>
              <Text variant="lead" className="text-charcoal/80 text-sm sm:text-base font-light leading-relaxed">
                Step away from the mechanical rumble of safari engines. On foot along authorized buffer paths, your senses recalibrate to the natural cadence of Central India—inhaling dry teak earth, observing bird nests, and discovering intricate floral architecture.
              </Text>
              <div className="p-4 rounded-[3px] bg-sand/15 border border-sand/30 text-xs text-charcoal/85 leading-relaxed font-light">
                <strong className="font-semibold text-forest-deep block mb-1">Important Safety & Regulatory Notice:</strong>
                Walking on foot is strictly prohibited inside the Core Tiger Reserve and is exclusively conducted along designated buffer routes accompanied by local guides in compliance with Forest Department conservation regulations.
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================
          04. BOTANICAL WONDERS OF PENCH (Rich Visual Feature)
          ======================================================== */}
      <section className="py-20 sm:py-28 bg-ivory-pure border-b border-sand/25">
        <Container size="xl">
          <div className="max-w-3xl mx-auto text-center mb-14 space-y-3">
            <Badge variant="forest">Flora of Central India</Badge>
            <SectionEyebrow color="gold" withLine className="justify-center">
              Indigenous Trees
            </SectionEyebrow>
            <Heading as="h2" variant="section" font="serif" className="text-forest-deep text-3xl sm:text-4xl lg:text-5xl font-semibold">
              Botanical Wonders of Pench
            </Heading>
            <Text variant="lead" className="text-charcoal/80 text-sm sm:text-base font-light">
              Discover the prominent trees that define the character, color, and wildlife food web of the reserve.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {flora.map((item, idx) => (
              <div
                key={idx}
                className="group p-7 sm:p-9 rounded-[3px] bg-ivory border border-sand/40 hover:border-gold/70 transition-all duration-300 flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <Badge variant="gold" size="sm" className="font-semibold text-[0.625rem] tracking-wider uppercase">
                      {item.tag}
                    </Badge>
                    <span className="text-[0.75rem] italic text-charcoal-muted font-serif">
                      {item.scientificName}
                    </span>
                  </div>

                  <Heading as="h3" variant="title" font="serif" className="text-forest-deep text-xl sm:text-2xl font-semibold mb-3">
                    {item.commonName}
                  </Heading>

                  <Text variant="body" className="text-charcoal/80 text-xs sm:text-sm leading-relaxed font-light mb-4">
                    {item.desc}
                  </Text>
                </div>

                <div className="pt-4 border-t border-sand/25 text-xs text-forest-jungle font-medium">
                  ✦ {item.highlights}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================
          05. FOREST FLOOR DETAILS (Micro-Fauna & Ecology)
          ======================================================== */}
      <section className="py-20 sm:py-28 bg-forest-deep text-ivory border-b border-sand/15">
        <Container size="xl">
          <div className="max-w-3xl mx-auto text-center mb-14 space-y-3">
            <span className="text-[0.6875rem] uppercase tracking-wider text-gold font-bold block">
              {forestDetails.eyebrow}
            </span>
            <Heading as="h2" variant="section" font="serif" className="text-ivory text-3xl sm:text-4xl lg:text-5xl font-semibold">
              {forestDetails.title}
            </Heading>
            <Text variant="lead" className="text-sand/80 text-sm sm:text-base font-light">
              {forestDetails.lead}
            </Text>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {forestDetails.items.map((item, idx) => (
              <div key={idx} className="p-6 rounded-[3px] bg-forest-dark border border-sand/20 space-y-2">
                <span className="text-gold font-serif text-lg font-bold block">
                  0{idx + 1}
                </span>
                <Heading as="h4" variant="title" font="serif" className="text-ivory text-lg font-semibold">
                  {item.title}
                </Heading>
                <p className="text-xs text-sand/80 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================
          06. RESORT EVENINGS SECTION (Stargazing & Bonfire)
          ======================================================== */}
      <section className="relative w-full py-28 sm:py-36 bg-forest-dark text-ivory overflow-hidden flex items-center border-b border-sand/15">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.dining.bonfireDinner}
            alt="Evening campfire under starlit sky at Go Flamingo Resort"
            loading="lazy"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-deep/85 to-forest-dark/70 sm:bg-gradient-to-r sm:from-forest-dark/95 sm:via-forest-deep/80 sm:to-transparent" />
        </div>

        <Container size="xl" className="relative z-10 w-full">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs uppercase tracking-wider text-gold font-bold block">
              After Sunset on Resort Lawns
            </span>
            <Heading as="h2" variant="h1" font="serif" className="text-ivory text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.1]">
              Evenings Beneath Starlit Skies
            </Heading>
            <Text variant="lead" className="text-sand/90 text-sm sm:text-base md:text-lg font-light leading-relaxed">
              When darkness settles over Pench, the resort becomes a sanctuary of quiet firelight. Gaze at the Milky Way free from city smog, listen to nocturnal forest acoustic calls, and share stories beside the campfire.
            </Text>
            <p className="text-xs text-sand/65 italic pt-2">
              *Resort-side evening experience. We do not conduct night safaris in the core reserve.
            </p>
          </div>
        </Container>
      </section>

      {/* ========================================================
          07. LOCAL CULTURE & VILLAGE TRADITIONS
          ======================================================== */}
      <section className="py-20 sm:py-28 bg-ivory border-b border-sand/25">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 space-y-4">
              <SectionEyebrow color="terracotta" withLine>
                {localCulture.eyebrow}
              </SectionEyebrow>
              <Heading as="h2" variant="section" font="serif" className="text-forest-deep text-3xl sm:text-4xl font-semibold">
                {localCulture.title}
              </Heading>
              <Text variant="lead" className="text-charcoal/80 text-sm sm:text-base font-light leading-relaxed">
                {localCulture.lead}
              </Text>
              <p className="text-xs sm:text-sm text-charcoal/80 font-light leading-relaxed">
                {localCulture.description || localCulture.desc}
              </p>
              <div className="p-4 rounded-[3px] bg-sand/15 border border-sand/30 text-xs text-charcoal/80 italic font-light">
                ✦ {localCulture.potteryFocus || localCulture.points?.[0]?.desc || 'Traditional pottery and regional artisan heritage in nearby Pachdhara.'}
              </div>
            </div>

            <div className="lg:col-span-6 relative aspect-[16/11] rounded-[3px] overflow-hidden bg-forest-dark border border-sand/35 shadow-sm">
              <img
                src={IMAGES.resort.exterior}
                alt="Local village and artisan culture near Pench"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-4 left-4 right-4 text-ivory">
                <span className="text-[0.6875rem] uppercase tracking-wider text-gold font-bold block mb-1">
                  Pachdhara Pottery Traditions
                </span>
                <p className="text-xs text-sand-light font-light">
                  Hand-turned terracotta clay craft rooted in generations of Central Indian heritage.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================
          08. MINDFUL WILDERNESS & STAY CONNECTION
          ======================================================== */}
      <section className="py-20 sm:py-28 bg-ivory-warm/40 border-b border-sand/25">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <SectionEyebrow color="gold" withLine>
                {mindfulWilderness.eyebrow || 'Restorative Wilderness'}
              </SectionEyebrow>
              <Heading as="h2" variant="section" font="serif" className="text-forest-deep text-3xl sm:text-4xl font-semibold">
                {mindfulWilderness.title}
              </Heading>
              <Text variant="lead" className="text-charcoal/80 text-sm sm:text-base font-light leading-relaxed">
                {mindfulWilderness.lead}
              </Text>
              <p className="text-xs sm:text-sm text-charcoal/80 font-light leading-relaxed">
                {mindfulWilderness.body || mindfulWilderness.desc}
              </p>
              <div className="pt-2">
                <Button as={Link} to="/rooms" variant="primary" size="md">
                  Explore Accommodations →
                </Button>
              </div>
            </div>

            <div className="lg:col-span-7 relative aspect-[16/10] rounded-[3px] overflow-hidden bg-forest-dark border border-sand/35 shadow-sm">
              <img
                src={IMAGES.rooms.cottage}
                alt="Relaxing cottage verandah at Go Flamingo Resort"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-5 left-5 right-5 text-ivory">
                <span className="text-[0.6875rem] uppercase tracking-wider text-gold font-bold block mb-1">
                  Sanctuary in the Wild
                </span>
                <p className="text-xs sm:text-sm font-serif italic text-sand-light">
                  Return from the trail to your private verandah under the cooling canopy of mature teak trees.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================
          09. FINAL CONVERSION BANNER
          ======================================================== */}
      <ExperienceInquiryBanner
        eyebrow="Nature & Solitude"
        title="Walk the Wilderness of Pench"
        subtitle="Unwind in peaceful standalone cottages nestled in the teak forest. Guided buffer nature trails and unhurried hospitality await."
        whatsappTopic="I would like to inquire about nature trails and cottage bookings at Go Flamingo Resort."
      />
    </div>
  );
}

/**
 * Backwards-compatibility exports for existing route definitions
 */
export function FamilyPage() {
  return <ExperiencesOverview />;
}

export function CouplesPage() {
  return <ExperiencesOverview />;
}
