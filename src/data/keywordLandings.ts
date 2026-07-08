import type { LoyaltyPage } from './loyaltyPages';

/** Exact-match URL pages for GSC top queries — target top 10 rankings */
export const keywordLandings: LoyaltyPage[] = [
  {
    slug: 'cafe-loyalty-app',
    title: 'Cafe Loyalty App',
    metaTitle: 'Cafe Loyalty App — Coffee Shops from $10/mo | Scan Perks',
    description:
      'Cafe loyalty app for independent coffee shops. QR stamps, iOS/Android, free drinks — $10/mo, 14-day trial. app.scan-perks.com',
    primaryKeyword: 'cafe loyalty app',
    heroSeoLine:
      'The cafe loyalty app built for independent coffee shops — digital stamps, counter QR, iOS & Android from $10/month.',
    quickAnswer:
      'Scan Perks is a cafe loyalty app: customers scan a counter QR to earn stamp rewards toward free drinks. Includes iOS/Android customer apps, visit analytics, and push offers — $10/month for 200 members, 14-day free trial, no POS integration.',
    keywordCluster: [
      'cafe loyalty app',
      'coffee loyalty app',
      'coffee shop loyalty app',
      'loyalty app for coffee shop',
      'cafe rewards app',
    ],
    highlights: ['iOS + Android apps', 'QR stamp rewards', '$10/month', '5-min setup'],
    featureBullets: [
      'Cafe loyalty app on iOS App Store and Google Play',
      'Digital stamp rewards (buy 9, get 1 free)',
      'Counter QR — no POS or hardware',
      'Coffee shop member profiles and visit analytics',
      'Push offers for slow periods',
      '$10/month Starter — 14-day free trial',
    ],
    sections: [
      {
        heading: 'Why Coffee Shops Need a Dedicated Cafe Loyalty App',
        body: 'Generic retail loyalty tools miss cafe workflows — fast counter service, stamp-style free drinks, morning regulars. A cafe loyalty app should let customers join in under 30 seconds via QR scan. Scan Perks is purpose-built for coffee shops: stamp rewards, member list, and push notifications from $10/month.',
      },
      {
        heading: 'Cafe Loyalty App vs Paper Punch Cards',
        body: 'Punch cards cost nothing upfront but provide zero visit data and are lost constantly. A cafe loyalty app digitizes the same reward logic with full analytics — owners see who visits weekly, send push offers, and never reprint cards. Scan Perks Starter: $10/month for 200 active members.',
      },
      {
        heading: 'How the Scan Perks Cafe Loyalty App Works',
        body: '1) Sign up at app.scan-perks.com. 2) Set stamp rules (e.g. buy 9, get 1 free). 3) Print your venue QR. 4) Customers scan with the Scan Perks app or mobile browser. 5) Track visits and send push offers from your dashboard. Typical setup: under 5 minutes.',
      },
      {
        heading: 'Cafe Loyalty App Pricing',
        body: 'Starter: $10/month, up to 200 loyalty members, 50 push notifications/month. Growth: $15/month, unlimited members and pushes. Both include the full cafe loyalty app, analytics, and print-ready QR materials. 14-day free trial — cancel anytime.',
      },
    ],
    comparison: [
      { feature: 'Monthly cost', scanPerks: '$10', traditional: 'Print only', enterprise: '$200+' },
      { feature: 'Mobile app', scanPerks: 'iOS + Android', traditional: 'No', enterprise: 'Yes' },
      { feature: 'Visit analytics', scanPerks: 'Yes', traditional: 'No', enterprise: 'Yes' },
      { feature: 'Setup time', scanPerks: '~5 min', traditional: 'Instant', enterprise: 'Weeks' },
    ],
    faqs: [
      {
        question: 'What is the best cafe loyalty app for coffee shops?',
        answer:
          'Scan Perks is a leading cafe loyalty app for independents: QR stamps, iOS/Android apps, analytics, push offers — $10/month, 14-day trial at app.scan-perks.com.',
      },
      {
        question: 'How much does a cafe loyalty app cost?',
        answer: 'Scan Perks cafe loyalty app costs $10/month (Starter) or $15/month (Growth). 14-day free trial included.',
      },
      {
        question: 'Does the cafe loyalty app need POS integration?',
        answer: 'No. Scan Perks cafe loyalty app uses counter QR scanning only — no Square, Toast, or POS API required.',
      },
    ],
    supportingPosts: ['best-coffee-loyalty-programs', 'best-mobile-loyalty-apps-coffee-shops-2026'],
    localMarkets: ['Coffee shops', 'Bakeries', 'Tea houses'],
  },
  {
    slug: 'pub-loyalty-scheme',
    title: 'Pub Loyalty Scheme',
    metaTitle: 'Pub Loyalty Scheme — Digital QR from $10/mo | Scan Perks',
    description:
      'Pub loyalty scheme for independent pubs & bars. Digital pub loyalty card, free-drink tiers, happy-hour pushes — $10/mo free trial.',
    primaryKeyword: 'pub loyalty scheme',
    heroSeoLine:
      'Pub loyalty scheme for independent pubs — QR rewards, digital pub loyalty card, happy-hour push alerts from $10/month.',
    quickAnswer:
      'A pub loyalty scheme rewards regular drinkers with perks each visit. Scan Perks digitizes your pub loyalty scheme with a bar QR code — customers earn free-drink tiers on a digital pub loyalty card, you send happy-hour pushes and track regulars — $10/month, 14-day free trial.',
    keywordCluster: [
      'pub loyalty scheme',
      'pub loyalty program',
      'pub loyalty card',
      'pub loyalty cards',
      'bar loyalty scheme',
    ],
    highlights: ['Digital pub loyalty card', 'Happy-hour pushes', 'Free-drink tiers', '$10/month'],
    featureBullets: [
      'Pub loyalty scheme via QR scan at the bar',
      'Digital pub loyalty card on customer phone',
      'Free-drink reward tiers (configurable)',
      'Happy-hour and event push notifications',
      'Regular customer visit analytics',
      'No POS integration — $10–15/month',
    ],
    sections: [
      {
        heading: 'What Is a Pub Loyalty Scheme?',
        body: 'A pub loyalty scheme rewards repeat drinkers — typically a free pint after every 10 purchases, or member discounts on slow nights. Traditional schemes use paper cards that get lost. Scan Perks runs a digital pub loyalty scheme: one QR code at the bar, rewards on every customer\'s phone.',
      },
      {
        heading: 'Pub Loyalty Scheme vs Enterprise Bar Software',
        body: 'Enterprise loyalty suites cost $200+/month and require POS integration. Scan Perks pub loyalty scheme is built for single-location pubs at $10–15/month — setup in ~5 minutes, no contracts, 14-day free trial.',
      },
      {
        heading: 'How to Launch a Pub Loyalty Scheme in One Day',
        body: 'Sign up at app.scan-perks.com, configure free-drink tiers, download your bar QR poster, and train staff to mention the scheme. Most pubs go live the same day. Growth plan adds unlimited push notifications for happy-hour campaigns.',
      },
      {
        heading: 'Best Pub Loyalty Scheme Features',
        body: 'Look for: digital pub loyalty card (not plastic), visit tracking, push notifications, and affordable pricing. Scan Perks includes all four — plus analytics showing who your regulars are and when they visit.',
      },
    ],
    comparison: [
      { feature: 'Pub loyalty card', scanPerks: 'Digital QR', traditional: 'Paper card', enterprise: 'App + card' },
      { feature: 'Happy-hour pushes', scanPerks: 'Included', traditional: 'No', enterprise: 'Extra $' },
      { feature: 'Monthly cost', scanPerks: '$10–15', traditional: 'Free', enterprise: '$200+' },
      { feature: 'Lost cards', scanPerks: 'Never', traditional: 'Often', enterprise: 'Rare' },
    ],
    faqs: [
      {
        question: 'What is a pub loyalty scheme?',
        answer:
          'A pub loyalty scheme rewards regular drinkers with perks after each visit. Scan Perks digitizes this with QR scanning, digital pub loyalty cards, and push alerts from $10/month.',
      },
      {
        question: 'How much does a pub loyalty scheme cost?',
        answer: 'Scan Perks pub loyalty scheme: $10/month (200 members) or $15/month (unlimited). 14-day free trial.',
      },
      {
        question: 'What is the best pub loyalty scheme for small pubs?',
        answer:
          'Scan Perks — QR pub loyalty scheme with digital cards, analytics, and happy-hour pushes. No POS required, $10/month.',
      },
    ],
    supportingPosts: ['bar-customer-retention-tips', 'best-loyalty-app-small-business'],
    localMarkets: ['Independent pubs', 'Sports bars', 'Craft beer bars'],
  },
  {
    slug: 'pub-loyalty-card',
    title: 'Pub Loyalty Card',
    metaTitle: 'Pub Loyalty Card — Digital QR for Pubs | Scan Perks',
    description:
      'Replace plastic pub loyalty cards with a digital pub loyalty card on QR. Track visits, send happy-hour pushes — $10/mo, free trial.',
    primaryKeyword: 'pub loyalty card',
    heroSeoLine:
      'Digital pub loyalty card for independent pubs — QR scan at the bar, never lost, full analytics from $10/month.',
    quickAnswer:
      'A pub loyalty card tracks drinks toward free pints or rewards. Scan Perks replaces plastic pub loyalty cards with a digital card on the customer\'s phone — scan your bar QR each visit, stamps add automatically, owners get visit analytics and push tools from $10/month.',
    keywordCluster: ['pub loyalty card', 'pub loyalty cards', 'bar loyalty cards', 'digital pub loyalty card'],
    highlights: ['No plastic cards', 'QR at bar', 'Visit tracking', '$10/month'],
    featureBullets: [
      'Digital pub loyalty card stored on customer phone',
      'Replaces paper pub loyalty cards and punch cards',
      'QR scan at bar — contactless',
      'Free-drink tiers when stamp threshold met',
      'Owner dashboard with regular customer list',
      '$10/month — 14-day free trial',
    ],
    sections: [
      {
        heading: 'Paper Pub Loyalty Cards vs Digital',
        body: 'Paper pub loyalty cards get lost, forged, and provide no data. A digital pub loyalty card on the customer\'s phone cannot be lost — every scan is logged, and you can push happy-hour offers to cardholders instantly.',
      },
      {
        heading: 'How the Scan Perks Pub Loyalty Card Works',
        body: 'Display your venue QR at the bar. First-time customers scan to get a digital pub loyalty card. Each return visit scan adds a stamp. When they hit your reward threshold (e.g. 10 drinks = 1 free), staff redeem in the dashboard.',
      },
      {
        heading: 'Pub Loyalty Cards for Independent Pubs',
        body: 'Chain pubs use proprietary apps. Independents need affordable pub loyalty cards without enterprise cost. Scan Perks: $10/month, iOS/Android customer apps, full pub loyalty card program with analytics.',
      },
    ],
    comparison: [
      { feature: 'Card type', scanPerks: 'Phone digital', traditional: 'Paper', enterprise: 'Plastic + app' },
      { feature: 'Analytics', scanPerks: 'Per visit', traditional: 'None', enterprise: 'Yes' },
      { feature: 'Cost', scanPerks: '$10/mo', traditional: 'Printing', enterprise: '$200+/mo' },
      { feature: 'Push offers', scanPerks: 'Yes', traditional: 'No', enterprise: 'Yes' },
    ],
    faqs: [
      {
        question: 'What is a pub loyalty card?',
        answer:
          'A pub loyalty card tracks visits toward free drinks or perks. Scan Perks offers a digital pub loyalty card via QR scan — no plastic, from $10/month.',
      },
      {
        question: 'What are the best pub loyalty cards for independent pubs?',
        answer:
          'Digital pub loyalty cards outperform paper. Scan Perks: QR-based pub loyalty card with analytics and push notifications — $10/month, 14-day trial.',
      },
    ],
    supportingPosts: ['bar-customer-retention-tips'],
    localMarkets: ['Pubs', 'Sports bars', 'Neighborhood bars'],
  },
  {
    slug: 'coffee-shop-loyalty-programs',
    title: 'Coffee Shop Loyalty Programs',
    metaTitle: 'Coffee Shop Loyalty Programs — Compared 2026 | Scan Perks',
    description:
      'Coffee shop loyalty programs for independents compared. Cafe loyalty app with QR stamps — $10/mo, iOS/Android, 14-day free trial.',
    primaryKeyword: 'coffee shop loyalty programs',
    heroSeoLine:
      'Coffee shop loyalty programs for independent cafes — digital stamps, free drinks, and analytics from $10/month.',
    quickAnswer:
      'Coffee shop loyalty programs reward repeat customers with free drinks, points, or stamps. Scan Perks offers coffee shop loyalty programs via QR: customers scan at the counter, earn digital rewards on iOS/Android, owners get analytics and push offers — $10/month, no POS required.',
    keywordCluster: [
      'coffee shop loyalty programs',
      'coffee shop loyalty program',
      'loyalty programs for coffee shops',
      'coffee shop rewards programs',
      'coffee loyalty program',
    ],
    highlights: ['Stamp rewards', 'Coffee shop analytics', 'Push offers', '$10/month'],
    featureBullets: [
      'Full coffee shop loyalty program via QR',
      'Digital stamp rewards (configurable rules)',
      'Coffee shop loyalty reward app — iOS & Android',
      'Member profiles and visit frequency data',
      'Push notifications for slow periods',
      '14-day free trial at app.scan-perks.com',
    ],
    sections: [
      {
        heading: 'Types of Coffee Shop Loyalty Programs',
        body: 'Coffee shop loyalty programs include stamp cards (buy 9, get 1 free), points systems, tiered VIP perks, and subscription models. For independents, stamp-style programs work best — simple for staff and customers. Scan Perks digitizes stamp coffee shop loyalty programs with QR scanning.',
      },
      {
        heading: 'Coffee Shop Loyalty Programs: Cost Comparison',
        body: 'Paper punch cards: $0 software, no data. Enterprise suites: $200–500/month. Scan Perks coffee shop loyalty programs: $10/month for 200 members — includes digital rewards, analytics, push offers, and customer apps.',
      },
      {
        heading: 'How to Choose a Coffee Shop Loyalty Program',
        body: 'Prioritize: (1) under $20/month, (2) no POS lock-in, (3) mobile customer experience, (4) visit analytics. Scan Perks meets all four for independent coffee shops — setup in ~5 minutes at app.scan-perks.com.',
      },
      {
        heading: 'Coffee Shop Loyalty Programs vs Chain Apps',
        body: 'Starbucks Rewards sets consumer expectations but costs millions to replicate. Independent coffee shop loyalty programs should be affordable and fast at the counter. Scan Perks bridges the gap — professional digital rewards from $10/month.',
      },
    ],
    comparison: [
      { feature: 'Program type', scanPerks: 'Digital stamps', traditional: 'Paper', enterprise: 'Points API' },
      { feature: 'Monthly cost', scanPerks: '$10', traditional: '$0', enterprise: '$200+' },
      { feature: 'Mobile app', scanPerks: 'Yes', traditional: 'No', enterprise: 'Yes' },
      { feature: 'Best for', scanPerks: 'Independents', traditional: 'Tiny ops', enterprise: 'Chains' },
    ],
    faqs: [
      {
        question: 'What are coffee shop loyalty programs?',
        answer:
          'Coffee shop loyalty programs reward repeat customers with free drinks or perks. Scan Perks runs them digitally via QR scan — $10/month for independent cafes.',
      },
      {
        question: 'What is the best coffee shop loyalty program for small cafes?',
        answer:
          'Scan Perks: stamp-style coffee shop loyalty program with iOS/Android apps, analytics, and push offers — $10/month, 14-day free trial.',
      },
    ],
    supportingPosts: ['best-coffee-loyalty-programs', 'how-to-choose-qr-loyalty-program-cafe'],
    localMarkets: ['Coffee shops', 'Brunch cafes', 'Bakeries'],
  },
  {
    slug: 'qr-code-loyalty-program',
    title: 'QR Code Loyalty Program',
    metaTitle: 'QR Code Loyalty Program — Cafes & Bars $10/mo | Scan Perks',
    description:
      'QR code loyalty program for cafes, bars & coffee shops. Loyalty QR, digital card, analytics — setup in 5 min. Free trial.',
    primaryKeyword: 'qr code loyalty program',
    heroSeoLine:
      'QR code loyalty program for hospitality — loyalty QR codes, digital cards, and visit analytics from $10/month.',
    quickAnswer:
      'A QR code loyalty program lets customers scan a venue code to earn rewards on their phone. Scan Perks is a hospitality QR code loyalty program with unique loyalty QR per location, digital loyalty cards, push offers, and analytics — $10/month, no POS, setup in ~5 minutes.',
    keywordCluster: [
      'qr code loyalty program',
      'qr code loyalty programs',
      'loyalty qr',
      'loyalty program qr code',
      'qr code loyalty card',
    ],
    highlights: ['Unique loyalty QR', 'Digital loyalty card', 'No POS', '5-min setup'],
    featureBullets: [
      'QR code loyalty program with unique venue code',
      'Loyalty QR printed on counter posters',
      'Digital QR loyalty card on customer phone',
      'Visit logging and reward redemption',
      'Push notifications and analytics dashboard',
      '$10/month — 14-day free trial',
    ],
    sections: [
      {
        heading: 'What Is a QR Code Loyalty Program?',
        body: 'A QR code loyalty program replaces paper punch cards with scannable codes. Customers scan your loyalty QR at the counter to join and earn stamps. Scan Perks is a hospitality-focused QR code loyalty program — built for cafes, bars, and restaurants, not generic retail.',
      },
      {
        heading: 'QR Code Loyalty Program vs Traditional Cards',
        body: 'Traditional cards cannot track visits or send push offers. A QR code loyalty program logs every scan, builds member profiles, and lets owners re-engage customers on slow nights — from $10/month vs $0 upfront but zero data for paper.',
      },
      {
        heading: 'How to Start a QR Code Loyalty Program',
        body: '1) Create account at app.scan-perks.com. 2) Set reward rules. 3) Download loyalty QR poster. 4) Display at counter. 5) Customers scan to join. Most venues complete setup in under 5 minutes with no POS integration.',
      },
    ],
    comparison: [
      { feature: 'Join method', scanPerks: 'QR scan', traditional: 'Paper', enterprise: 'Multi-step' },
      { feature: 'Data', scanPerks: 'Full', traditional: 'None', enterprise: 'Full' },
      { feature: 'Cost', scanPerks: '$10/mo', traditional: 'Print', enterprise: '$200+/mo' },
      { feature: 'Setup', scanPerks: '5 min', traditional: 'Instant', enterprise: 'Weeks' },
    ],
    faqs: [
      {
        question: 'What is the best QR code loyalty program for cafes?',
        answer: 'Scan Perks — hospitality QR code loyalty program with digital cards, analytics, push offers from $10/month.',
      },
      {
        question: 'How does a QR code loyalty program work?',
        answer: 'Customers scan your venue loyalty QR to join and earn rewards on their phone. Scan Perks tracks visits and manages redemptions from app.scan-perks.com.',
      },
    ],
    supportingPosts: ['qr-code-loyalty-program-guide', 'how-to-choose-qr-loyalty-program-cafe'],
    localMarkets: ['Cafes', 'Bars', 'Restaurants'],
  },
];
