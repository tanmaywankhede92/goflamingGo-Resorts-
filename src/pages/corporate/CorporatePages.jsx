import React from 'react';
import PlaceholderPage from '../../components/common/PlaceholderPage';
import { IMAGES } from '../../data/images';

const CORPORATE_ROUTES = [
  { label: 'Corporate Overview', path: '/corporate' },
  { label: 'Executive Retreats', path: '/corporate/retreats' },
  { label: 'Conferences & Meetings', path: '/corporate/meetings' },
];

export function CorporateOverview() {
  return (
    <PlaceholderPage
      title="Executive Offsites & Corporate Retreats"
      eyebrow="Work & Wilderness"
      subtitle="Step away from screen fatigue and urban boardrooms. Go Flamingo Resort provides an inspiring nature retreat for executive strategy sessions, team bonding, and leadership offsites."
      heroVariant="large"
      heroImage={IMAGES.events.corporate}
      breadcrumbs={[{ label: 'Corporate' }]}
      badge="Inspiring Wilderness"
      highlights={[
        { title: 'Focus & Clarity', desc: 'Serene forest setting free from urban distractions, ideal for high-level brainstorming.' },
        { title: 'High-Impact Team Building', desc: 'Jungle safaris, group nature walks, and evening bonfire discussions that unite teams.' },
        { title: 'High-Speed Connectivity', desc: 'Reliable Wi-Fi for presentations and essential executive communications.' },
        { title: 'Custom Corporate Catering', desc: 'Nutritious, energizing meals and outdoor coffee breaks under the trees.' },
      ]}
      relatedRoutes={CORPORATE_ROUTES}
      actionLabel="Request Corporate Proposal"
      actionTo="/contact"
    />
  );
}

export function RetreatsPage() {
  return (
    <PlaceholderPage
      title="Leadership & Wellness Retreats"
      eyebrow="Renew & Strategize"
      subtitle="Recharge your senior leadership with a blend of strategic discussions, early morning forest safaris, yoga in nature, and starlit dining."
      heroVariant="split"
      heroImage={IMAGES.resort.pathway}
      breadcrumbs={[{ label: 'Corporate', to: '/corporate' }, { label: 'Retreats' }]}
      badge="Leadership Focus"
      highlights={[
        { title: 'Executive Cottage Buyout', desc: 'Private, distraction-free environment for confidential executive dialogues.' },
        { title: 'Wilderness Reset', desc: 'Morning nature walks and dawn safaris to clear minds and spark fresh ideas.' },
        { title: 'Bespoke Schedules', desc: 'Flexible meal and meeting timings aligned with your offsite agenda.' },
      ]}
      relatedRoutes={CORPORATE_ROUTES}
      actionLabel="Inquire About Offsite"
      actionTo="/contact"
    />
  );
}

export function MeetingsPage() {
  return (
    <PlaceholderPage
      title="Conferences & Meeting Facilities"
      eyebrow="Facilities & Setup"
      subtitle="Comfortable indoor and semi-open meeting spaces equipped with audio-visual support, projection, and dedicated beverage services."
      heroVariant="large"
      heroImage={IMAGES.events.corporate}
      breadcrumbs={[{ label: 'Corporate', to: '/corporate' }, { label: 'Meetings' }]}
      badge="Business Amenities"
      highlights={[
        { title: 'Flexible Seating Configurations', desc: 'U-shape, boardroom, theater, and cluster seating arrangements.' },
        { title: 'Audio-Visual Support', desc: 'Projector screens, microphones, and sound systems for seamless presentations.' },
        { title: 'All-Day Refreshments', desc: 'Fresh coffee, artisanal teas, cookies, and local savory snacks throughout meetings.' },
      ]}
      relatedRoutes={CORPORATE_ROUTES}
      actionLabel="Check Facility Availability"
      actionTo="/contact"
    />
  );
}
