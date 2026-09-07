"use client";

import {
  ArrowRight,
  Camera,
  Gamepad2,
  Headphones,
  Laptop,
  Sparkles,
} from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { type CSSProperties, useRef } from "react";

import { PhoneFrame } from "@/components/device/phone-frame";
import { HomeScreen } from "@/components/device/screens";
import { TextReveal } from "@/components/motion/text-reveal";
import { AmbientGlow, AuroraGlow, LightBeam } from "@/components/ui/ambient-glow";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { StoreBadges } from "@/components/ui/store-badges";
import { EASE_LUXE } from "@/lib/motion";
import { site } from "@/lib/site";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

/** Floating hardware chips that orbit the device mockup on large screens. */
const floaters = [
  { icon: Laptop, label: "Laptops", className: "left-[-42%] top-[13%]", drift: -10, delay: 0 },
  { icon: Headphones, label: "Audio", className: "right-[-16%] top-[33%]", drift: 12, delay: 0.6 },
  { icon: Camera, label: "Cameras", className: "left-[-34%] bottom-[25%]", drift: 9, delay: 1.2 },
  { icon: Gamepad2, label: "Gaming", className: "right-[-11%] bottom-[9%]", drift: -11, delay: 1.8 },
];

const proofPoints = [
  "Verified profiles",
  "Transparent conditions",
  "In-app messaging",
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = usePrefersReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const deviceY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const deviceOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.35]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, 48]);

  const parallax = shouldReduceMotion ? {} : { y: deviceY, opacity: deviceOpacity };
  const copyParallax = shouldReduceMotion ? {} : { y: copyY };

  return (
    <section
      ref={sectionRef}
      id="hero"
      aria-labelledby="hero-heading"
      className="grain relative isolate overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-36 lg:pb-32 lg:pt-40"
    >
      {/* Ambient lighting */}
      <AuroraGlow
        from="aqua"
        to="azure"
        size="72rem"
        opacity={0.34}
        className="left-1/2 top-[-26rem] -translate-x-1/2"
      />
      <AmbientGlow
        tone="violet"
        size="44rem"
        opacity={0.26}
        className="right-[-14rem] top-[16rem]"
      />
      <AmbientGlow
        tone="magenta"
        size="32rem"
        opacity={0.16}
        className="left-[-12rem] top-[30rem]"
      />
      <LightBeam
        tone="aqua"
        className="left-1/2 top-0 h-[34rem] w-px -translate-x-1/2 opacity-80"
      />

      {/* Fine grid floor */}
      <div
        aria-hidden="true"
        data-decorative
        className="mask-fade-b absolute inset-x-0 top-0 -z-10 h-[42rem] opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="container-page">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.86fr)] lg:gap-10 xl:gap-16">
          {/* ------------------------------------------------------------- */}
          <motion.div style={copyParallax} className="max-w-2xl">
            <span
              style={{ "--enter-delay": "0.15s" } as CSSProperties}
              className="enter-rise inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] py-1.5 pl-2.5 pr-4 text-xs text-silver"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-azure/20">
                <Sparkles className="h-3 w-3 text-azure" aria-hidden="true" />
              </span>
              A curated marketplace for second-hand technology
            </span>

            <h1 id="hero-heading" className="display-1 mt-7">
              <TextReveal
                lines={["Premium technology", "deserves a"]}
                immediate
                delay={0.28}
              />
              <TextReveal
                lines={["second life."]}
                lineClassName="text-aurora"
                immediate
                delay={0.5}
              />
            </h1>

            <p
              style={{ "--enter-delay": "0.7s" } as CSSProperties}
              className="enter-rise lede mt-7 max-w-xl"
            >
              Discover trusted second-hand electronics, sell devices you no longer
              use, and make smarter technology choices with {site.name}.
            </p>

            <div
              style={{ "--enter-delay": "0.82s" } as CSSProperties}
              className="enter-rise mt-9 flex flex-wrap items-center gap-3"
            >
              <MagneticButton
                href={site.appStoreUrl}
                external
                size="lg"
                variant="primary"
              >
                Download the App
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </MagneticButton>
              <MagneticButton href="#how-it-works" size="lg" variant="secondary">
                Explore How It Works
              </MagneticButton>
            </div>

            <div
              style={{ "--enter-delay": "0.95s" } as CSSProperties}
              className="enter-fade mt-10"
            >
              <StoreBadges />
              <ul className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-dim">
                {proofPoints.map((point) => (
                  <li key={point} className="flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className="h-1 w-1 rounded-full bg-azure"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* ------------------------------------------------------------- */}
          {/* Entrance and scroll parallax are split so the CSS animation and
              Motion never write `transform` on the same element. */}
          <div
            style={{ "--enter-delay": "0.35s" } as CSSProperties}
            className="enter-rise relative mx-auto w-full max-w-[17.5rem] sm:max-w-[19rem] lg:mx-0 lg:ml-auto lg:max-w-[20rem]"
          >
            <motion.div style={parallax} className="relative">
              <AuroraGlow
                from="azure"
                to="violet"
                size="32rem"
                opacity={0.42}
                className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              />

              <PhoneFrame label={`${site.name} app — marketplace home screen`}>
                <HomeScreen />
              </PhoneFrame>

              {floaters.map((floater) => (
                <motion.div
                  key={floater.label}
                  aria-hidden="true"
                  data-decorative
                  className={`glass absolute hidden items-center gap-2 rounded-2xl px-3.5 py-2.5 text-xs text-silver shadow-[0_20px_50px_-24px_rgba(0,0,0,0.9)] xl:flex ${floater.className}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.7,
                    ease: EASE_LUXE,
                    delay: 0.9 + floater.delay * 0.2,
                  }}
                >
                  <motion.span
                    className="flex items-center gap-2"
                    animate={
                      shouldReduceMotion
                        ? undefined
                        : { y: [0, floater.drift, 0] }
                    }
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: floater.delay,
                    }}
                  >
                    <floater.icon
                      className="h-4 w-4 text-azure"
                      strokeWidth={1.6}
                      aria-hidden="true"
                    />
                    {floater.label}
                  </motion.span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <ScrollIndicator reduced={shouldReduceMotion} />
      </div>
    </section>
  );
}

function ScrollIndicator({ reduced }: { reduced: boolean }) {
  return (
    <div
      style={{ "--enter-delay": "1.3s" } as CSSProperties}
      className="enter-fade mt-16 hidden items-center gap-3 lg:flex"
    >
      <span className="relative h-12 w-px overflow-hidden bg-white/12">
        <motion.span
          className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-transparent via-azure to-transparent"
          animate={reduced ? undefined : { y: [-16, 48] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
      </span>
      <span className="eyebrow">Scroll to explore</span>
    </div>
  );
}
