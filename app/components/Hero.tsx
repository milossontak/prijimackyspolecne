import Link from 'next/link'
import { useContent } from '../hooks/useContent'

export default function Hero() {
  const { content } = useContent()
  
  const heroContent = content?.hero || {
    h1: 'Přijímačky Společně',
    paragraphs: ['Vítejte'],
    ctaPrimary: 'Vyzkoušejte zdarma',
    ctaSecondary: 'Zobrazit služby'
  }

  const [heroTitlePrimary, ...heroTitleRest] = heroContent.h1.split(':')
  const heroTitleSecondary = heroTitleRest.join(':').trim()

  return (
    <section style={{
      padding: 'var(--spacing-2xl) 0',
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
            margin: '0 auto var(--spacing-lg)',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            maxWidth: '18ch',
            lineHeight: 1.15,
            textWrap: 'balance',
          }}>
            <span>{heroTitlePrimary.trim()}</span>
            {heroTitleSecondary ? (
              <span style={{ display: 'block', marginTop: '0.25em', fontSize: '0.72em' }}>
                {heroTitleSecondary}
              </span>
            ) : null}
          </h1>
          <div style={{
            fontSize: '1.25rem',
            lineHeight: 1.7,
            marginBottom: 'var(--spacing-xl)',
          }}>
            {heroContent.paragraphs?.map((p: string, i: number) => (
              <p key={i} style={{ marginBottom: i < (heroContent.paragraphs?.length || 0) - 1 ? 'var(--spacing-md)' : 0 }}>
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
              {heroContent.ctaPrimary}
            </Link>
            <Link href="/sluzby" className="btn btn-secondary btn-large">
              {heroContent.ctaSecondary}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
