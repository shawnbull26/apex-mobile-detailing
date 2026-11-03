import { business } from './business'

// Update to the deployed URL (used for canonical links, Open Graph and the sitemap).
export const siteUrl = 'https://apex-mobile-detailing-example.netlify.app'

// This is a concept site for a fictional business, so ask search engines not to
// list it. Set to true for a real client launch (also restores the sitemap).
export const allowIndexing = false

export const pages = {
  '/': {
    title: 'Mobile Car Detailing in Northern Virginia & the DMV',
    description:
      'Friendly, local mobile car detailing that comes to your home or office in Fairfax, Arlington, Alexandria, Bethesda and across the DMV.',
  },
  '/services': {
    title: 'Services & Pricing',
    description:
      'Interior, exterior and full mobile detailing plus paint correction and ceramic coating in Northern Virginia and the DMV. Simple pricing by vehicle size.',
  },
  '/about': {
    title: 'About',
    description:
      'Apex Mobile Detailing is a small, locally owned mobile detailing business serving Northern Virginia, Maryland and DC.',
  },
  '/contact': {
    title: 'Book a Detail',
    description:
      'Book a mobile detail in Northern Virginia, Maryland or DC. Call, text, or send a request and we’ll get back to you with a price and a time.',
  },
}

export const notFound = { title: 'Page not found', description: 'This page doesn’t exist.' }

export const fullTitle = (title) => `${title} | ${business.name}`

const dayNames = { 'Monday – Friday': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], Saturday: ['Saturday'] }
const to24h = (t) => {
  const [, h, m, ap] = t.match(/(\d+):(\d+)\s*(am|pm)/)
  return `${String((Number(h) % 12) + (ap === 'pm' ? 12 : 0)).padStart(2, '0')}:${m}`
}

// schema.org structured data for search engines.
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'AutoWash',
  name: business.name,
  url: siteUrl,
  image: `${siteUrl}/og-image.jpg`,
  telephone: business.phoneHref.replace('tel:', ''),
  email: business.email,
  priceRange: '$$',
  areaServed: Object.values(business.serviceArea).flat(),
  openingHoursSpecification: business.hours
    .filter((h) => dayNames[h.days])
    .map((h) => {
      const [opens, closes] = h.time.split('–').map((t) => to24h(t.trim()))
      return { '@type': 'OpeningHoursSpecification', dayOfWeek: dayNames[h.days], opens, closes }
    }),
}
