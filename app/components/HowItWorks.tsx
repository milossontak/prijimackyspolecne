import { SelectIcon, DocumentIcon, ChartIcon } from './Icons'

export default function HowItWorks() {
  const steps = [
    {
      icon: SelectIcon,
      title: 'Vyberte si test',
      description: 'Vyberte si balíček testů - komplexní balíček 25 testů nebo balíček 5 testů. U komplexního balíčku si můžete pro každý test zvolit, zda ho absolvujete online nebo osobně.'
    },
    {
      icon: DocumentIcon,
      title: 'Dítě absolvuje test',
      description: 'Test probíhá v reálných podmínkách - stejný časový limit a typy úloh jako u skutečných přijímaček.'
    },
    {
      icon: ChartIcon,
      title: 'Získáte detailní zpětnou vazbu',
      description: 'Okamžité vyhodnocení, video s vysvětlením každé úlohy a porovnání s ostatními studenty vám ukáže, kde je potřeba přidat.'
    }
  ]

  return (
    <section className="section">
      <div className="container">
        <h2 className="text-center">Jak připravíme vaše dítě na přijímačky</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'var(--spacing-xl)',
          marginTop: 'var(--spacing-xl)',
        }}>
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div key={index} className="card" style={{ textAlign: 'center' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: 'var(--spacing-md)',
                  color: 'var(--color-primary)',
                }}>
                  <IconComponent size={64} />
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

