/** Real product screens from Bekim's how-to guide (phone screenshots). */

export interface GuideScreen {
  id: string;
  src: string;
  width: number;
  height: number;
  title: string;
  caption: string;
  alt: string;
}

export const guideScreens = {
  customerHome: {
    id: 'customer-home',
    src: '/images/guide-customer-home.webp',
    width: 1080,
    height: 2154,
    title: 'Customer stamp card',
    caption:
      'In the free Scan Perks app, customers see their points, venues, and stamp progress — stamps are collected in the app, not the browser.',
    alt: 'Scan Perks customer home showing total points, six venues, and a Bella Pizza stamp card at 6 of 10 stamps',
  },
  customerVenue: {
    id: 'customer-venue',
    src: '/images/guide-customer-venue.webp',
    width: 1080,
    height: 2128,
    title: 'Venue page + Scan',
    caption:
      'Opening a venue shows the reward and a Scan button. Customers tap Scan in the app and point at your counter QR.',
    alt: 'Scan Perks customer venue view for Bella Pizza with reward details and Scan in the app button',
  },
  ownerQr: {
    id: 'owner-qr',
    src: '/images/guide-owner-qr.webp',
    width: 1080,
    height: 2154,
    title: 'Counter QR',
    caption:
      'Your business overview holds one counter QR to print or show on a tablet — put it by the till and start collecting stamps.',
    alt: 'Scan Perks owner overview for Bella Pizza with Growth Plan badge and counter QR for 8 stamps then free pizza',
  },
  reviewHours: {
    id: 'review-hours',
    src: '/images/guide-review-hours.webp',
    width: 1080,
    height: 2154,
    title: 'Reviews and hours',
    caption:
      'Add Google and TripAdvisor review links (shown after a scan) and set weekly hours so members know when you are open.',
    alt: 'Scan Perks business settings with Google and TripAdvisor review URL fields and weekly opening hours',
  },
  analytics: {
    id: 'analytics',
    src: '/images/guide-analytics.webp',
    width: 1080,
    height: 2154,
    title: 'Visit analytics',
    caption:
      'Every scan is a visit. See total scans, unique customers, active rewards, and redemption rate — data a paper card never gives you.',
    alt: 'Scan Perks business analytics showing total scans, unique customers, active and redeemed rewards, and redemption rate',
  },
  segments: {
    id: 'segments',
    src: '/images/guide-segments.webp',
    width: 1080,
    height: 2154,
    title: 'Segments and growth',
    caption:
      'Spot active, inactive, and loyal members, then share your business link or send a win-back offer from the same screen.',
    alt: 'Scan Perks customer segments for active, inactive and loyal members with share and win-back growth tools',
  },
  happyHour: {
    id: 'happy-hour',
    src: '/images/guide-happy-hour.webp',
    width: 1080,
    height: 2154,
    title: 'Happy hour + rewards',
    caption:
      'Schedule double-stamp windows for quiet hours and set how many stamps earn your reward (for example 8 for a free pizza).',
    alt: 'Scan Perks Happy Hour Boost schedule and loyalty program settings with 8 stamps for a free pizza',
  },
  createOffer: {
    id: 'create-offer',
    src: '/images/guide-create-offer.webp',
    width: 1080,
    height: 2154,
    title: 'Member offers',
    caption:
      'Post a push offer to loyalty members — title, description, validity, and terms — without another marketing tool.',
    alt: 'Scan Perks Create New Offer form for sending push promotions to loyalty members',
  },
} as const satisfies Record<string, GuideScreen>;

export type GuideScreenId = keyof typeof guideScreens;

/** Full walkthrough on /how-it-works/ */
export const howItWorksGuideScreenIds: GuideScreenId[] = [
  'customerHome',
  'customerVenue',
  'ownerQr',
  'reviewHours',
  'analytics',
  'segments',
  'happyHour',
  'createOffer',
];

/** Curated set for the home media section */
export const homeGuideScreenIds: GuideScreenId[] = [
  'customerHome',
  'ownerQr',
  'analytics',
  'createOffer',
];
