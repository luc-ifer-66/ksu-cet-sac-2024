import Navbar from '@/components/Navbar'
import SocialLinks from '@/components/SocialLinks'
import Footer from '@/components/Footer'
import DepartmentGrid from '@/components/DepartmentGrid'

const departments = [
  { name: 'Computer Science and Engineering', href: '/notes/cse', code: 'CSE' },
  { name: 'Electronics and Communication Engineering', href: '/notes/ece', code: 'ECE' },
  { name: 'Electrical and Electronics Engineering', href: '/notes/eee', code: 'EEE' },
  { name: 'Electrical and Computer Engineering', href: '/notes/ecp', code: 'ECP' },
  { name: 'Applied Electronics and Instrumentation', href: '/notes/aei', code: 'AEI' },
  { name: 'Mechanical Engineering', href: '/notes/me', code: 'ME' },
  { name: 'Civil Engineering', href: '/notes/ce', code: 'CE' },
  { name: 'Industrial Engineering', href: '/notes/ie', code: 'IE' },
]

export default function NotesPage() {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <main className="relative z-10">
        <section className="bg-gradient-to-r from-primary-500 to-accent-500 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Study Notes</h1>
            <p className="text-xl opacity-90 mb-2">Comprehensive study notes from the students of CET.</p>
            <p className="text-lg opacity-80">Will be updated regularly, as each semester progresses.</p>
          </div>
        </section>
        
        <div className="max-w-6xl mx-auto px-4 py-16">
          <DepartmentGrid departments={departments} />
        </div>
      </main>
      <SocialLinks />
      <Footer />
    </div>
  )
}