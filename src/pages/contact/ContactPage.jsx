import React, { useState, useEffect } from 'react';
import { useSearchParams, useLocation, Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Compass,
  Calendar,
  Users,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  ArrowDown,
  ShieldCheck,
  Sparkles,
  Car,
  Hotel,
  Trees,
  MessageSquare,
  ExternalLink,
  Check,
  Send,
} from 'lucide-react';
import {
  Container,
  Heading,
  Text,
  SectionEyebrow,
  Button,
  Badge,
  WhatsAppIcon,
} from '../../components/common';
import { QUICK_CONTACT } from '../../data/navigation';
import { AUTHENTIC_RESORT } from '../../data/images';
import { cn } from '../../utils/cn';

/**
 * ContactPage — Unified Direct Reservations & Inquiry Hub
 * 
 * Mobile-First Conversion Architecture:
 * - Clean 100dvh hero banner without mobile clipping or overlapping buttons.
 * - 2-Phase Interactive Reservation Form (Step 1: Stay & Safari -> Step 2: Guest Details).
 * - Mobile ordering: Form displays FIRST on mobile (order-1), followed by resort details (order-2).
 * - 100% Responsive inputs with zero horizontal box overflow or clipping.
 * - Dual Instant Dispatch on submit: Pre-filled WhatsApp transmission AND direct Email dispatch.
 */
export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const roomParam = searchParams.get('room');

  // Map incoming URL parameter to room category
  const getInitialRoom = (param) => {
    if (!param) return 'Deluxe Rooms (Haveli Garden View)';
    const p = param.toLowerCase();
    if (p.includes('super')) return 'Super Deluxe Rooms (Haveli Balcony Suite)';
    if (p.includes('dorm')) return 'Group AC Dormitory (Large Groups)';
    if (p.includes('wedding')) return 'Entire Property Buyout / Destination Wedding';
    if (p.includes('corporate')) return 'Entire Property Buyout / Corporate Retreat';
    if (p.includes('family') || p.includes('suite')) return 'Super Deluxe Rooms (Haveli Balcony Suite)';
    return 'Deluxe Rooms (Haveli Garden View)';
  };

  // Phase State: 1 = Stay & Safari, 2 = Guest Details & Confirmation
  const [phase, setPhase] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dateError, setDateError] = useState('');

  // Form State
  const [formData, setFormData] = useState({
    // Step 1: Travel Schedule & Stay
    checkIn: '',
    checkOut: '',
    adults: '2',
    children: '0',
    roomCategory: getInitialRoom(roomParam),
    safariCoordination: 'Yes, Sillari Core Zone Assistance Needed',
    // Step 2: Guest Contact Details
    inquiryType: 'Room Stay & Safari',
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    specialNotes: '',
  });

  const location = useLocation();
  const bookParam = searchParams.get('book');

  useEffect(() => {
    document.title = 'Direct Reservations & Contact | GoFlamingo Resort, Pench';

    // If navigated with ?book=true or hash #reservation-hub or roomParam, scroll directly to reservation form
    const shouldScrollToForm = 
      bookParam !== null || 
      location.hash === '#reservation-hub' || 
      location.hash === '#reservation-form-card' || 
      roomParam !== null;

    if (shouldScrollToForm) {
      const scrollToTarget = () => {
        const formCard = document.getElementById('reservation-form-card') || document.getElementById('reservation-hub');
        formCard?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      };
      const timer1 = setTimeout(scrollToTarget, 80);
      const timer2 = setTimeout(scrollToTarget, 300);
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [bookParam, location.hash, roomParam]);

  // Update room category if URL query changes
  useEffect(() => {
    if (roomParam) {
      setFormData((prev) => ({
        ...prev,
        roomCategory: getInitialRoom(roomParam),
      }));
    }
  }, [roomParam]);

  // Today's date in YYYY-MM-DD for min date attribute
  const todayDate = new Date().toISOString().split('T')[0];

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'checkIn' || name === 'checkOut') {
      setDateError('');
    }
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Phase 1 -> Phase 2 validation & step transition
  const handleProceedToPhase2 = (e) => {
    e.preventDefault();
    if (!formData.checkIn || !formData.checkOut) {
      setDateError('Please select both Check-In and Check-Out dates to proceed.');
      return;
    }
    setDateError('');
    setPhase(2);
    // Smooth scroll to top of form card for mobile comfort
    document.getElementById('reservation-form-card')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Construct comprehensive formatted inquiry text
  const generateInquiryMessage = () => {
    return `*NEW RESERVATION INQUIRY - GOFLAMINGO RESORT*
---------------------------------------
• Guest Name: ${formData.fullName || 'Valued Guest'}
• Phone (WhatsApp): ${formData.phoneNumber || 'Not provided'}
• Email: ${formData.emailAddress || 'Not provided'}
• Check-In Date: ${formData.checkIn || 'To be decided'}
• Check-Out Date: ${formData.checkOut || 'To be decided'}
• Travelers: ${formData.adults} Adults, ${formData.children} Children
• Accommodation: ${formData.roomCategory}
• Safari Assistance: ${formData.safariCoordination}
• Trip Purpose: ${formData.inquiryType}
• Special Notes: ${formData.specialNotes || 'None'}
---------------------------------------
Property: GoFlamingo Resort, Sillari Gate, Pench (NH 44)
Website: goflamingoresorts.com`;
  };

  const formattedMessage = generateInquiryMessage();
  const whatsappInquiryUrl = `https://wa.me/919372425968?text=${encodeURIComponent(formattedMessage)}`;
  const emailInquiryUrl = `mailto:${QUICK_CONTACT.email}?subject=${encodeURIComponent(
    `Resort Stay & Safari Inquiry - ${formData.fullName || 'Guest'}`
  )}&body=${encodeURIComponent(formattedMessage)}`;

  // Mobile detection to prevent iOS Safari blank tab bug
  const isMobileDevice = typeof navigator !== 'undefined' && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const linkTarget = isMobileDevice ? '_self' : '_blank';

  // Final Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 1. Immediately switch to submitted state so the page renders the confirmation hub
    setSubmitted(true);
    setIsSubmitting(false);

    // 2. Smoothly scroll to the confirmation card
    const targetEl = document.getElementById('reservation-form-card') || document.getElementById('reservation-hub');
    targetEl?.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // 3. Mobile Safari Fix for blank page:
    // NEVER use window.open(..., '_blank') on mobile because iOS Safari spawns an empty orphan tab
    // which remains blank when returning from WhatsApp!
    // Instead, direct navigation with window.location.href opens the native WhatsApp app in the SAME tab.
    if (isMobileDevice) {
      setTimeout(() => {
        window.location.href = whatsappInquiryUrl;
      }, 350);
    } else {
      window.open(whatsappInquiryUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="w-full bg-[#FAF8F5] text-charcoal font-sans antialiased overflow-x-hidden selection:bg-gold/30 selection:text-forest-deep">
      
      {/* ========================================================
          1. FULL-FRAME EDITORIAL HERO BANNER (100DVH VIEWPORT)
          ======================================================== */}
      <section className="relative w-full h-[100dvh] max-h-[100dvh] min-h-[560px] flex flex-col justify-end bg-forest-dark text-ivory overflow-hidden">
        {/* Background Photo */}
        <div className="absolute inset-0 z-0">
          <img
            src={AUTHENTIC_RESORT.photos.courtyardTwilight.src}
            alt="GoFlamingo Resort illuminated haveli courtyard at twilight in Pench"
            fetchPriority="high"
            className="w-full h-full object-cover object-[center_top] sm:object-center filter brightness-[0.96] contrast-[1.03]"
          />
          {/* Lighter architectural scrims */}
          <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-deep/60 to-forest-dark/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/90 via-forest-dark/40 to-transparent sm:block hidden" />
        </div>

        {/* Foreground Content */}
        <Container size="xl" noPadding className="relative z-10 w-full pt-24 sm:pt-36 md:pt-40 pb-6 sm:pb-12 px-4 sm:px-6">
          <div className="max-w-3xl">

            {/* Eyebrow Pill — Responsive & Clean on Mobile */}
            <div className="inline-flex items-center gap-2 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-black/45 border border-gold/50 text-gold-light text-[10px] sm:text-xs font-semibold tracking-wider uppercase mb-2.5 sm:mb-4 backdrop-blur-md shadow-sm">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span className="truncate">Direct Reservations • Sillari Gate, Pench</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2.5xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-ivory font-normal tracking-tight leading-[1.14] mb-2.5 sm:mb-4 text-balance drop-shadow-sm">
              Book Your Stay & <span className="text-gold font-serif italic">Contact Us</span>
            </h1>

            {/* Core Subtitle */}
            <p className="text-xs sm:text-base md:text-lg text-sand-light/95 leading-relaxed font-light mb-5 sm:mb-7 max-w-2xl border-l-2 border-gold/80 pl-3 sm:pl-3.5 drop-shadow-xs">
              Plan your jungle getaway to Pench Tiger Reserve. Book directly with our Sillari team for best seasonal tariffs, haveli room availability, and licensed gypsy safari assistance.
            </p>

            {/* High-Conversion Fast Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 pt-1">
              <button
                type="button"
                onClick={() => (document.getElementById('reservation-form-card') || document.getElementById('reservation-hub'))?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 pl-5 pr-2 py-2.5 rounded-full bg-gradient-to-r from-[#DFBF8E] via-[#C5A880] to-[#B39366] hover:from-[#E8CA9E] hover:to-[#C5A880] text-[#08130B] text-xs uppercase tracking-[0.12em] font-bold shadow-[0_4px_16px_rgba(197,168,128,0.25)] hover:shadow-[0_6px_22px_rgba(197,168,128,0.4)] border border-[#F3DFC1] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer text-center"
              >
                <span>Proceed to Reservation Form</span>
                <span className="w-6 h-6 rounded-full bg-[#08130B] text-[#DFBF8E] flex items-center justify-center transition-transform duration-300 group-hover:translate-y-0.5 shrink-0 shadow-inner">
                  <ArrowDown className="w-3 h-3 text-[#DFBF8E]" />
                </span>
              </button>

              <a
                href={`tel:${QUICK_CONTACT.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4.5 py-2.5 rounded-full bg-black/40 hover:bg-black/60 text-ivory border border-white/25 text-xs font-semibold uppercase tracking-wider backdrop-blur-md transition-all shadow-md text-center"
              >
                <Phone className="w-3.5 h-3.5 text-gold shrink-0" />
                <span>Call: {QUICK_CONTACT.phone}</span>
              </a>
            </div>

          </div>
        </Container>

        {/* Desktop-Only Trust Bar (Hidden on Mobile to completely eliminate clutter & text cuts) */}
        <div className="hidden sm:block relative z-10 w-full border-t border-white/10 bg-black/35 backdrop-blur-md">
          <Container size="xl" className="py-3 sm:py-3.5">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-xs">
              <div className="flex items-center gap-2 text-sand-light/90">
                <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
                <span className="truncate">Best Direct Rate Guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-sand-light/90">
                <Compass className="w-4 h-4 text-gold shrink-0" />
                <span className="truncate">5 Mins from Sillari Safari Gate</span>
              </div>
              <div className="flex items-center gap-2 text-sand-light/90">
                <Car className="w-4 h-4 text-gold shrink-0" />
                <span className="truncate">65 km / 1 Hr from Nagpur (NH 44)</span>
              </div>
              <div className="flex items-center gap-2 text-sand-light/90">
                <Hotel className="w-4 h-4 text-gold shrink-0" />
                <span className="truncate">20 Haveli Rooms & Dormitory</span>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* ========================================================
          2. RESERVATION & INQUIRY HUB
          (Mobile First: Form appears FIRST [order-1], Info [order-2])
          ======================================================== */}
      <section id="reservation-hub" className="py-8 sm:py-20 bg-[#FAF8F5] scroll-mt-16 w-full max-w-full overflow-x-hidden">
        <Container size="xl" noPadding className="w-full max-w-full px-3.5 sm:px-6 md:px-8 mx-auto">
          
          {/* Section Introduction */}
          <div className="max-w-3xl mb-6 sm:mb-12">
            <SectionEyebrow color="terracotta" withLine className="mb-2">
              Direct Reservation Desk • Instant Confirmation
            </SectionEyebrow>
            <Heading as="h2" variant="h2" font="serif" color="forest" className="mb-2 sm:mb-3 text-balance">
              Plan Your Pench Experience With Us
            </Heading>
            <Text variant="lead" color="muted" className="font-light text-xs sm:text-base leading-relaxed">
              Book directly with GoFlamingo Resort to secure the best seasonal tariffs, verified haveli rooms, and Pench Sillari Gate safari coordination without third-party fees.
            </Text>
          </div>

          {/* Master Responsive Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start w-full min-w-0 max-w-full">
            
            {/* ====================================================
                FORM COLUMN: order-1 on mobile (APPEARS FIRST!),
                order-2 on desktop (RIGHT COLUMN)
                ==================================================== */}
            <div className="order-1 lg:order-2 lg:col-span-7 w-full min-w-0 max-w-full">
              <div
                id="reservation-form-card"
                className="p-3.5 sm:p-7 md:p-9 rounded-[6px] bg-ivory border-2 border-[#E7DFD0] shadow-[0_10px_35px_rgba(0,0,0,0.05)] relative w-full min-w-0 max-w-full box-border overflow-hidden scroll-mt-20 sm:scroll-mt-28"
              >
                
                {submitted ? (
                  /* ==============================================
                     SUBMISSION SUCCESS STATE
                     (Direct WhatsApp & Email Dispatch Links)
                     ============================================== */
                  <div className="py-6 sm:py-10 text-center space-y-5">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-emerald-100 border-2 border-emerald-400 text-emerald-700 flex items-center justify-center text-3xl font-serif shadow-inner">
                      ✓
                    </div>

                    <div>
                      <SectionEyebrow color="terracotta" className="mb-1.5">
                        Inquiry Received Successfully
                      </SectionEyebrow>
                      <Heading as="h3" variant="h2" font="serif" color="forest" className="mb-2 text-xl sm:text-2xl">
                        Thank You, {formData.fullName || 'Valued Guest'}
                      </Heading>
                      <Text variant="lead" color="muted" className="max-w-md mx-auto font-light text-xs sm:text-sm leading-relaxed">
                        Your direct stay & safari inquiry has been dispatched to the GoFlamingo reservations desk at Sillari Gate.
                      </Text>
                    </div>

                    {/* Summary Card */}
                    <div className="p-4 rounded-[4px] bg-[#F7F4EE] border border-[#DFD7C7] text-left text-xs space-y-1.5 max-w-md mx-auto">
                      <p className="text-[11px] uppercase tracking-wider text-forest font-bold border-b border-[#DFD7C7] pb-1 mb-2">
                        Inquiry Details Summary
                      </p>
                      <p><strong>Dates:</strong> {formData.checkIn || 'TBD'} to {formData.checkOut || 'TBD'}</p>
                      <p><strong>Guests:</strong> {formData.adults} Adults, {formData.children} Children</p>
                      <p><strong>Room Category:</strong> {formData.roomCategory}</p>
                      <p><strong>Safari Assistance:</strong> {formData.safariCoordination}</p>
                      <p><strong>Phone (WhatsApp):</strong> {formData.phoneNumber || 'Not provided'}</p>
                      {formData.specialNotes && (
                        <p><strong>Special Notes:</strong> {formData.specialNotes}</p>
                      )}
                    </div>

                    {/* Dual Action Dispatch Buttons (WhatsApp + Email) */}
                    <div className="pt-2 space-y-2.5 max-w-md mx-auto">
                      <a
                        href={whatsappInquiryUrl}
                        target={linkTarget}
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-full bg-[#25D366] hover:bg-emerald-400 text-[#08130B] text-xs uppercase tracking-wider font-bold transition-colors shadow-md text-center cursor-pointer"
                      >
                        <WhatsAppIcon size="sm" className="text-[#08130B] shrink-0" />
                        <span>1. Open in WhatsApp (+91 93724 25968)</span>
                      </a>

                      <a
                        href={emailInquiryUrl}
                        target="_self"
                        className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-forest-deep hover:bg-forest text-ivory text-xs uppercase tracking-wider font-semibold transition-colors shadow-sm text-center cursor-pointer"
                      >
                        <Mail className="w-4 h-4 text-gold shrink-0" />
                        <span>2. Send Email Copy ({QUICK_CONTACT.email})</span>
                      </a>
                      
                      <button
                        type="button"
                        onClick={() => {
                          setSubmitted(false);
                          setPhase(1);
                          setFormData({
                            checkIn: '',
                            checkOut: '',
                            adults: '2',
                            children: '0',
                            roomCategory: 'Deluxe Rooms (Haveli Garden View)',
                            safariCoordination: 'Yes, Sillari Core Zone Assistance Needed',
                            inquiryType: 'Room Stay & Safari',
                            fullName: '',
                            phoneNumber: '',
                            emailAddress: '',
                            specialNotes: '',
                          });
                        }}
                        className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-full bg-sand-light text-forest text-xs uppercase tracking-wider font-medium hover:bg-sand transition-colors border border-sand-dark/40"
                      >
                        Start a New Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  /* ==============================================
                     THE 2-PHASE INTERACTIVE INQUIRY FORM
                     ============================================== */
                  <div className="space-y-6">
                    
                    {/* Stepper Header Tabs (Interactive 2 Phases) */}
                    <div className="border-b border-[#E6DEC9] pb-4">
                      
                      {/* Step Switcher Buttons */}
                      <div className="grid grid-cols-2 gap-1.5 sm:gap-2 mb-3 w-full min-w-0">
                        <button
                          type="button"
                          onClick={() => setPhase(1)}
                          className={cn(
                            'flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 px-2 sm:px-3 rounded-[4px] text-[11px] sm:text-xs font-semibold tracking-wider uppercase transition-all border cursor-pointer min-w-0',
                            phase === 1
                              ? 'bg-forest-deep text-ivory border-forest-deep shadow-xs'
                              : 'bg-sand-light/60 text-charcoal-muted border-[#D5C9B3] hover:bg-sand-light'
                          )}
                        >
                          <span className={cn(
                            'w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0',
                            phase === 1 ? 'bg-gold text-forest-deep' : 'bg-sand text-charcoal'
                          )}>
                            1
                          </span>
                          <span className="truncate">Stay & Safari</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            if (formData.checkIn && formData.checkOut) {
                              setPhase(2);
                            } else {
                              setDateError('Please select travel dates first.');
                            }
                          }}
                          className={cn(
                            'flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 px-2 sm:px-3 rounded-[4px] text-[11px] sm:text-xs font-semibold tracking-wider uppercase transition-all border cursor-pointer min-w-0',
                            phase === 2
                              ? 'bg-forest-deep text-ivory border-forest-deep shadow-xs'
                              : 'bg-sand-light/60 text-charcoal-muted border-[#D5C9B3] hover:bg-sand-light'
                          )}
                        >
                          <span className={cn(
                            'w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0',
                            phase === 2 ? 'bg-gold text-forest-deep' : 'bg-sand text-charcoal'
                          )}>
                            2
                          </span>
                          <span className="truncate">Guest Details</span>
                        </button>
                      </div>

                      {/* Visual Progress Line */}
                      <div className="w-full bg-[#E0D7C5] h-1.5 rounded-full overflow-hidden">
                        <div
                          className="bg-gold h-full transition-all duration-300"
                          style={{ width: phase === 1 ? '50%' : '100%' }}
                        />
                      </div>

                      <div className="flex items-center justify-between text-[11px] text-charcoal-muted mt-2 font-light">
                        <span>{phase === 1 ? 'Step 1: Choose Travel Dates & Room' : 'Step 2: Enter Contact & Submit'}</span>
                        <span className="font-semibold text-forest">Phase {phase} of 2</span>
                      </div>
                    </div>

                    {/* -------------------------------------------
                        PHASE 1: STAY & SAFARI SELECTION
                        ------------------------------------------- */}
                    {phase === 1 && (
                      <form onSubmit={handleProceedToPhase2} className="space-y-4 sm:space-y-5 w-full min-w-0 max-w-full">
                        
                        <div>
                          <h3 className="font-serif text-lg sm:text-xl text-forest font-normal mb-1">
                            Travel Schedule & Cottage Category
                          </h3>
                          <p className="text-xs text-charcoal-muted font-light">
                            Select your tentative check-in and check-out dates to check direct availability.
                          </p>
                        </div>

                        {/* Date Error Message */}
                        {dateError && (
                          <div className="p-3 rounded-[3px] bg-red-50 border border-red-200 text-xs text-red-700">
                            {dateError}
                          </div>
                        )}

                        {/* Check-In / Check-Out */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full min-w-0 max-w-full">
                          <div className="w-full min-w-0 max-w-full">
                            <label className="text-[11px] font-bold uppercase tracking-wider text-charcoal-muted block mb-1">
                              Check-In Date *
                            </label>
                            <input
                              type="date"
                              required
                              name="checkIn"
                              min={todayDate}
                              value={formData.checkIn}
                              onChange={handleChange}
                              className="w-full min-w-0 max-w-full block h-11 px-3 py-2 rounded-[3px] bg-ivory border border-[#D5C9B3] text-base sm:text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent box-border appearance-none cursor-pointer"
                            />
                          </div>

                          <div className="w-full min-w-0 max-w-full">
                            <label className="text-[11px] font-bold uppercase tracking-wider text-charcoal-muted block mb-1">
                              Check-Out Date *
                            </label>
                            <input
                              type="date"
                              required
                              name="checkOut"
                              min={formData.checkIn || todayDate}
                              value={formData.checkOut}
                              onChange={handleChange}
                              className="w-full min-w-0 max-w-full block h-11 px-3 py-2 rounded-[3px] bg-ivory border border-[#D5C9B3] text-base sm:text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent box-border appearance-none cursor-pointer"
                            />
                          </div>
                        </div>

                        {/* Adults & Children */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full min-w-0 max-w-full">
                          <div className="w-full min-w-0 max-w-full">
                            <label className="text-[11px] font-bold uppercase tracking-wider text-charcoal-muted block mb-1">
                              Adults (Age 12+)
                            </label>
                            <select
                              name="adults"
                              value={formData.adults}
                              onChange={handleChange}
                              className="w-full min-w-0 max-w-full block h-11 px-3 py-2 rounded-[3px] bg-ivory border border-[#D5C9B3] text-base sm:text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent box-border cursor-pointer"
                            >
                              <option value="1">1 Adult</option>
                              <option value="2">2 Adults (Couple)</option>
                              <option value="3">3 Adults (With Extra Bed)</option>
                              <option value="4">4 Adults (2 Rooms)</option>
                              <option value="5+">5+ Adults (Group / Multi-Room)</option>
                            </select>
                          </div>

                          <div className="w-full min-w-0 max-w-full">
                            <label className="text-[11px] font-bold uppercase tracking-wider text-charcoal-muted block mb-1">
                              Children (Below 12)
                            </label>
                            <select
                              name="children"
                              value={formData.children}
                              onChange={handleChange}
                              className="w-full min-w-0 max-w-full block h-11 px-3 py-2 rounded-[3px] bg-ivory border border-[#D5C9B3] text-base sm:text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent box-border cursor-pointer"
                            >
                              <option value="0">0 Children</option>
                              <option value="1">1 Child</option>
                              <option value="2">2 Children</option>
                              <option value="3+">3+ Children</option>
                            </select>
                          </div>
                        </div>

                        {/* Preferred Accommodation */}
                        <div className="w-full min-w-0 max-w-full">
                          <label className="text-[11px] font-bold uppercase tracking-wider text-charcoal-muted block mb-1">
                            Preferred Accommodation
                          </label>
                          <select
                            name="roomCategory"
                            value={formData.roomCategory}
                            onChange={handleChange}
                            className="w-full min-w-0 max-w-full block h-11 px-3 py-2 rounded-[3px] bg-ivory border border-[#D5C9B3] text-base sm:text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent box-border cursor-pointer"
                          >
                            <option>Deluxe Rooms (Haveli Garden View)</option>
                            <option>Super Deluxe Rooms (Haveli Balcony Suite)</option>
                            <option>Group AC Dormitory (Large Groups)</option>
                            <option>Weekend Escape Package (Stay + Meals)</option>
                            <option>Entire Property Buyout / Destination Wedding</option>
                            <option>Corporate Offsite / Meeting Facility</option>
                          </select>
                        </div>

                        {/* Jungle Safari Coordination */}
                        <div className="w-full min-w-0 max-w-full">
                          <label className="text-[11px] font-bold uppercase tracking-wider text-charcoal-muted block mb-1">
                            Pench Safari Assistance (Sillari Gate)
                          </label>
                          <select
                            name="safariCoordination"
                            value={formData.safariCoordination}
                            onChange={handleChange}
                            className="w-full min-w-0 max-w-full block h-11 px-3 py-2 rounded-[3px] bg-ivory border border-[#D5C9B3] text-base sm:text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent box-border cursor-pointer"
                          >
                            <option>Yes, Sillari Core Zone Assistance Needed</option>
                            <option>Already Have Forest Department Permits</option>
                            <option>Not Needed / Stay & Pool Leisure Only</option>
                          </select>
                        </div>

                        {/* Proceed to Phase 2 Button */}
                        <div className="pt-2">
                          <button
                            type="submit"
                            className="group w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#DFBF8E] via-[#C5A880] to-[#B39366] hover:from-[#E8CA9E] hover:to-[#C5A880] text-[#08130B] font-bold text-xs uppercase tracking-[0.14em] shadow-md border border-[#F3DFC1] transition-all cursor-pointer"
                          >
                            <span>Continue to Step 2: Guest Details</span>
                            <span className="w-6 h-6 rounded-full bg-[#08130B] text-[#DFBF8E] flex items-center justify-center transition-transform group-hover:translate-x-1 shrink-0">
                              <ArrowRight className="w-3.5 h-3.5 text-[#DFBF8E]" />
                            </span>
                          </button>
                        </div>

                      </form>
                    )}

                    {/* -------------------------------------------
                        PHASE 2: GUEST CONTACT & SUBMIT
                        ------------------------------------------- */}
                    {phase === 2 && (
                      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 w-full min-w-0 max-w-full">
                        
                        <div>
                          <h3 className="font-serif text-lg sm:text-xl text-forest font-normal mb-1">
                            Guest Details & Final Transmission
                          </h3>
                          <p className="text-xs text-charcoal-muted font-light">
                            Provide your contact details. Submitting connects directly with our reservations manager via WhatsApp and Email.
                          </p>
                        </div>

                        {/* Full Name & Phone */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full min-w-0 max-w-full">
                          <div className="w-full min-w-0 max-w-full">
                            <label className="text-[11px] font-bold uppercase tracking-wider text-charcoal-muted block mb-1">
                              Lead Guest Full Name *
                            </label>
                            <input
                              type="text"
                              required
                              name="fullName"
                              placeholder="e.g. Vikram Sharma"
                              value={formData.fullName}
                              onChange={handleChange}
                              className="w-full min-w-0 max-w-full block h-11 px-3 py-2 rounded-[3px] bg-ivory border border-[#D5C9B3] text-base sm:text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent box-border"
                            />
                          </div>

                          <div className="w-full min-w-0 max-w-full">
                            <label className="text-[11px] font-bold uppercase tracking-wider text-charcoal-muted block mb-1">
                              Phone (with WhatsApp) *
                            </label>
                            <input
                              type="tel"
                              required
                              name="phoneNumber"
                              placeholder="+91 98765 43210"
                              value={formData.phoneNumber}
                              onChange={handleChange}
                              className="w-full min-w-0 max-w-full block h-11 px-3 py-2 rounded-[3px] bg-ivory border border-[#D5C9B3] text-base sm:text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent box-border"
                            />
                          </div>
                        </div>

                        {/* Email & Purpose */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full min-w-0 max-w-full">
                          <div className="w-full min-w-0 max-w-full">
                            <label className="text-[11px] font-bold uppercase tracking-wider text-charcoal-muted block mb-1">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              required
                              name="emailAddress"
                              placeholder="vikram@example.com"
                              value={formData.emailAddress}
                              onChange={handleChange}
                              className="w-full min-w-0 max-w-full block h-11 px-3 py-2 rounded-[3px] bg-ivory border border-[#D5C9B3] text-base sm:text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent box-border"
                            />
                          </div>

                          <div className="w-full min-w-0 max-w-full">
                            <label className="text-[11px] font-bold uppercase tracking-wider text-charcoal-muted block mb-1">
                              Purpose of Visit
                            </label>
                            <select
                              name="inquiryType"
                              value={formData.inquiryType}
                              onChange={handleChange}
                              className="w-full min-w-0 max-w-full block h-11 px-3 py-2 rounded-[3px] bg-ivory border border-[#D5C9B3] text-base sm:text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent box-border cursor-pointer"
                            >
                              <option>Room Stay & Safari</option>
                              <option>Family Vacation</option>
                              <option>Couple Getaway</option>
                              <option>Destination Wedding</option>
                              <option>Corporate Offsite / Conference</option>
                              <option>Day Picnic & Pool</option>
                            </select>
                          </div>
                        </div>

                        {/* Special Requests */}
                        <div className="w-full min-w-0 max-w-full">
                          <label className="text-[11px] font-bold uppercase tracking-wider text-charcoal-muted block mb-1">
                            Special Requests / Notes (Optional)
                          </label>
                          <textarea
                            rows={3}
                            name="specialNotes"
                            value={formData.specialNotes}
                            onChange={handleChange}
                            placeholder="Meal preferences, estimated arrival time, extra beds needed..."
                            className="w-full min-w-0 max-w-full block px-3 py-2.5 rounded-[3px] bg-ivory border border-[#D5C9B3] text-base sm:text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent box-border"
                          />
                        </div>

                        {/* Summary Pill of Phase 1 */}
                        <div className="p-3 rounded-[3px] bg-sand-light/60 border border-[#D5C9B3] text-xs text-charcoal-muted flex items-center justify-between">
                          <div>
                            <span className="font-semibold text-forest block">
                              {formData.checkIn || 'Dates pending'} → {formData.checkOut || 'pending'}
                            </span>
                            <span className="text-[11px]">
                              {formData.adults} Adults · {formData.roomCategory}
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() => setPhase(1)}
                            className="text-xs text-terracotta font-semibold underline hover:text-forest"
                          >
                            Edit Dates
                          </button>
                        </div>

                        {/* Dual Action Buttons */}
                        <div className="pt-2 space-y-3">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="group w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-gradient-to-r from-[#DFBF8E] via-[#C5A880] to-[#B39366] hover:from-[#E8CA9E] hover:to-[#C5A880] text-[#08130B] font-bold text-xs uppercase tracking-[0.14em] shadow-md border border-[#F3DFC1] transition-all cursor-pointer disabled:opacity-75"
                          >
                            <span>{isSubmitting ? 'Logging Inquiry...' : 'Submit Inquiry & Connect Directly'}</span>
                            <span className="w-6 h-6 rounded-full bg-[#08130B] text-[#DFBF8E] flex items-center justify-center transition-transform group-hover:translate-x-1 shrink-0">
                              <ArrowRight className="w-3.5 h-3.5 text-[#DFBF8E]" />
                            </span>
                          </button>

                          <div className="grid grid-cols-2 gap-2">
                            <a
                              href={whatsappInquiryUrl}
                              target={linkTarget}
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-full bg-[#132A1D] hover:bg-[#1A3A27] text-white border-2 border-[#25D366]/60 text-[11px] uppercase tracking-wider font-bold transition-all text-center"
                            >
                              <WhatsAppIcon size="sm" className="text-[#25D366] shrink-0" />
                              <span className="truncate">WhatsApp</span>
                            </a>

                            <a
                              href={emailInquiryUrl}
                              target="_self"
                              className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-full bg-forest-dark hover:bg-forest text-ivory border border-gold/40 text-[11px] uppercase tracking-wider font-semibold transition-all text-center"
                            >
                              <Mail className="w-3.5 h-3.5 text-gold shrink-0" />
                              <span className="truncate">Send Email</span>
                            </a>
                          </div>

                          <div className="flex items-center justify-center pt-1">
                            <button
                              type="button"
                              onClick={() => setPhase(1)}
                              className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs text-charcoal-muted hover:text-forest underline transition-colors cursor-pointer"
                            >
                              <ArrowLeft className="w-3 h-3" />
                              <span>Back to Dates & Room Selection</span>
                            </button>
                          </div>
                        </div>

                        {/* Footnote Reassurance */}
                        <div className="text-center text-[11px] text-charcoal-muted flex items-center justify-center gap-1.5 font-light pt-1">
                          <ShieldCheck className="w-3.5 h-3.5 text-forest shrink-0" />
                          <span>Direct Host Reservation • Zero Booking Commission • Instant Response</span>
                        </div>

                      </form>
                    )}

                  </div>
                )}

              </div>
            </div>

            {/* ====================================================
                LEFT COLUMN: order-2 on mobile (APPEARS AFTER FORM!),
                order-1 on desktop (LEFT COLUMN)
                ==================================================== */}
            <div className="order-2 lg:order-1 lg:col-span-5 space-y-6 w-full min-w-0 max-w-full">
              
              {/* Card 1: Authentic Resort Photographic Card */}
              <div className="rounded-[6px] overflow-hidden border border-sand/60 bg-ivory shadow-sm w-full">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={AUTHENTIC_RESORT.photos.archedCorridorFountain.src}
                    alt="GoFlamingo Resort authentic arched haveli corridor and stone fountain"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/85 via-forest-dark/25 to-transparent" />
                  
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-forest-dark/80 text-gold-light border border-gold/40 text-[10px] font-semibold tracking-wide backdrop-blur-md">
                      <Trees className="w-3 h-3 text-gold" />
                      <span>Sillari Buffer Zone</span>
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-ivory">
                    <p className="font-serif text-base sm:text-lg text-ivory leading-snug">
                      GoFlamingo Resort
                    </p>
                    <p className="text-[11px] sm:text-xs text-sand-light/90 font-light">
                      20 Haveli-style Rooms, Swimming Pool & Forest Serenity
                    </p>
                  </div>
                </div>

                {/* Location Details & Highway Distance */}
                <div className="p-4 sm:p-5 space-y-3.5">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-terracotta block mb-1">
                      Exact Address & Coordinates
                    </span>
                    <p className="text-xs text-charcoal leading-relaxed font-normal">
                      {QUICK_CONTACT.address}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-[4px] bg-[#F2EDE4] border border-[#DFD7C7] text-xs text-charcoal-muted space-y-1.5">
                    <div className="flex items-start gap-2">
                      <Car className="w-3.5 h-3.5 text-forest mt-0.5 shrink-0" />
                      <p>
                        <strong>From Nagpur:</strong> ~65 km (1 hour smooth drive via 4-lane NH 44).
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Compass className="w-3.5 h-3.5 text-forest mt-0.5 shrink-0" />
                      <p>
                        <strong>Safari Gate:</strong> Just 5 minutes from Sillari Core Gate entry.
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="w-3.5 h-3.5 text-forest mt-0.5 shrink-0" />
                      <p>
                        <strong>Transit:</strong> Dr. Babasaheb Ambedkar Nagpur Airport & Railway Station.
                      </p>
                    </div>
                  </div>

                  {/* Google Maps Directions Button */}
                  <div>
                    <a
                      href={QUICK_CONTACT.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-forest-deep text-ivory text-xs font-semibold uppercase tracking-wider hover:bg-forest-jungle transition-all shadow-sm group cursor-pointer text-center"
                    >
                      <MapPin className="w-3.5 h-3.5 text-gold group-hover:scale-110 transition-transform shrink-0" />
                      <span>Get Directions on Google Maps ↗</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 2: Direct Contact Channels & Instant Calling */}
              <div className="p-5 sm:p-6 rounded-[6px] bg-forest-deep text-ivory border border-[#C5A880]/30 shadow-md space-y-4 w-full">
                <div>
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-gold font-bold block mb-0.5">
                    Direct Assistance Desk
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl text-ivory">
                    Call or WhatsApp Our Hosts
                  </h3>
                  <p className="text-[11px] sm:text-xs text-sand/80 font-light mt-0.5">
                    Direct communication ensures immediate tariff discounts and zero middlemen confusion.
                  </p>
                </div>

                <div className="space-y-2.5 pt-1 border-t border-sand/20">
                  {/* Phone 1 */}
                  <div className="flex items-center justify-between p-2.5 rounded-[4px] bg-forest-dark/60 border border-sand/20">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-7 h-7 rounded-full bg-gold/15 text-gold flex items-center justify-center shrink-0">
                        <Phone className="w-3.5 h-3.5" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] text-sand/70 block truncate">Primary Reservation</span>
                        <a href="tel:+919561957009" className="text-xs sm:text-sm font-semibold text-ivory hover:text-gold transition-colors block truncate">
                          +91 95619 57009
                        </a>
                      </div>
                    </div>
                    <a
                      href="tel:+919561957009"
                      className="px-2.5 py-1 rounded-full bg-gold/20 hover:bg-gold/30 text-gold-light text-[10px] font-semibold uppercase tracking-wider transition-colors shrink-0 ml-2"
                    >
                      Call
                    </a>
                  </div>

                  {/* Phone 2 */}
                  <div className="flex items-center justify-between p-2.5 rounded-[4px] bg-forest-dark/60 border border-sand/20">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-7 h-7 rounded-full bg-gold/15 text-gold flex items-center justify-center shrink-0">
                        <Phone className="w-3.5 h-3.5" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] text-sand/70 block truncate">Manager Line</span>
                        <a href="tel:+919372425968" className="text-xs sm:text-sm font-semibold text-ivory hover:text-gold transition-colors block truncate">
                          +91 93724 25968
                        </a>
                      </div>
                    </div>
                    <a
                      href="tel:+919372425968"
                      className="px-2.5 py-1 rounded-full bg-gold/20 hover:bg-gold/30 text-gold-light text-[10px] font-semibold uppercase tracking-wider transition-colors shrink-0 ml-2"
                    >
                      Call
                    </a>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-center justify-between p-2.5 rounded-[4px] bg-emerald-950/40 border border-[#25D366]/30">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-7 h-7 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0">
                        <WhatsAppIcon size="sm" className="text-[#25D366]" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] text-emerald-300/80 block truncate">Instant WhatsApp Desk</span>
                        <a
                          href="https://wa.me/919372425968?text=Hello%20Go%20Flamingo%20Resort%2C%20I%20would%20like%20to%20inquire%20about%20room%20availability%20and%20safari%20booking%20at%20Sillari%20Gate."
                          target={linkTarget}
                          rel="noopener noreferrer"
                          className="text-xs sm:text-sm font-semibold text-ivory hover:text-emerald-300 transition-colors block truncate"
                        >
                          +91 93724 25968
                        </a>
                      </div>
                    </div>
                    <a
                      href="https://wa.me/919372425968?text=Hello%20Go%20Flamingo%20Resort%2C%20I%20would%20like%20to%20inquire%20about%20room%20availability%20and%20safari%20booking%20at%20Sillari%20Gate."
                      target={linkTarget}
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 rounded-full bg-[#25D366] hover:bg-emerald-400 text-forest-deep text-[10px] font-bold uppercase tracking-wider transition-colors shrink-0 ml-2"
                    >
                      Chat
                    </a>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-2.5 p-2.5 rounded-[4px] bg-forest-dark/60 border border-sand/20 min-w-0">
                    <div className="w-7 h-7 rounded-full bg-gold/15 text-gold flex items-center justify-center shrink-0">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] text-sand/70 block truncate">Official Email</span>
                      <a href={`mailto:${QUICK_CONTACT.email}`} className="text-xs sm:text-sm font-medium text-ivory hover:text-gold transition-colors block truncate">
                        {QUICK_CONTACT.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-1 flex items-center gap-2 text-[10px] text-sand/70">
                  <Clock className="w-3 h-3 text-gold shrink-0" />
                  <span>Hours: {QUICK_CONTACT.hours}</span>
                </div>
              </div>

              {/* Card 3: Pench Tiger Safari Coordination Advisory */}
              <div className="p-4 sm:p-5 rounded-[6px] bg-sand-light/60 border border-[#D9CEBA] space-y-2 w-full">
                <div className="flex items-center gap-2">
                  <Badge variant="gold">Safari Advisory</Badge>
                  <span className="text-[11px] font-semibold text-forest uppercase tracking-wider">
                    Sillari Gate Permits
                  </span>
                </div>
                <h4 className="font-serif text-sm sm:text-base text-forest">
                  Booking Morning or Evening Safaris?
                </h4>
                <p className="text-xs text-charcoal-muted leading-relaxed font-light">
                  Pench Tiger Reserve gypsy permits are limited per shift. For confirmed entry through Sillari core gate, we recommend sending your inquiry early with tentative dates so our reservations desk can coordinate gypsy vehicles and naturalist guides.
                </p>
              </div>

            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================
          3. FAQ SECTION
          ======================================================== */}
      <section className="py-12 sm:py-16 bg-[#F4EFE7] border-t border-[#DFD7C7]">
        <Container size="lg" className="px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <SectionEyebrow color="terracotta" className="mb-1.5">
              Guest Assistance
            </SectionEyebrow>
            <Heading as="h3" variant="h3" font="serif" color="forest" className="text-xl sm:text-2xl">
              Frequently Asked Questions
            </Heading>
            <p className="text-xs text-charcoal-muted mt-1.5 font-light">
              Essential tips for traveling to Sillari Gate and staying at GoFlamingo Resort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-xs leading-relaxed">
            <div className="p-4 sm:p-5 rounded-[4px] bg-ivory border border-[#D5C9B3] space-y-1.5">
              <h4 className="font-serif text-sm font-semibold text-forest">
                How far is GoFlamingo Resort from Nagpur?
              </h4>
              <p className="text-charcoal-muted font-light">
                The resort is located just 65 km from Nagpur city via the smooth 4-lane National Highway 44 (NH 44). The drive takes only about 60 to 75 minutes by car.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-[4px] bg-ivory border border-[#D5C9B3] space-y-1.5">
              <h4 className="font-serif text-sm font-semibold text-forest">
                Can the resort assist with Pench safari bookings?
              </h4>
              <p className="text-charcoal-muted font-light">
                Yes! We coordinate licensed 4x4 open gypsies, certified forest guides, and gate transfers for the Sillari Core Zone. Please contact us as early as possible because permits sell out quickly.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-[4px] bg-ivory border border-[#D5C9B3] space-y-1.5">
              <h4 className="font-serif text-sm font-semibold text-forest">
                What are check-in and check-out timings?
              </h4>
              <p className="text-charcoal-muted font-light">
                Standard check-in is at 12:00 PM and check-out is at 10:30 AM. Early check-in or late check-out can be accommodated subject to room availability.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-[4px] bg-ivory border border-[#D5C9B3] space-y-1.5">
              <h4 className="font-serif text-sm font-semibold text-forest">
                Are swimming pool and dining available on-site?
              </h4>
              <p className="text-charcoal-muted font-light">
                Yes. Guests enjoy our turquoise swimming pool, rain dance setup, dedicated multicuisine dining hall, children’s play park, and indoor game zone.
              </p>
            </div>
          </div>
        </Container>
      </section>

    </div>
  );
}
