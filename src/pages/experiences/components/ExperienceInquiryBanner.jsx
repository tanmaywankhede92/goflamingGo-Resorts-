import React from 'react';
import ClosingCallToAction from '../../home/components/ClosingCallToAction';

/**
 * ExperienceInquiryBanner
 * 
 * Unified pre-footer conversion section connecting wilderness curiosity
 * to direct bookings and WhatsApp concierge assistance using the radiant
 * champagne & sand gold card design matching the homepage.
 */
export default function ExperienceInquiryBanner({
  eyebrow = 'Plan Your Pench Journey',
  title = 'Ready to Experience the Pench Wild?',
  subtitle = 'Whether you are planning your first tiger safari or seeking a tranquil nature retreat, our concierge team is on hand to guide your stay and safari arrangements.',
  whatsappTopic = 'I would like to inquire about safari planning and stay availability at Go Flamingo Resort.',
  className = '',
}) {
  return (
    <div className={className}>
      <ClosingCallToAction
        eyebrow={eyebrow}
        title={title}
        description={subtitle}
        primaryBtnLabel="Check Stay Availability"
        primaryBtnTo="/contact?book=true#reservation-form-card"
        whatsappLabel="Plan on WhatsApp"
        whatsappMsg={`Hello Go Flamingo Resort, ${whatsappTopic}`}
      />
    </div>
  );
}
