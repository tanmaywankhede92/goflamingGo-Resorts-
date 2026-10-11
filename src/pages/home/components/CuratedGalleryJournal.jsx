import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Container } from '../../../components/common';
import { AUTHENTIC_RESORT } from '../../../data/images';
import { cn } from '../../../utils/cn';

/**
 * CuratedGalleryJournal Component (Section 5 — Authentic Property Gallery)
 * 
 * Screen-Fitted, High-Aesthetic Photo Grid:
 * - 4 core authentic property photos in a clean, balanced 2x2 grid
 * - Interactive lightbox preview
 * - Direct link to full gallery without repetitive text bloat
 */
export default function CuratedGalleryJournal() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const photos = AUTHENTIC_RESORT.photos;
  const videos = AUTHENTIC_RESORT.videos;

  // The 4 verified, primary authentic property photos
  const corePhotos = [
    {
      id: 'entrance',
      title: 'Grand Haveli Entrance & Sillari Gate Facade',
      caption: 'Scalloped haveli arch entrance portico welcoming guests at Sillari Gate.',
      badge: 'Architecture',
      src: photos.entrancePorch.src,
      alt: 'Grand haveli entrance portico of Go Flamingo Resort',
    },
    {
      id: 'corridor',
      title: 'Arched Haveli Corridor & Pitcher Fountain',
      caption: 'Stone arches, shaded verandahs, and pitcher fountain overlooking central lawns.',
      badge: 'Haveli Corridors',
      src: photos.archedCorridorFountain.src,
      alt: 'Arched corridor and water fountain at Go Flamingo Resort',
    },
    {
      id: 'pool',
      title: 'Turquoise Swimming Pool & Garden',
      caption: 'Restorative pool waters nestled in lush greenery for afternoon unwinding.',
      badge: 'Pool Oasis',
      src: videos.pool.poster,
      alt: 'Turquoise swimming pool and splash area at Go Flamingo Resort',
    },
    {
      id: 'bedroom',
      title: 'Deluxe Air-Conditioned Haveli Bedroom',
      caption: 'Teak wood king bed, clean linens, split AC, and private balcony sit-out.',
      badge: 'Deluxe Rooms',
      src: photos.deluxeBedroom.src,
      alt: 'Deluxe bedroom with balcony sitout at Go Flamingo Resort',
    },
  ];

  return (
    <section className="relative py-14 sm:py-18 lg:py-20 bg-[#F9F6F0] text-charcoal border-b border-stone-200/70 overflow-hidden">
      <Container size="xl">
        
        {/* ========================================================
            HEADER (COMPACT ROW)
            ======================================================== */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#163824] text-ivory text-[10px] sm:text-[11px] uppercase tracking-[0.16em] font-semibold">
              <span>Authentic Gallery</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#163824]">
              Real Glimpses of Go Flamingo Resort.
            </h2>
          </div>

          <Link
            to="/gallery"
            className="group inline-flex items-center gap-2 pl-4 pr-1.5 py-2 sm:pl-5 sm:pr-2 sm:py-2.5 rounded-full bg-[#163824] hover:bg-[#0E2A1B] text-white text-[11px] sm:text-xs uppercase tracking-[0.14em] font-semibold transition-all duration-300 shadow-sm hover:shadow-md self-start sm:self-auto shrink-0 cursor-pointer"
          >
            <span>View Full Gallery</span>
            <span className="w-5.5 h-5.5 sm:w-6 sm:h-6 rounded-full bg-[#C5A880] text-[#0E2A1B] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 shrink-0 shadow-inner">
              <ArrowRight className="w-3 h-3 text-[#0E2A1B]" />
            </span>
          </Link>
        </div>

        {/* ========================================================
            BALANCED 4-PHOTO GRID (2X2 CLEAN MASONRY)
            ======================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
          {corePhotos.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') setSelectedPhoto(item); }}
              className="group relative rounded-2xl overflow-hidden bg-stone-900 border border-stone-200/80 shadow-sm cursor-pointer aspect-[16/10] transition-all duration-300 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#163824]"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
              />
              
              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

              {/* Floating Badge */}
              <div className="absolute top-3.5 left-3.5 z-10">
                <span className="px-3 py-1 rounded-full bg-white/95 text-[#163824] border border-stone-200/80 text-[10px] sm:text-[11px] font-bold tracking-wide shadow-xs backdrop-blur-md">
                  {item.badge}
                </span>
              </div>

              {/* In-Image Caption */}
              <div className="absolute bottom-3.5 left-4 right-4 text-ivory">
                <h3 className="font-serif text-base sm:text-lg font-medium text-white mb-0.5 group-hover:text-[#C5A880] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-sand-light/85 font-light line-clamp-1 leading-snug">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================
            LIGHTBOX MODAL
            ======================================================== */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedPhoto(null)}
            role="dialog"
            aria-modal="true"
            aria-label={selectedPhoto.title}
          >
            <div
              className="relative max-w-3xl w-full bg-stone-900 rounded-2xl border border-stone-700 overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-3.5 right-3.5 z-10 w-8 h-8 rounded-full bg-black/60 text-white hover:text-[#C5A880] flex items-center justify-center cursor-pointer transition-colors shadow-md text-sm"
                aria-label="Close modal"
              >
                ✕
              </button>

              <div className="relative aspect-[16/10] bg-black overflow-hidden">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-4 sm:p-5 bg-stone-900 border-t border-stone-800 flex items-center justify-between text-white">
                <div>
                  <h4 className="font-serif text-base sm:text-lg text-white font-medium">
                    {selectedPhoto.title}
                  </h4>
                  <p className="text-xs text-stone-300 font-light mt-0.5">
                    {selectedPhoto.caption}
                  </p>
                </div>
                <Link
                  to="/contact"
                  onClick={() => setSelectedPhoto(null)}
                  className="px-4 py-2 rounded-full bg-[#163824] text-white text-xs font-semibold hover:bg-[#0E2A1B] transition-colors shrink-0 ml-3"
                >
                  Enquire
                </Link>
              </div>
            </div>
          </div>
        )}

      </Container>
    </section>
  );
}
