import React from 'react';
import { Heading, Text, SectionEyebrow } from './index';
import { cn } from '../../utils/cn';

/**
 * SectionHeader Primitive
 * 
 * Standardized header for editorial sections with eyebrow, heading, and lead paragraph.
 */
export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  color = 'forest',
  eyebrowColor = 'terracotta',
  className = '',
}) {
  const alignClasses = {
    center: 'text-center mx-auto items-center',
    left: 'text-left items-start',
    right: 'text-right items-end',
  }[align];

  return (
    <div className={cn('flex flex-col max-w-3xl mb-12 md:mb-16', alignClasses, className)}>
      {eyebrow && (
        <SectionEyebrow color={eyebrowColor} withLine={align !== 'center'} className="mb-3">
          {eyebrow}
        </SectionEyebrow>
      )}
      <Heading as="h2" variant="h2" font="serif" color={color} className="mb-4">
        {title}
      </Heading>
      {subtitle && (
        <Text variant="lead" color="muted" className="font-light">
          {subtitle}
        </Text>
      )}
    </div>
  );
}
