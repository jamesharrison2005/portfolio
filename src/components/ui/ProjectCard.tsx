import { useState } from 'react';
import type { Project } from '../../types/project';
import ScrollReveal from './ScrollReveal';

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const overview =
    project.description.length > 110
      ? `${project.description.slice(0, 110).trimEnd()}...`
      : project.description;

  return (
    <ScrollReveal>
      <article className="retro-window">
        <div className="retro-window-bar">
          <div className="retro-dots" aria-hidden="true">
            <span />
            <span />
          </div>
          <span>{project.title.replace(/\s+/g, '_').toLowerCase()}.html</span>
          <button
            type="button"
            onClick={() => setIsExpanded((prev) => !prev)}
            aria-expanded={isExpanded}
            className={`retro-button px-2.5 py-1 text-xs font-semibold tracking-widest ${
              isExpanded
                ? 'border-red-800/70 bg-red-700/25 text-red-900 dark:border-red-500/70 dark:bg-red-500/25 dark:text-red-200'
                : 'border-emerald-800/70 bg-emerald-700/25 text-emerald-900 dark:border-emerald-500/70 dark:bg-emerald-500/25 dark:text-emerald-200'
            }`}
          >
            {isExpanded ? 'CLOSE' : 'OPEN'}
          </button>
        </div>
        <div className="p-5 sm:p-6">
          <button
            type="button"
            onClick={() => setIsExpanded((prev) => !prev)}
            aria-expanded={isExpanded}
            className="w-full border-2 border-transparent p-1 text-left transition hover:border-camel-600/60 dark:hover:border-ebony-600"
          >
            <div>
              <h3 className="mb-2 text-xl font-semibold text-dark-walnut-500 dark:text-khaki-beige-900">
                {project.title}
              </h3>
              <p className="leading-relaxed text-saddle-brown-500 dark:text-camel-900">
                {overview}
              </p>
            </div>
          </button>

          {isExpanded ? (
            <div className="mt-5 border-t border-camel-600/50 pt-5 dark:border-ebony-600">
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
