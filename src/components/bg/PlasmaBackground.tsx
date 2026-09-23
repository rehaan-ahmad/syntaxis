import { useState, useEffect } from 'react';
import ClosingPlasma from './ClosingPlasma';
import StaticGradientFallback from './StaticGradientFallback';

function isWebGLSupported(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

/**
 * Determine fallback mode synchronously on the client.
 */
function getInitialFallback(): boolean {
  if (typeof window === 'undefined') return true; // SSR safety
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasNoWebGL = !isWebGLSupported();
  return isMobile || prefersReducedMotion || hasNoWebGL;
}

export function PlasmaBackground() {
  const [useFallback, setUseFallback] = useState<boolean>(getInitialFallback);

  useEffect(() => {
    const checkMedia = () => {
      const isMobile = window.matchMedia('(max-width: 768px)').matches;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const hasNoWebGL = !isWebGLSupported();
      setUseFallback(isMobile || prefersReducedMotion || hasNoWebGL);
    };

    const mobileQuery = window.matchMedia('(max-width: 768px)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (mobileQuery.addEventListener) {
      mobileQuery.addEventListener('change', checkMedia);
      motionQuery.addEventListener('change', checkMedia);
    } else {
      mobileQuery.addListener(checkMedia);
      motionQuery.addListener(checkMedia);
    }

    return () => {
      if (mobileQuery.removeEventListener) {
        mobileQuery.removeEventListener('change', checkMedia);
        motionQuery.removeEventListener('change', checkMedia);
      } else {
        mobileQuery.removeListener(checkMedia);
        motionQuery.removeListener(checkMedia);
      }
    };
  }, []);

  if (useFallback) {
    return <StaticGradientFallback />;
  }

  return (
    <div className="fixed inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
      <ClosingPlasma className="w-full h-full" onError={() => setUseFallback(true)} />
    </div>
  );
}

export default PlasmaBackground;
