'use client'

import Link from 'next/link'
import { useContent } from '../hooks/useContent'

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
  primaryText = 'Vybrat balíček a začít přípravu',
  primaryLink = '/kontakt',
  secondaryText = 'Nebo vyzkoušejte zdarma',
  secondaryLink = '/ukazkovy-test'
}: CallToActionProps) {
  const { content } = useContent()

  const resolvedTitle = content?.cta?.title || title
  const resolvedDescription = content?.cta?.description || description
  const resolvedPrimaryText = content?.cta?.primaryText || primaryText
  const resolvedPrimaryLink = content?.cta?.primaryLink || primaryLink
  const resolvedSecondaryText = content?.cta?.secondaryText || secondaryText
  const resolvedSecondaryLink = content?.cta?.secondaryLink || secondaryLink

  return (
    <div className="card" style={{
      textAlign: 'center',
      background: 'linear-gradient(135deg, #4A90E2 0%, #52C9A2 100%)',
      color: 'white',
    }}>
      <h2 style={{ color: 'white', marginBottom: 'var(--spacing-md)' }}>
        {resolvedTitle}
      </h2>
      <p style={{
        color: 'rgba(255, 255, 255, 0.95)',
        marginBottom: 'var(--spacing-lg)',
      }}>
        {resolvedDescription}
      </p>
      <div style={{
        display: 'flex',
        gap: 'var(--spacing-md)',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}>
        <Link href={resolvedPrimaryLink} className="btn btn-large" style={{
          backgroundColor: 'white',
          color: 'var(--color-primary)',
        }}>
          {resolvedPrimaryText}
        </Link>
        <Link href={resolvedSecondaryLink} className="btn btn-large" style={{
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          border: '2px solid white',
          color: 'white',
        }}>
          {resolvedSecondaryText}
        </Link>
      </div>
    </div>
  )
}
