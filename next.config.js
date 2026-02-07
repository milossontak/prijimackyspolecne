/** @type {import('next').NextConfig} */
// Vývoj: basePath prázdný (localhost:3000). Produkce bez env: /prijimacky-spolecne. Pro root nastavte NEXT_PUBLIC_BASE_PATH=
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH !== undefined
  ? process.env.NEXT_PUBLIC_BASE_PATH
  : process.env.NODE_ENV === 'development'
    ? ''
    : '/prijimacky-spolecne'
).replace(/\/$/, '')

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  ...(basePath && { basePath, assetPrefix: basePath }),
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig

