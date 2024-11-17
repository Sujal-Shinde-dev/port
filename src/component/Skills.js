import React from "react";

function Skills() {
  const skills = ["React", "Node.js", "JavaScript", "Tailwind CSS", "MongoDB", "Git"];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-600 px-4 py-2 rounded shadow text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

