'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function CampusImage() {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <section className="flex justify-center items-center my-8 px-4">
      <div className="relative w-full max-w-4xl">
        <div className={`relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <Image
            src="/images/CET.png"
            alt="CET Campus"
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
            priority
            onLoad={() => setImageLoaded(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </div>
    </section>
  )
}