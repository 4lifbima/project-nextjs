'use client'

import Image from 'next/image'

export function ProjectsComponent() {
  const projects = [
    { title: 'E-commerce Website', image: '/placeholder.svg?height=200&width=300' },
    { title: 'Task Management App', image: '/placeholder.svg?height=200&width=300' },
    { title: 'Weather Dashboard', image: '/placeholder.svg?height=200&width=300' },
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <Image src={project.image} alt={project.title} width={300} height={200} className="w-full" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}