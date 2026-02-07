import { CalendarIcon } from './Icons'

export default function Timeline() {
  const milestones = [
    {
      date: 'Březen 2026',
      title: 'Registrace je možná',
      description: 'Od ledna můžete začít registrovat své dítě na přípravné testy. Zaregistrujte se včas a zajistěte místo pro vaše dítě.',
      icon: CalendarIcon,
      status: 'active'
    },
    {
      date: 'Říjen 2026',
      title: 'Ostrý start',
      description: 'Od října 2026 začínají pravidelné testy nanečisto. Vaše dítě bude mít možnost absolvovat testy podle zvoleného balíčku.',
      icon: CalendarIcon,
      status: 'upcoming'
    }
  ]

  return (
    <section className="section">
      <div className="container">
        <h2 className="text-center">Harmonogram</h2>
        <p style={{
          textAlign: 'center',
          fontSize: '1.125rem',
          color: 'var(--color-text-gray)',
          marginBottom: 'var(--spacing-2xl)',
          maxWidth: '600px',
          margin: '0 auto var(--spacing-2xl)',
        }}>
          Připravte se včas a zajistěte vašemu dítěti nejlepší přípravu na přijímací zkoušky.
        </p>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--spacing-xl)',
          maxWidth: '800px',
          margin: '0 auto',
          position: 'relative',
        }}>
          {/* Časová osa */}
          <div style={{
            position: 'absolute',
            left: '32px',
            top: '40px',
            bottom: '40px',
            width: '3px',
            background: 'linear-gradient(to bottom, var(--color-secondary), var(--color-primary))',
            zIndex: 0,
          }} />

          {milestones.map((milestone, index) => {
            const IconComponent = milestone.icon
            const isActive = milestone.status === 'active'

            return (
              <div key={index} style={{
                display: 'flex',
                gap: 'var(--spacing-lg)',
                alignItems: 'flex-start',
                position: 'relative',
                zIndex: 1,
              }}>
                {/* Ikona */}
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: isActive ? 'var(--color-secondary)' : 'var(--color-primary)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: isActive ? '0 4px 12px rgba(82, 201, 162, 0.3)' : '0 4px 12px rgba(74, 144, 226, 0.2)',
                }}>
                  <IconComponent size={32} color="white" />
                </div>

                {/* Obsah */}
                <div style={{
                  flex: 1,
                  paddingTop: 'var(--spacing-xs)',
                }}>
                  <div style={{
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: isActive ? 'var(--color-secondary)' : 'var(--color-primary)',
                    marginBottom: 'var(--spacing-xs)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                  }}>
                    {milestone.date}
                  </div>
                  <h3 style={{
                    fontSize: '1.5rem',
                    marginBottom: 'var(--spacing-sm)',
                    color: 'var(--color-text-dark)',
                  }}>
                    {milestone.title}
                  </h3>
                  <p style={{
                    fontSize: '1rem',
                    color: 'var(--color-text-gray)',
                    lineHeight: 1.6,
                    margin: 0,
                  }}>
                    {milestone.description}
                  </p>
                  {isActive && (
                    <div style={{
                      marginTop: 'var(--spacing-md)',
                    }}>
                      <span style={{
                        backgroundColor: 'rgba(82, 201, 162, 0.1)',
                        color: 'var(--color-secondary)',
                        padding: '0.375rem 0.75rem',
                        borderRadius: '20px',
                        fontSize: '0.875rem',
                        fontWeight: 600,
                      }}>
                        Aktuálně probíhá
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

