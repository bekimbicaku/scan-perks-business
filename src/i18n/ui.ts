import type { Locale } from './config';

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
  common: { quickAnswer: string; alsoSee: string; related: string };
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
      getStarted: 'Open App',
    },
    footer: {
      tagline: 'QR loyalty for cafes, bars & restaurants — from $10/month.',
      loyalty: 'Loyalty Programs',
      product: 'Product',
      company: 'Company',
      language: 'Language',
    },
    cta: { startTrial: 'Open App — Free Trial', viewPricing: 'View Pricing', leaveReview: 'Leave a G2 Review →' },
    common: { quickAnswer: 'Direct Answer', alsoSee: 'Also see', related: 'Related' },
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
      tagline: 'Fidelización QR para cafeterías, bares y restaurantes — desde 10 $/mes.',
      loyalty: 'Programas de fidelización',
      product: 'Producto',
      company: 'Empresa',
      language: 'Idioma',
    },
    cta: { startTrial: 'Abrir app — prueba gratis', viewPricing: 'Ver precios', leaveReview: 'Dejar reseña en G2 →' },
    common: { quickAnswer: 'Respuesta directa', alsoSee: 'Ver también', related: 'Relacionado' },
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
      tagline: 'QR-Treueprogramm für Cafés, Bars & Restaurants — ab 10 $/Monat.',
      loyalty: 'Treueprogramme',
      product: 'Produkt',
      company: 'Unternehmen',
      language: 'Sprache',
    },
    cta: { startTrial: 'App öffnen — 14 Tage gratis', viewPricing: 'Preise ansehen', leaveReview: 'G2-Bewertung schreiben →' },
    common: { quickAnswer: 'Kurze Antwort', alsoSee: 'Siehe auch', related: 'Ähnlich' },
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
      tagline: 'Fidélité QR pour cafés, bars et restaurants — dès 10 $/mois.',
      loyalty: 'Programmes de fidélité',
      product: 'Produit',
      company: 'Entreprise',
      language: 'Langue',
    },
    cta: { startTrial: 'Ouvrir l’app — essai gratuit', viewPricing: 'Voir les tarifs', leaveReview: 'Laisser un avis G2 →' },
    common: { quickAnswer: 'Réponse directe', alsoSee: 'Voir aussi', related: 'Connexe' },
  },
  it: {
    nav: {
      home: 'Home',
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
      tagline: 'Loyalty QR per caffè, bar e ristoranti — da 10 $/mese.',
      loyalty: 'Programmi loyalty',
      product: 'Prodotto',
      company: 'Azienda',
      language: 'Lingua',
    },
    cta: { startTrial: 'Apri app — prova gratis', viewPricing: 'Vedi prezzi', leaveReview: 'Lascia una recensione G2 →' },
    common: { quickAnswer: 'Risposta diretta', alsoSee: 'Vedi anche', related: 'Correlati' },
  },
};
