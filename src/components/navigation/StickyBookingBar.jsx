import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, Button, WhatsAppIcon } from '../common';
import { cn } from '../../utils/cn';

/**
 * Sticky Booking Bar Primitive
 * 
 * Provides an unobtrusive persistent booking & inquiry trigger.
 * On mobile, stays comfortably docked at the bottom;
 * On desktop, floats smoothly when scrolled past the hero.
 */
export default function StickyBookingBar() {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  // Don't show sticky bar on the booking page itself
  const isBookingPage = location.pathname === '/book';

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down 250px
      setIsVisible(window.scrollY > 250);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isBookingPage) return null;

  return (
    <div
      aria-label="Quick reservation bar"
      className={cn(
        'fixed bottom-0 left-0 right-0 z-30 transition-all duration-400 ease-cinematic',
        'bg-forest-dark/95 text-ivory border-t border-sand/20 shadow-2xl backdrop-blur-md py-3 px-4 sm:px-6',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
      )}
    >
      <Container size="xl" className="flex items-center justify-between gap-4">
        
        {/* Destination Information / Value Cue */}
        <div className="hidden md:flex flex-col">
          <div className="flex items-center gap-2">
            <span className="font-serif text-sm text-ivory font-medium">
              Plan Your Pench Trip
            </span>
            <span className="text-[0.65rem] text-gold uppercase tracking-wider font-semibold bg-gold/15 px-1.5 py-0.5 rounded-[2px]">
              Sillari Gate
            </span>
          </div>
          <span className="text-xs text-sand/70 font-sans font-light">
            Direct forest access · Warm Indian hospitality · Restorative wildlife retreat
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-end">
          <a
            href="https://wa.me/919372425968"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-[3px] border border-sand/30 text-xs text-sand hover:text-ivory hover:border-sand hover:bg-forest-deep/60 transition-colors font-sans uppercase tracking-wider font-semibold min-h-[44px]"
          >
            <WhatsAppIcon size="sm" className="text-[#25D366]" />
            <span>WhatsApp</span>
          </a>

          <Button
            as={Link}
            to="/book"
            variant="gold"
            size="md"
            className="flex-1 md:flex-initial min-h-[44px] justify-center"
          >
            Book Your Stay
          </Button>
        </div>

      </Container>
    </div>
  );
}
