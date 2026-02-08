import { NextRequest } from 'next/server'
import { deletePost, readPost, savePost } from '@/app/lib/blog'

export async function GET(_: NextRequest, context: { params: { slug: string } }) {
  try {
    const post = readPost(context.params.slug)
    if (!post) {
      return new Response(
        JSON.stringify({ success: false, error: 'Post not found' }),
        {
          status: 404,
          headers: { 'Content-Type': 'application/json' },
        }
      )
    }

    return new Response(JSON.stringify({ success: true, data: post }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: 'Failed to load blog post' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  }
}

export async function PUT(request: NextRequest, context: { params: { slug: string } }) {
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

    savePost(post, context.params.slug)
    const saved = readPost(post.slug)

    return new Response(
      JSON.stringify({ success: true, data: saved }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: 'Failed to update blog post' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  }
}

export async function DELETE(_: NextRequest, context: { params: { slug: string } }) {
  try {
    deletePost(context.params.slug)
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: 'Failed to delete blog post' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  }
}
