import { Quote } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const testimonials = [
  {
    quote:
      'Our property dispute had dragged on for years. He explained every document patiently, fought the matter honestly, and we finally received our title. He never once misled us about the outcome.',
    name: 'R. Selvaraj',
    role: 'Client · Property Matter',
  },
  {
    quote:
      'When my husband was hospitalised, he came to pray with us at midnight — not as a lawyer, but as a pastor. That prayer carried our family through the hardest month of our lives.',
    name: 'Mrs. Jancy Rani',
    role: 'Church Member',
  },
  {
    quote:
      'He guided our church trust through registration and compliance with complete clarity. Rare to find someone who understands both the statute and the ministry.',
    name: 'Pastor D. Immanuel',
    role: 'Trustee · Grace Fellowship',
  },
  {
    quote:
      'I read Because He Lives during a season of deep loss. It gave words to my grief and hope for the morning. I have since gifted it to many friends.',
    name: 'Anitha Joseph',
    role: 'Reader',
  },
  {
    quote:
      'His legal awareness sessions taught our college students what their rights actually are. Practical, respectful and completely free of jargon.',
    name: 'Prof. K. Ramesh',
    role: 'Faculty Coordinator',
  },
  {
    quote:
      'Straightforward advice, fair fees and no false promises. He told me plainly that a settlement served me better than a long case — and he was right.',
    name: 'S. Fathima',
    role: 'Client · Civil Matter',
  },
]

export function Testimonials() {
  return (
    <section className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="In their own words"
          description="Clients, church members and readers on the counsel and care they received."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal
              key={item.name}
              delay={(i % 3) * 110}
              as="figure"
              className="group flex flex-col gap-6 border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_28px_70px_-42px_var(--primary)]"
            >
              <Quote
                className="size-7 text-accent/70 transition-colors duration-500 group-hover:text-accent"
                aria-hidden="true"
              />
              <blockquote className="text-sm leading-relaxed text-muted-foreground text-pretty">
                {item.quote}
              </blockquote>
              <figcaption className="mt-auto flex flex-col gap-1 border-t border-border pt-5">
                <span className="font-serif text-lg text-primary">
                  {item.name}
                </span>
                <span className="text-[10px] tracking-[0.2em] text-accent-foreground/70 uppercase">
                  {item.role}
                </span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
