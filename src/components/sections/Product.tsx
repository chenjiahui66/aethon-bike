import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BicycleSVG } from '../static/BicycleSVG';
import { MagneticButton } from '../ui/MagneticButton';
import { product } from '../../lib/content';
import './Product.css';

gsap.registerPlugin(ScrollTrigger);

export function Product() {
  const ref = useRef<HTMLElement | null>(null);
  const bikeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    const bike = bikeRef.current;
    if (!el || !bike) return;
    const ctx = gsap.context(() => {
      // Static SVG gets a subtle rotateY feel via 2D rotate (cheap, looks 3D enough)
      gsap.to(bike, {
        rotation: 6,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.6,
        },
      });
      gsap.fromTo(
        bike,
        { scale: 0.92 },
        {
          scale: 1.04,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.6,
          },
        },
      );
      gsap.fromTo(
        '.product__spec',
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.product__specs',
            start: 'top 80%',
            once: true,
          },
        },
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="product" ref={ref} className="product" aria-label="AETHON ONE">
      <div className="product__canvas">
        <div ref={bikeRef} className="product__bike">
          <BicycleSVG
            view="profile"
            intensity={0.95}
            ariaLabel="AETHON ONE — product detail"
          />
        </div>
      </div>

      <div className="product__overlay container">
        <div className="product__head">
          <div className="product__eyebrow t-eyebrow">AETHON ONE · 2026</div>
          <h2 className="product__title t-display-l">Aero. Endurance. Uncompromised.</h2>
        </div>

        <div className="product__specs">
          <Spec label="Frame" value={product.frame} />
          <Spec label="Weight" value={product.weight} />
          <Spec label="Drivetrain" value="Shimano Dura-Ace Di2 · 12sp" />
          <Spec label="Wheels" value="Dura-Ace C50 · 50mm" />
          <Spec label="Brakes" value="Hydraulic Disc · 160mm" />
          <Spec label="Geometry" value="Endurance · 73° STA" />
        </div>

        <div className="product__foot">
          <div className="product__price">
            <div className="product__price-label t-caption">From</div>
            <div className="product__price-value t-display-m">{product.price}</div>
          </div>
          <div className="product__cta">
            <MagneticButton href="#configurator" variant="primary">
              {product.cta.primary}
            </MagneticButton>
            <MagneticButton href="#test-ride" variant="secondary">
              {product.cta.secondary}
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="product__spec">
      <div className="product__spec-label t-caption">{label}</div>
      <div className="product__spec-value t-mono">{value}</div>
    </div>
  );
}
