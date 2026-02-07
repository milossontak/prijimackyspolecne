import Link from 'next/link'
import { siteContent } from '../content/site'

const content = siteContent.heroV2

export default function HeroV2() {
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
            {content.h1}
          </h1>
          <div style={{
            fontSize: '1.25rem',
            lineHeight: 1.7,
            marginBottom: 'var(--spacing-xl)',
            color: 'rgba(255, 255, 255, 0.95)',
          }}>
            {content.paragraphs.map((p, i) => (
              <p key={i} style={{ marginBottom: i < content.paragraphs.length - 1 ? 'var(--spacing-md)' : 0 }}>
                {p}
              </p>
            ))}
          </div>
          <div style={{
            display: 'flex',
            gap: 'var(--spacing-md)',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            <Link href="/ukazkovy-test" className="btn btn-primary btn-large">
              {content.ctaPrimary}
            </Link>
            <Link
              href="/sluzby"
              className="btn btn-secondary btn-large"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderColor: 'white',
                color: 'white',
              }}
            >
              {content.ctaSecondary}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
