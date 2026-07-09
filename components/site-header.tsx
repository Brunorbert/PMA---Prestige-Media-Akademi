'use client'

import { useEffect, useState } from 'react'
import { ChevronDown, Menu, X, GraduationCap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const services = [
  { label: 'Felnőttképzések', href: '#szolgaltatasok' },
  { label: 'Nyilvános előadások', href: '#szolgaltatasok' },
  { label: 'Workshopok', href: '#szolgaltatasok' },
  { label: 'Egyedi továbbképzések', href: '#szolgaltatasok' },
]

const navLinks = [
  { label: 'Rólunk', href: '#rolunk' },
  { label: 'Tanáraink', href: '#tanaraink' },
  { label: 'Jelentkezés', href: '#jelentkezes' },
  { label: 'Kapcsolat', href: '#kapcsolat' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border/70 bg-background/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-background/0',
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-18 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5" aria-label="Prestige Média Akadémia főoldal">
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
            <GraduationCap className="size-5" strokeWidth={2} />
          </span>
          <span className="text-[15px] font-semibold tracking-tight text-foreground">
            Prestige Média Akadémia
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          <a
            href="#rolunk"
            className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Rólunk
          </a>

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={() => setServicesOpen((v) => !v)}
              className="flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Szolgáltatások
              <ChevronDown
                className={cn('size-4 transition-transform duration-200', servicesOpen && 'rotate-180')}
              />
            </button>
            <div
              className={cn(
                'absolute left-1/2 top-full w-64 -translate-x-1/2 pt-3 transition-all duration-200',
                servicesOpen
                  ? 'pointer-events-auto translate-y-0 opacity-100'
                  : 'pointer-events-none translate-y-1 opacity-0',
              )}
            >
              <div className="overflow-hidden rounded-2xl border border-border bg-popover p-1.5 shadow-xl shadow-black/5">
                {services.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="block rounded-xl px-3.5 py-2.5 text-sm font-medium text-popover-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {navLinks.slice(1).map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-2">
          <Button
            nativeButton={false}
            render={<a href="#jelentkezes" />}
            className="hidden rounded-full px-5 shadow-sm sm:inline-flex"
          >
            Jelentkezz!
          </Button>
          <button
            type="button"
            aria-label={mobileOpen ? 'Menü bezárása' : 'Menü megnyitása'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-accent lg:hidden"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 lg:hidden',
          mobileOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <div className="space-y-1 px-5 py-4">
          <a
            href="#rolunk"
            onClick={() => setMobileOpen(false)}
            className="block rounded-xl px-3 py-3 text-base font-medium text-foreground hover:bg-accent"
          >
            Rólunk
          </a>

          <div>
            <button
              type="button"
              onClick={() => setMobileServicesOpen((v) => !v)}
              aria-expanded={mobileServicesOpen}
              className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-base font-medium text-foreground hover:bg-accent"
            >
              Szolgáltatások
              <ChevronDown
                className={cn('size-5 transition-transform', mobileServicesOpen && 'rotate-180')}
              />
            </button>
            <div className={cn('overflow-hidden pl-3 transition-all', mobileServicesOpen ? 'max-h-64' : 'max-h-0')}>
              {services.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-xl px-3 py-2.5 text-[15px] text-muted-foreground hover:bg-accent hover:text-foreground"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {navLinks.slice(1).map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block rounded-xl px-3 py-3 text-base font-medium text-foreground hover:bg-accent"
            >
              {l.label}
            </a>
          ))}

          <Button
            nativeButton={false}
            render={<a href="#jelentkezes" onClick={() => setMobileOpen(false)} />}
            className="mt-2 w-full rounded-full"
          >
            Jelentkezz!
          </Button>
        </div>
      </div>
    </header>
  )
}
