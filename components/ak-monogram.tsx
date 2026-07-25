import { cn } from '@/lib/utils'

type AkMonogramProps = {
  className?: string
  /** Show the circular frame around the mark */
  framed?: boolean
  title?: string
}

/**
 * Premium "AK" monogram — a balance of justice whose stand is a cross,
 * set above serif AK letterforms. Uses currentColor so it inherits gold,
 * navy or white depending on placement.
 */
export function AkMonogram({
  className,
  framed = true,
  title = 'P. Arul Kumar monogram',
}: AkMonogramProps) {
  return (
    <svg
      viewBox="0 0 80 80"
      role="img"
      aria-label={title}
      className={cn('size-10 text-accent', className)}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      vectorEffect="non-scaling-stroke"
    >
      {framed ? (
        <>
          <circle cx="40" cy="40" r="38" strokeOpacity={0.35} strokeWidth={1} />
          <circle cx="40" cy="40" r="34.5" strokeOpacity={0.9} strokeWidth={1.2} />
        </>
      ) : null}

      {/* Cross — vertical stand of the scale */}
      <path d="M40 12v40" />
      <path d="M31 22h18" />

      {/* Balance beam */}
      <path d="M22 34h36" />

      {/* Hanging cords */}
      <path d="M22 34v3.5" strokeWidth={1.1} />
      <path d="M58 34v3.5" strokeWidth={1.1} />

      {/* Pans */}
      <path d="M15 37.5c1.6 5.6 4.1 8.4 7 8.4s5.4-2.8 7-8.4z" />
      <path d="M51 37.5c1.6 5.6 4.1 8.4 7 8.4s5.4-2.8 7-8.4z" />

      {/* Base */}
      <path d="M33 52h14" strokeWidth={1.2} />

      {/* AK letterforms */}
      <g stroke="none" fill="currentColor">
        <text
          x="40"
          y="72"
          textAnchor="middle"
          fontFamily="var(--font-serif, Georgia, serif)"
          fontSize="21"
          letterSpacing="1.5"
        >
          AK
        </text>
      </g>
    </svg>
  )
}
