export const SITE = {
  name: "The Finance Verdict",
  domain: "thefinanceverdict.com",
  url: "https://thefinanceverdict.com",
  tagline: "Honest verdicts on the tools that shape your money.",
  description:
    "Independent reviews and head-to-head comparisons of personal finance tools — budgeting apps, credit monitoring, investing platforms, tax software, banking, and debt management. We test it, we rate it, you decide.",
  author: "The Finance Verdict team",
  logoUrl: "/logo.svg",
  ogImage: "/og-default.svg",
  twitterHandle: "@financeverdict",
  gaMeasurementId: "G-3K7YHB717H",
  founded: "2026",
  socials: {
    facebook: "",
    instagram: "",
    youtube: "",
    pinterest: "",
    twitter: "",
  },
} as const;

export const ENTITY_IDS = {
  organization: `${SITE.url}/#organization`,
  website: `${SITE.url}/#website`,
  logo: `${SITE.url}/#logo`,
} as const;

export const NAV = [
  { label: "Reviews", href: "/reviews" },
  { label: "Comparisons", href: "/comparisons" },
  { label: "Calculators", href: "/calculators" },
  { label: "About", href: "/about" },
] as const;
