import { SITE } from '../data/content';

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

export function buildBaseSchema(page: SchemaPageInput) {
  const url = `${SITE.url}${page.path}`;
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
      logo: `${SITE.url}/favicon.png`,
      description: SITE.description,
      contactPoint: {
        '@type': 'ContactPoint',
        email: SITE.email,
        contactType: 'customer support',
      },
      sameAs: [SITE.social.twitter, SITE.social.instagram, SITE.social.linkedin],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE.name,
      url: SITE.url,
      description: SITE.description,
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
    author: { '@type': 'Organization', name: SITE.name },
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
    author: { '@type': 'Organization', name: SITE.name },
    publisher: {
      '@type': 'Organization',
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
    operatingSystem: 'iOS, Android',
    offers: {
      '@type': 'Offer',
      price: '10.00',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '120',
    },
  };
}
