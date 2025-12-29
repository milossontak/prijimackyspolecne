import Link from 'next/link'

export default function Hero() {
  const h1 = "Přijímačky bez stresu. Reálná příprava, která dává jistotu."
  const subtitle = "Pomáháme dětem zvládnout přijímací zkoušky na střední školy i gymnázia z 5. třídy s klidem. Realistické testy nanečisto s okamžitou zpětnou vazbou a videem, které ukáže, kde je potřeba přidat. Vaše dítě bude vědět, co ho čeká, a vy budete mít jistotu, že je připravené."

  return (
    <section style={{
      background: 'linear-gradient(135deg, #4A90E2 0%, #52C9A2 100%)',
      color: 'white',
      padding: 'var(--spacing-2xl) 0',
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
    }}>
      <div className="container">
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center',
        }}>
          <h1 style={{
            color: 'white',
            marginBottom: 'var(--spacing-lg)',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          }}>
            {h1}
          </h1>
          <p style={{
            fontSize: '1.25rem',
            lineHeight: 1.7,
            marginBottom: 'var(--spacing-xl)',
            color: 'rgba(255, 255, 255, 0.95)',
          }}>
            {subtitle}
          </p>
          <div style={{
            display: 'flex',
            gap: 'var(--spacing-md)',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            <Link href="/ukazkovy-test" className="btn btn-primary btn-large">
              Vyzkoušejte zdarma
            </Link>
            <Link href="/sluzby" className="btn btn-secondary btn-large" style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderColor: 'white',
              color: 'white',
            }}>
              Zobrazit služby
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

