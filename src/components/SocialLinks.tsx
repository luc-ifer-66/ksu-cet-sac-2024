'use client'

import { Instagram, MessageCircle, Mail } from 'lucide-react'
import { useState } from 'react'

export default function SocialLinks() {
  const [showInstagramPopup, setShowInstagramPopup] = useState(false)

  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-3">
      {/* Instagram with popup */}
      <div className="relative">
        <button
          onMouseEnter={() => setShowInstagramPopup(true)}
          onMouseLeave={() => setShowInstagramPopup(false)}
          className="p-3 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 text-white shadow-lg hover:scale-110 transition-all duration-200"
          aria-label="Instagram"
        >
          <Instagram className="w-5 h-5" />
        </button>
        
        {showInstagramPopup && (
          <div className="absolute bottom-full left-0 mb-2 p-2 bg-background-card backdrop-blur-md rounded-lg border border-white/10 shadow-xl min-w-48">
            <a
              href="https://www.instagram.com/studentassistcell_cet/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-2 rounded-md hover:bg-white/10 transition-colors text-sm"
            >
              <Instagram className="w-4 h-4" />
              KSU Student Assist Cell
            </a>
            <a
              href="https://www.instagram.com/ksu.cet/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-2 rounded-md hover:bg-white/10 transition-colors text-sm"
            >
              <Instagram className="w-4 h-4" />
              KSU CET
            </a>
          </div>
        )}
      </div>

      {/* WhatsApp */}
      <a
        href="https://chat.whatsapp.com/JYDuhIWcdQLH2mud9LkkuU"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg hover:scale-110 transition-all duration-200"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
      </a>

      {/* Email */}
      <a
        href="mailto:ksucetsac2024@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-gradient-to-br from-red-500 to-red-600 text-white shadow-lg hover:scale-110 transition-all duration-200"
        aria-label="Email"
      >
        <Mail className="w-5 h-5" />
      </a>
    </div>
  )
}