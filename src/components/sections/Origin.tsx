import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Origin.css';

gsap.registerPlugin(ScrollTrigger);

const blocks = [
  {
    eyebrow: '01 · The workshop',
    title: 'A small workshop in Bologna.',
    body: 'Three builders, one carbon layup room, no assembly line. Each AETHON ONE is hand-finished by a single technician whose initials go on the underside of the top tube. We have not changed this since 1987.',
    imageCaption: 'Layup room · Bologna',
  },
  {
    eyebrow: '02 · The material',
    title: 'Torayca T1100 — and why we will not switch.',
    body: 'A 12-year relationship with one carbon fibre. T1100 gives us the stiffness-to-weight ratio that no alternative has matched in our wind tunnel. We have re-laid the same tubes three times. We know what they do at 45 km/h in crosswinds.',
    imageCaption: 'Pre-preg carbon layup',
  },
  {
    eyebrow: '03 · The riders',
    title: 'Tested by people who refuse to lose.',
    body: 'AETHON ONE is ridden by 14 sponsored athletes — none of them paid in cash. In exchange, they give us two things: honest feedback, and the right to refuse a frame that does not earn its place on their bike.',
    imageCaption: 'Col du Galibier · 2,642 m',
  },
];

export function Origin() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      const items = el.querySelectorAll<HTMLElement>('.origin__block');
      items.forEach((item) => {
        const image = item.querySelector<HTMLElement>('.origin__media-inner');
        const text = item.querySelectorAll<HTMLElement>('.origin__eyebrow, .origin__title, .origin__body, .origin__caption');
        if (image) {
          gsap.fromTo(
            image,
            { scale: 1.1, yPercent: -4 },
            {
              scale: 1.0,
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
        }
        gsap.fromTo(
          text,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.08,
            duration: 1.0,
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
    <section id="origin" ref={ref} className="origin" aria-label="Why we build">
      <div className="origin__head container">
        <div className="origin__head-eyebrow t-eyebrow">Chapter 01</div>
        <h2 className="origin__head-title t-display-l">Why we build.</h2>
        <p className="origin__head-sub t-italic-serif">
          Three things we have refused to compromise on, since 1987.
        </p>
      </div>

      <div className="origin__blocks">
        {blocks.map((b, i) => (
          <article
            key={i}
            className={`origin__block ${i % 2 === 1 ? 'origin__block--reverse' : ''}`}
          >
            <div className="origin__media">
              <div className="origin__media-inner origin__media--abstract">
                <span className="origin__media-eyebrow t-mono">{b.eyebrow}</span>
                <span className="origin__media-marker t-caption">[ TBD · PHOTOGRAPHY ]</span>
              </div>
              <div className="origin__caption t-caption">{b.imageCaption}</div>
            </div>

            <div className="origin__text">
              <div className="origin__eyebrow t-eyebrow">{b.eyebrow}</div>
              <h3 className="origin__title t-h2">{b.title}</h3>
              <p className="origin__body t-body-l">{b.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
