'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import SocialLinks from '@/components/SocialLinks'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { ChevronDown, Users, ExternalLink } from 'lucide-react'

const challengeCourses = [
  { semester: 'S2', type: 'BSC', course: 'Group Specific Mathematics-2', credits: '3', preceding: 'S1' },
  { semester: 'S2', type: 'BSC', course: 'Physics for Engineers / Chemistry for Engineers', credits: '4', preceding: 'S1' },
  { semester: 'S2', type: 'ESC', course: 'Programming in C (Group A, B)', credits: '4', preceding: 'S1' },
  { semester: 'S3', type: 'BSC', course: 'Group Specific Mathematics-3', credits: '3', preceding: 'S2' },
  { semester: 'S4', type: 'BSC', course: 'Group Specific Mathematics-4', credits: '3', preceding: 'S3' },
  { semester: 'S7', type: 'OE/PE', course: 'One OE and Two Level-3 PE Courses', credits: '3 (Credit/Course)', preceding: 'S5/S6' },
  { semester: 'S7', type: 'HMC', course: 'Elective', credits: '2', preceding: 'S4/S5/S6' },
  { semester: 'S8', type: 'OE/PE', course: 'One OE and One Level-3 PE Courses', credits: '3 (Credit/Course)', preceding: 'S5/S6/S7' },
  { semester: 'S8', type: 'HMC', course: 'Organizational Behaviour and Business Communication', credits: '1', preceding: 'S4/S5/S6/S7' },
]

export default function ChallengeCoursesPage() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown)
  }

  return (
    <div className="min-h-screen relative">
      <Navbar />
      <main className="relative z-10">
        <section className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Challenge Courses and Digital 101</h1>
            <p className="text-xl opacity-90">Information regarding the challenge courses and digital 101 offered by the college.</p>
          </div>
        </section>
        
        <div className="max-w-4xl mx-auto px-4 py-16 space-y-6">
          {/* Digital 101 */}
          <div className="glass-card overflow-hidden">
            <button
              onClick={() => toggleDropdown('digital101')}
              className="w-full p-6 bg-background-primary text-white text-left flex items-center justify-between hover:bg-primary-500/20 transition-colors"
            >
              <div className="flex items-center gap-4">
                <Image
                  src="/images/digital-101.png"
                  alt="Digital 101 Logo"
                  width={60}
                  height={60}
                  className="rounded-lg"
                />
                <span className="text-lg font-semibold">Digital 101</span>
              </div>
              <ChevronDown className={`w-5 h-5 transition-transform ${openDropdown === 'digital101' ? 'rotate-180' : ''}`} />
            </button>
            {openDropdown === 'digital101' && (
              <div className="p-6 bg-background-card/50 animate-slide-up space-y-4">
                <p className="text-text-muted leading-relaxed">
                  Digital 101 is a mandatory course for all students in the second semester of their undergraduate studies. 
                  It is a course that introduces students to the basics of digital technology and its applications.
                </p>
                <p className="text-text-muted leading-relaxed">
                  It is worth 1 credit, and has small video lectures and quizzes to evaluate your progress. 
                  To avoid issues, login with the Email you have provided to the college for registration.
                </p>
                <p className="text-text-muted leading-relaxed">
                  Registration for the exam is free and Registration codes will be provided to students 
                  by their HOD's or Staff Advisors.
                </p>
                <a
                  href="https://www.futureskillsprime.in/journey/digital-101"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent-400 hover:text-accent-300 transition-colors"
                >
                  Click here to register for Digital 101
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            )}
          </div>

          {/* Challenge Courses */}
          <div className="glass-card overflow-hidden">
            <button
              onClick={() => toggleDropdown('challenge')}
              className="w-full p-6 bg-background-primary text-white text-left flex items-center justify-between hover:bg-primary-500/20 transition-colors"
            >
              <div className="flex items-center gap-4">
                <Users className="w-8 h-8 text-accent-400" />
                <span className="text-lg font-semibold">Challenge Courses</span>
              </div>
              <ChevronDown className={`w-5 h-5 transition-transform ${openDropdown === 'challenge' ? 'rotate-180' : ''}`} />
            </button>
            {openDropdown === 'challenge' && (
              <div className="p-6 bg-background-card/50 animate-slide-up space-y-6">
                <div className="space-y-4 text-text-muted">
                  <p className="leading-relaxed">
                    A Challenge Course allows students to earn credits for certain courses without attending regular 
                    classes. Students take a Challenge Examination and are evaluated solely based on their 
                    performance in the End Semester Examination (ESE).
                  </p>
                  <p className="leading-relaxed">
                    Challenge Courses are optional. Students can use them to earn additional credits or complete 
                    required credits earlier than scheduled in the curriculum.
                  </p>
                  <p className="leading-relaxed">
                    To pass a Challenge Course and earn the corresponding credits, a student must secure a 
                    minimum grade of 'C', which corresponds to at least 60% in the ESE.
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full bg-background-primary/80 rounded-xl overflow-hidden">
                    <caption className="text-left font-semibold text-accent-400 pb-4">
                      Eligible Challenge Courses and Semester Availability
                    </caption>
                    <thead>
                      <tr className="bg-background-secondary">
                        <th className="p-4 text-left">Sl. No.</th>
                        <th className="p-4 text-left">Semester</th>
                        <th className="p-4 text-left">Course Type</th>
                        <th className="p-4 text-left">Course Title</th>
                        <th className="p-4 text-left">Credits</th>
                        <th className="p-4 text-left">Preceding Semester</th>
                      </tr>
                    </thead>
                    <tbody>
                      {challengeCourses.map((course, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-background-secondary/50' : ''}>
                          <td className="p-4">{index + 1}</td>
                          <td className="p-4">{course.semester}</td>
                          <td className="p-4">{course.type}</td>
                          <td className="p-4">{course.course}</td>
                          <td className="p-4">{course.credits}</td>
                          <td className="p-4">{course.preceding}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 text-center">
                  <p className="text-red-400 font-semibold">
                    * OE - Open Elective, PE - Program Elective
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <SocialLinks />
      <Footer />
    </div>
  )
}