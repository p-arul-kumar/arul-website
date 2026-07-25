import {
  Scale,
  Church,
  BookOpen,
  HandHeart,
  Compass,
  Users,
  LifeBuoy,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const pillars = [
  {
    icon: Scale,
    title: 'Advocate',
    text: 'Practising before the courts with diligence and honesty — civil disputes, property matters, and documentation handled with meticulous care and clear counsel.',
  },
  {
    icon: Church,
    title: 'Pastor',
    text: 'Shepherding a congregation through the Word of God, pastoral counselling, and intercessory prayer, walking alongside families in every season of life.',
  },
  {
    icon: BookOpen,
    title: 'Author & Publisher',
    text: 'Writing and publishing books that strengthen faith and spread legal awareness, making sound teaching and knowledge accessible to every home.',
  },
  {
    icon: HandHeart,
    title: 'Social Worker',
    text: 'Serving the poor, the widowed and the neglected through welfare initiatives, relief support, awareness camps and quiet, practical help wherever it is needed.',
  },
]

const spheres = [
  {
    icon: Scale,
    title: 'Legal Service to Society',
    text: 'Honest counsel, court representation and free legal guidance for those who cannot afford it.',
  },
  {
    icon: Church,
    title: 'Christian Ministry',
    text: 'Preaching, pastoral care and prayer — building faith, hope and healing in families.',
  },
  {
    icon: HandHeart,
    title: 'Social Welfare Activities',
    text: 'Relief distribution, education support and welfare schemes for underprivileged households.',
  },
  {
    icon: Users,
    title: 'Community Service',
    text: 'Awareness camps, youth guidance and local initiatives that strengthen the neighbourhood.',
  },
  {
    icon: LifeBuoy,
    title: 'Helping People in Need',
    text: 'Standing with the distressed — the widow, the orphan, the sick and the wrongly accused.',
  },
  {
    icon: Compass,
    title: 'Life Journey & Vision',
    text: 'To defend the defenceless, comfort the broken, and build a society rooted in justice and grace.',
  },
]

export function About() {
  return (
    <section id="about" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="About Me"
              title="Many callings. One conviction."
              align="left"
            />
            <Reveal delay={120} className="mt-8 flex flex-col gap-5">
              <p className="leading-relaxed text-muted-foreground text-pretty">
                My days are lived between three sacred spaces — the courtroom, where
                truth must be defended, the sanctuary, where hearts must be healed,
                and the street, where need must be answered. Each demands the same
                thing: integrity that does not bend, and compassion that does not run
                dry.
              </p>
              <p className="leading-relaxed text-muted-foreground text-pretty">
                As an advocate I represent people at the most vulnerable moments of
                their lives. As a pastor I stand with them in prayer long after the
                case is closed. As a social worker I carry that same concern beyond
                the courtroom and the pulpit — into homes, villages and communities
                where help is most needed. And as an author and publisher I put every
                one of those convictions into print.
              </p>
              <blockquote className="mt-2 border-l-2 border-accent pl-6 font-serif text-xl leading-relaxed text-primary italic text-pretty">
                &ldquo;Learn to do right; seek justice. Defend the oppressed.&rdquo;
                <footer className="mt-3 text-xs font-normal tracking-[0.18em] text-muted-foreground uppercase not-italic">
                  Isaiah 1:17
                </footer>
              </blockquote>
            </Reveal>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {pillars.map((pillar, i) => (
              <Reveal
                key={pillar.title}
                delay={i * 110}
                className="group relative flex flex-col gap-4 border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_24px_60px_-32px_var(--primary)]"
              >
                <span
                  className="absolute inset-x-0 top-0 h-0.5 scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100"
                  aria-hidden="true"
                />
                <span className="flex size-12 items-center justify-center border border-accent/40 text-accent-foreground">
                  <pillar.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="font-serif text-2xl text-primary">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
                  {pillar.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Spheres of service */}
        <div className="mt-20 border-t border-border pt-16 sm:mt-24">
          <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="flex items-center gap-3 text-[11px] tracking-[0.3em] text-accent-foreground uppercase">
                <span className="h-px w-10 bg-accent" aria-hidden="true" />
                Spheres of Service
              </span>
              <h3 className="mt-5 font-serif text-3xl leading-tight text-primary text-balance sm:text-4xl">
                Where the calling is carried out
              </h3>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground text-pretty">
              Six areas of work that together shape a single life of service — in the
              court, in the church, and in the community.
            </p>
          </Reveal>

          <ul className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {spheres.map((sphere, i) => (
              <Reveal key={sphere.title} delay={i * 90} as="li">
                <div className="flex items-start gap-5">
                  <span className="mt-0.5 flex size-11 shrink-0 items-center justify-center bg-primary text-accent">
                    <sphere.icon className="size-5" aria-hidden="true" />
                  </span>
                  <div className="flex flex-col gap-2">
                    <h4 className="text-[13px] font-medium tracking-[0.14em] text-primary uppercase">
                      {sphere.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
                      {sphere.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
