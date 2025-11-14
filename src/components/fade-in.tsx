'use client';

import { motion, useReducedMotion } from "framer-motion";
import type { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type FadeInProps = PropsWithChildren<{
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
  as?: typeof motion.div;
}>;

export function FadeIn({
  children,
  className,
  delay = 0,
  y = 32,
  once = true,
  as: Component = motion.div,
}: FadeInProps) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <Component
      className={twMerge(className)}
      initial={prefersReducedMotion ? undefined : { opacity: 0, y }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.25 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </Component>
  );
}

