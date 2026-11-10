/**
 * Business-type stamp-card pages. One record, one URL.
 *
 * Price, trial, the installed-app stamp, scans per day, and venues per login
 * come from site-facts.ts. Reward numbers below are examples the owner types
 * in. They are not a product default.
 *
 * Not published: car washes. The program those businesses run is an unlimited
 * monthly membership, often opened by a license-plate camera or an RFID tag.
 * Scan Perks does not sell customer memberships, bill the driver, or read a
 * plate. A stamp is added only when the customer scans the QR in the installed
 * app, which is not how a tunnel wash checks a car in.
 */

import { phrases, siteFacts } from './site-facts';

export interface BusinessType {
  slug: string;
  name: string;
  heading: string;
  /** Where the printed QR goes, as a prepositional phrase. */
  qrPlace: string;
  /** Owner-written reward, introduced with "for example". */
  rewardExample: string;
  limitHeading: string;
  limitBody: string;
  guideLine: string;
  faqs: { question: string; answer: string }[];
}

const perDay =
  siteFacts.scansPerCustomerPerVenuePerDay === 1
    ? 'One stamp per customer per day at that venue.'
    : `${siteFacts.scansPerCustomerPerVenuePerDay} stamps per customer per day at that venue.`;

const oneVenue =
  siteFacts.venuesPerLogin === 1
    ? 'One login runs one venue.'
    : `One login runs ${siteFacts.venuesPerLogin} venues.`;

function priceAnswer(): string {
  return `Starter is ${phrases.en.starterPerMonth} for ${phrases.en.scans}. Growth is ${phrases.en.growthPerMonth} for ${phrases.en.unlimitedScans}. ${oneVenue} Every venue starts with a ${phrases.en.trial}, ${phrases.en.noCard}.`;
}

function trialAnswer(): string {
  return `The trial starts when you tap Create my QR, with ${phrases.en.noCard}. Add a card before day ${siteFacts.trial.days} to continue on Starter at ${phrases.en.starterPerMonth}. If you do not, the QR stops adding new stamps. Stamps already earned stay on the card.`;
}

function appAnswer(): string {
  return `Yes. ${phrases.en.stampLine}`;
}

export const businessTypePages: BusinessType[] = [
  {
    slug: 'loyalty-program-for-barbers',
    name: 'Barbers',
    heading: 'Loyalty Program for Barbers',
    qrPlace: 'by the chair or at the front desk',
    rewardExample: '8 haircuts, then one free cut',
    limitHeading: 'One stamp for the visit',
    limitBody:
      'A haircut is one visit. A cut and a beard trim on the same day are still one stamp. The chair diary stays where it is. Scan Perks is the stamp card: you write one reward, for example 8 haircuts and then one free cut.',
    guideLine: 'QR by the chair, one stamp a visit',
    faqs: [
      {
        question: 'How does a loyalty card work at a barber shop?',
        answer: `Print one QR and put it by the chair or the front desk. The customer opens the free Scan Perks app, taps Scan, and collects a stamp toward a reward you set, for example 8 haircuts and then one free cut. ${perDay}`,
      },
      {
        question: 'Do customers need the Scan Perks app?',
        answer: appAnswer(),
      },
      {
        question: 'Does this book appointments or connect to the card machine?',
        answer:
          'No. The diary and the card machine stay as they are. Customers stamp by scanning your QR in the Scan Perks app.',
      },
      {
        question: 'A cut and a beard trim on the same day — how many stamps?',
        answer: `One. ${perDay} The card counts the visit, not each service on the ticket.`,
      },
      {
        question: 'How much does it cost for one barber shop?',
        answer: priceAnswer(),
      },
      {
        question: 'What happens when the free trial ends?',
        answer: trialAnswer(),
      },
    ],
  },
  {
    slug: 'loyalty-program-for-salons',
    name: 'Hair and nail salons',
    heading: 'Loyalty Program for Hair and Nail Salons',
    qrPlace: 'at reception',
    rewardExample: '8 visits, then a free blow-dry or a free polish',
    limitHeading: 'One card for the whole shop',
    limitBody:
      'Hair and nails share one QR and one reward when they are one venue. You write that reward, for example a free blow-dry or a free polish after 8 visits. A color and a manicure on the same day are one stamp. The booking book stays as it is. A second salon needs its own login.',
    guideLine: 'One card for the shop, stamp in the app',
    faqs: [
      {
        question: 'Can one shop run a hair card and a nail card?',
        answer: `No. ${oneVenue} Hair and nails on the same login share one QR and one reward, which you write — for example a free blow-dry, or a free polish, after the number of visits you set.`,
      },
      {
        question: 'Is the reward based on the bill or on the visit?',
        answer: `On the visit. A color and a manicure on the same day are one stamp. ${perDay} It is not a points balance, and it does not price a color differently from a polish.`,
      },
      {
        question: 'Do clients collect stamps in an app?',
        answer: appAnswer(),
      },
      {
        question: 'Does Scan Perks replace the booking book?',
        answer:
          'No. Scan Perks does not take bookings or deposits. Keep the diary you already use. This page is the stamp card only.',
      },
      {
        question: 'What does one salon pay?',
        answer: priceAnswer(),
      },
      {
        question: 'Do I have to change the card machine?',
        answer:
          'No. Nothing connects to the till or the card machine. Clients stamp by scanning the QR at reception in the Scan Perks app.',
      },
    ],
  },
  {
    slug: 'loyalty-program-for-bakeries',
    name: 'Bakeries',
    heading: 'Loyalty Program for Bakeries',
    qrPlace: 'on the counter',
    rewardExample: '8 visits, then a free loaf or pastry',
    limitHeading: 'One stamp for the visit, not the bag',
    limitBody:
      'Three loaves in one trip are one stamp. You write the reward, for example a free loaf or pastry after 8 visits. A second shop needs its own login.',
    guideLine: 'Counter QR, one stamp a visit',
    faqs: [
      {
        question: 'Does a customer get a stamp for each loaf?',
        answer: `No. Three loaves in one trip are one stamp. You write the reward, for example a free loaf or pastry after 8 visits. ${perDay}`,
      },
      {
        question: 'Where should the bakery QR sit?',
        answer:
          'On the counter, where people pay. Print it once. Customers scan it in the free Scan Perks app.',
      },
      {
        question: 'Do bakery customers install an app to collect the stamp?',
        answer: appAnswer(),
      },
      {
        question: 'Will this connect to the bakery till?',
        answer:
          'No. The stamp is the counter QR, scanned in the Scan Perks app. Nothing connects to the till.',
      },
      {
        question: 'What are Starter and Growth for a bakery?',
        answer: priceAnswer(),
      },
      {
        question: 'What happens to stamps if I do not add a card after the trial?',
        answer: trialAnswer(),
      },
    ],
  },
  {
    slug: 'loyalty-program-for-ice-cream-shops',
    name: 'Ice cream shops',
    heading: 'Loyalty Program for Ice Cream Shops',
    qrPlace: 'on the counter',
    rewardExample: '8 visits, then a free scoop',
    limitHeading: 'One stamp for the visit, not the scoop',
    limitBody:
      'A double scoop in one order is one stamp. You write the reward, for example a free scoop after 8 visits. This is a visit card. It is not a season pass, and the customer is not billed a monthly fee.',
    guideLine: 'Counter QR, one stamp a visit',
    faqs: [
      {
        question: 'Does a double scoop count as two stamps?',
        answer: `No. A double scoop in one order is one stamp. You write the reward, for example a free scoop after 8 visits. ${perDay}`,
      },
      {
        question: 'Does Scan Perks run a season pass or a monthly scoop club?',
        answer:
          'No. The program is a visit stamp card with a reward you write. The customer is not billed a monthly fee, and there is no season pass.',
      },
      {
        question: 'Where does the QR go in an ice cream shop?',
        answer: 'On the counter, where people order. They scan it in the free Scan Perks app.',
      },
      {
        question: 'Do customers stamp from the phone camera or the Scan Perks app?',
        answer: appAnswer(),
      },
      {
        question: 'Does an ice cream shop need a POS connection?',
        answer: 'No. The stamp is the counter QR in the Scan Perks app. Nothing connects to the till.',
      },
      {
        question: 'What is the monthly price after the trial?',
        answer: priceAnswer(),
      },
    ],
  },
  {
    slug: 'loyalty-program-for-food-trucks',
    name: 'Food trucks',
    heading: 'Loyalty Program for Food Trucks',
    qrPlace: 'on the service window',
    rewardExample: '8 visits, then a free item you name',
    limitHeading: 'The QR rides on the truck',
    limitBody:
      'Put the code on the service window. Scan Perks does not publish where the truck is parked that day, a route, or a map. Customers find the truck the way they do now, then stamp in the app. A second stop the same day is still one stamp. A second truck needs its own login.',
    guideLine: 'QR on the window, no live map',
    faqs: [
      {
        question: 'Can the QR live on the truck instead of a shop counter?',
        answer:
          'Yes. Print one QR and put it on the service window. Customers scan it in the free Scan Perks app. The code travels with the truck.',
      },
      {
        question: 'Does Scan Perks show where the truck is parked today?',
        answer:
          'No. Scan Perks does not publish a daily stop, a route, or a map of the truck. Customers find you the way they do now. The stamp card is the QR on the window.',
      },
      {
        question: 'If a regular comes back the same day, do they get a second stamp?',
        answer: `No. ${perDay} Lunch and a later stop the same day count once.`,
      },
      {
        question: 'Can someone stamp without installing the app while they wait in line?',
        answer: appAnswer(),
      },
      {
        question: 'I take cards on Square. Does the stamp happen at checkout?',
        answer: `No. The stamp is the QR on the window, scanned in the Scan Perks app, not a line on the Square receipt. Square Loyalty is the checkout option, included in Square Plus at ${phrases.en.squarePerMonthLocation} (checked ${phrases.en.checkedOn}).`,
      },
      {
        question: 'What does it cost for one truck?',
        answer: `${priceAnswer()} A second truck needs its own login.`,
      },
    ],
  },
];

const MAX_OWNER_FAQS = 8;

for (const page of businessTypePages) {
  const questions = page.faqs.map((item) => item.question.trim().toLowerCase());
  if (questions.length > MAX_OWNER_FAQS || new Set(questions).size !== questions.length) {
    throw new Error(`Owner FAQ limit failed for ${page.slug}`);
  }
}

export function getBusinessType(slug: string): BusinessType | undefined {
  return businessTypePages.find((page) => page.slug === slug);
}

export function businessTypeMeta(page: BusinessType): { title: string; description: string } {
  return {
    title: `${page.heading} — ${phrases.en.starterPerMo}, No POS | Scan Perks`,
    description: `${page.name} stamp card: one QR ${page.qrPlace}, scanned in the Scan Perks app. ${phrases.en.trial}, then ${phrases.en.starterPerMo}. No POS.`,
  };
}

export function businessTypeAnswer(page: BusinessType): string {
  return `${page.heading}: print one QR and put it ${page.qrPlace}. Customers scan it in the free Scan Perks app and collect stamps toward a reward you set, for example ${page.rewardExample}. ${perDay} ${phrases.en.stampLine} ${phrases.en.starterPerMonth} for ${phrases.en.scans}, or ${phrases.en.growthPerMonth} for ${phrases.en.unlimitedScans}, after a ${phrases.en.trial} with ${phrases.en.noCard}. No POS. ${oneVenue}`;
}

export function businessTypeHow(page: BusinessType): string {
  return `Sign up at app.scan-perks.com and open the Business tab. The type list is Bar, Pizzeria, Restaurant, Cafe, or Other. Choose Other. Set the reward you want, for example ${page.rewardExample}. Tap Create my QR, print it, and put it ${page.qrPlace}. The customer opens the free Scan Perks app, taps Scan, and points it at the code. ${perDay} When the card is full, they show the reward QR in the app and you scan it while signed in as the venue. Each reward can be redeemed once.`;
}

export function businessTypePrice(): string {
  return `Starter is ${phrases.en.starterPerMonth} for ${phrases.en.scans}. Growth is ${phrases.en.growthPerMonth} for ${phrases.en.unlimitedScans}. ${oneVenue} Both include the stamp card, the QR, visit analytics, and offers you push to members. The ${phrases.en.trial} starts when you tap Create my QR, with ${phrases.en.noCard}. Add a card before day ${siteFacts.trial.days} to continue on Starter. If you do not, the QR stops adding new stamps, and stamps already earned stay on the card.`;
}
