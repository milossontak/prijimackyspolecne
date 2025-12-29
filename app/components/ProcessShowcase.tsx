export default function ProcessShowcase() {
  const features = [
    {
      title: 'Okamžité vyhodnocení',
      description: 'Celkové skóre, procentuální úspěšnost, počet správných/špatných odpovědí'
    },
    {
      title: 'Video s vysvětlením',
      description: 'Každá úloha má své video, kde lektor vysvětluje správné řešení a časté chyby'
    },
    {
      title: 'Benchmark',
      description: 'Porovnání s ostatními studenty - uvidíte, jak si dítě stojí v rámci celé skupiny'
    },
    {
      title: 'Doporučení',
      description: 'Konkrétní tipy, na co se zaměřit v další přípravě'
    }
  ]

  return (
    <section className="section">
      <div className="container">
        <h2 className="text-center">Co vaše dítě získá po každém testu</h2>
        <p style={{
          textAlign: 'center',
          maxWidth: '700px',
          margin: '0 auto var(--spacing-xl)',
          fontSize: '1.125rem',
        }}>
          Každý test přinese komplexní zpětnou vazbu, která pomůže vašemu dítěti zlepšit se. Nejen výsledky, ale i pochopení, kde jsou mezery a jak je doplnit.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 'var(--spacing-lg)',
        }}>
          {features.map((feature, index) => (
            <div key={index} className="card" style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.25rem' }}>{feature.title}</h3>
              <p style={{ fontSize: '0.95rem', margin: 0 }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

