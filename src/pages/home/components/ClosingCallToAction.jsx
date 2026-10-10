import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, WhatsAppIcon } from '../../../components/common';
import { IMAGES } from '../../../data/images';
import { QUICK_CONTACT } from '../../../data/navigation';
import { cn } from '../../../utils/cn';

/**
 * ClosingCallToAction Component
 * 
 * High-impact, full-width closing chapter:
 * - Confident, editorial typography inspired by NOTH
 * - Ambient resort photography with deep cinematic scrims
 * - Clear, high-intent booking & WhatsApp enquiry actions
 * - Seamless visual transition into the global footer
 */
export default function ClosingCallToAction() {
  const whatsappUrl = `${QUICK_CONTACT.whatsappUrl}?text=${encodeURIComponent(
    'Hello Go Flamingo Resort, I would like to inquire about room availability and safari booking at Sillari Gate.'
  )}`;

  return (
    <section className="relative py-28 sm:py-36 md:py-44 bg-forest-dark text-ivory overflow-hidden border-t border-sand/20">
      
      {/* Background Image & Multi-Stage Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.home.resort}
          alt="Go Flamingo Resort illuminated in forest twilight at Sillari, Pench"
          loading="lazy"
          className="w-full h-full object-cover object-center transform scale-103"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-deep/90 to-forest-dark/85" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(181,138,69,0.18),transparent_65%)] pointer-events-none" />
      </div>

      <Container size="lg" className="relative z-10 text-center">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[3px] bg-forest-deep/80 border border-sand/30 text-[10px] sm:text-xs uppercase tracking-[0.22em] text-gold-light mb-6 backdrop-blur-xs">
          <span>✦</span>
          <span>Begin Your Pench Story</span>
          <span>✦</span>
        </div>

        {/* Monumental Serif Statement */}
        <h2 className="font-serif text-[clamp(2.5rem,6vw,5.5rem)] font-normal leading-[1.06] tracking-[-0.02em] text-ivory mb-6 max-w-4xl mx-auto text-balance">
          The forest does not rush.{' '}
          <br />
          <span className="italic font-normal text-gold-light">
            Neither should you.
          </span>
        </h2>

        {/* Restrained Supporting Copy */}
        <p className="font-sans text-xs sm:text-sm md:text-base text-sand/85 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Reserve your standalone cottage at Go Flamingo Resort, Pench — Sillari Gate. Direct safari access, natural stone pool, wholesome regional dining, and genuine warmth.
        </p>

        {/* High-Intent Dual Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <Button
            as={Link}
            to="/book"
            variant="gold"
            size="lg"
            className="w-full sm:w-auto font-bold tracking-[0.14em] text-xs uppercase px-9 py-4 shadow-xl"
          >
            Check Availability & Book
          </Button>

          <Button
            as="a"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="inverted"
            size="lg"
            className="w-full sm:w-auto font-semibold tracking-[0.14em] text-xs uppercase px-8 py-4 flex items-center justify-center gap-2.5"
          >
            <WhatsAppIcon size="sm" className="text-[#25D366] shrink-0" />
            <span>Chat on WhatsApp</span>
          </Button>
        </div>

        {/* Reassurance Footer Strip */}
        <div className="mt-12 pt-8 border-t border-sand/15 flex flex-wrap items-center justify-center gap-6 text-xs text-sand/70 font-light">
          <span>
            Direct Assistance:{' '}
            <a href="tel:+919561957009" className="text-ivory font-medium hover:text-gold transition-colors">
              +91 95619 57009
            </a>
          </span>
          <span className="hidden sm:inline">·</span>
          <span>Location: Sillari Gate, Sitapur, Maharashtra</span>
          <span className="hidden sm:inline">·</span>
          <span>~85 km from Nagpur via NH 44</span>
        </div>

      </Container>
    </section>
  );
}
