"use client";

import {
  motion,
  useMotionTemplate,
  useTransform,
  type MotionValue,
} from "motion/react";

import { PhoneFrame } from "@/components/device/phone-frame";
import { HomeScreen } from "@/components/device/screens";
import { accents } from "@/lib/accents";

/**
 * Fracture lines radiating from a single impact point just right of centre.
 * Every path starts at that point, so retracting them by `pathLength` pulls
 * the damage back into the impact rather than simply fading it out.
 */
const cracks = [
  "M58 62 L36 30 L29 11",
  "M58 62 L83 37",
  "M58 62 L45 97 L31 121",
  "M58 62 L77 101 L85 133",
  "M58 62 L19 71",
  "M58 62 L61 158",
];

/** Closed shard outline around the impact, drawn last so it reads on top. */
const shard = "M45 45 L71 53 L67 83 L47 87 Z";

const dust = [
  { left: "17%", top: "21%", size: 3.5 },
  { left: "73%", top: "15%", size: 2.5 },
  { left: "31%", top: "58%", size: 3 },
  { left: "81%", top: "66%", size: 2 },
  { left: "24%", top: "83%", size: 2.5 },
  { left: "62%", top: "91%", size: 3 },
];

/** Faint diagonal wear on the glass, present from the start and buffed away. */
const scuffs = [
  { top: "34%", left: "12%", width: "46%", rotate: -21 },
  { top: "71%", left: "38%", width: "38%", rotate: 14 },
];

type RestorationPhoneProps = {
  /** 0 = boxed away and unused, 1 = powered on and back in service. */
  progress: MotionValue<number>;
  className?: string;
};

export function RestorationPhone({
  progress,
  className,
}: RestorationPhoneProps) {
  /*
   * `filter` is one of the few non-transform properties the compositor can
   * animate, so draining and restoring colour here stays off the main thread.
   */
  const saturate = useTransform(progress, [0, 0.72, 1], [0, 1, 1.14]);
  const brightness = useTransform(progress, [0, 0.62, 1], [0.62, 1, 1.07]);
  const deviceFilter = useMotionTemplate`saturate(${saturate}) brightness(${brightness})`;

  const rotate = useTransform(progress, [0, 1], [-7, 0]);
  const y = useTransform(progress, [0, 1], [28, 0]);
  const scale = useTransform(progress, [0, 1], [0.93, 1]);

  const crackLength = useTransform(progress, [0.08, 0.5], [1, 0]);
  const shardLength = useTransform(progress, [0.14, 0.46], [1, 0]);
  const crackOpacity = useTransform(progress, [0.42, 0.54], [1, 0]);

  const grimeOpacity = useTransform(progress, [0.06, 0.42], [1, 0]);
  const dustDrift = useTransform(progress, [0.06, 0.48], [0, -16]);

  const screenOff = useTransform(progress, [0.52, 0.8], [1, 0]);
  const wakeFlash = useTransform(progress, [0.58, 0.72, 0.9], [0, 0.9, 0]);

  const haloOpacity = useTransform(progress, [0.55, 1], [0, 1]);
  const haloScale = useTransform(progress, [0.55, 1], [0.78, 1]);

  return (
    <div className="flex justify-center">
      <div className={`relative w-full ${className ?? ""}`}>
        {/* Sits outside the filtered subtree so the bloom keeps full saturation. */}
        <motion.span
          aria-hidden="true"
          data-decorative
          className="absolute left-1/2 top-1/2 -z-10 block h-[135%] w-[135%] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            opacity: haloOpacity,
            scale: haloScale,
            background: `radial-gradient(circle, rgb(${accents.azure} / 0.42) 0%, rgb(${accents.violet} / 0.24) 36%, rgb(${accents.magenta} / 0.12) 54%, transparent 72%)`,
          }}
        />

        <motion.div style={{ filter: deviceFilter, rotate, y, scale }}>
          <PhoneFrame label="Illustration of a stored device being listed and brought back into everyday use">
            <HomeScreen />

            {/* Dark glass — the device is switched off until it finds an owner. */}
            <motion.span
              aria-hidden="true"
              data-decorative
              className="absolute inset-0 block bg-[#04050a]"
              style={{ opacity: screenOff }}
            />

            <motion.span
              aria-hidden="true"
              data-decorative
              className="absolute inset-0 block"
              style={{
                opacity: wakeFlash,
                background: `radial-gradient(120% 60% at 50% 44%, rgb(${accents.aqua} / 0.55) 0%, rgb(${accents.azure} / 0.25) 40%, transparent 74%)`,
              }}
            />

            <motion.span
              aria-hidden="true"
              data-decorative
              className="absolute inset-0 block"
              style={{ opacity: grimeOpacity }}
            >
              {scuffs.map((scuff) => (
                <span
                  key={scuff.top}
                  className="absolute h-px bg-white/25"
                  style={{
                    top: scuff.top,
                    left: scuff.left,
                    width: scuff.width,
                    transform: `rotate(${scuff.rotate}deg)`,
                  }}
                />
              ))}
              <span
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(90% 60% at 30% 20%, rgba(140,150,170,0.16), transparent 70%)",
                }}
              />
            </motion.span>

            <motion.span
              aria-hidden="true"
              data-decorative
              className="absolute inset-0 block"
              style={{ opacity: grimeOpacity, y: dustDrift }}
            >
              {dust.map((speck) => (
                <span
                  key={`${speck.left}-${speck.top}`}
                  className="absolute rounded-full bg-white/40"
                  style={{
                    left: speck.left,
                    top: speck.top,
                    width: speck.size,
                    height: speck.size,
                  }}
                />
              ))}
            </motion.span>

            <motion.svg
              aria-hidden="true"
              data-decorative
              viewBox="0 0 90 190"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full"
              style={{ opacity: crackOpacity }}
            >
              {cracks.map((d) => (
                <motion.path
                  key={d}
                  d={d}
                  fill="none"
                  stroke="rgba(241,245,252,0.92)"
                  strokeWidth={1.4}
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                  style={{ pathLength: crackLength }}
                />
              ))}
              <motion.path
                d={shard}
                fill="none"
                stroke="rgba(241,245,252,0.7)"
                strokeWidth={1.1}
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
                style={{ pathLength: shardLength }}
              />
            </motion.svg>
          </PhoneFrame>
        </motion.div>
      </div>
    </div>
  );
}
