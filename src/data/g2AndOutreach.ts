/** G2 listing copy + review CTA — paste into G2 vendor profile */

export const G2_LISTING = {
  productName: 'Scan Perks',
  tagline:
    'QR loyalty for cafes, bars & pubs. Digital stamp rewards, push offers & analytics from $10/mo. No POS required.',
  website: 'https://scan-perks.com',
  productUrl: 'https://app.scan-perks.com',
  preferredSeoUrls: [
    'https://scan-perks.com/pub-loyalty-scheme/',
    'https://scan-perks.com/pub-loyalty-card/',
    'https://scan-perks.com/cafe-loyalty-app/',
  ],
  categories: [
    'Loyalty Management Software',
    'Customer Loyalty Software',
    'Restaurant Management Software',
    'Small Business Software',
  ],
  profileUrl: 'https://www.g2.com/products/scan-perks/reviews',
  shortDescription: `Scan Perks is a QR-based loyalty platform for independent cafes, bars, pubs, and restaurants. Customers scan a venue QR code to earn stamp-style rewards on iPhone or Android; owners manage rewards, analytics, and push offers from app.scan-perks.com — from $10/month with a 14-day free trial. No POS integration or hardware required.`,
  fullDescription: `Scan Perks is a QR-based loyalty platform built for independent hospitality venues — coffee shops, cafes, bars, pubs, and restaurants.

Instead of paper punch cards or expensive enterprise software, venue owners display a unique QR code at the counter or bar. Customers scan with their iPhone or Android to join a digital loyalty program, earn stamp-style rewards (e.g. buy 9, get 1 free), and keep a digital loyalty card on their phone.

Owners manage everything from a web dashboard at app.scan-perks.com: reward rules, visit analytics, member profiles, and push notifications for happy hours, slow nights, and promotions.

Who it's for: Single-location independents that want a cafe loyalty app or pub loyalty scheme without POS integration, long contracts, or $200+/month enterprise pricing.

Setup: Most venues go live in under 5 minutes — no hardware, no POS API.

Pricing: $10/month (Starter, up to 200 members) or $15/month (Growth, unlimited). 14-day free trial, no annual contract.

Platforms: Web dashboard (owners), iOS App Store and Google Play (customers).`,
  features: [
    'QR code loyalty program',
    'Digital stamp / tiered rewards',
    'Customer iOS & Android apps',
    'Owner web dashboard',
    'Visit analytics & member profiles',
    'Push notifications',
    'Local discovery listing',
    'Print-ready QR posters',
    'No POS required',
  ],
  pricing: [
    { name: 'Starter', price: '$10/month', detail: 'Up to 200 members, 50 push notifications/month' },
    { name: 'Growth', price: '$15/month', detail: 'Unlimited members & push notifications' },
    { name: 'Free trial', price: '14 days', detail: 'No annual contract' },
  ],
} as const;

/** Backlink outreach — preferred URLs + email templates for publishers */
export const BACKLINK_OUTREACH = {
  priorityLinkTargets: [
    {
      url: 'https://scan-perks.com/pub-loyalty-card/',
      anchor: 'pub loyalty card',
      why: 'Best GSC position (~31–34). Highest chance of top 10 with external links.',
    },
    {
      url: 'https://scan-perks.com/pub-loyalty-scheme/',
      anchor: 'pub loyalty scheme',
      why: 'Strong UK query (72 impressions, pos ~35). Ideal for UK hospitality blogs.',
    },
    {
      url: 'https://scan-perks.com/cafe-loyalty-app/',
      anchor: 'cafe loyalty app',
      why: 'Primary cafe URL (canonical). Use for coffee / cafe directories.',
    },
  ],
  targetSites: [
    { name: 'G2', url: 'https://www.g2.com', type: 'Directory' },
    { name: 'Capterra', url: 'https://www.capterra.com', type: 'Directory' },
    { name: 'GetApp', url: 'https://www.getapp.com', type: 'Directory' },
    { name: 'Product Hunt', url: 'https://www.producthunt.com', type: 'Launch' },
    { name: 'AlternativeTo', url: 'https://alternativeto.net', type: 'Directory' },
    { name: 'UK hospitality blogs / pub trade press', url: '', type: 'Guest post' },
    { name: 'Coffee / cafe indie blogs', url: '', type: 'Guest post' },
    { name: 'Reddit r/barowners, r/coffee (helpful replies only)', url: 'https://reddit.com', type: 'Community' },
  ],
  emailTemplate: `Subject: Quick resource on pub loyalty cards for your readers

Hi {{name}},

I came across your article on {{topic}} and thought your readers might find this useful:

Pub loyalty card (digital QR) — how independent pubs replace punch cards:
https://scan-perks.com/pub-loyalty-card/

It covers digital vs paper cards, pricing for single-location pubs, and a simple QR setup (no POS required).

Happy to share a short quote or custom blurb if helpful.

Best,
{{your_name}}
Scan Perks — https://scan-perks.com`,
  embedBadgeHtml: `<a href="https://scan-perks.com/pub-loyalty-scheme/" title="Pub loyalty scheme by Scan Perks">Pub loyalty scheme — Scan Perks</a>`,
} as const;
