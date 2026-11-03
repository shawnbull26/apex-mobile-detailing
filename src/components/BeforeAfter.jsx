import { useId, useState } from 'react'
import { MoveHorizontal } from 'lucide-react'
import { srcSetFor } from './ui/ImageSlot'

// Film-grain texture laid over the "before" photo to suggest dust and grime.
const GRIME =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3CfeColorMatrix values='0 0 0 0 0.35 0 0 0 0 0.28 0 0 0 0 0.18 0 0 0 0.9 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

// Drag-to-compare slider. A native range input drives it, so it works with
// keyboard, touch and screen readers.
// `before` and `after` take an image entry from data/images.js. When only `after`
// is given, the before side is a simulated, grimier copy of the same photo.
export function BeforeAfter({ after, before, className = '' }) {
  const [position, setPosition] = useState(50)
  const id = useId()
  const simulated = !before
  const beforeImage = before ?? after

  const img = (image, extra = '') => (
    <img
      src={`/images/${image.name}-800.webp`}
      srcSet={srcSetFor(image.name)}
      sizes="(min-width: 1200px) 1100px, 100vw"
      alt=""
      loading="lazy"
      decoding="async"
      draggable={false}
      className={`absolute inset-0 size-full object-cover select-none ${extra}`}
    />
  )

  return (
    <figure className={className}>
      <div className="relative aspect-[4/5] overflow-hidden rounded-4xl bg-mist-200 sm:aspect-[16/9]">
        {img(after)}
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
          {img(beforeImage, simulated ? 'brightness-[0.78] contrast-[0.85] saturate-[0.55] sepia-[0.35]' : '')}
          {simulated && (
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-40 mix-blend-multiply"
              style={{ backgroundImage: GRIME }}
            />
          )}
        </div>

        <span className="pointer-events-none absolute top-4 left-4 rounded-full bg-ink-950/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
          Before
        </span>
        <span className="pointer-events-none absolute top-4 right-4 rounded-full bg-accent-500 px-3 py-1 text-xs font-semibold text-ink-950">
          After
        </span>

        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 w-0.5 bg-white/90" style={{ left: `${position}%` }}>
          <span className="absolute top-1/2 left-1/2 grid size-12 -translate-1/2 place-items-center rounded-full bg-white text-ink-950 shadow-xl">
            <MoveHorizontal className="size-5" />
          </span>
        </div>

        <label htmlFor={id} className="sr-only">
          Drag to compare before and after
        </label>
        <input
          id={id}
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          aria-valuetext={`${position}% before`}
          className="peer absolute inset-0 size-full cursor-ew-resize opacity-0"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-4xl ring-4 ring-accent-500 ring-inset opacity-0 peer-focus-visible:opacity-100"
        />
      </div>
      {simulated && (
        <figcaption className="mt-3 text-sm text-ink-600">
          Concept demo: the “before” side is a simulated copy of the same photo. Swap in a real before/after pair from
          a client job.
        </figcaption>
      )}
    </figure>
  )
}
