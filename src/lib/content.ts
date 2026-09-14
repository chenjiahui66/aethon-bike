/**
 * Brand content — Direction A · Luxury Performance
 * Single source of truth. Replace AETHON with the real brand name as needed.
 */

export const brand = {
  name: 'AETHON',
  tagline: 'Engineered for the Last 5 Seconds.',
  philosophy: 'Speed, distilled.',
  established: 1987,
  origin: 'Bologna, Italy',
} as const;

export const nav = [
  { label: 'Brand', href: '#origin' },
  { label: 'Bikes', href: '#product' },
  { label: 'Technology', href: '#anatomy' },
  { label: 'Journal', href: '#journals' },
  { label: 'Dealers', href: '#dealers' },
  { label: 'Contact', href: '#contact' },
] as const;

export const manifesto = [
  { id: '01', line: 'Speed is a discipline.' },
  { id: '02', line: "We don't chase it. We engineer it." },
  { id: '03', line: 'Every gram. Every angle. Every second.' },
] as const;

export const product = {
  name: 'AETHON ONE',
  series: 'R-Series · 2026',
  tagline: 'Aero. Endurance. Uncompromised.',
  weight: '6.8 kg',
  frame: 'T1100 Carbon · Monocoque',
  price: '€ 18,400',
  cta: { primary: 'Configure', secondary: 'Book a test ride' },
} as const;

export const anatomyParts = [
  { id: 'frame', label: 'Frame', spec: 'T1100 CARBON · 780g · MONOCOQUE', offset: [0, 0, 0] },
  { id: 'fork', label: 'Fork', spec: 'AERO SLICE · 320g', offset: [0.4, 0, 0] },
  { id: 'wheels', label: 'Wheelset', spec: 'DURA-ACE C50 · 1,480g · 50mm', offset: [-0.3, 0.05, 0.4] },
  { id: 'handlebar', label: 'Cockpit', spec: 'INTEGRATED CARBON · 380g', offset: [0.5, 0.1, -0.2] },
  { id: 'seat', label: 'Saddle', spec: 'CARBON RAIL · 138g', offset: [-0.3, 0.1, -0.2] },
  { id: 'drivetrain', label: 'Drivetrain', spec: '12-SPEED · 2x ELECTRONIC', offset: [0, -0.1, 0] },
] as const;

export const techData = [
  {
    value: 6.8,
    unit: 'kg',
    label: 'Frame + paint',
    detail: 'Industry-leading mass for an aero endurance frame.',
  },
  {
    value: 49,
    unit: 'N/m/deg',
    label: 'Stiffness',
    detail: 'Bottom bracket stiffness-to-weight ratio, third-party tested.',
  },
  {
    value: 0.27,
    unit: 'CdA',
    label: 'Drag coefficient',
    detail: 'Measured at 45 km/h in the Cologne wind tunnel, yaw 0–15°.',
  },
] as const;

export const journals = [
  {
    eyebrow: 'Engineering',
    title: 'Inside the wind tunnel.',
    excerpt:
      'Three months, 412 iterations, one frame that finally refused to compromise. A long-form look at how AETHON ONE reached 0.27 CdA.',
    slug: 'wind-tunnel',
  },
  {
    eyebrow: 'Field',
    title: '200 hours in the saddle.',
    excerpt:
      'Before a single frame leaves Bologna, our prototypes ride. Theodolite-tested across the Apennines, from sea level to the Cisa pass.',
    slug: '200-hours',
  },
  {
    eyebrow: 'Decision',
    title: 'Why we said no to 1x drivetrain.',
    excerpt:
      'A short, opinionated essay on why AETHON ONE ships 2x12 — and what that means for the way you ride on the wrong side of the wind.',
    slug: 'why-2x12',
  },
] as const;

export const dealers = [
  { city: 'Milan', region: 'Italy', distance: '0.4 km' },
  { city: 'Monaco', region: 'Germany', distance: '512 km' },
  { city: 'Zurich', region: 'Switzerland', distance: '348 km' },
  { city: 'Paris', region: 'France', distance: '852 km' },
  { city: 'London', region: 'United Kingdom', distance: '1,184 km' },
  { city: 'Tokyo', region: 'Japan', distance: '9,754 km' },
] as const;
