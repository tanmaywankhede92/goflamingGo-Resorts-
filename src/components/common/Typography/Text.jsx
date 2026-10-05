import React from 'react';
import { cn } from '../../../utils/cn';

/**
 * Editorial Body / Prose Primitive
 * 
 * @param {'lead' | 'base' | 'sm' | 'caption'} variant
 * @param {'default' | 'muted' | 'subtle' | 'sand' | 'light'} color
 */
export default function Text({
  as: Component = 'p',
  variant = 'base',
  color = 'default',
  className = '',
  children,
  ...props
}) {
  const variantStyles = {
    lead: 'text-[clamp(1.125rem,1.25vw,1.35rem)] leading-[1.65] font-light',
    base: 'text-[1rem] leading-[1.7] font-normal',
    sm: 'text-[0.875rem] leading-[1.6] font-normal',
    caption: 'text-[0.75rem] leading-[1.5] tracking-wide font-normal',
  }[variant] || 'text-[1rem] leading-[1.7]';

  const colorStyles = {
    default: 'text-charcoal-800',
    muted: 'text-charcoal-600',
    subtle: 'text-charcoal-500',
    sand: 'text-sand-100',
    light: 'text-sand-200',
    forest: 'text-forest-900',
  }[color] || 'text-charcoal-800';

  return (
    <Component
      className={cn(
        'font-sans text-pretty',
        variantStyles,
        colorStyles,
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
