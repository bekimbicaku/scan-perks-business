import { phrases } from './site-facts';

export interface FaqItem {
  question: string;
  answer: string;
}

export const pricingFaqs: FaqItem[] = [
  {
    question: 'How much does a cafe or bar loyalty program cost per month?',
    answer:
      `Scan Perks costs ${phrases.en.starterPerMonth} (Starter, ${phrases.en.scansUpTo}) or ${phrases.en.growthPerMonth} (Growth, ${phrases.en.unlimitedScans}). Both include QR loyalty, analytics, and a ${phrases.en.trial} — vs $200+/month for enterprise loyalty software.`,
  },
  {
    question: 'Is there a free trial for Scan Perks loyalty software?',
    answer:
      `Yes — every plan includes a ${phrases.en.trial} with ${phrases.en.noCard} and no long-term contract. Start at app.scan-perks.com, set your rewards, and print your QR code the same day.`,
  },
  {
    question: `What is included in the ${phrases.en.starterPerMonth} Starter loyalty plan?`,
    answer:
      `Starter includes one counter QR and stamp card, ${phrases.en.scansUpTo}, basic analytics, offers pushed to members, happy hour and birthday treats, and a listing in the app's Nearby list.`,
  },
  {
    question: 'Can I cancel my Scan Perks subscription anytime?',
    answer:
      'Yes. Cancel anytime with no penalties. Plans are month-to-month — no annual lock-in required.',
  },
];

export const featuresFaqs: FaqItem[] = [
  {
    question: 'Does Scan Perks include a QR code loyalty program?',
    answer:
      `Yes. Every plan includes a full QR code loyalty program — unique venue QR, digital loyalty card for customers, visit analytics, and push offers from ${phrases.en.starterPerMonth}.`,
  },
  {
    question: 'What features does the Scan Perks cafe loyalty app include?',
    answer:
      `Digital stamp rewards, counter QR scanning, customer profiles, push notifications, print-ready QR posters, and local discovery — all from ${phrases.en.starterPerMonth}.`,
  },
  {
    question: 'Can Scan Perks help bars run a pub loyalty scheme?',
    answer:
      'Yes. Bar loyalty program features include pub loyalty scheme rewards, happy-hour push notifications, free-drink tiers, and visit tracking for regulars.',
  },
  {
    question: 'How does Scan Perks compare to Square Loyalty?',
    answer:
      `Square Loyalty requires Square and is included in Square Plus at ${phrases.en.squarePerMonthLocation}. Scan Perks is POS-agnostic: QR scan at the counter, ${phrases.en.rangeBareMonth}, no Square lock-in. Choose Square if all payments run on Square; choose Scan Perks for a lower loyalty-only price at independents.`,
  },
  {
    question: 'How fast can I launch Scan Perks at my venue?',
    answer:
      'Most cafes and bars go live in under 5 minutes: sign up at app.scan-perks.com, set rewards, download your QR code, and display it at the counter. No POS integration required.',
  },
];
