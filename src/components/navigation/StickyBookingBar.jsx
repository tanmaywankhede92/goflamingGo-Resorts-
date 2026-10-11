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

  // Don't show sticky bar on the booking/contact page itself
  if (location.pathname === '/book' || location.pathname === '/contact') return null;

  return (
    <aside
      aria-label="Mobile quick reservation bar"
      className={cn(
        'lg:hidden fixed bottom-0 left-0 right-0 z-40',
        'bg-[#0D1812]/98 text-ivory border-t border-[#C5A880]/30 shadow-[0_-8px_28px_rgba(0,0,0,0.45)] backdrop-blur-xl',
        'px-4 pt-2.5 pb-[max(0.75rem,env(safe-area-inset-bottom,0px))]'
      )}
    >
      <div className="flex items-center gap-3 max-w-md mx-auto w-full">
        {/* WHATSAPP CTA (Left) */}
        <a
          href="https://wa.me/919372425968?text=Hello%20Go%20Flamingo%20Resort%2C%20I%20would%20like%20to%20enquire%20about%20room%20availability%20and%20safari%20booking."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#132A1D] hover:bg-[#1A3A27] text-white border-2 border-[#25D366]/60 text-xs uppercase tracking-[0.10em] font-bold min-h-[46px] transition-all cursor-pointer shadow-md text-center"
        >
          <WhatsAppIcon size="sm" className="text-[#25D366] shrink-0" />
          <span>WhatsApp</span>
        </a>

        {/* BOOK YOUR STAY (Right - Primary Gold CTA) */}
        <Link
          to="/contact"
          className="flex-1 inline-flex items-center justify-center px-4 py-2.5 rounded-full bg-gradient-to-r from-[#DFBF8E] via-[#C5A880] to-[#B39366] text-[#08130B] font-bold text-xs uppercase tracking-[0.10em] shadow-md hover:from-[#E8CA9E] hover:to-[#C5A880] min-h-[46px] transition-all border border-[#F3DFC1] text-center cursor-pointer"
        >
          Book Your Stay
        </Link>
      </div>
    </aside>
  );
}
