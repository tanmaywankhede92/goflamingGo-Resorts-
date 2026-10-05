import React from 'react';
import { cn } from '../../../utils/cn';

/**
 * Global Reusable Button Primitive
 * 
 * Strict contrast & accessibility rules (Phase 3 & Mobile Refinement):
 * - Primary / Gold: High-contrast Go Flamingo Gold with dark forest / near-black text
 * - Secondary (Light BG): Transparent/Ivory with dark forest text and visible dark forest border
 * - Inverted (Dark / Photography BG): Dark translucent (rgba(8,30,20,0.45)), crisp ivory text, visible ivory border
 * - Minimum 44px touch targets on mobile
 * - Respects focus states and keyboard navigation
 * 
 * @param {'gold' | 'primary' | 'secondary' | 'inverted' | 'outline' | 'ghost' | 'editorial' | 'forest'} variant
 * @param {'sm' | 'md' | 'lg'} size
 * @param {boolean} fullWidthOnMobile
 */
export default function Button({
  as: Component = 'button',
  variant = 'primary',
  size = 'md',
  fullWidthOnMobile = false,
  className = '',
  disabled = false,
  children,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-sans tracking-[0.06em] sm:tracking-[0.08em] uppercase transition-all duration-200 select-none disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2';

  const sizeStyles = {
    sm: 'text-[0.75rem] px-3.5 sm:px-4 py-2 min-h-[40px] rounded-[3px]',
    md: 'text-[0.8125rem] px-5 sm:px-6 py-2.5 sm:py-3 min-h-[44px] rounded-[3px]',
    lg: 'text-[0.8125rem] sm:text-[0.875rem] px-6 sm:px-8 py-3 sm:py-3.5 min-h-[48px] rounded-[3px]',
  }[size] || 'text-[0.8125rem] px-5 sm:px-6 py-2.5 min-h-[44px] rounded-[3px]';

  const variantStyles = {
    // Primary conversion button (Go Flamingo Gold with dark forest text)
    primary: 'bg-gold text-[#152219] font-bold hover:bg-gold-light active:bg-gold-dark shadow-sm border border-gold-dark/30',
    gold: 'bg-gold text-[#152219] font-bold hover:bg-gold-light active:bg-gold-dark shadow-sm border border-gold-dark/30',

    // Deep forest solid button
    forest: 'bg-forest-deep text-ivory font-semibold hover:bg-forest-jungle active:bg-forest-dark shadow-sm border border-transparent',

    // Secondary button on light backgrounds (Dark forest text and border)
    secondary: 'bg-transparent text-forest-deep border border-forest-deep/70 hover:border-forest-deep hover:bg-forest-deep hover:text-ivory active:bg-forest-dark font-semibold',
    outline: 'bg-transparent text-forest-deep border border-forest-deep/70 hover:border-forest-deep hover:bg-forest-deep hover:text-ivory active:bg-forest-dark font-semibold',

    // Inverted secondary button on dark images / photography
    // rgba(8, 30, 20, 0.45) translucent background + ivory text + visible ivory border
    inverted: 'bg-[#081E14]/45 backdrop-blur-xs text-ivory border border-white/65 hover:border-white hover:bg-white/15 active:bg-white/25 font-semibold',
    'secondary-dark': 'bg-[#081E14]/45 backdrop-blur-xs text-ivory border border-white/65 hover:border-white hover:bg-white/15 active:bg-white/25 font-semibold',

    // Ghost button
    ghost: 'bg-transparent text-forest-deep hover:bg-sand/30 active:bg-sand/50 font-semibold',

    // Minimalist editorial text action
    editorial: 'bg-transparent text-current px-0 py-1 min-h-0 border-b border-current hover:opacity-75 tracking-[0.14em] rounded-none',
  }[variant] || 'bg-gold text-[#152219] font-bold shadow-sm';

  const mobileWidthStyles = fullWidthOnMobile ? 'w-full sm:w-auto' : '';

  return (
    <Component
      className={cn(baseStyles, sizeStyles, variantStyles, mobileWidthStyles, className)}
      disabled={disabled}
      {...props}
    >
      {children}
    </Component>
  );
}
