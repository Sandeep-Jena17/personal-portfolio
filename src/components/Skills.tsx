/**
 * Skills Section Component
 * Display technical skills by category
 */

import React from 'react';
import { SKILLS } from '../config/portfolio';
import THEME from '../constants/theme';
import Section from './Section';
import styles from './Skills.module.css';

function Skills(): JSX.Element {
  return (
    <Section
      id="skills"
      style={{
        padding: '80px 5%',
        background: 'rgba(0,255,200,0.01)',
        position: 'relative',
      }}
    >
      <div className={styles.container}>
        <div className={styles.label}>{/* Technical Skills */}</div>
        <h2 className={styles.title}>What I Work With</h2>

        <div className={styles.skillsGrid}>
          {Object.entries(SKILLS).map(([category, items]) => (
            <div key={category} className={styles.skillCategory}>
              <div className={styles.categoryLabel}>
                {/* FIX: use THEME token instead of hardcoded '#00ffc8' */}
                <span style={{ color: THEME.COLORS.primary }}>&gt;</span> {category}
              </div>
              <div className={styles.skillsList}>
                {items.map((skill) => (
                  <span key={skill} className={styles.skillPill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Skills;
