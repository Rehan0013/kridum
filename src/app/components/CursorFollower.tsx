'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

// extract and invert RGB color
const parseRGB = (color: string): number[] => {
  const match = color.match(/\d+/g);
  return match ? match.slice(0, 3).map(Number) : [255, 255, 255];
};

const invertColor = ([r, g, b]: number[]) => {
  return `rgb(${255 - r}, ${255 - g}, ${255 - b})`;
};

const CursorFollower = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [cursorColor, setCursorColor] = useState('purple');

  const springX = useSpring(x, { damping: 20, stiffness: 200 });
  const springY = useSpring(y, { damping: 20, stiffness: 200 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);

      const el = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement;
      if (el) {
        const computedStyle = getComputedStyle(el);
        const bg = computedStyle.backgroundColor || 'rgb(255, 255, 255)';
        const baseColor = parseRGB(bg);
        const inverted = invertColor(baseColor);
        setCursorColor(inverted);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-50 mix-blend-difference blur-lg"
      style={{
        translateX: springX,
        translateY: springY,
        backgroundColor: cursorColor,
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
};

export default CursorFollower;
