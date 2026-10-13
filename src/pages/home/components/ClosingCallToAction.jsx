import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { Container, WhatsAppIcon } from '../../../components/common';
import { QUICK_CONTACT } from '../../../data/navigation';
import { getWhatsAppTarget } from '../../../utils/whatsapp';

/**
 * ClosingCallToAction Component — Luminous Champagne & Haveli Sand CTA
 * 
 * Design Transformation:
 * - Replaced dark-green-on-dark-footer collision with a radiant, warm champagne-gold card
 * - Deep royal forest green typography (#0E2718) on warm ivory/champagne gradient
 * - High-contrast dual CTA buttons (Emerald primary + WhatsApp secondary)
 * - Beautiful visual separation before transitioning into the dark sanctuary footer
 */
export default function ClosingCallToAction({
  eyebrow = 'Plan Your Visit · Sillari Gate',
  title = 'Plan Your Stay at Go Flamingo Resort',
  description = 'Direct access to Sillari Safari Gate, private balconies, turquoise pool, and authentic regional dining. Inquire directly for seasonal dates and group retreats.',
  primaryBtnLabel = 'Check Availability & Book',
  primaryBtnTo = '/contact?book=true#reservation-form-card',
  whatsappLabel = 'Chat on WhatsApp',
  whatsappMsg = 'Hello Go Flamingo Resort, I would like to inquire about room availability and safari booking at Sillari Gate.',
}) {
  const whatsappUrl = `${QUICK_CONTACT.whatsappUrl}?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-[#FBF8F3] text-charcoal border-t border-stone-200/80 overflow-hidden">
      
      {/* Subtle warm ambient background glow on outer section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#C5A880]/15 rounded-full blur-3xl pointer-events-none" />

      <Container size="lg" className="relative z-10">
        
        {/* Luxury Architectural Box: Radiant Champagne & Sand Gold Container */}
        <div className="relative rounded-3xl border-2 border-[#C5A880]/60 bg-gradient-to-br from-[#FAF5EC] via-[#F4ECE0] to-[#E9DEC9] p-8 sm:p-12 md:p-14 text-center shadow-[0_20px_50px_-15px_rgba(197,168,128,0.30)] overflow-hidden">

          {/* Ambient inner champagne & warm sunlight glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[520px] h-[220px] bg-[#C5A880]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-10 w-64 h-64 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />

          {/* Eyebrow Pill */}
          <div className="relative z-10 inline-flex items-center px-4 py-1 rounded-full bg-[#163824]/10 border border-[#163824]/20 text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#163824] font-bold mb-4 backdrop-blur-sm">
            <span>{eyebrow}</span>
          </div>

          {/* Headline */}
          <h2 className="relative z-10 font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-normal leading-[1.2] text-[#0E2718] mb-3.5 max-w-2xl mx-auto text-balance">
            {title}
          </h2>

          {/* Concise, Grounded Supporting Copy */}
          <p className="relative z-10 font-sans text-xs sm:text-sm md:text-base text-[#2E3C2F]/85 max-w-lg mx-auto mb-8 font-light leading-relaxed">
            {description}
          </p>

          {/* High-Intent Dual Actions */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-lg mx-auto mb-8">
            <Link
              to={primaryBtnTo}
              className="group flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 pl-5 pr-2 py-2.5 sm:py-3 rounded-full bg-[#163824] hover:bg-[#0E2718] text-white text-[11px] sm:text-xs uppercase tracking-[0.12em] font-bold shadow-[0_4px_16px_rgba(22,56,36,0.30)] hover:shadow-[0_6px_22px_rgba(22,56,36,0.45)] border border-[#163824] transition-all duration-300 w-full sm:w-auto cursor-pointer whitespace-nowrap"
            >
              <span>{primaryBtnLabel}</span>
              <span className="w-5.5 h-5.5 sm:w-6 sm:h-6 rounded-full bg-[#C5A880] text-[#0E2718] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 shrink-0 shadow-inner">
                <ArrowRight className="w-3 h-3 text-[#0E2718]" />
              </span>
            </Link>

            <a
              href={whatsappUrl}
              target={getWhatsAppTarget()}
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 rounded-full bg-white/90 hover:bg-white border-2 border-[#25D366]/70 hover:border-[#25D366] text-[11px] sm:text-xs uppercase tracking-[0.08em] sm:tracking-[0.10em] font-bold text-[#0E2718] shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.25)] transition-all duration-300 w-full sm:w-auto cursor-pointer whitespace-nowrap"
            >
              <WhatsAppIcon size="sm" className="text-[#25D366] shrink-0" />
              <span>{whatsappLabel}</span>
            </a>
          </div>

          {/* Reassurance Footer Strip with MapPin */}
          <div className="relative z-10 pt-6 border-t border-[#163824]/15 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[#2E3C2F]/80 font-normal">
            <span>
              Direct Assistance:{' '}
              <a href="tel:+919561957009" className="text-[#163824] font-bold hover:underline">
                +91 95619 57009
              </a>
            </span>
            <span className="hidden sm:inline text-[#163824]/30">·</span>
            <span>Sillari Gate, Sitapur, Pench</span>
            <span className="hidden sm:inline text-[#163824]/30">·</span>
            <span className="text-[#163824] font-semibold inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#163824]" />
              <span>Just 65 km from Nagpur via NH 44 (1 Hr)</span>
            </span>
          </div>

        </div>

      </Container>
    </section>
  );
}
