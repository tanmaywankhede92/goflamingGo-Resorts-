/**
 * Lightweight, zero-dependency class name utility.
 * Merges conditional class names and trims whitespace.
 *
 * @param  {...(string|boolean|null|undefined)} classes
 * @returns {string}
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ').trim();
}
