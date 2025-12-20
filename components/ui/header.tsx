'use client'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useLocale, useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { locales } from '@/i18n/config'

const APP_URL = 'https://vidara.media'

function switchLocalePath(pathname: string, nextLocale: string) {
  const segments = pathname.split('/').filter(Boolean)

  // if route is /fa/... , first segment is locale
  if (segments.length > 0 && locales.includes(segments[0] as any)) {
    segments[0] = nextLocale
    return '/' + segments.join('/')
  }

  // fallback: ensure locale prefix
  return `/${nextLocale}${pathname.startsWith('/') ? '' : '/'}${pathname}`
}

export default function Header() {
  const t = useTranslations('header')
  const locale = useLocale()
  const pathname = usePathname()

  const langLabel =
    locale === 'fa' ? 'FA' : locale === 'en' ? 'EN' : 'AR'

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href={`/${locale}`} className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary" aria-hidden />
          <span className="text-lg font-semibold tracking-tight text-slate-900">
            Vidara
          </span>
        </Link>

        <div className="flex items-center gap-2">
          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="h-9 px-3">
                {langLabel}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href={switchLocalePath(pathname, 'fa')}>فارسی</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={switchLocalePath(pathname, 'en')}>English</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={switchLocalePath(pathname, 'ar')}>العربية</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="mx-1 h-6 w-px bg-slate-200" />

          {/* Login / Signup */}
          <Button variant="ghost" asChild className="h-9">
            <a href={APP_URL}>{t('login')}</a>
          </Button>

          <Button
            asChild
            className="h-9 bg-primary text-white hover:bg-primary-dark"
          >
            <a href={APP_URL}>{t('signup')}</a>
          </Button>
        </div>
      </div>
    </header>
  )
}
