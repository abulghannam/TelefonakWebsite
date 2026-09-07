"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

import { transition } from "@/lib/motion";

/**
 * `reducedMotion="user"` makes every Motion animation in the tree honour the
 * OS-level preference without per-component branching.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={transition.base}>
      {children}
    </MotionConfig>
  );
}
