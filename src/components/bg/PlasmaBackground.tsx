import { useState, useEffect } from 'react';
import ClosingPlasma from './ClosingPlasma';
import StaticGradientFallback from './StaticGradientFallback';

/**
 * Determine fallback mode synchronously on the client.
 * Called once as a lazy useState initializer so the correct
 * background is committed on the very first render, preventing
 * the static fallback from being locked in on Vercel deployments.
 */
function getInitialFallback(): boolean {
  if (typeof window === 'undefined') return true; // SSR safety
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  return isMobile || prefersReducedMotion;
}

/**
 * Managed background component that chooses between a high-performance
 * WebGL plasma animation and a static gradient fallback.
 *
 * The fallback is triggered for mobile devices (max-width: 768px) or users
 * who have explicitly requested reduced motion via system settings to
 * ensure accessibility and battery efficiency.
 */
export function PlasmaBackground() {
  // Lazy initializer reads media queries synchronously at mount time
  // so the correct mode is determined before the first paint.
  const [useFallback, setUseFallback] = useState<boolean>(getInitialFallback);

  useEffect(() => {
    const checkMedia = () => {
      const isMobile = window.matchMedia('(max-width: 768px)').matches;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      setUseFallback(isMobile || prefersReducedMotion);
    };

    const mobileQuery = window.matchMedia('(max-width: 768px)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    // Use modern addEventListener if available; otherwise fallback to addListener
    // for compatibility with older browser environments.
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
      <ClosingPlasma className="w-full h-full" />
    </div>
  );
}

export default PlasmaBackground;
