import Link from "next/link";

import { cn } from "@/lib/cn";
import { site } from "@/lib/site";

/**
 * Brand mark: an open cycle ring (a device moving to its next owner)
 * enclosing a "T". Pure SVG so it stays crisp at every size.
 */
export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className={cn("h-8 w-8", className)}
      fill="none"
    >
      <defs>
        <linearGradient id="tk-ring" x1="4" y1="3" x2="28" y2="29" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F4F4F2" />
          <stop offset="0.55" stopColor="#8D94A6" />
          <stop offset="1" stopColor="#5B8CFF" />
        </linearGradient>
      </defs>
      <rect
        x="0.75"
        y="0.75"
        width="30.5"
        height="30.5"
        rx="10"
        stroke="url(#tk-ring)"
        strokeOpacity="0.35"
        strokeWidth="1.5"
      />
      <path
        d="M23.6 12.4A8.6 8.6 0 1 1 16 7.4"
        stroke="url(#tk-ring)"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M16 5.1v4.6l3.7-2.3z"
        fill="url(#tk-ring)"
      />
      <path
        d="M11.9 14.4h8.2M16 14.4v7.3"
        stroke="#F4F4F2"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Wordmark({
  className,
  markClassName,
}: {
  className?: string;
  markClassName?: string;
}) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-lg py-1 pr-2 transition-opacity duration-300 hover:opacity-90",
        className,
      )}
      aria-label={`${site.name} — home`}
    >
      <BrandMark className={markClassName} />
      <span className="font-display text-lg font-semibold tracking-[-0.02em] text-metal">
        {site.name}
      </span>
    </Link>
  );
}
