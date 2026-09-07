import type { Metadata } from "next";

import { LegalPage, type LegalSection } from "@/components/layout/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms that apply when you use the ${site.name} app and website.`,
  alternates: { canonical: "/terms" },
};

/** PLACEHOLDER copy — have this reviewed by a qualified legal adviser. */
const sections: LegalSection[] = [
  {
    heading: "Using the service",
    body: [
      `${site.name} is a platform where members list, discover and discuss second-hand electronics. You must be legally able to enter a contract in your country to use the service.`,
      "You are responsible for the accuracy of anything you publish, including photographs, specifications and condition descriptions.",
    ],
  },
  {
    heading: "Our role",
    body: [
      `${site.name} is not a party to transactions between members. We provide tools, guidance and moderation, but we do not own, inspect or warrant the devices listed on the platform.`,
      "Members are responsible for agreeing payment, delivery or collection arrangements between themselves, and for complying with applicable law.",
    ],
  },
  {
    heading: "Listing standards",
    body: [
      "Listings must describe real devices you are entitled to sell. Counterfeit goods, stolen hardware, misleading descriptions and prohibited items are not permitted.",
      "We may remove listings, restrict features or suspend accounts where our community standards are not met.",
    ],
  },
  {
    heading: "Communication",
    body: [
      "Keep negotiations inside the app. Requests to move a conversation off-platform, particularly around payment, are a common warning sign and can be reported.",
    ],
  },
  {
    heading: "Liability",
    body: [
      "To the maximum extent permitted by law, we are not liable for the condition, legality or performance of devices sold between members, or for losses arising from arrangements made outside the platform.",
    ],
  },
  {
    heading: "Changes and contact",
    body: [
      `We may update these terms as the service develops, and will make the current version available here. Questions can be sent to ${site.email}.`,
      "This document is a placeholder template and must be reviewed by a qualified legal adviser before publication.",
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <LegalPage
      title="Terms of Service"
      intro={`The agreement between you and ${site.company} when you use the app or this website.`}
      updated="Placeholder date"
      sections={sections}
    />
  );
}
