'use client'

import { useState, useEffect } from 'react'
import Hero from './Hero'
import HeroV2 from './HeroV2'

export default function HeroSelector() {
  const [mounted, setMounted] = useState(false)
  const [showVariant2, setShowVariant2] = useState(false)

  useEffect(() => {
    setMounted(true)
    setShowVariant2(Math.random() >= 0.5)
  }, [])

  if (!mounted) {
    return <Hero />
  }
  return showVariant2 ? <HeroV2 /> : <Hero />
}
