import Link from 'next/link'
import { TargetIcon, CheckIcon } from './Icons'

export default function ServiceTypes() {
  const services = [
    {
      title: 'Komplexní balíček - 25 testů',
      icon: TargetIcon,
      benefits: [
        '25 testů nanečisto',
        'Možnost volby: online nebo osobně',
        'Video s vysvětlením každé úlohy',
        'Porovnání s ostatními studenty',
        'Sledování pokroku v čase',
        'Komplexní příprava na přijímačky'
      ],
      price: '15 000 Kč',
      originalPrice: null,
      link: '/sluzby/komplexni-balicek',
      popular: true
    },
    {
      title: 'Balíček 5 testů',
      icon: TargetIcon,
      benefits: [
        '5 testů nanečisto',
        'Video s vysvětlením každé úlohy',
        'Porovnání s ostatními studenty',
        'Benchmark pro každý test',
        'Dostupné v klientské sekci',
        'Ideální pro začátek přípravy'
      ],
      price: '3 000 Kč',
      originalPrice: null,
      link: '/sluzby/balicek-5-testu',
      popular: false
    }
  ]

  return (
    <section className="section section-alt">
      <div className="container">
        <h2 className="text-center">Vyberte si typ přípravy</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: 'var(--spacing-xl)',
          marginTop: 'var(--spacing-xl)',
        }}>
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div key={index} className="card" style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: 'var(--spacing-md)',
                  color: 'var(--color-primary)',
                }}>
                  <IconComponent size={64} />
                </div>
                <h3 style={{ textAlign: 'center' }}>{service.title}</h3>
              <ul style={{
                listStyle: 'none',
                marginBottom: 'var(--spacing-lg)',
                padding: 0,
                flex: 1,
              }}>
                {service.benefits.map((benefit, i) => (
                  <li key={i} style={{
                    marginBottom: 'var(--spacing-sm)',
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
                      <CheckIcon size={18} />
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
              <div style={{
                textAlign: 'center',
                marginBottom: 'var(--spacing-md)',
              }}>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: 'var(--color-primary)',
                }}>
                  {service.price}
                </div>
                {service.originalPrice && (
                  <div style={{
                    fontSize: '0.875rem',
                    color: 'var(--color-text-gray)',
                    textDecoration: 'line-through',
                    marginTop: '0.25rem',
                  }}>
                    {service.originalPrice}
                  </div>
                )}
              </div>
              {service.popular && (
                <div style={{
                  textAlign: 'center',
                  marginBottom: 'var(--spacing-sm)',
                }}>
                  <span style={{
                    backgroundColor: 'var(--color-secondary)',
                    color: 'white',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '20px',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                  }}>
                    Nejpopulárnější
                  </span>
                </div>
              )}
              <Link href={service.link} className="btn btn-primary" style={{ width: '100%', marginTop: 'auto' }}>
                Zobrazit detail
              </Link>
            </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

