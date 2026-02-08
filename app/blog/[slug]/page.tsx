import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { marked } from 'marked'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import { listPosts, readPost } from '@/app/lib/blog'

export const dynamic = 'force-dynamic'
export const dynamicParams = true
export const runtime = 'nodejs'

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = readPost(slug)
  if (!post || post.status !== 'published') {
    return { title: 'Blog' }
  }

  const ogImage = post.seoImage || post.coverImage

  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.perex,
    keywords: post.seoKeywords,
    openGraph: ogImage ? { images: [{ url: ogImage }] } : undefined,
  }
}

export function generateStaticParams() {
  return listPosts(true).map((post) => ({ slug: post.slug }))
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params
  const post = readPost(slug)
  if (!post || post.status !== 'published') {
    notFound()
  }

  const html = marked.parse(post.content || '')

  return (
    <>
      <Header />
      <section className="section" style={{ paddingTop: 'var(--spacing-2xl)' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <div style={{ marginBottom: '2rem' }}>
            <p style={{ color: '#666', fontSize: '0.95rem' }}>
              {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('cs-CZ') : ''}
              {post.author ? ` · ${post.author}` : ''}
            </p>
            <h1>{post.title}</h1>
            {post.perex && <p style={{ fontSize: '1.2rem' }}>{post.perex}</p>}
          </div>

          {post.coverImage && (
            <img
              src={post.coverImage}
              alt={post.title}
              style={{
                width: '100%',
                borderRadius: '16px',
                marginBottom: '2rem',
                objectFit: 'cover',
              }}
            />
          )}

          <article className="blog-content" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </section>
      <Footer />
    </>
  )
}
