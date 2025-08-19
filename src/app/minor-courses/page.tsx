'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import SocialLinks from '@/components/SocialLinks'
import Footer from '@/components/Footer'
import { Info, X, FileText, ExternalLink } from 'lucide-react'

type MinorProgram = {
  value: string;
  label: string;
  pdf: string;
};

type DepartmentWithMinors = {
  minors: MinorProgram[];
};

type DepartmentWithSingle = {
  label: string;
  pdf: string;
};

type MinorPrograms = {
  aei: DepartmentWithSingle;
  cse: DepartmentWithMinors;
  ece: DepartmentWithSingle;
  eee: DepartmentWithMinors;
  ie: DepartmentWithSingle;
  me: DepartmentWithMinors;
};

const minorPrograms: MinorPrograms = {
  aei: {
    label: 'Minor in Applied Electronics and Instrumentation.',
    pdf: '/pdfs/AEI/AE Applied Electronics and Instrumentation.pdf'
  },
  cse: {
    minors: [
      { 
        value: 'ai', 
        label: 'Minor in Artificial Intelligence', 
        pdf: '/pdfs/CSE/CS Artificial Intelligence.pdf' 
      },
      { 
        value: 'cs', 
        label: 'Minor in Computer Science', 
        pdf: '/pdfs/CSE/CS Computer Science and Engineering.pdf' 
      }
    ]
  },
  ece: {
    label: 'Minor in Electronics and Communication Engineering.',
    pdf: '/pdfs/ECE/ECE Electronics and Communication Engg.pdf'
  },
  eee: {
    minors: [
      { 
        value: 'control', 
        label: 'Minor in Control Engineering', 
        pdf: '/pdfs/EEE/EEE Control Engineering.pdf' 
      },
      { 
        value: 'energy', 
        label: 'Minor in Energy Engineering', 
        pdf: '/pdfs/EEE/EEE Energy Engineering.pdf' 
      },
      { 
        value: 'power', 
        label: 'Minor in Power Converters & Drives', 
        pdf: '/pdfs/EEE/EEE POWER CONVERTERS & DRIVES.pdf' 
      }
    ]
  },
  ie: {
    label: 'Minor in Industrial and Systems Engineering.',
    pdf: '/pdfs/IE/IE Industrial and Systems Engineering.pdf'
  },
  me: {
    minors: [
      { 
        value: 'fin', 
        label: 'Minor in Financial Management', 
        pdf: '/pdfs/ME/ME Financial Management (Additional Offer).pdf' 
      },
      { 
        value: 'isdm', 
        label: 'Minor in Intelligent Systems Design Manufacturing', 
        pdf: '/pdfs/ME/ME Intelligent Systems Design Manufacturing.pdf' 
      }
    ]
  }
}

const generalInfo = [
  'Those who complete the minor scheme along with regular B-Tech Programme will get an additional minor degree.',
  'Minor Programme starts in Semester 3.',
  'Enrolment to the minor programme is NOT COMPULSORY.',
  'Students are generally not allowed to register for minors offered by their parent branches. Additionally, students are prohibited from opting for minor courses if there is more than 30% syllabus content overlap between courses listed in the major and minor programmes.',
  'Some of the slots for the course will be outside regular working hours (before/after regular hours)',
  'There shall not be any supplementary examinations for the theory courses listed in the Minor curriculum. If a student fails in any of the theory courses, they shall be permitted to register for the alternate MOOC course specified in the Minor curriculum.',
  'Each department might offer one or more minor programs. Each minor program contains courses in a specific domain.',
]

export default function MinorCoursesPage() {
  const [selectedDepartment, setSelectedDepartment] = useState('')
  const [showGeneralInfo, setShowGeneralInfo] = useState(false)

  const handleDepartmentChange = (dept: string) => {
    setSelectedDepartment(dept)
  }

  return (
    <div className="min-h-screen relative">
      <Navbar />
      <main className="relative z-10">
        <section className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Minor Courses</h1>
            <p className="text-xl opacity-90">Access information and resources for Minor Courses offered at CET.</p>
          </div>
        </section>

        {/* What is Minor Info */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="glass-card p-6 text-center">
            <h2 className="text-xl font-display font-bold mb-4 text-text-primary">
              What is a Minor in Engineering?
            </h2>
            <p className="text-lg text-text-muted leading-relaxed">
              A B.Tech. Minor allows you to take additional courses outside your main branch of study. 
              This helps you gain expertise in a secondary engineering field, expand your knowledge, 
              and improve your career prospects by diversifying your skills and opening up more 
              opportunities in multidisciplinary areas.
            </p>
          </div>
        </div>
        
        <div className="max-w-2xl mx-auto px-4 pb-16 space-y-6">
          {/* General Information Button */}
          <button
            onClick={() => setShowGeneralInfo(true)}
            className="w-full btn-primary text-lg py-4 flex items-center justify-center gap-2"
          >
            <Info className="w-5 h-5" />
            View General Information
          </button>

          {/* Department Selector */}
          <select
            value={selectedDepartment}
            onChange={(e) => handleDepartmentChange(e.target.value)}
            className="w-full p-4 text-lg bg-background-card border border-primary-500/30 rounded-xl text-white focus:border-accent-500 focus:outline-none transition-colors"
          >
            <option value="">-- Choose Department --</option>
            <option value="aei">Applied Electronics & Instrumentation (AEI)</option>
            <option value="cse">Computer Science & Engineering (CSE)</option>
            <option value="ece">Electronics & Communication Engineering (ECE)</option>
            <option value="eee">Electrical & Electronics Engineering (EEE)</option>
            <option value="ie">Industrial Engineering (IE)</option>
            <option value="me">Mechanical Engineering (ME)</option>
          </select>

          {/* Department Info Display */}
          {selectedDepartment && (
            <div className="animate-slide-up">
              {(() => {
                const dept = minorPrograms[selectedDepartment as keyof MinorPrograms];
                if ('minors' in dept) {
                  // Department has multiple minors
                  return (
                    <div className="grid gap-4">
                      {dept.minors.map((minor, index) => (
                        <div key={index} className="glass-card p-6 text-center">
                          <h3 className="text-lg font-semibold mb-4 text-text-primary">{minor.label}</h3>
                          <a
                            href={minor.pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 btn-primary"
                          >
                            <FileText className="w-4 h-4" />
                            View Curriculum
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      ))}
                    </div>
                  );
                } else {
                  // Department has single minor
                  return (
                    <div className="glass-card p-6 text-center">
                      <h3 className="text-lg font-semibold mb-4 text-text-primary">
                        {dept.label}
                      </h3>
                      <a
                        href={dept.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 btn-primary"
                      >
                        <FileText className="w-4 h-4" />
                        View Curriculum
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  );
                }
              })()}
            </div>
          )}
        </div>

        {/* General Info Modal */}
        {showGeneralInfo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <div className="bg-background-primary rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
              <div className="sticky top-0 bg-background-primary p-6 border-b border-white/10 flex items-center justify-between">
                <h2 className="text-xl font-display font-bold text-primary-500">General Information</h2>
                <button
                  onClick={() => setShowGeneralInfo(false)}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-6 overflow-y-auto max-h-[70vh] space-y-6">
                <ol className="space-y-4">
                  {generalInfo.map((info, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </span>
                      <span className="text-text-muted leading-relaxed">{info}</span>
                    </li>
                  ))}
                </ol>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-primary-500">Credit Distribution</h3>
                  <div className="bg-primary-500/10 p-4 rounded-lg">
                    <p className="text-text-muted mb-3">The student has to complete 15 CREDITS TO GET THE MINOR DEGREE:</p>
                    <ul className="space-y-2 text-sm text-text-muted">
                      <li>• Semester 3: 4 Credits</li>
                      <li>• Semester 4: 4 Credits</li>
                      <li>• Semester 5: 4 Credits</li>
                      <li>• Semester 6: 3 Credits</li>
                      <li>• Maximum two MOOC courses approved by the University – 7 to 8 credits</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-primary-500">Allotment Process</h3>
                  <ol className="space-y-3">
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-accent-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                      <span className="text-text-muted">You can give maximum 7 choices for Minor programs.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-accent-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                      <span className="text-text-muted">Allotment is based on your choice and your SGPA in the first semester.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-accent-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                      <span className="text-text-muted">Re-allotment requests will not be considered.</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <SocialLinks />
      <Footer />
    </div>
  )
}