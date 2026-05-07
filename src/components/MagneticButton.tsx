// =====================================================================
// MagneticButton — botón que sigue sutilmente al cursor cuando está cerca.
// Efecto premium para CTAs principales (Hero, Waitlist).
// =====================================================================
import { motion, useReducedMotion, useMotionValue, useSpring } from 'framer-motion';
import type { ReactNode } from 'react';
import { useRef } from 'react';

interface Props {
  children: ReactNode;
  href: string;
  className?: string;
  external?: boolean;
  /** Fuerza del magnetismo (0-1) */
  strength?: number;
}

export default function MagneticButton({
  children,
  href,
  className = '',
  external = false,
  strength = 0.25
}: Props) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xs = useSpring(x, { stiffness: 280, damping: 18, mass: 0.5 });
  const ys = useSpring(y, { stiffness: 280, damping: 18, mass: 0.5 });

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener' : undefined}
      className={className}
      style={{ x: xs, y: ys, willChange: 'transform' }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 320, damping: 22 }}
    >
      {children}
    </motion.a>
  );
}
