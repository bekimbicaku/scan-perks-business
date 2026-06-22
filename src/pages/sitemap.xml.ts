import type { APIRoute } from 'astro';
import { SITE } from '../data/content';
import { loyaltyPages } from '../data/loyaltyPages';
import { blogArticles } from '../data/blogArticles';

const staticPages = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/business-loyalty-program/', priority: '0.99', changefreq: 'weekly' },
  { path: '/features/', priority: '0.9', changefreq: 'monthly' },
  { path: '/pricing/', priority: '0.95', changefreq: 'monthly' },
  { path: '/about/', priority: '0.7', changefreq: 'monthly' },
  { path: '/contact/', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog/', priority: '0.85', changefreq: 'weekly' },
];

export const GET: APIRoute = () => {
  const urls = [
    ...staticPages,
    ...loyaltyPages.map((p) => ({
      path: `/${p.slug}/`,
      priority: '0.95',
      changefreq: 'weekly',
    })),
    ...blogArticles.map((a) => ({
      path: `/blog/${a.slug}/`,
      priority: '0.8',
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
