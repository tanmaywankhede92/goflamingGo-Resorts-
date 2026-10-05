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
  const baseStyles = 'inline-flex items-center justify-center font-sans tracking-[0.08em] uppercase transition-all duration-300 ease-editorial select-none disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2';

  const sizeStyles = {
    sm: 'text-[0.75rem] px-4 py-2 min-h-[38px] rounded-[2px]',
    md: 'text-[0.8125rem] px-6 py-3 min-h-[46px] rounded-[2px]',
    lg: 'text-[0.875rem] px-8 py-4 min-h-[52px] rounded-[2px]',
  }[size];

  const variantStyles = {
    // Deep forest solid button
    primary: 'bg-forest-900 text-sand-50 hover:bg-forest-800 active:bg-forest-950 shadow-none border border-transparent',
    
    // Warm natural gold reservation button
    gold: 'bg-gold-500 text-forest-950 font-semibold hover:bg-gold-400 active:bg-gold-600 shadow-none border border-transparent',
    
    // Refined outline for light surfaces
    secondary: 'bg-transparent text-forest-950 border border-forest-900/30 hover:border-forest-900 hover:bg-forest-900 hover:text-sand-50 active:bg-forest-950',
    
    // Inverted outline for dark forest / photography surfaces
    inverted: 'bg-transparent text-sand-50 border border-sand-200/40 hover:border-sand-50 hover:bg-sand-50 hover:text-forest-950 active:bg-sand-100',
    
    // Minimalist editorial text action
    editorial: 'bg-transparent text-current px-0 py-1 min-h-0 border-b border-current hover:opacity-75 tracking-[0.14em] rounded-none',
  }[variant];

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
