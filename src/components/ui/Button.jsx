import { Link } from 'react-router'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60'

const variants = {
  primary: 'bg-ink-950 text-white hover:bg-ink-800 shadow-lg shadow-ink-950/10',
  accent: 'bg-accent-500 text-ink-950 hover:bg-accent-400',
  outlineLight: 'border border-ink-950/15 bg-white/60 text-ink-950 hover:border-ink-950/30 hover:bg-white',
  outlineDark: 'border border-white/20 text-white hover:border-white/40 hover:bg-white/5',
}

const sizes = {
  md: 'h-11 px-5 text-sm',
  lg: 'h-13 px-7 text-base',
}

// Renders a router Link (`to`), an anchor (`href`), or a button.
export function Button({ to, href, variant = 'primary', size = 'md', className = '', children, ...props }) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`
  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
