import { phrases, siteFacts } from './site-facts';
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
    `Scan Perks is a QR stamp card for independent cafes, pubs, bars, and pizzerias. The venue prints one counter QR; customers scan it in the free Scan Perks app (iPhone or Android) and collect stamps toward a reward the owner sets, such as 8 stamps for a free coffee. Owners set up and run the venue at app.scan-perks.com: Starter is ${phrases.en.starterPerMonth} (${phrases.en.scans}), Growth is ${phrases.en.growthPerMonth} (${phrases.en.unlimitedScans}), with a ${phrases.en.trial} and ${phrases.en.noCard} to start.`,
  features:
    'Scan Perks includes a counter QR, digital stamp cards with an owner-set reward, an optional welcome stamp, birthday treats, happy-hour double stamps, offers that are pushed to members, and visit analytics. It does not need POS integration or hardware — setup takes about 5 minutes at app.scan-perks.com. Customers use the Scan Perks app on iPhone or Android.',
  pricing:
    `Scan Perks costs ${phrases.en.starterPerMonth} (Starter, ${phrases.en.scansUpTo}) or ${phrases.en.growthPerMonth} (Growth, ${phrases.en.unlimitedScans}). Every venue starts with a ${phrases.en.trial} with ${phrases.en.noCard}; no annual contract. Enterprise hospitality loyalty tools typically cost $200+/month; Scan Perks is built for single-location independents.`,
  cafe:
    `An independent cafe can replace paper punch cards with a counter QR: customers scan it in the free Scan Perks app and collect stamps toward a free drink you choose. Scan Perks is ${phrases.en.starterPerMonth} (${phrases.en.scans}) after a ${phrases.en.trial}, with no POS. Pick Loopy or LoyaltyPass if you want Apple/Google Wallet cards with no app; pick Square Loyalty if you already run Square POS.`,
  qr:
    `A QR code loyalty program is one code at the counter that customers scan to earn a stamp per visit. With Scan Perks the customer scans it in the free Scan Perks app; a phone camera opens the venue page with the reward and the app link. It is ${phrases.en.starterPerMonth}, no POS, about 5 minutes to set up, with a ${phrases.en.trial}.`,
  bar:
    `Scan Perks runs pub loyalty schemes and bar loyalty cards with a QR at the bar: regulars scan it in the Scan Perks app, collect stamps toward a free drink, and can earn double stamps during your happy hour. ${phrases.en.rangeBareMonth} after a ${phrases.en.trial}. It replaces paper and plastic pub loyalty cards.`,
} as const;

export const platformStats = {
  avgSetupMinutes: 5,
  starterPrice: siteFacts.starter.priceUsd,
  starterScans: siteFacts.starter.scansPerMonth,
  growthPrice: siteFacts.growth.priceUsd,
  freeTrialDays: siteFacts.trial.days,
  founded: 2024,
} as const;

export const howItWorksSteps = [
  {
    name: 'Create your venue account',
    text: 'Sign up at app.scan-perks.com and open the Business tab. Add your business name and type, then your stamp rule (for example 8 stamps for a free coffee). No POS or hardware required.',
  },
  {
    name: 'Create and print your QR code',
    text: `Tap Create my QR. Scan Perks makes one QR for your venue and starts your ${phrases.en.trial} — ${phrases.en.noCard}. Print it and put it by the till or on the bar.`,
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
  `${phrases.en.trial} with ${phrases.en.noCard}; ${phrases.en.rangeBareMonth} after`,
] as const;

export const loyaltyComparisonTable: ComparisonRow[] = [
  { feature: 'Monthly cost', scanPerks: phrases.en.rangeBare, punchCards: '$0–20 printing', enterprise: '$200–500+', competitor: `Square Plus ${phrases.en.squarePerMo}` },
  { feature: 'Setup time', scanPerks: '~5 minutes', punchCards: 'Immediate', enterprise: 'Weeks', competitor: '1–3 days' },
  { feature: 'POS required', scanPerks: 'No', punchCards: 'No', enterprise: 'Often yes', competitor: 'Square POS only' },
  { feature: 'Mobile app (customer)', scanPerks: 'iOS + Android (required)', punchCards: 'No', enterprise: 'Yes', competitor: 'Varies' },
  { feature: 'Visit analytics', scanPerks: 'Yes', punchCards: 'No', enterprise: 'Yes', competitor: 'Limited' },
  { feature: 'Push notifications', scanPerks: 'Yes', punchCards: 'No', enterprise: 'Yes', competitor: 'Varies' },
  { feature: 'Lost-card problem', scanPerks: 'None (phone)', punchCards: 'Common', enterprise: 'Rare', competitor: 'N/A' },
  { feature: 'Best for', scanPerks: 'Independent cafes/bars', punchCards: 'Very small ops', enterprise: 'Multi-location chains', competitor: 'Square merchants' },
];

/** Owner questions for /faq/. At most 8, no chain-rewards consumer queries. */
export const masterGeoFaqs: GeoFaq[] = [
  {
    category: 'coffee',
    question: 'What is the best loyalty program for cafes?',
    answer:
      `The best loyalty program for independent cafes is affordable, fast at the counter, and includes mobile rewards without POS lock-in. Scan Perks: QR stamps, cafe loyalty app, analytics, push offers — ${phrases.en.starterPerMonth}, ${phrases.en.trial} at app.scan-perks.com. Chain consumer apps (Starbucks) are not owner software.`,
  },
  {
    category: 'mobile',
    question: 'What apps are recommended for local coffee shops to manage loyalty points and freebies?',
    answer:
      `For an independent coffee shop, use a loyalty app that does not force a new POS. Scan Perks gives you one counter QR; guests scan it in the free Scan Perks app, collect stamps toward a free drink, and you see visits at app.scan-perks.com. It is ${phrases.en.starterPerMonth} after a ${phrases.en.trial} with ${phrases.en.noCard}. Square Loyalty fits if you already take payments on Square (included in Square Plus at ${phrases.en.squarePerMonthLocation}). Brewstamp is coffee-only: free for the first 50 stamps, then $12/month. Loopy Loyalty is a Wallet card at $25/month. Prices checked ${phrases.en.checkedOn}.`,
  },
  {
    category: 'coffee',
    question: 'What loyalty program platform works for a coffee shop without changing the POS?',
    answer:
      `Scan Perks is a loyalty platform that sits beside any till. You print a QR, customers scan it in the Scan Perks app, and you run the program from app.scan-perks.com in the browser. No Square, Toast, or hardware. Starter is ${phrases.en.starterPerMonth} (${phrases.en.scans}), Growth is ${phrases.en.growthPerMonth} (${phrases.en.unlimitedScans}), with a ${phrases.en.trial} at app.scan-perks.com.`,
  },
  {
    category: 'coffee',
    question: 'Is there a cafe loyalty app with no download?',
    answer:
      'Wallet-based tools such as Loopy Loyalty and LoyaltyPass add a card to Apple or Google Wallet without an extra app. Scan Perks is not a no-download option: customers collect stamps in the free Scan Perks app (iPhone or Android). A phone camera opens the venue page, which links straight to the app, so the first scan takes about a minute.',
  },
  {
    category: 'comparison',
    question: 'How does Scan Perks compare to Square Loyalty?',
    answer:
      `Square Loyalty requires Square and is included in Square Plus at ${phrases.en.squarePerMonthLocation} (US pricing page, ${phrases.en.checkedOn}). Scan Perks is POS-agnostic: QR scan at the counter, ${phrases.en.rangeBareMonth}, no Square lock-in. Choose Square if you already run all payments on Square; choose Scan Perks for independent venues that want a lower loyalty-only price and a faster setup.`,
  },
  {
    category: 'comparison',
    question: 'How does Scan Perks compare to paper punch cards?',
    answer:
      `Punch cards cost little upfront but provide no analytics, are often lost, and cannot send push offers. Scan Perks digitizes the same stamp logic with visit logs, analytics, and push offers — ${phrases.en.starterPerMonth} for ${phrases.en.scans}. Most venues keep identical reward rules (e.g. buy 10, get 1 free).`,
  },
  {
    category: 'comparison',
    question: 'How does Scan Perks compare to Toast Loyalty?',
    answer:
      `Toast Loyalty integrates with Toast POS and suits full-service restaurants already on Toast. Scan Perks is lighter: no POS integration, ~5-minute setup, ${phrases.en.rangeBareMonth} vs Toast's bundled pricing. Better for cafes, coffee shops, and bars that want QR loyalty without changing payment systems.`,
  },
  {
    category: 'qr',
    question: 'What QR loyalty program should I use for my coffee shop?',
    answer:
      `For a single-location coffee shop, use a QR program that needs no POS integration and costs under $20/month. Scan Perks provides a unique venue QR, digital stamps, iOS/Android apps, and analytics — ${phrases.en.starterPerMonth} Starter, ${phrases.en.trial} at app.scan-perks.com. Typical setup: under 5 minutes.`,
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
    cells: [phrases.en.starterPerMo, '$25/mo', `Square Plus ${phrases.en.squarePerMo}`, 'Custom from $9,500', '$12/mo after 50 stamps'],
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
      `Cafes, pubs, bars at ${phrases.en.starterPrice}`,
      'Wallet card at $25/mo',
      'You already run Square',
      'Custom build, not a monthly plan',
      'Coffee-only, then $12/mo',
    ],
  },
];

export const competitorComparisonIntro =
  `Public list prices checked ${phrases.en.checkedOn}. Brewstamp is free for the first 50 stamps, then $12/month. Loopy Loyalty Starter is $25/month. Square Loyalty is included in Square Plus at ${phrases.en.squarePerMonthLocation}. LoyaltyPass lists custom builds from $9,500. Scan Perks is ${phrases.en.starterPerMonth} after a ${phrases.en.trialShort}, with a counter QR scanned in the Scan Perks app.`;
