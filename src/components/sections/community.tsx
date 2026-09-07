import { Quote } from "lucide-react";

import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { AuroraGlow } from "@/components/ui/ambient-glow";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/cn";

/**
 * Testimonials are PLACEHOLDER content held in `src/data/testimonials.ts`.
 * Replace each entry with a real, consented quote before launch — the layout
 * adapts to any number of entries.
 */
export function Community() {
  return (
    <section
      id="community"
      aria-labelledby="community-heading"
      className="section-pad relative isolate overflow-hidden"
    >
      <AuroraGlow
        from="magenta"
        to="violet"
        size="50rem"
        opacity={0.2}
        className="right-[-16rem] top-[6rem]"
      />

      <div className="container-page">
        <SectionHeading
          id="community-heading"
          eyebrow="Community"
          titleLines={["People already", "trading well."]}
          description="Buyers and sellers describing how a considered marketplace changes the experience."
          className="max-w-2xl"
        />

        <Stagger
          as="ul"
          stagger={0.09}
          className="mt-14 grid gap-5 md:grid-cols-3 lg:mt-16"
        >
          {testimonials.map((testimonial, index) => (
            <StaggerItem
              as="li"
              key={testimonial.id}
              className={cn("min-w-0", index === 1 && "md:mt-10")}
            >
              <figure className="panel hairline-top flex h-full flex-col p-7 transition-colors duration-500 hover:border-white/16">
                <Quote
                  className="h-5 w-5 text-slate-dim"
                  strokeWidth={1.6}
                  aria-hidden="true"
                />
                <blockquote className="mt-5 flex-1 text-[0.975rem] leading-relaxed text-silver">
                  {testimonial.quote}
                </blockquote>

                <figcaption className="mt-7 flex items-center gap-3 border-t border-white/8 pt-6">
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-cream/85"
                    style={{
                      backgroundImage:
                        "linear-gradient(140deg, #2d3550 0%, #171b28 60%, #0c0f18 100%)",
                    }}
                  >
                    {testimonial.initials}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-medium text-cream">
                      {testimonial.name}
                    </span>
                    <span className="block truncate text-xs text-slate-dim">
                      {testimonial.role} · {testimonial.location}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>

        <p className="mt-8 text-xs text-slate-dim">
          Placeholder testimonials shown for layout purposes.
        </p>
      </div>
    </section>
  );
}
