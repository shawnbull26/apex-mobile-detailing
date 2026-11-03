import { usePageMeta } from '../hooks/usePageMeta'
import { pages } from '../data/seo'
import { Hero } from '../components/home/Hero'
import { ServicesOverview } from '../components/home/ServicesOverview'
import { WhyUs } from '../components/home/WhyUs'
import { Process } from '../components/home/Process'
import { Testimonials } from '../components/home/Testimonials'
import { CtaBand } from '../components/CtaBand'

export default function Home() {
  usePageMeta(pages['/'])

  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyUs />
      <Process />
      <Testimonials />
      <CtaBand />
    </>
  )
}
