import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Counter } from '../ui/Counter';
import { techData } from '../../lib/content';
import './TechData.css';

gsap.registerPlugin(ScrollTrigger);

const comparisons = [
  { brand: 'AETHON ONE', value: 6.8, color: 'var(--signal-red)' },
  { brand: 'Reference A', value: 7.4 },
  { brand: 'Reference B', value: 7.1 },
  { brand: 'Reference C', value: 7.6 },
];

export function TechData() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      // Bar chart grow
      gsap.fromTo(
        '.techdata__bar-fill',
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.6,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.techdata__chart',
            start: 'top 75%',
            once: true,
          },
        },
      );
      // Number reveal
      gsap.fromTo(
        '.techdata__num',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.18,
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: '.techdata__grid',
            start: 'top 70%',
            once: true,
          },
        },
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="tech" ref={ref} className="techdata" aria-label="Technical data">
      <div className="techdata__inner container">
        <header className="techdata__head">
          <div className="t-eyebrow">Chapter 03 · Numbers</div>
          <h2 className="techdata__title t-display-l">No adjectives. Just numbers.</h2>
          <p className="techdata__sub t-italic-serif">
            Independently measured. We will send you the methodology.
          </p>
        </header>

        <div className="techdata__grid">
          {techData.map((m, i) => {
            const max = Math.max(...techData.map((d) => d.value));
            const pct = (m.value / max) * 100;
            return (
              <article className="techdata__cell" key={i}>
                <div className="techdata__num">
                  <Counter
                    value={m.value}
                    decimals={i === 0 ? 1 : m.value < 1 ? 2 : 0}
                    suffix={m.unit}
                  />
                </div>
                <div className="techdata__bar">
                  <div
                    className="techdata__bar-fill"
                    style={{ transform: `scaleX(${pct / 100})` }}
                  />
                </div>
                <div className="techdata__label t-caption">{m.label}</div>
                <p className="techdata__detail t-body-s">{m.detail}</p>
              </article>
            );
          })}
        </div>

        <div className="techdata__chart">
          <div className="techdata__chart-head">
            <div className="t-caption">Frame weight · kg · paint included</div>
            <div className="t-mono techdata__chart-meta">n=4 / Wind tunnel verified</div>
          </div>
          <div className="techdata__chart-bars">
            {comparisons.map((c) => {
              const pct = (c.value / 8) * 100;
              return (
                <div className="techdata__row" key={c.brand}>
                  <div className="techdata__row-label t-mono">{c.brand}</div>
                  <div className="techdata__row-track">
                    <div
                      className={`techdata__row-bar ${c.color ? 'techdata__row-bar--accent' : ''}`}
                      style={{ transform: `scaleX(${pct / 100})` }}
                    />
                  </div>
                  <div className="techdata__row-value t-mono">{c.value.toFixed(1)}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
