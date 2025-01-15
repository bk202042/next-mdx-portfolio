// components/newsletter-form.tsx
'use client'

import { z } from 'zod'
import Link from 'next/link'
import { toast } from 'sonner'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { NewsletterFormSchema } from '@/lib/schemas'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'

type Inputs = z.infer<typeof NewsletterFormSchema>

export default function NewsletterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<Inputs>({
    resolver: zodResolver(NewsletterFormSchema),
    defaultValues: {
      email: ''
    }
  })

  const processForm: SubmitHandler<Inputs> = async data => {
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      if (response.ok) {
        toast.success('Subscribed successfully!')
        reset()
      } else {
        const errorData = await response.json()
        toast.error(
          errorData.error?.message ||
            'An error occurred while subscribing. Please try again.'
        )
      }
    } catch (error) {
      console.error('Error subscribing:', error)
      toast.error('An unexpected error occurred. Please try again later.')
    }
  }

  return (
    <section>
      <Card className='rounded-lg border-0 dark:border'>
        <CardContent className='flex flex-col gap-8 pt-6 md:flex-row md:justify-between md:pt-8'>
          <div>
            <h2 className='text-2xl font-bold'>뉴스레터 구독하기</h2>
            <p className='text-muted-foreground'>
              AI관련 최신 정보를 뉴스레터로 전송해 드립니다.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(processForm)}
            className='flex flex-col items-start gap-3'
          >
            <div className='w-full'>
              <Input
                type='email'
                id='email'
                autoComplete='email'
                placeholder='Email'
                className='w-full'
                {...register('email')}
              />

              {errors.email?.message && (
                <p className='ml-1 mt-2 text-sm text-rose-400'>
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className='w-full'>
              <Button
                type='submit'
                disabled={isSubmitting}
                className='w-full disabled:opacity-50'
              >
                {isSubmitting ? 'Submitting...' : 'Subscribe'}
              </Button>
            </div>

            <div>
              <p className='text-xs text-muted-foreground'>
                We care about your data. Read our{' '}
                <Link href='/privacy' className='font-bold'>
                  privacy policy.
                </Link>
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}
