'use client'

import { useEffect, useState } from 'react'
import { Menu, X, Scale } from 'lucide-react'
import { cn } from '@/lib/utils'
import { site } from '@/lib/site'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'border-b border-accent/20 bg-primary/95 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <a
          href="#top"
          className="flex items-center gap-3 text-primary-foreground"
          aria-label={`${site.name} — home`}
        >
          <span className="flex size-10 items-center justify-center border border-accent/50 text-accent">
            <Scale className="size-5" aria-hidden="true" />
          </span>
         <span className="flex flex-col leading-none">
  <span className="font-serif text-lg tracking-[0.12em] uppercase whitespace-nowrap">
    P. ARUL KUMAR BA., LLB.
  </span>
  <span className="mt-1 text-[10px] tracking-[0.18em] whitespace-nowrap text-accent uppercase sm:tracking-[0.22em]">
    Advocate | Pastor | Social Worker
  </span>
</span>
        </a>

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Main navigation"
        >
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-[13px] tracking-[0.12em] text-primary-foreground/75 uppercase transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden bg-accent px-6 py-3 text-[12px] font-medium tracking-[0.16em] text-accent-foreground uppercase transition-colors hover:bg-accent/85 sm:inline-flex"
          >
            Book Appointment
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex size-11 items-center justify-center border border-primary-foreground/25 text-primary-foreground lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="size-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-0 z-50 bg-primary lg:hidden">
          <div className="flex h-20 items-center justify-between px-5 sm:px-8">
            <span className="font-serif text-lg tracking-[0.14em] text-primary-foreground uppercase">
              Menu
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex size-11 items-center justify-center border border-primary-foreground/25 text-primary-foreground"
              aria-label="Close menu"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>
          <nav
            className="flex flex-col px-5 sm:px-8"
            aria-label="Mobile navigation"
          >
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-primary-foreground/10 py-5 font-serif text-2xl text-primary-foreground transition-colors hover:text-accent"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-8 bg-accent px-6 py-4 text-center text-xs font-medium tracking-[0.18em] text-accent-foreground uppercase"
            >
              Book Appointment
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
