import { phrases } from './site-facts';
export interface PromoVideo {
  id: string;
  title: string;
  description: string;
  src: string;
  poster: string;
  /** ISO 8601 duration */
  duration: string;
  uploadDate: string;
}

export const promoVideos: PromoVideo[] = [
  {
    id: 'promo',
    title: 'Scan Perks in 37 seconds — stamp in the app at the counter QR',
    description:
      `Customers open the Scan Perks app, tap Scan, and stamp at your counter QR. A phone camera may open the venue page with an app link — that is not a stamp. Offers land on their phone; you see visits in the dashboard. ${phrases.en.starterPerMonth}, ${phrases.en.trial}, no POS.`,
    src: '/videos/scan-perks-promo-9x16.mp4',
    poster: '/videos/scan-perks-promo-9x16.jpg',
    duration: 'PT37S',
    uploadDate: '2026-09-29',
  },
  {
    id: 'after-hours',
    title: 'Scan Perks after hours — bar QR stamps in the Scan Perks app',
    description:
      'Replace paper stamp cards with a bar QR. Regulars open the Scan Perks app, tap Scan, and collect stamps toward a free drink. When a night is quiet, send an offer like double stamps till 6 pm.',
    src: '/videos/scan-perks-after-hours-9x16.mp4',
    poster: '/videos/scan-perks-after-hours-9x16.jpg',
    duration: 'PT44S',
    uploadDate: '2026-09-29',
  },
];
