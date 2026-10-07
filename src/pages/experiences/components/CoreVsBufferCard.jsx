import React from 'react';
import { Card, Badge, Heading, Text } from '../../../components/common';
import { cn } from '../../../utils/cn';

/**
 * CoreVsBufferCard
 * 
 * Side-by-side comparative cards explaining Core and Buffer forest zones.
 * Factual, objective, non-misleading representation governed by Forest Department rules.
 * 
 * @param {Object} data - Contains core, buffer, and disclaimer data
 * @param {string} className - Optional container styling
 */
export default function CoreVsBufferCard({ data, className = '' }) {
  if (!data) return null;
  const { core, buffer, disclaimer } = data;

  return (
    <div className={cn('space-y-6', className)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {/* Core Zone Card */}
        <div className="group relative overflow-hidden rounded-[3px] bg-forest-dark text-ivory border border-sand/20 hover:border-gold/60 transition-all duration-300 flex flex-col justify-between shadow-sm">
          {/* Subtle gradient glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/60 via-transparent to-forest-dark pointer-events-none" />
          
          <div className="relative p-7 sm:p-9 z-10">
            <div className="flex items-center justify-between gap-3 mb-4">
              <Badge variant="gold" size="sm" className="tracking-wider uppercase font-semibold">
                {core.badge}
              </Badge>
              <span className="text-[0.6875rem] uppercase tracking-wider text-sand/60 font-medium">
                Deep Wilderness
              </span>
            </div>

            <Heading as="h3" variant="title" font="serif" className="text-ivory text-2xl sm:text-3xl mb-3 font-semibold">
              {core.name}
            </Heading>

            <Text variant="body" className="text-sand/85 text-sm sm:text-[0.9375rem] mb-6 leading-relaxed font-light">
              {core.summary}
            </Text>

            <div className="space-y-3 pt-6 border-t border-sand/15">
              <span className="text-[0.6875rem] uppercase tracking-wider text-gold font-bold block mb-3">
                Key Zonal Rules & Features
              </span>
              <ul className="space-y-3">
                {core.points.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-[0.8125rem] text-sand-light/95 leading-relaxed font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative px-7 pb-6 sm:px-9 sm:pb-8 pt-0 z-10 border-t border-sand/10">
            <p className="text-[0.7rem] text-sand/60 italic font-light pt-4">
              *Daily Gypsy quota strictly enforced by Maharashtra Forest Department.
            </p>
          </div>
        </div>

        {/* Buffer Zone Card */}
        <div className="group relative overflow-hidden rounded-[3px] bg-ivory-pure border border-sand/40 hover:border-gold/60 transition-all duration-300 flex flex-col justify-between shadow-xs">
          {/* Subtle gradient glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-sand-light/20 via-transparent to-transparent pointer-events-none" />

          <div className="relative p-7 sm:p-9 z-10">
            <div className="flex items-center justify-between gap-3 mb-4">
              <Badge variant="forest" size="sm" className="tracking-wider uppercase font-semibold">
                {buffer.badge}
              </Badge>
              <span className="text-[0.6875rem] uppercase tracking-wider text-charcoal-muted font-medium">
                Forest Corridor
              </span>
            </div>

            <Heading as="h3" variant="title" font="serif" className="text-forest-deep text-2xl sm:text-3xl mb-3 font-semibold">
              {buffer.name}
            </Heading>

            <Text variant="body" className="text-charcoal/80 text-sm sm:text-[0.9375rem] mb-6 leading-relaxed font-light">
              {buffer.summary}
            </Text>

            <div className="space-y-3 pt-6 border-t border-sand/20">
              <span className="text-[0.6875rem] uppercase tracking-wider text-forest-jungle font-bold block mb-3">
                Key Zonal Rules & Features
              </span>
              <ul className="space-y-3">
                {buffer.points.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-[0.8125rem] text-charcoal/90 leading-relaxed font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-forest-jungle shrink-0 mt-2" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative px-7 pb-6 sm:px-9 sm:pb-8 pt-0 z-10 border-t border-sand/20">
            <p className="text-[0.7rem] text-charcoal-muted italic font-light pt-4">
              *Permits subject to seasonal gate weather circulars.
            </p>
          </div>
        </div>
      </div>

      {disclaimer && (
        <p className="text-center text-xs text-charcoal-muted font-light max-w-2xl mx-auto italic">
          * {disclaimer}
        </p>
      )}
    </div>
  );
}
