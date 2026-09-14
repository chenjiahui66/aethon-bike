import { type ReactNode, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '../../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: keyof JSX.IntrinsicElements;
  stagger?: number;
};

/**
 * Cinematic reveal — fade + translateY driven by ScrollTrigger.
 * Stagger applies to direct children.
 */
export function Reveal({
  children,
  className = '',
  delay = 0,
  y = 40,
  as: Tag = 'div',
  stagger = 0,
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
    const targets = stagger > 0 ? Array.from(el.children) : [el];
    gsap.set(targets, { opacity: 0, y });
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to(targets, {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: 'power3.out',
          stagger,
          delay,
        });
      },
    });
    return () => trigger.kill();
  }, [delay, y, stagger, reduced]);

  // @ts-expect-error generic ref
  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
