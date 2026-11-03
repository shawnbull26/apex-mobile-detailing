import { Link } from 'react-router'
import { Mail, MapPin, Phone } from 'lucide-react'
import { business, navLinks } from '../../data/business'
import { Container } from '../ui/Container'
import { Logo } from '../ui/Logo'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-ink-950 text-ink-300">
      <Container className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
        <div>
          <Logo tone="dark" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            A small, local detailing crew looking after cars (and the people who drive them) across Northern
            Virginia, Maryland and DC.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">Explore</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">Hours</h2>
          <dl className="mt-4 space-y-2.5 text-sm">
            {business.hours.map((h) => (
              <div key={h.days}>
                <dt className="text-ink-400">{h.days}</dt>
                <dd className="text-white">{h.time}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">Say hello</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={business.phoneHref} className="inline-flex items-center gap-2.5 font-semibold text-white hover:text-accent-400">
                <Phone className="size-4 text-accent-500" aria-hidden="true" />
                {business.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${business.email}`} className="inline-flex items-center gap-2.5 hover:text-white">
                <Mail className="size-4 text-accent-500" aria-hidden="true" />
                {business.email}
              </a>
            </li>
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent-500" aria-hidden="true" />
              Fairfax, Arlington, Alexandria, Bethesda, Silver Spring &amp; the neighborhoods in between
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/[0.08]">
        <Container className="flex flex-col gap-2 py-6 text-xs text-ink-400 sm:flex-row sm:justify-between">
          <p>
            Concept site for a fictional business. Reviews, phone number and owner story are illustrative.
          </p>
          <p>
            Designed and built by{' '}
            {business.credit.url ? (
              <a href={business.credit.url} className="font-medium text-white underline underline-offset-4 hover:text-accent-400">
                {business.credit.author}
              </a>
            ) : (
              <span className="font-medium text-white">{business.credit.author}</span>
            )}{' '}
            · <span suppressHydrationWarning>© {year}</span>
          </p>
        </Container>
      </div>
    </footer>
  )
}
