import React from 'react';
import { cn } from '../../../utils/cn';

/**
 * Editorial Heading Primitive
 * 
 * Pairs semantic heading levels (h1-h6) with visual typography scales,
 * serif/sans families, and editorial line-heights.
 * 
 * @param {'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p'} as
 * @param {'display' | 'h1' | 'h2' | 'h3' | 'h4'} variant
 * @param {'serif' | 'sans'} font
 * @param {'default' | 'forest' | 'sand' | 'gold'} color
 */
export default function Heading({
  as = 'h2',
  variant,
  font = 'serif',
  color = 'default',
  className = '',
  children,
  ...props
}) {
  const Component = as;

  // Resolve visual scale if not explicitly set
  const resolvedVariant = variant || (['h1', 'h2', 'h3', 'h4'].includes(as) ? as : 'h2');

  const variantStyles = {
    display: 'text-[clamp(2.75rem,6vw,5.25rem)] leading-[1.08] tracking-[-0.025em] font-light',
    h1: 'text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.12] tracking-[-0.02em] font-normal',
    h2: 'text-[clamp(1.75rem,3.2vw,2.75rem)] leading-[1.18] tracking-[-0.015em] font-normal',
    h3: 'text-[clamp(1.35rem,2.2vw,2rem)] leading-[1.24] tracking-[-0.01em] font-normal',
    h4: 'text-[clamp(1.15rem,1.5vw,1.35rem)] leading-[1.32] tracking-normal font-medium',
  }[resolvedVariant];

  const fontStyles = {
    serif: 'font-serif',
    sans: 'font-sans font-medium',
  }[font];

  const colorStyles = {
    default: 'text-charcoal-900',
    forest: 'text-forest-950',
    sand: 'text-sand-50',
    gold: 'text-gold-500',
    muted: 'text-charcoal-600',
  }[color] || 'text-charcoal-900';

  return (
    <Component
      className={cn(
        variantStyles,
        fontStyles,
        colorStyles,
        'text-balance',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
