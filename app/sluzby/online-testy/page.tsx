import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import FAQ from '@/app/components/FAQ'
import { CheckIcon } from '@/app/components/Icons'
import Link from 'next/link'

const includedFeatures = [
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

const processSteps = [
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

const packages = [
  {
    name: 'Jeden test',
    tests: 1,
    price: 490,
    originalPrice: null,
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

const faqItems = [
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

export default function OnlineTestyPage() {
  return (
    <>
      <Header />
      
      {/* Breadcrumbs */}
      <div className="container" style={{ paddingTop: 'var(--spacing-lg)', paddingBottom: 'var(--spacing-sm)' }}>
        <nav style={{ fontSize: '0.9rem', color: 'var(--color-text-gray)' }}>
          <Link href="/">Domů</Link> {' > '}
          <Link href="/sluzby">Služby</Link> {' > '}
          <span>Online testy</span>
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
            Online testy - Připravte se odkudkoliv a kdykoliv
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
          <button className="btn btn-primary btn-large" style={{
            backgroundColor: 'white',
            color: 'var(--color-primary)',
          }}>
            Koupit nyní
          </button>
        </div>
      </section>

      {/* Co je zahrnuto */}
      <section className="section">
        <div className="container">
          <h2>Co je součástí testu</h2>
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
          <h2>Jak probíhá test</h2>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--spacing-lg)',
          }}>
            {processSteps.map((step, index) => (
              <div key={index} className="card" style={{
                display: 'flex',
                gap: 'var(--spacing-lg)',
                alignItems: 'flex-start',
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-primary)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  flexShrink: 0,
                }}>
                  {step.step}
                </div>
                <div>
                  <h3 style={{ marginBottom: 'var(--spacing-xs)' }}>{step.title}</h3>
                  <p style={{ margin: 0 }}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
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
            Čím více testů, tím větší příprava a jistota. Doporučujeme absolvovat alespoň 3 testy pro komplexní přípravu.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--spacing-xl)',
          }}>
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="card"
                style={{
                  position: 'relative',
                  border: pkg.popular ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
                }}
              >
                {pkg.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: 'var(--color-primary)',
                    color: 'white',
                    padding: '0.25rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                  }}>
                    Nejpopulárnější
                  </div>
                )}
                <h3 style={{ textAlign: 'center', marginBottom: 'var(--spacing-md)' }}>
                  {pkg.name}
                </h3>
                <div style={{
                  textAlign: 'center',
                  marginBottom: 'var(--spacing-md)',
                }}>
                  {pkg.originalPrice && (
                    <div style={{
                      fontSize: '1rem',
                      color: 'var(--color-text-gray)',
                      textDecoration: 'line-through',
                      marginBottom: '0.25rem',
                    }}>
                      {pkg.originalPrice.toLocaleString('cs-CZ')} Kč
                    </div>
                  )}
                  <div style={{
                    fontSize: '2rem',
                    fontWeight: 700,
                    color: 'var(--color-primary)',
                  }}>
                    {pkg.price.toLocaleString('cs-CZ')} Kč
                  </div>
                  {pkg.originalPrice && (
                    <div style={{
                      fontSize: '0.875rem',
                      color: 'var(--color-secondary)',
                      marginTop: '0.25rem',
                    }}>
                      Ušetříte {(pkg.originalPrice - pkg.price).toLocaleString('cs-CZ')} Kč
                    </div>
                  )}
                </div>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  marginBottom: 'var(--spacing-lg)',
                }}>
                  {pkg.features.map((feature, i) => (
                    <li key={i} style={{
                      marginBottom: 'var(--spacing-xs)',
                      paddingLeft: '1.75rem',
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        color: 'var(--color-secondary)',
                        display: 'flex',
                        alignItems: 'center',
                      }}>
                        <CheckIcon size={18} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="btn btn-primary" style={{ width: '100%' }}>
                  Koupit
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-alt">
        <FAQ items={faqItems} />
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="card" style={{
            textAlign: 'center',
            background: 'linear-gradient(135deg, #4A90E2 0%, #52C9A2 100%)',
            color: 'white',
          }}>
            <h2 style={{ color: 'white', marginBottom: 'var(--spacing-md)' }}>
              Začněte přípravu ještě dnes
            </h2>
            <p style={{
              color: 'rgba(255, 255, 255, 0.95)',
              marginBottom: 'var(--spacing-lg)',
            }}>
              Neztrácejte čas a začněte připravovat vaše dítě na přijímačky už teď. Každý den se počítá.
            </p>
            <div style={{
              display: 'flex',
              gap: 'var(--spacing-md)',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}>
              <button className="btn btn-large" style={{
                backgroundColor: 'white',
                color: 'var(--color-primary)',
              }}>
                Koupit Online testy
              </button>
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

