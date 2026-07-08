export interface LoyaltySection {
  heading: string;
  body: string;
}

export interface LoyaltyComparison {
  feature: string;
  scanPerks: string;
  traditional: string;
  enterprise: string;
}

export interface LoyaltyPage {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  primaryKeyword: string;
  heroSeoLine?: string;
  quickAnswer?: string;
  keywordCluster: string[];
  highlights: string[];
  sections: LoyaltySection[];
  comparison: LoyaltyComparison[];
  faqs: { question: string; answer: string }[];
  supportingPosts: string[];
  localMarkets?: string[];
  featureBullets?: string[];
}

export const loyaltyPages: LoyaltyPage[] = [
  {
    slug: 'bar-loyalty-program',
    title: 'Pub Loyalty Scheme & Bar Loyalty Programs',
    metaTitle: 'Pub Loyalty Scheme & Bar Loyalty Programs | Scan Perks',
    description:
      'Pub loyalty scheme + digital pub loyalty card for bars. Bar loyalty programs with QR rewards, happy-hour pushes — $10/mo, 14-day free trial.',
    primaryKeyword: 'pub loyalty scheme',
    heroSeoLine:
      'Pub loyalty scheme, pub loyalty card, and bar loyalty programs — QR rewards for independent pubs and sports bars from $10/month.',
    quickAnswer:
      'Scan Perks is a pub loyalty scheme and bar loyalty program in one: customers scan a QR code at the bar to earn rewards on a digital pub loyalty card (no plastic). Happy-hour push alerts, visit analytics, free-drink tiers — $10/month Starter, 14-day free trial.',
    keywordCluster: [
      'pub loyalty scheme',
      'pub loyalty card',
      'pub loyalty cards',
      'bar loyalty programs',
      'bar loyalty program',
      'pub loyalty program',
      'bar loyal customers',
      'bar customer rewards program',
      'repeat customers bar',
      'bar loyalty app',
      'best bar loyalty programs',
    ],
    highlights: [
      'Happy-hour push notifications',
      'Free-drink reward tiers',
      'Visit tracking for regulars',
      'No contracts — from $10/month',
    ],
    localMarkets: ['Sports bars', 'Craft beer pubs', 'Cocktail lounges', 'Neighborhood bars'],
    featureBullets: [
      'QR scan at bar for visit rewards',
      'Pub loyalty scheme with free-drink tiers',
      'Happy-hour and event push notifications',
      'Regular customer visit analytics',
      'No POS integration — $10–15/month',
      '14-day free trial at app.scan-perks.com',
    ],
    sections: [
      {
        heading: 'Turn First-Time Drinkers Into Bar Loyal Customers',
        body: 'Independent bars compete on atmosphere and regulars — not ad budgets. A bar loyalty program gives guests a reason to choose you again. Scan Perks replaces lost punch cards with QR scanning: customers earn perks every visit, and you see who your regulars really are.',
      },
      {
        heading: 'Push Offers That Fill Slow Nights',
        body: 'Send happy-hour deals and event invites directly to phones. Unlike social posts, push notifications reach customers who already love your bar. Growth plan includes unlimited push — perfect for Tuesday trivia or midweek specials.',
      },
      {
        heading: 'Pub Loyalty Card — Digital, Not Plastic',
        body: 'Paper pub loyalty cards get lost in wallets and offer no data. Scan Perks gives every regular a digital pub loyalty card on their phone — they scan your bar QR each visit, stamps add automatically, and you see who your regulars are in the dashboard.',
      },
      {
        heading: 'Pub Loyalty Scheme — Digital, Not Paper',
        body: 'Traditional pub loyalty schemes rely on punch cards that get lost. Scan Perks digitizes your pub loyalty scheme with a single QR code at the bar — customers earn free-drink tiers automatically, and you see who your regulars are in real time.',
      },
      {
        heading: 'Affordable Bar Loyalty Software',
        body: 'Enterprise loyalty tools cost $200+/month. Scan Perks is purpose-built for independent bars at $10–15/month. Setup in 5 minutes, no hardware, cancel anytime.',
      },
    ],
    comparison: [
      { feature: 'Monthly cost', scanPerks: '$10–15', traditional: 'Free (no data)', enterprise: '$200+' },
      { feature: 'Customer data', scanPerks: 'Full analytics', traditional: 'None', enterprise: 'Complex' },
      { feature: 'Push offers', scanPerks: 'Included', traditional: 'No', enterprise: 'Extra cost' },
      { feature: 'Setup time', scanPerks: '5 minutes', traditional: 'Instant', enterprise: 'Weeks' },
    ],
    faqs: [
      {
        question: 'What are the best bar loyalty programs for pubs?',
        answer:
          'Scan Perks is among the best bar loyalty programs for independent pubs: QR scanning, pub loyalty scheme rewards, push notifications, and visit tracking from $10/month with a 14-day free trial.',
      },
      {
        question: 'What is a pub loyalty card and how does it work?',
        answer:
          'A pub loyalty card tracks visits toward free drinks or perks. Scan Perks replaces plastic pub loyalty cards with a digital card on the customer\'s phone — scan your bar QR each visit, rewards accumulate automatically, from $10/month.',
      },
      {
        question: 'What are the best pub loyalty cards for independent pubs?',
        answer:
          'Digital pub loyalty cards outperform paper: they cannot be lost and provide visit data. Scan Perks pub loyalty cards work via QR scan at the bar — free-drink tiers, push notifications, analytics from $10/month with 14-day free trial.',
      },
      {
        question: 'What is a pub loyalty scheme and how does it work?',
        answer:
          'A pub loyalty scheme rewards repeat drinkers with perks after each visit. Scan Perks digitizes this with a QR code — customers scan to earn rewards; you track regulars and send happy-hour alerts from one app.',
      },
      {
        question: 'How do bar loyalty programs increase repeat visits?',
        answer:
          'Bar loyalty programs incentivize return trips with free-drink tiers and push offers. Scan Perks venues report up to 24% more repeat visits when QR rewards and notifications are used consistently.',
      },
      {
        question: 'Can I send happy hour deals to bar regulars?',
        answer:
          'Yes. Scan Perks push notifications reach loyalty members — ideal for happy hours, live music nights, and pub events.',
      },
    ],
    supportingPosts: ['how-to-increase-repeat-customers-restaurant', 'best-loyalty-app-small-business'],
  },
  {
    slug: 'restaurant-loyalty-program',
    title: 'Restaurant Loyalty Program',
    metaTitle: 'Restaurant Loyalty Program — Retain Loyal Customers | Scan Perks',
    description:
      'Build restaurant loyal customers with QR rewards, visit analytics, and push offers. Affordable restaurant loyalty program from $10/month. Free 14-day trial.',
    primaryKeyword: 'restaurant loyalty program',
    keywordCluster: [
      'restaurant loyal customers',
      'restaurant customer retention',
      'diner loyalty program',
      'restaurant rewards app',
      'customer loyalty app for restaurants',
      'how to increase repeat customers restaurant',
    ],
    highlights: [
      'Tiered dining rewards',
      'Repeat visit analytics',
      'Slow-night push campaigns',
      'Local discovery listing',
    ],
    localMarkets: ['Family restaurants', 'Fine dining', 'Fast casual', 'Ethnic cuisine'],
    sections: [
      {
        heading: 'Restaurant Loyal Customers Drive Sustainable Revenue',
        body: 'Acquiring a new diner costs 5–7× more than retaining one. A restaurant loyalty program increases visit frequency and average spend. Scan Perks helps you reward regulars, identify VIPs, and re-engage guests who have not visited lately.',
      },
      {
        heading: 'Data-Driven Restaurant Customer Retention',
        body: 'See peak hours, redemption rates, and visit trends in real time. Use insights to schedule staff, plan promotions, and design rewards that actually drive return trips — not just discount hunters.',
      },
      {
        heading: 'Grow Restaurant Business Without Enterprise Cost',
        body: 'Chain restaurants spend thousands on loyalty tech. Scan Perks gives independents the same QR rewards, push offers, and analytics for $10–15/month with zero setup fees.',
      },
    ],
    comparison: [
      { feature: 'Repeat visit tracking', scanPerks: 'Real-time', traditional: 'No', enterprise: 'Yes' },
      { feature: 'Push re-engagement', scanPerks: 'Included', traditional: 'No', enterprise: 'Add-on' },
      { feature: 'Price', scanPerks: '$10–15/mo', traditional: '$0', enterprise: '$200+/mo' },
      { feature: 'Local discovery', scanPerks: 'Free', traditional: 'No', enterprise: 'Rare' },
    ],
    faqs: [
      {
        question: 'What is the best restaurant loyalty program for small businesses?',
        answer:
          'Scan Perks is an affordable restaurant loyalty program with QR scanning, analytics, and push offers — built for independent restaurants, not enterprise chains.',
      },
      {
        question: 'How do restaurants get loyal customers in 2025?',
        answer:
          'Combine digital rewards, personalized offers, and visit data. Scan Perks lets restaurants track regulars, send targeted push promos, and appear in local discovery feeds.',
      },
      {
        question: 'How much does restaurant loyalty software cost?',
        answer:
          'Scan Perks starts at $10/month with a 14-day free trial. Enterprise restaurant loyalty platforms often cost $200+ per month with annual contracts.',
      },
    ],
    supportingPosts: ['how-to-increase-repeat-customers-restaurant', 'qr-code-vs-punch-cards'],
  },
  {
    slug: 'cafe-loyalty-program',
    title: 'Cafe Loyalty App',
    metaTitle: 'Cafe Loyalty App — Coffee Shop Loyalty Programs | Scan Perks',
    description:
      'Top cafe loyalty app for coffee shops. Coffee shop loyalty programs with QR stamps, free drinks & iOS/Android apps — $10/mo, 14-day free trial.',
    primaryKeyword: 'cafe loyalty app',
    heroSeoLine:
      'Cafe loyalty app and coffee shop loyalty programs for independents — digital stamps, coffee shop loyalty reward app from $10/month.',
    quickAnswer:
      'Scan Perks is a cafe loyalty app for coffee shops: customers scan a counter QR to earn free-drink rewards on a digital stamp card. Coffee shop loyalty programs include visit analytics, push offers, and iOS/Android apps — $10/month for 200 members, 14-day free trial, no POS required.',
    keywordCluster: [
      'cafe loyalty app',
      'coffee shop loyalty programs',
      'coffee shop loyalty program',
      'coffee shop loyalty reward app',
      'coffee shop loyalty app',
      'coffee loyalty program',
      'coffee loyalty app',
      'cafe loyalty program',
      'loyalty programs for coffee shops',
      'coffee shop rewards app',
      'best coffee loyalty programs',
    ],
    highlights: [
      'Digital stamp-style rewards',
      'Counter QR — no hardware',
      'Morning regular tracking',
      'Print-ready QR posters',
    ],
    localMarkets: ['Coffee shops', 'Bakeries', 'Tea houses', 'Brunch cafes'],
    featureBullets: [
      'iOS and Android customer loyalty apps',
      'Digital stamp rewards (e.g. buy 9, get 1 free)',
      'Counter QR — no POS integration',
      'Visit analytics and member profiles',
      'Push offers for slow periods',
      '$10/month for up to 200 members',
    ],
    sections: [
      {
        heading: 'Coffee Shop Loyalty Programs — Compared',
        body: 'Coffee shop loyalty programs range from paper punch cards (free, no data) to enterprise suites ($200+/month). Scan Perks sits in the middle: full coffee shop loyalty program features — digital stamps, member profiles, push offers — at $10/month for independents.',
      },
      {
        heading: 'Coffee Shop Loyalty Reward App — Built for Independents',
        body: 'A coffee shop loyalty reward app should be fast at the counter and cheap to run. Scan Perks lets customers scan QR codes to earn free drinks — no plastic cards, no enterprise contracts. Starter plan: 200 customers for $10/month.',
      },
      {
        heading: 'Simple QR Setup at the Counter',
        body: 'Place a QR code by the register. Customers scan in seconds while paying. No tablets, no integrations, no training manual. Most cafes go live in under 5 minutes.',
      },
      {
        heading: 'Among the Best Coffee Loyalty Programs for Independents',
        body: 'Chain coffee apps dominate headlines — but independent cafes need affordable loyalty too. Scan Perks ranks among the best coffee loyalty programs for small shops: digital stamps, QR at the counter, and push promos from $10/month.',
      },
    ],
    comparison: [
      { feature: 'Stamp rewards', scanPerks: 'Digital', traditional: 'Paper', enterprise: 'Custom' },
      { feature: 'Customer profiles', scanPerks: 'Yes', traditional: 'No', enterprise: 'Yes' },
      { feature: 'Monthly cost', scanPerks: '$10', traditional: 'Card printing', enterprise: '$200+' },
      { feature: 'Push promos', scanPerks: 'Yes', traditional: 'No', enterprise: 'Extra' },
    ],
    faqs: [
      {
        question: 'What is the best cafe loyalty app for coffee shops?',
        answer:
          'Scan Perks is a leading cafe loyalty app: QR stamp rewards, coffee shop loyalty program tools, iOS/Android customer apps, push notifications, and analytics — $10/month for 200 members, 14-day free trial at app.scan-perks.com.',
      },
      {
        question: 'What are coffee shop loyalty programs and how do they work?',
        answer:
          'Coffee shop loyalty programs reward repeat customers with free drinks, points, or stamps. Scan Perks runs coffee shop loyalty programs via counter QR scan — customers join on their phone, owners track visits and send push offers from $10/month.',
      },
      {
        question: 'What is a coffee shop loyalty reward app?',
        answer:
          'A coffee shop loyalty reward app lets customers earn perks digitally. Scan Perks is a coffee shop loyalty reward app with stamp-style rewards, member profiles, and push notifications — no POS integration, $10/month Starter plan.',
      },
      {
        question: 'What are the best coffee loyalty programs in 2025?',
        answer:
          'The best coffee loyalty programs combine easy customer signup, digital stamp rewards, and owner analytics without enterprise pricing. Scan Perks offers all three for neighborhood cafes at $10/month.',
      },
      {
        question: 'Do cafes need expensive loyalty hardware?',
        answer:
          'No. Scan Perks uses a printed QR code and smartphones only. No POS integration or tablets required.',
      },
      {
        question: 'Can a small cafe afford a loyalty program?',
        answer:
          'Yes. Scan Perks Starter is $10/month for up to 200 customers — designed for independent cafes and coffee shops.',
      },
    ],
    supportingPosts: ['best-coffee-loyalty-programs', 'best-mobile-loyalty-apps-coffee-shops-2026', 'best-loyalty-app-small-business', 'qr-code-vs-punch-cards'],
  },
  {
    slug: 'qr-loyalty-program',
    title: 'QR Code Loyalty Program',
    metaTitle: 'QR Code Loyalty Program — Loyalty QR for Cafes & Bars',
    description:
      'QR code loyalty program + loyalty QR for coffee shops & pubs. Digital QR loyalty card, analytics — $10/mo, setup in 5 min. Free trial.',
    primaryKeyword: 'qr code loyalty program',
    heroSeoLine:
      'QR code loyalty program, loyalty QR codes, and digital QR loyalty cards — hospitality rewards from $10/month.',
    quickAnswer:
      'A QR code loyalty program lets customers scan a venue code to earn rewards on their phone. Scan Perks provides loyalty QR codes per location, digital QR loyalty cards, visit analytics, and push offers — from $10/month, no POS integration, setup in ~5 minutes.',
    keywordCluster: [
      'qr code loyalty program',
      'qr code loyalty programs',
      'loyalty qr',
      'loyalty program qr code',
      'qr code loyalty card',
      'QR loyalty program',
      'digital QR loyalty card',
      'loyalty card qr code',
      'store loyalty qr codes',
      'contactless loyalty program',
    ],
    highlights: [
      'Unique QR per venue',
      'Print-ready materials',
      'Instant smartphone join',
      'Full visit analytics',
    ],
    featureBullets: [
      'Unique QR code per venue location',
      'Digital loyalty card stored on customer phone',
      'Contactless scan — no plastic cards',
      'Visit logging and redemption tracking',
      'No POS integration required',
      'Setup in ~5 minutes; $10/month Starter',
    ],
    sections: [
      {
        heading: 'Loyalty QR — One Code Per Venue',
        body: 'A loyalty QR code is a scannable link to your venue\'s reward program. Scan Perks generates a unique loyalty QR for each location — print it at the counter or bar; customers scan to join and earn stamps on every visit.',
      },
      {
        heading: 'QR Code Loyalty Card — Digital, Never Lost',
        body: 'A QR code loyalty card lives on your customer\'s phone — no plastic, no printing hundreds of punch cards. Scan Perks generates a unique venue QR; guests scan once to join and every visit counts toward rewards automatically.',
      },
      {
        heading: 'Why Choose a QR Code Loyalty Program in 2025?',
        body: 'Paper cards cannot track data or send push offers. A QR code loyalty program captures every visit, re-engages guests on slow nights, and lists your bar or cafe in local discovery — while staying as fast as a scan at checkout.',
      },
      {
        heading: 'Built for Hospitality, Not Generic Retail',
        body: 'Scan Perks QR loyalty is designed for food and beverage: reward tiers for drinks and meals, happy-hour pushes, and dashboards that matter to venue owners.',
      },
    ],
    comparison: [
      { feature: 'Join method', scanPerks: 'QR scan', traditional: 'Paper card', enterprise: 'App + card' },
      { feature: 'Visit data', scanPerks: 'Automatic', traditional: 'None', enterprise: 'Yes' },
      { feature: 'Lost cards', scanPerks: 'Impossible', traditional: 'Common', enterprise: 'Rare' },
      { feature: 'Cost', scanPerks: '$10–15/mo', traditional: 'Print cost', enterprise: '$200+/mo' },
    ],
    faqs: [
      {
        question: 'What is a QR code loyalty program?',
        answer:
          'A QR code loyalty program lets customers scan a unique code at your venue to join and earn digital rewards. Scan Perks is a hospitality-focused QR code loyalty program with analytics, push offers, and print-ready materials from $10/month.',
      },
      {
        question: 'What is a QR code loyalty card?',
        answer:
          'A QR code loyalty card is a digital reward card accessed via smartphone scan — no physical plastic. Scan Perks replaces paper punch cards with a QR loyalty card customers keep on their phone.',
      },
      {
        question: 'How does a QR code loyalty program work for restaurants and bars?',
        answer:
          'You display a venue QR code; customers scan with the Scan Perks app to collect perks each visit. Owners manage rewards and view analytics from app.scan-perks.com — setup in under 5 minutes.',
      },
      {
        question: 'Is a QR code loyalty program better than punch cards?',
        answer:
          'Yes for growth: QR programs provide visit tracking, push notifications, and customer profiles — benefits punch cards cannot offer.',
      },
    ],
    supportingPosts: ['qr-code-loyalty-program-guide', 'how-to-choose-qr-loyalty-program-cafe', 'qr-code-vs-punch-cards', 'best-loyalty-app-small-business'],
  },
  {
    slug: 'grow-restaurant-business',
    title: 'Grow Your Restaurant Business',
    metaTitle: 'Grow Your Restaurant Business — Increase Customers, Revenue & Profits | Scan Perks',
    description:
      'Increase customers, revenue, and profits with Scan Perks loyalty. Grow your restaurant or bar business with repeat visits, trust, and analytics from $10/month.',
    primaryKeyword: 'grow restaurant business',
    keywordCluster: [
      'grow your business',
      'grow business with loyalty',
      'increase restaurant revenue',
      'increase business profits',
      'increase customers restaurant',
      'increase foot traffic',
      'boost restaurant sales',
      'business growth hospitality',
      'repeat customer revenue',
      'customer lifetime value',
    ],
    highlights: [
      '+24% avg repeat visits',
      'Customer lifetime value',
      'Slow-night campaigns',
      'No long-term contracts',
    ],
    sections: [
      {
        heading: 'Grow Your Business by Keeping Customers Coming Back',
        body: 'New customer acquisition is expensive. Growing your restaurant business means increasing repeat visits and lifetime value. Scan Perks loyalty rewards give guests a reason to return — and give you data to optimize every promotion.',
      },
      {
        heading: 'Loyalty as a Growth Engine, Not a Discount Trap',
        body: 'Well-designed rewards increase frequency without eroding margin. Use tiered perks, visit-based free items, and targeted push offers on slow nights — all tracked in your Scan Perks dashboard.',
      },
      {
        heading: 'Affordable Growth for Independent Venues',
        body: 'You do not need a corporate budget to grow. Scan Perks costs less than a few lost punch-card stacks per month and includes local discovery so new customers find you too.',
      },
      {
        heading: 'Increase Customers Without Expensive Advertising',
        body: 'Paid ads bring one-time visitors; loyalty brings repeat customers who cost less to serve and refer friends. Scan Perks combines retention rewards with local discovery — a dual strategy to increase customers sustainably.',
      },
      {
        heading: 'Grow Profits Through Customer Lifetime Value',
        body: 'Profit growth follows when guests visit more often and spend confidently. Track lifetime value in your dashboard, optimize reward tiers, and use push offers to lift revenue on slow nights — all from $10–15/month.',
      },
    ],
    comparison: [
      { feature: 'Growth focus', scanPerks: 'Retention + discovery', traditional: 'Retention only', enterprise: 'Multi-location' },
      { feature: 'Investment', scanPerks: '$10–15/mo', traditional: 'Low', enterprise: 'High' },
      { feature: 'Time to value', scanPerks: 'Days', traditional: 'Weeks', enterprise: 'Months' },
      { feature: 'Push marketing', scanPerks: 'Built-in', traditional: 'No', enterprise: 'Add-on' },
    ],
    faqs: [
      {
        question: 'How can loyalty help grow my restaurant business?',
        answer:
          'Loyalty increases repeat visits, average spend, and referrals. Scan Perks adds push re-engagement and local discovery so you grow both retention and new foot traffic.',
      },
      {
        question: 'What is the ROI of a business loyalty program?',
        answer:
          'Venues using Scan Perks report up to 24% more repeat visits. At $10–15/month, even a handful of extra weekly visits typically pays for the program many times over.',
      },
      {
        question: 'How do I grow my business without a big marketing budget?',
        answer:
          'Focus on existing customers: reward returns, send timely push offers, and get listed in Scan Perks local discovery — all included from $10/month.',
      },
      {
        question: 'How can I increase customers at my restaurant or bar?',
        answer:
          'Use loyalty to boost repeat visits, list your venue in Scan Perks discovery for new local guests, and re-engage lapsed customers with push offers — a complete growth stack from $10/month.',
      },
      {
        question: 'Does loyalty really increase restaurant profits?',
        answer:
          'Yes. Repeat customers have higher lifetime value and lower acquisition cost. Scan Perks venues report up to 24% more repeat visits — directly supporting profit growth.',
      },
    ],
    supportingPosts: ['how-to-increase-repeat-customers-restaurant', 'how-to-increase-customers-restaurant-bar', 'increase-restaurant-revenue-profits'],
  },
];

import { keywordLandings } from './keywordLandings';

export function getLoyaltyPage(slug: string): LoyaltyPage | undefined {
  return [...loyaltyPages, ...keywordLandings].find((p) => p.slug === slug);
}

export function getAllLandingSlugs(): string[] {
  return [...loyaltyPages, ...keywordLandings].map((p) => p.slug);
}

export function getAllLoyaltySlugs(): string[] {
  return loyaltyPages.map((p) => p.slug);
}
