import fs from 'fs'
import path from 'path'

export type BlogStatus = 'draft' | 'published'

export interface BlogPostMeta {
  title: string
  slug: string
  perex?: string
  coverImage?: string
  author?: string
  category?: string
  tags?: string[]
  publishedAt?: string
  status?: BlogStatus
  seoTitle?: string
  seoDescription?: string
  seoKeywords?: string[]
  seoImage?: string
  updatedAt?: string
}

export interface BlogPost extends BlogPostMeta {
  content: string
}

const BLOG_DIR = path.join(process.cwd(), 'data', 'blog')
const FRONTMATTER_REGEX = /^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/
const SLUG_SAFE = /^[a-z0-9-]+$/
const CACHE_TTL_MS = 5 * 1000

const postCache = new Map<string, { post: BlogPost; expiresAt: number }>()
const listCache = new Map<string, { data: BlogPostMeta[]; expiresAt: number }>()

function invalidateCache() {
  postCache.clear()
  listCache.clear()
}

export function ensureBlogDir() {
  if (!fs.existsSync(BLOG_DIR)) {
    fs.mkdirSync(BLOG_DIR, { recursive: true })
  }
}

export function normalizeSlug(input?: string) {
  return (input || '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function isValidSlug(slug: string) {
  return SLUG_SAFE.test(slug)
}

function parseFrontmatterValue(value: string): any {
  const trimmed = value.trim()
  if (!trimmed) return ''

  if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
    try {
      return JSON.parse(trimmed)
    } catch {
      return trimmed.slice(1, -1)
    }
  }

  if (trimmed.startsWith('[') || trimmed.startsWith('{')) {
    try {
      return JSON.parse(trimmed)
    } catch {
      return trimmed
    }
  }

  if (trimmed === 'true') return true
  if (trimmed === 'false') return false

  return trimmed
}

function parseFrontmatter(content: string): { meta: Record<string, any>; body: string } {
  const match = content.match(FRONTMATTER_REGEX)
  if (!match) {
    return { meta: {}, body: content }
  }

  const raw = match[1]
  const body = match[2] || ''
  const meta: Record<string, any> = {}

  raw
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .forEach((line) => {
      const separatorIndex = line.indexOf(':')
      if (separatorIndex === -1) return
      const key = line.slice(0, separatorIndex).trim()
      const value = line.slice(separatorIndex + 1).trim()
      meta[key] = parseFrontmatterValue(value)
    })

  return { meta, body }
}

function serializeFrontmatterValue(value: any) {
  if (Array.isArray(value) || typeof value === 'object') {
    return JSON.stringify(value)
  }
  if (typeof value === 'boolean') {
    return value ? 'true' : 'false'
  }
  return JSON.stringify(String(value))
}

function serializeFrontmatter(meta: Record<string, any>) {
  const orderedKeys = [
    'title',
    'slug',
    'perex',
    'coverImage',
    'author',
    'category',
    'tags',
    'publishedAt',
    'status',
    'seoTitle',
    'seoDescription',
    'seoKeywords',
    'seoImage',
  ]

  const lines: string[] = []
  orderedKeys.forEach((key) => {
    const value = meta[key]
    if (value === undefined || value === null || value === '') return
    lines.push(`${key}: ${serializeFrontmatterValue(value)}`)
  })

  return `---\n${lines.join('\n')}\n---\n\n`
}

function getPostPath(slug: string) {
  return path.join(BLOG_DIR, `${slug}.md`)
}

export function readPost(slug: string): BlogPost | null {
  ensureBlogDir()
  const normalized = normalizeSlug(slug)
  if (!isValidSlug(normalized)) return null

  const cached = postCache.get(normalized)
  if (cached && cached.expiresAt > Date.now()) {
    return cached.post
  }

  const postPath = getPostPath(normalized)
  if (!fs.existsSync(postPath)) return null

  const raw = fs.readFileSync(postPath, 'utf8')
  const { meta, body } = parseFrontmatter(raw)
  const stats = fs.statSync(postPath)

  const post: BlogPost = {
    title: meta.title || normalized,
    slug: meta.slug || normalized,
    perex: meta.perex || '',
    coverImage: meta.coverImage || '',
    author: meta.author || '',
    category: meta.category || '',
    tags: Array.isArray(meta.tags) ? meta.tags : [],
    publishedAt: meta.publishedAt || '',
    status: meta.status === 'published' ? 'published' : 'draft',
    seoTitle: meta.seoTitle || '',
    seoDescription: meta.seoDescription || '',
    seoKeywords: Array.isArray(meta.seoKeywords) ? meta.seoKeywords : [],
    seoImage: meta.seoImage || '',
    updatedAt: stats.mtime.toISOString(),
    content: body.trim(),
  }

  postCache.set(normalized, { post, expiresAt: Date.now() + CACHE_TTL_MS })
  return post
}

export function listPosts(includeDrafts = false): BlogPostMeta[] {
  ensureBlogDir()
  const cacheKey = includeDrafts ? 'all' : 'published'
  const cached = listCache.get(cacheKey)
  if (cached && cached.expiresAt > Date.now()) {
    return cached.data
  }

  const files = fs.readdirSync(BLOG_DIR).filter((file) => file.endsWith('.md'))

  const posts = files
    .map((file) => {
      const slug = file.replace(/\.md$/, '')
      return readPost(slug)
    })
    .filter((post): post is BlogPost => Boolean(post))
    .filter((post) => includeDrafts || post.status === 'published')
    .map(({ content, ...meta }) => meta)

  const sorted = posts.sort((a, b) => {
    const aDate = a.publishedAt ? Date.parse(a.publishedAt) : 0
    const bDate = b.publishedAt ? Date.parse(b.publishedAt) : 0
    return bDate - aDate
  })

  listCache.set(cacheKey, { data: sorted, expiresAt: Date.now() + CACHE_TTL_MS })
  return sorted
}

export function savePost(post: BlogPost, originalSlug?: string) {
  ensureBlogDir()
  const normalized = normalizeSlug(post.slug)
  if (!isValidSlug(normalized)) {
    throw new Error('Invalid slug')
  }

  const targetPath = getPostPath(normalized)
  if (originalSlug && normalizeSlug(originalSlug) !== normalized) {
    const previousPath = getPostPath(normalizeSlug(originalSlug))
    if (fs.existsSync(previousPath)) {
      fs.renameSync(previousPath, targetPath)
    }
  }

  const meta = {
    title: post.title,
    slug: normalized,
    perex: post.perex,
    coverImage: post.coverImage,
    author: post.author,
    category: post.category,
    tags: post.tags || [],
    publishedAt: post.publishedAt,
    status: post.status || 'draft',
    seoTitle: post.seoTitle,
    seoDescription: post.seoDescription,
    seoKeywords: post.seoKeywords || [],
    seoImage: post.seoImage,
  }

  const content = `${serializeFrontmatter(meta)}${post.content || ''}\n`
  fs.writeFileSync(targetPath, content, 'utf8')
  invalidateCache()
}

export function deletePost(slug: string) {
  ensureBlogDir()
  const normalized = normalizeSlug(slug)
  if (!isValidSlug(normalized)) {
    throw new Error('Invalid slug')
  }

  const postPath = getPostPath(normalized)
  if (fs.existsSync(postPath)) {
    fs.unlinkSync(postPath)
  }
  invalidateCache()
}
