'use client'

import { useState, useEffect } from 'react'
import { SiteContent } from '../types'

export function useContent() {
  const [content, setContent] = useState<SiteContent | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadContent() {
      try {
        const response = await fetch('/api/content')
        const result = await response.json()
        
        if (result.success) {
          setContent(result.data)
        } else {
          setError('Failed to load content')
        }
      } catch (err) {
        setError('Error loading content')
      } finally {
        setLoading(false)
      }
    }

    loadContent()
    // Refresh každých 30 sekund
    const interval = setInterval(loadContent, 30000)
    return () => clearInterval(interval)
  }, [])

  return { content, loading, error }
}