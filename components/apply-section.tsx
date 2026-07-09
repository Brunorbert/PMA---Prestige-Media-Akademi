import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ApplySection() {
  return (
    <section id="jelentkezes" className="scroll-mt-24 pb-24 md:pb-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-primary px-6 py-16 text-center md:px-16 md:py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_1px_1px,var(--color-primary-foreground)_1px,transparent_0)] [background-size:24px_24px]"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-primary-foreground md:text-4xl lg:text-5xl">
              Kezdd el a tanulást még ma
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/80">
              Foglald le a helyed a következő képzésen, és csatlakozz azokhoz,
              akik már nálunk fejlesztik a tudásukat.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                nativeButton={false}
                render={<a href="#kapcsolat" />}
                size="lg"
                variant="secondary"
                className="rounded-full px-7 text-base shadow-sm"
              >
                Jelentkezz!
                <ArrowRight className="size-4" />
              </Button>
              <Button
                nativeButton={false}
                render={<a href="#szolgaltatasok" />}
                size="lg"
                variant="ghost"
                className="rounded-full px-7 text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                Böngéssz a képzések között
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
