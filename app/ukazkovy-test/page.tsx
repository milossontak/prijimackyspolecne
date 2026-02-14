'use client'

import { useState } from 'react'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export default function UkazkovyTestPage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const samplePacks = [
    {
      title: 'Matematika',
      items: [
        { label: 'Zadání 1 (PDF)', href: '#' },
        { label: 'Řešení 1 (PDF)', href: '#' },
        { label: 'Zadání 2 (PDF)', href: '#' },
        { label: 'Řešení 2 (PDF)', href: '#' },
      ],
    },
    {
      title: 'Čeština',
      items: [
        { label: 'Zadání 1 (PDF)', href: '#' },
        { label: 'Řešení 1 (PDF)', href: '#' },
        { label: 'Zadání 2 (PDF)', href: '#' },
        { label: 'Řešení 2 (PDF)', href: '#' },
      ],
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Header />
      <section className="section" style={{ paddingTop: 'var(--spacing-2xl)', minHeight: '60vh' }}>
        <div className="container">
          <div style={{
            maxWidth: '600px',
            margin: '0 auto',
          }}>
            <h1 className="text-center">Vyzkoušejte test zdarma</h1>
            <p style={{
              textAlign: 'center',
              marginBottom: 'var(--spacing-xl)',
              fontSize: '1.125rem',
            }}>
              Zadejte svůj email a získejte přístup k ukázkovému testu zdarma. Zjistíte, jak vypadají naše testy a jaká zpětná vazba vás čeká.
            </p>
            
            {!submitted ? (
              <div className="card">
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: 'var(--spacing-md)' }}>
                    <label htmlFor="email" style={{
                      display: 'block',
                      marginBottom: 'var(--spacing-xs)',
                      fontWeight: 600,
                    }}>
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        fontSize: '1rem',
                        border: '1px solid var(--color-border)',
                        borderRadius: 'var(--radius-md)',
                      }}
                      placeholder="vas@email.cz"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                    Získat test zdarma
                  </button>
                </form>
              </div>
            ) : (
              <div className="card" style={{
                textAlign: 'center',
                background: 'linear-gradient(135deg, #4A90E2 0%, #52C9A2 100%)',
                color: 'white',
              }}>
                <h2 style={{ color: 'white', marginBottom: 'var(--spacing-md)' }}>
                  Děkujeme!
                </h2>
                <p style={{ color: 'rgba(255, 255, 255, 0.95)' }}>
                  Děkujeme za vyplnění. Odesílání ukázkového testu emailem je aktuálně ve vývoji.
                  Níže zatím najdete sekci s ukázkovými PDF (placeholdery).
                </p>
              </div>
            )}

            <div style={{ marginTop: 'var(--spacing-2xl)' }}>
              <h2 style={{ marginBottom: 'var(--spacing-sm)' }}>Ukázkové testy ke stažení</h2>
              <p style={{ marginBottom: 'var(--spacing-lg)', color: 'var(--color-text-light)' }}>
                Zatím placeholder sekce. PDF soubory doplníme později.
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: 'var(--spacing-lg)',
              }}>
                {samplePacks.map((pack) => (
                  <div key={pack.title} className="card">
                    <h3 style={{ marginBottom: 'var(--spacing-md)' }}>{pack.title}</h3>
                    <div style={{ display: 'grid', gap: 'var(--spacing-sm)' }}>
                      {pack.items.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          className="btn"
                          style={{
                            display: 'block',
                            textAlign: 'center',
                            backgroundColor: '#eef3f8',
                            color: 'var(--color-text-dark)',
                            border: '1px dashed var(--color-border)',
                          }}
                          aria-disabled="true"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
