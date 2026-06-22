export interface BlogArticle {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  keywords: string[];
  publishedAt: string;
  answer: string;
  sections: { heading: string; body: string }[];
  faqs: { question: string; answer: string }[];
  clusterPage: { href: string; label: string; anchor: string };
}

export const blogArticles: BlogArticle[] = [
  {
    slug: 'how-to-increase-repeat-customers-restaurant',
    title: 'How to Increase Repeat Customers at Your Restaurant',
    metaTitle: 'How to Increase Repeat Customers at Your Restaurant | Scan Perks',
    description:
      'Proven strategies to get restaurant loyal customers: digital rewards, push offers, and data. Learn how Scan Perks helps grow repeat visits from $10/month.',
    keywords: [
      'how to increase repeat customers restaurant',
      'restaurant loyal customers',
      'restaurant customer retention',
      'repeat diners',
    ],
    publishedAt: '2025-03-15',
    answer:
      'Increase restaurant repeat customers with a digital loyalty program (QR rewards), personalized push offers on slow nights, and visit analytics. Scan Perks combines all three for $10–15/month — venues often see up to 24% more return visits.',
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
          'Start with one targeted push per week — happy hour or slow-night specials. Avoid daily spam; Scan Perks Growth plan includes unlimited push for testing.',
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
      'The best loyalty app for small hospitality businesses is affordable, quick to set up, and built for food & beverage — not retail chains. Scan Perks offers QR rewards, push notifications, and analytics from $10/month with a 14-day free trial.',
    sections: [
      {
        heading: 'What Small Businesses Should Look For',
        body: 'Avoid enterprise contracts and complex POS integrations if you run one location. Prioritize QR simplicity, monthly pricing under $20, and hospitality-specific features.',
      },
      {
        heading: 'Scan Perks vs Enterprise Loyalty',
        body: 'Enterprise tools cost $200+/month and take weeks to deploy. Scan Perks goes live in minutes at $10–15/month — designed for independent bars, cafes, and restaurants.',
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
          'Scan Perks Starter is $10/month for up to 200 active customers — among the most affordable full-featured hospitality loyalty apps available.',
      },
      {
        question: 'Do small businesses need loyalty software?',
        answer:
          'If repeat customers drive your revenue, yes. Digital loyalty beats punch cards with data and re-engagement — Scan Perks makes it accessible for small venues.',
      },
    ],
    clusterPage: {
      href: '/cafe-loyalty-program/',
      label: 'Cafe Loyalty Program',
      anchor: 'cafe loyalty program on Scan Perks',
    },
  },
  {
    slug: 'qr-code-vs-punch-cards',
    title: 'QR Code Loyalty vs Punch Cards: Which Wins?',
    metaTitle: 'QR Code Loyalty vs Punch Cards for Restaurants | Scan Perks',
    description:
      'QR code loyalty program vs paper punch cards — compare cost, data, and customer experience. See why venues switch to Scan Perks digital rewards.',
    keywords: [
      'QR code loyalty vs punch cards',
      'digital loyalty cards',
      'replace punch cards',
      'QR loyalty program',
    ],
    publishedAt: '2025-05-10',
    answer:
      'QR code loyalty beats punch cards on every metric that grows business: visit tracking, push re-engagement, no lost cards, and customer profiles. Scan Perks replaces punch cards for $10/month with setup in 5 minutes.',
    sections: [
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
        question: 'How do customers join a QR loyalty program?',
        answer:
          'They scan your venue QR with the Scan Perks app — one-time signup, then every visit is a quick scan at the counter.',
      },
    ],
    clusterPage: {
      href: '/qr-loyalty-program/',
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
      'Retain bar customers with a QR loyalty program, happy-hour push notifications, event-based rewards, and visit tracking. Scan Perks helps bars grow loyal regulars from $10/month without enterprise software.',
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
];

export function getBlogArticle(slug: string): BlogArticle | undefined {
  return blogArticles.find((a) => a.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogArticles.map((a) => a.slug);
}
