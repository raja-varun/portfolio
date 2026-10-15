import React, { useEffect, useRef, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = React.memo(() => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const isVisibleRef = useRef(false);
  const isHoveredRef = useRef(false);

  // Smooth springs for trailing circle
  const cursorX = useSpring(0, { damping: 28, stiffness: 350 });
  const cursorY = useSpring(0, { damping: 28, stiffness: 350 });

  useEffect(() => {
    // Do not attach a continuous pointer loop where it cannot be used.
    const isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isTouch || prefersReducedMotion) {
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target;
      const nextHovered = target instanceof Element && Boolean(
        target.closest('a, button, input, textarea, select, [role="button"], .interactive-target'),
      );

      if (nextHovered !== isHoveredRef.current) {
        isHoveredRef.current = nextHovered;
        setIsHovered(nextHovered);
      }
    };

    const handleMouseLeave = () => {
      isVisibleRef.current = false;
      setIsVisible(false);
      if (isHoveredRef.current) {
        isHoveredRef.current = false;
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', moveCursor, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Outer soft ring */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 1.6 : 1,
          opacity: 0.8,
          borderColor: isHovered ? 'rgba(56, 189, 248, 0.6)' : 'rgba(255, 255, 255, 0.25)',
          backgroundColor: isHovered ? 'rgba(56, 189, 248, 0.08)' : 'transparent',
        }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
           className="w-8 h-8 rounded-full border border-white/25 fixed top-0 left-0 will-change-transform"
      />

      {/* Center pinpoint */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 0 : 1,
          opacity: isHovered ? 0 : 1,
        }}
        transition={{ duration: 0.1 }}
         className="w-1.5 h-1.5 rounded-full bg-cyan-400 fixed top-0 left-0 will-change-transform"
      />
    </div>
  );
});
