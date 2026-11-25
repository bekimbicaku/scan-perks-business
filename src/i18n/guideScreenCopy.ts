import type { Locale } from './config';
import { guideScreens, type GuideScreenId } from '../data/guideScreens';

export type GuideScreenCopy = {
  title: string;
  caption: string;
  alt: string;
};

const enCopy = Object.fromEntries(
  (Object.keys(guideScreens) as GuideScreenId[]).map((id) => {
    const s = guideScreens[id];
    return [id, { title: s.title, caption: s.caption, alt: s.alt }];
  })
) as Record<GuideScreenId, GuideScreenCopy>;

const es: Record<GuideScreenId, GuideScreenCopy> = {
  customerHome: {
    title: 'Tarjeta de sellos del cliente',
    caption:
      'En la app gratuita Scan Perks, los clientes ven sus puntos, locales y progreso de sellos — los sellos se acumulan en la app, no en el navegador.',
    alt: 'Inicio de Scan Perks para el cliente con puntos totales, seis locales y tarjeta de sellos de Bella Pizza en 6 de 10',
  },
  customerVenue: {
    title: 'Página del local + Escanear',
    caption:
      'Al abrir un local se muestra la recompensa y el botón Escanear. El cliente toca Escanear en la app y apunta al QR del mostrador.',
    alt: 'Vista de local Bella Pizza en Scan Perks con detalles de recompensa y botón Escanear en la app',
  },
  ownerQr: {
    title: 'QR del mostrador',
    caption:
      'En el resumen del negocio tienes un QR de mostrador para imprimir o mostrar en tablet — colócalo en caja y empieza a acumular sellos.',
    alt: 'Resumen de dueño Bella Pizza en Scan Perks con plan Growth y QR de mostrador: 8 sellos y pizza gratis',
  },
  reviewHours: {
    title: 'Reseñas y horario',
    caption:
      'Añade enlaces de reseñas de Google y TripAdvisor (se muestran tras un escaneo) y configura el horario semanal para que los miembros sepan cuándo abres.',
    alt: 'Ajustes de negocio Scan Perks con URLs de reseñas de Google y TripAdvisor y horario semanal',
  },
  analytics: {
    title: 'Analítica de visitas',
    caption:
      'Cada escaneo es una visita. Ves escaneos totales, clientes únicos, recompensas activas y tasa de canje — datos que una cartilla de papel no da.',
    alt: 'Analítica de negocio Scan Perks con escaneos totales, clientes únicos, recompensas activas y canjeadas, y tasa de canje',
  },
  segments: {
    title: 'Segmentos y crecimiento',
    caption:
      'Identifica miembros activos, inactivos y leales; comparte el enlace del negocio o envía una oferta de reactivación desde la misma pantalla.',
    alt: 'Segmentos de clientes Scan Perks: activos, inactivos y leales, con herramientas de compartir y reactivación',
  },
  happyHour: {
    title: 'Happy hour + recompensas',
    caption:
      'Programa ventanas de doble sello en horas bajas y define cuántos sellos dan la recompensa (por ejemplo 8 para una pizza gratis).',
    alt: 'Horario Happy Hour Boost y ajustes del programa de fidelización con 8 sellos por una pizza gratis',
  },
  createOffer: {
    title: 'Ofertas a miembros',
    caption:
      'Publica una oferta push a los miembros — título, descripción, validez y condiciones — sin otra herramienta de marketing.',
    alt: 'Formulario Crear nueva oferta de Scan Perks para enviar promociones push a miembros',
  },
};

const de: Record<GuideScreenId, GuideScreenCopy> = {
  customerHome: {
    title: 'Kunden-Stempelkarte',
    caption:
      'In der kostenlosen Scan-Perks-App sehen Gäste Punkte, Locations und Stempelstand — Stempel werden in der App gesammelt, nicht im Browser.',
    alt: 'Scan-Perks-Kundenstart mit Gesamtpunkten, sechs Locations und Bella-Pizza-Stempelkarte bei 6 von 10',
  },
  customerVenue: {
    title: 'Location-Seite + Scan',
    caption:
      'Beim Öffnen einer Location erscheinen Belohnung und Scan-Button. Gäste tippen in der App auf Scan und richten die Kamera auf deinen Theken-QR.',
    alt: 'Scan-Perks-Locationansicht für Bella Pizza mit Belohnungsdetails und Scan-in-der-App-Button',
  },
  ownerQr: {
    title: 'Theken-QR',
    caption:
      'In der Business-Übersicht liegt ein Theken-QR zum Drucken oder Anzeigen auf dem Tablet — an die Kasse, und Stempel starten.',
    alt: 'Scan-Perks-Owner-Übersicht für Bella Pizza mit Growth-Plan und Theken-QR: 8 Stempel, dann Pizza gratis',
  },
  reviewHours: {
    title: 'Bewertungen und Öffnungszeiten',
    caption:
      'Füge Google- und TripAdvisor-Review-Links hinzu (nach dem Scan sichtbar) und setze Wochenzeiten, damit Mitglieder wissen, wann du offen hast.',
    alt: 'Scan-Perks-Business-Einstellungen mit Google- und TripAdvisor-Review-URLs und Wochenöffnungszeiten',
  },
  analytics: {
    title: 'Besuchsanalytik',
    caption:
      'Jeder Scan ist ein Besuch. Sieh Gesamt-Scans, Unique Customers, aktive Rewards und Einlösequote — Daten, die eine Papierkarte nie liefert.',
    alt: 'Scan-Perks-Business-Analytics mit Gesamt-Scans, Unique Customers, aktiven und eingelösten Rewards sowie Einlösequote',
  },
  segments: {
    title: 'Segmente und Wachstum',
    caption:
      'Erkenne aktive, inaktive und treue Mitglieder und teile deinen Business-Link oder sende ein Win-back-Angebot von derselben Ansicht.',
    alt: 'Scan-Perks-Kundensegmente für aktive, inaktive und treue Mitglieder mit Share- und Win-back-Tools',
  },
  happyHour: {
    title: 'Happy Hour + Belohnungen',
    caption:
      'Plane Doppelstempel-Fenster für ruhige Stunden und lege fest, wie viele Stempel die Belohnung bringen (z. B. 8 für eine gratis Pizza).',
    alt: 'Scan-Perks Happy-Hour-Boost-Plan und Loyalty-Einstellungen mit 8 Stempeln für eine gratis Pizza',
  },
  createOffer: {
    title: 'Mitgliederangebote',
    caption:
      'Sende ein Push-Angebot an Loyalty-Mitglieder — Titel, Beschreibung, Gültigkeit und Bedingungen — ohne weiteres Marketing-Tool.',
    alt: 'Scan-Perks-Formular „Neues Angebot erstellen“ für Push-Promos an Loyalty-Mitglieder',
  },
};

const fr: Record<GuideScreenId, GuideScreenCopy> = {
  customerHome: {
    title: 'Carte de tampons client',
    caption:
      'Dans l’app gratuite Scan Perks, les clients voient points, établissements et progression des tampons — les tampons s’accumulent dans l’app, pas dans le navigateur.',
    alt: 'Accueil client Scan Perks avec points totaux, six établissements et carte Bella Pizza à 6 tampons sur 10',
  },
  customerVenue: {
    title: 'Page établissement + Scan',
    caption:
      'Ouvrir un établissement affiche la récompense et le bouton Scan. Le client appuie sur Scan dans l’app et vise votre QR comptoir.',
    alt: 'Vue établissement Bella Pizza dans Scan Perks avec détails de récompense et bouton Scan dans l’app',
  },
  ownerQr: {
    title: 'QR comptoir',
    caption:
      'Votre aperçu business contient un QR comptoir à imprimer ou afficher sur tablette — placez-le en caisse et commencez à collecter des tampons.',
    alt: 'Aperçu propriétaire Bella Pizza dans Scan Perks avec plan Growth et QR comptoir : 8 tampons puis pizza offerte',
  },
  reviewHours: {
    title: 'Avis et horaires',
    caption:
      'Ajoutez les liens d’avis Google et TripAdvisor (affichés après un scan) et définissez les horaires hebdomadaires pour que les membres sachent quand vous êtes ouverts.',
    alt: 'Paramètres business Scan Perks avec champs d’URL d’avis Google et TripAdvisor et horaires hebdomadaires',
  },
  analytics: {
    title: 'Analytics de visites',
    caption:
      'Chaque scan est une visite. Voyez scans totaux, clients uniques, récompenses actives et taux d’utilisation — des données qu’une carte papier ne donne jamais.',
    alt: 'Analytics business Scan Perks avec scans totaux, clients uniques, récompenses actives et utilisées, et taux d’utilisation',
  },
  segments: {
    title: 'Segments et croissance',
    caption:
      'Repérez les membres actifs, inactifs et fidèles, puis partagez le lien de votre établissement ou envoyez une offre de reconquête depuis le même écran.',
    alt: 'Segments clients Scan Perks actifs, inactifs et fidèles avec outils de partage et de reconquête',
  },
  happyHour: {
    title: 'Happy hour + récompenses',
    caption:
      'Planifiez des fenêtres double tampon aux heures calmes et définissez combien de tampons ouvrent la récompense (par ex. 8 pour une pizza offerte).',
    alt: 'Planning Happy Hour Boost Scan Perks et paramètres du programme avec 8 tampons pour une pizza offerte',
  },
  createOffer: {
    title: 'Offres membres',
    caption:
      'Publiez une offre push aux membres — titre, description, validité et conditions — sans autre outil marketing.',
    alt: 'Formulaire Créer une nouvelle offre Scan Perks pour envoyer des promos push aux membres',
  },
};

const it: Record<GuideScreenId, GuideScreenCopy> = {
  customerHome: {
    title: 'Carta timbri del cliente',
    caption:
      'Nell’app gratuita Scan Perks i clienti vedono punti, locali e progresso dei timbri — i timbri si raccolgono nell’app, non nel browser.',
    alt: 'Home cliente Scan Perks con punti totali, sei locali e carta timbri Bella Pizza a 6 su 10',
  },
  customerVenue: {
    title: 'Pagina locale + Scan',
    caption:
      'Aprendo un locale compaiono il premio e il pulsante Scan. Il cliente tocca Scan nell’app e inquadra il QR del bancone.',
    alt: 'Vista locale Bella Pizza in Scan Perks con dettagli premio e pulsante Scan nell’app',
  },
  ownerQr: {
    title: 'QR del bancone',
    caption:
      'Nella panoramica business trovi un QR da stampare o mostrare sul tablet — mettilo in cassa e inizia a raccogliere timbri.',
    alt: 'Panoramica owner Bella Pizza in Scan Perks con piano Growth e QR bancone: 8 timbri poi pizza gratis',
  },
  reviewHours: {
    title: 'Recensioni e orari',
    caption:
      'Aggiungi link alle recensioni Google e TripAdvisor (mostrati dopo uno scan) e imposta gli orari settimanali così i membri sanno quando sei aperto.',
    alt: 'Impostazioni business Scan Perks con campi URL recensioni Google e TripAdvisor e orari settimanali',
  },
  analytics: {
    title: 'Analytics delle visite',
    caption:
      'Ogni scan è una visita. Vedi scan totali, clienti unici, premi attivi e tasso di riscatto — dati che una carta di cartone non dà.',
    alt: 'Analytics business Scan Perks con scan totali, clienti unici, premi attivi e riscattati, e tasso di riscatto',
  },
  segments: {
    title: 'Segmenti e crescita',
    caption:
      'Individua membri attivi, inattivi e fedeli, poi condividi il link del locale o invia un’offerta di riattivazione dalla stessa schermata.',
    alt: 'Segmenti clienti Scan Perks attivi, inattivi e fedeli con strumenti di condivisione e riattivazione',
  },
  happyHour: {
    title: 'Happy hour + premi',
    caption:
      'Programma finestre a doppio timbro nelle ore lente e definisci quanti timbri danno il premio (ad esempio 8 per una pizza gratis).',
    alt: 'Programma Happy Hour Boost Scan Perks e impostazioni loyalty con 8 timbri per una pizza gratis',
  },
  createOffer: {
    title: 'Offerte ai membri',
    caption:
      'Pubblica un’offerta push ai membri loyalty — titolo, descrizione, validità e condizioni — senza un altro tool di marketing.',
    alt: 'Modulo Crea nuova offerta Scan Perks per inviare promo push ai membri',
  },
};

export const guideScreenCopy: Record<Locale, Record<GuideScreenId, GuideScreenCopy>> = {
  en: enCopy,
  es,
  de,
  fr,
  it,
};

export function getGuideScreenCopy(id: GuideScreenId, locale: Locale): GuideScreenCopy {
  return guideScreenCopy[locale][id] ?? guideScreenCopy.en[id];
}
