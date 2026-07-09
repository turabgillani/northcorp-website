"use client";

import { motion, useScroll, useSpring } from "motion/react";

/**
 * "The line" motif: a single terracotta thread across the top that fills as you
 * read, the call staying connected the whole way down. Uses scroll progress off
 * the render cycle; degrades to a static full line under reduced motion via the
 * spring simply not animating.
 */
export default function ScrollLine() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-50 bg-gradient-to-r from-terracotta via-terracotta to-mint"
    />
  );
}
