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
        </div>
      </div>
    </footer>
  )
}
