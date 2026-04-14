import { useEffect, useState } from 'react';
import type { Project } from '../../types/project';
import {
  fetchGitHubRepoMeta,
  type GitHubRepoMetaResult,
} from '../../utils/githubRepoMeta';
import ScrollReveal from './ScrollReveal';

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [repoMeta, setRepoMeta] = useState<GitHubRepoMetaResult | null>(null);
  const [isRepoMetaLoading, setIsRepoMetaLoading] = useState(false);
  const detailId = `${project.title.replace(/\s+/g, '-').toLowerCase()}-details`;

  const overview =
    project.description.length > 110
      ? `${project.description.slice(0, 110).trimEnd()}...`
      : project.description;

  useEffect(() => {
    let isMounted = true;

    if (!isExpanded || !project.githubUrl || repoMeta) {
      return () => {
        isMounted = false;
      };
    }

    setIsRepoMetaLoading(true);

    fetchGitHubRepoMeta(project.githubUrl)
      .then((meta) => {
        if (!isMounted) {
          return;
        }

        setRepoMeta(meta);
      })
      .finally(() => {
        if (!isMounted) {
          return;
        }

        setIsRepoMetaLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [isExpanded, project.githubUrl, repoMeta]);

  return (
    <ScrollReveal>
      <article className="retro-window" style={{ boxShadow: 'none' }}>
        <button
          type="button"
          onClick={() => setIsExpanded((prev) => !prev)}
          aria-expanded={isExpanded}
          aria-controls={detailId}
          className="retro-window-bar w-full justify-start! text-left transition hover:bg-camel-800/80 dark:hover:bg-ebony-500/80"
        >
          <div className="flex w-full items-center gap-3" aria-hidden="true">
            <span className="block min-w-0 flex-1 break-all text-[0.74rem] leading-5 tracking-[0.08em] sm:break-normal sm:text-inherit sm:leading-normal sm:tracking-inherit">
              {project.title.replace(/\s+/g, '_').toLowerCase()}.html
            </span>
            <span className="inline-flex h-6 min-w-6 shrink-0 items-center justify-center border-2 border-dark-walnut-500/60 bg-khaki-beige-900/70 px-1 text-[0.7rem] font-bold leading-none text-dark-walnut-500 dark:border-khaki-beige-900/55 dark:bg-ebony-500/60 dark:text-khaki-beige-900">
              {isExpanded ? '-' : '+'}
            </span>
          </div>
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
            <div id={detailId} className="project-expanded-panel mt-5 border-t border-camel-600/50 pt-5 dark:border-ebony-600">
              <div className="project-deep-dive mb-5 rounded-md border border-camel-600/55 bg-khaki-beige-900/55 p-4 dark:border-ebony-600 dark:bg-charcoal-brown-300/70">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-dusty-olive-500 dark:text-dry-sage-alt-700">
                  Further Info
                </p>
                {project.deepDive && project.deepDive.length > 0 ? (
                  <ul className="project-deep-dive-list space-y-2 text-sm leading-relaxed text-saddle-brown-500 dark:text-camel-900">
                    {project.deepDive.map((point) => (
                      <li key={`${project.title}-${point}`} className="flex items-start gap-2">
                        <span aria-hidden="true" className="project-deep-dive-dot mt-[0.38rem] h-1.5 w-1.5 shrink-0 rounded-full bg-camel-600 dark:bg-dry-sage-700" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm leading-relaxed text-saddle-brown-500 dark:text-camel-900">
                    Deeper implementation notes will be added soon.
                  </p>
                )}
              </div>

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

              {project.githubUrl ? (
                <div className="project-repo-status mb-6 border border-camel-600/55 bg-khaki-beige-900/55 p-4 dark:border-ebony-600 dark:bg-charcoal-brown-300/70">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-dusty-olive-500 dark:text-dry-sage-alt-700">
                    Repository Status
                  </p>

                  {isRepoMetaLoading ? (
                    <p className="text-sm leading-relaxed text-saddle-brown-500 dark:text-camel-900">
                      Loading live GitHub details...
                    </p>
                  ) : repoMeta?.status === 'ok' ? (
                    <>
                      <div className="mb-3 flex flex-wrap gap-2">
                        <span className="project-repo-metric retro-button bg-camel-700/60 px-3 py-1 text-xs font-medium text-saddle-brown-500 dark:bg-ebony-500 dark:text-khaki-beige-900">
                          Stars: {repoMeta.stars}
                        </span>
                        <span className="project-repo-metric retro-button bg-camel-700/60 px-3 py-1 text-xs font-medium text-saddle-brown-500 dark:bg-ebony-500 dark:text-khaki-beige-900">
                          Forks: {repoMeta.forks}
                        </span>
                        <span className="project-repo-metric retro-button bg-camel-700/60 px-3 py-1 text-xs font-medium text-saddle-brown-500 dark:bg-ebony-500 dark:text-khaki-beige-900">
                          Issues: {repoMeta.openIssues}
                        </span>
                        <span className="project-repo-metric retro-button bg-camel-700/60 px-3 py-1 text-xs font-medium text-saddle-brown-500 dark:bg-ebony-500 dark:text-khaki-beige-900">
                          Language: {repoMeta.language}
                        </span>
                      </div>
                      <p className="project-repo-date text-sm leading-relaxed text-saddle-brown-500 dark:text-camel-900">
                        Last updated:{' '}
                        {repoMeta.lastPushAt
                          ? new Date(repoMeta.lastPushAt).toLocaleDateString()
                          : 'Unknown'}
                      </p>
                    </>
                  ) : (
                    <p className="text-sm leading-relaxed text-saddle-brown-500 dark:text-camel-900">
                      {repoMeta?.message ?? 'GitHub metadata is currently unavailable.'}
                    </p>
                  )}
                </div>
              ) : null}

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
