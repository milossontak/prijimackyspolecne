import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import FAQ from '@/app/components/FAQ'
import { CheckIcon } from '@/app/components/Icons'
import Link from 'next/link'
import type { Metadata } from 'next'
import { loadSiteContent } from '@/app/lib/content'

export async function generateMetadata(): Promise<Metadata> {
  const seo = loadSiteContent().seo?.pages?.package5
  return {
    title: seo?.title || 'Balíček 5 testů nanečisto',
    description:
      seo?.description ||
      'Balíček 5 testů nanečisto pro systematickou přípravu na přijímací zkoušky. Okamžité vyhodnocení, video vysvětlení a benchmark.',
    alternates: {
      canonical: seo?.canonical || '/sluzby/balicek-5-testu',
    },
  }
}

const includedFeatures = [
  {
    title: '5 testů nanečisto',
    description: 'Příprava pokrývající základní typy úloh z přijímacích zkoušek'
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
    title: 'Dostupné v klientské sekci',
    description: 'Všechny výsledky a videa jsou dostupné kdykoliv'
  },
  {
    title: 'Ideální pro začátek přípravy',
    description: 'Perfektní způsob, jak začít systematickou přípravu na přijímačky'
  }
]

const faqItems = [
  {
    question: 'Jak dlouho mám přístup k testům?',
    answer: 'Po zakoupení máte neomezený přístup ke všem 5 testům. Můžete je absolvovat podle vlastního tempa a všechny výsledky a videa jsou dostupné v klientské sekci.'
  },
  {
    question: 'Mohu testy absolvovat online nebo osobně?',
    answer: 'Balíček 5 testů je dostupný online. Pokud chcete možnost volby mezi online a osobními testy, doporučujeme komplexní balíček 25 testů.'
  },
  {
    question: 'Na jaké typy přijímaček se můžeme připravit?',
    answer: 'Balíček pokrývá přípravu na přijímací zkoušky na střední školy (z 9. třídy) i na gymnázia z 5. třídy. Testy jsou navrženy tak, aby pokryly základní typy úloh, které se u přijímaček objevují.'
  },
  {
    question: 'Mohu testy opakovat?',
    answer: 'Ano, každý test můžete absolvovat vícekrát. Doporučujeme však absolvovat různé testy, abyste pokryli všechny typy úloh.'
  }
]

export default function Balicek5TestuPage() {
  return (
    <>
      <Header />
      
      {/* Breadcrumbs */}
      <div className="container" style={{ paddingTop: 'var(--spacing-lg)', paddingBottom: 'var(--spacing-sm)' }}>
        <nav style={{ fontSize: '0.9rem', color: 'var(--color-text-gray)' }}>
          <Link href="/">Domů</Link> {' > '}
          <Link href="/sluzby">Služby</Link> {' > '}
          <span>Balíček 5 testů</span>
        </nav>
      </div>

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #52C9A2 0%, #4A90E2 100%)',
        color: 'white',
        padding: 'var(--spacing-2xl) 0',
      }}>
        <div className="container">
          <h1 style={{ color: 'white', marginBottom: 'var(--spacing-md)' }}>
            Balíček 5 testů nanečisto
          </h1>
          <p style={{
            fontSize: '1.25rem',
            marginBottom: 'var(--spacing-lg)',
            color: 'rgba(255, 255, 255, 0.95)',
          }}>
            Ideální pro začátek přípravy na přijímací zkoušky na střední školy i gymnázia z 5. třídy. Pět testů nanečisto s okamžitým vyhodnocením a detailní zpětnou vazbou.
          </p>
          <div style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            marginBottom: 'var(--spacing-lg)',
          }}>
            3 000 Kč
          </div>
          <Link href="/kontakt" className="btn btn-primary btn-large" style={{
            backgroundColor: 'white',
            color: 'var(--color-secondary)',
          }}>
            Vybrat balíček a začít
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
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--spacing-lg)',
          }}>
            <div className="card" style={{
              display: 'flex',
              gap: 'var(--spacing-lg)',
              alignItems: 'flex-start',
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-secondary)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: 700,
                flexShrink: 0,
              }}>
                1
              </div>
              <div>
                <h3 style={{ marginBottom: 'var(--spacing-xs)' }}>Zakoupení balíčku</h3>
                <p style={{ margin: 0 }}>Po zakoupení obdržíte přístup do klientské sekce s 5 testy.</p>
              </div>
            </div>
            <div className="card" style={{
              display: 'flex',
              gap: 'var(--spacing-lg)',
              alignItems: 'flex-start',
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-secondary)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: 700,
                flexShrink: 0,
              }}>
                2
              </div>
              <div>
                <h3 style={{ marginBottom: 'var(--spacing-xs)' }}>Absolvování testů</h3>
                <p style={{ margin: 0 }}>Testy probíhají online v reálných podmínkách - stejný časový limit a typy úloh jako u přijímaček.</p>
              </div>
            </div>
            <div className="card" style={{
              display: 'flex',
              gap: 'var(--spacing-lg)',
              alignItems: 'flex-start',
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-secondary)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: 700,
                flexShrink: 0,
              }}>
                3
              </div>
              <div>
                <h3 style={{ marginBottom: 'var(--spacing-xs)' }}>Okamžité vyhodnocení</h3>
                <p style={{ margin: 0 }}>Po dokončení každého testu obdržíte okamžité vyhodnocení s celkovým skóre a procentuální úspěšností.</p>
              </div>
            </div>
            <div className="card" style={{
              display: 'flex',
              gap: 'var(--spacing-lg)',
              alignItems: 'flex-start',
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-secondary)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: 700,
                flexShrink: 0,
              }}>
                4
              </div>
              <div>
                <h3 style={{ marginBottom: 'var(--spacing-xs)' }}>Video vysvětlení a benchmark</h3>
                <p style={{ margin: 0 }}>Ke každé úloze je připraveno video s vysvětlením a uvidíte, jak si dítě stojí oproti ostatním studentům.</p>
              </div>
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
            background: 'linear-gradient(135deg, #52C9A2 0%, #4A90E2 100%)',
            color: 'white',
          }}>
            <h2 style={{ color: 'white', marginBottom: 'var(--spacing-md)' }}>
              Začněte přípravu ještě dnes
            </h2>
            <p style={{
              color: 'rgba(255, 255, 255, 0.95)',
              marginBottom: 'var(--spacing-lg)',
            }}>
              Balíček 5 testů je ideální pro začátek přípravy. Pokud chcete komplexnější přípravu, podívejte se na komplexní balíček 25 testů.
            </p>
            <div style={{
              display: 'flex',
              gap: 'var(--spacing-md)',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}>
              <Link href="/kontakt" className="btn btn-large" style={{
                backgroundColor: 'white',
                color: 'var(--color-secondary)',
              }}>
                Vybrat balíček 5 testů
              </Link>
              <Link href="/sluzby/komplexni-balicek" className="btn btn-large" style={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                border: '2px solid white',
                color: 'white',
              }}>
                Zobrazit komplexní balíček
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
