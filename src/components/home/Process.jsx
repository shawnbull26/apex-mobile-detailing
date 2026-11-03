import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { reveal } from '../../hooks/useReveal'

const steps = [
  {
    title: 'Say hello',
    body: 'Fill out the quick form, call, or send a text. Tell us what you drive, where it’ll be, and what day works for you.',
  },
  {
    title: 'Get your quote',
    body: 'We’ll text back a firm price and an arrival window, usually within a couple of hours. A photo or two helps us get it just right.',
  },
  {
    title: 'We get to work',
    body: 'We’ll let you know when we’re on our way. No need to hang around. Just leave the keys wherever we agreed.',
  },
  {
    title: 'See it, then pay',
    body: 'We walk around the car together when we’re done. Only once you’re happy do you pay, by card, Apple Pay, Google Pay or Zelle.',
  },
]

export function Process() {
  return (
    <section aria-labelledby="process-heading" className="bg-white py-20 sm:py-28">
      <Container>
        <div className="grain relative overflow-hidden rounded-4xl bg-ink-950 px-6 py-14 sm:px-12 sm:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 -right-24 size-96 rounded-full bg-accent-500/20 blur-3xl"
          />
          <div className="relative">
            <SectionHeading
              id="process-heading"
              tone="dark"
              eyebrow="How it works"
              title="Booking us is easy. Promise."
              intro="Four simple steps, and most of them happen while you’re busy doing something else."
            />

            <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, i) => (
                <li key={step.title} {...reveal(i)} className="rounded-3xl bg-white/[0.05] p-6 ring-1 ring-white/10">
                  <span
                    aria-hidden="true"
                    className="grid size-11 place-items-center rounded-full bg-accent-500 font-display text-lg font-bold text-ink-950"
                  >
                    {i + 1}
                  </span>
                  <h3 className="mt-6 text-lg font-bold text-white">
                    <span className="sr-only">Step {i + 1}: </span>
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-300">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  )
}
