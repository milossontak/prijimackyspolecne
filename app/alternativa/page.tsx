import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroV2 from '../components/HeroV2'
import HowItWorks from '../components/HowItWorks'
import Benefits from '../components/Benefits'
import Testimonials from '../components/Testimonials'
import ProcessShowcase from '../components/ProcessShowcase'
import ServiceTypes from '../components/ServiceTypes'
import Timeline from '../components/Timeline'
import FAQ from '../components/FAQ'
import { siteContent } from '../content/site'

export default function Alternativa() {
  const { faq } = siteContent
  return (
    <>
      <Header />
      <HeroV2 />
      <HowItWorks />
      <Benefits />
      <Testimonials />
      <ProcessShowcase />
      <ServiceTypes />
      <Timeline />
      <FAQ title={faq.title} items={faq.items} />
      <Footer />
    </>
  )
}
