import type { Metadata } from 'next'
import { loadSiteContent } from '@/app/lib/content'

export async function generateMetadata(): Promise<Metadata> {
  const seo = loadSiteContent().seo?.pages?.contact
  return {
    title: seo?.title || 'Kontakt',
    description:
      seo?.description ||
      'Kontaktujte nás a vybereme nejlepší přípravu na přijímací zkoušky pro vaše dítě. Odpovídáme každý pracovní den.',
    alternates: {
      canonical: seo?.canonical || '/kontakt',
    },
  }
}

export default function KontaktLayout({ children }: { children: React.ReactNode }) {
  return children
}
