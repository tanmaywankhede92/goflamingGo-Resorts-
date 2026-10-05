import React from 'react';
import { cn } from '../../../utils/cn';

/**
 * Editorial Section Eyebrow Primitive
 * 
 * Used above main section headings to establish location, chapter, or theme.
 * Formatted with restrained uppercase and wide editorial tracking.
 * 
 * @example
 * <SectionEyebrow>SILLARI GATE · PENCH</SectionEyebrow>
 */
export default function SectionEyebrow({
  as: Component = 'span',
  color = 'gold',
  withLine = false,
  className = '',
  children,
  ...props
}) {
  const colorStyles = {
    gold: 'text-gold-600',
    forest: 'text-forest-700',
    sand: 'text-sand-300',
    muted: 'text-charcoal-500',
  }[color] || 'text-gold-600';

  return (
    <Component
      className={cn(
        'inline-flex items-center gap-3 text-[0.75rem] font-sans font-semibold uppercase tracking-[0.22em]',
        colorStyles,
        className
      )}
      {...props}
    >
      {withLine && (
        <span 
          className="inline-block w-6 h-[1px] bg-current opacity-60" 
          aria-hidden="true" 
        />
      )}
      <span>{children}</span>
    </Component>
  );
}
