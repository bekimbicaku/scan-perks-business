/** G2 listing copy + US/UK backlink outreach kit (Aug 2026 GSC) */

export const G2_LISTING = {
  productName: 'Scan Perks',
  tagline:
    'QR loyalty for cafes, bars & pubs. Digital stamp rewards, push offers & analytics from $10/mo. No POS required.',
  website: 'https://scan-perks.com',
  productUrl: 'https://app.scan-perks.com',
  preferredSeoUrls: [
    'https://scan-perks.com/pub-loyalty-card/',
    'https://scan-perks.com/pub-loyalty-scheme/',
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

export type OutreachTarget = {
  name: string;
  url: string;
  type: 'Directory' | 'Guest post' | 'Community' | 'Review' | 'Launch';
  market: 'US' | 'UK' | 'Global';
  action: string;
  linkTo: string;
  anchor: string;
};

/** Concrete US/UK targets — do these in order (highest SEO leverage first) */
export const BACKLINK_OUTREACH = {
  /** GSC: closest to top 10 — push these URLs only in outreach */
  priorityLinkTargets: [
    {
      url: 'https://scan-perks.com/pub-loyalty-card/',
      anchor: 'pub loyalty card',
      why: 'Best ranking opportunity (US/UK impressions, position ~28–34). #1 link target.',
      market: 'US+UK' as const,
    },
    {
      url: 'https://scan-perks.com/pub-loyalty-scheme/',
      anchor: 'pub loyalty scheme',
      why: 'Strong UK query; also US bars searching “loyalty scheme”. #2 link target.',
      market: 'UK+US' as const,
    },
    {
      url: 'https://scan-perks.com/cafe-loyalty-app/',
      anchor: 'cafe loyalty app',
      why: 'Primary US cafe URL. Use for coffee directories & cafe blogs only.',
      market: 'US' as const,
    },
  ],

  weeklyChecklist: [
    'Ask 3 customers to leave a G2 review (link product URLs in profile description)',
    'Submit or refresh 1 software directory (Capterra / GetApp / AlternativeTo)',
    'Send 5 guest-post or resource emails (UK pub blogs OR US cafe blogs)',
    '1 helpful Reddit/forum reply with contextual link (no spam)',
    'Confirm G2 + directories link to /pub-loyalty-card/ or /cafe-loyalty-app/ (not homepage only)',
  ],

  targetSites: [
    {
      name: 'G2 — Scan Perks profile',
      url: 'https://www.g2.com/products/scan-perks/reviews',
      type: 'Review' as const,
      market: 'US' as const,
      action: 'Paste shortDescription + preferredSeoUrls in product profile. Request reviews from venues.',
      linkTo: 'https://scan-perks.com/pub-loyalty-card/',
      anchor: 'pub loyalty card',
    },
    {
      name: 'Capterra',
      url: 'https://www.capterra.com/vendors/sign-up/',
      type: 'Directory' as const,
      market: 'US' as const,
      action: 'Create vendor listing. Website = scan-perks.com. Feature link: /cafe-loyalty-app/ and /pub-loyalty-card/.',
      linkTo: 'https://scan-perks.com/cafe-loyalty-app/',
      anchor: 'cafe loyalty app',
    },
    {
      name: 'GetApp',
      url: 'https://www.getapp.com/',
      type: 'Directory' as const,
      market: 'US' as const,
      action: 'Same as Capterra (Gartner network). Categories: Loyalty Management, Restaurant.',
      linkTo: 'https://scan-perks.com/cafe-loyalty-app/',
      anchor: 'cafe loyalty app',
    },
    {
      name: 'AlternativeTo',
      url: 'https://alternativeto.net/',
      type: 'Directory' as const,
      market: 'Global' as const,
      action: 'Add Scan Perks as alternative to Punchh / Thanx / Loyverse Loyalty. Link /cafe-loyalty-app/.',
      linkTo: 'https://scan-perks.com/cafe-loyalty-app/',
      anchor: 'cafe loyalty app',
    },
    {
      name: 'Product Hunt',
      url: 'https://www.producthunt.com/',
      type: 'Launch' as const,
      market: 'US' as const,
      action: 'Launch or refresh. First comment: link pub loyalty card + cafe loyalty app.',
      linkTo: 'https://scan-perks.com/pub-loyalty-card/',
      anchor: 'digital pub loyalty card',
    },
    {
      name: 'Softonic / SaaSHub / Slashdot software',
      url: 'https://www.saashub.com/',
      type: 'Directory' as const,
      market: 'Global' as const,
      action: 'List under hospitality loyalty. Prefer /pub-loyalty-scheme/ for UK-facing blurbs.',
      linkTo: 'https://scan-perks.com/pub-loyalty-scheme/',
      anchor: 'pub loyalty scheme',
    },
    {
      name: 'Morning Advertiser / UK pub trade',
      url: 'https://www.morningadvertiser.co.uk/',
      type: 'Guest post' as const,
      market: 'UK' as const,
      action: 'Pitch: “Digital pub loyalty cards vs paper punch cards for independents”. Link /pub-loyalty-card/.',
      linkTo: 'https://scan-perks.com/pub-loyalty-card/',
      anchor: 'pub loyalty card',
    },
    {
      name: 'Pub & Bar Magazine / The Spirits Business (UK)',
      url: 'https://www.thespiritsbusiness.com/',
      type: 'Guest post' as const,
      market: 'UK' as const,
      action: 'Pitch resource roundup on pub loyalty schemes. Link /pub-loyalty-scheme/.',
      linkTo: 'https://scan-perks.com/pub-loyalty-scheme/',
      anchor: 'pub loyalty scheme',
    },
    {
      name: 'Bar & Restaurant / US hospitality blogs',
      url: 'https://www.barandrestaurant.com/',
      type: 'Guest post' as const,
      market: 'US' as const,
      action: 'Pitch: bar loyalty programs without POS. Link /bar-loyalty-program/ + /pub-loyalty-card/.',
      linkTo: 'https://scan-perks.com/pub-loyalty-card/',
      anchor: 'digital pub loyalty card',
    },
    {
      name: 'Sprudge / Perfect Daily Grind (coffee)',
      url: 'https://sprudge.com/',
      type: 'Guest post' as const,
      market: 'US' as const,
      action: 'Pitch independent cafe loyalty (not Starbucks). Link /cafe-loyalty-app/ only.',
      linkTo: 'https://scan-perks.com/cafe-loyalty-app/',
      anchor: 'cafe loyalty app',
    },
    {
      name: 'Reddit r/barowners, r/ThePub, r/coffee',
      url: 'https://www.reddit.com/r/barowners/',
      type: 'Community' as const,
      market: 'US' as const,
      action: 'Answer “loyalty app?” threads helpfully. Link once if relevant — never spam.',
      linkTo: 'https://scan-perks.com/pub-loyalty-card/',
      anchor: 'pub loyalty card',
    },
  ] satisfies OutreachTarget[],

  emailUkPub: `Subject: Resource for your readers — digital pub loyalty cards

Hi {{name}},

I enjoyed your piece on {{topic}}. Many independent pubs still use paper punch cards that get lost and give zero visit data.

We published a practical guide on replacing them with a digital pub loyalty card (QR at the bar, ~$10/month, no POS):

https://scan-perks.com/pub-loyalty-card/

Also useful for UK readers searching “pub loyalty scheme”:
https://scan-perks.com/pub-loyalty-scheme/

Happy to send a short quote, screenshot, or custom blurb if you ever cover loyalty / regulars.

Best,
{{your_name}}
Scan Perks — https://scan-perks.com
hello@scan-perks.com`,

  emailUsBar: `Subject: Bar loyalty without POS — resource for independents

Hi {{name}},

Saw your article on {{topic}}. US bar owners often ask for loyalty that works without switching to Square/Toast.

This page explains a digital pub/bar loyalty card via QR (14-day free trial, $10/mo):

https://scan-perks.com/pub-loyalty-card/

Related: https://scan-perks.com/bar-loyalty-program/

Open to a quote or guest tip if helpful.

Best,
{{your_name}}
Scan Perks`,

  emailUsCafe: `Subject: Cafe loyalty app for independents (not a chain rewards app)

Hi {{name}},

Your readers who own coffee shops often land on Starbucks-style “rewards app” articles. We wrote a clear guide for cafe owners who need their own loyalty program:

https://scan-perks.com/cafe-loyalty-app/

QR stamps, iOS/Android, no POS — from $10/month.

Happy to contribute a short expert quote.

Best,
{{your_name}}
Scan Perks`,

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

  embedBadgeHtml: `<a href="https://scan-perks.com/pub-loyalty-card/" title="Pub loyalty card by Scan Perks">Pub loyalty card — Scan Perks</a>`,

  directoryBlurb: `Scan Perks — QR loyalty for independent pubs, bars, and cafes. Digital pub loyalty card & cafe loyalty app from $10/mo. No POS. https://scan-perks.com/pub-loyalty-card/ | https://scan-perks.com/cafe-loyalty-app/`,
} as const;
