import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MagneticButton } from '../ui/MagneticButton';
import { brand, nav, dealers } from '../../lib/content';
import './Footer.css';

gsap.registerPlugin(ScrollTrigger);

export function Footer() {
  const ref = useRef<HTMLElement | null>(null);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.footer__col',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            once: true,
          },
        },
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  const filtered = query
    ? dealers.filter(
        (d) =>
          d.city.toLowerCase().includes(query.toLowerCase()) ||
          d.region.toLowerCase().includes(query.toLowerCase()),
      )
    : dealers;

  const onSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <footer id="footer" ref={ref} className="footer" aria-label="Dealers and contact">
      <div className="footer__inner container">
        <div className="footer__top">
          <div className="footer__col footer__col--brand">
            <a className="footer__brand" href="#top" aria-label={brand.name}>
              <span className="footer__brand-mark" aria-hidden />
              <span className="footer__brand-text">{brand.name}</span>
            </a>
            <p className="footer__manifesto t-italic-serif">
              “{brand.philosophy}”
            </p>
            <p className="footer__origin t-caption">
              {brand.origin} · Est. {brand.established}
            </p>
          </div>

          <div className="footer__col footer__col--nav">
            <h4 className="footer__heading t-caption">Discover</h4>
            <ul className="footer__nav">
              {nav.map((n) => (
                <li key={n.href}>
                  <a className="footer__link" href={n.href}>
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col footer__col--dealers" id="dealers">
            <h4 className="footer__heading t-caption">Find a dealer</h4>
            <div className="footer__dealer-search">
              <input
                type="search"
                className="footer__input"
                placeholder="City or country"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search dealers"
              />
            </div>
            <ul className="footer__dealers">
              {filtered.map((d) => (
                <li key={d.city} className="footer__dealer">
                  <span className="footer__dealer-city t-body">{d.city}</span>
                  <span className="footer__dealer-region t-caption">{d.region}</span>
                  <span className="footer__dealer-dist t-mono">{d.distance}</span>
                </li>
              ))}
              {filtered.length === 0 && (
                <li className="footer__dealer-empty t-body-s">No dealers match your search.</li>
              )}
            </ul>
          </div>

          <div className="footer__col footer__col--contact" id="contact">
            <h4 className="footer__heading t-caption">Stay in the loop</h4>
            <p className="footer__contact-blurb t-body-s">
              Two letters a year. New models, journal highlights, the rare event.
            </p>
            <form className="footer__form" onSubmit={onSubscribe}>
              <input
                type="email"
                className="footer__input"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email"
              />
              <MagneticButton as="button" type="submit" variant="primary" className="footer__submit">
                {submitted ? 'Subscribed' : 'Subscribe'}
              </MagneticButton>
            </form>
          </div>
        </div>

        <hr className="hairline" />

        <div className="footer__bottom">
          <div className="footer__legal t-caption">
            © 2026 {brand.name} S.r.l. · All rights reserved.
          </div>
          <div className="footer__legal-links">
            <a className="footer__legal-link" href="#privacy">Privacy</a>
            <a className="footer__legal-link" href="#terms">Terms</a>
            <a className="footer__legal-link" href="#cookies">Cookies</a>
          </div>
          <div className="footer__locale t-mono">EN · EUR · IT</div>
        </div>
      </div>
    </footer>
  );
}
