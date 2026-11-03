import { useEffect } from 'react'

// Marks [data-reveal] elements with [data-revealed] once they scroll into view.
// Re-runs whenever `key` changes (e.g. on route change) to pick up new elements.
export function useReveal(key) {
  useEffect(() => {
    const pending = [...document.querySelectorAll('[data-reveal]:not([data-revealed])')]
    const reveal = (el) => el.setAttribute('data-revealed', '')

    if (!('IntersectionObserver' in window)) {
      pending.forEach(reveal)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          reveal(entry.target)
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    )
    pending.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [key])
}

// Spread onto an element to reveal it with an optional stagger step.
export const reveal = (step = 0) => ({
  'data-reveal': '',
  style: step ? { '--reveal-delay': `${step * 80}ms` } : undefined,
})
