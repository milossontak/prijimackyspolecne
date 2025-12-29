interface LogoProps {
  size?: number
  showText?: boolean
  className?: string
  textColor?: string
}

export default function Logo({ size = 40, showText = true, className, textColor }: LogoProps) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
    }} className={className}>
      {/* Logo ikona - stylizované P */}
      <div style={{
        width: size,
        height: size,
        borderRadius: '12px',
        background: 'linear-gradient(135deg, #4A90E2 0%, #52C9A2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 700,
        fontSize: size * 0.5,
        flexShrink: 0,
        boxShadow: '0 4px 8px rgba(74, 144, 226, 0.2)',
      }}>
        P
      </div>
      {showText && (
        <span style={{
          fontSize: size * 0.6,
          fontWeight: 700,
          color: textColor || 'var(--color-primary)',
          whiteSpace: 'nowrap',
        }}>
          Přijímačky Společně
        </span>
      )}
    </div>
  )
}

