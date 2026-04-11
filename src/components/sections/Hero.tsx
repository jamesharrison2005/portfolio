import { motion } from 'framer-motion';
import { useRef, useState, type ReactNode } from 'react';
import profileImage from '../../assets/portrait.png';
import { projects } from '../../data/projects';
import type { ProjectCategory } from '../../types/project';
import ProjectCard from '../ui/ProjectCard';

type ViewKey = 'hero' | 'about' | 'projects' | 'contact';

type ContactLink = {
  label: string;
  href: string;
  value: string;
  icon: ReactNode;
};

const contacts: ContactLink[] = [
  {
    label: 'Email',
    href: 'mailto:jamesharrison2262@gmail.com',
    value: 'jamesharrison2262@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M4 6h16v12H4z" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/jamesharrison2005',
    value: 'github.com/jamesharrison2005',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M9 19c-4.5 1.5-4.5-2-6-2" />
        <path d="M15 22v-3.2c0-.9.3-1.5.9-2-3 .3-6-.6-6-4.2 0-1.1.4-2 1.1-2.7-.1-.3-.5-1.6.1-3.3 0 0 .9-.3 3 .9a10.3 10.3 0 0 1 5.4 0c2.1-1.2 3-.9 3-.9.6 1.7.2 3 .1 3.3.7.7 1.1 1.6 1.1 2.7 0 3.6-3 4.5-6 4.2.6.5.9 1.4.9 2V22" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/james-harrison-8440a730a/',
    value: 'linkedin.com/in/james-harrison',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 1 0-4 0v6h-4V8h4v2" />
        <path d="M2 9h4v11H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

const viewTabs: Array<{ key: ViewKey; label: string; suffix: string }> = [
  { key: 'hero', label: 'Hero', suffix: 'sys' },
  { key: 'about', label: 'About', suffix: 'log' },
  { key: 'projects', label: 'Projects', suffix: 'dir' },
  { key: 'contact', label: 'Contact', suffix: 'exe' },
];

function Hero() {
  const [activeView, setActiveView] = useState<ViewKey>('hero');
  const [openSections, setOpenSections] = useState<Record<ProjectCategory, boolean>>({
    'software-development': true,
    'data-science': false,
    other: false,
  });
  const [isDarkMode, setIsDarkMode] = useState(false);
  const workspaceRef = useRef<HTMLDivElement>(null);

  const skillGroups = [
    {
      title: 'Software Development',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'Accessibility', 'UI Design', 'Flutter', 'Dart', 'Firebase'],
    },
    {
      title: 'Data Science',
      skills: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'SQL', 'Excel', 'Kiras', 'Pytorch'],
    },
  ];

  const sectionTabs: Array<{ key: ProjectCategory; title: string }> = [
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

  const handleContactClick = () => {
    setActiveView('contact');
  };

  const toggleTheme = () => {
    const nextThemeIsDark = !isDarkMode;
    setIsDarkMode(nextThemeIsDark);
    document.documentElement.classList.toggle('dark', nextThemeIsDark);
    localStorage.setItem('theme', nextThemeIsDark ? 'dark' : 'light');
  };

  const renderPanel = () => {
    if (activeView === 'hero') {
      return (
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)]">
          <div className="max-w-xl text-left">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-dusty-olive-500 dark:text-dry-sage-alt-700">
              Computer Scientist
            </p>
            <h1 className="text-5xl font-bold tracking-tight text-dark-walnut-500 sm:text-6xl lg:text-7xl dark:text-khaki-beige-900">
              James
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-saddle-brown-500 sm:text-xl dark:text-camel-900">
              Building robust digital experiences and uncovering the stories hidden within data.
            </p>
            <p className="mt-4 max-w-lg text-sm leading-7 text-saddle-brown-500 dark:text-camel-900">
              Use the tabs above to switch between the rest of the portfolio panels without leaving this screen.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={handleContactClick}
                className="retro-button inline-flex items-center bg-dark-walnut-500 px-6 py-3 text-sm font-semibold text-khaki-beige-900 transition hover:bg-toffee-brown-500 dark:bg-khaki-beige-900 dark:text-dark-walnut-500 dark:hover:bg-camel-800"
              >
                Contact me
              </button>
              <button
                type="button"
                onClick={() => setActiveView('projects')}
                className="retro-button inline-flex items-center bg-khaki-beige-800 px-6 py-3 text-sm font-semibold text-dark-walnut-500 transition hover:bg-camel-700/70 dark:bg-charcoal-brown-300 dark:text-khaki-beige-900 dark:hover:bg-ebony-500/80"
              >
                Open projects
              </button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative h-64 w-64 sm:h-72 sm:w-72 lg:h-96 lg:w-96">
              <div className="absolute inset-0 bg-linear-to-br from-camel-700 via-dry-sage-alt-800 to-dark-walnut-500 opacity-85 blur-xl dark:from-ebony-600 dark:via-dusty-olive-600 dark:to-dark-walnut-300" />
              <div className="relative h-full w-full overflow-hidden border-4 border-khaki-beige-900/80 shadow-lg dark:border-ebony-300/80">
                <img src={profileImage} alt="Profile portrait" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (activeView === 'about') {
      return (
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <div className="min-w-0">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-dusty-olive-500 dark:text-dry-sage-alt-700">
              About
            </p>
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-dark-walnut-500 sm:text-5xl dark:text-khaki-beige-900">
              About Me
            </h2>
            <p className="max-w-xl wrap-break-word text-lg leading-8 text-saddle-brown-500 dark:text-camel-900">
              I am a highly motivated student in my final year at the University of Lancashire from the Isle of Man,
              pursuing a career as a Software developer. With over 5 years of experience coding using languages and
              frameworks such as .Net, Java, Python and Flutter, React, Typescript and so on, I have developed strong
              problem-solving and programming skills. I thrive in team-based environments where I can collaborate with
              others to deliver the best possible solution. I aim to master my technical ability and widen my
              knowledge in the ever-evolving different fields of Computer Science.
            </p>
          </div>

          <div className="min-w-0 space-y-5 border-2 border-camel-600/60 bg-khaki-beige-900/70 p-6 shadow-[5px_5px_0_rgba(53,28,8,0.55)] dark:border-ebony-600 dark:bg-charcoal-brown-200/85 dark:shadow-[5px_5px_0_rgba(13,14,10,0.65)]">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="mb-4 text-lg font-semibold text-dark-walnut-500 dark:text-khaki-beige-900">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={`${group.title}-${skill}`}
                      className="retro-button bg-camel-700/70 px-4 py-2 text-sm font-medium text-saddle-brown-500 transition hover:bg-camel-600/85 dark:bg-ebony-500 dark:text-khaki-beige-900 dark:hover:bg-ebony-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (activeView === 'projects') {
      return (
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-dusty-olive-500 dark:text-dry-sage-alt-700">
            Projects
          </p>
          <h2 className="mb-8 text-3xl font-bold tracking-tight text-dark-walnut-500 sm:text-4xl dark:text-khaki-beige-900">
            Selected work
          </h2>
          <div className="space-y-5">
            {sectionTabs.map((section) => {
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
                        sectionProjects.map((project) => <ProjectCard key={project.title} project={project} />)
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
      );
    }

    return (
      <div className="mx-auto w-full max-w-4xl">
        <p className="mb-6 text-center text-3xl font-semibold text-dark-walnut-500 sm:text-left sm:text-4xl dark:text-khaki-beige-900">
          Let&apos;s connect
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.label === 'Email' ? undefined : '_blank'}
              rel={contact.label === 'Email' ? undefined : 'noreferrer'}
              className="group retro-button flex w-full items-start gap-4 bg-khaki-beige-800/85 p-4 transition duration-200 hover:border-dark-walnut-500 hover:bg-khaki-beige-700/95 dark:bg-charcoal-brown-300/90 dark:hover:border-khaki-beige-900 dark:hover:bg-ebony-500/70"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-none border border-dark-walnut-500/30 bg-dark-walnut-500 text-khaki-beige-900 transition group-hover:scale-105 group-hover:bg-toffee-brown-500 dark:border-khaki-beige-900/30 dark:bg-khaki-beige-900 dark:text-dark-walnut-500">
                {contact.icon}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-dark-walnut-500 dark:text-khaki-beige-900">
                  {contact.label}
                </p>
                <p className="wrap-break-word text-xs leading-5 text-saddle-brown-500 transition group-hover:text-dark-walnut-500 sm:text-sm sm:leading-6 dark:text-camel-900 dark:group-hover:text-khaki-beige-900">
                  {contact.value}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="hero" className="relative flex min-h-screen flex-col gap-4 overflow-visible pt-20 sm:pt-24">
      <div className="retro-window-bar fixed left-0 right-0 top-0 z-40 flex-col items-start gap-2 px-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-4">
        <span className="text-sm font-medium tracking-tight text-dark-walnut-500 sm:text-base dark:text-khaki-beige-900">
          James Harrison
        </span>
        <button
          type="button"
          onClick={toggleTheme}
          className="retro-button bg-khaki-beige-800 px-3 py-1.5 text-xs font-semibold tracking-wide text-saddle-brown-500 dark:border-dry-sage-alt-600 dark:bg-ebony-400 dark:text-khaki-beige-900 dark:hover:bg-ebony-500"
          aria-label="Toggle color mode"
        >
          {isDarkMode ? 'Light mode' : 'Dark mode'}
        </button>
      </div>

      <div
        ref={workspaceRef}
        className="fixed inset-x-0 bottom-0 z-0 pointer-events-none"
        style={{ top: '5.5rem' }}
      />

      <motion.div
        drag
        dragConstraints={workspaceRef}
        dragElastic={0.08}
        dragMomentum={false}
        className="fixed left-2 top-24 z-50 w-[calc(100vw-1rem)] cursor-grab active:cursor-grabbing sm:left-4 sm:top-28 sm:w-[calc(100vw-2rem)] lg:w-[min(1100px,calc(100vw-2rem))]"
      >
        <div className="retro-window overflow-hidden">
          <div className="flex items-end gap-0 border-b-2 border-dark-walnut-500/55 bg-khaki-beige-800 px-1 py-1 dark:border-khaki-beige-900/25 dark:bg-ebony-400 sm:px-2">
            <div className="flex w-full flex-wrap items-end gap-1 sm:w-auto sm:flex-nowrap sm:gap-1">
              {viewTabs.map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveView(tab.key)}
                  className={`group flex min-w-[calc(50%-0.125rem)] items-center gap-2 border-l-2 border-r-2 border-t-2 px-2 py-2 text-[0.68rem] font-semibold tracking-[0.12em] transition sm:min-w-0 sm:px-3 sm:text-sm sm:tracking-[0.18em] ${
                    activeView === tab.key
                      ? 'border-dark-walnut-500 border-t-dark-walnut-500 bg-dark-walnut-500 text-khaki-beige-900 dark:border-khaki-beige-900 dark:border-t-khaki-beige-900 dark:bg-khaki-beige-900 dark:text-dark-walnut-500'
                      : 'border-dark-walnut-500/30 border-t-dark-walnut-500/30 bg-khaki-beige-900/50 text-saddle-brown-500 hover:bg-khaki-beige-900/70 dark:border-khaki-beige-900/20 dark:border-t-khaki-beige-900/20 dark:bg-ebony-500/40 dark:text-khaki-beige-900 dark:hover:bg-ebony-500/60'
                  }`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-current" />
                  <span className="max-w-28 truncate sm:max-w-xs">
                    {tab.label}.{tab.suffix}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 sm:p-5 md:p-8">
            <div className="retro-window flex h-[calc(100vh-15rem)] min-h-80 flex-col overflow-y-auto overscroll-contain p-4 sm:h-[calc(100vh-16rem)] sm:p-5 md:h-[calc(100vh-17rem)] md:p-8">
              {renderPanel()}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
