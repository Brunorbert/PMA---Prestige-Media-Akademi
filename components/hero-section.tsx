'use client'

import { Play, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section id="rolunk" className="relative overflow-hidden pt-28 md:pt-36">
      {/* soft ambient accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-[420px] max-w-3xl rounded-full bg-primary/10 blur-3xl"
      />

      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <Sparkles className="size-3.5 text-gold" />
            Modern oktatás a média szakembereitől
          </div>

          <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Bemutatkozunk
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            Prémium tudás, valós tapasztalat, technológia-vezérelt tanulási élmény.
            Képzéseink azoknak szólnak, akik a médiaszakma legjobbjaitól szeretnének
            tanulni — bárhonnan, saját tempóban.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              nativeButton={false}
              render={<a href="#jelentkezes" />}
              size="lg"
              className="rounded-full px-7 text-base shadow-sm"
            >
              Jelentkezz!
            </Button>
            <Button
              nativeButton={false}
              render={<a href="#szolgaltatasok" />}
              size="lg"
              variant="outline"
              className="rounded-full border-border px-7 text-base"
            >
              Fedezd fel a képzéseket
            </Button>
          </div>
        </div>

        {/* Video player placeholder */}
        <div className="mx-auto mt-16 max-w-4xl md:mt-20">
          <div className="group relative aspect-video overflow-hidden rounded-3xl border border-border bg-card shadow-2xl shadow-primary/10 ring-1 ring-black/[0.02]">
            {/* backdrop */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-accent"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.04] [background-image:radial-gradient(circle_at_1px_1px,var(--color-foreground)_1px,transparent_0)] [background-size:22px_22px]"
            />

            {/* play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                type="button"
                aria-label="Bemutatkozó videó lejátszása"
                className="flex size-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl shadow-primary/30 transition-transform duration-300 group-hover:scale-105 md:size-24"
              >
                <Play className="size-8 translate-x-0.5 md:size-9" fill="currentColor" />
              </button>
            </div>

            {/* faux player chrome */}
            <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 bg-gradient-to-t from-foreground/10 to-transparent p-5 md:p-6">
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-foreground/15">
                <div className="h-full w-1/3 rounded-full bg-gold" />
              </div>
              <span className="font-mono text-xs font-medium text-foreground/70">02:14 / 06:40</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
