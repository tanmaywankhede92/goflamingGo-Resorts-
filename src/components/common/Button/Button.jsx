import React from 'react';
import { cn } from '../../../utils/cn';

/**
 * Editorial Button Primitive
 * 
 * Adheres to luxury safari restraint:
 * - Sharp / subtle corners (no excessive rounded pill cards)
 * - Restrained hover states with slow, natural transitions
 * - Accessible 44px minimum touch targets
 * 
 * @param {'primary' | 'gold' | 'secondary' | 'inverted' | 'editorial'} variant
 * @param {'sm' | 'md' | 'lg'} size
 */
export default function Button({
  as: Component = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  children,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-sans tracking-[0.08em] uppercase transition-all duration-200 select-none disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2';

  const sizeStyles = {
    sm: 'text-[0.75rem] px-4 py-2 min-h-[38px] rounded-[3px]',
    md: 'text-[0.8125rem] px-6 py-3 min-h-[46px] rounded-[3px]',
    lg: 'text-[0.875rem] px-8 py-3.5 min-h-[50px] rounded-[3px]',
  }[size] || 'text-[0.8125rem] px-6 py-3 min-h-[46px] rounded-[3px]';

  const variantStyles = {
    // Deep forest solid button
    primary: 'bg-forest-deep text-ivory font-semibold hover:bg-forest-jungle active:bg-forest-dark shadow-sm border border-transparent',
    
    // Warm natural gold reservation button (Rich luxury CTA)
    gold: 'bg-gold text-forest-dark font-bold hover:bg-gold-light active:bg-gold-dark shadow-sm border border-gold-dark/30',
    
    // Refined outline for light surfaces
    secondary: 'bg-transparent text-forest-deep border border-forest-deep/40 hover:border-forest-deep hover:bg-forest-deep hover:text-ivory active:bg-forest-dark font-semibold',
    
    // Inverted outline for dark forest / photography surfaces
    inverted: 'bg-transparent text-ivory border border-sand/40 hover:border-ivory hover:bg-ivory/15 hover:text-ivory active:bg-ivory/25 font-semibold',
    
    // Minimalist editorial text action
    editorial: 'bg-transparent text-current px-0 py-1 min-h-0 border-b border-current hover:opacity-75 tracking-[0.14em] rounded-none',
  }[variant] || 'bg-gold text-forest-dark font-bold shadow-sm';

  return (
    <Component
      className={cn(baseStyles, sizeStyles, variantStyles, className)}
      disabled={disabled}
      {...props}
    >
      {children}
    </Component>
  );
}
