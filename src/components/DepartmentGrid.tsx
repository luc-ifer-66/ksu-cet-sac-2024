'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface Department {
  name: string
  href: string
  code: string
}

interface DepartmentGridProps {
  departments: Department[]
}

export default function DepartmentGrid({ departments }: DepartmentGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {departments.map((dept, index) => (
        <Link
          key={dept.code}
          href={dept.href}
          className="group glass-card p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl animate-slide-up"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
              <span className="text-white font-bold text-lg">{dept.code}</span>
            </div>
            
            <h3 className="text-lg font-display font-bold text-text-primary group-hover:text-accent-400 transition-colors">
              {dept.name}
            </h3>
            
            <div className="flex items-center justify-center gap-2 text-accent-500 font-semibold group-hover:gap-3 transition-all">
              <span>View Notes</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}