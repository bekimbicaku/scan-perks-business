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
    title: 'Scan Perks in 37 seconds — QR loyalty for cafes',
    description:
      'Customers scan the QR on your counter with their phone camera — no app download. Every visit earns a stamp, offers land on their phone, and you see every visit in the dashboard. $10/month, 14-day free trial, no contract, no POS.',
    src: '/videos/scan-perks-promo-9x16.mp4',
    poster: '/videos/scan-perks-promo-9x16.jpg',
    duration: 'PT37S',
    uploadDate: '2026-09-29',
  },
  {
    id: 'after-hours',
    title: 'Scan Perks after hours — loyalty for bars, pubs and late-night cafes',
    description:
      'Replace paper stamp cards with a QR customers scan at the bar. Every visit is logged, and when a night is quiet you send an offer like double stamps till 6 pm. Turn first visits into regulars with Scan Perks.',
    src: '/videos/scan-perks-after-hours-9x16.mp4',
    poster: '/videos/scan-perks-after-hours-9x16.jpg',
    duration: 'PT44S',
    uploadDate: '2026-09-29',
  },
];
