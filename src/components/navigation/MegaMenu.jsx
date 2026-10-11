import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Container, Badge } from '../common';
import { cn } from '../../utils/cn';

/**
 * Desktop MegaMenu Dropdown Component — Contemporary Heritage Palette
 * 
 * Elegant, high-contrast warm ivory overlay with deep forest links and authentic previews.
 */
export default function MegaMenu({
  item,
  isOpen,
  onClose,
  isPinned,
  onMouseEnter,
  onMouseLeave,
}) {
  if (!isOpen || !item?.sections) return null;

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={cn(
        'absolute top-full left-0 w-full bg-ivory-pure/98 text-charcoal border-b border-sand/40 shadow-2xl backdrop-blur-md transition-all duration-300 z-50',
        'animate-in fade-in-0 slide-in-from-top-1',
        'before:content-[\'\'] before:absolute before:-top-6 before:left-0 before:w-full before:h-6 before:pointer-events-auto'
      )}
    >
      <Container size="xl" className="py-8 md:py-10 relative">
        {/* Pinned status badge & explicit close button */}
        <div className="absolute top-4 right-4 sm:right-6 flex items-center gap-2 z-10">
          {isPinned && (
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-forest-deep/10 text-forest-deep text-[10px] uppercase font-bold tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-forest-deep animate-pulse" />
              Menu Pinned
            </span>
          )}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            title="Close menu"
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 hover:text-stone-900 flex items-center justify-center transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
          
          {/* Categorized Link Sections (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {item.sections.map((sec, idx) => (
              <div key={idx} className="space-y-3.5">
                <span className="text-[11px] uppercase tracking-wider text-forest-deep font-sans font-bold block pb-1 border-b border-sand/30">
                  {sec.title}
                </span>
                <ul className="space-y-2">
                  {sec.items.map((sub, sIdx) => (
                    <li key={sIdx}>
                      <Link
                        to={sub.path}
                        onClick={onClose}
                        className="group block p-2 -mx-2 rounded-[2px] hover:bg-ivory-warm/60 transition-colors"
                      >
                        <div className="text-xs sm:text-sm font-medium text-charcoal group-hover:text-forest-deep transition-colors flex items-center justify-between">
                          <span>{sub.label}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-forest-deep opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5 shrink-0" />
                        </div>
                        {sub.desc && (
                          <p className="text-xs text-charcoal-muted font-light mt-0.5 leading-relaxed">
                            {sub.desc}
                          </p>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Editorial Visual Preview Card (4 cols) */}
          {item.preview && (
            <div className="lg:col-span-4 border-l border-sand/30 lg:pl-8">
              <Link
                to={item.preview.path}
                onClick={onClose}
                className="group block relative overflow-hidden rounded-[3px] bg-ivory border border-sand/40 hover:border-forest/40 transition-all duration-300 shadow-sm"
              >
                <div className="aspect-[16/10] overflow-hidden bg-forest-dark">
                  <img
                    src={item.preview.image}
                    alt={item.preview.title}
                    className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent opacity-60" />
                </div>
                <div className="p-4 relative bg-ivory">
                  <Badge variant="gold" size="sm" className="mb-2 uppercase tracking-wider font-semibold">
                    Featured
                  </Badge>
                  <h4 className="font-serif text-base text-forest-deep font-semibold group-hover:text-forest transition-colors">
                    {item.preview.title}
                  </h4>
                  <p className="text-xs text-charcoal-muted font-light mt-1 line-clamp-2 leading-relaxed">
                    {item.preview.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[11px] text-forest-deep uppercase tracking-wider font-bold mt-3 group-hover:text-gold transition-colors">
                    <span>{item.preview.cta}</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </div>
          )}

        </div>
      </Container>
    </div>
  );
}
