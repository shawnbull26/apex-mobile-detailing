import { usePageMeta } from '../hooks/usePageMeta'
import { notFound } from '../data/seo'
import { PageHeader } from '../components/PageHeader'
import { Button } from '../components/ui/Button'

export default function NotFound() {
  usePageMeta(notFound)
  return (
    <PageHeader eyebrow="404" title="Oops, this page took a wrong turn." intro="We couldn’t find what you were looking for, but we’d be glad to help you find your way.">
      <div className="mt-8 flex flex-wrap gap-3">
        <Button to="/">Back to home</Button>
        <Button to="/contact" variant="outlineLight">
          Book a detail
        </Button>
      </div>
    </PageHeader>
  )
}
