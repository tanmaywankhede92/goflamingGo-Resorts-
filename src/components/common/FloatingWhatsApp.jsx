import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import WhatsAppIcon from './WhatsAppIcon';
import { cn } from '../../utils/cn';

/**
 * Floating WhatsApp Concierge Widget
 * 
 * Strict Positioning Rules:
 * - On Mobile (< 1024px): Sits safely ABOVE the fixed bottom CTA bar:
 *   bottom-[calc(5rem+env(safe-area-inset-bottom,0px))]
 *   Guarantees zero overlap with the bottom reservation buttons.
 * - On Desktop (>= 1024px): Retains normal floating position (bottom-6 right-6).
 * - On /book: Since fixed bottom bar is absent, uses comfortable default spacing.
 */
export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const isBookingPage = location.pathname === '/book';

  // Pre-filled WhatsApp inquiry message
  const message = encodeURIComponent(
    'Hello Go Flamingo Resort, I would like to inquire about room availability and safari booking at Pench – Sillari Gate.'
  );
  const whatsappUrl = `https://wa.me/919372425968?text=${message}`;

  return (
    <div
      className={cn(
        'fixed right-4 z-40 flex items-center gap-3 transition-all duration-300',
        isBookingPage
          ? 'bottom-4 sm:bottom-6 lg:right-6'
          : 'bottom-[calc(5rem+env(safe-area-inset-bottom,0px))] lg:bottom-6 lg:right-6'
      )}
    >
      {/* Tooltip Pill (Desktop only) */}
      <div
        className={cn(
          'hidden lg:flex items-center gap-2 bg-forest-dark/95 text-ivory text-xs px-3.5 py-2 rounded-full shadow-lg border border-sand/30 backdrop-blur-md transition-all duration-300 pointer-events-none',
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        )}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="font-sans font-medium tracking-wide">
          Chat with Resort Concierge
        </span>
      </div>

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Go Flamingo Resort Concierge on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 lg:w-14 lg:h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-gold focus-visible:ring-offset-2"
      >
        {/* Soft pulse glow ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none opacity-75" />
        
        {/* Official WhatsApp Icon */}
        <WhatsAppIcon size="lg" className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 relative z-10 transition-transform group-hover:rotate-6" />
      </a>
    </div>
  );
}
