import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { Container, WhatsAppIcon } from '../common';
import { QUICK_CONTACT } from '../../data/navigation';
import { getWhatsAppTarget, buildWhatsAppUrl } from '../../utils/whatsapp';

const CURRENT_YEAR = new Date().getFullYear();

/**
 * Clean & Luxurious Resort Footer Component
 * 
 * - Unwanted quotes and redundant marketing blurbs removed
 * - Strict 1:1 mapping with main navigation tabs (No extra/dead links)
 * - "Gallery" cleanly labeled (No "4K" suffix)
 * - Redesigned contact section into a clean, perfectly aligned column
 *   replacing the bulky card widget for balanced symmetry
 */
export default function Footer() {
  return (
    <footer className="relative bg-[#050E07] text-ivory border-t border-[#C5A880]/30 pt-12 sm:pt-14 lg:pt-16 pb-[calc(5.5rem+env(safe-area-inset-bottom,0px))] lg:pb-10 font-sans overflow-hidden">
      
      {/* Ambient Lighting Accents */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[250px] bg-[#C5A880]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[200px] bg-[#1A3824]/20 rounded-full blur-[100px] pointer-events-none" />

      <Container size="xl" className="relative z-10">

        {/* ========================================================
            1. BRAND HEADER & ACTION BUTTONS
            ======================================================== */}
        <div className="pb-8 sm:pb-10 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          
          {/* Logo & Subtitle */}
          <div className="flex items-center gap-4">
            <Link
              to="/"
              aria-label="GoFlamingo Resort – Pench Sillari Gate"
              className="inline-block group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-lg"
            >
              <img
                src="/assets/logo/go-flamingo-logo-white.png"
                alt="GoFlamingo Resort – Pench National Park, Sillari Gate"
                className="h-11 sm:h-12 w-auto object-contain select-none group-hover:opacity-90 transition-opacity"
              />
            </Link>
          </div>

          {/* Top Quick Actions */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 w-full sm:w-auto">
            <Link
              to="/contact?book=true#reservation-form-card"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#DFBF8E] via-[#C5A880] to-[#B39366] text-[#08130B] text-xs font-bold uppercase tracking-[0.12em] shadow-md hover:from-[#E8CA9E] hover:to-[#C5A880] transition-all duration-300 text-center"
            >
              <span>Book Your Stay</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#08130B]" />
            </Link>

            <a
              href={buildWhatsAppUrl('Hello GoFlamingo Resort, I would like to inquire about room availability and safari booking at Sillari Gate.')}
              target={getWhatsAppTarget()}
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#0D2216] hover:bg-[#143522] border border-[#25D366]/40 hover:border-[#25D366] text-xs font-semibold uppercase tracking-[0.12em] text-white transition-all duration-300 shadow-sm"
            >
              <WhatsAppIcon size="sm" className="text-[#25D366]" />
              <span>WhatsApp Us</span>
            </a>
          </div>

        </div>


        {/* ========================================================
            2. MAIN NAVIGATION & CONTACT COLUMNS (Perfect Alignment)
            ======================================================== */}
        <div className="py-10 sm:py-12 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 items-start">
          
          {/* Column 1: Accommodations (Stay) */}
          <div className="space-y-4">
            <div className="border-b border-[#C5A880]/20 pb-2.5">
              <span className="text-xs uppercase tracking-[0.20em] text-[#DFBF8E] font-bold block">
                Accommodations
              </span>
            </div>
            <ul className="space-y-3 text-xs sm:text-[13px] text-[#CFC4B2] font-light">
              <li>
                <Link to="/stay/deluxe-rooms" className="hover:text-[#DFBF8E] transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DFBF8E]/40 group-hover:bg-[#DFBF8E] transition-colors" />
                  <span>Deluxe Rooms</span>
                </Link>
              </li>
              <li>
                <Link to="/stay/super-deluxe-rooms" className="hover:text-[#DFBF8E] transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DFBF8E]/40 group-hover:bg-[#DFBF8E] transition-colors" />
                  <span>Super Deluxe Balcony</span>
                </Link>
              </li>
              <li>
                <Link to="/stay/dormitory" className="hover:text-[#DFBF8E] transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DFBF8E]/40 group-hover:bg-[#DFBF8E] transition-colors" />
                  <span>Group Dormitory</span>
                </Link>
              </li>
              <li>
                <Link to="/resort/facilities" className="hover:text-[#DFBF8E] transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DFBF8E]/40 group-hover:bg-[#DFBF8E] transition-colors" />
                  <span>Facilities & Amenities</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Quick Links (Desktop & Tablet only - hidden on mobile) */}
          <div className="hidden sm:block space-y-4">
            <div className="border-b border-[#C5A880]/20 pb-2.5">
              <span className="text-xs uppercase tracking-[0.20em] text-[#DFBF8E] font-bold block">
                Quick Links
              </span>
            </div>
            <ul className="space-y-3 text-xs sm:text-[13px] text-[#CFC4B2] font-light">
              <li>
                <Link to="/" className="hover:text-[#DFBF8E] transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DFBF8E]/40 group-hover:bg-[#DFBF8E] transition-colors" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#DFBF8E] transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DFBF8E]/40 group-hover:bg-[#DFBF8E] transition-colors" />
                  <span>About GoFlamingo</span>
                </Link>
              </li>
              <li>
                <Link to="/pench-safari" className="hover:text-[#DFBF8E] transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DFBF8E]/40 group-hover:bg-[#DFBF8E] transition-colors" />
                  <span>Pench Safari Booking</span>
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-[#DFBF8E] transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DFBF8E]/40 group-hover:bg-[#DFBF8E] transition-colors" />
                  <span>Events & Celebrations</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#DFBF8E] transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DFBF8E]/40 group-hover:bg-[#DFBF8E] transition-colors" />
                  <span>Gallery</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#DFBF8E] transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DFBF8E]/40 group-hover:bg-[#DFBF8E] transition-colors" />
                  <span>Contact Desk</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Location (Clean, Perfectly Aligned) */}
          <div className="space-y-4">
            <div className="border-b border-[#C5A880]/20 pb-2.5">
              <span className="text-xs uppercase tracking-[0.20em] text-[#DFBF8E] font-bold block">
                Contact & Location
              </span>
            </div>

            <div className="space-y-3.5 text-xs sm:text-[13px] text-[#CFC4B2]">
              
              {/* Direct Call */}
              <a
                href={`tel:${QUICK_CONTACT.phoneRaw}`}
                className="flex items-center gap-3 group hover:text-[#DFBF8E] transition-colors"
              >
                <span className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#DFBF8E] group-hover:border-[#DFBF8E]/50 group-hover:bg-[#DFBF8E]/10 transition-all shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </span>
                <div className="min-w-0">
                  <span className="text-[10px] uppercase tracking-wider text-[#9E9484] block font-medium">Direct Reservations</span>
                  <span className="font-semibold text-white group-hover:text-[#DFBF8E] transition-colors">
                    {QUICK_CONTACT.phone}
                  </span>
                </div>
              </a>

              {/* WhatsApp Chat */}
              <a
                href={QUICK_CONTACT.whatsappUrl}
                target={getWhatsAppTarget()}
                rel="noopener noreferrer"
                className="flex items-center gap-3 group hover:text-[#25D366] transition-colors"
              >
                <span className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#25D366] group-hover:border-[#25D366]/50 group-hover:bg-[#25D366]/10 transition-all shrink-0">
                  <WhatsAppIcon size="sm" className="text-[#25D366]" />
                </span>
                <div className="min-w-0">
                  <span className="text-[10px] uppercase tracking-wider text-[#9E9484] block font-medium">WhatsApp Concierge</span>
                  <span className="font-semibold text-white group-hover:text-[#25D366] transition-colors">
                    {QUICK_CONTACT.whatsapp}
                  </span>
                </div>
              </a>

              {/* Email Inquiries */}
              <a
                href={`mailto:${QUICK_CONTACT.email}`}
                className="flex items-center gap-3 group hover:text-[#DFBF8E] transition-colors"
              >
                <span className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#DFBF8E] group-hover:border-[#DFBF8E]/50 group-hover:bg-[#DFBF8E]/10 transition-all shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </span>
                <div className="min-w-0">
                  <span className="text-[10px] uppercase tracking-wider text-[#9E9484] block font-medium">Email Inquiries</span>
                  <span className="text-white group-hover:text-[#DFBF8E] transition-colors truncate block">
                    {QUICK_CONTACT.email}
                  </span>
                </div>
              </a>

              {/* Location & Google Maps */}
              <a
                href={QUICK_CONTACT.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group hover:text-[#DFBF8E] transition-colors pt-0.5"
              >
                <span className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#DFBF8E] group-hover:border-[#DFBF8E]/50 group-hover:bg-[#DFBF8E]/10 transition-all shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                </span>
                <div className="min-w-0">
                  <span className="text-[10px] uppercase tracking-wider text-[#9E9484] block font-medium">Resort Location</span>
                  <span className="text-white font-medium block group-hover:text-[#DFBF8E] transition-colors">
                    Sillari Gate, Pench National Park
                  </span>
                  <span className="text-[11px] text-[#DFBF8E] font-medium inline-flex items-center gap-1 mt-0.5 group-hover:underline">
                    <span>Directions on Google Maps</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </a>

            </div>

            {/* Direct Booking Assurance Note */}
            <div className="pt-2 border-t border-white/10 flex items-center gap-2 text-[11px] text-[#A69B88]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
              <span>Direct booking guarantees best tariffs & safari assistance.</span>
            </div>

          </div>

        </div>


        {/* ========================================================
            3. CLEAN BOTTOM BAR (No Duplicate Links)
            ======================================================== */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9E9484]">
          
          <div className="text-center sm:text-left">
            <p className="font-light">
              © {CURRENT_YEAR} GoFlamingo Resorts. All rights reserved.
            </p>
            <p className="text-[11px] text-[#7A7163] mt-0.5">
              Sitapur, Sillari Gate, Pench National Park, Maharashtra 441401, India.
            </p>
          </div>

          <div className="text-center sm:text-right text-[11px] text-[#8C8373] font-light">
            Luxury Nature Resort & Safari Stays · Pench Tiger Reserve
          </div>

        </div>

      </Container>
    </footer>
  );
}
