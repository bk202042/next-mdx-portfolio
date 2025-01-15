// app/api/contact/route.ts
import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { ContactFormSchema } from '@/lib/schemas'
import ContactFormEmail from '@/emails/contact-form-email'
import { z } from 'zod'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const result = ContactFormSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        { error: result.error.format() },
        { status: 400 }
      )
    }

    const { name, email, message } = result.data

    const data = await resend.emails.send({
      from: 'admin@bkmind.com', // Replace with your verified Resend domain
      to: [email],
      cc: ['admin@bkmind.com'], // Optionally keep the CC
      subject: 'Contact form submission',
      react: ContactFormEmail({ name, email, message })
    })

    return NextResponse.json({ data })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
