import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Přesměrování /admin na /admin/login pro přehlednost
  if (pathname === '/admin') {
    return NextResponse.redirect(new URL('/admin/login', request.url))
  }

  // Kontrola přístupu do admin sekce (vyjma login a API)
  if (pathname.startsWith('/admin') && 
      pathname !== '/admin/login' && 
      !pathname.startsWith('/api/login') &&
      !pathname.startsWith('/api/logout')) {
    
    const auth = request.cookies.get('admin_auth')
    const timestamp = request.cookies.get('admin_timestamp')
    
    // Pokud není přihlášen nebo je session starší než 24 hodin
    if (!auth?.value || auth.value !== 'true' || !timestamp?.value || 
        Date.now() - parseInt(timestamp.value) > 24 * 60 * 60 * 1000) {
      const loginUrl = new URL('/admin/login', request.url)
      return NextResponse.redirect(loginUrl)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/admin/:path*'
}