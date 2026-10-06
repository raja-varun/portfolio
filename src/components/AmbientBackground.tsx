import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const AmbientBackground: React.FC = () => {
  const [hasMouse, setHasMouse] = useState(false);
  const mouseX = useSpring(0, { damping: 45, stiffness: 200 });
  const mouseY = useSpring(0, { damping: 45, stiffness: 200 });

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    setHasMouse(true);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Editorial grid */}
      <div className="absolute inset-0 technical-grid opacity-60" />

      {/* Film grain layer */}
      <div className="absolute inset-0 grain-overlay" />

      {/* Subtle cursor-following illumination glow (very soft and subtle, not glaring neon) */}
      {hasMouse && (
        <motion.div
          style={{
            x: mouseX,
            y: mouseY,
            translateX: '-50%',
            translateY: '-50%',
          }}
          className="w-[600px] h-[600px] rounded-full bg-cyan-900/[0.04] blur-[120px] absolute top-0 left-0"
        />
      )}

      {/* Static corner vignette accents */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-indigo-950/[0.08] blur-[160px] rounded-full" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-slate-900/[0.12] blur-[180px] rounded-full" />
    </div>
  );
};
