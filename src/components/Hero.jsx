import React from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';

const Hero = () => (
  <section
    id="hero"
    /* pt-28 md:pt-36 ensures name clears the floating navbar on all screens */
    className="relative w-full min-h-screen flex flex-col items-center justify-center text-center
               px-4 pt-28 md:pt-36 pb-16"
  >
    {/* Central ambient glow */}
    <div aria-hidden="true"
      className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="w-[560px] h-[560px] bg-blue-500/12 dark:bg-blue-500/8 rounded-full blur-[130px]" />
    </div>

    <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto w-full">

      {/* ── Availability badge ── */}
      <div className="reveal mb-7">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel
                         text-xs font-semibold text-zinc-700 dark:text-zinc-200 cursor-default apple-interaction">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          Available for new opportunities
        </span>
      </div>

      {/* ── Name pill ── */}
      <p className="reveal text-xs font-bold tracking-[0.22em] uppercase text-[#007AFF] mb-4">
        Hassan Hesham Hassan Zaki
      </p>

      {/* ── Hero headline ── */}
      <h1 className="reveal text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem]
                     font-bold tracking-tight leading-[1.06] mb-5">
        <span className="text-transparent bg-clip-text
                         bg-gradient-to-br from-zinc-900 via-zinc-700 to-zinc-500
                         dark:from-white dark:via-zinc-200 dark:to-zinc-500">
          Software QC Engineer
        </span>
        <br />
        <span className="text-transparent bg-clip-text
                         bg-gradient-to-r from-[#007AFF] via-[#5856D6] to-[#32ADE6]">
          &amp; AI Student.
        </span>
      </h1>

      {/* ── Tagline ── */}
      <p className="reveal text-base md:text-lg text-zinc-600 dark:text-zinc-400 max-w-xl mb-10 leading-relaxed">
        AI student · DEPI Software Testing Trainee · Aspiring Tech Entrepreneur.<br />
        Building quality-first software with precision and curiosity.
      </p>

      {/* ── CTAs ── */}
      <div className="reveal flex flex-col sm:flex-row items-center gap-3 mb-9">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full
                     bg-[#007AFF] hover:bg-blue-500 text-white text-sm font-semibold
                     shadow-lg shadow-blue-500/25 apple-interaction"
        >
          View Projects <ArrowRight size={16} />
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full glass-panel
                     text-zinc-800 dark:text-zinc-100 text-sm font-semibold apple-interaction"
        >
          <Mail size={16} className="text-zinc-500 dark:text-zinc-400" />
          Contact Me
        </a>
      </div>

      {/* ── Download CV pill ── */}
      <div className="reveal">
        <a
          href="/cv.pdf"
          download
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full
                     border border-black/8 dark:border-white/10
                     bg-white/40 dark:bg-black/40 backdrop-blur-md
                     text-xs font-semibold text-zinc-600 dark:text-zinc-400
                     hover:text-zinc-900 dark:hover:text-white
                     hover:border-black/14 dark:hover:border-white/18 apple-interaction"
        >
          <Download size={13} /> Download CV
        </a>
      </div>
    </div>

    {/* ── Scroll indicator ── */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2
                    flex flex-col items-center gap-1.5 text-zinc-400 dark:text-zinc-600">
      <span className="text-[10px] font-semibold tracking-[0.2em] uppercase">Scroll</span>
      <div className="w-px h-7 bg-gradient-to-b from-zinc-400 dark:from-zinc-600 to-transparent" />
    </div>
  </section>
);

export default Hero;
