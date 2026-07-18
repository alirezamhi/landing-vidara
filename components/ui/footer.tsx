'use client'

import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('footer')

  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-slate-600">
            {t('copyright')}
          </div>
          <div className="flex gap-4 text-sm text-slate-600">
            <a className="hover:text-slate-900" href="#">{t('privacy')}</a>
            <a className="hover:text-slate-900" href="#">{t('terms')}</a>
          </div>
          <a referrerPolicy='origin' target='_blank' href='https://trustseal.enamad.ir/?id=701464&Code=wi7uOR9JzKGG13q8UL0n5LcCVbAX3sb0'>
        <img referrerPolicy='origin' 
          src='https://trustseal.enamad.ir/logo.aspx?id=701464&Code=wi7uOR9JzKGG13q8UL0n5LcCVbAX3sb0' 
          alt='' style={{cursor:"pointer"}} data-code='wi7uOR9JzKGG13q8UL0n5LcCVbAX3sb0'/>
      </a>
        </div>
      </div>
    </footer>
  )
}
