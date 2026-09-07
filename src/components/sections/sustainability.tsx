"use client";

import { ListChecks, User, UserPlus } from "lucide-react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef, useState, type CSSProperties } from "react";

import { RestorationPhone } from "@/components/device/restoration-phone";
import { AmbientGlow, AuroraGlow } from "@/components/ui/ambient-glow";
import { SectionHeading } from "@/components/ui/section-heading";
import { accents, type Accent } from "@/lib/accents";
import { cn } from "@/lib/cn";
import { EASE_LUXE, viewportOnce } from "@/lib/motion";
import { site } from "@/lib/site";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

type Stage = {
  id: string;
  label: string;
  detail: string;
  icon: typeof User;
  accent: Accent;
};

/**
 * The three captions track the phone's restoration: stored and unused, then
 * described and listed, then powered on again. Deliberately worded around
 * changing hands rather than repair — devices are passed on, not refurbished.
 */
const stages: Stage[] = [
  {
    id: "first",
    label: "First owner",
    detail:
      "A device that still works stops being used, and quietly disappears into a drawer.",
    icon: User,
    accent: "coral",
  },
  {
    id: "platform",
    label: site.name,
    detail:
      "Photos, full specifications and an honest condition note put it back in front of the people looking for exactly that model.",
    icon: ListChecks,
    accent: "azure",
  },
  {
    id: "next",
    label: "Next owner",
    detail:
      "Someone puts the years of life still left in it to use, for meaningfully less than the price of new.",
    icon: UserPlus,
    accent: "mint",
  },
];

/** Progress value at which each stage takes over. */
const STAGE_BOUNDS = [0.35, 0.7];

export function Sustainability() {
  const trackRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = usePrefersReducedMotion();

  /*
   * The chapter column is sized in viewport units below, so the sequence gets
   * a predictable run of roughly one to one-and-a-half screens of scrolling
   * regardless of how the copy wraps. Progress reaches 0 just as the phone
   * pins and 1 while the last chapter is still on screen.
   */
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 12%", "end 80%"],
  });

  /* Reduced motion gets the finished device rather than a frozen broken one. */
  const settled = useMotionValue(1);
  const progress = shouldReduceMotion ? settled : scrollYProgress;

  const railScale = useTransform(progress, [0, 1], [0, 1]);

  const [activeStage, setActiveStage] = useState(0);
  useMotionValueEvent(progress, "change", (value) => {
    const next =
      value < STAGE_BOUNDS[0] ? 0 : value < STAGE_BOUNDS[1] ? 1 : 2;
    setActiveStage((current) => (current === next ? current : next));
  });

  return (
    <section
      id="sustainability"
      aria-labelledby="sustainability-heading"
      className="section-pad relative isolate"
    >
      {/*
        Clipping happens here rather than on the section: `overflow: hidden` on
        an ancestor turns that ancestor into the scroll container for anything
        `position: sticky` inside it, which would stop the phone pinning.
      */}
      <div
        aria-hidden="true"
        data-decorative
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <AuroraGlow
          from="mint"
          to="aqua"
          size="56rem"
          opacity={0.18}
          className="left-1/2 top-[4rem] -translate-x-1/2"
        />
        <AmbientGlow
          tone="gold"
          size="38rem"
          opacity={0.12}
          className="right-[-12rem] bottom-[10rem]"
        />
      </div>

      <div className="container-page">
        <SectionHeading
          id="sustainability-heading"
          eyebrow="Sustainability"
          titleLines={[
            "Better for your wallet.",
            "Better for the life",
            "of every device.",
          ]}
          description="Most electronics are replaced long before they stop working. Passing a device on keeps good hardware in use and out of a drawer."
          align="center"
          className="mx-auto max-w-3xl"
        />

        {/*
          Block flow below `lg`, two columns above. Either way the pinned
          column is a direct child of the track, so it stays stuck for the
          whole sequence — as a grid item it would only span its own row.
        */}
        <div
          ref={trackRef}
          className="mt-14 lg:mt-24 lg:grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-20"
        >
          <div className="sticky top-[4.75rem] z-20 self-start bg-obsidian pb-6 pt-3 lg:top-32 lg:z-auto lg:bg-transparent lg:pb-0 lg:pt-0">
            <RestorationPhone
              progress={progress}
              className="max-w-[8rem] sm:max-w-[10rem] lg:max-w-[15.5rem]"
            />

            <p className="mx-auto mt-8 hidden max-w-[18rem] text-center text-sm leading-relaxed text-mist lg:block">
              One device, three chapters. Scroll to follow it from the back of a
              drawer to someone else&rsquo;s pocket.
            </p>

            {/* Softens the edge where chapters disappear behind the pinned band. */}
            <span
              aria-hidden="true"
              data-decorative
              className="absolute inset-x-0 top-full h-8 bg-gradient-to-b from-obsidian to-transparent lg:hidden"
            />
          </div>

          <div className="relative z-10">
            {/* Rail fills as the restoration advances. */}
            <span
              aria-hidden="true"
              data-decorative
              className="absolute left-[1.35rem] top-4 hidden h-[calc(100%-2rem)] w-px bg-white/8 sm:block"
            >
              <motion.span
                className="absolute inset-0 block origin-top rounded-full"
                style={{
                  scaleY: railScale,
                  backgroundImage: `linear-gradient(to bottom, rgb(${accents.coral}), rgb(${accents.azure}) 52%, rgb(${accents.mint}))`,
                }}
              />
            </span>

            <ol className="flex min-h-[150vh] flex-col justify-between py-[8vh] sm:min-h-[170vh] lg:min-h-[200vh]">
              {stages.map((stage, index) => {
                const isActive = shouldReduceMotion || index === activeStage;

                return (
                  <motion.li
                    key={stage.id}
                    style={{ "--accent": accents[stage.accent] } as CSSProperties}
                    className="relative sm:pl-16"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewportOnce}
                    transition={{ duration: 0.7, ease: EASE_LUXE }}
                  >
                    <span
                      className={cn(
                        "absolute left-0 top-1 hidden h-11 w-11 items-center justify-center rounded-full border bg-obsidian transition-colors duration-500 sm:flex",
                        isActive
                          ? "accent-icon"
                          : "border-white/10 text-slate-dim",
                      )}
                    >
                      <stage.icon
                        className="h-[1.15rem] w-[1.15rem]"
                        strokeWidth={1.6}
                        aria-hidden="true"
                      />
                    </span>

                    <div
                      className={cn(
                        "transition-opacity duration-500",
                        isActive ? "opacity-100" : "opacity-45",
                      )}
                    >
                      <span
                        className="eyebrow"
                        style={
                          isActive
                            ? { color: "rgb(var(--accent))" }
                            : undefined
                        }
                      >
                        {`Chapter ${String(index + 1).padStart(2, "0")}`}
                      </span>
                      <h3 className="display-3 mt-3 text-[1.5rem] lg:text-[1.85rem]">
                        {stage.label}
                      </h3>
                      <p className="lede mt-3 max-w-md">{stage.detail}</p>
                    </div>
                  </motion.li>
                );
              })}
            </ol>
          </div>
        </div>

        <motion.div
          className="mx-auto mt-20 grid max-w-4xl gap-5 sm:grid-cols-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: EASE_LUXE }}
        >
          <div className="panel hairline-top p-7">
            <h3 className="display-3 text-[1.2rem]">
              A drawer is not a destination
            </h3>
            <p className="mt-3 text-[0.925rem] leading-relaxed text-mist">
              Phones, laptops and consoles that still work have years left in
              them. Listing a device takes minutes and puts it back in
              circulation.
            </p>
          </div>
          <div className="panel hairline-top p-7">
            <h3 className="display-3 text-[1.2rem]">
              Value that goes both ways
            </h3>
            <p className="mt-3 text-[0.925rem] leading-relaxed text-mist">
              Sellers recover value from hardware they no longer use. Buyers get
              capable technology for meaningfully less than new.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
