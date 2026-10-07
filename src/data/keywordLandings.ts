import type { LoyaltyPage } from './loyaltyPages';

/** Exact-match URL pages for GSC top queries — target top 10 rankings */
export const keywordLandings: LoyaltyPage[] = [
  {
    slug: 'cafe-loyalty-app',
    title: 'Cafe Loyalty App for Coffee Shop Owners',
    metaTitle: 'Cafe Loyalty App for Owners (Not Starbucks) — Free Trial | Scan Perks',
    description:
      'Best cafe loyalty app for independent coffee shops: QR stamps, iOS/Android, no download required for guests via browser. Start free trial — $10/mo, no POS.',
    primaryKeyword: 'cafe loyalty app',
    heroSeoLine:
      'The cafe loyalty app built for independent coffee shops — digital stamps, counter QR, iOS & Android from $10/month.',
    quickAnswer:
      'Scan Perks is a cafe loyalty app for coffee shop owners (not a chain consumer rewards app): customers scan a counter QR to earn stamp rewards toward free drinks. Includes iOS/Android apps, visit analytics, and push offers — $10/month for 200 members, 14-day free trial at app.scan-perks.com, no POS integration. Guests can also join via mobile browser (no app download required).',
    keywordCluster: [
      'cafe loyalty app',
      'coffee loyalty app',
      'coffee shop loyalty app',
      'loyalty app for coffee shop',
      'cafe rewards app',
      'cafe loyalty app no download',
      'best loyalty app for cafes',
      'best loyalty program for cafes',
      'mobile rewards program for coffee shops',
    ],
    highlights: ['Counter QR join', 'No download required', '$10/month', '5-min setup'],
    featureBullets: [
      'Camera QR join — customer app optional (iOS and Android)',
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
        body: '1) Sign up at app.scan-perks.com. 2) Set stamp rules (e.g. buy 9, get 1 free). 3) Print your venue QR. 4) Customers scan with their phone camera — no download required. 5) Track visits and send push offers from your dashboard. Typical setup: under 5 minutes.',
      },
      {
        heading: 'When to pick Scan Perks vs Loopy vs Square',
        body: 'Choose Square Loyalty if you already run Square POS (~$45/month, locked to Square). Choose Loopy Loyalty or LoyaltyPass if you only want Apple/Google Wallet stamp cards ($49–$99). Choose Scan Perks if you want cafes, pubs, and bars at $10/month with camera join and an optional customer app.',
      },
      {
        heading: 'Cafe Loyalty App with No Download (Browser Join)',
        body: 'Searches for “cafe loyalty app no download” want frictionless signup. With Scan Perks, guests can scan your counter QR and join in a mobile browser — no App Store step required. Optional iOS/Android apps speed return visits and unlock push offers for members who install.',
      },
      {
        heading: 'Best Loyalty Program for Cafes — Owner Checklist',
        body: 'Judge the best loyalty program for cafes on: counter speed under 30 seconds, price under $20/month, no POS lock-in, mobile rewards, and visit analytics. Scan Perks hits all five for independents — start the free trial, print your QR, and ask every customer to scan.',
      },
      {
        heading: 'Cafe Loyalty App Pricing',
        body: 'Starter: $10/month, up to 200 loyalty members, 50 push notifications/month. Growth: $15/month, unlimited members and pushes. Both include the full cafe loyalty app, analytics, and print-ready QR materials. 14-day free trial — cancel anytime. Open app.scan-perks.com to start.',
      },
    ],
    comparison: [
      { feature: 'Monthly cost', scanPerks: '$10', traditional: 'Print only', enterprise: '$200+' },
      { feature: 'Customer join', scanPerks: 'Camera QR (app optional)', traditional: 'Paper card', enterprise: 'Usually an app' },
      { feature: 'Mobile app', scanPerks: 'iOS + Android', traditional: 'No', enterprise: 'Yes' },
      { feature: 'Browser join (no download)', scanPerks: 'Yes', traditional: 'N/A', enterprise: 'Varies' },
      { feature: 'Visit analytics', scanPerks: 'Yes', traditional: 'No', enterprise: 'Yes' },
      { feature: 'Setup time', scanPerks: '~5 min', traditional: 'Instant', enterprise: 'Weeks' },
    ],
    faqs: [
      {
        question: 'Scan Perks vs Brewstamp — which cafe loyalty app?',
        answer:
          'Brewstamp is $7/month and coffee-only. Scan Perks is $10/month with camera join and no POS, and it also covers pubs and bars. Start a 14-day trial at app.scan-perks.com.',
      },
      {
        question: 'What is the best cafe loyalty app for coffee shops?',
        answer:
          'For independent cafe owners (not Starbucks customers): Scan Perks — counter QR, no download required, analytics, push offers — $10/month, 14-day trial at app.scan-perks.com.',
      },
      {
        question: 'Do cafe customers need to download an app?',
        answer:
          'No. They scan your counter QR with the phone camera. An iOS/Android app is optional for regulars. Owners manage everything at app.scan-perks.com.',
      },
      {
        question: 'What is the best loyalty program for cafes?',
        answer:
          'For single-location cafes: a QR stamp program under $20/month with mobile apps and no POS lock-in. Scan Perks fits that — $10/month Starter, 14-day free trial, setup in ~5 minutes.',
      },
      {
        question: 'Is there a cafe loyalty app with no download?',
        answer:
          'Yes. Guests can scan your counter QR and join via mobile browser without installing an app. The Scan Perks iOS/Android apps are optional for faster return visits and push offers.',
      },
      {
        question: 'What is the best rewards app for coffee shop purchases?',
        answer:
          'For cafe owners running their own rewards: Scan Perks — customers earn stamps on purchases via QR, redeem free drinks, and you track visits. Start free at app.scan-perks.com.',
      },
      {
        question: 'Is Scan Perks a Starbucks or Dunkin rewards app?',
        answer:
          'No. Scan Perks is software for cafe owners to run their own loyalty program. Customers earn stamps at your shop — it is not a national chain rewards account.',
      },
      {
        question: 'How much does a cafe loyalty app cost?',
        answer: 'Scan Perks cafe loyalty app costs $10/month (Starter) or $15/month (Growth). 14-day free trial included.',
      },
      {
        question: 'Does the cafe loyalty app need POS integration?',
        answer: 'No. Scan Perks uses counter QR scanning only — no Square, Toast, or POS API required. Use Square Loyalty instead if you already run Square POS.',
      },
    ],
    supportingPosts: ['best-coffee-loyalty-programs', 'best-mobile-loyalty-apps-coffee-shops-2026'],
    localMarkets: ['Coffee shops', 'Bakeries', 'Tea houses'],
  },
  {
    slug: 'pub-loyalty-scheme',
    title: 'Pub Loyalty Scheme for Independent Pubs & Bars',
    metaTitle: 'Pub Loyalty Scheme for UK Pubs — from £8/mo Free Trial',
    description:
      'Pub loyalty scheme for UK pubs: free pint after 10, quiz-night stamps, happy-hour pushes. From $10/mo (about £8). No POS. 14-day free trial.',
    primaryKeyword: 'pub loyalty scheme',
    heroSeoLine:
      'Pub loyalty scheme for independent pubs and bars — QR rewards, digital loyalty card, happy-hour push alerts from $10/month.',
    quickAnswer:
      'A pub loyalty scheme rewards regular drinkers with perks each visit. Scan Perks digitizes your pub loyalty scheme with a bar QR code: customers earn free-drink tiers on a digital pub loyalty card, you send happy-hour pushes and track regulars — $10/month, 14-day free trial, no POS required.',
    keywordCluster: [
      'pub loyalty scheme',
      'pub loyalty program',
      'pub loyalty card',
      'pub loyalty cards',
      'bar loyalty scheme',
      'bar loyalty program',
      'loyalty scheme for pubs',
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
        body: 'A pub loyalty scheme is the full program — reward rules, the customer card, and how staff redeem free drinks. Typical UK offer: free pint after 10 purchases. US bars use the same idea under “bar loyalty.” Scan Perks runs the scheme digitally with one QR at the bar.',
      },
      {
        heading: 'Pub Loyalty Scheme vs Paper Punch Cards',
        body: 'Paper schemes are free to print but lose cards and data. A digital pub loyalty scheme logs every visit, stops “lost card” disputes, and lets you push midweek specials. Closely related: the customer-facing digital pub loyalty card at /pub-loyalty-card/.',
      },
      {
        heading: 'Pub Loyalty Scheme vs Enterprise Bar Software',
        body: 'Enterprise loyalty suites cost $200+/month and often require POS integration. Scan Perks pub loyalty scheme is built for single-location pubs and bars at $10–15/month — setup in ~5 minutes, no contracts, 14-day free trial.',
      },
      {
        heading: 'How to Launch a Pub Loyalty Scheme in One Day',
        body: 'Sign up at app.scan-perks.com, configure free-drink tiers, download your bar QR poster, and train staff to mention the scheme (“Scan for your loyalty card”). Most pubs go live the same day. Growth plan adds unlimited push notifications for happy-hour campaigns.',
      },
      {
        heading: 'UK Pubs & US Bars — Same Product',
        body: 'Google UK favors “pub loyalty scheme” and “pub loyalty card.” Google US favors “bar loyalty programs.” Scan Perks is one QR loyalty product covering both markets — iOS/Android customer apps, owner dashboard, analytics from $10/month.',
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
      {
        question: 'Is a pub loyalty scheme the same as a bar loyalty program?',
        answer:
          'Yes for independents — same QR rewards idea. UK says “pub loyalty scheme”; US often says “bar loyalty program.” See also /bar-loyalty-program/ and /pub-loyalty-card/.',
      },
    ],
    supportingPosts: ['bar-customer-retention-tips'],
    localMarkets: ['Independent pubs', 'UK free houses', 'US sports bars', 'Craft beer bars'],
  },
  {
    slug: 'pub-loyalty-card',
    title: 'Pub Loyalty Card for Pubs & Bars',
    metaTitle: 'Pub Loyalty Card — Digital Stamp Card from £8/mo',
    description:
      'Replace paper pub loyalty cards. Guests scan your bar QR with their camera — no lost cards. UK pubs and US bars, from $10/mo (about £8). 14-day free trial.',
    primaryKeyword: 'pub loyalty card',
    heroSeoLine:
      'Digital pub loyalty card for independent pubs and bars — scan at the bar, never lose a card, analytics from $10/month.',
    quickAnswer:
      'A pub loyalty card tracks drinks toward free pints or rewards. Scan Perks replaces paper and plastic pub loyalty cards with a digital card on the customer phone: guests scan your bar QR each visit, stamps add automatically, and owners get visit analytics plus happy-hour push tools from $10/month — ideal for UK pubs and US neighborhood bars.',
    keywordCluster: [
      'pub loyalty card',
      'pub loyalty cards',
      'bar loyalty cards',
      'digital pub loyalty card',
      'pub loyalty punch card',
      'bar loyalty card app',
    ],
    highlights: ['No plastic cards', 'QR at bar', 'Visit tracking', '$10/month'],
    featureBullets: [
      'Digital pub loyalty card on customer phone (iOS & Android)',
      'Replaces paper pub loyalty cards and punch cards',
      'QR scan at bar — contactless, no POS',
      'Free-drink tiers when stamp threshold met',
      'Owner dashboard with regulars list',
      '$10/month Starter — 14-day free trial',
    ],
    sections: [
      {
        heading: 'Why Pub Loyalty Cards Still Matter in 2026',
        body: 'UK and US drinkers expect a reason to come back midweek. A pub loyalty card (buy 9, get 1 free or stamp tiers) is the simplest offer staff can explain in one sentence. Paper cards still dominate independents — but they get lost, forged, and give zero data. A digital pub loyalty card keeps the same offer and adds analytics.',
      },
      {
        heading: 'Paper Pub Loyalty Cards vs Digital QR',
        body: 'Paper pub loyalty cards cost pennies to print but provide no visit history and die when wallets are emptied. A digital pub loyalty card cannot be lost: every scan is logged, and you can push Tuesday or happy-hour offers to cardholders instantly. Scan Perks: QR at the bar, stamps on the phone, from $10/month.',
      },
      {
        heading: 'How the Scan Perks Pub Loyalty Card Works',
        body: '1) Create an account at app.scan-perks.com. 2) Set reward rules (e.g. 10 drinks = 1 free). 3) Print your bar QR. 4) Guests scan once to open a digital pub loyalty card, then scan every visit. 5) Redeem free drinks in the dashboard. Typical setup: under 5 minutes — no POS, no hardware.',
      },
      {
        heading: 'Pub Loyalty Cards for UK Pubs & US Bars',
        body: 'UK searches often use “pub loyalty card” and “pub loyalty scheme”; US owners search “bar loyalty programs” and “loyalty cards for bars.” Scan Perks covers both: one digital card product, happy-hour pushes, visit tracking, iOS/Android apps — $10/month Starter or $15/month Growth.',
      },
      {
        heading: 'Pub Loyalty Card Pricing',
        body: 'Starter $10/month (up to 200 members). Growth $15/month (unlimited members and pushes). Both include the digital pub loyalty card, analytics, and print-ready QR. 14-day free trial, cancel anytime — no annual contract.',
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
          'A pub loyalty card tracks visits toward free drinks or perks. Scan Perks offers a digital pub loyalty card via QR scan — no plastic, from $10/month for independent pubs and bars.',
      },
      {
        question: 'What are the best pub loyalty cards for independent pubs?',
        answer:
          'Digital pub loyalty cards outperform paper. Scan Perks: QR-based pub loyalty card with analytics and push notifications — $10/month, 14-day trial at app.scan-perks.com.',
      },
      {
        question: 'Can US bars use a pub loyalty card?',
        answer:
          'Yes. US bars use the same digital loyalty card product — often called a bar loyalty card. Scan Perks works for pubs and bars without POS integration.',
      },
      {
        question: 'Pub loyalty card vs pub loyalty scheme — what is the difference?',
        answer:
          'A pub loyalty card is the customer-facing stamp/card. A pub loyalty scheme is the overall program (rules, rewards, pushes). Scan Perks includes both: see also /pub-loyalty-scheme/.',
      },
    ],
    supportingPosts: ['bar-customer-retention-tips'],
    localMarkets: ['UK pubs', 'US sports bars', 'Neighborhood bars', 'Craft beer bars'],
  },
  {
    slug: 'coffee-shop-loyalty-programs',
    title: 'Coffee Shop Loyalty Programs for Independents',
    metaTitle: 'Coffee Shop Loyalty Programs for Owners — Free Trial $10/mo | Scan Perks',
    description:
      'Run coffee shop loyalty programs without a chain app. QR stamps, mobile rewards, analytics for independents — start free trial at app.scan-perks.com ($10/mo).',
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
    title: 'QR Code Loyalty Program for Cafe & Bar Owners',
    metaTitle: 'QR Code Loyalty Program — No POS, Free Trial, $10/mo | Scan Perks',
    description:
      'QR code loyalty program for cafe and bar owners. Customers scan with their camera — no download, no POS. Live in 5 minutes. $10/mo, 14-day free trial.',
    primaryKeyword: 'qr code loyalty program',
    heroSeoLine:
      'QR code loyalty program for hospitality — loyalty QR codes, digital cards, and visit analytics from $10/month.',
    quickAnswer:
      'A QR code loyalty program lets customers scan a venue code to earn rewards on their phone. Scan Perks is a hospitality QR code loyalty program with a unique loyalty QR per location, digital loyalty cards, push offers, and analytics — $10/month, no POS, setup in ~5 minutes at app.scan-perks.com.',
    keywordCluster: [
      'qr code loyalty program',
      'qr code loyalty programs',
      'loyalty qr',
      'loyalty program qr code',
      'qr code loyalty card',
      'qr loyalty program',
      'qr code rewards program',
      'loyalty program qr codes',
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
        body: '1) Create account at app.scan-perks.com. 2) Set reward rules. 3) Download the loyalty QR poster. 4) Display at the counter. 5) Customers scan with their camera — no download required. Most venues finish in under 5 minutes with no POS.',
      },
      {
        heading: 'Scan Perks vs Loopy vs Square vs LoyaltyPass',
        body: 'Square Loyalty (~$45/month) is the right pick if checkout already runs on Square. Loopy (~$49) and LoyaltyPass ($99) win if you only want Apple/Google Wallet passes. Brewstamp starts at $7 for coffee-only shops. Scan Perks is $10/month for cafes, pubs, and bars with camera join and an optional customer app.',
      },
    ],
    comparison: [
      { feature: 'Join method', scanPerks: 'Camera QR (app optional)', traditional: 'Paper', enterprise: 'Multi-step app' },
      { feature: 'Data', scanPerks: 'Full', traditional: 'None', enterprise: 'Full' },
      { feature: 'Cost', scanPerks: '$10/mo', traditional: 'Print', enterprise: '$200+/mo' },
      { feature: 'Setup', scanPerks: '5 min', traditional: 'Instant', enterprise: 'Weeks' },
    ],
    faqs: [
      {
        question: 'What is the best QR code loyalty program for cafes?',
        answer:
          'For independents: Scan Perks — camera QR join, digital cards, analytics, push offers from $10/month. Use Square if you already run Square POS; use Loopy for wallet-only stamps. Start free trial at app.scan-perks.com.',
      },
      {
        question: 'How does a QR code loyalty program work?',
        answer:
          'Customers point their phone camera at your venue QR. Stamps land on a digital card — no download required. Scan Perks tracks visits from app.scan-perks.com — typical setup under 5 minutes, no POS.',
      },
      {
        question: 'Is a QR loyalty program free?',
        answer:
          'Scan Perks offers a 14-day free trial. After that, Starter is $10/month (200 members) or Growth $15/month (unlimited). No annual contract.',
      },
      {
        question: 'What is a QR code rewards program vs a punch card?',
        answer:
          'A QR code rewards program logs every visit digitally and can send push offers; punch cards cannot. Scan Perks keeps the same stamp rules with phone-based cards from $10/month.',
      },
    ],
    supportingPosts: ['qr-code-loyalty-program-guide', 'how-to-choose-qr-loyalty-program-cafe'],
    localMarkets: ['Cafes', 'Bars', 'Restaurants'],
  },
  {
    slug: 'coffee-loyalty-app',
    title: 'Coffee Loyalty App for Shops & Customers',
    metaTitle: 'Coffee Loyalty App for Cafe Owners — $10/mo Free Trial',
    description:
      'Coffee loyalty app for independent cafe owners, not a chain rewards account. Camera QR, no POS. $10/mo, 14-day free trial at app.scan-perks.com.',
    primaryKeyword: 'coffee loyalty app',
    heroSeoLine:
      'The coffee loyalty app on iPhone and Android — customers scan, earn stamps, get free drinks. Cafes go live from $10/month.',
    quickAnswer:
      'Scan Perks is a coffee loyalty app for iPhone and Android. Customers scan a cafe QR to earn stamp rewards toward free drinks. Coffee shop owners run the program from app.scan-perks.com at $10/month (200 members) with a 14-day free trial — no POS, setup in about 5 minutes. It is not Starbucks Rewards; it is the app your local cafe can launch today.',
    keywordCluster: [
      'coffee loyalty app',
      'coffee shop loyalty app',
      'loyalty app for coffee shop',
      'coffee loyalty',
      'coffee rewards app',
    ],
    highlights: ['iPhone + Android', 'Free for customers', '$10/mo for cafes', '5-min setup'],
    featureBullets: [
      'Coffee loyalty app on the App Store and Google Play',
      'Customers join by scanning the counter QR',
      'Stamp rewards (buy 9, get 1 free)',
      'Owners see visits and send push offers',
      'Works in the US, UK, Canada, and worldwide',
      '14-day free trial for the cafe — app is free for guests',
    ],
    sections: [
      {
        heading: 'Coffee Loyalty App for Customers (iPhone & Android)',
        body: 'Searchers asking “what’s the best coffee rewards program on iPhone or Android” usually mean a phone app that stores stamps. Scan Perks is that app at independent cafes: scan once, keep a digital card, redeem a free drink when you hit the threshold. Download from the App Store or Google Play, or join in the mobile browser.',
      },
      {
        heading: 'Coffee Loyalty App for Coffee Shop Owners',
        body: 'If you own the shop, Scan Perks is the coffee loyalty app you run — not a chain program. Print a QR, set stamp rules, and watch regulars come back. Starter is $10/month. One extra weekly regular usually covers the plan.',
      },
      {
        heading: 'Coffee Loyalty App vs Starbucks Rewards',
        body: 'Starbucks Rewards is a national consumer program. Scan Perks is software for independent coffee shops. Customers still get a mobile coffee loyalty app; the stamps stay at your cafe, not a chain.',
      },
      {
        heading: 'How to Start — Two Paths',
        body: 'Customers: open app.scan-perks.com or the store listing and scan at a venue that uses Scan Perks. Owners: create a venue, print the QR, train the counter — typical setup under 5 minutes. US, UK, and Canadian cafes use the same product.',
      },
    ],
    comparison: [
      { feature: 'Who it is for', scanPerks: 'Local cafes + guests', traditional: 'Paper only', enterprise: 'Chains' },
      { feature: 'Customer app', scanPerks: 'iPhone + Android', traditional: 'No', enterprise: 'Yes' },
      { feature: 'Owner cost', scanPerks: '$10/mo', traditional: 'Printing', enterprise: '$200+/mo' },
      { feature: 'Guest cost', scanPerks: 'Free', traditional: 'Free', enterprise: 'Free' },
    ],
    faqs: [
      {
        question: "What's the best coffee rewards program available on mobile for iPhone or Android?",
        answer:
          'For local cafes: Scan Perks — iPhone and Android coffee loyalty app, QR stamps, free for customers. For national chains: Starbucks Rewards. Owners start at app.scan-perks.com for $10/month.',
      },
      {
        question: 'Is there a coffee loyalty app that is not Starbucks?',
        answer:
          'Yes. Scan Perks is a coffee loyalty app for independent shops. Customers earn stamps at the cafe they visit. The app is free for guests; the cafe pays $10/month after a 14-day trial.',
      },
      {
        question: 'How much does a coffee loyalty app cost?',
        answer:
          'Free for customers. For coffee shop owners: $10/month Starter or $15/month Growth. 14-day free trial, no annual contract.',
      },
    ],
    supportingPosts: ['best-mobile-loyalty-apps-coffee-shops-2026', 'best-coffee-loyalty-programs'],
    localMarkets: ['US coffee shops', 'UK cafes', 'Canadian cafes'],
  },
  {
    slug: 'coffee-shop-loyalty-app',
    title: 'Coffee Shop Loyalty App for Owners & Regulars',
    metaTitle: 'Coffee Shop Loyalty App — $10/mo, 14-Day Free Trial',
    description:
      'Coffee shop loyalty app for owners: counter QR, stamp rewards, no POS. Guests join with the phone camera. $10/mo, 14-day free trial.',
    primaryKeyword: 'coffee shop loyalty app',
    heroSeoLine:
      'A coffee shop loyalty app that regulars actually use — scan at the counter, stamps on the phone, free drink when the card fills.',
    quickAnswer:
      'A coffee shop loyalty app lets regulars collect stamps on their phone instead of a punch card. Scan Perks is that app: customers scan a counter QR on iPhone or Android; owners set “buy 9 get 1 free,” see visit data, and send slow-morning offers — $10/month, 14-day free trial, no POS.',
    keywordCluster: [
      'coffee shop loyalty app',
      'loyalty app for coffee shop',
      'coffee shop loyalty reward app',
      'apps for coffee shop owners',
    ],
    highlights: ['Counter QR', 'iPhone + Android', 'Visit analytics', '$10/month'],
    featureBullets: [
      'Coffee shop loyalty app for guests and owners',
      'Loyalty app for coffee shop counters — scan, stamp, redeem',
      'Apps for coffee shop owners: dashboard, members, pushes',
      'Works without Square, Toast, or other POS',
      'US, UK, and Canada ready',
    ],
    sections: [
      {
        heading: 'Loyalty App for Coffee Shop Counters',
        body: 'The line cannot wait. Scan Perks is a coffee shop loyalty app built for a 10-second scan: guest opens the app or camera, staff confirm, stamp lands. No extra hardware on the counter.',
      },
      {
        heading: 'Apps for Coffee Shop Owners',
        body: 'Owners searching “apps for coffee shop owners” need loyalty, not another POS. Scan Perks sits next to your existing till. You get member lists, visit frequency, and push offers from $10/month.',
      },
      {
        heading: 'Coffee Shop Loyalty Reward App vs Paper Cards',
        body: 'Paper cards disappear. A coffee shop loyalty reward app keeps the same offer and adds data. Scan Perks prints a poster so you do not reprint punch cards every month.',
      },
    ],
    comparison: [
      { feature: 'Join time', scanPerks: '~10 sec', traditional: 'Write name', enterprise: 'Account + app' },
      { feature: 'Owner apps', scanPerks: 'Web dashboard', traditional: 'None', enterprise: 'Yes' },
      { feature: 'POS required', scanPerks: 'No', traditional: 'No', enterprise: 'Often' },
      { feature: 'Price', scanPerks: '$10/mo', traditional: 'Print', enterprise: '$200+/mo' },
    ],
    faqs: [
      {
        question: 'What is the best loyalty app for coffee shop owners?',
        answer:
          'Scan Perks — coffee shop loyalty app with QR stamps, iPhone/Android guest apps, and a $10/month owner plan. 14-day free trial at app.scan-perks.com.',
      },
      {
        question: 'Are there apps for coffee shop owners that include loyalty?',
        answer:
          'Yes. Scan Perks is an app for coffee shop owners focused on loyalty: QR program, analytics, and push offers. It does not replace your POS.',
      },
    ],
    supportingPosts: ['best-mobile-loyalty-apps-coffee-shops-2026', 'how-to-choose-qr-loyalty-program-cafe'],
    localMarkets: ['Neighborhood coffee shops', 'US cafes', 'UK independents'],
  },
];
