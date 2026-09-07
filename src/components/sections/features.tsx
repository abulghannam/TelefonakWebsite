import { BadgeCheck, Bookmark, Camera, Check, Laptop, Smartphone, Star } from "lucide-react";
import type { CSSProperties } from "react";

import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { AmbientGlow, AuroraGlow } from "@/components/ui/ambient-glow";
import { SectionHeading } from "@/components/ui/section-heading";
import { features } from "@/data/features";
import { accents } from "@/lib/accents";
import { cn } from "@/lib/cn";

/** Column spans, hand-tuned so no two rows share the same rhythm. */
const spans: Record<string, string> = {
  "seller-profiles": "sm:col-span-12 lg:col-span-7",
  "detailed-listings": "sm:col-span-12 lg:col-span-5",
  "smart-search": "sm:col-span-6 lg:col-span-4",
  "easy-listing": "sm:col-span-6 lg:col-span-4",
  "secure-messaging": "sm:col-span-12 lg:col-span-4",
  "saved-products": "sm:col-span-12 lg:col-span-12",
};

/** Miniature seller card used inside the lead feature. */
function SellerPreview() {
  return (
    <div
      aria-hidden="true"
      data-decorative
      className="mt-8 rounded-2xl border border-white/8 bg-ink-950/70 p-4"
    >
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#2d3550] to-[#0c0f18] text-xs font-semibold text-cream/85">
          MR
        </span>
        <div className="min-w-0 flex-1">
          <span className="flex items-center gap-1.5 text-sm font-medium text-cream">
            Marta R.
            <BadgeCheck className="h-3.5 w-3.5 text-azure" strokeWidth={2.2} />
          </span>
          <span className="flex items-center gap-1.5 text-xs text-slate-dim">
            <Star className="h-3 w-3 fill-champagne text-champagne" />
            4.9 · 38 listings · Since 2022
          </span>
        </div>
        <span className="hidden rounded-full border border-white/10 px-3 py-1 text-[0.6875rem] text-silver sm:block">
          Replies in a day
        </span>
      </div>
    </div>
  );
}

/** Saved-item strip used inside the closing banner feature. */
function SavedPreview() {
  const items = [
    { icon: Smartphone, label: "Titanium flagship", note: "Price dropped" },
    { icon: Laptop, label: "Creator laptop", note: "Saved 2 days ago" },
    { icon: Camera, label: "Mirrorless body", note: "Saved last week" },
  ];

  return (
    <ul
      aria-hidden="true"
      data-decorative
      className="grid gap-3 sm:grid-cols-3"
    >
      {items.map((item) => (
        <li
          key={item.label}
          className="flex items-center gap-3 rounded-2xl border border-white/8 bg-ink-950/70 px-4 py-3"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.05]">
            <item.icon className="h-4 w-4 text-silver" strokeWidth={1.5} />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm text-cream/90">{item.label}</span>
            <span className="block truncate text-xs text-slate-dim">{item.note}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}

export function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="section-pad relative isolate overflow-hidden"
    >
      <AuroraGlow
        from="gold"
        to="coral"
        size="48rem"
        opacity={0.16}
        className="right-[-14rem] bottom-[6rem]"
      />
      <AmbientGlow
        tone="azure"
        size="44rem"
        opacity={0.2}
        className="left-[-14rem] top-[4rem]"
      />

      <div className="container-page">
        <SectionHeading
          id="features-heading"
          eyebrow="Key features"
          titleLines={["Built for the details", "that decide a", "second-hand purchase."]}
          description="Six capabilities that turn a listing into a decision you feel good about."
          className="max-w-3xl"
        />

        <Stagger
          as="ul"
          stagger={0.07}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-12 lg:mt-16"
        >
          {features.map((feature) => {
            const isHero = feature.emphasis === "hero";
            const isBanner = feature.emphasis === "banner";

            return (
              <StaggerItem as="li" key={feature.id} className={cn("min-w-0", spans[feature.id])}>
                <article
                  style={{ "--accent": accents[feature.accent] } as CSSProperties}
                  className={cn(
                    "panel hairline-top accent-card group relative h-full overflow-hidden p-6 transition-colors duration-500 sm:p-8",
                    isBanner && "lg:flex lg:items-center lg:gap-12",
                  )}
                >
                  <span
                    aria-hidden="true"
                    data-decorative
                    className="accent-wash pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />

                  <div className={cn("relative", isBanner && "lg:max-w-sm lg:shrink-0")}>
                    <span
                      className={cn(
                        "accent-icon flex items-center justify-center rounded-xl border transition-transform duration-500 group-hover:scale-105",
                        isHero ? "h-12 w-12" : "h-11 w-11",
                      )}
                    >
                      <feature.icon
                        className={isHero ? "h-6 w-6" : "h-5 w-5"}
                        strokeWidth={1.6}
                        aria-hidden="true"
                      />
                    </span>

                    <h3
                      className={cn(
                        "display-3 mt-6",
                        isHero
                          ? "text-[1.6rem] sm:text-[2rem]"
                          : "text-[1.25rem] sm:text-[1.4rem]",
                      )}
                    >
                      {feature.title}
                    </h3>

                    <p
                      className={cn(
                        "mt-3 leading-relaxed text-mist",
                        isHero ? "max-w-lg text-[1rem]" : "text-[0.925rem]",
                      )}
                    >
                      {feature.description}
                    </p>

                    {feature.points ? (
                      <ul className="mt-6 flex flex-wrap gap-2">
                        {feature.points.map((point) => (
                          <li
                            key={point}
                            className="inline-flex items-center gap-1.5 rounded-full border border-white/8 bg-white/[0.03] px-3 py-1.5 text-xs text-silver"
                          >
                            <Check
                              className="h-3 w-3"
                              style={{ color: "rgb(var(--accent))" }}
                              strokeWidth={2.5}
                              aria-hidden="true"
                            />
                            {point}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>

                  {isHero ? <SellerPreview /> : null}

                  {isBanner ? (
                    <div className="relative mt-8 min-w-0 flex-1 lg:mt-0">
                      <SavedPreview />
                    </div>
                  ) : null}

                  {isBanner ? (
                    <Bookmark
                      aria-hidden="true"
                      data-decorative
                      className="pointer-events-none absolute -right-6 -top-8 hidden h-32 w-32 text-white/[0.025] lg:block"
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
