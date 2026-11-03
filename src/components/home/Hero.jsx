import { ArrowRight, Check, Droplets, Phone } from 'lucide-react'
import { business } from '../../data/business'
import { images } from '../../data/images'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { Eyebrow } from '../ui/Eyebrow'
import { ImageSlot } from '../ui/ImageSlot'

const trustPoints = ['Fully insured', 'Pay after you’ve seen it', 'No hose or outlet needed']
const towns = ['Fairfax', 'Arlington', 'Alexandria', 'McLean', 'Reston', 'Bethesda', 'Silver Spring', 'DC']

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden bg-mist-50">
      <Container className="grid items-center gap-14 pt-8 pb-16 sm:pt-12 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:pt-14 lg:pb-24">
        <div>
          <Eyebrow>Mobile detailing in {business.region}</Eyebrow>
          <h1
            id="hero-heading"
            className="mt-6 text-[2.75rem] leading-[1] font-extrabold text-ink-950 sm:text-[4rem] lg:text-[4.5rem]"
          >
            Your car, cared for{' '}
            <span className="relative whitespace-nowrap">
              <span
                aria-hidden="true"
                className="absolute inset-x-[-0.1em] bottom-[0.06em] -z-0 h-[0.38em] -rotate-1 rounded-full bg-accent-400/80"
              />
              <span className="relative">right where</span>
            </span>{' '}
            it’s parked.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-600">
            Hi, I’m {business.owner}. My small team and I bring everything we need (water, power and a whole lot of
            microfiber) to your driveway or office. You hand over the keys, get on with your day, and come back to
            a car that feels like yours again.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button to="/contact" size="lg">
              Book a detail
              <ArrowRight className="size-[18px]" aria-hidden="true" />
            </Button>
            <Button href={business.phoneHref} variant="outlineLight" size="lg">
              <Phone className="size-[18px]" aria-hidden="true" />
              {business.phoneDisplay}
            </Button>
          </div>

          <ul className="mt-9 flex flex-wrap gap-2">
            {trustPoints.map((point) => (
              <li
                key={point}
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-sm text-ink-700 ring-1 ring-ink-950/[0.06]"
              >
                <Check className="size-4 text-accent-600" strokeWidth={2.5} aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <ImageSlot
            image={images.hero}
            eager
            labelAlign="right"
            className="aspect-[4/5] w-full rounded-4xl sm:aspect-[5/4] lg:aspect-[4/5]"
          />

          <div className="absolute top-5 -left-2 w-56 rounded-3xl bg-white p-4 shadow-xl shadow-ink-950/10 sm:left-5 lg:-left-10">
            <p className="text-xs font-semibold text-accent-600">Most booked</p>
            <p className="mt-1 font-display text-lg font-bold text-ink-950">Full Detail</p>
            <p className="mt-0.5 text-sm text-ink-600">Inside and out, about 4–5 hours</p>
            <p className="mt-3 inline-flex rounded-full bg-mist-100 px-3 py-1 text-sm font-semibold text-ink-950">
              from $249
            </p>
          </div>

          <div className="absolute -right-2 bottom-16 flex max-w-[15rem] items-center gap-3 rounded-3xl bg-ink-950 p-4 text-white shadow-xl shadow-ink-950/20 sm:right-5 lg:-right-6">
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-accent-500 text-ink-950">
              <Droplets className="size-5" aria-hidden="true" />
            </span>
            <p className="text-sm leading-snug">
              We bring our own water and power. <span className="text-ink-300">You don’t lift a finger.</span>
            </p>
          </div>
        </div>
      </Container>

      <Container className="pb-12">
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <span className="mr-2 font-medium text-ink-950">You’ll find us in</span>
          {towns.map((town) => (
            <span key={town} className="rounded-full border border-ink-950/10 px-3 py-1 text-ink-600">
              {town}
            </span>
          ))}
          <span className="px-1 text-ink-600">and nearby</span>
        </div>
      </Container>
    </section>
  )
}
