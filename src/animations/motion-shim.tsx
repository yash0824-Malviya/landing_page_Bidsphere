import React, { forwardRef } from 'react';

// Framer motion props to filter out so they are not passed to native DOM elements
const MOTION_PROPS = new Set([
  'initial',
  'animate',
  'exit',
  'variants',
  'transition',
  'whileHover',
  'whileTap',
  'whileInView',
  'whileFocus',
  'whileDrag',
  'viewport',
  'layout',
  'layoutId',
  'layoutDependency',
  'layoutScroll',
  'onAnimationStart',
  'onAnimationComplete',
  'onUpdate',
  'drag',
  'dragConstraints',
  'dragElastic',
  'dragMomentum',
  'dragPropagation',
  'dragSnapToOrigin',
  'onDrag',
  'onDragStart',
  'onDragEnd',
  'transformTemplate',
  'custom',
  'inherit',
]);

function filterProps(props: Record<string, any>) {
  const filtered: Record<string, any> = {};
  for (const key in props) {
    if (!MOTION_PROPS.has(key)) {
      filtered[key] = props[key];
    }
  }
  return filtered;
}

const componentCache = new Map<string, React.ForwardRefExoticComponent<any>>();

function getMotionComponent(tag: string) {
  let Component = componentCache.get(tag);
  if (!Component) {
    Component = forwardRef<any, any>((props, ref) => {
      return React.createElement(tag, {
        ...filterProps(props),
        ref,
      });
    });
    Component.displayName = `motion.${tag}`;
    componentCache.set(tag, Component);
  }
  return Component;
}

// Proxy providing motion.div, motion.button, motion.header, motion.nav, etc.
export const motion = new Proxy({} as any, {
  get(_target, prop: string) {
    return getMotionComponent(prop);
  },
});

export interface AnimatePresenceProps {
  children?: React.ReactNode;
  mode?: 'sync' | 'wait' | 'popLayout' | string;
  initial?: boolean;
  onExitComplete?: () => void;
  custom?: any;
}

export const AnimatePresence: React.FC<AnimatePresenceProps> = ({ children }) => {
  return <>{children}</>;
};

export type Variants = Record<string, any>;
export type Transition = Record<string, any>;

export const useScroll = () => ({
  scrollX: { get: () => 0 },
  scrollY: { get: () => 0 },
  scrollXProgress: { get: () => 0 },
  scrollYProgress: { get: () => 0 },
});

export const useSpring = (val: any) => val;
export const useReducedMotion = () => false;
export const useInView = () => true;
export const useAnimation = () => ({
  start: async () => {},
  stop: () => {},
  set: () => {},
});
export const useTransform = (_value: any, _input: any, output: any) => output?.[0] ?? 0;
export const useMotionValue = (init: any) => ({
  get: () => init,
  set: () => {},
  onChange: () => () => {},
});
export const useMotionTemplate = () => '';

