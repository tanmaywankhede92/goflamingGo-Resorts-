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
  // 1. FULL-SCREEN CINEMATIC HERO (Home)
  if (variant === 'cinematic') {
    return (
      <section className={cn('relative w-full h-[92dvh] min-h-[580px] sm:min-h-[620px] flex items-end pb-14 sm:pb-16 md:pb-24 overflow-hidden bg-forest-dark text-ivory', className)}>
        {/* Background Image with Cinematic Protection Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src={image}
            alt={imageAlt}
            fetchPriority="high"
            loading="eager"
            className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000"
          />
          {/* Multi-stage gradient ensures text & buttons are 100% readable while maintaining photo beauty */}
          <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-deep/70 to-forest-dark/45" />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/85 via-forest-dark/40 to-transparent sm:block hidden" />
        </div>

        {/* Foreground Content */}
        <Container size="xl" className="relative z-10 w-full">
          <div className="max-w-3xl">
            {badge && (
              <div className="mb-3 sm:mb-4">
                <Badge variant="gold">{badge}</Badge>
              </div>
            )}
            {eyebrow && (
              <SectionEyebrow color="gold" withLine className="mb-3 sm:mb-4 text-gold-light">
                {eyebrow}
              </SectionEyebrow>
            )}
            <Heading as="h1" variant="hero" font="serif" className="text-ivory mb-4 sm:mb-6 leading-[1.08]">
              {title}
            </Heading>
            {subtitle && (
              <Text variant="lead" className="text-sand-light/95 mb-6 sm:mb-8 max-w-2xl font-light text-sm sm:text-base md:text-lg leading-relaxed">
                {subtitle}
              </Text>
            )}

            {/* Mobile-Optimized CTA Group */}
            {actions.length > 0 && (
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
                {actions.map((act, idx) => renderHeroAction(act, idx, 'gold', 'lg'))}
              </div>
            )}
          </div>
        </Container>

        {children}
      </section>
    );
  }

  // 2. LARGE IMAGE HERO (Major Section Landings: Rooms, Dining, Weddings)
  if (variant === 'large') {
    return (
      <section className={cn('relative w-full min-h-[460px] sm:min-h-[500px] md:min-h-[560px] flex items-center pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 overflow-hidden bg-forest-deep text-ivory', className)}>
        <div className="absolute inset-0 z-0">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover object-center"
          />
          {/* Protective gradient scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/95 via-forest-deep/80 to-forest-dark/60 sm:bg-gradient-to-r sm:from-forest-dark/95 sm:via-forest-deep/85 sm:to-forest-deep/40" />
        </div>

        <Container size="xl" className="relative z-10 w-full">
          <div className="max-w-2xl">


            {badge && (
              <div className="mb-3">
                <Badge variant="gold">{badge}</Badge>
              </div>
            )}
            {eyebrow && (
              <SectionEyebrow color="gold" withLine className="mb-2.5 sm:mb-3 text-gold-light">
                {eyebrow}
              </SectionEyebrow>
            )}
            <Heading as="h1" variant="h1" font="serif" className="text-ivory mb-3 sm:mb-4 leading-tight">
              {title}
            </Heading>
            {subtitle && (
              <Text variant="lead" className="text-sand-light/95 mb-5 sm:mb-6 max-w-xl font-light text-sm sm:text-base leading-relaxed">
                {subtitle}
              </Text>
            )}

            {/* Mobile-Optimized CTA Group */}
            {actions.length > 0 && (
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
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
      <section className={cn('w-full pt-24 sm:pt-28 md:pt-32 pb-10 sm:pb-14 md:pb-20 bg-ivory text-charcoal', className)}>
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 lg:pr-6">


              {badge && (
                <div className="mb-3">
                  <Badge variant="terracotta">{badge}</Badge>
                </div>
              )}
              {eyebrow && (
                <SectionEyebrow color="terracotta" withLine className="mb-2.5 sm:mb-3">
                  {eyebrow}
                </SectionEyebrow>
              )}
              <Heading as="h1" variant="h1" font="serif" color="forest" className="mb-4 sm:mb-5 leading-tight">
                {title}
              </Heading>
              {subtitle && (
                <Text variant="lead" color="muted" className="mb-6 sm:mb-8 font-light text-sm sm:text-base leading-relaxed">
                  {subtitle}
                </Text>
              )}

              {/* Mobile-Optimized CTA Group */}
              {actions.length > 0 && (
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                  {actions.map((act, idx) => renderHeroAction(act, idx, 'primary', 'md'))}
                </div>
              )}
            </div>

            {/* Right Image */}
            <div className="lg:col-span-6 mt-4 lg:mt-0">
              <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-[4px] shadow-sm">
                <img
                  src={image}
                  alt={imageAlt}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-charcoal/10" />
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
      <section className={cn('relative w-full pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-28 bg-forest-deep text-ivory overflow-hidden', className)}>
        {image && (
          <div className="absolute inset-0 z-0 opacity-25">
            <img
              src={image}
              alt={imageAlt}
              className="w-full h-full object-cover object-center"
            />
          </div>
        )}
        <div className="absolute inset-0 bg-radial from-forest-jungle/40 via-forest-deep/90 to-forest-dark" />

        <Container size="lg" className="relative z-10 text-center">
          {badge && (
            <div className="mb-3 sm:mb-4">
              <Badge variant="gold">{badge}</Badge>
            </div>
          )}
          {eyebrow && (
            <SectionEyebrow color="gold" withLine className="mb-3 sm:mb-4 justify-center text-gold-light">
              {eyebrow}
            </SectionEyebrow>
          )}
          <Heading as="h1" variant="h1" font="serif" className="text-ivory mb-4 sm:mb-6 max-w-3xl mx-auto leading-tight">
            {title}
          </Heading>
          {subtitle && (
            <Text variant="lead" className="text-sand-light/95 max-w-2xl mx-auto mb-6 sm:mb-8 font-light text-sm sm:text-base leading-relaxed">
              {subtitle}
            </Text>
          )}

          {/* Mobile-Optimized CTA Group */}
          {actions.length > 0 && (
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto w-full">
              {actions.map((act, idx) => renderHeroAction(act, idx, 'gold', 'md'))}
            </div>
          )}
        </Container>
      </section>
    );
  }

  // 5. MINIMAL PAGE HERO (Clean & Functional: Booking, Contact, Policies)
  return (
    <section className={cn('w-full pt-24 sm:pt-28 md:pt-32 pb-12 sm:py-16 md:py-20 bg-ivory-warm/60 border-b border-sand/40 text-charcoal', className)}>
      <Container size="xl">
        <div className="max-w-2xl">


          {eyebrow && (
            <SectionEyebrow color="terracotta" withLine className="mb-2 sm:mb-3">
              {eyebrow}
            </SectionEyebrow>
          )}
          <Heading as="h1" variant="h1" font="serif" color="forest" className="mb-3 sm:mb-4 leading-tight">
            {title}
          </Heading>
          {subtitle && (
            <Text variant="lead" color="muted" className="font-light text-sm sm:text-base leading-relaxed">
              {subtitle}
            </Text>
          )}
        </div>
      </Container>
    </section>
  );
}
