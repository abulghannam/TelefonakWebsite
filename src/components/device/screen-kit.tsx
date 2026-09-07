import {
  Battery,
  Bookmark,
  Home,
  PlusSquare,
  Search,
  User,
  Wifi,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

/**
 * Building blocks for the in-device placeholder UI.
 *
 * Every dimension is expressed in `cqw` (container query width) units so a
 * screen renders identically whether the phone mockup is 180px or 380px wide.
 * The parent `<Screen>` establishes the container.
 */

export function Screen({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "@container relative flex h-full w-full flex-col overflow-hidden bg-ink-950 text-cream",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function StatusBar({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-between px-[6cqw] pb-[1cqw] pt-[3.4cqw] text-[3cqw] font-medium text-cream/80",
        className,
      )}
    >
      <span>9:41</span>
      <span className="flex items-center gap-[1.4cqw]">
        <svg viewBox="0 0 18 12" className="h-[3cqw] w-[4.4cqw] fill-cream/80">
          <rect x="0" y="8" width="3" height="4" rx="1" />
          <rect x="5" y="5.5" width="3" height="6.5" rx="1" />
          <rect x="10" y="3" width="3" height="9" rx="1" />
          <rect x="15" y="0" width="3" height="12" rx="1" opacity="0.45" />
        </svg>
        <Wifi className="h-[3.2cqw] w-[3.2cqw]" strokeWidth={2.4} />
        <Battery className="h-[3.6cqw] w-[3.6cqw]" strokeWidth={2} />
      </span>
    </div>
  );
}

const accentMap = {
  azure: "from-[#2b3f7a] via-[#131a2e] to-[#0a0d18]",
  violet: "from-[#3b2c66] via-[#181430] to-[#0a0916]",
  champagne: "from-[#4a4030] via-[#1e1a14] to-[#0d0b08]",
  silver: "from-[#3a4050] via-[#171a22] to-[#0a0c12]",
} as const;

export type ThumbAccent = keyof typeof accentMap;

/** Abstract product tile — a gradient plate with the device silhouette. */
export function ProductThumb({
  icon: Icon,
  accent = "azure",
  className,
  iconClassName,
}: {
  icon: LucideIcon;
  accent?: ThumbAccent;
  className?: string;
  iconClassName?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden bg-gradient-to-br",
        accentMap[accent],
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
      />
      <Icon
        className={cn("text-cream/70", iconClassName)}
        strokeWidth={1.2}
        aria-hidden="true"
      />
    </div>
  );
}

export function Chip({
  children,
  active = false,
  className,
}: {
  children: ReactNode;
  active?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "shrink-0 whitespace-nowrap rounded-full px-[3cqw] py-[1.4cqw] text-[2.9cqw] font-medium",
        active
          ? "bg-cream text-obsidian"
          : "border border-white/10 bg-white/[0.04] text-cream/70",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function ScreenHeading({
  title,
  action,
}: {
  title: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex items-center justify-between px-[6cqw] pb-[3cqw] pt-[3cqw]">
      {/* Not a real heading — the mockup is exposed as a single labelled image. */}
      <span className="text-[5cqw] font-semibold tracking-[-0.03em] text-cream">
        {title}
      </span>
      {action}
    </div>
  );
}

export function SearchField({ value }: { value: string }) {
  return (
    <div className="mx-[6cqw] flex items-center gap-[2.4cqw] rounded-full border border-white/10 bg-white/[0.05] px-[3.6cqw] py-[2.4cqw]">
      <Search className="h-[3.6cqw] w-[3.6cqw] text-cream/45" strokeWidth={2.2} />
      <span className="text-[3.1cqw] text-cream/55">{value}</span>
    </div>
  );
}

export function Price({ value, className }: { value: string; className?: string }) {
  return (
    <span className={cn("font-semibold tracking-[-0.02em] text-cream", className)}>
      {value}
    </span>
  );
}

export function ConditionTag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-[1.2cqw] rounded-full bg-azure/15 px-[2.4cqw] py-[1cqw] text-[2.5cqw] font-medium text-[#9db6ff]">
      <span className="h-[1.2cqw] w-[1.2cqw] rounded-full bg-[#9db6ff]" />
      {label}
    </span>
  );
}

export function Avatar({
  initials,
  className,
}: {
  initials: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "flex items-center justify-center rounded-full font-semibold text-cream/85",
        className,
      )}
      style={{
        backgroundImage:
          "linear-gradient(140deg, #2d3550 0%, #171b28 60%, #0c0f18 100%)",
      }}
    >
      {initials}
    </span>
  );
}

const tabs: { icon: LucideIcon; label: string }[] = [
  { icon: Home, label: "Home" },
  { icon: Search, label: "Search" },
  { icon: PlusSquare, label: "Sell" },
  { icon: Bookmark, label: "Saved" },
  { icon: User, label: "Profile" },
];

export function TabBar({ active = 0 }: { active?: number }) {
  return (
    <div className="mt-auto shrink-0 border-t border-white/8 bg-ink-900/90 px-[5cqw] pb-[4cqw] pt-[2.6cqw]">
      <div className="flex items-center justify-between">
        {tabs.map((tab, index) => (
          <span
            key={tab.label}
            className={cn(
              "flex flex-col items-center gap-[1cqw]",
              index === active ? "text-cream" : "text-cream/35",
            )}
          >
            <tab.icon className="h-[4.4cqw] w-[4.4cqw]" strokeWidth={index === active ? 2.3 : 1.8} />
            <span className="text-[2.2cqw] font-medium">{tab.label}</span>
          </span>
        ))}
      </div>
      <span className="mx-auto mt-[2.6cqw] block h-[0.8cqw] w-[26%] rounded-full bg-cream/25" />
    </div>
  );
}
