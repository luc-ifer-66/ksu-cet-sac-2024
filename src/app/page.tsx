import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import CampusImage from '@/components/CampusImage'
import ServiceGrid from '@/components/ServiceGrid'
import ContactSection from '@/components/ContactSection'
import SocialLinks from '@/components/SocialLinks'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <CampusImage />
        <ServiceGrid />
        <ContactSection />
      </main>
      <SocialLinks />
      <Footer />
    </div>
  )
}