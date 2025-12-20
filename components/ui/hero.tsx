'use client'

import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'

export default function Hero() {
  const t = useTranslations('hero')

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-20 md:grid-cols-2 md:py-24">
        <div className="flex flex-col justify-center">
          <p className="mb-3 inline-flex w-fit rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
            {t('badge')}
          </p>

          <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            {t('title')}
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            {t('subtitle')}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button className="bg-primary text-white hover:bg-primary-dark" size="lg">
              {t('ctaPrimary')}
            </Button>
            <Button variant="outline" size="lg">
              {t('ctaSecondary')}
            </Button>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            {t('note')}
          </p>
        </div>

        {/* Visual / Mock placeholder */}
        <div className="relative">
          <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-primary/15 blur-2xl" />
          <div className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-primary-dark/15 blur-2xl" />

          <div className="relative rounded-2xl border bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between border-b pb-3">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-slate-200" />
                <div className="h-3 w-3 rounded-full bg-slate-200" />
                <div className="h-3 w-3 rounded-full bg-slate-200" />
              </div>
              <div className="text-xs text-slate-500">{t('mockTitle')}</div>
            </div>

            <div className="mt-4 grid gap-3">
              <div className="rounded-xl bg-slate-50 p-4">
                <div className="mb-2 h-3 w-24 rounded bg-slate-200" />
                <div className="h-3 w-40 rounded bg-slate-200" />
              </div>
              <div className="rounded-xl bg-slate-50 p-4">
                <div className="mb-2 h-3 w-28 rounded bg-slate-200" />
                <div className="h-3 w-44 rounded bg-slate-200" />
              </div>
              <div className="rounded-xl bg-slate-50 p-4">
                <div className="mb-2 h-3 w-20 rounded bg-slate-200" />
                <div className="h-3 w-36 rounded bg-slate-200" />
              </div>
            </div>

            <div className="mt-4 rounded-xl bg-gradient-to-r from-primary/10 to-primary-dark/10 p-4">
              <div className="text-sm font-medium text-slate-800">
                {t('mockHint')}
              </div>
              <div className="mt-1 text-xs text-slate-600">
                {t('mockDesc')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
