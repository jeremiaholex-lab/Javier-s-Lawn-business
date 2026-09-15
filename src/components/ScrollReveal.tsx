import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';

interface ScrollRevealProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  className?: string;
  colorPulseOnReveal?: boolean;
}

/**
 * ScrollReveal component that ensures animations only action out when
 * the user actually scrolls to them (not before scrolling), with slow,
 * smooth, luxurious pacing and optional color-shift animations.
 */
export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  duration = 1.3, // Slower, relaxed animation requested by user
  direction = 'up',
  distance = 32,
  className = '',
  colorPulseOnReveal = false,
  ...props
}) => {
  const getInitialOffset = () => {
    switch (direction) {
      case 'up':
        return { y: distance, x: 0 };
      case 'down':
        return { y: -distance, x: 0 };
      case 'left':
        return { x: distance, y: 0 };
      case 'right':
        return { x: -distance, y: 0 };
      case 'none':
      default:
        return { x: 0, y: 0 };
    }
  };

  const offset = getInitialOffset();

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...offset,
        scale: direction === 'none' ? 0.96 : 1,
        filter: colorPulseOnReveal ? 'saturate(0.7)' : 'none',
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        filter: 'saturate(1)',
      }}
      viewport={{
        once: true,
        amount: 0.2, // Must be 20% visible before triggering
        margin: '0px 0px -50px 0px', // Ensures it does not trigger before scrolling there
      }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Smooth, natural spring-like cubic bezier
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
