import { Eyebrow } from './Eyebrow'

export function SectionHeading({ eyebrow, title, intro, tone = 'light', align = 'left', id }) {
  const dark = tone === 'dark'
  return (
    <div data-reveal className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <h2
        id={id}
        className={`mt-5 text-[2rem] leading-[1.08] font-bold sm:text-[2.75rem] ${dark ? 'text-white' : 'text-ink-950'}`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${dark ? 'text-ink-300' : 'text-ink-600'}`}>
          {intro}
        </p>
      )}
    </div>
  )
}
