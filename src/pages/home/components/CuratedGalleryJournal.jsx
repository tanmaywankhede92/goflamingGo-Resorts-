import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Volume2, VolumeX, Maximize2, X } from 'lucide-react';
import { Container } from '../../../components/common';
import { AUTHENTIC_RESORT } from '../../../data/images';

/**
 * CuratedGalleryJournal Component (Section 6 — Authentic Property Bento Grid)
 * 
 * Symmetric & Screen-Fitted Bento Architecture (12 cols x 2 rows):
 * - Row 1: [Video 1 (6 cols)] + [Photo 1 (3 cols)] + [Photo 2 (3 cols)] = 12 cols
 * - Row 2: [Photo 3 (3 cols)] + [Photo 4 (3 cols)] + [Video 2 (6 cols)] = 12 cols
 * - Zero empty/blank spaces, perfectly balanced framing
 * - "Live Resort Film" label removed
 * - Interactive lightbox supporting full video & high-res photos
 */
export default function CuratedGalleryJournal() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isMuted1, setIsMuted1] = useState(true);
  const [isMuted2, setIsMuted2] = useState(true);
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  const photos = AUTHENTIC_RESORT.photos;
  const videos = AUTHENTIC_RESORT.videos;

  const toggleSound1 = (e) => {
    e.stopPropagation();
    if (videoRef1.current) {
      videoRef1.current.muted = !videoRef1.current.muted;
      setIsMuted1(videoRef1.current.muted);
    }
  };

  const toggleSound2 = (e) => {
    e.stopPropagation();
    if (videoRef2.current) {
      videoRef2.current.muted = !videoRef2.current.muted;
      setIsMuted2(videoRef2.current.muted);
    }
  };

  // Video 1 (Top Left, 6 cols)
  const video1 = {
    id: 'aerial-resort-film',
    type: 'video',
    title: 'Aerial Haveli Courtyard & Pool Sequence',
    caption: '25-acre royal retreat with scalloped arches, fountain lawns & swimming pool at Sillari Gate.',
    videoSrc: videos.heroCombined.mp4,
    videoWebm: videos.heroCombined.webm,
    poster: videos.heroCombined.poster,
    alt: 'Aerial view and haveli courtyard sequence of Go Flamingo Resort Pench',
  };

  // Row 1 Photos (Top Right, 3 cols each)
  const row1Photos = [
    {
      id: 'courtyard-twilight',
      type: 'photo',
      title: 'Twilight Haveli Courtyard & Pitcher Fountain',
      caption: 'Stone jharokha arches, illuminated verandahs, and pitcher fountain overlooking central lawns.',
      badge: 'Architecture',
      src: photos.courtyardTwilight.src,
      alt: 'Twilight view of illuminated haveli courtyard and arches at Go Flamingo Resort',
    },
    {
      id: 'pool-oasis',
      type: 'photo',
      title: 'Turquoise Forest Pool & Sun Deck',
      caption: 'Restorative adult pool and kids splash area nestled in teak greenery.',
      badge: 'Pool Oasis',
      src: '/assets/resort_drive/swimming_pool_enhanced.jpg',
      alt: 'Turquoise swimming pool and sun loungers at Go Flamingo Resort',
    },
  ];

  // Row 2 Photos (Bottom Left, 3 cols each)
  const row2Photos = [
    {
      id: 'deluxe-bedroom',
      type: 'photo',
      title: 'Deluxe Air-Conditioned Haveli Bedroom',
      caption: 'Teak wood king bed, clean linens, split AC, and private balcony sit-out.',
      badge: 'Deluxe Stays',
      src: photos.deluxeBedroom.src,
      alt: 'Deluxe bedroom with balcony sitout at Go Flamingo Resort',
    },
    {
      id: 'grand-entrance',
      type: 'photo',
      title: 'Grand Haveli Entrance & Sillari Gate Facade',
      caption: 'Scalloped haveli arch entrance portico welcoming guests just 5 minutes from Pench Tiger Reserve.',
      badge: 'Sillari Gate',
      src: photos.entrancePorch.src,
      alt: 'Grand haveli entrance portico of Go Flamingo Resort',
    },
  ];

  // Video 2 (Bottom Right, 6 cols - Fills the empty space!)
  const video2 = {
    id: 'courtyard-fountain-film',
    type: 'video',
    title: 'Rajasthani Haveli Courtyard & Pitcher Fountain',
    caption: 'Authentic stone jharokha arches, shaded verandahs & peaceful garden fountain in live motion.',
    videoSrc: videos.courtyard.mp4,
    videoWebm: videos.courtyard.webm,
    poster: videos.courtyard.poster,
    alt: 'Haveli courtyard, arch balconies and fountain in motion at Go Flamingo Resort',
  };

  return (
    <section className="relative py-10 sm:py-14 bg-[#FBF8F3] text-charcoal border-b border-stone-200/70 overflow-hidden">
      <Container size="xl">
        
        {/* ========================================================
            COMPACT SECTION HEADER ROW
            ======================================================== */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 sm:mb-8">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#163824] text-ivory text-[10px] sm:text-[11px] uppercase tracking-[0.16em] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] animate-pulse" />
              <span>Authentic Resort Film & Gallery</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-normal text-[#163824] tracking-tight">
              Real Glimpses of Go Flamingo Resort.
            </h2>
          </div>

          <Link
            to="/gallery"
            className="group inline-flex items-center gap-2 pl-4 pr-1.5 py-1.5 sm:pl-5 sm:pr-2 sm:py-2 rounded-full bg-[#163824] hover:bg-[#0E2A1B] text-white text-[11px] sm:text-xs uppercase tracking-[0.14em] font-semibold transition-all duration-300 shadow-sm hover:shadow-md self-start sm:self-auto shrink-0 cursor-pointer"
          >
            <span>View Full Gallery</span>
            <span className="w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-full bg-[#C5A880] text-[#0E2A1B] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 shrink-0 shadow-inner">
              <ArrowRight className="w-3 h-3 text-[#0E2A1B]" />
            </span>
          </Link>
        </div>

        {/* ========================================================
            BALANCED BENTO GRID (12 COLS X 2 ROWS — ZERO GAPS)
            ======================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3.5 sm:gap-4 lg:h-[480px]">
          
          {/* ROW 1 LEFT: Video 1 (6 cols) */}
          <div
            onClick={() => setSelectedItem(video1)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter') setSelectedItem(video1); }}
            className="group relative sm:col-span-2 lg:col-span-6 h-[240px] sm:h-[280px] lg:h-full rounded-2xl sm:rounded-3xl overflow-hidden bg-stone-900 border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#163824]"
          >
            <video
              ref={videoRef1}
              autoPlay
              muted={isMuted1}
              loop
              playsInline
              poster={video1.poster}
              className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
            >
              <source src={video1.videoSrc} type="video/mp4" />
              {video1.videoWebm && <source src={video1.videoWebm} type="video/webm" />}
            </video>

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none" />

            {/* Top Bar with Audio & Maximize Control (Label Removed) */}
            <div className="absolute top-3.5 right-3.5 flex items-center gap-2 z-10">
              <button
                type="button"
                onClick={toggleSound1}
                aria-label={isMuted1 ? 'Unmute video audio' : 'Mute video audio'}
                className="w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-colors cursor-pointer shadow-md"
              >
                {isMuted1 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#C5A880]" />}
              </button>

              <span className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-colors shadow-md">
                <Maximize2 className="w-3.5 h-3.5" />
              </span>
            </div>

            {/* In-Video Bottom Overlay */}
            <div className="absolute bottom-4 left-4 right-4 text-white z-10">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A880] font-semibold">
                  Aerial & Property Tour
                </span>
              </div>
              <h3 className="font-serif text-lg sm:text-xl lg:text-2xl font-normal text-white group-hover:text-[#E8D7B8] transition-colors leading-snug">
                {video1.title}
              </h3>
              <p className="text-xs text-sand-light/85 font-light line-clamp-1 leading-relaxed mt-1">
                {video1.caption}
              </p>
            </div>
          </div>

          {/* ROW 1 RIGHT: Photo 1 & Photo 2 (3 cols each) */}
          {row1Photos.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') setSelectedItem(item); }}
              className="group relative sm:col-span-1 lg:col-span-3 h-[200px] sm:h-[220px] lg:h-full rounded-2xl sm:rounded-3xl overflow-hidden bg-stone-900 border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#163824]"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

              <div className="absolute top-3 left-3 z-10">
                <span className="px-2.5 py-0.5 rounded-full bg-white/95 text-[#163824] border border-stone-200/80 text-[10px] font-bold tracking-wide shadow-xs backdrop-blur-md">
                  {item.badge}
                </span>
              </div>

              <div className="absolute bottom-3 left-3 right-3 text-white z-10">
                <h3 className="font-serif text-sm sm:text-base font-normal text-white group-hover:text-[#C5A880] transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-[11px] text-sand-light/80 font-light line-clamp-1">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}

          {/* ROW 2 LEFT: Photo 3 & Photo 4 (3 cols each) */}
          {row2Photos.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') setSelectedItem(item); }}
              className="group relative sm:col-span-1 lg:col-span-3 h-[200px] sm:h-[220px] lg:h-full rounded-2xl sm:rounded-3xl overflow-hidden bg-stone-900 border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#163824]"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

              <div className="absolute top-3 left-3 z-10">
                <span className="px-2.5 py-0.5 rounded-full bg-white/95 text-[#163824] border border-stone-200/80 text-[10px] font-bold tracking-wide shadow-xs backdrop-blur-md">
                  {item.badge}
                </span>
              </div>

              <div className="absolute bottom-3 left-3 right-3 text-white z-10">
                <h3 className="font-serif text-sm sm:text-base font-normal text-white group-hover:text-[#C5A880] transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-[11px] text-sand-light/80 font-light line-clamp-1">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}

          {/* ROW 2 RIGHT: Video 2 (6 cols) — Fills the empty slot! */}
          <div
            onClick={() => setSelectedItem(video2)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter') setSelectedItem(video2); }}
            className="group relative sm:col-span-2 lg:col-span-6 h-[240px] sm:h-[280px] lg:h-full rounded-2xl sm:rounded-3xl overflow-hidden bg-stone-900 border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#163824]"
          >
            <video
              ref={videoRef2}
              autoPlay
              muted={isMuted2}
              loop
              playsInline
              poster={video2.poster}
              className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
            >
              <source src={video2.videoSrc} type="video/mp4" />
              {video2.videoWebm && <source src={video2.videoWebm} type="video/webm" />}
            </video>

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none" />

            {/* Top Bar with Audio & Maximize Control */}
            <div className="absolute top-3.5 right-3.5 flex items-center gap-2 z-10">
              <button
                type="button"
                onClick={toggleSound2}
                aria-label={isMuted2 ? 'Unmute video audio' : 'Mute video audio'}
                className="w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-colors cursor-pointer shadow-md"
              >
                {isMuted2 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#C5A880]" />}
              </button>

              <span className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-colors shadow-md">
                <Maximize2 className="w-3.5 h-3.5" />
              </span>
            </div>

            {/* In-Video Bottom Overlay */}
            <div className="absolute bottom-4 left-4 right-4 text-white z-10">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A880] font-semibold">
                  Haveli Courtyard & Fountain
                </span>
              </div>
              <h3 className="font-serif text-lg sm:text-xl lg:text-2xl font-normal text-white group-hover:text-[#E8D7B8] transition-colors leading-snug">
                {video2.title}
              </h3>
              <p className="text-xs text-sand-light/85 font-light line-clamp-1 leading-relaxed mt-1">
                {video2.caption}
              </p>
            </div>
          </div>

        </div>

        {/* ========================================================
            INTERACTIVE LIGHTBOX MODAL (PHOTO & FULL VIDEO)
            ======================================================== */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
            onClick={() => setSelectedItem(null)}
            role="dialog"
            aria-modal="true"
            aria-label={selectedItem.title}
          >
            <div
              className="relative max-w-4xl w-full bg-stone-900 rounded-2xl border border-stone-700 overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="absolute top-3.5 right-3.5 z-20 w-8 h-8 rounded-full bg-black/70 text-white hover:text-[#C5A880] flex items-center justify-center cursor-pointer transition-colors shadow-md text-sm"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Media Display: Video or Image */}
              <div className="relative aspect-[16/10] bg-black overflow-hidden flex items-center justify-center">
                {selectedItem.type === 'video' ? (
                  <video
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full object-contain"
                  >
                    <source src={selectedItem.videoSrc} type="video/mp4" />
                    {selectedItem.videoWebm && <source src={selectedItem.videoWebm} type="video/webm" />}
                  </video>
                ) : (
                  <img
                    src={selectedItem.src}
                    alt={selectedItem.alt}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>

              {/* Details & Enquire CTA */}
              <div className="p-4 sm:p-5 bg-stone-900 border-t border-stone-800 flex items-center justify-between text-white gap-3">
                <div className="min-w-0">
                  <h4 className="font-serif text-base sm:text-lg text-white font-medium truncate">
                    {selectedItem.title}
                  </h4>
                  <p className="text-xs text-stone-300 font-light truncate">
                    {selectedItem.caption}
                  </p>
                </div>
                <Link
                  to="/contact?book=true#reservation-form-card"
                  onClick={() => setSelectedItem(null)}
                  className="px-4 py-2 rounded-full bg-[#163824] hover:bg-[#0E2A1B] text-white text-xs font-semibold transition-colors shrink-0 whitespace-nowrap shadow-sm"
                >
                  Enquire Now
                </Link>
              </div>
            </div>
          </div>
        )}

      </Container>
    </section>
  );
}
