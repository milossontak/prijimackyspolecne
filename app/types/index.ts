// Common types used across the application

export interface SiteContent {
  metadata: {
    title: string
    description: string
  }
  hero: {
    h1: string
    paragraphs: string[]
    ctaPrimary: string
    ctaSecondary: string
  }
  heroV2?: {
    h1: string
    paragraphs: string[]
    ctaPrimary: string
    ctaSecondary: string
  }
  navigation?: {
    items: Array<{
      label: string
      href: string
    }>
  }
  howItWorks?: {
    title: string
    steps: Array<{
      title: string
      description: string
    }>
  }
  benefits?: {
    title: string
    items: Array<{
      title: string
      description: string
    }>
  }
  testimonials?: {
    title: string
    items: Array<{
      name: string
      content: string
      role?: string
    }>
    stats: Array<{
      number: string
      label: string
    }>
  }
  faq: {
    title: string
    items: FAQItem[]
  }
  footer?: {
    tagline: string
    email: string
    phone: string
    copyright: string
  }
  services?: {
    mainTitle: string
    mainDescription: string
    onlineTesty?: {
      title: string
      description: string
      features: string[]
      process: Array<{
        step: string
        title: string
        description: string
      }>
      packages: Array<{
        name: string
        tests: number
        price: number
        originalPrice?: number
        features: string[]
        popular?: boolean
      }>
    }
  }
  contact?: {
    title: string
    description: string
    address?: string
    email: string
    phone: string
    form: {
      title: string
      fields: {
        name: { label: string; placeholder: string; required: boolean }
        email: { label: string; placeholder: string; required: boolean }
        phone: { label: string; placeholder: string; required: boolean }
        message: { label: string; placeholder: string; required: boolean }
      }
      submit: string
      success: string
      error: string
    }
  }
  cta?: {
    title?: string
    description?: string
    primaryText?: string
    primaryLink?: string
    secondaryText?: string
    secondaryLink?: string
  }
  seo?: {
    pages?: {
      home?: SEOData
      services?: SEOData
      onlineTests?: SEOData
      inPersonTests?: SEOData
      package5?: SEOData
      package25?: SEOData
      contact?: SEOData
      sampleTest?: SEOData
      blog?: SEOData
    }
  }
}

export interface FAQItem {
  question: string
  answer: string
}

export interface TestPackage {
  name: string
  tests: number
  price: number
  originalPrice?: number
  features: string[]
  popular?: boolean
}

export interface Testimonial {
  name: string
  content: string
  role?: string
}

export interface Benefit {
  title: string
  description: string
}

export interface ProcessStep {
  step: string
  title: string
  description: string
}

export interface ContactForm {
  name: string
  email: string
  phone?: string
  message: string
}

export interface NavigationItem {
  label: string
  href: string
  children?: NavigationItem[]
}

// Component specific interfaces
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  loading?: boolean
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
}

export interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large'
  color?: string
}

export interface Toast {
  id: string
  message: string
  type: 'success' | 'error' | 'info' | 'warning'
  duration?: number
}

export interface SEOData {
  title?: string
  description?: string
  keywords?: string[]
  canonical?: string
  ogImage?: string
  noindex?: boolean
}

// Page specific interfaces
export interface PageHeaderProps {
  title: string
  subtitle?: string
  breadcrumb?: BreadcrumbItem[]
}

export interface BreadcrumbItem {
  label: string
  href: string
}

// API Response types
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

// Form validation types
export interface FormErrors {
  [key: string]: string[]
}

export interface FormState<T> {
  data: T
  errors: FormErrors
  isSubmitting: boolean
  isDirty: boolean
}

export type BlogStatus = 'draft' | 'published'

export interface BlogPostMeta {
  title: string
  slug: string
  perex?: string
  coverImage?: string
  author?: string
  category?: string
  tags?: string[]
  publishedAt?: string
  status?: BlogStatus
  seoTitle?: string
  seoDescription?: string
  seoKeywords?: string[]
  seoImage?: string
  updatedAt?: string
}

export interface BlogPost extends BlogPostMeta {
  content: string
}
