import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  

  // Only redirect /admin to /admin/login, allow other admin pages
  if (pathname === '/admin' || pathname === '/admin/') {
    // Check if user is authenticated
    const auth = request.cookies.get('admin_auth')
    if (!auth || auth.value !== 'true') {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
    // If authenticated, let them access admin dashboard
    return NextResponse.next()
  }

  // Skip authentication for login page
  if (pathname.includes('/admin/login')) {
    return NextResponse.next()
  }

  // For other admin pages, check authentication
  if (pathname.startsWith('/admin') && !pathname.includes('/api')) {
    const auth = request.cookies.get('admin_auth')
    if (!auth || auth.value !== 'true') {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/admin']
}