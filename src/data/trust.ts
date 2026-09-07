import {
  Camera,
  Flag,
  Lock,
  ScrollText,
  UserCheck,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import type { Accent } from "@/lib/accents";

export type TrustPillar = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: Accent;
};

/**
 * Copy is intentionally descriptive rather than absolute — Telefonak reduces
 * risk and adds transparency, it does not guarantee individual transactions.
 */
export const trustPillars: TrustPillar[] = [
  {
    id: "identity",
    title: "Seller identity and profile information",
    description:
      "Profiles carry account age, listing history and buyer feedback so you can judge who you are dealing with.",
    icon: UserCheck,
    accent: "azure",
  },
  {
    id: "condition",
    title: "Transparent condition descriptions",
    description:
      "Sellers grade wear, battery health and faults using structured fields instead of vague wording.",
    icon: Wrench,
    accent: "aqua",
  },
  {
    id: "photos",
    title: "Clear photos and specifications",
    description:
      "Listings prompt for multiple angles and complete technical details before they can be published.",
    icon: Camera,
    accent: "violet",
  },
  {
    id: "reporting",
    title: "Reporting and moderation tools",
    description:
      "Any listing, message or profile can be reported in a tap and reviewed by our moderation team.",
    icon: Flag,
    accent: "coral",
  },
  {
    id: "communication",
    title: "Safe communication guidance",
    description:
      "In-app prompts encourage meeting in public places, testing devices and avoiding off-platform payment requests.",
    icon: Lock,
    accent: "mint",
  },
  {
    id: "standards",
    title: "Community standards",
    description:
      "Clear rules on counterfeit goods, stolen hardware and misleading listings, applied consistently.",
    icon: ScrollText,
    accent: "gold",
  },
];
