export const SITE = {
  name: 'Scan Perks',
  url: 'https://scan-perks.com',
  description:
    'Scan Perks is the affordable QR-based business loyalty platform for bars, cafes, and restaurants. Grow repeat customers with digital rewards starting at $10/month.',
  email: 'hello@scan-perks.com',
  appWebUrl: 'https://app.scan-perks.com',
  appStore: 'https://apps.apple.com/app/id6744923279',
  playStore: 'https://play.google.com/store/apps/details?id=com.scanperks.app',
  social: {
    twitter: 'https://twitter.com/scanperks',
    instagram: 'https://instagram.com/scanperks',
    linkedin: 'https://linkedin.com/company/scanperks',
  },
} as const;

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SeoQuery {
  query: string;
  answer: string;
  href: string;
  label: string;
}

export interface LandingContent {
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string[];
  heroTitle: string;
  heroSeoLine: string;
  heroDescription: string;
  keywordMarquee: string[];
  seoQueries: SeoQuery[];
  faqs: FaqItem[];
}

export const landingContent: LandingContent = {
  metaTitle:
    'Business Loyalty Program — Grow Customers, Trust & Profits | Scan Perks',
  metaDescription:
    'Increase customers and profits with Scan Perks — QR loyalty for bars, cafes & restaurants. Build trust, retain guests & grow revenue from $10/mo. 14-day free trial.',
  metaKeywords: [
    'business loyalty program',
    'restaurant loyalty program',
    'bar loyalty program',
    'cafe loyalty program',
    'grow your business',
    'increase customers',
    'increase restaurant revenue',
    'increase business profits',
    'build customer trust',
    'customer retention',
    'loyal customers',
    'repeat customers',
    'QR loyalty program',
    'customer lifetime value',
    'increase foot traffic restaurant',
    'grow restaurant business',
    'affordable loyalty app',
    'hospitality customer retention',
    'small business marketing restaurant',
    'boost restaurant sales',
  ],
  heroTitle: 'Grow Your Business with Scan Perks',
  heroSeoLine:
    'Increase customers, build trust, and grow profits — QR loyalty for bars, cafes & restaurants that turns guests into loyal regulars.',
  heroDescription:
    'The smart loyalty system for hospitality owners who want more repeat visits, stronger customer relationships, and higher revenue — without enterprise cost.',
  keywordMarquee: [
    'business loyalty program',
    'increase customers',
    'build customer trust',
    'increase business profits',
    'grow your business',
    'bar loyal customers',
    'restaurant loyal customers',
    'customer retention',
    'increase restaurant revenue',
    'repeat customers',
    'customer lifetime value',
    'QR code loyalty',
    'cafe loyalty program',
    'increase foot traffic',
    'boost restaurant sales',
    'hospitality marketing',
    'digital rewards',
    'push notifications',
    'local discovery',
    'affordable loyalty app',
    'grow restaurant business',
    '14-day free trial',
    '$10/month',
  ],
  seoQueries: [
    {
      query: 'What is the best business loyalty program for small restaurants?',
      answer:
        'Scan Perks is a QR-based business loyalty program designed for small restaurants. Customers scan your code to earn rewards — no plastic cards. Plans start at $10/month with a 14-day free trial, real-time analytics, and push offers to grow loyal customers.',
      href: '/restaurant-loyalty-program/',
      label: 'Restaurant loyalty program →',
    },
    {
      query: 'How do bars get loyal customers and repeat visits?',
      answer:
        'Bars use Scan Perks to reward repeat visits with free drinks, discounts, and happy-hour push notifications. Customers scan a QR code at the counter — setup takes under 5 minutes and costs from $10/month.',
      href: '/bar-loyalty-program/',
      label: 'Bar loyalty program →',
    },
    {
      query: 'What is an affordable loyalty program for cafes and coffee shops?',
      answer:
        'Scan Perks offers cafe loyalty programs from $10/month — far cheaper than enterprise solutions. Stamp-style digital rewards, customer profiles, and local discovery help coffee shops grow loyal customers without hardware.',
      href: '/cafe-loyalty-program/',
      label: 'Cafe loyalty program →',
    },
    {
      query: 'How can I grow my restaurant business with customer rewards?',
      answer:
        'Reward repeat diners with tiered perks, track visit frequency in your dashboard, and send targeted offers on slow nights. Scan Perks helps restaurants grow revenue by increasing customer lifetime value — not just one-time traffic.',
      href: '/grow-restaurant-business/',
      label: 'Grow restaurant business →',
    },
    {
      query: 'What is a QR code loyalty program and how does it work?',
      answer:
        'A QR code loyalty program lets customers scan a unique code at your venue to join and collect rewards digitally. Scan Perks replaces punch cards with instant smartphone scanning — no app download required for staff, full analytics included.',
      href: '/qr-loyalty-program/',
      label: 'QR loyalty program →',
    },
    {
      query: 'What is a business loyalty program?',
      answer:
        'A business loyalty program rewards repeat customers to increase retention and lifetime value. Scan Perks is a modern hospitality loyalty platform with QR scanning, push notifications, and analytics — built for bars, cafes, and restaurants.',
      href: '/business-loyalty-program/',
      label: 'Business loyalty guide →',
    },
    {
      query: 'How much does a restaurant loyalty app cost?',
      answer:
        'Scan Perks starts at $10/month for small venues and $15/month for high-traffic businesses. No setup fees, no contracts, and a 14-day free trial — compared to $200+/month for enterprise loyalty software.',
      href: '/pricing/',
      label: 'View pricing →',
    },
    {
      query: 'How do I increase repeat customers at my bar or pub?',
      answer:
        'Use digital rewards instead of paper punch cards. Scan Perks lets bars send happy-hour alerts, track regulars, and offer free-drink tiers after X visits — proven to boost repeat visits by 24% on average.',
      href: '/bar-loyalty-program/',
      label: 'Bar repeat customers →',
    },
    {
      query: 'What is the best loyalty app for small business hospitality?',
      answer:
        'Scan Perks is built specifically for small hospitality businesses: bars, cafes, and restaurants. QR setup in 5 minutes, affordable pricing, push offers, and local discovery — without enterprise complexity or cost.',
      href: '/features/',
      label: 'See all features →',
    },
    {
      query: 'Can I replace punch cards with a digital loyalty program?',
      answer:
        'Yes. Scan Perks replaces paper punch cards with QR scanning. Customers keep rewards on their phone, you get full visit data and can send push offers — something punch cards cannot do.',
      href: '/qr-loyalty-program/',
      label: 'Digital vs punch cards →',
    },
    {
      query: 'How do restaurants retain customers in 2025?',
      answer:
        'Restaurants retain customers with personalized rewards, timely push offers, and data-driven insights. Scan Perks combines all three in one affordable platform — track who visits, when, and what rewards drive return trips.',
      href: '/restaurant-loyalty-program/',
      label: 'Restaurant retention →',
    },
    {
      query: 'Is there a cheap loyalty program for bars without contracts?',
      answer:
        'Scan Perks offers bar loyalty from $10/month with no long-term contracts. Cancel anytime. Includes QR rewards, push notifications for events and happy hours, and a free 14-day trial.',
      href: '/pricing/',
      label: 'Bar pricing →',
    },
    {
      query: 'How does customer loyalty software help grow your business?',
      answer:
        'Loyalty software increases repeat visit rate, average spend, and word-of-mouth. Scan Perks gives hospitality businesses real-time dashboards, customer segmentation, and local app discovery to grow sustainably.',
      href: '/grow-restaurant-business/',
      label: 'Grow with loyalty →',
    },
    {
      query: 'What loyalty program features do cafes need most?',
      answer:
        'Cafes need fast QR scanning at the counter, stamp-style rewards, visit tracking, and occasional push promos (new menu, seasonal drinks). Scan Perks includes all of this plus print-ready QR materials.',
      href: '/cafe-loyalty-program/',
      label: 'Cafe features →',
    },
    {
      query: 'How do I get discovered by local customers near my restaurant?',
      answer:
        'Scan Perks lists your venue in the app discovery feed so nearby users browsing for new places can find you — free local advertising included with every plan.',
      href: '/features/',
      label: 'Local discovery →',
    },
    {
      query: 'What is hospitality customer retention software?',
      answer:
        'Hospitality retention software tracks guest visits, automates rewards, and re-engages customers via push notifications. Scan Perks is purpose-built for bars, cafes, and restaurants — not generic retail loyalty.',
      href: '/business-loyalty-program/',
      label: 'Hospitality loyalty →',
    },
    {
      query: 'How fast can I set up a loyalty program for my business?',
      answer:
        'Scan Perks setup takes under 5 minutes: create your account, design rewards, download your QR code, and display it at your venue. No hardware, no IT team required.',
      href: '/features/',
      label: 'Quick setup →',
    },
    {
      query: 'Do customers need to download an app for Scan Perks?',
      answer:
        'Business owners start at app.scan-perks.com in any browser. Android users can use Google Play; App Store link is listed for iOS. Customers scan QR codes via the Scan Perks app.',
      href: '/pricing/',
      label: 'FAQ & pricing →',
    },
    {
      query: 'What makes Scan Perks different from enterprise loyalty platforms?',
      answer:
        'Scan Perks costs $10–15/month vs $200+ for enterprise tools. Built for independent bars and restaurants — QR rewards, push offers, analytics, and local discovery without months of implementation.',
      href: '/business-loyalty-program/',
      label: 'Compare loyalty options →',
    },
    {
      query: 'How do push notifications help bars and restaurants get more visits?',
      answer:
        'Push notifications send happy hour deals, event invites, and limited offers instantly to customers who already love your venue. Scan Perks includes unlimited push on the Growth plan to fill slow nights.',
      href: '/bar-loyalty-program/',
      label: 'Push offers for bars →',
    },
    {
      query: 'How can I increase customers at my restaurant or bar?',
      answer:
        'Combine loyalty rewards with local discovery and push marketing. Scan Perks helps you retain existing guests (repeat visits) and attract new ones via the app discovery feed — both from $10/month with QR setup in minutes.',
      href: '/grow-restaurant-business/',
      label: 'Increase customers →',
    },
    {
      query: 'How do I increase restaurant revenue and profits without big ad spend?',
      answer:
        'Focus on customer lifetime value: loyal guests visit more often and spend more per year than one-time diners. Scan Perks loyalty programs increase repeat visits up to 24% — a low-cost way to grow revenue vs paid ads.',
      href: '/grow-restaurant-business/',
      label: 'Increase revenue →',
    },
    {
      query: 'How can a small business build customer trust and credibility?',
      answer:
        'Consistent, transparent rewards build trust — guests see progress toward perks and get fair treatment every visit. Scan Perks digital loyalty replaces informal punch cards with a professional system customers recognize and trust.',
      href: '/business-loyalty-program/',
      label: 'Build trust with loyalty →',
    },
    {
      query: 'What is the best way to increase foot traffic at a cafe or coffee shop?',
      answer:
        'Reward regulars with stamp-style digital perks, promote new menu items via push notifications, and get listed in Scan Perks local discovery. Neighborhood cafes grow foot traffic by keeping morning customers loyal and visible to nearby app users.',
      href: '/cafe-loyalty-program/',
      label: 'Cafe foot traffic →',
    },
    {
      query: 'How do loyalty programs increase customer lifetime value?',
      answer:
        'Loyalty increases visit frequency, average spend, and referrals. Scan Perks tracks each guest\'s visits and lets you send targeted offers — turning occasional visitors into high-value regulars over time.',
      href: '/grow-restaurant-business/',
      label: 'Customer lifetime value →',
    },
    {
      query: 'How can bars and restaurants reduce customer churn?',
      answer:
        'Identify lapsed regulars in your dashboard, re-engage them with push offers, and reward consistent visits before they switch venues. Scan Perks retention tools help bars and restaurants win back guests who have not visited recently.',
      href: '/restaurant-loyalty-program/',
      label: 'Reduce churn →',
    },
    {
      query: 'What is low-cost marketing for small restaurants?',
      answer:
        'Loyalty programs, push notifications, and local app discovery cost far less than paid ads. Scan Perks includes all three from $10/month — ideal marketing for independent restaurants with limited budgets.',
      href: '/features/',
      label: 'Low-cost marketing →',
    },
    {
      query: 'How do I boost sales on slow nights at my bar or restaurant?',
      answer:
        'Send happy-hour or limited-time push offers to loyalty members on slow Tuesdays or quiet afternoons. Scan Perks lets you fill empty tables by reaching customers who already trust your venue — not cold audiences.',
      href: '/bar-loyalty-program/',
      label: 'Boost slow-night sales →',
    },
    {
      query: 'How to get more repeat business from existing customers?',
      answer:
        'Existing customers are your cheapest growth channel. Offer visit-based rewards, birthday perks, and tiered VIP status with Scan Perks — proven to increase repeat business without acquiring new traffic.',
      href: '/business-loyalty-program/',
      label: 'Repeat business →',
    },
    {
      query: 'Can a loyalty program help increase trust between my business and customers?',
      answer:
        'Yes. Digital loyalty shows customers you value their return visits with clear, trackable rewards. Scan Perks professional QR system signals reliability — especially vs informal or forgotten paper punch cards.',
      href: '/business-loyalty-program/',
      label: 'Trust & loyalty →',
    },
    {
      query: 'How do restaurants increase profits in 2025?',
      answer:
        'Profit growth comes from retention, not just new covers. Scan Perks helps restaurants increase profits by driving repeat visits, optimizing promotions with visit data, and reducing reliance on discount-heavy acquisition ads.',
      href: '/grow-restaurant-business/',
      label: 'Increase profits →',
    },
  ],
  faqs: [
    {
      question: 'What is Scan Perks and how does the business loyalty program work?',
      answer:
        'Scan Perks is a QR-based loyalty platform for bars, cafes, and restaurants. Customers scan your unique code to collect digital rewards. You manage perks, track visits, and send push offers from one dashboard — starting at $10/month.',
    },
    {
      question: 'How much does a business loyalty program cost with Scan Perks?',
      answer:
        'Plans start at $10/month for small venues and $15/month for high-traffic businesses. Every plan includes a 14-day free trial, no setup fees, and no long-term contracts.',
    },
    {
      question: 'Can Scan Perks help bars get more loyal customers?',
      answer:
        'Yes. Bars use Scan Perks for visit-based rewards, happy-hour push alerts, and customer profiles. Venues report up to 24% more repeat visits within the first month.',
    },
    {
      question: 'Is Scan Perks good for restaurant loyal customers and retention?',
      answer:
        'Scan Perks is built for restaurant customer retention: tiered rewards, visit analytics, slow-night push offers, and local discovery in the consumer app.',
    },
    {
      question: 'How do I grow my restaurant business with Scan Perks?',
      answer:
        'Increase repeat visits with rewards, re-engage guests via push notifications, and use dashboard insights to optimize peak hours and promotions. Affordable pricing means independent restaurants compete with chains.',
    },
    {
      question: 'What is a QR code loyalty program?',
      answer:
        'A QR loyalty program replaces punch cards with smartphone scanning. Each venue gets a unique QR code; customers scan to join and earn perks. Scan Perks includes print-ready materials and full analytics.',
    },
    {
      question: 'Do I need special hardware for a cafe loyalty program?',
      answer:
        'No hardware required. Print your QR code and place it at the counter. Staff and customers use smartphones only — setup takes under 5 minutes.',
    },
    {
      question: 'How is Scan Perks different from paper punch cards?',
      answer:
        'Punch cards offer no data and no re-engagement. Scan Perks gives visit tracking, push notifications, customer profiles, and local discovery — while staying as simple as a scan.',
    },
    {
      question: 'Can I cancel my loyalty program subscription anytime?',
      answer:
        'Yes. Cancel anytime with no penalties. Your data is retained for 30 days if you return; after that it is permanently deleted per our privacy policy.',
    },
    {
      question: 'Does Scan Perks work for coffee shops and small cafes?',
      answer:
        'Absolutely. The Starter plan ($10/month) supports up to 200 active customers — ideal for neighborhood cafes and coffee shops launching their first digital loyalty program.',
    },
    {
      question: 'How can Scan Perks help me increase customers and profits?',
      answer:
        'Scan Perks grows profits by increasing repeat visits (up to 24% reported), boosting customer lifetime value, and filling slow nights with push offers — far cheaper than constant paid advertising.',
    },
    {
      question: 'Can a loyalty program build customer trust for my business?',
      answer:
        'Yes. Transparent digital rewards show guests you value their loyalty. Consistent perks and a professional QR system build credibility — especially for independent bars and restaurants competing with chains.',
    },
    {
      question: 'How do I increase foot traffic without expensive marketing?',
      answer:
        'Use Scan Perks local discovery listing, loyalty rewards for regulars, and targeted push notifications. All included from $10/month — designed for small hospitality businesses with limited marketing budgets.',
    },
    {
      question: 'What is the ROI of Scan Perks for restaurant revenue?',
      answer:
        'At $10–15/month, even a few extra weekly visits from loyal customers typically covers the subscription many times over. Retention-focused loyalty often delivers stronger ROI than one-time discount campaigns.',
    },
  ],
};
