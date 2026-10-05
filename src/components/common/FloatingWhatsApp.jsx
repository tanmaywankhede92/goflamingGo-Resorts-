import React, { useState } from 'react';
import WhatsAppIcon from './WhatsAppIcon';
import { cn } from '../../utils/cn';

/**
 * Floating WhatsApp Concierge Widget
 * 
 * Provides an elegant, unobtrusive direct connection to the Pench resort desk
 * for inquiries regarding room availability, safari permits, and packages.
 */
export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);

  // Pre-filled WhatsApp inquiry message
  const message = encodeURIComponent(
    'Hello Go Flamingo Resort, I would like to inquire about room availability and safari booking at Pench – Sillari Gate.'
  );
  const whatsappUrl = `https://wa.me/?text=${message}`;

  return (
    <div className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-3">
      {/* Tooltip Pill (Desktop) */}
      <div
        className={cn(
          'hidden md:flex items-center gap-2 bg-forest-dark/95 text-ivory text-xs px-3.5 py-2 rounded-full shadow-lg border border-sand/30 backdrop-blur-md transition-all duration-300 pointer-events-none',
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
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-gold focus-visible:ring-offset-2"
      >
        {/* Soft pulse glow ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none opacity-75" />
        
        {/* Official WhatsApp Icon */}
        <WhatsAppIcon size="lg" className="w-7 h-7 sm:w-8 sm:h-8 relative z-10 transition-transform group-hover:rotate-6" />
      </a>
    </div>
  );
}
