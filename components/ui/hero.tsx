'use client'

import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import ProductSnapshotCarousel from '@/components/ui/product-snapshot-carousel'
import Link from "next/link"

export default function Hero() {
  const t = useTranslations('hero')

  return (
    <section className="relative overflow-hidden bg-background">
            <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* Base soft gradient wash */}
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_20%_20%,rgba(0,159,217,0.18)_0%,transparent_60%),radial-gradient(70%_55%_at_80%_30%,rgba(3,83,112,0.14)_0%,transparent_55%),radial-gradient(60%_55%_at_60%_90%,rgba(0,159,217,0.10)_0%,transparent_60%)]" />

        {/* Diagonal highlight */}
        <div className="absolute -inset-[40%] rotate-[-12deg] bg-[linear-gradient(90deg,transparent_0%,rgba(0,159,217,0.10)_35%,rgba(3,83,112,0.10)_55%,transparent_85%)]" />

        {/* Subtle pattern (optional): keep very low opacity */}
        <div className="absolute inset-0 opacity-[0.06] [mask-image:radial-gradient(60%_60%_at_50%_30%,#000_0%,transparent_70%)] bg-[linear-gradient(to_right,rgba(2,132,199,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,132,199,0.35)_1px,transparent_1px)] bg-[size:28px_28px]" />

        {/* Noise overlay (requires /public/noise.svg) */}
        <div className="absolute inset-0 opacity-[0.10] mix-blend-soft-light bg-[url(/noise.svg)]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-20 md:grid-cols-2 md:py-24">
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
            <Button className="bg-primary text-white hover:bg-primary-dark cursor-pointer" size="lg">
              <a
                href="https://vidara.media"
              >
                {t('ctaPrimary')}
              </a>
            </Button>
            <Button variant="outline" size="lg" className='border-gray-300 cursor-pointer' >
              <Link href="https://samimsolutions.com/digital-asset-management/#form-section" target="_blank" rel="noopener noreferrer">{t('ctaSecondary')}</Link>
            </Button>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            {t('note')}
          </p>
        </div>

        {/* Visual / Mock placeholder */}
      <ProductSnapshotCarousel />

      </div>
    </section>
  )
}
