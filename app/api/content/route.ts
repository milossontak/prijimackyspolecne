import { NextRequest, NextResponse } from 'next/server'

// Static fallback data pro případ problému s načítáním
const staticContent: any = {
  metadata: {
    title: 'Přijímačky Společně',
    description: 'Pomáháme dětem zvládnout přijímací zkoušky'
  },
  faq: {
    title: 'Často kladené otázky',
    items: [
      {
        question: 'Jak fungují testy?',
        answer: 'Testy fungují na základě reálných zadání.'
      }
    ]
  }
}

const contentCache: { data: any; expiresAt: number } = { data: null, expiresAt: 0 }
const CACHE_TTL_MS = 10 * 1000

export async function GET() {
  try {
    const now = Date.now()
    if (contentCache.data && contentCache.expiresAt > now) {
      return new Response(JSON.stringify({
        success: true,
        data: contentCache.data
      }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }

    // Zkusíme načíst z JSON souboru
    const fs = require('fs')
    const path = require('path')
    const contentFile = path.join(process.cwd(), 'data', 'content.json')
    
    if (fs.existsSync(contentFile)) {
      const data = fs.readFileSync(contentFile, 'utf8')
      const jsonData = JSON.parse(data)

      contentCache.data = jsonData
      contentCache.expiresAt = Date.now() + CACHE_TTL_MS
      
      // Vracíme string, aby se vyhnulo problému s Next.js
      return new Response(JSON.stringify({ 
        success: true, 
        data: jsonData 
      }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }
    
    // Fallback na statická data
    contentCache.data = staticContent
    contentCache.expiresAt = Date.now() + CACHE_TTL_MS
    return new Response(JSON.stringify({ 
      success: true, 
      data: staticContent 
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } catch (error) {
    console.error('Content API error:', error)
    contentCache.data = staticContent
    contentCache.expiresAt = Date.now() + CACHE_TTL_MS
    return new Response(JSON.stringify({ 
      success: false, 
      error: 'Failed to load content',
      data: staticContent // Fallback
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}

// Zajištění podpory i pro PUT metodu
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { path, value } = body
    
    if (!path || value === undefined) {
      return new Response(JSON.stringify({
        success: false, 
        error: 'Path and value are required'
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }
    
    const fs = require('fs')
    const path_mod = require('path')
    const contentFile = path_mod.join(process.cwd(), 'data', 'content.json')
    
    // Záloha před změnou
    if (fs.existsSync(contentFile)) {
      const backupFile = path_mod.join(process.cwd(), 'data', 'content.backup.json')
      fs.copyFileSync(contentFile, backupFile)
    }
    
    // Čtení obsahu
    let content = staticContent
    if (fs.existsSync(contentFile)) {
      const data = fs.readFileSync(contentFile, 'utf8')
      content = JSON.parse(data)
    }
    
    // Navigace přes objekt pomocí path
    const pathParts = path.split('.')
    let current = content
    
    for (let i = 0; i < pathParts.length - 1; i++) {
      if (!current[pathParts[i]]) {
        current[pathParts[i]] = {}
      }
      current = current[pathParts[i]]
    }
    
    // Aktualizace hodnoty
    current[pathParts[pathParts.length - 1]] = value
    
    // Zápis do souboru
    fs.writeFileSync(contentFile, JSON.stringify(content, null, 2), 'utf8')

    contentCache.data = content
    contentCache.expiresAt = Date.now() + CACHE_TTL_MS
    
    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Content updated successfully',
      data: content
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } catch (error) {
    console.error('Content PUT error:', error)
    return new Response(JSON.stringify({
      success: false, 
      error: 'Failed to save content'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}
