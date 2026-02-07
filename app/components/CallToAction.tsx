import Link from 'next/link'

interface CallToActionProps {
  title?: string
  description?: string
  primaryText?: string
  primaryLink?: string
  secondaryText?: string
  secondaryLink?: string
}

export default function CallToAction({
  title = 'Začněte přípravu ještě dnes',
  description = 'Neztrácejte čas a začněte připravovat vaše dítě na přijímačky už teď. Každý den se počítá.',
  primaryText = 'Koupit Online testy',
  primaryLink = '/objednavka',
  secondaryText = 'Nebo vyzkoušejte zdarma',
  secondaryLink = '/ukazkovy-test'
}: CallToActionProps) {
  return (
    <div className="card" style={{
      textAlign: 'center',
      background: 'linear-gradient(135deg, #4A90E2 0%, #52C9A2 100%)',
      color: 'white',
    }}>
      <h2 style={{ color: 'white', marginBottom: 'var(--spacing-md)' }}>
        {title}
      </h2>
      <p style={{
        color: 'rgba(255, 255, 255, 0.95)',
        marginBottom: 'var(--spacing-lg)',
      }}>
        {description}
      </p>
      <div style={{
        display: 'flex',
        gap: 'var(--spacing-md)',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}>
        <Link href={primaryLink} className="btn btn-large" style={{
          backgroundColor: 'white',
          color: 'var(--color-primary)',
        }}>
          {primaryText}
        </Link>
        <Link href={secondaryLink} className="btn btn-large" style={{
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          border: '2px solid white',
          color: 'white',
        }}>
          {secondaryText}
        </Link>
      </div>
    </div>
  )
}