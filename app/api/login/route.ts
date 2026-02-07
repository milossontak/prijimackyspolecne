import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  return new Response('Auth login API endpoint', {
    status: 200
  })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { password } = body
    
    const ADMIN_PASSWORD = 'admin123' // V produkci by mělo být v env
    
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