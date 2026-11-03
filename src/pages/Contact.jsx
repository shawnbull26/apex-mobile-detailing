import { Clock, MapPin, MessageSquareText, Phone } from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'
import { pages } from '../data/seo'
import { business } from '../data/business'
import { PageHeader } from '../components/PageHeader'
import { ContactForm } from '../components/ContactForm'
import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'

export default function Contact() {
  usePageMeta(pages['/contact'])

  return (
    <>
      <PageHeader
        eyebrow="Book a detail"
        title="Let’s find a time that works for you."
        intro="Tell us a little about your car and we’ll text you back with a price and an arrival window. Rather talk it through? Give us a call and a real person will pick up."
      />

      <section className="bg-mist-50 pb-20 sm:pb-28">
        <Container className="grid gap-4 lg:grid-cols-[1.6fr_1fr]">
          <Card className="p-6 sm:p-10">
            <h2 className="text-2xl font-bold text-ink-950 sm:text-3xl">Request a booking</h2>
            <p className="mt-2 mb-8 text-ink-600">It only takes a minute. Fields marked * are required.</p>
            <ContactForm />
          </Card>

          <aside className="space-y-4" aria-label="Contact details">
            <div className="grain relative overflow-hidden rounded-4xl bg-ink-950 p-7 text-white">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-20 -right-20 size-60 rounded-full bg-accent-500/20 blur-3xl"
              />
              <div className="relative">
                <h2 className="text-2xl font-bold">Rather just call?</h2>
                <p className="mt-2 text-ink-300">
                  It’s the quickest way to get on the calendar, especially for this week. We’d love to hear from you.
                </p>
                <Button href={business.phoneHref} variant="accent" size="lg" className="mt-6 w-full">
                  <Phone className="size-[18px]" aria-hidden="true" />
                  {business.phoneDisplay}
                </Button>
                <Button href={business.smsHref} variant="outlineDark" className="mt-3 w-full">
                  <MessageSquareText className="size-4" aria-hidden="true" />
                  Send a text instead
                </Button>
                <p className="mt-5 text-sm text-ink-300">
                  Or email us at{' '}
                  <a href={`mailto:${business.email}`} className="text-white underline underline-offset-4 hover:text-accent-400">
                    {business.email}
                  </a>
                </p>
              </div>
            </div>

            <Card className="p-7">
              <h2 className="flex items-center gap-3 text-lg font-bold text-ink-950">
                <span className="grid size-9 place-items-center rounded-full bg-mist-100">
                  <Clock className="size-4" aria-hidden="true" />
                </span>
                When we’re out and about
              </h2>
              <dl className="mt-4 divide-y divide-mist-100 text-sm">
                {business.hours.map((h) => (
                  <div key={h.days} className="flex justify-between gap-4 py-2.5">
                    <dt className="text-ink-600">{h.days}</dt>
                    <dd className="font-semibold text-ink-950">{h.time}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-3 text-sm text-ink-600">Need an early start for a ceramic coating? Just ask.</p>
            </Card>

            <Card className="p-7">
              <h2 className="flex items-center gap-3 text-lg font-bold text-ink-950">
                <span className="grid size-9 place-items-center rounded-full bg-mist-100">
                  <MapPin className="size-4" aria-hidden="true" />
                </span>
                Where we go
              </h2>
              <div className="mt-5 space-y-4">
                {Object.entries(business.serviceArea).map(([region, places]) => (
                  <div key={region}>
                    <h3 className="text-xs font-semibold text-ink-600">{region}</h3>
                    <ul className="mt-2 flex flex-wrap gap-1.5">
                      {places.map((place) => (
                        <li key={place} className="rounded-full bg-mist-50 px-2.5 py-1 text-xs text-ink-800 ring-1 ring-ink-950/[0.05]">
                          {place}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="mt-5 border-t border-mist-100 pt-4 text-sm text-ink-600">
                Just outside these areas? Ask anyway. We can often make it work for a small travel fee.
              </p>
            </Card>
          </aside>
        </Container>
      </section>
    </>
  )
}
