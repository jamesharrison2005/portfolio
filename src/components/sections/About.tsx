import { useEffect, useState } from 'react';
import ScrollReveal from '../ui/ScrollReveal';
import HikingGallery from '../ui/HikingGallery';

function About() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const handleOpenSection = (event: Event) => {
      const customEvent = event as CustomEvent<{ sectionId?: string }>;

      if (customEvent.detail?.sectionId === 'about') {
        setIsOpen(true);
      }
    };

    window.addEventListener('open-section', handleOpenSection as EventListener);

    return () => {
      window.removeEventListener('open-section', handleOpenSection as EventListener);
    };
  }, []);

  const skillGroups = [
    {
      title: 'Software Development',
      skills: [
        'React',
        'TypeScript',
        'JavaScript',
        '.NET',
        'Java',
        'Flutter',
        'Dart',
        'Firebase',
        'Tailwind CSS',
        'REST APIs',
        'Git',
      ],
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

  return (
    <section id="about" className="retro-window">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls="about-content"
        className="retro-window-bar w-full justify-start gap-3 text-left transition hover:bg-camel-800/80 dark:hover:bg-ebony-500/80"
      >
        <div className="flex items-center gap-2" aria-hidden="true">
          <span className={`h-3.5 w-3.5 rounded-full border ${isOpen ? 'border-red-800/80 bg-red-500/90 dark:border-red-300/80 dark:bg-red-400/90' : 'border-red-800/40 bg-red-500/30 dark:border-red-300/40 dark:bg-red-300/30'}`} />
          <span className={`h-3.5 w-3.5 rounded-full border ${isOpen ? 'border-emerald-800/80 bg-emerald-500/95 dark:border-emerald-300/80 dark:bg-emerald-400/95' : 'border-emerald-800/40 bg-emerald-500/30 dark:border-emerald-300/40 dark:bg-emerald-300/30'}`} />
        </div>
        <span>about.log</span>
      </button>
      {isOpen ? (
      <ScrollReveal>
        <div id="about-content" className="p-6 sm:p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-start">
        <div className="min-w-0">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-dusty-olive-500 dark:text-dry-sage-alt-700">
            About
          </p>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-dark-walnut-500 sm:text-5xl dark:text-khaki-beige-900">
            About Me
          </h2>
          <p className="max-w-xl wrap-break-word text-lg leading-8 text-saddle-brown-500 dark:text-camel-900">
            I am a final-year Computer Science student at the University of Lancashire from the Isle of Man, focused
            on becoming a software developer who can bridge application engineering and data-driven thinking. Over the
            past five years, I have built experience across cross-platform app development, frontend engineering, and
            core programming fundamentals.
          </p>
          <p className="mt-4 max-w-xl wrap-break-word text-lg leading-8 text-saddle-brown-500 dark:text-camel-900">
            I enjoy building reliable, user-focused products with technologies such as React, TypeScript, Flutter,
            and Firebase, while also using Python and SQL to analyze data and uncover practical insights. I work best
            in collaborative teams where clear communication, problem-solving, and continuous learning lead to
            stronger outcomes.
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

          <div className="mt-8 min-w-0">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-dusty-olive-500 dark:text-dry-sage-alt-700">
              Outside of Work
            </p>
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-dark-walnut-500 sm:text-5xl dark:text-khaki-beige-900">
              Life Beyond Code
            </h2>
            <p className="max-w-none wrap-break-word text-lg leading-8 text-saddle-brown-500 dark:text-camel-900">
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
            <p className="mt-3 max-w-none wrap-break-word text-lg leading-8 text-saddle-brown-500 dark:text-camel-900">
              I also enjoy getting outdoors, exploring new places, and taking time to reset away from a screen. That
              balance gives me fresh perspective and energy, which I bring back into the projects and teams I work on.
            </p>
          </div>
        </div>
      </ScrollReveal>
      ) : null}
    </section>
  );
}

export default About;
