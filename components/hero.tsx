'use client'

import Image from 'next/image'

export function HeroComponent() {
  return (
    <section id="home" className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm John Doe</h1>
          <p className="text-xl mb-6">A passionate Full Stack Developer</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            View My Work
          </button>
        </div>
        <div className="md:w-1/2">
          <Image 
            src="/placeholder.svg?height=300&width=300" 
            alt="John Doe" 
            width={300} 
            height={300}
            className="rounded-full mx-auto"
          />
        </div>
      </div>
    </section>
  )
}