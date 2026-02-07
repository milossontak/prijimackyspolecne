import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const CONTENT_FILE = path.join(process.cwd(), 'data', 'content.json')
const BACKUP_DIR = path.join(process.cwd(), 'data', 'backups')

// Zajištění existence backup složky
if (!fs.existsSync(BACKUP_DIR)) {
  fs.mkdirSync(BACKUP_DIR, { recursive: true })
}

// Funkce pro čtení obsahu
function readContent(): any {
  try {
    const data = fs.readFileSync(CONTENT_FILE, 'utf8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Error reading content:', error)
    return {}
  }
}

// GET - seznam backupů
export async function GET() {
  try {
    const backups = fs.readdirSync(BACKUP_DIR)
      .filter(file => file.startsWith('content-') && file.endsWith('.json'))
      .map(file => {
        const stats = fs.statSync(path.join(BACKUP_DIR, file))
        return {
          filename: file,
          date: stats.mtime.toISOString(),
          size: stats.size
        }
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    
    return NextResponse.json({ success: true, backups })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to load backups' },
      { status: 500 }
    )
  }
}

// POST - vytvoření backupu
export async function POST() {
  try {
    const content = readContent()
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
    const backupFile = path.join(BACKUP_DIR, `content-${timestamp}.json`)
    
    fs.writeFileSync(backupFile, JSON.stringify(content, null, 2), 'utf8')
    
    return NextResponse.json({ 
      success: true, 
      message: 'Backup created successfully',
      filename: `content-${timestamp}.json`
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to create backup' },
      { status: 500 }
    )
  }
}