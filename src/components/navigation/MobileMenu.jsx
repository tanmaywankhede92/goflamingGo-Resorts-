import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../common';
import { NAV_ITEMS } from '../../data/navigation';
import { cn } from '../../utils/cn';

/**
 * Mobile Navigation Drawer Component
 * 
 * Full-screen responsive drawer with accordion navigation,
 * booking trigger, and quick communication actions (Call/WhatsApp).
 */
export default function MobileMenu({ isOpen, onClose }) {
  const [expandedItem, setExpandedItem] = useState(null);
  const location = useLocation();

  if (!isOpen) return null;

  const toggleExpand = (id) => {
    setExpandedItem((prev) => (prev === id ? null : id));
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      className="fixed inset-0 z-50 bg-forest-dark/95 text-ivory backdrop-blur-xl flex flex-col overflow-y-auto animate-in fade-in-0 duration-300"
    >
      {/* Drawer Header */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-sand/15">
        <div>
          <span className="font-serif text-lg tracking-[0.06em] text-ivory uppercase block font-medium">
            Go Flamingo Resort
          </span>
          <span className="text-[0.6875rem] uppercase tracking-editorial text-gold font-sans font-medium block">
            Pench · Sillari Gate
          </span>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close navigation menu"
          className="p-2 -mr-2 text-sand hover:text-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-[2px]"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Navigation List */}
      <nav className="flex-1 px-6 py-6 space-y-1">
        {/* Home Link */}
        <Link
          to="/"
          onClick={onClose}
          className={cn(
            'flex items-center justify-between py-3.5 text-base font-serif tracking-wide border-b border-sand/10 transition-colors',
            location.pathname === '/' ? 'text-gold' : 'text-ivory hover:text-gold'
          )}
        >
          <span>Home</span>
        </Link>

        {/* Dynamic Nav Items */}
        {NAV_ITEMS.map((item) => {
          const isExpanded = expandedItem === item.id;
          const isActive = location.pathname.startsWith(item.path);

          if (!item.hasMegaMenu) {
            return (
              <Link
                key={item.id}
                to={item.path}
                onClick={onClose}
                className={cn(
                  'flex items-center justify-between py-3.5 text-base font-serif tracking-wide border-b border-sand/10 transition-colors',
                  isActive ? 'text-gold' : 'text-ivory hover:text-gold'
                )}
              >
                <span>{item.label}</span>
              </Link>
            );
          }

          return (
            <div key={item.id} className="border-b border-sand/10">
              <button
                type="button"
                onClick={() => toggleExpand(item.id)}
                className="w-full flex items-center justify-between py-3.5 text-base font-serif tracking-wide text-ivory hover:text-gold transition-colors text-left"
              >
                <span className={cn(isActive && 'text-gold')}>{item.label}</span>
                <span className="text-sand/60 text-xs transform transition-transform duration-200">
                  {isExpanded ? '▲' : '▼'}
                </span>
              </button>

              {/* Sub-links Accordion */}
              {isExpanded && (
                <div className="pl-4 pb-4 pt-1 space-y-2.5 border-l border-gold/30 ml-2">
                  {item.sections.flatMap((s) => s.items).map((sub, sIdx) => (
                    <Link
                      key={sIdx}
                      to={sub.path}
                      onClick={onClose}
                      className="block text-sm text-sand-light hover:text-gold transition-colors py-1"
                    >
                      <div>{sub.label}</div>
                      {sub.desc && (
                        <div className="text-[0.7rem] text-sand/60 font-light">{sub.desc}</div>
                      )}
                    </Link>
                  ))}
                  <div className="pt-2">
                    <Link
                      to={item.path}
                      onClick={onClose}
                      className="text-xs text-gold uppercase tracking-wider font-semibold inline-flex items-center gap-1"
                    >
                      Explore {item.label} Overview →
                    </Link>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Bottom Sticky Action Block */}
      <div className="px-6 py-6 bg-forest-deep border-t border-sand/15 space-y-3">
        <Button
          as={Link}
          to="/book"
          onClick={onClose}
          variant="gold"
          size="lg"
          className="w-full justify-center"
        >
          Book Your Stay
        </Button>

        <div className="grid grid-cols-2 gap-3 pt-2">
          <a
            href="tel:+91"
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-[3px] border border-sand/20 text-xs text-sand-light hover:text-ivory transition-colors uppercase tracking-wider font-sans font-medium"
          >
            <span>Call Resort</span>
          </a>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-[3px] border border-sand/20 text-xs text-sand-light hover:text-ivory transition-colors uppercase tracking-wider font-sans font-medium"
          >
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
