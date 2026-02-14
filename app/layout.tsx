import type { Metadata } from 'next'
import './globals.css'
import { loadSiteContent } from './lib/content'

export async function generateMetadata(): Promise<Metadata> {
  const content = loadSiteContent()
  const homeSeo = content.seo?.pages?.home
  const defaultTitle = homeSeo?.title || 'Přijímačky Společně | Přijímačky bez stresu'
  const defaultDescription = homeSeo?.description || content.metadata.description

  return {
    title: {
      default: defaultTitle,
      template: '%s | Přijímačky Společně'
    },
    description: defaultDescription,
    keywords: 'přijímací zkoušky, střední školy, gymnázia, příprava, testy nanečisto, 5. třída, 9. třída',
    authors: [{ name: 'Přijímačky Společně' }],
    creator: 'Přijímačky Společně',
    publisher: 'Přijímačky Společně',
    metadataBase: new URL('https://prijimacky-spolecne.cz'),
    alternates: {
      canonical: homeSeo?.canonical || '/',
    },
    openGraph: {
      title: defaultTitle,
      description: defaultDescription,
      url: 'https://www.prijimacky-spolecne.cz',
      siteName: 'Přijímačky Společně',
      images: [
        {
          url: '/og-image.svg',
          width: 1200,
          height: 630,
          alt: 'Přijímačky Společně - Online příprava na přijímací zkoušky'
        },
      ],
      locale: 'cs_CZ',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: defaultTitle,
      description: defaultDescription,
      images: ['/og-image.svg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'google-site-verification-code',
    },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Přijímačky Společně",
    "url": "https://prijimacky-spolecne.cz",
    "logo": "https://prijimacky-spolecne.cz/logo.webp",
    "description": "Pomáháme dětem zvládnout přijímací zkoušky na střední školy i gymnázia s klidem.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+420-737-827-230",
      "contactType": "customer service"
    },
    "offers": {
      "@type": "Offer",
      "name": "Online testy přípravy",
      "priceCurrency": "CZK",
      "price": "490",
      "availability": "https://schema.org/InStock"
    }
  }

  return (
    <html lang="cs" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Přejít k hlavnímu obsahu
        </a>
        {children}
      </body>
    </html>
  )
}
