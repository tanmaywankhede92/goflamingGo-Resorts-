import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Badge } from '../../../components/common';
import { AUTHENTIC_RESORT } from '../../../data/images';
import { QUICK_CONTACT } from '../../../data/navigation';
import { cn } from '../../../utils/cn';

/**
 * CuratedGalleryJournal Component — 100% Authentic Property Photography
 * 
 * Curated gallery with varied image proportions, purposeful spacing, and understated interactions:
 * - Real entrance, arched corridors, central courtyard fountain, deluxe bedroom, dormitory,
 *   chandeliers in dining hall, and swimming pool.
 * - Interactive lightbox modal for full-resolution property inspection.
 * - Filterable by category without page reload.
 * - Transparent guest trust credentials and verified location data.
 */
export default function CuratedGalleryJournal() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const photos = AUTHENTIC_RESORT.photos;
  const videos = AUTHENTIC_RESORT.videos;

  const galleryItems = [
    {
      id: 'entrance',
      category: 'architecture',
      title: 'Grand Entrance Portico & Signboard',
      caption: 'The welcoming scalloped haveli facade and Go Flamingo Resort entrance at Sillari Gate.',
      photo: photos.entrancePorch,
      span: 'lg:col-span-8 aspect-[16/10]',
      badge: 'Arrival & Facade',
    },
    {
      id: 'corridor',
      category: 'architecture',
      title: 'Arched Haveli Corridor with Water Fountain',
      caption: 'Sculptured pitcher fountain and shaded pillared walkway overlooking the central courtyard.',
      photo: photos.archedCorridorFountain,
      span: 'lg:col-span-4 aspect-[4/3] lg:aspect-auto',
      badge: 'Haveli Architecture',
    },
    {
      id: 'bedroom',
      category: 'rooms',
      title: 'Deluxe Guest Bedroom with Balcony View',
      caption: 'Teak wood king bed, extra daybed, split AC, and sliding glass balcony doors facing tree canopies.',
      photo: photos.deluxeBedroom,
      span: 'lg:col-span-5 aspect-[4/3]',
      badge: 'Deluxe Room',
    },
    {
      id: 'dining',
      category: 'dining',
      title: 'Restaurant Dining Hall & Crystal Chandeliers',
      caption: 'Plush booth seating, chandeliers, full service bar counter, and recreation area.',
      photo: photos.restaurantBarHall,
      span: 'lg:col-span-7 aspect-[16/10]',
      badge: 'Dining & Bar',
    },
    {
      id: 'twilight',
      category: 'architecture',
      title: 'Illuminated Central Courtyard at Twilight',
      caption: 'Two-story haveli wings, warm ambient lighting, stone pathways, and manicured lawns under the night sky.',
      photo: photos.courtyardTwilight,
      span: 'lg:col-span-7 aspect-[16/10]',
      badge: 'Courtyard Twilight',
    },
    {
      id: 'dormitory',
      category: 'rooms',
      title: 'Air-Conditioned Group Wilderness Dormitory',
      caption: 'Neat individual beds, crisp linens, split AC, and dedicated washrooms for groups and students.',
      photo: photos.dormitoryRoom,
      span: 'lg:col-span-5 aspect-[4/3]',
      badge: 'Group Facility',
    },
    {
      id: 'verandah',
      category: 'architecture',
      title: 'Sunlit Arched Verandah Walkway',
      caption: 'Peaceful daylight perspective of the guest corridors, cypress trees, and garden greenery.',
      photo: photos.sunlitVerandah,
      span: 'lg:col-span-4 aspect-[4/3] lg:aspect-auto',
      badge: 'Verandah Living',
    },
    {
      id: 'pool',
      category: 'dining',
      title: 'Turquoise Swimming Pool & Splash Area',
      caption: 'Crystal-clear pool and shallow splash section nestled among lush garden trees.',
      photo: {
        src: videos.pool.poster,
        srcSet: `${videos.pool.poster} 720w`,
        sizes: '100vw',
        width: 720,
        height: 504,
        alt: 'Turquoise blue swimming pool at Go Flamingo Resort with loungers',
      },
      span: 'lg:col-span-8 aspect-[16/10]',
      badge: 'Pool Oasis',
    },
  ];

  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-ivory text-charcoal border-b border-sand/30 overflow-hidden">
      <Container size="xl">
        
        {/* ========================================================
            HEADER
            ======================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl space-y-2.5">
            <div className="flex items-center gap-2.5 text-[11px] uppercase tracking-[0.14em] text-gold-dark font-semibold">
              <span className="w-5 h-px bg-gold-dark/40" />
              <span>Authentic Property Gallery</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal leading-snug text-forest-deep text-balance">
              Captured on the Grounds at Sillari Gate
            </h2>

            <p className="font-sans text-xs sm:text-sm text-charcoal-muted font-light leading-relaxed">
              Explore authentic photographs of Go Flamingo Resort's actual architecture, guest bedrooms, dormitory, pool, and dining hall. Click any photo to view in high resolution.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 p-1.5 rounded-[4px] bg-ivory-warm/60 border border-sand/40 self-start lg:self-auto overflow-x-auto max-w-full">
            {[
              { id: 'all', label: 'All Photos' },
              { id: 'architecture', label: 'Architecture & Grounds' },
              { id: 'rooms', label: 'Rooms & Dormitory' },
              { id: 'dining', label: 'Dining & Pool' },
            ].map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setActiveFilter(f.id)}
                className={cn(
                  'px-3.5 py-1.5 rounded-[2px] text-[11px] uppercase tracking-wider font-semibold transition-all cursor-pointer whitespace-nowrap',
                  activeFilter === f.id
                    ? 'bg-forest-deep text-ivory shadow-xs'
                    : 'text-charcoal-muted hover:text-forest-deep'
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* ========================================================
            ART-DIRECTED ASYMMETRICAL MOSAIC
            ======================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') setSelectedPhoto(item); }}
              className={cn(
                'group relative rounded-[3px] overflow-hidden bg-forest-dark border border-sand/35 shadow-md cursor-pointer transition-all duration-300 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold',
                item.span
              )}
            >
              <img
                src={item.photo.src}
                srcSet={item.photo.srcSet}
                sizes={item.photo.sizes}
                width={item.photo.width}
                height={item.photo.height}
                alt={item.photo.alt}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out"
              />
              
              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-transparent to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />

              {/* Badge */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                <span className="px-2 py-0.5 rounded-[2px] bg-forest-deep/80 text-[10px] uppercase tracking-wider text-gold-light border border-sand/30 backdrop-blur-xs font-semibold">
                  {item.badge}
                </span>
              </div>

              {/* Caption Overlay */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-ivory">
                <h3 className="font-serif text-sm sm:text-base font-semibold text-ivory mb-0.5 group-hover:text-gold-light transition-colors">
                  {item.title}
                </h3>
                <p className="text-[11px] text-sand-light/85 font-light line-clamp-1 leading-snug">
                  {item.caption}
                </p>
                <div className="pt-1 flex items-center justify-between text-[10px] uppercase tracking-widest text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Click to Expand</span>
                  <span>🔍</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================
            INTERACTIVE LIGHTBOX MODAL
            ======================================================== */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-50 bg-forest-dark/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in"
            onClick={() => setSelectedPhoto(null)}
            role="dialog"
            aria-modal="true"
            aria-label={selectedPhoto.title}
          >
            <div
              className="relative max-w-5xl w-full bg-forest-deep rounded-[4px] border border-sand/40 overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-forest-dark/80 text-ivory hover:text-gold border border-sand/30 flex items-center justify-center cursor-pointer transition-colors"
                aria-label="Close modal"
              >
                ✕
              </button>

              {/* Modal Image */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] bg-forest-dark overflow-hidden">
                <img
                  src={selectedPhoto.photo.src}
                  alt={selectedPhoto.photo.alt}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Modal Details Bar */}
              <div className="p-4 sm:p-6 bg-forest-deep border-t border-sand/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-semibold block mb-0.5">
                    {selectedPhoto.badge} · Authentic Go Flamingo Resort Property
                  </span>
                  <h4 className="font-serif text-lg sm:text-xl text-ivory font-semibold">
                    {selectedPhoto.title}
                  </h4>
                  <p className="text-xs text-sand-light/80 font-light mt-0.5">
                    {selectedPhoto.caption}
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <Button
                    as={Link}
                    to="/book"
                    variant="gold"
                    size="sm"
                    className="font-bold tracking-wider"
                    onClick={() => setSelectedPhoto(null)}
                  >
                    Enquire Now
                  </Button>
                  <button
                    type="button"
                    onClick={() => setSelectedPhoto(null)}
                    className="text-xs text-sand-light hover:text-ivory px-3 py-1.5 uppercase tracking-wider"
                  >
                    Close
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ========================================================
            GUEST TRUST & ESSENTIAL DETAILS ANCHOR
            ======================================================== */}
        <div className="mt-14 sm:mt-18 pt-10 border-t border-sand/30">
          <div className="bg-ivory-warm/60 border border-sand/40 rounded-[4px] p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-sand/30">
              
              {/* Trust Box 1 */}
              <div className="space-y-1.5 md:pr-4">
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold-dark font-semibold block">
                  Official Property Location
                </span>
                <div className="font-serif text-base text-forest-deep font-semibold">
                  Sillari Gate, Sitapur
                </div>
                <p className="text-xs text-charcoal-muted font-light leading-relaxed">
                  Maharashtra 441401, India · Minutes from the official entry gate of Pench Tiger Reserve.
                </p>
              </div>

              {/* Trust Box 2 */}
              <div className="pt-4 md:pt-0 md:px-6 space-y-1.5">
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold-dark font-semibold block">
                  Direct Contact & Concierge
                </span>
                <div className="font-serif text-base text-forest-deep font-semibold">
                  <a href="tel:+919561957009" className="hover:text-gold transition-colors">
                    +91 95619 57009
                  </a>
                </div>
                <p className="text-xs text-charcoal-muted font-light leading-relaxed">
                  WhatsApp: <a href={QUICK_CONTACT.whatsappUrl} className="text-forest font-medium hover:underline">+91 93724 25968</a> · Email: <a href="mailto:info@goflamingoresorts.com" className="text-forest hover:underline">info@goflamingoresorts.com</a>
                </p>
              </div>

              {/* Trust Box 3 */}
              <div className="pt-4 md:pt-0 md:pl-6 space-y-1.5">
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold-dark font-semibold block">
                  Easy Highway Drive from Nagpur
                </span>
                <div className="font-serif text-base text-forest-deep font-semibold">
                  ~85 km (1.5 – 2 Hours)
                </div>
                <p className="text-xs text-charcoal-muted font-light leading-relaxed">
                  Seamless 4-lane highway via NH 44 from Dr. Babasaheb Ambedkar International Airport (NAG) and Nagpur Junction.
                </p>
              </div>

            </div>
          </div>
        </div>

      </Container>
    </section>
  );
}
