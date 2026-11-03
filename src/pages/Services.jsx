import { ArrowRight, Check, Clock, Plus, Repeat } from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'
import { pages } from '../data/seo'
import { addOns, services, vehicleSizes } from '../data/services'
import { images } from '../data/images'
import { PageHeader } from '../components/PageHeader'
import { CtaBand } from '../components/CtaBand'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { ImageSlot } from '../components/ui/ImageSlot'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { BeforeAfter } from '../components/BeforeAfter'

const plans = [
  { name: 'Every 2 weeks', price: '$119–$169', perk: 'Great for daily commuters and busy families' },
  { name: 'Every 4 weeks', price: '$139–$189', perk: 'Great for garaged or lighter-use cars' },
]

const planIncludes = [
  'Hand wash, wheels and tires',
  'Interior vacuum and wipe-down',
  'Glass, inside and out',
  'A sealant top-up to keep protection going',
  'Your same day and time, saved just for you',
]

const faqs = [
  {
    q: 'Do I need to be home?',
    a: 'Not at all. Lots of our clients leave the car unlocked or the keys somewhere we’ve agreed on. We’ll send you photos when we’re finished so you can see how it turned out.',
  },
  {
    q: 'Do you need to use my water or power?',
    a: 'Nope. We bring our own water and a quiet generator, so we can work in a driveway, on the street, or in most parking garages.',
  },
  {
    q: 'Can you come to my apartment or office?',
    a: 'Usually, yes! Some buildings and HOAs have rules about on-site detailing, so it’s worth a quick check with your property manager. Covered garages are our favorite.',
  },
  {
    q: 'What if it rains?',
    a: 'Interior work can usually go ahead rain or shine. For exterior work and coatings, we’ll reach out the day before and find you the next good day. No charge, no hassle.',
  },
  {
    q: 'Why is there a price range?',
    a: 'Mostly it comes down to the size of your car, and a little to its condition. A sedan with everyday wear is at the low end; a third-row SUV after a beach trip is at the top. Either way, you’ll know the exact price before we start.',
  },
  {
    q: 'How do I pay?',
    a: 'Card, Apple Pay, Google Pay or Zelle, after we’ve walked around the car together. No deposit for standard details. Ceramic coating days take a small deposit to hold your spot.',
  },
]

function formatPrice(price, from) {
  return `${from ? 'from ' : ''}$${price}`
}

export default function Services() {
  usePageMeta(pages['/services'])

  return (
    <>
      <PageHeader
        eyebrow="Services & pricing"
        title="Simple services, honest prices."
        intro="Every price includes travel anywhere we serve, so there are no surprise fees. If your car needs a little extra, we’ll always talk with you about it before we start."
      >
        <nav aria-label="Jump to service" className="mt-9 flex flex-wrap gap-2">
          {services.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-full bg-white px-4 py-2 text-sm font-medium text-ink-800 ring-1 ring-ink-950/[0.07] transition hover:bg-ink-950 hover:text-white"
            >
              {s.name}
            </a>
          ))}
        </nav>
      </PageHeader>

      <div className="bg-white py-8 sm:py-12">
        <Container className="space-y-6">
          {services.map((service, i) => (
            <Card
              as="article"
              tone="mist"
              key={service.id}
              id={service.id}
              aria-labelledby={`${service.id}-title`}
              className="grid scroll-mt-24 gap-8 p-3 lg:grid-cols-2 lg:gap-10"
            >
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <ImageSlot image={images[service.id]} className="aspect-[4/3] h-full w-full rounded-[1.6rem]" />
              </div>

              <div className="px-4 pt-2 pb-6 sm:px-6 lg:py-8">
                <div className="flex flex-wrap items-center gap-2">
                  {service.popular && (
                    <span className="rounded-full bg-accent-500 px-3 py-1 text-xs font-semibold text-ink-950">
                      Most booked
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-medium text-ink-700 ring-1 ring-ink-950/[0.06]">
                    <Clock className="size-3.5" aria-hidden="true" />
                    {service.duration}
                  </span>
                </div>
                <h2 id={`${service.id}-title`} className="mt-5 text-3xl font-bold text-ink-950 sm:text-4xl">
                  {service.name}
                </h2>
                <p className="mt-3 text-lg leading-relaxed text-ink-600">{service.short}</p>
                <p className="mt-3 text-sm text-ink-600">
                  <span className="font-semibold text-ink-900">Perfect for:</span> {service.bestFor}
                </p>

                <dl className="mt-7 grid grid-cols-3 gap-2">
                  {vehicleSizes.map((size, idx) => (
                    <div key={size} className="rounded-2xl bg-white p-3 ring-1 ring-ink-950/[0.05] sm:p-4">
                      <dt className="text-[11px] leading-tight text-ink-600 sm:text-xs">{size}</dt>
                      <dd className="mt-1.5 font-display text-lg font-bold text-ink-950 sm:text-xl">
                        {formatPrice(service.prices[idx], service.pricesFrom)}
                      </dd>
                    </div>
                  ))}
                </dl>
                {service.note && <p className="mt-3 text-sm text-ink-600">{service.note}</p>}

                <h3 className="mt-8 text-sm font-semibold text-ink-950">What’s included</h3>
                <ul className="mt-4 space-y-3">
                  {service.includes.map((item) => (
                    <li key={item} className="flex gap-3 text-ink-800">
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-accent-400">
                        <Check className="size-3 text-ink-950" strokeWidth={3} aria-hidden="true" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <Button to={`/contact?service=${service.id}`} size="lg" className="mt-8">
                  Book this service
                  <ArrowRight className="size-[18px]" aria-hidden="true" />
                </Button>
              </div>
            </Card>
          ))}
        </Container>
      </div>

      <section aria-labelledby="compare-heading" className="bg-white py-12 sm:py-16">
        <Container>
          <SectionHeading
            id="compare-heading"
            eyebrow="See the difference"
            title="What a little care can do"
            intro="Drag the slider to compare. Dull, dusty surfaces on one side, clean and protected on the other."
          />
          <BeforeAfter after={images.interior} className="mt-10" />
        </Container>
      </section>

      <section aria-labelledby="plan-heading" className="bg-white py-12 sm:py-16">
        <Container>
          <div className="grain relative grid gap-12 overflow-hidden rounded-4xl bg-ink-950 px-6 py-12 text-white sm:px-12 sm:py-16 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
            <div>
              <SectionHeading
                id="plan-heading"
                tone="dark"
                eyebrow="Maintenance plan"
                title="Love that just-detailed feeling? Keep it."
                intro="After a Full Detail, we can stop by on a regular schedule. Each visit is quicker because your car never gets far behind, so it costs less too."
              />
              <ul className="mt-8 space-y-3">
                {planIncludes.map((item) => (
                  <li key={item} className="flex gap-3 text-ink-300">
                    <Check className="mt-0.5 size-5 shrink-0 text-accent-500" strokeWidth={2.5} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {plans.map((plan) => (
                <div key={plan.name} className="rounded-3xl bg-white/[0.06] p-6 ring-1 ring-white/10 sm:p-7">
                  <span className="grid size-10 place-items-center rounded-full bg-accent-500 text-ink-950">
                    <Repeat className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold">{plan.name}</h3>
                  <p className="mt-1 text-sm text-ink-300">{plan.perk}</p>
                  <p className="mt-6 font-display text-3xl font-bold">{plan.price}</p>
                  <p className="text-sm text-ink-400">per visit, by vehicle size</p>
                </div>
              ))}
              <p className="text-sm text-ink-300 sm:col-span-2">
                No contracts, ever. Skip or cancel any visit with 24 hours’ notice.
              </p>
              <Button to="/contact?service=maintenance" variant="accent" size="lg" className="sm:col-span-2">
                Ask about a maintenance plan
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="addons-heading" className="bg-mist-50 py-20 sm:py-24">
        <Container>
          <SectionHeading
            id="addons-heading"
            eyebrow="Add-ons"
            title="Little extras for any detail"
            intro="Just mention these when you book so we can plan enough time."
          />
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {addOns.map((addOn) => (
              <li
                key={addOn.name}
                className="flex items-center justify-between gap-4 rounded-3xl bg-white px-5 py-5 ring-1 ring-ink-950/[0.05]"
              >
                <span className="inline-flex items-center gap-3 font-medium text-ink-900">
                  <span className="grid size-8 place-items-center rounded-full bg-mist-100">
                    <Plus className="size-4 text-ink-700" aria-hidden="true" />
                  </span>
                  {addOn.name}
                </span>
                <span className="shrink-0 font-display font-bold text-ink-950">{addOn.price}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="faq-heading" className="bg-white py-20 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading
            id="faq-heading"
            eyebrow="Questions"
            title="Things people often ask us"
            intro="Don’t see yours here? Give us a call or a text. We’re always happy to chat."
          />
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="group rounded-3xl bg-mist-50 px-6 py-5 ring-1 ring-ink-950/[0.05] open:bg-white">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-semibold text-ink-950 [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <span
                    aria-hidden="true"
                    className="grid size-8 shrink-0 place-items-center rounded-full bg-ink-950 text-white transition group-open:rotate-45 group-open:bg-accent-500 group-open:text-ink-950"
                  >
                    <Plus className="size-4" />
                  </span>
                </summary>
                <p className="mt-3 pr-10 leading-relaxed text-ink-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        className="bg-mist-50"
        title="Not sure which one you need?"
        body="Send us a couple of photos of your car and we’ll tell you honestly what it needs. Sometimes that’s less than you’d think."
      />
    </>
  )
}
