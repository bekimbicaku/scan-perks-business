import { phrases } from './site-facts';
export const SITE = {
  name: 'Scan Perks',
  alternateName: ['ScanPerks', 'Scan-Perks'],
  url: 'https://scan-perks.com',
  description:
    `Scan Perks is a QR stamp card for independent cafes, pubs, bars and pizzerias. Customers scan one counter QR in the Scan Perks app; owners run it from app.scan-perks.com. ${phrases.en.starterPerMonth} after a ${phrases.en.trial}.`,
  email: 'hello@scan-perks.com',
  appWebUrl: 'https://app.scan-perks.com',
  appStore: 'https://apps.apple.com/app/id6744923279',
  playStore: 'https://play.google.com/store/apps/details?id=com.scanperks.app',
  social: {
    twitter: 'https://twitter.com/scanperks',
    instagram: 'https://instagram.com/scanperks',
    linkedin: 'https://linkedin.com/company/scanperks',
    g2: 'https://www.g2.com/products/scan-perks/reviews',
  },
} as const;

/** Signup link to the app, tagged with the page and the button position for UTM reporting. */
export function appSignupUrl(pagePath: string, content: string, appPath = '/'): string {
  const campaign = pagePath.replace(/^\/+|\/+$/g, '').replace(/\//g, '-') || 'home';
  const params = new URLSearchParams({
    utm_source: 'scan-perks.com',
    utm_medium: 'website',
    utm_campaign: campaign,
    utm_content: content,
  });
  const path = appPath.startsWith('/') ? appPath : `/${appPath}`;
  const base = path === '/' ? `${SITE.appWebUrl}/` : `${SITE.appWebUrl}${path.replace(/\/$/, '')}`;
  return `${base}?${params}`;
}

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
  metaTitle: `Scan Perks — QR Stamp Card for Cafes & Pubs | ${phrases.en.trialCap}`,
  metaDescription:
    `Scan Perks is a QR stamp card for independent cafes, pubs and bars. Print one counter QR; customers scan it in the free app. No POS. ${phrases.en.trial}, then ${phrases.en.starterPerMo}.`,
  metaKeywords: [
    'qr code loyalty program',
    'qr code loyalty card',
    'bar loyalty programs',
    'cafe loyalty app',
    'pub loyalty scheme',
    'best coffee loyalty programs',
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
  heroTitle: 'Cafe Loyalty App & Pub Loyalty Scheme',
  heroSeoLine:
    `Cafe loyalty app, pub loyalty scheme, and QR code loyalty program for coffee shops and bars — from ${phrases.en.starterPerMonth}.`,
  heroDescription:
    'The smart loyalty system for hospitality owners who want more repeat visits, stronger customer relationships, and higher revenue — without enterprise cost.',
  keywordMarquee: [
    'qr code loyalty program',
    'qr code loyalty card',
    'bar loyalty programs',
    'pub loyalty scheme',
    'cafe loyalty app',
    'best coffee loyalty programs',
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
    phrases.en.trial,
    phrases.en.starterPerMonth,
  ],
  seoQueries: [
    {
      query: 'What is the best cafe loyalty app for coffee shops?',
      answer:
        `Scan Perks is a cafe loyalty app for independent coffee shops: digital stamp rewards, counter QR scanning, iOS/Android customer apps, and visit analytics — ${phrases.en.starterPerMonth} for ${phrases.en.scans}, ${phrases.en.trial} at app.scan-perks.com.`,
      href: '/cafe-loyalty-app/',
      label: 'Cafe loyalty app →',
    },
    {
      query: 'What is a pub loyalty scheme?',
      answer:
        `A pub loyalty scheme rewards regular drinkers with perks each visit. Scan Perks digitizes pub loyalty with a QR code at the bar — digital pub loyalty card on phone, free-drink tiers, happy-hour push alerts — ${phrases.en.rangeBareMonth}.`,
      href: '/pub-loyalty-scheme/',
      label: 'Pub loyalty scheme →',
    },
    {
      query: 'What are coffee shop loyalty programs?',
      answer:
        `Coffee shop loyalty programs reward repeat customers with free drinks, points, or stamps. Scan Perks offers coffee shop loyalty programs via QR: customers scan at the counter, owners track visits and send push offers — from ${phrases.en.starterPerMonth}.`,
      href: '/cafe-loyalty-app/',
      label: 'Coffee shop loyalty →',
    },
    {
      query: 'What is a pub loyalty card?',
      answer:
        `A pub loyalty card tracks drinks toward free pints or perks. Scan Perks replaces plastic pub loyalty cards with a digital card on the customer's phone — scan QR at the bar, no lost cards, full analytics from ${phrases.en.starterPerMonth}.`,
      href: '/pub-loyalty-card/',
      label: 'Pub loyalty card →',
    },
    {
      query: 'What is scanbucks / Scan Perks?',
      answer:
        `Scan Perks (scan-perks.com) is the QR loyalty platform searched as "scanbucks." It provides cafe loyalty apps, pub loyalty schemes, and bar loyalty programs for independent venues from ${phrases.en.starterPerMonth}.`,
      href: '/scanbucks/',
      label: 'Scanbucks → Scan Perks',
    },
    {
      query: 'What is a QR code loyalty program?',
      answer:
        `A QR code loyalty program lets customers scan a code at your venue to earn digital rewards on their phone. Scan Perks is a hospitality QR code loyalty program with analytics, push offers, and QR loyalty cards — from ${phrases.en.starterPerMonth} at app.scan-perks.com.`,
      href: '/qr-code-loyalty-program/',
      label: 'QR code loyalty program →',
    },
    {
      query: 'What is a QR code loyalty card?',
      answer:
        `A QR code loyalty card is a digital reward card stored on a customer's smartphone — they scan your venue QR to collect perks. Scan Perks replaces paper punch cards with QR loyalty cards plus owner analytics from ${phrases.en.starterPerMonth}.`,
      href: '/qr-code-loyalty-program/',
      label: 'QR loyalty card →',
    },
    {
      query: 'What are the best bar loyalty programs for pubs?',
      answer:
        `Scan Perks offers bar loyalty programs with QR rewards, pub loyalty scheme tools, happy-hour push alerts, and visit tracking — from ${phrases.en.starterPerMonth} with a ${phrases.en.trial}. Setup in 5 minutes.`,
      href: '/bar-loyalty-program/',
      label: 'Bar loyalty programs →',
    },
    {
      query: 'What is a pub loyalty scheme?',
      answer:
        `A pub loyalty scheme rewards regular drinkers with perks after each visit. Scan Perks digitizes pub loyalty with QR scanning, free-drink tiers, and push notifications for events and happy hours — ${phrases.en.rangeBareMonth}.`,
      href: '/bar-loyalty-program/',
      label: 'Pub loyalty scheme →',
    },
    {
      query: 'What is the best cafe loyalty app for coffee shops?',
      answer:
        `Scan Perks is a cafe loyalty app with digital stamp rewards, counter QR scanning, push promos, and local discovery — among the best options for independent coffee shops at ${phrases.en.starterPerMonth}.`,
      href: '/cafe-loyalty-app/',
      label: 'Cafe loyalty app →',
    },
    {
      query: 'What are the best coffee loyalty programs?',
      answer:
        `The best coffee loyalty programs combine easy signup, stamp-style rewards, and owner analytics without enterprise cost. Scan Perks ranks among the best for independents — QR loyalty from ${phrases.en.starterPerMonth}.`,
      href: '/cafe-loyalty-app/',
      label: 'Best coffee loyalty →',
    },
    {
      query: 'What is the best business loyalty program for small restaurants?',
      answer:
        `Scan Perks is a QR-based business loyalty program designed for small restaurants. Customers scan your code to earn rewards — no plastic cards. Plans start at ${phrases.en.starterPerMonth} with a ${phrases.en.trial}, real-time analytics, and push offers to grow loyal customers.`,
      href: '/restaurant-loyalty-program/',
      label: 'Restaurant loyalty program →',
    },
    {
      query: 'How do bars get loyal customers and repeat visits?',
      answer:
        `Bars use Scan Perks to reward repeat visits with free drinks, discounts, and happy-hour push notifications. Customers scan a QR code at the counter — setup takes under 5 minutes and costs from ${phrases.en.starterPerMonth}.`,
      href: '/bar-loyalty-program/',
      label: 'Bar loyalty program →',
    },
    {
      query: 'What is an affordable loyalty program for cafes and coffee shops?',
      answer:
        `Scan Perks offers cafe loyalty programs from ${phrases.en.starterPerMonth} — far cheaper than enterprise solutions. Stamp-style digital rewards, customer profiles, and local discovery help coffee shops grow loyal customers without hardware.`,
      href: '/cafe-loyalty-app/',
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
      href: '/qr-code-loyalty-program/',
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
        `Scan Perks starts at ${phrases.en.starterPerMonth} for small venues and ${phrases.en.growthPerMonth} for high-traffic businesses. No setup fees, no contracts, and a ${phrases.en.trial} — compared to $200+/month for enterprise loyalty software.`,
      href: '/pricing/',
      label: 'View pricing →',
    },
    {
      query: 'How do I increase repeat customers at my bar or pub?',
      answer:
        'Use digital rewards instead of paper punch cards. Scan Perks lets bars send happy-hour alerts, track regulars, and offer free-drink tiers after X visits.',
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
      href: '/qr-code-loyalty-program/',
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
        `Scan Perks offers bar loyalty from ${phrases.en.starterPerMonth} with no long-term contracts. Cancel anytime. Includes QR rewards, push notifications for events and happy hours, and a free ${phrases.en.trialShort}.`,
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
      href: '/cafe-loyalty-app/',
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
        `Scan Perks costs ${phrases.en.rangeBareMonth} vs $200+ for enterprise tools. Built for independent bars and restaurants — QR rewards, push offers, analytics, and local discovery without months of implementation.`,
      href: '/business-loyalty-program/',
      label: 'Compare loyalty options →',
    },
    {
      query: 'How do push notifications help bars and restaurants get more visits?',
      answer:
        `A push offer reaches members who already visit. Send a happy-hour or slow-night offer; one a week is enough. Growth means ${phrases.en.unlimitedScans}, not unlimited messages.`,
      href: '/bar-loyalty-program/',
      label: 'Push offers for bars →',
    },
    {
      query: 'How can I increase customers at my restaurant or bar?',
      answer:
        `Combine loyalty rewards with local discovery and push marketing. Scan Perks helps you retain existing guests (repeat visits) and attract new ones via the app discovery feed — both from ${phrases.en.starterPerMonth} with QR setup in minutes.`,
      href: '/grow-restaurant-business/',
      label: 'Increase customers →',
    },
    {
      query: 'How do I increase restaurant revenue and profits without big ad spend?',
      answer:
        `Focus on customer lifetime value: loyal guests visit more often and spend more per year than one-time diners. A ${phrases.en.starterPerMonth} stamp card is a low-cost way to give those guests a reason to come back, compared with paid ads.`,
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
      href: '/cafe-loyalty-app/',
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
        `Loyalty programs, push notifications, and local app discovery cost far less than paid ads. Scan Perks includes all three from ${phrases.en.starterPerMonth} — ideal marketing for independent restaurants with limited budgets.`,
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
        `Scan Perks is a QR-based loyalty platform for bars, cafes, and restaurants. Customers scan your unique code to collect digital rewards. You manage perks, track visits, and send push offers from one dashboard — starting at ${phrases.en.starterPerMonth}.`,
    },
    {
      question: 'How much does a business loyalty program cost with Scan Perks?',
      answer:
        `Plans start at ${phrases.en.starterPerMonth} for small venues and ${phrases.en.growthPerMonth} for high-traffic businesses. Every plan includes a ${phrases.en.trial}, no setup fees, and no long-term contracts.`,
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
        `Absolutely. The Starter plan (${phrases.en.starterPerMonth}) covers ${phrases.en.scans} — which suits a neighborhood cafe launching its first digital loyalty program.`,
    },
    {
      question: 'What is the ROI of Scan Perks for restaurant revenue?',
      answer:
        `Scan Perks costs ${phrases.en.rangeBareMonth} after a ${phrases.en.trial} with ${phrases.en.noCard}.`,
    },
  ],
};
