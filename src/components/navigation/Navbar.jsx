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
 * Strict Contrast Rule:
 * - When hero section / background underneath is DARK: Navbar is LIGHT (warm ivory bg, dark text, light logo)
 * - When background / page content underneath is LIGHT: Navbar is DARK (deep forest bg, ivory text, dark logo)
 * - Transitions smoothly on scroll without flickering
 * - Preserves official Go Flamingo logo and 360px mobile touch safety
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
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Contrast Rule:
  // - Top of pages with dark photography hero -> isDarkHeroUnderneath is TRUE -> Navbar is LIGHT (contrast against dark hero)
  // - When scrolled down into light page content -> isDarkHeroUnderneath is FALSE -> Navbar is DARK (contrast against light content)
  // - On pages with light hero (/book, /contact) -> isDarkHeroUnderneath is FALSE -> Navbar is DARK (contrast against light page)
  const isDarkHeroUnderneath = !isScrolled && !['/book', '/contact'].includes(location.pathname);
  const isNavbarDark = !isDarkHeroUnderneath;

  const currentMegaMenuItem = NAV_ITEMS.find((item) => item.id === activeMegaMenu);

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full font-sans transition-[background-color,border-color,box-shadow,color] duration-300 ease-in-out',
        isNavbarDark
          ? 'bg-forest-dark/98 text-ivory border-b border-sand/20 shadow-md py-2.5 sm:py-3.5'
          : 'bg-ivory-pure/98 text-charcoal border-b border-sand/40 shadow-sm backdrop-blur-md py-2.5 sm:py-3.5'
      )}
      onMouseLeave={() => setActiveMegaMenu(null)}
    >
      <Container size="wide" className="flex items-center justify-between gap-2.5 sm:gap-4 px-3 sm:px-6">
        
        {/* OFFICIAL BRAND LOGO (Prominent Left Placement) */}
        <div className="flex items-center py-0.5 shrink-0">
          <Logo
            variant="header"
            theme={isNavbarDark ? 'dark' : 'light'}
          />
        </div>

        {/* Desktop Primary Navigation (xl:flex) */}
        <nav className="hidden xl:flex items-center gap-1 2xl:gap-2">
          <Link
            to="/"
            className={cn(
              'px-3 py-2 text-xs uppercase tracking-wider font-semibold transition-colors',
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
                    'px-3 py-2 text-xs uppercase tracking-wider font-semibold transition-colors',
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
                    'px-3 py-2 text-xs uppercase tracking-wider font-semibold transition-colors flex items-center gap-1',
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

        {/* Header Right Actions: [ Book Stay ] [ Menu ] */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Button
            as={Link}
            to="/book"
            variant="gold"
            size="sm"
            className="shadow-sm font-bold tracking-wider shrink-0 text-center"
          >
            <span className="hidden sm:inline">Book Your Stay</span>
            <span className="sm:hidden text-[0.72rem] tracking-wide">Book Stay</span>
          </Button>

          {/* Mobile Hamburger Toggle (xl:hidden) */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open navigation menu"
            className={cn(
              'xl:hidden p-2 rounded-[3px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold min-w-[40px] min-h-[40px] flex items-center justify-center shrink-0',
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
