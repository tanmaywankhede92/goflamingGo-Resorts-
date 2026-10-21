import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Logo, WhatsAppIcon } from '../common';
import { QUICK_CONTACT } from '../../data/navigation';
import { getWhatsAppTarget, buildWhatsAppUrl } from '../../utils/whatsapp';

const CURRENT_YEAR = new Date().getFullYear();

/**
 * Footer Component — Deep Forest Sanctuary Theme
 * 
 * Deep, grounding luxury forest aesthetic:
 * - Rich sanctuary dark background (bg-[#08130B])
 * - Official white logo variant for dark backgrounds
 * - Muted ivory/sand typography with gold accents
 * - Clean multi-column sitemap and direct reservation contact
 */
export default function Footer() {
  return (
    <footer className="bg-[#08130B] text-ivory border-t border-white/10 pt-14 md:pt-20 pb-[calc(5.5rem+env(safe-area-inset-bottom,0px))] lg:pb-12 font-sans">
      <Container size="xl">
        
        {/* BRAND SIGNATURE & TOP CALLOUT */}
        <div className="pb-12 border-b border-white/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            {/* OFFICIAL GO FLAMINGO BRAND LOGO (Proper Authentic Identity) */}
            <div>
              <Link
                to="/"
                aria-label="Go Flamingo Resorts – Home"
                className="inline-flex items-center px-4 py-2.5 rounded-2xl bg-white/95 border border-white/20 shadow-md hover:bg-white transition-all duration-200"
              >
                <img
                  src="/assets/logo/go-flamingo-logo-trimmed.png"
                  alt="Go Flamingo Resorts – Sillari Gate, Pench"
                  className="h-9 sm:h-11 w-auto object-contain select-none"
                />
              </Link>
            </div>
            <div className="pt-1">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#C5A880] font-semibold block mb-0.5">
                Pench National Park · Sillari Gate
              </span>
              <p className="text-xs text-sand-light/80 font-light">
                {QUICK_CONTACT.address} · {QUICK_CONTACT.nagpurDistance}
              </p>
              <div className="pt-1">
                <a
                  href={QUICK_CONTACT.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#C5A880] hover:text-white transition-colors font-medium group"
                >
                  <svg className="w-3.5 h-3.5 text-[#C5A880] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="underline underline-offset-2">Get Directions on Google Maps ↗</span>
                </a>
              </div>
              <p className="text-[11px] text-sand/60 font-light mt-1">
                Safari Desk Hours: {QUICK_CONTACT.hours}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Link
              to="/contact?book=true#reservation-form-card"
              className="inline-flex items-center justify-center py-3 px-6 rounded-full bg-[#C5A880] text-[#08130B] text-xs uppercase tracking-[0.14em] font-bold hover:bg-[#d8be98] transition-colors shadow-sm text-center"
            >
              Book Your Stay
            </Link>
            <a
              href={buildWhatsAppUrl('Hello Go Flamingo Resort, I would like to inquire about room availability and safari booking at Pench – Sillari Gate.')}
              target={getWhatsAppTarget()}
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-xs uppercase tracking-[0.14em] font-semibold text-ivory transition-colors shadow-xs"
            >
              <WhatsAppIcon size="sm" className="text-[#25D366]" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

        {/* Multi-Column Sitemap */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-sm">
          
          {/* Column 1: About */}
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.16em] text-[#C5A880] font-semibold block">
              About Resort
            </span>
            <ul className="space-y-2 text-sand-light/80 font-light text-xs sm:text-sm">
              <li><Link to="/about" className="hover:text-gold transition-colors">About Go Flamingo</Link></li>
              <li><Link to="/resort" className="hover:text-gold transition-colors">Resort Overview</Link></li>
              <li><Link to="/resort/facilities" className="hover:text-gold transition-colors">Facilities & Lawns</Link></li>
              <li><Link to="/resort/pool" className="hover:text-gold transition-colors">Forest Stone Pool</Link></li>
              <li><Link to="/resort/dining" className="hover:text-gold transition-colors">Dining & Cuisine</Link></li>
              <li><Link to="/gallery" className="hover:text-gold transition-colors">Photo Gallery</Link></li>
            </ul>
          </div>

          {/* Column 2: Stay */}
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.16em] text-[#C5A880] font-semibold block">
              Stay & Packages
            </span>
            <ul className="space-y-2 text-sand-light/80 font-light text-xs sm:text-sm">
              <li><Link to="/stay/deluxe-rooms" className="hover:text-gold transition-colors">Deluxe Rooms</Link></li>
              <li><Link to="/stay/super-deluxe-rooms" className="hover:text-gold transition-colors">Super Deluxe Rooms</Link></li>
              <li><Link to="/stay/dormitory" className="hover:text-gold transition-colors">Group Dormitory</Link></li>
              <li><Link to="/resort/facilities" className="hover:text-gold transition-colors">Resort Facilities & Activities</Link></li>
              <li><Link to="/packages" className="hover:text-gold transition-colors">Curated Packages</Link></li>
            </ul>
          </div>

          {/* Column 3: Pench & Safari Experiences */}
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.16em] text-[#C5A880] font-semibold block">
              Pench & Safaris
            </span>
            <ul className="space-y-2 text-sand-light/80 font-light text-xs sm:text-sm">
              <li><Link to="/pench" className="hover:text-gold transition-colors">Discover Pench Reserve</Link></li>
              <li><Link to="/pench/sillari-gate" className="hover:text-gold transition-colors">Sillari Gate Advantage</Link></li>
              <li><Link to="/experiences/safari" className="hover:text-gold transition-colors">Jungle Safaris</Link></li>
              <li><Link to="/experiences/wildlife" className="hover:text-gold transition-colors">Wildlife & Birding</Link></li>
              <li><Link to="/experiences/nature" className="hover:text-gold transition-colors">Nature Trails</Link></li>
              <li><Link to="/pench/safari-guide" className="hover:text-gold transition-colors">Safari Permits & Guide</Link></li>
            </ul>
          </div>

          {/* Column 4: Events & Celebrations */}
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.16em] text-[#C5A880] font-semibold block">
              Events & Celebrations
            </span>
            <ul className="space-y-2 text-sand-light/80 font-light text-xs sm:text-sm">
              <li><Link to="/events#weddings" className="hover:text-gold transition-colors">5.1 Weddings & Ceremonies</Link></li>
              <li><Link to="/events#corporate" className="hover:text-gold transition-colors">5.2 Corporate Events</Link></li>
              <li><Link to="/events#conferences" className="hover:text-gold transition-colors">5.3 Conference Facilities</Link></li>
              <li><Link to="/events#social-celebrations" className="hover:text-gold transition-colors">5.4 Social Celebrations</Link></li>
              <li><Link to="/events" className="hover:text-gold transition-colors">All Venues & Lawns</Link></li>
            </ul>
          </div>

          {/* Column 5: Direct Contact */}
          <div className="space-y-3 col-span-2 md:col-span-1">
            <span className="text-xs uppercase tracking-[0.16em] text-[#C5A880] font-semibold block">
              Direct Contact
            </span>
            <div className="text-xs text-sand-light/80 space-y-2 font-light">
              <p>
                <a href={`tel:${QUICK_CONTACT.phoneRaw}`} className="hover:text-gold transition-colors inline-flex items-center gap-1.5">
                  <span className="font-semibold text-ivory">Call:</span>
                  <span>{QUICK_CONTACT.phone}</span>
                </a>
              </p>
              <p>
                <a
                  href={QUICK_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors inline-flex items-center gap-1.5"
                >
                  <WhatsAppIcon size="sm" className="text-[#25D366]" />
                  <span className="font-semibold text-ivory">WhatsApp:</span>
                  <span>{QUICK_CONTACT.whatsapp}</span>
                </a>
              </p>
              <p>
                <a href={`mailto:${QUICK_CONTACT.email}`} className="hover:text-gold transition-colors">
                  {QUICK_CONTACT.email}
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-sand/60">
          <p>© {CURRENT_YEAR} Go Flamingo Resort · Pench – Sillari Gate, Maharashtra, India.</p>
          <div className="flex items-center gap-5 text-[11px]">
            <Link to="/contact" className="hover:text-ivory transition-colors">Contact</Link>
            <Link to="/pench/safari-guide" className="hover:text-ivory transition-colors">Safari Guidelines</Link>
            <span className="text-white/20">|</span>
            <span className="text-sand/50 tracking-wider uppercase">
              Official Brand Website
            </span>
          </div>
        </div>

      </Container>
    </footer>
  );
}
