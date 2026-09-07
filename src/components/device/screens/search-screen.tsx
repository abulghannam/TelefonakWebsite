import { Camera, Laptop, Smartphone, Tablet } from "lucide-react";

import {
  Chip,
  Price,
  ProductThumb,
  Screen,
  ScreenHeading,
  SearchField,
  StatusBar,
  TabBar,
  type ThumbAccent,
} from "@/components/device/screen-kit";

const results = [
  { name: "Compact flagship", meta: "128 GB · Good", price: "€429", icon: Smartphone, accent: "azure" },
  { name: "Ultrabook 13\"", meta: "512 GB · Excellent", price: "€760", icon: Laptop, accent: "silver" },
  { name: "Tablet + pencil", meta: "Very good", price: "€310", icon: Tablet, accent: "violet" },
  { name: "Compact camera", meta: "Boxed", price: "€245", icon: Camera, accent: "champagne" },
] satisfies { name: string; meta: string; price: string; icon: typeof Smartphone; accent: ThumbAccent }[];

export function SearchScreen() {
  return (
    <Screen>
      <StatusBar />
      <ScreenHeading title="Search" />
      <SearchField value="mirrorless camera" />

      <div className="mx-[6cqw] mt-[3.4cqw] rounded-[3.6cqw] border border-white/8 bg-white/[0.03] p-[3.4cqw]">
        <span className="text-[2.4cqw] uppercase tracking-[0.16em] text-cream/35">
          Condition
        </span>
        <div className="mt-[2cqw] flex flex-wrap gap-[1.6cqw]">
          <Chip active>Excellent</Chip>
          <Chip>Very good</Chip>
          <Chip>Good</Chip>
        </div>

        <span className="mt-[3.4cqw] block text-[2.4cqw] uppercase tracking-[0.16em] text-cream/35">
          Price range
        </span>
        <div className="mt-[2.4cqw]">
          <div className="relative h-[1cqw] w-full rounded-full bg-white/10">
            <span className="absolute left-[14%] right-[32%] top-0 h-full rounded-full bg-azure" />
            <span className="absolute left-[14%] top-1/2 h-[4cqw] w-[4cqw] -translate-x-1/2 -translate-y-1/2 rounded-full border-[0.6cqw] border-ink-950 bg-cream" />
            <span className="absolute right-[32%] top-1/2 h-[4cqw] w-[4cqw] translate-x-1/2 -translate-y-1/2 rounded-full border-[0.6cqw] border-ink-950 bg-cream" />
          </div>
          <div className="mt-[2cqw] flex justify-between text-[2.5cqw] text-cream/45">
            <span>€150</span>
            <span>€900</span>
          </div>
        </div>
      </div>

      <div className="mt-[3.4cqw] flex items-baseline justify-between px-[6cqw]">
        <span className="text-[3.2cqw] font-semibold text-cream">142 results</span>
        <span className="text-[2.7cqw] text-cream/45">Newest first</span>
      </div>

      <div className="mt-[2.4cqw] flex flex-col gap-[2.4cqw] px-[6cqw]">
        {results.map((item) => (
          <div
            key={item.name}
            className="flex items-center gap-[3cqw] rounded-[3.2cqw] border border-white/8 bg-white/[0.03] p-[2.4cqw]"
          >
            <ProductThumb
              icon={item.icon}
              accent={item.accent}
              className="h-[12cqw] w-[12cqw] shrink-0 rounded-[2.4cqw]"
              iconClassName="h-[5.4cqw] w-[5.4cqw]"
            />
            <div className="min-w-0 flex-1">
              <span className="block truncate text-[3cqw] font-medium text-cream/90">
                {item.name}
              </span>
              <span className="block truncate text-[2.5cqw] text-cream/45">
                {item.meta}
              </span>
            </div>
            <Price value={item.price} className="text-[3.2cqw]" />
          </div>
        ))}
      </div>

      <TabBar active={1} />
    </Screen>
  );
}
