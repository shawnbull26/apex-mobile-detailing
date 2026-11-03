import { Container } from './ui/Container'
import { Eyebrow } from './ui/Eyebrow'

export function PageHeader({ eyebrow, title, intro, children }) {
  return (
    <section className="bg-mist-50">
      <Container className="pt-10 pb-14 sm:pt-16 sm:pb-20">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-6 max-w-4xl text-[2.6rem] leading-[1.02] font-extrabold text-ink-950 sm:text-6xl lg:text-[4.25rem]">
          {title}
        </h1>
        {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-600">{intro}</p>}
        {children}
      </Container>
    </section>
  )
}
