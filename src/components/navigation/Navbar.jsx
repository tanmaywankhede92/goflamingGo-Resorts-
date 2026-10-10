import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, Button, Logo } from '../common';
import MegaMenu from './MegaMenu';
import MobileMenu from './MobileMenu';
import { NAV_ITEMS } from '../../data/navigation';
import { cn } from '../../utils/cn';

/**
 * Global Resort Navbar Component — Contemporary Indian Heritage Experience
 * 
 * Reconsidered Composition:
 * - Refined translucent warm ivory header over the cinematic hero
 * - Smooth transition to elevated ivory bar on scroll
 * - Official resort logo sits on its natural ivory ground with 100% contrast & zero awkward boxes
 * - Natural typography, restrained spacing, and clear active states
 * - Elegant, dignified "Book Your Stay" CTA button
 * - Mobile: Clean logo + hamburger composition with accessible drawer
 * - High readability over both dark video frames and bright daylight frames
 * - Cohesive and compatible across all routes
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
        'sticky top-0 z-40 w-full h-[68px] sm:h-[76px] lg:h-[82px] flex items-center font-sans transition-[background-color,border-color,box-shadow] duration-300 ease-in-out',
        isScrolled
          ? 'bg-ivory-pure/98 text-charcoal border-b border-sand/50 shadow-xs backdrop-blur-lg'
          : 'bg-ivory-pure/92 text-charcoal border-b border-sand/35 backdrop-blur-md'
      )}
      onMouseLeave={() => setActiveMegaMenu(null)}
    >
      <Container size="wide" className="flex items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 w-full">
        
        {/* OFFICIAL BRAND LOGO */}
        <div className="flex items-center shrink-0">
          <Logo
            variant="header"
            theme="light"
            className="transition-transform duration-200 hover:opacity-95"
          />
        </div>

        {/* Desktop Primary Navigation (lg:flex) */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          <Link
            to="/"
            className={cn(
              'px-3 py-2 text-xs uppercase tracking-[0.12em] font-medium transition-colors relative',
              location.pathname === '/'
                ? 'text-forest-deep font-semibold'
                : 'text-charcoal/80 hover:text-forest-deep'
            )}
          >
            <span>Home</span>
            {location.pathname === '/' && (
              <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-forest-deep rounded-full" />
            )}
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
                    'px-3 py-2 text-xs uppercase tracking-[0.12em] font-medium transition-colors relative',
                    isActive
                      ? 'text-forest-deep font-semibold'
                      : 'text-charcoal/80 hover:text-forest-deep'
                  )}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-forest-deep rounded-full" />
                  )}
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
                    'px-3 py-2 text-xs uppercase tracking-[0.12em] font-medium transition-colors flex items-center gap-1.5 relative',
                    isActive || isOpen
                      ? 'text-forest-deep font-semibold'
                      : 'text-charcoal/80 hover:text-forest-deep'
                  )}
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                >
                  <span>{item.label}</span>
                  <svg
                    className={cn(
                      'w-2.5 h-2.5 text-charcoal-muted transition-transform duration-200',
                      isOpen ? 'rotate-180 text-forest-deep' : ''
                    )}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-forest-deep rounded-full" />
                  )}
                </Link>
              </div>
            );
          })}
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center gap-3">
          {/* Desktop Only: Book Your Stay CTA */}
          <div className="hidden lg:block shrink-0">
            <Button
              as={Link}
              to="/book"
              variant="primary"
              size="sm"
              className="px-5 py-2.5 rounded-[2px] text-xs font-semibold uppercase tracking-[0.12em] shadow-xs"
            >
              Book Your Stay
            </Button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open navigation menu"
            className="lg:hidden p-2 rounded-[3px] text-charcoal hover:text-forest-deep hover:bg-sand/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest transition-colors w-10 h-10 flex items-center justify-center shrink-0 cursor-pointer"
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
