import {
  MessagesSquare,
  Gavel,
  Home,
  FileSignature,
  Landmark,
  ArrowUpRight,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const services = [
  {
    icon: MessagesSquare,
    title: 'Legal Consultation',
    text: 'Clear, confidential advice on your legal position, options and likely outcomes — before you commit to any course of action.',
    points: ['Case assessment', 'Written opinions', 'Second opinions'],
  },
  {
    icon: Gavel,
    title: 'Civil Matters',
    text: 'Representation in civil suits, recovery claims, injunctions, partition and succession disputes across trial and appellate courts.',
    points: ['Suits & appeals', 'Injunctions', 'Family disputes'],
  },
  {
    icon: Home,
    title: 'Property Matters',
    text: 'Title verification, encumbrance scrutiny, sale and settlement deeds, tenancy issues and resolution of boundary disputes.',
    points: ['Title search', 'Sale & gift deeds', 'Tenancy issues'],
  },
  {
    icon: FileSignature,
    title: 'Documentation',
    text: 'Precise drafting and vetting of agreements, powers of attorney, wills, trust deeds, affidavits and notarised instruments.',
    points: ['Agreements', 'Wills & POA', 'Affidavits'],
  },
  {
    icon: Landmark,
    title: 'Church Legal Advice',
    text: 'Dedicated counsel for churches, trusts and ministries — registration, compliance, governance, land holdings and dispute resolution.',
    points: ['Trust registration', 'Compliance', 'Governance'],
  },
]

export function LegalServices() {
  return (
    <section
      id="legal-services"
      className="relative overflow-hidden bg-primary py-24 sm:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(var(--accent)_1px,transparent_1px),linear-gradient(90deg,var(--accent)_1px,transparent_1px)] [background-size:72px_72px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Legal Services"
          title="Counsel you can build upon"
          description="Every matter is handled personally, with transparent guidance at each stage — from the first consultation to the final order."
          tone="dark"
        />

        <div className="mt-16 grid gap-px border border-accent/20 bg-accent/20 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal
              key={service.title}
              delay={i * 90}
              className="group relative flex flex-col gap-5 bg-primary p-8 transition-colors duration-500 hover:bg-primary-foreground/[0.04] sm:p-10"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="flex size-12 items-center justify-center border border-accent/40 text-accent transition-colors duration-500 group-hover:bg-accent group-hover:text-accent-foreground">
                  <service.icon className="size-5" aria-hidden="true" />
                </span>
                <span className="font-serif text-3xl text-primary-foreground/15">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="font-serif text-2xl text-primary-foreground">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-primary-foreground/65 text-pretty">
                {service.text}
              </p>
              <ul className="mt-auto flex flex-col gap-2 pt-2">
                {service.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-3 text-[11px] tracking-[0.14em] text-primary-foreground/55 uppercase"
                  >
                    <span
                      className="size-1 rotate-45 bg-accent"
                      aria-hidden="true"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}

          <Reveal
            delay={services.length * 90}
            className="flex flex-col justify-between gap-6 bg-accent p-8 sm:p-10"
          >
            <div className="flex flex-col gap-4">
              <h3 className="font-serif text-3xl leading-tight text-accent-foreground text-balance">
                Not sure where your matter fits?
              </h3>
              <p className="text-sm leading-relaxed text-accent-foreground/80 text-pretty">
                Share a brief description of your situation and receive an honest
                assessment of the way forward.
              </p>
            </div>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 self-start border-b border-accent-foreground/40 pb-2 text-xs font-medium tracking-[0.18em] text-accent-foreground uppercase transition-colors hover:border-accent-foreground"
            >
              Book a consultation
              <ArrowUpRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
