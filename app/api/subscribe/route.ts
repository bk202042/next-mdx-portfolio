// app/api/subscribe/route.ts
import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { NewsletterFormSchema } from '@/lib/schemas'
import { z } from 'zod'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const result = NewsletterFormSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        { error: result.error.format() },
        { status: 400 }
      )
    }

    const { email } = result.data

    const data = await resend.contacts.create({
      email: email,
      audienceId: process.env.RESEND_AUDIENCE_ID as string
    })

    return NextResponse.json({ data })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}