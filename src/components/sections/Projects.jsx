import { projects } from "../../data/projects";
import './Projects.css'
export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">$ ls projects/</h2>

      <div className="projects">
        {projects.map((project) => (
          <div key={project.id} className="project">
            <div className="project-header">
              <span className={`project-status ${project.status}`}>
                [{project.status}]
              </span>
              <h3 className="project-name">{project.name}</h3>
            </div>

            <p className="project-desc">{project.description}</p>

            <div className="project-stack">
              {project.stack.map((tech) => (
                <span key={tech} className="tech">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
