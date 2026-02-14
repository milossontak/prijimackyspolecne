import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import FAQ from '@/app/components/FAQ'
import { CheckIcon } from '@/app/components/Icons'
import Link from 'next/link'
import type { Metadata } from 'next'
import { loadSiteContent } from '@/app/lib/content'

export async function generateMetadata(): Promise<Metadata> {
  const seo = loadSiteContent().seo?.pages?.package25
  return {
    title: seo?.title || 'Komplexní balíček 25 testů',
    description:
      seo?.description ||
      'Komplexní příprava na přijímačky: 25 testů nanečisto, volba online nebo osobně, video vysvětlení a sledování pokroku v čase.',
    alternates: {
      canonical: seo?.canonical || '/sluzby/komplexni-balicek',
    },
  }
}

const includedFeatures = [
  {
    title: '25 testů nanečisto',
    description: 'Komplexní příprava pokrývající všechny typy úloh z přijímacích zkoušek'
  },
  {
    title: 'Volba formy testu',
    description: 'Pro každý test si můžete zvolit, zda ho absolvujete online nebo osobně'
  },
  {
    title: 'Okamžité vyhodnocení výsledků',
    description: 'Zjistíte skóre a procentuální úspěšnost ihned po dokončení'
  },
  {
    title: 'Video s detailním vysvětlením',
    description: 'Každá úloha má své video, kde lektor vysvětluje správné řešení'
  },
  {
    title: 'Porovnání s ostatními studenty',
    description: 'Benchmark ukáže, jak si dítě stojí v rámci celé skupiny'
  },
  {
    title: 'Sledování pokroku v čase',
    description: 'Vidíte, jak se dítě zlepšuje s každým testem'
  }
]

const faqItems = [
  {
    question: 'Mohu kombinovat online a osobní testy?',
    answer: 'Ano, u komplexního balíčku si můžete pro každý test zvolit, zda ho absolvujete online nebo osobně. Můžete například začít s online testy a postupně přejít na osobní testy pro finální přípravu.'
  },
  {
    question: 'Jak dlouho mám přístup k testům?',
    answer: 'Po zakoupení máte neomezený přístup ke všem 25 testům. Můžete je absolvovat podle vlastního tempa a všechny výsledky a videa jsou dostupné v klientské sekci.'
  },
  {
    question: 'Na jaké typy přijímaček se můžeme připravit?',
    answer: 'Balíček pokrývá přípravu na přijímací zkoušky na střední školy (z 9. třídy) i na gymnázia z 5. třídy. Testy jsou navrženy tak, aby pokryly všechny typy úloh, které se u přijímaček objevují.'
  },
  {
    question: 'Jak funguje výběr mezi online a osobním testem?',
    answer: 'V klientské sekci uvidíte seznam všech 25 testů. Před každým testem si můžete zvolit, zda ho chcete absolvovat online (okamžité vyhodnocení) nebo osobně (reálná simulace atmosféry přijímaček).'
  }
]

export default function KomplexniBalicekPage() {
  return (
    <>
      <Header />
      
      {/* Breadcrumbs */}
      <div className="container" style={{ paddingTop: 'var(--spacing-lg)', paddingBottom: 'var(--spacing-sm)' }}>
        <nav style={{ fontSize: '0.9rem', color: 'var(--color-text-gray)' }}>
          <Link href="/">Domů</Link> {' > '}
          <Link href="/sluzby">Služby</Link> {' > '}
          <span>Komplexní balíček - 25 testů</span>
        </nav>
      </div>

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #4A90E2 0%, #52C9A2 100%)',
        color: 'white',
        padding: 'var(--spacing-2xl) 0',
      }}>
        <div className="container">
          <h1 style={{ color: 'white', marginBottom: 'var(--spacing-md)' }}>
            Komplexní balíček: 25 testů nanečisto
          </h1>
          <p style={{
            fontSize: '1.25rem',
            marginBottom: 'var(--spacing-lg)',
            color: 'rgba(255, 255, 255, 0.95)',
          }}>
            Komplexní příprava na přijímací zkoušky na střední školy i gymnázia z 5. třídy. Pro každý test si můžete zvolit, zda ho absolvujete online nebo osobně. Ideální pro systematickou a důkladnou přípravu.
          </p>
          <div style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            marginBottom: 'var(--spacing-lg)',
          }}>
            15 000 Kč
          </div>
          <Link href="/kontakt" className="btn btn-primary btn-large" style={{
            backgroundColor: 'white',
            color: 'var(--color-primary)',
          }}>
            Domluvit komplexní přípravu
          </Link>
        </div>
      </section>

      {/* Co je zahrnuto */}
      <section className="section">
        <div className="container">
          <h2>Co je součástí balíčku</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--spacing-lg)',
          }}>
            {includedFeatures.map((feature, index) => (
              <div key={index} style={{
                display: 'flex',
                gap: 'var(--spacing-md)',
                alignItems: 'flex-start',
              }}>
                <div style={{
                  color: 'var(--color-secondary)',
                  flexShrink: 0,
                  marginTop: '0.25rem',
                }}>
                  <CheckIcon size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-xs)' }}>
                    {feature.title}
                  </h3>
                  <p style={{ fontSize: '0.95rem', margin: 0 }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jak to probíhá */}
      <section className="section section-alt">
        <div className="container">
          <h2>Jak balíček funguje</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--spacing-lg)',
          }}>
            <div className="card">
              <h3>1. Zakoupení balíčku</h3>
              <p>Po zakoupení obdržíte přístup do klientské sekce s 25 testy.</p>
            </div>
            <div className="card">
              <h3>2. Výběr formy testu</h3>
              <p>Před každým testem si zvolíte, zda ho absolvujete online nebo osobně.</p>
            </div>
            <div className="card">
              <h3>3. Absolvování testu</h3>
              <p>Test probíhá v reálných podmínkách - stejný časový limit a typy úloh jako u přijímaček.</p>
            </div>
            <div className="card">
              <h3>4. Zpětná vazba</h3>
              <p>Okamžité vyhodnocení, video s vysvětlením každé úlohy a benchmark.</p>
            </div>
            <div className="card">
              <h3>5. Sledování pokroku</h3>
              <p>Vidíte, jak se dítě zlepšuje s každým testem a kde je potřeba přidat.</p>
            </div>
            <div className="card">
              <h3>6. Komplexní příprava</h3>
              <p>25 testů pokrývá všechny typy úloh a situací, které dítě u přijímaček potká.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <FAQ items={faqItems} />
      </section>

      {/* CTA */}
      <section className="section section-alt">
        <div className="container">
          <div className="card" style={{
            textAlign: 'center',
            background: 'linear-gradient(135deg, #4A90E2 0%, #52C9A2 100%)',
            color: 'white',
          }}>
            <h2 style={{ color: 'white', marginBottom: 'var(--spacing-md)' }}>
              Začněte komplexní přípravu ještě dnes
            </h2>
            <p style={{
              color: 'rgba(255, 255, 255, 0.95)',
              marginBottom: 'var(--spacing-lg)',
            }}>
              25 testů vám poskytne komplexní přípravu na přijímačky. Volba mezi online a osobními testy vám umožní přizpůsobit přípravu potřebám vašeho dítěte.
            </p>
            <div style={{
              display: 'flex',
              gap: 'var(--spacing-md)',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}>
              <Link href="/kontakt" className="btn btn-large" style={{
                backgroundColor: 'white',
                color: 'var(--color-primary)',
              }}>
                Domluvit komplexní balíček
              </Link>
              <Link href="/ukazkovy-test" className="btn btn-large" style={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                border: '2px solid white',
                color: 'white',
              }}>
                Nebo vyzkoušejte zdarma
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
