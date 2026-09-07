export type NavLink = {
  label: string;
  href: string;
};

/**
 * Ordered to match the on-page scroll sequence. Hrefs are root-relative so the
 * same links work from the legal pages.
 */
export const primaryNav: NavLink[] = [
  { label: "Categories", href: "/#categories" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Features", href: "/#features" },
  { label: "Trust & Safety", href: "/#trust" },
];

/** Section id a nav link points at, e.g. "/#features" → "features". */
export function sectionIdFor(link: NavLink): string {
  return link.href.split("#")[1] ?? "";
}
