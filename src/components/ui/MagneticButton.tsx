import {
  type ElementType,
  type ReactNode,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type Ref,
  createElement,
} from 'react';
import { useDeviceCapability } from '../../hooks/useDeviceCapability';
import './MagneticButton.css';

type Props = {
  children: ReactNode;
  as?: ElementType;
  href?: string;
  to?: string;
  className?: string;
  ariaLabel?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  style?: CSSProperties;
  /** Only meaningful when `as="button"` (or default) */
  type?: 'submit' | 'button' | 'reset';
};

/**
 * Premium CTA button.
 * - On fine pointer: magnetic hover (cursor proximity pulls button).
 * - On coarse pointer: gentle press, no magnetic.
 * - Subtle light sweep on hover.
 */
export function MagneticButton({
  children,
  as,
  href,
  to,
  className = '',
  ariaLabel,
  variant = 'primary',
  style,
  type,
}: Props) {
  const Tag: ElementType = as ?? (href || to ? 'a' : 'button');
  const ref = useRef<HTMLElement | null>(null);
  const [transform, setTransform] = useState('');
  const cap = useDeviceCapability();

  useEffect(() => {
    if (cap.isCoarsePointer) return;
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      const radius = Math.max(rect.width, rect.height) * 0.9;
      if (dist < radius) {
        const power = (1 - dist / radius) * 0.35;
        setTransform(`translate3d(${(dx * power) / 4}px, ${(dy * power) / 4}px, 0)`);
      } else {
        setTransform('translate3d(0,0,0)');
      }
    };
    const onLeave = () => setTransform('translate3d(0,0,0)');
    window.addEventListener('mousemove', onMove, { passive: true });
    el.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [cap.isCoarsePointer]);

  // Use createElement instead of JSX with a dynamic Tag — avoids
  // the `Type ... is not assignable to IntrinsicAttributes` union-explosion.
  return createElement(
    Tag,
    {
      ref: ref as Ref<HTMLElement>,
      className: `mbtn mbtn--${variant} ${className}`,
      'aria-label': ariaLabel,
      style: { ...style, transform },
      ...(href ? { href } : {}),
      ...(to ? { to } : {}),
      ...(type ? { type } : {}),
    },
    <span className="mbtn__label">{children}</span>,
    <span className="mbtn__sweep" aria-hidden />,
    <span className="mbtn__arrow" aria-hidden>
      →
    </span>,
  );
}