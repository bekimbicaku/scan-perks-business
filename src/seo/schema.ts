import { SITE } from '../data/content';
import { FOUNDER } from '../data/founder';

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
          price: '10.00',
          priceCurrency: 'USD',
          description: 'Business loyalty program for small venues — up to 200 customers',
        },
        {
          '@type': 'Offer',
          name: 'Growth Plan',
          price: '15.00',
          priceCurrency: 'USD',
          description: 'Full loyalty platform for high-traffic bars and restaurants',
        },
      ],
    },
  ];
}

export function buildFaqSchema(faqs: FaqSchemaInput[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
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
    areaServed: { '@type': 'Country', name: 'United States' },
    offers: {
      '@type': 'Offer',
      price: '10.00',
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

export function buildReviewSchema(review: {
  author: string;
  reviewBody: string;
  datePublished: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'SoftwareApplication',
      name: SITE.name,
      url: SITE.appWebUrl,
    },
    author: { '@type': 'Person', name: review.author },
    reviewBody: review.reviewBody,
    datePublished: review.datePublished,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5',
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
    description: SITE.description,
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
    offers: {
      '@type': 'Offer',
      price: '10.00',
      priceCurrency: 'USD',
      priceValidUntil: '2027-12-31',
      url: `${SITE.url}/pricing/`,
      description: '14-day free trial available',
    },
    provider: {
      '@type': 'Organization',
      '@id': `${SITE.url}/#organization`,
      name: SITE.name,
      url: SITE.url,
    },
  };
}
