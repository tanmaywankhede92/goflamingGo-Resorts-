import React from 'react';
import { Link } from 'react-router-dom';
import { Container, WhatsAppIcon } from '../../../components/common';
import { AUTHENTIC_RESORT } from '../../../data/images';
import { QUICK_CONTACT } from '../../../data/navigation';

/**
 * ClosingCallToAction Component — Warm Light Resort Invitation
 * 
 * Harmonized with the site's warm ivory & deep forest-green palette:
 * - Replaces the heavy dark green block with an elegant, warm light sanctuary invitation
 * - Compact, screen-balanced vertical framing (py-16 sm:py-20)
 * - Concise, punchy copy without information overload
 * - High-contrast forest-green & gold conversion actions
 */
export default function ClosingCallToAction() {
  const whatsappUrl = `${QUICK_CONTACT.whatsappUrl}?text=${encodeURIComponent(
    'Hello Go Flamingo Resort, I would like to inquire about room availability and safari booking at Sillari Gate.'
  )}`;

  const twilightPhoto = AUTHENTIC_RESORT.photos.courtyardTwilight;

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-[#FAF6F1] text-charcoal border-t border-stone-200/80 overflow-hidden">
      
      {/* Subtle warm ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-100/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#163824]/5 rounded-full blur-3xl pointer-events-none" />

      <Container size="lg" className="relative z-10">
        
        {/* Architectural Warm Haveli Card Frame */}
        <div className="relative rounded-3xl border border-[#163824]/12 bg-white/75 backdrop-blur-md p-8 sm:p-12 md:p-16 text-center shadow-[0_12px_40px_-16px_rgba(22,56,36,0.06)] overflow-hidden">
          
          {/* Subtle twilight photo watermark accent in corner */}
          <div className="absolute -right-10 -bottom-10 w-64 h-64 rounded-full overflow-hidden opacity-10 pointer-events-none blur-[1px]">
            <img
              src={twilightPhoto.src}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#163824]/8 border border-[#163824]/15 text-[11px] uppercase tracking-[0.2em] text-[#163824] font-medium mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
            <span>Plan Your Visit · Sillari Gate</span>
          </div>

          {/* Headline */}
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-normal leading-[1.2] text-[#163824] mb-4 max-w-2xl mx-auto text-balance">
            Plan Your Stay at Go Flamingo Resort
          </h2>

          {/* Concise, Grounded Supporting Copy */}
          <p className="font-sans text-sm sm:text-base text-charcoal/80 max-w-lg mx-auto mb-8 font-light leading-relaxed">
            Direct access to Sillari Safari Gate, private balconies, turquoise pool, and authentic regional dining. Inquire directly for seasonal dates and group retreats.
          </p>

          {/* High-Intent Dual Actions (Deep Green & Gold Combination) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto mb-10">
            <Link
              to="/book"
              className="group inline-flex items-center justify-center gap-3 pl-6 pr-2.5 py-3 rounded-full bg-[#163824] text-white text-xs uppercase tracking-[0.14em] font-semibold shadow-md hover:bg-[#0E2A1B] transition-all duration-300 w-full sm:w-auto"
            >
              <span>Check Availability & Book</span>
              <span className="w-7 h-7 rounded-full bg-[#C5A880] text-[#0E2A1B] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 shrink-0">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white hover:bg-stone-50 border border-stone-300/80 text-[#163824] text-xs uppercase tracking-[0.14em] font-semibold shadow-xs transition-colors w-full sm:w-auto"
            >
              <WhatsAppIcon size="sm" className="text-[#25D366] shrink-0" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Reassurance Footer Strip with Correct 65 km Distance */}
          <div className="pt-6 border-t border-[#163824]/10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-charcoal/70 font-light">
            <span>
              Direct Assistance:{' '}
              <a href="tel:+919561957009" className="text-[#163824] font-semibold hover:underline">
                +91 95619 57009
              </a>
            </span>
            <span className="hidden sm:inline text-stone-300">·</span>
            <span>Sillari Gate, Sitapur, Pench</span>
            <span className="hidden sm:inline text-stone-300">·</span>
            <span className="text-[#163824] font-medium">📍 Just 65 km from Nagpur via NH 44 (1 Hr)</span>
          </div>

        </div>

      </Container>
    </section>
  );
}
