import type { LoyaltyPage } from './loyaltyPages';
import { phrases, siteFacts } from './site-facts';

/** Exact-match URL pages for GSC top queries — target top 10 rankings */
export const keywordLandings: LoyaltyPage[] = [
  {
    slug: 'cafe-loyalty-app',
    title: `Cafe Loyalty App for Owners — ${phrases.en.starterPerMo}, No POS`,
    metaTitle: `Cafe Loyalty App for Owners — ${phrases.en.starterPerMo}, No POS`,
    description:
      `For owners: a cafe loyalty app with one counter QR, 8 stamps for a free coffee, and no POS. Set up in 5 minutes. ${phrases.en.trial}, then ${phrases.en.starterPerMo}.`,
    primaryKeyword: 'cafe loyalty app',
    heroSeoLine:
      `The cafe loyalty app built for independent coffee shops — digital stamps, counter QR, iOS & Android from ${phrases.en.starterPerMonth}.`,
    quickAnswer:
      `Scan Perks is a cafe loyalty app for coffee shop owners (not a chain consumer rewards app). You print one counter QR; customers scan it in the free Scan Perks app (iPhone or Android) and collect stamps toward a free drink you choose. You get visit analytics and can push offers to members. ${phrases.en.starterPerMonth} for ${phrases.en.scans} after a ${phrases.en.trial} with ${phrases.en.noCard}, at app.scan-perks.com. No POS integration.`,
    keywordCluster: [
      'cafe loyalty app',
      'coffee loyalty app',
      'coffee shop loyalty app',
      'loyalty app for coffee shop',
      'cafe rewards app',
      'best loyalty app for cafes',
      'best loyalty program for cafes',
      'mobile rewards program for coffee shops',
    ],
    highlights: ['Counter QR', phrases.en.trial, phrases.en.starterPerMonth, '5-min setup'],
    featureBullets: [
      'Counter QR scanned in the free customer app (iOS and Android)',
      'Digital stamp rewards (for example 8 stamps, free coffee) with an optional welcome stamp',
      'Counter QR — no POS or hardware',
      'Coffee shop member profiles and visit analytics',
      'Push offers for slow periods',
      `${phrases.en.starterPerMonth} Starter — ${phrases.en.trial}`,
    ],
    sections: [
      {
        heading: 'Why Coffee Shops Need a Dedicated Cafe Loyalty App',
        body: `Generic retail loyalty tools miss cafe workflows — fast counter service, stamp-style free drinks, morning regulars. A cafe loyalty app should let customers join in under 30 seconds via QR scan. Scan Perks is purpose-built for coffee shops: stamp rewards, member list, and push notifications from ${phrases.en.starterPerMonth}.`,
      },
      {
        heading: 'Cafe Loyalty App vs Paper Punch Cards',
        body: `Punch cards cost nothing upfront but provide zero visit data and are lost constantly. A cafe loyalty app digitizes the same reward logic with full analytics — owners see who visits weekly, send push offers, and never reprint cards. Scan Perks Starter: ${phrases.en.starterPerMonth} for ${phrases.en.scans}.`,
      },
      {
        heading: 'How the Scan Perks Cafe Loyalty App Works',
        body: `1) Sign up at app.scan-perks.com and open the Business tab. 2) Set your stamp rule (e.g. 8 stamps, free coffee) and leave the welcome stamp on. 3) Tap Create my QR — your ${phrases.en.trialShort} starts, ${phrases.en.noCard}. 4) Print it; customers scan it in the Scan Perks app. 5) Track visits and push offers to members. Typical setup: under 5 minutes.`,
        links: [
          { href: '/how-it-works/', label: 'Every setup step' },
          { href: 'https://app.scan-perks.com', label: `Start the ${phrases.en.trial}` },
        ],
      },
      {
        heading: 'How Many Stamps Should a Cafe Loyalty Card Have?',
        body: 'Most independent cafes use 8 to 10 stamps for one free drink, and Scan Perks suggests 8 stamps and a free coffee as the starting rule. Leave the welcome stamp on so the first scan already shows 1 of 8 — a card that starts at zero is easier to ignore. The cost is small: with a $4 coffee that costs about $1 to make, an 8-stamp card gives back roughly 3% of what that customer spent.',
      },
      {
        heading: 'What Staff Say at the Till',
        body: 'Loyalty only works if staff mention it. One sentence is enough: “Open Scan Perks, tap Scan, and point it at this. Eight visits and the coffee is free — the first stamp is on the house.” Put the QR by the till at eye level, and write app.scan-perks.com under it for people who need to install the app first.',
      },
      {
        heading: 'How Customers Redeem the Free Coffee',
        body: 'When a card is full, the customer gets a reward in the Scan Perks app with its own QR code. They show it at the counter and the owner scans it from the Scan Perks app signed in as the venue. Each reward can be redeemed once, so screenshots and second attempts do not work.',
      },
      {
        heading: `What Happens When the ${siteFacts.trial.days}-Day Trial Ends`,
        body: `The trial starts when you tap Create my QR, and it needs ${phrases.en.noCard}. Before day ${siteFacts.trial.days}, add a card to move onto Starter at ${phrases.en.starterPerMonth}. If you do not, the QR stops adding new stamps until billing starts — customers keep the stamps they already have.`,
        links: [{ href: '/pricing/', label: 'Starter vs Growth' }],
      },
      {
        heading: 'When to pick Scan Perks vs Loopy vs Square',
        body: `Choose Square Loyalty if you already run Square: it is included in Square Plus at ${phrases.en.squarePerMonthLocation}. Choose Loopy Loyalty if you only want an Apple or Google Wallet stamp card ($25/month). Choose Scan Perks if you want cafes, pubs, and bars at ${phrases.en.starterPerMonth} with a counter QR and a customer app that can receive your offers. Prices checked ${phrases.en.checkedOn}.`,
      },
      {
        heading: 'Do Customers Need to Download an App?',
        body: 'Yes — with Scan Perks, customers collect stamps in the free Scan Perks app on iPhone or Android. That one install is what lets you push offers and birthday treats to them later. If someone points the phone camera at your QR, it opens your venue page with the reward and a link to the app. If no-download matters more than push offers, Wallet-pass tools (Loopy Loyalty, LoyaltyPass) are the alternative.',
      },
      {
        heading: 'Best Loyalty Program for Cafes — Owner Checklist',
        body: 'Judge the best loyalty program for cafes on: counter speed under 30 seconds, price under $20/month, no POS lock-in, mobile rewards, and visit analytics. Scan Perks hits all five for independents — start the free trial, print your QR, and ask every customer to scan. The 2026 price list, including Brewstamp, Square, Loopy and LoyaltyPass, is on the comparison page.',
        links: [
          { href: '/blog/best-coffee-loyalty-programs/', label: 'Best loyalty program for coffee shops (2026)' },
        ],
      },
      {
        heading: 'Cafe Loyalty App Pricing',
        body: `Starter: ${phrases.en.starterPerMonth} for ${phrases.en.scansUpTo}. Growth: ${phrases.en.growthPerMonth} for ${phrases.en.unlimitedScans}. Both include the stamp card, counter QR, analytics, and offers pushed to members. Every venue starts with a ${phrases.en.trial}, ${phrases.en.noCard} — cancel anytime. Open app.scan-perks.com to start.`,
      },
    ],
    comparison: [
      { feature: 'Monthly cost', scanPerks: phrases.en.starterPrice, traditional: 'Print only', enterprise: '$200+' },
      { feature: 'Customer join', scanPerks: 'QR in the free app', traditional: 'Paper card', enterprise: 'Usually an app' },
      { feature: 'Mobile app', scanPerks: 'iOS + Android', traditional: 'No', enterprise: 'Yes' },
      { feature: 'Visit analytics', scanPerks: 'Yes', traditional: 'No', enterprise: 'Yes' },
      { feature: 'Setup time', scanPerks: '~5 min', traditional: 'Instant', enterprise: 'Weeks' },
    ],
    faqs: [
      {
        question: 'Scan Perks vs Brewstamp — which cafe loyalty app?',
        answer:
          `Brewstamp is coffee-only: free for the first 50 stamps, then $12/month, and customers do not install an app. Scan Perks is ${phrases.en.starterPerMonth} with a counter QR and no POS, and it also covers pubs and bars, but customers use the Scan Perks app. Start a ${phrases.en.trial} at app.scan-perks.com.`,
      },
      {
        question: 'What is the best cafe loyalty app for coffee shops?',
        answer:
          `For independent cafe owners (not Starbucks customers): Scan Perks — counter QR stamp card, analytics, push offers — ${phrases.en.starterPerMonth} after a ${phrases.en.trial} at app.scan-perks.com.`,
      },
      {
        question: 'Do cafe customers need to download an app?',
        answer:
          'Yes, the free Scan Perks app on iPhone or Android — that is where stamps are collected. A phone camera pointed at your QR opens your venue page with an app link. Owners manage everything at app.scan-perks.com in the browser.',
      },
      {
        question: 'What is the best loyalty program for cafes?',
        answer:
          `For single-location cafes: a QR stamp program under $20/month with mobile apps and no POS lock-in. Scan Perks fits that — ${phrases.en.starterPerMonth} Starter, ${phrases.en.trial}, setup in ~5 minutes. Prices for Brewstamp, Square, Loopy and LoyaltyPass are compared at /blog/best-coffee-loyalty-programs/.`,
      },
      {
        question: 'What apps are recommended for local coffee shops to manage loyalty and free drinks?',
        answer:
          `No POS change, stamps in a free customer app, and the same tool for a bar: Scan Perks at ${phrases.en.starterPerMonth} after a ${phrases.en.trialShort}. Coffee only, no customer app: Brewstamp, free for the first 50 stamps, then $12/month. Already on Square: Square Loyalty, included in Square Plus at ${phrases.en.squarePerMonthLocation}. Wallet card and no extra app: Loopy Loyalty at $25/month. Scan Perks uses stamps, not a points balance: one stamp per visit. Prices checked ${phrases.en.checkedOn}.`,
      },
      {
        question: 'Is there a cafe loyalty app with no download?',
        answer:
          'Wallet-pass tools such as Loopy Loyalty and LoyaltyPass work without an extra app. Scan Perks does not: customers use the free Scan Perks app, which is what lets you push offers to them.',
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
        answer: `Scan Perks cafe loyalty app costs ${phrases.en.starterPerMonth} (Starter, ${phrases.en.scans}) or ${phrases.en.growthPerMonth} (Growth, ${phrases.en.unlimitedScans}). Every venue starts with a ${phrases.en.trial} with ${phrases.en.noCard}.`,
      },
      {
        question: 'How many stamps should a coffee loyalty card have?',
        answer: '8 to 10 stamps for one free drink is the usual range for independent cafes. Scan Perks suggests 8 stamps and a free coffee, with a welcome stamp so the first visit already counts.',
      },
      {
        question: 'Can a customer get two stamps in one visit?',
        answer: 'No. Scan Perks allows one scan per venue per day. If you turn on happy hour, a scan during your chosen hours counts double.',
      },
      {
        question: `What happens after the ${phrases.en.trial}?`,
        answer: `Add a card to continue on Starter at ${phrases.en.starterPerMonth}. Without billing, the QR stops adding new stamps after day ${siteFacts.trial.days}; stamps customers already earned are kept.`,
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
    metaTitle: `Pub Loyalty Scheme for UK Pubs — Digital Stamp Card, ${phrases.en.starterPerMo}`,
    description:
      `Pub loyalty scheme for UK pubs: a free pint after 10 stamps, happy-hour double stamps, offers pushed to regulars. From ${phrases.en.starterPerMo}, no POS, ${phrases.en.trial}.`,
    primaryKeyword: 'pub loyalty scheme',
    heroSeoLine:
      `Pub loyalty scheme for independent pubs and bars — QR rewards, digital loyalty card, happy-hour push alerts from ${phrases.en.starterPerMonth}.`,
    quickAnswer:
      `A pub loyalty scheme rewards regular drinkers with perks each visit. Scan Perks digitizes your pub loyalty scheme with a bar QR code: customers earn free-drink tiers on a digital pub loyalty card, you can turn on happy-hour double stamps, push offers to members and track regulars — ${phrases.en.starterPerMonth} after a ${phrases.en.trial}, no POS required.`,
    keywordCluster: [
      'pub loyalty scheme',
      'pub loyalty program',
      'pub loyalty card',
      'pub loyalty cards',
      'bar loyalty scheme',
      'bar loyalty program',
      'loyalty scheme for pubs',
    ],
    highlights: ['Digital pub loyalty card', 'Happy-hour double stamps', 'Free pint after 10', phrases.en.starterPerMonth],
    featureBullets: [
      'Pub loyalty scheme via QR scan at the bar',
      'Digital pub loyalty card on customer phone',
      'Free-drink reward tiers (configurable)',
      'Happy-hour double stamps on the days and hours you choose',
      'Offers pushed to members',
      'Regular customer visit analytics',
      `No POS integration — ${phrases.en.rangeBareMonth}`,
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
        body: `Enterprise loyalty suites cost $200+/month and often require POS integration. Scan Perks pub loyalty scheme is built for single-location pubs and bars at ${phrases.en.rangeBareMonth} — setup in ~5 minutes, no contracts, ${phrases.en.trial}.`,
      },
      {
        heading: 'How to Launch a Pub Loyalty Scheme in One Day',
        body: `Sign up at app.scan-perks.com, configure free-drink tiers, download your bar QR poster, and train staff to mention the scheme (“Scan for your loyalty card”). Most pubs go live the same day. Busy pubs that pass ${phrases.en.scans} move to Growth at ${phrases.en.growthPerMonth} for ${phrases.en.unlimitedScans}.`,
        links: [{ href: 'https://app.scan-perks.com', label: `Start the ${phrases.en.trial}` }],
      },
      {
        heading: 'Designing the Scheme: Threshold, Reward, Quiet Nights',
        body: 'Keep the rule one sentence long. A free pint (or soft drink) after 10 stamps is the common UK pub offer; regulars who come twice a week earn it in about five weeks. Use happy hour for quiet nights: set it to, say, Tuesday 7–11pm and each scan in that window counts double. Leave the welcome stamp on and turn on birthday treats for members who add a birthday.',
      },
      {
        heading: 'Pub Loyalty Schemes and UK Licensing',
        body: 'Under the Licensing Act 2003 mandatory conditions, premises must not run irresponsible drinks promotions. A visit-based scheme fits that better than a per-drink one: Scan Perks gives one stamp per visit per day, so it rewards coming back, not drinking more in one sitting. Check your own premises licence and local guidance before launch; this is not legal advice.',
      },
      {
        heading: 'UK Pubs & US Bars — Same Product',
        body: `Google UK favors “pub loyalty scheme” and “pub loyalty card.” Google US favors “bar loyalty programs.” Scan Perks is one QR loyalty product covering both markets — iOS/Android customer apps, owner dashboard, analytics from ${phrases.en.starterPerMonth} (billed in US dollars).`,
        links: [
          { href: '/pub-loyalty-card/', label: 'Pub loyalty card' },
          { href: '/bar-loyalty-program/', label: 'Bar loyalty programs (US)' },
        ],
      },
    ],
    comparison: [
      { feature: 'Pub loyalty card', scanPerks: 'Digital QR', traditional: 'Paper card', enterprise: 'App + card' },
      { feature: 'Happy-hour double stamps', scanPerks: 'Included', traditional: 'No', enterprise: 'Extra $' },
      { feature: 'Monthly cost', scanPerks: phrases.en.rangeBare, traditional: 'Free', enterprise: '$200+' },
      { feature: 'Lost cards', scanPerks: 'Never', traditional: 'Often', enterprise: 'Rare' },
    ],
    faqs: [
      {
        question: 'What is a pub loyalty scheme?',
        answer:
          `A pub loyalty scheme rewards regular drinkers with perks after each visit. Scan Perks digitizes this with QR scanning, digital pub loyalty cards, and push alerts from ${phrases.en.starterPerMonth}.`,
      },
      {
        question: 'How much does a pub loyalty scheme cost?',
        answer: `Scan Perks pub loyalty scheme: ${phrases.en.starterPerMonth} (${phrases.en.scans}) or ${phrases.en.growthPerMonth} (${phrases.en.unlimitedScans}). ${phrases.en.trial}, ${phrases.en.noCard}.`,
      },
      {
        question: 'What is the best pub loyalty scheme for small pubs?',
        answer:
          `Scan Perks — QR pub loyalty scheme with digital cards, analytics, happy-hour double stamps and offers pushed to members. No POS required, ${phrases.en.starterPerMonth} after a ${phrases.en.trial}.`,
      },
      {
        question: 'Is a pub loyalty scheme allowed under UK licensing rules?',
        answer:
          'Loyalty schemes are common in UK pubs, but promotions must not encourage irresponsible drinking under the Licensing Act 2003 mandatory conditions. Scan Perks stamps once per visit per day, which rewards return visits rather than volume. Check your premises licence; this is not legal advice.',
      },
      {
        question: 'What reward works best for a pub loyalty scheme?',
        answer:
          'A free pint or soft drink after 10 visits is the most common, because staff can explain it in one sentence. Add double stamps on a quiet night with Scan Perks happy hour.',
      },
      {
        question: 'Can I run a pub loyalty scheme without changing my till?',
        answer:
          'Yes. Scan Perks needs no POS: regulars scan a QR at the bar in the Scan Perks app, and you run the scheme from app.scan-perks.com.',
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
    metaTitle: `Pub Loyalty Cards — Digital Stamp Card for Pubs, from ${phrases.en.starterPerMo}`,
    description:
      `Replace paper pub loyalty cards with a digital stamp card. Regulars scan your bar QR in the Scan Perks app — no lost cards. From ${phrases.en.starterPerMo}, ${phrases.en.trial}.`,
    primaryKeyword: 'pub loyalty card',
    heroSeoLine:
      `Digital pub loyalty card for independent pubs and bars — scan at the bar, never lose a card, analytics from ${phrases.en.starterPerMonth}.`,
    quickAnswer:
      `A pub loyalty card tracks drinks toward free pints or rewards. Scan Perks replaces paper and plastic pub loyalty cards with a digital card on the customer phone: guests scan your bar QR each visit, stamps add automatically, and owners get visit analytics, happy-hour double stamps and offers pushed to members from ${phrases.en.starterPerMonth} after a ${phrases.en.trial} — for UK pubs and US neighborhood bars.`,
    keywordCluster: [
      'pub loyalty card',
      'pub loyalty cards',
      'bar loyalty cards',
      'digital pub loyalty card',
      'pub loyalty punch card',
      'bar loyalty card app',
    ],
    highlights: ['No plastic cards', 'QR at bar', 'Visit tracking', phrases.en.starterPerMonth],
    featureBullets: [
      'Digital pub loyalty card on customer phone (iOS & Android)',
      'Replaces paper pub loyalty cards and punch cards',
      'QR scan at bar — contactless, no POS',
      'Free-drink tiers when stamp threshold met',
      'Owner dashboard with regulars list',
      `${phrases.en.starterPerMonth} Starter — ${phrases.en.trial}`,
    ],
    sections: [
      {
        heading: 'Why Pub Loyalty Cards Still Matter in 2026',
        body: 'UK and US drinkers expect a reason to come back midweek. A pub loyalty card (buy 9, get 1 free or stamp tiers) is the simplest offer staff can explain in one sentence. Paper cards still dominate independents — but they get lost, forged, and give zero data. A digital pub loyalty card keeps the same offer and adds analytics.',
      },
      {
        heading: 'Paper Pub Loyalty Cards vs Digital QR',
        body: `Paper pub loyalty cards cost pennies to print but provide no visit history and die when wallets are emptied. A digital pub loyalty card cannot be lost: every scan is logged, and you can push Tuesday or happy-hour offers to cardholders instantly. Scan Perks: QR at the bar, stamps on the phone, from ${phrases.en.starterPerMonth}.`,
      },
      {
        heading: 'How the Scan Perks Pub Loyalty Card Works',
        body: '1) Create an account at app.scan-perks.com. 2) Set reward rules (e.g. 10 drinks = 1 free). 3) Print your bar QR. 4) Regulars scan it in the free Scan Perks app — the first scan opens their card, then one stamp per visit. 5) When a card is full, they show the reward QR and you scan it from the Scan Perks app signed in as the venue. Typical setup: under 5 minutes — no POS, no hardware.',
        links: [
          { href: '/how-it-works/', label: 'Every setup step' },
          { href: 'https://app.scan-perks.com', label: `Start the ${phrases.en.trial}` },
        ],
      },
      {
        heading: 'Pub Loyalty Card Ideas That Work',
        body: 'Free pint after 10 stamps is the classic and the easiest for staff to explain. Quiz night: set happy hour to that evening so every scan counts double. Birthday drink: leave birthday treats on for members who add a birthday. First visit: keep the welcome stamp on so a new card starts at 1 of 10. Pick one reward and keep it for a few months; changing it weekly confuses regulars.',
        links: [{ href: '/pub-loyalty-scheme/', label: 'Designing a pub loyalty scheme' }],
      },
      {
        heading: 'Do Regulars Need to Download an App?',
        body: 'Yes, the free Scan Perks app on iPhone or Android. That is the trade-off for push offers and birthday treats. If a regular points the phone camera at the QR, it opens your pub’s page with the reward and a link to the app. Tell staff to say: “Open Scan Perks, tap Scan, point it at this — ten visits and the pint is on us.”',
      },
      {
        heading: 'Pub Loyalty Cards for UK Pubs & US Bars',
        body: `UK searches often use “pub loyalty card” and “pub loyalty scheme”; US owners search “bar loyalty programs” and “loyalty cards for bars.” Scan Perks covers both: one digital card product, happy-hour pushes, visit tracking, iOS/Android apps — ${phrases.en.starterPerMonth} Starter or ${phrases.en.growthPerMonth} Growth.`,
      },
      {
        heading: 'Pub Loyalty Card Pricing',
        body: `Starter ${phrases.en.starterPerMonth} (${phrases.en.scansUpTo}). Growth ${phrases.en.growthPerMonth} (${phrases.en.unlimitedScans}). Both include the digital pub loyalty card, analytics, and print-ready QR. ${phrases.en.trial}, cancel anytime — no annual contract.`,
      },
    ],
    comparison: [
      { feature: 'Card type', scanPerks: 'Phone digital', traditional: 'Paper', enterprise: 'Plastic + app' },
      { feature: 'Analytics', scanPerks: 'Per visit', traditional: 'None', enterprise: 'Yes' },
      { feature: 'Cost', scanPerks: phrases.en.starterPerMo, traditional: 'Printing', enterprise: '$200+/mo' },
      { feature: 'Push offers', scanPerks: 'Yes', traditional: 'No', enterprise: 'Yes' },
    ],
    faqs: [
      {
        question: 'What is a pub loyalty card?',
        answer:
          `A pub loyalty card tracks visits toward free drinks or perks. Scan Perks offers a digital pub loyalty card via QR scan — no plastic, from ${phrases.en.starterPerMonth} for independent pubs and bars.`,
      },
      {
        question: 'What are the best pub loyalty cards for independent pubs?',
        answer:
          `For an independent pub, a digital card that staff can explain in one sentence. Scan Perks: QR-based pub loyalty card with analytics and push offers — ${phrases.en.starterPerMonth} after a ${phrases.en.trial} at app.scan-perks.com.`,
      },
      {
        question: 'How do I set up a digital pub loyalty card?',
        answer:
          `Sign up at app.scan-perks.com, open the Business tab, set the rule (for example 10 stamps for a free pint), tap Create my QR and print it for the bar. The ${phrases.en.trial} starts then, with ${phrases.en.noCard}.`,
      },
      {
        question: 'Can I give double stamps on quiz night?',
        answer:
          'Yes. Scan Perks happy hour lets you choose days and hours; every scan in that window counts double.',
      },
      {
        question: 'How do regulars redeem a free pint?',
        answer:
          'A full card gives the regular a reward QR in the app. You scan it from the Scan Perks app signed in as the venue, and each reward can be used once.',
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
    metaTitle: `Coffee Shop Loyalty Programs for Owners — Free Trial ${phrases.en.starterPerMo} | Scan Perks`,
    description:
      `Run coffee shop loyalty programs without a chain app. QR stamps, mobile rewards, analytics for independents — start free trial at app.scan-perks.com (${phrases.en.starterPerMo}).`,
    primaryKeyword: 'coffee shop loyalty programs',
    heroSeoLine:
      `Coffee shop loyalty programs for independent cafes — digital stamps, free drinks, and analytics from ${phrases.en.starterPerMonth}.`,
    quickAnswer:
      `Coffee shop loyalty programs reward repeat customers with free drinks, points, or stamps. Scan Perks offers coffee shop loyalty programs via QR: customers scan at the counter, earn digital rewards on iOS/Android, owners get analytics and push offers — ${phrases.en.starterPerMonth}, no POS required.`,
    keywordCluster: [
      'coffee shop loyalty programs',
      'coffee shop loyalty program',
      'loyalty programs for coffee shops',
      'coffee shop rewards programs',
      'coffee loyalty program',
    ],
    highlights: ['Stamp rewards', 'Coffee shop analytics', 'Push offers', phrases.en.starterPerMonth],
    featureBullets: [
      'Full coffee shop loyalty program via QR',
      'Digital stamp rewards (configurable rules)',
      'Coffee shop loyalty reward app — iOS & Android',
      'Member profiles and visit frequency data',
      'Push notifications for slow periods',
      `${phrases.en.trial} at app.scan-perks.com`,
    ],
    sections: [
      {
        heading: 'Types of Coffee Shop Loyalty Programs',
        body: 'Coffee shop loyalty programs include stamp cards (buy 9, get 1 free), points systems, tiered VIP perks, and subscription models. For independents, stamp-style programs work best — simple for staff and customers. Scan Perks digitizes stamp coffee shop loyalty programs with QR scanning.',
      },
      {
        heading: 'Coffee Shop Loyalty Programs: Cost Comparison',
        body: `Paper punch cards: $0 software, no data. Enterprise suites: $200–500/month. Scan Perks coffee shop loyalty programs: ${phrases.en.starterPerMonth} for ${phrases.en.scans} — includes digital rewards, analytics, push offers, and customer apps.`,
      },
      {
        heading: 'How to Choose a Coffee Shop Loyalty Program',
        body: 'Prioritize: (1) under $20/month, (2) no POS lock-in, (3) mobile customer experience, (4) visit analytics. Scan Perks meets all four for independent coffee shops — setup in ~5 minutes at app.scan-perks.com.',
      },
      {
        heading: 'Coffee Shop Loyalty Programs vs Chain Apps',
        body: `Starbucks Rewards sets consumer expectations but costs millions to replicate. Independent coffee shop loyalty programs should be affordable and fast at the counter. Scan Perks bridges the gap — professional digital rewards from ${phrases.en.starterPerMonth}.`,
      },
    ],
    comparison: [
      { feature: 'Program type', scanPerks: 'Digital stamps', traditional: 'Paper', enterprise: 'Points API' },
      { feature: 'Monthly cost', scanPerks: phrases.en.starterPrice, traditional: '$0', enterprise: '$200+' },
      { feature: 'Mobile app', scanPerks: 'Yes', traditional: 'No', enterprise: 'Yes' },
      { feature: 'Best for', scanPerks: 'Independents', traditional: 'Tiny ops', enterprise: 'Chains' },
    ],
    faqs: [
      {
        question: 'What are coffee shop loyalty programs?',
        answer:
          `Coffee shop loyalty programs reward repeat customers with free drinks or perks. Scan Perks runs them digitally via QR scan — ${phrases.en.starterPerMonth} for independent cafes.`,
      },
      {
        question: 'What is the best coffee shop loyalty program for small cafes?',
        answer:
          `Scan Perks: stamp-style coffee shop loyalty program with iOS/Android apps, analytics, and push offers — ${phrases.en.starterPerMonth}, ${phrases.en.trial}.`,
      },
    ],
    supportingPosts: ['best-coffee-loyalty-programs', 'how-to-choose-qr-loyalty-program-cafe'],
    localMarkets: ['Coffee shops', 'Brunch cafes', 'Bakeries'],
  },
  {
    slug: 'qr-code-loyalty-program',
    title: 'QR Code Loyalty Program for Cafe & Bar Owners',
    metaTitle: `QR Code Loyalty Program for Cafes & Bars — ${phrases.en.starterPerMo} | Scan Perks`,
    description:
      `How a QR code loyalty program works: one counter QR, a stamp per visit, a free item at the end. Live in 5 minutes, no POS. ${phrases.en.trial}, then ${phrases.en.starterPerMo}.`,
    primaryKeyword: 'qr code loyalty program',
    heroSeoLine:
      `QR code loyalty program for hospitality — loyalty QR codes, digital cards, and visit analytics from ${phrases.en.starterPerMonth}.`,
    quickAnswer:
      `A QR code loyalty program lets customers scan a venue code to earn rewards on their phone. Scan Perks is a hospitality QR code loyalty program with a unique loyalty QR per location, digital loyalty cards, push offers, and analytics — ${phrases.en.starterPerMonth}, no POS, setup in ~5 minutes at app.scan-perks.com.`,
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
      `${phrases.en.starterPerMonth} — ${phrases.en.trial}`,
    ],
    sections: [
      {
        heading: 'What Is a QR Code Loyalty Program?',
        body: 'A QR code loyalty program replaces paper punch cards with scannable codes. Customers scan your loyalty QR at the counter to join and earn stamps. Scan Perks is a hospitality-focused QR code loyalty program — built for cafes, bars, and restaurants, not generic retail.',
      },
      {
        heading: 'Is a QR Code Rewards Program the Same Thing?',
        body: `Yes. A QR code rewards program, a QR code loyalty card, and a QR code loyalty program are the same counter setup: one printed code, one stamp per visit, a free item when the card is full. The code is a link to your venue page. Customers collect the stamp in the free Scan Perks app. ${phrases.en.starterPerMonth} after a ${phrases.en.trial}, no POS.`,
      },
      {
        heading: 'QR Code Loyalty Program vs Traditional Cards',
        body: `Traditional cards cannot track visits or send push offers. A QR code loyalty program logs every scan, builds member profiles, and lets owners re-engage customers on slow nights — from ${phrases.en.starterPerMonth} vs $0 upfront but zero data for paper.`,
      },
      {
        heading: 'How to Start a QR Code Loyalty Program',
        body: `1) Create an account at app.scan-perks.com and open the Business tab. 2) Set the reward rule (for example 8 stamps for a free coffee). 3) Tap Create my QR — the ${phrases.en.trial} starts, ${phrases.en.noCard}. 4) Share the QR to yourself, print it, and put it at the counter. 5) Customers scan it in the free Scan Perks app. Most venues finish in under 5 minutes with no POS.`,
        links: [
          { href: '/how-it-works/', label: 'Every setup step' },
          { href: 'https://app.scan-perks.com', label: `Start the ${phrases.en.trial}` },
        ],
      },
      {
        heading: 'What Is Inside a Scan Perks Loyalty QR Code?',
        body: 'The printed code is a normal web link to your venue page on app.scan-perks.com. Point a phone camera at it and the page opens with your reward and a link to the Scan Perks app. Scan it from the Scan tab inside the app and a stamp lands on that customer’s card. One code per venue; you never reprint it when the reward changes.',
      },
      {
        heading: 'How a QR Loyalty Program Stops Abuse',
        body: 'Each customer can collect one stamp per venue per day, so scanning the poster ten times does not fill a card. Earned rewards carry their own QR, which only the venue owner’s login can redeem, and each reward works once. That covers the two common tricks with paper cards: extra stamps and reused freebies.',
      },
      {
        heading: 'Where to Put the Loyalty QR',
        body: 'At the till at eye level, where people wait for their order; on the bar for pubs; on a table tent if guests pay at the table. Add one line under it — “Scan in the Scan Perks app for a stamp” — and app.scan-perks.com for anyone who needs the app first. A poster no one mentions gets few scans, so give staff one sentence to say.',
      },
      {
        heading: 'Scan Perks vs Loopy vs Square vs LoyaltyPass',
        body: `Square Loyalty is the right pick if checkout already runs on Square (included in Square Plus at ${phrases.en.squarePerMonthLocation}). Loopy Loyalty is $25/month if you only want an Apple or Google Wallet pass. Brewstamp is coffee-only: free for the first 50 stamps, then $12/month. Scan Perks is ${phrases.en.starterPerMonth} for cafes, pubs, and bars with a counter QR scanned in its customer app. Prices checked ${phrases.en.checkedOn}.`,
        links: [{ href: '/blog/best-coffee-loyalty-programs/', label: 'Full price comparison' }],
      },
    ],
    comparison: [
      { feature: 'Join method', scanPerks: 'QR in the free app', traditional: 'Paper', enterprise: 'Multi-step app' },
      { feature: 'Data', scanPerks: 'Full', traditional: 'None', enterprise: 'Full' },
      { feature: 'Cost', scanPerks: phrases.en.starterPerMo, traditional: 'Print', enterprise: '$200+/mo' },
      { feature: 'Setup', scanPerks: '5 min', traditional: 'Instant', enterprise: 'Weeks' },
    ],
    faqs: [
      {
        question: 'What is the best QR code loyalty program for cafes?',
        answer:
          `For independents: Scan Perks — counter QR, digital stamp cards, analytics, push offers from ${phrases.en.starterPerMonth}. Use Square if you already run Square POS; use Loopy for wallet-only stamps. Start free trial at app.scan-perks.com.`,
      },
      {
        question: 'How does a QR code loyalty program work?',
        answer:
          'Customers open the Scan Perks app, tap Scan, and point it at your venue QR; a stamp lands on their digital card. One scan per venue per day. You track visits at app.scan-perks.com — typical setup under 5 minutes, no POS.',
      },
      {
        question: 'Is a QR loyalty program free?',
        answer:
          `Scan Perks offers a ${phrases.en.trial} with ${phrases.en.noCard}. After that, Starter is ${phrases.en.starterPerMonth} (${phrases.en.scans}) or Growth ${phrases.en.growthPerMonth} (${phrases.en.unlimitedScans}). No annual contract.`,
      },
      {
        question: 'Can customers scan the same loyalty QR code twice?',
        answer:
          'They can scan it, but Scan Perks adds only one stamp per venue per day. Rewards also carry their own QR that only the venue owner can redeem, once.',
      },
      {
        question: 'Do customers need an app to scan a loyalty QR code?',
        answer:
          'With Scan Perks, yes: stamps are collected in the free Scan Perks app on iPhone or Android. A phone camera opens your venue page with a link to the app.',
      },
      {
        question: 'What is a QR code loyalty card?',
        answer:
          'It is the digital stamp card a customer holds in the app, filled by scanning your venue QR. The QR code loyalty program is the whole setup: your reward rule, the printed code, and redemption.',
      },
      {
        question: 'What is a QR code rewards program vs a punch card?',
        answer:
          `A QR code rewards program logs every visit digitally and can send push offers; punch cards cannot. Scan Perks keeps the same stamp rules with phone-based cards from ${phrases.en.starterPerMonth}.`,
      },
      {
        question: 'What is a QR code rewards program?',
        answer:
          `The same thing as a QR code loyalty program: customers scan one code and collect stamps toward a reward. With Scan Perks that is a counter QR and the free Scan Perks app, from ${phrases.en.starterPerMonth}, with no POS.`,
      },
    ],
    supportingPosts: ['how-to-choose-qr-loyalty-program-cafe'],
    localMarkets: ['Cafes', 'Bars', 'Restaurants'],
  },
  {
    slug: 'coffee-loyalty-app',
    title: 'Coffee Loyalty App for Shops & Customers',
    metaTitle: `Coffee Loyalty App for Cafe Owners — ${phrases.en.starterPerMo} Free Trial`,
    description:
      `Coffee loyalty app for independent cafe owners, not a chain rewards account. Counter QR stamp card, no POS. ${phrases.en.trial}, then ${phrases.en.starterPerMo}.`,
    primaryKeyword: 'coffee loyalty app',
    heroSeoLine:
      `The coffee loyalty app on iPhone and Android — customers scan, earn stamps, get free drinks. Cafes go live from ${phrases.en.starterPerMonth}.`,
    quickAnswer:
      `Scan Perks is a coffee loyalty app for iPhone and Android. Customers scan a cafe QR to earn stamp rewards toward free drinks. Coffee shop owners run the program from app.scan-perks.com at ${phrases.en.starterPerMonth} (${phrases.en.scans}) after a ${phrases.en.trial} — no POS, setup in about 5 minutes. It is not Starbucks Rewards; it is the app your local cafe can launch today.`,
    keywordCluster: [
      'coffee loyalty app',
      'coffee shop loyalty app',
      'loyalty app for coffee shop',
      'coffee loyalty',
      'coffee rewards app',
    ],
    highlights: ['iPhone + Android', 'Free for customers', `${phrases.en.starterPerMo} for cafes`, '5-min setup'],
    featureBullets: [
      'Coffee loyalty app on the App Store and Google Play',
      'Customers join by scanning the counter QR',
      'Stamp rewards (buy 9, get 1 free)',
      'Owners see visits and send push offers',
      'Works in the US, UK, Canada, and worldwide',
      `${phrases.en.trial} for the cafe — app is free for guests`,
    ],
    sections: [
      {
        heading: 'Coffee Loyalty App for Customers (iPhone & Android)',
        body: 'Searchers asking “what’s the best coffee rewards program on iPhone or Android” usually mean a phone app that stores stamps. Scan Perks is that app at independent cafes: scan once, keep a digital card, redeem a free drink when you hit the threshold. Download it free from the App Store or Google Play.',
      },
      {
        heading: 'Coffee Loyalty App for Coffee Shop Owners',
        body: `If you own the shop, Scan Perks is the coffee loyalty app you run — not a chain program. Print a QR, set stamp rules, and watch regulars come back. Starter is ${phrases.en.starterPerMonth}.`,
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
      { feature: 'Owner cost', scanPerks: phrases.en.starterPerMo, traditional: 'Printing', enterprise: '$200+/mo' },
      { feature: 'Guest cost', scanPerks: 'Free', traditional: 'Free', enterprise: 'Free' },
    ],
    faqs: [
      {
        question: "What's the best coffee rewards program available on mobile for iPhone or Android?",
        answer:
          `For local cafes: Scan Perks — iPhone and Android coffee loyalty app, QR stamps, free for customers. For national chains: Starbucks Rewards. Owners start at app.scan-perks.com for ${phrases.en.starterPerMonth}.`,
      },
      {
        question: 'Is there a coffee loyalty app that is not Starbucks?',
        answer:
          `Yes. Scan Perks is a coffee loyalty app for independent shops. Customers earn stamps at the cafe they visit. The app is free for guests; the cafe pays ${phrases.en.starterPerMonth} after a ${phrases.en.trialShort}.`,
      },
      {
        question: 'How much does a coffee loyalty app cost?',
        answer:
          `Free for customers. For coffee shop owners: ${phrases.en.starterPerMonth} Starter or ${phrases.en.growthPerMonth} Growth. ${phrases.en.trial}, no annual contract.`,
      },
    ],
    supportingPosts: ['best-mobile-loyalty-apps-coffee-shops-2026', 'best-coffee-loyalty-programs'],
    localMarkets: ['US coffee shops', 'UK cafes', 'Canadian cafes'],
  },
  {
    slug: 'coffee-shop-loyalty-app',
    title: 'Coffee Shop Loyalty App for Owners & Regulars',
    metaTitle: `Coffee Shop Loyalty App — ${phrases.en.starterPerMo}, ${phrases.en.trialCap}`,
    description:
      `Coffee shop loyalty app for owners: counter QR, stamp rewards, no POS. Guests scan in the free Scan Perks app. ${phrases.en.trial}, then ${phrases.en.starterPerMo}.`,
    primaryKeyword: 'coffee shop loyalty app',
    heroSeoLine:
      'A coffee shop loyalty app that regulars actually use — scan at the counter, stamps on the phone, free drink when the card fills.',
    quickAnswer:
      `A coffee shop loyalty app lets regulars collect stamps on their phone instead of a punch card. Scan Perks is that app: customers scan a counter QR on iPhone or Android; owners set “buy 9 get 1 free,” see visit data, and send slow-morning offers — ${phrases.en.starterPerMonth}, ${phrases.en.trial}, no POS.`,
    keywordCluster: [
      'coffee shop loyalty app',
      'loyalty app for coffee shop',
      'coffee shop loyalty reward app',
      'apps for coffee shop owners',
    ],
    highlights: ['Counter QR', 'iPhone + Android', 'Visit analytics', phrases.en.starterPerMonth],
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
        body: 'The line cannot wait. Scan Perks is a coffee shop loyalty app built for a 10-second scan: guest opens the Scan Perks app, taps Scan, stamp lands. No extra hardware on the counter.',
      },
      {
        heading: 'Apps for Coffee Shop Owners',
        body: `Owners searching “apps for coffee shop owners” need loyalty, not another POS. Scan Perks sits next to your existing till. You get member lists, visit frequency, and push offers from ${phrases.en.starterPerMonth}.`,
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
      { feature: 'Price', scanPerks: phrases.en.starterPerMo, traditional: 'Print', enterprise: '$200+/mo' },
    ],
    faqs: [
      {
        question: 'What is the best loyalty app for coffee shop owners?',
        answer:
          `Scan Perks — coffee shop loyalty app with QR stamps, iPhone/Android guest apps, and a ${phrases.en.starterPerMonth} owner plan. ${phrases.en.trial} at app.scan-perks.com.`,
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
