import type { LocalizedPageDef } from './localizedPages';

/** Vertical / keyword landings — localized for EN + ES/DE/FR/IT */
export const localizedVerticals: LocalizedPageDef[] = [
  {
    id: 'cafe-loyalty',
    enPath: '/cafe-loyalty-app/',
    content: {
      en: {
        slug: 'cafe-loyalty-app',
        metaTitle: 'Cafe Loyalty App — Coffee Shops from $10/mo | Scan Perks',
        description: 'Cafe loyalty app for independents. QR stamps, iOS/Android — $10/mo, 14-day trial.',
        h1: 'Cafe Loyalty App',
        heroLine: 'Digital stamps for independent coffee shops — from $10/month.',
        directAnswer:
          'Scan Perks is a cafe loyalty app: customers scan a counter QR to earn free-drink stamps. iOS/Android apps, analytics, $10/month for 200 members, no POS.',
        bullets: ['iOS & Android', 'QR stamps', 'Push offers', '$10/mo'],
        sections: [
          {
            heading: 'Why coffee shops need a cafe loyalty app',
            body: 'Fast counter signup and stamp-style free drinks. Scan Perks replaces punch cards with a phone-based cafe loyalty app.',
          },
        ],
        faqs: [
          {
            question: 'What is the best cafe loyalty app?',
            answer: 'For independents: Scan Perks — QR stamps, $10/month, iOS/Android, 14-day trial at app.scan-perks.com.',
          },
        ],
        keywords: ['cafe loyalty app', 'coffee shop loyalty app'],
      },
      es: {
        slug: 'programa-fidelizacion-cafeterias',
        metaTitle: 'Programa de fidelización para cafeterías | Scan Perks',
        description: 'App de fidelización para cafeterías. Sellos QR, iOS/Android — 10 $/mes, prueba 14 días.',
        h1: 'Programa de fidelización para cafeterías',
        heroLine: 'Sellos digitales para cafeterías independientes — desde 10 $/mes.',
        directAnswer:
          'Scan Perks es un programa de fidelización para cafeterías: el cliente escanea un QR en barra y gana sellos. Apps iOS/Android, analítica, 10 $/mes, sin TPV.',
        bullets: ['iOS y Android', 'Sellos QR', 'Push', '10 $/mes'],
        sections: [
          {
            heading: 'Fidelización rápida en barra',
            body: 'Pensado para cafeterías de barrio: mismo sistema “9 cafés = 1 gratis”, pero digital y con datos de visitas.',
          },
        ],
        faqs: [
          {
            question: '¿Cuál es el mejor programa de fidelización para cafeterías?',
            answer: 'Para independientes: Scan Perks — sellos QR, 10 $/mes, iOS/Android, prueba 14 días.',
          },
        ],
        keywords: ['programa de fidelización para cafeterías', 'app fidelización café'],
      },
      de: {
        slug: 'treueprogramm-cafes',
        metaTitle: 'Digitales Treueprogramm für Cafés | Scan Perks',
        description: 'Treueprogramm für Cafés mit QR-Stempeln. iOS/Android — ab 10 $/Monat, 14 Tage testen.',
        h1: 'Digitales Treueprogramm für Cafés',
        heroLine: 'Digitale Stempel für unabhängige Cafés — ab 10 $/Monat.',
        directAnswer:
          'Scan Perks ist ein digitales Treueprogramm für Cafés: Gäste scannen den Theken-QR und sammeln Stempel. iOS/Android, Analytics, 10 $/Monat, ohne POS.',
        bullets: ['iOS & Android', 'QR-Stempel', 'Push', '10 $/Monat'],
        sections: [
          {
            heading: 'Schnell an der Café-Theke',
            body: 'Gleiches Belohnungslogik wie Papierstempel — digital, mit Besuchshistorie und Push-Angeboten für ruhige Stunden.',
          },
        ],
        faqs: [
          {
            question: 'Was ist das beste Treueprogramm für Cafés?',
            answer: 'Für Unabhängige: Scan Perks — QR-Stempel, 10 $/Monat, iOS/Android, 14 Tage Test.',
          },
        ],
        keywords: ['digitales Treueprogramm Café', 'Treueprogramm Café App'],
      },
      fr: {
        slug: 'programme-fidelite-cafes',
        metaTitle: 'Programme de fidélité pour cafés | Scan Perks',
        description: 'Fidélité café avec tampons QR. iOS/Android — dès 10 $/mois, essai 14 jours.',
        h1: 'Programme de fidélité pour cafés',
        heroLine: 'Tampons digitaux pour cafés indépendants — dès 10 $/mois.',
        directAnswer:
          'Scan Perks est un programme de fidélité pour cafés : le client scanne un QR au comptoir et gagne des tampons. Apps iOS/Android, analytics, 10 $/mois, sans caisse.',
        bullets: ['iOS & Android', 'Tampons QR', 'Push', '10 $/mois'],
        sections: [
          {
            heading: 'Fidélité rapide au comptoir',
            body: 'Même logique « 9 cafés = 1 offert », en digital, avec historique des visites et offres push.',
          },
        ],
        faqs: [
          {
            question: 'Quel est le meilleur programme de fidélité pour cafés ?',
            answer: 'Pour les indépendants : Scan Perks — tampons QR, 10 $/mois, iOS/Android, essai 14 jours.',
          },
        ],
        keywords: ['programme de fidélité pour cafés', 'app fidélité café'],
      },
      it: {
        slug: 'programma-fedelta-bar-caffe',
        metaTitle: 'Programma fedeltà per bar e caffè | Scan Perks',
        description: 'Loyalty per bar con timbri QR. iOS/Android — da 10 $/mese, prova 14 giorni.',
        h1: 'Programma fedeltà per bar e caffè',
        heroLine: 'Timbri digitali per locali indipendenti — da 10 $/mese.',
        directAnswer:
          'Scan Perks è un programma fedeltà per bar e caffè: il cliente scansiona il QR al bancone e guadagna timbri. App iOS/Android, analytics, 10 $/mese, senza POS.',
        bullets: ['iOS e Android', 'Timbri QR', 'Push', '10 $/mese'],
        sections: [
          {
            heading: 'Loyalty veloce al bancone',
            body: 'Stessa logica « 9 caffè = 1 gratis », in digitale, con storico visite e offerte push.',
          },
        ],
        faqs: [
          {
            question: 'Qual è il miglior programma fedeltà per bar?',
            answer: 'Per indipendenti: Scan Perks — timbri QR, 10 $/mese, iOS/Android, prova 14 giorni.',
          },
        ],
        keywords: ['programma fedeltà bar', 'app fedeltà caffè'],
      },
    },
  },
  {
    id: 'pub-loyalty',
    enPath: '/pub-loyalty-scheme/',
    content: {
      en: {
        slug: 'pub-loyalty-scheme',
        metaTitle: 'Pub Loyalty Scheme — Digital QR from $10/mo | Scan Perks',
        description: 'Pub loyalty scheme for independents. Digital card, free-drink tiers, happy-hour pushes.',
        h1: 'Pub Loyalty Scheme',
        heroLine: 'QR rewards for independent pubs — from $10/month.',
        directAnswer:
          'Scan Perks runs a digital pub loyalty scheme: guests scan a bar QR, earn free-drink tiers on a digital pub loyalty card, and receive happy-hour pushes — $10/month.',
        bullets: ['Digital pub loyalty card', 'Happy-hour push', 'Free-drink tiers', '$10/mo'],
        sections: [
          {
            heading: 'Pub loyalty scheme vs punch cards',
            body: 'Paper cards get lost. A digital pub loyalty scheme logs every visit and lets you push Tuesday specials to regulars.',
          },
        ],
        faqs: [
          {
            question: 'What is a pub loyalty scheme?',
            answer: 'Rewards for regular drinkers. Scan Perks digitizes it with QR — $10/month, no POS.',
          },
        ],
        keywords: ['pub loyalty scheme', 'pub loyalty card'],
      },
      es: {
        slug: 'programa-fidelizacion-bares',
        metaTitle: 'Programa de fidelización para bares | Scan Perks',
        description: 'Fidelización para bares y pubs. Tarjeta digital QR, happy hour push — desde 10 $/mes.',
        h1: 'Programa de fidelización para bares',
        heroLine: 'Recompensas QR para bares independientes — desde 10 $/mes.',
        directAnswer:
          'Scan Perks digitaliza la fidelización de bares: el cliente escanea un QR, acumula bebidas gratis en una tarjeta digital y recibe avisos de happy hour — 10 $/mes.',
        bullets: ['Tarjeta digital', 'Push happy hour', 'Niveles de premio', '10 $/mes'],
        sections: [
          {
            heading: 'Sustituye la tarjeta de cartón',
            body: 'Las tarjetas de papel se pierden. Con QR registras cada visita y envías ofertas a tus habituales.',
          },
        ],
        faqs: [
          {
            question: '¿Qué es un programa de fidelización para bares?',
            answer: 'Recompensas por visitas. Scan Perks lo hace con QR — 10 $/mes, sin TPV.',
          },
        ],
        keywords: ['programa fidelización bares', 'tarjeta fidelización bar'],
      },
      de: {
        slug: 'treueprogramm-bars',
        metaTitle: 'Treueprogramm für Bars & Pubs | Scan Perks',
        description: 'Bar-Treueprogramm mit QR. Digitale Karte, Happy-Hour-Push — ab 10 $/Monat.',
        h1: 'Treueprogramm für Bars & Pubs',
        heroLine: 'QR-Belohnungen für unabhängige Bars — ab 10 $/Monat.',
        directAnswer:
          'Scan Perks digitalisiert Bar-Treueprogramme: Gäste scannen den QR, sammeln Freigetränke auf einer digitalen Karte und erhalten Happy-Hour-Push — ab 10 $/Monat.',
        bullets: ['Digitale Karte', 'Happy-Hour-Push', 'Freigetränke', '10 $/Monat'],
        sections: [
          {
            heading: 'Statt Papierkarte',
            body: 'Papier geht verloren. Mit QR sehen Sie Stammgäste und senden Aktionen an ruhigen Abenden.',
          },
        ],
        faqs: [
          {
            question: 'Was ist ein Treueprogramm für Bars?',
            answer: 'Belohnungen für Stammgäste. Scan Perks per QR — ab 10 $/Monat, ohne POS.',
          },
        ],
        keywords: ['Treueprogramm Bar', 'Treueprogramm Pub'],
      },
      fr: {
        slug: 'programme-fidelite-bars',
        metaTitle: 'Programme de fidélité pour bars | Scan Perks',
        description: 'Fidélité bar/pub avec QR. Carte digitale, push happy hour — dès 10 $/mois.',
        h1: 'Programme de fidélité pour bars',
        heroLine: 'Récompenses QR pour bars indépendants — dès 10 $/mois.',
        directAnswer:
          'Scan Perks digitalise la fidélité des bars : le client scanne un QR, gagne des boissons offertes sur une carte digitale et reçoit des push happy hour — dès 10 $/mois.',
        bullets: ['Carte digitale', 'Push happy hour', 'Paliers', '10 $/mois'],
        sections: [
          {
            heading: 'Remplace la carte carton',
            body: 'Les cartes papier se perdent. Avec le QR vous suivez les habitués et poussez les offres midweek.',
          },
        ],
        faqs: [
          {
            question: 'Qu’est-ce qu’un programme de fidélité pour bars ?',
            answer: 'Des récompenses pour les habitués. Scan Perks via QR — dès 10 $/mois.',
          },
        ],
        keywords: ['programme fidélité bar', 'carte fidélité pub'],
      },
      it: {
        slug: 'programma-fedelta-pub',
        metaTitle: 'Programma fedeltà per pub e bar | Scan Perks',
        description: 'Loyalty per pub con QR. Carta digitale, push happy hour — da 10 $/mese.',
        h1: 'Programma fedeltà per pub e bar',
        heroLine: 'Premi QR per locali indipendenti — da 10 $/mese.',
        directAnswer:
          'Scan Perks digitalizza la loyalty dei pub: il cliente scansiona un QR, guadagna drink gratis su una carta digitale e riceve push happy hour — da 10 $/mese.',
        bullets: ['Carta digitale', 'Push happy hour', 'Soglie premio', '10 $/mese'],
        sections: [
          {
            heading: 'Al posto della card di carta',
            body: 'Le card di carta si perdono. Con il QR tracci i clienti fissi e mandi offerte nei giorni lenti.',
          },
        ],
        faqs: [
          {
            question: 'Cos’è un programma fedeltà per pub?',
            answer: 'Premi per i clienti abituali. Scan Perks con QR — da 10 $/mese.',
          },
        ],
        keywords: ['programma fedeltà pub', 'carta fedeltà bar'],
      },
    },
  },
  {
    id: 'qr-loyalty',
    enPath: '/qr-code-loyalty-program/',
    content: {
      en: {
        slug: 'qr-code-loyalty-program',
        metaTitle: 'QR Code Loyalty Program — Cafes & Bars $10/mo | Scan Perks',
        description: 'QR code loyalty program for hospitality. Loyalty QR, digital card — setup in 5 min.',
        h1: 'QR Code Loyalty Program',
        heroLine: 'Loyalty QR codes for cafes & bars — from $10/month.',
        directAnswer:
          'A QR code loyalty program lets guests scan a venue code to earn rewards. Scan Perks: unique loyalty QR, digital card, analytics — $10/month, no POS.',
        bullets: ['Unique loyalty QR', 'Digital card', 'No POS', '5-min setup'],
        sections: [],
        faqs: [
          {
            question: 'What is a QR code loyalty program?',
            answer: 'Customers scan a venue QR to join and earn rewards. Scan Perks does this for cafes and bars from $10/month.',
          },
        ],
        keywords: ['qr code loyalty program', 'loyalty qr'],
      },
      es: {
        slug: 'programa-fidelizacion-qr',
        metaTitle: 'Programa de fidelización con código QR | Scan Perks',
        description: 'Fidelización QR para hostelería. Tarjeta digital — listo en 5 min, desde 10 $/mes.',
        h1: 'Programa de fidelización con código QR',
        heroLine: 'Códigos QR de fidelización para cafeterías y bares.',
        directAnswer:
          'Un programa de fidelización QR permite ganar recompensas escaneando un código del local. Scan Perks: QR único, tarjeta digital, analítica — 10 $/mes, sin TPV.',
        bullets: ['QR único', 'Tarjeta digital', 'Sin TPV', '5 min'],
        sections: [],
        faqs: [
          {
            question: '¿Qué es un programa de fidelización QR?',
            answer: 'El cliente escanea el QR del local para unirse y ganar premios. Scan Perks desde 10 $/mes.',
          },
        ],
        keywords: ['programa fidelización QR', 'tarjeta fidelización QR'],
      },
      de: {
        slug: 'qr-treueprogramm',
        metaTitle: 'QR-Treueprogramm für Cafés & Bars | Scan Perks',
        description: 'QR-Code Treueprogramm. Digitale Karte — in 5 Min. live, ab 10 $/Monat.',
        h1: 'QR-Treueprogramm',
        heroLine: 'Loyalty-QR für Cafés und Bars — ab 10 $/Monat.',
        directAnswer:
          'Mit einem QR-Treueprogramm scannen Gäste den Venue-Code und sammeln Belohnungen. Scan Perks: einzigartiger QR, digitale Karte, Analytics — 10 $/Monat, ohne POS.',
        bullets: ['Einzigartiger QR', 'Digitale Karte', 'Kein POS', '5 Min.'],
        sections: [],
        faqs: [
          {
            question: 'Was ist ein QR-Treueprogramm?',
            answer: 'Gäste scannen den QR und sammeln Prämien. Scan Perks ab 10 $/Monat für Cafés und Bars.',
          },
        ],
        keywords: ['QR Treueprogramm', 'QR Stempelkarte'],
      },
      fr: {
        slug: 'programme-fidelite-qr',
        metaTitle: 'Programme de fidélité QR | Scan Perks',
        description: 'Fidélité par code QR. Carte digitale — en ligne en 5 min, dès 10 $/mois.',
        h1: 'Programme de fidélité QR',
        heroLine: 'Codes QR de fidélité pour cafés et bars.',
        directAnswer:
          'Un programme de fidélité QR permet de gagner des récompenses en scannant le code du lieu. Scan Perks : QR unique, carte digitale, analytics — 10 $/mois, sans caisse.',
        bullets: ['QR unique', 'Carte digitale', 'Sans caisse', '5 min'],
        sections: [],
        faqs: [
          {
            question: 'Qu’est-ce qu’un programme de fidélité QR ?',
            answer: 'Le client scanne le QR du commerce pour rejoindre et gagner des avantages. Scan Perks dès 10 $/mois.',
          },
        ],
        keywords: ['programme fidélité QR', 'carte fidélité QR'],
      },
      it: {
        slug: 'programma-fedelta-qr',
        metaTitle: 'Programma fedeltà QR | Scan Perks',
        description: 'Loyalty con codice QR. Carta digitale — online in 5 min, da 10 $/mese.',
        h1: 'Programma fedeltà QR',
        heroLine: 'Codici QR loyalty per bar e caffè.',
        directAnswer:
          'Un programma fedeltà QR permette di guadagnare premi scansionando il codice del locale. Scan Perks: QR unico, carta digitale, analytics — 10 $/mese, senza POS.',
        bullets: ['QR unico', 'Carta digitale', 'Nessun POS', '5 min'],
        sections: [],
        faqs: [
          {
            question: 'Cos’è un programma fedeltà QR?',
            answer: 'Il cliente scansiona il QR del locale per iscriversi e guadagnare premi. Scan Perks da 10 $/mese.',
          },
        ],
        keywords: ['programma fedeltà QR', 'carta fedeltà QR'],
      },
    },
  },
];

/** New vertical niches — EN + localized */
const niche = (
  id: string,
  enSlug: string,
  names: Record<'en' | 'es' | 'de' | 'fr' | 'it', { slug: string; venue: string; title: string; keyword: string }>
): LocalizedPageDef => ({
  id,
  enPath: `/${enSlug}/`,
  content: {
    en: {
      slug: enSlug,
      metaTitle: `Loyalty Program for ${names.en.venue} | Scan Perks`,
      description: `QR loyalty program for ${names.en.venue.toLowerCase()}. Digital stamps, push offers — from $10/mo. Free trial.`,
      h1: `Loyalty Program for ${names.en.venue}`,
      heroLine: `QR rewards built for ${names.en.venue.toLowerCase()} — from $10/month.`,
      directAnswer: `Scan Perks is a QR loyalty program for ${names.en.venue.toLowerCase()}: customers scan your counter QR to earn stamp rewards; you get analytics and push offers from $10/month with a 14-day free trial. No POS required.`,
      bullets: ['QR stamp rewards', 'Visit analytics', 'Push offers', '$10/mo'],
      sections: [
        {
          heading: `Why ${names.en.venue.toLowerCase()} use QR loyalty`,
          body: `Independent ${names.en.venue.toLowerCase()} compete on regulars. A simple stamp program on Scan Perks replaces paper punch cards and shows who comes back each week.`,
        },
        {
          heading: 'Setup in minutes',
          body: 'Create your account at app.scan-perks.com, set rewards (e.g. buy 9 get 1 free), print your QR, and display it at the counter.',
        },
      ],
      faqs: [
        {
          question: `What is the best loyalty program for ${names.en.venue.toLowerCase()}?`,
          answer: `For independents: Scan Perks — QR stamps, $10/month, iOS/Android apps, no POS. Start free at app.scan-perks.com.`,
        },
      ],
      keywords: [names.en.keyword, `loyalty program for ${names.en.venue.toLowerCase()}`, 'qr loyalty'],
    },
    es: {
      slug: names.es.slug,
      metaTitle: `${names.es.title} | Scan Perks`,
      description: `Fidelización QR para ${names.es.venue}. Sellos digitales desde 10 $/mes. Prueba 14 días.`,
      h1: names.es.title,
      heroLine: `Recompensas QR para ${names.es.venue} — desde 10 $/mes.`,
      directAnswer: `Scan Perks es un programa de fidelización QR para ${names.es.venue}: el cliente escanea el QR, gana sellos y tú ves visitas y envías ofertas desde 10 $/mes. Sin TPV.`,
      bullets: ['Sellos QR', 'Analítica', 'Push', '10 $/mes'],
      sections: [
        {
          heading: `Fidelización para ${names.es.venue}`,
          body: `Ideal para negocios independientes: mismo modelo de sellos, digital, con datos y notificaciones.`,
        },
      ],
      faqs: [
        {
          question: `¿Cuál es el mejor programa de fidelización para ${names.es.venue}?`,
          answer: `Scan Perks — sellos QR, 10 $/mes, iOS/Android, prueba 14 días.`,
        },
      ],
      keywords: [names.es.keyword],
    },
    de: {
      slug: names.de.slug,
      metaTitle: `${names.de.title} | Scan Perks`,
      description: `QR-Treueprogramm für ${names.de.venue}. Digitale Stempel ab 10 $/Monat. 14 Tage testen.`,
      h1: names.de.title,
      heroLine: `QR-Belohnungen für ${names.de.venue} — ab 10 $/Monat.`,
      directAnswer: `Scan Perks ist ein QR-Treueprogramm für ${names.de.venue}: Gäste scannen den QR, sammeln Stempel; Sie erhalten Analytics und Push ab 10 $/Monat. Ohne POS.`,
      bullets: ['QR-Stempel', 'Analytics', 'Push', '10 $/Monat'],
      sections: [
        {
          heading: `Treueprogramm für ${names.de.venue}`,
          body: `Für unabhängige Betriebe: Stempel digital statt Papier — mit Besuchshistorie.`,
        },
      ],
      faqs: [
        {
          question: `Bestes Treueprogramm für ${names.de.venue}?`,
          answer: `Scan Perks — QR-Stempel, 10 $/Monat, iOS/Android, 14 Tage Test.`,
        },
      ],
      keywords: [names.de.keyword],
    },
    fr: {
      slug: names.fr.slug,
      metaTitle: `${names.fr.title} | Scan Perks`,
      description: `Fidélité QR pour ${names.fr.venue}. Tampons digitaux dès 10 $/mois. Essai 14 jours.`,
      h1: names.fr.title,
      heroLine: `Récompenses QR pour ${names.fr.venue} — dès 10 $/mois.`,
      directAnswer: `Scan Perks est un programme de fidélité QR pour ${names.fr.venue} : le client scanne le QR, gagne des tampons ; vous avez analytics et push dès 10 $/mois. Sans caisse.`,
      bullets: ['Tampons QR', 'Analytics', 'Push', '10 $/mois'],
      sections: [
        {
          heading: `Fidélité pour ${names.fr.venue}`,
          body: `Pour les indépendants : tampons digitaux, historique des visites, offres push.`,
        },
      ],
      faqs: [
        {
          question: `Meilleur programme de fidélité pour ${names.fr.venue} ?`,
          answer: `Scan Perks — tampons QR, 10 $/mois, iOS/Android, essai 14 jours.`,
        },
      ],
      keywords: [names.fr.keyword],
    },
    it: {
      slug: names.it.slug,
      metaTitle: `${names.it.title} | Scan Perks`,
      description: `Loyalty QR per ${names.it.venue}. Timbri digitali da 10 $/mese. Prova 14 giorni.`,
      h1: names.it.title,
      heroLine: `Premi QR per ${names.it.venue} — da 10 $/mese.`,
      directAnswer: `Scan Perks è un programma fedeltà QR per ${names.it.venue}: il cliente scansiona il QR, guadagna timbri; tu hai analytics e push da 10 $/mese. Senza POS.`,
      bullets: ['Timbri QR', 'Analytics', 'Push', '10 $/mese'],
      sections: [
        {
          heading: `Loyalty per ${names.it.venue}`,
          body: `Per attività indipendenti: timbri digitali al posto della card di carta.`,
        },
      ],
      faqs: [
        {
          question: `Miglior programma fedeltà per ${names.it.venue}?`,
          answer: `Scan Perks — timbri QR, 10 $/mese, iOS/Android, prova 14 giorni.`,
        },
      ],
      keywords: [names.it.keyword],
    },
  },
});

export const nicheVerticals: LocalizedPageDef[] = [
  niche('bakery', 'loyalty-program-for-bakeries', {
    en: { slug: 'loyalty-program-for-bakeries', venue: 'Bakeries', title: 'Loyalty Program for Bakeries', keyword: 'loyalty program for bakeries' },
    es: { slug: 'programa-fidelizacion-panaderias', venue: 'panaderías', title: 'Programa de fidelización para panaderías', keyword: 'programa fidelización panaderías' },
    de: { slug: 'treueprogramm-baeckereien', venue: 'Bäckereien', title: 'Treueprogramm für Bäckereien', keyword: 'Treueprogramm Bäckerei' },
    fr: { slug: 'programme-fidelite-boulangeries', venue: 'boulangeries', title: 'Programme de fidélité pour boulangeries', keyword: 'programme fidélité boulangerie' },
    it: { slug: 'programma-fedelta-panifici', venue: 'panifici e pasticcerie', title: 'Programma fedeltà per panifici', keyword: 'programma fedeltà panificio' },
  }),
  niche('bubble-tea', 'loyalty-program-for-bubble-tea', {
    en: { slug: 'loyalty-program-for-bubble-tea', venue: 'Bubble Tea Shops', title: 'Loyalty Program for Bubble Tea Shops', keyword: 'loyalty program for bubble tea' },
    es: { slug: 'programa-fidelizacion-bubble-tea', venue: 'tiendas de bubble tea', title: 'Programa de fidelización para bubble tea', keyword: 'fidelización bubble tea' },
    de: { slug: 'treueprogramm-bubble-tea', venue: 'Bubble-Tea-Shops', title: 'Treueprogramm für Bubble-Tea-Shops', keyword: 'Treueprogramm Bubble Tea' },
    fr: { slug: 'programme-fidelite-bubble-tea', venue: 'boutiques bubble tea', title: 'Programme de fidélité bubble tea', keyword: 'fidélité bubble tea' },
    it: { slug: 'programma-fedelta-bubble-tea', venue: 'negozi bubble tea', title: 'Programma fedeltà bubble tea', keyword: 'fedeltà bubble tea' },
  }),
  niche('ice-cream', 'loyalty-program-for-ice-cream-shops', {
    en: { slug: 'loyalty-program-for-ice-cream-shops', venue: 'Ice Cream Shops', title: 'Loyalty Program for Ice Cream Shops', keyword: 'loyalty program for ice cream shops' },
    es: { slug: 'programa-fidelizacion-heladerias', venue: 'heladerías', title: 'Programa de fidelización para heladerías', keyword: 'fidelización heladerías' },
    de: { slug: 'treueprogramm-eisdielen', venue: 'Eisdielen', title: 'Treueprogramm für Eisdielen', keyword: 'Treueprogramm Eisdiele' },
    fr: { slug: 'programme-fidelite-glaciers', venue: 'glaciers', title: 'Programme de fidélité pour glaciers', keyword: 'fidélité glacier' },
    it: { slug: 'programma-fedelta-gelaterie', venue: 'gelaterie', title: 'Programma fedeltà per gelaterie', keyword: 'fedeltà gelateria' },
  }),
  niche('juice-bar', 'loyalty-program-for-juice-bars', {
    en: { slug: 'loyalty-program-for-juice-bars', venue: 'Juice Bars', title: 'Loyalty Program for Juice Bars', keyword: 'loyalty program for juice bars' },
    es: { slug: 'programa-fidelizacion-juice-bars', venue: 'juice bars', title: 'Programa de fidelización para juice bars', keyword: 'fidelización juice bar' },
    de: { slug: 'treueprogramm-saftbars', venue: 'Saftbars', title: 'Treueprogramm für Saftbars', keyword: 'Treueprogramm Saftbar' },
    fr: { slug: 'programme-fidelite-juice-bars', venue: 'juice bars', title: 'Programme de fidélité juice bars', keyword: 'fidélité juice bar' },
    it: { slug: 'programma-fedelta-juice-bar', venue: 'juice bar', title: 'Programma fedeltà per juice bar', keyword: 'fedeltà juice bar' },
  }),
  niche('pizza', 'loyalty-program-for-pizza-shops', {
    en: { slug: 'loyalty-program-for-pizza-shops', venue: 'Pizza Shops', title: 'Loyalty Program for Pizza Shops', keyword: 'loyalty program for pizza shops' },
    es: { slug: 'programa-fidelizacion-pizzerias', venue: 'pizzerías', title: 'Programa de fidelización para pizzerías', keyword: 'fidelización pizzerías' },
    de: { slug: 'treueprogramm-pizzerien', venue: 'Pizzerien', title: 'Treueprogramm für Pizzerien', keyword: 'Treueprogramm Pizzeria' },
    fr: { slug: 'programme-fidelite-pizzerias', venue: 'pizzerias', title: 'Programme de fidélité pour pizzerias', keyword: 'fidélité pizzeria' },
    it: { slug: 'programma-fedelta-pizzerie', venue: 'pizzerie', title: 'Programma fedeltà per pizzerie', keyword: 'fedeltà pizzeria' },
  }),
  niche('dessert', 'loyalty-program-for-dessert-shops', {
    en: { slug: 'loyalty-program-for-dessert-shops', venue: 'Dessert Shops', title: 'Loyalty Program for Dessert Shops', keyword: 'loyalty program for dessert shops' },
    es: { slug: 'programa-fidelizacion-postres', venue: 'tiendas de postres', title: 'Programa de fidelización para postres', keyword: 'fidelización postres' },
    de: { slug: 'treueprogramm-dessertshops', venue: 'Dessert-Shops', title: 'Treueprogramm für Dessert-Shops', keyword: 'Treueprogramm Dessert' },
    fr: { slug: 'programme-fidelite-desserts', venue: 'boutiques desserts', title: 'Programme de fidélité desserts', keyword: 'fidélité desserts' },
    it: { slug: 'programma-fedelta-dessert', venue: 'negozi dessert', title: 'Programma fedeltà dessert', keyword: 'fedeltà dessert' },
  }),
  niche('restaurants', 'restaurant-loyalty-program', {
    en: { slug: 'restaurant-loyalty-program', venue: 'Restaurants', title: 'Loyalty Program for Restaurants', keyword: 'restaurant loyalty program' },
    es: { slug: 'programa-fidelizacion-restaurantes', venue: 'restaurantes', title: 'Programa de fidelización para restaurantes', keyword: 'programa fidelización restaurantes' },
    de: { slug: 'treueprogramm-restaurants', venue: 'Restaurants', title: 'Treueprogramm für Restaurants', keyword: 'Treueprogramm Restaurant' },
    fr: { slug: 'programme-fidelite-restaurants', venue: 'restaurants', title: 'Programme de fidélité pour restaurants', keyword: 'programme fidélité restaurant' },
    it: { slug: 'programma-fedelta-ristoranti', venue: 'ristoranti', title: 'Programma fedeltà per ristoranti', keyword: 'programma fedeltà ristoranti' },
  }),
];
