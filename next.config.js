/** @type {import('next').NextConfig} */
// Výchozí basePath je root. Pro subpath nastavte NEXT_PUBLIC_BASE_PATH.
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || '').replace(/\/$/, '')

const isProduction = process.env.NODE_ENV === 'production'
const enableExport = process.env.ENABLE_STATIC_EXPORT === 'true'

const nextConfig = {
  reactStrictMode: true,
  // Only use export mode when explicitly enabled
  ...(enableExport && { output: 'export' }),
  ...(basePath && { basePath, assetPrefix: basePath }),
  images: {
    unoptimized: true,
    ...(isProduction && !enableExport && {
      formats: ['image/webp', 'image/avif'],
      deviceSizes: [640, 750, 828, 1080, 1200, 1920],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    }),
  },
  trailingSlash: false,
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  // Only add headers in production and not in export mode
  ...(isProduction && !enableExport && {
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'X-Frame-Options',
              value: 'DENY',
            },
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff',
            },
            {
              key: 'Referrer-Policy',
              value: 'strict-origin-when-cross-origin',
            },
            {
              key: 'Permissions-Policy',
              value: 'camera=(), microphone=(), geolocation=()',
            },
          ],
        },
      ]
    }
  }),
  poweredByHeader: false,
  compress: true,
}

module.exports = nextConfig
