import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { Button, Logo, WhatsAppIcon } from '../common';
import { NAV_ITEMS } from '../../data/navigation';
import { cn } from '../../utils/cn';

/**
 * Mobile Navigation Drawer Component
 * 
 * Full-screen responsive drawer rendered via React Portal directly into document.body
 * to guarantee z-index superiority and escape any parent container constraints.
 */
export default function MobileMenu({ isOpen, onClose }) {
  const [expandedItem, setExpandedItem] = useState(null);
  const location = useLocation();

  // Lock body scrolling when drawer is open
  useEffect(() => {
    if (isOpen) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [isOpen]);

  // Handle ESC key to dismiss
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const toggleExpand = (id) => {
    setExpandedItem((prev) => (prev === id ? null : id));
  };

  const drawerContent = (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      className="fixed inset-0 z-[999] w-full h-[100dvh] bg-forest-dark text-ivory flex flex-col overflow-y-auto overscroll-contain animate-in fade-in-0 duration-200"
    >
      {/* Drawer Header */}
      <div className="sticky top-0 z-10 flex items-center justify-between px-5 py-4 border-b border-sand/20 bg-forest-dark/98 backdrop-blur-md">
        <div className="flex items-center" onClick={onClose}>
          <Logo variant="mobile" theme="dark" />
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close navigation menu"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-forest-deep text-sand hover:text-ivory hover:bg-forest-jungle border border-sand/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
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
            'flex items-center justify-between py-3.5 min-h-[48px] text-base font-serif tracking-wide border-b border-sand/10 transition-colors',
            location.pathname === '/' ? 'text-gold font-bold' : 'text-ivory hover:text-gold'
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
                  'flex items-center justify-between py-3.5 min-h-[48px] text-base font-serif tracking-wide border-b border-sand/10 transition-colors',
                  isActive ? 'text-gold font-bold' : 'text-ivory hover:text-gold'
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
                className="w-full flex items-center justify-between py-3.5 min-h-[48px] text-base font-serif tracking-wide text-ivory hover:text-gold transition-colors text-left"
              >
                <span className={cn(isActive && 'text-gold font-bold')}>{item.label}</span>
                <span className="text-sand/70 text-xs px-2 py-1 rounded-[2px] bg-forest-deep border border-sand/20">
                  {isExpanded ? '▲' : '▼'}
                </span>
              </button>

              {/* Sub-links Accordion */}
              {isExpanded && (
                <div className="pl-4 pb-4 pt-1 space-y-3 border-l border-gold/40 ml-2 animate-in fade-in-0 duration-150">
                  {item.sections.flatMap((s) => s.items).map((sub, sIdx) => (
                    <Link
                      key={sIdx}
                      to={sub.path}
                      onClick={onClose}
                      className="block text-sm text-sand-light hover:text-gold transition-colors py-1.5"
                    >
                      <div className="font-medium text-ivory">{sub.label}</div>
                      {sub.desc && (
                        <div className="text-[0.72rem] text-sand/70 font-light mt-0.5">{sub.desc}</div>
                      )}
                    </Link>
                  ))}
                  <div className="pt-2">
                    <Link
                      to={item.path}
                      onClick={onClose}
                      className="text-xs text-gold uppercase tracking-wider font-semibold inline-flex items-center gap-1.5 py-1"
                    >
                      <span>Explore {item.label} Overview</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Bottom Sticky Action Block */}
      <div className="sticky bottom-0 px-6 py-5 bg-forest-dark border-t border-sand/20 shadow-2xl space-y-3">
        <Button
          as={Link}
          to="/book"
          onClick={onClose}
          variant="gold"
          size="lg"
          className="w-full justify-center font-bold text-sm shadow-md"
        >
          Book Your Stay
        </Button>

        <div className="grid grid-cols-2 gap-3 pt-1">
          <a
            href="tel:+919372425968"
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-[3px] border border-sand/30 bg-forest-deep text-xs text-sand-light hover:text-ivory hover:border-sand transition-colors uppercase tracking-wider font-sans font-semibold min-h-[44px]"
          >
            <span>Call: 9372425968</span>
          </a>
          <a
            href="https://wa.me/919372425968"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-[3px] border border-sand/30 bg-forest-deep text-xs text-sand-light hover:text-ivory hover:border-sand hover:bg-forest/60 transition-colors uppercase tracking-wider font-sans font-semibold min-h-[44px]"
          >
            <WhatsAppIcon size="sm" className="text-[#25D366]" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );

  return createPortal(drawerContent, document.body);
}
