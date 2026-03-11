/**
 * Section Wrapper Component
 * Reusable section container with fade-in animation
 */

import React from 'react';
import { useInView } from '../hooks';
import styles from './Section.module.css';

function Section({ id, children, className = '', style = {} }) {
  const [inView, ref] = useInView();

  return (
    <section
      id={id}
      ref={ref}
      className={`${styles.section} ${className}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(40px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
        ...style,
      }}
    >
      {children}
    </section>
  );
}

export default Section;
