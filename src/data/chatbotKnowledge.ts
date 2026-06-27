import { SITE } from './content';

export interface ChatbotTopic {
  id: string;
  keywords: string[];
  answer: string;
  action: { href: string; label: string };
}

export const chatbotKnowledge: ChatbotTopic[] = [
  {
    id: 'business-loyalty',
    keywords: ['business loyalty', 'business loyalty program', 'loyalty program for business', 'buisness loyalty'],
    answer:
      'Scan Perks is a business loyalty program for bars, cafes, and restaurants. QR rewards, analytics, and push offers from $10/month. 14-day free trial.',
    action: { href: '/business-loyalty-program/', label: 'Business loyalty guide' },
  },
  {
    id: 'bar-loyalty',
    keywords: ['bar loyalty', 'bar loyal customers', 'bar rewards', 'pub loyalty'],
    answer:
      'Scan Perks bar loyalty program: QR scanning, happy-hour push alerts, free-drink tiers. From $10/month for independent bars.',
    action: { href: '/bar-loyalty-program/', label: 'Bar loyalty program' },
  },
  {
    id: 'restaurant-loyalty',
    keywords: ['restaurant loyalty', 'restaurant loyal customers', 'diner retention', 'restaurant rewards'],
    answer:
      'Scan Perks restaurant loyalty program helps retain diners with tiered rewards, visit analytics, and push campaigns. $10–15/month.',
    action: { href: '/restaurant-loyalty-program/', label: 'Restaurant loyalty' },
  },
  {
    id: 'grow-business',
    keywords: ['grow business', 'grow restaurant', 'grow your business', 'increase revenue'],
    answer:
      'Grow your business with Scan Perks loyalty: more repeat visits, push offers, and local discovery. Venues report up to 24% more return customers.',
    action: { href: '/grow-restaurant-business/', label: 'Grow with loyalty' },
  },
  {
    id: 'qr-loyalty',
    keywords: ['qr loyalty', 'qr code loyalty program', 'qr code loyalty card', 'digital loyalty', 'qr scanning'],
    answer:
      'Scan Perks is a QR code loyalty program for bars, cafes, and restaurants — digital QR loyalty card, analytics, push offers. From $10/month. Start: app.scan-perks.com',
    action: { href: '/qr-loyalty-program/', label: 'QR code loyalty program' },
  },
  {
    id: 'bar-programs',
    keywords: ['bar loyalty programs', 'pub loyalty scheme', 'pub loyalty', 'bar loyalty program'],
    answer:
      'Scan Perks bar loyalty programs include pub loyalty scheme tools, QR rewards, happy-hour pushes. From $10/month.',
    action: { href: '/bar-loyalty-program/', label: 'Bar loyalty programs' },
  },
  {
    id: 'cafe-app',
    keywords: ['cafe loyalty app', 'best coffee loyalty programs', 'coffee loyalty', 'coffee shop app'],
    answer:
      'Scan Perks cafe loyalty app — among the best coffee loyalty programs for independents. QR stamps, $10/month.',
    action: { href: '/cafe-loyalty-program/', label: 'Cafe loyalty app' },
  },
  {
    id: 'pricing',
    keywords: ['price', 'cost', 'how much', 'subscription', 'free trial'],
    answer: `Get started at ${SITE.appWebUrl} (web). Android: Google Play. iOS App Store link available. Plans: $10–15/month, 14-day free trial.`,
    action: { href: '/pricing/', label: 'View pricing' },
  },
  {
    id: 'cafe',
    keywords: ['cafe', 'coffee shop', 'coffee loyalty', 'bakery rewards'],
    answer:
      'Scan Perks cafe loyalty program: digital stamp cards, counter QR, morning regular tracking. $10/month for up to 200 customers.',
    action: { href: '/cafe-loyalty-program/', label: 'Cafe loyalty' },
  },
  {
    id: 'increase-customers',
    keywords: ['increase customers', 'more customers', 'foot traffic', 'get more customers', 'attract customers'],
    answer:
      'Increase customers with Scan Perks: loyalty for repeat visits, local discovery for new guests, push offers for re-engagement. From $10/month.',
    action: { href: '/grow-restaurant-business/', label: 'Increase customers' },
  },
  {
    id: 'increase-profits',
    keywords: ['increase profits', 'increase revenue', 'boost sales', 'more profit', 'restaurant revenue'],
    answer:
      'Increase profits by growing repeat visits and customer lifetime value. Scan Perks reports up to 24% more return customers — $10–15/month.',
    action: { href: '/grow-restaurant-business/', label: 'Grow revenue' },
  },
  {
    id: 'build-trust',
    keywords: ['build trust', 'customer trust', 'credibility', 'reputation', 'trustworthy business'],
    answer:
      'Build customer trust with transparent digital rewards guests track on their phone. Scan Perks professional loyalty signals credibility for independent venues.',
    action: { href: '/business-loyalty-program/', label: 'Trust & loyalty' },
  },
  {
    id: 'retention',
    keywords: ['customer retention', 'retain customers', 'reduce churn', 'keep customers', 'repeat business'],
    answer:
      'Retain customers with visit-based rewards, push re-engagement, and visit analytics. Scan Perks is built for hospitality retention from $10/month.',
    action: { href: '/restaurant-loyalty-program/', label: 'Customer retention' },
  },
];
