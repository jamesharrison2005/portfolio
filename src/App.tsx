import { Hero } from './components/sections';

function App() {
  return (
    <div
      id="top"
      className="min-h-screen bg-linear-to-b from-khaki-beige-900 via-dry-sage-alt-900 to-camel-800 text-charcoal-brown-500 dark:from-charcoal-brown-200 dark:via-ebony-300 dark:to-dark-walnut-200 dark:text-khaki-beige-800"
    >
      <main className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
        <Hero />
      </main>
    </div>
  );
}

export default App;
