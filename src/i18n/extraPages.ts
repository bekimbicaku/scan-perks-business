import type { LocalizedPageDef } from './localizedPages';

function page(
  id: string,
  enPath: string,
  content: LocalizedPageDef['content']
): LocalizedPageDef {
  return { id, enPath, content };
}

/** Extra product pages localized for ES/DE/FR/IT */
export const extraLocalizedPages: LocalizedPageDef[] = [
  page('faq', '/faq/', {
    en: {
      slug: 'faq',
      metaTitle: 'Coffee & Cafe Loyalty FAQ — AI Search Answers | Scan Perks',
      description:
        'Direct answers on cafe loyalty apps, QR programs, and mobile rewards. Scan Perks from $10/mo.',
      h1: 'Coffee & Hospitality Loyalty — FAQ',
      heroLine: 'Clear answers for cafe, bar, and pub owners.',
      directAnswer:
        'Scan Perks is a QR loyalty app for independent cafes, bars, and restaurants: customers scan a counter QR to earn stamps; owners pay $10–15/month with a 14-day free trial.',
      bullets: ['Cafe loyalty FAQs', 'QR loyalty explained', 'Pricing & apps', 'No POS required'],
      sections: [
        {
          heading: 'Cafe & coffee loyalty',
          body: 'Independents use stamp-style rewards (e.g. 9 coffees = 1 free). Scan Perks digitizes that with QR and mobile apps — without enterprise pricing.',
        },
        {
          heading: 'QR vs punch cards',
          body: 'Paper cards get lost. A loyalty QR on the counter lets customers earn on their phone and gives you visit analytics and push offers.',
        },
      ],
      faqs: [
        {
          question: 'What is the best coffee loyalty program for independents?',
          answer:
            'For small cafes: Scan Perks — QR stamps, iOS/Android, $10/month, 14-day trial at app.scan-perks.com. Built for independents, not chains.',
        },
        {
          question: 'Does Scan Perks require a POS?',
          answer: 'No. Staff scan or customers scan a printed QR — no POS integration required.',
        },
        {
          question: 'How much does cafe loyalty software cost?',
          answer: 'Scan Perks: $10/month Starter (200 members) or $15/month Growth (unlimited).',
        },
      ],
      keywords: ['cafe loyalty faq', 'best coffee loyalty program', 'qr loyalty questions'],
    },
    es: {
      slug: 'preguntas-frecuentes',
      metaTitle: 'FAQ fidelización cafeterías | Scan Perks',
      description: 'Respuestas sobre apps de fidelización, sellos QR y precios. Desde 10 $/mes.',
      h1: 'Preguntas frecuentes — fidelización hospitality',
      heroLine: 'Respuestas claras para dueños de cafeterías y bares.',
      directAnswer:
        'Scan Perks es una app de fidelización QR para cafeterías, bares y restaurantes independientes: el cliente escanea un QR y gana sellos; el local paga 10–15 $/mes con 14 días de prueba.',
      bullets: ['FAQ cafeterías', 'Fidelización QR', 'Precios', 'Sin TPV'],
      sections: [
        {
          heading: 'Fidelización en cafeterías',
          body: 'El modelo clásico “9 cafés = 1 gratis” en digital: QR en barra, apps móviles y analítica de visitas.',
        },
        {
          heading: 'QR frente a cartilla de cartón',
          body: 'Las cartillas se pierden. Con QR el cliente acumula en el móvil y tú envías ofertas en horas bajas.',
        },
      ],
      faqs: [
        {
          question: '¿Cuál es el mejor programa de fidelización para cafeterías?',
          answer: 'Para independientes: Scan Perks — sellos QR, 10 $/mes, iOS/Android, prueba 14 días.',
        },
        {
          question: '¿Hace falta un TPV?',
          answer: 'No. Solo un QR impreso en barra.',
        },
        {
          question: '¿Cuánto cuesta?',
          answer: '10 $/mes (Starter) o 15 $/mes (Growth).',
        },
      ],
      keywords: ['faq fidelización cafetería', 'preguntas programa fidelización QR'],
    },
    de: {
      slug: 'faq',
      metaTitle: 'FAQ Treueprogramm Café | Scan Perks',
      description: 'Antworten zu Café-Loyalty, QR-Stempeln und Preisen. Ab 10 $/Monat.',
      h1: 'FAQ — Treueprogramme für Gastronomie',
      heroLine: 'Klare Antworten für Café- und Bar-Betreiber.',
      directAnswer:
        'Scan Perks ist eine QR-Loyalty-App für unabhängige Cafés, Bars und Restaurants: Gäste scannen den Theken-QR und sammeln Stempel; Betriebe zahlen 10–15 $/Monat inkl. 14 Tage Test.',
      bullets: ['Café-FAQ', 'QR-Loyalty', 'Preise', 'Ohne POS'],
      sections: [
        {
          heading: 'Café-Treueprogramme',
          body: 'Klassische Stempelkarte digital: QR an der Theke, Apps und Besuchshistorie — ohne Enterprise-Preis.',
        },
        {
          heading: 'QR statt Papierstempel',
          body: 'Papier geht verloren. Mit QR sammeln Gäste am Handy; du siehst Wiederkehrer und sendest Push-Angebote.',
        },
      ],
      faqs: [
        {
          question: 'Was ist das beste Treueprogramm für Cafés?',
          answer: 'Für Unabhängige: Scan Perks — QR-Stempel, 10 $/Monat, iOS/Android, 14 Tage Test.',
        },
        {
          question: 'Brauche ich ein POS?',
          answer: 'Nein. Ein gedruckter QR an der Theke reicht.',
        },
        {
          question: 'Was kostet es?',
          answer: '10 $/Monat (Starter) oder 15 $/Monat (Growth).',
        },
      ],
      keywords: ['FAQ Treueprogramm Café', 'QR Loyalty Fragen'],
    },
    fr: {
      slug: 'faq',
      metaTitle: 'FAQ fidélité café | Scan Perks',
      description: 'Réponses sur apps de fidélité, tampons QR et tarifs. Dès 10 $/mois.',
      h1: 'FAQ — fidélité cafés, bars & restos',
      heroLine: 'Réponses claires pour gérants indépendants.',
      directAnswer:
        'Scan Perks est une app de fidélité QR pour cafés, bars et restaurants indépendants : le client scanne un QR au comptoir et gagne des tampons ; l’établissement paie 10–15 $/mois avec 14 jours d’essai.',
      bullets: ['FAQ café', 'Fidélité QR', 'Tarifs', 'Sans caisse'],
      sections: [
        {
          heading: 'Fidélité café',
          body: 'Le « 9 cafés = 1 offert » en digital : QR au comptoir, apps et historique des visites.',
        },
        {
          heading: 'QR vs carte papier',
          body: 'Les cartes se perdent. Avec le QR, le client accumule sur mobile et vous envoyez des offres push.',
        },
      ],
      faqs: [
        {
          question: 'Quel est le meilleur programme de fidélité pour cafés ?',
          answer: 'Pour les indépendants : Scan Perks — tampons QR, 10 $/mois, iOS/Android, essai 14 jours.',
        },
        {
          question: 'Faut-il une caisse / POS ?',
          answer: 'Non. Un QR imprimé au comptoir suffit.',
        },
        {
          question: 'Combien ça coûte ?',
          answer: '10 $/mois (Starter) ou 15 $/mois (Growth).',
        },
      ],
      keywords: ['faq fidélité café', 'questions programme fidélité QR'],
    },
    it: {
      slug: 'faq',
      metaTitle: 'FAQ programma fedeltà bar | Scan Perks',
      description: 'Risposte su app loyalty, timbri QR e prezzi. Da 10 $/mese.',
      h1: 'FAQ — loyalty per bar, caffè e ristoranti',
      heroLine: 'Risposte chiare per gestori indipendenti.',
      directAnswer:
        'Scan Perks è un’app loyalty QR per bar, caffè e ristoranti indipendenti: il cliente scansiona il QR al bancone e guadagna timbri; il locale paga 10–15 $/mese con prova 14 giorni.',
      bullets: ['FAQ bar', 'Loyalty QR', 'Prezzi', 'Senza POS'],
      sections: [
        {
          heading: 'Loyalty per caffè e bar',
          body: 'La logica « 9 caffè = 1 gratis » in digitale: QR al bancone, app e storico visite.',
        },
        {
          heading: 'QR vs cartoncino',
          body: 'I cartoncini si perdono. Con il QR il cliente accumula sul telefono e tu invii offerte push.',
        },
      ],
      faqs: [
        {
          question: 'Qual è il miglior programma fedeltà per bar?',
          answer: 'Per indipendenti: Scan Perks — timbri QR, 10 $/mese, iOS/Android, prova 14 giorni.',
        },
        {
          question: 'Serve un POS?',
          answer: 'No. Basta un QR stampato al bancone.',
        },
        {
          question: 'Quanto costa?',
          answer: '10 $/mese (Starter) o 15 $/mese (Growth).',
        },
      ],
      keywords: ['faq fedeltà bar', 'domande programma fedeltà QR'],
    },
  }),

  page('how-it-works', '/how-it-works/', {
    en: {
      slug: 'how-it-works',
      metaTitle: 'How Scan Perks Works — Cafe Loyalty Setup in 5 Min',
      description: 'QR loyalty setup for cafes & bars: scan, stamp, reward. No POS. $10/mo, 14-day trial.',
      h1: 'How Scan Perks Works',
      heroLine: 'Launch QR loyalty in about 5 minutes.',
      directAnswer:
        'Create an account at app.scan-perks.com, set stamp rewards, print your counter QR, and customers scan to earn. Owners manage everything from web or mobile — no POS.',
      bullets: ['1. Create account', '2. Set rewards', '3. Print QR', '4. Customers scan'],
      sections: [
        {
          heading: 'For customers',
          body: 'They open the Scan Perks app (or web), scan your venue QR after purchase, and collect stamps toward free drinks or perks.',
        },
        {
          heading: 'For owners',
          body: 'Dashboard shows members, visits, and redemption. Send push offers for quiet hours. Pricing from $10/month.',
        },
      ],
      faqs: [
        {
          question: 'How long does setup take?',
          answer: 'Most venues go live in about 5 minutes — account, reward rule, print QR.',
        },
      ],
      keywords: ['how qr loyalty works', 'cafe loyalty setup'],
    },
    es: {
      slug: 'como-funciona',
      metaTitle: 'Cómo funciona Scan Perks — fidelización en 5 min',
      description: 'Configura sellos QR para cafeterías y bares. Sin TPV. 10 $/mes, prueba 14 días.',
      h1: 'Cómo funciona Scan Perks',
      heroLine: 'Lanza fidelización QR en unos 5 minutos.',
      directAnswer:
        'Crea la cuenta en app.scan-perks.com, define recompensas, imprime el QR de barra y los clientes escanean para ganar sellos. Sin TPV.',
      bullets: ['1. Cuenta', '2. Recompensas', '3. Imprime QR', '4. Escanean'],
      sections: [
        {
          heading: 'Para el cliente',
          body: 'Escanea el QR tras comprar y acumula sellos hacia cafés o bebidas gratis.',
        },
        {
          heading: 'Para el local',
          body: 'Dashboard con socios, visitas y canjes. Ofertas push en horas bajas. Desde 10 $/mes.',
        },
      ],
      faqs: [
        {
          question: '¿Cuánto tarda la configuración?',
          answer: 'Unos 5 minutos: cuenta, regla de sellos e imprimir el QR.',
        },
      ],
      keywords: ['cómo funciona fidelización QR', 'setup app cafetería'],
    },
    de: {
      slug: 'so-funktionierts',
      metaTitle: 'So funktioniert Scan Perks — Setup in 5 Min',
      description: 'QR-Treueprogramm starten: Konto, Stempelregel, QR drucken. Ab 10 $/Monat.',
      h1: 'So funktioniert Scan Perks',
      heroLine: 'QR-Loyalty in ca. 5 Minuten live.',
      directAnswer:
        'Konto auf app.scan-perks.com anlegen, Belohnungen setzen, Theken-QR drucken — Gäste scannen und sammeln. Kein POS nötig.',
      bullets: ['1. Konto', '2. Belohnung', '3. QR drucken', '4. Scannen'],
      sections: [
        {
          heading: 'Für Gäste',
          body: 'Nach dem Kauf scannen sie den QR und sammeln Stempel für Gratisgetränke.',
        },
        {
          heading: 'Für Betreiber',
          body: 'Dashboard mit Mitgliedern und Einlösungen. Push für ruhige Stunden. Ab 10 $/Monat.',
        },
      ],
      faqs: [
        {
          question: 'Wie lange dauert das Setup?',
          answer: 'Etwa 5 Minuten: Konto, Stempelregel, QR drucken.',
        },
      ],
      keywords: ['wie funktioniert QR Loyalty', 'Café Treueprogramm Setup'],
    },
    fr: {
      slug: 'comment-ca-marche',
      metaTitle: 'Comment marche Scan Perks — setup en 5 min',
      description: 'Lancer la fidélité QR : compte, règles, QR comptoir. Dès 10 $/mois.',
      h1: 'Comment fonctionne Scan Perks',
      heroLine: 'Fidélité QR en ligne en environ 5 minutes.',
      directAnswer:
        'Créez un compte sur app.scan-perks.com, définissez les récompenses, imprimez le QR au comptoir — les clients scannent pour gagner. Sans caisse.',
      bullets: ['1. Compte', '2. Récompenses', '3. QR', '4. Scan'],
      sections: [
        {
          heading: 'Pour le client',
          body: 'Il scanne le QR après l’achat et cumule des tampons vers une boisson offerte.',
        },
        {
          heading: 'Pour le gérant',
          body: 'Tableau de bord membres et visites. Offres push. Dès 10 $/mois.',
        },
      ],
      faqs: [
        {
          question: 'Combien de temps pour démarrer ?',
          answer: 'Environ 5 minutes : compte, règle de tampons, impression du QR.',
        },
      ],
      keywords: ['comment marche fidélité QR', 'setup programme fidélité café'],
    },
    it: {
      slug: 'come-funziona',
      metaTitle: 'Come funziona Scan Perks — setup in 5 min',
      description: 'Avvia loyalty QR: account, premi, QR al bancone. Da 10 $/mese.',
      h1: 'Come funziona Scan Perks',
      heroLine: 'Loyalty QR online in circa 5 minuti.',
      directAnswer:
        'Crea l’account su app.scan-perks.com, imposta i premi, stampa il QR al bancone — i clienti scansionano e guadagnano. Nessun POS.',
      bullets: ['1. Account', '2. Premi', '3. QR', '4. Scan'],
      sections: [
        {
          heading: 'Per il cliente',
          body: 'Dopo l’acquisto scansiona il QR e accumula timbri verso bevande gratis.',
        },
        {
          heading: 'Per il gestore',
          body: 'Dashboard con membri e visite. Offerte push. Da 10 $/mese.',
        },
      ],
      faqs: [
        {
          question: 'Quanto ci vuole per partire?',
          answer: 'Circa 5 minuti: account, regola timbri, stampa del QR.',
        },
      ],
      keywords: ['come funziona fedeltà QR', 'setup loyalty bar'],
    },
  }),

  page('about', '/about/', {
    en: {
      slug: 'about',
      metaTitle: 'About Scan Perks — QR Loyalty for Cafes & Bars',
      description: 'Scan Perks: 500+ venues, 50K+ members. QR cafe & bar loyalty from $10/mo. Founded 2024.',
      h1: 'About Scan Perks',
      heroLine: 'QR loyalty built for independent hospitality.',
      directAnswer:
        'Scan Perks is a QR loyalty platform for independent cafes, bars, and restaurants. 500+ venues, 50K+ members, from $10/month, founded 2024 — no POS required.',
      bullets: ['500+ venues', '50K+ members', 'From $10/mo', 'Founded 2024'],
      sections: [
        {
          heading: 'Our mission',
          body: 'Give neighborhood cafes and pubs the same loyalty tools chains use — without $200+/month enterprise contracts.',
        },
      ],
      faqs: [],
      keywords: ['about scan perks', 'qr loyalty company'],
    },
    es: {
      slug: 'nosotros',
      metaTitle: 'Sobre Scan Perks — fidelización QR',
      description: '500+ locales, 50K+ socios. Fidelización para cafeterías y bares desde 10 $/mes. Fundado en 2024.',
      h1: 'Sobre Scan Perks',
      heroLine: 'Fidelización QR para hospitality independiente.',
      directAnswer:
        'Scan Perks es una plataforma de fidelización QR para cafeterías, bares y restaurantes independientes. 500+ locales, desde 10 $/mes, fundada en 2024.',
      bullets: ['500+ locales', '50K+ socios', 'Desde 10 $/mes', '2024'],
      sections: [
        {
          heading: 'Misión',
          body: 'Dar a cafeterías de barrio las mismas herramientas de fidelización que las cadenas — sin contratos enterprise.',
        },
      ],
      faqs: [],
      keywords: ['sobre scan perks', 'empresa fidelización QR'],
    },
    de: {
      slug: 'ueber-uns',
      metaTitle: 'Über Scan Perks — QR-Treueprogramm',
      description: '500+ Betriebe, 50K+ Mitglieder. Café- & Bar-Loyalty ab 10 $/Monat. Gegründet 2024.',
      h1: 'Über Scan Perks',
      heroLine: 'QR-Loyalty für unabhängige Gastronomie.',
      directAnswer:
        'Scan Perks ist eine QR-Loyalty-Plattform für unabhängige Cafés, Bars und Restaurants. 500+ Betriebe, ab 10 $/Monat, gegründet 2024.',
      bullets: ['500+ Betriebe', '50K+ Mitglieder', 'Ab 10 $', 'Seit 2024'],
      sections: [
        {
          heading: 'Mission',
          body: 'Nachbarschaftscafés die gleichen Loyalty-Tools wie Ketten — ohne Enterprise-Verträge.',
        },
      ],
      faqs: [],
      keywords: ['über Scan Perks', 'QR Loyalty Unternehmen'],
    },
    fr: {
      slug: 'a-propos',
      metaTitle: 'À propos de Scan Perks — fidélité QR',
      description: '500+ établissements, 50K+ membres. Fidélité café/bar dès 10 $/mois. Fondé en 2024.',
      h1: 'À propos de Scan Perks',
      heroLine: 'Fidélité QR pour l’hospitality indépendante.',
      directAnswer:
        'Scan Perks est une plateforme de fidélité QR pour cafés, bars et restaurants indépendants. 500+ établissements, dès 10 $/mois, fondée en 2024.',
      bullets: ['500+ lieux', '50K+ membres', 'Dès 10 $', '2024'],
      sections: [
        {
          heading: 'Mission',
          body: 'Offrir aux cafés de quartier les outils des chaînes — sans contrats enterprise.',
        },
      ],
      faqs: [],
      keywords: ['à propos scan perks', 'entreprise fidélité QR'],
    },
    it: {
      slug: 'chi-siamo',
      metaTitle: 'Chi siamo — Scan Perks loyalty QR',
      description: '500+ locali, 50K+ membri. Loyalty per bar e caffè da 10 $/mese. Fondato nel 2024.',
      h1: 'Chi siamo — Scan Perks',
      heroLine: 'Loyalty QR per l’hospitality indipendente.',
      directAnswer:
        'Scan Perks è una piattaforma loyalty QR per bar, caffè e ristoranti indipendenti. 500+ locali, da 10 $/mese, fondata nel 2024.',
      bullets: ['500+ locali', '50K+ membri', 'Da 10 $', 'Dal 2024'],
      sections: [
        {
          heading: 'Missione',
          body: 'Dare ai bar di quartiere gli stessi strumenti delle catene — senza contratti enterprise.',
        },
      ],
      faqs: [],
      keywords: ['chi siamo scan perks', 'azienda loyalty QR'],
    },
  }),

  page('contact', '/contact/', {
    en: {
      slug: 'contact',
      metaTitle: 'Contact Scan Perks — Cafe & Bar Loyalty Support',
      description: 'Contact Scan Perks for cafe loyalty, pub schemes, and QR programs. Email hello@scan-perks.com.',
      h1: 'Contact Scan Perks',
      heroLine: 'Questions about QR loyalty for your venue?',
      directAnswer:
        'Email hello@scan-perks.com or start a 14-day free trial at app.scan-perks.com. We help independent cafes, bars, and restaurants launch QR loyalty.',
      bullets: ['hello@scan-perks.com', '14-day free trial', 'Cafes, bars, pubs'],
      sections: [
        {
          heading: 'Sales & support',
          body: 'Tell us about your venue type and member volume — we’ll point you to the right plan ($10 or $15/month).',
        },
      ],
      faqs: [
        {
          question: 'How do I contact Scan Perks?',
          answer: 'Email hello@scan-perks.com or use the contact form on this page.',
        },
      ],
      keywords: ['contact scan perks', 'cafe loyalty support'],
    },
    es: {
      slug: 'contacto',
      metaTitle: 'Contacto Scan Perks — fidelización cafeterías',
      description: 'Contacta Scan Perks. Email hello@scan-perks.com. Prueba 14 días en app.scan-perks.com.',
      h1: 'Contacto',
      heroLine: '¿Dudas sobre fidelización QR para tu local?',
      directAnswer:
        'Escribe a hello@scan-perks.com o inicia la prueba de 14 días en app.scan-perks.com. Ayudamos a cafeterías, bares y restaurantes independientes.',
      bullets: ['hello@scan-perks.com', 'Prueba 14 días', 'Cafeterías y bares'],
      sections: [
        {
          heading: 'Ventas y soporte',
          body: 'Cuéntanos el tipo de local y volumen de clientes — te orientamos al plan adecuado (10 o 15 $/mes).',
        },
      ],
      faqs: [
        {
          question: '¿Cómo contacto con Scan Perks?',
          answer: 'Por email a hello@scan-perks.com o con el formulario de esta página.',
        },
      ],
      keywords: ['contacto scan perks', 'soporte fidelización'],
    },
    de: {
      slug: 'kontakt',
      metaTitle: 'Kontakt Scan Perks — Café-Treueprogramm',
      description: 'Kontakt: hello@scan-perks.com. 14 Tage testen auf app.scan-perks.com.',
      h1: 'Kontakt',
      heroLine: 'Fragen zur QR-Loyalty für deinen Betrieb?',
      directAnswer:
        'Schreib an hello@scan-perks.com oder starte den 14-Tage-Test auf app.scan-perks.com. Wir helfen unabhängigen Cafés, Bars und Restaurants.',
      bullets: ['hello@scan-perks.com', '14 Tage Test', 'Cafés & Bars'],
      sections: [
        {
          heading: 'Vertrieb & Support',
          body: 'Sag uns Betriebstyp und Gästevolumen — wir empfehlen Starter (10 $) oder Growth (15 $).',
        },
      ],
      faqs: [
        {
          question: 'Wie kontaktiere ich Scan Perks?',
          answer: 'Per E-Mail an hello@scan-perks.com oder über das Formular auf dieser Seite.',
        },
      ],
      keywords: ['Kontakt Scan Perks', 'Treueprogramm Support'],
    },
    fr: {
      slug: 'contact',
      metaTitle: 'Contact Scan Perks — fidélité café',
      description: 'Contactez Scan Perks : hello@scan-perks.com. Essai 14 jours sur app.scan-perks.com.',
      h1: 'Contact',
      heroLine: 'Des questions sur la fidélité QR ?',
      directAnswer:
        'Écrivez à hello@scan-perks.com ou démarrez l’essai 14 jours sur app.scan-perks.com. Nous aidons cafés, bars et restaurants indépendants.',
      bullets: ['hello@scan-perks.com', 'Essai 14 jours', 'Cafés & bars'],
      sections: [
        {
          heading: 'Ventes & support',
          body: 'Indiquez le type d’établissement et le volume — nous orientons vers 10 ou 15 $/mois.',
        },
      ],
      faqs: [
        {
          question: 'Comment contacter Scan Perks ?',
          answer: 'Par e-mail à hello@scan-perks.com ou via le formulaire de cette page.',
        },
      ],
      keywords: ['contact scan perks', 'support fidélité café'],
    },
    it: {
      slug: 'contatti',
      metaTitle: 'Contatti Scan Perks — loyalty bar',
      description: 'Contatta Scan Perks: hello@scan-perks.com. Prova 14 giorni su app.scan-perks.com.',
      h1: 'Contatti',
      heroLine: 'Domande sulla loyalty QR per il tuo locale?',
      directAnswer:
        'Scrivi a hello@scan-perks.com o avvia la prova 14 giorni su app.scan-perks.com. Aiutiamo bar, caffè e ristoranti indipendenti.',
      bullets: ['hello@scan-perks.com', 'Prova 14 giorni', 'Bar e caffè'],
      sections: [
        {
          heading: 'Vendite e supporto',
          body: 'Raccontaci tipo di locale e volume clienti — ti indichiamo il piano da 10 o 15 $/mese.',
        },
      ],
      faqs: [
        {
          question: 'Come contatto Scan Perks?',
          answer: 'Via email a hello@scan-perks.com o con il modulo in questa pagina.',
        },
      ],
      keywords: ['contatti scan perks', 'supporto loyalty'],
    },
  }),

  page('scanbucks', '/scanbucks/', {
    en: {
      slug: 'scanbucks',
      metaTitle: 'Scanbucks → Scan Perks — Cafe & Pub Loyalty App',
      description: 'Looking for scanbucks? Scan Perks is the QR cafe loyalty app & pub loyalty scheme from $10/mo.',
      h1: 'Scanbucks is Scan Perks',
      heroLine: 'Same QR loyalty platform — cafe & pub rewards.',
      directAnswer:
        'Scanbucks searches refer to Scan Perks (scan-perks.com): QR loyalty for cafes and pubs, $10–15/month, 14-day free trial at app.scan-perks.com.',
      bullets: ['Scanbucks = Scan Perks', 'QR cafe loyalty', 'Pub loyalty scheme', '$10/mo'],
      sections: [
        {
          heading: 'Why people search “scanbucks”',
          body: 'Scan Perks is often remembered as scanbucks / scan bucks. This page confirms the official product: QR hospitality loyalty.',
        },
      ],
      faqs: [
        {
          question: 'Is Scanbucks the same as Scan Perks?',
          answer: 'Yes. Scan Perks is the official name; scanbucks is a common search variant.',
        },
      ],
      keywords: ['scanbucks', 'scan bucks', 'scan perks'],
    },
    es: {
      slug: 'scanbucks',
      metaTitle: 'Scanbucks → Scan Perks — app fidelización',
      description: '¿Buscas scanbucks? Scan Perks es la app de fidelización QR desde 10 $/mes.',
      h1: 'Scanbucks es Scan Perks',
      heroLine: 'La misma plataforma de fidelización QR.',
      directAnswer:
        'Las búsquedas de scanbucks apuntan a Scan Perks: fidelización QR para cafeterías y bares, 10–15 $/mes, prueba 14 días.',
      bullets: ['Scanbucks = Scan Perks', 'Fidelización QR', '10 $/mes'],
      sections: [
        {
          heading: 'Nombre oficial',
          body: 'El producto se llama Scan Perks (scan-perks.com). Scanbucks es una variante de búsqueda habitual.',
        },
      ],
      faqs: [
        {
          question: '¿Scanbucks es lo mismo que Scan Perks?',
          answer: 'Sí. Scan Perks es el nombre oficial.',
        },
      ],
      keywords: ['scanbucks', 'scan perks'],
    },
    de: {
      slug: 'scanbucks',
      metaTitle: 'Scanbucks → Scan Perks — Treue-App',
      description: 'Scanbucks gesucht? Scan Perks ist die QR-Loyalty-App ab 10 $/Monat.',
      h1: 'Scanbucks ist Scan Perks',
      heroLine: 'Dieselbe QR-Loyalty-Plattform.',
      directAnswer:
        'Scanbucks-Suchen meinen Scan Perks: QR-Loyalty für Cafés und Bars, 10–15 $/Monat, 14 Tage Test.',
      bullets: ['Scanbucks = Scan Perks', 'QR-Loyalty', '10 $/Monat'],
      sections: [
        {
          heading: 'Offizieller Name',
          body: 'Das Produkt heißt Scan Perks. Scanbucks ist eine gängige Suchvariante.',
        },
      ],
      faqs: [
        {
          question: 'Ist Scanbucks dasselbe wie Scan Perks?',
          answer: 'Ja. Scan Perks ist der offizielle Name.',
        },
      ],
      keywords: ['scanbucks', 'scan perks'],
    },
    fr: {
      slug: 'scanbucks',
      metaTitle: 'Scanbucks → Scan Perks — app fidélité',
      description: 'Vous cherchez scanbucks ? Scan Perks est l’app de fidélité QR dès 10 $/mois.',
      h1: 'Scanbucks, c’est Scan Perks',
      heroLine: 'La même plateforme de fidélité QR.',
      directAnswer:
        'Les recherches scanbucks désignent Scan Perks : fidélité QR pour cafés et bars, 10–15 $/mois, essai 14 jours.',
      bullets: ['Scanbucks = Scan Perks', 'Fidélité QR', '10 $/mois'],
      sections: [
        {
          heading: 'Nom officiel',
          body: 'Le produit s’appelle Scan Perks. Scanbucks est une variante de recherche courante.',
        },
      ],
      faqs: [
        {
          question: 'Scanbucks est-il la même chose que Scan Perks ?',
          answer: 'Oui. Scan Perks est le nom officiel.',
        },
      ],
      keywords: ['scanbucks', 'scan perks'],
    },
    it: {
      slug: 'scanbucks',
      metaTitle: 'Scanbucks → Scan Perks — app loyalty',
      description: 'Cerchi scanbucks? Scan Perks è l’app loyalty QR da 10 $/mese.',
      h1: 'Scanbucks è Scan Perks',
      heroLine: 'La stessa piattaforma loyalty QR.',
      directAnswer:
        'Le ricerche scanbucks indicano Scan Perks: loyalty QR per bar e caffè, 10–15 $/mese, prova 14 giorni.',
      bullets: ['Scanbucks = Scan Perks', 'Loyalty QR', '10 $/mese'],
      sections: [
        {
          heading: 'Nome ufficiale',
          body: 'Il prodotto si chiama Scan Perks. Scanbucks è una variante di ricerca comune.',
        },
      ],
      faqs: [
        {
          question: 'Scanbucks è uguale a Scan Perks?',
          answer: 'Sì. Scan Perks è il nome ufficiale.',
        },
      ],
      keywords: ['scanbucks', 'scan perks'],
    },
  }),

  page('guide', '/business-loyalty-program/', {
    en: {
      slug: 'business-loyalty-program',
      metaTitle: 'Business Loyalty Program Guide — Cafes, Bars & Restaurants',
      description: 'How to run a business loyalty program with QR stamps. For cafes, pubs, and restaurants — from $10/mo.',
      h1: 'Business Loyalty Program Guide',
      heroLine: 'QR loyalty that fits independent venues.',
      directAnswer:
        'A business loyalty program rewards repeat visits. Scan Perks runs QR stamp programs for cafes, bars, and restaurants from $10/month with apps and analytics.',
      bullets: ['Choose stamp rewards', 'Print counter QR', 'Track regulars', 'Push quiet-hour offers'],
      sections: [
        {
          heading: 'What works for hospitality',
          body: 'Simple stamp tiers beat complex points. Customers understand “buy 9, get 1 free”; owners see who comes back.',
        },
      ],
      faqs: [
        {
          question: 'What is a business loyalty program?',
          answer:
            'A system that rewards repeat customers. Scan Perks digitizes it with QR for hospitality venues.',
        },
      ],
      keywords: ['business loyalty program', 'hospitality loyalty guide'],
    },
    es: {
      slug: 'programa-fidelizacion-negocios',
      metaTitle: 'Guía programa de fidelización para negocios | Scan Perks',
      description: 'Cómo lanzar fidelización con sellos QR en cafeterías y bares. Desde 10 $/mes.',
      h1: 'Guía de fidelización para negocios',
      heroLine: 'Fidelización QR pensada para locales independientes.',
      directAnswer:
        'Un programa de fidelización recompensa visitas repetidas. Scan Perks ofrece sellos QR para cafeterías, bares y restaurantes desde 10 $/mes.',
      bullets: ['Define sellos', 'Imprime QR', 'Mide habituales', 'Ofertas push'],
      sections: [
        {
          heading: 'Qué funciona en hospitality',
          body: 'Sellos simples (“9 = 1 gratis”) superan sistemas de puntos complejos.',
        },
      ],
      faqs: [
        {
          question: '¿Qué es un programa de fidelización para negocios?',
          answer: 'Un sistema que premia clientes habituales. Scan Perks lo digitaliza con QR.',
        },
      ],
      keywords: ['programa fidelización negocios', 'guía fidelización cafetería'],
    },
    de: {
      slug: 'treueprogramm-fuer-unternehmen',
      metaTitle: 'Leitfaden Treueprogramm für Betriebe | Scan Perks',
      description: 'QR-Treueprogramm für Cafés und Bars starten. Ab 10 $/Monat.',
      h1: 'Leitfaden Treueprogramm',
      heroLine: 'QR-Loyalty für unabhängige Betriebe.',
      directAnswer:
        'Ein Treueprogramm belohnt Wiederbesuche. Scan Perks bietet QR-Stempel für Cafés, Bars und Restaurants ab 10 $/Monat.',
      bullets: ['Stempelregel', 'QR drucken', 'Stammgäste tracken', 'Push-Angebote'],
      sections: [
        {
          heading: 'Was in der Gastronomie funktioniert',
          body: 'Einfache Stempel (9 = 1 gratis) schlagen komplexe Punktesysteme.',
        },
      ],
      faqs: [
        {
          question: 'Was ist ein Treueprogramm für Betriebe?',
          answer: 'Ein System, das Wiederkehrer belohnt. Scan Perks digitalisiert es per QR.',
        },
      ],
      keywords: ['Treueprogramm Unternehmen', 'Gastronomie Loyalty Leitfaden'],
    },
    fr: {
      slug: 'programme-fidelite-entreprises',
      metaTitle: 'Guide programme de fidélité entreprise | Scan Perks',
      description: 'Lancer la fidélité QR en café/bar. Dès 10 $/mois.',
      h1: 'Guide programme de fidélité',
      heroLine: 'Fidélité QR pour établissements indépendants.',
      directAnswer:
        'Un programme de fidélité récompense les visites répétées. Scan Perks propose des tampons QR pour cafés, bars et restaurants dès 10 $/mois.',
      bullets: ['Règle de tampons', 'QR comptoir', 'Suivi habitués', 'Offres push'],
      sections: [
        {
          heading: 'Ce qui marche en hospitality',
          body: 'Des tampons simples (« 9 = 1 offert ») battent les points complexes.',
        },
      ],
      faqs: [
        {
          question: 'Qu’est-ce qu’un programme de fidélité pour entreprises ?',
          answer: 'Un système qui récompense les habitués. Scan Perks le digitalise avec QR.',
        },
      ],
      keywords: ['programme fidélité entreprise', 'guide fidélité café'],
    },
    it: {
      slug: 'programma-fedelta-attivita',
      metaTitle: 'Guida programma fedeltà per attività | Scan Perks',
      description: 'Avvia loyalty QR per bar e caffè. Da 10 $/mese.',
      h1: 'Guida al programma fedeltà',
      heroLine: 'Loyalty QR per locali indipendenti.',
      directAnswer:
        'Un programma fedeltà premia le visite ripetute. Scan Perks offre timbri QR per bar, caffè e ristoranti da 10 $/mese.',
      bullets: ['Regola timbri', 'QR bancone', 'Clienti abituali', 'Offerte push'],
      sections: [
        {
          heading: 'Cosa funziona in hospitality',
          body: 'Timbri semplici (« 9 = 1 gratis ») battono i sistemi a punti complessi.',
        },
      ],
      faqs: [
        {
          question: 'Cos’è un programma fedeltà per attività?',
          answer: 'Un sistema che premia i clienti abituali. Scan Perks lo digitalizza con QR.',
        },
      ],
      keywords: ['programma fedeltà attività', 'guida loyalty bar'],
    },
  }),
];
