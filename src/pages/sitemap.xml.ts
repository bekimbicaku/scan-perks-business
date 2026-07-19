import type { APIRoute } from 'astro';
import { SITE } from '../data/content';
import { loyaltyPages } from '../data/loyaltyPages';
import { keywordLandings } from '../data/keywordLandings';
import { blogArticles } from '../data/blogArticles';

const MONEY_PAGE_PRIORITY: Record<string, string> = {
  'bar-loyalty-program': '0.95',
  'cafe-loyalty-program': '0.5',
  'qr-loyalty-program': '0.5',
  'restaurant-loyalty-program': '0.97',
  'grow-restaurant-business': '0.96',
};

const KEYWORD_LANDING_PRIORITY: Record<string, string> = {
  'pub-loyalty-card': '1.0',
  'pub-loyalty-scheme': '1.0',
  'cafe-loyalty-app': '1.0',
  'coffee-shop-loyalty-programs': '0.99',
  'qr-code-loyalty-program': '0.99',
};

const staticPages = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/pub-loyalty-card/', priority: '1.0', changefreq: 'weekly' },
  { path: '/pub-loyalty-scheme/', priority: '1.0', changefreq: 'weekly' },
  { path: '/cafe-loyalty-app/', priority: '1.0', changefreq: 'weekly' },
  { path: '/coffee-shop-loyalty-programs/', priority: '0.99', changefreq: 'weekly' },
  { path: '/qr-code-loyalty-program/', priority: '0.99', changefreq: 'weekly' },
  { path: '/bar-loyalty-program/', priority: '0.95', changefreq: 'weekly' },
  { path: '/g2/', priority: '0.9', changefreq: 'monthly' },
  { path: '/press/', priority: '0.85', changefreq: 'monthly' },
  { path: '/faq/', priority: '0.98', changefreq: 'weekly' },
  { path: '/scanbucks/', priority: '0.95', changefreq: 'monthly' },
  { path: '/how-it-works/', priority: '0.96', changefreq: 'monthly' },
  { path: '/business-loyalty-program/', priority: '0.97', changefreq: 'weekly' },
  { path: '/features/', priority: '0.95', changefreq: 'weekly' },
  { path: '/pricing/', priority: '0.95', changefreq: 'monthly' },
  { path: '/about/', priority: '0.85', changefreq: 'monthly' },
  { path: '/contact/', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog/', priority: '0.85', changefreq: 'weekly' },
];

export const GET: APIRoute = () => {
  const staticPaths = new Set(staticPages.map((p) => p.path));

  const urls = [
    ...staticPages,
    ...loyaltyPages
      .filter((p) => !staticPaths.has(`/${p.slug}/`))
      .map((p) => ({
        path: `/${p.slug}/`,
        priority: MONEY_PAGE_PRIORITY[p.slug] ?? '0.9',
        changefreq: p.slug.includes('cafe-loyalty-program') || p.slug.includes('qr-loyalty-program')
          ? 'monthly'
          : 'weekly',
      })),
    ...keywordLandings
      .filter((p) => !staticPaths.has(`/${p.slug}/`))
      .map((p) => ({
        path: `/${p.slug}/`,
        priority: KEYWORD_LANDING_PRIORITY[p.slug] ?? '0.98',
        changefreq: 'weekly',
      })),
    ...blogArticles.map((a) => ({
      path: `/blog/${a.slug}/`,
      priority: ['best-coffee-loyalty-programs', 'qr-code-loyalty-program-guide', 'best-mobile-loyalty-apps-coffee-shops-2026', 'how-to-choose-qr-loyalty-program-cafe'].includes(a.slug)
        ? '0.92'
        : '0.8',
      changefreq: 'monthly',
      lastmod: a.publishedAt,
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${SITE.url}${u.path}</loc>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>${'lastmod' in u && u.lastmod ? `\n    <lastmod>${u.lastmod}</lastmod>` : ''}
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
