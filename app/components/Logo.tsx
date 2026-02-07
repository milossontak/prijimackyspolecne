import Image from 'next/image'
import Link from 'next/link'

/** Poměr stran loga (šířka / výška) – logo je horizontální */
const LOGO_ASPECT_RATIO = 4.5

interface LogoProps {
  /** Výška loga v pixelech */
  size?: number
  /** Zobrazit jako odkaz na úvodní stránku */
  asLink?: boolean
  className?: string
}

export default function Logo({ size = 40, asLink = true, className }: LogoProps) {
  const height = size
  const width = Math.round(size * LOGO_ASPECT_RATIO)

  const content = (
    <span
      style={{
        display: 'inline-block',
        lineHeight: 0,
        height: `${height}px`,
        width: `${width}px`,
      }}
    >
      <Image
        src="/logo.webp"
        alt="Přijímačky Společně"
        width={width}
        height={height}
        unoptimized
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
        }}
        priority
      />
    </span>
  )

  if (asLink) {
    return (
      <Link
        href="/"
        style={{
          display: 'inline-block',
          textDecoration: 'none',
          lineHeight: 0,
          outline: 'none',
          border: 'none',
        }}
        className={className}
      >
        {content}
      </Link>
    )
  }

  return <span className={className}>{content}</span>
}
