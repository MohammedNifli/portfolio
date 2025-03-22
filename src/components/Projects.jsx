import React from "react";
import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <section id="projects" className="py-16 max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Projects
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6"></div>
        <p className="text-xl text-stone-300 max-w-2xl mx-auto">
          Here are some of the projects I've worked on that showcase my skills.
        </p>
      </div>

      <div className="flex flex-wrap gap-6 justify-center">
        {PROJECTS.map((project, ind) => (
          <div
            key={ind}
            className="w-full md:w-80 bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] flex flex-col"
          >
            <div className="mb-4 flex justify-center">
              <img
                src={project.image}
                width={200}
                height={200}
                alt={project.title}
                className="rounded-lg shadow-md hover:shadow-xl transition-all duration-300 object-cover"
              />
            </div>

            <div className="flex-1 flex flex-col">
              <h3 className="text-xl font-bold mb-3 text-white">
                {project.title}
              </h3>
              <p className="mb-6 text-stone-300 text-sm">
                {project.description}
              </p>

              <div className="mb-6 flex flex-wrap">
                {project.technologies.map((tech, techInd) => (
                  <span
                    key={techInd}
                    className="mr-2 mb-2 rounded-full bg-stone-900 px-3 py-1 text-xs text-stone-300 border border-stone-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-2 mt-auto">
                <a
                  href={project.link_live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  View Demo
                </a>
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-lg bg-gray-700 text-white text-sm font-medium hover:bg-gray-600 transition-colors"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
