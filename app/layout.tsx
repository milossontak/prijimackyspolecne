import type { Metadata } from 'next'
import './globals.css'
import { siteContent } from './content/site'

export const metadata: Metadata = {
  title: siteContent.metadata.title,
  description: siteContent.metadata.description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  )
}

