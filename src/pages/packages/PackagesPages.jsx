import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PlaceholderPage from '../../components/common/PlaceholderPage';
import { Container, Heading, SectionEyebrow, Button, Badge } from '../../components/common';
import { IMAGES } from '../../data/images';

const PACKAGES_ROUTES = [
  { label: 'All Packages', path: '/packages' },
  { label: 'Weekend Escape', path: '/packages/weekend-escape' },
  { label: 'Wildlife Safari Tour', path: '/packages/wildlife-safari' },
  { label: 'Family Holiday Package', path: '/packages/family-holiday' },
];

export function PackagesOverview() {
  return (
    <div className="w-full">
      <PlaceholderPage
        title="Curated Pench Packages"
        eyebrow="Special Itineraries"
        subtitle="Thoughtfully crafted packages combining comfortable cottage stays, delicious regional meals, and thrilling jungle safaris."
        heroVariant="large"
        heroImage={IMAGES.hero.safari}
        breadcrumbs={[{ label: 'Packages' }]}
        badge="Curated Itineraries"
        highlights={[
          { title: 'Stay & Safari Combinations', desc: 'Seamlessly coordinated cottage reservations and gypsy permits through Sillari Gate.' },
          { title: 'All Meals Included Options', desc: 'Full-board plans with breakfast, lunch, high tea, and starlit dinners.' },
          { title: 'Custom Group Itineraries', desc: 'Personalized plans for weekenders from Nagpur, corporate offsites, and families.' },
        ]}
        relatedRoutes={PACKAGES_ROUTES}
      />

      {/* Package Teaser Cards */}
      <section className="py-16 bg-sand-light/50 border-t border-sand/30">
        <Container size="xl">
          <SectionEyebrow color="terracotta" withLine className="mb-3">
            Featured Packages
          </SectionEyebrow>
          <Heading as="h2" variant="h2" font="serif" color="forest" className="mb-8">
            Select Your Escape
          </Heading>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Package 1 */}
            <div className="rounded-[4px] bg-ivory border border-sand/40 overflow-hidden flex flex-col justify-between">
              <div>
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={IMAGES.resort.pool}
                    alt="Weekend Escape"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <Badge variant="forest" className="mb-2">2 Nights / 3 Days</Badge>
                  <h3 className="font-serif text-lg text-forest font-medium mb-2">
                    Weekend Forest Escape
                  </h3>
                  <p className="text-xs text-charcoal-muted leading-relaxed font-light mb-4">
                    Ideal for quick getaways from Nagpur. Includes cottage stay, all meals, and afternoon pool relaxation.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0 border-t border-sand/20 mt-4 flex items-center justify-between">
                <span className="text-xs text-charcoal-muted">[Inquire for details]</span>
                <Button as={Link} to="/packages/weekend-escape" variant="secondary" size="sm">
                  View Package →
                </Button>
              </div>
            </div>

            {/* Package 2 */}
            <div className="rounded-[4px] bg-ivory border border-sand/40 overflow-hidden flex flex-col justify-between">
              <div>
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={IMAGES.wildlife.tiger}
                    alt="Wildlife Safari"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <Badge variant="gold" className="mb-2">3 Nights / 4 Days</Badge>
                  <h3 className="font-serif text-lg text-forest font-medium mb-2">
                    Prime Wildlife & Tiger Safari
                  </h3>
                  <p className="text-xs text-charcoal-muted leading-relaxed font-light mb-4">
                    Focused wildlife experience with multiple core safari drives, naturalist guidance, and packed breakfasts.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0 border-t border-sand/20 mt-4 flex items-center justify-between">
                <span className="text-xs text-charcoal-muted">[Inquire for details]</span>
                <Button as={Link} to="/packages/wildlife-safari" variant="secondary" size="sm">
                  View Package →
                </Button>
              </div>
            </div>

            {/* Package 3 */}
            <div className="rounded-[4px] bg-ivory border border-sand/40 overflow-hidden flex flex-col justify-between">
              <div>
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={IMAGES.rooms.cottage}
                    alt="Family Holiday"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <Badge variant="terracotta" className="mb-2">Family Special</Badge>
                  <h3 className="font-serif text-lg text-forest font-medium mb-2">
                    Family Holiday & Adventure
                  </h3>
                  <p className="text-xs text-charcoal-muted leading-relaxed font-light mb-4">
                    Designed for all generations with spacious suites, guided nature walks, village trips, and bonfire nights.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0 border-t border-sand/20 mt-4 flex items-center justify-between">
                <span className="text-xs text-charcoal-muted">[Inquire for details]</span>
                <Button as={Link} to="/packages/family-holiday" variant="secondary" size="sm">
                  View Package →
                </Button>
              </div>
            </div>

          </div>
        </Container>
      </section>
    </div>
  );
}

export function PackageDetails() {
  const { slug } = useParams();
  const formattedTitle = slug ? slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()) : 'Package';

  return (
    <PlaceholderPage
      title={formattedTitle}
      eyebrow="Curated Itinerary"
      subtitle={`Detailed overview of the ${formattedTitle} at Go Flamingo Resort, Pench – Sillari Gate.`}
      heroVariant="split"
      heroImage={IMAGES.hero.safari}
      breadcrumbs={[{ label: 'Packages', to: '/packages' }, { label: formattedTitle }]}
      badge="Customizable Itinerary"
      highlights={[
        { title: 'Cottage Accommodations', desc: 'Comfortable stay in your chosen cottage category with private verandah.' },
        { title: 'Catering & Meals', desc: 'Wholesome buffet and à la carte spreads featuring Indian and regional flavors.' },
        { title: 'Safari Coordination', desc: 'Forest department permits coordinated in advance through Sillari Gate.' },
        { title: 'Bonfire & Recreation', desc: 'Evening outdoor bonfire and complimentary resort lawn games.' },
      ]}
      relatedRoutes={PACKAGES_ROUTES}
      actionLabel="Book This Package"
      actionTo="/book"
    />
  );
}
