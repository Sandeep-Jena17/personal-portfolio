/**
 * Theme Constants
 * Centralized design tokens for the entire application
 * Follows Design System best practices
 */

export const COLORS = {
  // Primary palette
  primary: '#00ffc8',      // Cyan accent
  primaryDark: '#00e6b4',
  primaryLight: '#26ffda',
  
  // Neutrals
  black: '#0a0a0f',
  darkGray: '#1a1a2e',
  mediumGray: '#2d2d3e',
  gray: '#888',
  lightGray: '#aaa',
  lighter: '#ccc',
  white: '#fff',
  faint: '#e8e8f0',
  
  // Semantic
  background: '#0a0a0f',
  surface: '#0d0d15',
  border: '#1a1a2e',
  borderLight: 'rgba(255,255,255,0.04)',
};

export const TYPOGRAPHY = {
  fontFamilies: {
    mono: "'Courier New', 'Courier', monospace",
    spaceMono: "'Space Mono', monospace",
    syne: "'Syne', sans-serif",
  },
  
  sizes: {
    xs: 10,
    sm: 11,
    base: 12,
    md: 13,
    lg: 15,
    xl: 18,
    '2xl': 28,
    '3xl': 36,
    '4xl': 48,
    '5xl': 96,
  },
  
  weights: {
    regular: 400,
    bold: 700,
    black: 800,
  },
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  '2xl': 28,
  '3xl': 32,
  '4xl': 40,
  '5xl': 48,
  '6xl': 60,
  '7xl': 64,
};

export const TRANSITIONS = {
  fast: '0.2s',
  normal: '0.3s',
  slow: '0.7s',
  easing: 'ease',
};

export const BREAKPOINTS = {
  mobile: '768px',
  tablet: '1024px',
  desktop: '1200px',
};

export const SHADOWS = {
  sm: '0 4px 6px rgba(0, 0, 0, 0.1)',
  md: '0 8px 16px rgba(0, 0, 0, 0.2)',
  lg: '0 20px 25px rgba(0, 0, 0, 0.15)',
  glow: '0 8px 30px rgba(0,255,200,0.15)',
  glowHeavy: '0 8px 30px rgba(0,255,200,0.3)',
};

export const THEME = {
  COLORS,
  TYPOGRAPHY,
  SPACING,
  TRANSITIONS,
  BREAKPOINTS,
  SHADOWS,
};

export default THEME;
