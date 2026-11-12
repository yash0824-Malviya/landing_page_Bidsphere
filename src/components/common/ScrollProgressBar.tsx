import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] origin-left bg-gradient-to-r from-[#146CE8] via-[#38BDF8] to-[#0D56C0] z-[60] pointer-events-none"
      style={{ scaleX }}
    />
  );
}

export { ScrollProgressBar };
