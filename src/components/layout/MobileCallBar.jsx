import { CalendarDays, Phone } from 'lucide-react'
import { Link } from 'react-router'
import { business } from '../../data/business'

// Always-visible call + book bar on small screens.
export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden">
      <div className="grid grid-cols-2 gap-1.5 rounded-full bg-ink-950/95 p-1.5 shadow-2xl shadow-ink-950/30 backdrop-blur-md">
        <a
          href={business.phoneHref}
          className="flex h-12 items-center justify-center gap-2 rounded-full bg-accent-500 font-semibold text-ink-950 active:bg-accent-400"
        >
          <Phone className="size-[18px]" aria-hidden="true" />
          Call us
        </a>
        <Link
          to="/contact"
          className="flex h-12 items-center justify-center gap-2 rounded-full font-semibold text-white active:bg-white/10"
        >
          <CalendarDays className="size-[18px]" aria-hidden="true" />
          Book online
        </Link>
      </div>
    </div>
  )
}
