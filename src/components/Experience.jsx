/**
 * Experience Section Component
 * Professional work history with expandable cards
 */

import React, { useState, useCallback } from 'react';
import { EXPERIENCES } from '../config/portfolio';
import Section from './Section';
import styles from './Experience.module.css';

function ExperienceCard({ experience, isOpen, onToggle }) {
  const handleClick = useCallback(() => {
    onToggle();
  }, [onToggle]);

  return (
    <div
      className={`${styles.expCard} ${isOpen ? styles.open : ''}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => e.key === 'Enter' && handleClick()}
    >
      <div className={styles.cardHeader}>
        <div className={styles.cardTitle}>
          <h3 className={styles.title}>{experience.title}</h3>
          <p className={styles.subtitle}>{experience.subtitle}</p>
        </div>
        <div className={styles.cardMeta}>
          <span className={styles.tag}>{experience.tag}</span>
          <span
            className={styles.toggleIcon}
            style={{
              transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
            }}
          >
            +
          </span>
        </div>
      </div>

      {isOpen && (
        <ul className={styles.points}>
          {experience.points.map((point, idx) => (
            <li key={idx} className={styles.point}>
              <span className={styles.arrow}>→</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Experience() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpanded = useCallback(
    (index) => {
      setExpandedIndex((prev) => (prev === index ? null : index));
    },
    []
  );

  return (
    <Section id="experience" style={{ padding: '80px 5%', position: 'relative' }}>
      <div className={styles.container}>
        <div className={styles.label}>{/* Professional Experience */}</div>
        <h2 className={styles.title}>Work History</h2>

        <div className={styles.companyInfo}>
          <span className={styles.company}>Empower Solutions</span>
          <span className={styles.duration}>— Feb 2021 → Present (5+ Years)</span>
        </div>

        <div className={styles.experienceList}>
          {EXPERIENCES.map((exp, idx) => (
            <ExperienceCard
              key={idx}
              experience={exp}
              isOpen={expandedIndex === idx}
              onToggle={() => toggleExpanded(idx)}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Experience;
