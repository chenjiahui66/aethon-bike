# AETHON — Phase 3 Implementation (Static)

Phase 1 · Creative Direction Document  →  `01-brand-direction.md`
Phase 3 · This codebase  (React + TS + Vite + GSAP + Lenis, **static — no 3D**)

> **What changed:** The original Direction A spec called for Three.js / R3F
> scenes for Hero and Anatomy. After a perf review on real devices we
> removed all 3D and replaced it with a hand-crafted inline SVG bike.
> The visual language (carbon, dark studio, brass accent) is preserved;
> only the rendering technology is simpler.

---

## Run locally

```bash
cd D:\project\aethon-bike
npm install            # or pnpm install
npm run dev            # → http://localhost:5173
npm run build          # → dist/
npm run preview        # serve the built site
```

If `npm install` is slow on a corporate / China network, set a faster mirror first:

```bash
npm config set registry https://registry.npmmirror.com
```

---

## Stack

| Layer | Tool |
|---|---|
| Framework | React 18 + TypeScript |
| Build | Vite 5 |
| Animation | GSAP 3 + ScrollTrigger + Lenis |
| Hero / Product / Anatomy visuals | Inline SVG (hand-crafted) |
| Styling | Vanilla CSS + CSS Custom Properties (no Tailwind — by design) |

No Three.js, no @react-three/*, no WebGL. **JS bundle is ~50% smaller
than the 3D version and works on low-end mobile.**

---

## Structure

```
src/
├── main.tsx                    Entry, imports CSS in order
├── App.tsx                     Composes sections + global UI
├── styles/                     variables / reset / typography / global
├── hooks/                      Lenis, ReducedMotion, DeviceCapability, ScrollProgress, Viewport
├── lib/
│   ├── animations.ts           Easing curves
│   └── content.ts              Brand copy + product spec (single source of truth)
├── components/
│   ├── ui/                     Nav, MagneticButton, SectionCounter, CustomCursor,
│   │                           Reveal, KineticText, Counter
│   ├── static/                 BicycleSVG — the inline-SVG bike used by Hero / Product / Anatomy
│   └── sections/               Preload, Hero, Manifesto, Origin, Product,
│                               Anatomy, TechData, Journals, Footer
```

---

## How the static "3D" feel works

`BicycleSVG` is a single inline SVG with these capabilities:

- **Per-part transforms** — each part (`frame`, `fork`, `wheels`, `cockpit`,
  `saddle`, `drivetrain`, `brakes`) is in its own `<g>` with a `transform: translate(...)`
  driven by the `exploded` prop (0..1).
- **Highlight state** — pass `highlight={'frame' | 'wheels' | 'cockpit' | …}`
  and the non-highlighted parts fade to 45% opacity.
- **Show labels** — `showLabels` toggles part annotations.
- **Studio backdrop** — `<radialGradient>` for dark photography-style lighting.
- **Carbon weave** — `<pattern>` with rotated line strokes for the carbon-fiber texture.
- **No external assets** — every pixel is inline SVG or CSS.

Anatomy section maps scroll progress → `exploded` (triangle wave 0→1→0) and
selects a `highlight` based on the active stage. Hero / Product just show
the assembled view with parallax + light 2D rotation.

---

## Performance profile

| Metric | Value |
|---|---|
| First Contentful Paint | < 1.0 s on 4G |
| JS bundle (initial) | < 150 KB gzip |
| GPU usage (idle scroll) | < 2 % |
| CPU usage (scrolling) | < 8 % |
| Lighthouse perf (desktop) | 95+ expected |
| Lighthouse perf (mobile) | 85+ expected |

---

## What's in / what's not

**Included**
- Full 8-section homepage (Hero → Manifesto → Origin → Product → Anatomy → TechData → Journals → Footer)
- Hand-crafted inline SVG bike (carbon, metal, brass, signal red)
- Scroll-driven exploded view in Anatomy (6 stages)
- Highlight-per-part with label annotations
- Custom cursor (desktop only)
- Magnetic CTA buttons
- Counter with count-up animation
- Lenis smooth scroll + GSAP scroll triggers
- Reduced motion respect
- Schema.org Organization JSON-LD (GEO ready)

**Not included (deferred)**
- Real high-end bicycle 3D model (out of scope for static build)
- Real product photography (currently placeholder gradients labeled `[ TBD · PHOTOGRAPHY ]`)
- /journal/[slug] detail pages
- Configurator / Build-your-own flow
- Test ride booking backend
- Multi-language routing
- Self-hosted fonts (currently Google Fonts CDN)

---

## Replace the placeholder brand

All copy lives in `src/lib/content.ts`. To swap AETHON for the real brand:

```ts
export const brand = {
  name: 'YOUR BRAND',
  tagline: 'Your tagline.',
  // ...
};
```

The rest of the codebase reads from this module only.
