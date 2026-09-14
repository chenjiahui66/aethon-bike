/**
 * Shared easing curves for GSAP / CSS / WebGL.
 * Direction A — Luxury Performance: slow, mechanical, cinematic.
 */
export const easing = {
  mechanical: 'cubic-bezier(0.65, 0, 0.35, 1)',
  cinematic: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  smooth: 'cubic-bezier(0.16, 1, 0.3, 1)',
  impact: 'cubic-bezier(0.87, 0, 0.13, 1)',
  linear: 'linear',
} as const;

/** GSAP-compatible numeric tuples */
export const gsapEase = {
  mechanical: [0.65, 0, 0.35, 1],
  cinematic: [0.25, 0.46, 0.45, 0.94],
  smooth: [0.16, 1, 0.3, 1],
  impact: [0.87, 0, 0.13, 1],
  linear: [0, 0, 1, 1],
} as const;

export const duration = {
  micro: 0.2,
  entry: 0.9,
  entrySlow: 1.2,
  cinematic: 1.4,
  scrub: 0.6,
} as const;
