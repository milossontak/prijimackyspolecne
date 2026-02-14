'use client'

import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import FAQ from './components/FAQ'
import Benefits from './components/Benefits'
import Testimonials from './components/Testimonials'
import HowItWorks from './components/HowItWorks'
import ProcessShowcase from './components/ProcessShowcase'
import ServiceTypes from './components/ServiceTypes'
import Timeline from './components/Timeline'
import { siteContent } from './content/site'

export default function Home() {
  const { faq } = siteContent || { title: '', items: [] }
  
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <HowItWorks />
        <Benefits />
        <Testimonials />
        <ProcessShowcase />
        <ServiceTypes />
        <Timeline />
        <FAQ title={faq.title} items={faq.items} />
      </main>
      <Footer />
    </>
  )
}
