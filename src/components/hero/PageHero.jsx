import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Heading, Text, SectionEyebrow, Button, Badge, WhatsAppIcon } from '../common';
import { cn } from '../../utils/cn';
import { getWhatsAppTarget } from '../../utils/whatsapp';

/**
 * Universal action button renderer supporting internal router links,
 * external safe URLs, and native mobile WhatsApp app triggers without duplicate tabs.
 * Styled with classic 5-star heritage resort aesthetics.
 */
function renderHeroAction(act, idx, defaultVariant = 'gold') {
  const isHref = Boolean(act.href);
  const isWhatsApp = isHref && act.href.includes('wa.me');
  const Component = act.to ? Link : isHref ? 'a' : 'button';
  const target = act.target || (isWhatsApp ? getWhatsAppTarget() : isHref ? '_blank' : undefined);
  const rel = isHref ? 'noopener noreferrer' : undefined;

  if (isWhatsApp) {
    return (
      <a
        key={idx}
        href={act.href}
        target={target}
        rel={rel}
        onClick={act.onClick}
        className={cn(
          'hidden sm:inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-[#25D366]/40 text-xs font-medium uppercase tracking-[0.14em] backdrop-blur-sm transition-all duration-300 shadow-sm cursor-pointer whitespace-nowrap'
        )}
      >
        <WhatsAppIcon size="sm" className="text-[#25D366] shrink-0" />
        <span>{act.label}</span>
      </a>
    );
  }

  const isPrimary = act.variant === 'gold' || act.variant === 'primary' || (idx === 0 && act.variant !== 'inverted' && act.variant !== 'secondary');

  return (
    <Component
      key={idx}
      to={act.to}
      href={act.href}
      target={target}
      rel={rel}
      onClick={act.onClick}
      className={cn(
        'w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.14em] transition-all duration-300 cursor-pointer whitespace-nowrap shadow-md text-center',
        isPrimary
          ? 'bg-[#DFBF8E] hover:bg-[#E8CA9E] text-[#0E2718] font-semibold shadow-lg hover:shadow-xl'
          : 'bg-white/10 hover:bg-white/20 text-white border border-white/30 font-medium backdrop-blur-sm hover:border-white/50',
        act.hideOnMobile && 'hidden sm:inline-flex'
      )}
    >
      <span>{act.label}</span>
    </Component>
  );
}

/**
 * Reusable PageHero System — Authentic Luxury Indian Heritage Architecture
 * 
 * Supports responsive variants with refined editorial typography and rich photography:
 * 1. 'cinematic' & 'large' - Full-bleed authentic photography with architectural dark scrim
 * 2. 'dark'                - Immersive twilight mood with teak canopy backdrops
 * 3. 'split'               - Refined editorial presentation
 * 4. 'minimal'             - Elegant light haveli palette for policy / informational pages
 */
export default function PageHero({
  variant = 'large',
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt = 'Go Flamingo Resort, Pench',
  badge,
  actions = [],
  breadcrumbs = [],
  className = '',
  children,
}) {
  // 1 & 2. CINEMATIC & LARGE HERO (GRAND FULL-BLEED PHOTOGRAPHY BANNER)
  if (variant === 'cinematic' || variant === 'large') {
    return (
      <section className={cn('relative w-full min-h-[520px] sm:min-h-[580px] lg:min-h-[620px] flex flex-col justify-end bg-forest-dark text-ivory overflow-hidden', className)}>
        {/* Full-Bleed Background Image */}
        {image && (
          <div className="absolute inset-0 z-0">
            <img
              src={image}
              alt={imageAlt}
              fetchPriority="high"
              loading="eager"
              className="w-full h-full object-cover object-[center_top] sm:object-center filter brightness-[0.96] contrast-[1.03]"
            />
            {/* Subtle architectural gradient scrims */}
            <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-deep/60 to-forest-dark/25" />
            <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/90 via-forest-dark/40 to-transparent sm:block hidden" />
          </div>
        )}

        {/* Foreground Content */}
        <Container size="xl" className="relative z-10 w-full pt-28 sm:pt-36 md:pt-40 pb-12 sm:pb-16 px-5 sm:px-8 md:px-12 lg:px-16">
          <div className="max-w-3xl space-y-3 sm:space-y-4">

            {/* Majestic Royal Serif Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-ivory font-normal tracking-tight leading-[1.12] text-balance">
              {title}
            </h1>

            {/* Warm Hospitality Subtitle */}
            {subtitle && (
              <p className="text-xs sm:text-base md:text-lg text-sand-light/95 leading-relaxed font-light max-w-2xl">
                {subtitle}
              </p>
            )}

            {/* Clean Luxury CTA Group */}
            {actions.length > 0 && (
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
                {actions.map((act, idx) => renderHeroAction(act, idx, 'gold'))}
              </div>
            )}
          </div>
        </Container>

        {children}
      </section>
    );
  }

  // 3. SPLIT EDITORIAL HERO (Asymmetric: Narrative on Left, Visual on Right)
  if (variant === 'split') {
    return (
      <section className={cn('w-full pt-28 sm:pt-36 pb-12 sm:pb-16 bg-[#FAF8F5] text-charcoal border-b border-stone-200/80', className)}>
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 lg:pr-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#0E2718] font-normal leading-[1.14] mb-3.5">
                {title}
              </h1>
              {subtitle && (
                <p className="text-xs sm:text-sm md:text-base text-charcoal/80 font-light leading-relaxed mb-6 max-w-xl">
                  {subtitle}
                </p>
              )}

              {actions.length > 0 && (
                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  {actions.map((act, idx) => renderHeroAction(act, idx, 'primary'))}
                </div>
              )}
            </div>

            {/* Right Image */}
            <div className="lg:col-span-6 mt-4 lg:mt-0">
              <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-2xl shadow-md border-2 border-white">
                <img
                  src={image}
                  alt={imageAlt}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  // 4. DARK IMMERSIVE HERO (Deep Forest / Safari / Wildlife Mood)
  if (variant === 'dark') {
    return (
      <section className={cn('relative w-full min-h-[520px] sm:min-h-[580px] lg:min-h-[620px] flex flex-col justify-end bg-forest-dark text-ivory overflow-hidden', className)}>
        {image && (
          <div className="absolute inset-0 z-0">
            <img
              src={image}
              alt={imageAlt}
              className="w-full h-full object-cover object-center filter brightness-[0.96] contrast-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-deep/60 to-forest-dark/25" />
            <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/90 via-forest-dark/40 to-transparent sm:block hidden" />
          </div>
        )}

        <Container size="xl" className="relative z-10 w-full pt-28 sm:pt-36 md:pt-40 pb-12 sm:pb-16 px-5 sm:px-8 md:px-12 lg:px-16">
          <div className="max-w-3xl space-y-3 sm:space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-ivory font-normal tracking-tight leading-[1.12] text-balance">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xs sm:text-base md:text-lg text-sand-light/95 leading-relaxed font-light mb-7 max-w-2xl">
                {subtitle}
              </p>
            )}

            {actions.length > 0 && (
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
                {actions.map((act, idx) => renderHeroAction(act, idx, 'gold'))}
              </div>
            )}
          </div>
        </Container>
      </section>
    );
  }

  // 5. MINIMAL PAGE HERO (Clean & Luminous: Booking, Policies)
  return (
    <section className={cn('w-full pt-28 sm:pt-36 pb-12 sm:pb-16 bg-gradient-to-b from-[#F5EFE6] via-[#FAF6F1] to-[#FAF8F5] text-charcoal border-b border-[#E5DAC7]', className)}>
      <Container size="xl">
        <div className="max-w-3xl space-y-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#0E2718] font-normal leading-[1.14]">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xs sm:text-base text-charcoal/80 font-light leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
