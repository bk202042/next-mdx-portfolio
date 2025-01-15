// app/api/subscribe/route.ts
import { NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  email: z.string().email()
})

export async function POST(request: Request) {
  try {
    const json = await request.json()
    const result = schema.safeParse(json)

    if (!result.success) {
      return NextResponse.json(
        { error: result.error.format() },
        { status: 400 }
      )
    }

    const { email } = result.data

    // 이메일 수신 처리
    const adminEmail = 'admin@bkmind.com'
    // 여기에 이메일 전송 로직 구현 (예: nodemailer 또는 다른 이메일 서비스)

    return NextResponse.json({
      message: `구독 요청이 성공적으로 전송되었습니다: ${adminEmail}`
    })

  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}
