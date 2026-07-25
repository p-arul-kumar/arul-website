import { Scale } from 'lucide-react'
import { site } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="border-t border-accent/20 bg-primary">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="flex flex-col items-center gap-8 text-center">
          <span className="flex size-12 items-center justify-center border border-accent/40 text-accent">
            <Scale className="size-5" aria-hidden="true" />
          </span>
          <div className="flex flex-col gap-3">
            <p className="font-serif text-2xl tracking-[0.16em] text-primary-foreground uppercase">
              P. Arul Kumar
            </p>
            <p className="text-[10px] tracking-[0.24em] text-accent uppercase">
              {site.roles.join(' · ')}
            </p>
          </div>
          <div className="gold-rule h-px w-full max-w-md" aria-hidden="true" />
          <p className="font-serif text-lg text-primary-foreground/70 italic">
            {site.motto}
          </p>
          <nav
            className="flex flex-wrap justify-center gap-x-7 gap-y-3"
            aria-label="Footer navigation"
          >
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[11px] tracking-[0.16em] text-primary-foreground/55 uppercase transition-colors hover:text-accent"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2 border-t border-primary-foreground/10 pt-8 text-xs text-primary-foreground/40">
            <p>
              &copy; {new Date().getFullYear()} P. Arul Kumar. All rights reserved.
            </p>
            <p className="max-w-xl leading-relaxed">
              Information on this website is for general awareness only and does not
              constitute legal advice or solicitation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
