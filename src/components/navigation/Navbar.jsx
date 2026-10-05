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
 * Features the official Go Flamingo Resorts brand logo prominently on the left,
 * supported by a warm ivory surface for maximum logo fidelity, crisp typography,
 * desktop mega-menus, and a responsive mobile drawer.
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
        'sticky top-0 z-40 w-full font-sans transition-[background-color,border-color,box-shadow] duration-200',
        isScrolled
          ? 'bg-ivory-pure text-charcoal shadow-md border-b border-sand/40 py-2.5 sm:py-3'
          : 'bg-ivory-pure text-charcoal border-b border-sand/30 py-2.5 sm:py-3.5'
      )}
      onMouseLeave={() => setActiveMegaMenu(null)}
    >
      <Container size="wide" className="flex items-center justify-between gap-4">
        
        {/* OFFICIAL BRAND LOGO (Prominent Left Placement) */}
        <div className="flex items-center py-0.5">
          <Logo variant="header" theme="light" />
        </div>

        {/* Desktop Primary Navigation */}
        <nav className="hidden xl:flex items-center gap-1 2xl:gap-2">
          <Link
            to="/"
            className={cn(
              'px-3 py-2 text-xs uppercase tracking-wider font-semibold transition-colors hover:text-forest-jungle',
              location.pathname === '/' ? 'text-forest-deep font-bold border-b-2 border-gold' : 'text-charcoal-800'
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
                    'px-3 py-2 text-xs uppercase tracking-wider font-semibold transition-colors hover:text-forest-jungle',
                    isActive ? 'text-forest-deep font-bold border-b-2 border-gold' : 'text-charcoal-800'
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
                    'px-3 py-2 text-xs uppercase tracking-wider font-semibold transition-colors hover:text-forest-jungle flex items-center gap-1',
                    (isActive || isOpen) ? 'text-forest-deep font-bold border-b-2 border-gold' : 'text-charcoal-800'
                  )}
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                >
                  <span>{item.label}</span>
                  <span className="text-[0.6rem] text-charcoal-muted">▾</span>
                </Link>
              </div>
            );
          })}
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <Button
            as={Link}
            to="/book"
            variant="gold"
            size="sm"
            className="shadow-sm font-bold tracking-wider"
          >
            <span className="hidden sm:inline">Book Your Stay</span>
            <span className="sm:hidden text-xs">Book Stay</span>
          </Button>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open navigation menu"
            className="xl:hidden p-2 rounded-[3px] text-charcoal hover:text-forest-jungle hover:bg-sand/20 active:bg-sand/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
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
