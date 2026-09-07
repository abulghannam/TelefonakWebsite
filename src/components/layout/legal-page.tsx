import type { ReactNode } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { AmbientGlow } from "@/components/ui/ambient-glow";

export type LegalSection = {
  heading: string;
  body: string[];
};

type LegalPageProps = {
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
  children?: ReactNode;
};

export function LegalPage({
  title,
  intro,
  updated,
  sections,
  children,
}: LegalPageProps) {
  return (
    <>
      <SiteHeader />
      <main id="main" className="relative isolate overflow-hidden pb-24 pt-36 sm:pt-40">
        <AmbientGlow
          tone="azure"
          size="46rem"
          opacity={0.12}
          className="left-1/2 top-[-18rem] -translate-x-1/2"
        />

        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <span className="eyebrow">Legal</span>
            <h1 className="display-2 mt-5">{title}</h1>
            <p className="lede mt-6">{intro}</p>
            <p className="mt-4 text-xs text-slate-dim">Last updated: {updated}</p>

            <div className="rule mt-12" />

            <div className="mt-12 flex flex-col gap-11">
              {sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="display-3 text-[1.3rem]">{section.heading}</h2>
                  {section.body.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 48)}
                      className="mt-4 text-[0.95rem] leading-relaxed text-mist"
                    >
                      {paragraph}
                    </p>
                  ))}
                </section>
              ))}
            </div>

            {children}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
