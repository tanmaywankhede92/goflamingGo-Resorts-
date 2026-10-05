import React from 'react';
import { cn } from '../../../utils/cn';

/**
 * Editorial Card Primitive
 * 
 * Clean, restrained surface container adhering to the design specification:
 * - Avoids excessive border radius (strictly 2px-4px)
 * - Avoids heavy drop shadows or cheap glassmorphism
 * - Prioritizes fine borders, whitespace, and natural tones
 * 
 * @param {'sand' | 'forest' | 'bordered' | 'ghost'} variant
 * @param {'sm' | 'md' | 'lg' | 'none'} padding
 */
export default function Card({
  as: Component = 'div',
  variant = 'sand',
  padding = 'md',
  className = '',
  children,
  ...props
}) {
  const variantStyles = {
    sand: 'bg-sand-100/70 border border-sand-300/70 text-charcoal-900',
    forest: 'bg-forest-900 border border-forest-800 text-sand-50',
    bordered: 'bg-transparent border border-sand-300 text-charcoal-900',
    ghost: 'bg-transparent border-0 text-current',
  }[variant] || 'bg-sand-100/70 border border-sand-300/70';

  const paddingStyles = {
    none: 'p-0',
    sm: 'p-4 sm:p-5',
    md: 'p-6 sm:p-8',
    lg: 'p-8 sm:p-12',
  }[padding] || 'p-6 sm:p-8';

  return (
    <Component
      className={cn(
        'rounded-[2px] transition-colors duration-300',
        variantStyles,
        paddingStyles,
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
