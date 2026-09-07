"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { useCallback, useRef } from "react";

import { PhoneFrame } from "@/components/device/phone-frame";
import {
  CreateScreen,
  HomeScreen,
  ProductScreen,
  SavedScreen,
  SearchScreen,
  SellerScreen,
} from "@/components/device/screens";
import { AuroraGlow } from "@/components/ui/ambient-glow";
import { SectionHeading } from "@/components/ui/section-heading";
import { EASE_LUXE, viewportOnce } from "@/lib/motion";
import { site } from "@/lib/site";

type ShowcaseScreen = {
  id: string;
  title: string;
  caption: string;
  render: () => React.ReactElement;
};

const screens: ShowcaseScreen[] = [
  {
    id: "home",
    title: "Home marketplace",
    caption: "A calm feed of recent listings, tuned to what you browse.",
    render: () => <HomeScreen />,
  },
  {
    id: "product",
    title: "Product details",
    caption: "Condition, specifications and seller context on one screen.",
    render: () => <ProductScreen />,
  },
  {
    id: "search",
    title: "Search and filters",
    caption: "Narrow by condition, storage and price until it fits.",
    render: () => <SearchScreen />,
  },
  {
    id: "seller",
    title: "Seller profile",
    caption: "History, ratings and everything else they have listed.",
    render: () => <SellerScreen />,
  },
  {
    id: "create",
    title: "Create a listing",
    caption: "Guided fields that ask for what buyers want to know.",
    render: () => <CreateScreen />,
  },
  {
    id: "saved",
    title: "Saved products",
    caption: "Track the devices you are watching and their price moves.",
    render: () => <SavedScreen />,
  },
];

export function AppShowcase() {
  const railRef = useRef<HTMLDivElement>(null);

  const scrollByCard = useCallback((direction: 1 | -1) => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelector<HTMLElement>("[data-showcase-card]");
    const amount = card ? card.offsetWidth + 32 : rail.clientWidth * 0.6;
    rail.scrollBy({ left: amount * direction, behavior: "smooth" });
  }, []);

  return (
    <section
      id="showcase"
      aria-labelledby="showcase-heading"
      className="section-pad relative isolate overflow-hidden"
    >
      <AuroraGlow
        from="violet"
        to="azure"
        size="62rem"
        opacity={0.24}
        className="left-1/2 top-[2rem] -translate-x-1/2"
      />

      <div className="container-page">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="showcase-heading"
            eyebrow="Inside the app"
            titleLines={["Every screen built", "around one question:", "can I trust this?"]}
            description={`Representative interface previews from ${site.name}. Final visuals may differ as the app evolves.`}
            className="lg:max-w-2xl"
          />

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Show previous screens"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-silver transition-colors hover:border-white/25 hover:text-cream"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Show next screens"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-silver transition-colors hover:border-white/25 hover:text-cream"
            >
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Full-bleed rail so devices can run past the container edge. */}
      <div
        ref={railRef}
        role="region"
        aria-label="Application screen previews"
        tabIndex={0}
        className="no-scrollbar mask-fade-x mt-14 flex snap-x snap-mandatory gap-8 overflow-x-auto scroll-smooth px-5 pb-4 sm:px-8 lg:mt-16 lg:px-12"
      >
        {screens.map((screen, index) => (
          <motion.figure
            key={screen.id}
            data-showcase-card
            className={`w-[15rem] shrink-0 snap-center sm:w-[16.5rem] ${
              // Staggered baseline uses the standalone `translate` property so it
              // composes with Motion's `transform` instead of fighting it.
              index % 2 === 1 ? "lg:translate-y-8" : ""
            }`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{
              duration: 0.8,
              ease: EASE_LUXE,
              delay: Math.min(index, 3) * 0.08,
            }}
          >
            <PhoneFrame
              label={`${site.name} app — ${screen.title.toLowerCase()}`}
              detailed={false}
            >
              {screen.render()}
            </PhoneFrame>
            <figcaption className="mt-6 px-1">
              <span className="font-display text-[0.95rem] font-medium text-cream">
                {screen.title}
              </span>
              <span className="mt-1 block text-sm leading-relaxed text-mist">
                {screen.caption}
              </span>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
