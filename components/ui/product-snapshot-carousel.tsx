'use client'

import * as React from 'react'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel'
import { useLocale, useTranslations } from 'next-intl'

type Slide = {
  src: string
  title: string
  description?: string
}

export default function ProductSnapshotCarousel() {
  const [api, setApi] = React.useState<CarouselApi | null>(null)
  const [active, setActive] = React.useState(0)
  const t = useTranslations('slider')

  const locale = useLocale()
  const isRtl = locale === 'fa' || locale === 'ar'

  // ✅ recommended by shadcn docs (stable plugin instance)
  const plugin = React.useRef(
    Autoplay({
      delay: 3500,
      stopOnInteraction: true,
      // optional: stop on hover
      stopOnMouseEnter: true,
    })
  )

  const SLIDES: Slide[] = [
    {
      src: '/showAssets.webp',
      title: t('MultimediaDocumentManagement'),
      description: t('multiAssetsManagementDescription'),
    },
    {
      src: '/searching.webp',
      title: t('SearchAndQuickAccessToContent'),
      description: t('SmartSearchAndAdvancedContentDescription'),
    },
    {
      src: '/samimDam.webp',
      title: t('IntelligentContentProcessing'),
      description: t('IntelligentContentProcessingDescription'),
    },
    {
      src: '/network.webp',
      title: t('TeamInteractionOnContent'),
      description: t('TeamInteractionAndCollaboration'),
    },
    {
      src: '/vidaraDam.webp',
      title: t('FastAndMultiChannelPublishingContent'),
      description: t('FastAndMultiChannelPublishing'),
    },
  ]

  React.useEffect(() => {
    if (!api) return

    setActive(api.selectedScrollSnap())
    const onSelect = () => setActive(api.selectedScrollSnap())
    api.on('select', onSelect)

    return () => {
      api.off('select', onSelect)
    }
  }, [api])

  const current = SLIDES[active]

  return (
    <div className="relative">
      <div className="absolute -left-10 -top-10 h-48 w-50 rounded-full bg-primary/15 blur-2xl" />
      <div className="absolute -bottom-10 -right-10 h-48 w-50 rounded-full bg-primary-dark/15 blur-2xl" />

      <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
          {current?.title && (
            <div className="text-center text-base font-semibold text-slate-900">
              {current.title}
            </div>
          )}
        </div>

        <div className="p-2 md:p-1">
          <Carousel
            setApi={setApi}
            opts={{ loop: true, direction: isRtl ? 'rtl' : 'ltr' }}
            dir={isRtl ? 'rtl' : 'ltr'}
            plugins={[plugin.current]}
            className="relative"
          >
            <CarouselContent>
              {SLIDES.map((s) => (
                <CarouselItem key={s.src} className="basis-full">
                  <div className="relative aspect-3/2 w-full overflow-hidden rounded-xl bg-slate-50">
                    <Image
                      src={s.src}
                      alt={s.title}
                      fill
                      className="object-contain"
                      sizes="(min-width: 768px) 520px, 100vw"
                      priority={s.src === SLIDES[0].src}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* ✅ Prev/Next buttons */}
            <CarouselPrevious
              className={[
                'z-10',
                'top-1/2 -translate-y-1/2 border-gray-300 cursor-pointer',
                // RTL: Previous usually on the right side
                'left-3 right-auto',
              ].join(' ')}
            />
            <CarouselNext
              className={[
                'z-10',
                'top-1/2 -translate-y-1/2 border-gray-300 cursor-pointer',
                // RTL: Next usually on the left side
                'right-3 left-auto',
              ].join(' ')}
            />
          </Carousel>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            <div className="flex items-center gap-1.5">
              {SLIDES.map((_, i) => (
                <span
                  key={i}
                  className={[
                    'h-1.5 w-1.5 rounded-full transition',
                    i === active ? 'bg-slate-900' : 'bg-slate-300',
                  ].join(' ')}
                  aria-hidden
                />
              ))}
            </div>
          </div>

          <div className="mt-3 rounded-xl bg-gradient-to-r from-primary/10 to-primary-dark/10 px-4 py-3">
            {current?.description ? (
              <div className="mt-1 text-xs text-slate-600">{current.description}</div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}
