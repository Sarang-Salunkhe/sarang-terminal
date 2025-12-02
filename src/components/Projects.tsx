import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Food Delivery Platform",
    description:
      "A full-featured food delivery web application built for Web Fusion Competition. Includes restaurant listings, menus, cart & live order tracking.",
    technologies: ["HTML", "CSS", "Bootstrap", "Django"],
    image:
      "https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "#",
    github: "#",
  },
  {
    title: "Photopix",
    description:
      "An immersive photography portfolio with a dark theme, smooth animations and interactive carousel effects.",
    technologies: ["HTML", "CSS", "JavaScript", "Animations"],
    image:
      "https://images.pexels.com/photos/1983032/pexels-photo-1983032.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "#",
    github: "#",
  },
  {
    title: "YTGrav",
    description:
      "A sleek YouTube video downloader enabling multi-format & multi-quality downloads.",
    technologies: ["React", "Tailwind CSS", "Django REST API"],
    image:
      "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "#",
    github: "#",
  },
];

function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Featured{" "}
          <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-400">
          A collection of my recent work and personal projects
        </p>

        {/* Small hint message */}
        <p className="text-center text-sm italic text-gray-500 dark:text-gray-400 mb-12">
          Click on a project card to view demo and code.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setActiveProject(project)}
              className="group cursor-pointer bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 dark:group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 text-blue-700 dark:text-cyan-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Popup Modal */}
        {activeProject && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl w-[90%] max-w-lg shadow-2xl border border-cyan-400">
              <h3 className="text-2xl font-bold mb-3">{activeProject.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{activeProject.description}</p>

              <div className="flex gap-4 justify-center mb-6">
                <a
                  href={activeProject.link}
                  target="_blank"
                  className="px-6 py-3 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white"
                >
                  <ExternalLink size={18} /> Demo
                </a>
                <a
                  href={activeProject.github}
                  target="_blank"
                  className="px-6 py-3 flex items-center gap-2 bg-gray-800 hover:bg-black rounded-lg text-white"
                >
                  <Github size={18} /> Code
                </a>
              </div>

              <button
                onClick={() => setActiveProject(null)}
                className="mx-auto block text-sm text-red-400 hover:text-red-500"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
