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
  // Height-driven sizing for headers so the logo NEVER clips or pushes navbar height.
  // Enlarged sizing for prominent brand visibility
  const imageSizeClasses = {
    header: 'h-[40px] min-[380px]:h-[45px] sm:h-[48px] lg:h-[54px] w-auto max-w-[170px] sm:max-w-[200px] lg:max-w-[235px]',
    mobile: 'h-[40px] sm:h-[44px] w-auto max-w-[165px]',
    footer: 'w-[220px] sm:w-[250px] lg:w-[275px] h-auto',
    hero: 'w-[180px] sm:w-[220px] h-auto',
    standalone: 'w-[200px] h-auto',
  }[variant] || 'h-[45px] w-auto';

  // Normalized container sizing so navbar height NEVER jumps between themes
  // On dark backgrounds, an elegant warm ivory pill ensures black typography stays 100% visible
  const containerThemeClasses = theme === 'dark'
    ? 'bg-ivory-pure/95 px-2.5 py-0.5 rounded-[4px] shadow-xs border border-sand/30 inline-flex items-center justify-center transition-all duration-200'
    : 'inline-flex items-center justify-center px-1.5 py-0.5 border border-transparent transition-all duration-200';

  const logoImage = (
    <picture className={cn('inline-flex items-center justify-center leading-none', className)}>
      <source srcSet="/assets/logo/go-flamingo-logo-trimmed.webp" type="image/webp" />
      <img
        src="/assets/logo/go-flamingo-logo-trimmed.png"
        alt="Go Flamingo Resorts – Pench, Sillari Gate"
        width={810}
        height={302}
        className={cn(
          'object-contain block select-none shrink-0',
          imageSizeClasses,
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
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-[4px] transition-transform duration-200 hover:opacity-95 shrink-0',
          containerThemeClasses
        )}
      >
        {logoImage}
      </Link>
    );
  }

  return (
    <div className={cn('shrink-0', containerThemeClasses)}>
      {logoImage}
    </div>
  );
}
