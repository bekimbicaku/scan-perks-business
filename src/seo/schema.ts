import { SITE } from '../data/content';
import { FOUNDER } from '../data/founder';
import { phrases } from '../data/site-facts';

export interface SchemaPageInput {
  title: string;
  description: string;
  path: string;
}

export interface FaqSchemaInput {
  question: string;
  answer: string;
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

function founderPersonNode() {
  return {
    '@type': 'Person' as const,
    '@id': `${SITE.url}/#founder`,
    name: FOUNDER.name,
    alternateName: [...FOUNDER.alternateName],
    jobTitle: FOUNDER.jobTitle,
    description: FOUNDER.description,
    url: FOUNDER.url,
    email: FOUNDER.email,
    sameAs: [...FOUNDER.sameAs],
    worksFor: {
      '@type': 'Organization' as const,
      '@id': `${SITE.url}/#organization`,
      name: SITE.name,
      url: SITE.url,
    },
    knowsAbout: [
      'QR loyalty programs',
      'Cafe loyalty apps',
      'Pub loyalty schemes',
      'Scan Perks',
      'Hospitality customer retention',
    ],
  };
}

export function buildBaseSchema(page: SchemaPageInput) {
  const url = `${SITE.url}${page.path}`;
  const founder = founderPersonNode();
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${SITE.url}/#organization`,
      name: SITE.name,
      alternateName: [...SITE.alternateName],
      url: SITE.url,
      logo: `${SITE.url}/favicon.png`,
      description: SITE.description,
      founder,
      foundingDate: '2024',
      contactPoint: {
        '@type': 'ContactPoint',
        email: SITE.email,
        contactType: 'customer support',
      },
      sameAs: [
        SITE.social.twitter,
        SITE.social.instagram,
        SITE.social.linkedin,
        ...(SITE.social.g2 ? [SITE.social.g2] : []),
        SITE.appStore,
        SITE.playStore,
      ].filter(Boolean),
    },
    {
      '@context': 'https://schema.org',
      ...founder,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE.name,
      alternateName: [...SITE.alternateName],
      url: SITE.url,
      description: SITE.description,
      publisher: { '@id': `${SITE.url}/#organization` },
      potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE.url}/business-loyalty-program/?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: page.title,
      description: page.description,
      url,
      isPartOf: { '@type': 'WebSite', url: SITE.url },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'OfferCatalog',
      name: 'Scan Perks Loyalty Plans',
      url: `${SITE.url}/pricing/`,
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Starter Plan',
          price: phrases.en.priceSchemaStarter,
          priceCurrency: 'USD',
          description: `QR stamp loyalty ${phrases.en.forOneVenue} — ${phrases.en.scansUpTo}. ${phrases.en.trial}, ${phrases.en.noCard}.`,
        },
        {
          '@type': 'Offer',
          name: 'Growth Plan',
          price: phrases.en.priceSchemaGrowth,
          priceCurrency: 'USD',
          description: `${phrases.en.unlimitedScansCap} for busy bars, cafes, and restaurants. ${phrases.en.trial}, ${phrases.en.noCard}.`,
        },
      ],
    },
    buildSoftwareApplicationSchema(),
  ];
}

/** FAQPage stays small: unique questions only, capped so the schema is not a dump of every FAQ. */
const FAQ_SCHEMA_LIMIT = 8;

export function buildFaqSchema(faqs: FaqSchemaInput[]) {
  const unique: FaqSchemaInput[] = [];
  const seen = new Set<string>();
  for (const faq of faqs) {
    const key = faq.question.trim().toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    unique.push(faq);
    if (unique.length >= FAQ_SCHEMA_LIMIT) break;
  }
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: unique.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
}

export function buildLoyaltyServiceSchema(input: {
  name: string;
  description: string;
  path: string;
  keyword: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: input.name,
    description: input.description,
    url: `${SITE.url}${input.path}`,
    provider: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
    },
    serviceType: input.keyword,
    areaServed: [
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Country', name: 'Canada' },
      { '@type': 'Country', name: 'Australia' },
    ],
    offers: {
      '@type': 'Offer',
      price: phrases.en.priceSchemaStarter,
      priceCurrency: 'USD',
      url: `${SITE.url}/pricing/`,
    },
  };
}

export function buildDefinedTermSchema(input: {
  term: string;
  description: string;
  path: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: input.term,
    description: input.description,
    inDefinedTermSet: {
      '@type': 'DefinedTermSet',
      name: 'Hospitality Loyalty Glossary',
      url: `${SITE.url}${input.path}`,
    },
  };
}

export function buildGuideArticleSchema(input: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: input.title,
    description: input.description,
    url: `${SITE.url}${input.path}`,
    author: {
      '@type': 'Person',
      '@id': `${SITE.url}/#founder`,
      name: FOUNDER.name,
      jobTitle: FOUNDER.jobTitle,
      sameAs: [...FOUNDER.sameAs],
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      logo: { '@type': 'ImageObject', url: `${SITE.url}/favicon.png` },
    },
  };
}

export function buildBlogPostingSchema(input: {
  title: string;
  description: string;
  path: string;
  publishedAt: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: input.title,
    description: input.description,
    url: `${SITE.url}${input.path}`,
    datePublished: input.publishedAt,
    author: {
      '@type': 'Person',
      name: FOUNDER.name,
      jobTitle: FOUNDER.jobTitle,
      url: SITE.url,
      sameAs: [...FOUNDER.sameAs],
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      logo: { '@type': 'ImageObject', url: `${SITE.url}/favicon.png` },
    },
  };
}

export function buildHowToSchema(input: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: input.name,
    description: input.description,
    step: input.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

export function buildVideoSchema(video: {
  title: string;
  description: string;
  src: string;
  poster: string;
  duration: string;
  uploadDate: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.title,
    description: video.description,
    thumbnailUrl: `${SITE.url}${video.poster}`,
    contentUrl: `${SITE.url}${video.src}`,
    uploadDate: video.uploadDate,
    duration: video.duration,
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE.url}/#organization`,
      name: SITE.name,
      logo: { '@type': 'ImageObject', url: `${SITE.url}/favicon.png` },
    },
  };
}

export function buildSoftwareApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: SITE.name,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    url: SITE.appWebUrl,
    sameAs: [SITE.appStore, SITE.playStore],
    description: SITE.description,
    featureList: [
      'One counter QR per venue; customers scan it in the free Scan Perks app',
      'Digital stamp cards and free-drink reward tiers',
      'Visit analytics and regulars list',
      'Push offers for slow days and happy hour',
      'No POS integration required',
    ],
    author: {
      '@type': 'Person',
      '@id': `${SITE.url}/#founder`,
      name: FOUNDER.name,
      jobTitle: FOUNDER.jobTitle,
      sameAs: [...FOUNDER.sameAs],
    },
    creator: {
      '@type': 'Person',
      '@id': `${SITE.url}/#founder`,
      name: FOUNDER.name,
    },
    offers: [
      {
        '@type': 'Offer',
        name: 'Starter',
        price: phrases.en.priceSchemaStarter,
        priceCurrency: 'USD',
        url: `${SITE.url}/pricing/`,
        description: `Starter plan, ${phrases.en.scans}. ${phrases.en.trial}, ${phrases.en.noCard} to start.`,
      },
      {
        '@type': 'Offer',
        name: 'Growth',
        price: phrases.en.priceSchemaGrowth,
        priceCurrency: 'USD',
        url: `${SITE.url}/pricing/`,
        description: `Growth plan, ${phrases.en.unlimitedScans}. ${phrases.en.trial}, ${phrases.en.noCard} to start.`,
      },
    ],
    provider: {
      '@type': 'Organization',
      '@id': `${SITE.url}/#organization`,
      name: SITE.name,
      url: SITE.url,
    },
  };
}
