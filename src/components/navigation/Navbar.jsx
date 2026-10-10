import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, Logo } from '../common';
import MegaMenu from './MegaMenu';
import MobileMenu from './MobileMenu';
import { NAV_ITEMS, QUICK_CONTACT } from '../../data/navigation';
import { cn } from '../../utils/cn';

/**
 * Global Resort Navbar Component — Studio Modular Inspired Floating Pill Design
 * 
 * Aesthetic Architecture:
 * - Left: Official Go Flamingo Resort brand logo on natural clean ground.
 * - Center: Floating white/ivory rounded-full pill capsule for desktop navigation.
 * - Right: Distinctive rounded-full pill CTA ("Book Your Stay") with accent circle arrow icon.
 * - MegaMenu seamlessly overlays for deep exploratory browsing.
 * - Mobile: Clean logo + pill booking button + hamburger toggle.
 */
export default function Navbar() {
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Reset menu state during render on route changes
  const [prevPath, setPrevPath] = useState(location.pathname);
  if (location.pathname !== prevPath) {
    setPrevPath(location.pathname);
    setActiveMegaMenu(null);
    setIsMobileMenuOpen(false);
  }

  // Track window scroll for elevated backdrop
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentMegaMenuItem = NAV_ITEMS.find((item) => item.id === activeMegaMenu);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-40 font-sans transition-all duration-300 ease-in-out pointer-events-none',
        isScrolled
          ? 'py-2 sm:py-2.5'
          : 'py-3 sm:py-4.5'
      )}
      onMouseLeave={() => setActiveMegaMenu(null)}
    >
      <Container size="wide" className="px-3 sm:px-6 lg:px-8 w-full pointer-events-auto">
        
        {/* ========================================================
            UNIFIED STUDIO MODULAR FLOATING MASTER CAPSULE
            ======================================================== */}
        <div
          className={cn(
            'relative w-full rounded-full transition-all duration-300 flex items-center justify-between gap-2 lg:gap-3 px-3.5 sm:px-5 py-2 sm:py-2.5 min-h-[46px] sm:min-h-[50px]',
            'bg-white/95 backdrop-blur-xl border border-stone-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.08)]'
          )}
        >
          
          {/* 1. BRAND LOGO (Centered on mobile view, integrated on Left for desktop) */}
          <div className="flex items-center shrink-0 max-lg:absolute max-lg:left-1/2 max-lg:-translate-x-1/2 z-10">
            <Link
              to="/"
              aria-label="Go Flamingo Resorts – Home"
              className="flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest rounded-full transition-transform duration-200 hover:scale-102"
            >
              <img
                src="/assets/logo/go-flamingo-logo-trimmed.png"
                alt="Go Flamingo Resorts"
                className="h-8 sm:h-9 lg:h-10 w-auto object-contain select-none transition-opacity duration-200 group-hover:opacity-90"
              />
            </Link>
          </div>

          {/* Subtle Vertical Hairline Divider between Logo and Navigation */}
          <div className="hidden lg:block w-px h-6 bg-stone-200/90 shrink-0" />

          {/* 2. NAVIGATION LINKS (Center) */}
          <nav
            className="hidden lg:flex items-center gap-1 xl:gap-1.5 flex-1 justify-center px-1"
            aria-label="Primary Navigation"
          >
            <Link
              to="/"
              className={cn(
                'px-3 py-1.5 rounded-full text-[13px] font-medium transition-all duration-200',
                location.pathname === '/'
                  ? 'bg-forest-deep text-white shadow-xs font-semibold'
                  : 'text-stone-700 hover:text-forest-deep hover:bg-stone-100/70'
              )}
            >
              Home
            </Link>

            {NAV_ITEMS.map((item) => {
              const isActive = (item.matchPaths || [item.path]).some((p) => location.pathname.startsWith(p));
              const isOpen = activeMegaMenu === item.id;

              if (!item.hasMegaMenu) {
                return (
                  <Link
                    key={item.id}
                    to={item.path}
                    className={cn(
                      'px-3 py-1.5 rounded-full text-[13px] font-medium transition-all duration-200',
                      isActive
                        ? 'bg-forest-deep text-white shadow-xs font-semibold'
                        : 'text-stone-700 hover:text-forest-deep hover:bg-stone-100/70'
                    )}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => setActiveMegaMenu(item.id)}
                >
                  <Link
                    to={item.path}
                    className={cn(
                      'px-3 py-1.5 rounded-full text-[13px] font-medium transition-all duration-200 flex items-center gap-1.5',
                      isActive || isOpen
                        ? 'bg-forest-deep text-white shadow-xs font-semibold'
                        : 'text-stone-700 hover:text-forest-deep hover:bg-stone-100/70'
                    )}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                  >
                    <span>{item.label}</span>
                    <svg
                      className={cn(
                        'w-2.5 h-2.5 transition-transform duration-200',
                        isActive || isOpen ? 'text-white/80' : 'text-stone-400',
                        isOpen ? 'rotate-180' : ''
                      )}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* 3. RIGHT ACTIONS: PILL CTA + MOBILE HAMBURGER */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0 max-lg:ml-auto">

            {/* Desktop Pill CTA: Book Your Stay with Accent Arrow Circle */}
            <div className="hidden sm:block shrink-0">
              <Link
                to="/book"
                className="group inline-flex items-center gap-2 pl-4 sm:pl-4.5 pr-1.5 py-1.5 rounded-full bg-forest-deep text-ivory text-xs uppercase tracking-[0.12em] font-semibold hover:bg-forest-dark transition-all duration-300 shadow-md"
              >
                <span>Book Your Stay</span>
                <span className="w-6 sm:w-6.5 h-6 sm:h-6.5 rounded-full bg-[#BCE0FD] text-forest-deep flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:scale-105 shadow-xs shrink-0">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              className="lg:hidden p-1.5 rounded-full bg-stone-100 hover:bg-stone-200 text-charcoal hover:text-forest-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest transition-colors w-9 h-9 flex items-center justify-center shrink-0 cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

        </div>

      </Container>

      {/* Desktop MegaMenu Overlay Panel */}
      <div className="pointer-events-auto">
        <MegaMenu
          item={currentMegaMenuItem}
          isOpen={Boolean(activeMegaMenu && currentMegaMenuItem?.hasMegaMenu)}
          onClose={() => setActiveMegaMenu(null)}
        />
      </div>

      {/* Mobile Drawer */}
      <div className="pointer-events-auto">
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />
      </div>
    </header>
  );
}
