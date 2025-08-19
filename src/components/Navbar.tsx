'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Home, Book, BookOpen, FileText, List, GraduationCap, Users, Info, Calendar } from 'lucide-react'

const navItems = [
  { href: '/', icon: Home, label: 'Home' },
  { href: '/notes', icon: Book, label: 'Notes' },
  { href: '/textbooks', icon: BookOpen, label: 'Textbooks' },
  { href: '/papers', icon: FileText, label: 'Papers' },
  { href: '/syllabus', icon: List, label: 'Syllabus & Curriculum' },
  { href: '/new-admissions', icon: GraduationCap, label: 'New Admissions' },
  { href: '/minor-courses', icon: Users, label: 'Minor Courses' },
  { href: '/about', icon: Info, label: 'About Us' },
  { href: '/challenge-courses', icon: Calendar, label: 'Challenge Courses and Digital 101' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  if (!mounted) return null

  return (
    <nav className="sticky top-0 z-50 w-full bg-background-primary/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full overflow-hidden shadow-lg">
              <Image
                src="/images/ksu logo white.png"
                alt="KSU Logo"
                width={40}
                height={40}
                className="object-cover"
                priority
              />
            </div>
            <span className="font-display font-bold text-lg text-accent-500 group-hover:text-accent-400 transition-colors">
              KSU Student Assist Cell
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative flex items-center justify-center p-3 rounded-xl text-white/80 hover:text-white hover:bg-primary-500/20 transition-all duration-200"
              >
                <item.icon className="w-5 h-5" />
                <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto bg-primary-500 text-white text-sm font-medium px-3 py-1.5 rounded-lg whitespace-nowrap transition-all duration-200 transform scale-95 group-hover:scale-100">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-white/80 hover:text-white hover:bg-primary-500/20 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background-primary/98 backdrop-blur-md border-b border-white/10 shadow-xl">
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/80 hover:text-white hover:bg-primary-500/20 transition-all duration-200"
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}