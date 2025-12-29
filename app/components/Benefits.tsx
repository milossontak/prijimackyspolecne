import { HeartIcon, ShieldCheckIcon, TargetIcon } from './Icons'

export default function Benefits() {
  const benefits = [
    {
      icon: HeartIcon,
      title: 'Odbourání stresu',
      description: 'Dítě ví, co ho čeká, a není překvapené. Reálná simulace přijímaček odstraňuje nejistotu a strach z neznámého. Připraví se v klidu a s jistotou.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Jistota výsledku',
      description: 'Vidíte přesně, jak na tom vaše dítě je. Každý test přinese jasná data o pokroku, silných a slabých stránkách. Žádné dohady, jen fakta.'
    },
    {
      icon: TargetIcon,
      title: 'Reálná simulace',
      description: 'Testy probíhají v identických podmínkách jako skutečné přijímačky. Stejný čas, stejné typy úloh, stejná atmosféra. Dítě bude vědět, co ho čeká.'
    }
  ]

  return (
    <section className="section section-alt">
      <div className="container">
        <h2 className="text-center">Proč Přijímačky Společně?</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'var(--spacing-xl)',
          marginTop: 'var(--spacing-xl)',
        }}>
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <div key={index} className="card">
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: 'var(--spacing-md)',
                  color: 'var(--color-primary)',
                }}>
                  <IconComponent size={64} />
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

