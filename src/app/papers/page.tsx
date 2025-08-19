import Navbar from '@/components/Navbar'
import SocialLinks from '@/components/SocialLinks'
import Footer from '@/components/Footer'
import DepartmentGrid from '@/components/DepartmentGrid'

const departments = [
  { name: 'Computer Science and Engineering', href: '/papers/cse', code: 'CSE' },
  { name: 'Electronics and Communication Engineering', href: '/papers/ece', code: 'ECE' },
  { name: 'Electrical and Electronics Engineering', href: '/papers/eee', code: 'EEE' },
  { name: 'Electrical and Computer Engineering', href: '/papers/ecp', code: 'ECP' },
  { name: 'Applied Electronics and Instrumentation', href: '/papers/aei', code: 'AEI' },
  { name: 'Mechanical Engineering', href: '/papers/me', code: 'ME' },
  { name: 'Civil Engineering', href: '/papers/ce', code: 'CE' },
  { name: 'Industrial Engineering', href: '/papers/ie', code: 'IE' },
  { name: 'B.Arch', href: '/papers/arch', code: 'ARCH' },
]

export default function PapersPage() {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <main className="relative z-10">
        <section className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Question Papers</h1>
            <p className="text-xl opacity-90 mb-2">Previous year question papers from CET, series and semester papers.</p>
            <p className="text-lg opacity-80">Select a department to access question papers by semester and subject.</p>
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