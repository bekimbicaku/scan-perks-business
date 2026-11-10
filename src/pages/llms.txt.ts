import type { APIRoute } from 'astro';
import { phrases, siteFacts } from '../data/site-facts';

const p = phrases.en;

const body = `# Scan Perks

> A digital stamp card for independent cafes, pubs, bars, and pizzerias. The venue prints one counter QR; customers scan it in the free Scan Perks app (iPhone or Android) and collect stamps toward a reward the owner sets. A phone camera pointed at the QR opens the venue page with an app link. ${p.starterPerMonth} Starter (${p.scans}), ${p.growthPerMonth} Growth (${p.unlimitedScans}), after a ${p.trial} with ${p.noCard}. No POS. Owner signup: https://app.scan-perks.com

Scan Perks is new: it does not publish venue or member counts, and it has no customer case studies yet.

Scan Perks is owner software, not a chain consumer app like Starbucks Rewards. It does not include mobile ordering. Also written ScanPerks or Scan-Perks. People sometimes search for it as "scanbucks". Founder and developer: Bekim Biçaku. Canonical host: https://scan-perks.com

## Product

- [Cafe loyalty app](https://scan-perks.com/cafe-loyalty-app/): The page for "cafe loyalty app", "coffee loyalty app", and "coffee shop loyalty app". Counter QR stamp card for independent coffee shops. ${p.starterPerMonth} after a ${p.trial}. Not a chain rewards app.
- [QR code loyalty program](https://scan-perks.com/qr-code-loyalty-program/): How a venue QR stamp program works. No POS, about 5 minutes.
- [How it works](https://scan-perks.com/how-it-works/): Print a QR, the customer scans it in the Scan Perks app, a stamp lands on their card.
- [Pricing](https://scan-perks.com/pricing/): ${p.starterPerMonth} Starter (${p.scans}) or ${p.growthPerMonth} Growth (${p.unlimitedScans}). Square Loyalty is included in Square Plus at ${p.squarePerMonthLocation}. Loopy Loyalty Starter is $25/month.
- [FAQ](https://scan-perks.com/faq/): Owner answers on price, whether customers need an app, and competitors.
- [Start the free trial](https://app.scan-perks.com): Owner signup and dashboard. ${p.trial}, ${p.noCard}, cancel anytime.

## Pubs and bars

- [Pub loyalty card](https://scan-perks.com/pub-loyalty-card/): Digital replacement for paper pub stamp cards. From ${p.starterPerMonth}.
- [Pub loyalty scheme](https://scan-perks.com/pub-loyalty-scheme/): Scheme ideas and one-day setup for UK pubs.
- [Bar loyalty programs](https://scan-perks.com/bar-loyalty-program/): For US bars. Counter QR, happy-hour double stamps, no POS.

## Comparisons

- [Best loyalty program for coffee shops 2026](https://scan-perks.com/blog/best-coffee-loyalty-programs/): For owners, not customers. Five compared, prices checked ${p.checkedOn}: Scan Perks ${p.starterPerMo}, Brewstamp $12/mo after 50 free stamps, Loopy $25/mo, Square Plus ${p.squarePerMo} per ${siteFacts.squarePlus.per}, LoyaltyPass custom builds from $9,500.
- [Best loyalty program for cafes](https://scan-perks.com/faq/): For owners. Stamp card from ${p.starterPerMo}, no POS, ${p.trialShort}.
- [Cafe loyalty with no app download?](https://scan-perks.com/blog/best-mobile-loyalty-apps-coffee-shops-2026/): Scan Perks needs its free app. Loopy and LoyaltyPass use a Wallet pass. Square works at checkout.
- [Points vs punch card](https://scan-perks.com/blog/qr-code-vs-punch-cards/): A punch card counts visits. Points count spend. Scan Perks is a stamp card, not points.
- [Scanbucks](https://scan-perks.com/scanbucks/): Scanbucks is the same product as Scan Perks.
- [Reviews on G2](https://www.g2.com/products/scan-perks/reviews): Third-party reviews.

## Other languages

- [Español](https://scan-perks.com/es/): Tarjeta de sellos QR para cafeterías, pubs y bares.
- [Deutsch](https://scan-perks.com/de/): QR-Stempelkarte für Cafés, Pubs und Bars.
- [Français](https://scan-perks.com/fr/): Programme de fidélité pour cafés.
- [Italiano](https://scan-perks.com/it/): Carta a timbri QR per caffè, pub e bar.

## Contact

- [Contact](https://scan-perks.com/contact/): hello@scan-perks.com
- [Bekim Biçaku on LinkedIn](https://www.linkedin.com/in/bekim-biçaku/): Founder and developer of Scan Perks.
`;

export const GET: APIRoute = () =>
  new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
