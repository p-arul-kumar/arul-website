'use client'

import { useEffect, useState } from 'react'
import { ArrowUp, MessageCircle } from 'lucide-react'
import { whatsappLink } from '@/lib/site'
import { cn } from '@/lib/utils'

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        className={cn(
          'flex size-11 items-center justify-center border border-accent/40 bg-primary text-accent transition-all duration-300 hover:bg-accent hover:text-accent-foreground',
          showTop
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-3 opacity-0',
        )}
      >
        <ArrowUp className="size-4" aria-hidden="true" />
      </button>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 bg-accent px-4 py-4 text-accent-foreground shadow-[0_18px_40px_-18px_var(--primary)] transition-colors hover:bg-accent/90 sm:px-5"
      >
        <MessageCircle className="size-5 shrink-0" aria-hidden="true" />
        <span className="hidden text-[11px] font-medium tracking-[0.16em] uppercase sm:inline">
          WhatsApp
        </span>
        <span className="sr-only sm:hidden">Chat on WhatsApp</span>
      </a>
    </div>
  )
}
