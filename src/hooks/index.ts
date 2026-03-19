/**
 * Custom Hooks
 * Reusable hook logic for components
 */

import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * useInView Hook
 * Detects when an element enters the viewport.
 *
 * FIX: accepts `threshold` as a primitive number (not an options object)
 * to prevent a stale-closure bug where a new object reference on each render
 * caused the useEffect dependency to change infinitely, tearing down and
 * recreating the IntersectionObserver on every render cycle.
 *
 * @param threshold - Visibility threshold 0–1 (default 0.15)
 */
export function useInView(threshold = 0.15): [boolean, React.RefObject<HTMLElement>] {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold]); // primitive — stable across renders

  return [inView, ref];
}

/**
 * useNavigation Hook
 * Handles scroll detection for active navigation.
 *
 * FIX: wraps the scroll handler in requestAnimationFrame to avoid
 * calling getBoundingClientRect on every scroll event.
 * Uses a passive event listener for better scroll performance.
 * Stops at first matching section (explicit break instead of forEach).
 *
 * @param sections - Array of section IDs to track
 * @param offset   - Distance from top (px) to trigger active state
 */
export function useNavigation(sections: string[] = [], offset = 120): string {
  const [activeSection, setActiveSection] = useState<string>(sections[0] ?? 'home');

  useEffect(() => {
    let rafId: number;

    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        for (const id of sections) {
          const element = document.getElementById(id);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= offset && rect.bottom >= offset) {
              setActiveSection(id);
              break;
            }
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, [sections, offset]);

  return activeSection;
}

/**
 * useCopyToClipboard Hook
 * Copies text to clipboard with visual feedback.
 *
 * FIX: navigator.clipboard.writeText() is async and can be rejected
 * (e.g. HTTP context, browser permission denied). Previously the
 * Promise was fire-and-forget — the UI showed "Copied!" even on failure.
 * Now errors are caught and the success state is only set on resolution.
 *
 * @param duration - How long to show the "copied" feedback in ms (default 2000)
 */
export function useCopyToClipboard(duration = 2000): [boolean, (text: string) => void] {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(
    async (text: string): Promise<void> => {
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), duration);
      } catch (err) {
        console.error('Failed to copy to clipboard:', err);
      }
    },
    [duration],
  );

  return [copied, copy];
}
