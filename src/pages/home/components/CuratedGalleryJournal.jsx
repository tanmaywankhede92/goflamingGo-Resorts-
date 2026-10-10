import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../../components/common';
import { AUTHENTIC_RESORT } from '../../../data/images';
import { QUICK_CONTACT } from '../../../data/navigation';
import { cn } from '../../../utils/cn';

/**
 * CuratedGalleryJournal Component (Section 5 — Authentic Property Gallery)
 * 
 * Curated Luxury Photo Grid:
 * - Focuses strictly on the 6 core authentic property photos (no clutter).
 * - Proper, balanced editorial masonry layout with smooth hover zoom & tags.
 * - Interactive lightbox preview with direct inquiry action.
 * - Prominent 65 km from Nagpur highway connectivity reassurance.
 */
export default function CuratedGalleryJournal() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const photos = AUTHENTIC_RESORT.photos;
  const videos = AUTHENTIC_RESORT.videos;

  // The 6 verified, primary authentic property photos
  const corePhotos = [
    {
      id: 'entrance',
      title: 'Grand Haveli Entrance & Sillari Gate Facade',
      caption: 'The authentic scalloped haveli arch entrance portico welcoming guests at Sillari Gate.',
      badge: 'Arrival & Architecture',
      src: photos.entrancePorch.src,
      alt: 'Grand haveli entrance portico of Go Flamingo Resort at Sillari Gate',
      span: 'lg:col-span-6 aspect-[16/10]',
    },
    {
      id: 'corridor',
      title: 'Arched Haveli Corridor & Pitcher Fountain',
      caption: 'Sculptured stone arches, shaded verandahs, and stone pitcher fountain overlooking central lawns.',
      badge: 'Haveli Corridors',
      src: photos.archedCorridorFountain.src,
      alt: 'Arched corridor and water fountain at Go Flamingo Resort',
      span: 'lg:col-span-6 aspect-[16/10]',
    },
    {
      id: 'pool',
      title: 'Turquoise Swimming Pool & Kids Splash Area',
      caption: 'Restorative pool waters nestled in lush garden foliage for relaxing between morning and evening safaris.',
      badge: 'Pool Oasis',
      src: videos.pool.poster,
      alt: 'Turquoise swimming pool and splash area at Go Flamingo Resort',
      span: 'lg:col-span-6 aspect-[16/10]',
    },
    {
      id: 'bedroom',
      title: 'Deluxe Air-Conditioned Haveli Bedroom',
      caption: 'Teak wood king bed, clean linens, individual split AC, and sliding glass doors to private balcony.',
      badge: 'Deluxe Rooms',
      src: photos.deluxeBedroom.src,
      alt: 'Deluxe bedroom with balcony sitout at Go Flamingo Resort',
      span: 'lg:col-span-6 aspect-[16/10]',
    },
    {
      id: 'dining',
      title: 'Grand Restaurant & Crystal Chandeliers',
      caption: 'Vaulted dining hall with crystal chandeliers, plush booths, bar counter, and authentic Vidarbha cuisine.',
      badge: 'Dining & Bar',
      src: photos.restaurantBarHall.src,
      alt: 'Grand dining hall with crystal chandeliers at Go Flamingo Resort',
      span: 'lg:col-span-6 aspect-[16/10]',
    },
    {
      id: 'twilight',
      title: 'Illuminated Central Courtyard at Twilight',
      caption: 'Two-story haveli wings, warm ambient lighting, stone pathways, and starlit evening bonfires.',
      badge: 'Courtyard at Dusk',
      src: photos.courtyardTwilight.src,
      alt: 'Illuminated courtyard at twilight at Go Flamingo Resort',
      span: 'lg:col-span-6 aspect-[16/10]',
    },
  ];

  return (
    <section className="relative py-20 sm:py-28 lg:py-36 bg-[#F8F5EE] text-charcoal border-b border-sand/30 overflow-hidden">
      <Container size="xl">
        
        {/* ========================================================
            HEADER
            ======================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-deep text-ivory text-[11px] uppercase tracking-[0.16em] font-semibold">
              <span>Authentic Property Gallery</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.18] text-forest-deep text-balance">
              Real Glimpses of Go Flamingo Resort.
            </h2>

            <p className="font-sans text-sm sm:text-base text-charcoal-muted font-light leading-relaxed">
              Genuine photographs of our actual haveli architecture, guest bedrooms, turquoise pool, dining hall, and twilight courtyard at Sillari Gate. Click any photo to view in detail.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start lg:self-auto">
            <Link
              to="/gallery"
              className="group inline-flex items-center gap-2.5 pl-5 pr-2 py-2 rounded-full bg-white border border-stone-200/90 text-forest-deep text-xs uppercase tracking-[0.12em] font-semibold hover:border-forest-deep transition-all duration-300 shadow-xs"
            >
              <span>View Full Gallery</span>
              <span className="w-7 h-7 rounded-full bg-forest-pale text-forest-deep flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 shrink-0">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* ========================================================
            CURATED 6-PHOTO PROPER EDITORIAL GRID
            ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
          {corePhotos.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') setSelectedPhoto(item); }}
              className={cn(
                'group relative rounded-2xl overflow-hidden bg-forest-dark border border-stone-200 shadow-md cursor-pointer transition-all duration-300 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest',
                item.span
              )}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out"
              />
              
              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-forest-deep/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Floating Category Pill */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-full bg-white/95 text-forest-deep border border-stone-200 text-[11px] font-bold tracking-wide shadow-xs backdrop-blur-md">
                  {item.badge}
                </span>
              </div>

              {/* In-Image Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 text-ivory">
                <h3 className="font-serif text-lg sm:text-xl font-medium text-ivory mb-1 group-hover:text-gold-light transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-sand-light/85 font-light line-clamp-1 leading-snug">
                  {item.caption}
                </p>
                <div className="pt-2 flex items-center justify-between text-[11px] uppercase tracking-wider text-gold font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Click to Inspect 🔍</span>
                  <span>View High-Res →</span>
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
              className="relative max-w-4xl w-full bg-forest-deep rounded-2xl border border-sand/40 overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-forest-dark/80 text-ivory hover:text-gold border border-sand/30 flex items-center justify-center cursor-pointer transition-colors shadow-md"
                aria-label="Close modal"
              >
                ✕
              </button>

              {/* Modal Image */}
              <div className="relative aspect-[16/10] bg-forest-dark overflow-hidden">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Modal Details Bar */}
              <div className="p-5 sm:p-6 bg-forest-deep border-t border-sand/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold block mb-1">
                    {selectedPhoto.badge} · Authentic Go Flamingo Resort
                  </span>
                  <h4 className="font-serif text-lg sm:text-xl text-ivory font-medium">
                    {selectedPhoto.title}
                  </h4>
                  <p className="text-xs text-sand-light/80 font-light mt-0.5">
                    {selectedPhoto.caption}
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <Link
                    to="/book"
                    onClick={() => setSelectedPhoto(null)}
                    className="px-5 py-2.5 rounded-full bg-gold text-forest-dark font-bold text-xs uppercase tracking-wider shadow-md hover:bg-gold-light transition-colors"
                  >
                    Enquire Now
                  </Link>
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
            NAGPUR 65 KM CONNECTIVITY & LOCATION TRUST CARD
            ======================================================== */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-sand/30">
          <div className="bg-white border border-stone-200/90 rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-stone-200">
              
              {/* Box 1: Nagpur Highway Drive Highlight */}
              <div className="space-y-1.5 md:pr-4">
                <span className="text-[11px] uppercase tracking-[0.16em] text-terracotta font-bold block">
                  📍 Distance from Nagpur
                </span>
                <div className="font-serif text-lg text-forest-deep font-semibold">
                  Just 65 km (~1 Hour Drive)
                </div>
                <p className="text-xs text-charcoal-muted font-light leading-relaxed">
                  Smooth 4-lane highway via NH 44 from Dr. Babasaheb Ambedkar International Airport and Nagpur Junction. Direct and comfortable.
                </p>
              </div>

              {/* Box 2: Official Location at Sillari Gate */}
              <div className="pt-4 md:pt-0 md:px-6 space-y-1.5">
                <span className="text-[11px] uppercase tracking-[0.16em] text-forest font-bold block">
                  🐅 Safari Gate Proximity
                </span>
                <div className="font-serif text-lg text-forest-deep font-semibold">
                  Sillari Gate, Sitapur, Pench
                </div>
                <p className="text-xs text-charcoal-muted font-light leading-relaxed">
                  Maharashtra 441401, India · Just minutes from the prime core entry gate of Pench Tiger Reserve.
                </p>
              </div>

              {/* Box 3: Direct Concierge & WhatsApp */}
              <div className="pt-4 md:pt-0 md:pl-6 space-y-1.5">
                <span className="text-[11px] uppercase tracking-[0.16em] text-terracotta font-bold block">
                  💬 Direct Reservations & Concierge
                </span>
                <div className="font-serif text-lg text-forest-deep font-semibold">
                  <a href="tel:+919561957009" className="hover:text-forest transition-colors">
                    +91 95619 57009
                  </a>
                </div>
                <p className="text-xs text-charcoal-muted font-light leading-relaxed">
                  WhatsApp: <a href={QUICK_CONTACT.whatsappUrl} className="text-forest font-semibold hover:underline">+91 93724 25968</a> · Instant booking confirmation.
                </p>
              </div>

            </div>
          </div>
        </div>

      </Container>
    </section>
  );
}
