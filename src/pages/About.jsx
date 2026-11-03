import { Clock, Heart, Search } from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'
import { pages } from '../data/seo'
import { business } from '../data/business'
import { images } from '../data/images'
import { PageHeader } from '../components/PageHeader'
import { CtaBand } from '../components/CtaBand'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { ImageSlot } from '../components/ui/ImageSlot'
import { Card } from '../components/ui/Card'

// Story details (owner name, year, background) are placeholders. Swap in the real ones.
const values = [
  {
    icon: Clock,
    title: 'We show up when we say we will',
    body: 'Your time matters. If we give you an arrival window, we keep it. If traffic on 495 has other plans, you’ll hear from us before the window starts.',
  },
  {
    icon: Search,
    title: 'We care about the little things',
    body: 'Seat rails, door jambs, the gap around the shifter. Nobody checks those spots, which is exactly why we do. That’s the difference you feel.',
  },
  {
    icon: Heart,
    title: 'We make it easy on you',
    body: 'Book by text, pay from your phone, and never worry about water or power. Honestly, the less you have to think about it, the happier we are.',
  },
]

const facts = [
  { value: 'Owner-operated', label: 'You’ll talk to the owner, not a call center' },
  { value: 'Self-contained', label: 'Our own water, power and supplies on every job' },
  { value: 'Fully insured', label: 'Peace of mind at your home or your office' },
]

export default function About() {
  usePageMeta(pages['/about'])

  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="Small, local, and genuinely happy to see your car."
        intro={`We’re ${business.owner} and a small crew from Fairfax County, out on the road across the DMV six days a week.`}
      />

      <section aria-labelledby="story-heading" className="bg-white py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <ImageSlot image={images.owner} className="aspect-[4/5] w-full rounded-4xl" />
          </div>

          <div className="max-w-xl">
            <SectionHeading eyebrow="Our story" id="story-heading" title="It all started with a neighbor asking, “Could you do mine next?”" />
            <div className="mt-7 space-y-5 text-lg leading-relaxed text-ink-700">
              <p>
                Hi, I’m {business.owner}. Before Apex, I spent years working at a detail shop off Route 50. Most
                weekends, I’d end up washing a friend’s car in my driveway in Springfield, just because I loved doing
                it. Then a neighbor asked if I could do theirs. Then their coworker. By 2019, I had more driveway jobs
                than shop shifts, and Apex was born.
              </p>
              <p>
                Along the way I kept hearing the same thing. People didn’t mind paying for a great detail. What they
                minded was losing half a Saturday driving to a shop, sitting in a waiting room, and picking the car up
                to find the cupholders still sticky.
              </p>
              <p>
                So we built everything around fixing that. We come to you, we bring everything we need, and we treat
                every car like it belongs to someone in our own family. We’re staying small on purpose, because it’s
                the best way we know to keep the care where it should be.
              </p>
              <p>Thanks for being here. We’d love to meet you (and your car).</p>
            </div>
            <div className="mt-9 flex items-center gap-4">
              <span
                aria-hidden="true"
                className="grid size-14 place-items-center rounded-full bg-accent-400 font-display text-xl font-bold text-ink-950"
              >
                {business.owner[0]}
              </span>
              <div>
                <p className="font-display text-lg font-bold text-ink-950">{business.owner}</p>
                <p className="text-sm text-ink-600">Owner, Apex Mobile Detailing</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section aria-label="At a glance" className="bg-white pb-20 sm:pb-28">
        <Container>
          <dl className="grid gap-3 sm:grid-cols-3">
            {facts.map((fact) => (
              <Card tone="mist" key={fact.value} className="p-7">
                <dt className="font-display text-2xl font-bold text-ink-950">{fact.value}</dt>
                <dd className="mt-2 text-ink-600">{fact.label}</dd>
              </Card>
            ))}
          </dl>
        </Container>
      </section>

      <section aria-labelledby="values-heading" className="bg-mist-50 py-20 sm:py-28">
        <Container>
          <SectionHeading
            id="values-heading"
            eyebrow="What we believe"
            title="A few promises we make to everyone"
          />
          <ul className="mt-12 grid gap-4 md:grid-cols-3">
            {values.map(({ icon: Icon, title, body }) => (
              <Card as="li" key={title} className="p-7 sm:p-8">
                <span className="grid size-12 place-items-center rounded-2xl bg-accent-400 text-ink-950">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-xl font-bold text-ink-950">{title}</h3>
                <p className="mt-3 leading-relaxed text-ink-600">{body}</p>
              </Card>
            ))}
          </ul>

          <ImageSlot image={images.detailWork} className="mt-4 aspect-[16/9] w-full rounded-4xl sm:aspect-[21/9]" />
        </Container>
      </section>

      <CtaBand title="We’d love to take one thing off your list." />
    </>
  )
}
