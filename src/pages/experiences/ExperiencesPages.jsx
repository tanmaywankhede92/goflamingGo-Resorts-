import React from 'react';
import PlaceholderPage from '../../components/common/PlaceholderPage';
import { IMAGES } from '../../data/images';

const EXPERIENCES_ROUTES = [
  { label: 'All Experiences', path: '/experiences' },
  { label: 'Sillari Jungle Safari', path: '/experiences/safari' },
  { label: 'Wildlife & Birding', path: '/experiences/wildlife' },
  { label: 'Nature & Forest Trails', path: '/experiences/nature' },
  { label: 'Family Experiences', path: '/experiences/family' },
  { label: 'Couples Escape', path: '/experiences/couples' },
];

export function ExperiencesOverview() {
  return (
    <PlaceholderPage
      title="Wilderness & Resort Experiences"
      eyebrow="Pench Adventures"
      subtitle="From dawn safari excursions into core tiger territory to quiet birdwatching walks and starlit dinners, immerse yourself in the rich wilderness of Pench."
      heroVariant="large"
      heroImage={IMAGES.hero.safari}
      breadcrumbs={[{ label: 'Experiences' }]}
      badge="Adventure & Nature"
      highlights={[
        { title: 'Sillari Core Safari', desc: 'Direct access to the premier entrance gate of Pench Tiger Reserve.' },
        { title: 'Rich Avifauna', desc: 'Over 285 migratory and resident bird species across teak and wetland zones.' },
        { title: 'Naturalist Expertise', desc: 'Experienced guides passionate about animal tracks, flora, and bird calls.' },
        { title: 'Relaxing Downtime', desc: 'Afternoon swims, board games, and evening bonfires at the resort.' },
      ]}
      relatedRoutes={EXPERIENCES_ROUTES}
    />
  );
}

export function SafariPage() {
  return (
    <PlaceholderPage
      title="Jungle Safari at Sillari Gate"
      eyebrow="Core Zone Wildlife Safari"
      subtitle="Embark on thrilling morning and evening safaris in open 4x4 gypsies through Sillari Gate. Witness Royal Bengal Tigers, leopards, sloth bears, and herds of spotted deer in their natural forest home."
      heroVariant="dark"
      heroImage={IMAGES.hero.safari}
      breadcrumbs={[{ label: 'Experiences', to: '/experiences' }, { label: 'Safari' }]}
      badge="Sillari Core Zone"
      highlights={[
        { title: 'Certified Forest Department Gypsies', desc: 'Authorized open 4x4 safari vehicles accompanied by certified forest department guides and drivers.' },
        { title: 'Morning & Evening Shifts', desc: 'Early dawn (approx 6:00 AM) and afternoon (approx 2:30 PM) safaris optimized for animal movements.' },
        { title: 'Sillari Location Advantage', desc: 'Resort proximity minimizes early morning commute, putting you first in line at the entry gate.' },
        { title: 'Safari Packed Meals', desc: 'Fresh morning tea and breakfast boxes prepared for your forest journey.' },
      ]}
      relatedRoutes={EXPERIENCES_ROUTES}
      actionLabel="Inquire About Safari Booking"
      actionTo="/pench/safari-guide"
    />
  );
}

export function WildlifePage() {
  return (
    <PlaceholderPage
      title="Wildlife & Birding in Pench"
      eyebrow="Fauna & Avifauna"
      subtitle="Pench is an ecological treasure trove home to the Royal Bengal Tiger, Indian leopard, dhole (wild dog), gaur (Indian bison), chital, and over 285 bird species."
      heroVariant="large"
      heroImage={IMAGES.wildlife.tiger}
      breadcrumbs={[{ label: 'Experiences', to: '/experiences' }, { label: 'Wildlife' }]}
      badge="Biodiversity Hotspot"
      highlights={[
        { title: 'Apex Predators', desc: 'Healthy populations of tigers and leopards supported by high prey density.' },
        { title: 'Birdwatcher’s Paradise', desc: 'Malabar pied hornbills, Indian pitta, crested serpent eagles, and kingfishers.' },
        { title: 'Herbivore Herds', desc: 'Vast herds of chital (spotted deer), sambar, nilgai, and wild boars across meadows.' },
      ]}
      relatedRoutes={EXPERIENCES_ROUTES}
    />
  );
}

export function NaturePage() {
  return (
    <PlaceholderPage
      title="Forest Trails & Nature Walks"
      eyebrow="Buffer Zone Walks"
      subtitle="Discover the subtle wonders of the forest on foot along certified buffer zone trails, accompanied by local naturalists who unravel the medicinal plants, insects, and bird calls of Pench."
      heroVariant="split"
      heroImage={IMAGES.wildlife.forestCanopy}
      breadcrumbs={[{ label: 'Experiences', to: '/experiences' }, { label: 'Nature Trails' }]}
      badge="On Foot in the Forest"
      highlights={[
        { title: 'Buffer Zone Exploration', desc: 'Safe, guided walks along the forest periphery away from core tiger zones.' },
        { title: 'Botanical Insights', desc: 'Learn about ghost trees (Kullu), teak, mahua, and traditional forest medicines.' },
        { title: 'Macro Photography', desc: 'Spiders, butterflies, dragonflies, and exotic flora up close.' },
      ]}
      relatedRoutes={EXPERIENCES_ROUTES}
    />
  );
}

export function FamilyPage() {
  return (
    <PlaceholderPage
      title="Family Wilderness Vacations"
      eyebrow="Generations Together"
      subtitle="Create lifelong memories for your children and parents alike. Go Flamingo Resort combines wildlife excitement with comfortable suites, safe lawns, and warm family-friendly dining."
      heroVariant="large"
      heroImage={IMAGES.resort.pool}
      breadcrumbs={[{ label: 'Experiences', to: '/experiences' }, { label: 'Family' }]}
      badge="All Ages Welcome"
      highlights={[
        { title: 'Spacious Family Suites', desc: 'Comfortable connected rooms and cottages ensuring privacy and togetherness.' },
        { title: 'Child-Friendly Meals', desc: 'Mild, fresh, homestyle cooking tailored to young palates.' },
        { title: 'Safe Open Lawns', desc: 'Sprawling grass lawns for children to run, play outdoor games, and stargaze.' },
      ]}
      relatedRoutes={EXPERIENCES_ROUTES}
    />
  );
}

export function CouplesPage() {
  return (
    <PlaceholderPage
      title="Romantic Wilderness Escape"
      eyebrow="Quiet Retreat for Couples"
      subtitle="Leave the city bustle behind. Enjoy secluded cottages, quiet private verandahs, starlit dinners under the trees, and shared safari adventures."
      heroVariant="split"
      heroImage={IMAGES.dining.bonfireDinner}
      breadcrumbs={[{ label: 'Experiences', to: '/experiences' }, { label: 'Couples' }]}
      badge="Intimate Nature"
      highlights={[
        { title: 'Secluded Verandahs', desc: 'Private sit-out areas immersed in green nature for morning chai together.' },
        { title: 'Starlit Dinners', desc: 'Candlelight dinners arranged on the lawns beneath the clear Pench night sky.' },
        { title: 'Couples Safari', desc: 'Private gypsy options for an unforgettable wildlife journey together.' },
      ]}
      relatedRoutes={EXPERIENCES_ROUTES}
    />
  );
}
