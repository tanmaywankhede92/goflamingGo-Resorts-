import React, { useState } from 'react';
import PageHero from '../../components/hero/PageHero';
import { Container, Heading, SectionEyebrow, Button, Badge, WhatsAppIcon } from '../../components/common';
import { QUICK_CONTACT } from '../../data/navigation';
import { IMAGES } from '../../data/images';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-ivory text-charcoal">
      <PageHero
        variant="large"
        eyebrow="Reach Out to Us"
        title="Contact & Location"
        subtitle="We are delighted to assist with room reservations, safari permit guidance, family holidays, weddings, and corporate offsite planning."
        image={IMAGES.resort.pathway}
        breadcrumbs={[{ label: 'Contact' }]}
        badge="Direct Assistance"
      />

      <section className="py-16 md:py-24">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Contact Details & Travel Logistics (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <SectionEyebrow color="terracotta" withLine className="mb-3">
                  Resort Location
                </SectionEyebrow>
                <Heading as="h2" variant="h2" font="serif" color="forest" className="mb-3">
                  Find Us in Pench
                </Heading>
                <p className="text-sm text-charcoal-muted leading-relaxed font-light mb-4">
                  {QUICK_CONTACT.address}
                </p>
                <div className="p-4 rounded-[3px] bg-sand-light/60 border border-sand/40 text-xs text-charcoal-muted space-y-1.5">
                  <p><strong>Proximity:</strong> Just 85 km from Nagpur via 4-lane NH 44.</p>
                  <p><strong>Nearest Airport:</strong> Dr. Babasaheb Ambedkar International Airport, Nagpur (~1.5 - 2 hrs).</p>
                  <p><strong>Nearest Railhead:</strong> Nagpur Junction (NGP) & Jabalpur.</p>
                </div>
              </div>

              {/* Direct Touchpoints */}
              <div className="space-y-4 pt-4 border-t border-sand/30">
                <span className="text-xs uppercase tracking-editorial text-terracotta font-semibold block">
                  Reservation Desk
                </span>
                
                <div className="flex items-start gap-3">
                  <span className="text-terracotta text-base mt-0.5">☎</span>
                  <div>
                    <span className="text-xs text-charcoal-muted block">Direct Reservation Phone:</span>
                    <a href="tel:+919372425968" className="text-sm font-semibold text-forest hover:text-gold transition-colors">
                      {QUICK_CONTACT.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <WhatsAppIcon size="md" className="text-[#25D366] mt-0.5" />
                  <div>
                    <span className="text-xs text-charcoal-muted block">WhatsApp Inquiries & Booking:</span>
                    <a
                      href="https://wa.me/919372425968"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-forest hover:text-gold transition-colors"
                    >
                      {QUICK_CONTACT.whatsapp}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-terracotta">✉</span>
                  <div>
                    <span className="text-xs text-charcoal-muted block">Direct Bookings Email:</span>
                    <span className="text-sm font-medium text-forest">{QUICK_CONTACT.email}</span>
                  </div>
                </div>
              </div>

              {/* Quick Safari Assistance Callout */}
              <div className="p-5 rounded-[3px] bg-forest-deep text-ivory border border-sand/20">
                <Badge variant="gold" className="mb-2">Safari Permits</Badge>
                <h4 className="font-serif text-base text-ivory mb-1">Planning a Jungle Safari?</h4>
                <p className="text-xs text-sand/80 font-light leading-relaxed">
                  Pench Tiger Reserve permits are strictly limited per shift. Contact our team in advance to coordinate your stay with gypsy permits through Sillari Gate.
                </p>
              </div>
            </div>

            {/* Direct Inquiry Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-[4px] bg-sand-light/40 border border-sand/60">
                <SectionEyebrow color="terracotta" className="mb-2">
                  Send an Inquiry
                </SectionEyebrow>
                <Heading as="h3" variant="h3" font="serif" color="forest" className="mb-6">
                  Plan Your Experience
                </Heading>

                {submitted ? (
                  <div className="p-8 text-center bg-forest-pale rounded-[3px] border border-forest-sage/40">
                    <span className="text-2xl text-forest-jungle mb-2 block">✓</span>
                    <h4 className="font-serif text-lg text-forest mb-2">Thank you for your message</h4>
                    <p className="text-xs text-charcoal-muted leading-relaxed max-w-md mx-auto">
                      Your inquiry has been received. Our team will connect with you via phone or email shortly to assist with your Pench stay.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5 font-sans">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted block mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Vikram Sharma"
                          className="w-full px-4 py-2.5 rounded-[2px] bg-ivory border border-sand-dark/40 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted block mb-1.5">
                          Phone Number (with WhatsApp) *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-2.5 rounded-[2px] bg-ivory border border-sand-dark/40 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted block mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="vikram@example.com"
                          className="w-full px-4 py-2.5 rounded-[2px] bg-ivory border border-sand-dark/40 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted block mb-1.5">
                          Inquiry Type
                        </label>
                        <select className="w-full px-4 py-2.5 rounded-[2px] bg-ivory border border-sand-dark/40 text-sm focus:outline-none focus:ring-2 focus:ring-gold">
                          <option>Room Stay & Safari</option>
                          <option>Weekend Escape</option>
                          <option>Family Vacation</option>
                          <option>Destination Wedding</option>
                          <option>Corporate Retreat</option>
                          <option>Safari Permit Assistance</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted block mb-1.5">
                        Tentative Dates & Message
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about your planned travel dates, number of guests, or special requirements..."
                        className="w-full px-4 py-2.5 rounded-[2px] bg-ivory border border-sand-dark/40 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                      />
                    </div>

                    <Button type="submit" variant="primary" size="lg" className="w-full justify-center">
                      Submit Inquiry
                    </Button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </Container>
      </section>
    </div>
  );
}
