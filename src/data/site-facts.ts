/**
 * Confirmed product facts for the marketing site.
 * Pages and translations import these. They do not restate the numbers.
 *
 * Unset on purpose — do not publish a number for them:
 * push allowance, welcome-stamp count, pound/euro price, repeat-visit lift.
 * growth.scansPerMonth null means unlimited scans. It does not mean members or push.
 */

export const siteFacts = {
  starter: { priceUsd: 10, scansPerMonth: 500, memberCap: null },
  growth: { priceUsd: 15, scansPerMonth: null },
  push: undefined,
  trial: { days: 14, cardRequired: false },
  venuesPerLogin: 1,
  customerStampRequiresInstalledApp: true,
  browserCameraAddsStamp: false,
  scansPerCustomerPerVenuePerDay: 1,
  repeatVisitLiftPercent: null,
  rankingNotesOnPublicPages: false,
  squarePlus: { priceUsd: 49, per: 'location', checkedOn: '2026-11-07' },
  gbpPrice: undefined,
  welcomeStampOnFirstScan: undefined,
} as const;

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] as const;

function formatCheckedOn(iso: string): string {
  const [year, month, day] = iso.split('-').map(Number);
  return `${day} ${MONTHS[month - 1]} ${year}`;
}

const starter = siteFacts.starter;
const growth = siteFacts.growth;
const trial = siteFacts.trial;
const square = siteFacts.squarePlus;

const noCard = trial.cardRequired ? 'card required' : 'no card';
const growthScans =
  growth.scansPerMonth == null ? 'unlimited scans' : `${growth.scansPerMonth} scans a month`;

const stampInstall = siteFacts.customerStampRequiresInstalledApp
  ? 'Customers collect a counter stamp in the installed Scan Perks app.'
  : 'Customers can collect a counter stamp without installing the app.';
const stampBrowser = siteFacts.browserCameraAddsStamp
  ? 'The browser can add a stamp.'
  : 'The browser does not add a stamp.';

/** Display phrases. Every number comes from siteFacts. */
export const phrases = {
  en: {
    starterPerMonth: `$${starter.priceUsd}/month`,
    starterPerMo: `$${starter.priceUsd}/mo`,
    starterPrice: `$${starter.priceUsd}`,
    growthPerMonth: `$${growth.priceUsd}/month`,
    growthPerMo: `$${growth.priceUsd}/mo`,
    growthPrice: `$${growth.priceUsd}`,
    rangePerMonth: `$${starter.priceUsd}–$${growth.priceUsd}/month`,
    rangeBareMonth: `$${starter.priceUsd}–${growth.priceUsd}/month`,
    rangeBare: `$${starter.priceUsd}–${growth.priceUsd}`,
    orMonth: `$${starter.priceUsd} or $${growth.priceUsd} a month`,
    scans: `${starter.scansPerMonth} scans a month`,
    scansUpTo: `up to ${starter.scansPerMonth} scans a month`,
    scansUpToCap: `Up to ${starter.scansPerMonth} scans a month`,
    scansSlash: `${starter.scansPerMonth} scans/month`,
    unlimitedScans: growthScans,
    unlimitedScansCap: growthScans.charAt(0).toUpperCase() + growthScans.slice(1),
    trial: `${trial.days}-day free trial`,
    trialCap: `${trial.days}-Day Free Trial`,
    trialShort: `${trial.days}-day trial`,
    trialDay: `${trial.days}-day`,
    trialDays: `${trial.days} days`,
    trialDaysCap: `${trial.days} Days`,
    noCard,
    noCardCap: noCard.charAt(0).toUpperCase() + noCard.slice(1),
    noCreditCard: trial.cardRequired ? 'credit card required' : 'no credit card required',
    noCardNeeded: trial.cardRequired ? 'Card needed' : 'No card needed',
    squarePerMonthLocation: `$${square.priceUsd}/month per ${square.per}`,
    squarePerLocation: `$${square.priceUsd} per ${square.per}`,
    squarePerMo: `$${square.priceUsd}/mo`,
    squarePrice: `$${square.priceUsd}`,
    checkedOn: formatCheckedOn(square.checkedOn),
    forOneVenue: siteFacts.venuesPerLogin === 1 ? 'for one venue' : `for ${siteFacts.venuesPerLogin} venues`,
    priceSchemaStarter: starter.priceUsd.toFixed(2),
    priceSchemaGrowth: growth.priceUsd.toFixed(2),
    stampLine: `${stampInstall} ${stampBrowser} Owners use the web dashboard.`,
  },
  es: {
    starterPerMonth: `${starter.priceUsd} $/mes`,
    growthPerMonth: `${growth.priceUsd} $/mes`,
    rangePerMonth: `${starter.priceUsd}–${growth.priceUsd} $/mes`,
    scans: `${starter.scansPerMonth} escaneos al mes`,
    unlimitedScans: growth.scansPerMonth == null ? 'escaneos ilimitados' : `${growth.scansPerMonth} escaneos al mes`,
    trialDays: `${trial.days} días`,
    noCard: trial.cardRequired ? 'con tarjeta' : 'sin tarjeta',
  },
  de: {
    starterPerMonth: `${starter.priceUsd} $/Monat`,
    growthPerMonth: `${growth.priceUsd} $/Monat`,
    rangePerMonth: `${starter.priceUsd}–${growth.priceUsd} $/Monat`,
    orPerMonth: `${starter.priceUsd} oder ${growth.priceUsd} $/Monat`,
    scans: `${starter.scansPerMonth} Scans im Monat`,
    unlimitedScans: growth.scansPerMonth == null ? 'unbegrenzte Scans' : `${growth.scansPerMonth} Scans im Monat`,
    trialDays: `${trial.days} Tage`,
    trialCompound: `${trial.days}-Tage`,
    noCard: trial.cardRequired ? 'Karte nötig' : 'keine Karte nötig',
  },
  fr: {
    starterPerMonth: `${starter.priceUsd} $/mois`,
    growthPerMonth: `${growth.priceUsd} $/mois`,
    rangePerMonth: `${starter.priceUsd}–${growth.priceUsd} $/mois`,
    orPerMonth: `${starter.priceUsd} ou ${growth.priceUsd} $/mois`,
    scans: `${starter.scansPerMonth} scans par mois`,
    unlimitedScans: growth.scansPerMonth == null ? 'scans illimités' : `${growth.scansPerMonth} scans par mois`,
    trialDays: `${trial.days} jours`,
    noCard: trial.cardRequired ? 'carte requise' : 'sans carte',
  },
  it: {
    starterPerMonth: `${starter.priceUsd} $/mese`,
    growthPerMonth: `${growth.priceUsd} $/mese`,
    rangePerMonth: `${starter.priceUsd}–${growth.priceUsd} $/mese`,
    orPerMonth: `${starter.priceUsd} o ${growth.priceUsd} $/mese`,
    scans: `${starter.scansPerMonth} scansioni al mese`,
    unlimitedScans: growth.scansPerMonth == null ? 'scansioni illimitate' : `${growth.scansPerMonth} scansioni al mese`,
    trialDays: `${trial.days} giorni`,
    noCard: trial.cardRequired ? 'carta richiesta' : 'senza carta',
  },
} as const;
