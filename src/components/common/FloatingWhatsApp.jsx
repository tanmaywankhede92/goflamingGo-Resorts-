import React, { useState } from 'react';
import WhatsAppIcon from './WhatsAppIcon';
import { cn } from '../../utils/cn';

/**
 * Floating WhatsApp Concierge Widget
 * 
 * - Slick vertical floating animation (up and down gentle float)
 * - Removed harsh glow/ping ring and default heavy shadows
 * - Dark luxury button styling (#0A1D13) with rich emerald border & hover effect
 */
export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);

  // Pre-filled WhatsApp inquiry message
  const message = encodeURIComponent(
    'Hello Go Flamingo Resort, I would like to inquire about room availability and safari booking at Pench – Sillari Gate.'
  );
  const whatsappUrl = `https://wa.me/919561957009?text=${message}`;

  return (
    <div
      className="fixed right-5 bottom-20 lg:bottom-7 lg:right-7 z-40 flex items-center gap-3 animate-float-slick"
    >
      {/* Tooltip Pill (Desktop only) */}
      <div
        className={cn(
          'hidden lg:flex items-center gap-2 bg-[#08150D]/95 text-ivory text-xs px-3.5 py-2 rounded-full border border-[#25D366]/30 backdrop-blur-md transition-all duration-300 pointer-events-none',
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        )}
      >
        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
        <span className="font-sans font-medium tracking-wide text-xs text-white">
          Chat with Resort Concierge
        </span>
      </div>

      {/* Dark Luxury Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Go Flamingo Resort Concierge on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 lg:w-14 lg:h-14 rounded-full bg-[#0A1D13] hover:bg-[#133824] text-[#25D366] hover:text-white border-2 border-[#25D366]/50 hover:border-[#25D366] hover:scale-110 active:scale-95 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
      >
        {/* Official WhatsApp Icon with smooth hover rotate */}
        <WhatsAppIcon
          size="lg"
          className="w-6 h-6 sm:w-7 sm:h-7 lg:w-7 lg:h-7 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-105"
        />
      </a>
    </div>
  );
}
