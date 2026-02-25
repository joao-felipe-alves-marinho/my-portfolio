import { createFileRoute } from '@tanstack/react-router'
import { HeroSection } from './-sections/hero/hero'
import { AboutMeSection } from './-sections/about-me/about-me'
import { ProjectsSection } from './-sections/projects/projects'
import { TechnologiesSection } from './-sections/technologies/technologies'
import { ContactSection } from './-sections/contact/contact'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <ProjectsSection />
      <TechnologiesSection />
      <ContactSection />
    </>
  )
}

