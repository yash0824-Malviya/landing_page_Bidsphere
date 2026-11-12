import { Variants } from './motion-shim';

// ============================================================================
// Enterprise Spring Transitions & Easing Curves
// ============================================================================
export const springGentle = {
  type: 'spring' as const,
  stiffness: 120,
  damping: 18,
  mass: 0.8,
};

export const springBouncy = {
  type: 'spring' as const,
  stiffness: 260,
  damping: 20,
};

export const springSnappy = {
  type: 'spring' as const,
  stiffness: 380,
  damping: 28,
};

export const transitionSmooth = {
  duration: 0.4,
  ease: [0.16, 1, 0.3, 1], // easeOutExpo
};

// ============================================================================
// Fade & Slide Variants
// ============================================================================
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const fadeInScale: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.2 },
  },
};

// ============================================================================
// Stagger Containers
// ============================================================================
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.02,
    },
  },
};

// ============================================================================
// Card Hover & Tap Variants
// ============================================================================
export const cardInteractiveVariants: Variants = {
  initial: { y: 0, boxShadow: '0 1px 3px rgba(15, 27, 54, 0.05)' },
  hover: {
    y: -5,
    boxShadow: '0 16px 32px -4px rgba(20, 108, 232, 0.12), 0 4px 12px -2px rgba(15, 27, 54, 0.05)',
    transition: {
      type: 'spring' as const,
      stiffness: 300,
      damping: 20,
    },
  },
  tap: {
    scale: 0.99,
    transition: { duration: 0.1 },
  },
};

// ============================================================================
// Button Tap Feedback
// ============================================================================
export const buttonTapScale = {
  scale: 0.97,
  transition: { duration: 0.1 },
};
