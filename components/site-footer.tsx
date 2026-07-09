import { Mail, GraduationCap } from 'lucide-react'

type IconProps = { className?: string }

function FacebookIcon({ className }: IconProps) {
  return (
    <svg role="img" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.9h-2.34V22c4.78-.76 8.43-4.92 8.43-9.94Z" />
    </svg>
  )
}

function YoutubeIcon({ className }: IconProps) {
  return (
    <svg role="img" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M23.5 6.5a3 3 0 0 0-2.12-2.12C19.5 3.87 12 3.87 12 3.87s-7.5 0-9.38.51A3 3 0 0 0 .5 6.5C0 8.38 0 12 0 12s0 3.62.5 5.5a3 3 0 0 0 2.12 2.12c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3 3 0 0 0 2.12-2.12C24 15.62 24 12 24 12s0-3.62-.5-5.5ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
    </svg>
  )
}

function InstagramIcon({ className }: IconProps) {
  return (
    <svg role="img" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.05.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.05.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.05-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.05-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 3.68a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32Zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.4-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z" />
    </svg>
  )
}

function TikTokIcon({ className }: IconProps) {
  return (
    <svg role="img" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M16.6 5.82a4.28 4.28 0 0 1-1.06-2.82h-3.2v13.02a2.53 2.53 0 1 1-2.53-2.53c.26 0 .51.04.75.11v-3.3a5.82 5.82 0 1 0 5.03 5.77V9.01a7.53 7.53 0 0 0 4.3 1.35v-3.2a4.28 4.28 0 0 1-3.29-1.34Z" />
    </svg>
  )
}

const socials = [
  { label: 'Facebook', href: '#', Icon: FacebookIcon },
  { label: 'YouTube', href: '#', Icon: YoutubeIcon },
  { label: 'Instagram', href: '#', Icon: InstagramIcon },
  { label: 'TikTok', href: '#', Icon: TikTokIcon },
]

export function SiteFooter() {
  return (
    <footer id="kapcsolat" className="scroll-mt-24 border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <a href="#" className="flex items-center gap-2.5" aria-label="Prestige Média Akadémia főoldal">
              <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <GraduationCap className="size-5" strokeWidth={2} />
              </span>
              <span className="text-[15px] font-semibold tracking-tight text-foreground">
                Prestige Média Akadémia
              </span>
            </a>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              Prémium, technológia-vezérelt felnőttképzés a média és a
              kommunikáció legjobb szakembereitől.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <a
              href="mailto:tv2akademia@tv2.hu"
              className="inline-flex items-center gap-2.5 text-[15px] font-medium text-foreground transition-colors hover:text-primary"
            >
              <Mail className="size-4.5 text-muted-foreground" />
              tv2akademia@tv2.hu
            </a>

            <div className="flex items-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/30 hover:bg-accent hover:text-primary"
                >
                  <Icon className="size-4.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-border pt-8">
          <p className="text-xs leading-relaxed text-muted-foreground/70">
            © 2024 [Ide jön a Céged Neve] – Minden jog fenntartva! Képzőintézmény:
            [Cégnév] | Felnőttképzési rendszer azonosítója: B/2020/001174
          </p>
        </div>
      </div>
    </footer>
  )
}
