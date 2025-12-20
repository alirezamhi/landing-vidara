'use client'

import { useTranslations } from 'next-intl'

function FeatureCard({
  title,
  desc,
}: {
  title: string
  desc: string
}) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="mb-4 h-10 w-10 rounded-xl bg-primary/10" aria-hidden />
      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
    </div>
  )
}

export default function Features() {
  const t = useTranslations('features')

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {t('title')}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            {t('subtitle')}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard title={t('items.ai.title')} desc={t('items.ai.desc')} />
          <FeatureCard title={t('items.dam.title')} desc={t('items.dam.desc')} />
          <FeatureCard title={t('items.workflow.title')} desc={t('items.workflow.desc')} />
          <FeatureCard title={t('items.publish.title')} desc={t('items.publish.desc')} />
        </div>

        <div className="mt-10 rounded-2xl border bg-slate-50 p-6 md:p-8">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-lg font-semibold">{t('ctaBox.title')}</div>
              <div className="mt-1 text-sm text-slate-600">{t('ctaBox.desc')}</div>
            </div>
            <div className="mt-4 md:mt-0">
              <a
                className="inline-flex items-center rounded-xl bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark"
                href="https://vidara.media"
              >
                {t('ctaBox.button')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
