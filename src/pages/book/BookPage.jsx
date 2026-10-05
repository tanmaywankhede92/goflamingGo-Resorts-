import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PageHero from '../../components/hero/PageHero';
import { Container, Heading, Text, SectionEyebrow, Button, WhatsAppIcon } from '../../components/common';
import { IMAGES } from '../../data/images';

export default function BookPage() {
  const [searchParams] = useSearchParams();
  const roomParam = searchParams.get('room');

  const initialRoom = roomParam === 'family-suite' 
    ? 'Spacious Family Suite' 
    : 'Luxury Forest Cottage';

  const [step, setStep] = useState(1); // 1: Dates & Guests, 2: Room & Safari, 3: Confirmation
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    adults: '2',
    children: '0',
    roomCategory: initialRoom,
    includeSafari: 'Yes, Sillari Core Zone',
    guestName: '',
    guestPhone: '',
    guestEmail: '',
    specialNotes: '',
  });

  useEffect(() => {
    if (roomParam) {
      setFormData(prev => ({
        ...prev,
        roomCategory: roomParam === 'family-suite' ? 'Spacious Family Suite' : 'Luxury Forest Cottage'
      }));
    }
  }, [roomParam]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    setStep((prev) => prev + 1);
  };

  return (
    <div className="w-full bg-ivory text-charcoal">
      <PageHero
        variant="large"
        eyebrow="Direct Reservations"
        title="Book Your Stay at Go Flamingo"
        subtitle="Plan your escape to Pench Tiger Reserve. Inquire directly for best seasonal rates, cottage availability, and Sillari Gate safari coordination."
        image={IMAGES.rooms.cottage}
        breadcrumbs={[{ label: 'Book Your Stay' }]}
        badge="Best Direct Rates"
      />

      <section className="py-16 md:py-24">
        <Container size="lg">
          <div className="bg-sand-light/40 border border-sand/60 rounded-[4px] p-6 sm:p-10 shadow-sm">
            
            {/* Multi-step progress bar */}
            <div className="mb-10 flex items-center justify-between border-b border-sand/40 pb-5">
              <div className="flex items-center gap-2">
                <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold ${step >= 1 ? 'bg-forest text-ivory' : 'bg-sand text-charcoal'}`}>
                  1
                </span>
                <span className="text-xs uppercase tracking-wider font-semibold text-forest">
                  Dates & Guests
                </span>
              </div>
              <span className="text-sand-dark text-xs">──</span>
              <div className="flex items-center gap-2">
                <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold ${step >= 2 ? 'bg-forest text-ivory' : 'bg-sand text-charcoal'}`}>
                  2
                </span>
                <span className={`text-xs uppercase tracking-wider font-semibold ${step >= 2 ? 'text-forest' : 'text-charcoal-muted'}`}>
                  Room & Safari
                </span>
              </div>
              <span className="text-sand-dark text-xs">──</span>
              <div className="flex items-center gap-2">
                <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold ${step >= 3 ? 'bg-forest text-ivory' : 'bg-sand text-charcoal'}`}>
                  3
                </span>
                <span className={`text-xs uppercase tracking-wider font-semibold ${step >= 3 ? 'text-forest' : 'text-charcoal-muted'}`}>
                  Confirmation
                </span>
              </div>
            </div>

            {/* STEP 1: DATES & GUESTS */}
            {step === 1 && (
              <form onSubmit={handleNext} className="space-y-6">
                <div>
                  <SectionEyebrow color="terracotta" className="mb-1">Step 1</SectionEyebrow>
                  <Heading as="h3" variant="h3" font="serif" color="forest">
                    Select Your Travel Dates
                  </Heading>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted block mb-1.5">
                      Check-In Date *
                    </label>
                    <input
                      type="date"
                      required
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-[2px] bg-ivory border border-sand-dark/40 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted block mb-1.5">
                      Check-Out Date *
                    </label>
                    <input
                      type="date"
                      required
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-[2px] bg-ivory border border-sand-dark/40 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted block mb-1.5">
                      Adults (Age 12+)
                    </label>
                    <select
                      name="adults"
                      value={formData.adults}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-[2px] bg-ivory border border-sand-dark/40 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                    >
                      <option value="1">1 Adult</option>
                      <option value="2">2 Adults</option>
                      <option value="3">3 Adults</option>
                      <option value="4">4 Adults</option>
                      <option value="5+">5+ Adults (Group)</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted block mb-1.5">
                      Children (Below 12)
                    </label>
                    <select
                      name="children"
                      value={formData.children}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-[2px] bg-ivory border border-sand-dark/40 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                    >
                      <option value="0">0 Children</option>
                      <option value="1">1 Child</option>
                      <option value="2">2 Children</option>
                      <option value="3+">3+ Children</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <span className="text-xs text-charcoal-muted font-light">
                    Sillari Gate, Pench · Direct Inquiry
                  </span>
                  <Button type="submit" variant="gold" size="lg">
                    Continue to Room Selection
                  </Button>
                </div>
              </form>
            )}

            {/* STEP 2: ROOM & SAFARI PREFERENCES */}
            {step === 2 && (
              <form onSubmit={handleNext} className="space-y-6">
                <div>
                  <SectionEyebrow color="terracotta" className="mb-1">Step 2</SectionEyebrow>
                  <Heading as="h3" variant="h3" font="serif" color="forest">
                    Room Category & Safari Requirements
                  </Heading>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted block mb-1.5">
                      Preferred Accommodation
                    </label>
                    <select
                      name="roomCategory"
                      value={formData.roomCategory}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-[2px] bg-ivory border border-sand-dark/40 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                    >
                      <option>Luxury Forest Cottage (King Bed + Sit-out)</option>
                      <option>Spacious Family Suite (Multi-Bed)</option>
                      <option>Weekend Escape Package (Stay + Meals)</option>
                      <option>Full Property Buyout / Wedding Inquiries</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted block mb-1.5">
                      Jungle Safari Coordination
                    </label>
                    <select
                      name="includeSafari"
                      value={formData.includeSafari}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-[2px] bg-ivory border border-sand-dark/40 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                    >
                      <option>Yes, Sillari Core Zone (Assistance Needed)</option>
                      <option>Already Have Forest Department Permits</option>
                      <option>Not Needed / Stay Only</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted block mb-1.5">
                      Lead Guest Name *
                    </label>
                    <input
                      type="text"
                      required
                      name="guestName"
                      placeholder="e.g. Dr. Rajesh Verma"
                      value={formData.guestName}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-[2px] bg-ivory border border-sand-dark/40 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted block mb-1.5">
                      Phone Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      name="guestPhone"
                      placeholder="+91 98230 00000"
                      value={formData.guestPhone}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-[2px] bg-ivory border border-sand-dark/40 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                    />
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <Button type="button" variant="secondary" size="md" onClick={() => setStep(1)}>
                    ← Back
                  </Button>
                  <Button type="submit" variant="gold" size="lg">
                    Check Availability & Confirm →
                  </Button>
                </div>
              </form>
            )}

            {/* STEP 3: CONFIRMATION / ENQUIRY DISPATCHED */}
            {step === 3 && (
              <div className="text-center py-8 space-y-6">
                <span className="w-16 h-16 mx-auto rounded-full bg-forest-pale text-forest-jungle flex items-center justify-center text-3xl font-serif">
                  ✓
                </span>
                <div>
                  <SectionEyebrow color="terracotta" className="mb-2">
                    Inquiry Dispatched
                  </SectionEyebrow>
                  <Heading as="h3" variant="h2" font="serif" color="forest" className="mb-3">
                    Thank You, {formData.guestName || 'Valued Guest'}
                  </Heading>
                  <Text variant="lead" color="muted" className="max-w-xl mx-auto font-light">
                    Your availability inquiry has been logged for Go Flamingo Resort. Our reservations desk will contact you at <strong>{formData.guestPhone || 'your provided phone'}</strong> with confirmed cottage availability and current season tariffs.
                  </Text>
                </div>

                <div className="p-5 max-w-md mx-auto rounded-[3px] bg-sand-light/60 border border-sand/40 text-left text-xs space-y-1.5">
                  <p><strong>Property:</strong> Go Flamingo Resort, Pench – Sillari Gate</p>
                  <p><strong>Cottage Category:</strong> {formData.roomCategory}</p>
                  <p><strong>Safari Assistance:</strong> {formData.includeSafari}</p>
                  <p><strong>Travelers:</strong> {formData.adults} Adults, {formData.children} Children</p>
                </div>

                <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                  <a
                    href="https://wa.me/919372425968"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-[2px] bg-[#25D366] text-forest-dark text-xs uppercase tracking-wider font-bold hover:bg-emerald-400 transition-colors shadow-sm"
                  >
                    <WhatsAppIcon size="sm" className="text-forest-dark" />
                    <span>Instant WhatsApp Follow-up</span>
                  </a>
                  <Button type="button" variant="secondary" size="md" onClick={() => setStep(1)}>
                    New Reservation Inquiry
                  </Button>
                </div>
              </div>
            )}

          </div>
        </Container>
      </section>
    </div>
  );
}
