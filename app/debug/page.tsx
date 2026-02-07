'use client'

import { useEffect, useState } from 'react'

export default function DebugPage() {
  const [cookies, setCookies] = useState('')
  const [authStatus, setAuthStatus] = useState('')

  // Zkontroluje auth status
  const checkAuthStatus = async () => {
    try {
      const response = await fetch('/api/auth/check')
      setAuthStatus(`${response.status}: ${await response.text()}`)
    } catch (error: any) {
      setAuthStatus(`Error: ${(error as Error).message}`)
    }
  }

  useEffect(() => {
    // Zobrazí všechny cookies
    const allCookies = document.cookie.split(';').map(c => c.trim()).join('\n')
    setCookies(allCookies)

    checkAuthStatus()
    const interval = setInterval(checkAuthStatus, 60000) // Kontrola každých minutu
    
    return () => clearInterval(interval)
  }, [])

  const testLogin = async () => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: 'admin123' }),
      })
      const result = await response.json()
      alert(`Login result: ${JSON.stringify(result)}`)
      
      // Znovu zkontrolujeme cookies
      setTimeout(() => {
        const newCookies = document.cookie.split(';').map(c => c.trim()).join('\n')
        setCookies(newCookies)
        checkAuthStatus()
      }, 500)
    } catch (error: any) {
      alert(`Login error: ${(error as Error).message}`)
    }
  }

  const clearCookies = () => {
    document.cookie = 'admin_auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
    document.cookie = 'admin_timestamp=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
    setCookies('')
    setAuthStatus('')
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'monospace' }}>
      <h1>Debug Stránka</h1>
      
      <div style={{ marginBottom: '2rem' }}>
        <h2>Cookies:</h2>
        <pre style={{ backgroundColor: '#f0f0f0', padding: '1rem' }}>{cookies}</pre>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2>Auth Status:</h2>
        <pre style={{ backgroundColor: '#f0f0f0', padding: '1rem' }}>{authStatus}</pre>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <button onClick={testLogin} style={{ 
          padding: '1rem', 
          backgroundColor: '#007ACC', 
          color: 'white', 
          border: 'none', 
          borderRadius: '4px',
          marginRight: '1rem'
        }}>
          Test Login
        </button>
        
        <button onClick={clearCookies} style={{ 
          padding: '1rem', 
          backgroundColor: '#dc3545', 
          color: 'white', 
          border: 'none', 
          borderRadius: '4px'
        }}>
          Clear Cookies
        </button>
      </div>

      <div>
        <a href="/admin/login" style={{ color: '#007ACC' }}>
          → Login Page
        </a>
      </div>
    </div>
  )
}