import React from 'react';
import { cn } from '../../../utils/cn';

/**
 * Editorial Badge / Tag Primitive
 * 
 * Provides restrained luxury metadata indicators.
 * Avoids loud neon or high-contrast bubble shapes.
 * 
 * @param {'forest' | 'sand' | 'gold' | 'outline'} variant
 */
export default function Badge({
  variant = 'forest',
  className = '',
  children,
  ...props
}) {
  const variantStyles = {
    forest: 'bg-forest-900/10 text-forest-800 border border-forest-800/20',
    sand: 'bg-sand-100 text-charcoal-700 border border-sand-300',
    gold: 'bg-gold-500/10 text-gold-700 border border-gold-500/30',
    outline: 'bg-transparent text-charcoal-600 border border-charcoal-300',
  }[variant] || 'bg-forest-900/10 text-forest-800 border border-forest-800/20';

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-1 text-[0.6875rem] font-sans font-medium tracking-[0.12em] uppercase rounded-[2px]',
        variantStyles,
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
