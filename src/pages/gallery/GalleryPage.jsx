import React, { useState } from 'react';
import PageHero from '../../components/hero/PageHero';
import { Container, Badge } from '../../components/common';
import { IMAGES } from '../../data/images';
import { cn } from '../../utils/cn';

const GALLERY_CATEGORIES = [
  'All',
  'Resort',
  'Rooms',
  'Safari',
  'Wildlife',
  'Dining',
  'Events',
];

const GALLERY_ITEMS = [
  { id: 1, category: 'Wildlife', title: 'Royal Bengal Tiger', image: IMAGES.wildlife.tiger, aspect: 'aspect-[16/10]' },
  { id: 2, category: 'Resort', title: 'Natural Stone Pool', image: IMAGES.resort.pool, aspect: 'aspect-[4/3]' },
  { id: 3, category: 'Safari', title: 'Dawn Safari Gypsy', image: IMAGES.hero.safari, aspect: 'aspect-[16/9]' },
  { id: 4, category: 'Rooms', title: 'Forest Cottage Interior', image: IMAGES.rooms.cottage, aspect: 'aspect-[4/5]' },
  { id: 5, category: 'Dining', title: 'Central Indian Cuisine', image: IMAGES.dining.indianFood, aspect: 'aspect-[4/3]' },
  { id: 6, category: 'Wildlife', title: 'Chital Deer in Forest', image: IMAGES.wildlife.spottedDeer, aspect: 'aspect-[16/10]' },
  { id: 7, category: 'Events', title: 'Forest Wedding Setup', image: IMAGES.events.wedding, aspect: 'aspect-[16/9]' },
  { id: 8, category: 'Resort', title: 'Lantern-Lit Forest Walkway', image: IMAGES.resort.pathway, aspect: 'aspect-[4/5]' },
  { id: 9, category: 'Dining', title: 'Starlit Bonfire Dinner', image: IMAGES.dining.bonfireDinner, aspect: 'aspect-[16/10]' },
  { id: 10, category: 'Wildlife', title: 'Pench Forest Avifauna', image: IMAGES.wildlife.birding, aspect: 'aspect-[4/3]' },
  { id: 11, category: 'Rooms', title: 'Private Verandah Sit-Out', image: IMAGES.rooms.verandah, aspect: 'aspect-[16/9]' },
  { id: 12, category: 'Events', title: 'Corporate Gathering in Nature', image: IMAGES.events.corporate, aspect: 'aspect-[4/3]' },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="w-full bg-ivory text-charcoal">
      {/* Editorial Page Hero */}
      <PageHero
        variant="large"
        eyebrow="Visual Journal"
        title="Scenes of Pench & Go Flamingo"
        subtitle="Explore our visual collection capturing misty teak forests, tiger encounters, tranquil cottages, regional cuisine, and lantern-lit evenings."
        image={IMAGES.hero.home}
        breadcrumbs={[{ label: 'Gallery' }]}
        badge="Curated Photography"
      />

      {/* Category Filter Navigation */}
      <section className="py-8 bg-sand-light/60 border-b border-sand/40 sticky top-[72px] z-20 backdrop-blur-md">
        <Container size="xl" className="flex items-center justify-start sm:justify-center overflow-x-auto gap-2 py-1 scrollbar-none">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={cn(
                'px-4 py-2 text-xs font-sans uppercase tracking-wider font-semibold rounded-[2px] transition-all whitespace-nowrap min-h-[38px]',
                activeCategory === cat
                  ? 'bg-forest text-ivory shadow-xs'
                  : 'bg-transparent text-charcoal-muted hover:text-forest hover:bg-sand/40'
              )}
            >
              {cat}
            </button>
          ))}
        </Container>
      </section>

      {/* Asymmetrical Editorial Gallery Grid */}
      <section className="py-16 md:py-24">
        <Container size="xl">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-[3px] bg-forest-dark break-inside-avoid shadow-xs border border-sand/30"
              >
                <div className={cn('relative w-full overflow-hidden', item.aspect)}>
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/85 via-forest-deep/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Hover Caption Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-[0.65rem] text-gold uppercase tracking-editorial font-semibold block mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-sm text-ivory font-medium">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Business Accuracy Property Asset Note */}
          <div className="mt-16 p-6 rounded-[3px] bg-sand-light/50 border border-sand/40 text-center max-w-2xl mx-auto">
            <Badge variant="forest" className="mb-2">Property Asset Architecture</Badge>
            <p className="text-xs text-charcoal-muted font-light leading-relaxed">
              High-resolution destination and mood photography representing the Pench wilderness. Authentic on-site property photography will progressively replace mood placeholders as verified assets are supplied.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
