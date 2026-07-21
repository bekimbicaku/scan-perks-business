import { SITE } from './content';

/** Machine-readable founder identity (schema, llms.txt, humans.txt) — not shown in public UI. */
export const FOUNDER = {
  name: 'Bekim Biçaku',
  alternateName: ['Bekim Bicaku', 'Bekim Biçaku'],
  jobTitle: 'Founder & Developer',
  description:
    'Bekim Biçaku is the founder and developer of Scan Perks, a QR loyalty platform for independent cafes, bars, and restaurants.',
  url: SITE.url,
  email: SITE.email,
  sameAs: ['https://www.linkedin.com/in/bekim-bi%C3%A7aku/'] as const,
  worksFor: {
    name: SITE.name,
    url: SITE.url,
  },
} as const;
