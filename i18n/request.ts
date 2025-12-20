import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';

const locales = ['fa', 'en','ar'] as const;
const defaultLocale = 'fa';

export default getRequestConfig(async ({requestLocale}) => {
  const locale = (await requestLocale) ?? defaultLocale;

  if (!locales.includes(locale as any)) notFound();

  return {
    locale,
    messages: (await import(`@/i18n/messages/${locale}.json`)).default
  };
});
