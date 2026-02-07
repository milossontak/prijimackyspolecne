import Link from 'next/link'
import Logo from './Logo'
import { siteContent } from '../content/site'

const { footer } = siteContent

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--color-text-dark)',
      color: 'white',
      padding: 'var(--spacing-2xl) 0',
      marginTop: 'var(--spacing-2xl)',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 'var(--spacing-xl)',
          marginBottom: 'var(--spacing-xl)',
        }}>
          <div>
            <div style={{ marginBottom: 'var(--spacing-md)' }}>
              <Logo size={44} />
            </div>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.95rem' }}>
              {footer.tagline}
            </p>
          </div>
          <div>
            <h4 style={{ color: 'white', marginBottom: 'var(--spacing-md)' }}>Odkazy</h4>
            <ul style={{ listStyle: 'none' }}>
              <li style={{ marginBottom: 'var(--spacing-xs)' }}>
                <Link href="/" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Domů</Link>
              </li>
              <li style={{ marginBottom: 'var(--spacing-xs)' }}>
                <Link href="/sluzby" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Služby</Link>
              </li>
              <li style={{ marginBottom: 'var(--spacing-xs)' }}>
                <Link href="/blog" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Blog</Link>
              </li>
              <li style={{ marginBottom: 'var(--spacing-xs)' }}>
                <Link href="/kontakt" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Kontakt</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: 'white', marginBottom: 'var(--spacing-md)' }}>Kontakt</h4>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.95rem' }}>
              Email: {footer.email}<br />
              Telefon: {footer.phone}
            </p>
          </div>
        </div>
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.2)',
          paddingTop: 'var(--spacing-md)',
          textAlign: 'center',
          color: 'rgba(255, 255, 255, 0.6)',
          fontSize: '0.9rem',
        }}>
          {footer.copyright}
        </div>
      </div>
    </footer>
  )
}

