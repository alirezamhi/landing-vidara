'use client'

import { useTranslations } from 'next-intl'
import { Sparkles, FolderOpen, Workflow, Send } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Button } from './button'
function FeatureCard({
  title,
  desc,
  Icon,
}: {
  title: string
  desc: string
  Icon: LucideIcon
}) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10" aria-hidden>
        <Icon className="h-5 w-5 text-primary" aria-hidden />
      </div>
      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
    </div>
  )
}

export default function Features() {
  const t = useTranslations('features')
  const onClickRegister = () => {
    const url = new URL('/bpms/app/mediaExplorer/default/register', window.location.origin).toString()
    window.location.assign(url) // همان تب، با امکان Back
  }
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
          <FeatureCard title={t('items.ai.title')} desc={t('items.ai.desc')} Icon={Sparkles} />
          <FeatureCard title={t('items.dam.title')} desc={t('items.dam.desc')} Icon={FolderOpen} />
          <FeatureCard title={t('items.workflow.title')} desc={t('items.workflow.desc')} Icon={Workflow} />
          <FeatureCard title={t('items.publish.title')} desc={t('items.publish.desc')} Icon={Send} />
        </div>

        <div className="mt-10 rounded-2xl border bg-slate-50 p-6 md:p-8">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-lg font-semibold">{t('ctaBox.title')}</div>
              <div className="mt-1 text-sm text-slate-600">{t('ctaBox.desc')}</div>
            </div>
            <Button className="bg-primary text-white hover:bg-primary-dark cursor-pointer" size="lg" onClick={onClickRegister}>

              {t('ctaBox.button')}

            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
