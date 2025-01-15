import ContactForm from '@/components/contact-form'

export default function Contact() {
  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <h2 className='title text-4xl'>궁금하신 사항은 언제든지 문의주시면 감사하겠습니다.</h2>
        <ContactForm />
      </div>
    </section>
  )
}
