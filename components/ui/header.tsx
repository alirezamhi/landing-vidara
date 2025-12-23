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
import Image from 'next/image'

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


  const onClickLogin = () => {
    const origin = window.location.origin 
    const url = new URL('/bpms/app/mediaExplorer/default/login', origin).toString()   
    window.location.assign(url)    
  }  

  const onClickRegister = () => {
    const url = new URL('/bpms/app/mediaExplorer/default/register', window.location.origin).toString()
    window.location.assign(url) // همان تب، با امکان Back
  }  

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href={`/${locale}`} className="flex items-center gap-2">
          <span className="relative h-9 w-9 overflow-hidden rounded-xl">
    <Image
      src="/vidaraLogo.svg"
      alt="Vidara"
      fill
      className="object-contain p-1.5"
      priority
    />
  </span>
          <span className="text-lg font-semibold tracking-tight text-slate-900">
            Vidara
          </span>
        </Link>

        <div className="flex items-center gap-2">
          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="h-9 px-3 border-gray-300">
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
          <Button variant="ghost" asChild className="h-9 text-gray-900 cursor-pointer" onClick={onClickLogin}>
            <p>{t('login')}</p>
          </Button>

          <Button
            className="h-9 bg-primary text-white hover:bg-primary-dark cursor-pointer"
             onClick={onClickRegister}
          >
            <p>{t('signup')}</p>
          </Button>
        </div>
      </div>
    </header>
  )
}
