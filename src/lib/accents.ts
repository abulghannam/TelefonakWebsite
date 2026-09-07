/**
 * The accent hues shared by category cards, ambient lighting and glow washes.
 *
 * Values are space-separated R G B channels rather than hex so they can be
 * dropped into `rgb(var(--accent) / <alpha>)` and into inline gradients
 * without a conversion step.
 */
export const accents = {
  azure: "77 155 255",
  aqua: "34 211 238",
  violet: "177 140 255",
  magenta: "245 127 196",
  mint: "52 224 161",
  gold: "251 191 36",
  coral: "255 138 113",
  champagne: "242 220 174",
  silver: "204 210 222",
} as const;

export type Accent = keyof typeof accents;

/** `rgb(...)` string for an accent, optionally at a given alpha. */
export function accentColor(accent: Accent, alpha?: number): string {
  return alpha === undefined
    ? `rgb(${accents[accent]})`
    : `rgb(${accents[accent]} / ${alpha})`;
}
