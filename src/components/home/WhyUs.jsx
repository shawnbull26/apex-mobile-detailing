import { BadgeDollarSign, Droplets, Leaf, MapPin, MessageSquareText, Smile } from 'lucide-react'
import { images } from '../../data/images'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { ImageSlot } from '../ui/ImageSlot'
import { reveal } from '../../hooks/useReveal'
import { Card } from '../ui/Card'

const benefits = [
  {
    icon: Droplets,
    title: 'Nothing needed from you',
    body: 'We carry our own water and a quiet generator. No borrowing your hose, no extension cords through the window.',
  },
  {
    icon: BadgeDollarSign,
    title: 'Honest, upfront pricing',
    body: 'The price we quote is the price you pay. If something needs extra time, we’ll always talk to you first.',
  },
  {
    icon: Smile,
    title: 'A familiar face',
    body: 'No rotating crews. You’ll see the same people each visit, and we’ll remember how you like things done.',
  },
  {
    icon: Leaf,
    title: 'Gentle on your car',
    body: 'pH-neutral soaps, fresh microfiber for every panel, and dressings that don’t leave a greasy film behind.',
  },
  {
    icon: MessageSquareText,
    title: 'We keep you posted',
    body: 'A quick text when we’re on the way and another when we’re done, with photos so you can see the work.',
  },
]

export function WhyUs() {
  return (
    <section aria-labelledby="why-heading" className="bg-mist-50 py-20 sm:py-28">
      <Container>
        <SectionHeading
          id="why-heading"
          eyebrow="Why Apex"
          title="Why our neighbors keep calling us back"
          intro="Most people find us because they’re busy. They stick around because we treat their car (and their time) like it matters."
        />

        <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <li {...reveal()} className="grain relative overflow-hidden rounded-4xl bg-ink-950 p-8 text-white md:col-span-2 sm:p-10">
            <span className="grid size-12 place-items-center rounded-2xl bg-accent-500 text-ink-950">
              <MapPin className="size-6" aria-hidden="true" />
            </span>
            <h3 className="mt-8 max-w-md text-3xl leading-tight font-bold sm:text-4xl">
              We come to you. Wherever your car spends the day.
            </h3>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-ink-300">
              Your driveway, the curb out front, your office garage, or your apartment lot (with the building’s OK).
              You don’t have to rearrange a single thing.
            </p>
          </li>

          {benefits.map(({ icon: Icon, title, body }, i) => (
            <Card as="li" key={title} {...reveal((i % 3) + 1)} className="p-7">
              <span className="grid size-11 place-items-center rounded-2xl bg-mist-100 text-ink-950">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-xl font-bold text-ink-950">{title}</h3>
              <p className="mt-2 leading-relaxed text-ink-600">{body}</p>
            </Card>
          ))}

          <li {...reveal(2)} className="hidden md:block lg:col-span-2">
            <ImageSlot image={images.wheels} className="h-full min-h-56 w-full rounded-4xl" />
          </li>
        </ul>
      </Container>
    </section>
  )
}
