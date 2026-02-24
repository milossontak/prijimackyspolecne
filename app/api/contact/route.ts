import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface ContactPayload {
  name?: string
  email?: string
  phone?: string
  message?: string
}

const contactRateLimit = new Map<string, { count: number; resetAt: number }>()
const CONTACT_WINDOW_MS = 10 * 60 * 1000
const CONTACT_MAX_ATTEMPTS = 5

function getClientIp(request: NextRequest) {
  const forwardedFor = request.headers.get('x-forwarded-for')
  if (forwardedFor) {
    return forwardedFor.split(',')[0]?.trim() || 'unknown'
  }
  return request.headers.get('x-real-ip') || 'local'
}

function isRateLimited(ip: string) {
  const now = Date.now()
  const entry = contactRateLimit.get(ip)
  if (!entry || now > entry.resetAt) {
    contactRateLimit.set(ip, { count: 1, resetAt: now + CONTACT_WINDOW_MS })
    return false
  }
  entry.count += 1
  contactRateLimit.set(ip, entry)
  return entry.count > CONTACT_MAX_ATTEMPTS
}

export async function POST(request: NextRequest) {
  let body: ContactPayload | null = null
  try {
    const ip = getClientIp(request)
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, error: 'Příliš mnoho odeslání. Zkuste to později.' },
        { status: 429 }
      )
    }

    body = (await request.json()) as ContactPayload
    const { name, email, phone, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Vyplňte prosím všechna povinná pole' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Zadejte prosím platnou emailovou adresu' },
        { status: 400 }
      )
    }

    const smtpPort = parseInt(process.env.SMTP_PORT || '587', 10)
    const smtpSecure = process.env.SMTP_SECURE
      ? process.env.SMTP_SECURE === 'true'
      : smtpPort === 465

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    // Email content
    const emailContent = `
      <h2>Nová zpráva z kontaktního formuláře</h2>
      <p><strong>Jméno:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ''}
      <p><strong>Zpráva:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p style="font-size: 12px; color: #666;">
        Tato zpráva byla odeslána z webu www.prijimackyspolecne.cz
        dne ${new Date().toLocaleString('cs-CZ')}
      </p>
    `

    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_FROM || 'info@prijimackyspolecne.cz',
      to: process.env.CONTACT_EMAIL || 'info@prijimackyspolecne.cz',
      subject: `Nová zpráva z webu - ${name}`,
      html: emailContent,
      replyTo: email,
    })

    return NextResponse.json({
      success: true,
      message: 'Zpráva byla úspěšně odeslána. Ozveme se vám co nejdříve.'
    })

  } catch (error) {
    console.error('Contact form error:', error)
    
    // Fallback for development or when email is not configured
    if (process.env.NODE_ENV === 'development' || !process.env.SMTP_HOST) {
      console.log('Email would be sent:', {
        to: process.env.CONTACT_EMAIL || 'info@prijimackyspolecne.cz',
        subject: `Nová zpráva z webu`,
        data: body
      })
      
      return NextResponse.json({
        success: true,
        message: 'Zpráva byla úspěšně odeslána (development mode).'
      })
    }

    return NextResponse.json(
      { success: false, error: 'Došlo k chybě při odesílání zprávy. Zkuste to prosím později.' },
      { status: 500 }
    )
  }
}
