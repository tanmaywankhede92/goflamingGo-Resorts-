import React from 'react';
import { Link } from 'react-router-dom';
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
}) {
  if (!isOpen || !item?.sections) return null;

  return (
    <div
      className={cn(
        'absolute top-full left-0 w-full bg-ivory-pure/98 text-charcoal border-b border-sand/40 shadow-2xl backdrop-blur-md transition-all duration-300 z-50',
        'animate-in fade-in-0 slide-in-from-top-1'
      )}
      onMouseLeave={onClose}
    >
      <Container size="xl" className="py-8 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
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
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs text-forest">→</span>
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
                  <span className="inline-flex items-center gap-1 text-[11px] text-forest-deep uppercase tracking-wider font-bold mt-3 group-hover:text-gold transition-colors">
                    {item.preview.cta} →
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
