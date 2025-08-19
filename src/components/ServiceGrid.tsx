'use client'

import Link from 'next/link'
import { Book, BookOpen, FileText, List, GraduationCap, Users, Calendar, ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'Notes',
    description: 'Comprehensive study notes for all subjects, organized by department and semester.',
    icon: Book,
    href: '/notes',
    color: 'from-blue-500 to-blue-600'
  },
  {
    title: 'Textbooks',
    description: 'Find scanned textbooks and reference materials needed for your courses.',
    icon: BookOpen,
    href: '/textbooks',
    color: 'from-emerald-500 to-emerald-600'
  },
  {
    title: 'Papers',
    description: 'Access KTU model papers, series papers, and semester papers.',
    icon: FileText,
    href: '/papers',
    color: 'from-purple-500 to-purple-600'
  },
  {
    title: 'Syllabus & Curriculum',
    description: 'Department-wise syllabus and curriculum information for all semesters and courses.',
    icon: List,
    href: '/syllabus',
    color: 'from-orange-500 to-orange-600'
  },
  {
    title: 'New Admissions',
    description: 'Information for newly admitted students under the 2024 scheme.',
    icon: GraduationCap,
    href: '/new-admissions',
    color: 'from-pink-500 to-pink-600'
  },
  {
    title: 'Minor Courses',
    description: 'Gain insight and information regarding the minor courses offered by the college.',
    icon: Users,
    href: '/minor-courses',
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    title: 'Challenge Courses and Digital 101',
    description: 'Information regarding the challenge courses and digital 101 offered by the college.',
    icon: Calendar,
    href: '/challenge-courses',
    color: 'from-cyan-500 to-cyan-600'
  },
]

export default function ServiceGrid() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.title}
              href={service.href}
              className="group glass-card p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.color} shadow-lg group-hover:shadow-xl transition-shadow`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-display font-bold text-text-primary group-hover:text-accent-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-text-muted leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex items-center gap-2 text-accent-500 font-semibold group-hover:gap-3 transition-all">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}