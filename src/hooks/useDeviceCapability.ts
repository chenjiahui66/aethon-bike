import { useEffect, useState } from 'react';

export type DeviceTier = 'low' | 'mid' | 'high';

interface DeviceCapability {
  tier: DeviceTier;
  isMobile: boolean;
  isCoarsePointer: boolean;
  webgl: boolean;
  reducedMotion: boolean;
  dpr: number;
}

function detect(): DeviceCapability {
  if (typeof window === 'undefined') {
    return {
      tier: 'high',
      isMobile: false,
      isCoarsePointer: false,
      webgl: true,
      reducedMotion: false,
      dpr: 1,
    };
  }

  const isMobile = /Android|iPhone|iPad|iPod|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // WebGL check
  let webgl = false;
  try {
    const canvas = document.createElement('canvas');
    const ctx =
      canvas.getContext('webgl2') ||
      canvas.getContext('webgl') ||
      canvas.getContext('experimental-webgl');
    webgl = !!ctx;
  } catch {
    webgl = false;
  }

  // Hardware concurrency + memory heuristic
  const cores = navigator.hardwareConcurrency ?? 4;
  const memory = (navigator as unknown as { deviceMemory?: number }).deviceMemory ?? 4;
  let tier: DeviceTier = 'high';
  if (isMobile || isCoarsePointer) {
    if (cores <= 4 || memory <= 2) tier = 'low';
    else tier = 'mid';
  } else {
    if (cores <= 2) tier = 'mid';
  }

  // DPR cap for perf
  const dpr = Math.min(window.devicePixelRatio ?? 1, tier === 'high' ? 2 : 1.5);

  return { tier, isMobile, isCoarsePointer, webgl, reducedMotion, dpr };
}

export function useDeviceCapability(): DeviceCapability {
  const [cap, setCap] = useState<DeviceCapability>(detect);

  useEffect(() => {
    // Re-detect on orientation/resize (mobile can change behavior)
    const handler = () => setCap(detect());
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  return cap;
}
