import { phrases } from './site-facts';
/** CTR-optimized titles & descriptions (GSC Oct 2026: pricing pos~5 / how~7 / features~10, near-zero CTR) */

export const featuresSeo = {
  title: 'Cafe Loyalty Features — QR Stamps, Push Offers, Free Trial | Scan Perks',
  description:
    `Cafe & pub loyalty features: counter QR stamps, iOS/Android customer app, analytics, push offers, happy hour. No POS. ${phrases.en.trial}, then ${phrases.en.starterPerMo}.`,
  h1: 'Cafe Loyalty App & Pub Loyalty Features',
  heroSeoLine:
    'Everything owners need for a cafe loyalty app or pub loyalty card — without $200/mo enterprise tools.',
  heroDesc:
    'QR stamps, push offers, visit analytics, and print-ready posters. No POS. Setup in about 5 minutes — then open the app and go live.',
  directAnswer:
    `Scan Perks includes a QR code loyalty program, digital stamp rewards, offers pushed to members, happy-hour double stamps, birthday treats, visit analytics, local discovery listing, and print-ready QR posters. It does not require POS integration or extra hardware — setup takes about 5 minutes. ${phrases.en.stampLine}`,
};

export const pricingSeo = {
  title: `Owner Loyalty Pricing — Starter ${phrases.en.starterPerMo}, Growth ${phrases.en.growthPerMo}`,
  description:
    `Cafe and pub owner pricing: Starter ${phrases.en.starterPerMo} (${phrases.en.scans}), Growth ${phrases.en.growthPerMo} (${phrases.en.unlimitedScans}). ${phrases.en.trial} with ${phrases.en.noCard}. No POS.`,
  h1: 'Owner loyalty pricing for cafes, pubs & bars',
  heroSeoLine:
    `Starter ${phrases.en.starterPerMo} (${phrases.en.scans}) or Growth ${phrases.en.growthPerMo} (${phrases.en.unlimitedScans}) after a ${phrases.en.trialShort} with ${phrases.en.noCard}.`,
  directAnswer:
    `Scan Perks is self-serve owner pricing: Starter ${phrases.en.starterPerMonth} for ${phrases.en.scans}, Growth ${phrases.en.growthPerMonth} for ${phrases.en.unlimitedScans} (unlimited scans, not unlimited push). Every venue starts with a ${phrases.en.trial} with ${phrases.en.noCard} — billing starts when you add a card. No annual contract, no POS. Owners run the dashboard at app.scan-perks.com.`,
};
