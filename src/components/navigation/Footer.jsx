import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Logo, WhatsAppIcon } from '../common';
import { QUICK_CONTACT } from '../../data/navigation';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-forest-dark text-ivory border-t border-sand/20 pt-16 md:pt-24 pb-20 md:pb-12 font-sans">
      <Container size="xl">
        
        {/* BRAND SIGNATURE & TOP CALLOUT */}
        <div className="pb-16 border-b border-sand/15 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            {/* OFFICIAL GO FLAMINGO LOGO (Brand-Signature Area) */}
            <div>
              <Logo variant="footer" theme="dark" />
            </div>
            <div className="pt-2">
              <span className="text-[0.6875rem] uppercase tracking-editorial text-gold font-semibold block mb-1">
                Pench Tiger Reserve · Sillari Gate
              </span>
              <p className="text-xs text-sand/80 font-light">
                Near Sillari Gate, Madhya Pradesh, India · {QUICK_CONTACT.nagpurDistance}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Button
              as={Link}
              to="/book"
              variant="gold"
              size="lg"
              className="w-full sm:w-auto text-center justify-center shadow-xs"
            >
              Book Your Stay
            </Button>
            <a
              href="https://wa.me/919372425968"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 py-3 px-6 rounded-[2px] border border-sand/30 text-xs uppercase tracking-wider font-semibold text-sand hover:text-ivory hover:border-sand hover:bg-forest-deep/60 transition-all duration-200"
            >
              <WhatsAppIcon size="md" className="text-[#25D366]" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

        {/* Multi-Column Sitemap */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 text-sm">
          
          {/* Column 1: The Resort */}
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-editorial text-gold font-semibold block">
              The Resort
            </span>
            <ul className="space-y-2.5 text-sand/80 font-light text-xs sm:text-sm">
              <li><Link to="/resort" className="hover:text-gold transition-colors">Resort Overview</Link></li>
              <li><Link to="/resort/about" className="hover:text-gold transition-colors">About Go Flamingo</Link></li>
              <li><Link to="/resort/facilities" className="hover:text-gold transition-colors">Facilities & Lawns</Link></li>
              <li><Link to="/resort/pool" className="hover:text-gold transition-colors">Forest Pool</Link></li>
              <li><Link to="/resort/dining" className="hover:text-gold transition-colors">Dining & Cuisine</Link></li>
              <li><Link to="/gallery" className="hover:text-gold transition-colors">Photo Gallery</Link></li>
            </ul>
          </div>

          {/* Column 2: Stay */}
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-editorial text-gold font-semibold block">
              Stay & Packages
            </span>
            <ul className="space-y-2.5 text-sand/80 font-light text-xs sm:text-sm">
              <li><Link to="/rooms" className="hover:text-gold transition-colors">All Accommodations</Link></li>
              <li><Link to="/rooms/luxury-cottage" className="hover:text-gold transition-colors">Luxury Cottages</Link></li>
              <li><Link to="/rooms/family-suite" className="hover:text-gold transition-colors">Family Suites</Link></li>
              <li><Link to="/packages" className="hover:text-gold transition-colors">Curated Packages</Link></li>
              <li><Link to="/packages/weekend-escape" className="hover:text-gold transition-colors">Weekend Escape</Link></li>
              <li><Link to="/packages/wildlife-safari" className="hover:text-gold transition-colors">Wildlife Safari Tour</Link></li>
            </ul>
          </div>

          {/* Column 3: Experiences */}
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-editorial text-gold font-semibold block">
              Experiences
            </span>
            <ul className="space-y-2.5 text-sand/80 font-light text-xs sm:text-sm">
              <li><Link to="/experiences" className="hover:text-gold transition-colors">All Experiences</Link></li>
              <li><Link to="/experiences/safari" className="hover:text-gold transition-colors">Sillari Jungle Safari</Link></li>
              <li><Link to="/experiences/wildlife" className="hover:text-gold transition-colors">Wildlife & Birding</Link></li>
              <li><Link to="/experiences/nature" className="hover:text-gold transition-colors">Nature Trails</Link></li>
              <li><Link to="/experiences/family" className="hover:text-gold transition-colors">Family Adventures</Link></li>
              <li><Link to="/experiences/couples" className="hover:text-gold transition-colors">Romantic Retreats</Link></li>
            </ul>
          </div>

          {/* Column 4: Pench Guide */}
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-editorial text-gold font-semibold block">
              Pench Destination
            </span>
            <ul className="space-y-2.5 text-sand/80 font-light text-xs sm:text-sm">
              <li><Link to="/pench" className="hover:text-gold transition-colors">About Pench Reserve</Link></li>
              <li><Link to="/pench/sillari-gate" className="hover:text-gold transition-colors">Sillari Gate Advantage</Link></li>
              <li><Link to="/pench/safari-guide" className="hover:text-gold transition-colors">Safari Permits & Guide</Link></li>
              <li><Link to="/pench/how-to-reach" className="hover:text-gold transition-colors">How To Reach (Nagpur)</Link></li>
              <li><Link to="/pench/best-time-to-visit" className="hover:text-gold transition-colors">Best Time To Visit</Link></li>
              <li><Link to="/pench/things-to-do" className="hover:text-gold transition-colors">Things To Do</Link></li>
            </ul>
          </div>

          {/* Column 5: Events & Direct Contact */}
          <div className="space-y-4 col-span-2 md:col-span-1">
            <span className="text-xs uppercase tracking-editorial text-gold font-semibold block">
              Events & Logistics
            </span>
            <ul className="space-y-2.5 text-sand/80 font-light text-xs sm:text-sm">
              <li><Link to="/weddings" className="hover:text-gold transition-colors">Destination Weddings</Link></li>
              <li><Link to="/corporate" className="hover:text-gold transition-colors">Corporate Retreats</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact & Route Map</Link></li>
            </ul>
            <div className="pt-2 text-xs text-sand/70 space-y-1.5">
              <p className="font-semibold text-ivory">Direct Contact:</p>
              <p>
                <a href="tel:+919372425968" className="hover:text-gold transition-colors inline-flex items-center gap-1.5">
                  <span>Call:</span>
                  <span className="text-ivory font-medium">+91 93724 25968</span>
                </a>
              </p>
              <p>
                <a
                  href="https://wa.me/919372425968"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors inline-flex items-center gap-1.5"
                >
                  <WhatsAppIcon size="sm" className="text-[#25D366]" />
                  <span>WhatsApp:</span>
                  <span className="text-ivory font-medium">+91 93724 25968</span>
                </a>
              </p>
              <p>{QUICK_CONTACT.email}</p>
            </div>
          </div>

        </div>

        {/* Strict Accuracy Notice */}
        {/* <div className="py-6 px-5 rounded-[3px] bg-forest-deep border border-sand/15 text-xs text-sand/70 font-light leading-relaxed mb-10">
          <strong className="text-sand font-medium">Business Accuracy Notice: </strong>
          All safari excursions and park entry timings are strictly governed by Pench Tiger Reserve Forest Department rules. Room categories, inventory, and rack rates will be confirmed upon direct inquiry.
        </div> */}

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-sand/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sand/60">
          <p>© {CURRENT_YEAR} Go Flamingo Resort · Pench – Sillari Gate, Madhya Pradesh, India.</p>
          <div className="flex items-center gap-6 text-[0.75rem]">
            <Link to="/contact" className="hover:text-ivory transition-colors">Contact</Link>
            <Link to="/pench/safari-guide" className="hover:text-ivory transition-colors">Safari Guidelines</Link>
            <span className="text-sand/30">|</span>
            <span className="text-sand/50 tracking-wider uppercase text-[0.7rem]">
              Official Brand Identity
            </span>
          </div>
        </div>

      </Container>
    </footer>
  );
}
