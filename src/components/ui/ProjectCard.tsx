import { useState } from 'react';
import type { Project } from '../../types/project';
import ScrollReveal from './ScrollReveal';

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const detailId = `${project.title.replace(/\s+/g, '-').toLowerCase()}-details`;

  const overview =
    project.description.length > 110
      ? `${project.description.slice(0, 110).trimEnd()}...`
      : project.description;

  return (
    <ScrollReveal>
      <article className="retro-window">
        <button
          type="button"
          onClick={() => setIsExpanded((prev) => !prev)}
          aria-expanded={isExpanded}
          aria-controls={detailId}
          className="retro-window-bar w-full text-left transition hover:bg-camel-800/80 dark:hover:bg-ebony-500/80"
        >
          <div className="flex items-center gap-2" aria-hidden="true">
            <span
              className={`h-3.5 w-3.5 rounded-full border transition ${
                isExpanded
                  ? 'border-red-800/80 bg-red-500/90 dark:border-red-300/80 dark:bg-red-400/90'
                  : 'border-red-800/40 bg-red-500/30 dark:border-red-300/40 dark:bg-red-300/30'
              }`}
            />
            <span
              className={`h-3.5 w-3.5 rounded-full border transition ${
                isExpanded
                  ? 'border-emerald-800/80 bg-emerald-500/95 dark:border-emerald-300/80 dark:bg-emerald-400/95'
                  : 'border-emerald-800/40 bg-emerald-500/30 dark:border-emerald-300/40 dark:bg-emerald-300/30'
              }`}
            />
          </div>
          <span>{project.title.replace(/\s+/g, '_').toLowerCase()}.html</span>
          <span className="text-[0.68rem] tracking-wider text-dusty-olive-500 dark:text-dry-sage-alt-700">
            {isExpanded ? 'OPEN' : 'CLOSED'}
          </span>
        </button>
        <div className="p-5 sm:p-6">
          <div>
            <h3 className="mb-2 text-xl font-semibold text-dark-walnut-500 dark:text-khaki-beige-900">
              {project.title}
            </h3>
            <p className="leading-relaxed text-saddle-brown-500 dark:text-camel-900">
              {overview}
            </p>
          </div>

          {isExpanded ? (
            <div id={detailId} className="mt-5 border-t border-camel-600/50 pt-5 dark:border-ebony-600">
              <p className="mb-5 leading-relaxed text-saddle-brown-500 dark:text-camel-900">
                {project.description}
              </p>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.tech.map((tag) => (
                  <span
                    key={`${project.title}-${tag}`}
                    className="retro-button bg-camel-700/60 px-3 py-1 text-xs font-medium text-saddle-brown-500 dark:bg-ebony-500 dark:text-khaki-beige-900"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    className="retro-button inline-flex items-center bg-dark-walnut-500 px-4 py-2 text-sm font-semibold text-khaki-beige-900 transition hover:bg-toffee-brown-500 dark:bg-khaki-beige-900 dark:text-dark-walnut-500 dark:hover:bg-camel-800"
                  >
                    Live Demo
                  </a>
                ) : null}
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    className="retro-button inline-flex items-center border-camel-600/70 bg-khaki-beige-800/70 px-4 py-2 text-sm font-semibold text-dark-walnut-500 transition hover:bg-camel-700/40 dark:border-ebony-600 dark:bg-charcoal-brown-300/80 dark:text-khaki-beige-900 dark:hover:bg-ebony-500/60"
                  >
                    GitHub
                  </a>
                ) : null}
              </div>
            </div>
          ) : null}
        </div>
      </article>
    </ScrollReveal>
  );
}

export default ProjectCard;
