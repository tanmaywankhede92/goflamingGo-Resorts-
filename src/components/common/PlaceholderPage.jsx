import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../hero/PageHero';
import { Container, Heading, Text, SectionEyebrow, Button, Badge } from './index';

/**
 * PlaceholderPage Component
 * 
 * Standardized, visually rich architectural placeholder for all multi-page routes.
 * Combines authentic PageHero variants, breadcrumbs, thematic highlights,
 * cluster sub-navigation, and high-conversion reservation cues.
 */
export default function PlaceholderPage({
  title,
  eyebrow,
  subtitle,
  heroVariant = 'large',
  heroImage,
  breadcrumbs = [],
  badge,
  highlights = [],
  relatedRoutes = [],
  actionLabel = 'Enquire for Your Stay',
  actionTo = '/book',
}) {
  return (
    <div className="w-full">
      {/* Dynamic Page Hero */}
      <PageHero
        variant={heroVariant}
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
        image={heroImage}
        badge={badge}
        breadcrumbs={breadcrumbs}
        actions={[
          { label: 'Book Your Stay', to: '/book', variant: 'gold' },
          { label: 'Contact Team', to: '/contact', variant: 'inverted' },
        ]}
      />

      {/* Thematic Content Overview & Highlights */}
      <section className="py-16 md:py-24 bg-ivory text-charcoal">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            
            {/* Overview & Highlights (8 cols) */}
            <div className="lg:col-span-8 space-y-10">
              <div>
                <SectionEyebrow color="terracotta" withLine className="mb-3">
                  Destination Overview
                </SectionEyebrow>
                <Heading as="h2" variant="h2" font="serif" color="forest" className="mb-4">
                  {title}
                </Heading>
                <Text variant="lead" color="muted" className="font-light max-w-2xl">
                  {subtitle}
                </Text>
              </div>

              {highlights.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-[3px] bg-sand-light/50 border border-sand/30 flex items-start gap-3"
                    >
                      <span className="text-terracotta text-lg font-serif">✦</span>
                      <div>
                        <h4 className="font-serif text-base text-forest font-medium mb-1">
                          {item.title}
                        </h4>
                        <p className="text-xs text-charcoal-muted leading-relaxed font-light">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Status Note adhering to Business Accuracy */}
              <div className="p-6 rounded-[3px] bg-sand-light/40 border border-sand/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <Badge variant="forest" className="mb-2">Phase 2 Architectural Foundation</Badge>
                  <p className="text-xs text-charcoal-muted font-light leading-relaxed">
                    This dedicated destination page is fully routed and ready. Full editorial photography and verified resort details will be integrated in subsequent phases.
                  </p>
                </div>
                <Button as={Link} to={actionTo} variant="primary" size="sm" className="whitespace-nowrap">
                  {actionLabel}
                </Button>
              </div>
            </div>

            {/* Sub-Route Navigation Cluster (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              {relatedRoutes.length > 0 && (
                <div className="p-6 rounded-[3px] bg-forest-dark text-ivory border border-sand/20">
                  <span className="text-[0.7rem] uppercase tracking-editorial text-gold font-semibold block mb-4">
                    In This Section
                  </span>
                  <ul className="space-y-2.5">
                    {relatedRoutes.map((route, idx) => (
                      <li key={idx}>
                        <Link
                          to={route.path}
                          className="group flex items-center justify-between py-2 text-sm text-sand-light hover:text-gold transition-colors border-b border-sand/10"
                        >
                          <span>{route.label}</span>
                          <span className="text-xs opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Quick Trip Planning Box */}
              <div className="p-6 rounded-[3px] bg-ivory-warm/70 border border-sand/60">
                <span className="text-[0.7rem] uppercase tracking-wider text-terracotta font-semibold block mb-2">
                  Pench Trip Planning
                </span>
                <p className="text-xs text-charcoal-muted font-light leading-relaxed mb-4">
                  Sillari Gate is the most convenient entry into Pench Tiger Reserve from Nagpur (~85 km). Inquire early for safari permits.
                </p>
                <div className="flex flex-col gap-2">
                  <Button as={Link} to="/book" variant="gold" size="sm" className="w-full justify-center">
                    Check Availability
                  </Button>
                  <Button as={Link} to="/pench/safari-guide" variant="secondary" size="sm" className="w-full justify-center">
                    Safari Permit Guide
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>
    </div>
  );
}
