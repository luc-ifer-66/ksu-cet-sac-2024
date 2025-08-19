'use client'

import { Phone, User, Code } from 'lucide-react'

const contacts = [
  { name: 'Amina Jubair', phone: '9037786170' },
  { name: 'Daris Benny', phone: '9778135924' },
  { name: 'Devan', phone: '8111835721' },
  { name: 'Merlin Shiby', phone: '9072492427' },
  { name: 'Anand Maheshwar', phone: '9447839911' },
  { name: 'Mareo Manoj', phone: '7025458339', isDeveloper: true },
  { name: 'Mariam Jo', phone: '9496622452' },
  { name: 'Noel Tom', phone: '6238999360' },
  { name: 'Yamin Beck', phone: '7012837399' },
]

export default function ContactSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-display font-bold text-center mb-12 gradient-text">
          Contact Us
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {contacts.map((contact, index) => (
            <div
              key={contact.name}
              className="glass-card p-4 hover:scale-105 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="relative">
                  <div className="p-3 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 shadow-lg">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  {contact.isDeveloper && (
                    <div className="absolute -top-1 -right-1 p-1 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg">
                      <Code className="w-3 h-3 text-white" />
                    </div>
                  )}
                </div>
                
                <h3 className="font-semibold text-text-primary text-sm">
                  {contact.name}
                </h3>
                
                <a
                  href={`tel:${contact.phone}`}
                  className="flex items-center gap-2 text-text-muted hover:text-accent-400 transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  {contact.phone}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}