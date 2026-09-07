import { Bell, Camera, Gamepad2, Heart, Laptop, Smartphone } from "lucide-react";

import {
  Price,
  ProductThumb,
  Screen,
  ScreenHeading,
  StatusBar,
  TabBar,
  type ThumbAccent,
} from "@/components/device/screen-kit";

const saved = [
  { name: "Titanium flagship", meta: "Price dropped €40", price: "€689", icon: Smartphone, accent: "azure", alert: true },
  { name: "14\" creator laptop", meta: "Saved 2 days ago", price: "€1,140", icon: Laptop, accent: "violet", alert: false },
  { name: "Mirrorless body", meta: "Saved last week", price: "€820", icon: Camera, accent: "champagne", alert: false },
  { name: "Handheld console", meta: "Saved last week", price: "€180", icon: Gamepad2, accent: "silver", alert: false },
] satisfies {
  name: string;
  meta: string;
  price: string;
  icon: typeof Smartphone;
  accent: ThumbAccent;
  alert: boolean;
}[];

export function SavedScreen() {
  return (
    <Screen>
      <StatusBar />
      <ScreenHeading
        title="Saved"
        action={
          <span className="relative flex h-[8cqw] w-[8cqw] items-center justify-center rounded-full border border-white/10 bg-white/[0.05]">
            <Bell className="h-[3.6cqw] w-[3.6cqw] text-cream/75" strokeWidth={2} />
            <span className="absolute right-[1.6cqw] top-[1.6cqw] h-[1.6cqw] w-[1.6cqw] rounded-full bg-azure" />
          </span>
        }
      />

      <p className="px-[6cqw] text-[2.8cqw] leading-relaxed text-cream/45">
        We watch saved devices and tell you when the price or availability changes.
      </p>

      <div className="mt-[3.4cqw] flex flex-col gap-[2.4cqw] px-[6cqw]">
        {saved.map((item) => (
          <div
            key={item.name}
            className="flex items-center gap-[3cqw] rounded-[3.4cqw] border border-white/8 bg-white/[0.03] p-[2.6cqw]"
          >
            <ProductThumb
              icon={item.icon}
              accent={item.accent}
              className="h-[14cqw] w-[14cqw] shrink-0 rounded-[2.6cqw]"
              iconClassName="h-[6cqw] w-[6cqw]"
            />
            <div className="min-w-0 flex-1">
              <span className="block truncate text-[3cqw] font-medium text-cream/90">
                {item.name}
              </span>
              <span
                className={`block truncate text-[2.5cqw] ${item.alert ? "text-[#9db6ff]" : "text-cream/45"}`}
              >
                {item.meta}
              </span>
              <Price value={item.price} className="mt-[0.8cqw] block text-[3.2cqw]" />
            </div>
            <Heart
              className="h-[4cqw] w-[4cqw] shrink-0 fill-[#ff6b81] text-[#ff6b81]"
              strokeWidth={1.6}
            />
          </div>
        ))}
      </div>

      <TabBar active={3} />
    </Screen>
  );
}
