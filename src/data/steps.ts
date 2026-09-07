import {
  Handshake,
  MessagesSquare,
  ScanSearch,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export type Step = {
  id: string;
  index: string;
  title: string;
  description: string;
  detail: string;
  icon: LucideIcon;
};

export const steps: Step[] = [
  {
    id: "discover",
    index: "01",
    title: "Discover or list a device",
    description:
      "Browse a curated feed of second-hand electronics, or publish your own device in a few guided steps.",
    detail: "Search, filter and save",
    icon: ScanSearch,
  },
  {
    id: "review",
    index: "02",
    title: "Review details and seller information",
    description:
      "Read the condition notes, specifications and photos, then look through the seller's profile and history.",
    detail: "Condition, specs, seller profile",
    icon: Sparkles,
  },
  {
    id: "connect",
    index: "03",
    title: "Connect securely",
    description:
      "Ask questions inside the app. Keep the conversation on Telefonak so it stays documented and reportable.",
    detail: "In-app messaging",
    icon: MessagesSquare,
  },
  {
    id: "second-life",
    index: "04",
    title: "Buy, sell and give technology a second life",
    description:
      "Agree the details together and hand the device on to someone who will use it for years to come.",
    detail: "One more life for great hardware",
    icon: Handshake,
  },
];
