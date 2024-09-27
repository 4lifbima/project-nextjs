'use client'

import Header from '../components/header'
import Hero from '../components/hero'
import Skills from '../components/skills'
import Projects from '../components/projects'
import Contact from '../components/contact'
import Footer from '../components/footer'

export function Page() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}