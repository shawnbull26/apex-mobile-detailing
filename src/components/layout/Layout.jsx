import { useLayoutEffect } from 'react'
import { Outlet, useLocation } from 'react-router'
import { Header } from './Header'
import { Footer } from './Footer'
import { MobileCallBar } from './MobileCallBar'
import { useReveal } from '../../hooks/useReveal'

export function Layout() {
  const { pathname, hash } = useLocation()

  // Reset scroll on page change; honor #anchors like /services#full.
  useLayoutEffect(() => {
    const target = hash && document.getElementById(hash.slice(1))
    if (target) target.scrollIntoView({ block: 'start', behavior: 'instant' })
    else window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])

  useReveal(pathname)

  return (
    <>
      <a
        href="#main"
        className="sr-only z-50 rounded-full bg-ink-950 px-4 py-2 font-semibold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        <Outlet />
      </main>
      {/* Bottom padding on mobile keeps the sticky call bar from covering the footer */}
      <div className="bg-ink-950 pb-[84px] md:pb-0">
        <Footer />
      </div>
      <MobileCallBar />
    </>
  )
}
