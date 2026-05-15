# thefinanceverdict.com

Independent reviews and head-to-head comparisons of personal finance tools — budgeting apps, credit monitoring, investing platforms, tax software, banking, and debt management. Leadility-owned affiliate property targeting US personal-finance-tool buyers.

Year 1: pure affiliate revenue from product reviews and comparisons. Year 2+: lead-gen handoff layer (personal loans, debt consolidation, life/auto insurance) into Leadility's existing infrastructure.

## Stack

- **Astro v5** — static-first SEO content site
- **Tailwind CSS** — styling, premium financial editorial palette (navy / charcoal / gold)
- **MDX** — article authoring format
- **Cloudflare Pages** — hosting (production)
- **GitHub Actions** — scheduled-publish cron (daily 08:00 UTC) + IndexNow ping

## Setup

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run preview  # serves dist/
```

## Content plan (Year 1)

60-80 articles across six clusters:

| Cluster | Target articles | Sample brands |
|---|---|---|
| Budgeting apps | 8 reviews | YNAB, Monarch, Rocket Money, EveryDollar, Copilot, Tiller, Quicken, Simplifi |
| Credit monitoring | 6 reviews | Credit Karma, Experian, MyFICO, IdentityIQ, LifeLock, Identity Guard |
| Investing | 8 reviews | Empower, M1, Wealthfront, Betterment, Robinhood |
| Tax software | 6 reviews | TurboTax, H&R Block, FreeTaxUSA, Cash App Taxes, TaxSlayer, TaxAct |
| Banking | 8 reviews | SoFi, Marcus, Ally, Discover, Capital One, Chime, Varo |
| Debt management | 4 reviews | National Debt Relief, Freedom Debt Relief |
| Comparisons | 20 | YNAB vs Monarch, FreeTaxUSA vs TurboTax, Fidelity vs Robinhood, etc. |
| Calculators | 10 | Budget, debt payoff, savings goal, emergency fund, retirement gap, etc. |

Research artifacts (keyword universe, SERP analysis, decision doc, outreach prospect list) at:
`~/leadility/clients/affiliate-portfolio/personal-finance-tools/`

## Authoring articles

Articles live in `src/content/articles/` as `.mdx` files. The frontmatter schema is enforced via Zod in `src/content/config.ts`. Required fields:

```yaml
---
title: "YNAB Review: Is You Need A Budget Worth $109/Year?"
description: "120-170 char SEO meta description."
primaryKeyword: "ynab review"
secondaryKeywords:
  - "you need a budget review"
intent: "commercial-investigation"
publishedAt: 2026-05-19
updated: 2026-05-19
schemaType: "Review"
isComparison: false
affiliateOffers:
  - "ynab"
draft: true
---
```

URL pattern: `/{slug}/` (flat slug, set by filename).

## Reusable templates

Six battle-tested templates in `src/components/templates/`:

- **ReviewTemplate** — single-product reviews (the bulk of Year 1)
- **ComparisonTemplate** — head-to-head verdicts
- **CalculatorTemplate** — interactive browser-side calculators
- **ListicleTemplate** — "best X" round-ups (defer to Year 2 when DR supports it)
- **LeadGenTemplate** — Year 2+ handoff pages (personal loans, debt consolidation, insurance)
- **LaunchJackTemplate** — opportunistic coverage of new product launches

See `src/components/templates/README.md` for usage patterns.

## Components available in MDX

```mdx
import KeyTakeaways from "@/components/KeyTakeaways.astro";
import ProsCons from "@/components/ProsCons.astro";
import ComparisonTable from "@/components/ComparisonTable.astro";
import CTAButton from "@/components/CTAButton.astro";
import NewsletterSignup from "@/components/NewsletterSignup.astro";
import FAQ from "@/components/FAQ.astro";
```

## Deploy (Cloudflare Pages)

1. Connect repo to Cloudflare Pages.
2. Build command: `npm run build`
3. Output directory: `dist/`
4. Environment: `NODE_VERSION=20`
5. Custom domain: `thefinanceverdict.com` (managed via Cloudflare DNS).

## Auto-publish

`.github/workflows/scheduled-publish.yml` fires daily at 08:00 UTC, triggering a fresh Cloudflare build so any article with `publishedAt = today` becomes visible. Then pings IndexNow with newly-visible URLs.

Required GitHub secrets:
- `CF_DEPLOY_HOOK` — Cloudflare Pages deploy hook URL

## Sister sites (Leadility portfolio)

- [LLCforLandlords.com](https://llcforlandlords.com) — real estate LLC formation (legal niche)
- [TheYardScout.com](https://theyardscout.com) — backyard wellness gear reviews
- TheFinanceVerdict.com — personal finance tools (this repo)

All three share the same Goldmine playbook (Caluori method) and the same Astro template library.
