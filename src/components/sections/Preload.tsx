import { useEffect, useState } from 'react';
import './Preload.css';

type Props = {
  /** ms before fade starts (per Creative Direction spec: 0.5s) */
  duration?: number;
  onDone?: () => void;
};

export function Preload({ duration = 500, onDone }: Props) {
  const [phase, setPhase] = useState<'show' | 'fade' | 'done'>('show');

  useEffect(() => {
    const t1 = window.setTimeout(() => setPhase('fade'), duration);
    const t2 = window.setTimeout(() => {
      setPhase('done');
      onDone?.();
    }, duration + 600);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [duration, onDone]);

  if (phase === 'done') return null;

  return (
    <div className={`preload preload--${phase}`} aria-hidden>
      <div className="preload__center">
        <div className="preload__line" />
        <div className="preload__brand t-eyebrow">AETHON · BOLOGNA</div>
        <div className="preload__line" />
      </div>
    </div>
  );
}
