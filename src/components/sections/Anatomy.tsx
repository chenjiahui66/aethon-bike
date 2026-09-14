import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BicycleSVG, type BikeHighlight } from '../static/BicycleSVG';
import './Anatomy.css';

gsap.registerPlugin(ScrollTrigger);

const stages = [
  { id: 'assembled', label: 'Assembled', exploded: 0, highlight: null },
  { id: 'frame', label: 'Frame · T1100', exploded: 0.1, highlight: 'frame' as BikeHighlight },
  { id: 'cockpit', label: 'Cockpit lifts', exploded: 0.35, highlight: 'cockpit' as BikeHighlight },
  { id: 'saddle', label: 'Saddle rises', exploded: 0.55, highlight: 'saddle' as BikeHighlight },
  { id: 'wheels', label: 'Wheels separate', exploded: 0.75, highlight: 'wheels' as BikeHighlight },
  { id: 'drivetrain', label: 'Drivetrain', exploded: 0.9, highlight: 'drivetrain' as BikeHighlight },
];

export function Anatomy() {
  const ref = useRef<HTMLElement | null>(null);
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const [exploded, setExploded] = useState(0);
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const el = ref.current;
    const sticky = stickyRef.current;
    if (!el || !sticky) return;
    const ctx = gsap.context(() => {
      const trigger = ScrollTrigger.create({
        trigger: el,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.5,
        onUpdate: (self) => {
          const p = self.progress;
          // Triangle wave: 0 → 1 → 0 (assembled → exploded → reassembled)
          const v = p < 0.5 ? p * 2 : (1 - p) * 2;
          setExploded(v);
          // Determine active stage
          let s = 0;
          for (let i = 0; i < stages.length; i++) {
            if (v >= stages[i].exploded) s = i;
          }
          setActiveStage(s);
        },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="anatomy" ref={ref} className="anatomy" aria-label="Anatomy">
      <div className="anatomy__sticky" ref={stickyRef}>
        <div className="anatomy__canvas">
          <BicycleSVG
            view="profile"
            exploded={exploded}
            highlight={stages[activeStage].highlight}
            showLabels
            intensity={0.98}
            ariaLabel={`AETHON ONE — ${stages[activeStage].label.toLowerCase()}`}
          />
        </div>

        <div className="anatomy__overlay">
          <div className="anatomy__head container">
            <div className="t-eyebrow">Chapter 02 · Engineering</div>
            <h2 className="anatomy__title t-display-l">Take it apart.</h2>
            <p className="anatomy__sub t-italic-serif">
              Six components. Six decisions. Scroll to see how AETHON ONE earns its weight.
            </p>
          </div>

          <div className="anatomy__stages container">
            {stages.map((s, i) => (
              <div
                key={s.id}
                className={`anatomy__stage ${i === activeStage ? 'is-active' : ''} ${i < activeStage ? 'is-past' : ''}`}
              >
                <div className="anatomy__stage-num t-mono">{String(i + 1).padStart(2, '0')}</div>
                <div className="anatomy__stage-label t-h3">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="anatomy__progress container">
            <div className="anatomy__progress-track">
              <div
                className="anatomy__progress-fill"
                style={{ transform: `scaleX(${exploded})` }}
              />
            </div>
            <div className="anatomy__progress-labels">
              <span className="t-caption">Assembled</span>
              <span className="t-caption">Exploded</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
