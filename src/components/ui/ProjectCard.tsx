import type { Project } from '../../types/project';

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-camel-600/60 bg-khaki-beige-800/80 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-ebony-600 dark:bg-charcoal-brown-300/90">
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <h3 className="mb-2 text-xl font-semibold text-dark-walnut-500 dark:text-khaki-beige-900">
          {project.title}
        </h3>
        <p className="mb-5 leading-relaxed text-saddle-brown-500 dark:text-camel-900">
          {project.description}
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          {project.tech.map((tag) => (
            <span
              key={`${project.title}-${tag}`}
              className="rounded-full bg-camel-700/70 px-3 py-1 text-xs font-medium text-saddle-brown-500 transition group-hover:bg-camel-600 dark:bg-ebony-500 dark:text-khaki-beige-900"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              className="inline-flex items-center rounded-full bg-dark-walnut-500 px-4 py-2 text-sm font-semibold text-khaki-beige-900 transition hover:bg-toffee-brown-500 dark:bg-khaki-beige-900 dark:text-dark-walnut-500 dark:hover:bg-camel-800"
            >
              Live Demo
            </a>
          ) : null}
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              className="inline-flex items-center rounded-full border border-camel-600/70 px-4 py-2 text-sm font-semibold text-dark-walnut-500 transition hover:bg-camel-700/40 dark:border-ebony-600 dark:text-khaki-beige-900 dark:hover:bg-ebony-500/60"
            >
              GitHub
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
