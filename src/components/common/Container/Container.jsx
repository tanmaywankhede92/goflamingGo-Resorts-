import React from 'react';
import { cn } from '../../../utils/cn';

/**
 * Container Primitive
 * 
 * Provides responsive horizontal constraint and padding.
 * 
 * @param {'sm' | 'md' | 'lg' | 'xl' | 'wide' | 'full'} size
 *   - sm: 640px (concentrated editorial reading, form cards)
 *   - md: 860px (editorial storytelling narratives)
 *   - lg: 1140px (balanced 3-column features)
 *   - xl: 1320px (default content container)
 *   - wide: 1540px (cinematic full-bleed photography showcases)
 *   - full: 100% full width with responsive edge margins
 */
export default function Container({
  as: Component = 'div',
  size = 'xl',
  noPadding = false,
  className = '',
  children,
  ...props
}) {
  const sizeClasses = {
    sm: 'max-w-[640px]',
    md: 'max-w-[860px]',
    lg: 'max-w-[1140px]',
    xl: 'max-w-[1320px]',
    wide: 'max-w-[1540px]',
    full: 'max-w-full',
  }[size] || 'max-w-[1320px]';

  const paddingClasses = noPadding 
    ? '' 
    : 'px-5 sm:px-8 md:px-12 lg:px-16';

  return (
    <Component
      className={cn('w-full mx-auto', sizeClasses, paddingClasses, className)}
      {...props}
    >
      {children}
    </Component>
  );
}
