import '../globals.css'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import { locales } from '@/i18n/config' // دقت: i18n نه i18m
import { yekanBakhFaNum } from '@/src/lib/fonts'
import Script from "next/script";

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
    <html lang={locale} dir={locale === 'en' ? 'ltr' : 'rtl'} className={yekanBakhFaNum.variable}>
      <head>
        <link rel="icon" href="/favicon.ico"/>
        <title>vidara</title>
      </head>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>

        <Script
          id="goftino-widget"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(){var i="A8Nkqj",a=window,d=document;function g(){var g=d.createElement("script"),s="https://www.goftino.com/widget/"+i,l=localStorage.getItem("goftino_"+i);g.async=!0,g.src=l?s+"?o="+l:s;d.getElementsByTagName("head")[0].appendChild(g);}"complete"===d.readyState?g():a.attachEvent?a.attachEvent("onload",g):a.addEventListener("load",g,!1);}();`,
          }}
        />
      </body>
    </html>
  )
}
