/**
 * WhatsApp Helper Utilities for GoFlamingo Resort
 * 
 * Provides unified WhatsApp link generation and cross-device safe targets.
 * Prevents mobile Safari / Chrome blank tab bug by routing mobile directly via _self.
 */

export const WHATSAPP_PHONE = '919372425968';

/**
 * Detect mobile device user agent
 */
export const isMobileDevice = () => {
  if (typeof navigator === 'undefined') return false;
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
};

/**
 * Safe link target:
 * - On Mobile: '_self' (opens native WhatsApp app directly without creating a blank orphan browser tab)
 * - On Desktop: '_blank' (opens WhatsApp Web in a separate tab)
 */
export const getWhatsAppTarget = () => {
  return isMobileDevice() ? '_self' : '_blank';
};

/**
 * Construct valid WhatsApp URL with encoded message
 * @param {string} message 
 * @returns {string}
 */
export const buildWhatsAppUrl = (message) => {
  const defaultMsg = 'Hello Go Flamingo Resort, I would like to inquire about room availability and safari booking at Pench – Sillari Gate.';
  const text = message && typeof message === 'string' && message.trim().length > 0 ? message.trim() : defaultMsg;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
};
