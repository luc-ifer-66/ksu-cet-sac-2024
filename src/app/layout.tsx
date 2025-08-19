import type { Metadata } from 'next'
import { Inter, Lexend } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const lexend = Lexend({ 
  subsets: ['latin'],
  variable: '--font-lexend',
})

export const metadata: Metadata = {
  title: 'KSU Student Assist Cell - 2024 Scheme',
  description: 'Your all-in-one resource hub for CET students',
  keywords: 'KSU, CET, student resources, notes, textbooks, papers, syllabus',
  authors: [{ name: 'KSU Student Assist Cell' }],
  openGraph: {
    title: 'KSU Student Assist Cell - 2024 Scheme',
    description: 'Your all-in-one resource hub for CET students',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lexend.variable}`}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}