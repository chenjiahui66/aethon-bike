import { useEffect, useState } from 'react';
import { nav, brand } from '../../lib/content';
import { MagneticButton } from './MagneticButton';
import './Nav.css';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState(() => formatTime(new Date()));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => setTime(formatTime(new Date())), 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`} role="banner">
      <div className="nav__inner">
        <a href="#top" className="nav__brand" aria-label={`${brand.name} — Home`}>
          <span className="nav__brand-mark" aria-hidden />
          <span className="nav__brand-text">{brand.name}</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a className="nav__link" href={item.href}>
                  <span className="nav__link-text">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav__meta">
          <span className="nav__time t-mono" aria-label={`Local time ${time}`}>
            {time} · BOLOGNA
          </span>
          <MagneticButton
            as="a"
            href="#contact"
            className="nav__cta"
            ariaLabel="Book a test ride"
          >
            Book a ride
          </MagneticButton>
        </div>
      </div>
    </header>
  );
}

function formatTime(d: Date): string {
  const h = String(d.getHours()).padStart(2, '0');
  const m = String(d.getMinutes()).padStart(2, '0');
  return `${h}:${m}`;
}
