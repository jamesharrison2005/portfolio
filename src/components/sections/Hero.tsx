import profileImage from '../../assets/portrait.png';
import ScrollReveal from '../ui/ScrollReveal';

function Hero() {
  return (
    <section id="hero" className="rounded-3xl border border-camel-600/40 bg-khaki-beige-800/50 p-6 shadow-sm sm:p-8 dark:border-ebony-600 dark:bg-charcoal-brown-300/80 md:p-10">
      <ScrollReveal>
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl text-center md:text-left">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-dusty-olive-500 dark:text-dry-sage-alt-700">
            Computer Scientist
          </p>
          <h1 className="text-5xl font-bold tracking-tight text-dark-walnut-500 sm:text-6xl lg:text-7xl dark:text-khaki-beige-900">
            James
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-saddle-brown-500 sm:text-xl dark:text-camel-900">
            I design and build thoughtful web experiences with React, TypeScript, and Tailwind CSS.
          </p>
          <div className="mt-8 flex justify-center md:justify-start">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-dark-walnut-500 px-6 py-3 text-sm font-semibold text-khaki-beige-900 shadow-sm transition hover:bg-toffee-brown-500 dark:bg-khaki-beige-900 dark:text-dark-walnut-500 dark:hover:bg-camel-800"
            >
              Contact me
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative h-72 w-72 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-camel-700 via-dry-sage-alt-800 to-dark-walnut-500 opacity-90 blur-2xl dark:from-ebony-600 dark:via-dusty-olive-600 dark:to-dark-walnut-300" />
            <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-khaki-beige-900/80 shadow-lg dark:border-ebony-300/80">
              <img
                src={profileImage}
                alt="Profile portrait"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

export default Hero;
