"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { X } from "lucide-react";

import { StoreBadges } from "@/components/ui/store-badges";
import { Wordmark } from "@/components/ui/wordmark";
import { primaryNav } from "@/data/navigation";
import { EASE_LUXE } from "@/lib/motion";
import { site } from "@/lib/site";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

const panel = {
  hidden: { opacity: 0, y: -12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE_LUXE } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.22, ease: EASE_LUXE } },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Lock background scroll, move focus into the dialog, and trap it there.
  useEffect(() => {
    if (!open) return;

    const { body } = document;
    const previousOverflow = body.style.overflow;
    body.style.overflow = "hidden";
    closeRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          ref={panelRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-50 flex flex-col bg-obsidian/97 lg:hidden"
          variants={panel}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="flex items-center justify-between px-5 py-4 sm:px-8">
            <Wordmark />
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-cream transition-colors hover:bg-white/[0.08]"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
            </button>
          </div>

          <motion.nav
            aria-label="Mobile"
            className="flex flex-1 flex-col justify-center gap-1 px-5 sm:px-8"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.06, delayChildren: 0.08 }}
          >
            {primaryNav.map((link) => (
              <motion.div key={link.href} variants={item}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="block border-b border-white/6 py-5 font-display text-3xl font-medium tracking-[-0.03em] text-cream transition-colors hover:text-azure"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          <div className="flex flex-col gap-5 px-5 pb-10 sm:px-8">
            <StoreBadges />
            <a
              href={site.appStoreUrl}
              target="_blank"
              rel="noreferrer noopener"
              onClick={onClose}
              className="flex min-h-13 items-center justify-center rounded-full bg-cream text-[0.95rem] font-medium text-obsidian"
            >
              Download the App
            </a>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
