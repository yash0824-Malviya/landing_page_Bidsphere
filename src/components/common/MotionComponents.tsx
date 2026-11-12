import React, { useRef, useState, useEffect } from 'react';
import { 
  motion, 
  useScroll, 
  useSpring, 
  useReducedMotion, 
  useInView,
  AnimatePresence 
} from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { fadeInUp, springGentle } from '../../animations/variants';

// ============================================================================
// 1. Thin Scroll Progress Indicator (Section 15 D)
// ============================================================================
export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#146CE8] via-[#38BDF8] to-[#0D56C0] origin-left z-[60] pointer-events-none"
    />
  );
};

// ============================================================================
// 2. Scroll Reveal Component (Section 2 & 13)
// ============================================================================
interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 0.5,
  yOffset = 24,
}) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ============================================================================
// 3. Spotlight Card Component (Section 15 B)
// Soft radial highlight follows the pointer within cards
// ============================================================================
interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  onClick?: () => void;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = '',
  spotlightColor = 'rgba(20, 108, 232, 0.08)',
  onClick,
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState<number>(0);
  const prefersReducedMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || prefersReducedMotion) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    if (!prefersReducedMotion) setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileHover={prefersReducedMotion ? {} : { y: -4, transition: springGentle }}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Soft Radial Highlight */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 70%)`,
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 w-full h-full flex flex-col justify-between">
        {children}
      </div>
    </motion.div>
  );
};

// ============================================================================
// 4. Magnetic Button (Section 15 A)
// Buttons subtly respond to pointer movement on desktop
// ============================================================================
interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  strength?: number;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  onClick,
  strength = 0.2,
  type = 'button',
  disabled = false,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [offset, setOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const prefersReducedMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current || prefersReducedMotion) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = (e.clientX - centerX) * strength;
    const distanceY = (e.clientY - centerY) * strength;
    // Cap to maximum 8px
    const clampedX = Math.max(-8, Math.min(8, distanceX));
    const clampedY = Math.max(-8, Math.min(8, distanceY));
    setOffset({ x: clampedX, y: clampedY });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={buttonRef}
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: 'spring', stiffness: 350, damping: 25, mass: 0.5 }}
      whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
      className={className}
    >
      {children}
    </motion.button>
  );
};

// ============================================================================
// 5. Animated KPI Counter (Section 9)
// Animates numbers when scrolled into view
// ============================================================================
interface AnimatedCounterProps {
  value: string | number;
  duration?: number;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 1.4,
  className = '',
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [displayValue, setDisplayValue] = useState<string>(typeof value === 'string' ? value : '0');
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!inView || prefersReducedMotion) {
      setDisplayValue(String(value));
      return;
    }

    const strVal = String(value);
    // Extract prefix, numeric portion, and suffix
    const match = strVal.match(/^([^0-9.]*)([0-9.,]+)(.*)$/);
    if (!match) {
      setDisplayValue(strVal);
      return;
    }

    const prefix = match[1] || '';
    const numericPart = match[2].replace(/,/g, '');
    const suffix = match[3] || '';
    const targetNum = parseFloat(numericPart);

    if (isNaN(targetNum)) {
      setDisplayValue(strVal);
      return;
    }

    const hasDecimal = numericPart.includes('.');
    const decimalPlaces = hasDecimal ? numericPart.split('.')[1].length : 0;
    const hasComma = match[2].includes(',');

    let startTime: number | null = null;
    let animationFrameId: number;

    const updateCounter = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentNum = targetNum * easedProgress;

      let formattedNum = hasDecimal
        ? currentNum.toFixed(decimalPlaces)
        : Math.round(currentNum).toString();

      if (hasComma) {
        const parts = formattedNum.split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        formattedNum = parts.join('.');
      }

      setDisplayValue(`${prefix}${formattedNum}${suffix}`);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCounter);
      }
    };

    animationFrameId = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(animationFrameId);
  }, [inView, value, duration, prefersReducedMotion]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
};

// ============================================================================
// 6. Floating Back-to-Top Button (Section 14)
// ============================================================================
export const BackToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-white/95 text-navy border border-slate-200/90 shadow-card hover:shadow-card-hover hover:text-primary-blue hover:border-primary-blue/40 backdrop-blur-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue/40"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
