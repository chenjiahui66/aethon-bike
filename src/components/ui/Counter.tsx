import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import './Counter.css';

gsap.registerPlugin(ScrollTrigger);

type Props = {
  value: number;
  decimals?: number;
  /** Prefix shown before the number (e.g. €) */
  prefix?: string;
  /** Suffix shown after the number (e.g. kg) */
  suffix?: string;
  /** If true, also scales the counter as it counts (small zoom-in). */
  pulse?: boolean;
};

/**
 * Count-up number that triggers on scroll.
 */
export function Counter({ value, decimals = 1, prefix = '', suffix = '', pulse = false }: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduced) {
      setDisplay(value);
      return;
    }
    const obj = { v: 0 };
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          v: value,
          duration: 2.2,
          ease: 'power2.out',
          onUpdate: () => setDisplay(obj.v),
        });
        if (pulse) {
          gsap.fromTo(
            el,
            { scale: 0.96, letterSpacing: '0.05em' },
            { scale: 1, letterSpacing: '0em', duration: 1.6, ease: 'power3.out' },
          );
        }
      },
    });
    return () => trigger.kill();
  }, [value, pulse, reduced]);

  const formatted = display.toFixed(decimals);

  return (
    <span className="counter-num" ref={ref}>
      {prefix}
      <span className="counter-num__value">{formatted}</span>
      {suffix && <span className="counter-num__suffix">{suffix}</span>}
    </span>
  );
}
