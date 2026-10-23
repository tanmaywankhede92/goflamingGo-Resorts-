import React from 'react';
import PlaceholderPage from '../../components/common/PlaceholderPage';
import { IMAGES } from '../../data/images';

const PENCH_ROUTES = [
  { label: 'Discover Pench', path: '/pench' },
  { label: 'Sillari Gate Guide', path: '/pench/sillari-gate' },
  { label: 'Safari Guide & Timings', path: '/pench/safari-guide' },
  { label: 'Things To Do', path: '/pench/things-to-do' },
  { label: 'How To Reach', path: '/pench/how-to-reach' },
  { label: 'Best Time To Visit', path: '/pench/best-time-to-visit' },
];



export function SillariGatePage() {
  return (
    <PlaceholderPage
      title="Sillari Gate — Prime Pench Access"
      eyebrow="Gate Guide & Advantage"
      subtitle="Sillari Gate is universally considered the most convenient and prime core entrance to Pench Tiger Reserve, especially for travelers coming from Nagpur via NH 44."
      heroVariant="dark"
      heroImage={IMAGES.hero.safari}
      breadcrumbs={[{ label: 'Pench', to: '/pench' }, { label: 'Sillari Gate' }]}
      badge="Nearest to Nagpur"
      highlights={[
        { title: 'Unmatched Proximity to Nagpur', desc: 'Located approximately 65 km from Nagpur Airport and Railway Station—an easy 1 hour drive along smooth 4-lane national highway.' },
        { title: 'Core Zone Access', desc: 'Direct entry into prime tiger territories, water bodies, and scenic teak forest tracks.' },
        { title: 'Resort Location Advantage', desc: 'Staying at Go Flamingo means you avoid pre-dawn 30 km transfers and arrive refreshed at the gate line.' },
        { title: 'Full Safari Facilities', desc: 'Ticket verification desk, forest interpretation center, and certified naturalist guides station.' },
      ]}
      relatedRoutes={PENCH_ROUTES}
      actionLabel="Book Stay Near Sillari Gate"
      actionTo="/contact?book=true#reservation-form-card"
    />
  );
}



export function ThingsToDoPage() {
  return (
    <PlaceholderPage
      title="Things To Do in & around Pench"
      eyebrow="Beyond the Tiger Safari"
      subtitle="Explore tribal pottery villages, scenic reservoir dams, peaceful birding trails, and local weekly haats (village bazaars) during your stay."
      heroVariant="large"
      heroImage={IMAGES.resort.pathway}
      breadcrumbs={[{ label: 'Pench', to: '/pench' }, { label: 'Things To Do' }]}
      badge="Local Experiences"
      highlights={[
        { title: 'Totladoh Dam & Reservoir', desc: 'Stunning water reservoir nestled between the green hills, providing vital water to the reserve.' },
        { title: 'Pachdhar Pottery Village', desc: 'Traditional artisan village where generations of potters craft terracotta clay pots by hand.' },
        { title: 'Night Stargazing', desc: 'Pench boasts remarkably dark skies away from city light pollution, perfect for viewing constellations.' },
        { title: 'Local Village Walks', desc: 'Respectful guided walks to understand tribal life and central Indian village architecture.' },
      ]}
      relatedRoutes={PENCH_ROUTES}
    />
  );
}

export function HowToReachPage() {
  return (
    <PlaceholderPage
      title="How To Reach Pench (Sillari Gate)"
      eyebrow="Travel Logistics"
      subtitle="Pench is one of India’s most accessible tiger reserves. Reaching Sillari Gate from Nagpur takes just about one hour via the 4-lane NH 44 (65 km)."
      heroVariant="minimal"
      breadcrumbs={[{ label: 'Pench', to: '/pench' }, { label: 'How To Reach' }]}
      badge="Smooth Highway Access"
      highlights={[
        { title: 'By Air (Dr. Babasaheb Ambedkar Airport, Nagpur)', desc: 'Nagpur is the nearest major airport (~65 km). Well-connected with daily direct flights from Mumbai, Delhi, Bengaluru, Hyderabad, and Pune.' },
        { title: 'By Train (Nagpur Junction / Jabalpur)', desc: 'Nagpur Junction (~65 km) is a major national railway hub connecting all parts of India with daily express trains.' },
        { title: 'By Road (NH 44 Express)', desc: 'An excellent 4-lane highway drive north from Nagpur toward Jabalpur. Just 65 km, exit at Paoni / Sillari Gate turnoff.' },
        { title: 'Resort Pick-Up & Transfers', desc: 'Pre-arranged chauffeured taxi transfers can be coordinated directly to the resort upon request.' },
      ]}
      relatedRoutes={PENCH_ROUTES}
      actionLabel="Get Directions on Google Maps ↗"
      actionTo="https://share.google/1tQOcUc44JyN7u8JJ"
    />
  );
}

export function BestTimeToVisitPage() {
  return (
    <PlaceholderPage
      title="Best Time to Visit Pench"
      eyebrow="Seasonality & Climate"
      subtitle="Understand Pench’s distinct seasons—from lush post-monsoon green winters to the prime tiger sighting months of spring and summer."
      heroVariant="large"
      heroImage={IMAGES.wildlife.spottedDeer}
      breadcrumbs={[{ label: 'Pench', to: '/pench' }, { label: 'Best Time' }]}
      badge="Seasonal Guide"
      highlights={[
        { title: 'October to February (Winter & Post-Monsoon)', desc: 'Pleasant daytime weather (15°C–25°C), crisp morning safaris, lush green foliage, and vibrant migratory birds.' },
        { title: 'March to June (Summer & Peak Sightings)', desc: 'Dry deciduous foliage and receding waterholes make this the premier window for frequent tiger sightings.' },
        { title: 'Monsoon Closure (July to September)', desc: 'Core zones typically close during the heavy monsoon rains for breeding season, reopening around October 1st.' },
      ]}
      relatedRoutes={PENCH_ROUTES}
    />
  );
}
