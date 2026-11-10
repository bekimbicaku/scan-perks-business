import { phrases, siteFacts } from './site-facts';

export interface BlogArticle {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  keywords: string[];
  publishedAt: string;
  /** Optional freshness date for major rewrites */
  updatedAt?: string;
  answer: string;
  sections: { heading: string; body: string; links?: { href: string; label: string }[] }[];
  faqs: { question: string; answer: string }[];
  clusterPage: { href: string; label: string; anchor: string };
  /** Optional comparison table (Scan Perks vs paper vs enterprise) */
  comparison?: { feature: string; scanPerks: string; traditional: string; enterprise: string }[];
  /** Show the named competitor price table (Loopy, Square, LoyaltyPass, Brewstamp) */
  namedVendors?: boolean;
  relatedLinks?: { href: string; label: string }[];
}

export const blogArticles: BlogArticle[] = [
  {
    slug: 'how-to-increase-repeat-customers-restaurant',
    title: 'How to Increase Repeat Customers at Your Restaurant',
    metaTitle: 'How to Increase Repeat Customers at Your Restaurant | Scan Perks',
    description:
      `Proven strategies to get restaurant loyal customers: digital rewards, push offers, and data. Learn how Scan Perks helps grow repeat visits from ${phrases.en.starterPerMonth}.`,
    keywords: [
      'how to increase repeat customers restaurant',
      'restaurant loyal customers',
      'restaurant customer retention',
      'repeat diners',
    ],
    publishedAt: '2025-03-15',
    answer:
      `Increase restaurant repeat customers with a digital loyalty program (QR rewards), personalized push offers on slow nights, and visit analytics. Scan Perks combines all three for ${phrases.en.rangeBareMonth}.`,
    sections: [
      {
        heading: 'Why Repeat Customers Matter More Than New Traffic',
        body: 'Repeat diners spend more per year and refer friends. Focusing on restaurant loyal customers lowers marketing cost per visit and stabilizes revenue across seasons.',
      },
      {
        heading: 'Replace Punch Cards with Digital Rewards',
        body: 'Paper cards get lost and tell you nothing about behavior. A restaurant loyalty program with QR scanning captures every visit and enables push re-engagement.',
      },
      {
        heading: 'Use Data to Time Your Offers',
        body: 'Dashboard analytics show slow nights and redemption patterns. Send push notifications when you need covers, not random discounts that hurt margin.',
      },
    ],
    faqs: [
      {
        question: 'What is the fastest way to get more repeat restaurant customers?',
        answer:
          'Launch a QR loyalty program with clear rewards (e.g. free appetizer after 8 visits) and promote it at every table. Scan Perks setup takes under 5 minutes.',
      },
      {
        question: 'How often should restaurants send loyalty offers?',
        answer:
          `Start with one targeted push per week — happy hour or slow-night specials. Avoid daily spam. Growth is ${phrases.en.unlimitedScans}, not a reason to message people every day.`,
      },
    ],
    clusterPage: {
      href: '/restaurant-loyalty-program/',
      label: 'Restaurant Loyalty Program',
      anchor: 'restaurant loyalty program with Scan Perks',
    },
  },
  {
    slug: 'best-loyalty-app-small-business',
    title: 'Best Loyalty App for Small Business (Hospitality)',
    metaTitle: 'Best Loyalty App for Small Business — Bars & Restaurants | Scan Perks',
    description:
      'Compare the best loyalty app for small business hospitality. Why Scan Perks wins on price, QR simplicity, and features for bars, cafes & restaurants.',
    keywords: [
      'best loyalty app for small business',
      'small business loyalty software',
      'affordable loyalty app',
      'loyalty app for restaurants',
    ],
    publishedAt: '2025-04-02',
    answer:
      `The best loyalty app for small hospitality businesses is affordable, quick to set up, and built for food & beverage — not retail chains. Scan Perks offers QR rewards, push notifications, and analytics from ${phrases.en.starterPerMonth} with a ${phrases.en.trial}.`,
    sections: [
      {
        heading: 'What Small Businesses Should Look For',
        body: 'Avoid enterprise contracts and complex POS integrations if you run one location. Prioritize QR simplicity, monthly pricing under $20, and hospitality-specific features.',
      },
      {
        heading: 'Scan Perks vs Enterprise Loyalty',
        body: `Enterprise tools cost $200+/month and take weeks to deploy. Scan Perks goes live in minutes at ${phrases.en.rangeBareMonth} — designed for independent bars, cafes, and restaurants.`,
      },
      {
        heading: 'Features That Actually Matter',
        body: 'QR scanning, visit analytics, push offers, print-ready materials, and local discovery. Scan Perks includes these without upsells for basic hospitality needs.',
      },
    ],
    faqs: [
      {
        question: 'What is the cheapest loyalty app for a small cafe?',
        answer:
          `Scan Perks Starter is ${phrases.en.starterPerMonth} for ${phrases.en.scansUpTo} — among the most affordable full-featured hospitality loyalty apps available.`,
      },
      {
        question: 'Do small businesses need loyalty software?',
        answer:
          'If repeat customers drive your revenue, yes. Digital loyalty beats punch cards with data and re-engagement — Scan Perks makes it accessible for small venues.',
      },
    ],
    clusterPage: {
      href: '/cafe-loyalty-app/',
      label: 'Cafe Loyalty Program',
      anchor: 'cafe loyalty program on Scan Perks',
    },
  },
  {
    slug: 'qr-code-vs-punch-cards',
    title: 'Points vs Punch Card vs QR Loyalty',
    metaTitle: 'Points vs Punch Card vs QR Loyalty | Scan Perks',
    description:
      `A punch card counts visits. A points program counts spend. QR loyalty is the same stamp rule on a phone. Scan Perks is a stamp card from ${phrases.en.starterPerMonth}, not points.`,
    keywords: [
      'QR code loyalty vs punch cards',
      'digital loyalty cards',
      'replace punch cards',
      'QR loyalty program',
    ],
    publishedAt: '2025-05-10',
    updatedAt: '2026-11-06',
    answer:
      `A punch card counts visits toward one free item. A points program adds a balance, usually per dollar spent, that can be redeemed for several rewards. Scan Perks is a stamp card — one stamp per venue per day — not a points balance. It replaces the paper card for ${phrases.en.starterPerMonth}, and each visit is logged.`,
    sections: [
      {
        heading: 'Points Program vs a Punch Card',
        body: 'A punch card, also called a stamp card, counts visits: one stamp per visit, a free item at a number you set. A points program assigns a balance, usually per dollar or per item, and the customer spends that balance on a menu of rewards. Scan Perks is the punch-card version: one stamp per venue per day, then a reward you choose, such as a free coffee after 8 stamps. Square Loyalty is the points-at-checkout option, and it only works if you take payments on Square. Paper and Scan Perks use the same visit rule; the phone card is not lost, and you can see who stopped coming.',
      },
      {
        heading: 'The Hidden Cost of Punch Cards',
        body: 'Printing, staff time, and lost cards add up. Worse, punch cards provide zero analytics — you never know who your regulars are or when they stopped coming.',
      },
      {
        heading: 'What QR Loyalty Adds',
        body: 'Every scan is logged. You can send push offers, list your venue in discovery feeds, and design tiered rewards — all impossible with cardboard stamps.',
      },
      {
        heading: 'Making the Switch Without Confusing Customers',
        body: 'Keep the same reward logic (buy 10, get 1 free) but display a QR at the counter. Scan Perks provides print-ready posters; most guests prefer phone-based rewards.',
      },
    ],
    faqs: [
      {
        question: 'Are punch cards still effective for bars?',
        answer:
          'Punch cards work for basic retention but miss data and marketing. Bars switching to Scan Perks QR loyalty gain push notifications and visit analytics for a few dollars monthly.',
      },
      {
        question: 'What is the difference between a points-based rewards program and a punch card?',
        answer:
          'A punch card counts visits toward one free item. A points program adds a balance, usually per dollar, that can be spent on several rewards. Scan Perks is a punch-style stamp card (one stamp per visit per day), not points. Square Loyalty is points, and it requires Square POS.',
      },
      {
        question: 'How do customers join a QR loyalty program?',
        answer:
          'They scan your venue QR with the Scan Perks app — one-time signup, then every visit is a quick scan at the counter.',
      },
    ],
    clusterPage: {
      href: '/qr-code-loyalty-program/',
      label: 'QR Loyalty Program',
      anchor: 'QR code loyalty program on Scan Perks',
    },
  },
  {
    slug: 'bar-customer-retention-tips',
    title: '7 Bar Customer Retention Tips That Actually Work',
    metaTitle: 'Bar Customer Retention Tips — Loyal Regulars | Scan Perks',
    description:
      'Seven proven bar customer retention strategies: loyalty rewards, happy hour pushes, events, and data. Grow bar loyal customers with Scan Perks.',
    keywords: [
      'bar customer retention',
      'bar loyal customers',
      'retain bar regulars',
      'bar marketing tips',
    ],
    publishedAt: '2025-06-01',
    answer:
      `Retain bar customers with a QR loyalty program, happy-hour push notifications, event-based rewards, and visit tracking. Scan Perks helps bars grow loyal regulars from ${phrases.en.starterPerMonth} without enterprise software.`,
    sections: [
      {
        heading: 'Know Your Regulars by Name and Data',
        body: 'Visit analytics show who comes weekly vs monthly. Reward top regulars with VIP tiers — Scan Perks customer profiles make this automatic.',
      },
      {
        heading: 'Push Happy Hour to the Right People',
        body: 'Social posts miss your best customers. Push notifications reach loyalty members who already opted in — perfect for Tuesday specials.',
      },
      {
        heading: 'Make Rewards Simple: Free Drink Tiers',
        body: 'Complex points confuse bartenders. Visit-based free drink rewards are easy to explain and redeem — ideal for bar loyalty programs.',
      },
    ],
    faqs: [
      {
        question: 'How do bars keep customers coming back?',
        answer:
          'Combine atmosphere with tangible rewards. A bar loyalty program like Scan Perks gives regulars progress toward free drinks and alerts them about events.',
      },
      {
        question: 'What rewards work best for bar loyalty?',
        answer:
          'Free drinks after X visits, birthday perks, and exclusive event access. Scan Perks supports flexible tier design for any bar format.',
      },
    ],
    clusterPage: {
      href: '/bar-loyalty-program/',
      label: 'Bar Loyalty Program',
      anchor: 'bar loyalty program with Scan Perks',
    },
  },
  {
    slug: 'how-to-increase-customers-restaurant-bar',
    title: 'How to Increase Customers at Your Restaurant or Bar',
    metaTitle: 'How to Increase Customers at Your Restaurant or Bar | Scan Perks',
    description:
      `Learn how to increase customers and foot traffic at restaurants and bars: loyalty rewards, local discovery, and push marketing with Scan Perks from ${phrases.en.starterPerMonth}.`,
    keywords: [
      'how to increase customers',
      'increase foot traffic restaurant',
      'get more customers bar',
      'increase restaurant customers',
    ],
    publishedAt: '2025-07-01',
    answer:
      `Increase customers by combining loyalty rewards (repeat visits), local app discovery (new guests), and push offers (re-engagement). Scan Perks delivers all three for bars and restaurants from ${phrases.en.starterPerMonth} — without expensive ad campaigns.`,
    sections: [
      {
        heading: 'Retain First, Then Grow',
        body: 'The fastest way to increase customers profitably is keeping the ones you have. Loyal guests visit more often and bring friends. Scan Perks QR loyalty makes retention measurable before you spend on acquisition.',
      },
      {
        heading: 'Get Discovered by Nearby Customers',
        body: 'Scan Perks lists your venue in the consumer app discovery feed — putting you in front of locals actively looking for new bars, cafes, and restaurants to try.',
      },
      {
        heading: 'Re-Engage Lapsed Guests with Push Offers',
        body: 'Push notifications bring back customers who have not visited in weeks. A targeted happy hour or event invite costs nothing extra on the Growth plan.',
      },
    ],
    faqs: [
      {
        question: 'What is the cheapest way to increase restaurant customers?',
        answer:
          `Loyalty plus local discovery via Scan Perks starts at ${phrases.en.starterPerMonth} — far cheaper than paid social ads and focused on guests who already prefer hospitality venues like yours.`,
      },
      {
        question: 'How long until I see more customers with a loyalty program?',
        answer:
          'Most venues see measurable repeat visit increases within the first 30 days once QR codes are displayed and staff mention rewards at checkout.',
      },
    ],
    clusterPage: {
      href: '/grow-restaurant-business/',
      label: 'Grow Restaurant Business',
      anchor: 'grow your business with Scan Perks',
    },
  },
  {
    slug: 'build-customer-trust-hospitality-business',
    title: 'How to Build Customer Trust in Your Bar or Restaurant',
    metaTitle: 'Build Customer Trust — Hospitality Loyalty Tips | Scan Perks',
    description:
      `Build customer trust and credibility with transparent loyalty rewards. How Scan Perks helps bars, cafes & restaurants strengthen guest relationships from ${phrases.en.starterPerMonth}.`,
    keywords: [
      'build customer trust',
      'customer trust restaurant',
      'business credibility',
      'customer loyalty trust',
    ],
    publishedAt: '2025-07-15',
    answer:
      'Build customer trust with consistent, transparent rewards guests can track on their phone. Scan Perks digital loyalty replaces informal punch cards with a professional system that signals reliability and fairness — key to credibility for independent venues.',
    sections: [
      {
        heading: 'Trust Comes from Consistency',
        body: 'Guests trust venues that honor promises. Digital loyalty tracks every visit automatically — no disputed punch holes or forgotten cards. Scan Perks makes rewards fair and visible.',
      },
      {
        heading: 'Professional Systems Signal Credibility',
        body: 'A branded QR loyalty program looks as polished as chain competitors. Independent bars and restaurants build credibility when customers see the same quality experience as larger brands.',
      },
      {
        heading: 'Personal Connection Through Data',
        body: 'Knowing your regulars — visit frequency, favorite rewards — lets you personalize service. Customers feel valued when you recognize their loyalty with relevant offers.',
      },
    ],
    faqs: [
      {
        question: 'Does loyalty software help build customer trust?',
        answer:
          'Yes. Transparent reward tracking and consistent perks show customers you value their business. Scan Perks makes loyalty visible and reliable.',
      },
      {
        question: 'How is digital loyalty more trustworthy than punch cards?',
        answer:
          'Digital records cannot be lost or disputed. Customers see reward progress on their phone — building confidence that every visit counts.',
      },
    ],
    clusterPage: {
      href: '/business-loyalty-program/',
      label: 'Business Loyalty Guide',
      anchor: 'business loyalty program on Scan Perks',
    },
  },
  {
    slug: 'increase-restaurant-revenue-profits',
    title: 'How to Increase Restaurant Revenue and Profits with Loyalty',
    metaTitle: 'Increase Restaurant Revenue & Profits with Loyalty | Scan Perks',
    description:
      `Increase restaurant revenue and business profits through customer retention and lifetime value. Scan Perks loyalty programs from ${phrases.en.starterPerMonth} boost repeat visits and sales.`,
    keywords: [
      'increase restaurant revenue',
      'increase business profits',
      'boost restaurant sales',
      'restaurant profit growth',
    ],
    publishedAt: '2025-08-01',
    answer:
      `Increase restaurant revenue by growing repeat visits and customer lifetime value — not just one-time covers. Scan Perks gives regulars a stamp card and pushed offers for ${phrases.en.rangeBareMonth} vs hundreds on enterprise tools.`,
    sections: [
      {
        heading: 'Profit Grows from Retention, Not Just Traffic',
        body: 'Acquiring a new diner costs 5–7× more than retaining one. Scan Perks shifts focus to profitable repeat business — the foundation of sustainable restaurant revenue growth.',
      },
      {
        heading: 'Increase Average Spend with Tiered Rewards',
        body: 'Design perks that encourage slightly higher spend — appetizer add-ons, premium drink tiers, or VIP status after milestone visits. Dashboard data shows which rewards drive the most revenue.',
      },
      {
        heading: 'Fill Slow Periods Without Eroding Margin',
        body: 'Targeted push offers on quiet nights bring revenue when you need it — without blanket discounts that hurt profits. Scan Perks lets you market surgically to loyalty members.',
      },
    ],
    faqs: [
      {
        question: `Can a ${phrases.en.starterPerMonth} loyalty app really increase restaurant profits?`,
        answer:
          `Scan Perks costs ${phrases.en.rangeBareMonth} after a ${phrases.en.trial}. It is a stamp card and pushed offers ${phrases.en.forOneVenue}.`,
      },
      {
        question: 'What metric should I track for profit growth?',
        answer:
          'Track repeat visit rate, redemption patterns, and visit frequency per customer in your Scan Perks dashboard — leading indicators of rising lifetime value and revenue.',
      },
    ],
    clusterPage: {
      href: '/grow-restaurant-business/',
      label: 'Grow Restaurant Business',
      anchor: 'increase profits with Scan Perks',
    },
  },
  {
    slug: 'best-coffee-loyalty-programs',
    title: 'Best Loyalty Program for Coffee Shops (2026): 5 Compared',
    metaTitle: 'Best Loyalty Program for Coffee Shops (2026): 5 Compared',
    description:
      `Best loyalty program for coffee shops in 2026, for owners: Scan Perks ${phrases.en.starterPerMo}, Brewstamp $12/mo, Loopy $25/mo, Square Plus ${phrases.en.squarePerMo}.`,
    keywords: [
      'best coffee loyalty programs',
      'coffee shop loyalty programs',
      'cafe loyalty app',
      'coffee loyalty app',
      'coffee shop loyalty program',
      'coffee shop loyalty reward app',
      'best coffee rewards program',
      'best loyalty app for cafes',
      'mobile rewards program for coffee shops',
      'loyalty software for cafes',
      'coffeeshop loyalty program',
      'brewstamp',
      'brewstamp alternative',
    ],
    publishedAt: '2026-07-01',
    updatedAt: '2026-11-07',
    answer:
      `The best loyalty program for an independent coffee shop in 2026 is whichever of these five matches the till you already have. Prices below were checked on ${phrases.en.checkedOn}. Scan Perks is ${phrases.en.starterPerMonth}: customers scan a counter QR in the free Scan Perks app, you do not change POS, and the same tool covers a pub or bar, with a ${phrases.en.trial} and ${phrases.en.noCard}. Brewstamp is coffee-only: free for the first 50 stamps, then $12/month. Loopy Loyalty Starter is $25/month for an Apple or Google Wallet card. Square Loyalty is included in Square Plus at ${phrases.en.squarePerMonthLocation}, and only if you already take payments on Square. LoyaltyPass does not list a monthly cafe plan; its pricing page starts at a $9,500 custom build. This page is for owners choosing software, not a list of chain rewards for customers.`,
    sections: [
      {
        heading: 'How we compared them',
        body: `We looked at what matters at a busy counter: starting monthly price, how a customer joins (QR in an app, Wallet pass or checkout), whether you must switch POS, and whether the tool suits more than coffee. Prices are public list prices checked on ${phrases.en.checkedOn} — check each vendor before you buy. These are tools you run at your venue, not chain consumer apps like Starbucks Rewards.`,
      },
      {
        heading: 'Looking for coffee rewards as a customer?',
        body: 'This page does not say which coffee chain gives the best points, and it does not say whether a named cafe runs its own rewards. If you want rewards on your own coffee, use the app of the place you already visit. Chains run their own (Starbucks Rewards, Dunkin\' Rewards). An independent usually uses a stamp card, often 8 to 10 visits for a free drink, so ask at the counter which app they use. If that app is Scan Perks, stamps are collected in the free Scan Perks app.',
        links: [
          { href: '/blog/best-mobile-loyalty-apps-coffee-shops-2026/', label: 'Cafe loyalty with no app download' },
        ],
      },
      {
        heading: `1. Scan Perks — best for independents who want no POS change (${phrases.en.starterPerMo})`,
        body: `Customers scan your counter QR in the free Scan Perks app (iPhone or Android) and collect stamps toward the reward you set. You see visit analytics and push offers to members from app.scan-perks.com. Starter is ${phrases.en.starterPerMonth} for ${phrases.en.scans}, Growth ${phrases.en.growthPerMonth} for ${phrases.en.unlimitedScans}, after a ${phrases.en.trial} with ${phrases.en.noCard}. The one trade-off: customers install an app, unlike Wallet-pass tools. Works for cafes, pubs and bars. Loyalty only — no mobile ordering.`,
        links: [
          { href: '/cafe-loyalty-app/', label: 'How the Scan Perks cafe loyalty app works' },
          { href: '/pricing/', label: 'Pricing' },
        ],
      },
      {
        heading: '2. Loopy Loyalty — Wallet stamp cards at $25/mo',
        body: `Loopy issues stamp cards as Apple Wallet and Google Wallet passes, with no POS required. Starter is $25/month for one location (pricing page, ${phrases.en.checkedOn}). A fit if the card has to live in Wallet. Aimed at local businesses in general rather than hospitality.`,
      },
      {
        heading: `3. Square Loyalty — included with Square Plus (${phrases.en.squarePerMo} per ${siteFacts.squarePlus.per})`,
        body: `Square Loyalty is tied to Square checkout: customers earn at the point of sale using their phone number. On the US pricing page it is included in Square Plus at ${phrases.en.squarePerMonthLocation} (checked ${phrases.en.checkedOn}), not sold as a separate add-on. If every payment already runs through Square, it is the least extra work. If you use another POS, you would have to switch payments to use it — Scan Perks, Loopy and Brewstamp do not need that.`,
      },
      {
        heading: '4. LoyaltyPass — custom build, not a monthly cafe plan',
        body: `LoyaltyPass’s pricing page lists custom loyalty builds from $9,500, not a monthly price for a single cafe (checked ${phrases.en.checkedOn}). For a Wallet stamp card on a monthly plan, Loopy Loyalty Starter is $25/month.`,
      },
      {
        heading: '5. Brewstamp — coffee-only, free for 50 stamps then $12/mo',
        body: `Brewstamp is a browser stamp card for coffee shops, with Apple and Google Wallet and no customer app. The first 50 stamps are free; Pro is $12/month for one shop (brewstamp.app, ${phrases.en.checkedOn}). Scan Perks is ${phrases.en.starterPerMonth} and also covers a pub or bar, but customers use the Scan Perks app.`,
      },
      {
        heading: 'Which one should you pick?',
        body: `Already on Square: Square Loyalty, which comes with Square Plus at ${phrases.en.squarePerMonthLocation}. Wallet card and no extra app: Loopy Loyalty at $25/month. Coffee only, and a free first 50 stamps is enough to test: Brewstamp, then $12/month. Independent cafe, pub or bar that wants a counter QR, no POS change and push offers at ${phrases.en.starterPerMonth}: Scan Perks. LoyaltyPass quotes custom builds from $9,500, which is a different purchase. Paper punch cards are still free, but they get lost and give you no visit data.`,
        links: [
          { href: '/qr-code-loyalty-program/', label: 'How a QR code loyalty program works' },
          { href: '/pub-loyalty-card/', label: 'Running a pub or bar? Pub loyalty card' },
        ],
      },
      {
        heading: 'What a loyalty app costs a cafe in practice',
        body: `Take an 8-stamp card with a free coffee as the reward. If a coffee sells for $4 and costs about $1 to make, the reward gives away about $1 for every $32 the customer spends — roughly 3% of those visits. On top of that is the software: Scan Perks Starter is ${phrases.en.starterPerMonth} and covers ${phrases.en.scans}; busier counters move to Growth at ${phrases.en.growthPerMonth} for ${phrases.en.unlimitedScans}. Paper cards skip the software fee but you never learn who your regulars are.`,
        links: [{ href: '/pricing/', label: 'Compare Starter and Growth' }],
      },
      {
        heading: 'Best Cafe Loyalty App for Mobile Rewards (iPhone & Android)',
        body: `Queries like “mobile rewards program for coffee shops” and “best loyalty app for cafes” want owner software with customer apps. Scan Perks includes iOS and Android apps, a counter QR, a stamp card (the starting rule is 8 stamps for a free coffee), and push offers for slow mornings — ${phrases.en.starterPerMonth} Starter (${phrases.en.scans}) or ${phrases.en.growthPerMonth} Growth.`,
      },
      {
        heading: 'How to launch in one afternoon',
        body: `1) Open app.scan-perks.com and go to the Business tab. 2) Set your stamp rule (for example 8 stamps for a free coffee). 3) Tap Create my QR — the ${phrases.en.trialShort} starts, ${phrases.en.noCard} — and print it. 4) Ask every customer to scan it in the Scan Perks app. Most cafes go live in about 5 minutes.`,
        links: [
          { href: 'https://app.scan-perks.com', label: `Start the ${phrases.en.trial}` },
          { href: '/how-it-works/', label: 'See every setup step' },
        ],
      },
    ],
    namedVendors: true,
    faqs: [
      {
        question: 'What is the best loyalty program for coffee shops in 2026?',
        answer:
          `Match it to the till you have. Prices checked ${phrases.en.checkedOn}. No POS change, a counter QR, and the same tool for a cafe or bar: Scan Perks at ${phrases.en.starterPerMonth} after a ${phrases.en.trial} with ${phrases.en.noCard}. Coffee only, no customer app: Brewstamp, free for the first 50 stamps, then $12/month. Already on Square: Square Loyalty, included in Square Plus at ${phrases.en.squarePerMonthLocation}. Wallet card and no extra app: Loopy Loyalty Starter at $25/month. LoyaltyPass lists custom builds from $9,500, not a monthly cafe plan.`,
      },
      {
        question: 'Is Scan Perks a Brewstamp alternative?',
        answer:
          `Yes, for cafes that also want pubs and bars. Brewstamp is coffee-only: free for the first 50 stamps, then $12/month, and customers do not install an app. Scan Perks is ${phrases.en.starterPerMonth}, customers scan a counter QR in its app, no POS, and it covers cafes, pubs, and bars. ${phrases.en.trial} at app.scan-perks.com.`,
      },
      {
        question: 'Which coffee shop loyalty app does not need a customer download?',
        answer:
          'Loopy Loyalty and LoyaltyPass add a pass to Apple/Google Wallet, so there is no extra app. Square Loyalty works at Square checkout by phone number. Scan Perks needs its free customer app — the trade-off for being able to push offers to members.',
      },
      {
        question: 'Does Scan Perks include mobile ordering?',
        answer:
          'No. Scan Perks is loyalty only (stamps, analytics, push). Pair it with your existing ordering or POS — faster and cheaper for single-location cafes.',
      },
      {
        question: 'How much does a coffee shop loyalty app cost per month?',
        answer:
          `Public list prices checked ${phrases.en.checkedOn}: Scan Perks ${phrases.en.starterPrice} (Starter, ${phrases.en.scans}) or ${phrases.en.growthPrice} (Growth, ${phrases.en.unlimitedScans}). Brewstamp is free for the first 50 stamps, then $12. Loopy Loyalty Starter is $25. Square Loyalty is included in Square Plus at ${phrases.en.squarePerLocation}. LoyaltyPass lists custom builds from $9,500, not a monthly plan. Paper punch cards cost only printing but give no visit data.`,
      },
    ],
    clusterPage: {
      href: '/cafe-loyalty-app/',
      label: 'Cafe Loyalty App',
      anchor: 'cafe loyalty app on Scan Perks',
    },
    relatedLinks: [
      { href: '/cafe-loyalty-app/', label: 'Cafe loyalty app (primary)' },
      { href: '/blog/best-mobile-loyalty-apps-coffee-shops-2026/', label: 'Wallet pass vs app: how customers join' },
      { href: '/coffee-shop-loyalty-programs/', label: 'Coffee shop loyalty programs' },
      { href: '/qr-code-loyalty-program/', label: 'QR code loyalty program' },
      { href: '/pub-loyalty-card/', label: 'Pub loyalty card' },
      { href: '/blog/qr-code-vs-punch-cards/', label: 'QR vs punch cards' },
      { href: '/pricing/', label: `Pricing — ${phrases.en.starterPerMo}` },
      { href: 'https://app.scan-perks.com', label: 'Start free trial in app' },
    ],
  },
  {
    slug: 'best-mobile-loyalty-apps-coffee-shops-2026',
    title: 'Coffee Shop Loyalty Without an App Download?',
    metaTitle: 'Cafe Loyalty App with No Download? Wallet vs App (2026)',
    description:
      'Scan Perks needs its free app. Loopy and LoyaltyPass use Apple/Google Wallet with no extra app. Square works at checkout. Prices and the trade-off.',
    keywords: [
      'cafe loyalty app no download',
      'coffee shop loyalty without app',
      'loyalty app no download',
      'wallet pass vs loyalty app',
    ],
    publishedAt: '2026-01-10',
    updatedAt: '2026-11-07',
    answer:
      `Not always. Loopy Loyalty adds a stamp card to Apple or Google Wallet with no extra app (Starter $25/month). Brewstamp opens in the browser (free for 50 stamps, then $12/month). Square Loyalty works at Square checkout and comes with Square Plus at ${phrases.en.squarePerMonthLocation}. Scan Perks (${phrases.en.starterPerMonth}, ${phrases.en.trial}) asks customers to install one free app, and in return you can push offers and birthday treats to them. Pick Wallet or a browser card if zero install matters most; pick an app if you want to bring regulars back with offers. Prices checked ${phrases.en.checkedOn}.`,
    sections: [
      {
        heading: 'What an app download costs you, and what it buys',
        body: 'At a busy counter, every extra step costs sign-ups: finding the app, installing it, creating an account. That is the real cost of app-based loyalty. What it buys is a direct line to the customer: push offers for slow days, birthday treats, happy-hour double stamps. With Scan Perks, pointing the phone camera at your QR opens your venue page with the reward and an app link, and the welcome stamp means the first scan already counts.',
      },
      {
        heading: 'Wallet pass vs checkout loyalty vs customer app',
        body: 'Wallet pass: the card lives in Apple/Google Wallet after an "add pass" step, no extra app (Loopy Loyalty, LoyaltyPass). Checkout loyalty: earned by phone number at the till, but only on that POS (Square Loyalty). Customer app: one install, then a QR scan per visit and offers by push (Scan Perks; chains like Starbucks). Brewstamp mixes a QR with Wallet. For an independent, the question is whether you will actually send offers; if not, Wallet is enough.',
      },
      {
        heading: 'Chain Apps vs Independent Cafe Tools',
        body: 'Starbucks Rewards and similar chain apps bundle mobile ordering, contactless pay, and loyalty at national scale — budgets independents cannot match. Scan Perks focuses on loyalty only: customers earn rewards via QR scan after purchase. Pair with your existing checkout; no mobile ordering built in.',
      },
      {
        heading: 'Scan Perks vs Square Loyalty for Coffee Shops',
        body: `Square Loyalty requires Square and comes with Square Plus at ${phrases.en.squarePerMonthLocation}. Scan Perks is POS-agnostic at ${phrases.en.rangeBareMonth} with ~5-minute setup. Choose Square if all payments run on Square; choose Scan Perks for a lower loyalty-only price and a launch that does not change the till.`,
      },
      {
        heading: 'Pricing Snapshot (2026)',
        body: `Scan Perks Starter: ${phrases.en.starterPerMonth}, ${phrases.en.scans}. Growth: ${phrases.en.growthPerMonth}, ${phrases.en.unlimitedScans}. Enterprise hospitality suites: $200–500+/month. Paper punch cards: $0 software but no analytics or push offers.`,
      },
    ],
    faqs: [
      {
        question: 'Can customers join a cafe loyalty program without downloading an app?',
        answer:
          `Yes, with a Wallet-pass tool such as Loopy Loyalty or LoyaltyPass, or with Square Loyalty if you use Square POS. Scan Perks is different: customers use its free iPhone/Android app, which lets you push offers to them. ${phrases.en.starterPerMonth} after a ${phrases.en.trial}.`,
      },
      {
        question: 'Is a Wallet pass better than an app for coffee shop loyalty?',
        answer:
          `A Wallet pass skips the app install but gives you fewer ways to reach the customer later. An app costs one install and lets you push offers. Loopy Loyalty ($25/month) is Wallet-first. Brewstamp ($12/month after 50 stamps) opens in the browser. Scan Perks (${phrases.en.starterPerMonth}) is app-based.`,
      },
    ],
    clusterPage: {
      href: '/cafe-loyalty-app/',
      label: 'Cafe Loyalty App',
      anchor: 'cafe loyalty app on Scan Perks',
    },
    relatedLinks: [
      { href: '/blog/best-coffee-loyalty-programs/', label: 'Best loyalty apps for coffee shops — 5 compared by price' },
      { href: '/cafe-loyalty-app/', label: 'Cafe loyalty app' },
      { href: '/how-it-works/', label: 'How QR loyalty works' },
    ],
  },
  {
    slug: 'how-to-choose-qr-loyalty-program-cafe',
    title: 'How to Choose a QR Loyalty Program for Your Café',
    metaTitle: 'How to Choose a QR Loyalty Program for Your Café | Scan Perks',
    description:
      `Step-by-step guide: choose a QR loyalty program for your coffee shop. Compare setup time, cost, POS needs, and mobile apps. Scan Perks from ${phrases.en.starterPerMo}.`,
    keywords: [
      'how to choose qr loyalty program',
      'qr loyalty program coffee shop',
      'cafe loyalty program guide',
      'best qr loyalty for cafe',
    ],
    publishedAt: '2026-01-15',
    answer:
      `To choose a QR loyalty program for your café: (1) confirm no POS integration is required if you want fast setup, (2) budget under $20/month, (3) verify iOS/Android customer apps exist, (4) match reward style to your menu (stamps work well for coffee). Scan Perks fits independents: ~5 min setup, ${phrases.en.starterPerMonth}, QR at counter, ${phrases.en.trial}.`,
    sections: [
      {
        heading: 'Step 1: Define Your Reward Model',
        body: 'Most cafes use visit-based stamps (buy 9, get 1 free). Ensure the QR program supports configurable rules without custom development. Scan Perks uses stamp-style tiers out of the box.',
      },
      {
        heading: 'Step 2: Check POS and Hardware Requirements',
        body: 'Some programs require Square, Toast, or tablets. Scan Perks needs only a printed QR and customer smartphones — no POS API, no extra hardware. Staff confirm visits via scan at the counter.',
      },
      {
        heading: 'Step 3: Compare Monthly Cost',
        body: `Target under $20/month for single locations. Scan Perks: ${phrases.en.starterPrice} Starter (${phrases.en.scans}), ${phrases.en.growthPrice} Growth (${phrases.en.unlimitedScans}). Enterprise tools often exceed $200/month — overkill for neighborhood cafes.`,
      },
      {
        heading: 'Step 4: Test Customer Mobile Experience',
        body: 'Customers should join in under 30 seconds. Scan Perks: open the free app, tap Scan, point at the counter QR, and the stamp lands. With the welcome stamp on, the first visit counts.',
      },
      {
        heading: 'Scan Perks vs Paper Punch Cards',
        body: `Punch cards are free but offer no data and are frequently lost. Scan Perks digitizes the same logic with visit logs, push offers, and member list — ${phrases.en.starterPerMonth}. Most cafes keep identical reward rules when switching.`,
      },
    ],
    faqs: [
      {
        question: 'What QR loyalty program should I use for my coffee shop?',
        answer:
          `For single-location coffee shops: Scan Perks — no POS, ${phrases.en.starterPerMonth}, iOS/Android apps, ~5 min setup, ${phrases.en.trialShort} at app.scan-perks.com.`,
      },
      {
        question: 'How does Scan Perks compare to paper punch cards?',
        answer:
          `Same stamp logic, but Scan Perks adds visit analytics, push notifications, and phone-based cards that cannot be lost. Cost: ${phrases.en.starterPerMonth} vs printing punch cards periodically.`,
      },
    ],
    clusterPage: {
      href: '/qr-code-loyalty-program/',
      label: 'QR Code Loyalty Program',
      anchor: 'QR loyalty program on Scan Perks',
    },
  },
];

export function getBlogArticle(slug: string): BlogArticle | undefined {
  return blogArticles.find((a) => a.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogArticles.map((a) => a.slug);
}
