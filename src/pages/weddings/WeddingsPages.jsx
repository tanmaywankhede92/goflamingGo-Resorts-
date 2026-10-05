import React from 'react';
import PlaceholderPage from '../../components/common/PlaceholderPage';
import { IMAGES } from '../../data/images';

const WEDDINGS_ROUTES = [
  { label: 'Destination Weddings', path: '/weddings' },
  { label: 'Milestones & Celebrations', path: '/weddings/celebrations' },
  { label: 'Event Lawns & Venues', path: '/weddings/events' },
];

export function WeddingsOverview() {
  return (
    <PlaceholderPage
      title="Forest Destination Weddings"
      eyebrow="Celebrations in Nature"
      subtitle="Exchange vows surrounded by towering teak trees and open skies. Go Flamingo Resort hosts intimate, soulful destination weddings enriched with authentic Indian hospitality and memorable forest dining."
      heroVariant="large"
      heroImage={IMAGES.events.wedding}
      breadcrumbs={[{ label: 'Weddings' }]}
      badge="Destination Weddings"
      highlights={[
        { title: 'Natural Forest Backdrop', desc: 'No artificial banquet halls—celebrate under the canopy with ambient lanterns and natural greenery.' },
        { title: 'Full Property Buyout', desc: 'Option to reserve the entire resort for exclusive privacy for your family and guests.' },
        { title: 'Regional & Multi-Cuisine Banqueting', desc: 'Lavish traditional Indian spreads, chaat counters, and regional delicacies.' },
        { title: 'Guest Safari Excursions', desc: 'Treat wedding guests to morning safari drives into Pench Tiger Reserve.' },
      ]}
      relatedRoutes={WEDDINGS_ROUTES}
      actionLabel="Enquire for Wedding Dates"
      actionTo="/contact"
    />
  );
}

export function CelebrationsPage() {
  return (
    <PlaceholderPage
      title="Milestones, Birthdays & Anniversaries"
      eyebrow="Special Gatherings"
      subtitle="Celebrate birthdays, wedding anniversaries, family reunions, and festive get-togethers in the serene wilderness of Pench."
      heroVariant="split"
      heroImage={IMAGES.events.celebration}
      breadcrumbs={[{ label: 'Weddings', to: '/weddings' }, { label: 'Celebrations' }]}
      badge="Cherished Moments"
      highlights={[
        { title: 'Customized Setups', desc: 'Fairy lights, live barbecues, and outdoor musical evenings arranged on our lawns.' },
        { title: 'Multi-Generation Comfort', desc: 'Accommodations and dining suitable for both grandparents and toddlers.' },
        { title: 'Bonfire Nights', desc: 'Intimate evening gatherings sharing stories around the crackling fire.' },
      ]}
      relatedRoutes={WEDDINGS_ROUTES}
      actionLabel="Plan a Celebration"
      actionTo="/contact"
    />
  );
}

export function EventsPage() {
  return (
    <PlaceholderPage
      title="Event Lawns & Outdoor Spaces"
      eyebrow="Venues & Facilities"
      subtitle="Expansive natural lawns, poolside decks, and covered open-air dining areas ready to host your custom gathering in the wild."
      heroVariant="large"
      heroImage={IMAGES.resort.exterior}
      breadcrumbs={[{ label: 'Weddings', to: '/weddings' }, { label: 'Event Lawns' }]}
      badge="Outdoor Venues"
      highlights={[
        { title: 'Open-Air Lawns', desc: 'Lush manicured grass surrounded by forest trees with space for stages and mandaps.' },
        { title: 'Poolside Decks', desc: 'Chic settings for cocktail evenings, mehendi ceremonies, or sundowners.' },
        { title: 'Ample Parking & Logistics', desc: 'Easy coach and car parking for regional guests traveling from Nagpur.' },
      ]}
      relatedRoutes={WEDDINGS_ROUTES}
      actionLabel="Schedule Venue Walkthrough"
      actionTo="/contact"
    />
  );
}
