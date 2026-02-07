import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const BACKUP_DIR = path.join(process.cwd(), 'data', 'backups')

// GET - obnovení ze zálohy
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const filename = searchParams.get('filename')
    
    if (!filename) {
      return NextResponse.json(
        { success: false, error: 'Filename is required' },
        { status: 400 }
      )
    }
    
    const backupFile = path.join(BACKUP_DIR, filename)
    const contentFile = path.join(process.cwd(), 'data', 'content.json')
    
    if (!fs.existsSync(backupFile)) {
      return NextResponse.json(
        { success: false, error: 'Backup file not found' },
        { status: 404 }
      )
    }
    
    // Kopírování backupu do hlavního souboru
    fs.copyFileSync(backupFile, contentFile)
    
    const backupContent = fs.readFileSync(backupFile, 'utf8')
    const parsedContent = JSON.parse(backupContent)
    
    return NextResponse.json({ 
      success: true, 
      message: 'Backup restored successfully',
      data: parsedContent
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to restore backup' },
      { status: 500 }
    )
  }
}