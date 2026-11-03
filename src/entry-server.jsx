import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './App'

// Used by scripts/prerender.js at build time to produce static HTML per route.
export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
  )
}

export { pages, notFound, fullTitle, siteUrl, allowIndexing, localBusinessSchema } from './data/seo'
