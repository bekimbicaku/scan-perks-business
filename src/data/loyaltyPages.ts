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
  keywordCluster: string[];
  highlights: string[];
  sections: LoyaltySection[];
  comparison: LoyaltyComparison[];
  faqs: { question: string; answer: string }[];
  supportingPosts: string[];
  localMarkets?: string[];
}

export const loyaltyPages: LoyaltyPage[] = [
  {
    slug: 'bar-loyalty-program',
    title: 'Bar Loyalty Program',
    metaTitle: 'Bar Loyalty Program — Loyal Customers & Repeat Visits | Scan Perks',
    description:
      'Launch a bar loyalty program with QR rewards, happy-hour push offers, and loyal customer tracking. Scan Perks starts at $10/month with a 14-day free trial.',
    primaryKeyword: 'bar loyalty program',
    keywordCluster: [
      'bar loyal customers',
      'bar customer rewards program',
      'pub loyalty program',
      'repeat customers bar',
      'bar loyalty app',
      'cheap loyalty program for bars',
      'digital rewards for pubs',
    ],
    highlights: [
      'Happy-hour push notifications',
      'Free-drink reward tiers',
      'Visit tracking for regulars',
      'No contracts — from $10/month',
    ],
    localMarkets: ['Sports bars', 'Craft beer pubs', 'Cocktail lounges', 'Neighborhood bars'],
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
        question: 'What is the best bar loyalty program for independent pubs?',
        answer:
          'Scan Perks offers QR-based bar loyalty from $10/month with push notifications, visit tracking, and reward tiers — designed for independent bars and pubs without enterprise pricing.',
      },
      {
        question: 'How do bars increase loyal customers without punch cards?',
        answer:
          'Use a digital bar loyalty program. Customers scan a QR code to earn rewards on their phone. You get visit data and can send happy-hour alerts — impossible with paper cards.',
      },
      {
        question: 'Can I send happy hour deals to bar regulars?',
        answer:
          'Yes. Scan Perks push notifications reach customers who opted into your loyalty program — ideal for happy hours, live music nights, and limited promotions.',
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
    title: 'Cafe Loyalty Program',
    metaTitle: 'Cafe Loyalty Program — Coffee Shop Rewards App | Scan Perks',
    description:
      'Affordable cafe loyalty program with digital stamp rewards, QR scanning, and customer profiles. Perfect for coffee shops. From $10/month, 14-day free trial.',
    primaryKeyword: 'cafe loyalty program',
    keywordCluster: [
      'coffee shop loyalty program',
      'coffee shop loyalty program app',
      'cafe customer rewards',
      'digital stamp card cafe',
      'neighborhood cafe loyalty',
    ],
    highlights: [
      'Digital stamp-style rewards',
      'Counter QR — no hardware',
      'Morning regular tracking',
      'Print-ready QR posters',
    ],
    localMarkets: ['Coffee shops', 'Bakeries', 'Tea houses', 'Brunch cafes'],
    sections: [
      {
        heading: 'Coffee Shop Loyalty That Morning Regulars Love',
        body: 'Your best customers visit daily or weekly. A cafe loyalty program keeps them choosing you over the chain on the corner. Scan Perks offers familiar stamp-style rewards — buy 9, get 1 free — without printing hundreds of paper cards.',
      },
      {
        heading: 'Simple QR Setup at the Counter',
        body: 'Place a QR code by the register. Customers scan in seconds while paying. No tablets, no integrations, no training manual. Most cafes go live in under 5 minutes.',
      },
      {
        heading: 'Affordable Cafe Loyalty for Small Business',
        body: 'The Starter plan supports up to 200 active customers for $10/month — ideal for neighborhood cafes launching their first loyalty program.',
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
        question: 'What is the best loyalty program for a coffee shop?',
        answer:
          'Scan Perks offers stamp-style digital rewards, QR scanning at the counter, and push notifications for new menu items — from $10/month with a free trial.',
      },
      {
        question: 'Do cafes need expensive loyalty hardware?',
        answer:
          'No. Scan Perks uses a printed QR code and smartphones only. No POS integration or tablets required for basic cafe loyalty.',
      },
      {
        question: 'Can a small cafe afford a loyalty program?',
        answer:
          'Yes. Scan Perks Starter is $10/month for up to 200 customers — designed for independent cafes and coffee shops.',
      },
    ],
    supportingPosts: ['best-loyalty-app-small-business', 'qr-code-vs-punch-cards'],
  },
  {
    slug: 'qr-loyalty-program',
    title: 'QR Code Loyalty Program',
    metaTitle: 'QR Code Loyalty Program for Business | Scan Perks',
    description:
      'Replace punch cards with a QR code loyalty program. Customers scan to earn rewards; you get analytics and push offers. Hospitality-focused, from $10/month.',
    primaryKeyword: 'QR code loyalty program',
    keywordCluster: [
      'QR loyalty program',
      'QR scanning loyalty rewards',
      'digital loyalty cards',
      'QR rewards app',
      'contactless loyalty program',
    ],
    highlights: [
      'Unique QR per venue',
      'Print-ready materials',
      'Instant smartphone join',
      'Full visit analytics',
    ],
    sections: [
      {
        heading: 'What Is a QR Code Loyalty Program?',
        body: 'A QR code loyalty program lets customers join and earn rewards by scanning a code with their smartphone — no physical cards. Scan Perks generates a unique QR for your bar, cafe, or restaurant with branded print materials included.',
      },
      {
        heading: 'QR Loyalty vs Paper Punch Cards',
        body: 'Punch cards get lost and provide zero data. QR loyalty captures every visit, enables push re-engagement, and lists your venue in local discovery — while staying as fast as a scan at checkout.',
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
        question: 'How does a QR code loyalty program work?',
        answer:
          'Each business gets a unique QR code. Customers scan it with the Scan Perks app to join and collect rewards. Owners manage perks and view analytics from the same platform.',
      },
      {
        question: 'Is QR loyalty better than punch cards?',
        answer:
          'QR loyalty provides visit tracking, push notifications, and customer profiles — benefits punch cards cannot offer — while remaining quick for staff and guests.',
      },
      {
        question: 'Do I need a special QR scanner device?',
        answer:
          'No. Customers scan with their own phones. You display a printed QR code at your venue — Scan Perks provides print-ready files.',
      },
    ],
    supportingPosts: ['qr-code-vs-punch-cards', 'best-loyalty-app-small-business'],
  },
  {
    slug: 'grow-restaurant-business',
    title: 'Grow Your Restaurant Business',
    metaTitle: 'Grow Your Restaurant Business with Loyalty Rewards | Scan Perks',
    description:
      'Grow your business with a restaurant loyalty program: repeat customers, push offers, and analytics. Scan Perks helps hospitality venues increase revenue from $10/month.',
    primaryKeyword: 'grow restaurant business',
    keywordCluster: [
      'grow your business',
      'grow business with loyalty',
      'increase restaurant revenue',
      'business growth hospitality',
      'repeat customer revenue',
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
    ],
    supportingPosts: ['how-to-increase-repeat-customers-restaurant', 'best-loyalty-app-small-business'],
  },
];

export function getLoyaltyPage(slug: string): LoyaltyPage | undefined {
  return loyaltyPages.find((p) => p.slug === slug);
}

export function getAllLoyaltySlugs(): string[] {
  return loyaltyPages.map((p) => p.slug);
}
