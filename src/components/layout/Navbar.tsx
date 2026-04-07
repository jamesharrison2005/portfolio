const links = [
  { label: 'Hero', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
];

function Navbar() {
  return (
    <header className="border-b border-zinc-200 py-4">
      <nav className="flex items-center justify-between">
        <a href="#top" className="text-lg font-semibold tracking-tight text-zinc-900">
          James Portfolio
        </a>
        <ul className="flex items-center gap-4 text-sm font-medium text-zinc-700">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="rounded px-2 py-1 transition hover:bg-zinc-100">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
