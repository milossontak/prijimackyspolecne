import { HeartIcon, ShieldCheckIcon, TargetIcon } from './Icons'
import { siteContent } from '../content/site'

const icons = [HeartIcon, ShieldCheckIcon, TargetIcon]

export default function Benefits() {
  const { title, items: benefits } = siteContent.benefits

  return (
    <section className="section section-alt">
      <div className="container">
        <h2 className="text-center">{title}</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'var(--spacing-xl)',
          marginTop: 'var(--spacing-xl)',
        }}>
          {benefits.map((benefit, index) => {
            const IconComponent = icons[index]
            return (
              <div key={index} className="card">
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: 'var(--spacing-md)',
                  color: 'var(--color-primary)',
                }}>
                  <IconComponent size={64} />
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

