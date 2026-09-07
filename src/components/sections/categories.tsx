import { ArrowUpRight } from "lucide-react";
import type { CSSProperties } from "react";

import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { AmbientGlow, AuroraGlow } from "@/components/ui/ambient-glow";
import { SectionHeading } from "@/components/ui/section-heading";
import { categories } from "@/data/categories";
import { accents } from "@/lib/accents";
import { cn } from "@/lib/cn";

/** Hand-placed bento spans — the eight cards tile a 4×3 grid exactly. */
const placement: Record<string, string> = {
  smartphones: "lg:col-span-1 lg:row-span-2",
  laptops: "lg:col-span-2",
  tablets: "lg:col-span-1",
  cameras: "lg:col-span-1",
  gaming: "lg:col-span-2",
  audio: "lg:col-span-1",
  smartwatches: "lg:col-span-1",
  accessories: "lg:col-span-2",
};

export function Categories() {
  return (
    <section
      id="categories"
      aria-labelledby="categories-heading"
      className="section-pad relative isolate overflow-hidden"
    >
      <AuroraGlow
        from="violet"
        to="magenta"
        size="54rem"
        opacity={0.2}
        className="left-[-18rem] top-[4rem]"
      />
      <AmbientGlow
        tone="aqua"
        size="42rem"
        opacity={0.16}
        className="right-[-14rem] bottom-[6rem]"
      />

      <div className="container-page">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="categories-heading"
            eyebrow="Marketplace categories"
            titleLines={["Eight categories.", "One considered feed."]}
            description="From flagship handsets to the accessories that finish a desk — every listing arrives with structured detail, not guesswork."
            className="lg:max-w-2xl"
          />
        </div>

        <Stagger
          as="ul"
          stagger={0.06}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:auto-rows-[13.5rem] lg:grid-cols-4"
        >
          {categories.map((category) => {
            const isTall = category.span === "tall";
            const isWide = category.span === "wide";

            return (
              <StaggerItem
                as="li"
                key={category.id}
                className={cn("min-w-0", placement[category.id])}
              >
                <article
                  style={
                    { "--accent": accents[category.accent] } as CSSProperties
                  }
                  className={cn(
                    "panel hairline-top accent-card group relative flex h-full min-h-[11rem] flex-col overflow-hidden p-6",
                    "transition-[transform,border-color] duration-500 ease-out",
                    "hover:-translate-y-1 focus-within:-translate-y-1",
                    isTall && "lg:min-h-full",
                  )}
                >
                  <span
                    aria-hidden="true"
                    data-decorative
                    className="accent-wash absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />

                  <div className="relative flex items-start justify-between gap-4">
                    <span className="accent-icon flex h-11 w-11 items-center justify-center rounded-xl border transition-transform duration-500 group-hover:scale-105">
                      <category.icon
                        className="h-5 w-5"
                        strokeWidth={1.6}
                        aria-hidden="true"
                      />
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 shrink-0 text-slate-dim transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cream"
                      aria-hidden="true"
                    />
                  </div>

                  <div
                    className={cn(
                      "relative mt-auto pt-10",
                      isTall && "lg:pt-16",
                      isWide && "lg:max-w-md",
                    )}
                  >
                    <h3 className="display-3 text-[1.35rem] lg:text-[1.5rem]">
                      {category.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-mist">
                      {category.description}
                    </p>
                  </div>

                  {isTall ? (
                    <category.icon
                      aria-hidden="true"
                      data-decorative
                      style={{ color: "rgb(var(--accent) / 0.09)" }}
                      className="absolute -bottom-8 -right-8 hidden h-40 w-40 lg:block"
                      strokeWidth={0.7}
                    />
                  ) : null}
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
