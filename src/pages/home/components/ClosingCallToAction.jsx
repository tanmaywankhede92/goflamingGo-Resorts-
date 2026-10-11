import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { Container, WhatsAppIcon } from '../../../components/common';
import { QUICK_CONTACT } from '../../../data/navigation';

/**
 * ClosingCallToAction Component — Luxury Resort Masterpiece CTA
 * 
 * Design Architecture:
 * - Outer Section: Warm light haveli sand/ivory background (#FAF6F1)
 * - Inner Box: Rich dark-and-light luxury combination card
 *   (Deep emerald/forest-green container with champagne gold borders,
 *    luminous ivory typography, and high-contrast dual actions)
 * - Unified button proportions matching site-wide standards
 * - React Lucide icons throughout
 */
export default function ClosingCallToAction() {
  const whatsappUrl = `${QUICK_CONTACT.whatsappUrl}?text=${encodeURIComponent(
    'Hello Go Flamingo Resort, I would like to inquire about room availability and safari booking at Sillari Gate.'
  )}`;

  return (
    <section className="relative py-14 sm:py-18 lg:py-22 bg-[#FAF6F1] text-charcoal border-t border-stone-200/80 overflow-hidden">
      
      {/* Subtle warm ambient background glow on outer light section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#163824]/5 rounded-full blur-3xl pointer-events-none" />

      <Container size="lg" className="relative z-10">
        
        {/* Luxury Architectural Box: Dark & Light Combination Container */}
        <div className="relative rounded-3xl border-2 border-[#C5A880]/35 bg-gradient-to-br from-[#0F291B] via-[#0C2417] to-[#07160E] p-8 sm:p-12 md:p-14 text-center shadow-[0_20px_50px_-15px_rgba(15,41,27,0.35)] overflow-hidden">

          {/* Ambient inner champagne & emerald light glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-[220px] bg-[#C5A880]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-10 w-60 h-60 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Eyebrow Pill */}
          <div className="relative z-10 inline-flex items-center px-4 py-1 rounded-full bg-white/10 border border-[#C5A880]/40 text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#DFBF8E] font-semibold mb-4 backdrop-blur-sm">
            <span>Plan Your Visit · Sillari Gate</span>
          </div>

          {/* Headline */}
          <h2 className="relative z-10 font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-normal leading-[1.2] text-white mb-3.5 max-w-2xl mx-auto text-balance">
            Plan Your Stay at Go Flamingo Resort
          </h2>

          {/* Concise, Grounded Supporting Copy */}
          <p className="relative z-10 font-sans text-xs sm:text-sm md:text-base text-sand-light/85 max-w-lg mx-auto mb-8 font-light leading-relaxed">
            Direct access to Sillari Safari Gate, private balconies, turquoise pool, and authentic regional dining. Inquire directly for seasonal dates and group retreats.
          </p>

          {/* High-Intent Dual Actions (Sleek unified size matching all site CTAs) */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-lg mx-auto mb-8">
            <Link
              to="/contact"
              className="group flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 pl-4 pr-1.5 py-2 sm:pl-5 sm:pr-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#DFBF8E] via-[#C5A880] to-[#B39366] hover:from-[#E8CA9E] hover:to-[#C5A880] text-[#08130B] text-[11px] sm:text-xs uppercase tracking-[0.12em] font-bold shadow-[0_4px_16px_rgba(197,168,128,0.25)] hover:shadow-[0_6px_22px_rgba(197,168,128,0.4)] border border-[#F3DFC1] transition-all duration-300 w-full sm:w-auto cursor-pointer whitespace-nowrap"
            >
              <span>Check Availability & Book</span>
              <span className="w-5.5 h-5.5 sm:w-6 sm:h-6 rounded-full bg-[#08130B] text-[#DFBF8E] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 shrink-0 shadow-inner">
                <ArrowRight className="w-3 h-3 text-[#DFBF8E]" />
              </span>
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#0D2418]/90 hover:bg-[#133522] border-2 border-[#25D366]/50 hover:border-[#25D366] text-[11px] sm:text-xs uppercase tracking-[0.08em] sm:tracking-[0.10em] font-bold text-white shadow-[0_4px_16px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.2)] transition-all duration-300 w-full sm:w-auto cursor-pointer whitespace-nowrap"
            >
              <WhatsAppIcon size="sm" className="text-[#25D366] shrink-0" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Reassurance Footer Strip with MapPin */}
          <div className="relative z-10 pt-6 border-t border-white/15 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-sand-light/75 font-light">
            <span>
              Direct Assistance:{' '}
              <a href="tel:+919561957009" className="text-[#DFBF8E] font-semibold hover:underline">
                +91 95619 57009
              </a>
            </span>
            <span className="hidden sm:inline text-white/30">·</span>
            <span>Sillari Gate, Sitapur, Pench</span>
            <span className="hidden sm:inline text-white/30">·</span>
            <span className="text-[#DFBF8E] font-medium inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Just 65 km from Nagpur via NH 44 (1 Hr)</span>
            </span>
          </div>

        </div>

      </Container>
    </section>
  );
}

