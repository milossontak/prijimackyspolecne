import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
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

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
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
        Tato zpráva byla odeslána z webu prijimacky-spolecne.cz
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
        data: await request.json()
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