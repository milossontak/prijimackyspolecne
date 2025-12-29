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
    description: 'Po zakoupení testu obdržíte přístupové údaje do klientské sekce. Přihlásíte se a vyberete si termín osobního testu.'
  },
  {
    step: '2',
    title: 'Spuštění testu',
    description: 'Test probíhá ve stejných podmínkách jako skutečné přijímačky - stejný časový limit (obvykle 60-70 minut), stejná atmosféra, stejné typy úloh.'
  },
  {
    step: '3',
    title: 'Automatické vyhodnocení',
    description: 'Po dokončení testu proběhne automatické vyhodnocení. Zjistíte celkové skóre, počet správných a špatných odpovědí a procentuální úspěšnost.'
  },
  {
    step: '4',
    title: 'Zobrazení výsledků + video vysvětlení',
    description: 'Do 24 hodin obdržíte detailní výsledky a přístup k videu s vysvětlením každé úlohy. Lektor vysvětluje nejen správné řešení, ale i časté chyby a jak se jim vyhnout.'
  },
  {
    step: '5',
    title: 'Přístup k benchmarku a doporučením',
    description: 'Uvidíte, jak si dítě stojí oproti ostatním studentům, a obdržíte konkrétní doporučení pro další přípravu. Možnost konzultace s lektorem.'
  }
]

const packages = [
  {
    name: 'Jeden test',
    tests: 1,
    price: 890,
    originalPrice: null,
    features: [
      '1x osobní test nanečisto',
      'Video vysvětlení',
      'Benchmark',
      'Možnost konzultace'
    ],
    popular: false
  },
  {
    name: 'Tři testy',
    tests: 3,
    price: 2390,
    originalPrice: 2670,
    features: [
      '3x osobní test nanečisto',
      'Video vysvětlení ke každému testu',
      'Benchmark pro každý test',
      'Sledování pokroku v čase',
      'Konzultace po každém testu'
    ],
    popular: true
  },
  {
    name: 'Pět testů',
    tests: 5,
    price: 3690,
    originalPrice: 4450,
    features: [
      '5x osobní test nanečisto',
      'Video vysvětlení ke každému testu',
      'Benchmark pro každý test',
      'Sledování pokroku v čase',
      'Prioritní konzultace',
      'Individuální plán přípravy'
    ],
    popular: false
  }
]

const faqItems = [
  {
    question: 'Kde probíhají osobní testy?',
    answer: 'Osobní testy probíhají v našich pobočkách v Praze, Brně a Ostravě. Přesné adresy a termíny najdete po registraci v klientské sekci.'
  },
  {
    question: 'Jak dlouho trvá osobní test?',
    answer: 'Osobní test trvá stejně dlouho jako skutečné přijímací zkoušky - obvykle 60-70 minut pro matematiku a 60-70 minut pro český jazyk. Celková doba včetně instrukcí je cca 2,5 hodiny.'
  },
  {
    question: 'Mohu být přítomen při testu?',
    answer: 'Rodiče mohou být přítomni v čekárně, ale ne přímo v testovací místnosti, aby byla zachována reálná simulace atmosféry přijímaček.'
  }
]

export default function OsobniTestyPage() {
  return (
    <>
      <Header />
      
      {/* Breadcrumbs */}
      <div className="container" style={{ paddingTop: 'var(--spacing-lg)', paddingBottom: 'var(--spacing-sm)' }}>
        <nav style={{ fontSize: '0.9rem', color: 'var(--color-text-gray)' }}>
          <Link href="/">Domů</Link> {' > '}
          <Link href="/sluzby">Služby</Link> {' > '}
          <span>Osobní testy nanečisto</span>
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
            Osobní testy nanečisto - Reálná simulace přijímaček
          </h1>
          <p style={{
            fontSize: '1.25rem',
            marginBottom: 'var(--spacing-lg)',
            color: 'rgba(255, 255, 255, 0.95)',
          }}>
            Absolvujte test ve stejných podmínkách jako u skutečných přijímaček. Stejná atmosféra, stejný časový limit, stejné typy úloh. Po testu obdržíte detailní zpětnou vazbu s videem a benchmarkem.
          </p>
          <div style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            marginBottom: 'var(--spacing-lg)',
          }}>
            od 890 Kč
          </div>
          <button className="btn btn-primary btn-large" style={{
            backgroundColor: 'white',
            color: 'var(--color-secondary)',
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
                  backgroundColor: 'var(--color-secondary)',
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
                  border: pkg.popular ? '2px solid var(--color-secondary)' : '1px solid var(--color-border)',
                }}
              >
                {pkg.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: 'var(--color-secondary)',
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
                    color: 'var(--color-secondary)',
                  }}>
                    {pkg.price.toLocaleString('cs-CZ')} Kč
                  </div>
                  {pkg.originalPrice && (
                    <div style={{
                      fontSize: '0.875rem',
                      color: 'var(--color-primary)',
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
                <button className="btn btn-primary" style={{
                  width: '100%',
                  backgroundColor: 'var(--color-secondary)',
                }}>
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
                color: 'var(--color-secondary)',
              }}>
                Koupit Osobní testy
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

