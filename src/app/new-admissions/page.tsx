'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import SocialLinks from '@/components/SocialLinks'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { ChevronDown, X, FileText, Users } from 'lucide-react'

const departments = [
  {
    name: 'Applied Electronics & Instrumentation (AEI)',
    description: 'AEI blends electronics engineering with instrumentation and control systems. Students gain hands-on experience in labs, learning about sensors, automation, and process control. The department emphasizes both theory and practical skills, preparing graduates for roles in manufacturing, automation, and research industries.'
  },
  {
    name: 'Civil Engineering (CE)',
    description: 'Civil Engineering focuses on designing, constructing, and maintaining infrastructure. The curriculum covers structures, geotechnics, transportation, and environment. Students benefit from labs and fieldwork, gaining practical insights and industry exposure for careers in construction, consultancy, and government.'
  },
  {
    name: 'Computer Science & Engineering (CSE)',
    description: 'CSE provides a strong foundation in computer science, programming, and system design. Students explore AI, data science, cybersecurity, and software engineering. The curriculum is updated to reflect industry trends, preparing graduates for tech careers and higher studies.'
  },
  {
    name: 'Electronics & Communication Engineering (ECE)',
    description: 'ECE focuses on electronic devices, communication systems, and embedded technologies. The program covers digital communication, VLSI, and signal processing. Students engage in hands-on projects and workshops, preparing for careers in telecommunications and electronics industries.'
  },
  {
    name: 'Electrical & Electronics Engineering (EEE)',
    description: 'EEE covers electrical machines, power systems, electronics, and control engineering. Students receive practical training in labs and through internships. The department emphasizes innovation and problem-solving, preparing graduates for roles in power, automation, and electronics sectors.'
  },
  {
    name: 'Industrial Engineering (IE)',
    description: 'IE specializes in optimizing processes, systems, and organizations. The curriculum includes operations research, production planning, and quality control. Students learn to improve efficiency and safety, preparing for careers in manufacturing, logistics, consulting, and management.'
  },
  {
    name: 'Mechanical Engineering (ME)',
    description: 'ME provides grounding in mechanical design, thermodynamics, manufacturing, and materials science. Students participate in workshops and industry projects. The curriculum focuses on sustainability and emerging technologies, preparing graduates for careers in automotive, energy, and manufacturing.'
  },
  {
    name: 'Electrical and Computer Engineering (EL)',
    description: 'EL integrates electrical engineering with computer systems, covering topics like embedded systems, digital electronics, microprocessors, and computer networks. Students gain practical experience in labs and projects, preparing for careers in automation, IT, electronics, and related industries. The curriculum emphasizes innovation, problem-solving, and interdisciplinary skills.'
  },
]

const admissionSteps = [
  'Pay Fee to CEE (Commissioner for Entrance Examinations) - ₹1000-9000 (fee changes based on Reservations)',
  'Report to the allotted college on the specified date with all required documents.',
  'Printed Receipts of funds specified below: PTA Fund: ₹15000/- (B.Tech) / ₹17500/- (B.Arch), Bus development fund: ₹2000/-, CETAA Membership Fund: ₹1000/-',
  'Submit original certificates and attested photocopies for verification',
  'Complete the college admission formalities and attend the orientation session.'
]

const requiredDocuments = [
  'KEAM Allotment Memo',
  'KEAM Datasheet',
  'SSLC/10th Certificate/Birth Certificate (Proof of Age)',
  'Plus Two/12th Mark List',
  'Transfer Certificate (TC) & Conduct Certificate',
  'Migration Certificate (if applicable)',
  'Physical Fitness Certificate in prescribed format',
  'Community/Caste Certificate (if applicable)',
  'Income Certificate (if applicable)',
  'Passport-size Photographs',
  'Fee and Fund Remittance Receipts',
  'Any other relevant documents'
]

export default function NewAdmissionsPage() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [showImageModal, setShowImageModal] = useState(false)

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown)
  }

  return (
    <div className="min-h-screen relative">
      <Navbar />
      <main className="relative z-10">
        <section className="bg-gradient-to-r from-pink-500 to-rose-500 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">New Admissions</h1>
            <p className="text-xl opacity-90 mb-2">Information for newly admitted students under the 2024 scheme</p>
            <h3 className="text-2xl font-semibold">KEAM 2024 Last Ranks</h3>
          </div>
        </section>
        
        <div className="max-w-4xl mx-auto px-4 py-16 space-y-6">
          {/* KEAM Last Ranks */}
          <div className="glass-card overflow-hidden">
            <button
              onClick={() => toggleDropdown('ranks')}
              className="w-full p-6 bg-background-primary text-white text-left flex items-center justify-between hover:bg-primary-500/20 transition-colors"
            >
              <span className="text-lg font-semibold">KEAM 2024 Last Ranks</span>
              <ChevronDown className={`w-5 h-5 transition-transform ${openDropdown === 'ranks' ? 'rotate-180' : ''}`} />
            </button>
            {openDropdown === 'ranks' && (
              <div className="p-6 bg-background-card/50 animate-slide-up">
                <div 
                  className="relative w-full max-w-2xl mx-auto cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                  onClick={() => setShowImageModal(true)}
                >
                  <Image
                    src="/images/modal-image.jpg"
                    alt="KEAM 2024 Last Ranks"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Admission Procedures */}
          <div className="glass-card overflow-hidden">
            <button
              onClick={() => toggleDropdown('procedures')}
              className="w-full p-6 bg-background-primary text-white text-left flex items-center justify-between hover:bg-primary-500/20 transition-colors"
            >
              <span className="text-lg font-semibold">Admission Procedures & Documents</span>
              <ChevronDown className={`w-5 h-5 transition-transform ${openDropdown === 'procedures' ? 'rotate-180' : ''}`} />
            </button>
            {openDropdown === 'procedures' && (
              <div className="p-6 bg-background-card/50 animate-slide-up space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-primary-500 mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Admission Steps
                  </h4>
                  <ol className="space-y-3">
                    {admissionSteps.map((step, index) => (
                      <li key={index} className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </span>
                        <span className="text-text-muted">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-primary-500 mb-4">Required Documents</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {requiredDocuments.map((doc, index) => (
                      <li key={index} className="flex items-center gap-2 text-text-muted">
                        <div className="w-2 h-2 bg-accent-500 rounded-full flex-shrink-0" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Department Descriptions */}
          <div className="glass-card overflow-hidden">
            <button
              onClick={() => toggleDropdown('departments')}
              className="w-full p-6 bg-background-primary text-white text-left flex items-center justify-between hover:bg-primary-500/20 transition-colors"
            >
              <span className="text-lg font-semibold">Department Descriptions</span>
              <ChevronDown className={`w-5 h-5 transition-transform ${openDropdown === 'departments' ? 'rotate-180' : ''}`} />
            </button>
            {openDropdown === 'departments' && (
              <div className="p-6 bg-background-card/50 animate-slide-up">
                <div className="space-y-4">
                  {departments.map((dept, index) => (
                    <div key={index} className="p-4 bg-primary-500/10 border-l-4 border-primary-500 rounded-lg">
                      <h4 className="font-semibold text-primary-400 mb-2">{dept.name}</h4>
                      <p className="text-text-muted leading-relaxed">{dept.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Image Modal */}
        {showImageModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
            <div className="relative max-w-6xl max-h-[90vh] m-4">
              <button
                onClick={() => setShowImageModal(false)}
                className="absolute -top-12 right-0 p-2 rounded-full bg-background-primary text-white hover:bg-primary-500 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <Image
                src="/images/modal-image.jpg"
                alt="KEAM 2024 Last Ranks"
                width={1200}
                height={900}
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
          </div>
        )}
      </main>
      <SocialLinks />
      <Footer />
    </div>
  )
}