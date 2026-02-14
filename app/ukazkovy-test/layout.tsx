import type { Metadata } from 'next'
import { loadSiteContent } from '@/app/lib/content'

export async function generateMetadata(): Promise<Metadata> {
  const seo = loadSiteContent().seo?.pages?.sampleTest
  return {
    title: seo?.title || 'Ukázkový test zdarma',
    description:
      seo?.description ||
      'Stáhněte si ukázkové testy z matematiky a češtiny zdarma. Získáte zadání i řešení pro rychlou orientaci v úrovni přípravy.',
    alternates: {
      canonical: seo?.canonical || '/ukazkovy-test',
    },
  }
}

export default function UkazkovyTestLayout({ children }: { children: React.ReactNode }) {
  return children
}
