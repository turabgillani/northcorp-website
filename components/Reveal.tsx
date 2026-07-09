"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

/**
 * Scroll-reveal wrapper. Content springs up into view the first time it enters
 * the viewport; reduced-motion renders it in place with no transition. Same API
 * as before (children, className, as) so every section keeps working unchanged.
 */

const EASE = [0.16, 1, 0.3, 1] as const;

const variants: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export default function Reveal({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "span";
}) {
  const reduce = useReducedMotion();
  const Comp = as === "span" ? motion.span : motion.div;

  if (reduce) {
    const Static = as === "span" ? "span" : "div";
    return <Static className={className}>{children}</Static>;
  }

  return (
    <Comp
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18, margin: "0px 0px -7% 0px" }}
    >
      {children}
    </Comp>
  );
}
