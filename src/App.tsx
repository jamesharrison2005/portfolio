import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';

function App() {
  return (
    <div
      id="top"
      className="min-h-screen bg-gradient-to-b from-khaki-beige-900 via-dry-sage-alt-900 to-camel-800 text-charcoal-brown-500 dark:from-charcoal-brown-200 dark:via-ebony-300 dark:to-dark-walnut-200 dark:text-khaki-beige-800"
    >
      <main className="max-w-5xl mx-auto px-6">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <section id="contact" className="py-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-dusty-olive-500 dark:text-dry-sage-alt-700">
            Contact
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-dark-walnut-500 sm:text-4xl dark:text-khaki-beige-900">
            Let&apos;s connect
          </h2>
          <p className="max-w-3xl text-lg leading-relaxed text-saddle-brown-500 dark:text-camel-900">
            email@example.com
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
