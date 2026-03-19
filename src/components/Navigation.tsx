/**
 * Navigation Component
 * Main navigation bar with responsive menu
 */

import React, { useState, useCallback } from 'react';
import { NAV_LINKS, NAV_CONFIG } from '../constants/navigation';
import { useNavigation } from '../hooks';
import THEME from '../constants/theme';
import styles from './Navigation.module.css';

function Navigation(): JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useNavigation([...NAV_LINKS], NAV_CONFIG.scrollOffset);

  const scrollTo = useCallback((id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  }, []);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        SK<span style={{ color: THEME.COLORS.primary }}>.</span>
      </div>

      {/* Desktop Navigation */}
      <div className={styles.desktopNav}>
        {NAV_LINKS.map((link) => (
          <button
            key={link}
            className={`${styles.navLink} ${active === link ? styles.active : ''}`}
            onClick={() => scrollTo(link)}
          >
            {link}
          </button>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <button
        className={styles.hamburger}
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              className={`${styles.navLink} ${active === link ? styles.active : ''}`}
              onClick={() => scrollTo(link)}
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navigation;
