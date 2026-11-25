import type { Locale } from './config';
import { phrases } from '../data/site-facts';

export interface UiStrings {
  nav: { home: string; features: string; pricing: string; faq: string; how: string; blog: string; about: string; contact: string; getStarted: string };
  footer: {
    tagline: string;
    loyalty: string;
    product: string;
    company: string;
    language: string;
  };
  cta: { startTrial: string; viewPricing: string; leaveReview: string };
  common: { quickAnswer: string; alsoSee: string; related: string; faqTitle: string; faqLabel: string; toggleMenu: string };
  home: { stepHowDesc: string };
  demo: { posterLabel: string; unlockTitle: string; unlockSub: string };
  stores: { openWeb: string; getOn: string; downloadOn: string };
  media: {
    homeGuideTitle: string;
    homeGuideIntro: string;
    howGuideTitle: string;
    howGuideIntro: string;
    videosTitle: string;
    videosIntro: string;
  };
}

export const ui: Record<Locale, UiStrings> = {
  en: {
    nav: {
      home: 'Home',
      features: 'Features',
      pricing: 'Pricing',
      faq: 'FAQ',
      how: 'How It Works',
      blog: 'Blog',
      about: 'About',
      contact: 'Contact',
      getStarted: 'Start free trial',
    },
    footer: {
      tagline: `QR loyalty for cafes, bars & restaurants — from ${phrases.en.starterPerMonth}.`,
      loyalty: 'Loyalty Programs',
      product: 'Product',
      company: 'Company',
      language: 'Language',
    },
    cta: { startTrial: 'Start free trial', viewPricing: 'View Pricing', leaveReview: 'Leave a G2 Review →' },
    common: {
      quickAnswer: 'Direct Answer',
      alsoSee: 'Also see',
      related: 'Related',
      faqTitle: 'Frequently Asked Questions',
      faqLabel: 'FAQ',
      toggleMenu: 'Toggle menu',
    },
    home: { stepHowDesc: 'QR → stamps → rewards' },
    demo: {
      posterLabel: 'Scan for rewards',
      unlockTitle: 'Free drink unlocked!',
      unlockSub: '9th coffee is on us',
    },
    stores: {
      openWeb: 'Open web app',
      getOn: 'Get it on',
      downloadOn: 'Download on the',
    },
    media: {
      homeGuideTitle: 'Inside Scan Perks',
      homeGuideIntro:
        'Real screens from the customer app and owner tools — stamp cards, your counter QR, visit analytics, and member offers.',
      howGuideTitle: 'What you and your customers see',
      howGuideIntro:
        'Screens from the Scan Perks how-to guide: customer stamp card and Scan view, your counter QR, reviews and hours, analytics, segments, happy hour, and member offers.',
      videosTitle: 'See how it works',
      videosIntro:
        'How customers scan your QR in the Scan Perks app, collect stamps, and get your offers — for cafes by day and bars after hours.',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      features: 'Funciones',
      pricing: 'Precios',
      faq: 'FAQ',
      how: 'Cómo funciona',
      blog: 'Blog',
      about: 'Nosotros',
      contact: 'Contacto',
      getStarted: 'Abrir app',
    },
    footer: {
      tagline: `Fidelización QR para cafeterías, bares y restaurantes — desde ${phrases.es.starterPerMonth}.`,
      loyalty: 'Programas de fidelización',
      product: 'Producto',
      company: 'Empresa',
      language: 'Idioma',
    },
    cta: { startTrial: 'Abrir app — prueba gratis', viewPricing: 'Ver precios', leaveReview: 'Dejar reseña en G2 →' },
    common: {
      quickAnswer: 'Respuesta directa',
      alsoSee: 'Ver también',
      related: 'Relacionado',
      faqTitle: 'Preguntas frecuentes',
      faqLabel: 'FAQ',
      toggleMenu: 'Abrir o cerrar menú',
    },
    home: { stepHowDesc: 'QR → sellos → recompensas' },
    demo: {
      posterLabel: 'Escanea para recompensas',
      unlockTitle: '¡Bebida gratis desbloqueada!',
      unlockSub: 'El 9.º café corre de nuestra cuenta',
    },
    stores: {
      openWeb: 'Abrir app web',
      getOn: 'Disponible en',
      downloadOn: 'Descargar en',
    },
    media: {
      homeGuideTitle: 'Dentro de Scan Perks',
      homeGuideIntro:
        'Pantallas reales de la app del cliente y las herramientas del dueño: tarjetas de sellos, tu QR del mostrador, analítica de visitas y ofertas a miembros.',
      howGuideTitle: 'Lo que ven tú y tus clientes',
      howGuideIntro:
        'Pantallas de la guía de Scan Perks: tarjeta de sellos y vista Scan, tu QR del mostrador, reseñas y horario, analítica, segmentos, happy hour y ofertas a miembros.',
      videosTitle: 'Mira cómo funciona',
      videosIntro:
        'Cómo los clientes escanean tu QR en la app Scan Perks, acumulan sellos y reciben ofertas — para cafeterías de día y bares de noche.',
    },
  },
  de: {
    nav: {
      home: 'Start',
      features: 'Funktionen',
      pricing: 'Preise',
      faq: 'FAQ',
      how: 'So funktioniert’s',
      blog: 'Blog',
      about: 'Über uns',
      contact: 'Kontakt',
      getStarted: 'App öffnen',
    },
    footer: {
      tagline: `QR-Treueprogramm für Cafés, Bars & Restaurants — ab ${phrases.de.starterPerMonth}.`,
      loyalty: 'Treueprogramme',
      product: 'Produkt',
      company: 'Unternehmen',
      language: 'Sprache',
    },
    cta: { startTrial: `App öffnen — ${phrases.de.trialDays} gratis`, viewPricing: 'Preise ansehen', leaveReview: 'G2-Bewertung schreiben →' },
    common: {
      quickAnswer: 'Kurze Antwort',
      alsoSee: 'Siehe auch',
      related: 'Ähnlich',
      faqTitle: 'Häufige Fragen',
      faqLabel: 'FAQ',
      toggleMenu: 'Menü öffnen oder schließen',
    },
    home: { stepHowDesc: 'QR → Stempel → Belohnungen' },
    demo: {
      posterLabel: 'Für Belohnungen scannen',
      unlockTitle: 'Gratisgetränk freigeschaltet!',
      unlockSub: 'Der 9. Kaffee geht auf uns',
    },
    stores: {
      openWeb: 'Web-App öffnen',
      getOn: 'Jetzt bei',
      downloadOn: 'Laden im',
    },
    media: {
      homeGuideTitle: 'Einblick in Scan Perks',
      homeGuideIntro:
        'Echte Screens aus der Kunden-App und den Owner-Tools — Stempelkarten, dein Theken-QR, Besuchsanalytik und Angebote für Mitglieder.',
      howGuideTitle: 'Was du und deine Gäste sehen',
      howGuideIntro:
        'Screens aus dem Scan-Perks-How-to: Stempelkarte und Scan-Ansicht, dein Theken-QR, Bewertungen und Öffnungszeiten, Analytics, Segmente, Happy Hour und Mitgliederangebote.',
      videosTitle: 'So funktioniert’s',
      videosIntro:
        'So scannen Gäste deinen QR in der Scan-Perks-App, sammeln Stempel und erhalten Angebote — für Cafés tagsüber und Bars abends.',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      features: 'Fonctionnalités',
      pricing: 'Tarifs',
      faq: 'FAQ',
      how: 'Comment ça marche',
      blog: 'Blog',
      about: 'À propos',
      contact: 'Contact',
      getStarted: 'Ouvrir l’app',
    },
    footer: {
      tagline: `Fidélité QR pour cafés, bars et restaurants — dès ${phrases.fr.starterPerMonth}.`,
      loyalty: 'Programmes de fidélité',
      product: 'Produit',
      company: 'Entreprise',
      language: 'Langue',
    },
    cta: { startTrial: 'Ouvrir l’app — essai gratuit', viewPricing: 'Voir les tarifs', leaveReview: 'Laisser un avis G2 →' },
    common: {
      quickAnswer: 'Réponse directe',
      alsoSee: 'Voir aussi',
      related: 'Connexe',
      faqTitle: 'Questions fréquentes',
      faqLabel: 'FAQ',
      toggleMenu: 'Ouvrir ou fermer le menu',
    },
    home: { stepHowDesc: 'QR → tampons → récompenses' },
    demo: {
      posterLabel: 'Scannez pour les récompenses',
      unlockTitle: 'Boisson offerte débloquée !',
      unlockSub: 'Le 9e café est pour nous',
    },
    stores: {
      openWeb: 'Ouvrir l’app web',
      getOn: 'Disponible sur',
      downloadOn: 'Télécharger sur',
    },
    media: {
      homeGuideTitle: 'Dans Scan Perks',
      homeGuideIntro:
        'Vraies captures de l’app client et des outils propriétaire — cartes de tampons, votre QR comptoir, analytics de visites et offres membres.',
      howGuideTitle: 'Ce que voient vous et vos clients',
      howGuideIntro:
        'Écrans du guide Scan Perks : carte de tampons et vue Scan, votre QR comptoir, avis et horaires, analytics, segments, happy hour et offres membres.',
      videosTitle: 'Voir comment ça marche',
      videosIntro:
        'Comment les clients scannent votre QR dans l’app Scan Perks, collectent des tampons et reçoivent vos offres — pour les cafés le jour et les bars le soir.',
    },
  },
  it: {
    nav: {
      home: 'Inizio',
      features: 'Funzioni',
      pricing: 'Prezzi',
      faq: 'FAQ',
      how: 'Come funziona',
      blog: 'Blog',
      about: 'Chi siamo',
      contact: 'Contatti',
      getStarted: 'Apri app',
    },
    footer: {
      tagline: `Loyalty QR per caffè, bar e ristoranti — da ${phrases.it.starterPerMonth}.`,
      loyalty: 'Programmi loyalty',
      product: 'Prodotto',
      company: 'Azienda',
      language: 'Lingua',
    },
    cta: { startTrial: 'Apri app — prova gratis', viewPricing: 'Vedi prezzi', leaveReview: 'Lascia una recensione G2 →' },
    common: {
      quickAnswer: 'Risposta diretta',
      alsoSee: 'Vedi anche',
      related: 'Correlati',
      faqTitle: 'Domande frequenti',
      faqLabel: 'FAQ',
      toggleMenu: 'Apri o chiudi il menu',
    },
    home: { stepHowDesc: 'QR → timbri → premi' },
    demo: {
      posterLabel: 'Scansiona per i premi',
      unlockTitle: 'Bevanda gratis sbloccata!',
      unlockSub: 'Il 9° caffè è offerto da noi',
    },
    stores: {
      openWeb: 'Apri app web',
      getOn: 'Disponibile su',
      downloadOn: 'Scarica su',
    },
    media: {
      homeGuideTitle: 'Dentro Scan Perks',
      homeGuideIntro:
        'Schermate reali dell’app cliente e degli strumenti owner — carte timbri, il QR del bancone, analytics delle visite e offerte ai membri.',
      howGuideTitle: 'Cosa vedi tu e i tuoi clienti',
      howGuideIntro:
        'Schermate dalla guida Scan Perks: carta timbri e vista Scan, il QR del bancone, recensioni e orari, analytics, segmenti, happy hour e offerte ai membri.',
      videosTitle: 'Guarda come funziona',
      videosIntro:
        'Come i clienti scansionano il tuo QR nell’app Scan Perks, raccolgono timbri e ricevono le offerte — per caffè di giorno e bar di sera.',
    },
  },
};
