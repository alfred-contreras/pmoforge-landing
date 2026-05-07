// =====================================================================
// Reveal — animación cinematográfica al hacer scroll.
// Más dramático que el CV: distancia mayor, duración más larga,
// soporte para stagger automático en hijos.
// =====================================================================
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  /** Si true, aplica stagger a children inmediatos */
  stagger?: boolean;
  /** Retraso entre cada hijo cuando stagger=true */
  staggerDelay?: number;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'header' | 'aside' | 'ul' | 'ol';
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (custom: number) => ({
    opacity: 1,
    transition: {
      staggerChildren: custom || 0.12,
      delayChildren: 0.05
    }
  })
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.21, 0.47, 0.32, 0.98]
    }
  }
};

export default function Reveal({
  children,
  delay = 0,
  y = 36,
  duration = 0.85,
  stagger = false,
  staggerDelay = 0.12,
  className = '',
  as = 'div'
}: Props) {
  const reduce = useReducedMotion();
  const Component = motion[as];

  if (reduce) {
    return <Component className={className}>{children}</Component>;
  }

  if (stagger) {
    return (
      <Component
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-8% 0% -8% 0%' }}
        variants={containerVariants}
        custom={staggerDelay}
      >
        {Array.isArray(children)
          ? children.map((child, i) => (
              <motion.div key={i} variants={childVariants}>
                {child}
              </motion.div>
            ))
          : (
            <motion.div variants={childVariants}>{children}</motion.div>
          )}
      </Component>
    );
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8% 0% -8% 0%' }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
    >
      {children}
    </Component>
  );
}
