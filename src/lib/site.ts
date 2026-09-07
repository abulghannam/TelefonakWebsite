/**
 * Central place for every business detail that must be replaced before launch.
 * Each value below is a PLACEHOLDER — see README.md → "Placeholders to replace".
 */
export const site = {
  /** [APP NAME] */
  name: "Telefonak",
  /** [COMPANY NAME] */
  company: "Telefonak Technologies",
  tagline: "Buy and Sell Second-Hand Electronics",
  description:
    "Discover trusted second-hand phones, laptops, gaming devices, cameras, audio equipment, and more with Telefonak.",
  /** [WEBSITE URL] — also used as the canonical + Open Graph base. */
  url: "https://telefonak.example.com",
  /** [CONTACT EMAIL] */
  email: "hello@telefonak.example.com",
  /** [APP STORE URL] */
  appStoreUrl: "https://www.apple.com/app-store/",
  /** [GOOGLE PLAY URL] */
  googlePlayUrl: "https://play.google.com/store/apps",
  /** [SOCIAL URL] × 4 */
  social: {
    x: "https://x.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
    youtube: "https://www.youtube.com/",
  },
  themeColor: "#05060c",
} as const;

export type Site = typeof site;
