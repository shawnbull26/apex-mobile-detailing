// Writes a static HTML file for every route after `vite build`, so each page
// ships real content and its own title, description and social tags.
import { mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const serverDir = join(root, 'dist-server')

const { render, pages, notFound, fullTitle, siteUrl, allowIndexing, localBusinessSchema } = await import(
  pathToFileURL(join(serverDir, 'entry-server.js')).href
)
// Preload the Latin font files so text paints in the right font sooner.
const fontPreloads = (await readdir(join(dist, 'assets')))
  .filter((f) => /^(inter-latin-wght|bricolage-grotesque-latin-opsz)-normal-.*\.woff2$/.test(f))
  .map((f) => `<link rel="preload" href="/assets/${f}" as="font" type="font/woff2" crossorigin />`)
  .join('\n    ')

const template = (await readFile(join(dist, 'index.html'), 'utf8')).replace(
  '<link rel="icon"',
  `${fontPreloads}\n    <link rel="icon"`,
)

const escape = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

// Pages are written as <path>/index.html, which Netlify serves at <path>/
// (it 301-redirects <path> there), so canonical URLs carry the trailing slash.
const publicUrl = (path) => `${siteUrl}${path === '/' ? '/' : `${path}/`}`

function headTags({ title, description, path, noindex }) {
  const url = publicUrl(path)
  const tags = [
    `<title>${escape(fullTitle(title))}</title>`,
    `<meta name="description" content="${escape(description)}" />`,
    noindex || !allowIndexing ? '<meta name="robots" content="noindex" />' : null,
    noindex ? null : `<link rel="canonical" href="${url}" />`,
    '<meta property="og:type" content="website" />',
    '<meta property="og:site_name" content="Apex Mobile Detailing" />',
    `<meta property="og:title" content="${escape(fullTitle(title))}" />`,
    `<meta property="og:description" content="${escape(description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${siteUrl}/og-image.jpg" />`,
    '<meta property="og:image:width" content="1200" />',
    '<meta property="og:image:height" content="630" />',
    '<meta name="twitter:card" content="summary_large_image" />',
    `<script type="application/ld+json">${JSON.stringify(localBusinessSchema)}</script>`,
  ]
  return tags.filter(Boolean).join('\n    ')
}

function page(meta, path) {
  const html = render(path)
  return template
    .replace(/<title>.*?<\/title>\s*<meta\s+name="description"[\s\S]*?\/>/, headTags({ ...meta, path }))
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
}

for (const [path, meta] of Object.entries(pages)) {
  const file = path === '/' ? join(dist, 'index.html') : join(dist, path, 'index.html')
  await mkdir(dirname(file), { recursive: true })
  await writeFile(file, page(meta, path))
  console.log(`prerendered ${path}`)
}

await writeFile(join(dist, '404.html'), page({ ...notFound, noindex: true }, '/404'))
console.log('prerendered 404.html')

if (allowIndexing) {
  const today = new Date().toISOString().slice(0, 10)
  const urls = Object.keys(pages)
    .map((p) => `  <url><loc>${publicUrl(p)}</loc><lastmod>${today}</lastmod></url>`)
    .join('\n')
  await writeFile(
    join(dist, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
  )
  await writeFile(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`)
  console.log('wrote sitemap.xml and robots.txt')
} else {
  // Crawling stays allowed so search engines can read each page's noindex tag.
  await writeFile(join(dist, 'robots.txt'), '# Concept site: pages carry a noindex tag.\nUser-agent: *\nAllow: /\n')
  console.log('indexing disabled: wrote robots.txt, skipped sitemap.xml')
}

await rm(serverDir, { recursive: true, force: true })
