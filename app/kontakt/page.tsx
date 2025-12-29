import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export default function KontaktPage() {
  return (
    <>
      <Header />
      <section className="section" style={{ paddingTop: 'var(--spacing-2xl)', minHeight: '60vh' }}>
        <div className="container">
          <h1 className="text-center">Kontakt</h1>
          <div style={{
            maxWidth: '600px',
            margin: 'var(--spacing-xl) auto',
          }}>
            <div className="card" style={{ textAlign: 'center' }}>
              <h2>Kontaktní informace</h2>
              <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-md)' }}>
                <strong>Email:</strong><br />
                <a href="mailto:info@prijimacky-spolecne.cz">info@prijimacky-spolecne.cz</a>
              </p>
              <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-md)' }}>
                <strong>Telefon:</strong><br />
                <a href="tel:+420737827230">+420 737 827 230</a>
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--color-text-gray)' }}>
                Jsme tu pro vás každý pracovní den od 9:00 do 17:00.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

