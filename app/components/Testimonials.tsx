import Link from 'next/link'
import { useContent } from '../hooks/useContent'

export default function Testimonials() {
  const { content } = useContent()
  
  const testimonialsData = content?.testimonials || {
    title: 'Reference',
    items: [],
    stats: []
  }

  return (
    <section className="section">
      <div className="container">
        <h2>{testimonialsData.title}</h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'var(--spacing-xl)',
          marginTop: 'var(--spacing-xl)',
          marginBottom: 'var(--spacing-xl)',
        }}>
          {testimonialsData.items.map((testimonial: any, index: number) => (
            <div key={index} className="card">
              <p style={{ fontStyle: 'italic', marginBottom: 'var(--spacing-md)' }}>
                "{testimonial.content}"
              </p>
              <div style={{ fontWeight: 600 }}>
                {testimonial.name}
              </div>
              <div style={{ color: 'var(--color-text-gray)', fontSize: '0.9rem' }}>
                {testimonial.role}
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
          {testimonialsData.stats.map((stat: any, index: number) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '2rem',
                fontWeight: 700,
                color: 'var(--color-primary)',
                marginBottom: 'var(--spacing-sm)',
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