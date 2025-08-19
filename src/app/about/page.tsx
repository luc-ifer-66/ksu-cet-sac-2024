import Navbar from '@/components/Navbar'
import SocialLinks from '@/components/SocialLinks'
import Footer from '@/components/Footer'
import { Target, CheckCircle } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <main className="relative z-10">
        <section className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">About Us</h1>
            <p className="text-xl opacity-90">Learn more about the KSU CET Student Assist Cell and our mission.</p>
          </div>
        </section>
        
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="glass-card p-8 md:p-12">
            <div className="space-y-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-display font-bold mb-4 text-primary-500">Our Mission</h2>
                <p className="text-lg text-text-muted leading-relaxed">
                  KSU CET Student Assist Cell was created by students, for students. Our goal is simple: 
                  make it effortless to find resources for studies, help with question papers and more.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-display font-bold mb-4 text-primary-500 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6" />
                  What We Do
                </h3>
                <ol className="space-y-3 text-lg text-text-primary">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    <span>Curate up-to-date notes and textbooks.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    <span>Help with question papers and more.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    <span>Provide a platform to access all the resources for studies.</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SocialLinks />
      <Footer />
    </div>
  )
}