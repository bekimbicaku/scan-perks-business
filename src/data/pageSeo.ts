import { phrases, siteFacts } from './site-facts';
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
  title: `${phrases.en.starterPerMo} Loyalty App — ${phrases.en.trialCap}, No Contract`,
  description:
    `From ${phrases.en.starterPerMo} for cafe and pub owners. Square Plus is ${phrases.en.squarePerMo} per ${siteFacts.squarePlus.per} and includes loyalty. Loopy is $25/mo. ${phrases.en.trialShort}, no contract, no POS.`,
  h1: `${phrases.en.starterPerMo} Loyalty App — ${phrases.en.trialCap}, No Contract`,
  heroDesc:
    `Starter ${phrases.en.starterPerMo} · Growth ${phrases.en.growthPerMo} · start your ${phrases.en.trial} in the app today.`,
  directAnswer:
    `Scan Perks costs ${phrases.en.starterPerMonth} (Starter, ${phrases.en.scansUpTo}) or ${phrases.en.growthPerMonth} (Growth, ${phrases.en.unlimitedScans}). Every venue starts with a ${phrases.en.trial} with ${phrases.en.noCard}, and there is no annual contract. Enterprise hospitality loyalty tools typically cost $200+/month; Scan Perks targets single-location independents. Start at app.scan-perks.com.`,
};
