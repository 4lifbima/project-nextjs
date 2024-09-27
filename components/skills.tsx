'use client'

export function SkillsComponent() {
  const skills = ['JavaScript', 'React', 'Node.js', 'Python', 'SQL', 'Git']

  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
              <span className="text-xl font-semibold text-gray-800">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}