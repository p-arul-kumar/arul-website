import { Phone, Mail, MessageCircle, MapPin, Clock } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { site, whatsappLink } from '@/lib/site'

export function Contact() {
  const channels = [
    {
      icon: Phone,
      label: 'Phone',
      value: site.phoneDisplay,
      href: `tel:${site.phone}`,
      note: 'Call during office hours',
    },
    {
      icon: Mail,
      label: 'Email',
      value: site.email,
      href: `mailto:${site.email}?subject=${encodeURIComponent('Appointment Request')}`,
      note: 'Replies within one working day',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: site.phoneDisplay,
      href: whatsappLink,
      note: 'Fastest way to reach the office',
    },
  ]

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-primary py-24 sm:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(var(--accent)_1px,transparent_1px),linear-gradient(90deg,var(--accent)_1px,transparent_1px)] [background-size:72px_72px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Book an appointment"
          description="For legal consultation, ministry invitations, or book enquiries — reach out through whichever channel suits you best."
          tone="dark"
        />

        <div className="mt-16 grid gap-px border border-accent/20 bg-accent/20 md:grid-cols-3">
          {channels.map((channel, i) => (
            <Reveal
              key={channel.label}
              delay={i * 100}
              className="group flex flex-col gap-5 bg-primary p-8 transition-colors duration-500 hover:bg-primary-foreground/[0.04] sm:p-10"
            >
              <span className="flex size-12 items-center justify-center border border-accent/40 text-accent transition-colors duration-500 group-hover:bg-accent group-hover:text-accent-foreground">
                <channel.icon className="size-5" aria-hidden="true" />
              </span>
              <span className="text-[10px] tracking-[0.24em] text-accent uppercase">
                {channel.label}
              </span>
              <a
                href={channel.href}
                target={channel.label === 'WhatsApp' ? '_blank' : undefined}
                rel={channel.label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                className="font-serif text-2xl break-words text-primary-foreground transition-colors hover:text-accent"
              >
                {channel.value}
              </a>
              <span className="mt-auto text-xs leading-relaxed text-primary-foreground/50">
                {channel.note}
              </span>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Reveal
            delay={120}
            className="flex flex-col gap-6 border border-accent/20 p-8 sm:p-10"
          >
            <div className="flex items-center gap-4">
              <MapPin className="size-5 text-accent" aria-hidden="true" />
              <h3 className="text-[11px] font-medium tracking-[0.2em] text-primary-foreground uppercase">
                Office
              </h3>
            </div>
            <address className="flex flex-col gap-1.5 font-serif text-xl leading-relaxed text-primary-foreground/85 not-italic">
              <span className="text-accent">{site.office.name}</span>
              {site.office.lines.map((line) => (
                <span key={line} className="text-lg text-primary-foreground/70">
                  {line}
                </span>
              ))}
            </address>
          </Reveal>

          <Reveal
            delay={200}
            className="flex flex-col gap-6 border border-accent/20 p-8 sm:p-10"
          >
            <div className="flex items-center gap-4">
              <Clock className="size-5 text-accent" aria-hidden="true" />
              <h3 className="text-[11px] font-medium tracking-[0.2em] text-primary-foreground uppercase">
                Office Hours
              </h3>
            </div>
            <dl className="flex flex-col">
              {site.office.hours.map((slot) => (
                <div
                  key={slot.day}
                  className="flex items-baseline justify-between gap-6 border-b border-primary-foreground/10 py-4 last:border-b-0"
                >
                  <dt className="text-sm text-primary-foreground/70">
                    {slot.day}
                  </dt>
                  <dd className="text-sm tracking-[0.1em] text-accent">
                    {slot.time}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal
          delay={260}
          className="mt-6 flex flex-col items-center gap-6 border border-accent/20 bg-accent px-8 py-12 text-center sm:px-10"
        >
          <h3 className="max-w-2xl font-serif text-3xl leading-tight text-accent-foreground text-balance sm:text-4xl">
            Whether it is a case or a crisis — you are welcome here.
          </h3>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href={`tel:${site.phone}`}
              className="inline-flex items-center justify-center gap-2.5 bg-primary px-8 py-4 text-xs font-medium tracking-[0.18em] text-primary-foreground uppercase transition-colors hover:bg-primary/85"
            >
              <Phone className="size-4" aria-hidden="true" />
              Call the office
            </a>
            <a
              href="#prayer"
              className="inline-flex items-center justify-center gap-2.5 border border-accent-foreground/40 px-8 py-4 text-xs font-medium tracking-[0.18em] text-accent-foreground uppercase transition-colors hover:border-accent-foreground"
            >
              Request prayer
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
