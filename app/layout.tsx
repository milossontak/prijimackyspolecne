import type { Metadata } from 'next'
import './globals.css'
import { siteContent } from './content/site'

export const metadata: Metadata = {
  title: {
    default: 'Přijímačky Společně | Přijímačky bez stresu',
    template: '%s | Přijímačky Společně'
  },
  description: siteContent.metadata.description,
  keywords: 'přijímací zkoušky, střední školy, gymnázia, příprava, testy nanečisto, 5. třída, 9. třída',
  authors: [{ name: 'Přijímačky Společně' }],
  creator: 'Přijímačky Společně',
  publisher: 'Přijímačky Společně',
  metadataBase: new URL('https://prijimacky-spolecne.cz'),
  alternates: {
    canonical: 'https://prijimacky-spolecne.cz'
  },
  openGraph: {
    title: 'Přijímačky Společně | Přijímačky bez stresu',
    description: 'Pomáháme dětem zvládnout přijímací zkoušky na střední školy i gymnázia z 5. třídy s klidem.',
    url: 'https://prijimacky-spolecne.cz',
    siteName: 'Přijímačky Společně',
    images: [
      {
        url: '/og-image.jpg',
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
    title: 'Přijímačky Společně | Přijímačky bez stresu',
    description: 'Pomáháme dětem zvládnout přijímací zkoušky na střední školy i gymnázia.',
    images: ['/og-image.jpg'],
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
    "logo": "https://prijimacky-spolecne.cz/logo.png",
    "description": "Pomáháme dětem zvládnout přijímací zkoušky na střední školy i gymnázia s klidem.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+420-608-778-823",
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
    <html lang="cs">
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

