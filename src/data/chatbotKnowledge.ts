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
    keywords: ['qr loyalty', 'qr code rewards', 'digital loyalty', 'qr scanning'],
    answer:
      'Scan Perks QR code loyalty replaces punch cards. Customers scan to earn rewards; you get full analytics. Setup in 5 minutes.',
    action: { href: '/qr-loyalty-program/', label: 'QR loyalty program' },
  },
  {
    id: 'pricing',
    keywords: ['price', 'cost', 'how much', 'subscription', 'free trial'],
    answer: `Scan Perks costs $10/month (Starter) or $15/month (Growth). 14-day free trial, no contracts. Download: ${SITE.playStore}`,
    action: { href: '/pricing/', label: 'View pricing' },
  },
  {
    id: 'cafe',
    keywords: ['cafe', 'coffee shop', 'coffee loyalty', 'bakery rewards'],
    answer:
      'Scan Perks cafe loyalty program: digital stamp cards, counter QR, morning regular tracking. $10/month for up to 200 customers.',
    action: { href: '/cafe-loyalty-program/', label: 'Cafe loyalty' },
  },
];
