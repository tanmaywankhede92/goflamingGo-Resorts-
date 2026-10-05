import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PlaceholderPage from '../../components/common/PlaceholderPage';
import { Container, Heading, SectionEyebrow, Button, Badge } from '../../components/common';
import { IMAGES } from '../../data/images';

const ROOM_ROUTES = [
  { label: 'All Accommodations', path: '/rooms' },
  { label: 'Luxury Cottage', path: '/rooms/luxury-cottage' },
  { label: 'Family Suite', path: '/rooms/family-suite' },
  { label: 'Packages & Offers', path: '/packages' },
];

export function RoomsOverview() {
  return (
    <div className="w-full">
      <PlaceholderPage
        title="Accommodations & Cottages"
        eyebrow="Sanctuary in the Forest"
        subtitle="Thoughtfully appointed cottages with private sit-out verandahs, warm natural teak elements, and spacious layouts designed for peaceful rest between wildlife safaris."
        heroVariant="large"
        heroImage={IMAGES.rooms.cottage}
        breadcrumbs={[{ label: 'Stay' }]}
        badge="Forest Living"
        highlights={[
          { title: 'Private Verandahs', desc: 'Every cottage features a sit-out facing lush forest greenery and morning birdsong.' },
          { title: 'Natural Teak & Stone', desc: 'Warm timber and stone aesthetics reflecting the earthy hues of the Pench landscape.' },
          { title: 'Modern Amenities', desc: 'Air-conditioned comfort, comfortable bedding, and well-appointed en-suite bathrooms.' },
          { title: 'Family & Group Stays', desc: 'Flexible options accommodating couples, multi-generational families, and travel groups.' },
        ]}
        relatedRoutes={ROOM_ROUTES}
      />

      {/* Preview Grid for Sample Cottage Categories (Clearly Marked Placeholders) */}
      <section className="py-16 bg-sand-light/50 border-t border-sand/30">
        <Container size="xl">
          <SectionEyebrow color="terracotta" withLine className="mb-3">
            Room Categories
          </SectionEyebrow>
          <Heading as="h2" variant="h2" font="serif" color="forest" className="mb-8">
            Choose Your Pench Stay
          </Heading>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Category 1 */}
            <div className="rounded-[4px] bg-ivory border border-sand/40 overflow-hidden shadow-xs">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={IMAGES.rooms.cottage}
                  alt="Luxury Cottage"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <Badge variant="forest" className="mb-2">Forest View</Badge>
                <h3 className="font-serif text-xl text-forest font-medium mb-2">
                  Luxury Forest Cottage
                </h3>
                <p className="text-xs text-charcoal-muted leading-relaxed font-light mb-4">
                  Spacious standalone cottage with private sit-out, plush king bed, and tranquil garden views.
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-sand/30">
                  <span className="text-xs text-charcoal-muted">[Inquire for seasonal rates]</span>
                  <Button as={Link} to="/rooms/luxury-cottage" variant="secondary" size="sm">
                    View Details →
                  </Button>
                </div>
              </div>
            </div>

            {/* Category 2 */}
            <div className="rounded-[4px] bg-ivory border border-sand/40 overflow-hidden shadow-xs">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={IMAGES.rooms.suite}
                  alt="Family Suite"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <Badge variant="terracotta" className="mb-2">Family Friendly</Badge>
                <h3 className="font-serif text-xl text-forest font-medium mb-2">
                  Spacious Family Suite
                </h3>
                <p className="text-xs text-charcoal-muted leading-relaxed font-light mb-4">
                  Generous multi-bed layout accommodating parents and children with private seating area.
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-sand/30">
                  <span className="text-xs text-charcoal-muted">[Inquire for seasonal rates]</span>
                  <Button as={Link} to="/rooms/family-suite" variant="secondary" size="sm">
                    View Details →
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

export function RoomDetails() {
  const { slug } = useParams();
  const formattedTitle = slug ? slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()) : 'Cottage';

  return (
    <PlaceholderPage
      title={formattedTitle}
      eyebrow="Accommodations · Pench"
      subtitle={`Experience tranquil wilderness living in the ${formattedTitle} at Go Flamingo Resort, featuring private sit-out verandahs and attentive Indian hospitality.`}
      heroVariant="split"
      heroImage={IMAGES.rooms.cottage}
      breadcrumbs={[{ label: 'Stay', to: '/rooms' }, { label: formattedTitle }]}
      badge="Verified Room Category"
      highlights={[
        { title: 'Air-Conditioned Comfort', desc: 'Climate-controlled bedrooms for year-round comfort.' },
        { title: 'Private Sit-Out', desc: 'Verandah facing peaceful forest greenery for morning chai.' },
        { title: 'En-Suite Bathroom', desc: 'Modern sanitary fittings with hot water showers.' },
        { title: 'Safari Assistance', desc: 'Early morning call and packed breakfasts for safari drives.' },
      ]}
      relatedRoutes={ROOM_ROUTES}
      actionLabel="Book This Room"
      actionTo="/book"
    />
  );
}
