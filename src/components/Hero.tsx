'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative flex items-center justify-center py-16 px-4">
      <div className="text-center space-y-6 animate-slide-up">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-shadow">
          <span className="gradient-text">KSU Student Assist Cell 2025</span>
        </h1>
        <p className="text-xl md:text-2xl text-text-muted font-medium max-w-2xl mx-auto">
          Your all-in-one resource hub for CET students
        </p>
      </div>
    </section>
  )
}