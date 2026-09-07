import Link from "next/link";

import { BrandMark } from "@/components/ui/wordmark";
import { footerColumns, socialLinks } from "@/data/footer";
import { site } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative isolate overflow-hidden border-t border-white/8 bg-ink-950">
      <div className="container-page py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1.4fr)] lg:gap-20">
          <div className="max-w-sm">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5"
              aria-label={`${site.name} — home`}
            >
              <BrandMark />
              <span className="font-display text-lg font-semibold tracking-[-0.02em] text-metal">
                {site.name}
              </span>
            </Link>

            <p className="mt-5 text-sm leading-relaxed text-mist">
              A curated marketplace app for second-hand electronics. Discover
              trusted listings, sell what you no longer use, and give good
              hardware another life.
            </p>

            <ul className="mt-7 flex flex-wrap gap-2">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex min-h-10 items-center rounded-full border border-white/10 bg-white/[0.03] px-4 text-xs text-silver transition-colors hover:border-white/25 hover:text-cream"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h2 className="eyebrow font-sans">{column.title}</h2>
                <ul className="mt-5 flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      {link.external ? (
                        <a
                          href={link.href}
                          className="text-sm text-mist transition-colors hover:text-cream"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-sm text-mist transition-colors hover:text-cream"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="rule mt-14" />

        <div className="mt-7 flex flex-col gap-4 text-xs text-slate-dim sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.company}. All rights reserved.
          </p>
          <p className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a
              href={`mailto:${site.email}`}
              className="transition-colors hover:text-cream"
            >
              {site.email}
            </a>
            <Link href="/privacy" className="transition-colors hover:text-cream">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-cream">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
