import { BadgeCheck, Gamepad2, Headphones, Smartphone, Watch } from "lucide-react";

import {
  Avatar,
  Chip,
  Price,
  ProductThumb,
  Screen,
  StatusBar,
  TabBar,
  type ThumbAccent,
} from "@/components/device/screen-kit";

const stats = [
  { label: "Listings", value: "38" },
  { label: "Rating", value: "4.9" },
  { label: "Member since", value: "2022" },
];

const items = [
  { name: "Handheld console", price: "€180", icon: Gamepad2, accent: "violet" },
  { name: "Wireless earbuds", price: "€95", icon: Headphones, accent: "azure" },
  { name: "Smartwatch, 45mm", price: "€165", icon: Watch, accent: "silver" },
  { name: "Backup phone", price: "€240", icon: Smartphone, accent: "champagne" },
] satisfies { name: string; price: string; icon: typeof Smartphone; accent: ThumbAccent }[];

export function SellerScreen() {
  return (
    <Screen>
      <StatusBar />

      <div className="flex flex-col items-center px-[6cqw] pt-[5cqw] text-center">
        <Avatar initials="MR" className="h-[16cqw] w-[16cqw] text-[5cqw]" />
        <span className="mt-[2.6cqw] flex items-center gap-[1.6cqw] text-[4cqw] font-semibold tracking-[-0.02em]">
          Marta R.
          <BadgeCheck
            className="h-[4cqw] w-[4cqw] text-azure"
            strokeWidth={2.2}
            aria-hidden="true"
          />
        </span>
        <span className="mt-[1cqw] text-[2.8cqw] text-cream/45">
          Profile verified · Usually replies in a day
        </span>
      </div>

      <div className="mx-[6cqw] mt-[4cqw] grid grid-cols-3 divide-x divide-white/8 rounded-[3.4cqw] border border-white/8 bg-white/[0.03] py-[3cqw]">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-[0.6cqw]">
            <span className="text-[3.6cqw] font-semibold text-cream">{stat.value}</span>
            <span className="text-[2.3cqw] uppercase tracking-[0.1em] text-cream/35">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-[4cqw] flex gap-[2cqw] px-[6cqw]">
        <Chip active>Listings</Chip>
        <Chip>Reviews</Chip>
        <Chip>About</Chip>
      </div>

      <div className="mt-[3cqw] grid grid-cols-2 gap-[2.6cqw] px-[6cqw]">
        {items.map((item) => (
          <div
            key={item.name}
            className="overflow-hidden rounded-[3cqw] border border-white/8 bg-white/[0.03]"
          >
            <ProductThumb
              icon={item.icon}
              accent={item.accent}
              className="h-[18cqw] w-full"
              iconClassName="h-[7cqw] w-[7cqw]"
            />
            <div className="flex items-center justify-between gap-[1.6cqw] p-[2.4cqw]">
              <span className="truncate text-[2.6cqw] text-cream/70">{item.name}</span>
              <Price value={item.price} className="shrink-0 text-[2.9cqw]" />
            </div>
          </div>
        ))}
      </div>

      <TabBar active={4} />
    </Screen>
  );
}
