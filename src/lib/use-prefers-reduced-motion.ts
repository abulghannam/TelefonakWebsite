"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

/** Created on first browser read; the server never reaches this path. */
let mediaQuery: MediaQueryList | null = null;

function getMediaQuery(): MediaQueryList {
  mediaQuery ??= window.matchMedia(QUERY);
  return mediaQuery;
}

function subscribe(onStoreChange: () => void): () => void {
  const query = getMediaQuery();
  query.addEventListener("change", onStoreChange);
  return () => query.removeEventListener("change", onStoreChange);
}

function getSnapshot(): boolean {
  return getMediaQuery().matches;
}

/** The server cannot know the preference, so it renders the full-motion tree. */
function getServerSnapshot(): boolean {
  return false;
}

/**
 * Hydration-safe replacement for Motion's `useReducedMotion`.
 *
 * That hook reads `matchMedia` synchronously during the first client render
 * while the server renders `null`, so branching on it makes a reduced-motion
 * visitor produce different markup than the server sent — a real mismatch on
 * the `style` and `class` attributes of every parallax and scroll-driven
 * element. `useSyncExternalStore` exists for exactly this: React uses the
 * server snapshot through hydration and only then swaps in the live value, so
 * the trees always agree.
 *
 * Motion's own animations are handled separately by `reducedMotion="user"` on
 * the `MotionConfig` provider; this hook is for our manual branching.
 */
export function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
