/** @type {import('next').NextConfig} */
// Výchozí basePath pro nasazení do /prijimacky-spolecne/. Pro root (prijimackyspolecne.cz) nastavte NEXT_PUBLIC_BASE_PATH=
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH !== undefined
  ? process.env.NEXT_PUBLIC_BASE_PATH
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

