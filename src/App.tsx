import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';

function App() {
  return (
    <div id="top" className="min-h-screen bg-zinc-50 text-zinc-900">
      <main className="max-w-5xl mx-auto px-6">
        <Navbar />
        <Hero />
        <About />
        <Projects />
      </main>
    </div>
  );
}

export default App;
