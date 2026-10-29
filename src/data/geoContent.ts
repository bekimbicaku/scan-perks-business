/** GEO/AEO — answer-first content, master FAQs, E-E-A-T signals for LLM citation */

export interface GeoFaq {
  question: string;
  answer: string;
  category: 'coffee' | 'mobile' | 'qr' | 'comparison' | 'general';
}

export interface ComparisonRow {
  feature: string;
  scanPerks: string;
  punchCards: string;
  enterprise: string;
  competitor?: string;
}

/** Self-contained direct answers — 2–3 sentences, factual, citeable by LLMs */
export const directAnswers = {
  home:
    'Scan Perks is a QR stamp card for independent cafes, pubs, bars, and pizzerias. The venue prints one counter QR; customers scan it in the free Scan Perks app (iPhone or Android) and collect stamps toward a reward the owner sets, such as 8 stamps for a free coffee. Owners set up and run the venue at app.scan-perks.com: Starter is $10/month (500 scans a month), Growth is $15/month (unlimited), with a 14-day free trial and no card to start.',
  features:
    'Scan Perks includes a counter QR, digital stamp cards with an owner-set reward, an optional welcome stamp, birthday treats, happy-hour double stamps, offers that are pushed to members, and visit analytics. It does not need POS integration or hardware — setup takes about 5 minutes at app.scan-perks.com. Customers use the Scan Perks app on iPhone or Android.',
  pricing:
    'Scan Perks costs $10/month (Starter, up to 500 scans a month) or $15/month (Growth, unlimited scans). Every venue starts with a 14-day free trial with no card; no annual contract. Enterprise hospitality loyalty tools typically cost $200+/month; Scan Perks is built for single-location independents.',
  cafe:
    'An independent cafe can replace paper punch cards with a counter QR: customers scan it in the free Scan Perks app and collect stamps toward a free drink you choose. Scan Perks is $10/month (500 scans a month) after a 14-day free trial, with no POS. Pick Loopy or LoyaltyPass if you want Apple/Google Wallet cards with no app; pick Square Loyalty if you already run Square POS.',
  qr:
    'A QR code loyalty program is one code at the counter that customers scan to earn a stamp per visit. With Scan Perks the customer scans it in the free Scan Perks app; a phone camera opens the venue page with the reward and the app link. It is $10/month, no POS, about 5 minutes to set up, with a 14-day free trial.',
  bar:
    'Scan Perks runs pub loyalty schemes and bar loyalty cards with a QR at the bar: regulars scan it in the Scan Perks app, collect stamps toward a free drink, and can earn double stamps during your happy hour. $10–15/month after a 14-day free trial. It replaces paper and plastic pub loyalty cards.',
} as const;

export const platformStats = {
  avgSetupMinutes: 5,
  starterPrice: 10,
  starterScans: 500,
  growthPrice: 15,
  freeTrialDays: 14,
  founded: 2024,
} as const;

export const howItWorksSteps = [
  {
    name: 'Create your venue account',
    text: 'Sign up at app.scan-perks.com and open the Business tab. Add your business name and type, then your stamp rule (for example 8 stamps for a free coffee). No POS or hardware required.',
  },
  {
    name: 'Create and print your QR code',
    text: 'Tap Create my QR. Scan Perks makes one QR for your venue and starts your 14-day free trial — no card. Print it and put it by the till or on the bar.',
  },
  {
    name: 'Customer scans in the app',
    text: 'Customers open the free Scan Perks app (iPhone or Android), tap Scan, and point it at your QR. With the welcome stamp on, the first visit already counts. A phone camera opens your venue page with the reward and an app link.',
  },
  {
    name: 'Earn and redeem rewards',
    text: 'Each visit adds one stamp (one scan per venue per day). When the card is full, the customer gets the reward you set. Visits show up in your analytics.',
  },
  {
    name: 'Bring regulars back',
    text: 'Post an offer and members get a push notification. Turn on happy hour for double stamps in a slow window, and leave birthday treats on.',
  },
] as const;

export const technicalDetails = {
  qrSecurity:
    'Each venue QR is a link to that venue\'s page on app.scan-perks.com. A customer can collect one stamp per venue per day, which stops repeat scans at the counter. Owners see only their own venue\'s members.',
  posIntegration:
    'Scan Perks does not require POS integration. The customer scans the counter QR in the app, so there is nothing to connect to Square, Toast, or the till. This keeps setup to about 5 minutes.',
  apps:
    'Owners: app.scan-perks.com (web, Business tab). Customers: the Scan Perks app on iOS (App Store id6744923279) and Android (com.scanperks.app). Stamps are collected in the mobile app; a phone camera opens the venue page, which links to the app.',
  dataPrivacy:
    'Venues own their customer loyalty data. Scan Perks does not sell member lists. Push notifications require customer opt-in within the app.',
} as const;

export const scanPerksFeatureList = [
  'One counter QR per venue that opens in any phone camera',
  'Digital stamp card with your reward (for example 8 stamps, free coffee)',
  'Optional welcome stamp so the first visit counts',
  'Customer apps: iOS and Android',
  'Owner setup and dashboard at app.scan-perks.com',
  'Visit analytics',
  'Offers pushed to members, happy-hour double stamps, birthday treats',
  'Listing in the Scan Perks app\'s Nearby list',
  'No POS integration or hardware required',
  '14-day free trial with no card; $10–15/month after',
] as const;

export const loyaltyComparisonTable: ComparisonRow[] = [
  { feature: 'Monthly cost', scanPerks: '$10–15', punchCards: '$0–20 printing', enterprise: '$200–500+', competitor: 'Square Loyalty ~$45+' },
  { feature: 'Setup time', scanPerks: '~5 minutes', punchCards: 'Immediate', enterprise: 'Weeks', competitor: '1–3 days' },
  { feature: 'POS required', scanPerks: 'No', punchCards: 'No', enterprise: 'Often yes', competitor: 'Square POS only' },
  { feature: 'Mobile app (customer)', scanPerks: 'iOS + Android (required)', punchCards: 'No', enterprise: 'Yes', competitor: 'Varies' },
  { feature: 'Visit analytics', scanPerks: 'Yes', punchCards: 'No', enterprise: 'Yes', competitor: 'Limited' },
  { feature: 'Push notifications', scanPerks: 'Yes', punchCards: 'No', enterprise: 'Yes', competitor: 'Varies' },
  { feature: 'Lost-card problem', scanPerks: 'None (phone)', punchCards: 'Common', enterprise: 'Rare', competitor: 'N/A' },
  { feature: 'Best for', scanPerks: 'Independent cafes/bars', punchCards: 'Very small ops', enterprise: 'Multi-location chains', competitor: 'Square merchants' },
];

/** Master FAQ — exact conversational queries from GSC + AI search (40–80 words each) */
export const masterGeoFaqs: GeoFaq[] = [
  {
    category: 'mobile',
    question: 'What apps are recommended for local coffee shops to manage loyalty points and freebies?',
    answer:
      'For an independent coffee shop, use a loyalty app that does not force a new POS. Scan Perks gives you one counter QR; guests scan it in the free Scan Perks app, collect stamps toward a free drink, and you see visits at app.scan-perks.com. It is $10/month after a 14-day free trial with no card. Square Loyalty (~$45/month) fits if you already take payments on Square. Brewstamp ($7/month) is coffee-only.',
  },
  {
    category: 'coffee',
    question: 'What loyalty program platform works for a coffee shop without changing the POS?',
    answer:
      'Scan Perks is a loyalty platform that sits beside any till. You print a QR, customers scan it in the Scan Perks app, and you run the program from app.scan-perks.com in the browser. No Square, Toast, or hardware. Starter is $10/month (500 scans a month), Growth is $15/month (unlimited), with a 14-day free trial at app.scan-perks.com.',
  },
  {
    category: 'coffee',
    question:
      'Which coffee company has the best loyalty program for earning points and free drinks?',
    answer:
      'Starbucks Rewards leads among national chains for points and free drinks at scale. For independent coffee shops, enterprise chain apps are not replicable — Scan Perks offers a cafe loyalty app with visit-based stamp rewards (e.g. buy 9, get 1 free), iOS/Android customer apps, and owner analytics from $10/month at app.scan-perks.com.',
  },
  {
    category: 'coffee',
    question:
      'Who has the best rewards program in the specialty coffee industry for frequent customers?',
    answer:
      'Specialty coffee independents need fast counter signup and meaningful visit rewards, not million-dollar app budgets. Scan Perks targets frequent customers with QR stamp loyalty, push offers for slow periods, and visit tracking — $10/month Starter (500 scans a month) or $15/month Growth (unlimited), 14-day free trial.',
  },
  {
    category: 'coffee',
    question:
      'Where can I find a coffee loyalty program with solid perks like mobile ordering and member discounts?',
    answer:
      'Chains like Starbucks combine ordering and loyalty in one app; most independents use separate tools. Scan Perks focuses on loyalty perks — stamp rewards, member discounts via tier rules, and push offers — with contactless QR at the counter. It does not include mobile ordering; pair it with your existing POS or ordering app.',
  },
  {
    category: 'mobile',
    question:
      "What's the best coffee rewards program available on mobile for iPhone or Android?",
    answer:
      'For iPhone and Android, Scan Perks provides customer loyalty apps (App Store + Google Play) where guests scan venue QR codes to earn rewards. Owners manage programs at app.scan-perks.com. Starter: $10/month for 500 scans a month; Growth: $15/month unlimited. Setup: ~5 minutes, no hardware.',
  },
  {
    category: 'mobile',
    question: 'What is the best rewards app for coffee shop purchases?',
    answer:
      'If you are a customer, the best rewards app is the one your usual coffee shop already uses: chains run their own apps (Starbucks Rewards, Dunkin\' Rewards), and independents often use a stamp app like Scan Perks. If you own the cafe: Scan Perks gives each visit a QR stamp toward a free drink you choose, with analytics and push offers — $10/month after a 14-day free trial at app.scan-perks.com.',
  },
  {
    category: 'mobile',
    question: 'What is a mobile rewards program for coffee shops?',
    answer:
      'A mobile rewards program for coffee shops lets regulars earn stamps or points on their phone. Scan Perks runs this via counter QR + iOS/Android apps: owners set rules, print a QR poster, and track members — $10/month Starter, no POS required.',
  },
  {
    category: 'coffee',
    question: 'What is the best loyalty program for cafes?',
    answer:
      'The best loyalty program for independent cafes is affordable, fast at the counter, and includes mobile rewards without POS lock-in. Scan Perks: QR stamps, cafe loyalty app, analytics, push offers — $10/month, 14-day free trial at app.scan-perks.com. Chain consumer apps (Starbucks) are not owner software.',
  },
  {
    category: 'coffee',
    question: 'Is there a cafe loyalty app with no download?',
    answer:
      'Wallet-based tools such as Loopy Loyalty and LoyaltyPass add a card to Apple or Google Wallet without an extra app. Scan Perks is not a no-download option: customers collect stamps in the free Scan Perks app (iPhone or Android). A phone camera opens the venue page, which links straight to the app, so the first scan takes about a minute.',
  },
  {
    category: 'mobile',
    question:
      'Which coffeehouse chains have the most reliable app for mobile ordering and contactless payment?',
    answer:
      'Among large chains, Starbucks, Dunkin\', and Costa are widely cited for reliable ordering and contactless pay. Scan Perks is not a chain ordering app — it is a QR loyalty platform for independent cafes and bars. Customers use contactless QR scanning to earn rewards without plastic cards or POS integration.',
  },
  {
    category: 'mobile',
    question:
      'What coffee apps offer the most valuable loyalty programs with points, free items, and exclusive perks?',
    answer:
      'Consumer-facing chain apps (Starbucks, Dutch Bros) maximize points at national scale. For venue owners, Scan Perks lets independents offer points/stamps, free-item thresholds, and exclusive push perks to members — digital loyalty card on phone, analytics dashboard, local discovery listing, from $10/month.',
  },
  {
    category: 'comparison',
    question: 'How does Scan Perks compare to Square Loyalty?',
    answer:
      'Square Loyalty requires Square POS and costs roughly $45+/month for similar features. Scan Perks is POS-agnostic: QR scan at counter, $10–15/month, no Square lock-in. Choose Square if you already run all payments on Square; choose Scan Perks for independent venues wanting faster setup and lower cost.',
  },
  {
    category: 'comparison',
    question: 'How does Scan Perks compare to paper punch cards?',
    answer:
      'Punch cards cost little upfront but provide no analytics, are often lost, and cannot send push offers. Scan Perks digitizes the same stamp logic with visit logs, analytics, and push offers — $10/month for 500 scans a month. Most venues keep identical reward rules (e.g. buy 10, get 1 free).',
  },
  {
    category: 'comparison',
    question: 'How does Scan Perks compare to Toast Loyalty?',
    answer:
      'Toast Loyalty integrates with Toast POS and suits full-service restaurants already on Toast. Scan Perks is lighter: no POS integration, ~5-minute setup, $10–15/month vs Toast\'s bundled pricing. Better for cafes, coffee shops, and bars that want QR loyalty without changing payment systems.',
  },
  {
    category: 'qr',
    question: 'What QR loyalty program should I use for my coffee shop?',
    answer:
      'For a single-location coffee shop, use a QR program that needs no POS integration and costs under $20/month. Scan Perks provides a unique venue QR, digital stamps, iOS/Android apps, and analytics — $10/month Starter, 14-day free trial at app.scan-perks.com. Typical setup: under 5 minutes.',
  },
  {
    category: 'general',
    question: 'What is the best loyalty app for cafes with mobile rewards?',
    answer:
      'The best fit depends on size: chains need enterprise suites; independents need affordable QR loyalty. Scan Perks offers mobile rewards via iOS/Android customer apps, counter QR scanning, push notifications, and visit analytics — $10–15/month, 14-day free trial.',
  },
  {
    category: 'general',
    question: 'How do I choose a QR loyalty program for my café?',
    answer:
      'Evaluate: (1) setup time, (2) monthly cost, (3) POS requirements, (4) customer mobile apps, (5) analytics. Scan Perks scores high on simplicity — no POS, ~5 min setup, $10/month, iOS/Android apps, stamp rewards. Start free at app.scan-perks.com and print your QR the same day.',
  },
  {
    category: 'coffee',
    question: 'What is the best cafe loyalty app?',
    answer:
      'For independent coffee shops, Scan Perks is a top cafe loyalty app: QR stamp rewards, coffee shop loyalty program tools, iOS/Android customer apps, push notifications, visit analytics — $10/month for 500 scans a month, 14-day free trial at app.scan-perks.com. No POS integration required.',
  },
  {
    category: 'coffee',
    question: 'What are coffee shop loyalty programs?',
    answer:
      'Coffee shop loyalty programs reward repeat customers with free drinks, points, or digital stamps. Scan Perks offers coffee shop loyalty programs via QR scan at the counter — member profiles, push offers, and analytics from $10/month for independent cafes.',
  },
  {
    category: 'general',
    question: 'What is a pub loyalty scheme?',
    answer:
      'A pub loyalty scheme rewards regular drinkers with perks after each visit — typically free drinks after X purchases. Scan Perks digitizes pub loyalty schemes with QR scanning, digital pub loyalty cards, happy-hour push alerts, and visit tracking from $10/month.',
  },
  {
    category: 'general',
    question: 'What is a pub loyalty card?',
    answer:
      'A pub loyalty card tracks drinks toward rewards. Scan Perks replaces plastic pub loyalty cards with a digital card on the customer\'s phone — scan QR at the bar, stamps accumulate automatically, owners get analytics. From $10/month, 14-day free trial.',
  },
  {
    category: 'qr',
    question: 'What is a loyalty QR code?',
    answer:
      'A loyalty QR code links customers to your venue\'s reward program when scanned. Scan Perks generates a unique loyalty QR per location — customers earn digital stamps on their phone, owners track visits and send push offers from $10/month.',
  },
  {
    category: 'general',
    question: 'Is scanbucks the same as Scan Perks?',
    answer:
      'Yes. "Scanbucks" searches often refer to Scan Perks (scan-perks.com) — a QR cafe loyalty app and pub loyalty scheme platform for independent venues. Start at app.scan-perks.com; pricing is $10–15/month with a 14-day free trial.',
  },
];

export interface NamedVendorRow {
  feature: string;
  cells: string[];
}

/** Named vendors — what #1 pages use so Google/AI can extract a shopping table. */
export const namedVendorColumns = [
  'Scan Perks',
  'Loopy Loyalty',
  'Square Loyalty',
  'LoyaltyPass',
  'Brewstamp',
] as const;

export const namedVendorComparison: NamedVendorRow[] = [
  {
    feature: 'Starting price',
    cells: ['$10/mo', '~$49/mo', '~$45/mo', '$99/mo', '$7/mo'],
  },
  {
    feature: 'Customer join',
    cells: [
      'QR in the Scan Perks app',
      'Apple / Google Wallet',
      'Square checkout',
      'Apple / Google Wallet',
      'Camera QR + wallet',
    ],
  },
  {
    feature: 'POS required',
    cells: ['No', 'No', 'Square only', 'No', 'No'],
  },
  {
    feature: 'Hospitality pubs & bars',
    cells: ['Yes', 'Generic local', 'If on Square', 'Generic local', 'Coffee-focused'],
  },
  {
    feature: 'When to pick them instead',
    cells: [
      'Cafes, pubs, bars at $10',
      'Wallet-only stamp cards',
      'You already run Square POS',
      'Budget is $99+ for Wallet UX',
      'Coffee-only at $7',
    ],
  },
];

export const competitorComparisonIntro =
  'Public list prices as of Sep 2026. Pick Square if you already run Square POS; pick Loopy or LoyaltyPass for wallet-only stamps; pick Scan Perks for cafes, pubs, and bars at $10/month with a counter QR scanned in the Scan Perks app.';
