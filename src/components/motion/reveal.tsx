"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

import { fadeUp, staggerParent, viewportOnce } from "@/lib/motion";

/**
 * Pre-created motion components. Building these at module scope (rather than
 * calling `motion.create` during render) keeps element identity stable.
 */
const elements = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  li: motion.li,
  ul: motion.ul,
  p: motion.p,
  span: motion.span,
  h2: motion.h2,
  h3: motion.h3,
  figure: motion.figure,
} as const;

export type RevealTag = keyof typeof elements;

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: RevealTag;
  delay?: number;
  variants?: Variants;
};

/** Single element entrance. Runs once, transform + opacity only. */
export function Reveal({
  children,
  className,
  as = "div",
  delay = 0,
  variants = fadeUp,
}: RevealProps) {
  const Component = elements[as];

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </Component>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  as?: RevealTag;
  stagger?: number;
  delay?: number;
};

/** Parent orchestrator — pair with `<StaggerItem>` children. */
export function Stagger({
  children,
  className,
  as = "div",
  stagger = 0.08,
  delay = 0,
}: StaggerProps) {
  const Component = elements[as];

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerParent(stagger, delay)}
    >
      {children}
    </Component>
  );
}

export function StaggerItem({
  children,
  className,
  as = "div",
  variants = fadeUp,
}: {
  children: ReactNode;
  className?: string;
  as?: RevealTag;
  variants?: Variants;
}) {
  const Component = elements[as];

  return (
    <Component className={className} variants={variants}>
      {children}
    </Component>
  );
}
