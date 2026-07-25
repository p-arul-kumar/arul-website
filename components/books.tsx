import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const books = [
  {
    title: 'Because He Lives',
    subtitle: 'Devotional · English',
    image: '/images/book-because-he-lives.png',
    alt: 'Cover of the book Because He Lives by P. Arul Kumar',
    text: 'A devotional journey through the resurrection hope — written for those walking through grief, uncertainty and waiting seasons.',
  },
  {
    title: 'Nugarvor Nanban',
    subtitle: 'Faith & Life · Tamil',
    image: '/images/book-nugarvor-nanban.png',
    alt: 'Cover of the Tamil book Nugarvor Nanban by P. Arul Kumar',
    text: 'A Tamil work written as a companion to the believer — practical reflections on faith, family and daily faithfulness.',
  },
  {
    title: 'Other Publications',
    subtitle: 'Booklets & Legal Guides',
    image: '/images/publications-stack.png',
    alt: 'Stack of published books and legal guides',
    text: 'Bible study booklets, tracts, and plain-language legal awareness guides published for churches, students and families.',
  },
]

export function Books() {
  return (
    <section id="books" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Books &amp; Publications"
          title="Words written to last"
          description="Books and booklets published to strengthen faith and to place the knowledge of law in the hands of ordinary people."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {books.map((book, i) => (
            <Reveal
              key={book.title}
              delay={i * 120}
              className="group flex flex-col"
            >
              <div className="relative aspect-4/5 overflow-hidden bg-secondary">
                <Image
                  src={book.image}
                  alt={book.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 border border-accent/0 transition-colors duration-500 group-hover:border-accent/70"
                  aria-hidden="true"
                />
              </div>
              <span className="mt-6 text-[10px] tracking-[0.24em] text-accent-foreground/70 uppercase">
                {book.subtitle}
              </span>
              <h3 className="mt-3 font-serif text-2xl text-primary">
                {book.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
                {book.text}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal
          delay={200}
          className="mt-14 flex flex-col items-center gap-5 border-t border-border pt-12 text-center"
        >
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground text-pretty">
            To order copies in bulk for your church, library or ministry, please
            reach out directly.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-primary px-8 py-4 text-xs font-medium tracking-[0.18em] text-primary-foreground uppercase transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Enquire about books
          </a>
        </Reveal>
      </div>
    </section>
  )
}
