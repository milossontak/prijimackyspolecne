import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Přijímačky Společně - Přijímačky bez stresu',
  description: 'Pomáháme dětem zvládnout přijímací zkoušky na střední školy i gymnázia z 5. třídy s klidem. Realistické testy nanečisto s okamžitou zpětnou vazbou a videem.',
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

