import React from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  Quote, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  ArrowUpRight
} from 'lucide-react';
import { Container } from '../../../components/common';
import { QUICK_CONTACT } from '../../../data/navigation';

/**
 * GuestStoriesTestimonials Component
 * 
 * Compact 4-Card Luxury Grid (Fits in 1 Frame):
 * - Dual-Tone Aesthetic: Deep forest dark background with elegant light champagne resort cards
 * - 4 Focused Guest Reviews (Jungle Safari, Destination Wedding, Corporate Offsite, Weekend Escape)
 * - Humanized, SEO & Geo-targeted (Sillari Gate, Pench, NH 44, Nagpur, Saoji cuisine)
 * - 4.9/5 Google Rating Trust Badging
 */
export default function GuestStoriesTestimonials() {
  const reviews = [
    {
      id: 'safari',
      tag: '🐅 Jungle Safari',
      feature: '5 Min to Sillari Gate',
      rating: 5,
      headline: '"Spotted a tigress in 40 mins — effortless safari!"',
      quote: 'Being just 5 minutes from Sillari Gate meant no early morning rush. Staff packed hot tea and breakfast boxes for our 5:45 AM gypsy. Coming back to the swimming pool was heaven for the kids.',
      author: 'Dr. Rahul & Sneha K.',
      city: 'Nagpur',
      stay: 'Family Safari Weekend',
      badge: 'Verified Family',
      initials: 'RK',
    },
    {
      id: 'wedding',
      tag: '💍 Destination Wedding',
      feature: 'Haveli Lawns (250+ Guests)',
      rating: 5,
      headline: '"A royal fairy-tale wedding under starry forest skies."',
      quote: 'The open-air mandap among the teak trees, lighted haveli arches, and sangeet by the pool were mesmerizing. Guests from Mumbai and Nagpur reached seamlessly via NH 44 highway.',
      author: 'Priyanka & Aniket D.',
      city: 'Mumbai & Nagpur',
      stay: '2-Day Forest Wedding',
      badge: 'Verified Host',
      initials: 'PD',
    },
    {
      id: 'corporate',
      tag: '💼 Corporate Offsite',
      feature: 'AC Conference & Wi-Fi',
      headline: '"Zero boardroom fatigue. Flawless leadership offsite."',
      quote: 'The AC conference hall with high-speed Wi-Fi and presentation screen worked seamlessly for 28 leaders. Evening lawn bonfires and morning jungle drives bonded the team like never before.',
      author: 'Siddharth Mehta',
      city: 'Pune',
      stay: 'Leadership Strategy Retreat',
      badge: 'Verified Leader',
      initials: 'SM',
    },
    {
      id: 'weekend',
      tag: '🚗 Weekend Escape',
      feature: '1-Hr Drive from City',
      headline: '"Nagpur ki bhaag-daud se door — absolute calm & Saoji food."',
      quote: 'Smooth 1-hour drive from Nagpur on NH 44. The courtyard fountain at night is tranquil, rooms are spacious, and authentic Saoji curries at the restaurant were finger-licking good.',
      author: 'Amitabh & Ritu Verma',
      city: 'Nagpur',
      stay: 'Couples Sanctuary Retreat',
      badge: 'Verified Guest',
      initials: 'AV',
    },
  ];

  return (
    <section className="relative py-10 sm:py-12 lg:py-14 bg-[#09150E] text-ivory border-b border-sand/15 overflow-hidden">
      
      {/* Ambient background glows */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-[#0A1710] to-black/70 pointer-events-none" />
      <div className="absolute top-10 left-1/4 w-[420px] h-[420px] bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[420px] h-[420px] bg-emerald-800/10 rounded-full blur-3xl pointer-events-none" />

      <Container size="xl" className="relative z-10">

        {/* ========================================================
            HEADER ROW: COMPACT & BALANCED (FITS 1 FRAME)
            ======================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-white/10 border border-[#C5A880]/40 text-[#DFBF8E] text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-semibold backdrop-blur-sm mb-2">
              <Sparkles className="w-3 h-3 text-[#C5A880]" />
              <span>Verified Guest Stories · Sillari Gate</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-white tracking-tight">
              Voices from the Wilderness.{' '}
              <span className="italic text-[#E8D7B8] font-normal block sm:inline">
                Real Pench Experiences.
              </span>
            </h2>
          </div>

          {/* Google Trust Pill */}
          <div className="flex items-center gap-3 px-3.5 py-2 rounded-xl bg-white/5 border border-white/15 backdrop-blur-md self-start md:self-auto shrink-0 shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shrink-0 shadow-sm">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.36 24 12 24z"/>
                <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.14-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.36 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-sm font-bold text-white">4.9</span>
                <div className="flex items-center gap-0.5 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-[10px] text-sand-light/75 font-light">480+ Google Reviews</p>
            </div>
          </div>
        </div>

        {/* ========================================================
            4 LIGHT LUXURY CARDS GRID (DARK & LIGHT COMBINATION)
            ======================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4 lg:gap-5">
          {reviews.map((rev, index) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group relative rounded-2xl p-5 bg-gradient-to-b from-[#FAF6EE] via-[#F6F0E4] to-[#EFE7D8] text-[#0E2718] border border-[#D8C7A5]/80 hover:border-[#B38E5D] shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              {/* Card Top: Tag + Rating + Quote Icon */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#0E2718]/8 text-[#0E2718]">
                    {rev.tag}
                  </span>
                  <div className="flex items-center gap-0.5 text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Review Headline */}
                <h3 className="font-serif text-[15px] sm:text-base font-bold text-[#0E2718] leading-snug line-clamp-2">
                  {rev.headline}
                </h3>

                {/* Review Quote */}
                <p className="text-xs text-[#2D3F33] font-normal leading-relaxed mt-2.5 line-clamp-4">
                  {rev.quote}
                </p>

                {/* Geo / Experience Highlight Pill */}
                <div className="mt-3">
                  <span className="inline-flex items-center gap-1 text-[10px] font-medium text-[#1E3E2B] bg-[#0E2718]/6 px-2 py-0.5 rounded-md border border-[#0E2718]/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B38E5D]" />
                    {rev.feature}
                  </span>
                </div>
              </div>

              {/* Card Footer: Author Profile & Verified Badge */}
              <div className="pt-3.5 mt-3.5 border-t border-[#D9CDB8]/80 flex items-center justify-between gap-2.5">
                <div className="flex items-center gap-2.5 min-w-0">
                  {/* Initials Avatar */}
                  <div className="w-8 h-8 rounded-full bg-[#0E2718] text-[#E8D7B8] flex items-center justify-center text-xs font-bold font-serif shrink-0 shadow-xs">
                    {rev.initials}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-serif text-xs font-bold text-[#0E2718] truncate">
                        {rev.author}
                      </h4>
                      <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-[#55695D] truncate">
                      <MapPin className="w-2.5 h-2.5 text-[#B38E5D] shrink-0" />
                      <span className="truncate">{rev.city}</span>
                      <span>·</span>
                      <span className="truncate">{rev.stay}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ambient watermark quote behind text */}
              <div className="absolute top-3 right-3 text-[#B38E5D]/10 pointer-events-none select-none">
                <Quote className="w-10 h-10" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* ========================================================
            SUBTLE BOTTOM LINK (CENTERED & CLEAN)
            ======================================================== */}
        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-center text-xs">
          <a
            href={QUICK_CONTACT.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-[#C5A880] hover:text-[#DFBF8E] font-medium transition-colors"
          >
            <span>Read all 480+ reviews on Google Maps</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </Container>
    </section>
  );
}
