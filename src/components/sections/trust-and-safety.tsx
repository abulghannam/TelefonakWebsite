import { Info } from "lucide-react";
import type { CSSProperties } from "react";

import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { AuroraGlow } from "@/components/ui/ambient-glow";
import { SectionHeading } from "@/components/ui/section-heading";
import { trustPillars } from "@/data/trust";
import { accents } from "@/lib/accents";
import { site } from "@/lib/site";

/** Layered shield emblem — concentric rings suggest checks, not guarantees. */
function ShieldEmblem() {
  return (
    <svg
      viewBox="0 0 200 200"
      aria-hidden="true"
      data-decorative
      className="h-full w-full"
      fill="none"
    >
      <defs>
        <linearGradient id="shield-body" x1="40" y1="20" x2="160" y2="182">
          <stop stopColor="#1a2033" />
          <stop offset="1" stopColor="#07090f" />
        </linearGradient>
        <linearGradient id="shield-edge" x1="45" y1="24" x2="155" y2="180">
          <stop stopColor="#f4f4f2" stopOpacity="0.7" />
          <stop offset="0.5" stopColor="#5b8cff" stopOpacity="0.5" />
          <stop offset="1" stopColor="#9b7bff" stopOpacity="0.25" />
        </linearGradient>
      </defs>

      {[74, 58, 42].map((radius, index) => (
        <circle
          key={radius}
          cx="100"
          cy="100"
          r={radius}
          stroke="#ffffff"
          strokeOpacity={0.06 - index * 0.012}
          strokeWidth="1"
        />
      ))}

      <path
        d="M100 26 158 48v50c0 33-24 60-58 76-34-16-58-43-58-76V48z"
        fill="url(#shield-body)"
        stroke="url(#shield-edge)"
        strokeWidth="1.5"
      />
      <path
        d="M78 100.5 94 117l30-34"
        stroke="#5b8cff"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M100 26 158 48v50c0 33-24 60-58 76"
        stroke="#ffffff"
        strokeOpacity="0.12"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function TrustAndSafety() {
  return (
    <section
      id="trust"
      aria-labelledby="trust-heading"
      className="section-pad relative isolate overflow-hidden"
    >
      <AuroraGlow
        from="aqua"
        to="azure"
        size="56rem"
        opacity={0.22}
        className="left-[-16rem] top-[10rem]"
      />

      <div className="container-page">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              id="trust-heading"
              eyebrow="Trust and safety"
              titleLines={["Second-hand", "without the", "second-guessing."]}
              description="Buying used hardware carries real risk. Our job is to remove as much of the unknown as possible before you commit."
            />

            <Reveal delay={0.15} className="relative mt-12 hidden max-w-[19rem] lg:block">
              <AuroraGlow
                from="aqua"
                to="azure"
                size="26rem"
                opacity={0.34}
                className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              />
              <ShieldEmblem />
            </Reveal>
          </div>

          <div>
            <Stagger as="ul" stagger={0.06} className="flex flex-col">
              {trustPillars.map((pillar) => (
                <StaggerItem
                  as="li"
                  key={pillar.id}
                  className="group border-t border-white/8 py-7 first:border-t-0 first:pt-0"
                >
                  <div
                    style={
                      { "--accent": accents[pillar.accent] } as CSSProperties
                    }
                    className="flex gap-5"
                  >
                    <span className="accent-icon mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-transform duration-500 group-hover:scale-105">
                      <pillar.icon className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-display text-[1.1rem] font-medium tracking-[-0.02em] text-cream">
                        {pillar.title}
                      </h3>
                      <p className="mt-2 text-[0.925rem] leading-relaxed text-mist">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal
              delay={0.1}
              className="panel mt-10 flex gap-4 p-6"
            >
              <Info
                className="mt-0.5 h-5 w-5 shrink-0 text-slate-dim"
                strokeWidth={1.6}
                aria-hidden="true"
              />
              <p className="text-sm leading-relaxed text-mist">
                {site.name} provides tools, guidance and moderation to reduce risk
                and increase transparency. Devices are listed and sold by
                individual members, so we cannot guarantee any individual product
                or transaction. Always inspect a device before completing a
                purchase.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
