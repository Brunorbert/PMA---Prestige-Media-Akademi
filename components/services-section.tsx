import { Users, Mic, Presentation, Sparkles, ArrowUpRight } from 'lucide-react'

const services = [
  {
    icon: Users,
    title: 'Felnőttképzések',
    description:
      'Akkreditált, gyakorlatorientált programok, amelyek valós, piacképes tudást adnak a média és a kommunikáció világából.',
  },
  {
    icon: Mic,
    title: 'Nyilvános előadások',
    description:
      'Inspiráló beszélgetések és előadások a szakma meghatározó alakjaival, nyitott és kötetlen formában.',
  },
  {
    icon: Presentation,
    title: 'Workshopok',
    description:
      'Intenzív, kis létszámú műhelyek, ahol azonnal alkalmazható készségeket sajátíthatsz el a gyakorlatban.',
  },
  {
    icon: Sparkles,
    title: 'Egyedi továbbképzések',
    description:
      'Vállalatokra és csapatokra szabott programok, amelyeket a ti céljaitokhoz igazítunk minden részletében.',
  },
]

export function ServicesSection() {
  return (
    <section id="szolgaltatasok" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.14em] text-gold">
            Szolgáltatások
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Képzések minden ambícióhoz
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Négy irány, egy közös cél: hogy a legjobb szakemberek tudását
            elérhetővé tegyük mindenki számára.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative flex flex-col rounded-3xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl hover:shadow-gold/10"
            >
              <div className="flex size-12 items-center justify-center rounded-2xl bg-accent text-primary transition-colors group-hover:bg-gold group-hover:text-gold-foreground">
                <s.icon className="size-6" strokeWidth={1.75} />
              </div>
              <h3 className="mt-6 text-lg font-semibold tracking-tight text-foreground">
                {s.title}
              </h3>
              <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-muted-foreground">
                {s.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Részletek
                <ArrowUpRight className="size-4" />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
