import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Heading, Text, SectionEyebrow, Button, Badge, WhatsAppIcon } from '../common';
import { cn } from '../../utils/cn';
import { getWhatsAppTarget } from '../../utils/whatsapp';

/**
 * Universal action button renderer supporting internal router links,
 * external safe URLs, and native mobile WhatsApp app triggers without duplicate tabs.
 */
function renderHeroAction(act, idx, defaultVariant = 'gold', size = 'md') {
  const isHref = Boolean(act.href);
  const isWhatsApp = isHref && act.href.includes('wa.me');
  const Component = act.to ? Link : isHref ? 'a' : 'button';
  const target = act.target || (isWhatsApp ? getWhatsAppTarget() : isHref ? '_blank' : undefined);
  const rel = isHref ? 'noopener noreferrer' : undefined;

  return (
    <Button
      key={idx}
      as={Component}
      to={act.to}
      href={act.href}
      target={target}
      rel={rel}
      variant={act.variant || (idx === 0 ? defaultVariant : 'inverted')}
      size={size}
      onClick={act.onClick}
      className={cn(
        'w-full sm:w-auto justify-center font-bold tracking-wider text-center flex items-center gap-2 shadow-md',
        act.hideOnMobile && 'hidden sm:inline-flex'
      )}
    >
      {isWhatsApp && <WhatsAppIcon size="sm" className="text-[#25D366] shrink-0" />}
      <span>{act.label}</span>
    </Button>
  );
}

/**
 * Reusable PageHero System — Mobile & Responsive Refinement
 * 
 * Supports 5 distinct variants with strict mobile CTA hierarchy:
 * 1. 'cinematic' - Full-screen 92-100dvh hero with dark overlay & protected contrast
 * 2. 'large'     - Rich landscape image hero with horizontal dark gradient scrim
 * 3. 'split'     - Asymmetric editorial split: narrative on left, visual on right
 * 4. 'dark'      - Deep forest immersive hero with mood lighting for wildlife/safari
 * 5. 'minimal'   - Restrained, typography-forward hero for booking, contact, policy
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
  // 1. CINEMATIC HERO (BREATHABLE & LUXURIOUS)
  if (variant === 'cinematic') {
    return (
      <section className={cn('relative w-full min-h-[460px] sm:min-h-[520px] lg:min-h-[560px] flex items-center pt-28 sm:pt-36 md:pt-40 pb-14 sm:pb-20 overflow-hidden bg-forest-dark text-ivory', className)}>
        {/* Background Image with Natural Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src={image}
            alt={imageAlt}
            fetchPriority="high"
            loading="eager"
            className="w-full h-full object-cover object-center filter brightness-[0.96] contrast-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/95 via-forest-deep/60 to-forest-dark/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/90 via-forest-dark/45 to-transparent sm:block hidden" />
        </div>

        {/* Foreground Content */}
        <Container size="xl" className="relative z-10 w-full">
          <div className="max-w-2xl">
            {eyebrow && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 border border-[#C5A880]/40 text-[#DFBF8E] text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase mb-4 backdrop-blur-md">
                <span>{eyebrow}</span>
              </div>
            )}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-serif text-ivory font-normal tracking-tight leading-[1.14] mb-3.5 text-balance">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xs sm:text-sm md:text-base text-sand-light/90 leading-relaxed font-light mb-7 max-w-xl">
                {subtitle}
              </p>
            )}

            {/* Clean CTA Group */}
            {actions.length > 0 && (
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
                {actions.map((act, idx) => renderHeroAction(act, idx, 'gold', 'md'))}
              </div>
            )}
          </div>
        </Container>

        {children}
      </section>
    );
  }

  // 2. LARGE IMAGE HERO (Major Section Landings: Dining, Packages, Resort)
  if (variant === 'large') {
    return (
      <section className={cn('relative w-full min-h-[420px] sm:min-h-[480px] flex items-center pt-28 sm:pt-36 pb-14 sm:pb-18 overflow-hidden bg-forest-dark text-ivory', className)}>
        <div className="absolute inset-0 z-0">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover object-center filter brightness-[0.96] contrast-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/95 via-forest-deep/65 to-forest-dark/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/90 via-forest-dark/45 to-transparent sm:block hidden" />
        </div>

        <Container size="xl" className="relative z-10 w-full">
          <div className="max-w-2xl">
            {eyebrow && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 border border-[#C5A880]/40 text-[#DFBF8E] text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase mb-4 backdrop-blur-md">
                <span>{eyebrow}</span>
              </div>
            )}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-ivory font-normal tracking-tight leading-[1.14] mb-3.5 text-balance">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xs sm:text-sm md:text-base text-sand-light/90 leading-relaxed font-light mb-7 max-w-xl">
                {subtitle}
              </p>
            )}

            {/* Clean CTA Group */}
            {actions.length > 0 && (
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
                {actions.map((act, idx) => renderHeroAction(act, idx, 'gold', 'md'))}
              </div>
            )}
          </div>
        </Container>
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
              {eyebrow && (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#163824]/8 border border-[#163824]/15 text-[#163824] text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase mb-4">
                  <span>{eyebrow}</span>
                </div>
              )}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#0E2718] font-normal leading-[1.14] mb-3.5">
                {title}
              </h1>
              {subtitle && (
                <p className="text-xs sm:text-sm md:text-base text-charcoal/80 font-light leading-relaxed mb-6 max-w-xl">
                  {subtitle}
                </p>
              )}

              {/* Clean CTA Group */}
              {actions.length > 0 && (
                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  {actions.map((act, idx) => renderHeroAction(act, idx, 'primary', 'md'))}
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
      <section className={cn('relative w-full min-h-[420px] sm:min-h-[480px] flex items-center pt-28 sm:pt-36 pb-14 sm:pb-18 bg-forest-dark text-ivory overflow-hidden', className)}>
        {image && (
          <div className="absolute inset-0 z-0">
            <img
              src={image}
              alt={imageAlt}
              className="w-full h-full object-cover object-center filter brightness-[0.96] contrast-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/95 via-forest-deep/65 to-forest-dark/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/90 via-forest-dark/45 to-transparent sm:block hidden" />
          </div>
        )}

        <Container size="xl" className="relative z-10 w-full">
          <div className="max-w-2xl">
            {eyebrow && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 border border-[#C5A880]/40 text-[#DFBF8E] text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase mb-4 backdrop-blur-md">
                <span>{eyebrow}</span>
              </div>
            )}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-ivory font-normal tracking-tight leading-[1.14] mb-3.5 text-balance">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xs sm:text-sm md:text-base text-sand-light/90 leading-relaxed font-light mb-7 max-w-xl">
                {subtitle}
              </p>
            )}

            {/* Clean CTA Group */}
            {actions.length > 0 && (
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
                {actions.map((act, idx) => renderHeroAction(act, idx, 'gold', 'md'))}
              </div>
            )}
          </div>
        </Container>
      </section>
    );
  }

  // 5. MINIMAL PAGE HERO (Clean & Luminous: Booking, Policies)
  return (
    <section className={cn('w-full pt-28 sm:pt-36 pb-10 sm:pb-14 bg-gradient-to-b from-[#F5EFE6] via-[#FAF6F1] to-[#FAF8F5] text-charcoal border-b border-[#E5DAC7]', className)}>
      <Container size="xl">
        <div className="max-w-2xl">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#163824]/8 border border-[#163824]/15 text-[#163824] text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase mb-4">
              <span>{eyebrow}</span>
            </div>
          )}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#0E2718] font-normal leading-[1.14] mb-3.5">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xs sm:text-sm md:text-base text-charcoal/80 font-light leading-relaxed max-w-xl">
              {subtitle}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
