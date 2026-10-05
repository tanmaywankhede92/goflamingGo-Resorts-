import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, Button, Logo } from '../common';
import MegaMenu from './MegaMenu';
import MobileMenu from './MobileMenu';
import { NAV_ITEMS } from '../../data/navigation';
import { cn } from '../../utils/cn';

/**
 * Global Resort Navbar Component
 * 
 * Strict Refinements:
 * - Reduced, compact, and fixed height: h-14 sm:h-16 (never shifts or resizes on scroll)
 * - Glassmorphism: backdrop-blur-md with subtle translucent background
 * - Mobile screens: NO CTA button (clean logo + hamburger only); Book CTA is reserved for desktop and mobile drawer
 * - Contrast Rule: Light navbar over dark hero; Dark navbar over light page content
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

  // Track window scroll for elevated backdrop (smooth color transition without size shift)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Contrast Rule:
  // - Top of pages with dark photography hero -> isDarkHeroUnderneath is TRUE -> Navbar is LIGHT (ivory)
  // - When scrolled down into light page content -> isDarkHeroUnderneath is FALSE -> Navbar is DARK (forest)
  // - On pages with light hero (/book, /contact) -> isDarkHeroUnderneath is FALSE -> Navbar is DARK (forest)
  const isDarkHeroUnderneath = !isScrolled && !['/book', '/contact'].includes(location.pathname);
  const isNavbarDark = !isDarkHeroUnderneath;

  const currentMegaMenuItem = NAV_ITEMS.find((item) => item.id === activeMegaMenu);

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full h-16 sm:h-20 flex items-center font-sans transition-[background-color,border-color,box-shadow,color] duration-300 ease-in-out',
        isNavbarDark
          ? 'bg-forest-dark/85 text-ivory border-b border-sand/15 shadow-sm backdrop-blur-md'
          : 'bg-ivory-pure/85 text-charcoal border-b border-sand/30 shadow-sm backdrop-blur-md'
      )}
      onMouseLeave={() => setActiveMegaMenu(null)}
    >
      <Container size="wide" className="flex items-center justify-between gap-3 sm:gap-4 px-3 sm:px-6 w-full">
        
        {/* OFFICIAL BRAND LOGO (Left Placement) */}
        <div className="flex items-center shrink-0">
          <Logo
            variant="header"
            theme={isNavbarDark ? 'dark' : 'light'}
          />
        </div>

        {/* Desktop & Laptop Primary Navigation (lg:flex) */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 2xl:gap-2">
          <Link
            to="/"
            className={cn(
              'px-2 xl:px-2.5 2xl:px-3 py-1.5 text-[0.6875rem] xl:text-xs uppercase tracking-wider font-semibold transition-colors',
              isNavbarDark
                ? location.pathname === '/'
                  ? 'text-gold font-bold border-b-2 border-gold'
                  : 'text-ivory/90 hover:text-gold'
                : location.pathname === '/'
                ? 'text-forest-deep font-bold border-b-2 border-gold'
                : 'text-charcoal-800 hover:text-forest-jungle'
            )}
          >
            Home
          </Link>

          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname.startsWith(item.path);
            const isOpen = activeMegaMenu === item.id;

            if (!item.hasMegaMenu) {
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  className={cn(
                    'px-2 xl:px-2.5 2xl:px-3 py-1.5 text-[0.6875rem] xl:text-xs uppercase tracking-wider font-semibold transition-colors',
                    isNavbarDark
                      ? isActive
                        ? 'text-gold font-bold border-b-2 border-gold'
                        : 'text-ivory/90 hover:text-gold'
                      : isActive
                      ? 'text-forest-deep font-bold border-b-2 border-gold'
                      : 'text-charcoal-800 hover:text-forest-jungle'
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
                    'px-2 xl:px-2.5 2xl:px-3 py-1.5 text-[0.6875rem] xl:text-xs uppercase tracking-wider font-semibold transition-colors flex items-center gap-0.5',
                    isNavbarDark
                      ? (isActive || isOpen)
                        ? 'text-gold font-bold border-b-2 border-gold'
                        : 'text-ivory/90 hover:text-gold'
                      : (isActive || isOpen)
                      ? 'text-forest-deep font-bold border-b-2 border-gold'
                      : 'text-charcoal-800 hover:text-forest-jungle'
                  )}
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                >
                  <span>{item.label}</span>
                  <span className={cn('text-[0.6rem]', isNavbarDark ? 'text-sand/70' : 'text-charcoal-muted')}>▾</span>
                </Link>
              </div>
            );
          })}
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Desktop & Laptop Only: Book Your Stay CTA (Strictly hidden on Mobile screens) */}
          <div className="hidden lg:block shrink-0">
            <Button
              as={Link}
              to="/book"
              variant="gold"
              size="sm"
              className="shadow-sm font-bold tracking-wider text-center"
            >
              Book Your Stay
            </Button>
          </div>

          {/* Mobile Hamburger Toggle (lg:hidden - Only on Mobile/Tablet screens) */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open navigation menu"
            className={cn(
              'lg:hidden p-2 rounded-[3px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold w-10 h-10 flex items-center justify-center shrink-0',
              isNavbarDark
                ? 'text-ivory hover:text-gold hover:bg-forest-deep active:bg-forest-jungle'
                : 'text-charcoal hover:text-forest-jungle hover:bg-sand/20 active:bg-sand/30'
            )}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

      </Container>

      {/* Desktop MegaMenu Overlay Panel */}
      <MegaMenu
        item={currentMegaMenuItem}
        isOpen={Boolean(activeMegaMenu && currentMegaMenuItem?.hasMegaMenu)}
        onClose={() => setActiveMegaMenu(null)}
      />

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
}
