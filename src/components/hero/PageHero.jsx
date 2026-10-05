import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Heading, Text, SectionEyebrow, Button, Badge } from '../common';
import { cn } from '../../utils/cn';

/**
 * Reusable PageHero System
 * 
 * Supports 5 distinct variants:
 * 1. 'cinematic' - Full-screen 100dvh hero with dark overlay & subtle zoom
 * 2. 'large'     - Rich 60-70vh landscape image hero for major landing pages
 * 3. 'split'     - Asymmetric editorial split: image on one side, storytelling on other
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
  // 1. FULL-SCREEN CINEMATIC HERO
  if (variant === 'cinematic') {
    return (
      <section className={cn('relative w-full h-[92dvh] min-h-[620px] flex items-end pb-16 md:pb-24 overflow-hidden bg-forest-dark text-ivory', className)}>
        {/* Background Image with Cinematic Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-deep/60 to-forest-dark/40" />
        </div>

        {/* Foreground Content */}
        <Container size="xl" className="relative z-10 w-full">
          <div className="max-w-3xl">
            {badge && (
              <div className="mb-4">
                <Badge variant="gold">{badge}</Badge>
              </div>
            )}
            {eyebrow && (
              <SectionEyebrow color="gold" withLine className="mb-4 text-gold-light">
                {eyebrow}
              </SectionEyebrow>
            )}
            <Heading as="h1" variant="hero" font="serif" className="text-ivory mb-6 leading-[1.08]">
              {title}
            </Heading>
            {subtitle && (
              <Text variant="lead" className="text-sand-light/90 mb-8 max-w-2xl font-light">
                {subtitle}
              </Text>
            )}

            {actions.length > 0 && (
              <div className="flex flex-wrap items-center gap-4">
                {actions.map((act, idx) => (
                  <Button
                    key={idx}
                    as={act.to ? Link : 'button'}
                    to={act.to}
                    variant={act.variant || (idx === 0 ? 'gold' : 'inverted')}
                    size="lg"
                    onClick={act.onClick}
                  >
                    {act.label}
                  </Button>
                ))}
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
      <section className={cn('relative w-full min-h-[500px] md:min-h-[580px] flex items-center py-20 overflow-hidden bg-forest-deep text-ivory', className)}>
        <div className="absolute inset-0 z-0">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/95 via-forest-deep/80 to-forest-deep/40" />
        </div>

        <Container size="xl" className="relative z-10 w-full">
          <div className="max-w-2xl">
            {breadcrumbs.length > 0 && (
              <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-sand/80 font-sans tracking-wide">
                <Link to="/" className="hover:text-gold transition-colors">Home</Link>
                {breadcrumbs.map((crumb, idx) => (
                  <React.Fragment key={idx}>
                    <span>/</span>
                    {crumb.to ? (
                      <Link to={crumb.to} className="hover:text-gold transition-colors">{crumb.label}</Link>
                    ) : (
                      <span className="text-ivory font-medium">{crumb.label}</span>
                    )}
                  </React.Fragment>
                ))}
              </nav>
            )}

            {eyebrow && (
              <SectionEyebrow color="gold" withLine className="mb-3 text-gold-light">
                {eyebrow}
              </SectionEyebrow>
            )}
            <Heading as="h1" variant="h1" font="serif" className="text-ivory mb-4">
              {title}
            </Heading>
            {subtitle && (
              <Text variant="lead" className="text-sand-light/90 mb-6 max-w-xl font-light">
                {subtitle}
              </Text>
            )}
            {actions.length > 0 && (
              <div className="flex flex-wrap items-center gap-4 pt-2">
                {actions.map((act, idx) => (
                  <Button
                    key={idx}
                    as={act.to ? Link : 'button'}
                    to={act.to}
                    variant={act.variant || (idx === 0 ? 'gold' : 'inverted')}
                    size="md"
                    onClick={act.onClick}
                  >
                    {act.label}
                  </Button>
                ))}
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
      <section className={cn('w-full py-12 md:py-20 bg-ivory text-charcoal', className)}>
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 lg:pr-6">
              {breadcrumbs.length > 0 && (
                <nav aria-label="Breadcrumb" className="mb-5 flex items-center gap-2 text-xs text-charcoal-muted font-sans tracking-wide">
                  <Link to="/" className="hover:text-terracotta transition-colors">Home</Link>
                  {breadcrumbs.map((crumb, idx) => (
                    <React.Fragment key={idx}>
                      <span>/</span>
                      {crumb.to ? (
                        <Link to={crumb.to} className="hover:text-terracotta transition-colors">{crumb.label}</Link>
                      ) : (
                        <span className="text-charcoal font-medium">{crumb.label}</span>
                      )}
                    </React.Fragment>
                  ))}
                </nav>
              )}

              {badge && (
                <div className="mb-3">
                  <Badge variant="terracotta">{badge}</Badge>
                </div>
              )}
              {eyebrow && (
                <SectionEyebrow color="terracotta" withLine className="mb-3">
                  {eyebrow}
                </SectionEyebrow>
              )}
              <Heading as="h1" variant="h1" font="serif" color="forest" className="mb-5">
                {title}
              </Heading>
              {subtitle && (
                <Text variant="lead" color="muted" className="mb-8 font-light">
                  {subtitle}
                </Text>
              )}
              {actions.length > 0 && (
                <div className="flex flex-wrap items-center gap-4">
                  {actions.map((act, idx) => (
                    <Button
                      key={idx}
                      as={act.to ? Link : 'button'}
                      to={act.to}
                      variant={act.variant || (idx === 0 ? 'primary' : 'secondary')}
                      size="md"
                      onClick={act.onClick}
                    >
                      {act.label}
                    </Button>
                  ))}
                </div>
              )}
            </div>

            {/* Right Image */}
            <div className="lg:col-span-6">
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
      <section className={cn('relative w-full py-20 md:py-28 bg-forest-deep text-ivory overflow-hidden', className)}>
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
            <div className="mb-4">
              <Badge variant="gold">{badge}</Badge>
            </div>
          )}
          {eyebrow && (
            <SectionEyebrow color="gold" withLine className="mb-4 justify-center text-gold-light">
              {eyebrow}
            </SectionEyebrow>
          )}
          <Heading as="h1" variant="h1" font="serif" className="text-ivory mb-6 max-w-3xl mx-auto">
            {title}
          </Heading>
          {subtitle && (
            <Text variant="lead" className="text-sand-light/90 max-w-2xl mx-auto mb-8 font-light">
              {subtitle}
            </Text>
          )}
          {actions.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-4">
              {actions.map((act, idx) => (
                <Button
                  key={idx}
                  as={act.to ? Link : 'button'}
                  to={act.to}
                  variant={act.variant || (idx === 0 ? 'gold' : 'inverted')}
                  size="md"
                  onClick={act.onClick}
                >
                  {act.label}
                </Button>
              ))}
            </div>
          )}
        </Container>
      </section>
    );
  }

  // 5. MINIMAL PAGE HERO (Clean & Functional: Booking, Contact, Policies)
  return (
    <section className={cn('w-full py-14 md:py-20 bg-ivory-warm/60 border-b border-sand/40 text-charcoal', className)}>
      <Container size="xl">
        <div className="max-w-2xl">
          {breadcrumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-xs text-charcoal-muted font-sans tracking-wide">
              <Link to="/" className="hover:text-terracotta transition-colors">Home</Link>
              {breadcrumbs.map((crumb, idx) => (
                <React.Fragment key={idx}>
                  <span>/</span>
                  {crumb.to ? (
                    <Link to={crumb.to} className="hover:text-terracotta transition-colors">{crumb.label}</Link>
                  ) : (
                    <span className="text-charcoal font-medium">{crumb.label}</span>
                  )}
                </React.Fragment>
              ))}
            </nav>
          )}

          {eyebrow && (
            <SectionEyebrow color="terracotta" withLine className="mb-3">
              {eyebrow}
            </SectionEyebrow>
          )}
          <Heading as="h1" variant="h1" font="serif" color="forest" className="mb-4">
            {title}
          </Heading>
          {subtitle && (
            <Text variant="lead" color="muted" className="font-light">
              {subtitle}
            </Text>
          )}
        </div>
      </Container>
    </section>
  );
}
