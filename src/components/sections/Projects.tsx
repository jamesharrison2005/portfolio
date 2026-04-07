import { projects } from '../../data/projects';
import ProjectCard from '../ui/ProjectCard';

function Projects() {
  return (
    <section id="projects" className="py-12">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">Projects</p>
      <h2 className="mb-8 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
        Selected work
      </h2>
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
