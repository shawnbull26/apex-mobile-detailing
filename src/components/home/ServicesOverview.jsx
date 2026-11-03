import { Link } from 'react-router'
import { ArrowUpRight } from 'lucide-react'
import { services } from '../../data/services'
import { images } from '../../data/images'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { ImageSlot } from '../ui/ImageSlot'
import { Button } from '../ui/Button'
import { reveal } from '../../hooks/useReveal'
import { Card } from '../ui/Card'

export function ServicesOverview() {
  return (
    <section aria-labelledby="services-heading" className="bg-white py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            id="services-heading"
            eyebrow="What we do"
            title="Pick what your car needs. We’ll handle the rest."
            intro="Simple prices based on the size of your car. Not sure which one is right? Just ask. We’ll point you to what makes sense, even when that’s the less expensive option."
          />
          <Button to="/services" variant="outlineLight" className="shrink-0 self-start md:self-auto">
            See full pricing
          </Button>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <li key={service.id} {...reveal(i)}>
              <Card
                as={Link}
                tone="mist"
                to={`/services#${service.id}`}
                className="group flex h-full flex-col p-2 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-2xl hover:shadow-ink-950/10"
              >
                <div className="relative">
                  <ImageSlot
                    image={images[service.id]}
                    sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw"
                    className="aspect-[4/3] w-full rounded-[1.6rem]"
                  />
                  {service.popular && (
                    <span className="absolute top-3 left-3 rounded-full bg-accent-500 px-3 py-1 text-xs font-semibold text-ink-950">
                      Most booked
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col px-4 pt-5 pb-4">
                  <h3 className="text-xl leading-snug font-bold text-ink-950">{service.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">{service.short}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-ink-950 ring-1 ring-ink-950/[0.06]">
                      {service.priceRange}
                    </span>
                    <span className="grid size-9 place-items-center rounded-full bg-ink-950 text-white transition group-hover:bg-accent-500 group-hover:text-ink-950">
                      <ArrowUpRight className="size-4" aria-hidden="true" />
                      <span className="sr-only">See details</span>
                    </span>
                  </div>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
