import {
  BadgeCheck,
  Bookmark,
  FileText,
  ShieldCheck,
  SlidersHorizontal,
  Upload,
  type LucideIcon,
} from "lucide-react";

import type { Accent } from "@/lib/accents";

export type Feature = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  /** Drives the asymmetric layout in the features grid. */
  emphasis: "hero" | "tall" | "standard" | "banner";
  accent: Accent;
  points?: string[];
};

export const features: Feature[] = [
  {
    id: "seller-profiles",
    title: "Trusted seller profiles",
    description:
      "Every listing is attached to a real profile with activity history, ratings and response habits, so you know who you are talking to before you commit.",
    icon: BadgeCheck,
    emphasis: "hero",
    accent: "azure",
    points: ["Profile history", "Ratings and reviews", "Response signals"],
  },
  {
    id: "detailed-listings",
    title: "Detailed product listings",
    description:
      "Structured condition grading, full specifications and multi-angle photography — the details that decide a second-hand purchase.",
    icon: FileText,
    emphasis: "tall",
    accent: "violet",
  },
  {
    id: "smart-search",
    title: "Smart search and filters",
    description:
      "Narrow by model, condition, storage, price band and location until only the right devices remain.",
    icon: SlidersHorizontal,
    emphasis: "standard",
    accent: "aqua",
  },
  {
    id: "easy-listing",
    title: "Easy product listing",
    description:
      "Publish a device in minutes. Guided fields prompt for the specifications buyers actually ask about.",
    icon: Upload,
    emphasis: "standard",
    accent: "mint",
  },
  {
    id: "secure-messaging",
    title: "Secure in-app communication",
    description:
      "Keep negotiation, questions and agreements inside Telefonak, where conversations can be reviewed and reported.",
    icon: ShieldCheck,
    emphasis: "standard",
    accent: "gold",
  },
  {
    id: "saved-products",
    title: "Saved products and personalised discovery",
    description:
      "Save what catches your eye and let the feed learn the brands, categories and price ranges you return to.",
    icon: Bookmark,
    emphasis: "banner",
    accent: "magenta",
  },
];
