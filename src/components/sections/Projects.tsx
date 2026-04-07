import { projects } from '../../data/projects';
import ProjectCard from '../ui/ProjectCard';
import ScrollReveal from '../ui/ScrollReveal';

function Projects() {
  return (
    <section id="projects" className="rounded-3xl border border-camel-600/40 bg-khaki-beige-800/50 p-6 shadow-sm sm:p-8 dark:border-ebony-600 dark:bg-charcoal-brown-300/80 md:p-10">
      <ScrollReveal>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-dusty-olive-500 dark:text-dry-sage-alt-700">
          Projects
        </p>
        <h2 className="mb-8 text-3xl font-bold tracking-tight text-dark-walnut-500 sm:text-4xl dark:text-khaki-beige-900">
          Selected work
        </h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}

export default Projects;
