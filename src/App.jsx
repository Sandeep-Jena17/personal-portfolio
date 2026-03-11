/**
 * App Component
 * Main application component
 * 
 * This is the root component that orchestrates all sections and layout.
 * Follows modern React best practices with proper component composition,
 * separation of concerns, and centralized configuration management.
 */

import React, { useEffect } from 'react';
import {
  Navigation,
  Hero,
  About,
  Skills,
  Experience,
  Contact,
  Footer,
  GridBackground,
  RadialGlow,
} from './components';
import THEME from './constants/theme';
import './App.css';

function App() {
  useEffect(() => {
    // Inject global styles
    const styleElement = document.createElement('style');
    styleElement.innerText = `
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
        background: ${THEME.COLORS.background};
        font-family: ${THEME.TYPOGRAPHY.fontFamilies.mono};
        color: ${THEME.COLORS.faint};
        line-height: 1.6;
      }

      ::-webkit-scrollbar {
        width: 4px;
      }

      ::-webkit-scrollbar-track {
        background: ${THEME.COLORS.background};
      }

      ::-webkit-scrollbar-thumb {
        background: ${THEME.COLORS.primary};
        border-radius: 2px;
      }

      @keyframes float {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-10px);
        }
      }

      .float {
        animation: float 4s ease-in-out infinite;
      }
    `;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <div
      style={{
        background: THEME.COLORS.background,
        color: THEME.COLORS.faint,
        minHeight: '100vh',
        overflowX: 'hidden',
        position: 'relative',
      }}
    >
      {/* Background Effects */}
      <GridBackground />
      <RadialGlow />

      {/* Main Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
