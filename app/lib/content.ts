import fs from 'fs'
import path from 'path'
import { siteContent as fallbackContent } from '@/app/content/site'
import type { SiteContent } from '@/app/types'

export function loadSiteContent(): SiteContent {
  try {
    const contentPath = path.join(process.cwd(), 'data', 'content.json')
    if (!fs.existsSync(contentPath)) {
      return fallbackContent as SiteContent
    }

    const raw = fs.readFileSync(contentPath, 'utf8')
    return JSON.parse(raw) as SiteContent
  } catch {
    return fallbackContent as SiteContent
  }
}
