import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ArrowRight, X, Phone } from 'lucide-react';
import { Logo, WhatsAppIcon } from '../common';
import { NAV_ITEMS, QUICK_CONTACT } from '../../data/navigation';
import { cn } from '../../utils/cn';
import { getWhatsAppTarget } from '../../utils/whatsapp';

/**
 * Mobile Navigation Drawer Component
 * 
 * Full-screen responsive drawer rendered via React Portal directly into document.body.
 * Features:
 * - Seamless luxury emerald & gold heritage palette
 * - Butter-smooth CSS grid accordion animation for submenus
 * - Modern Lucide React ChevronDown icon with 180-degree animated rotation
 * - Dedicated touch-friendly booking & contact action hub
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

  const whatsappInquiryUrl = `${QUICK_CONTACT.whatsappUrl}?text=${encodeURIComponent(
    'Hello Go Flamingo Resort, I am browsing your website on mobile and would like to inquire about room availability and safari booking at Sillari Gate, Pench.'
  )}`;

  const drawerContent = (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      className="fixed inset-0 z-[999] w-full h-[100dvh] bg-[#0A1D11] text-[#FAF5ED] flex flex-col overflow-y-auto overscroll-contain animate-in fade-in-0 duration-200"
    >
      {/* Drawer Header: Unified Luxury Dark Emerald & Gold Accent */}
      <div className="sticky top-0 z-20 flex items-center justify-between px-5 py-3.5 sm:py-4 border-b border-gold/25 bg-[#07160D]/95 backdrop-blur-xl">
        <div className="flex items-center" onClick={onClose}>
          <Logo variant="mobile" theme="dark" />
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close navigation menu"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-gold/20 text-[#FAF5ED] hover:text-gold border border-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold transition-all duration-200 cursor-pointer shadow-sm"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation List */}
      <nav className="flex-1 px-5 py-5 space-y-1">
        {/* Home Link */}
        <Link
          to="/"
          onClick={onClose}
          className={cn(
            'flex items-center justify-between py-3.5 px-3.5 rounded-xl text-base sm:text-lg font-serif tracking-wide border-b border-white/6 transition-all duration-200',
            location.pathname === '/'
              ? 'text-gold font-bold bg-white/6 shadow-xs'
              : 'text-[#FAF5ED]/90 hover:text-gold hover:bg-white/4'
          )}
        >
          <span>Home</span>
          {location.pathname === '/' && (
            <span className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_8px_rgba(223,191,142,0.9)]" />
          )}
        </Link>

        {/* Dynamic Nav Items */}
        {NAV_ITEMS.map((item) => {
          const isExpanded = expandedItem === item.id;
          const isActive = (item.matchPaths || [item.path]).some((p) => location.pathname.startsWith(p));

          if (!item.hasMegaMenu) {
            return (
              <Link
                key={item.id}
                to={item.path}
                onClick={onClose}
                className={cn(
                  'flex items-center justify-between py-3.5 px-3.5 rounded-xl text-base sm:text-lg font-serif tracking-wide border-b border-white/6 transition-all duration-200',
                  isActive
                    ? 'text-gold font-bold bg-white/6 shadow-xs'
                    : 'text-[#FAF5ED]/90 hover:text-gold hover:bg-white/4'
                )}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_8px_rgba(223,191,142,0.9)]" />
                )}
              </Link>
            );
          }

          return (
            <div key={item.id} className="border-b border-white/6 rounded-xl transition-colors">
              <button
                type="button"
                onClick={() => toggleExpand(item.id)}
                aria-expanded={isExpanded}
                className={cn(
                  'w-full flex items-center justify-between py-3.5 px-3.5 rounded-xl text-base sm:text-lg font-serif tracking-wide transition-all duration-200 text-left cursor-pointer group',
                  isActive
                    ? 'text-gold font-bold'
                    : 'text-[#FAF5ED]/90 hover:text-gold hover:bg-white/4'
                )}
              >
                <span className="flex items-center gap-2.5">
                  {item.label}
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_8px_rgba(223,191,142,0.9)]" />
                  )}
                </span>

                {/* Elegant Smooth-Rotating Lucide ChevronDown Icon */}
                <span
                  className={cn(
                    'w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300',
                    isExpanded
                      ? 'bg-gold/20 text-gold border border-gold/45'
                      : 'bg-white/8 text-[#FAF5ED]/75 border border-white/12 group-hover:text-gold group-hover:bg-white/15'
                  )}
                >
                  <ChevronDown
                    className={cn(
                      'w-4 h-4 transition-transform duration-300 ease-out',
                      isExpanded && 'rotate-180'
                    )}
                  />
                </span>
              </button>

              {/* Butter-Smooth Accordion Expansion using CSS Grid */}
              <div
                className={cn(
                  'grid transition-all duration-300 ease-in-out',
                  isExpanded
                    ? 'grid-rows-[1fr] opacity-100 mt-1 mb-3'
                    : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                )}
              >
                <div className="overflow-hidden">
                  <div className="pl-3.5 pr-2 py-2.5 space-y-2 border-l-2 border-gold/40 ml-3.5 bg-black/25 rounded-r-xl">
                    {item.sections.flatMap((s) => s.items).map((sub, sIdx) => (
                      <Link
                        key={sIdx}
                        to={sub.path}
                        onClick={onClose}
                        className="group block p-2 rounded-lg hover:bg-white/8 transition-all duration-200"
                      >
                        <div className="font-sans font-medium text-[13.5px] text-[#FAF5ED] group-hover:text-gold transition-colors flex items-center justify-between">
                          <span>{sub.label}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-gold opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 shrink-0" />
                        </div>
                        {sub.desc && (
                          <div className="text-[11.5px] text-[#DFD7CB]/75 font-light mt-0.5 leading-relaxed font-sans">
                            {sub.desc}
                          </div>
                        )}
                      </Link>
                    ))}

                    <div className="pt-2 pl-2 pb-1">
                      <Link
                        to={item.path}
                        onClick={onClose}
                        className="inline-flex items-center gap-2 text-xs text-gold uppercase tracking-[0.14em] font-semibold py-1.5 px-3.5 rounded-full bg-gold/15 hover:bg-gold/25 border border-gold/35 transition-all duration-200"
                      >
                        <span>Explore All {item.label}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </nav>

      {/* Bottom Sticky Action Block */}
      <div className="sticky bottom-0 px-5 py-4 bg-[#07160D]/98 backdrop-blur-xl border-t border-gold/20 shadow-2xl space-y-2.5">
        <Link
          to="/contact?book=true#reservation-form-card"
          onClick={onClose}
          className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#DFBF8E] via-[#E8CA9E] to-[#DFBF8E] hover:from-[#E8CA9E] hover:to-[#DFBF8E] text-[#0E2718] font-bold text-xs uppercase tracking-[0.14em] shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer text-center"
        >
          <span>Book Your Stay</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#0E2718]" />
        </Link>

        <div className="grid grid-cols-2 gap-2.5 pt-0.5">
          <a
            href={`tel:${QUICK_CONTACT.phoneRaw}`}
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-full border border-white/20 bg-white/8 hover:bg-white/15 text-xs text-[#FAF5ED] transition-all uppercase tracking-wider font-sans font-semibold min-h-[44px]"
          >
            <Phone className="w-3.5 h-3.5 text-gold shrink-0" />
            <span>Call: {QUICK_CONTACT.phone}</span>
          </a>
          <a
            href={whatsappInquiryUrl}
            target={getWhatsAppTarget()}
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-full border border-[#25D366]/40 bg-white/8 hover:bg-[#25D366]/20 text-xs text-[#FAF5ED] transition-all uppercase tracking-wider font-sans font-semibold min-h-[44px]"
          >
            <WhatsAppIcon size="sm" className="text-[#25D366] shrink-0" />
            <span>WhatsApp</span>
          </a>
        </div>

        <p className="text-[10px] text-center uppercase tracking-[0.18em] text-[#DFD7CB]/50 font-sans pt-1">
          Sillari Gate · Pench National Park
        </p>
      </div>
    </div>
  );

  return createPortal(drawerContent, document.body);
}
