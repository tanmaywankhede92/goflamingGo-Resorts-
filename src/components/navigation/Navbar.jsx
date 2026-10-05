import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, Button } from '../common';
import MegaMenu from './MegaMenu';
import MobileMenu from './MobileMenu';
import { NAV_ITEMS } from '../../data/navigation';
import { cn } from '../../utils/cn';

/**
 * Global Resort Navbar Component
 * 
 * Manages desktop navigation, mega-menu triggers, and mobile drawer toggling.
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

  const currentMegaMenuItem = NAV_ITEMS.find((item) => item.id === activeMegaMenu);

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full transition-all duration-300 font-sans',
        isScrolled
          ? 'bg-forest-dark/95 text-ivory shadow-lg backdrop-blur-md border-b border-sand/15 py-3'
          : 'bg-forest-dark text-ivory border-b border-sand/10 py-4'
      )}
      onMouseLeave={() => setActiveMegaMenu(null)}
    >
      <Container size="wide" className="flex items-center justify-between">
        
        {/* Brand Identity */}
        <Link to="/" className="group flex flex-col focus-visible:outline-none">
          <div className="flex items-center gap-2">
            <span className="font-serif text-lg md:text-xl font-medium tracking-[0.06em] text-ivory group-hover:text-gold transition-colors uppercase">
              Go Flamingo
            </span>
            <span className="text-[0.65rem] text-terracotta-light uppercase tracking-wider font-semibold border border-terracotta/40 px-1.5 py-0.5 rounded-[2px] hidden sm:inline-block">
              Resort
            </span>
          </div>
          <span className="text-[0.6875rem] uppercase tracking-editorial text-sand/80 font-sans font-medium">
            Pench · Sillari Gate
          </span>
        </Link>

        {/* Desktop Primary Nav */}
        <nav className="hidden xl:flex items-center gap-1 2xl:gap-2">
          <Link
            to="/"
            className={cn(
              'px-3 py-2 text-xs uppercase tracking-wider font-medium transition-colors hover:text-gold',
              location.pathname === '/' ? 'text-gold' : 'text-ivory'
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
                    'px-3 py-2 text-xs uppercase tracking-wider font-medium transition-colors hover:text-gold',
                    isActive ? 'text-gold' : 'text-ivory'
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
                    'px-3 py-2 text-xs uppercase tracking-wider font-medium transition-colors hover:text-gold flex items-center gap-1',
                    (isActive || isOpen) ? 'text-gold' : 'text-ivory'
                  )}
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                >
                  <span>{item.label}</span>
                  <span className="text-[0.6rem] opacity-70">▾</span>
                </Link>
              </div>
            );
          })}
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center gap-3">
          <Button
            as={Link}
            to="/book"
            variant="gold"
            size="sm"
            className="hidden sm:inline-flex"
          >
            Book Your Stay
          </Button>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open navigation menu"
            className="xl:hidden p-2 rounded-[2px] text-ivory hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
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
