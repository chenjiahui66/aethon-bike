import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BicycleSVG } from '../static/BicycleSVG';
import { brand } from '../../lib/content';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

function splitChars(text: string) {
  return Array.from(text);
}

export function Hero() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      const chars = el.querySelectorAll<HTMLElement>('.hero__char');
      gsap.set(chars, { yPercent: 110, opacity: 0 });
      gsap.to(chars, {
        yPercent: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power4.out',
        stagger: 0.04,
        delay: 0.4,
      });

      gsap.fromTo(
        '.hero__sub, .hero__meta-item, .hero__cue',
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.1,
          delay: 1.2,
        },
      );

      // Parallax on scroll — static SVG is light, so we can be a bit more generous
      gsap.to('.hero__canvas', {
        yPercent: 10,
        scale: 1.04,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.6,
        },
      });
      gsap.to('.hero__inner', {
        yPercent: -14,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.6,
        },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" ref={ref} className="hero" aria-label="Hero">
      <div className="hero__canvas">
        <BicycleSVG
          view="profile"
          intensity={0.92}
          ariaLabel="AETHON ONE road bike — side profile"
        />
        {/* Subtle dust drift overlay for atmosphere without WebGL */}
        <div className="hero__dust" aria-hidden />
      </div>

      <div className="hero__vignette" aria-hidden />

      <div className="hero__inner container">
        <div className="hero__topline t-eyebrow">
          <span>R-Series · 2026</span>
          <span className="hero__topline-sep" aria-hidden />
          <span>Now arriving</span>
        </div>

        <h1 className="hero__title" aria-label={`${brand.name} ONE`}>
          <span className="hero__title-row" aria-hidden>
            {splitChars(brand.name).map((c, i) => (
              <span className="hero__char-wrap" key={`a-${i}`}>
                <span className="hero__char">{c === ' ' ? '\u00A0' : c}</span>
              </span>
            ))}
          </span>
          <span className="hero__title-row hero__title-row--accent" aria-hidden>
            {splitChars('ONE').map((c, i) => (
              <span className="hero__char-wrap" key={`b-${i}`}>
                <span className="hero__char">{c}</span>
              </span>
            ))}
          </span>
        </h1>

        <p className="hero__sub t-h3">{brand.tagline}</p>

        <div className="hero__meta">
          <div className="hero__meta-item">
            <span className="hero__meta-key t-caption">Frame</span>
            <span className="hero__meta-val t-mono">T1100 · 780g</span>
          </div>
          <div className="hero__meta-item">
            <span className="hero__meta-key t-caption">Weight</span>
            <span className="hero__meta-val t-mono">6.8 kg</span>
          </div>
          <div className="hero__meta-item">
            <span className="hero__meta-key t-caption">Drag</span>
            <span className="hero__meta-val t-mono">0.27 CdA</span>
          </div>
        </div>

        <div className="hero__cue" aria-hidden>
          <span className="hero__cue-line" />
          <span className="t-caption">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}
