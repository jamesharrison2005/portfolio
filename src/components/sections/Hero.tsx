import { motion, useMotionValue } from 'framer-motion';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import profileImage from '../../assets/portrait.png';
import { projects } from '../../data/projects';
import type { ProjectCategory } from '../../types/project';
import HikingGallery from '../ui/HikingGallery';
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
  { key: 'hero', label: 'Main', suffix: 'sys' },
  { key: 'about', label: 'About', suffix: 'log' },
  { key: 'projects', label: 'Projects', suffix: 'dir' },
  { key: 'contact', label: 'Contact', suffix: 'exe' },
];

const viewUrls: Record<ViewKey, string> = {
  hero: 'portfolio://james.local/home',
  about: 'portfolio://james.local/about',
  projects: 'portfolio://james.local/projects',
  contact: 'portfolio://james.local/contact',
};

function Hero() {
  const [activeView, setActiveView] = useState<ViewKey>('hero');
  const [addressValue, setAddressValue] = useState(viewUrls.hero);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isWin95Mode, setIsWin95Mode] = useState(false);
  const [isPhoneView, setIsPhoneView] = useState(false);
  const [isWindowMaximized, setIsWindowMaximized] = useState(false);
  const workspaceRef = useRef<HTMLDivElement>(null);
  const windowX = useMotionValue(0);
  const windowY = useMotionValue(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 639px)');
    const updatePhoneView = (event: MediaQueryList | MediaQueryListEvent) => {
      setIsPhoneView(event.matches);
    };

    updatePhoneView(mediaQuery);
    mediaQuery.addEventListener('change', updatePhoneView);

    return () => {
      mediaQuery.removeEventListener('change', updatePhoneView);
    };
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const savedWin95 = localStorage.getItem('win95-mode') === 'on';

    setIsWin95Mode(savedWin95);
    document.documentElement.classList.toggle('win95', savedWin95);

    const shouldUseDarkTheme = savedTheme === 'dark' && !savedWin95;
    setIsDarkMode(shouldUseDarkTheme);
    document.documentElement.classList.toggle('dark', shouldUseDarkTheme);
  }, []);

  useEffect(() => {
    setAddressValue(viewUrls[activeView]);
  }, [activeView]);

  const skillGroups = [
    {
      title: 'Software Development',
      skills: ['React', 'TypeScript', 'JavaScript', '.NET', 'Java', 'Flutter', 'Dart', 'Firebase', 'Tailwind CSS', 'REST APIs', 'Git'],
    },
    {
      title: 'Data & Analytics',
      skills: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'SQL', 'Excel', 'Keras', 'PyTorch'],
    },
    {
      title: 'Working Style & Strengths',
      skills: ['Problem Solving', 'Team Collaboration', 'UI Design', 'Accessibility', 'Testing & Debugging', 'Communication'],
    },
  ];

  const sectionTabs: Array<{ key: ProjectCategory; title: string }> = [
    { key: 'software-development', title: 'Software Development' },
    { key: 'data-science', title: 'Data Science' },
    { key: 'other', title: 'Other' },
  ];

  const personalActivities = ['Gym Training', 'Hiking', 'Walking My Dogs', 'Outdoor Walks', 'Travel', 'Photography'];

  const profileData: Array<{ value: string; icon: ReactNode }> = [
    {
      value: 'Isle of Man',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
          <path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z" />
          <circle cx="12" cy="10" r="2.6" />
        </svg>
      ),
    },
    {
      value: 'University of Lancashire',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
          <path d="m3 9 9-5 9 5" />
          <path d="M5 10v7" />
          <path d="M9 10v7" />
          <path d="M15 10v7" />
          <path d="M19 10v7" />
          <path d="M3 18h18" />
        </svg>
      ),
    },
    {
      value: 'BSc Computer Science',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
          <path d="M7 4h10" />
          <path d="M7 20h10" />
          <path d="M8 4v16" />
          <path d="M16 4v16" />
          <path d="M8 9h8" />
          <path d="M8 15h8" />
        </svg>
      ),
    },
  ];

  const handleContactClick = () => {
    setActiveView('contact');
  };

  const toggleTheme = () => {
    const nextThemeIsDark = !isDarkMode;
    setIsWin95Mode(false);
    document.documentElement.classList.remove('win95');
    localStorage.setItem('win95-mode', 'off');

    setIsDarkMode(nextThemeIsDark);
    document.documentElement.classList.toggle('dark', nextThemeIsDark);
    localStorage.setItem('theme', nextThemeIsDark ? 'dark' : 'light');
  };

  const toggleWin95Mode = () => {
    const nextWin95Mode = !isWin95Mode;
    setIsWin95Mode(nextWin95Mode);
    document.documentElement.classList.toggle('win95', nextWin95Mode);
    localStorage.setItem('win95-mode', nextWin95Mode ? 'on' : 'off');

    if (nextWin95Mode) {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleWindowSize = () => {
    // Reset drag offset so fullscreen always recenters the window.
    windowX.set(0);
    windowY.set(0);
    setIsWindowMaximized((prev) => !prev);
  };

  const handleLeaveWebsite = () => {
    const shouldLeave = window.confirm('Leave this website?');
    if (!shouldLeave) {
      return;
    }

    if (window.history.length > 1) {
      window.history.back();
      return;
    }

    window.location.replace('about:blank');
  };

  const resolveAddressToView = (value: string): ViewKey | null => {
    const cleanedValue = value.trim().toLowerCase();

    if (!cleanedValue) {
      return activeView;
    }

    if (cleanedValue.includes('portfolio://james.local/')) {
      if (cleanedValue.includes('/home') || cleanedValue.endsWith('/')) {
        return 'hero';
      }

      if (cleanedValue.includes('/about')) {
        return 'about';
      }

      if (cleanedValue.includes('/projects')) {
        return 'projects';
      }

      if (cleanedValue.includes('/contact')) {
        return 'contact';
      }
    }

    if (cleanedValue.includes('home') || cleanedValue.includes('main') || cleanedValue.includes('hero')) {
      return 'hero';
    }

    if (cleanedValue.includes('about') || cleanedValue.includes('bio')) {
      return 'about';
    }

    if (cleanedValue.includes('project') || cleanedValue.includes('work') || cleanedValue.includes('portfolio')) {
      return 'projects';
    }

    if (
      cleanedValue.includes('contact') ||
      cleanedValue.includes('contact page') ||
      cleanedValue.includes('get in touch') ||
      cleanedValue.includes('email') ||
      cleanedValue.includes('linkedin')
    ) {
      return 'contact';
    }

    return null;
  };

  const navigateFromAddressBar = () => {
    const nextView = resolveAddressToView(addressValue);

    if (nextView) {
      setActiveView(nextView);
      return;
    }

    setAddressValue(viewUrls[activeView]);
  };

  const handleAddressSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigateFromAddressBar();
  };

  const handleAddressKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') {
      return;
    }

    event.preventDefault();
    navigateFromAddressBar();
  };

  const renderPanel = () => {
    if (activeView === 'hero') {
      return (
        <div className={`mx-auto w-full ${isWindowMaximized ? 'max-w-6xl' : ''}`}>
          <div
            className={`grid grid-cols-1 gap-8 ${
              isWindowMaximized
                ? 'lg:grid-cols-[minmax(0,1fr)_minmax(320px,360px)] lg:gap-10'
                : 'lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)]'
            }`}
          >
            <div className={`order-1 text-left ${isWindowMaximized ? 'max-w-2xl' : 'max-w-xl'} lg:col-start-1 lg:row-start-1`}>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-dusty-olive-500 dark:text-dry-sage-alt-700">
                Computer Scientist
              </p>
              <h1 className="text-5xl font-bold tracking-tight text-dark-walnut-500 sm:text-6xl lg:text-7xl dark:text-khaki-beige-900">
                James
              </h1>
            </div>

            <div className={`order-2 flex justify-center lg:col-start-2 lg:row-span-2 ${isWindowMaximized ? 'lg:justify-center' : 'lg:justify-end'}`}>
              <div className="w-full max-w-76 sm:max-w-88">
                <div className="hero-headshot-frame relative border-[3px] border-dark-walnut-500/80 bg-camel-700/70 p-2 dark:border-khaki-beige-700/70 dark:bg-charcoal-brown-400/80">
                  <div className="border-2 border-khaki-beige-500/90 bg-khaki-beige-900 p-2 dark:border-ebony-700/90 dark:bg-charcoal-brown-200">
                    <div className="border border-toffee-brown-500/60 bg-khaki-beige-800 p-1 dark:border-khaki-beige-700/60 dark:bg-charcoal-brown-300">
                      <div className="relative overflow-hidden border border-dark-walnut-500/50 bg-khaki-beige-900 dark:border-khaki-beige-700/70 dark:bg-charcoal-brown-200">
                        <img
                          src={profileImage}
                          alt="Profile portrait"
                          className="h-68 w-full object-cover object-top sm:h-78 lg:h-84 saturate-[0.92] contrast-[1.05]"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hero-profile-data mt-4 border-[3px] border-dark-walnut-500/80 bg-khaki-beige-800/95 p-3 dark:border-khaki-beige-700/70 dark:bg-charcoal-brown-300/95">
                  <p className="border-b border-dark-walnut-500/35 pb-2 text-left text-xs font-semibold uppercase tracking-[0.18em] text-saddle-brown-500 dark:border-khaki-beige-700/45 dark:text-khaki-beige-900">
                    Profile Data:
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {profileData.map((item) => (
                      <li
                        key={item.value}
                        className="flex items-center gap-2.5 text-left text-[0.7rem] font-semibold uppercase tracking-[0.11em] text-dark-walnut-500 sm:text-xs dark:text-khaki-beige-900"
                      >
                        <span className="shrink-0 text-saddle-brown-500 dark:text-camel-800">{item.icon}</span>
                        <span>{item.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className={`order-3 text-left ${isWindowMaximized ? 'max-w-2xl' : 'max-w-xl'} lg:col-start-1 lg:row-start-2`}>
              <p className="text-lg leading-relaxed text-saddle-brown-500 sm:text-xl dark:text-camel-900">
                Aspiring Software Developer and Data Analyst from the Isle of Man.
              </p>
              <p className="mt-4 max-w-lg text-sm leading-7 text-saddle-brown-500 dark:text-camel-900">
                I’m a 21-year-old Computer Science student from the Isle of Man who loves building cross-platform apps and using data to uncover
                the stories behind real-world problems.
              </p>
              <p className="mt-3 max-w-lg text-sm leading-7 font-semibold text-saddle-brown-500 dark:text-camel-900">
                Use the tabs above to switch between the rest of the portfolio panels.
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
          </div>
        </div>
      );
    }

    if (activeView === 'about') {
      return (
        <div className="space-y-6">
          <div className="min-w-0">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-dusty-olive-500 dark:text-dry-sage-alt-700">
              About
            </p>
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-dark-walnut-500 sm:text-5xl dark:text-khaki-beige-900">
              About Me
            </h2>
            <p className="w-full max-w-none wrap-break-word text-lg leading-8 text-saddle-brown-500 dark:text-camel-900">
              I am a final-year Computer Science student at the University of Lancashire from the Isle of Man, focused
              on becoming a software developer who can bridge application engineering and data-driven thinking. Over
              the past five years, I have built experience across cross-platform app development, frontend engineering,
              and core programming fundamentals.
            </p>
            <p className="mt-4 w-full max-w-none wrap-break-word text-lg leading-8 text-saddle-brown-500 dark:text-camel-900">
              I enjoy building reliable, user-focused products with technologies such as React, TypeScript, Flutter,
              and Firebase, while also using Python and SQL to analyze data and uncover practical insights. I work
              best in collaborative teams where clear communication, problem-solving, and continuous learning lead to
              stronger outcomes.
            </p>
          </div>

          <div className="skills-panel min-w-0 space-y-5 border-2 border-camel-600/60 bg-khaki-beige-900/70 p-6 shadow-[5px_5px_0_rgba(53,28,8,0.55)] dark:border-ebony-600 dark:bg-charcoal-brown-200/85 dark:shadow-[5px_5px_0_rgba(13,14,10,0.65)]">
            <h2 className="mb-1 text-3xl font-bold tracking-tight text-dark-walnut-500 sm:text-4xl dark:text-khaki-beige-900">
              Skills
            </h2>
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="mb-4 text-lg font-semibold text-dark-walnut-500 dark:text-khaki-beige-900">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={`${group.title}-${skill}`}
                      className="skill-chip retro-button bg-camel-700/70 px-4 py-2 text-sm font-medium text-saddle-brown-500 transition hover:bg-camel-600/85 dark:bg-ebony-500 dark:text-khaki-beige-900 dark:hover:bg-ebony-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="min-w-0">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-dusty-olive-500 dark:text-dry-sage-alt-700">
              Outside of Work
            </p>
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-dark-walnut-500 sm:text-5xl dark:text-khaki-beige-900">
              Life Beyond Code
            </h2>
            <p className="w-full max-w-none wrap-break-word text-lg leading-8 text-saddle-brown-500 dark:text-camel-900">
              Outside of software and data, I stay active and grounded through regular gym training, hiking, and long
              walks with my dogs. These routines help me stay disciplined, focused, and consistent in both my personal
              and professional life.
            </p>
            <h3 className="mt-6 text-2xl font-semibold tracking-tight text-dark-walnut-500 dark:text-khaki-beige-900">
              Hiking
            </h3>
            <HikingGallery />
            <h3 className="mt-6 text-2xl font-semibold tracking-tight text-dark-walnut-500 dark:text-khaki-beige-900">
              Enjoying the Outdoors
            </h3>
            <p className="mt-3 w-full max-w-none wrap-break-word text-lg leading-8 text-saddle-brown-500 dark:text-camel-900">
              I also enjoy getting outdoors, exploring new places, and taking time to reset away from a screen. That
              balance gives me fresh perspective and energy, which I bring back into the projects and teams I work on.
            </p>
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

              return (
                <div
                  key={section.key}
                  className="px-0 py-1 sm:border-2 sm:border-camel-600/60 sm:bg-khaki-beige-900/72 sm:p-4 sm:shadow-[5px_5px_0_rgba(53,28,8,0.55)] dark:sm:border-ebony-600 dark:sm:bg-charcoal-brown-200/85 dark:sm:shadow-[5px_5px_0_rgba(13,14,10,0.65)]"
                >
                  <h3 className="px-0 py-1 text-left text-lg font-semibold text-dark-walnut-500 sm:px-2 sm:py-2 dark:text-khaki-beige-900">
                    {section.title}
                  </h3>

                  <div className="mt-3 space-y-4">
                    {sectionProjects.length > 0 ? (
                      sectionProjects.map((project) => <ProjectCard key={project.title} project={project} />)
                    ) : (
                      <p className="rounded-xl border border-dashed border-camel-600/60 p-4 text-sm text-saddle-brown-500 dark:border-ebony-600 dark:text-camel-900">
                        No projects added here yet.
                      </p>
                    )}
                  </div>
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
      <div className="retro-window-bar fixed left-0 right-0 top-0 z-40 flex items-center justify-between gap-2 px-3 py-3 sm:px-4">
        <span className="app-title-label text-sm font-medium tracking-tight text-white sm:text-base">
          James Harrison
        </span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleWin95Mode}
            className={`retro-button shrink-0 px-3 py-1.5 text-xs font-semibold tracking-wide transition ${
              isWin95Mode
                ? 'bg-dark-walnut-500 text-khaki-beige-900 hover:bg-toffee-brown-500 dark:bg-khaki-beige-900 dark:text-dark-walnut-500 dark:hover:bg-camel-800'
                : 'bg-khaki-beige-800 text-saddle-brown-500 hover:bg-camel-700/70 dark:border-dry-sage-alt-600 dark:bg-ebony-400 dark:text-khaki-beige-900 dark:hover:bg-ebony-500'
            }`}
            aria-label="Toggle Windows 95 mode"
          >
            Win95 mode
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            className="retro-button shrink-0 bg-khaki-beige-800 px-3 py-1.5 text-xs font-semibold tracking-wide text-saddle-brown-500 dark:border-dry-sage-alt-600 dark:bg-ebony-400 dark:text-khaki-beige-900 dark:hover:bg-ebony-500"
            aria-label="Toggle color mode"
          >
            {isDarkMode ? 'Light mode' : 'Dark mode'}
          </button>
        </div>
      </div>

      <div
        ref={workspaceRef}
        className="fixed inset-x-0 bottom-0 z-0 pointer-events-none"
        style={{ top: '5.5rem' }}
      />

      <motion.div
        drag={!isPhoneView && !isWindowMaximized}
        dragConstraints={workspaceRef}
        dragElastic={0.08}
        dragMomentum={false}
        style={{ x: windowX, y: windowY }}
        className={`fixed z-50 mx-auto ${
          isWindowMaximized
            ? 'inset-x-0 top-23 w-[calc(100vw-1rem)] sm:w-[calc(100vw-1.5rem)] lg:w-[calc(100vw-2rem)]'
            : 'inset-x-0 top-24 w-[calc(100vw-1rem)] sm:top-28 sm:w-[calc(100vw-2rem)] lg:w-[min(1100px,calc(100vw-2rem))]'
        } ${
          isPhoneView || isWindowMaximized ? '' : 'cursor-grab active:cursor-grabbing'
        }`}
      >
        <div className="retro-window overflow-hidden">
          <div className="flex items-center gap-1 overflow-hidden border-b-2 border-dark-walnut-500/55 bg-khaki-beige-800 px-1 py-1 dark:border-khaki-beige-900/25 dark:bg-ebony-400 sm:px-2">
            <div className="flex min-w-0 flex-1 items-stretch gap-1 overflow-x-auto overscroll-x-contain whitespace-nowrap sm:gap-1" style={{ scrollbarWidth: 'none' }}>
              {viewTabs.map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveView(tab.key)}
                  className={`group flex shrink-0 items-center gap-2 border-l-2 border-r-2 border-t-2 px-3 py-2 text-[0.68rem] font-semibold tracking-[0.12em] transition sm:px-3 sm:text-sm sm:tracking-[0.18em] ${
                    activeView === tab.key
                      ? 'border-dark-walnut-500 border-t-dark-walnut-500 bg-dark-walnut-500 text-khaki-beige-900 dark:border-khaki-beige-900 dark:border-t-khaki-beige-900 dark:bg-khaki-beige-900 dark:text-dark-walnut-500'
                      : 'border-dark-walnut-500/30 border-t-dark-walnut-500/30 bg-khaki-beige-900/50 text-saddle-brown-500 hover:bg-khaki-beige-900/70 dark:border-khaki-beige-900/20 dark:border-t-khaki-beige-900/20 dark:bg-ebony-500/40 dark:text-khaki-beige-900 dark:hover:bg-ebony-500/60'
                  }`}
                >
                  <span className="max-w-28 truncate sm:max-w-xs">
                    {tab.label}.{tab.suffix}
                  </span>
                </button>
              ))}
            </div>

            <div className="ml-auto mr-0.5 flex shrink-0 items-center justify-end gap-1">
              <button
                type="button"
                onClick={toggleWindowSize}
                aria-label={isWindowMaximized ? 'Restore window size' : 'Fit window to page'}
                title={isWindowMaximized ? 'Restore window size' : 'Fit window to page'}
                className="inline-flex h-8 w-8 items-center justify-center border-2 border-dark-walnut-500/70 bg-khaki-beige-900/80 text-dark-walnut-500 hover:bg-khaki-beige-900 dark:border-khaki-beige-900/70 dark:bg-ebony-500/70 dark:text-khaki-beige-900 dark:hover:bg-ebony-500"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  {isWindowMaximized ? <path d="M7 7h10v10H7z" /> : <path d="M5 5h14v14H5z" />}
                </svg>
              </button>
              <button
                type="button"
                onClick={handleLeaveWebsite}
                aria-label="Leave website"
                title="Leave website"
                className="inline-flex h-8 w-8 items-center justify-center border-2 border-dark-walnut-500/70 bg-khaki-beige-900/80 text-dark-walnut-500 hover:bg-red-500/35 dark:border-khaki-beige-900/70 dark:bg-ebony-500/70 dark:text-khaki-beige-900 dark:hover:bg-red-400/35"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="M6 6 18 18" />
                  <path d="M18 6 6 18" />
                </svg>
              </button>
            </div>
          </div>

          <form
            onSubmit={handleAddressSubmit}
            className="flex items-center gap-2 border-b-2 border-dark-walnut-500/45 bg-khaki-beige-900/65 px-2 py-2 dark:border-khaki-beige-900/25 dark:bg-ebony-500/55"
          >
            <span className="shrink-0 text-saddle-brown-500 dark:text-khaki-beige-900" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.2-3.2" />
              </svg>
            </span>
            <input
              type="text"
              value={addressValue}
              onChange={(event) => setAddressValue(event.target.value)}
              onKeyDown={handleAddressKeyDown}
              aria-label="Search or enter address"
              placeholder="Search or enter address"
              className="min-w-0 flex-1 border-2 border-dark-walnut-500/50 bg-khaki-beige-900 px-3 py-1.5 text-xs text-dark-walnut-500 outline-none placeholder:text-saddle-brown-500/80 focus:border-dark-walnut-500 dark:border-khaki-beige-900/45 dark:bg-charcoal-brown-200 dark:text-khaki-beige-900 dark:placeholder:text-camel-900/80 dark:focus:border-khaki-beige-900"
            />
            <button
              type="submit"
              className="shrink-0 border-2 border-dark-walnut-500/70 bg-khaki-beige-800 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-saddle-brown-500 dark:border-khaki-beige-900/70 dark:bg-ebony-500 dark:text-khaki-beige-900"
            >
              Go
            </button>
          </form>

          <div className="p-4 sm:p-5 md:p-8">
            <div
              className={`retro-window flex min-h-80 flex-col overflow-y-auto overscroll-contain p-4 pb-24 sm:p-5 md:p-8 ${
                isWindowMaximized
                  ? 'h-[calc(100dvh-11rem)] sm:h-[calc(100vh-11.5rem)] md:h-[calc(100vh-12rem)]'
                  : 'h-[calc(100dvh-15rem)] sm:h-[calc(100vh-16rem)] md:h-[calc(100vh-17rem)]'
              }`}
              style={{ boxShadow: 'none' }}
            >
              {renderPanel()}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
