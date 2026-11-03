import { useEffect } from 'react'
import { fullTitle } from '../data/seo'

// Keeps title/description in sync during client-side navigation.
// The prerender script writes the same values into each page's static HTML.
export function usePageMeta({ title, description }) {
  useEffect(() => {
    document.title = fullTitle(title)
    if (description) {
      document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    }
  }, [title, description])
}
