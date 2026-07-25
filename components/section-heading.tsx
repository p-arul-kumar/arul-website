import { cn } from '@/lib/utils'
import { Reveal } from '@/components/reveal'

type Props = {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  tone = 'light',
  className,
}: Props) {
  const centered = align === 'center'
  return (
    <Reveal
      className={cn(
        'flex flex-col gap-4',
        centered ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      <span
        className={cn(
          'flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em]',
          tone === 'dark' ? 'text-accent' : 'text-accent-foreground/70',
        )}
      >
        <span className="h-px w-8 bg-accent" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2
        className={cn(
          'font-serif text-3xl leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl',
          tone === 'dark' ? 'text-primary-foreground' : 'text-primary',
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'max-w-2xl text-base leading-relaxed text-pretty',
            tone === 'dark' ? 'text-primary-foreground/70' : 'text-muted-foreground',
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}
