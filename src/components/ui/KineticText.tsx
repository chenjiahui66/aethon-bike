import { useEffect, useRef, createElement, type Ref } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import './KineticText.css';

gsap.registerPlugin(ScrollTrigger);

/** Whitelist of HTML elements that accept a plain HTMLElement ref.
 *  (Avoids the SVG/Symbol union-explosion when using keyof JSX.IntrinsicElements.) */
type KineticTag = 'div' | 'span' | 'p' | 'section' | 'article' | 'h1' | 'h2' | 'h3' | 'h4';

type Props = {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  /** 'chars' | 'words' | 'lines' */
  splitBy?: 'chars' | 'words' | 'lines';
  as?: KineticTag;
};

/**
 * Splits text into spans, then animates with cinematic ease on enter.
 */
export function KineticText({
  text,
  className = '',
  delay = 0,
  stagger = 0.04,
  splitBy = 'words',
  as = 'span',
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduced) {
      el.style.opacity = '1';
      el.style.transform = 'none';
      return;
    }
    const parts = Array.from(el.querySelectorAll<HTMLElement>('.kt__part'));
    gsap.set(parts, { yPercent: 110, opacity: 0 });
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      once: true,
      onEnter: () => {
        gsap.to(parts, {
          yPercent: 0,
          opacity: 1,
          duration: 1.0,
          ease: 'power4.out',
          stagger,
          delay,
        });
      },
    });
    return () => trigger.kill();
  }, [delay, stagger, reduced]);

  let parts: string[];
  if (splitBy === 'chars') {
    parts = Array.from(text);
  } else if (splitBy === 'words') {
    parts = text.split(' ');
  } else {
    parts = text.split('\n');
  }

  return createElement(
    as,
    {
      ref: ref as Ref<HTMLElement>,
      className: `kinetic ${className}`,
      'aria-label': text,
    },
    parts.map((p, i) => (
      <span key={i} className="kt__wrap" aria-hidden>
        <span className="kt__part">{p === ' ' ? '\u00A0' : p}</span>
        {splitBy === 'words' && i < parts.length - 1 ? '\u00A0' : ''}
      </span>
    )),
  );
}