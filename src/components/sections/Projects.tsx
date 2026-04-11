import { useState } from 'react';
import { projects } from '../../data/projects';
import type { ProjectCategory } from '../../types/project';
import ProjectCard from '../ui/ProjectCard';
import ScrollReveal from '../ui/ScrollReveal';

function Projects() {
  const [openSections, setOpenSections] = useState<Record<ProjectCategory, boolean>>({
    'software-development': true,
    'data-science': false,
    other: false,
  });

  const sections: Array<{ key: ProjectCategory; title: string }> = [
    { key: 'software-development', title: 'Software Development' },
    { key: 'data-science', title: 'Data Science' },
    { key: 'other', title: 'Other' },
  ];

  const toggleSection = (key: ProjectCategory) => {
    setOpenSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <section id="projects" className="retro-window">
      <div className="retro-window-bar">
        <div className="retro-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <span>projects.dir</span>
      </div>
      <ScrollReveal>
        <div className="p-6 sm:p-8 md:p-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-dusty-olive-500 dark:text-dry-sage-alt-700">
          Projects
        </p>
        <h2 className="mb-8 text-3xl font-bold tracking-tight text-dark-walnut-500 sm:text-4xl dark:text-khaki-beige-900">
          Selected work
        </h2>
        <div className="space-y-5">
          {sections.map((section) => {
            const sectionProjects = projects.filter((project) => project.category === section.key);
            const isOpen = openSections[section.key];

            return (
              <div
                key={section.key}
                className="border-2 border-camel-600/60 bg-khaki-beige-900/72 p-4 shadow-[5px_5px_0_rgba(53,28,8,0.55)] dark:border-ebony-600 dark:bg-charcoal-brown-200/85 dark:shadow-[5px_5px_0_rgba(13,14,10,0.65)]"
              >
                <button
                  type="button"
                  onClick={() => toggleSection(section.key)}
                  aria-expanded={isOpen}
                  aria-controls={`projects-${section.key}`}
                  className="flex w-full items-center justify-between border-2 border-transparent px-2 py-2 text-left text-lg font-semibold text-dark-walnut-500 transition hover:border-camel-600/60 hover:bg-camel-700/30 dark:text-khaki-beige-900 dark:hover:border-ebony-600 dark:hover:bg-ebony-500/60"
                >
                  <span>{section.title}</span>
                  <span className="text-sm font-medium">{isOpen ? 'Close' : 'Open'}</span>
                </button>

                {isOpen ? (
                  <div id={`projects-${section.key}`} className="mt-4 space-y-4">
                    {sectionProjects.length > 0 ? (
                      sectionProjects.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                      ))
                    ) : (
                      <p className="rounded-xl border border-dashed border-camel-600/60 p-4 text-sm text-saddle-brown-500 dark:border-ebony-600 dark:text-camel-900">
                        No projects added here yet.
                      </p>
                    )}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

export default Projects;
