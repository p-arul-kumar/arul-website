import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { LegalServices } from '@/components/legal-services'
import { Ministry } from '@/components/ministry'
import { Books } from '@/components/books'
import { LawToday } from '@/components/law-today'
import { Prayer } from '@/components/prayer'
import { Testimonials } from '@/components/testimonials'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'
import { FloatingActions } from '@/components/floating-actions'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <LegalServices />
        <Ministry />
        <Books />
        <LawToday />
        <Prayer />
        <Testimonials />
        <Contact />
      </main>
      <SiteFooter />
      <FloatingActions />
    </>
  )
}
