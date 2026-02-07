import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const auth = request.cookies.get('admin_auth')
  const timestamp = request.cookies.get('admin_timestamp')
  
  // Pokud není přihlášen nebo je session starší než 24 hodin
  if (!auth?.value || auth.value !== 'true' || !timestamp?.value || 
      Date.now() - parseInt(timestamp.value) > 24 * 60 * 60 * 1000) {
    return NextResponse.json(
      { authenticated: false },
      { status: 401 }
    )
  }
  
  return NextResponse.json({ authenticated: true })
}