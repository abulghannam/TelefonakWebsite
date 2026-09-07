import type { Transition, Variants } from "motion/react";

/** Shared easing curve — long tail, quick attack. Used across every section. */
export const EASE_LUXE = [0.16, 1, 0.3, 1] as const;

export const transition = {
  base: { duration: 0.7, ease: EASE_LUXE },
  slow: { duration: 1.05, ease: EASE_LUXE },
  snap: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
} satisfies Record<string, Transition>;

/**
 * Once-only viewport config: animations never re-run or run off-screen.
 *
 * `amount` stays at "some" rather than a fraction. A fraction is measured
 * against the element, so a tall container — the category grid is ~1800px on a
 * phone — can need more of itself on screen than a phone viewport can show,
 * and would never reveal. The negative bottom margin does the gating instead,
 * in pixels, so the trigger point is the same whatever the element's height.
 */
export const viewportOnce = {
  once: true,
  amount: "some",
  margin: "0px 0px -100px 0px",
} as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: transition.base },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transition.base },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: transition.slow },
};

export const staggerParent = (stagger = 0.08, delay = 0): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
});
