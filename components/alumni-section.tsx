const alumni = [
  'Horváth Eszter',
  'Tóth Bence',
  'Kiss Dóra',
  'Molnár Ádám',
  'Varga Petra',
  'Farkas Máté',
  'Balogh Zsófia',
  'Simon Dávid',
  'Németh Anna',
  'Lakatos Péter',
  'Fekete Júlia',
  'Oláh Márton',
]

function initials(name: string) {
  return name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

export function AlumniSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
            Nálunk végzett
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Több száz sikeres pályakezdő
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Diákjaink ma a média, a kommunikáció és a tartalomgyártás
            legkülönbözőbb területein építik karrierjüket.
          </p>
        </div>

        <ul className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3 lg:grid-cols-4">
          {alumni.map((name) => (
            <li key={name} className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border bg-accent text-sm font-semibold text-primary"
              >
                {initials(name)}
              </span>
              <span className="text-[15px] font-medium leading-tight text-foreground">
                {name}
              </span>
            </li>
          ))}
        </ul>

        {/* trust stats */}
        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-8 border-t border-border pt-12 sm:grid-cols-4">
          {[
            { value: '2 400+', label: 'Végzett diák' },
            { value: '40+', label: 'Aktív képzés' },
            { value: '25', label: 'Szakértő oktató' },
            { value: '98%', label: 'Elégedettség' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1.5 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
