import React from 'react';
import { Link } from 'react-router-dom';
import { Container, WhatsAppIcon, PinIcon } from '../../../components/common';
import { QUICK_CONTACT } from '../../../data/navigation';

/**
 * ClosingCallToAction Component — Warm Light Resort Invitation
 * 
 * Clean architectural luxury card:
 * - 100% vector SVG icons — zero emojis, zero awkward photo cutouts
 * - Warm ivory & deep forest-green palette
 * - Compact, screen-balanced vertical framing
 * - High-contrast forest-green & gold conversion actions
 */
export default function ClosingCallToAction() {
  const whatsappUrl = `${QUICK_CONTACT.whatsappUrl}?text=${encodeURIComponent(
    'Hello Go Flamingo Resort, I would like to inquire about room availability and safari booking at Sillari Gate.'
  )}`;

  return (
    <section className="relative py-14 sm:py-18 lg:py-20 bg-[#FAF6F1] text-charcoal border-t border-stone-200/80 overflow-hidden">
      
      {/* Subtle warm ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-100/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#163824]/5 rounded-full blur-3xl pointer-events-none" />

      <Container size="lg" className="relative z-10">
        
        {/* Architectural Warm Haveli Card Frame */}
        <div className="relative rounded-3xl border border-[#163824]/12 bg-white/80 backdrop-blur-md p-8 sm:p-12 md:p-14 text-center shadow-[0_12px_40px_-16px_rgba(22,56,36,0.06)] overflow-hidden">

          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#163824]/8 border border-[#163824]/15 text-[11px] uppercase tracking-[0.2em] text-[#163824] font-medium mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
            <span>Plan Your Visit · Sillari Gate</span>
          </div>

          {/* Headline */}
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-normal leading-[1.2] text-[#163824] mb-3.5 max-w-2xl mx-auto text-balance">
            Plan Your Stay at Go Flamingo Resort
          </h2>

          {/* Concise, Grounded Supporting Copy */}
          <p className="font-sans text-xs sm:text-sm md:text-base text-charcoal/80 max-w-lg mx-auto mb-7 font-light leading-relaxed">
            Direct access to Sillari Safari Gate, private balconies, turquoise pool, and authentic regional dining. Inquire directly for seasonal dates and group retreats.
          </p>

          {/* High-Intent Dual Actions (Deep Green & Gold Combination) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 max-w-lg mx-auto mb-8">
            <Link
              to="/book"
              className="group inline-flex items-center justify-center gap-3 pl-7 pr-3 py-3.5 sm:py-4 rounded-full bg-[#163824] hover:bg-[#0E2A1B] text-white text-xs sm:text-[13px] uppercase tracking-[0.14em] font-bold shadow-[0_4px_20px_rgba(22,56,36,0.25)] hover:shadow-[0_6px_25px_rgba(22,56,36,0.4)] transition-all duration-300 border border-[#163824] w-full sm:w-auto cursor-pointer"
            >
              <span>Check Availability & Book</span>
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#C5A880] text-[#0E2A1B] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 shrink-0 font-bold text-sm shadow-inner">
                →
              </span>
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 rounded-full bg-white hover:bg-stone-50 border-2 border-[#163824]/20 hover:border-[#163824]/60 text-[#163824] text-xs sm:text-[13px] uppercase tracking-[0.12em] font-bold shadow-xs hover:shadow-md transition-all duration-300 w-full sm:w-auto cursor-pointer"
            >
              <WhatsAppIcon size="md" className="text-[#25D366] shrink-0" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Reassurance Footer Strip with Clean Vector SVG Pin */}
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
            <span className="text-[#163824] font-medium inline-flex items-center gap-1.5">
              <PinIcon className="w-3.5 h-3.5 text-[#163824]" />
              <span>Just 65 km from Nagpur via NH 44 (1 Hr)</span>
            </span>
          </div>

        </div>

      </Container>
    </section>
  );
}
