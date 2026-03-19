/**
 * Experience Section Component
 * Professional work history with expandable cards
 */

import React, { useState, useCallback } from 'react';
import { EXPERIENCES, COMPANY_INFO } from '../config/portfolio';
import type { ExperienceItem } from '../config/portfolio';
import Section from './Section';
import styles from './Experience.module.css';

interface ExperienceCardProps {
  experience: ExperienceItem;
  isOpen: boolean;
  onToggle: () => void;
}

function ExperienceCard({ experience, isOpen, onToggle }: ExperienceCardProps): JSX.Element {
  const handleClick = useCallback(() => {
    onToggle();
  }, [onToggle]);

  // FIX: onKeyPress is deprecated — replaced with onKeyDown
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>): void => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleClick();
      }
    },
    [handleClick],
  );

  return (
    <div
      className={`${styles.expCard} ${isOpen ? styles.open : ''}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
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
            style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
          >
            +
          </span>
        </div>
      </div>

      {isOpen && (
        <ul className={styles.points}>
          {experience.points.map((point) => (
            // FIX: use point content as key (unique within a card), not index
            <li key={point} className={styles.point}>
              <span className={styles.arrow}>→</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Experience(): JSX.Element {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpanded = useCallback((index: number): void => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  }, []);

  return (
    <Section id="experience" style={{ padding: '80px 5%', position: 'relative' }}>
      <div className={styles.container}>
        <div className={styles.label}>{/* Professional Experience */}</div>
        <h2 className={styles.title}>Work History</h2>

        {/* FIX: company name & duration moved from hardcoded JSX to config */}
        <div className={styles.companyInfo}>
          <span className={styles.company}>{COMPANY_INFO.name}</span>
          <span className={styles.duration}>— {COMPANY_INFO.duration}</span>
        </div>

        <div className={styles.experienceList}>
          {EXPERIENCES.map((exp, idx) => (
            // FIX: use unique title as key, not array index
            <ExperienceCard
              key={exp.title}
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
