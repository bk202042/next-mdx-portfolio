import ContactForm from '@/components/contact-form';
import { useTranslations } from 'next-intl';

export default function Contact() {
  const t = useTranslations('ContactForm');

  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <h2 className='title'>{t('title')}</h2>
        <p className='mt-2 subtitle'>{t('subtitle')}</p>
        <ContactForm />
      </div>
    </section>
  );
}
