import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export default function BlogPage() {
  return (
    <>
      <Header />
      <section className="section" style={{ paddingTop: 'var(--spacing-2xl)', minHeight: '60vh' }}>
        <div className="container">
          <h1 className="text-center">Blog</h1>
          <p style={{
            textAlign: 'center',
            maxWidth: '700px',
            margin: '0 auto',
            fontSize: '1.125rem',
          }}>
            Edukativní obsah, rady pro rodiče i studenty. Brzy zde najdete užitečné články o přípravě na přijímačky.
          </p>
        </div>
      </section>
      <Footer />
    </>
  )
}

