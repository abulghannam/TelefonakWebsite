import { site } from "@/lib/site";

export type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type FooterColumn = {
  title: string;
  links: FooterLink[];
};

export const footerColumns: FooterColumn[] = [
  {
    title: "Explore",
    links: [
      { label: "Categories", href: "/#categories" },
      { label: "How It Works", href: "/#how-it-works" },
      { label: "Features", href: "/#features" },
      { label: "App Showcase", href: "/#showcase" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Trust & Safety", href: "/#trust" },
      { label: "Sustainability", href: "/#sustainability" },
      { label: "Community", href: "/#community" },
      { label: "Contact", href: `mailto:${site.email}`, external: true },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export type SocialLink = {
  label: string;
  href: string;
};

export const socialLinks: SocialLink[] = [
  { label: "X", href: site.social.x },
  { label: "Instagram", href: site.social.instagram },
  { label: "LinkedIn", href: site.social.linkedin },
  { label: "YouTube", href: site.social.youtube },
];
