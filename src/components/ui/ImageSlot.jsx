import { Camera } from 'lucide-react'

export const srcSetFor = (name) => `/images/${name}-480.webp 480w, /images/${name}-800.webp 800w, /images/${name}-1600.webp 1600w`

// Renders the responsive photo when `image.name` is set; otherwise a styled
// placeholder labelled with the shot we need.
export function ImageSlot({
  image,
  className = '',
  tone = 'light',
  eager = false,
  sizes = '(min-width: 1024px) 50vw, 100vw',
  labelAlign = 'left',
}) {
  if (image.name) {
    return (
      <img
        src={`/images/${image.name}-800.webp`}
        srcSet={srcSetFor(image.name)}
        sizes={sizes}
        alt={image.alt}
        loading={eager ? 'eager' : 'lazy'}
        fetchPriority={eager ? 'high' : undefined}
        decoding="async"
        className={`bg-mist-200 object-cover ${className}`}
      />
    )
  }

  const dark = tone === 'dark'
  return (
    <div
      role="img"
      aria-label={image.alt}
      className={`relative isolate flex items-end overflow-hidden ${labelAlign === 'right' ? 'justify-end' : ''} ${
        dark
          ? 'bg-[radial-gradient(120%_100%_at_85%_0%,#2e5e48_0%,#163a2b_50%,#0f2a1f_100%)] text-ink-300'
          : 'bg-[radial-gradient(120%_100%_at_85%_0%,#e3f7b5_0%,#cfe0c6_45%,#9fbaa8_100%)] text-ink-800'
      } ${className}`}
    >
      {dark && <div aria-hidden="true" className="grain absolute inset-0" />}
      <span
        className={`relative m-4 inline-flex max-w-[min(20rem,calc(100%-2rem))] items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-medium backdrop-blur-md ${
          dark ? 'bg-black/25' : 'bg-white/70'
        }`}
      >
        <Camera className="size-3.5 shrink-0" aria-hidden="true" />
        <span className="truncate">{image.label}</span>
      </span>
    </div>
  )
}
