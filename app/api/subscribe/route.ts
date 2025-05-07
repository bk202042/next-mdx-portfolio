// app/api/subscribe/route.ts
import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { NewsletterFormSchema } from '@/lib/schemas'
import { z } from 'zod'

const resend = new Resend(process.env.RESEND_API_KEY)
const adminEmail = 'admin@bkmind.com' // Define your admin email here

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

    // Send email to admin
    try {
      await resend.emails.send({
        from: 'admin@bkmind.com', // Replace with your verified Resend domain
        to: [adminEmail],
        subject: 'New Newsletter Subscriber',
        text: `A new user has subscribed to the newsletter: ${email}`
      })
      console.log('Admin notification email sent successfully.')
    } catch (sendError: any) {
      console.error(
        'Error sending admin notification email:',
        sendError.message
      )
      // You might choose to handle this error differently, e.g., log it
    }

    // Optionally, you can still add the contact to your Resend audience
    // if you need to manage subscribers there for other purposes.
    // if (process.env.RESEND_AUDIENCE_ID) {
    //   try {
    //     await resend.contacts.create({
    //       email: email,
    //       audienceId: process.env.RESEND_AUDIENCE_ID as string
    //     });
    //     console.log('User added to Resend audience.');
    //   } catch (audienceError: any) {
    //     console.error('Error adding user to Resend audience:', audienceError.message);
    //   }
    // }

    return NextResponse.json({ message: 'Subscription successful' })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
