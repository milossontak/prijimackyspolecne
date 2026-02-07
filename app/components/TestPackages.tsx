interface TestPackage {
  name: string
  tests: number
  price: number
  originalPrice?: number
  features: string[]
  popular?: boolean
}

interface TestPackagesProps {
  packages: TestPackage[]
}

export default function TestPackages({ packages }: TestPackagesProps) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: 'var(--spacing-xl)',
    }}>
      {packages.map((pkg, index) => (
        <div
          key={index}
          className="card"
          style={{
            position: 'relative',
            border: pkg.popular ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
          }}
        >
          {pkg.popular && (
            <div style={{
              position: 'absolute',
              top: '-12px',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: 'var(--color-primary)',
              color: 'white',
              padding: '0.25rem 1rem',
              borderRadius: '20px',
              fontSize: '0.875rem',
              fontWeight: 600,
            }}>
              Nejpopulárnější
            </div>
          )}
          <h3 style={{ textAlign: 'center', marginBottom: 'var(--spacing-md)' }}>
            {pkg.name}
          </h3>
          <div style={{
            textAlign: 'center',
            marginBottom: 'var(--spacing-md)',
          }}>
            {pkg.originalPrice && (
              <div style={{
                fontSize: '1rem',
                color: 'var(--color-text-gray)',
                textDecoration: 'line-through',
                marginBottom: '0.25rem',
              }}>
                {pkg.originalPrice.toLocaleString('cs-CZ')} Kč
              </div>
            )}
            <div style={{
              fontSize: '2rem',
              fontWeight: 700,
              color: 'var(--color-primary)',
            }}>
              {pkg.price.toLocaleString('cs-CZ')} Kč
            </div>
            {pkg.originalPrice && (
              <div style={{
                fontSize: '0.875rem',
                color: 'var(--color-secondary)',
                marginTop: '0.25rem',
              }}>
                Ušetříte {(pkg.originalPrice - pkg.price).toLocaleString('cs-CZ')} Kč
              </div>
            )}
          </div>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            marginBottom: 'var(--spacing-lg)',
          }}>
            {pkg.features.map((feature, i) => (
              <li key={i} style={{
                marginBottom: 'var(--spacing-xs)',
                paddingLeft: '1.75rem',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
              }}>
                <span style={{
                  position: 'absolute',
                  left: 0,
                  color: 'var(--color-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                }}>
                  ✓
                </span>
                {feature}
              </li>
            ))}
          </ul>
          <button className="btn btn-primary" style={{ width: '100%' }}>
            Koupit
          </button>
        </div>
      ))}
    </div>
  )
}