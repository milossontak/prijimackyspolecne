import { NextRequest } from 'next/server'
import { listPosts, readPost, savePost } from '@/app/lib/blog'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const includeDrafts = searchParams.get('includeDrafts') === 'true'
    const posts = listPosts(includeDrafts)

    return new Response(
      JSON.stringify({ success: true, data: posts }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: 'Failed to load blog posts' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const post = body?.post

    if (!post?.title || !post?.slug) {
      return new Response(
        JSON.stringify({ success: false, error: 'Title and slug are required' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      )
    }

    const existing = readPost(post.slug)
    if (existing) {
      return new Response(
        JSON.stringify({ success: false, error: 'Slug already exists' }),
        {
          status: 409,
          headers: { 'Content-Type': 'application/json' },
        }
      )
    }

    savePost(post)
    const saved = readPost(post.slug)

    return new Response(
      JSON.stringify({ success: true, data: saved }),
      {
        status: 201,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: 'Failed to save blog post' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  }
}
