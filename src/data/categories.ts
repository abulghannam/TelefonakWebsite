import {
  Camera,
  Gamepad2,
  Headphones,
  Keyboard,
  Laptop,
  Smartphone,
  Tablet,
  Watch,
  type LucideIcon,
} from "lucide-react";

import type { Accent } from "@/lib/accents";

export type Category = {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  /** Bento span on large screens. */
  span: "wide" | "tall" | "standard";
  /** Each category owns a distinct hue so the grid reads as a spectrum. */
  accent: Accent;
};

export const categories: Category[] = [
  {
    id: "smartphones",
    name: "Smartphones",
    description: "Flagships, mid-range favourites and dependable daily drivers.",
    icon: Smartphone,
    span: "tall",
    accent: "azure",
  },
  {
    id: "laptops",
    name: "Laptops",
    description: "Ultrabooks, creative workstations and student essentials.",
    icon: Laptop,
    span: "wide",
    accent: "violet",
  },
  {
    id: "tablets",
    name: "Tablets",
    description: "Reading, sketching and second-screen companions.",
    icon: Tablet,
    span: "standard",
    accent: "aqua",
  },
  {
    id: "cameras",
    name: "Cameras",
    description: "Mirrorless bodies, lenses and film revivals.",
    icon: Camera,
    span: "standard",
    accent: "gold",
  },
  {
    id: "gaming",
    name: "Gaming",
    description: "Consoles, handhelds and controllers ready for a new player.",
    icon: Gamepad2,
    span: "wide",
    accent: "magenta",
  },
  {
    id: "audio",
    name: "Audio",
    description: "Headphones, earbuds, speakers and studio gear.",
    icon: Headphones,
    span: "standard",
    accent: "mint",
  },
  {
    id: "smartwatches",
    name: "Smartwatches",
    description: "Fitness trackers and everyday wearables.",
    icon: Watch,
    span: "standard",
    accent: "coral",
  },
  {
    id: "accessories",
    name: "Accessories",
    description: "Keyboards, chargers, docks and the details that complete a setup.",
    icon: Keyboard,
    span: "standard",
    accent: "champagne",
  },
];
