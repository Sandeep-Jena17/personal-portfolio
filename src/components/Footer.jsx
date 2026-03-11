/**
 * Footer Component
 * Footer section with copyright and tech stack
 */

import React from 'react';
import { FOOTER_TEXT } from '../config/portfolio';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.copyright}>{FOOTER_TEXT.copyright}</span>
      <span className={styles.stack}>{FOOTER_TEXT.stack}</span>
    </footer>
  );
}

export default Footer;
