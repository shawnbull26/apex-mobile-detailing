import { Link } from 'react-router'

export function Logo({ tone = 'light', className = '' }) {
  const dark = tone === 'dark'
  return (
    <Link to="/" className={`inline-flex items-center gap-2.5 ${className}`} aria-label="Apex Mobile Detailing home">
      <svg viewBox="0 0 32 32" className="size-9 shrink-0" aria-hidden="true">
        <rect width="32" height="32" rx="10" className={dark ? 'fill-accent-500' : 'fill-ink-950'} />
        <path d="M16 7.5 24.5 24h-4.5L16 16.25 12 24H7.5Z" className={dark ? 'fill-ink-950' : 'fill-accent-500'} />
      </svg>
      <span className="leading-none">
        <span className={`block font-display text-[17px] font-bold tracking-tight ${dark ? 'text-white' : 'text-ink-950'}`}>
          Apex
        </span>
        <span className={`mt-0.5 block text-[11px] font-medium ${dark ? 'text-ink-300' : 'text-ink-600'}`}>
          Mobile Detailing
        </span>
      </span>
    </Link>
  )
}
