import React from 'react';
import { Briefcase, Award, GraduationCap } from 'lucide-react';

/* ── CV data ─────────────────────────────────────────────────────── */
const EXP = {
  badge: 'DEPI Round 5  ·  Training',
  title: 'Software Testing Trainee',
  org: 'Digital Egypt Pioneers Initiative (DEPI)',
  period: 'Present',
  description:
    'Government-backed national initiative for digital skills development. Round 5 — Software Testing Track.',
  points: [
    'Hands-on training in software testing methodologies, quality assurance fundamentals, and structured test case design.',
    'Practical exercises in equivalence partitioning, boundary value analysis, and exploratory testing techniques.',
    'Collaborative defect reporting and tracking workflows using industry-standard QA practices.',
  ],
};

const CERTS = [
  {
    title: 'Software Testing Track',
    org: 'Digital Egypt Pioneers Initiative (DEPI)',
    icon: Award,
    bg: 'bg-blue-100 dark:bg-blue-900/40',
    color: 'text-blue-600 dark:text-blue-400',
  },
  {
    title: 'Object-Oriented Programming & Problem Solving',
    org: 'Academic Coursework & Self-Paced Training',
    icon: GraduationCap,
    bg: 'bg-violet-100 dark:bg-violet-900/40',
    color: 'text-violet-600 dark:text-violet-400',
  },
];

/* ── Component ───────────────────────────────────────────────────── */
const Experience = () => (
  <section id="experience" className="w-full max-w-6xl mx-auto px-4 py-24">
    {/* Header */}
    <div className="text-center mb-12 reveal">
      <p className="section-label">Journey</p>
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Experience & Training</h2>
    </div>

    <div className="space-y-5">
      {/* ── Main experience card ── */}
      <div className="reveal glass-panel rounded-3xl p-8 relative overflow-hidden group apple-interaction">
        <div aria-hidden
          className="absolute inset-0 bg-gradient-to-br from-blue-500/4 to-transparent
                     opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col sm:flex-row sm:items-start justify-between gap-6">
          {/* Left block */}
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center shrink-0 mt-0.5">
              <Briefcase size={22} className="text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full
                               bg-blue-50 dark:bg-blue-500/10
                               text-[10px] font-bold uppercase tracking-wider
                               text-blue-700 dark:text-blue-300 mb-2.5">
                {EXP.badge}
              </span>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{EXP.title}</h3>
              <p className="mt-0.5 text-sm font-medium text-zinc-500 dark:text-zinc-400">{EXP.org}</p>
              <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-500 italic">{EXP.description}</p>

              <ul className="mt-4 space-y-2.5">
                {EXP.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#007AFF] shrink-0" />
                    <span className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Period badge */}
          <span className="shrink-0 self-start px-3.5 py-1.5 rounded-full glass-panel
                           text-[11px] font-semibold text-zinc-700 dark:text-zinc-300">
            {EXP.period}
          </span>
        </div>
      </div>

      {/* ── Certifications grid ── */}
      <div className="reveal">
        <h3 className="text-lg font-bold tracking-tight mb-4 px-1 text-zinc-900 dark:text-white">
          Courses & Certifications
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CERTS.map(({ title, org, icon: Icon, bg, color }) => (
            <div key={title} className="glass-panel rounded-3xl p-6 flex items-start gap-4 apple-interaction">
              <div className={`w-11 h-11 rounded-2xl ${bg} flex items-center justify-center shrink-0`}>
                <Icon size={20} className={color} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-zinc-900 dark:text-white leading-snug">{title}</h4>
                <p className="mt-1 text-xs font-medium text-zinc-500 dark:text-zinc-400">{org}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
