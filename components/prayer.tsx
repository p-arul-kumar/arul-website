'use client'

import { useState } from 'react'
import { HandHeart, Lock, Send, Sunrise, Users } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { site } from '@/lib/site'

const categories = [
  'Healing',
  'Family',
  'Work & Provision',
  'Guidance',
  'Legal Matter',
  'Thanksgiving',
]

const ministryNotes = [
  {
    icon: Sunrise,
    title: 'Morning Intercession',
    text: 'Every request received is carried into the early-morning prayer watch, one name at a time.',
  },
  {
    icon: Users,
    title: 'Prayer Fellowship',
    text: 'Urgent needs are shared — with your permission — with a small, trusted circle of intercessors.',
  },
  {
    icon: Lock,
    title: 'Held in Confidence',
    text: 'Your request is never published, forwarded or used for any purpose other than prayer.',
  },
]

export function Prayer() {
  const [category, setCategory] = useState(categories[0])

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const message = [
      'Prayer Request',
      `Name: ${data.get('name') || 'Not provided'}`,
      `Place: ${data.get('place') || 'Not provided'}`,
      `Category: ${category}`,
      '',
      `${data.get('request') || ''}`,
    ].join('\n')

    window.open(
      `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer',
    )
  }

  return (
    <section id="prayer" className="relative bg-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Praying For You"
          title="You do not have to carry it alone"
          description="Whatever the burden — a diagnosis, a case, a family, a decision — write it down and let it be prayed over."
        />

        <div className="mt-16 grid gap-px border border-border bg-border lg:grid-cols-5">
          <div className="flex flex-col gap-8 bg-primary p-8 sm:p-10 lg:col-span-2">
            <span className="flex size-14 items-center justify-center border border-accent/40 text-accent">
              <HandHeart className="size-6" aria-hidden="true" />
            </span>
            <div className="flex flex-col gap-4">
              <h3 className="font-serif text-3xl leading-tight text-primary-foreground text-balance">
                The Prayer Ministry
              </h3>
              <p className="text-sm leading-relaxed text-primary-foreground/65 text-pretty">
                This ministry exists for one reason — to stand in the gap for
                people. There is no fee, no formality and no judgement. Only
                prayer, offered faithfully until an answer comes.
              </p>
            </div>
            <ul className="flex flex-col gap-6 border-t border-primary-foreground/12 pt-8">
              {ministryNotes.map((note) => (
                <li key={note.title} className="flex items-start gap-4">
                  <note.icon
                    className="mt-0.5 size-5 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  <div className="flex flex-col gap-1.5">
                    <h4 className="text-[11px] font-medium tracking-[0.2em] text-primary-foreground uppercase">
                      {note.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-primary-foreground/60 text-pretty">
                      {note.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-auto border-l-2 border-accent pl-5 font-serif text-lg leading-relaxed text-primary-foreground/80 italic text-pretty">
              &ldquo;Cast all your anxiety on Him, because He cares for you.&rdquo;
              <span className="mt-2 block text-[10px] font-normal tracking-[0.2em] text-accent uppercase not-italic">
                1 Peter 5:7
              </span>
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 bg-card p-8 sm:p-10 lg:col-span-3"
          >
            <div>
              <h3 className="font-serif text-3xl text-primary">
                Submit a prayer request
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
                Your request opens a private WhatsApp message addressed directly to
                Pastor Arul Kumar.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Your name" name="name" placeholder="Full name" />
              <Field label="City / Town" name="place" placeholder="Where you are" />
            </div>

            <fieldset className="flex flex-col gap-3">
              <legend className="text-[11px] font-medium tracking-[0.18em] text-primary uppercase">
                Prayer for
              </legend>
              <div className="flex flex-wrap gap-2">
                {categories.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setCategory(item)}
                    aria-pressed={category === item}
                    className={`border px-4 py-2.5 text-[11px] tracking-[0.14em] uppercase transition-colors ${
                      category === item
                        ? 'border-accent bg-accent text-accent-foreground'
                        : 'border-border text-muted-foreground hover:border-accent/60 hover:text-primary'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="flex flex-col gap-2.5">
              <label
                htmlFor="request"
                className="text-[11px] font-medium tracking-[0.18em] text-primary uppercase"
              >
                Your request
              </label>
              <textarea
                id="request"
                name="request"
                rows={5}
                required
                placeholder="Write freely — as much or as little as you wish."
                className="w-full resize-none border border-input bg-background px-4 py-3.5 text-sm leading-relaxed text-foreground placeholder:text-muted-foreground/70 focus:border-accent focus:outline-none"
              />
            </div>

            <label className="flex items-start gap-3 text-xs leading-relaxed text-muted-foreground">
              <input
                type="checkbox"
                name="share"
                className="mt-0.5 size-4 shrink-0 accent-[var(--accent)]"
              />
              You may share this request with the prayer fellowship (optional).
            </label>

            <button
              type="submit"
              className="group mt-2 inline-flex items-center justify-center gap-2.5 bg-primary px-8 py-4 text-xs font-medium tracking-[0.18em] text-primary-foreground uppercase transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <Send className="size-4" aria-hidden="true" />
              Send prayer request
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  placeholder,
}: {
  label: string
  name: string
  placeholder: string
}) {
  return (
    <div className="flex flex-col gap-2.5">
      <label
        htmlFor={name}
        className="text-[11px] font-medium tracking-[0.18em] text-primary uppercase"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type="text"
        placeholder={placeholder}
        className="w-full border border-input bg-background px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-accent focus:outline-none"
      />
    </div>
  )
}
