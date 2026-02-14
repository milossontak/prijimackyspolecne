import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import ServiceTypes from '@/app/components/ServiceTypes'
import type { Metadata } from 'next'
import { loadSiteContent } from '@/app/lib/content'

export async function generateMetadata(): Promise<Metadata> {
  const seo = loadSiteContent().seo?.pages?.services
  return {
    title: seo?.title || 'Služby | Příprava na přijímačky',
    description:
      seo?.description ||
      'Vyberte si balíček přípravy na přijímací zkoušky: online testy nanečisto, osobní testy i komplexní příprava s videem a zpětnou vazbou.',
    alternates: {
      canonical: seo?.canonical || '/sluzby',
    },
  }
}

export default function SluzbyPage() {
  return (
    <>
      <Header />
      <section className="section" style={{ paddingTop: 'var(--spacing-2xl)' }}>
        <div className="container">
          <h1 className="text-center">Naše služby</h1>
          <p style={{
            textAlign: 'center',
            maxWidth: '700px',
            margin: '0 auto var(--spacing-xl)',
            fontSize: '1.125rem',
          }}>
            Vyberte si balíček, který nejlépe odpovídá potřebám vašeho dítěte. Každá služba obsahuje testy nanečisto, jasnou zpětnou vazbu a doporučení pro další přípravu.
          </p>
        </div>
      </section>
      <ServiceTypes />
      <Footer />
    </>
  )
}
