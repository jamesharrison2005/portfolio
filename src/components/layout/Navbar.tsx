import { useEffect, useState } from 'react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDark = savedTheme ? savedTheme === 'dark' : prefersDark;

    document.documentElement.classList.toggle('dark', shouldUseDark);
    setIsDarkMode(shouldUseDark);
  }, []);

  const toggleTheme = () => {
    const nextThemeIsDark = !isDarkMode;
    setIsDarkMode(nextThemeIsDark);
    document.documentElement.classList.toggle('dark', nextThemeIsDark);
    localStorage.setItem('theme', nextThemeIsDark ? 'dark' : 'light');
  };

  return (
    <header className="sticky top-2 z-50 retro-window px-4 py-3 sm:px-5">
      <nav className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <a href="#top" className="text-lg font-semibold tracking-tight text-dark-walnut-500 transition hover:text-toffee-brown-500 dark:text-khaki-beige-900 dark:hover:text-khaki-beige-700">
          James Harrison
        </a>
        <div className="flex flex-col gap-3 text-sm font-medium text-saddle-brown-500 dark:text-dry-sage-alt-800 sm:flex-row sm:items-center sm:gap-4">
          <button
            type="button"
            onClick={toggleTheme}
            className="retro-button bg-khaki-beige-800 px-3 py-1.5 text-xs font-semibold tracking-wide text-saddle-brown-500 dark:border-dry-sage-alt-600 dark:bg-ebony-400 dark:text-khaki-beige-900 dark:hover:bg-ebony-500"
            aria-label="Toggle color mode"
          >
            {isDarkMode ? 'Light mode' : 'Dark mode'}
          </button>
          <ul className="flex flex-wrap items-center gap-2 sm:justify-end">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="retro-button inline-flex bg-khaki-beige-800 px-3 py-1.5 transition hover:bg-camel-700/70 hover:text-dark-walnut-500 dark:bg-charcoal-brown-300 dark:hover:bg-ebony-500/80 dark:hover:text-khaki-beige-900"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
