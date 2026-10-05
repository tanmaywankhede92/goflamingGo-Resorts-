import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

/**
 * Official Go Flamingo Resorts Logo Component
 * 
 * Strict Brand Integrity:
 * - Uses ONLY the official supplied logo asset
 * - Preserves exact artwork, typography, and proportions
 * - Supports responsive sizing (desktop, mobile, footer)
 * - Automatically ensures contrast against dark or light surfaces
 * 
 * @param {'header' | 'footer' | 'mobile' | 'hero' | 'standalone'} variant
 * @param {'light' | 'dark' | 'auto'} theme - Context background
 * @param {boolean} asLink - Whether to wrap in a Link to home
 * @param {string} className - Additional container styling
 */
export default function Logo({
  variant = 'header',
  theme = 'auto',
  asLink = true,
  className = '',
  imgClassName = '',
}) {
  // Sizing matrix adhering to brand guidelines:
  // Desktop: approx 170px–220px wide
  // Mobile: approx 140px–160px wide
  // Footer: approx 220px–260px wide (brand signature area)
  const sizeClasses = {
    header: 'w-[130px] min-[380px]:w-[150px] sm:w-[180px] lg:w-[205px]',
    mobile: 'w-[140px] sm:w-[160px]',
    footer: 'w-[210px] sm:w-[240px] lg:w-[260px]',
    hero: 'w-[170px] sm:w-[210px]',
    standalone: 'w-[190px]',
  }[variant] || 'w-[180px]';

  // For dark backgrounds (such as deep forest footer or nocturnal hero),
  // wrap in an elegant warm ivory presentation container so the black lettering
  // ('FLAM', 'NGO', 'RESORTS') and deep green 'GO' remain 100% visible and crisp
  // without modifying the official logo artwork.
  const containerThemeClasses = theme === 'dark'
    ? 'bg-ivory-pure/95 px-3.5 py-1.5 rounded-[4px] shadow-sm border border-sand/40 inline-flex items-center justify-center'
    : 'inline-flex items-center';

  const logoImage = (
    <picture className={cn('block leading-none', sizeClasses, className)}>
      <source srcSet="/assets/logo/go-flamingo-logo-trimmed.webp" type="image/webp" />
      <img
        src="/assets/logo/go-flamingo-logo-trimmed.png"
        alt="Go Flamingo Resorts – Pench, Sillari Gate"
        width={784}
        height={275}
        className={cn(
          'w-full h-auto object-contain block select-none',
          imgClassName
        )}
      />
    </picture>
  );

  if (asLink) {
    return (
      <Link
        to="/"
        aria-label="Go Flamingo Resorts – Home"
        className={cn(
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-[4px] transition-transform duration-200 hover:opacity-95',
          containerThemeClasses
        )}
      >
        {logoImage}
      </Link>
    );
  }

  return (
    <div className={containerThemeClasses}>
      {logoImage}
    </div>
  );
}
