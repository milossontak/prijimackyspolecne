interface TestFeature {
  title: string
  description: string
}

interface TestFeaturesProps {
  features: TestFeature[]
}

export default function TestFeatures({ features }: TestFeaturesProps) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: 'var(--spacing-lg)',
    }}>
      {features.map((feature, index) => (
        <div key={index} style={{
          display: 'flex',
          gap: 'var(--spacing-md)',
          alignItems: 'flex-start',
        }}>
          <div style={{
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-secondary)',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            marginTop: '0.25rem',
          }}>
            ✓
          </div>
          <div>
            <h3 style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-xs)' }}>
              {feature.title}
            </h3>
            <p style={{ fontSize: '0.95rem', margin: 0 }}>
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}