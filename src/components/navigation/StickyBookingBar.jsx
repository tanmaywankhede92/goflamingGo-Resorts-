import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { WhatsAppIcon } from '../common';
import { cn } from '../../utils/cn';

/**
 * Mobile Fixed Bottom Conversion Bar
 * 
 * Strict Specs:
 * - Visible on Mobile (< 768px) and Tablet (< 1024px)
 * - Hidden on Desktop (>= 1024px)
 * - Exact 2-Action Structure: | WHATSAPP | BOOK YOUR STAY |
 * - Respects iOS & Android safe-area insets: env(safe-area-inset-bottom)
 * - Hidden on /book page to avoid redundancy
 */
export default function StickyBookingBar() {
  const location = useLocation();

  // Don't show sticky bar on the booking page itself
  if (location.pathname === '/book') return null;

  return (
    <aside
      aria-label="Mobile quick reservation bar"
      className={cn(
        'lg:hidden fixed bottom-0 left-0 right-0 z-40',
        'bg-[#0D1812]/98 text-ivory border-t border-sand/30 shadow-[0_-8px_24px_rgba(0,0,0,0.35)] backdrop-blur-md',
        'px-3 pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom,0px))]'
      )}
    >
      <div className="flex items-center gap-2.5 max-w-md mx-auto w-full">
        {/* WHATSAPP CTA (Left) */}
        <a
          href="https://wa.me/919372425968?text=Hello%20Go%20Flamingo%20Resort%2C%20I%20would%20like%20to%20enquire%20about%20room%20availability%20and%20safari%20booking."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-[3px] bg-forest-deep text-ivory border border-sand/40 text-[0.75rem] uppercase tracking-wider font-semibold hover:border-gold hover:bg-forest-jungle active:bg-forest-dark min-h-[46px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        >
          <WhatsAppIcon size="sm" className="text-[#25D366] shrink-0" />
          <span className="font-sans font-semibold tracking-wider">WhatsApp</span>
        </a>

        {/* BOOK YOUR STAY (Right - Primary Gold CTA) */}
        <Link
          to="/book"
          className="flex-1 inline-flex items-center justify-center px-4 py-2.5 rounded-[3px] bg-gold text-[#152219] font-bold text-[0.75rem] uppercase tracking-wider shadow-sm hover:bg-gold-light active:bg-gold-dark min-h-[46px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold border border-gold-dark/30 text-center"
        >
          Book Your Stay
        </Link>
      </div>
    </aside>
  );
}
