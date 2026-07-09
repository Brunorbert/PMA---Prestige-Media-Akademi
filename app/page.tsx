import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { ServicesSection } from '@/components/services-section'
import { TeachersSection } from '@/components/teachers-section'
import { AlumniSection } from '@/components/alumni-section'
import { ApplySection } from '@/components/apply-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <ServicesSection />
        <TeachersSection />
        <AlumniSection />
        <ApplySection />
      </main>
      <SiteFooter />
    </div>
  )
}
