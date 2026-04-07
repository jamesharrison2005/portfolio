import type { Project } from '../../types/project';

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <h3 className="mb-2 text-xl font-semibold text-zinc-900">{project.title}</h3>
      <p className="mb-4 text-zinc-700">{project.description}</p>
      <div className="mb-4 flex flex-wrap gap-2">
        {project.tech.map((tag) => (
          <span
            key={`${project.title}-${tag}`}
            className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-4 text-sm font-medium">
        {project.repoUrl ? (
          <a className="text-zinc-900 underline-offset-4 hover:underline" href={project.repoUrl}>
            Code
          </a>
        ) : null}
        {project.liveUrl ? (
          <a className="text-zinc-900 underline-offset-4 hover:underline" href={project.liveUrl}>
            Live
          </a>
        ) : null}
      </div>
    </article>
  );
}

export default ProjectCard;
