'use client'

import { useRouter } from 'next/navigation'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' })
      router.push('/admin/login')
    } catch (error) {
      console.error('Logout error:', error)
      router.push('/admin/login')
    }
  }

  return (
    <div>
      <nav style={{
        backgroundColor: '#333',
        color: 'white',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a href="/admin" style={{ color: 'white', textDecoration: 'none' }}>
            Editace obsahu
          </a>
          <a href="/admin/blog" style={{ color: 'white', textDecoration: 'none' }}>
            Blog
          </a>
          <a href="/admin/backup" style={{ color: 'white', textDecoration: 'none' }}>
            Zálohy
          </a>
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <a href="/" style={{ color: '#ccc', textDecoration: 'none' }}>
            Zpět na web
          </a>
          <button
            onClick={handleLogout}
            style={{
              backgroundColor: 'transparent',
              color: '#ccc',
              border: '1px solid #ccc',
              padding: '0.25rem 0.5rem',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            Odhlásit
          </button>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  )
}
