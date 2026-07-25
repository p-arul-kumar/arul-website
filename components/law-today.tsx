import { ArrowUpRight, ShieldCheck, ScrollText, Newspaper } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const categories = [
  {
    icon: ShieldCheck,
    label: 'Citizen Rights',
    text: 'Know what the Constitution and statute guarantee you — and how to assert it.',
  },
  {
    icon: ScrollText,
    label: 'Legal Awareness',
    text: 'Everyday law explained in plain language, without jargon or fear.',
  },
  {
    icon: Newspaper,
    label: 'Latest Updates',
    text: 'Recent judgments, amendments and notifications that affect you.',
  },
]

const articles = [
  {
    tag: 'Citizen Rights',
    title: 'Your rights during an arrest: what the law actually requires',
    excerpt:
      'Grounds of arrest, the right to inform a relative, medical examination and the twenty-four hour rule — a practical checklist every citizen should know.',
    read: '6 min read',
  },
  {
    tag: 'Property Law',
    title: 'Before you buy land: eight documents you must verify',
    excerpt:
      'Parent deed, encumbrance certificate, patta, approved layout and more — the paperwork that decides whether your title stands or falls.',
    read: '8 min read',
  },
  {
    tag: 'Legal Updates',
    title: 'Registration of religious trusts: current compliance essentials',
    excerpt:
      'A concise guide for churches and ministries on registration, annual filings, audit obligations and common compliance lapses.',
    read: '7 min read',
  },
  {
    tag: 'Family Law',
    title: 'Wills and succession: securing your family without dispute',
    excerpt:
      'Why a clearly drafted will prevents years of litigation, and the formalities that make it legally unassailable.',
    read: '5 min read',
  },
]

export function LawToday() {
  return (
    <section
      id="law-today"
      className="relative overflow-hidden bg-primary py-24 sm:py-32"
    >
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Law Today"
              title="Law made plain for every citizen"
              description="A continuing effort to demystify the law — because rights unknown are rights unused."
              align="left"
              tone="dark"
            />
            <div className="mt-10 flex flex-col gap-px border border-accent/20 bg-accent/20">
              {categories.map((category, i) => (
                <Reveal
                  key={category.label}
                  delay={i * 100}
                  className="flex items-start gap-4 bg-primary p-6"
                >
                  <category.icon
                    className="mt-0.5 size-5 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-[11px] font-medium tracking-[0.2em] text-primary-foreground uppercase">
                      {category.label}
                    </h3>
                    <p className="text-sm leading-relaxed text-primary-foreground/60 text-pretty">
                      {category.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="flex flex-col lg:col-span-8">
            {articles.map((article, i) => (
              <Reveal
                key={article.title}
                delay={i * 90}
                as="article"
                className="group border-t border-primary-foreground/12 last:border-b"
              >
                <a
                  href="#contact"
                  className="flex flex-col gap-4 py-8 transition-colors sm:flex-row sm:items-start sm:gap-10"
                >
                  <div className="flex shrink-0 flex-row items-center gap-4 sm:w-40 sm:flex-col sm:items-start sm:gap-2">
                    <span className="text-[10px] tracking-[0.22em] text-accent uppercase">
                      {article.tag}
                    </span>
                    <span className="text-[10px] tracking-[0.18em] text-primary-foreground/40 uppercase">
                      {article.read}
                    </span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="flex items-start gap-2 font-serif text-2xl leading-snug text-primary-foreground text-balance transition-colors group-hover:text-accent sm:text-[1.75rem]">
                      {article.title}
                      <ArrowUpRight
                        className="mt-1.5 size-4 shrink-0 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                        aria-hidden="true"
                      />
                    </h3>
                    <p className="text-sm leading-relaxed text-primary-foreground/60 text-pretty">
                      {article.excerpt}
                    </p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
