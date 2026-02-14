import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import FAQ from '@/app/components/FAQ'
import Breadcrumb from '@/app/components/Breadcrumb'
import TestFeatures from '@/app/components/TestFeatures'
import ProcessSteps from '@/app/components/ProcessSteps'
import TestPackages from '@/app/components/TestPackages'
import CallToAction from '@/app/components/CallToAction'
import Link from 'next/link'
import type { Metadata } from 'next'
import { loadSiteContent } from '@/app/lib/content'

export async function generateMetadata(): Promise<Metadata> {
  const seo = loadSiteContent().seo?.pages?.onlineTests
  return {
    title: seo?.title || 'Online testy nanečisto',
    description:
      seo?.description ||
      'Online testy nanečisto k přijímacím zkouškám. Okamžité vyhodnocení, video vysvětlení úloh a doporučení pro další přípravu.',
    alternates: {
      canonical: seo?.canonical || '/sluzby/online-testy',
    },
  }
}

// Data extracted to separate constants for better maintainability
const testFeatures = [
  {
    title: 'Realistický test nanečisto',
    description: 'Stejné typy úloh jako u skutečných přijímaček'
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
    title: 'Doporučení pro další přípravu',
    description: 'Konkrétní tipy, na co se zaměřit v další přípravě'
  },
  {
    title: 'Přístup k výsledkům v klientské sekci',
    description: 'Všechny výsledky a videa jsou dostupné kdykoliv'
  }
]

const processData = [
  {
    step: '1',
    title: 'Registrace a přihlášení',
    description: 'Po zakoupení testu obdržíte přístupové údaje do klientské sekce. Přihlásíte se a vyberete si test, který chcete absolvovat.'
  },
  {
    step: '2',
    title: 'Spuštění testu',
    description: 'Test probíhá v reálných podmínkách - stejný časový limit jako u přijímaček (obvykle 60-70 minut). Dítě má k dispozici všechny potřebné materiály a může pracovat v klidu.'
  },
  {
    step: '3',
    title: 'Automatické vyhodnocení',
    description: 'Po dokončení testu proběhne okamžité automatické vyhodnocení. Zjistíte celkové skóre, počet správných a špatných odpovědí a procentuální úspěšnost.'
  },
  {
    step: '4',
    title: 'Zobrazení výsledků + video vysvětlení',
    description: 'V klientské sekci uvidíte detailní výsledky a můžete si přehrát video s vysvětlením každé úlohy. Lektor vysvětluje nejen správné řešení, ale i časté chyby a jak se jim vyhnout.'
  },
  {
    step: '5',
    title: 'Přístup k benchmarku a doporučením',
    description: 'Uvidíte, jak si dítě stojí oproti ostatním studentům, a obdržíte konkrétní doporučení pro další přípravu.'
  }
]

const testPackages = [
  {
    name: 'Jeden test',
    tests: 1,
    price: 490,
    features: [
      '1x test nanečisto',
      'Video vysvětlení',
      'Benchmark'
    ],
    popular: false
  },
  {
    name: 'Tři testy',
    tests: 3,
    price: 1290,
    originalPrice: 1470,
    features: [
      '3x test nanečisto',
      'Video vysvětlení ke každému testu',
      'Benchmark pro každý test',
      'Sledování pokroku v čase'
    ],
    popular: true
  },
  {
    name: 'Pět testů',
    tests: 5,
    price: 1950,
    originalPrice: 2450,
    features: [
      '5x test nanečisto',
      'Video vysvětlení ke každému testu',
      'Benchmark pro každý test',
      'Sledování pokroku v čase',
      'Prioritní podpora'
    ],
    popular: false
  }
]

const faqData = [
  {
    question: 'Jak dlouho mám přístup k testu?',
    answer: 'Po zakoupení máte neomezený přístup k testu. Můžete ho absolvovat vícekrát a všechny výsledky a videa jsou dostupné v klientské sekci.'
  },
  {
    question: 'Mohu test přerušit a dokončit později?',
    answer: 'Ano, u online testů můžete test kdykoliv přerušit a pokračovat později. Časový limit se počítá pouze při aktivním řešení testu.'
  },
  {
    question: 'Jak funguje video vysvětlení?',
    answer: 'Ke každé úloze v testu je připraveno video, kde zkušený lektor vysvětluje správné řešení, ukazuje postup krok za krokem a upozorňuje na časté chyby. Videa můžete přehrávat opakovaně.'
  }
]

const breadcrumbItems = [
  { label: 'Domů', href: '/' },
  { label: 'Služby', href: '/sluzby' },
  { label: 'Online testy' }
]

export default function OnlineTestyPage() {
  return (
    <>
      <Header />
      
      <main id="main-content">
        {/* Breadcrumbs */}
        <div className="container" style={{ paddingTop: 'var(--spacing-lg)', paddingBottom: 'var(--spacing-sm)' }}>
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Hero Section */}
        <section style={{
          background: 'linear-gradient(135deg, #4A90E2 0%, #52C9A2 100%)',
          color: 'white',
          padding: 'var(--spacing-2xl) 0',
        }}>
          <div className="container">
            <h1 style={{ color: 'white', marginBottom: 'var(--spacing-md)' }}>
              Online testy nanečisto: připravujte se kdykoliv a odkudkoliv
            </h1>
            <p style={{
              fontSize: '1.25rem',
              marginBottom: 'var(--spacing-lg)',
              color: 'rgba(255, 255, 255, 0.95)',
            }}>
              Realistické testy nanečisto s okamžitým vyhodnocením. Každý test obsahuje video s vysvětlením každé úlohy a porovnání s ostatními studenty. Ideální pro systematickou přípravu v pohodlí domova.
            </p>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: 700,
              marginBottom: 'var(--spacing-lg)',
            }}>
              od 490 Kč
            </div>
            <Link href="/kontakt" className="btn btn-primary btn-large" style={{
              backgroundColor: 'white',
              color: 'var(--color-primary)',
            }}>
              Vybrat balíček a začít
            </Link>
          </div>
        </section>

        {/* Co je zahrnuto */}
        <section className="section">
          <div className="container">
            <h2>Co je součástí testu</h2>
            <TestFeatures features={testFeatures} />
          </div>
        </section>

        {/* Jak to probíhá */}
        <section className="section section-alt">
          <div className="container">
            <h2>Jak probíhá test</h2>
            <ProcessSteps steps={processData} />
          </div>
        </section>

        {/* Balíčky */}
        <section className="section">
          <div className="container">
            <h2 className="text-center">Vyberte si balíček</h2>
            <p style={{
              textAlign: 'center',
              marginBottom: 'var(--spacing-xl)',
              color: 'var(--color-text-gray)',
            }}>
              Více testů pomůže dříve odhalit slabá místa a zvýšit jistotu u přijímaček. Pro systematickou přípravu doporučujeme alespoň 3 testy.
            </p>
            <TestPackages packages={testPackages} />
          </div>
        </section>

        {/* FAQ */}
        <section className="section section-alt">
          <FAQ items={faqData} />
        </section>

        {/* CTA */}
        <section className="section">
          <div className="container">
            <CallToAction />
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
