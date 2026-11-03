import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router'
import { Menu, Phone, X } from 'lucide-react'
import { business, navLinks } from '../../data/business'
import { Container } from '../ui/Container'
import { Logo } from '../ui/Logo'
import { Button } from '../ui/Button'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const headerRef = useRef(null)
  const toggleRef = useRef(null)

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // While the mobile menu is open: move focus into it, keep Tab inside the
  // header, close on Escape, and hand focus back to the toggle afterwards.
  useEffect(() => {
    if (!open) return
    const header = headerRef.current
    const toggle = toggleRef.current
    header.querySelector('#mobile-menu a')?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggle.focus()
        return
      }
      if (e.key !== 'Tab') return
      const focusable = [...header.querySelectorAll('a[href], button')].filter((el) => el.offsetParent !== null)
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-40 transition-colors duration-200 ${
        scrolled || open ? 'bg-mist-50/85 shadow-[0_1px_0_rgb(15_42_31/0.06)] backdrop-blur-lg' : 'bg-mist-50'
      }`}
    >
      <Container className="flex h-16 items-center justify-between gap-6 lg:h-20">
        <Logo />

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1 rounded-full bg-white p-1 ring-1 ring-ink-950/[0.06]">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `block rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      isActive ? 'bg-ink-950 text-white' : 'text-ink-700 hover:bg-mist-100 hover:text-ink-950'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={business.phoneHref}
            className="hidden items-center gap-2 text-sm font-semibold text-ink-950 hover:text-accent-600 lg:inline-flex"
          >
            <Phone className="size-4" aria-hidden="true" />
            {business.phoneDisplay}
          </a>
          <Button to="/contact">Book a detail</Button>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <a
            href={business.phoneHref}
            className="grid size-11 place-items-center rounded-full text-ink-950"
            aria-label={`Call ${business.phoneDisplay}`}
          >
            <Phone className="size-5" aria-hidden="true" />
          </a>
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid size-11 place-items-center rounded-full bg-white text-ink-950 ring-1 ring-ink-950/10"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </Container>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="md:hidden">
          <Container className="pt-2 pb-6">
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      `block rounded-2xl px-4 py-3.5 font-display text-xl font-semibold ${
                        isActive ? 'bg-white text-ink-950 ring-1 ring-ink-950/[0.06]' : 'text-ink-700'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <Button to="/contact" size="lg" className="mt-4 w-full">
              Book a detail
            </Button>
          </Container>
        </nav>
      )}
    </header>
  )
}
