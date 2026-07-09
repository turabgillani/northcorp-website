"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Scroll-reveal wrapper. Elements that start below ~86% of the viewport
 * height at mount fade/rise into view once they scroll into view;
 * above-the-fold content paints immediately with no transition.
 */
export default function Reveal({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "span";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"static" | "hidden" | "visible">("static");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let io: IntersectionObserver | undefined;
    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(() => {
        const vh = window.innerHeight || 800;
        if (el.getBoundingClientRect().top <= vh * 0.86) {
          return; // above the fold: stays "static", no animation
        }
        if (typeof IntersectionObserver === "undefined") {
          setState("visible");
          return;
        }
        setState("hidden");
        io = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setState("visible");
                io?.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.12, rootMargin: "0px 0px -7% 0px" }
        );
        io.observe(el);
      });
      return () => cancelAnimationFrame(raf2);
    });

    return () => {
      cancelAnimationFrame(raf1);
      io?.disconnect();
    };
  }, []);

  const Comp = Tag as "div";

  return (
    <Comp
      ref={ref}
      className={[
        className,
        state === "hidden" ? "reveal-init" : state === "visible" ? "reveal-visible" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Comp>
  );
}
