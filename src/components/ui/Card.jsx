const tones = {
  white: 'bg-white',
  mist: 'bg-mist-50',
}

// Rounded surface used for most content blocks. Pass padding/layout via className.
export function Card({ as: Tag = 'div', tone = 'white', className = '', children, ...props }) {
  return (
    <Tag className={`rounded-4xl ring-1 ring-ink-950/[0.05] ${tones[tone]} ${className}`} {...props}>
      {children}
    </Tag>
  )
}
