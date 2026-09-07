import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type PhoneFrameProps = {
  children: ReactNode;
  className?: string;
  /** Screen-reader description of what the mockup is showing. */
  label: string;
  /** Adds the metallic side buttons — omit on very small mockups. */
  detailed?: boolean;
};

/**
 * Milled-aluminium phone shell. Fixed aspect ratio prevents layout shift,
 * and the interior is a plain scroll-free box so screens can be composed
 * from ordinary markup.
 */
export function PhoneFrame({
  children,
  className,
  label,
  detailed = true,
}: PhoneFrameProps) {
  return (
    <div
      className={cn("relative aspect-[9/19.2] w-full select-none", className)}
      role="img"
      aria-label={label}
    >
      {/* Outer metal rail */}
      <div className="absolute inset-0 z-10 rounded-[13%/6.2%] bg-gradient-to-br from-[#5c626f] via-[#1b1e27] to-[#43485a] p-[1.5px] shadow-[0_40px_90px_-30px_rgba(0,0,0,0.9)]">
        {/* Inner bezel */}
        <div className="relative h-full w-full overflow-hidden rounded-[12.6%/6%] bg-[#05060c] p-[2.5%]">
          {/* Screen. Content is decorative: the frame itself carries the label. */}
          <div
            aria-hidden="true"
            className="relative h-full w-full overflow-hidden rounded-[10.5%/5.1%] bg-ink-950"
          >
            {children}

            {/* Dynamic-island style cutout */}
            <div
              aria-hidden="true"
              data-decorative
              className="absolute left-1/2 top-[1.4%] h-[3.1%] w-[30%] -translate-x-1/2 rounded-full bg-[#04050a]"
            />

            {/* Screen glare */}
            <div
              aria-hidden="true"
              data-decorative
              className="absolute inset-0 rounded-[10.5%/5.1%] opacity-60"
              style={{
                background:
                  "linear-gradient(128deg, rgba(255,255,255,0.09) 0%, transparent 32%, transparent 68%, rgba(255,255,255,0.04) 100%)",
              }}
            />
          </div>
        </div>
      </div>

      {detailed ? (
        <>
          <span
            aria-hidden="true"
            data-decorative
            className="absolute -left-[0.7%] top-[19%] h-[5.5%] w-[1%] rounded-l-full bg-gradient-to-b from-[#3f4451] to-[#20242e]"
          />
          <span
            aria-hidden="true"
            data-decorative
            className="absolute -left-[0.7%] top-[28%] h-[9%] w-[1%] rounded-l-full bg-gradient-to-b from-[#3f4451] to-[#20242e]"
          />
          <span
            aria-hidden="true"
            data-decorative
            className="absolute -right-[0.7%] top-[26%] h-[12%] w-[1%] rounded-r-full bg-gradient-to-b from-[#3f4451] to-[#20242e]"
          />
        </>
      ) : null}
    </div>
  );
}
