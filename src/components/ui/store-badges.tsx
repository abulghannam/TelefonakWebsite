import { cn } from "@/lib/cn";
import { site } from "@/lib/site";

function AppleGlyph() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 shrink-0 fill-cream">
      <path d="M17.05 20.28c-.98.95-2.06.8-3.09.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  );
}

function GooglePlayGlyph() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 shrink-0">
      <path
        d="M3.06 2.4c-.35.36-.56.92-.56 1.65v15.9c0 .73.21 1.29.56 1.65l.08.08L12 12.1v-.2L3.14 2.32l-.08.08z"
        fill="#2BB3E5"
      />
      <path
        d="M15.5 15.15 12 12.1v-.2l3.5-3.05.08.05 4.15 2.36c1.19.67 1.19 1.77 0 2.44l-4.15 2.37-.08.08z"
        fill="#F0BC00"
      />
      <path
        d="M15.58 15.1 12 12 3.06 21.6c.39.42 1.03.47 1.75.05l10.77-6.55z"
        fill="#E33629"
      />
      <path
        d="M15.58 8.9 4.81 2.35c-.72-.42-1.36-.37-1.75.05L12 12l3.58-3.1z"
        fill="#31A952"
      />
    </svg>
  );
}

type StoreBadgesProps = {
  className?: string;
  /** Adds a short line explaining the links are not live yet. */
  note?: boolean;
};

/**
 * Store links point at PLACEHOLDER destinations (see `src/lib/site.ts`).
 * Swap `appStoreUrl` / `googlePlayUrl` once the listings are live.
 */
export function StoreBadges({ className, note = false }: StoreBadgesProps) {
  const badgeClass =
    "group inline-flex min-h-13 items-center gap-3 rounded-2xl border border-white/10 " +
    "bg-white/[0.03] px-4 py-2.5 text-left transition-colors duration-300 " +
    "hover:border-white/25 hover:bg-white/[0.07]";

  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <div className="flex flex-wrap items-center gap-3">
        <a
          href={site.appStoreUrl}
          target="_blank"
          rel="noreferrer noopener"
          className={badgeClass}
        >
          <AppleGlyph />
          <span className="flex flex-col leading-tight">
            <span className="text-[0.625rem] uppercase tracking-[0.18em] text-slate-dim">
              Download on the
            </span>
            <span className="font-display text-[0.95rem] font-medium text-cream">
              App Store
            </span>
          </span>
        </a>

        <a
          href={site.googlePlayUrl}
          target="_blank"
          rel="noreferrer noopener"
          className={badgeClass}
        >
          <GooglePlayGlyph />
          <span className="flex flex-col leading-tight">
            <span className="text-[0.625rem] uppercase tracking-[0.18em] text-slate-dim">
              Get it on
            </span>
            <span className="font-display text-[0.95rem] font-medium text-cream">
              Google Play
            </span>
          </span>
        </a>
      </div>

      {note ? (
        <p className="text-xs text-slate-dim">
          Store links are placeholders until the listings go live.
        </p>
      ) : null}
    </div>
  );
}
