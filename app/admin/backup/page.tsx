'use client'

import { useState, useEffect } from 'react'

interface Backup {
  filename: string
  date: string
  size: number
}

export default function BackupManager() {
  const [backups, setBackups] = useState<Backup[]>([])
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState('')

  useEffect(() => {
    loadBackups()
  }, [])

  const loadBackups = async () => {
    try {
      const response = await fetch('/api/backup')
      const result = await response.json()
      if (result.success) {
        setBackups(result.backups)
      }
    } catch (error) {
      setMessage('Chyba při načítání záloh')
    } finally {
      setLoading(false)
    }
  }

  const restoreBackup = async (filename: string) => {
    if (!confirm('Opravdu chcete obnovit tuto zálohu? Aktuální obsah bude přepsán.')) {
      return
    }

    try {
      const response = await fetch(`/api/restore?filename=${filename}`)
      const result = await response.json()
      if (result.success) {
        setMessage('Záloha úspěšně obnovena!')
      } else {
        setMessage('Chyba při obnově zálohy')
      }
    } catch (error) {
      setMessage('Chyba při komunikaci se serverem')
    }
    setTimeout(() => setMessage(''), 3000)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('cs-CZ')
  }

  const formatSize = (bytes: number) => {
    return (bytes / 1024).toFixed(1) + ' KB'
  }

  if (loading) {
    return <div style={{ padding: '2rem' }}>Načítám zálohy...</div>
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <header style={{ 
        backgroundColor: '#333', 
        color: 'white', 
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div>
          <h1>Správa záloh</h1>
          <a href="/admin" style={{ color: '#ccc', textDecoration: 'none' }}>
            ← Zpět na editaci
          </a>
        </div>
        {message && <span style={{ backgroundColor: '#4CAF50', padding: '0.5rem', borderRadius: '4px' }}>
          {message}
        </span>}
      </header>

      <main style={{ padding: '2rem' }}>
        {backups.length === 0 ? (
          <div>
            <h2>Žádné zálohy</h2>
            <p>Zatím nebyly vytvořeny žádné zálohy obsahu.</p>
          </div>
        ) : (
          <div>
            <h2>Dostupné zálohy</h2>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {backups.map((backup) => (
                <div key={backup.filename} style={{
                  backgroundColor: 'white',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  padding: '1rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div>
                    <h4>{backup.filename}</h4>
                    <p style={{ margin: '0.25rem 0', color: '#666' }}>
                      Datum: {formatDate(backup.date)}
                    </p>
                    <p style={{ margin: '0.25rem 0', color: '#666' }}>
                      Velikost: {formatSize(backup.size)}
                    </p>
                  </div>
                  <button
                    onClick={() => restoreBackup(backup.filename)}
                    style={{
                      backgroundColor: '#FF5722',
                      color: 'white',
                      border: 'none',
                      padding: '0.5rem 1rem',
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}
                  >
                    Obnovit
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}