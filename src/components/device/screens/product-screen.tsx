import { ChevronLeft, Heart, MessageSquare, Smartphone, Star } from "lucide-react";

import {
  Avatar,
  ConditionTag,
  Price,
  ProductThumb,
  Screen,
  StatusBar,
} from "@/components/device/screen-kit";

const specs = [
  { label: "Storage", value: "256 GB" },
  { label: "Battery health", value: "92%" },
  { label: "Included", value: "Cable, box" },
  { label: "Location", value: "Rotterdam" },
];

export function ProductScreen() {
  return (
    <Screen>
      <StatusBar />

      <div className="flex items-center justify-between px-[6cqw] py-[2.4cqw]">
        <span className="flex h-[8cqw] w-[8cqw] items-center justify-center rounded-full border border-white/10 bg-white/[0.05]">
          <ChevronLeft className="h-[4cqw] w-[4cqw] text-cream/80" strokeWidth={2.2} />
        </span>
        <span className="flex h-[8cqw] w-[8cqw] items-center justify-center rounded-full border border-white/10 bg-white/[0.05]">
          <Heart className="h-[3.6cqw] w-[3.6cqw] text-cream/80" strokeWidth={2.2} />
        </span>
      </div>

      <div className="relative mx-[6cqw] overflow-hidden rounded-[5cqw]">
        <ProductThumb
          icon={Smartphone}
          accent="azure"
          className="h-[46cqw] w-full"
          iconClassName="h-[18cqw] w-[18cqw]"
        />
        <span className="absolute left-[3cqw] top-[3cqw]">
          <ConditionTag label="Excellent condition" />
        </span>
        <span className="absolute bottom-[3cqw] left-1/2 flex -translate-x-1/2 gap-[1.4cqw]">
          {[0, 1, 2, 3].map((dot) => (
            <span
              key={dot}
              className={
                dot === 0
                  ? "h-[1.4cqw] w-[4cqw] rounded-full bg-cream"
                  : "h-[1.4cqw] w-[1.4cqw] rounded-full bg-cream/35"
              }
            />
          ))}
        </span>
      </div>

      <div className="px-[6cqw] pt-[4cqw]">
        <div className="flex items-start justify-between gap-[3cqw]">
          <span className="text-[4.4cqw] font-semibold leading-tight tracking-[-0.03em]">
            Titanium flagship, 2023
          </span>
          <Price value="€689" className="text-[4.6cqw]" />
        </div>
        <p className="mt-[2cqw] text-[2.9cqw] leading-relaxed text-cream/50">
          Light wear on the frame, screen free of scratches. Always used with a case.
        </p>
      </div>

      <dl className="mt-[3.4cqw] grid grid-cols-2 gap-[2cqw] px-[6cqw]">
        {specs.map((spec) => (
          <div
            key={spec.label}
            className="rounded-[3cqw] border border-white/8 bg-white/[0.03] px-[3cqw] py-[2.2cqw]"
          >
            <dt className="text-[2.3cqw] uppercase tracking-[0.12em] text-cream/35">
              {spec.label}
            </dt>
            <dd className="mt-[0.6cqw] text-[3cqw] font-medium text-cream/90">
              {spec.value}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mx-[6cqw] mt-[3.4cqw] flex items-center gap-[3cqw] rounded-[3.4cqw] border border-white/8 bg-white/[0.03] p-[3cqw]">
        <Avatar initials="MR" className="h-[9cqw] w-[9cqw] text-[3.2cqw]" />
        <div className="min-w-0 flex-1">
          <span className="block truncate text-[3.1cqw] font-medium text-cream/90">
            Marta R.
          </span>
          <span className="flex items-center gap-[1.2cqw] text-[2.5cqw] text-cream/45">
            <Star className="h-[2.6cqw] w-[2.6cqw] fill-[#e6d2a8] text-[#e6d2a8]" />
            4.9 · 38 listings · Since 2022
          </span>
        </div>
      </div>

      <div className="mt-auto px-[6cqw] pb-[6cqw] pt-[4cqw]">
        <span className="flex items-center justify-center gap-[2cqw] rounded-full bg-cream py-[3.2cqw] text-[3.2cqw] font-semibold text-obsidian">
          <MessageSquare className="h-[3.6cqw] w-[3.6cqw]" strokeWidth={2.2} />
          Message seller
        </span>
      </div>
    </Screen>
  );
}
