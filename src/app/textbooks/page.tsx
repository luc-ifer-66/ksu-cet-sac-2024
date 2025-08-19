import Navbar from '@/components/Navbar'
import SocialLinks from '@/components/SocialLinks'
import Footer from '@/components/Footer'
import { BookOpen } from 'lucide-react'

export default function TextbooksPage() {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <main className="relative z-10">
        <section className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Textbooks</h1>
            <p className="text-xl opacity-90">Reference Textbooks for the 2024 Scheme</p>
          </div>
        </section>
        
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="glass-card p-12 text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-3xl font-display font-bold mb-6 text-text-primary">
              Textbooks Coming Soon
            </h2>
            
            <div className="space-y-4 text-lg text-text-muted">
              <p>
                We are currently compiling a comprehensive list of textbooks for the 2024 Scheme. 
                This section will be available shortly.
              </p>
              <p>
                Reference textbooks will be made available department-wise
              </p>
            </div>
          </div>
        </div>
      </main>
      <SocialLinks />
      <Footer />
    </div>
  )
}