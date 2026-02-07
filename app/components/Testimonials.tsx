import { siteContent } from '../content/site'

export default function Testimonials() {
  const { title, items: testimonials, stats } = siteContent.testimonials

  return (
    <section className="section">
      <div className="container">
        <h2 className="text-center">{title}</h2>
        
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

