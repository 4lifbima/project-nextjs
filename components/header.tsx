'use client'

import Link from 'next/link'

export function HeaderComponent() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800">DevPortfolio</div>
          <div className="hidden md:flex space-x-4">
            <Link href="#home" className="text-gray-800 hover:text-gray-600">Home</Link>
            <Link href="#skills" className="text-gray-800 hover:text-gray-600">Skills</Link>
            <Link href="#projects" className="text-gray-800 hover:text-gray-600">Projects</Link>
            <Link href="#contact" className="text-gray-800 hover:text-gray-600">Contact</Link>
          </div>
          <div className="md:hidden">
            <button className="text-gray-800 hover:text-gray-600">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}