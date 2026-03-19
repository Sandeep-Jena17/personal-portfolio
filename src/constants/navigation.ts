/**
 * Navigation Configuration
 * Centralized navigation links and constants
 */

export const NAV_LINKS = ['home', 'about', 'skills', 'experience', 'contact'] as const;

export type NavLink = typeof NAV_LINKS[number];

export const NAV_CONFIG = {
  scrollOffset: 120, // Pixels from top for active detection
} as const;

export default NAV_LINKS;
