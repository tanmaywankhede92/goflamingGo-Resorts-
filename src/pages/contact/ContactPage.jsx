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
  ChevronDown,
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
 * 6 Curated Luxury Resort FAQs with verified details on Pench, Sillari Gate, tariffs, and amenities.
 */
const FAQS = [
  {
    question: "Where is GoFlamingo Resort located?",
    answer: "GoFlamingo Resort is located in Sillari, near Pench National Park in Maharashtra. It offers a comfortable base for guests planning a Pench getaway, wildlife safari or relaxing holiday surrounded by nature."
  },
  {
    question: "Can I book a Pench safari through GoFlamingo Resort?",
    answer: "Yes, you can contact GoFlamingo Resort for assistance with Pench safari bookings. Safari permits and availability are subject to the relevant booking system and forest department rules. We recommend enquiring in advance, especially during busy travel periods."
  },
  {
    question: "What types of rooms are available at GoFlamingo Resort?",
    answer: "GoFlamingo Resort offers Deluxe Rooms, Super Deluxe Rooms and group dormitory accommodation. Super Deluxe Rooms are more spacious, located on the first floor, and feature private balconies with beautiful views. Contact us to enquire about room availability for your dates."
  },
  {
    question: "What facilities are available at GoFlamingo Resort?",
    answer: "Guests can enjoy facilities including a swimming pool, restaurant and bar, landscaped gardens, a kids' play area, rain dance and a game zone with activities such as table tennis, snooker, carrom, chess and badminton. A conference room is also available for meetings and gatherings."
  },
  {
    question: "Is GoFlamingo Resort suitable for families and groups?",
    answer: "Yes, the resort welcomes families, friends and groups looking for a shared getaway near Pench National Park. With different accommodation options, recreational facilities and outdoor spaces, guests can plan a stay suited to their group. Contact us to discuss your requirements."
  },
  {
    question: "How can I check room prices and availability at GoFlamingo Resort?",
    answer: "You can contact GoFlamingo Resort directly by phone or WhatsApp to enquire about room rates, availability, meal options and stay arrangements. Prices may vary depending on your dates, room category and package requirements."
  }
];



/**
 * ContactPage — Unified Direct Reservations & Inquiry Hub
 * 
 * Aesthetic & Minimalist Architecture:
 * - 4-Card Quick Contact Action Strip for immediate calling & chat.
 * - Balanced 2-Column Split: Responsive Form on one side, Resort Details & Embedded Google Map on the other.
 * - Interactive Google Map embedded with direct coordinates to Sillari Gate Pench.
 * - 6-Question Smooth Accordion Dropdown with luxury colors and rotating chevron.
 */
export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const roomParam = searchParams.get('room');

  // FAQ Accordion State (first item open by default)
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const toggleFaq = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? -1 : index));
  };

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
  const whatsappInquiryUrl = `https://wa.me/919561957009?text=${encodeURIComponent(formattedMessage)}`;
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
          1. CINEMATIC LUXURY HERO BANNER (BREATHABLE & MAJESTIC)
          ======================================================== */}
      <section className="relative w-full min-h-[520px] sm:min-h-[580px] lg:min-h-[620px] flex flex-col justify-end bg-forest-dark text-ivory overflow-hidden">
        {/* Full-Bleed Authentic Haveli Courtyard Photo */}
        <div className="absolute inset-0 z-0">
          <img
            src={AUTHENTIC_RESORT.photos.courtyardTwilight.src}
            alt="GoFlamingo Resort illuminated  courtyard at twilight in Pench"
            fetchPriority="high"
            className="w-full h-full object-cover object-[center_top] sm:object-center filter brightness-[0.96] contrast-[1.03]"
          />
          {/* Tailored architectural gradient scrims */}
          <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-deep/60 to-forest-dark/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/90 via-forest-dark/40 to-transparent sm:block hidden" />
        </div>

        {/* Foreground Content */}
        <Container size="xl" className="relative z-10 w-full pt-28 sm:pt-36 md:pt-40 pb-12 sm:pb-16 px-5 sm:px-8 md:px-12 lg:px-16">
          <div className="max-w-3xl space-y-3 sm:space-y-4">

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-ivory font-normal tracking-tight leading-[1.12] text-balance">
              Reserve Your Sanctuary in Pench
            </h1>

            {/* Core Subtitle */}
            <p className="text-xs sm:text-base md:text-lg text-sand-light/95 leading-relaxed font-light max-w-2xl">
              Plan your wilderness escape to Pench Tiger Reserve. Book directly with our on-site team for best seasonal tariffs, haveli rooms, and verified gypsy safari assistance.
            </p>

            {/* High-Conversion Luxury Fast Actions */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <button
                type="button"
                onClick={() => (document.getElementById('reservation-form-card') || document.getElementById('reservation-hub'))?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#DFBF8E] hover:bg-[#E8CA9E] text-[#0E2718] text-xs font-semibold uppercase tracking-[0.14em] shadow-lg transition-all duration-300 cursor-pointer text-center"
              >
                <span>Go to Reservation Form ↓</span>
              </button>

              <a
                href={`tel:${QUICK_CONTACT.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/30 text-xs font-medium uppercase tracking-[0.14em] backdrop-blur-sm transition-all duration-300 shadow-sm text-center"
              >
                <Phone className="w-3.5 h-3.5 text-[#DFBF8E] shrink-0" />
                <span>Call: {QUICK_CONTACT.phone}</span>
              </a>

              <a
                href={whatsappInquiryUrl}
                target={linkTarget}
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-[#25D366]/40 text-xs font-medium uppercase tracking-[0.14em] backdrop-blur-sm transition-all duration-300 shadow-sm text-center"
              >
                <WhatsAppIcon size="sm" className="text-[#25D366] shrink-0" />
                <span>WhatsApp</span>
              </a>
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================
          2. RESERVATION & INQUIRY HUB
          - 4-Desk Quick Action Strip
          - Balanced 2-Column Split: Form (Left) & Resort Map (Right)
          ======================================================== */}
      <section id="reservation-hub" className="py-10 sm:py-20 bg-[#FAF8F5] scroll-mt-16 w-full overflow-x-hidden">
        <Container size="xl" className="px-5 sm:px-8 md:px-12 lg:px-16">
          
          {/* Section Introduction */}
          <div className="max-w-3xl mb-8 sm:mb-12">
            <SectionEyebrow color="terracotta" withLine className="mb-2">
              Direct Reservation Desk
            </SectionEyebrow>
            <Heading as="h2" variant="h2" font="serif" color="forest" className="mb-2 sm:mb-3 text-balance">
              Plan Your Pench Experience With Us
            </Heading>
            <Text variant="lead" color="muted" className="font-light text-xs sm:text-base leading-relaxed">
              Book directly with GoFlamingo Resort to secure the best seasonal tariffs, verified haveli rooms, and Pench Sillari Gate safari coordination without third-party fees.
            </Text>
          </div>

          {/* Master 2-Column Split: Clean Location & Contact Panel (Col-5) + Light Reservation Box (Col-7) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch w-full">
            
            {/* ====================================================
                LEFT COLUMN: RESORT LOCATION, DETAILS & CONTACT
                (Col-5 on lg, order-1 on mobile & desktop)
                Starts right from the TOP with Address & Details!
                ==================================================== */}
            <div className="order-1 lg:order-1 lg:col-span-5 flex flex-col w-full min-w-0">
              <div className="h-full rounded-2xl sm:rounded-3xl bg-[#10251B] text-[#FAF8F5] border border-[#23432F] p-5 sm:p-7 md:p-8 flex flex-col justify-between space-y-6 shadow-sm">
                
                {/* 1. TOP: Exact Resort Address & Proximity (Starts Right at Top) */}
                <div className="space-y-3">
                  <span className="text-[11px] uppercase tracking-[0.18em] text-[#C5A880] font-semibold block">
                    Resort Location & Coordinates
                  </span>
                  
                  <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-white font-normal leading-snug">
                    GoFlamingo Resort, Pench
                  </h3>

                  <p className="text-xs sm:text-sm text-[#D4C8B5] font-light leading-relaxed">
                    Sillari Gate Pench National Park, Sitapur, Maharashtra 441401, India
                  </p>

                </div>

                {/* 2. Direct Contact Numbers (Clean 2-Column Grid) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {/* Primary Reservations */}
                    <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between gap-2 hover:border-[#C5A880]/40 transition-colors">
                      <div className="min-w-0">
                        <span className="text-[10px] uppercase tracking-wider text-[#C5A880] font-medium block">Reservations</span>
                        <a href={`tel:${QUICK_CONTACT.phoneRaw}`} className="text-xs sm:text-sm font-semibold text-white hover:text-[#C5A880] transition-colors block truncate">
                          {QUICK_CONTACT.phone}
                        </a>
                        <span className="text-[10px] text-[#A69B88] block">Tariff & stay</span>
                      </div>
                      <a
                        href={`tel:${QUICK_CONTACT.phoneRaw}`}
                        className="px-2.5 py-1 rounded-md bg-[#C5A880] hover:bg-[#D4B991] text-[#0E2718] text-[11px] font-bold uppercase tracking-wider shrink-0 transition-colors"
                      >
                        Call
                      </a>
                    </div>

                    {/* Managerial Desk On-Site */}
                    <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between gap-2 hover:border-[#C5A880]/40 transition-colors">
                      <div className="min-w-0">
                        <span className="text-[10px] uppercase tracking-wider text-[#C5A880] font-medium block">Managerial Desk</span>
                        <a href={`tel:${QUICK_CONTACT.phoneSecondary.replace(/\s+/g, '')}`} className="text-xs sm:text-sm font-semibold text-white hover:text-[#C5A880] transition-colors block truncate">
                          {QUICK_CONTACT.phoneSecondary}
                        </a>
                        <span className="text-[10px] text-[#A69B88] block">Direct manager & safari support</span>
                      </div>
                      <a
                        href={`tel:${QUICK_CONTACT.phoneSecondary.replace(/\s+/g, '')}`}
                        className="px-2.5 py-1 rounded-md bg-white/15 hover:bg-white/25 text-white text-[11px] font-semibold uppercase tracking-wider shrink-0 transition-colors border border-white/15"
                      >
                        Call
                      </a>
                    </div>

                    {/* Instant WhatsApp */}
                    <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between gap-2 hover:border-[#25D366]/40 transition-colors">
                      <div className="min-w-0">
                        <span className="text-[10px] uppercase tracking-wider text-[#25D366] font-medium block">WhatsApp</span>
                        <a
                          href={`https://wa.me/${QUICK_CONTACT.whatsappNumber}?text=Hello%20Go%20Flamingo%20Resort%2C%20I%20would%20like%20to%20inquire%20about%20stay%20and%20safari%20availability%20at%20Sillari%20Gate.`}
                          target={linkTarget}
                          rel="noopener noreferrer"
                          className="text-xs sm:text-sm font-semibold text-white hover:text-[#25D366] transition-colors block truncate"
                        >
                          {QUICK_CONTACT.whatsapp}
                        </a>
                        <span className="text-[10px] text-[#A69B88] block">Instant quotes</span>
                      </div>
                      <a
                        href={`https://wa.me/${QUICK_CONTACT.whatsappNumber}?text=Hello%20Go%20Flamingo%20Resort%2C%20I%20would%20like%20to%20inquire%20about%20stay%20and%20safari%20availability%20at%20Sillari%20Gate.`}
                        target={linkTarget}
                        rel="noopener noreferrer"
                        className="px-2.5 py-1 rounded-md bg-[#25D366] hover:bg-[#20bd5a] text-[#08130B] text-[11px] font-bold uppercase tracking-wider shrink-0 transition-colors"
                      >
                        Chat
                      </a>
                    </div>

                    {/* Official Email */}
                    <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between gap-2 hover:border-[#C5A880]/40 transition-colors">
                      <div className="min-w-0">
                        <span className="text-[10px] uppercase tracking-wider text-[#C5A880] font-medium block">Email</span>
                        <a href={`mailto:${QUICK_CONTACT.email}`} className="text-xs font-semibold text-white hover:text-[#C5A880] transition-colors block truncate">
                          {QUICK_CONTACT.email}
                        </a>
                        <span className="text-[10px] text-[#A69B88] block">Group buyouts</span>
                      </div>
                      <a
                        href={`mailto:${QUICK_CONTACT.email}`}
                        className="px-2.5 py-1 rounded-md bg-white/15 hover:bg-white/25 text-white text-[11px] font-semibold uppercase tracking-wider shrink-0 transition-colors border border-white/15"
                      >
                        Email
                      </a>
                    </div>
                  </div>

                {/* 3. Interactive Location Map Embed */}
                <div className="space-y-2.5 pt-2 flex-1 flex flex-col justify-between">
                  <div className="relative flex-1 min-h-[190px] w-full rounded-xl overflow-hidden border border-white/10 bg-[#08150D]">
                    <iframe
                      title="GoFlamingo Resort Location Map"
                      src="https://maps.google.com/maps?q=Go+Flamingo+Resort,+Sillari+Gate,+Pench+National+Park,+Sitapur,+Maharashtra+441401&t=&z=14&ie=UTF8&iwloc=&output=embed"
                      className="w-full h-full border-0 absolute inset-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                  </div>

                  <a
                    href={QUICK_CONTACT.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/15 text-xs font-semibold uppercase tracking-wider transition-colors text-center cursor-pointer"
                  >
                    <span>Open in Google Maps App ↗</span>
                  </a>
                </div>

              </div>
            </div>

            {/* ====================================================
                RIGHT COLUMN: CRISP LUXURY LIGHT RESERVATION ENQUIRY BOX
                (Col-7 on lg, order-2 on mobile & desktop)
                ==================================================== */}
            <div className="order-2 lg:order-2 lg:col-span-7 flex flex-col w-full min-w-0 max-w-full">
              <div
                id="reservation-form-card"
                className="h-full p-4 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#E5DAC7] shadow-[0_8px_30px_rgba(16,37,27,0.04)] relative w-full min-w-0 max-w-full box-border overflow-hidden scroll-mt-20 sm:scroll-mt-28 flex flex-col justify-between"
              >
                
                {submitted ? (
                  /* ==============================================
                     SUBMISSION SUCCESS STATE
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
                    <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E5DAC7] text-left text-xs space-y-1.5 max-w-md mx-auto">
                      <p className="text-[11px] uppercase tracking-wider text-[#10251B] font-bold border-b border-[#E5DAC7] pb-1 mb-2">
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
                        <span>1. Open in WhatsApp (+91 95619 57009)</span>
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
                        className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-full bg-sand-light text-forest text-xs uppercase tracking-wider font-medium hover:bg-sand transition-colors border border-sand-dark/40 cursor-pointer"
                      >
                        Start a New Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  /* ==============================================
                     THE 2-PHASE INTERACTIVE INQUIRY FORM
                     ============================================== */
                  <div className="space-y-4 sm:space-y-6">
                    
                    {/* Stepper Header Tabs (Interactive 2 Phases) */}
                    <div className="border-b border-[#E8DFC8] pb-3 sm:pb-4">
                      
                      {/* Step Switcher Buttons */}
                      <div className="grid grid-cols-2 gap-2 mb-2.5 sm:mb-3.5 w-full min-w-0">
                        <button
                          type="button"
                          onClick={() => setPhase(1)}
                          className={cn(
                            'flex items-center justify-center gap-1.5 sm:gap-2 py-2 sm:py-2.5 px-2 sm:px-3 rounded-xl text-[11px] sm:text-xs font-semibold tracking-wider uppercase transition-all border cursor-pointer min-w-0',
                            phase === 1
                              ? 'bg-[#10251B] text-[#FAF8F5] border-[#10251B] shadow-sm'
                              : 'bg-[#FAF8F5] text-charcoal-muted border-[#E5DAC7] hover:bg-[#F2EDE4]'
                          )}
                        >
                          <span className={cn(
                            'w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center text-[9px] sm:text-[10px] font-bold shrink-0',
                            phase === 1 ? 'bg-[#DFBF8E] text-[#10251B]' : 'bg-[#E5DAC7] text-charcoal'
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
                            'flex items-center justify-center gap-1.5 sm:gap-2 py-2 sm:py-2.5 px-2 sm:px-3 rounded-xl text-[11px] sm:text-xs font-semibold tracking-wider uppercase transition-all border cursor-pointer min-w-0',
                            phase === 2
                              ? 'bg-[#10251B] text-[#FAF8F5] border-[#10251B] shadow-sm'
                              : 'bg-[#FAF8F5] text-charcoal-muted border-[#E5DAC7] hover:bg-[#F2EDE4]'
                          )}
                        >
                          <span className={cn(
                            'w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center text-[9px] sm:text-[10px] font-bold shrink-0',
                            phase === 2 ? 'bg-[#DFBF8E] text-[#10251B]' : 'bg-[#E5DAC7] text-charcoal'
                          )}>
                            2
                          </span>
                          <span className="truncate">Guest Details</span>
                        </button>
                      </div>

                      {/* Visual Progress Line */}
                      <div className="w-full bg-[#E8DFC8] h-1 sm:h-1.5 rounded-full overflow-hidden">
                        <div
                          className="bg-[#C5A880] h-full transition-all duration-300"
                          style={{ width: phase === 1 ? '50%' : '100%' }}
                        />
                      </div>

                      <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-charcoal-muted mt-1.5 sm:mt-2 font-light">
                        <span>{phase === 1 ? 'Step 1: Choose Travel Dates & Room' : 'Step 2: Enter Contact & Submit'}</span>
                        <span className="font-semibold text-forest">Phase {phase} of 2</span>
                      </div>
                    </div>

                    {/* -------------------------------------------
                        PHASE 1: STAY & SAFARI SELECTION
                        ------------------------------------------- */}
                    {phase === 1 && (
                      <form onSubmit={handleProceedToPhase2} className="space-y-3.5 sm:space-y-4 w-full min-w-0 max-w-full">
                        
                        <div>
                          <h3 className="font-serif text-[15px] sm:text-lg text-[#10251B] font-medium leading-tight mb-0.5 sm:mb-1">
                            Travel Schedule & Cottage Category
                          </h3>
                          <p className="text-[11px] sm:text-xs text-[#736B5E] font-light leading-relaxed">
                            Select your tentative check-in and check-out dates to check direct availability.
                          </p>
                        </div>

                        {/* Date Error Message */}
                        {dateError && (
                          <div className="p-2.5 sm:p-3 rounded-xl bg-red-50 border border-red-200 text-[11px] sm:text-xs text-red-700">
                            {dateError}
                          </div>
                        )}

                        {/* Check-In / Check-Out */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5 w-full min-w-0 max-w-full">
                          <div className="w-full min-w-0 max-w-full">
                            <label className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#635B4E] block mb-1">
                              Check-In Date *
                            </label>
                            <input
                              type="date"
                              required
                              name="checkIn"
                              min={todayDate}
                              value={formData.checkIn}
                              onChange={handleChange}
                              className="w-full min-w-0 max-w-full block h-10 sm:h-11 px-3 sm:px-3.5 rounded-xl bg-[#FAF8F5] border border-[#DFD7C7] text-xs sm:text-sm text-[#10251B] focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] box-border appearance-none cursor-pointer"
                            />
                          </div>

                          <div className="w-full min-w-0 max-w-full">
                            <label className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#635B4E] block mb-1">
                              Check-Out Date *
                            </label>
                            <input
                              type="date"
                              required
                              name="checkOut"
                              min={formData.checkIn || todayDate}
                              value={formData.checkOut}
                              onChange={handleChange}
                              className="w-full min-w-0 max-w-full block h-10 sm:h-11 px-3 sm:px-3.5 rounded-xl bg-[#FAF8F5] border border-[#DFD7C7] text-xs sm:text-sm text-[#10251B] focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] box-border appearance-none cursor-pointer"
                            />
                          </div>
                        </div>

                        {/* Adults & Children */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5 w-full min-w-0 max-w-full">
                          <div className="w-full min-w-0 max-w-full">
                            <label className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#635B4E] block mb-1">
                              Adults (12+ Yrs)
                            </label>
                            <select
                              name="adults"
                              value={formData.adults}
                              onChange={handleChange}
                              className="w-full min-w-0 max-w-full block h-10 sm:h-11 px-3 sm:px-3.5 rounded-xl bg-[#FAF8F5] border border-[#DFD7C7] text-xs sm:text-sm text-[#10251B] focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] box-border cursor-pointer"
                            >
                              <option value="1">1 Adult</option>
                              <option value="2">2 Adults (Couple)</option>
                              <option value="3">3 Adults (With Extra Bed)</option>
                              <option value="4">4 Adults (2 Rooms)</option>
                              <option value="5+">5+ Adults (Group / Multi-Room)</option>
                            </select>
                          </div>

                          <div className="w-full min-w-0 max-w-full">
                            <label className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#635B4E] block mb-1">
                              Children (Below 12)
                            </label>
                            <select
                              name="children"
                              value={formData.children}
                              onChange={handleChange}
                              className="w-full min-w-0 max-w-full block h-10 sm:h-11 px-3 sm:px-3.5 rounded-xl bg-[#FAF8F5] border border-[#DFD7C7] text-xs sm:text-sm text-[#10251B] focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] box-border cursor-pointer"
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
                          <label className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#635B4E] block mb-1">
                            Accommodation Category
                          </label>
                          <select
                            name="roomCategory"
                            value={formData.roomCategory}
                            onChange={handleChange}
                            className="w-full min-w-0 max-w-full block h-10 sm:h-11 px-3 sm:px-3.5 rounded-xl bg-[#FAF8F5] border border-[#DFD7C7] text-xs sm:text-sm text-[#10251B] focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] box-border cursor-pointer truncate"
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
                          <label className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#635B4E] block mb-1">
                            Safari Assistance (Sillari Gate)
                          </label>
                          <select
                            name="safariCoordination"
                            value={formData.safariCoordination}
                            onChange={handleChange}
                            className="w-full min-w-0 max-w-full block h-10 sm:h-11 px-3 sm:px-3.5 rounded-xl bg-[#FAF8F5] border border-[#DFD7C7] text-xs sm:text-sm text-[#10251B] focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] box-border cursor-pointer truncate"
                          >
                            <option>Yes, Sillari Core Zone Assistance Needed</option>
                            <option>Already Have Forest Department Permits</option>
                            <option>Not Needed / Stay & Pool Leisure Only</option>
                          </select>
                        </div>

                        {/* Proceed to Phase 2 Button */}
                        <div className="pt-1.5 sm:pt-2">
                          <button
                            type="submit"
                            className="group w-full inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-3.5 rounded-xl sm:rounded-full bg-gradient-to-r from-[#DFBF8E] via-[#C5A880] to-[#B39366] hover:from-[#E8CA9E] hover:to-[#C5A880] text-[#08130B] font-bold text-[11px] sm:text-xs uppercase tracking-wider shadow-sm border border-[#F3DFC1] transition-all cursor-pointer"
                          >
                            <span>Continue to Step 2: Guest Details</span>
                            <span className="w-5 h-5 rounded-full bg-[#08130B] text-[#DFBF8E] flex items-center justify-center transition-transform group-hover:translate-x-0.5 shrink-0">
                              <ArrowRight className="w-3 h-3 text-[#DFBF8E]" />
                            </span>
                          </button>
                        </div>

                      </form>
                    )}

                    {/* -------------------------------------------
                        PHASE 2: GUEST CONTACT & SUBMIT
                        ------------------------------------------- */}
                    {phase === 2 && (
                      <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4 w-full min-w-0 max-w-full">
                        
                        <div>
                          <h3 className="font-serif text-[15px] sm:text-lg text-[#10251B] font-medium leading-tight mb-0.5 sm:mb-1">
                            Guest Details & Final Transmission
                          </h3>
                          <p className="text-[11px] sm:text-xs text-[#736B5E] font-light leading-relaxed">
                            Provide your contact details. Submitting connects directly with our reservations manager via WhatsApp and Email.
                          </p>
                        </div>

                        {/* Full Name & Phone */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5 w-full min-w-0 max-w-full">
                          <div className="w-full min-w-0 max-w-full">
                            <label className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#635B4E] block mb-1">
                              Lead Guest Full Name *
                            </label>
                            <input
                              type="text"
                              required
                              name="fullName"
                              placeholder="e.g. Vikram Sharma"
                              value={formData.fullName}
                              onChange={handleChange}
                              className="w-full min-w-0 max-w-full block h-10 sm:h-11 px-3 sm:px-3.5 rounded-xl bg-[#FAF8F5] border border-[#DFD7C7] text-xs sm:text-sm text-[#10251B] focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] box-border"
                            />
                          </div>

                          <div className="w-full min-w-0 max-w-full">
                            <label className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#635B4E] block mb-1">
                              Phone (with WhatsApp) *
                            </label>
                            <input
                              type="tel"
                              required
                              name="phoneNumber"
                              placeholder="+91 98765 43210"
                              value={formData.phoneNumber}
                              onChange={handleChange}
                              className="w-full min-w-0 max-w-full block h-10 sm:h-11 px-3 sm:px-3.5 rounded-xl bg-[#FAF8F5] border border-[#DFD7C7] text-xs sm:text-sm text-[#10251B] focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] box-border"
                            />
                          </div>
                        </div>

                        {/* Email & Purpose */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5 w-full min-w-0 max-w-full">
                          <div className="w-full min-w-0 max-w-full">
                            <label className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#635B4E] block mb-1">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              required
                              name="emailAddress"
                              placeholder="vikram@example.com"
                              value={formData.emailAddress}
                              onChange={handleChange}
                              className="w-full min-w-0 max-w-full block h-10 sm:h-11 px-3 sm:px-3.5 rounded-xl bg-[#FAF8F5] border border-[#DFD7C7] text-xs sm:text-sm text-[#10251B] focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] box-border"
                            />
                          </div>

                          <div className="w-full min-w-0 max-w-full">
                            <label className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#635B4E] block mb-1">
                              Purpose of Visit
                            </label>
                            <select
                              name="inquiryType"
                              value={formData.inquiryType}
                              onChange={handleChange}
                              className="w-full min-w-0 max-w-full block h-10 sm:h-11 px-3 sm:px-3.5 rounded-xl bg-[#FAF8F5] border border-[#DFD7C7] text-xs sm:text-sm text-[#10251B] focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] box-border cursor-pointer truncate"
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
                          <label className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#635B4E] block mb-1">
                            Special Requests / Notes (Optional)
                          </label>
                          <textarea
                            rows={2}
                            name="specialNotes"
                            value={formData.specialNotes}
                            onChange={handleChange}
                            placeholder="Meal preferences, estimated arrival time, extra beds needed..."
                            className="w-full min-w-0 max-w-full block px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-xl bg-[#FAF8F5] border border-[#DFD7C7] text-xs sm:text-sm text-[#10251B] focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] box-border"
                          />
                        </div>

                        {/* Summary Pill of Phase 1 */}
                        <div className="p-2.5 sm:p-3 rounded-xl bg-[#FAF8F5] border border-[#E8DFC8] text-[11px] sm:text-xs text-charcoal-muted flex items-center justify-between">
                          <div>
                            <span className="font-semibold text-forest block">
                              {formData.checkIn || 'Dates pending'} → {formData.checkOut || 'pending'}
                            </span>
                            <span className="text-[10px] sm:text-[11px]">
                              {formData.adults} Adults · {formData.roomCategory}
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() => setPhase(1)}
                            className="text-[11px] sm:text-xs text-terracotta font-semibold underline hover:text-forest cursor-pointer"
                          >
                            Edit Dates
                          </button>
                        </div>

                        {/* Dual Action Buttons */}
                        <div className="pt-1.5 sm:pt-2 space-y-2.5 sm:space-y-3">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="group w-full inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-3.5 rounded-xl sm:rounded-full bg-gradient-to-r from-[#DFBF8E] via-[#C5A880] to-[#B39366] hover:from-[#E8CA9E] hover:to-[#C5A880] text-[#08130B] font-bold text-[11px] sm:text-xs uppercase tracking-wider shadow-sm border border-[#F3DFC1] transition-all cursor-pointer disabled:opacity-75"
                          >
                            <span>{isSubmitting ? 'Logging Inquiry...' : 'Submit Inquiry & Connect Directly'}</span>
                            <span className="w-5 h-5 rounded-full bg-[#08130B] text-[#DFBF8E] flex items-center justify-center transition-transform group-hover:translate-x-0.5 shrink-0">
                              <ArrowRight className="w-3 h-3 text-[#DFBF8E]" />
                            </span>
                          </button>

                          <div className="grid grid-cols-2 gap-2">
                            <a
                              href={whatsappInquiryUrl}
                              target={linkTarget}
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 sm:py-2.5 rounded-full bg-[#132A1D] hover:bg-[#1A3A27] text-white border-2 border-[#25D366]/60 text-[10px] sm:text-[11px] uppercase tracking-wider font-bold transition-all text-center cursor-pointer"
                            >
                              <WhatsAppIcon size="sm" className="text-[#25D366] shrink-0" />
                              <span className="truncate">WhatsApp</span>
                            </a>

                            <a
                              href={emailInquiryUrl}
                              target="_self"
                              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 sm:py-2.5 rounded-full bg-forest-dark hover:bg-forest text-ivory border border-gold/40 text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold transition-all text-center cursor-pointer"
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
                        <div className="text-center text-[10px] sm:text-[11px] text-charcoal-muted flex items-center justify-center gap-1.5 font-light pt-1">
                          <ShieldCheck className="w-3.5 h-3.5 text-forest shrink-0" />
                          <span>Direct Host Reservation • Zero Booking Commission • Instant Response</span>
                        </div>

                      </form>
                    )}

                  </div>
                )}

              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================
          3. FAQ SECTION — Warm Luxury Light Palette (Contrasting with Dark Footer)
          ======================================================== */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#FAF8F5] via-[#F4EDE2] to-[#FAF8F5] text-charcoal relative overflow-hidden border-t border-[#E5DAC7]">
        
        {/* Subtle Ambient Background Warm Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#DFBF8E]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <Container size="lg" className="px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10251B]/8 border border-[#10251B]/15 text-[#10251B] text-[11px] font-bold tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#A07C4A]" />
              <span>Guest Assistance & Safari Guidance</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-[#0E2718] font-normal tracking-tight mb-3">
              Frequently Asked <span className="text-[#8A6836] italic font-serif">Questions</span>
            </h2>
            
            <p className="text-xs sm:text-sm text-[#5A6578] font-light max-w-xl mx-auto leading-relaxed">
              Essential tips for traveling to Sillari Gate, booking licensed gypsies, and enjoying your stay at GoFlamingo Resort.
            </p>
          </div>

          {/* 6 Curated Luxury Dropdown Items with Crisp Ivory & Warm Terracotta Contrast */}
          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className={cn(
                    'rounded-2xl border transition-all duration-300 overflow-hidden backdrop-blur-xs',
                    isOpen
                      ? 'bg-[#FAF6EF] border-2 border-[#A07C4A] shadow-[0_8px_25px_rgba(160,124,74,0.12)]'
                      : 'bg-white border-2 border-[#E8DFC8] hover:border-[#C5A880] shadow-[0_2px_12px_rgba(0,0,0,0.02)]'
                  )}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 p-4.5 sm:p-5.5 text-left cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                      <span className={cn(
                        'w-7 h-7 sm:w-8 sm:h-8 rounded-full text-xs font-serif font-bold flex items-center justify-center shrink-0 transition-colors',
                        isOpen
                          ? 'bg-[#10251B] text-[#DFBF8E] shadow-sm'
                          : 'bg-[#FAF6EF] text-[#A07C4A] border border-[#E8DFC8]'
                      )}>
                        {idx + 1}
                      </span>
                      <span className={cn(
                        'font-serif text-sm sm:text-base md:text-lg leading-snug transition-colors',
                        isOpen ? 'text-[#10251B] font-semibold' : 'text-[#10251B] font-medium'
                      )}>
                        {faq.question}
                      </span>
                    </div>
                    
                    <span className={cn(
                      'w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300',
                      isOpen
                        ? 'rotate-180 bg-[#10251B] text-[#DFBF8E]'
                        : 'bg-[#FAF6EF] text-[#A07C4A] border border-[#E8DFC8] hover:bg-[#A07C4A] hover:text-white'
                    )}>
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {/* Smooth CSS Grid Dropdown Animation */}
                  <div
                    className={cn(
                      'grid transition-all duration-300 ease-in-out',
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 pt-1 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[#4A5568] leading-relaxed font-light border-t border-[#E8DFC8] mt-1 pl-12 sm:pl-16">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

    </div>
  );
}
