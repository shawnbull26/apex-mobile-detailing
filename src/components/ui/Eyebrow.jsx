// Small pill label that sits above section headings.
export function Eyebrow({ children, tone = 'light', className = '' }) {
  const dark = tone === 'dark'
  return (
    <p
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${
        dark ? 'bg-white/10 text-accent-300' : 'bg-white text-ink-800 ring-1 ring-ink-950/[0.07]'
      } ${className}`}
    >
      <span aria-hidden="true" className="size-1.5 rounded-full bg-accent-500" />
      {children}
    </p>
  )
}
