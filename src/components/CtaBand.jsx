import { ArrowRight, MessageSquareText, Phone } from 'lucide-react'
import { business } from '../data/business'
import { Container } from './ui/Container'
import { Button } from './ui/Button'

// Closing call-to-action used at the bottom of most pages.
export function CtaBand({
  title = 'Let’s get your car feeling new again.',
  body = 'Tell us a little about your car and when works for you. We’ll text you back with a price and a time, usually within a couple of hours.',
  className = 'bg-white',
}) {
  return (
    <section aria-labelledby="cta-heading" className={`py-16 sm:py-24 ${className}`}>
      <Container>
        <div data-reveal className="relative overflow-hidden rounded-4xl bg-accent-400 px-6 py-12 sm:px-14 sm:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -bottom-40 size-[28rem] rounded-full bg-accent-300/70 blur-2xl"
          />
          <div className="relative grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div>
              <h2 id="cta-heading" className="text-[2rem] leading-[1.05] font-extrabold text-ink-950 sm:text-5xl">
                {title}
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-800">{body}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Button to="/contact" size="lg" className="flex-1">
                Book a detail
                <ArrowRight className="size-[18px]" aria-hidden="true" />
              </Button>
              <Button href={business.phoneHref} variant="outlineLight" size="lg" className="flex-1 border-ink-950/25 bg-white/40">
                <Phone className="size-[18px]" aria-hidden="true" />
                Give us a call
              </Button>
            </div>
          </div>
          <p className="relative mt-8 inline-flex flex-wrap items-center gap-2 text-sm text-ink-800">
            <MessageSquareText className="size-4" aria-hidden="true" />
            Prefer texting? So do we.{' '}
            <a href={business.smsHref} className="font-semibold text-ink-950 underline underline-offset-4">
              Send us a message
            </a>
          </p>
        </div>
      </Container>
    </section>
  )
}
