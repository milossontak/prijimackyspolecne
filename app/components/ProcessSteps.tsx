interface ProcessStep {
  step: string
  title: string
  description: string
}

interface ProcessStepsProps {
  steps: ProcessStep[]
}

export default function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-lg)',
    }}>
      {steps.map((step, index) => (
        <div key={index} className="card" style={{
          display: 'flex',
          gap: 'var(--spacing-lg)',
          alignItems: 'flex-start',
        }}>
          <div style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-primary)',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem',
            fontWeight: 700,
            flexShrink: 0,
          }}>
            {step.step}
          </div>
          <div>
            <h3 style={{ marginBottom: 'var(--spacing-xs)' }}>{step.title}</h3>
            <p style={{ margin: 0 }}>{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}