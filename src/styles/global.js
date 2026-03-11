/**
 * Global Styles
 * Base styles, animations, and utilities
 */

import { COLORS, TYPOGRAPHY, SPACING } from '../constants/theme';

export const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;700;800&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: ${COLORS.background};
    font-family: ${TYPOGRAPHY.fontFamilies.mono};
    color: ${COLORS.faint};
    line-height: 1.6;
  }

  /* Scrollbar Styling */
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-track {
    background: ${COLORS.background};
  }

  ::-webkit-scrollbar-thumb {
    background: ${COLORS.primary};
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${COLORS.primaryDark};
  }

  /* Common Animations */
  @keyframes blink {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes glow {
    0%, 100% {
      text-shadow: 0 0 20px rgba(0, 255, 200, 0.4);
    }
    50% {
      text-shadow: 0 0 30px rgba(0, 255, 200, 0.6);
    }
  }

  /* Utility Classes */
  .cursor-blink {
    animation: blink 1s infinite;
    color: ${COLORS.primary};
  }

  .float {
    animation: float 4s ease-in-out infinite;
  }

  .glow-text {
    color: ${COLORS.primary};
    text-shadow: 0 0 30px rgba(0, 255, 200, 0.4);
  }

  /* Responsive adjustments */
  @media (max-width: ${COLORS.mobile || '768px'}) {
    ::-webkit-scrollbar {
      width: 3px;
    }
  }
`;

export default globalStyles;
