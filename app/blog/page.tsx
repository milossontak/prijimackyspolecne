import Link from 'next/link'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import { listPosts } from '@/app/lib/blog'

export const dynamic = 'force-dynamic'
export const dynamicParams = true
export const runtime = 'nodejs'

export default function BlogPage() {
  const posts = listPosts(false)

  return (
    <>
      <Header />
      <section className="section" style={{ paddingTop: 'var(--spacing-2xl)', minHeight: '60vh' }}>
        <div className="container">
          <h1 className="text-center">Blog</h1>
          <p
            style={{
              textAlign: 'center',
              maxWidth: '700px',
              margin: '0 auto',
              fontSize: '1.125rem',
            }}
          >
            Edukativní obsah, rady pro rodiče i studenty. Nové články přidáváme průběžně.
          </p>

          {posts.length === 0 ? (
            <div style={{ textAlign: 'center', marginTop: '2rem', color: '#666' }}>
              Zatím tu nejsou žádné články.
            </div>
          ) : (
            <div
              style={{
                display: 'grid',
                gap: '1.5rem',
                marginTop: '2.5rem',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              }}
            >
              {posts.map((post) => (
                <article key={post.slug} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                  {post.coverImage && (
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      style={{
                        width: '100%',
                        height: '180px',
                        objectFit: 'cover',
                        borderRadius: '12px',
                        marginBottom: '1rem',
                      }}
                    />
                  )}
                  <h3 style={{ marginBottom: '0.75rem' }}>{post.title}</h3>
                  {post.perex && <p style={{ fontSize: '1rem' }}>{post.perex}</p>}
                  <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.85rem', color: '#666' }}>
                      {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('cs-CZ') : ''}
                    </span>
                    <Link href={`/blog/${post.slug}`} style={{ fontWeight: 600 }}>
                      Číst článek →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  )
}
