import Image from 'next/image'
import { ArrowDown, CalendarCheck, HeartHandshake } from 'lucide-react'
import { site } from '@/lib/site'
import { Reveal } from '@/components/reveal'

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-screen items-end overflow-hidden bg-primary pt-28 pb-10 sm:items-center sm:pt-24"
    >
      {/* Portrait */}
      <div className="absolute inset-y-0 right-0 z-0 w-full sm:w-[62%] lg:w-[52%]">
        <Image
          src="/images/arul-kumar-portrait.png"
          alt="Portrait of P. Arul Kumar in advocate robes"
          fill
          priority
          sizes="(max-width: 640px) 100vw, 60vw"
          className="object-cover object-[42%_center]"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(to_left,var(--primary)_2%,transparent_26%)]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(to_top,var(--primary)_10%,transparent_62%)] sm:bg-[linear-gradient(to_right,var(--primary)_6%,color-mix(in_oklab,var(--primary),transparent_25%)_40%,transparent_80%)]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(to_top,var(--primary)_2%,transparent_45%)]"
          aria-hidden="true"
        />
      </div>

      {/* Frame detail */}
      <div
        className="pointer-events-none absolute inset-6 z-10 hidden border border-accent/15 lg:block"
        aria-hidden="true"
      />

      <div className="relative z-20 mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <span className="flex items-center gap-3 text-[11px] tracking-[0.3em] text-accent uppercase">
              <span className="h-px w-10 bg-accent" aria-hidden="true" />
              Practice &middot; Ministry &middot; Service
            </span>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-7 font-serif text-[clamp(2.75rem,9vw,5.5rem)] leading-[0.95] tracking-tight text-primary-foreground uppercase text-balance">
              P. Arul
              <br />
              <span className="text-accent">Kumar</span>
            </h1>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] tracking-[0.22em] text-primary-foreground/80 uppercase sm:text-xs">
              {site.roles.map((role, i) => (
                <span key={role} className="flex items-center gap-3">
                  {i > 0 ? (
                    <span className="size-1 rotate-45 bg-accent" aria-hidden="true" />
                  ) : null}
                  {role}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={300}>
            <p className="mt-8 max-w-xl font-serif text-xl leading-relaxed text-primary-foreground/85 italic text-pretty sm:text-2xl">
              &ldquo;{site.motto}&rdquo;
            </p>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-primary-foreground/65 text-pretty sm:text-base">
              Standing for the rights of people in the court of law, standing with
              them in prayer before God, and standing beside them in their need — a
              life devoted to justice, faith, and the service of society.
            </p>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2.5 bg-accent px-8 py-4 text-xs font-medium tracking-[0.18em] text-accent-foreground uppercase transition-colors hover:bg-accent/85"
              >
                <CalendarCheck className="size-4" aria-hidden="true" />
                Book Appointment
              </a>
              <a
                href="#prayer"
                className="inline-flex items-center justify-center gap-2.5 border border-primary-foreground/30 px-8 py-4 text-xs font-medium tracking-[0.18em] text-primary-foreground uppercase transition-colors hover:border-accent hover:text-accent"
              >
                <HeartHandshake className="size-4" aria-hidden="true" />
                Request Prayer
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] tracking-[0.24em] text-primary-foreground/50 uppercase transition-colors hover:text-accent lg:flex"
      >
        Scroll
        <ArrowDown className="size-4 animate-bounce" aria-hidden="true" />
      </a>
    </section>
  )
}
