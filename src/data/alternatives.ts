/**
 * Competitor alternative pages. One record, one URL.
 *
 * A competitor price is published only when amount, an https sourceUrl,
 * and checkedOn (YYYY-MM-DD) are all set. Otherwise the page says
 * "price to confirm". Do not copy siteFacts.squarePlus here: that record
 * has no source URL.
 *
 * Scan Perks price, trial, and whether customers need the app come from site-facts.ts.
 */

import { phrases, siteFacts } from './site-facts';

export type CompetitorPrice =
  | { amount: null; sourceUrl: null; checkedOn: null }
  | { amount: string; sourceUrl: string; checkedOn: string };

export interface Alternative {
  slug: string;
  name: string;
  joinMethod: string;
  posRequired: string;
  /** Condition for the "When to pick them instead" row. No price. */
  pickInstead: string;
  /** One line in the loyalty guides block. No price. */
  guideLine: string;
  price: CompetitorPrice;
}

/** TODO(owner): verify this public price, then replace with amount, sourceUrl, and checkedOn. */
function unverifiedPrice(): CompetitorPrice {
  return { amount: null, sourceUrl: null, checkedOn: null };
}

export const alternativePages: Alternative[] = [
  {
    slug: 'loopy-loyalty-alternative',
    name: 'Loopy Loyalty',
    joinMethod: 'Apple / Google Wallet',
    posRequired: 'No',
    pickInstead: 'You want an Apple or Google Wallet card and no extra app.',
    guideLine: 'Wallet card, no POS',
    price: unverifiedPrice(),
  },
  {
    slug: 'square-loyalty-alternative',
    name: 'Square Loyalty',
    joinMethod: 'Square checkout',
    posRequired: 'Yes. Square POS.',
    pickInstead: 'You already take payments on Square.',
    guideLine: 'Use it if you already run Square',
    price: unverifiedPrice(),
  },
  {
    slug: 'brewstamp-alternative',
    name: 'Brewstamp',
    joinMethod: 'Camera QR and a wallet card',
    posRequired: 'No',
    pickInstead: 'You only run a coffee shop and do not want customers to install an app.',
    guideLine: 'Coffee shops, no POS',
    price: unverifiedPrice(),
  },
  {
    slug: 'stamp-me-alternative',
    name: 'Stamp Me',
    joinMethod: 'Stamp Me app, web app, or Wallet',
    posRequired: 'No',
    pickInstead: 'You want their app, web app, or Wallet, and you do not need a POS.',
    guideLine: 'App, web, or Wallet. No POS',
    price: unverifiedPrice(),
  },
];

export const scanPerksColumn = {
  name: 'Scan Perks',
  price: phrases.en.rangePerMonth,
  joinMethod: siteFacts.customerStampRequiresInstalledApp
    ? 'Counter QR in the Scan Perks app'
    : 'Counter QR without the Scan Perks app',
  posRequired: 'No',
  pickInstead: `Cafes, pubs, and bars at ${phrases.en.rangePerMonth}.`,
} as const;

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

export function competitorPriceLabel(price: CompetitorPrice): {
  text: string;
  sourceUrl: string | null;
  checkedOn: string | null;
} {
  if (
    price.amount &&
    price.sourceUrl?.startsWith('https://') &&
    price.checkedOn &&
    ISO_DATE.test(price.checkedOn)
  ) {
    return { text: price.amount, sourceUrl: price.sourceUrl, checkedOn: price.checkedOn };
  }
  return { text: 'price to confirm', sourceUrl: null, checkedOn: null };
}

export function getAlternative(slug: string): Alternative | undefined {
  return alternativePages.find((page) => page.slug === slug);
}

export function alternativeMeta(page: Alternative): { title: string; description: string; heading: string } {
  const competitorPrice = competitorPriceLabel(page.price).text;
  return {
    title: `${page.name} Alternative for Cafe Owners — Starter ${phrases.en.starterPerMo}`,
    description: `${page.name} alternative for owners: Scan Perks stamp card Starter ${phrases.en.starterPerMo} (${phrases.en.scans}), ${phrases.en.trial} with ${phrases.en.noCard}. ${phrases.en.oneVenuePerLoginCap}. ${phrases.en.stampsInInstalledAppCap}. ${page.name} price: ${competitorPrice}.`,
    heading: `${page.name} alternative for cafe & pub owners`,
  };
}

/** Opening answer for AlternativePage — Scan Perks facts only; competitor price via competitorPriceLabel. */
export function alternativeOpening(page: Alternative): string {
  const competitorPrice = competitorPriceLabel(page.price).text;
  const pos = page.posRequired.endsWith('.') ? page.posRequired : `${page.posRequired}.`;
  return `Owners comparing ${page.name} to Scan Perks: Scan Perks is a counter QR stamp card for cafes, pubs, and bars. Starter is ${phrases.en.starterPerMonth} for ${phrases.en.scans} after a ${phrases.en.trial} with ${phrases.en.noCard}. ${phrases.en.oneVenuePerLoginCap}. ${phrases.en.stampsInInstalledAppCap}. ${page.name} price: ${competitorPrice}. Customers join via ${page.joinMethod}. POS required: ${pos} When to pick ${page.name} instead: ${page.pickInstead}`;
}
