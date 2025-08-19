'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import SocialLinks from '@/components/SocialLinks'
import Footer from '@/components/Footer'
import { FileText, X } from 'lucide-react'

const departments = [
  { value: 'cse', label: 'CSE' },
  { value: 'ece', label: 'ECE' },
  { value: 'eee', label: 'EEE' },
  { value: 'aei', label: 'AEI' },
  { value: 'el', label: 'EL' },
  { value: 'ce', label: 'CE' },
  { value: 'ie', label: 'IE' },
  { value: 'me', label: 'ME' },
]

const semesters = [
  { value: '1', label: 'Semester 1' },
  { value: '2', label: 'Semester 2' },
  { value: '3', label: 'Semester 3' },
  { value: '4', label: 'Semester 4' },
  { value: '5', label: 'Semester 5' },
  { value: '6', label: 'Semester 6' },
  { value: '7', label: 'Semester 7' },
  { value: '8', label: 'Semester 8' },
]

export default function SyllabusPage() {
  const [selectedType, setSelectedType] = useState('')
  const [selectedDepartment, setSelectedDepartment] = useState('')
  const [selectedSemester, setSelectedSemester] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [pdfUrl, setPdfUrl] = useState('')

  const getFileUrl = (type: string, dept: string, sem?: string) => {
    if (type === 'curriculum') {
      return `/pdfs/${dept}/${dept}.pdf`
    }
    return `/pdfs/${dept}/s${sem}.pdf`
  }

  const handleView = () => {
    let url = ''
    if (selectedType === 'syllabus') {
      url = getFileUrl('syllabus', selectedDepartment, selectedSemester)
    } else if (selectedType === 'curriculum') {
      url = getFileUrl('curriculum', selectedDepartment)
    }
    setPdfUrl(url)
    setShowModal(true)
  }

  const canView = selectedType && selectedDepartment && (selectedType === 'curriculum' || selectedSemester)

  return (
    <div className="min-h-screen relative">
      <Navbar />
      <main className="relative z-10">
        <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Syllabus & Curriculum</h1>
            <p className="text-xl opacity-90">Explore the detailed syllabus and curriculum for all departments at CET.</p>
          </div>
        </section>
        
        <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-16">
          <div className="space-y-8 w-full max-w-md">
            {/* Type Selection */}
            <div>
              <select
                value={selectedType}
                onChange={(e) => {
                  setSelectedType(e.target.value)
                  setSelectedDepartment('')
                  setSelectedSemester('')
                }}
                className="w-full p-4 text-lg bg-background-card border border-primary-500/30 rounded-xl text-white focus:border-accent-500 focus:outline-none transition-colors"
              >
                <option value="">Select Type</option>
                <option value="syllabus">Syllabus</option>
                <option value="curriculum">Curriculum</option>
              </select>
            </div>

            {/* Department Selection */}
            {selectedType && (
              <div className="animate-slide-up">
                <select
                  value={selectedDepartment}
                  onChange={(e) => {
                    setSelectedDepartment(e.target.value)
                    setSelectedSemester('')
                  }}
                  className="w-full p-4 text-lg bg-background-card border border-primary-500/30 rounded-xl text-white focus:border-accent-500 focus:outline-none transition-colors"
                >
                  <option value="">Select Department</option>
                  {departments.map((dept) => (
                    <option key={dept.value} value={dept.value}>
                      {dept.label}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Semester Selection (only for syllabus) */}
            {selectedType === 'syllabus' && selectedDepartment && (
              <div className="animate-slide-up">
                <select
                  value={selectedSemester}
                  onChange={(e) => setSelectedSemester(e.target.value)}
                  className="w-full p-4 text-lg bg-background-card border border-primary-500/30 rounded-xl text-white focus:border-accent-500 focus:outline-none transition-colors"
                >
                  <option value="">Select Semester</option>
                  {semesters.map((sem) => (
                    <option key={sem.value} value={sem.value}>
                      {sem.label}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* View Button */}
            {canView && (
              <div className="animate-slide-up">
                <button
                  onClick={handleView}
                  className="w-full btn-primary text-lg py-4 flex items-center justify-center gap-2"
                >
                  <FileText className="w-5 h-5" />
                  View
                </button>
              </div>
            )}
          </div>
        </div>

        {/* PDF Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
            <div className="relative w-full max-w-6xl h-full max-h-[90vh] m-4">
              <button
                onClick={() => setShowModal(false)}
                className="absolute -top-12 right-0 p-2 rounded-full bg-background-primary text-white hover:bg-primary-500 transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>
              <iframe
                src={pdfUrl}
                className="w-full h-full rounded-xl border-none bg-background-secondary shadow-2xl"
                title="PDF Viewer"
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