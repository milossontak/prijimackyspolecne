import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Benefits from './components/Benefits'
import Testimonials from './components/Testimonials'
import ProcessShowcase from './components/ProcessShowcase'
import ServiceTypes from './components/ServiceTypes'
import Timeline from './components/Timeline'
import FAQ from './components/FAQ'

const faqItems = [
  {
    question: 'Na jaké typy přijímaček se můžeme připravit?',
    answer: 'Nabízíme přípravu na přijímací zkoušky na střední školy (z 9. třídy) i na gymnázia z 5. třídy. Testy pokrývají všechny typy úloh, které se u přijímaček objevují.'
  },
  {
    question: 'Jak dlouho trvá test?',
    answer: 'Test trvá stejně dlouho jako skutečné přijímací zkoušky - obvykle 60-70 minut pro matematiku a 60-70 minut pro český jazyk. Můžete si vybrat, zda test absolvujete online nebo osobně.'
  },
  {
    question: 'Kdy dostaneme výsledky?',
    answer: 'Výsledky online testů jsou k dispozici okamžitě po dokončení. U osobních testů nanečisto obdržíte výsledky do 24 hodin. Součástí jsou vždy video vysvětlení a benchmark.'
  },
  {
    question: 'Mohu si vybrat mezi online a osobním testem?',
    answer: 'Ano, u komplexního balíčku 25 testů si můžete pro každý test zvolit, zda ho absolvujete online nebo osobně. U balíčku 5 testů jsou testy dostupné online.'
  },
  {
    question: 'Jak funguje benchmark?',
    answer: 'Benchmark porovnává výsledky vašeho dítěte s ostatními studenty, kteří absolvovali stejný test. Uvidíte percentilové zařazení a zjistíte, jak si dítě stojí v rámci celé skupiny.'
  }
]

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HowItWorks />
      <Benefits />
      <Testimonials />
      <ProcessShowcase />
      <ServiceTypes />
      <Timeline />
      <FAQ items={faqItems} />
      <Footer />
    </>
  )
}

