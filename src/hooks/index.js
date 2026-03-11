/**
 * Custom Hooks
 * Reusable hook logic for components
 */

import { useEffect, useRef, useState } from 'react';

/**
 * useInView Hook
 * Detects when an element enters the viewport
 * Optimized with memoization and cleanup
 * 
 * @param {Object} options - IntersectionObserver options
 * @param {number} options.threshold - Visibility threshold (0-1)
 * @returns {[boolean, React.RefObject]} - [isInView, ref]
 */
export function useInView(options = { threshold: 0.15 }) {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        // Unobserve after first detection to prevent re-triggers
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return [inView, ref];
}

/**
 * useNavigation Hook
 * Handles scroll detection for active navigation
 * 
 * @param {string[]} sections - Array of section IDs
 * @param {number} offset - Scroll offset for detection
 * @returns {string} - Currently active section ID
 */
export function useNavigation(sections = [], offset = 120) {
  const [activeSection, setActiveSection] = useState(sections[0] || 'home');

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= offset && rect.bottom >= offset) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections, offset]);

  return activeSection;
}

/**
 * useCopyToClipboard Hook
 * Handles copying text to clipboard with feedback
 * 
 * @param {number} duration - Duration to show feedback (ms)
 * @returns {[boolean, (text: string) => void]} - [copied, copyFunction]
 */
export function useCopyToClipboard(duration = 2000) {
  const [copied, setCopied] = useState(false);

  const copy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), duration);
  };

  return [copied, copy];
}
