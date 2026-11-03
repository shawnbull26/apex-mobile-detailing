import { Star } from 'lucide-react'
import { testimonials } from '../../data/testimonials'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Card } from '../ui/Card'
import { reveal } from '../../hooks/useReveal'

function Stars() {
  return (
    <div className="flex gap-0.5" role="img" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} className="size-4 fill-accent-500 text-accent-500" aria-hidden="true" />
      ))}
    </div>
  )
}

const initials = (name) =>
  name
    .split(' ')
    .map((part) => part[0])
    .join('')

export function Testimonials() {
  return (
    <section aria-labelledby="reviews-heading" className="bg-mist-50 py-20 sm:py-28">
      <Container>
        <SectionHeading
          id="reviews-heading"
          eyebrow="Kind words"
          title="From the people whose cars we look after"
          align="center"
        />

        <ul className="mt-14 grid gap-4 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <li key={t.name} {...reveal(i)}>
              <Card as="figure" className="flex h-full flex-col p-7 sm:p-8">
                <Stars />
                <blockquote className="mt-5 flex-1 text-[17px] leading-relaxed text-ink-800">
                  <p>“{t.quote}”</p>
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="grid size-11 place-items-center rounded-full bg-accent-300 font-display text-sm font-bold text-ink-950"
                  >
                    {initials(t.name)}
                  </span>
                  <div className="flex-1">
                    <p className="font-semibold text-ink-950">{t.name}</p>
                    <p className="text-sm text-ink-600">
                      {t.location} · {t.service}
                    </p>
                  </div>
                </figcaption>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
