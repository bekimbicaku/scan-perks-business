import type { FaqItem } from './content';

export interface GuideCategory {
  title: string;
  description: string;
  href: string;
}

export interface LoyaltyGuide {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  primaryKeyword: string;
  keywordCluster: string[];
  definition: string;
  categories: GuideCategory[];
  mandatoryVsOptional: { type: string; description: string }[];
  howToStart: string[];
  sections: { heading: string; body: string }[];
  faqs: FaqItem[];
}

export const loyaltyGuide: LoyaltyGuide = {
  slug: 'business-loyalty-program',
  title: 'Business Loyalty Program',
  metaTitle: 'Business Loyalty Program — Complete Guide for Hospitality | Scan Perks',
  description:
    'What is a business loyalty program? Learn how bars, cafes & restaurants use QR rewards to grow loyal customers. Compare options and start with Scan Perks from $10/month.',
  primaryKeyword: 'business loyalty program',
  keywordCluster: [
    'business loyalty',
    'customer loyalty program',
    'hospitality loyalty platform',
    'small business loyalty software',
    'loyalty program for business',
    'build customer trust',
    'increase business profits',
    'increase customers',
  ],
  definition:
    'A business loyalty program is a structured rewards system that incentivizes repeat customers to return more often and spend more over time. For hospitality — bars, cafes, and restaurants — modern loyalty uses digital tools like QR scanning, push notifications, and visit analytics instead of paper punch cards. Scan Perks is a hospitality-focused business loyalty platform starting at $10/month.',
  categories: [
    {
      title: 'Bar Loyalty Program',
      description: 'QR rewards, happy-hour pushes, and regular tracking for pubs and bars.',
      href: '/bar-loyalty-program/',
    },
    {
      title: 'Restaurant Loyalty Program',
      description: 'Retain diners with tiered rewards, analytics, and re-engagement campaigns.',
      href: '/restaurant-loyalty-program/',
    },
    {
      title: 'Cafe Loyalty Program',
      description: 'Digital stamp cards and counter QR for coffee shops and bakeries.',
      href: '/cafe-loyalty-program/',
    },
    {
      title: 'QR Code Loyalty',
      description: 'Contactless rewards via smartphone scanning — no plastic cards.',
      href: '/qr-loyalty-program/',
    },
    {
      title: 'Grow Restaurant Business',
      description: 'Use loyalty as a growth engine for repeat revenue and discovery.',
      href: '/grow-restaurant-business/',
    },
  ],
  mandatoryVsOptional: [
    {
      type: 'Core rewards (visits → perks)',
      description: 'Essential. Every hospitality loyalty program needs clear earn-and-redeem rules.',
    },
    {
      type: 'Customer data & analytics',
      description: 'Highly recommended. Without visit data you cannot optimize promotions.',
    },
    {
      type: 'Push notifications',
      description: 'Optional but powerful for filling slow nights and announcing events.',
    },
    {
      type: 'Local discovery listing',
      description: 'Bonus growth channel — helps new customers find your venue in-app.',
    },
  ],
  howToStart: [
    'Choose a hospitality-focused platform (not generic retail loyalty).',
    'Define reward tiers — e.g. every 10th drink free or 15% off after 5 visits.',
    'Generate and print your QR code; place it at the counter or tables.',
    'Train staff: one sentence — "Scan for rewards."',
    'Track visits in your dashboard and send your first push offer within week one.',
  ],
  sections: [
    {
      heading: 'Why Hospitality Businesses Need Loyalty in 2025',
      body: 'Customer acquisition costs keep rising. A business loyalty program turns one-time guests into regulars who spend more per year than occasional visitors. For bars and restaurants, even a 10% increase in repeat rate can meaningfully grow revenue without extra ad spend.',
    },
    {
      heading: 'Types of Business Loyalty Programs',
      body: 'Common models include stamp cards (visit-based), points systems, tiered VIP status, and referral rewards. Scan Perks focuses on visit-based QR rewards — the simplest model for cafes and bars — with optional push marketing and analytics.',
    },
    {
      heading: 'How to Choose the Right Loyalty Platform',
      body: 'Look for hospitality-specific features, affordable monthly pricing, no long contracts, QR simplicity, and push notifications. Avoid enterprise platforms if you run a single independent venue — Scan Perks is built exactly for that segment.',
    },
    {
      heading: 'Start Your Business Loyalty Program Online',
      body: 'Download Scan Perks, create your venue profile, set rewards, and print your QR code. Most businesses launch in under 5 minutes with a 14-day free trial — no credit card required to explore.',
    },
  ],
  faqs: [
    {
      question: 'What is a business loyalty program?',
      answer:
        'A business loyalty program rewards repeat customers to increase retention and lifetime value. In hospitality, modern programs use QR codes and apps instead of paper cards. Scan Perks is an affordable example built for bars, cafes, and restaurants.',
    },
    {
      question: 'How much does a business loyalty program cost?',
      answer:
        'Costs range from free punch cards (no data) to $200+/month for enterprise software. Scan Perks offers full digital loyalty for $10–15/month with a 14-day free trial.',
    },
    {
      question: 'What is the best loyalty program for small business?',
      answer:
        'For hospitality small businesses, Scan Perks balances simplicity, QR rewards, push offers, and analytics at a price independent venues can afford — from $10/month.',
    },
    {
      question: 'Do business loyalty programs actually grow revenue?',
      answer:
        'Yes. Loyal customers visit more often and refer friends. Scan Perks users report up to 24% more repeat visits when rewards and push offers are used consistently.',
    },
    {
      question: 'How is Scan Perks different from generic loyalty apps?',
      answer:
        'Scan Perks is built for bars, cafes, and restaurants — not retail chains. It includes hospitality workflows, local discovery, and pricing designed for single-location owners.',
    },
  ],
};
