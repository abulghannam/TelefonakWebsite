import { cn } from "@/lib/cn";
import { type Accent, accents } from "@/lib/accents";

type AmbientGlowProps = {
  className?: string;
  /** Accent hue of the light pool. */
  tone?: Accent;
  /** CSS size of the glow, e.g. "48rem". */
  size?: string;
  opacity?: number;
};

/**
 * Soft accent lighting built from a radial gradient rather than a blurred
 * element — no filter cost, no repaint while scrolling.
 */
export function AmbientGlow({
  className,
  tone = "azure",
  size = "44rem",
  opacity = 0.26,
}: AmbientGlowProps) {
  const rgb = accents[tone];

  return (
    <div
      aria-hidden="true"
      data-decorative
      className={cn("absolute -z-10 rounded-full", className)}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, rgb(${rgb} / ${opacity}) 0%, rgb(${rgb} / ${opacity * 0.42}) 34%, transparent 68%)`,
      }}
    />
  );
}

/**
 * Two overlapping pools in different hues. Reads as a single richer light
 * source than one tone can manage, and still costs nothing to paint.
 */
export function AuroraGlow({
  className,
  from = "azure",
  to = "violet",
  size = "52rem",
  opacity = 0.24,
}: {
  className?: string;
  from?: Accent;
  to?: Accent;
  size?: string;
  opacity?: number;
}) {
  return (
    <div
      aria-hidden="true"
      data-decorative
      className={cn("absolute -z-10 rounded-full", className)}
      style={{
        width: size,
        height: size,
        /*
         * Radii are given explicitly and kept inside the element on every axis.
         * A default-sized gradient reaches past the rounded container and the
         * clip shows up as a hard arc across the section.
         */
        background: [
          `radial-gradient(ellipse 34% 34% at 38% 44%, rgb(${accents[from]} / ${opacity}) 0%, transparent 100%)`,
          `radial-gradient(ellipse 34% 34% at 62% 56%, rgb(${accents[to]} / ${opacity * 0.9}) 0%, transparent 100%)`,
        ].join(", "),
      }}
    />
  );
}

/** Fine vertical light beam used behind hero and final CTA typography. */
export function LightBeam({
  className,
  tone = "azure",
}: {
  className?: string;
  tone?: Accent;
}) {
  return (
    <div
      aria-hidden="true"
      data-decorative
      className={cn("absolute -z-10", className)}
      style={{
        background: `linear-gradient(180deg, transparent, rgb(${accents[tone]} / 0.42), transparent)`,
      }}
    />
  );
}
