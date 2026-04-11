import { useEffect, useState } from 'react';
import { projects } from '../../data/projects';
import type { ProjectCategory } from '../../types/project';
import ProjectCard from '../ui/ProjectCard';
import ScrollReveal from '../ui/ScrollReveal';

function Projects() {
  const [isSectionOpen, setIsSectionOpen] = useState(true);
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

  useEffect(() => {
    const handleOpenSection = (event: Event) => {
      const customEvent = event as CustomEvent<{ sectionId?: string }>;

      if (customEvent.detail?.sectionId === 'projects') {
        setIsSectionOpen(true);
      }
    };

    window.addEventListener('open-section', handleOpenSection as EventListener);

    return () => {
      window.removeEventListener('open-section', handleOpenSection as EventListener);
    };
  }, []);

  return (
    <section id="projects" className="retro-window">
      <button
        type="button"
        onClick={() => setIsSectionOpen((prev) => !prev)}
        aria-expanded={isSectionOpen}
        aria-controls="projects-content"
        className="retro-window-bar w-full justify-start gap-3 text-left transition hover:bg-camel-800/80 dark:hover:bg-ebony-500/80"
      >
        <div className="flex items-center gap-2" aria-hidden="true">
          <span className={`h-3.5 w-3.5 rounded-full border ${isSectionOpen ? 'border-red-800/80 bg-red-500/90 dark:border-red-300/80 dark:bg-red-400/90' : 'border-red-800/40 bg-red-500/30 dark:border-red-300/40 dark:bg-red-300/30'}`} />
          <span className={`h-3.5 w-3.5 rounded-full border ${isSectionOpen ? 'border-emerald-800/80 bg-emerald-500/95 dark:border-emerald-300/80 dark:bg-emerald-400/95' : 'border-emerald-800/40 bg-emerald-500/30 dark:border-emerald-300/40 dark:bg-emerald-300/30'}`} />
        </div>
        <span>projects.dir</span>
      </button>
      {isSectionOpen ? (
      <ScrollReveal>
        <div id="projects-content" className="p-6 sm:p-8 md:p-10">
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
                  <span
                    className={`retro-button px-2.5 py-1 text-xs font-semibold tracking-widest ${
                      isOpen
                        ? 'border-red-800/70 bg-red-700/25 text-red-900 dark:border-red-500/70 dark:bg-red-500/25 dark:text-red-200'
                        : 'border-emerald-800/70 bg-emerald-700/25 text-emerald-900 dark:border-emerald-500/70 dark:bg-emerald-500/25 dark:text-emerald-200'
                    }`}
                  >
                    {isOpen ? 'CLOSE' : 'OPEN'}
                  </span>
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
      ) : null}
    </section>
  );
}

export default Projects;
