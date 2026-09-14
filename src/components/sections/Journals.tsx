import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { journals } from '../../lib/content';
import './Journals.css';

gsap.registerPlugin(ScrollTrigger);

export function Journals() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      const items = el.querySelectorAll<HTMLElement>('.journal');
      items.forEach((item, i) => {
        const img = item.querySelector<HTMLElement>('.journal__media');
        gsap.fromTo(
          img,
          { scale: 1.15, yPercent: -6 },
          {
            scale: 1,
            yPercent: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: item,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.6,
            },
          },
        );
        gsap.fromTo(
          item.querySelectorAll('.journal__eyebrow, .journal__title, .journal__excerpt, .journal__cta'),
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.08,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 75%',
              once: true,
            },
          },
        );
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="journals" ref={ref} className="journals" aria-label="Journal">
      <div className="journals__inner container">
        <header className="journals__head">
          <div className="t-eyebrow">Chapter 04 · Journal</div>
          <h2 className="journals__title t-display-l">Field notes.</h2>
          <p className="journals__sub t-italic-serif">
            Long-form writing on materials, athletes, and the small decisions that make a great frame.
          </p>
        </header>

        <div className="journals__grid">
          {journals.map((j, i) => (
            <a className="journal" key={j.slug} href={`#journal-${j.slug}`}>
              <div className="journal__media">
                <div className="journal__media-fallback" aria-hidden>
                  <span className="journal__media-num t-display-m">{String(i + 1).padStart(2, '0')}</span>
                </div>
              </div>
              <div className="journal__text">
                <div className="journal__eyebrow t-eyebrow">{j.eyebrow}</div>
                <h3 className="journal__title t-h2">{j.title}</h3>
                <p className="journal__excerpt t-body">{j.excerpt}</p>
                <div className="journal__cta">
                  <span className="t-caption">Read</span>
                  <span aria-hidden>→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
