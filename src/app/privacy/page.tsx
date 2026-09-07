import type { Metadata } from "next";

import { LegalPage, type LegalSection } from "@/components/layout/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} handles personal information across the app and this website.`,
  alternates: { canonical: "/privacy" },
};

/** PLACEHOLDER copy — have this reviewed by a qualified legal adviser. */
const sections: LegalSection[] = [
  {
    heading: "Information we collect",
    body: [
      `${site.name} collects the information you provide when you create an account, publish a listing or message another member. This typically includes your name, contact details, listing content and the messages you exchange in the app.`,
      "We also collect limited technical information such as device type, app version and general usage patterns, which helps us keep the service reliable and secure.",
    ],
  },
  {
    heading: "How we use information",
    body: [
      "Information is used to operate the marketplace, show relevant listings, enable communication between members, respond to reports and improve the product over time.",
      "We do not sell personal information. Where we work with service providers, they act on our instructions and are bound by confidentiality obligations.",
    ],
  },
  {
    heading: "Messages and moderation",
    body: [
      "Conversations that take place inside the app may be reviewed when a report is submitted, when we investigate suspected policy breaches, or where we are required to do so by law.",
    ],
  },
  {
    heading: "Your choices",
    body: [
      "You can review and update your profile information in the app at any time. You may request a copy of your data or ask us to delete your account by contacting us.",
      "Depending on where you live, you may have additional rights over your personal information under local data protection law.",
    ],
  },
  {
    heading: "Retention",
    body: [
      "We keep personal information for as long as your account is active, and afterwards only where we have a legitimate reason to do so — for example resolving disputes or meeting legal obligations.",
    ],
  },
  {
    heading: "Contact",
    body: [
      `Questions about this policy can be sent to ${site.email}. This document is a placeholder template and must be reviewed by a qualified legal adviser before publication.`,
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro={`This page explains, in plain terms, what information ${site.name} collects and how it is used.`}
      updated="Placeholder date"
      sections={sections}
    />
  );
}
