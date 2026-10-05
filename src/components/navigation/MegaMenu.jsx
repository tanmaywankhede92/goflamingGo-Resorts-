import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Badge } from '../common';
import { cn } from '../../utils/cn';

/**
 * Desktop MegaMenu Dropdown Component
 * 
 * Renders categorized navigation links alongside an editorial photographic preview card.
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
        'absolute top-full left-0 w-full bg-forest-dark/95 text-ivory border-b border-sand/20 shadow-2xl backdrop-blur-md transition-all duration-300 z-50',
        'animate-in fade-in-0 slide-in-from-top-2'
      )}
      onMouseLeave={onClose}
    >
      <Container size="xl" className="py-8 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Categorized Link Sections (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {item.sections.map((sec, idx) => (
              <div key={idx} className="space-y-4">
                <span className="text-[0.7rem] uppercase tracking-editorial text-gold font-sans font-semibold block">
                  {sec.title}
                </span>
                <ul className="space-y-3">
                  {sec.items.map((sub, sIdx) => (
                    <li key={sIdx}>
                      <Link
                        to={sub.path}
                        onClick={onClose}
                        className="group block p-2 -mx-2 rounded-[3px] hover:bg-forest-deep/60 transition-colors"
                      >
                        <div className="text-sm font-medium text-ivory group-hover:text-gold transition-colors flex items-center gap-1.5">
                          <span>{sub.label}</span>
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs text-gold">→</span>
                        </div>
                        {sub.desc && (
                          <p className="text-xs text-sand/70 font-light mt-0.5">
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
            <div className="lg:col-span-4 border-l border-sand/15 lg:pl-8">
              <Link
                to={item.preview.path}
                onClick={onClose}
                className="group block relative overflow-hidden rounded-[4px] bg-forest-deep border border-sand/20 hover:border-gold/50 transition-all duration-300"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={item.preview.image}
                    alt={item.preview.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-deep/40 to-transparent" />
                </div>
                <div className="p-4 relative">
                  <Badge variant="gold" className="mb-2">Featured Experience</Badge>
                  <h4 className="font-serif text-base text-ivory font-medium group-hover:text-gold transition-colors">
                    {item.preview.title}
                  </h4>
                  <p className="text-xs text-sand/80 font-light mt-1 line-clamp-2">
                    {item.preview.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs text-gold uppercase tracking-wider font-semibold mt-3">
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
