"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";

import { AuroraGlow } from "@/components/ui/ambient-glow";
import { SectionHeading } from "@/components/ui/section-heading";
import { steps } from "@/data/steps";
import { EASE_LUXE, viewportOnce } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

export function HowItWorks() {
  const trackRef = useRef<HTMLOListElement>(null);
  const shouldReduceMotion = usePrefersReducedMotion();

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 78%", "end 62%"],
  });

  // Spring smooths the raw scroll value so the line never stutters.
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="section-pad relative isolate overflow-hidden"
    >
      <AuroraGlow
        from="azure"
        to="aqua"
        size="52rem"
        opacity={0.2}
        className="right-[-16rem] top-[8rem]"
      />

      <div className="container-page">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1fr)] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              id="how-it-works-heading"
              eyebrow="How it works"
              titleLines={["Four steps from", "listing to handover."]}
              description="No auctions, no noise. A clear path from finding the right device to agreeing terms with the person selling it."
            />
          </div>

          <ol ref={trackRef} className="relative pl-10 sm:pl-14">
            {/* Rail + scroll-driven fill */}
            <span
              aria-hidden="true"
              data-decorative
              className="absolute bottom-6 left-[0.9rem] top-3 w-px bg-white/10 sm:left-[1.4rem]"
            >
              <motion.span
                className="absolute inset-x-0 top-0 h-full origin-top bg-gradient-to-b from-azure via-violet-glow to-transparent"
                style={{ scaleY: shouldReduceMotion ? 1 : progress }}
              />
            </span>

            {steps.map((step, index) => (
              <motion.li
                key={step.id}
                className="relative pb-14 last:pb-0"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.7, ease: EASE_LUXE, delay: index * 0.06 }}
              >
                {/* Node */}
                <span
                  aria-hidden="true"
                  className="absolute -left-10 top-1 flex h-[1.85rem] w-[1.85rem] items-center justify-center rounded-full border border-white/12 bg-ink-900 sm:-left-14"
                >
                  <step.icon className="h-3.5 w-3.5 text-azure" strokeWidth={1.9} />
                </span>

                <span className="font-display text-xs tracking-[0.28em] text-slate-dim">
                  {step.index}
                </span>
                <h3 className="display-3 mt-3 text-[1.35rem] sm:text-[1.6rem]">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-lg text-[0.95rem] leading-relaxed text-mist">
                  {step.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.03] px-3 py-1.5 text-xs text-silver">
                  {step.detail}
                </span>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
