import React, { useState, useEffect } from 'react';

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setScrollProgress(Math.min(1, Math.max(0, window.scrollY / scrollHeight)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#146CE8] via-[#38BDF8] to-[#0D56C0] origin-left z-[60] pointer-events-none transition-transform duration-75 ease-out"
      style={{
        transform: `scaleX(${scrollProgress})`,
        transformOrigin: '0% 50%',
      }}
    />
  );
}

export { ScrollProgressBar };
