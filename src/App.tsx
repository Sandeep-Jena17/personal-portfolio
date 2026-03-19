/**
 * App Component
 * Root component — orchestrates all sections and layout.
 *
 * FIX: global styles are now imported from styles/global.ts (single source
 * of truth) instead of being duplicated inline here. The old inline styles
 * also referenced COLORS.mobile (a non-existent key) and were missing several
 * animations present in global.ts.
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
import { globalStyles } from './styles/global';
import './App.css';

function App(): JSX.Element {
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.innerText = globalStyles;
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
