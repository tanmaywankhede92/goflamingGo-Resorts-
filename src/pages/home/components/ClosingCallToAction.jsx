import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, WhatsAppIcon } from '../../../components/common';
import { AUTHENTIC_RESORT } from '../../../data/images';
import { QUICK_CONTACT } from '../../../data/navigation';
import { cn } from '../../../utils/cn';

/**
 * ClosingCallToAction Component — High-Intent Final Conversion
 * 
 * Monumental closing chapter:
 * - Real twilight photography of the illuminated Go Flamingo Resort courtyard
 * - High-contrast editorial typography
 * - Direct availability booking and WhatsApp concierge actions
 * - Verified location and connectivity reassurance
 */
export default function ClosingCallToAction() {
  const whatsappUrl = `${QUICK_CONTACT.whatsappUrl}?text=${encodeURIComponent(
    'Hello Go Flamingo Resort, I would like to inquire about room availability and safari booking at Sillari Gate.'
  )}`;

  const twilightPhoto = AUTHENTIC_RESORT.photos.courtyardTwilight;

  return (
    <section className="relative py-28 sm:py-36 md:py-44 bg-forest-dark text-ivory overflow-hidden border-t border-sand/20">
      
      {/* Background Image & Multi-Stage Ambient Scrim */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={twilightPhoto.src}
          srcSet={twilightPhoto.srcSet}
          sizes={twilightPhoto.sizes}
          width={twilightPhoto.width}
          height={twilightPhoto.height}
          alt={twilightPhoto.alt}
          loading="lazy"
          className="w-full h-full object-cover object-center transform scale-103 opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-deep/90 to-forest-dark/85" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(181,138,69,0.18),transparent_65%)] pointer-events-none" />
      </div>

      <Container size="lg" className="relative z-10 text-center">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[2px] bg-forest-dark/80 border border-sand/30 text-[11px] sm:text-xs uppercase tracking-[0.14em] text-sand-light mb-5 backdrop-blur-xs">
          <span>Plan Your Visit · Sillari Gate</span>
        </div>

        {/* Natural Headline */}
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-snug text-ivory mb-5 max-w-3xl mx-auto text-balance">
          Plan Your Stay at Go Flamingo Resort
        </h2>

        {/* Grounded Supporting Copy */}
        <p className="font-sans text-xs sm:text-sm md:text-base text-sand-light/90 max-w-xl mx-auto mb-8 font-light leading-relaxed">
          Direct access to Sillari Safari Gate, private balconies, swimming pool, and authentic regional dining. Inquire directly for seasonal availability and group bookings.
        </p>

        {/* High-Intent Dual Actions in Studio Modular Pill Style */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <Link
            to="/book"
            className="group inline-flex items-center justify-center gap-3 pl-6 pr-2.5 py-2.5 rounded-full bg-gold text-forest-dark text-xs uppercase tracking-[0.14em] font-bold shadow-xl hover:bg-gold-light transition-all duration-300 w-full sm:w-auto"
          >
            <span>Check Availability & Book</span>
            <span className="w-8 h-8 rounded-full bg-forest-deep text-gold flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 shadow-xs shrink-0">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-sand/30 text-ivory text-xs uppercase tracking-[0.14em] font-semibold backdrop-blur-xs transition-colors w-full sm:w-auto"
          >
            <WhatsAppIcon size="sm" className="text-[#25D366] shrink-0" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Reassurance Footer Strip with Correct 65 km Distance */}
        <div className="mt-12 pt-8 border-t border-sand/15 flex flex-wrap items-center justify-center gap-6 text-xs text-sand/80 font-light">
          <span>
            Direct Assistance:{' '}
            <a href="tel:+919561957009" className="text-ivory font-medium hover:text-gold transition-colors">
              +91 95619 57009
            </a>
          </span>
          <span className="hidden sm:inline">·</span>
          <span>Location: Sillari Gate, Sitapur, Maharashtra</span>
          <span className="hidden sm:inline">·</span>
          <span className="text-gold-light font-medium">📍 Just 65 km from Nagpur via NH 44 (1 Hr Drive)</span>
        </div>

      </Container>
    </section>
  );
}
