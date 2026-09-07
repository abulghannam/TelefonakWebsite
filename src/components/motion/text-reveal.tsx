"use client";

import { motion } from "motion/react";
import type { CSSProperties } from "react";

import { EASE_LUXE, viewportOnce } from "@/lib/motion";

type TextRevealProps = {
  /** Each entry renders on its own line so headline breaks stay intentional. */
  lines: string[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  /** Render immediately (hero) instead of waiting for the viewport. */
  immediate?: boolean;
};

const word = {
  hidden: { opacity: 0, y: "0.42em" },
  visible: { opacity: 1, y: "0em" },
};

/**
 * Word-by-word mask reveal. Words animate inside `overflow-hidden` rows, so
 * only `transform` and `opacity` are touched.
 */
const STEP = 0.055;

/** Pre-compute each word's cumulative index so the render stays pure. */
function toWordRows(lines: string[]) {
  let offset = 0;

  return lines.map((line) => {
    const tokens = line.split(" ").map((token, index) => ({
      token,
      order: offset + index,
    }));
    offset += tokens.length;
    return { line, tokens };
  });
}

export function TextReveal({
  lines,
  className,
  lineClassName,
  delay = 0,
  immediate = false,
}: TextRevealProps) {
  const rows = toWordRows(lines);

  return (
    <span className={className}>
      {rows.map((row) => (
        <span
          key={row.line}
          className={`block overflow-hidden pb-[0.06em] ${lineClassName ?? ""}`}
        >
          {row.tokens.map(({ token, order }) =>
            /*
             * The immediate variant drives the reveal from CSS so above-the-fold
             * headlines paint on first frame instead of waiting for hydration.
             */
            immediate ? (
              <span
                key={`${order}-${token}`}
                className="enter-word"
                style={
                  {
                    "--enter-delay": `${(delay + order * STEP).toFixed(3)}s`,
                  } as CSSProperties
                }
              >
                {token}{" "}
              </span>
            ) : (
              <motion.span
                key={`${order}-${token}`}
                className="inline-block whitespace-pre"
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={word}
                transition={{
                  duration: 0.85,
                  ease: EASE_LUXE,
                  delay: delay + order * STEP,
                }}
              >
                {token}{" "}
              </motion.span>
            ),
          )}
        </span>
      ))}
    </span>
  );
}
