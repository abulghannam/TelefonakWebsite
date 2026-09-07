import type { ReactNode } from "react";

import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow: string;
  /** Each string becomes its own masked line. */
  titleLines: string[];
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  headingClassName?: string;
  id?: string;
};

export function SectionHeading({
  eyebrow,
  titleLines,
  description,
  align = "left",
  className,
  headingClassName,
  id,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        centered && "items-center text-center",
        className,
      )}
    >
      <Reveal as="div" className="flex items-center gap-3">
        <span
          aria-hidden="true"
          data-decorative
          className="h-px w-8 bg-gradient-to-r from-transparent to-white/35"
        />
        <span className="eyebrow">{eyebrow}</span>
        {centered ? (
          <span
            aria-hidden="true"
            data-decorative
            className="h-px w-8 bg-gradient-to-l from-transparent to-white/35"
          />
        ) : null}
      </Reveal>

      <h2 id={id} className={cn("display-2 max-w-3xl", centered && "mx-auto", headingClassName)}>
        <TextReveal lines={titleLines} />
      </h2>

      {description ? (
        <Reveal as="p" delay={0.12} className={cn("lede max-w-xl", centered && "mx-auto")}>
          {description}
        </Reveal>
      ) : null}
    </div>
  );
}
