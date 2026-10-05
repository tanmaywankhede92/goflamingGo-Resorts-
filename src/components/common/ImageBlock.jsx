import React from 'react';
import { cn } from '../../utils/cn';

/**
 * ImageBlock Primitive
 * 
 * Handles high-resolution photography with responsive aspect ratios,
 * subtle frame borders, and optional editorial captions.
 */
export default function ImageBlock({
  src,
  alt = 'Go Flamingo Resort, Pench',
  aspectRatio = 'landscape', // 'cinematic' | 'landscape' | 'editorial' | 'portrait' | 'square'
  caption,
  overlay = false,
  className = '',
  imgClassName = '',
  children,
}) {
  const ratioClasses = {
    cinematic: 'aspect-[21/9]',
    landscape: 'aspect-[16/9]',
    editorial: 'aspect-[4/3]',
    portrait: 'aspect-[4/5]',
    tall: 'aspect-[3/4]',
    square: 'aspect-square',
  }[aspectRatio] || 'aspect-[16/9]';

  return (
    <figure className={cn('relative overflow-hidden rounded-[4px] group', className)}>
      <div className={cn('relative w-full overflow-hidden bg-forest-dark', ratioClasses)}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={cn(
            'w-full h-full object-cover object-center transition-transform duration-700 ease-cinematic group-hover:scale-103',
            imgClassName
          )}
        />
        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent" />
        )}
        <div className="absolute inset-0 ring-1 ring-inset ring-charcoal/10 pointer-events-none" />
        {children}
      </div>
      {caption && (
        <figcaption className="mt-2 text-xs text-charcoal-muted font-sans tracking-wide italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
