import ContactForm from '@/components/contact-form'

export default function Contact() {
  return (
    <div className='py-16 pt-40 sm:py-24 sm:pt-48'>
      <div className='container max-w-5xl px-4 sm:px-6 lg:px-8'>
        <h1 className='title mb-12 text-4xl'>
          궁금하신 사항은 언제든지 문의주시면 감사하겠습니다.
        </h1>
        <ContactForm />
      </div>
    </div>
  )
}
