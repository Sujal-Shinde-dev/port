import React from "react";

function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A fully responsive e-commerce site built with React and Node.js.",
      link: "#",
    },
    {
      title: "Weather App",
      description: "A weather forecasting app using React and OpenWeather API.",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="mt-2 text-gray-600">{project.description}</p>
              <a href={project.link} className="text-blue-500 mt-4 block">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
