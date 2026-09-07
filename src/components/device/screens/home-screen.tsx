import { Camera, Headphones, Laptop, Smartphone, SlidersHorizontal } from "lucide-react";

import {
  Avatar,
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

const listings = [
  { name: "Titanium flagship", meta: "256 GB · Excellent", price: "€689", icon: Smartphone, accent: "azure" },
  { name: "14\" creator laptop", meta: "16 GB · Very good", price: "€1,140", icon: Laptop, accent: "violet" },
  { name: "Mirrorless body", meta: "Low shutter", price: "€820", icon: Camera, accent: "champagne" },
  { name: "Studio headphones", meta: "Like new", price: "€215", icon: Headphones, accent: "silver" },
] satisfies { name: string; meta: string; price: string; icon: typeof Smartphone; accent: ThumbAccent }[];

export function HomeScreen() {
  return (
    <Screen>
      <StatusBar />
      <ScreenHeading
        title="Discover"
        action={<Avatar initials="AO" className="h-[8cqw] w-[8cqw] text-[3cqw]" />}
      />
      <SearchField value="Search phones, laptops, cameras…" />

      <div className="no-scrollbar mt-[3.4cqw] flex gap-[2cqw] overflow-hidden px-[6cqw]">
        <Chip active>All</Chip>
        <Chip>Phones</Chip>
        <Chip>Laptops</Chip>
        <Chip>Audio</Chip>
      </div>

      <div className="mt-[4.6cqw] flex items-baseline justify-between px-[6cqw]">
        <span className="text-[3.4cqw] font-semibold text-cream">Fresh listings</span>
        <span className="flex items-center gap-[1.2cqw] text-[2.7cqw] text-cream/45">
          <SlidersHorizontal className="h-[3cqw] w-[3cqw]" strokeWidth={2} />
          Filter
        </span>
      </div>

      <div className="mt-[2.6cqw] grid grid-cols-2 gap-[3cqw] px-[6cqw]">
        {listings.map((item) => (
          <div
            key={item.name}
            className="overflow-hidden rounded-[3.4cqw] border border-white/8 bg-white/[0.03]"
          >
            <ProductThumb
              icon={item.icon}
              accent={item.accent}
              className="h-[22cqw] w-full"
              iconClassName="h-[8cqw] w-[8cqw]"
            />
            <div className="flex flex-col gap-[0.8cqw] p-[2.8cqw]">
              <span className="truncate text-[2.9cqw] font-medium text-cream/90">
                {item.name}
              </span>
              <span className="truncate text-[2.4cqw] text-cream/45">{item.meta}</span>
              <Price value={item.price} className="mt-[0.6cqw] text-[3.4cqw]" />
            </div>
          </div>
        ))}
      </div>

      <TabBar active={0} />
    </Screen>
  );
}
