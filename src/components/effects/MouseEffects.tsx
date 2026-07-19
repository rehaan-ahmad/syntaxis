import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface MouseEffectsProps {
  interactionMode?: "sniper" | string;
  color?: string;
  showLabel?: boolean;
  effectSize?: number;
  duration?: number;
  strokeWidth?: number;
}

interface ClickEventItem {
  id: number;
  x: number;
  y: number;
}

export function MouseEffects({
  interactionMode = "sniper",
  color = "#a67d45",
  showLabel = false,
  effectSize = 70,
  duration = 0.4,
  strokeWidth = 1.5,
}: MouseEffectsProps) {
  const [clicks, setClicks] = useState<ClickEventItem[]>([]);
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    // Disable click effects on touch screens / coarse pointers (Mobile check)
    const hasCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (hasCoarsePointer || prefersReducedMotion) {
      setIsEnabled(false);
      return;
    }
    
    setIsEnabled(true);

    const handleGlobalClick = (event: MouseEvent) => {
      const newClick: ClickEventItem = {
        id: Date.now() + Math.random(),
        x: event.clientX,
        y: event.clientY,
      };
      
      setClicks((prev) => [...prev, newClick]);
      
      // Clean up click item after animation completes
      setTimeout(() => {
        setClicks((prev) => prev.filter((item) => item.id !== newClick.id));
      }, duration * 1000 + 50);
    };

    window.addEventListener('click', handleGlobalClick);
    return () => {
      window.removeEventListener('click', handleGlobalClick);
    };
  }, [duration]);

  if (!isEnabled) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none select-none overflow-hidden z-[9999]">
      <AnimatePresence>
        {clicks.map((click) => (
          <motion.div
            key={click.id}
            initial={{ opacity: 1, scale: 0.2, rotate: 0 }}
            animate={{ opacity: 0, scale: 1, rotate: 45 }}
            exit={{ opacity: 0 }}
            transition={{ duration: duration, ease: "easeOut" }}
            style={{
              position: 'absolute',
              top: click.y,
              left: click.x,
              x: '-50%',
              y: '-50%',
              width: effectSize,
              height: effectSize,
            }}
            className="flex items-center justify-center"
          >
            {interactionMode === "sniper" && (
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                fill="none"
                stroke={color}
                strokeWidth={strokeWidth}
              >
                {/* Outer dotted/dashed crosshair circle */}
                <circle cx="50" cy="50" r="40" strokeDasharray="4 4" className="opacity-90" />
                {/* Inner target circle */}
                <circle cx="50" cy="50" r="15" className="opacity-60" />
                {/* Center target dot */}
                <circle cx="50" cy="50" r="2.5" fill={color} />
                {/* Reticle indicator lines */}
                <line x1="50" y1="5" x2="50" y2="25" />
                <line x1="50" y1="75" x2="50" y2="95" />
                <line x1="5" y1="50" x2="25" y2="50" />
                <line x1="75" y1="50" x2="95" y2="50" />
              </svg>
            )}
            
            {showLabel && (
              <span className="absolute text-[9px] uppercase tracking-wider font-semibold mt-20" style={{ color }}>
                TARGET
              </span>
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default MouseEffects;
