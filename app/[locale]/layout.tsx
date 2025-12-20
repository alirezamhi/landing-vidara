import '../globals.css'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import { locales } from '@/i18n/config' // دقت: i18n نه i18m

type Params = Promise<{ locale: string }>

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Params
}) {
  const { locale } = await params // ✅ مهم‌ترین تغییر

  if (!locales.includes(locale as any)) notFound()

  const messages = (await import(`@/i18n/messages/${locale}.json`)).default

  return (
    <html lang={locale} dir={locale === 'en' ? 'ltr' : 'rtl'}>
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
