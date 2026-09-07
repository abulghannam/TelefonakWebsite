import { Camera, ChevronDown, ImagePlus, Laptop } from "lucide-react";

import {
  Chip,
  ProductThumb,
  Screen,
  ScreenHeading,
  StatusBar,
} from "@/components/device/screen-kit";

const fields = [
  { label: "Title", value: "14\" creator laptop, 2022" },
  { label: "Category", value: "Laptops" },
  { label: "Asking price", value: "€1,140" },
];

export function CreateScreen() {
  return (
    <Screen>
      <StatusBar />
      <ScreenHeading
        title="New listing"
        action={<span className="text-[2.9cqw] text-cream/45">Step 2 of 3</span>}
      />

      <div className="mx-[6cqw] flex gap-[1.4cqw]">
        {[true, true, false].map((done, index) => (
          <span
            key={index}
            className={`h-[0.9cqw] flex-1 rounded-full ${done ? "bg-azure" : "bg-white/12"}`}
          />
        ))}
      </div>

      <span className="mt-[4.4cqw] block px-[6cqw] text-[2.4cqw] uppercase tracking-[0.16em] text-cream/35">
        Photos
      </span>
      <div className="mt-[2.2cqw] grid grid-cols-3 gap-[2.4cqw] px-[6cqw]">
        <ProductThumb
          icon={Laptop}
          accent="violet"
          className="aspect-square w-full rounded-[3cqw]"
          iconClassName="h-[6.4cqw] w-[6.4cqw]"
        />
        <ProductThumb
          icon={Camera}
          accent="silver"
          className="aspect-square w-full rounded-[3cqw]"
          iconClassName="h-[6.4cqw] w-[6.4cqw]"
        />
        <span className="flex aspect-square w-full flex-col items-center justify-center gap-[1.2cqw] rounded-[3cqw] border border-dashed border-white/15 bg-white/[0.02] text-cream/40">
          <ImagePlus className="h-[5.4cqw] w-[5.4cqw]" strokeWidth={1.6} />
          <span className="text-[2.2cqw]">Add</span>
        </span>
      </div>

      <div className="mt-[4cqw] flex flex-col gap-[2.4cqw] px-[6cqw]">
        {fields.map((field) => (
          <span key={field.label} className="flex flex-col gap-[1.2cqw]">
            <span className="text-[2.4cqw] uppercase tracking-[0.14em] text-cream/35">
              {field.label}
            </span>
            <span className="flex items-center justify-between rounded-[2.8cqw] border border-white/10 bg-white/[0.04] px-[3.2cqw] py-[2.6cqw] text-[3cqw] text-cream/85">
              {field.value}
              <ChevronDown className="h-[3.2cqw] w-[3.2cqw] text-cream/35" strokeWidth={2} />
            </span>
          </span>
        ))}
      </div>

      <span className="mt-[4cqw] block px-[6cqw] text-[2.4cqw] uppercase tracking-[0.16em] text-cream/35">
        Condition
      </span>
      <div className="mt-[2cqw] flex flex-wrap gap-[1.6cqw] px-[6cqw]">
        <Chip>Like new</Chip>
        <Chip active>Very good</Chip>
        <Chip>Good</Chip>
        <Chip>For parts</Chip>
      </div>

      <div className="mt-auto px-[6cqw] pb-[6cqw] pt-[4cqw]">
        <span className="block rounded-full bg-cream py-[3.2cqw] text-center text-[3.2cqw] font-semibold text-obsidian">
          Continue
        </span>
      </div>
    </Screen>
  );
}
