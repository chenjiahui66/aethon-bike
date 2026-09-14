import { useEffect, useState } from 'react';
import './SectionCounter.css';

const sections = [
  { id: 'hero', label: 'Hero' },
  { id: 'manifesto', label: 'Manifesto' },
  { id: 'origin', label: 'Origin' },
  { id: 'product', label: 'Product' },
  { id: 'anatomy', label: 'Anatomy' },
  { id: 'tech', label: 'Technology' },
  { id: 'journals', label: 'Journal' },
  { id: 'footer', label: 'Dealers' },
] as const;

export function SectionCounter() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? Math.min(1, scrollY / total) : 0);

      // Find which section center is closest to viewport center
      const vh = window.innerHeight;
      let bestIdx = 0;
      let bestDist = Infinity;
      sections.forEach((s, i) => {
        const el = document.getElementById(s.id);
        if (!el) return;
        const r = el.getBoundingClientRect();
        const center = r.top + r.height / 2;
        const dist = Math.abs(center - vh / 2);
        if (dist < bestDist) {
          bestDist = dist;
          bestIdx = i;
        }
      });
      setActive(bestIdx);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <aside className="counter" aria-hidden>
      <div className="counter__progress">
        <div
          className="counter__progress-bar"
          style={{ transform: `scaleY(${progress})` }}
        />
      </div>
      <div className="counter__readout">
        <span className="counter__index t-mono">
          {String(active + 1).padStart(2, '0')}
        </span>
        <span className="counter__divider t-mono">/</span>
        <span className="counter__total t-mono">
          {String(sections.length).padStart(2, '0')}
        </span>
      </div>
      <div className="counter__label t-caption">{sections[active].label}</div>
    </aside>
  );
}
