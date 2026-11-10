import type { Locale } from './config';
import { localePath } from './config';
import { phrases } from '../data/site-facts';

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
      metaTitle: `Scan Perks — QR Loyalty for Cafes & Pubs, ${phrases.en.starterPerMo}`,
      description:
        `Scan Perks is a QR stamp card for independent cafes, pubs and bars. Print one counter QR; customers scan it in the free app. No POS. ${phrases.en.trial}, then ${phrases.en.starterPerMo}.`,
      h1: 'Cafe Loyalty App & Pub Loyalty Scheme',
      heroLine: `QR loyalty for cafe & bar owners — from ${phrases.en.starterPerMonth}.`,
      directAnswer:
        `Scan Perks is QR loyalty software for independent cafe, bar, and restaurant owners — not a chain consumer rewards app. Customers scan your venue QR to earn stamps; you manage programs at app.scan-perks.com from ${phrases.en.starterPerMonth}.`,
      bullets: ['For venue owners', 'QR stamp rewards', 'iOS & Android', `${phrases.en.starterPerMo} Starter`],
      sections: [],
      faqs: [],
      keywords: ['cafe loyalty app', 'pub loyalty scheme', 'qr code loyalty program'],
    },
    es: {
      slug: '',
      metaTitle: 'Programa de fidelización para cafeterías | Scan Perks',
      description:
        `Programa de fidelización QR para cafeterías, bares y restaurantes. Sellos digitales desde ${phrases.es.starterPerMonth}. Prueba ${phrases.es.trialDays} gratis.`,
      h1: 'Programa de fidelización para cafeterías y bares',
      heroLine: `Fidelización QR para cafeterías independientes — desde ${phrases.es.starterPerMonth}.`,
      directAnswer:
        `Scan Perks es un programa de fidelización QR para cafeterías, bares y restaurantes independientes. Los clientes escanean un código QR para ganar sellos; el local gestiona recompensas en app.scan-perks.com desde ${phrases.es.starterPerMonth}, sin integrar el TPV.`,
      bullets: ['Sellos digitales QR', 'Apps iOS y Android', 'Sin TPV obligatorio', `Desde ${phrases.es.starterPerMonth}`],
      sections: [
        {
          heading: 'Fidelización pensada para cafeterías',
          body: 'Un programa de fidelización para cafeterías debe ser rápido en barra. Con Scan Perks el cliente escanea el QR, acumula sellos (p. ej. 9 cafés = 1 gratis) y el dueño ve quiénes son los habituales.',
        },
        {
          heading: 'Más barato que el software enterprise',
          body: `Las suites de fidelización cuestan a menudo 200 $/mes o más. Scan Perks cuesta ${phrases.es.rangePerMonth}, con prueba de ${phrases.es.trialDays} y sin contrato anual.`,
        },
      ],
      faqs: [
        {
          question: '¿Qué es un programa de fidelización para cafeterías?',
          answer:
            `Es un sistema de recompensas por visitas (sellos, puntos o bebidas gratis). Scan Perks lo digitaliza con QR: ${phrases.es.starterPerMonth}, apps iOS/Android, sin TPV.`,
        },
      ],
      keywords: ['programa de fidelización para cafeterías', 'app fidelización café', 'tarjetas fidelización QR'],
    },
    de: {
      slug: '',
      metaTitle: 'Digitales Treueprogramm für Cafés in Deutschland | Scan Perks',
      description:
        `Digitales Treueprogramm für Cafés, Bars & Restaurants. QR-Stempel ab ${phrases.de.starterPerMonth}. ${phrases.de.trialDays} kostenlos testen.`,
      h1: 'Digitales Treueprogramm für Cafés & Bars',
      heroLine: `QR-Treueprogramm für unabhängige Cafés — ab ${phrases.de.starterPerMonth}.`,
      directAnswer:
        `Scan Perks ist ein digitales Treueprogramm für Cafés, Bars und Restaurants. Gäste scannen einen QR-Code und sammeln Stempel; Betreiber steuern Belohnungen unter app.scan-perks.com ab ${phrases.de.starterPerMonth} — ohne Kassensystem-Anbindung.`,
      bullets: ['QR-Stempelkarten', 'iOS- & Android-Apps', 'Kein POS nötig', `Ab ${phrases.de.starterPerMonth}`],
      sections: [
        {
          heading: 'Treueprogramm für Cafés — schnell an der Theke',
          body: 'Scan Perks ersetzt Papier-Stempelkarten: Gäste scannen den QR-Code, sammeln z. B. 9 Stempel für einen Gratis-Kaffee. Ideal für unabhängige Cafés in Deutschland, Österreich und der Schweiz.',
        },
        {
          heading: 'Günstiger als Enterprise-Loyalty',
          body: `Enterprise-Lösungen kosten oft 200 $+ /Monat. Scan Perks startet bei ${phrases.de.starterPerMonth}, ${phrases.de.trialDays} Test, ${phrases.de.noCard}, monatlich kündbar.`,
        },
      ],
      faqs: [
        {
          question: 'Was ist ein digitales Treueprogramm für Cafés?',
          answer:
            `Ein System, das Stammgäste mit Stempeln oder Gratisgetränken belohnt. Scan Perks digitalisiert das per QR — ab ${phrases.de.starterPerMonth}, ohne POS.`,
        },
      ],
      keywords: ['digitales Treueprogramm Café', 'Treueprogramm Café', 'QR Stempelkarte Café'],
    },
    fr: {
      slug: '',
      metaTitle: 'Programme de fidélité numérique pour cafés | Scan Perks',
      description:
        `Programme de fidélité QR pour cafés, bars et restaurants. Tampons digitaux dès ${phrases.fr.starterPerMonth}. Essai ${phrases.fr.trialDays}.`,
      h1: 'Programme de fidélité numérique pour cafés',
      heroLine: `Fidélité QR pour cafés indépendants — dès ${phrases.fr.starterPerMonth}.`,
      directAnswer:
        `Scan Perks est un programme de fidélité QR pour cafés, bars et restaurants indépendants. Les clients scannent un QR pour gagner des tampons ; le commerçant gère les récompenses sur app.scan-perks.com dès ${phrases.fr.starterPerMonth}, sans intégration caisse.`,
      bullets: ['Tampons QR', 'Apps iOS & Android', 'Sans caisse obligatoire', `Dès ${phrases.fr.starterPerMonth}`],
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
            `Un système de récompenses (tampons, points, boissons offertes). Scan Perks le digitalise via QR — dès ${phrases.fr.starterPerMonth}, apps iOS/Android.`,
        },
      ],
      keywords: ['programme de fidélité numérique pour cafés', 'fidélité café QR', 'carte de fidélité café'],
    },
    it: {
      slug: '',
      metaTitle: 'Programma fedeltà digitale per bar e caffè | Scan Perks',
      description:
        `Programma loyalty QR per caffè, bar e ristoranti. Timbri digitali da ${phrases.it.starterPerMonth}. Prova ${phrases.it.trialDays} gratis.`,
      h1: 'Programma fedeltà digitale per bar e caffè',
      heroLine: `Loyalty QR per locali indipendenti — da ${phrases.it.starterPerMonth}.`,
      directAnswer:
        `Scan Perks è un programma fedeltà QR per caffè, bar e ristoranti indipendenti. I clienti scansionano un QR per guadagnare timbri; il locale gestisce i premi su app.scan-perks.com da ${phrases.it.starterPerMonth}, senza collegare il POS.`,
      bullets: ['Timbri QR', 'App iOS e Android', 'Nessun POS obbligatorio', `Da ${phrases.it.starterPerMonth}`],
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
            `Un sistema di premi per le visite (timbri, punti, bevande gratis). Scan Perks lo digitalizza con QR — da ${phrases.it.starterPerMonth}.`,
        },
      ],
      keywords: ['programma fedeltà bar', 'programma fedeltà caffè', 'carta fedeltà QR'],
    },
  }),

  page('pricing', '/pricing/', {
    en: {
      slug: 'pricing',
      metaTitle: `Cafe Loyalty App — ${phrases.en.starterPerMo}, ${phrases.en.trialCap} | Scan Perks`,
      description: `Coffee shop & pub loyalty from ${phrases.en.starterPerMo}. QR rewards, push offers. No $200/mo contracts.`,
      h1: `Cafe & Pub Loyalty — From ${phrases.en.starterPrice}/Month`,
      heroLine: `Starter is ${phrases.en.starterPerMonth} for ${phrases.en.scans}. Growth is ${phrases.en.growthPerMonth} for ${phrases.en.unlimitedScans}.`,
      directAnswer:
        `Scan Perks costs ${phrases.en.starterPerMonth} (Starter, ${phrases.en.scans}) or ${phrases.en.growthPerMonth} (Growth, ${phrases.en.unlimitedScans}). ${phrases.en.trial} with ${phrases.en.noCard}, no annual contract.`,
      bullets: [`Starter ${phrases.en.starterPerMo}`, `Growth ${phrases.en.growthPerMo}`, phrases.en.trial, 'Cancel anytime'],
      sections: [],
      faqs: [
        {
          question: 'How much does cafe loyalty software cost?',
          answer: `Scan Perks: ${phrases.en.starterPerMonth} Starter or ${phrases.en.growthPerMonth} Growth. Enterprise tools often cost $200+/month.`,
        },
      ],
      keywords: ['cafe loyalty pricing', 'loyalty app cost'],
    },
    es: {
      slug: 'precios',
      metaTitle: `Precios fidelización cafeterías — ${phrases.es.starterPerMonth} | Scan Perks`,
      description: `Programa de fidelización desde ${phrases.es.starterPerMonth}. Prueba ${phrases.es.trialDays}. Sin contratos anuales.`,
      h1: 'Precios simples para cafeterías y bares',
      heroLine: `Starter: ${phrases.es.starterPerMonth}, ${phrases.es.scans}. Growth: ${phrases.es.growthPerMonth}, ${phrases.es.unlimitedScans}.`,
      directAnswer:
        `Scan Perks cuesta ${phrases.es.starterPerMonth} (Starter, ${phrases.es.scans}) o ${phrases.es.growthPerMonth} (Growth, ${phrases.es.unlimitedScans}). Prueba ${phrases.es.trialDays}, ${phrases.es.noCard} para empezar, sin contrato anual.`,
      bullets: [`Starter ${phrases.es.starterPerMonth}`, `Growth ${phrases.es.growthPerMonth}`, `${phrases.es.trialDays} gratis`, 'Cancela cuando quieras'],
      sections: [],
      faqs: [
        {
          question: '¿Cuánto cuesta un programa de fidelización para cafeterías?',
          answer: `Scan Perks: ${phrases.es.starterPerMonth} o ${phrases.es.growthPerMonth}. El software enterprise suele superar los 200 $/mes.`,
        },
      ],
      keywords: ['precio programa fidelización cafetería', 'app fidelización coste'],
    },
    de: {
      slug: 'preise',
      metaTitle: `Treueprogramm Preise — ab ${phrases.de.starterPerMonth} | Scan Perks`,
      description: `Café-Treueprogramm ab ${phrases.de.starterPerMonth}. ${phrases.de.trialDays} testen. Kein Jahresvertrag.`,
      h1: 'Preise für Cafés & Bars',
      heroLine: `Starter: ${phrases.de.starterPerMonth}, ${phrases.de.scans}. Growth: ${phrases.de.growthPerMonth}, ${phrases.de.unlimitedScans}.`,
      directAnswer:
        `Scan Perks kostet ${phrases.de.starterPerMonth} (Starter, ${phrases.de.scans}) oder ${phrases.de.growthPerMonth} (Growth, ${phrases.de.unlimitedScans}). ${phrases.de.trialDays} Test, ${phrases.de.noCard}, monatlich kündbar.`,
      bullets: [`Starter ${phrases.de.starterPerMonth}`, `Growth ${phrases.de.growthPerMonth}`, `${phrases.de.trialDays} gratis`, 'Jederzeit kündbar'],
      sections: [],
      faqs: [
        {
          question: 'Was kostet ein Treueprogramm für Cafés?',
          answer: `Scan Perks: ${phrases.de.orPerMonth}. Enterprise-Lösungen oft 200 $+ /Monat.`,
        },
      ],
      keywords: ['Treueprogramm Kosten Café', 'Loyalty Software Preis'],
    },
    fr: {
      slug: 'tarifs',
      metaTitle: `Tarifs fidélité café — dès ${phrases.fr.starterPerMonth} | Scan Perks`,
      description: `Programme de fidélité dès ${phrases.fr.starterPerMonth}. Essai ${phrases.fr.trialDays}. Sans engagement annuel.`,
      h1: 'Tarifs pour cafés et bars',
      heroLine: `Starter : ${phrases.fr.starterPerMonth}, ${phrases.fr.scans}. Growth : ${phrases.fr.growthPerMonth}, ${phrases.fr.unlimitedScans}.`,
      directAnswer:
        `Scan Perks coûte ${phrases.fr.starterPerMonth} (Starter, ${phrases.fr.scans}) ou ${phrases.fr.growthPerMonth} (Growth, ${phrases.fr.unlimitedScans}). Essai ${phrases.fr.trialDays}, ${phrases.fr.noCard}, sans contrat annuel.`,
      bullets: [`Starter ${phrases.fr.starterPerMonth}`, `Growth ${phrases.fr.growthPerMonth}`, `${phrases.fr.trialDays} gratuits`, 'Résiliable'],
      sections: [],
      faqs: [
        {
          question: 'Combien coûte un programme de fidélité pour cafés ?',
          answer: `Scan Perks : ${phrases.fr.orPerMonth}. Les suites enterprise dépassent souvent 200 $/mois.`,
        },
      ],
      keywords: ['prix programme fidélité café', 'coût logiciel fidélité'],
    },
    it: {
      slug: 'prezzi',
      metaTitle: `Prezzi loyalty bar — da ${phrases.it.starterPerMonth} | Scan Perks`,
      description: `Programma fedeltà da ${phrases.it.starterPerMonth}. Prova ${phrases.it.trialDays}. Nessun contratto annuale.`,
      h1: 'Prezzi per bar e caffè',
      heroLine: `Starter: ${phrases.it.starterPerMonth}, ${phrases.it.scans}. Growth: ${phrases.it.growthPerMonth}, ${phrases.it.unlimitedScans}.`,
      directAnswer:
        `Scan Perks costa ${phrases.it.starterPerMonth} (Starter, ${phrases.it.scans}) o ${phrases.it.growthPerMonth} (Growth, ${phrases.it.unlimitedScans}). Prova ${phrases.it.trialDays}, ${phrases.it.noCard}, senza vincoli annuali.`,
      bullets: [`Starter ${phrases.it.starterPerMonth}`, `Growth ${phrases.it.growthPerMonth}`, `${phrases.it.trialDays} gratis`, 'Disdici quando vuoi'],
      sections: [],
      faqs: [
        {
          question: 'Quanto costa un programma fedeltà per bar?',
          answer: `Scan Perks: ${phrases.it.orPerMonth}. I software enterprise spesso superano i 200 $/mese.`,
        },
      ],
      keywords: ['prezzo programma fedeltà bar', 'costo app loyalty'],
    },
  }),

  page('features', '/features/', {
    en: {
      slug: 'features',
      metaTitle: `Cafe Loyalty App Features — ${phrases.en.starterPerMo} | Scan Perks`,
      description: `QR stamps, push offers, iOS/Android, analytics. Live in 5 min. ${phrases.en.trial}.`,
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
      description: `Sellos QR, notificaciones, analítica, iOS/Android. Listo en 5 min. Prueba ${phrases.es.trialDays}.`,
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
      description: `QR-Stempel, Push, Analytics, iOS/Android. In 5 Min. live. ${phrases.de.trialDays} testen.`,
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
      description: `Tampons QR, push, analytics, iOS/Android. En ligne en 5 min. Essai ${phrases.fr.trialDays}.`,
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
      description: `Timbri QR, push, analytics, iOS/Android. Online in 5 min. Prova ${phrases.it.trialDays}.`,
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
