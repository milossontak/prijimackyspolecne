import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://prijimacky-spolecne.cz'

  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/ukazkovy-test`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sluzby`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sluzby/online-testy`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sluzby/osobni-testy`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sluzby/balicek-5-testu`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sluzby/komplexni-balicek`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
  ]

  return routes
}
