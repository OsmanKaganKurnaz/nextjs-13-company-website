import AboutSection from '@/sections/about-section'
import ContactSection from '@/sections/contact-section'
import HeroSection from '@/sections/hero-section'
import OurTeamSection from '@/sections/our-team-section'
import ProjectSection from '@/sections/project-section'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <OurTeamSection />
      <ContactSection />
    </div>
  )
}