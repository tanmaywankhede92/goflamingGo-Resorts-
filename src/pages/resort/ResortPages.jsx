import React from 'react';
import PlaceholderPage from '../../components/common/PlaceholderPage';
import { IMAGES } from '../../data/images';

const RESORT_ROUTES = [
  { label: 'Resort Overview', path: '/resort' },
  { label: 'About Go Flamingo', path: '/resort/about' },
  { label: 'Facilities & Lawns', path: '/resort/facilities' },
  { label: 'Forest Pool', path: '/resort/pool' },
  { label: 'Regional Dining', path: '/resort/dining' },
];

export function ResortOverview() {
  return (
    <PlaceholderPage
      title="The Resort at Sillari Gate"
      eyebrow="Pench Wildlife Retreat"
      subtitle="Designed to harmonise with the surrounding teak woodlands, Go Flamingo Resort offers a peaceful wilderness haven with warm Indian hospitality, expansive green lawns, and restorative amenities."
      heroVariant="large"
      heroImage={IMAGES.resort.exterior}
      breadcrumbs={[{ label: 'Resort' }]}
      badge="Threshold of Pench"
      highlights={[
        { title: 'Prime Sillari Location', desc: 'Situated minutes from Sillari Gate, the primary entrance to Pench Tiger Reserve on the Maharashtra/MP border.' },
        { title: 'Forest-Framed Architecture', desc: 'Low-impact stone and timber structures designed to respect the natural topography and tree canopy.' },
        { title: 'Restful Forest Pool', desc: 'Natural stone swimming pool surrounded by native flora and sun decks for afternoon relaxation.' },
        { title: 'Authentic Care', desc: 'Courteous Indian hospitality attentive to families, safari-goers, and nature lovers.' },
      ]}
      relatedRoutes={RESORT_ROUTES}
    />
  );
}

export function ResortAbout() {
  return (
    <PlaceholderPage
      title="About Go Flamingo Resort"
      eyebrow="Our Story & Vision"
      subtitle="Founded on a love for Pench’s wilderness, Go Flamingo Resort was conceived as a sanctuary where travelers can slow down, connect with the forest, and experience genuine Indian warmth."
      heroVariant="split"
      heroImage={IMAGES.resort.pathway}
      breadcrumbs={[{ label: 'Resort', to: '/resort' }, { label: 'About' }]}
      badge="The Vision"
      highlights={[
        { title: 'Living in Harmony', desc: 'Retaining existing teak and sal trees while crafting comfortable resort cottages.' },
        { title: 'Local Community Care', desc: 'Employing local staff from surrounding villages to deliver heartfelt regional hospitality.' },
        { title: 'Destination Focus', desc: 'Dedicated to helping guests make the most of Pench through guided safaris and naturalist expertise.' },
      ]}
      relatedRoutes={RESORT_ROUTES}
    />
  );
}

export function ResortFacilities() {
  return (
    <PlaceholderPage
      title="Resort Facilities & Grounds"
      eyebrow="Comfort in Nature"
      subtitle="From open-air lawns for evening tea to bonfire pits under starlit skies, our resort facilities are designed for easy outdoor living and relaxation."
      heroVariant="large"
      heroImage={IMAGES.resort.evening}
      breadcrumbs={[{ label: 'Resort', to: '/resort' }, { label: 'Facilities' }]}
      badge="Resort Amenities"
      highlights={[
        { title: 'Expansive Lawns', desc: 'Open green spaces ideal for morning strolls, children’s play, and evening gatherings.' },
        { title: 'Evening Bonfire', desc: 'Gather around the fire under starlit skies to share safari stories and warmth.' },
        { title: 'Recreation & Games', desc: 'Indoor games and quiet seating areas to unwind between jungle safari drives.' },
        { title: '24-Hour Assistance', desc: 'Dedicated travel desk to assist with safari permits and local logistics.' },
      ]}
      relatedRoutes={RESORT_ROUTES}
    />
  );
}

export function ResortPool() {
  return (
    <PlaceholderPage
      title="The Forest Swimming Pool"
      eyebrow="Rest & Rejuvenate"
      subtitle="Unwind after a dusty morning safari in our serene swimming pool, surrounded by tall trees, comfortable loungers, and birdsong."
      heroVariant="large"
      heroImage={IMAGES.resort.pool}
      breadcrumbs={[{ label: 'Resort', to: '/resort' }, { label: 'Pool' }]}
      badge="Cool Sanctuary"
      highlights={[
        { title: 'Natural Stone Setting', desc: 'Thoughtfully integrated into the garden landscape with native trees.' },
        { title: 'Family Friendly', desc: 'Safe depths for children and relaxing sun decks for adults.' },
        { title: 'Poolside Refreshments', desc: 'Fresh local juices, iced teas, and light snacks served pool-side.' },
      ]}
      relatedRoutes={RESORT_ROUTES}
    />
  );
}

export function ResortDining() {
  return (
    <PlaceholderPage
      title="Regional & Indian Dining"
      eyebrow="Flavors of Central India"
      subtitle="Savor fresh, homestyle Indian culinary traditions alongside classic comfort foods, prepared with fresh local produce and warm hospitality."
      heroVariant="split"
      heroImage={IMAGES.dining.indianFood}
      breadcrumbs={[{ label: 'Resort', to: '/resort' }, { label: 'Dining' }]}
      badge="Forest Kitchen"
      highlights={[
        { title: 'Regional Specialities', desc: 'Authentic Maharashtrian & MP frontier recipes cooked to perfection.' },
        { title: 'Safari Packed Breakfasts', desc: 'Freshly packed morning boxes prepared before early 5:30 AM safari departures.' },
        { title: 'Starlit Dinners', desc: 'Outdoor dining experiences arranged under the forest canopy.' },
      ]}
      relatedRoutes={RESORT_ROUTES}
    />
  );
}
