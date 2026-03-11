/**
 * Hero Section Component
 * Main landing section with call-to-action buttons
 */

import React, { useCallback } from 'react';
import { HERO_TEXT, STATS } from '../config/portfolio';
import THEME from '../constants/theme';
import styles from './Hero.module.css';

function Hero() {
  const scrollTo = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.label}>{HERO_TEXT.label}</div>

          <h1 className={styles.title}>
            {HERO_TEXT.name.split('\n').map((line, idx) => (
              <React.Fragment key={idx}>
                {line === 'Kumar Jena' ? (
                  <>
                    <span style={{ color: THEME.COLORS.primary }}>{line.split(' ')[0]}</span> {line.split(' ')[1]}
                    <span className={styles.cursor}>_</span>
                  </>
                ) : (
                  line
                )}
                {idx < HERO_TEXT.name.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h1>

          <p className={styles.description}>{HERO_TEXT.description}</p>

          <div className={styles.ctaButtons}>
            <button
              className={`${styles.ctaBtn} ${styles.filled}`}
              onClick={() => scrollTo('experience')}
            >
              View My Work
            </button>
            <button
              className={styles.ctaBtn}
              onClick={() => scrollTo('contact')}
            >
              Get In Touch
            </button>
          </div>

          {/* Stats */}
          <div className={styles.stats}>
            {STATS.map(({ number, label }, idx) => (
              <div key={idx} className={styles.stat}>
                <div className={styles.statNumber}>{number}</div>
                <div className={styles.statLabel}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`${styles.scrollIndicator} float`}>
          <div className={styles.scrollLine} />
          <span className={styles.scrollText}>SCROLL</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
