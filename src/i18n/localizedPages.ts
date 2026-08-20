import type { Locale } from './config';
import { localePath } from './config';

export interface LocalizedFaq {
  question: string;
  answer: string;
}

export interface LocalizedPageContent {
  /** URL slug for this locale (no leading/trailing slash) */
  slug: string;
  metaTitle: string;
  description: string;
  h1: string;
  heroLine: string;
  directAnswer: string;
  bullets: string[];
  sections: { heading: string; body: string }[];
  faqs: LocalizedFaq[];
  keywords: string[];
}

export interface LocalizedPageDef {
  id: string;
  /** English root path when locale is en — maps to existing site URLs where possible */
  enPath: string;
  content: Record<Locale, LocalizedPageContent>;
}

function page(
  id: string,
  enPath: string,
  content: Record<Locale, LocalizedPageContent>
): LocalizedPageDef {
  return { id, enPath, content };
}

/** Core + vertical SEO pages — localized (not machine-mirrored titles) */
export const localizedPages: LocalizedPageDef[] = [
  page('home', '/', {
    en: {
      slug: '',
      metaTitle: 'Cafe Loyalty App for Coffee Shop Owners — QR Rewards $10/mo | Scan Perks',
      description:
        'Cafe loyalty app & pub loyalty for independent owners (US cafes, bars, pubs). QR stamps, iOS/Android, no POS — $10/mo, 14-day free trial.',
      h1: 'Cafe Loyalty App & Pub Loyalty Scheme',
      heroLine: 'QR loyalty for cafe & bar owners — from $10/month.',
      directAnswer:
        'Scan Perks is QR loyalty software for independent cafe, bar, and restaurant owners — not a chain consumer rewards app. Customers scan your venue QR to earn stamps; you manage programs at app.scan-perks.com from $10/month.',
      bullets: ['For venue owners', 'QR stamp rewards', 'iOS & Android', '$10/mo Starter'],
      sections: [],
      faqs: [],
      keywords: ['cafe loyalty app', 'pub loyalty scheme', 'qr code loyalty program'],
    },
    es: {
      slug: '',
      metaTitle: 'Programa de fidelización para cafeterías | Scan Perks',
      description:
        'Programa de fidelización QR para cafeterías, bares y restaurantes. Sellos digitales desde 10 $/mes. Prueba 14 días gratis.',
      h1: 'Programa de fidelización para cafeterías y bares',
      heroLine: 'Fidelización QR para cafeterías independientes — desde 10 $/mes.',
      directAnswer:
        'Scan Perks es un programa de fidelización QR para cafeterías, bares y restaurantes independientes. Los clientes escanean un código QR para ganar sellos; el local gestiona recompensas en app.scan-perks.com desde 10 $/mes, sin integrar el TPV.',
      bullets: ['Sellos digitales QR', 'Apps iOS y Android', 'Sin TPV obligatorio', 'Desde 10 $/mes'],
      sections: [
        {
          heading: 'Fidelización pensada para cafeterías',
          body: 'Un programa de fidelización para cafeterías debe ser rápido en barra. Con Scan Perks el cliente escanea el QR, acumula sellos (p. ej. 9 cafés = 1 gratis) y el dueño ve quiénes son los habituales.',
        },
        {
          heading: 'Más barato que el software enterprise',
          body: 'Las suites de fidelización cuestan a menudo 200 $/mes o más. Scan Perks cuesta 10–15 $/mes, con prueba de 14 días y sin contrato anual.',
        },
      ],
      faqs: [
        {
          question: '¿Qué es un programa de fidelización para cafeterías?',
          answer:
            'Es un sistema de recompensas por visitas (sellos, puntos o bebidas gratis). Scan Perks lo digitaliza con QR: 10 $/mes, apps iOS/Android, sin TPV.',
        },
      ],
      keywords: ['programa de fidelización para cafeterías', 'app fidelización café', 'tarjetas fidelización QR'],
    },
    de: {
      slug: '',
      metaTitle: 'Digitales Treueprogramm für Cafés in Deutschland | Scan Perks',
      description:
        'Digitales Treueprogramm für Cafés, Bars & Restaurants. QR-Stempel ab 10 $/Monat. 14 Tage kostenlos testen.',
      h1: 'Digitales Treueprogramm für Cafés & Bars',
      heroLine: 'QR-Treueprogramm für unabhängige Cafés — ab 10 $/Monat.',
      directAnswer:
        'Scan Perks ist ein digitales Treueprogramm für Cafés, Bars und Restaurants. Gäste scannen einen QR-Code und sammeln Stempel; Betreiber steuern Belohnungen unter app.scan-perks.com ab 10 $/Monat — ohne Kassensystem-Anbindung.',
      bullets: ['QR-Stempelkarten', 'iOS- & Android-Apps', 'Kein POS nötig', 'Ab 10 $/Monat'],
      sections: [
        {
          heading: 'Treueprogramm für Cafés — schnell an der Theke',
          body: 'Scan Perks ersetzt Papier-Stempelkarten: Gäste scannen den QR-Code, sammeln z. B. 9 Stempel für einen Gratis-Kaffee. Ideal für unabhängige Cafés in Deutschland, Österreich und der Schweiz.',
        },
        {
          heading: 'Günstiger als Enterprise-Loyalty',
          body: 'Enterprise-Lösungen kosten oft 200 $+ /Monat. Scan Perks startet bei 10 $/Monat, 14 Tage Test, monatlich kündbar.',
        },
      ],
      faqs: [
        {
          question: 'Was ist ein digitales Treueprogramm für Cafés?',
          answer:
            'Ein System, das Stammgäste mit Stempeln oder Gratisgetränken belohnt. Scan Perks digitalisiert das per QR — ab 10 $/Monat, ohne POS.',
        },
      ],
      keywords: ['digitales Treueprogramm Café', 'Treueprogramm Café', 'QR Stempelkarte Café'],
    },
    fr: {
      slug: '',
      metaTitle: 'Programme de fidélité numérique pour cafés | Scan Perks',
      description:
        'Programme de fidélité QR pour cafés, bars et restaurants. Tampons digitaux dès 10 $/mois. Essai 14 jours.',
      h1: 'Programme de fidélité numérique pour cafés',
      heroLine: 'Fidélité QR pour cafés indépendants — dès 10 $/mois.',
      directAnswer:
        'Scan Perks est un programme de fidélité QR pour cafés, bars et restaurants indépendants. Les clients scannent un QR pour gagner des tampons ; le commerçant gère les récompenses sur app.scan-perks.com dès 10 $/mois, sans intégration caisse.',
      bullets: ['Tampons QR', 'Apps iOS & Android', 'Sans caisse obligatoire', 'Dès 10 $/mois'],
      sections: [
        {
          heading: 'Fidélité café pensée pour le comptoir',
          body: 'Un programme de fidélité pour cafés doit être rapide. Avec Scan Perks, le client scanne, cumule des tampons (ex. 9 cafés = 1 offert) et le gérant voit ses habitués.',
        },
      ],
      faqs: [
        {
          question: 'Qu’est-ce qu’un programme de fidélité pour cafés ?',
          answer:
            'Un système de récompenses (tampons, points, boissons offertes). Scan Perks le digitalise via QR — dès 10 $/mois, apps iOS/Android.',
        },
      ],
      keywords: ['programme de fidélité numérique pour cafés', 'fidélité café QR', 'carte de fidélité café'],
    },
    it: {
      slug: '',
      metaTitle: 'Programma fedeltà digitale per bar e caffè | Scan Perks',
      description:
        'Programma loyalty QR per caffè, bar e ristoranti. Timbri digitali da 10 $/mese. Prova 14 giorni gratis.',
      h1: 'Programma fedeltà digitale per bar e caffè',
      heroLine: 'Loyalty QR per locali indipendenti — da 10 $/mese.',
      directAnswer:
        'Scan Perks è un programma fedeltà QR per caffè, bar e ristoranti indipendenti. I clienti scansionano un QR per guadagnare timbri; il locale gestisce i premi su app.scan-perks.com da 10 $/mese, senza collegare il POS.',
      bullets: ['Timbri QR', 'App iOS e Android', 'Nessun POS obbligatorio', 'Da 10 $/mese'],
      sections: [
        {
          heading: 'Loyalty pensata per il bancone',
          body: 'Il cliente scansiona il QR, accumula timbri (es. 9 caffè = 1 gratis) e il gestore vede i clienti abituali in dashboard.',
        },
      ],
      faqs: [
        {
          question: 'Cos’è un programma fedeltà per bar e caffè?',
          answer:
            'Un sistema di premi per le visite (timbri, punti, bevande gratis). Scan Perks lo digitalizza con QR — da 10 $/mese.',
        },
      ],
      keywords: ['programma fedeltà bar', 'programma fedeltà caffè', 'carta fedeltà QR'],
    },
  }),

  page('pricing', '/pricing/', {
    en: {
      slug: 'pricing',
      metaTitle: 'Cafe Loyalty App — $10/mo, 14-Day Free Trial | Scan Perks',
      description: 'Coffee shop & pub loyalty from $10/mo. QR rewards, push offers. No $200/mo contracts.',
      h1: 'Cafe & Pub Loyalty — From $10/Month',
      heroLine: 'One extra weekly regular covers your subscription.',
      directAnswer:
        'Scan Perks costs $10/month (Starter, 200 members) or $15/month (Growth, unlimited). 14-day free trial, no annual contract.',
      bullets: ['Starter $10/mo', 'Growth $15/mo', '14-day free trial', 'Cancel anytime'],
      sections: [],
      faqs: [
        {
          question: 'How much does cafe loyalty software cost?',
          answer: 'Scan Perks: $10/month Starter or $15/month Growth. Enterprise tools often cost $200+/month.',
        },
      ],
      keywords: ['cafe loyalty pricing', 'loyalty app cost'],
    },
    es: {
      slug: 'precios',
      metaTitle: 'Precios fidelización cafeterías — 10 $/mes | Scan Perks',
      description: 'Programa de fidelización desde 10 $/mes. Prueba 14 días. Sin contratos anuales.',
      h1: 'Precios simples para cafeterías y bares',
      heroLine: 'Un cliente habitual extra a la semana cubre la suscripción.',
      directAnswer:
        'Scan Perks cuesta 10 $/mes (Starter, 200 socios) o 15 $/mes (Growth, ilimitado). Prueba 14 días, sin contrato anual.',
      bullets: ['Starter 10 $/mes', 'Growth 15 $/mes', '14 días gratis', 'Cancela cuando quieras'],
      sections: [],
      faqs: [
        {
          question: '¿Cuánto cuesta un programa de fidelización para cafeterías?',
          answer: 'Scan Perks: 10 $/mes o 15 $/mes. El software enterprise suele superar los 200 $/mes.',
        },
      ],
      keywords: ['precio programa fidelización cafetería', 'app fidelización coste'],
    },
    de: {
      slug: 'preise',
      metaTitle: 'Treueprogramm Preise — ab 10 $/Monat | Scan Perks',
      description: 'Café-Treueprogramm ab 10 $/Monat. 14 Tage testen. Kein Jahresvertrag.',
      h1: 'Preise für Cafés & Bars',
      heroLine: 'Ein Extra-Stammgast pro Woche deckt das Abo.',
      directAnswer:
        'Scan Perks kostet 10 $/Monat (Starter, 200 Mitglieder) oder 15 $/Monat (Growth, unbegrenzt). 14 Tage Test, monatlich kündbar.',
      bullets: ['Starter 10 $', 'Growth 15 $', '14 Tage gratis', 'Jederzeit kündbar'],
      sections: [],
      faqs: [
        {
          question: 'Was kostet ein Treueprogramm für Cafés?',
          answer: 'Scan Perks: 10 oder 15 $/Monat. Enterprise-Lösungen oft 200 $+ /Monat.',
        },
      ],
      keywords: ['Treueprogramm Kosten Café', 'Loyalty Software Preis'],
    },
    fr: {
      slug: 'tarifs',
      metaTitle: 'Tarifs fidélité café — dès 10 $/mois | Scan Perks',
      description: 'Programme de fidélité dès 10 $/mois. Essai 14 jours. Sans engagement annuel.',
      h1: 'Tarifs pour cafés et bars',
      heroLine: 'Un habitué de plus par semaine couvre l’abonnement.',
      directAnswer:
        'Scan Perks coûte 10 $/mois (Starter, 200 membres) ou 15 $/mois (Growth, illimité). Essai 14 jours, sans contrat annuel.',
      bullets: ['Starter 10 $', 'Growth 15 $', '14 jours gratuits', 'Résiliable'],
      sections: [],
      faqs: [
        {
          question: 'Combien coûte un programme de fidélité pour cafés ?',
          answer: 'Scan Perks : 10 ou 15 $/mois. Les suites enterprise dépassent souvent 200 $/mois.',
        },
      ],
      keywords: ['prix programme fidélité café', 'coût logiciel fidélité'],
    },
    it: {
      slug: 'prezzi',
      metaTitle: 'Prezzi loyalty bar — da 10 $/mese | Scan Perks',
      description: 'Programma fedeltà da 10 $/mese. Prova 14 giorni. Nessun contratto annuale.',
      h1: 'Prezzi per bar e caffè',
      heroLine: 'Un cliente abituale in più a settimana copre l’abbonamento.',
      directAnswer:
        'Scan Perks costa 10 $/mese (Starter, 200 membri) o 15 $/mese (Growth, illimitato). Prova 14 giorni, senza vincoli annuali.',
      bullets: ['Starter 10 $', 'Growth 15 $', '14 giorni gratis', 'Disdici quando vuoi'],
      sections: [],
      faqs: [
        {
          question: 'Quanto costa un programma fedeltà per bar?',
          answer: 'Scan Perks: 10 o 15 $/mese. I software enterprise spesso superano i 200 $/mese.',
        },
      ],
      keywords: ['prezzo programma fedeltà bar', 'costo app loyalty'],
    },
  }),

  page('features', '/features/', {
    en: {
      slug: 'features',
      metaTitle: 'Cafe Loyalty App Features — $10/mo | Scan Perks',
      description: 'QR stamps, push offers, iOS/Android, analytics. Live in 5 min. 14-day free trial.',
      h1: 'Cafe Loyalty App & QR Loyalty Features',
      heroLine: 'Everything to launch QR loyalty without enterprise cost.',
      directAnswer:
        'Scan Perks includes QR loyalty, digital stamps, push notifications, analytics, and print-ready posters. No POS. Setup ~5 minutes.',
      bullets: ['QR loyalty', 'Push offers', 'Analytics', 'iOS & Android'],
      sections: [],
      faqs: [],
      keywords: ['cafe loyalty app features', 'qr loyalty features'],
    },
    es: {
      slug: 'funciones',
      metaTitle: 'Funciones app fidelización cafeterías | Scan Perks',
      description: 'Sellos QR, notificaciones, analítica, iOS/Android. Listo en 5 min. Prueba 14 días.',
      h1: 'Funciones de fidelización QR',
      heroLine: 'Todo para lanzar fidelización sin coste enterprise.',
      directAnswer:
        'Scan Perks incluye fidelización QR, sellos digitales, notificaciones push, analítica y carteles listos para imprimir. Sin TPV. Configuración ~5 minutos.',
      bullets: ['Fidelización QR', 'Push', 'Analítica', 'iOS y Android'],
      sections: [],
      faqs: [],
      keywords: ['funciones fidelización café', 'app sellos QR'],
    },
    de: {
      slug: 'funktionen',
      metaTitle: 'Funktionen Treueprogramm Café | Scan Perks',
      description: 'QR-Stempel, Push, Analytics, iOS/Android. In 5 Min. live. 14 Tage testen.',
      h1: 'Funktionen des QR-Treueprogramms',
      heroLine: 'Alles für Loyalty ohne Enterprise-Kosten.',
      directAnswer:
        'Scan Perks bietet QR-Loyalty, digitale Stempel, Push-Benachrichtigungen, Analytics und druckfertige Poster. Kein POS. Setup ~5 Minuten.',
      bullets: ['QR-Loyalty', 'Push', 'Analytics', 'iOS & Android'],
      sections: [],
      faqs: [],
      keywords: ['Treueprogramm Funktionen', 'QR Stempel App'],
    },
    fr: {
      slug: 'fonctionnalites',
      metaTitle: 'Fonctionnalités fidélité café | Scan Perks',
      description: 'Tampons QR, push, analytics, iOS/Android. En ligne en 5 min. Essai 14 jours.',
      h1: 'Fonctionnalités fidélité QR',
      heroLine: 'Tout pour lancer la fidélité sans coût enterprise.',
      directAnswer:
        'Scan Perks inclut fidélité QR, tampons digitaux, notifications push, analytics et affiches prêtes à imprimer. Sans caisse. Setup ~5 minutes.',
      bullets: ['Fidélité QR', 'Push', 'Analytics', 'iOS & Android'],
      sections: [],
      faqs: [],
      keywords: ['fonctionnalités fidélité café', 'app tampons QR'],
    },
    it: {
      slug: 'funzioni',
      metaTitle: 'Funzioni app loyalty bar | Scan Perks',
      description: 'Timbri QR, push, analytics, iOS/Android. Online in 5 min. Prova 14 giorni.',
      h1: 'Funzioni loyalty QR',
      heroLine: 'Tutto per lanciare la loyalty senza costi enterprise.',
      directAnswer:
        'Scan Perks include loyalty QR, timbri digitali, push, analytics e poster pronti da stampare. Nessun POS. Setup ~5 minuti.',
      bullets: ['Loyalty QR', 'Push', 'Analytics', 'iOS e Android'],
      sections: [],
      faqs: [],
      keywords: ['funzioni loyalty bar', 'app timbri QR'],
    },
  }),
];
