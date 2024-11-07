import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async () => {
  const cookieStore = cookies();
  const locale = (await cookieStore).get('locale')?.value ?? 'ko';

  try {
    return {
      locale,
      messages: (await import(`@/messages/${locale}.json`)).default
    };
  } catch (error) {
    console.error('Error loading messages:', error);
    return {
      locale: 'ko',
      messages: (await import(`@/messages/ko.json`)).default
    };
  }
});
