"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useCallback, useEffect, useState } from "react";

import { MobileMenu } from "@/components/layout/mobile-menu";
import { Wordmark } from "@/components/ui/wordmark";
import { primaryNav, sectionIdFor } from "@/data/navigation";
import { cn } from "@/lib/cn";
import { EASE_LUXE } from "@/lib/motion";
import { site } from "@/lib/site";

const sectionIds = primaryNav.map(sectionIdFor);

export function SiteHeader() {
  const [condensed, setCondensed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const { scrollY } = useScroll();

  // Motion value event keeps scroll handling off the React render path.
  useMotionValueEvent(scrollY, "change", (latest) => {
    setCondensed((previous) => {
      const next = latest > 24;
      return previous === next ? previous : next;
    });
  });

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (sections.length === 0) return;

    // Track the full intersecting set so the highlight clears once the reader
    // scrolls past the last observed section (into the footer, for example).
    const intersecting = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) intersecting.add(entry.target.id);
          else intersecting.delete(entry.target.id);
        }
        const next = sectionIds.find((id) => intersecting.has(id)) ?? null;
        setActiveSection(next);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-40"
        initial={{ y: -28, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: EASE_LUXE, delay: 0.1 }}
      >
        {/* The blurred plate fades in rather than toggling, so there is no jump. */}
        <div
          aria-hidden="true"
          data-decorative
          className={cn(
            "absolute inset-0 border-b transition-[opacity,background-color] duration-500",
            condensed
              ? "border-white/8 bg-obsidian/72 opacity-100 backdrop-blur-xl"
              : "border-transparent bg-transparent opacity-0",
          )}
        />

        <div className="container-page relative flex items-center justify-between gap-6 py-4">
          <Wordmark />

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {primaryNav.map((link) => {
                const isActive = activeSection === sectionIdFor(link);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={isActive ? "true" : undefined}
                      className={cn(
                        "relative inline-flex min-h-10 items-center rounded-full px-4 text-sm transition-colors duration-300",
                        isActive ? "text-cream" : "text-mist hover:text-cream",
                      )}
                    >
                      {link.label}
                      {isActive ? (
                        <motion.span
                          layoutId="nav-active"
                          className="absolute inset-0 -z-10 rounded-full border border-white/10 bg-white/[0.05]"
                          transition={{ duration: 0.4, ease: EASE_LUXE }}
                        />
                      ) : null}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={site.appStoreUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="hidden min-h-10 items-center rounded-full bg-cream px-5 text-sm font-medium text-obsidian transition-colors duration-300 hover:bg-white sm:inline-flex"
            >
              Download App
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label="Open menu"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-cream transition-colors hover:bg-white/[0.08] lg:hidden"
            >
              <Menu className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu open={menuOpen} onClose={closeMenu} />
    </>
  );
}
