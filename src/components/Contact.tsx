/**
 * Contact Section Component
 * Contact information with copy-to-clipboard functionality
 */

import React, { useCallback } from 'react';
import { useCopyToClipboard } from '../hooks';
import { CONTACT_INFO } from '../config/portfolio';
import Section from './Section';
import styles from './Contact.module.css';

interface ContactItemProps {
  icon: string;
  label: string;
  value: string;
  action?: () => void;
  actionLabel?: string;
}

function ContactItem({ icon, label, value, action, actionLabel }: ContactItemProps): JSX.Element {
  return (
    <div className={styles.contactItem}>
      <span className={styles.icon}>{icon}</span>
      <div className={styles.itemContent}>
        <div className={styles.itemLabel}>{label.toUpperCase()}</div>
        <div className={styles.itemValue}>{value}</div>
      </div>
      {action && actionLabel && (
        <button
          onClick={action}
          className={styles.actionBtn}
          aria-label={`${actionLabel} ${label}`}
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}

function Contact(): JSX.Element {
  const [copied, copy] = useCopyToClipboard();

  const handleCopyEmail = useCallback(() => {
    copy(CONTACT_INFO.email);
  }, [copy]);

  return (
    <Section id="contact" style={{ padding: '80px 5% 120px', position: 'relative' }}>
      <div className={styles.container}>
        <div className={styles.label}>{/* Contact */}</div>
        <h2 className={styles.title}>Let's Build Something</h2>

        <p className={styles.description}>
          Open to freelance projects, full-time opportunities, or just a good
          technical conversation. Drop me a line.
        </p>

        <div className={styles.contactList}>
          <ContactItem
            icon="✉"
            label="Email"
            value={CONTACT_INFO.email}
            action={handleCopyEmail}
            actionLabel={copied ? 'Copied!' : 'Copy'}
          />
          <ContactItem
            icon="☎"
            label="Phone"
            value={CONTACT_INFO.phone}
          />
          <ContactItem
            icon="◈"
            label="Location"
            value={CONTACT_INFO.location}
          />
        </div>
      </div>
    </Section>
  );
}

export default Contact;
