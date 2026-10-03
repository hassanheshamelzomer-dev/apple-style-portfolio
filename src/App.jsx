import React, { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

/* ── Scroll-reveal hook ──────────────────────────────────────────────── */
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/* ── Root App ────────────────────────────────────────────────────────── */
function AppInner() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-[#F5F5F7] dark:bg-black text-zinc-900 dark:text-zinc-100 font-sans overflow-x-hidden selection:bg-blue-500/25">
      {/* Ambient radial glows */}
      <div aria-hidden="true" className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[620px] h-[620px] rounded-full bg-blue-500/8 dark:bg-blue-500/6 blur-[130px]" />
        <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full bg-indigo-500/6 dark:bg-indigo-500/4 blur-[110px]" />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] rounded-full bg-sky-400/6 dark:bg-sky-400/4 blur-[100px]" />
      </div>

      <Navbar />
      <main className="relative z-10 flex flex-col items-center w-full">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  );
}
