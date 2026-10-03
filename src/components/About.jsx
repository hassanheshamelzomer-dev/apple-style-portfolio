import React from 'react';
import { BookOpen, Target, BrainCircuit, Rocket } from 'lucide-react';

/* ─── Atom: icon badge ─────────────────────────────────────────── */
const IconBadge = ({ icon: Icon, bg, color }) => (
  <div className={`w-10 h-10 rounded-2xl ${bg} flex items-center justify-center shrink-0`}>
    <Icon size={20} className={color} />
  </div>
);

/* ─── Atom: tag chip ───────────────────────────────────────────── */
const Chip = ({ children, variant = 'neutral' }) => {
  const cls = {
    neutral: 'bg-black/5 dark:bg-white/10 text-zinc-700 dark:text-zinc-300',
    blue:    'bg-blue-50 dark:bg-blue-500/14 text-blue-700 dark:text-blue-300',
  }[variant];
  return (
    <span className={`px-3 py-1 rounded-full text-[11px] font-semibold ${cls}`}>
      {children}
    </span>
  );
};

/* ─── Atom: ambient glow dot ───────────────────────────────────── */
const GlowDot = ({ color, pos }) => (
  <div aria-hidden className={`absolute ${pos} w-44 h-44 rounded-full blur-3xl pointer-events-none ${color}`} />
);

/* ─── Section ──────────────────────────────────────────────────── */
const About = () => (
  <section id="about" className="w-full max-w-6xl mx-auto px-4 py-24">
    {/* Header */}
    <div className="text-center mb-12 reveal">
      <p className="section-label">Background</p>
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight">About Me</h2>
    </div>

    {/* Bento grid — 3 cols on md+ */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

      {/* ── Education — 2 cols ── */}
      <div className="reveal md:col-span-2 glass-panel rounded-3xl p-8 relative overflow-hidden apple-interaction">
        <GlowDot color="bg-blue-400/12 dark:bg-blue-500/18" pos="-top-14 -right-14" />
        <div className="relative z-10">
          <IconBadge icon={BookOpen} bg="bg-blue-100 dark:bg-blue-900/50" color="text-blue-600 dark:text-blue-400" />
          <h3 className="mt-4 text-lg font-bold text-zinc-900 dark:text-white">Education</h3>
          <h4 className="mt-1 text-base font-semibold text-zinc-700 dark:text-zinc-200 leading-snug">
            B.Sc. in Computers and Artificial Intelligence
          </h4>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            Cairo National University (CNU)
          </p>
          <div className="flex flex-wrap gap-2 mt-5">
            <Chip variant="neutral">Expected 2029</Chip>
            <Chip variant="blue">2nd Year · AI Track</Chip>
          </div>
        </div>
      </div>

      {/* ── QA Mindset ── */}
      <div className="reveal glass-panel rounded-3xl p-8 relative overflow-hidden apple-interaction">
        <GlowDot color="bg-emerald-400/10 dark:bg-emerald-500/14" pos="-bottom-10 -left-10" />
        <div className="relative z-10">
          <IconBadge icon={Target} bg="bg-emerald-100 dark:bg-emerald-900/50" color="text-emerald-600 dark:text-emerald-400" />
          <h3 className="mt-4 text-lg font-bold text-zinc-900 dark:text-white">QA Mindset</h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Detail-obsessed. I approach software through the lens of correctness — designing test scenarios, uncovering edge cases, and championing zero-defect releases.
          </p>
        </div>
      </div>

      {/* ── Problem Solving ── */}
      <div className="reveal glass-panel rounded-3xl p-8 relative overflow-hidden apple-interaction">
        <GlowDot color="bg-violet-400/10 dark:bg-violet-500/14" pos="-top-10 -right-10" />
        <div className="relative z-10">
          <IconBadge icon={BrainCircuit} bg="bg-violet-100 dark:bg-violet-900/50" color="text-violet-600 dark:text-violet-400" />
          <h3 className="mt-4 text-lg font-bold text-zinc-900 dark:text-white">Problem Solving</h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Trained in OOP design patterns and algorithmic thinking. I decompose complex problems into clean, maintainable solutions.
          </p>
        </div>
      </div>

      {/* ── Career Aspiration — 2 cols ── */}
      <div className="reveal md:col-span-2 glass-panel rounded-3xl p-8 flex items-center gap-6 relative overflow-hidden apple-interaction">
        <div aria-hidden
          className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-500/5 pointer-events-none rounded-3xl" />
        <div className="hidden sm:flex shrink-0 w-14 h-14 rounded-2xl
                        bg-gradient-to-br from-[#007AFF] to-[#5856D6]
                        items-center justify-center shadow-lg shadow-blue-500/20">
          <Rocket size={24} className="text-white" />
        </div>
        <div className="relative z-10">
          <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-1.5">Career Aspiration</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Aspiring AI Engineer and Tech Entrepreneur. Through DEPI's software testing track and my AI degree, I'm building the technical depth and industry perspective to create products that are both <em>intelligent</em> and <em>reliable</em>.
          </p>
        </div>
      </div>

    </div>
  </section>
);

export default About;
