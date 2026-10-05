import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/hero/PageHero';
import { Container, Heading, Text, SectionEyebrow, Button, Badge } from '../../components/common';
import EditorialSplit from '../../components/common/EditorialSplit';
import { IMAGES } from '../../data/images';

/**
 * HomePage Component (Phase 2 Preview Architecture)
 * 
 * Provides an evocative, photography-led narrative with preview gateways
 * linking to dedicated subpages (Rooms, Safari, Weddings, Corporate, Pench).
 * 70% visual storytelling, 30% interface.
 */
export default function HomePage() {
  return (
    <div className="w-full bg-ivory text-charcoal">
      
      {/* 01. FULL-SCREEN CINEMATIC HERO */}
      <PageHero
        variant="cinematic"
        badge="Pench Tiger Reserve · Sillari Gate"
        eyebrow="Sanctuary in the Wild"
        title="Where the forest slows time."
        subtitle="Wake to mist among ancient teak trees. Go Flamingo Resort welcomes you to an authentic wildlife sanctuary at the threshold of Pench's prime safari gate."
        image={IMAGES.hero.home}
        imageAlt="Pench morning forest and teak trees"
        actions={[
          { label: 'Check Availability', to: '/book', variant: 'gold' },
          { label: 'Explore Pench', to: '/pench', variant: 'inverted' },
        ]}
      />

      {/* QUICK RESERVATION ENQUIRY BAR */}
      <section className="relative z-20 -mt-8 sm:-mt-10 px-4">
        <Container size="lg">
          <div className="bg-sand-light/95 border border-sand-dark/40 shadow-xl rounded-[4px] p-4 sm:p-6 backdrop-blur-md">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
              <div>
                <label className="text-[0.6875rem] uppercase tracking-wider text-charcoal-muted font-sans font-semibold block mb-1">
                  Destination
                </label>
                <div className="text-sm font-serif font-medium text-forest-deep">
                  Pench – Sillari Gate
                </div>
              </div>
              <div>
                <label className="text-[0.6875rem] uppercase tracking-wider text-charcoal-muted font-sans font-semibold block mb-1">
                  Experience
                </label>
                <div className="text-sm font-sans text-charcoal-800">
                  Safari · Wildlife · Family
                </div>
              </div>
              <div>
                <label className="text-[0.6875rem] uppercase tracking-wider text-charcoal-muted font-sans font-semibold block mb-1">
                  Travel Route
                </label>
                <div className="text-sm font-sans text-charcoal-800">
                  ~85 km from Nagpur (NH 44)
                </div>
              </div>
              <div>
                <Button
                  as={Link}
                  to="/book"
                  variant="gold"
                  size="md"
                  className="w-full justify-center"
                >
                  Check Availability
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 02. DESTINATION STORYTELLING (PENCH & SILLARI GATE) */}
      <EditorialSplit
        image={IMAGES.wildlife.tiger}
        imageAlt="Royal Bengal Tiger in Pench Tiger Reserve"
        imageRatio="editorial"
        caption="Pench Tiger Reserve — home to one of India's highest tiger densities and rich biodiversity."
        eyebrow="01 — The Destination"
        badge="Sillari Gate Advantage"
        title="Enter the legendary forests of Pench."
        subtitle="The inspiration for Kipling’s Jungle Book, Pench is a thriving ecosystem of teak woodlands, open meadows, and winding streams. Situated near Sillari Gate—the primary entry point on the Maharashtra/MP border—Go Flamingo places you minutes from the morning safari track."
        background="ivory"
        action={{
          label: 'Discover Pench & Safari Guide',
          to: '/pench',
          variant: 'primary',
        }}
      />

      {/* 03. ACCOMMODATION PREVIEW (ROOMS & COTTAGES) */}
      <EditorialSplit
        image={IMAGES.rooms.cottage}
        imageAlt="Go Flamingo cottage interior with natural wood"
        imageRatio="editorial"
        reverse
        caption="Thoughtfully appointed cottages with private sit-out verandahs overlooking the forest."
        eyebrow="02 — The Sanctuary"
        badge="Comfort in the Wild"
        title="Restful cottages woven into the forest."
        subtitle="Designed with natural stone, warm teak timber, and earthy textiles, our accommodations offer quiet sanctuaries after thrilling morning and evening safaris. Wake to the call of jungle babblers and unwind on private verandahs."
        background="sand"
        action={{
          label: 'Explore All Accommodations',
          to: '/rooms',
          variant: 'primary',
        }}
      />

      {/* 04. IMMERSIVE WILDLIFE & SAFARI (DARK THEMATIC SECTION) */}
      <section className="py-20 md:py-28 bg-forest-dark text-ivory relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src={IMAGES.hero.safari}
            alt="Open safari gypsy in forest"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-deep/85 to-forest-dark" />

        <Container size="xl" className="relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <Badge variant="gold" className="mb-3">Jungle Safari</Badge>
            <SectionEyebrow color="gold" withLine className="mb-3 justify-center text-gold-light">
              03 — Enter The Wild
            </SectionEyebrow>
            <Heading as="h2" variant="h1" font="serif" className="text-ivory mb-4">
              The forest wakes before the sun.
            </Heading>
            <Text variant="lead" className="text-sand/80 font-light">
              Open 4x4 gypsy safaris led by expert naturalists through Sillari Gate. Spot majestic tigers, leopards, wild dogs, and over 285 bird species.
            </Text>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button as={Link} to="/experiences/safari" variant="gold" size="md">
                Discover Safari Experience
              </Button>
              <Button as={Link} to="/experiences" variant="inverted" size="md">
                All Experiences
              </Button>
            </div>
          </div>

          {/* Three Photographic Experience Teasers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/experiences/safari"
              className="group block relative overflow-hidden rounded-[3px] bg-forest-deep border border-sand/20 hover:border-gold transition-colors"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={IMAGES.hero.safari}
                  alt="Sillari Safari"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-5">
                <span className="text-[0.6875rem] uppercase tracking-editorial text-gold font-semibold block mb-1">
                  Core Zone
                </span>
                <h3 className="font-serif text-lg text-ivory group-hover:text-gold transition-colors">
                  Sillari Jungle Safari →
                </h3>
              </div>
            </Link>

            <Link
              to="/experiences/wildlife"
              className="group block relative overflow-hidden rounded-[3px] bg-forest-deep border border-sand/20 hover:border-gold transition-colors"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={IMAGES.wildlife.birding}
                  alt="Birdwatching in Pench"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-5">
                <span className="text-[0.6875rem] uppercase tracking-editorial text-gold font-semibold block mb-1">
                  Avifauna
                </span>
                <h3 className="font-serif text-lg text-ivory group-hover:text-gold transition-colors">
                  Birding & Nature Trails →
                </h3>
              </div>
            </Link>

            <Link
              to="/resort/pool"
              className="group block relative overflow-hidden rounded-[3px] bg-forest-deep border border-sand/20 hover:border-gold transition-colors"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={IMAGES.resort.pool}
                  alt="Forest swimming pool"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-5">
                <span className="text-[0.6875rem] uppercase tracking-editorial text-gold font-semibold block mb-1">
                  Relaxation
                </span>
                <h3 className="font-serif text-lg text-ivory group-hover:text-gold transition-colors">
                  Forest Pool & Lounge →
                </h3>
              </div>
            </Link>
          </div>
        </Container>
      </section>

      {/* 05. CELEBRATIONS & CORPORATE GATHERINGS */}
      <EditorialSplit
        image={IMAGES.events.wedding}
        imageAlt="Outdoor wedding reception in nature"
        imageRatio="editorial"
        caption="Celebrate meaningful milestones under open forest skies."
        eyebrow="04 — Gather & Celebrate"
        badge="Events in Nature"
        title="Unforgettable weddings and inspiring team retreats."
        subtitle="Whether planning an intimate destination wedding with regional hospitality or an executive leadership retreat far from city distractions, Go Flamingo provides generous lawns, catering, and safari activities."
        background="ivory"
        action={{
          label: 'Plan a Wedding or Event',
          to: '/weddings',
          variant: 'primary',
        }}
      >
        <div className="pt-2 flex items-center gap-4 text-xs font-sans text-charcoal-muted">
          <Link to="/corporate" className="text-terracotta hover:underline font-medium">
            Explore Corporate Retreats →
          </Link>
        </div>
      </EditorialSplit>

      {/* 06. INVITATION & TRIP PLANNING CALLOUT */}
      <section className="py-16 md:py-24 bg-sand-light/50 border-t border-sand/40">
        <Container size="lg" className="text-center">
          <SectionEyebrow color="terracotta" withLine className="mb-3 justify-center">
            Plan Your Journey
          </SectionEyebrow>
          <Heading as="h2" variant="h2" font="serif" color="forest" className="mb-4">
            Your Pench story begins here.
          </Heading>
          <Text variant="lead" color="muted" className="max-w-2xl mx-auto mb-8 font-light">
            Conveniently situated just 85 km from Nagpur via national highway, Go Flamingo Resort offers the ideal balance of wilderness access and genuine comfort.
          </Text>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button as={Link} to="/book" variant="gold" size="lg">
              Book Your Stay
            </Button>
            <Button as={Link} to="/contact" variant="secondary" size="lg">
              Contact & Directions
            </Button>
          </div>
        </Container>
      </section>

    </div>
  );
}
