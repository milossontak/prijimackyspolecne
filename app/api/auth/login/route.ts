import { NextRequest, NextResponse } from 'next/server'

const loginRateLimit = new Map<string, { count: number; resetAt: number }>()
const LOGIN_WINDOW_MS = 10 * 60 * 1000
const LOGIN_MAX_ATTEMPTS = 10

function getClientIp(request: NextRequest) {
  const forwardedFor = request.headers.get('x-forwarded-for')
  if (forwardedFor) {
    return forwardedFor.split(',')[0]?.trim() || 'unknown'
  }
  return request.headers.get('x-real-ip') || 'local'
}

function isRateLimited(ip: string) {
  const now = Date.now()
  const entry = loginRateLimit.get(ip)
  if (!entry || now > entry.resetAt) {
    loginRateLimit.set(ip, { count: 1, resetAt: now + LOGIN_WINDOW_MS })
    return false
  }
  entry.count += 1
  loginRateLimit.set(ip, entry)
  return entry.count > LOGIN_MAX_ATTEMPTS
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request)
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, error: 'Příliš mnoho pokusů. Zkuste to později.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    const { password } = body
    
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'fallback-password'
    
    if (password === ADMIN_PASSWORD) {
      const response = NextResponse.json({ success: true })
      
      // Nastavení cookies
      response.cookies.set('admin_auth', 'true', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 24 * 60 * 60, // 24 hodin
        path: '/'
      })
      
      response.cookies.set('admin_timestamp', Date.now().toString(), {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 24 * 60 * 60,
        path: '/'
      })
      
      return response
    } else {
      return NextResponse.json(
        { success: false, error: 'Nesprávné heslo' },
        { status: 401 }
      )
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Server error' },
      { status: 500 }
    )
  }
}
