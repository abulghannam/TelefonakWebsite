"use client";

import Link from "next/link";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import type { PointerEvent, ReactNode } from "react";

import { cn } from "@/lib/cn";

const MotionLink = motion.create(Link);

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium " +
  "transition-colors duration-300 ease-out will-change-transform";

const sizes: Record<Size, string> = {
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-13 px-7 text-[0.95rem]",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-cream text-obsidian shadow-[0_10px_40px_-12px_rgba(91,140,255,0.55)] hover:bg-white",
  secondary:
    "border border-white/12 bg-white/[0.03] text-cream hover:border-white/25 hover:bg-white/[0.07]",
  ghost: "text-silver hover:text-cream",
};

export type MagneticButtonProps = {
  children: ReactNode;
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  /** Renders a plain anchor with `target="_blank"` instead of a router link. */
  external?: boolean;
  ariaLabel?: string;
};

/**
 * CTA with a subtle magnetic pull toward the cursor. The effect is skipped
 * entirely for reduced-motion users and for coarse (touch) pointers.
 */
export function MagneticButton({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  external = false,
  ariaLabel,
}: MagneticButtonProps) {
  const shouldReduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    if (shouldReduceMotion || event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - (rect.left + rect.width / 2)) * 0.2);
    y.set((event.clientY - (rect.top + rect.height / 2)) * 0.26);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  const shared = {
    className: cn(base, sizes[size], variants[variant], className),
    style: { x: springX, y: springY },
    onPointerMove: handlePointerMove,
    onPointerLeave: reset,
    onBlur: reset,
    "aria-label": ariaLabel,
  };

  const content = (
    <>
      {variant === "primary" ? (
        <span
          data-decorative
          aria-hidden="true"
          className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(120% 150% at 50% 110%, rgba(91,140,255,0.4), transparent 60%)",
          }}
        />
      ) : null}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  );

  if (external) {
    return (
      <motion.a href={href} target="_blank" rel="noreferrer noopener" {...shared}>
        {content}
      </motion.a>
    );
  }

  return (
    <MotionLink href={href} {...shared}>
      {content}
    </MotionLink>
  );
}
