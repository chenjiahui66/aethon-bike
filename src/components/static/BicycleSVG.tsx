import './BicycleSVG.css';

export type BikeView = 'profile' | 'three-quarter' | 'parts' | 'exploded';
export type BikeHighlight =
  | 'frame'
  | 'fork'
  | 'wheels'
  | 'cockpit'
  | 'saddle'
  | 'drivetrain'
  | null;

type Props = {
  view?: BikeView;
  highlight?: BikeHighlight;
  /** 0..1 — drives per-part offsets for the exploded view */
  exploded?: number;
  /** Show technical labels (frame: T1100, etc.) */
  showLabels?: boolean;
  /** 0..1 — overall scene brightness (defaults to 0.85 for studio look) */
  intensity?: number;
  /** Optional className passthrough */
  className?: string;
  /** ARIA label for screen readers */
  ariaLabel?: string;
};

/**
 * A premium, fully-static SVG road bike.
 * - 2D side-profile by default
 * - Replaces Three.js scene with a hand-crafted illustration
 * - Supports exploded offsets + part highlighting for the Anatomy section
 * - All assets are inline SVG (no external image)
 */
export function BicycleSVG({
  view = 'profile',
  highlight = null,
  exploded = 0,
  showLabels = false,
  intensity = 0.95,
  className = '',
  ariaLabel = 'AETHON ONE road bike, side view',
}: Props) {
  // Per-part transforms driven by `exploded` and `view`
  // (we use direct CSS transforms for performant scroll-driven animation)
  const explodeFront = exploded * 220;
  const explodeRear = exploded * 220;
  const explodeUp = exploded * 180;
  const explodeCockpit = exploded * 130;
  const explodeSaddle = exploded * 200;
  const explodeDrivetrain = exploded * 80;

  return (
    <div
      className={`bike-svg ${className}`}
      role="img"
      aria-label={ariaLabel}
      style={{ ['--bike-intensity' as string]: intensity }}
    >
      <svg
        viewBox="0 0 1000 600"
        xmlns="http://www.w3.org/2000/svg"
        className={`bike-svg__svg bike-svg--${view} ${highlight ? `is-hl-${highlight}` : ''}`}
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Carbon fiber base — subtle anisotropic gradient */}
          <linearGradient id="carbon-base" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1c1c1f" />
            <stop offset="48%" stopColor="#0a0a0b" />
            <stop offset="100%" stopColor="#020203" />
          </linearGradient>
          <linearGradient id="carbon-edge" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3a3a3d" stopOpacity="0.0" />
            <stop offset="50%" stopColor="#5a5a5d" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#3a3a3d" stopOpacity="0.0" />
          </linearGradient>
          {/* Brushed metal */}
          <linearGradient id="metal" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#b4b4b8" />
            <stop offset="40%" stopColor="#8a8a8e" />
            <stop offset="100%" stopColor="#5a5a5d" />
          </linearGradient>
          <linearGradient id="metal-dark" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#5a5a5d" />
            <stop offset="100%" stopColor="#2a2a2d" />
          </linearGradient>
          {/* Tire rubber */}
          <radialGradient id="tire" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#1a1a1c" />
            <stop offset="100%" stopColor="#020203" />
          </radialGradient>
          {/* Rim — deep carbon, brushed */}
          <linearGradient id="rim" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2a2a2d" />
            <stop offset="50%" stopColor="#0a0a0b" />
            <stop offset="100%" stopColor="#2a2a2d" />
          </linearGradient>
          {/* Saddle leather */}
          <linearGradient id="saddle" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1c1c1c" />
            <stop offset="100%" stopColor="#020203" />
          </linearGradient>
          {/* Brass / accent */}
          <linearGradient id="brass" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#d4a371" />
            <stop offset="100%" stopColor="#8a6a3a" />
          </linearGradient>
          {/* Studio backdrop */}
          <radialGradient id="studio" cx="50%" cy="55%" r="65%">
            <stop offset="0%" stopColor="#26262a" />
            <stop offset="55%" stopColor="#101013" />
            <stop offset="100%" stopColor="#020203" />
          </radialGradient>
          {/* Ground shadow */}
          <radialGradient id="ground-shadow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#000" stopOpacity="0.85" />
            <stop offset="60%" stopColor="#000" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#000" stopOpacity="0" />
          </radialGradient>
          {/* Carbon weave pattern */}
          <pattern
            id="weave"
            x="0"
            y="0"
            width="6"
            height="6"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <rect width="6" height="6" fill="url(#carbon-base)" />
            <line x1="0" y1="0" x2="0" y2="6" stroke="#1f1f22" strokeWidth="0.6" opacity="0.6" />
            <line x1="3" y1="0" x2="3" y2="6" stroke="#26262a" strokeWidth="0.4" opacity="0.5" />
          </pattern>
          {/* Soft shadow filter */}
          <filter id="soft-shadow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
            <feOffset dx="0" dy="2" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.55" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {/* Subtle inner highlight for tube edge */}
          <filter id="edge-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="0.7" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Backdrop */}
        <rect x="0" y="0" width="1000" height="600" fill="url(#studio)" />

        {/* Subtle horizon line — light source from above-right */}
        <ellipse
          cx="500"
          cy="500"
          rx="320"
          ry="14"
          fill="url(#ground-shadow)"
          className="bike-svg__ground"
        />

        {/* ─────────── REAR WHEEL ─────────── */}
        <g
          className="bike-svg__part bike-svg__part--wheels-rear"
          style={{ transform: `translate(${explodeRear}px, 0)` }}
        >
          <Wheel cx={700} cy={460} r={130} side="rear" />
        </g>

        {/* ─────────── FRONT WHEEL ─────────── */}
        <g
          className="bike-svg__part bike-svg__part--wheels-front"
          style={{ transform: `translate(${-explodeFront}px, 0)` }}
        >
          <Wheel cx={300} cy={460} r={130} side="front" />
        </g>

        {/* ─────────── FRAME ─────────── */}
        <g
          className="bike-svg__part bike-svg__part--frame"
          style={{ transform: `translate(0, ${-explodeUp * 0.15}px)` }}
        >
          {/* Top tube — head tube to seat tube */}
          <path
            d="M 300 200 L 600 200 L 620 230 L 320 230 Z"
            fill="url(#weave)"
            stroke="url(#carbon-edge)"
            strokeWidth="1"
            filter="url(#soft-shadow)"
          />
          {/* Down tube — head tube to bottom bracket */}
          <path
            d="M 300 200 L 540 460 L 580 460 L 320 200 Z"
            fill="url(#weave)"
            stroke="url(#carbon-edge)"
            strokeWidth="1"
            filter="url(#soft-shadow)"
          />
          {/* Seat tube — bottom bracket to seat cluster */}
          <path
            d="M 540 460 L 600 200 L 640 200 L 580 460 Z"
            fill="url(#weave)"
            stroke="url(#carbon-edge)"
            strokeWidth="1"
            filter="url(#soft-shadow)"
          />
          {/* Head tube — short, near handlebar */}
          <ellipse
            cx="305"
            cy="215"
            rx="22"
            ry="42"
            fill="url(#carbon-base)"
            stroke="url(#carbon-edge)"
            strokeWidth="1"
            transform="rotate(-15 305 215)"
            filter="url(#soft-shadow)"
          />
          {/* Chain stays — bottom bracket to rear hub */}
          <path
            d="M 540 460 L 700 460 L 700 470 L 540 470 Z"
            fill="url(#carbon-base)"
            stroke="#3a3a3d"
            strokeWidth="0.5"
            opacity="0.9"
          />
          {/* Seat stays — seat cluster to rear hub */}
          <path
            d="M 615 205 L 700 460 L 700 470 L 605 210 Z"
            fill="url(#carbon-base)"
            stroke="#3a3a3d"
            strokeWidth="0.5"
            opacity="0.9"
          />
          {/* Brand accent line on down tube */}
          <line
            x1="335"
            y1="240"
            x2="555"
            y2="450"
            stroke="#d32b1e"
            strokeWidth="1.6"
            opacity="0.85"
            filter="url(#edge-glow)"
          />
          {/* AETHON wordmark on down tube */}
          <text
            x="400"
            y="370"
            fill="#d4a371"
            fontFamily="JetBrains Mono, monospace"
            fontSize="9"
            letterSpacing="3"
            transform="rotate(35 400 370)"
            opacity="0.7"
          >
            AETHON
          </text>
        </g>

        {/* ─────────── FORK (moves with front wheel direction in real life; here stays) ─────────── */}
        <g
          className="bike-svg__part bike-svg__part--fork"
          style={{ transform: `translate(0, ${-explodeUp * 0.1}px)` }}
        >
          <path
            d="M 290 220 L 295 240 L 305 460 L 295 460 L 285 240 L 280 220 Z"
            fill="url(#carbon-base)"
            stroke="url(#carbon-edge)"
            strokeWidth="0.8"
          />
          <path
            d="M 320 220 L 315 240 L 320 460 L 330 460 L 325 240 L 330 220 Z"
            fill="url(#carbon-base)"
            stroke="url(#carbon-edge)"
            strokeWidth="0.8"
            opacity="0.85"
          />
        </g>

        {/* ─────────── COCKPIT (handlebar) ─────────── */}
        <g
          className="bike-svg__part bike-svg__part--cockpit"
          style={{ transform: `translate(0, ${-explodeCockpit}px)` }}
        >
          {/* Steerer + stem */}
          <rect
            x="285"
            y="135"
            width="35"
            height="90"
            rx="4"
            fill="url(#carbon-base)"
            stroke="url(#carbon-edge)"
            strokeWidth="0.8"
          />
          {/* Stem */}
          <rect
            x="270"
            y="128"
            width="80"
            height="14"
            rx="3"
            fill="url(#carbon-base)"
            stroke="url(#carbon-edge)"
            strokeWidth="0.8"
          />
          {/* Drop bar — approximation of full drop curve */}
          <path
            d="M 270 135 L 200 135 Q 180 135 180 155 L 180 195 Q 180 215 200 215 L 220 215 Q 240 215 240 195 L 240 175 Q 240 155 260 155 L 350 155"
            fill="none"
            stroke="url(#metal-dark)"
            strokeWidth="11"
            strokeLinecap="round"
          />
          <path
            d="M 270 135 L 200 135 Q 180 135 180 155 L 180 195 Q 180 215 200 215 L 220 215 Q 240 215 240 195 L 240 175 Q 240 155 260 155 L 350 155"
            fill="none"
            stroke="#3a3a3d"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.8"
          />
          {/* Bar tape highlight */}
          <path
            d="M 200 215 L 220 215"
            stroke="#b8915a"
            strokeWidth="2"
            opacity="0.8"
          />
        </g>

        {/* ─────────── SADDLE + SEATPOST ─────────── */}
        <g
          className="bike-svg__part bike-svg__part--saddle"
          style={{ transform: `translate(0, ${-explodeSaddle}px)` }}
        >
          {/* Seatpost */}
          <rect
            x="608"
            y="80"
            width="14"
            height="140"
            fill="url(#carbon-base)"
            stroke="url(#carbon-edge)"
            strokeWidth="0.6"
          />
          {/* Saddle */}
          <path
            d="M 540 75 Q 555 65 580 67 Q 615 70 640 75 Q 660 78 660 85 Q 660 92 640 92 Q 615 90 580 88 Q 555 87 540 85 Q 530 82 540 75 Z"
            fill="url(#saddle)"
            stroke="#0a0a0b"
            strokeWidth="0.8"
            filter="url(#soft-shadow)"
          />
          {/* Saddle highlight */}
          <ellipse
            cx="595"
            cy="78"
            rx="35"
            ry="3"
            fill="#3a3a3d"
            opacity="0.5"
          />
        </g>

        {/* ─────────── DRIVETRAIN (crankset + chainring) ─────────── */}
        <g
          className="bike-svg__part bike-svg__part--drivetrain"
          style={{ transform: `translate(${explodeDrivetrain}px, 0)` }}
        >
          {/* Chainring */}
          <circle cx="560" cy="460" r="42" fill="url(#metal)" stroke="#3a3a3d" strokeWidth="1" />
          <circle cx="560" cy="460" r="40" fill="none" stroke="#1a1a1c" strokeWidth="0.5" />
          <circle cx="560" cy="460" r="34" fill="none" stroke="#1a1a1c" strokeWidth="0.5" />
          <circle cx="560" cy="460" r="14" fill="url(#metal-dark)" />
          {/* Chainring cutouts */}
          {Array.from({ length: 5 }).map((_, i) => {
            const a = (i / 5) * Math.PI * 2 - Math.PI / 2;
            const x = 560 + Math.cos(a) * 26;
            const y = 460 + Math.sin(a) * 26;
            return (
              <rect
                key={i}
                x={x - 4}
                y={y - 4}
                width="8"
                height="8"
                fill="#020203"
                transform={`rotate(${(a * 180) / Math.PI} ${x} ${y})`}
              />
            );
          })}
          {/* Crank arm 1 (forward, visible) */}
          <rect
            x="555"
            y="460"
            width="6"
            height="90"
            fill="url(#metal)"
            stroke="#3a3a3d"
            strokeWidth="0.4"
            transform="rotate(20 558 460)"
          />
          {/* Crank arm 2 (rear, partially hidden) */}
          <rect
            x="555"
            y="370"
            width="6"
            height="90"
            fill="url(#metal-dark)"
            stroke="#1a1a1c"
            strokeWidth="0.4"
            transform="rotate(20 558 370)"
          />
          {/* Pedal */}
          <rect
            x="620"
            y="540"
            width="30"
            height="8"
            rx="1"
            fill="#0a0a0b"
            stroke="#5a5a5d"
            strokeWidth="0.5"
          />
        </g>

        {/* ─────────── BRAKE DISCS (front + rear) ─────────── */}
        <g className="bike-svg__part bike-svg__part--brakes">
          <BrakeDisc cx={300} cy={460} />
          <BrakeDisc cx={700} cy={460} />
        </g>

        {/* ─────────── LABELS (only when showLabels) ─────────── */}
        {showLabels && (
          <g className="bike-svg__labels">
            <PartLabel x={420} y={295} text="T1100 CARBON" subtitle="780g" />
            <PartLabel x={700} y={310} text="DURA-ACE C50" subtitle="1,480g · 50mm" />
            <PartLabel x={250} y={120} text="COCKPIT" subtitle="380g · INTEGRATED" />
            <PartLabel x={680} y={70} text="SADDLE" subtitle="138g · CARBON RAIL" />
            <PartLabel x={620} y={520} text="DRIVETRAIN" subtitle="12-SPEED · 2x" />
          </g>
        )}
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
 * Sub-components
 * ───────────────────────────────────────────────────────────── */

function Wheel({ cx, cy, r, side }: { cx: number; cy: number; r: number; side: 'front' | 'rear' }) {
  const spokes = 18;
  return (
    <g>
      {/* Tire */}
      <circle cx={cx} cy={cy} r={r} fill="url(#tire)" />
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill="none"
        stroke="#1a1a1c"
        strokeWidth="1"
        opacity="0.6"
      />
      {/* Rim — 50mm deep carbon */}
      <circle cx={cx} cy={cy} r={r - 10} fill="none" stroke="url(#rim)" strokeWidth="9" />
      <circle cx={cx} cy={cy} r={r - 18} fill="none" stroke="#0a0a0b" strokeWidth="2" />
      {/* Spokes */}
      {Array.from({ length: spokes }).map((_, i) => {
        const a = (i / spokes) * Math.PI * 2;
        const x1 = cx + Math.cos(a) * 18;
        const y1 = cy + Math.sin(a) * 18;
        const x2 = cx + Math.cos(a) * (r - 19);
        const y2 = cy + Math.sin(a) * (r - 19);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#9a9a9e"
            strokeWidth="0.7"
            opacity="0.7"
          />
        );
      })}
      {/* Hub */}
      <circle cx={cx} cy={cy} r="14" fill="url(#metal-dark)" />
      <circle cx={cx} cy={cy} r="11" fill="url(#metal)" />
      <circle cx={cx} cy={cy} r="3" fill="#0a0a0b" />
      {/* Side-specific decals */}
      {side === 'rear' && (
        <text
          x={cx}
          y={cy + r + 18}
          textAnchor="middle"
          fill="#8a8a8e"
          fontFamily="JetBrains Mono, monospace"
          fontSize="7"
          letterSpacing="2"
          opacity="0.6"
        >
          C50 · TUBELESS
        </text>
      )}
    </g>
  );
}

function BrakeDisc({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g>
      <circle
        cx={cx}
        cy={cy}
        r="32"
        fill="#2a2a2d"
        stroke="#3a3a3d"
        strokeWidth="0.6"
        opacity="0.85"
      />
      {Array.from({ length: 6 }).map((_, i) => {
        const a = (i / 6) * Math.PI * 2;
        const x = cx + Math.cos(a) * 22;
        const y = cy + Math.sin(a) * 22;
        return (
          <circle key={i} cx={x} cy={y} r="2.5" fill="#0a0a0b" />
        );
      })}
      <circle cx={cx} cy={cy} r="6" fill="url(#metal)" />
    </g>
  );
}

function PartLabel({
  x,
  y,
  text,
  subtitle,
}: {
  x: number;
  y: number;
  text: string;
  subtitle: string;
}) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <line x1="0" y1="0" x2="0" y2="-30" stroke="#b8915a" strokeWidth="0.5" opacity="0.6" />
      <text
        x="6"
        y="-32"
        fill="#b8915a"
        fontFamily="JetBrains Mono, monospace"
        fontSize="9"
        letterSpacing="2"
      >
        {text}
      </text>
      <text
        x="6"
        y="-22"
        fill="#8a8a8e"
        fontFamily="JetBrains Mono, monospace"
        fontSize="7"
        letterSpacing="1.5"
      >
        {subtitle}
      </text>
    </g>
  );
}
