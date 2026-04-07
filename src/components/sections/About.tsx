function About() {
  const skills = ['React', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'Accessibility', 'UI Design'];

  return (
    <section id="about" className="py-12">
      <div className="grid gap-8 md:grid-cols-2 md:items-start">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-dusty-olive-500 dark:text-dry-sage-alt-700">
            About
          </p>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-dark-walnut-500 sm:text-5xl dark:text-khaki-beige-900">
            About Me
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-saddle-brown-500 dark:text-camel-900">
            I am a frontend developer focused on building clean, accessible interfaces with a calm
            nature-inspired style. I enjoy turning ideas into polished experiences with React,
            TypeScript, and Tailwind CSS.
          </p>
        </div>

        <div className="rounded-3xl border border-camel-600/50 bg-khaki-beige-800/70 p-6 shadow-sm dark:border-ebony-600 dark:bg-charcoal-brown-300/90">
          <h3 className="mb-4 text-lg font-semibold text-dark-walnut-500 dark:text-khaki-beige-900">
            Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-camel-700/70 px-4 py-2 text-sm font-medium text-saddle-brown-500 dark:bg-ebony-500 dark:text-khaki-beige-900"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
