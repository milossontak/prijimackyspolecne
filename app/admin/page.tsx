'use client'

import { useState, useEffect } from 'react'
import { SiteContent } from '@/app/types'

export default function ContentEditor() {
  const [content, setContent] = useState<SiteContent | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')
  const [activeSection, setActiveSection] = useState('metadata')
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({})

  // Načtení obsahu
  useEffect(() => {
    loadContent()
  }, [])

  useEffect(() => {
    setExpandedItems((prev) => ({ ...prev, [activeSection]: true }))
  }, [activeSection])

  const loadContent = async () => {
    try {
      const response = await fetch('/api/content')
      const result = await response.json()
      if (result.success) {
        setContent(result.data)
      } else {
        setMessage('Chyba při načítání obsahu')
      }
    } catch (error) {
      setMessage('Chyba při komunikaci se serverem')
    } finally {
      setLoading(false)
    }
  }

  // Uložení změny
  const saveValue = async (path: string, value: any) => {
    setSaving(true)
    try {
      const response = await fetch('/api/content', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ path, value }),
      })
      
      const result = await response.json()
      if (result.success) {
        setMessage('Změna uložena!')
        setContent(result.data)
      } else {
        setMessage('Chyba při ukládání')
      }
    } catch (error) {
      setMessage('Chyba při komunikaci se serverem')
    } finally {
      setSaving(false)
      setTimeout(() => setMessage(''), 3000)
    }
  }

  // Vytvoření backupu
  const createBackup = async () => {
    try {
      const response = await fetch('/api/backup', { method: 'POST' })
      const result = await response.json()
      if (result.success) {
        setMessage('Záloha vytvořena!')
      }
    } catch (error) {
      setMessage('Chyba při vytváření zálohy')
    }
    setTimeout(() => setMessage(''), 3000)
  }

  // Renderování editačního pole
  const renderField = (value: any, path: string, label: string) => {
    if (typeof value === 'string') {
      if (value.length > 100) {
        return (
          <div key={path} style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem', color: '#333' }}>
              {label}
            </label>
            <textarea
              value={value}
              onChange={(e) => saveValue(path, e.target.value)}
              style={{
                width: '100%',
                minHeight: '100px',
                padding: '0.5rem',
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontSize: '14px',
                backgroundColor: '#fff',
                color: '#333'
              }}
            />
          </div>
        )
      }
      
      return (
        <div key={path} style={{ marginBottom: '1rem' }}>
<label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem', color: '#333' }}>
              {label}
            </label>
            <input
              type="text"
              value={value}
              onChange={(e) => saveValue(path, e.target.value)}
              style={{
                width: '100%',
                padding: '0.5rem',
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontSize: '14px',
                backgroundColor: '#fff',
                color: '#333'
              }}
            />
        </div>
      )
    }
    
    if (Array.isArray(value)) {
      return (
        <div key={path} style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem', color: '#333' }}>
            {label}
          </label>
          <div style={{ marginLeft: '1rem' }}>
            {value.map((item, index) => {
              if (typeof item === 'object' && item !== null) {
                return (
                  <div key={index} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '0.5rem', backgroundColor: '#fff' }}>
                    {Object.entries(item).map(([key, val]) => 
                      renderField(val, `${path}[${index}].${key}`, key)
                    )}
                  </div>
                )
              }
              return renderField(item, `${path}[${index}]`, `Item ${index + 1}`)
            })}
          </div>
        </div>
      )
    }
    
    if (typeof value === 'object' && value !== null) {
      return (
        <div key={path} style={{ marginBottom: '1rem' }}>
          <button
            onClick={() => setExpandedItems(prev => ({ ...prev, [path]: !prev[path] }))}
            style={{
              background: '#fff',
              border: '1px solid #ccc',
              padding: '0.5rem',
              cursor: 'pointer',
              width: '100%',
              textAlign: 'left',
              fontWeight: 'bold',
              color: '#333'
            }}
          >
            {expandedItems[path] ? '▼' : '▶'} {label}
          </button>
          {expandedItems[path] && (
            <div style={{ marginLeft: '1rem', marginTop: '0.5rem' }}>
              {Object.entries(value).map(([key, val]) => 
                renderField(val, `${path}.${key}`, key)
              )}
            </div>
          )}
        </div>
      )
    }
    
    return null
  }

  if (loading) {
    return <div style={{ padding: '2rem', color: '#333' }}>Načítám obsah...</div>
  }

  if (!content) {
    return <div style={{ padding: '2rem', color: '#333' }}>Chyba při načítání obsahu</div>
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <header style={{ 
        backgroundColor: '#918e8e', 
        color: 'white', 
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h1>Administrace obsahu</h1>
        <div>
          <button 
            onClick={createBackup}
            style={{
              backgroundColor: '#007ACC',
              color: 'white',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              marginRight: '1rem'
            }}
          >
            Vytvořit zálohu
          </button>
          {saving && <span>Ukládám...</span>}
          {message && <span style={{ marginLeft: '1rem' }}>{message}</span>}
        </div>
      </header>

      <div style={{ display: 'flex' }}>
        <aside style={{ 
          width: '250px', 
          backgroundColor: '#fff',
          borderRight: '1px solid #ccc',
          padding: '1rem',
          height: 'calc(100vh - 60px)',
          overflowY: 'auto'
        }}>
          <h3 style={{ color: '#333', marginBottom: '1rem' }}>Sekce:</h3>
          {Object.keys(content).map(key => (
            <button
              key={key}
              onClick={() => setActiveSection(key)}
              style={{
                display: 'block',
                width: '100%',
                padding: '0.5rem',
                marginBottom: '0.5rem',
                backgroundColor: activeSection === key ? '#007ACC' : '#fff',
                color: activeSection === key ? 'white' : '#333',
                border: '1px solid #ccc',
                textAlign: 'left'
              }}
            >
              {key}
            </button>
          ))}
        </aside>

        <main style={{ flex: 1, padding: '2rem' }}>
          <h2 style={{ color: '#333', marginBottom: '1.5rem' }}>{activeSection}</h2>
          {renderField(content[activeSection as keyof SiteContent], activeSection, activeSection)}
        </main>
      </div>
    </div>
  )
}
