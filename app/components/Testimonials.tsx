export default function Testimonials() {
  const testimonials = [
    {
      text: "Syn byl před testy ve velkém stresu. Díky Přijímačkám Společně věděl přesně, co ho čeká, a šel na přijímačky s klidem. Úspěšně se dostal na obě školy, kam se hlásil.",
      author: "Jana Nováková",
      location: "Praha"
    },
    {
      text: "Jako rodič jsem ocenila hlavně to, že jsem viděla reálný pokrok dcery. Videa s vysvětlením byly skvělé - dcera pochopila, kde dělala chyby a jak se zlepšit.",
      author: "Martina Svobodová",
      location: "Brno"
    },
    {
      text: "Osobní testy nanečisto byly přesně to, co dcera potřebovala. Atmosféra byla stejná jako u přijímaček, takže pak už nebyla nervózní. Doporučuji všem rodičům.",
      author: "Petr Dvořák",
      location: "Ostrava"
    }
  ]

  const stats = [
    { number: "500+", label: "úspěšných studentů" },
    { number: "95%", label: "spokojenost rodičů" },
    { number: "98%", label: "úspěšnost u přijímaček" }
  ]

  return (
    <section className="section">
      <div className="container">
        <h2 className="text-center">Rodiče nám důvěřují</h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'var(--spacing-xl)',
          marginTop: 'var(--spacing-xl)',
          marginBottom: 'var(--spacing-xl)',
        }}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card">
              <p style={{ fontStyle: 'italic', marginBottom: 'var(--spacing-md)' }}>
                "{testimonial.text}"
              </p>
              <div style={{ fontWeight: 600 }}>
                {testimonial.author}
              </div>
              <div style={{ color: 'var(--color-text-gray)', fontSize: '0.9rem' }}>
                {testimonial.location}
              </div>
            </div>
          ))}
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 'var(--spacing-lg)',
          marginTop: 'var(--spacing-xl)',
        }}>
          {stats.map((stat, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '3rem',
                fontWeight: 700,
                color: 'var(--color-primary)',
                marginBottom: 'var(--spacing-xs)',
              }}>
                {stat.number}
              </div>
              <div style={{ color: 'var(--color-text-gray)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

