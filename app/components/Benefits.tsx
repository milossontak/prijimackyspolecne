import { useContent } from '../hooks/useContent'

export default function Benefits() {
  const { content } = useContent()
  
  const benefitsData = content?.benefits || {
    title: 'Výhody',
    items: []
  }

  return (
    <section className="section section-alt">
      <div className="container">
        <h2>{benefitsData.title}</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'var(--spacing-xl)',
        }}>
          {benefitsData.items.map((benefit: any, index: number) => (
            <div key={index} className="card">
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}