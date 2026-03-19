/**
 * Section Wrapper Component
 * Reusable section container with fade-in animation on viewport entry
 */

import React from 'react';
import { useInView } from '../hooks';
import THEME from '../constants/theme';
import styles from './Section.module.css';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

function Section({ id, children, className = '', style = {} }: SectionProps): JSX.Element {
  const [inView, ref] = useInView();

  return (
    <section
      id={id}
      ref={ref}
      className={`${styles.section} ${className}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(40px)',
        // FIX: use THEME token instead of hardcoded '0.7s ease'
        transition: `opacity ${THEME.TRANSITIONS.slow} ${THEME.TRANSITIONS.easing}, transform ${THEME.TRANSITIONS.slow} ${THEME.TRANSITIONS.easing}`,
        ...style,
      }}
    >
      {children}
    </section>
  );
}

export default Section;
