import { Mic, BookMarked, HandHeart, Sparkles } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const pillars = [
  {
    icon: Mic,
    title: 'Sermons',
    text: 'Sunday messages and special convention sermons rooted in Scripture, delivered with clarity for everyday life.',
    meta: 'Weekly',
  },
  {
    icon: BookMarked,
    title: 'Bible Teaching',
    text: 'Systematic, verse-by-verse teaching sessions and small-group studies that build strong foundations of faith.',
    meta: 'Study Series',
  },
  {
    icon: HandHeart,
    title: 'Prayer Request',
    text: 'Submit your need in confidence. Every request is prayed over personally and held before God in intercession.',
    meta: 'Confidential',
    href: '#prayer',
  },
  {
    icon: Sparkles,
    title: 'Testimonies',
    text: 'Real accounts of restored homes, answered prayers and lives changed — shared to strengthen the faith of others.',
    meta: 'Shared Grace',
  },
]

export function Ministry() {
  return (
    <section id="ministry" className="relative bg-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Ministry"
          title="A shepherd's heart, a servant's hands"
          description="Beyond the courtroom lies a calling to pastor people — teaching the Word, praying for the hurting, and rejoicing in what God has done."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {pillars.map((pillar, i) => (
            <Reveal
              key={pillar.title}
              delay={i * 100}
              className="group relative overflow-hidden border border-border bg-card transition-all duration-500 hover:border-accent/60 hover:shadow-[0_28px_70px_-40px_var(--primary)]"
            >
              <div className="flex flex-col gap-5 p-8 sm:flex-row sm:items-start sm:gap-7 sm:p-10">
                <span className="flex size-14 shrink-0 items-center justify-center bg-primary text-accent transition-colors duration-500 group-hover:bg-accent group-hover:text-accent-foreground">
                  <pillar.icon className="size-6" aria-hidden="true" />
                </span>
                <div className="flex flex-col gap-3">
                  <span className="text-[10px] tracking-[0.24em] text-accent-foreground/70 uppercase">
                    {pillar.meta}
                  </span>
                  <h3 className="font-serif text-2xl text-primary">
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
                    {pillar.text}
                  </p>
                  {pillar.href ? (
                    <a
                      href={pillar.href}
                      className="mt-1 self-start border-b border-accent pb-1 text-[11px] font-medium tracking-[0.18em] text-primary uppercase transition-colors hover:text-accent-foreground"
                    >
                      Submit a request
                    </a>
                  ) : null}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
