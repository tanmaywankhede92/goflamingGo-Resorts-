import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

/**
 * Official Go Flamingo Resorts Logo Component
 * 
 * Strict Brand Integrity:
 * - Uses the official supplied logo artwork
 * - Automatically selects the clean light/white variant for dark backgrounds
 *   and original variant for light backgrounds with zero awkward container boxes
 * - Preserves exact artwork, typography, and proportions
 * - Responsive sizing (desktop, mobile, footer)
 * 
 * @param {'header' | 'footer' | 'mobile' | 'hero' | 'standalone'} variant
 * @param {'light' | 'dark' | 'auto'} theme - Context background (default 'dark' for luxury forest navbar)
 * @param {boolean} asLink - Whether to wrap in a Link to home
 * @param {string} className - Additional container styling
 */
export default function Logo({
  variant = 'header',
  theme = 'dark',
  asLink = true,
  className = '',
  imgClassName = '',
}) {
  // Height-driven sizing so the logo fits elegantly in the navbar without layout shift
  const imageSizeClasses = {
    header: 'h-[38px] sm:h-[44px] lg:h-[48px] w-auto max-w-[170px] sm:max-w-[200px] lg:max-w-[225px]',
    mobile: 'h-[36px] sm:h-[40px] w-auto max-w-[160px]',
    footer: 'w-[200px] sm:w-[230px] lg:w-[250px] h-auto',
    hero: 'w-[180px] sm:w-[210px] h-auto',
    standalone: 'w-[190px] h-auto',
  }[variant] || 'h-[44px] w-auto';

  // Choose appropriate logo asset based on theme
  const isDarkBg = theme === 'dark';
  const logoSrcWebp = isDarkBg
    ? '/assets/logo/go-flamingo-logo-white.webp'
    : '/assets/logo/go-flamingo-logo-trimmed.webp';
  const logoSrcPng = isDarkBg
    ? '/assets/logo/go-flamingo-logo-white.png'
    : '/assets/logo/go-flamingo-logo-trimmed.png';

  const logoImage = (
    <picture className={cn('inline-flex items-center justify-center leading-none', className)}>
      <source srcSet={logoSrcWebp} type="image/webp" />
      <img
        src={logoSrcPng}
        alt="Go Flamingo Resorts – Pench, Sillari Gate"
        width={810}
        height={302}
        className={cn(
          'object-contain block select-none shrink-0 transition-opacity duration-200',
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
        className="inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-[3px] transition-transform duration-200 hover:opacity-95 shrink-0"
      >
        {logoImage}
      </Link>
    );
  }

  return (
    <div className="inline-flex items-center justify-center shrink-0">
      {logoImage}
    </div>
  );
}
