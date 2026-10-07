import React from 'react';
import { Card, Badge, Heading, Text } from '../../../components/common';
import { cn } from '../../../utils/cn';

/**
 * SafariSeasonalSchedule
 * 
 * Renders verified seasonal safari timings in an elegant responsive grid.
 * Explicitly displays the Maharashtra Forest Department regulatory disclaimer.
 * 
 * @param {Array} seasons - List of seasonal timing blocks
 * @param {string} disclaimer - Official regulatory notice
 * @param {string} className - Optional container styling
 */
export default function SafariSeasonalSchedule({ seasons = [], disclaimer, className = '' }) {
  if (!seasons || seasons.length === 0) return null;

  return (
    <div className={cn('space-y-6', className)}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {seasons.map((item, idx) => (
          <div
            key={item.season || idx}
            className="group relative p-6 rounded-[3px] bg-ivory-pure border border-sand/40 hover:border-gold/80 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            {/* Top gold accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent group-hover:via-gold transition-all duration-300" />
            
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <Badge variant="gold" size="sm" className="font-semibold text-[0.6875rem] tracking-wider uppercase">
                  {item.tag}
                </Badge>
                <span className="text-[0.6875rem] uppercase tracking-wider text-charcoal-muted font-medium">
                  {item.months}
                </span>
              </div>

              <Heading as="h4" variant="title" font="serif" className="text-forest-deep text-lg sm:text-xl mb-4 font-semibold">
                {item.season}
              </Heading>

              <div className="space-y-3 pt-3 border-t border-sand/25 text-xs sm:text-[0.8125rem]">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-[0.6875rem] uppercase tracking-wider text-charcoal-muted font-bold">
                    Morning
                  </span>
                  <span className="font-serif font-bold text-forest-deep text-sm sm:text-base">
                    {item.morning}
                  </span>
                </div>
                <div className="flex items-start justify-between gap-2">
                  <span className="text-[0.6875rem] uppercase tracking-wider text-charcoal-muted font-bold">
                    Afternoon
                  </span>
                  <span className="font-serif font-bold text-forest-deep text-sm sm:text-base">
                    {item.afternoon}
                  </span>
                </div>
              </div>
            </div>

            {item.notes && (
              <p className="mt-4 pt-3 border-t border-sand/20 text-[0.75rem] text-charcoal-muted/90 leading-relaxed font-light italic">
                {item.notes}
              </p>
            )}
          </div>
        ))}
      </div>

      {disclaimer && (
        <div className="p-4 sm:p-5 rounded-[3px] bg-sand/15 border border-sand/35 flex items-start gap-3.5 text-xs sm:text-sm text-charcoal/90">
          <svg className="w-5 h-5 text-gold shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="leading-relaxed font-sans">
            <strong className="font-semibold text-forest-deep">Official Regulatory Notice:</strong> {disclaimer}
          </p>
        </div>
      )}
    </div>
  );
}
