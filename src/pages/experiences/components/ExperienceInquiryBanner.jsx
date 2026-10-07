import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Heading, Text, Button, WhatsAppIcon } from '../../../components/common';
import { cn } from '../../../utils/cn';

/**
 * ExperienceInquiryBanner
 * 
 * Pre-footer conversion section connecting wilderness curiosity
 * to direct bookings and WhatsApp concierge assistance.
 * 
 * @param {string} eyebrow - Small uppercase category tag
 * @param {string} title - Section title
 * @param {string} subtitle - Supporting description
 * @param {string} whatsappTopic - Specific context for pre-filled WhatsApp message
 * @param {string} className - Optional container styling
 */
export default function ExperienceInquiryBanner({
  eyebrow = 'Plan Your Pench Journey',
  title = 'Ready to Experience the Pench Wild?',
  subtitle = 'Whether you are planning your first tiger safari or seeking a tranquil nature retreat, our concierge team is on hand to guide your stay and safari arrangements.',
  whatsappTopic = 'I would like to inquire about safari planning and stay availability at Go Flamingo Resort.',
  className = '',
}) {
  const whatsappUrl = `https://wa.me/919372425968?text=${encodeURIComponent(
    `Hello Go Flamingo Resort, ${whatsappTopic}`
  )}`;

  return (
    <section className={cn('relative py-20 sm:py-28 bg-forest-dark text-ivory overflow-hidden border-t border-sand/20', className)}>
      {/* Background radial glow overlay */}
      <div className="absolute inset-0 z-0 opacity-25 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-forest-jungle/40 via-forest-deep to-forest-dark pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(181,138,69,0.15),_transparent_55%)] pointer-events-none" />

      <Container size="lg" className="relative z-10 text-center">
        <span className="text-[0.6875rem] uppercase tracking-wider text-gold font-bold block mb-3">
          {eyebrow}
        </span>

        <Heading as="h2" variant="section" font="serif" className="text-ivory text-3xl sm:text-4xl lg:text-5xl max-w-3xl mx-auto mb-5 leading-tight font-semibold">
          {title}
        </Heading>

        <Text variant="lead" className="text-sand/85 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-9 font-light leading-relaxed">
          {subtitle}
        </Text>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 max-w-md mx-auto">
          {/* Primary High-Intent Room Booking */}
          <Button
            as={Link}
            to="/book"
            variant="gold"
            size="lg"
            className="w-full sm:w-auto font-bold tracking-wider shadow-md text-center"
          >
            Check Stay Availability
          </Button>

          {/* Secondary Conversational Concierge Assistance */}
          <Button
            as="a"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="inverted"
            size="lg"
            className="w-full sm:w-auto font-semibold tracking-wider text-center flex items-center justify-center gap-2.5 shadow-sm"
          >
            <WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0" />
            <span>Plan on WhatsApp</span>
          </Button>
        </div>

        <p className="mt-8 text-xs text-sand/65 font-light">
          Near Sillari Gate, Pench Tiger Reserve (Maharashtra) · Concierge available 07:00 AM – 22:00 PM
        </p>
      </Container>
    </section>
  );
}
