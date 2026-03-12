/**
 * About Section Component
 * About Me section with personal and professional info
 */

import React from 'react';
import { CONTACT_INFO } from '../config/portfolio';
import Section from './Section';
import styles from './About.module.css';

function About() {
  return (
    <Section id="about" style={{ padding: '80px 5%', position: 'relative' }}>
      <div className={styles.container}>
        <div className={styles.label}>{/* About Me */}</div>
        <h2 className={styles.title}>Who I Am</h2>

        <div className={styles.grid}>
          <div className={styles.bio}>
            <p className={styles.paragraph}>
              Frontend / Full-Stack Developer with{' '}
              <span className={styles.highlight}>
                5+ years of professional experience
              </span>
              , based in Bhubaneswar, Odisha, India.
            </p>
            <p className={styles.paragraph}>
              My primary expertise is in building scalable web applications using{' '}
              <span className={styles.highlight}>
                React, TypeScript, and modern JavaScript
              </span>
              . I also work with Node.js and AWS serverless services to design efficient backend systems and microservices.
            </p>
            <p className={styles.paragraph}>
              Currently, I'm contributing to the development of a{' '}
              <span className={styles.highlight}>
                campaign management system
              </span>
              , focusing on performance optimization, reusable UI architecture, and scalable cloud-based services.
            </p>
          </div>

          <div className={styles.infoList}>
            {[
              { label: 'Location', value: CONTACT_INFO.location },
              { label: 'Email', value: CONTACT_INFO.email },
              { label: 'Phone', value: CONTACT_INFO.phone },
              { label: 'Education', value: CONTACT_INFO.education },
              { label: 'Status', value: CONTACT_INFO.status },
            ].map(({ label, value }) => (
              <div key={label} className={styles.infoItem}>
                <span className={styles.infoLabel}>{label.toUpperCase()}</span>
                <span className={styles.infoValue}>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default About;
