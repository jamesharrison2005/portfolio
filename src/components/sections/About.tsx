import ScrollReveal from '../ui/ScrollReveal';

function About() {
  const skillGroups = [
    {
      title: 'Software Development',
      skills: [
        'React',
        'TypeScript',
        'Tailwind CSS',
        'JavaScript',
        'Accessibility',
        'UI Design',
        'Flutter',
        'Dart',
        'Firebase',
      ],
    },
    {
      title: 'Data Science',
      skills: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'SQL', 'Excel', 'Kiras', 'Pytorch'],
    },
  ];

  return (
    <section id="about" className="retro-window">
      <div className="retro-window-bar">
        <div className="retro-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <span>about.log</span>
      </div>
      <ScrollReveal>
        <div className="p-6 sm:p-8 md:p-10">
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
             pursuing a career as a Software developer. With over 5 years of experience coding using languages and frameworks
              such as .Net, Java, Python and Flutter, React, Typescript and so on, I have developed strong problem-solving and programming skills.
               I thrive in team-based environments where I can collaborate with others to deliver the best possible 
               solution. I aim to master my technical ability and widen my knowledge in the ever-evolving different fields of 
               Computer Science.
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
        </div>
      </ScrollReveal>
    </section>
  );
}

export default About;
