import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const NAV_LINKS = [
  { name: 'About',      href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills',     href: '#skills' },
  { name: 'Projects',   href: '#projects' },
  { name: 'Contact',    href: '#contact' },
];

const Navbar = () => {
  const { theme, toggle } = useTheme();
  const [scrolled,       setScrolled]       = useState(false);
  const [mobileOpen,     setMobileOpen]     = useState(false);
  const [activeSection,  setActiveSection]  = useState('');

  /* Shrink navbar pill on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Active-section highlight via IntersectionObserver */
  useEffect(() => {
    const ids = NAV_LINKS.map(l => l.href.slice(1));
    const observers = [];
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: '-35% 0px -55% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-5">
      {/* ── Main pill ── */}
      <nav
        className={`glass-panel rounded-full px-4 py-2 flex items-center justify-between gap-4 transition-all duration-500 ease-out
          ${scrolled ? 'w-full max-w-xl' : 'w-full max-w-5xl'}`}
      >
        {/* Logo */}
        <a
          href="#"
          className="text-sm font-bold tracking-tight text-zinc-900 dark:text-white hover:text-[#007AFF] dark:hover:text-[#007AFF] transition-colors shrink-0"
        >
          HZ<span className="text-[#007AFF]">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-0.5">
          {NAV_LINKS.map(({ name, href }) => {
            const id      = href.slice(1);
            const isActive = activeSection === id;
            return (
              <li key={name}>
                <a
                  href={href}
                  className={`relative px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-colors duration-200
                    ${isActive
                      ? 'text-[#007AFF] bg-blue-50 dark:bg-blue-500/12'
                      : 'text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/8'
                    }`}
                >
                  {name}
                  {isActive && (
                    <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#007AFF]" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-1.5">
          {/* Theme toggle */}
          <button
            onClick={toggle}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 rounded-full text-zinc-600 dark:text-zinc-300 hover:bg-black/6 dark:hover:bg-white/10 transition-colors"
          >
            {theme === 'dark'
              ? <Sun  size={16} />
              : <Moon size={16} />}
          </button>

          {/* Mobile hamburger */}
          <button
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className="md:hidden p-2 rounded-full text-zinc-600 dark:text-zinc-300 hover:bg-black/6 dark:hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen(v => !v)}
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {/* ── Mobile dropdown ── */}
      {mobileOpen && (
        <div className="absolute top-[62px] left-4 right-4 glass-panel rounded-2xl p-2 flex flex-col gap-0.5 md:hidden">
          {NAV_LINKS.map(({ name, href }) => {
            const id = href.slice(1);
            const isActive = activeSection === id;
            return (
              <a
                key={name}
                href={href}
                onClick={closeMobile}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors
                  ${isActive
                    ? 'text-[#007AFF] bg-blue-50 dark:bg-blue-500/12'
                    : 'text-zinc-800 dark:text-zinc-200 hover:bg-black/5 dark:hover:bg-white/8'
                  }`}
              >
                {name}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Navbar;
