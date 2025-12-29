import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import ServiceTypes from '@/app/components/ServiceTypes'

export default function SluzbyPage() {
  return (
    <>
      <Header />
      <section className="section" style={{ paddingTop: 'var(--spacing-2xl)' }}>
        <div className="container">
          <h1 className="text-center">Naše služby</h1>
          <p style={{
            textAlign: 'center',
            maxWidth: '700px',
            margin: '0 auto var(--spacing-xl)',
            fontSize: '1.125rem',
          }}>
            Nabízíme dva balíčky přípravy na přijímací zkoušky na střední školy i gymnázia z 5. třídy. Vyberte si tu, která nejlépe vyhovuje vašim potřebám.
          </p>
        </div>
      </section>
      <ServiceTypes />
      <Footer />
    </>
  )
}

