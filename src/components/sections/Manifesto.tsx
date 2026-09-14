import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { manifesto } from '../../lib/content';
import './Manifesto.css';

gsap.registerPlugin(ScrollTrigger);

export function Manifesto() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      const statements = el.querySelectorAll<HTMLElement>('.manifesto__statement');
      statements.forEach((s) => {
        const text = s.querySelector<HTMLElement>('.manifesto__text');
        if (!text) return;
        gsap.fromTo(
          text,
          { letterSpacing: '0.1em', opacity: 0.2 },
          {
            letterSpacing: '-0.02em',
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: s,
              start: 'top 70%',
              end: 'center center',
              scrub: 0.6,
            },
          },
        );
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="manifesto" ref={ref} className="manifesto" aria-label="Manifesto">
      {manifesto.map((s, i) => (
        <div className="manifesto__statement" key={s.id}>
          <div className="manifesto__id t-mono">{s.id}</div>
          <p className="manifesto__text t-display-l">{s.line}</p>
        </div>
      ))}
    </section>
  );
}
