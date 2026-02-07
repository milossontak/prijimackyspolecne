import { SelectIcon, DocumentIcon, ChartIcon } from './Icons'
import { siteContent } from '../content/site'

const icons = [SelectIcon, DocumentIcon, ChartIcon]

export default function HowItWorks() {
  const { title, steps = [] } = siteContent.howItWorks || {
    title: 'Jak to funguje',
    steps: []
  }

  return (
    <section className="section">
      <div className="container">
        <h2 className="text-center">{title}</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'var(--spacing-xl)',
          marginTop: 'var(--spacing-xl)',
        }}>
          {steps.map((step, index) => {
            const IconComponent = icons[index]
            return (
              <div key={index} className="card" style={{ textAlign: 'center' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: 'var(--spacing-md)',
                  color: 'var(--color-primary)',
                }}>
                  <IconComponent size={64} />
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

