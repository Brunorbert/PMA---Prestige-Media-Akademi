import Image from 'next/image'
import { Button } from '@/components/ui/button'

const teacherImg = '/teachers/kolozsi-ildiko.jpg'

const teachers = [
  { id: 1, name: 'Kolozsi Ildikó', role: 'Szerkesztő-riporter', img: teacherImg },
  { id: 2, name: 'Kolozsi Ildikó', role: 'Sorozat- és forgatókönyvíró', img: teacherImg },
  { id: 3, name: 'Kolozsi Ildikó', role: 'Televíziós műsorkészítő', img: teacherImg },
  { id: 4, name: 'Kolozsi Ildikó', role: 'Kommunikációs szakértő', img: teacherImg },
  { id: 5, name: 'Kolozsi Ildikó', role: 'Produceri mentor', img: teacherImg },
  { id: 6, name: 'Kolozsi Ildikó', role: 'Digitális tartalomstratéga', img: teacherImg },
]

export function TeachersSection() {
  return (
    <section id="tanaraink" className="scroll-mt-24 bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
              Tanáraink
            </span>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Tanulj a szakma legjobbjaitól
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Elismert szakemberek, akik nem csupán tanítanak, hanem nap mint nap
              a gyakorlatban is művelik, amiről beszélnek.
            </p>
          </div>
          <Button variant="outline" className="shrink-0 rounded-full border-border px-6">
            Mutasd mindet!
          </Button>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {teachers.map((t) => (
            <article
              key={t.id}
              className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src={t.img || '/placeholder.svg'}
                  alt={`${t.name} — ${t.role}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  {t.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{t.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
