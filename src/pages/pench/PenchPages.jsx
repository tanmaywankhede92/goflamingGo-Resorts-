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

export function PenchOverview() {
  return (
    <PlaceholderPage
      title="Discover Pench Tiger Reserve"
      eyebrow="The Land of Mowgli"
      subtitle="Spanning the Satpura hills across Madhya Pradesh and Maharashtra, Pench is celebrated for its teak canopies, thriving tiger population, rich birdlife, and timeless jungle lore."
      heroVariant="large"
      heroImage={IMAGES.hero.pench}
      breadcrumbs={[{ label: 'Pench' }]}
      badge="Destination Guide"
      highlights={[
        { title: 'The Kipling Legacy', desc: 'Rudyard Kipling drew inspiration from the Seoni and Pench forests for The Jungle Book.' },
        { title: 'Rich Biodiversity', desc: 'Over 1,200 plant species, 285 bird species, and healthy populations of Royal Bengal Tigers.' },
        { title: 'River Pench Lifeline', desc: 'The Pench River bisects the park from north to south, creating scenic waterholes and wetlands.' },
        { title: 'Sillari Gate Location', desc: 'Go Flamingo Resort is situated near Sillari Gate, the primary entrance point on the Maharashtra/MP border.' },
      ]}
      relatedRoutes={PENCH_ROUTES}
    />
  );
}

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
        { title: 'Unmatched Proximity to Nagpur', desc: 'Located approximately 85 km from Nagpur Airport and Railway Station—an easy 1.5 to 2 hour drive along smooth national highway.' },
        { title: 'Core Zone Access', desc: 'Direct entry into prime tiger territories, water bodies, and scenic teak forest tracks.' },
        { title: 'Resort Location Advantage', desc: 'Staying at Go Flamingo means you avoid pre-dawn 30 km transfers and arrive refreshed at the gate line.' },
        { title: 'Full Safari Facilities', desc: 'Ticket verification desk, forest interpretation center, and certified naturalist guides station.' },
      ]}
      relatedRoutes={PENCH_ROUTES}
      actionLabel="Book Stay Near Sillari Gate"
      actionTo="/book"
    />
  );
}

export function SafariGuidePage() {
  return (
    <PlaceholderPage
      title="Pench Safari Guide & Booking"
      eyebrow="Permits & Forest Timings"
      subtitle="A practical traveler’s guide to booking safaris in Pench: core zones, gypsy permits, morning/evening timings, and forest department guidelines."
      heroVariant="split"
      heroImage={IMAGES.hero.safari}
      breadcrumbs={[{ label: 'Pench', to: '/pench' }, { label: 'Safari Guide' }]}
      badge="Essential Trip Planning"
      highlights={[
        { title: 'Advance Booking Advised', desc: 'Forest department gypsy permits open up to 120 days in advance and sell out rapidly during peak seasons.' },
        { title: 'Morning Safari Timings', desc: 'Usually 6:00 AM – 10:00 AM (varies with sunrise). Ideal for tracking fresh tiger pugmarks and active birds.' },
        { title: 'Evening Safari Timings', desc: 'Usually 2:30 PM – 6:00 PM. Golden light on teak canopies and animal gatherings at waterholes.' },
        { title: 'Permit Assistance', desc: 'Our resort front desk assists registered guests with permit navigation and gypsy coordination.' },
      ]}
      relatedRoutes={PENCH_ROUTES}
      actionLabel="Request Safari Booking Assistance"
      actionTo="/contact"
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
      subtitle="Pench is one of India’s most accessible tiger reserves. Reaching Sillari Gate from Nagpur takes under two hours via the 4-lane NH 44."
      heroVariant="minimal"
      breadcrumbs={[{ label: 'Pench', to: '/pench' }, { label: 'How To Reach' }]}
      badge="Smooth Highway Access"
      highlights={[
        { title: 'By Air (Dr. Babasaheb Ambedkar Airport, Nagpur)', desc: 'Nagpur is the nearest major airport (~85 km). Well-connected with daily direct flights from Mumbai, Delhi, Bengaluru, Hyderabad, and Pune.' },
        { title: 'By Train (Nagpur Junction / Jabalpur)', desc: 'Nagpur Junction (~80 km) is a major national railway hub connecting all parts of India with daily express trains.' },
        { title: 'By Road (NH 44 Express)', desc: 'An excellent 4-lane highway drive north from Nagpur toward Jabalpur. Exit at Paoni / Sillari Gate turnoff.' },
        { title: 'Resort Pick-Up & Transfers', desc: 'Pre-arranged chauffeured taxi transfers can be coordinated directly to the resort upon request.' },
      ]}
      relatedRoutes={PENCH_ROUTES}
      actionLabel="Inquire About Taxi Transfers"
      actionTo="/contact"
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
