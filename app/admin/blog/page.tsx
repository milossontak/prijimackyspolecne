'use client'

import { useEffect, useMemo, useState } from 'react'
import type { BlogPost, BlogPostMeta } from '@/app/types'

type BlogPostForm = {
  title: string
  slug: string
  perex: string
  content: string
  coverImage: string
  author: string
  category: string
  tags: string
  publishedAt: string
  status: 'draft' | 'published'
  seoTitle: string
  seoDescription: string
  seoKeywords: string
  seoImage: string
}

const emptyForm: BlogPostForm = {
  title: '',
  slug: '',
  perex: '',
  content: '',
  coverImage: '',
  author: '',
  category: '',
  tags: '',
  publishedAt: '',
  status: 'draft',
  seoTitle: '',
  seoDescription: '',
  seoKeywords: '',
  seoImage: '',
}

const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

const splitList = (value: string) =>
  value
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean)

export default function BlogAdminPage() {
  const [posts, setPosts] = useState<BlogPostMeta[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')
  const [activeSlug, setActiveSlug] = useState<string | null>(null)
  const [originalSlug, setOriginalSlug] = useState<string | null>(null)
  const [form, setForm] = useState<BlogPostForm>(emptyForm)

  const isNew = useMemo(() => !originalSlug, [originalSlug])

  const loadPosts = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/blog?includeDrafts=true')
      const result = await response.json()
      if (result.success) {
        setPosts(result.data || [])
      }
    } catch (error) {
      setMessage('Chyba při načítání článků')
    } finally {
      setLoading(false)
    }
  }

  const loadPost = async (slug: string) => {
    try {
      const response = await fetch(`/api/blog/${slug}`)
      const result = await response.json()
      if (result.success) {
        const post = result.data as BlogPost
        setForm({
          title: post.title || '',
          slug: post.slug || '',
          perex: post.perex || '',
          content: post.content || '',
          coverImage: post.coverImage || '',
          author: post.author || '',
          category: post.category || '',
          tags: (post.tags || []).join(', '),
          publishedAt: post.publishedAt || '',
          status: post.status || 'draft',
          seoTitle: post.seoTitle || '',
          seoDescription: post.seoDescription || '',
          seoKeywords: (post.seoKeywords || []).join(', '),
          seoImage: post.seoImage || '',
        })
        setOriginalSlug(post.slug)
        setActiveSlug(post.slug)
      }
    } catch (error) {
      setMessage('Chyba při načítání článku')
    }
  }

  const handleNew = () => {
    setForm(emptyForm)
    setActiveSlug(null)
    setOriginalSlug(null)
  }

  const handleSave = async () => {
    if (!form.title || !form.slug) {
      setMessage('Vyplňte titul a slug')
      return
    }

    setSaving(true)
    try {
      const payload = {
        post: {
          ...form,
          tags: splitList(form.tags),
          seoKeywords: splitList(form.seoKeywords),
        },
      }

      const response = await fetch(isNew ? '/api/blog' : `/api/blog/${originalSlug}`, {
        method: isNew ? 'POST' : 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const result = await response.json()
      if (result.success) {
        setMessage('Článek uložen')
        const saved = result.data as BlogPost
        setOriginalSlug(saved.slug)
        setActiveSlug(saved.slug)
        await loadPosts()
      } else {
        setMessage(result.error || 'Chyba při ukládání')
      }
    } catch (error) {
      setMessage('Chyba při ukládání')
    } finally {
      setSaving(false)
      setTimeout(() => setMessage(''), 3000)
    }
  }

  const handleDelete = async () => {
    if (!originalSlug) return
    if (!confirm('Opravdu smazat článek?')) return

    try {
      const response = await fetch(`/api/blog/${originalSlug}`, { method: 'DELETE' })
      const result = await response.json()
      if (result.success) {
        setMessage('Článek smazán')
        handleNew()
        await loadPosts()
      } else {
        setMessage(result.error || 'Chyba při mazání')
      }
    } catch (error) {
      setMessage('Chyba při mazání')
    } finally {
      setTimeout(() => setMessage(''), 3000)
    }
  }

  useEffect(() => {
    loadPosts()
  }, [])

  if (loading) {
    return <div style={{ padding: '2rem', color: '#333' }}>Načítám články...</div>
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <header
        style={{
          backgroundColor: '#918e8e',
          color: 'white',
          padding: '1rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h1>Administrace blogu</h1>
        <div>
          <button
            onClick={handleNew}
            style={{
              backgroundColor: '#007ACC',
              color: 'white',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              marginRight: '1rem',
            }}
          >
            Nový článek
          </button>
          {saving && <span>Ukládám...</span>}
          {message && <span style={{ marginLeft: '1rem' }}>{message}</span>}
        </div>
      </header>

      <div style={{ display: 'flex' }}>
        <aside
          style={{
            width: '280px',
            backgroundColor: '#fff',
            borderRight: '1px solid #ccc',
            padding: '1rem',
            height: 'calc(100vh - 60px)',
            overflowY: 'auto',
          }}
        >
          <h3 style={{ color: '#333', marginBottom: '1rem' }}>Články</h3>
          {posts.length === 0 && (
            <p style={{ color: '#666', fontSize: '14px' }}>Zatím žádné články.</p>
          )}
          {posts.map((post) => (
            <button
              key={post.slug}
              onClick={() => loadPost(post.slug)}
              style={{
                display: 'block',
                width: '100%',
                padding: '0.5rem',
                marginBottom: '0.5rem',
                backgroundColor: activeSlug === post.slug ? '#007ACC' : '#fff',
                color: activeSlug === post.slug ? 'white' : '#333',
                border: '1px solid #ccc',
                textAlign: 'left',
              }}
            >
              <div style={{ fontWeight: 600 }}>{post.title || post.slug}</div>
              <div style={{ fontSize: '12px', opacity: 0.8 }}>{post.status || 'draft'}</div>
            </button>
          ))}
        </aside>

        <main style={{ flex: 1, padding: '2rem' }}>
          <div style={{ display: 'grid', gap: '1rem', maxWidth: '900px' }}>
            <label>
              Titul
              <input
                type="text"
                value={form.title}
                onChange={(event) => setForm({ ...form, title: event.target.value })}
                style={{ width: '100%', marginTop: '0.25rem' }}
              />
            </label>

            <label>
              Slug
              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.25rem' }}>
                <input
                  type="text"
                  value={form.slug}
                  onChange={(event) => setForm({ ...form, slug: event.target.value })}
                  style={{ flex: 1 }}
                />
                <button
                  type="button"
                  onClick={() => setForm({ ...form, slug: slugify(form.title) })}
                  style={{
                    backgroundColor: '#eee',
                    border: '1px solid #ccc',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '4px',
                  }}
                >
                  Vygenerovat
                </button>
              </div>
            </label>

            <label>
              Perex
              <textarea
                value={form.perex}
                onChange={(event) => setForm({ ...form, perex: event.target.value })}
                rows={3}
                style={{ width: '100%', marginTop: '0.25rem' }}
              />
            </label>

            <label>
              Obsah (Markdown)
              <textarea
                value={form.content}
                onChange={(event) => setForm({ ...form, content: event.target.value })}
                rows={12}
                style={{ width: '100%', marginTop: '0.25rem' }}
              />
            </label>

            <label>
              Obrázek (URL)
              <input
                type="text"
                value={form.coverImage}
                onChange={(event) => setForm({ ...form, coverImage: event.target.value })}
                style={{ width: '100%', marginTop: '0.25rem' }}
              />
            </label>

            <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
              <label>
                Autor
                <input
                  type="text"
                  value={form.author}
                  onChange={(event) => setForm({ ...form, author: event.target.value })}
                  style={{ width: '100%', marginTop: '0.25rem' }}
                />
              </label>
              <label>
                Kategorie
                <input
                  type="text"
                  value={form.category}
                  onChange={(event) => setForm({ ...form, category: event.target.value })}
                  style={{ width: '100%', marginTop: '0.25rem' }}
                />
              </label>
              <label>
                Tagy (oddělené čárkou)
                <input
                  type="text"
                  value={form.tags}
                  onChange={(event) => setForm({ ...form, tags: event.target.value })}
                  style={{ width: '100%', marginTop: '0.25rem' }}
                />
              </label>
            </div>

            <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
              <label>
                Publikováno
                <input
                  type="date"
                  value={form.publishedAt ? form.publishedAt.slice(0, 10) : ''}
                  onChange={(event) => setForm({ ...form, publishedAt: event.target.value })}
                  style={{ width: '100%', marginTop: '0.25rem' }}
                />
              </label>
              <label>
                Stav
                <select
                  value={form.status}
                  onChange={(event) => setForm({ ...form, status: event.target.value as 'draft' | 'published' })}
                  style={{ width: '100%', marginTop: '0.25rem' }}
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </label>
            </div>

            <div style={{ borderTop: '1px solid #ddd', paddingTop: '1rem' }}>
              <h3 style={{ marginBottom: '0.5rem' }}>SEO</h3>
              <label>
                SEO Title
                <input
                  type="text"
                  value={form.seoTitle}
                  onChange={(event) => setForm({ ...form, seoTitle: event.target.value })}
                  style={{ width: '100%', marginTop: '0.25rem' }}
                />
              </label>
              <label>
                SEO Description
                <textarea
                  value={form.seoDescription}
                  onChange={(event) => setForm({ ...form, seoDescription: event.target.value })}
                  rows={2}
                  style={{ width: '100%', marginTop: '0.25rem' }}
                />
              </label>
              <label>
                SEO Keywords (oddělené čárkou)
                <input
                  type="text"
                  value={form.seoKeywords}
                  onChange={(event) => setForm({ ...form, seoKeywords: event.target.value })}
                  style={{ width: '100%', marginTop: '0.25rem' }}
                />
              </label>
              <label>
                SEO Image (URL)
                <input
                  type="text"
                  value={form.seoImage}
                  onChange={(event) => setForm({ ...form, seoImage: event.target.value })}
                  style={{ width: '100%', marginTop: '0.25rem' }}
                />
              </label>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <button
                onClick={handleSave}
                style={{
                  backgroundColor: '#007ACC',
                  color: 'white',
                  border: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '4px',
                }}
              >
                Uložit
              </button>
              {!isNew && (
                <button
                  onClick={handleDelete}
                  style={{
                    backgroundColor: '#f44336',
                    color: 'white',
                    border: 'none',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '4px',
                  }}
                >
                  Smazat
                </button>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
