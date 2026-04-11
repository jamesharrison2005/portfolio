import { useEffect, useState } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import ScrollReveal from './components/ui/ScrollReveal';

const contacts = [
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

function App() {
  const [isContactOpen, setIsContactOpen] = useState(true);

  useEffect(() => {
    const handleOpenSection = (event: Event) => {
      const customEvent = event as CustomEvent<{ sectionId?: string }>;

      if (customEvent.detail?.sectionId === 'contact') {
        setIsContactOpen(true);
      }
    };

    window.addEventListener('open-section', handleOpenSection as EventListener);

    return () => {
      window.removeEventListener('open-section', handleOpenSection as EventListener);
    };
  }, []);

  return (
    <div
      id="top"
      className="min-h-screen bg-linear-to-b from-khaki-beige-900 via-dry-sage-alt-900 to-camel-800 text-charcoal-brown-500 dark:from-charcoal-brown-200 dark:via-ebony-300 dark:to-dark-walnut-200 dark:text-khaki-beige-800"
    >
      <main className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <section id="contact" className="retro-window">
          <button
            type="button"
            onClick={() => setIsContactOpen((prev) => !prev)}
            aria-expanded={isContactOpen}
            aria-controls="contact-content"
            className="retro-window-bar w-full justify-start gap-3 text-left transition hover:bg-camel-800/80 dark:hover:bg-ebony-500/80"
          >
            <div className="flex items-center gap-2" aria-hidden="true">
              <span className={`h-3.5 w-3.5 rounded-full border ${isContactOpen ? 'border-red-800/80 bg-red-500/90 dark:border-red-300/80 dark:bg-red-400/90' : 'border-red-800/40 bg-red-500/30 dark:border-red-300/40 dark:bg-red-300/30'}`} />
              <span className={`h-3.5 w-3.5 rounded-full border ${isContactOpen ? 'border-emerald-800/80 bg-emerald-500/95 dark:border-emerald-300/80 dark:bg-emerald-400/95' : 'border-emerald-800/40 bg-emerald-500/30 dark:border-emerald-300/40 dark:bg-emerald-300/30'}`} />
            </div>
            <span>contact.exe</span>
          </button>
          {isContactOpen ? (
          <ScrollReveal>
            <div id="contact-content" className="p-6 sm:p-8">
            <h2 className="mb-6 text-3xl font-semibold text-dark-walnut-500 sm:text-4xl dark:text-khaki-beige-900">
              Let&apos;s connect
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {contacts.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.label === 'Email' ? undefined : '_blank'}
                  rel={contact.label === 'Email' ? undefined : 'noreferrer'}
                  className="group retro-button flex items-center gap-4 bg-khaki-beige-800/85 p-4 transition duration-200 hover:border-dark-walnut-500 hover:bg-khaki-beige-700/95 dark:bg-charcoal-brown-300/90 dark:hover:border-khaki-beige-900 dark:hover:bg-ebony-500/70"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-none border border-dark-walnut-500/30 bg-dark-walnut-500 text-khaki-beige-900 transition group-hover:scale-105 group-hover:bg-toffee-brown-500 dark:border-khaki-beige-900/30 dark:bg-khaki-beige-900 dark:text-dark-walnut-500">
                    {contact.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-dark-walnut-500 dark:text-khaki-beige-900">
                      {contact.label}
                    </p>
                    <p className="text-sm text-saddle-brown-500 transition group-hover:text-dark-walnut-500 dark:text-camel-900 dark:group-hover:text-khaki-beige-900">
                      {contact.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
            </div>
          </ScrollReveal>
          ) : null}
        </section>
      </main>
    </div>
  );
}

export default App;
