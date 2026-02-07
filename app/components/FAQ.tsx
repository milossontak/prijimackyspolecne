'use client'

import { useState } from 'react'
import { ChevronDownIcon } from './Icons'
import { useContent } from '../hooks/useContent'

interface FAQItem {
  question: string
  answer: string
}

export default function FAQ({ title: propTitle, items: propItems }: { title?: string; items?: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { content } = useContent()
  
  const faqData = content?.faq || {
    title: propTitle || 'Často kladené otázky',
    items: propItems || []
  }

  const faqItems = propItems || faqData.items

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="section">
      <div className="container">
        <h2 className="text-center">{faqData.title}</h2>
        <div style={{
          maxWidth: '800px',
          margin: 'var(--spacing-xl) auto 0',
        }}>
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="card"
              style={{
                marginBottom: 'var(--spacing-md)',
                cursor: 'pointer',
              }}
              onClick={() => toggle(index)}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <h3 style={{ margin: 0, fontSize: '1.25rem' }}>
                  {item.question}
                </h3>
                <div style={{
                  color: 'var(--color-primary)',
                  transition: 'transform 0.3s ease',
                  transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                  display: 'flex',
                  alignItems: 'center',
                }}>
                  <ChevronDownIcon size={24} />
                </div>
              </div>
              {openIndex === index && (
                <div style={{
                  marginTop: 'var(--spacing-md)',
                  paddingTop: 'var(--spacing-md)',
                  borderTop: '1px solid var(--color-border)',
                }}>
                  <p style={{ margin: 0 }}>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}