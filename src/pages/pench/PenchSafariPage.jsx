import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Clock,
  Compass,
  MapPin,
  CheckCircle2,
  ChevronDown,
  ShieldCheck,
  Phone,
  Waves,
  UtensilsCrossed,
  Gamepad2,
  Trees,
  Baby,
  CloudRain,
  BedDouble,
  Info,
  Send,
} from 'lucide-react';
import { Container, WhatsAppIcon } from '../../components/common';
import { AUTHENTIC_RESORT, RESORT_DRIVE_PHOTOS, IMAGES } from '../../data/images';
import { QUICK_CONTACT } from '../../data/navigation';
import { getWhatsAppTarget } from '../../utils/whatsapp';
import { cn } from '../../utils/cn';
import ClosingCallToAction from '../home/components/ClosingCallToAction';

/**
 * PENCH SAFARI SCHEDULE DATA (Easily editable by developer without page redesign)
 */
const SAFARI_SCHEDULE = [
  {
    period: 'October',
    morningEntry: '6:00 AM',
    morningExit: '10:00 AM',
    afternoonEntry: '2:30 PM',
    afternoonExit: '6:30 PM',
  },
  {
    period: 'November–January',
    morningEntry: '6:30 AM',
    morningExit: '10:30 AM',
    afternoonEntry: '2:00 PM',
    afternoonExit: '6:00 PM',
  },
  {
    period: 'February–March',
    morningEntry: '6:00 AM',
    morningExit: '10:00 AM',
    afternoonEntry: '2:30 PM',
    afternoonExit: '6:30 PM',
  },
  {
    period: 'April–June',
    morningEntry: '5:30 AM',
    morningExit: '9:30 AM',
    afternoonEntry: '3:00 PM',
    afternoonExit: '7:00 PM',
  },
];

const SAFARI_GATES = [
  {
    id: 'sillari',
    name: 'Sillari Safari Gate',
    shortName: 'Sillari Gate',
    badge: 'Near GoFlamingo Resort',
    desc: 'Sillari is particularly relevant to guests staying in the Sillari area. If you are planning a safari and accommodation together, contact GoFlamingo Resort to enquire about available safari arrangements and your stay.',
    cta: 'ENQUIRE ABOUT SILLARI SAFARI',
    image: IMAGES.home.safari,
  },
  {
    id: 'chorbahuli',
    name: 'Chorbahuli Safari Gate',
    shortName: 'Chorbahuli Gate',
    badge: 'Maharashtra Pench',
    desc: 'Chorbahuli is another safari entry point in Maharashtra’s Pench landscape. Guests interested in this gate can contact our team to enquire about availability and booking arrangements for their preferred date.',
    cta: 'ENQUIRE ABOUT CHORBAHULI SAFARI',
    image: IMAGES.wildlife.tiger,
  },
  {
    id: 'khursapar',
    name: 'Khursapar Safari Gate',
    shortName: 'Khursapar Gate',
    badge: 'Popular Zone',
    desc: 'Khursapar is another option for visitors planning a Pench safari in Maharashtra. Contact GoFlamingo Resort to discuss your preferred date and enquire about the available booking arrangements.',
    cta: 'ENQUIRE ABOUT KHURSAPAR SAFARI',
    image: IMAGES.wildlife.spottedDeer,
  },
];

const FAQS = [
  {
    question: 'How long does a Pench safari last?',
    answer:
      'A typical Maharashtra Pench safari shift lasts approximately four hours. Exact timings depend on the season, gate and official instructions.',
  },
  {
    question: 'Can I enquire about safari bookings through GoFlamingo Resort?',
    answer:
      'Yes. Contact GoFlamingo Resort with your preferred date and gate to enquire about safari booking arrangements and availability. Permits remain subject to confirmation and applicable Forest Department rules.',
  },
  {
    question: 'Which Pench safari gates can I enquire about?',
    answer:
      'You can enquire about Sillari, Chorbahuli and Khursapar gates through our team. Availability depends on your chosen date and current operating arrangements.',
  },
  {
    question: 'Are morning and afternoon safaris available?',
    answer:
      'Pench generally operates morning and afternoon safari shifts during applicable tourism periods. The current schedule and gate availability should be confirmed before travel.',
  },
  {
    question: 'Can I stay at GoFlamingo Resort during my Pench safari trip?',
    answer:
      'Yes. GoFlamingo Resort in Sillari offers Deluxe Rooms, Super Deluxe Rooms and a Group Dormitory. Contact our team to enquire about room availability.',
  },
  {
    question: 'Does a safari enquiry guarantee a permit or tiger sighting?',
    answer:
      'No. Permits depend on availability and Forest Department rules. Wildlife sightings cannot be guaranteed.',
  },
];

export default function PenchSafariPage() {
  // On-page SEO Metadata
  useEffect(() => {
    document.title = 'Pench Safari Booking & Timings | GoFlamingo Resort';
    
    // Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content =
      'Plan your Pench safari with GoFlamingo Resort. Enquire about safari bookings at Sillari, Chorbahuli and Khursapar gates, seasonal timings and accommodation.';

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://goflamingoresort.com/pench-safari/';

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  // Form State
  const [formData, setFormData] = useState({
    safariDate: '',
    gate: 'Sillari Gate',
    adults: '2',
    children: '0',
    shift: 'Morning Safari Shift',
    guestName: '',
    phone: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (idx) => {
    setOpenFaq((prev) => (prev === idx ? null : idx));
  };

  // Pre-fill gate when clicking a gate card CTA
  const handleSelectGate = (gateName) => {
    setFormData((prev) => ({ ...prev, gate: gateName }));
    const el = document.getElementById('safari-enquiry-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Build WhatsApp Message from form
  const generateWhatsAppUrl = () => {
    const text = `Hello GoFlamingo Resort, I would like to make a Pench safari booking enquiry:\n\n` +
      `• Guest Name: ${formData.guestName || 'Guest'}\n` +
      `• Phone/WhatsApp: ${formData.phone || 'Not specified'}\n` +
      `• Preferred Date: ${formData.safariDate || 'Flexible / To be confirmed'}\n` +
      `• Preferred Gate: ${formData.gate}\n` +
      `• Visitors: ${formData.adults} Adults, ${formData.children} Children\n` +
      `• Safari Shift: ${formData.shift}\n\n` +
      `Please let me know the availability, applicable charges, and next steps for our Pench safari and stay.`;
    return `${QUICK_CONTACT.whatsappUrl}?text=${encodeURIComponent(text)}`;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Redirect to WhatsApp with full pre-filled text
    const targetUrl = generateWhatsAppUrl();
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full bg-[#FAF6F1] text-charcoal font-sans selection:bg-[#C5A880]/30 selection:text-[#0E2718]">
      
      {/* JSON-LD Structured Data for Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'TouristAttraction',
            name: 'Pench Safari Booking with GoFlamingo Resort',
            description:
              'Plan your Pench safari with GoFlamingo Resort. Enquire about safari bookings at Sillari, Chorbahuli and Khursapar gates, seasonal timings and accommodation.',
            url: 'https://goflamingoresort.com/pench-safari/',
            telephone: '+919561957009',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Sillari',
              addressRegion: 'Maharashtra',
              addressCountry: 'IN',
            },
          }),
        }}
      />

      {/* ========================================================
          SECTION 1 — HERO
          ======================================================== */}
      <section className="relative w-full min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex flex-col justify-end bg-forest-dark text-ivory overflow-hidden">
        {/* Full-bleed authentic photography */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.home.safari}
            alt="Open 4x4 gypsy on a Pench safari booking near Sillari Gate Maharashtra"
            fetchPriority="high"
            className="w-full h-full object-cover object-[center_35%] filter brightness-[0.85] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-[#0E2718]/60 to-black/35" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent sm:block hidden" />
        </div>

        <Container size="xl" className="relative z-10 w-full pt-32 sm:pt-40 pb-14 sm:pb-20 px-5 sm:px-8 md:px-12 lg:px-16">
          <div className="max-w-3xl space-y-4 sm:space-y-5">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#C5A880]/50 text-[#DFBF8E] text-[10px] sm:text-xs uppercase tracking-[0.22em] font-semibold">
              <Compass className="w-3.5 h-3.5 text-[#DFBF8E]" />
              <span>PENCH TIGER RESERVE · MAHARASHTRA</span>
            </div>

            {/* H1 Heading */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] text-ivory text-balance">
              Pench Safari Booking with GoFlamingo Resort
            </h1>

            {/* Description */}
            <p className="font-sans text-xs sm:text-base md:text-lg text-sand-light/95 font-light leading-relaxed max-w-2xl">
              Planning a wildlife getaway to Pench? GoFlamingo Resort helps guests enquire about safari bookings at Sillari, Chorbahuli and Khursapar gates. Plan your safari, choose your accommodation and get assistance from our team for your Pench trip.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <a
                href="#safari-enquiry-form"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('safari-enquiry-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#DFBF8E] hover:bg-[#E8CA9E] text-[#0E2718] text-xs font-bold uppercase tracking-[0.14em] shadow-lg transition-all duration-300 cursor-pointer text-center"
              >
                <span>ENQUIRE ABOUT SAFARI</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <Link
                to="/stay"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/30 text-xs font-medium uppercase tracking-[0.14em] backdrop-blur-sm transition-all duration-300 shadow-sm text-center"
              >
                <span>EXPLORE OUR ROOMS</span>
              </Link>
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================
          SECTION 2 — BOOK YOUR PENCH SAFARI (FUNCTIONAL FORM)
          ======================================================== */}
      <section id="safari-enquiry-form" className="py-16 sm:py-24 bg-[#F4EEE6] border-b border-stone-300/80 scroll-mt-20">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Content Column (6 cols) */}
            <div className="lg:col-span-6 space-y-5">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#8A6836] font-bold block">
                ✦ SAFARI ASSISTANCE & PERMITS
              </span>

              <h2 className="font-serif text-2xl sm:text-4xl lg:text-[40px] text-[#0E2718] font-normal leading-tight">
                Plan Your Pench Safari with Our Assistance
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-charcoal/85 leading-relaxed font-light">
                <p>
                  Planning a safari involves selecting your preferred date and entry gate, checking permit availability and confirming the applicable charges. GoFlamingo Resort assists guests with safari booking enquiries to help make their Pench getaway easier to organise.
                </p>
                <p>
                  Contact our team with your preferred date, number of visitors and gate preference. We will guide you through the available booking arrangements and explain the next steps.
                </p>
              </div>

              {/* Disclaimer Notice */}
              <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-600/30 text-xs text-[#0E2718] flex items-start gap-3">
                <Info className="w-4 h-4 text-[#8A6836] shrink-0 mt-0.5" />
                <p className="font-normal leading-relaxed">
                  <strong>Notice:</strong> Safari permits are subject to availability and Forest Department rules. A booking enquiry does not guarantee a confirmed permit.
                </p>
              </div>

              {/* Quick direct contact badges */}
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs">
                <a
                  href="tel:+919561957009"
                  className="inline-flex items-center gap-2 text-[#0E2718] font-semibold hover:text-[#8A6836] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#8A6836]" />
                  <span>Call: +91 95619 57009</span>
                </a>
                <span className="text-stone-400">•</span>
                <span className="text-charcoal/70">
                  Location: Near Sillari Gate, Pench
                </span>
              </div>
            </div>

            {/* Right Form Card (6 cols) */}
            <div className="lg:col-span-6">
              <div className="p-7 sm:p-9 rounded-3xl bg-white border-2 border-[#C5A880]/40 shadow-xl space-y-6">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.16em] font-bold text-[#8A6836] bg-[#C5A880]/15 px-3 py-1 rounded-full inline-block mb-2">
                    Direct Safari Enquiry
                  </span>
                  <h3 className="font-serif text-2xl text-[#0E2718] font-normal">
                    Check Safari Availability
                  </h3>
                  <p className="text-xs text-charcoal/70 font-light mt-1">
                    Fill in your details below to enquire about safari permits and stay packages.
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
                  
                  {/* Row 1: Date & Gate */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-charcoal/75 font-medium mb-1">
                        Preferred Safari Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.safariDate}
                        onChange={(e) => setFormData({ ...formData, safariDate: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] text-charcoal bg-stone-50/50"
                      />
                    </div>

                    <div>
                      <label className="block text-charcoal/75 font-medium mb-1">
                        Preferred Gate *
                      </label>
                      <select
                        value={formData.gate}
                        onChange={(e) => setFormData({ ...formData, gate: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] text-charcoal bg-stone-50/50"
                      >
                        <option value="Sillari Gate">Sillari Safari Gate</option>
                        <option value="Chorbahuli Gate">Chorbahuli Safari Gate</option>
                        <option value="Khursapar Gate">Khursapar Safari Gate</option>
                        <option value="Any Gate / Flexible">Any Gate / Need Recommendation</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 2: Visitors count */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-charcoal/75 font-medium mb-1">
                        Adults
                      </label>
                      <select
                        value={formData.adults}
                        onChange={(e) => setFormData({ ...formData, adults: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:border-[#C5A880] text-charcoal bg-stone-50/50"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                          <option key={n} value={n}>{n} {n === 1 ? 'Adult' : 'Adults'}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-charcoal/75 font-medium mb-1">
                        Children
                      </label>
                      <select
                        value={formData.children}
                        onChange={(e) => setFormData({ ...formData, children: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:border-[#C5A880] text-charcoal bg-stone-50/50"
                      >
                        {[0, 1, 2, 3, 4].map((n) => (
                          <option key={n} value={n}>{n} {n === 1 ? 'Child' : 'Children'}</option>
                        ))}
                      </select>
                    </div>

                    <div className="col-span-2 sm:col-span-1">
                      <label className="block text-charcoal/75 font-medium mb-1">
                        Safari Shift
                      </label>
                      <select
                        value={formData.shift}
                        onChange={(e) => setFormData({ ...formData, shift: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:border-[#C5A880] text-charcoal bg-stone-50/50"
                      >
                        <option value="Morning Safari Shift">Morning Shift</option>
                        <option value="Afternoon Safari Shift">Afternoon Shift</option>
                        <option value="Both / Flexible">Both / Flexible</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Name & Contact */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-charcoal/75 font-medium mb-1">
                        Guest Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={formData.guestName}
                        onChange={(e) => setFormData({ ...formData, guestName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:border-[#C5A880] text-charcoal bg-stone-50/50"
                      />
                    </div>

                    <div>
                      <label className="block text-charcoal/75 font-medium mb-1">
                        Phone or WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:border-[#C5A880] text-charcoal bg-stone-50/50"
                      />
                    </div>
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#0E2718] hover:bg-[#163824] text-white text-xs uppercase tracking-[0.12em] font-bold shadow-md transition-colors cursor-pointer mt-2"
                  >
                    <WhatsAppIcon size="sm" className="text-[#25D366] shrink-0" />
                    <span>CHECK SAFARI AVAILABILITY</span>
                    <Send className="w-3.5 h-3.5 text-[#DFBF8E]" />
                  </button>

                  <p className="text-[11px] text-charcoal/60 text-center font-light pt-1">
                    Direct enquiry connects you with GoFlamingo Resort's safari concierge via WhatsApp.
                  </p>

                </form>

                {formSubmitted && (
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-xs text-emerald-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Opening WhatsApp with your safari enquiry details...</span>
                  </div>
                )}

              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================
          SECTION 3 — PENCH SAFARI GATES
          ======================================================== */}
      <section className="py-16 sm:py-24 bg-[#FAF6F1]">
        <Container size="xl">
          <div className="max-w-3xl mb-12">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#8A6836] font-bold block mb-2">
              ✦ MAHARASHTRA PENCH ENTRY POINTS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-[#0E2718] font-normal leading-tight mb-4">
              Choose Your Pench Safari Gate
            </h2>
            <p className="text-charcoal/80 text-xs sm:text-sm md:text-base font-light leading-relaxed">
              Pench Tiger Reserve in Maharashtra has several safari entry points. Sillari, Chorbahuli and Khursapar are three gates visitors can consider when planning their safari. The best option depends on permit availability, travel arrangements and the current operating conditions.
            </p>
          </div>

          {/* 3 Gates Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {SAFARI_GATES.map((gate) => (
              <div
                key={gate.id}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-stone-200/90 shadow-lg flex flex-col justify-between space-y-5 hover:border-[#C5A880] transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-black/30">
                    <img
                      src={gate.image}
                      alt={`${gate.name} entry for Pench safari booking`}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-black/70 text-white backdrop-blur-md">
                      {gate.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#0E2718] font-normal">
                      {gate.name}
                    </h3>
                    <p className="font-sans text-xs text-charcoal/80 font-light leading-relaxed mt-2.5">
                      {gate.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-stone-100">
                  <button
                    type="button"
                    onClick={() => handleSelectGate(gate.shortName)}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#0E2718] hover:bg-[#163824] text-white text-[11px] font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    <span>{gate.cta}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#DFBF8E]" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-charcoal/60 mt-6 text-center italic">
            * Please note: These are three notable safari gates in Maharashtra Pench. Availability varies by date and season based on official Forest Department releases.
          </p>
        </Container>
      </section>

      {/* ========================================================
          SECTION 4 — HOW LONG DOES A PENCH SAFARI LAST?
          ======================================================== */}
      <section className="py-16 sm:py-24 bg-[#08150D] text-ivory border-y border-sand/20">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#C5A880] font-bold block">
                ✦ SAFARI DURATION & STRUCTURE
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-white font-normal leading-tight">
                How Long Is a Pench Jungle Safari?
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-sand-light/85 font-light leading-relaxed">
                <p>
                  A typical safari shift in Maharashtra's Pench Tiger Reserve lasts approximately four hours. Visitors can generally choose between a morning safari and an afternoon safari, depending on the gate, season and available permits.
                </p>
                <p>
                  The exact entry and exit times change during the year. Your confirmed permit and the latest Forest Department instructions should always be followed.
                </p>
              </div>

              {/* 2 Shifts Detail */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-[#DFBF8E]">
                    <Clock className="w-4 h-4" />
                    <h3 className="font-serif text-lg font-semibold text-white">Morning Safari</h3>
                  </div>
                  <p className="text-xs text-sand-light/80 font-light leading-relaxed">
                    Morning safaris begin early, allowing visitors to explore the forest during the cooler hours of the day. The start time changes with the season.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-[#DFBF8E]">
                    <Clock className="w-4 h-4" />
                    <h3 className="font-serif text-lg font-semibold text-white">Afternoon Safari</h3>
                  </div>
                  <p className="text-xs text-sand-light/80 font-light leading-relaxed">
                    Afternoon safaris take place later in the day and continue until the designated exit time. Seasonal changes affect the reporting and departure schedule.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-2">
                <a
                  href={`${QUICK_CONTACT.whatsappUrl}?text=${encodeURIComponent('Hello GoFlamingo Resort, I would like to enquire about Pench safari timings and schedule for our upcoming visit.')}`}
                  target={getWhatsAppTarget()}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#C5A880] hover:bg-[#DFBF8E] text-[#08130B] text-xs font-bold uppercase tracking-[0.12em] transition-all shadow-md"
                >
                  <WhatsAppIcon size="sm" className="text-[#08130B]" />
                  <span>ENQUIRE ABOUT SAFARI TIMINGS</span>
                </a>
              </div>
            </div>

            {/* Right Quick Facts Box (5 cols) */}
            <div className="lg:col-span-5">
              <div className="p-7 sm:p-8 rounded-3xl bg-white/[0.06] border-2 border-[#C5A880]/30 backdrop-blur-md space-y-6">
                <div className="flex items-center gap-2.5 pb-4 border-b border-white/10">
                  <ShieldCheck className="w-5 h-5 text-[#DFBF8E]" />
                  <h4 className="font-serif text-xl text-white font-normal">
                    Quick Safari Facts
                  </h4>
                </div>

                <ul className="space-y-4 text-xs">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#DFBF8E] mt-1.5 shrink-0" />
                    <div>
                      <strong className="text-white block font-medium">Typical duration:</strong>
                      <span className="text-sand-light/80">Approximately 4 hours per safari shift</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#DFBF8E] mt-1.5 shrink-0" />
                    <div>
                      <strong className="text-white block font-medium">Shifts:</strong>
                      <span className="text-sand-light/80">Morning and afternoon</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#DFBF8E] mt-1.5 shrink-0" />
                    <div>
                      <strong className="text-white block font-medium">Timings:</strong>
                      <span className="text-sand-light/80">Seasonal and subject to official instructions</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#DFBF8E] mt-1.5 shrink-0" />
                    <div>
                      <strong className="text-white block font-medium">Booking:</strong>
                      <span className="text-sand-light/80">Permit availability must be confirmed</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================
          SECTION 5 — PENCH SAFARI TIMINGS BY SEASON
          ======================================================== */}
      <section className="py-16 sm:py-24 bg-[#FAF6F1]">
        <Container size="xl">
          <div className="max-w-3xl mb-10">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#8A6836] font-bold block mb-2">
              ✦ PUBLISHED REFERENCE SCHEDULE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-[#0E2718] font-normal leading-tight mb-3">
              Morning and Afternoon Safari Timings
            </h2>
            <p className="text-charcoal/80 text-xs sm:text-sm font-light leading-relaxed">
              Use the following published Maharashtra Pench schedule as a reference, subject to verification with the Forest Department before publishing.
            </p>
          </div>

          {/* Timings Table */}
          <div className="overflow-x-auto border-2 border-[#C5A880]/30 rounded-2xl bg-white shadow-lg mb-8">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#F4EEE6] border-b border-stone-200/90 font-bold text-[#0E2718] uppercase tracking-wider">
                <tr>
                  <th className="p-4 sm:p-5">Period</th>
                  <th className="p-4 sm:p-5">Morning Entry</th>
                  <th className="p-4 sm:p-5">Morning Exit</th>
                  <th className="p-4 sm:p-5">Afternoon Entry</th>
                  <th className="p-4 sm:p-5">Afternoon Exit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200/80">
                {SAFARI_SCHEDULE.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 1 ? 'bg-stone-50/50' : 'bg-white'}>
                    <td className="p-4 sm:p-5 font-semibold text-[#0E2718]">{row.period}</td>
                    <td className="p-4 sm:p-5 text-charcoal/85">{row.morningEntry}</td>
                    <td className="p-4 sm:p-5 text-charcoal/85">{row.morningExit}</td>
                    <td className="p-4 sm:p-5 text-charcoal/85">{row.afternoonEntry}</td>
                    <td className="p-4 sm:p-5 text-charcoal/85">{row.afternoonExit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Disclaimers Box */}
          <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-600/30 text-xs text-charcoal/90 space-y-2">
            <p className="font-semibold text-[#0E2718]">
              Disclaimer & Operating Notice:
            </p>
            <p className="font-light leading-relaxed">
              These are published reference timings, not a guarantee of the schedule for a particular date or gate. Entry windows, closures and operating conditions may change. Confirm the current timings when enquiring and follow the timings printed on the confirmed permit.
            </p>
            <p className="font-light leading-relaxed">
              During the monsoon, core and buffer tourism arrangements differ. Do not describe the entire reserve as either fully open or fully closed without checking the current official notice.
            </p>
          </div>
        </Container>
      </section>

      {/* ========================================================
          SECTION 6 — BEST TIME TO PLAN A PENCH SAFARI
          ======================================================== */}
      <section className="py-16 sm:py-24 bg-[#F4EEE6] border-y border-stone-300/80">
        <Container size="xl">
          <div className="max-w-3xl mb-12">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#8A6836] font-bold block mb-2">
              ✦ SEASONAL PERSPECTIVES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-[#0E2718] font-normal leading-tight mb-4">
              When Should You Visit Pench?
            </h2>
            <div className="space-y-3 text-xs sm:text-sm text-charcoal/85 font-light leading-relaxed">
              <p>
                Pench offers different experiences throughout the tourism year. Cooler months can be comfortable for exploring the forest, while the warmer months bring different wildlife-watching conditions. The experience also depends on weather, forest conditions and animal movement.
              </p>
              <p>
                Before choosing your travel dates, confirm the operating status of your preferred gate and the availability of permits.
              </p>
            </div>
          </div>

          {/* 3 Seasons Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-3xl bg-white border border-stone-200/90 shadow-md space-y-3">
              <span className="text-[11px] uppercase tracking-wider text-[#8A6836] font-bold block">
                Winter (October to February)
              </span>
              <h3 className="font-serif text-xl text-[#0E2718] font-semibold">
                Cooler Weather & Greenery
              </h3>
              <p className="text-xs text-charcoal/80 font-light leading-relaxed">
                Plan for cooler weather and early morning starts. Layered warm clothing is recommended for brisk morning open-gypsy drives under the teak canopies.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-stone-200/90 shadow-md space-y-3">
              <span className="text-[11px] uppercase tracking-wider text-[#8A6836] font-bold block">
                Summer (March to June)
              </span>
              <h3 className="font-serif text-xl text-[#0E2718] font-semibold">
                Warmer Temperatures & Waterholes
              </h3>
              <p className="text-xs text-charcoal/80 font-light leading-relaxed">
                Prepare for warmer temperatures and follow the Forest Department's travel guidance. Sun protection and plenty of hydration are advised.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-stone-200/90 shadow-md space-y-3">
              <span className="text-[11px] uppercase tracking-wider text-[#8A6836] font-bold block">
                Monsoon (July to September)
              </span>
              <h3 className="font-serif text-xl text-[#0E2718] font-semibold">
                Monsoon Tourism Arrangements
              </h3>
              <p className="text-xs text-charcoal/80 font-light leading-relaxed">
                Check the current operating arrangements carefully, as core and buffer access may differ during rain-soaked breeding and regeneration periods.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================
          SECTION 7 — STAY AT GOFLAMINGO RESORT
          ======================================================== */}
      <section className="py-16 sm:py-24 bg-[#FAF6F1]">
        <Container size="xl">
          <div className="max-w-3xl mb-12">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#8A6836] font-bold block mb-2">
              ✦ SILLARI GATE ACCOMMODATION
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-[#0E2718] font-normal leading-tight mb-4">
              Your Stay for a Pench Safari Getaway
            </h2>
            <p className="text-charcoal/80 text-xs sm:text-sm md:text-base font-light leading-relaxed">
              Make your Pench trip more comfortable with a stay at GoFlamingo Resort in Sillari. Choose accommodation for a couple's getaway, a family holiday or a group trip, and contact our team to coordinate your stay with your safari plans.
            </p>
          </div>

          {/* 3 Room Category Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            
            {/* Card 1: Deluxe Rooms */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-stone-200/90 shadow-lg flex flex-col justify-between space-y-4 hover:border-[#C5A880] transition-all">
              <div className="space-y-3">
                <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-black/20">
                  <img
                    src={RESORT_DRIVE_PHOTOS.bedroomSuiteBathtub.src}
                    alt="Deluxe Room at GoFlamingo Resort near Pench"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif text-2xl text-[#0E2718] font-normal">
                  Deluxe Rooms
                </h3>
                <p className="text-xs text-charcoal/80 font-light leading-relaxed">
                  Comfortable rooms designed for a relaxing stay after a day of exploring the Pench region.
                </p>
              </div>
              <div className="pt-2">
                <Link
                  to="/stay/deluxe-rooms"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#0E2718] hover:bg-[#163824] text-white text-[11px] font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <span>EXPLORE DELUXE ROOMS</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#DFBF8E]" />
                </Link>
              </div>
            </div>

            {/* Card 2: Super Deluxe Rooms */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-stone-200/90 shadow-lg flex flex-col justify-between space-y-4 hover:border-[#C5A880] transition-all">
              <div className="space-y-3">
                <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-black/20">
                  <img
                    src={RESORT_DRIVE_PHOTOS.executiveBedroomBalcony.src}
                    alt="Super Deluxe Room with private balcony at GoFlamingo Resort"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif text-2xl text-[#0E2718] font-normal">
                  Super Deluxe Rooms
                </h3>
                <p className="text-xs text-charcoal/80 font-light leading-relaxed">
                  Our more spacious and luxurious rooms feature private balconies, beautiful views and bathtubs.
                </p>
              </div>
              <div className="pt-2">
                <Link
                  to="/stay/super-deluxe-rooms"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#0E2718] hover:bg-[#163824] text-white text-[11px] font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <span>EXPLORE SUPER DELUXE ROOMS</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#DFBF8E]" />
                </Link>
              </div>
            </div>

            {/* Card 3: Group Dormitory */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-stone-200/90 shadow-lg flex flex-col justify-between space-y-4 hover:border-[#C5A880] transition-all">
              <div className="space-y-3">
                <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-black/20">
                  <img
                    src={AUTHENTIC_RESORT.photos.dormitoryRoom.src}
                    alt="Group Dormitory at GoFlamingo Resort for students and safari groups"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif text-2xl text-[#0E2718] font-normal">
                  Group Dormitory
                </h3>
                <p className="text-xs text-charcoal/80 font-light leading-relaxed">
                  A practical shared accommodation option for guests travelling together.
                </p>
              </div>
              <div className="pt-2">
                <Link
                  to="/stay/dormitory"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#0E2718] hover:bg-[#163824] text-white text-[11px] font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <span>EXPLORE GROUP DORMITORY</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#DFBF8E]" />
                </Link>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================
          SECTION 8 — RESORT FACILITIES
          ======================================================== */}
      <section className="py-16 sm:py-24 bg-[#08150D] text-ivory border-y border-sand/20">
        <Container size="xl">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl space-y-3">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#C5A880] font-bold block">
                ✦ BEYOND THE SAFARI
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-white font-normal leading-tight">
                More to Enjoy Beyond Your Safari
              </h2>
              <p className="text-sand-light/85 text-xs sm:text-sm font-light leading-relaxed">
                Enjoy time at the resort between safari outings. GoFlamingo Resort offers a swimming pool, restaurant and bar, rain dance, landscaped gardens, a kids' play area and a game zone featuring table tennis, snooker, carrom and chess. Badminton facilities and a conference room are also available.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                to="/resort/facilities"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C5A880] hover:bg-[#DFBF8E] text-[#08130B] text-xs font-bold uppercase tracking-wider transition-all"
              >
                <span>EXPLORE ALL FACILITIES</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Authentic Facilities Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center space-y-2">
              <Waves className="w-6 h-6 text-[#DFBF8E] mx-auto" />
              <strong className="block text-xs text-white">Swimming Pool</strong>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center space-y-2">
              <CloudRain className="w-6 h-6 text-[#DFBF8E] mx-auto" />
              <strong className="block text-xs text-white">Rain Dance Arena</strong>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center space-y-2">
              <UtensilsCrossed className="w-6 h-6 text-[#DFBF8E] mx-auto" />
              <strong className="block text-xs text-white">Restaurant & Bar</strong>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center space-y-2">
              <Trees className="w-6 h-6 text-[#DFBF8E] mx-auto" />
              <strong className="block text-xs text-white">Haveli Gardens</strong>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center space-y-2">
              <Baby className="w-6 h-6 text-[#DFBF8E] mx-auto" />
              <strong className="block text-xs text-white">Kids' Play Park</strong>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center space-y-2">
              <Gamepad2 className="w-6 h-6 text-[#DFBF8E] mx-auto" />
              <strong className="block text-xs text-white">Indoor Game Zone</strong>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================
          SECTION 9 — FREQUENTLY ASKED QUESTIONS
          ======================================================== */}
      <section className="py-16 sm:py-24 bg-[#F4EEE6] border-b border-stone-300/80">
        <Container size="xl">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10 space-y-2">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#8A6836] font-bold block">
                ✦ HELPFUL SAFARI INFORMATION
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#0E2718] font-normal">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl bg-white border border-stone-200/90 shadow-sm overflow-hidden transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <h3 className="font-serif text-base sm:text-lg text-[#0E2718] font-medium">
                        {faq.question}
                      </h3>
                      <span className={cn(
                        'w-7 h-7 rounded-full bg-stone-100 flex items-center justify-center shrink-0 transition-transform duration-300 text-[#0E2718]',
                        isOpen ? 'rotate-180 bg-[#0E2718] text-white' : ''
                      )}>
                        <ChevronDown className="w-4 h-4" />
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm text-charcoal/80 font-light leading-relaxed border-t border-stone-100 pt-3">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================
          SECTION 10 — FINAL BOOKING CTA (UNIFIED RADIANT CHAMPAGNE CARD)
          ======================================================== */}
      <ClosingCallToAction
        eyebrow="Plan Your Pench Getaway"
        title="Plan Your Pench Safari with GoFlamingo"
        description="Ready to plan your Pench getaway? Contact GoFlamingo Resort to enquire about safari booking arrangements at Sillari, Chorbahuli or Khursapar and find accommodation that suits your trip."
        primaryBtnLabel="Enquire About Safari"
        primaryBtnTo="#safari-enquiry-form"
        secondaryBtnLabel="Check Room Availability"
        secondaryBtnTo="/contact?book=true#reservation-form-card"
        whatsappLabel="WhatsApp Our Team"
        whatsappMsg="Hello GoFlamingo Resort, I would like to plan a Pench safari and check stay availability."
        phone="+91 95619 57009"
        location="Sillari, Pench National Park"
        tagline="Assistance for Sillari, Chorbahuli & Khursapar"
      />

    </div>
  );
}
