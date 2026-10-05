import React from 'react';
import PlaceholderPage from '../../components/common/PlaceholderPage';
import { IMAGES } from '../../data/images';

export default function DiningPage() {
  return (
    <PlaceholderPage
      title="Regional & Indian Dining"
      eyebrow="The Forest Kitchen"
      subtitle="Celebrate the vibrant culinary heritage of Central India. From smoky slow-cooked curries and fresh chapatis to crisp continental breakfasts and starlit barbecue evenings."
      heroVariant="large"
      heroImage={IMAGES.dining.restaurant}
      breadcrumbs={[{ label: 'Dining' }]}
      badge="Authentic Flavors"
      highlights={[
        { title: 'Central Indian Specialties', desc: 'Savor authentic Maharashtrian and MP recipes made with local spices and cold-pressed oils.' },
        { title: 'Pre-Safari Breakfast Packs', desc: 'Hot flask tea, fresh fruits, sandwiches, and hard-boiled eggs packed for 5:30 AM safari drives.' },
        { title: 'Fresh & Seasonal Produce', desc: 'Locally sourced vegetables, farm dairy, and seasonal forest fruits.' },
        { title: 'Al Fresco Dining', desc: 'Tables set beneath leafy trees by day, and lantern-lit lawns by night.' },
      ]}
      relatedRoutes={[
        { label: 'Forest Pool Refreshments', path: '/resort/pool' },
        { label: 'Bonfires & Celebrations', path: '/weddings/celebrations' },
        { label: 'Book Stay with Meals', path: '/book' },
      ]}
      actionLabel="Reserve a Dining Table"
      actionTo="/contact"
    />
  );
}
