import React, { useState } from 'react';
import { Code2, FlaskConical, Globe } from 'lucide-react';

/* ── CV-accurate skill data ──────────────────────────────────────── */
const CATEGORIES = [
  {
    id: 'languages',
    label: 'Languages',
    icon: Code2,
    accentBg: 'bg-[#007AFF]',
    skills: ['C++', 'Python', 'Java', 'JavaScript'],
  },
  {
    id: 'qa',
    label: 'QA & Testing',
    icon: FlaskConical,
    accentBg: 'bg-emerald-500',
    skills: ['Manual Testing', 'Test Cases', 'Bug Reporting', 'SDLC / STLC', 'Agile / Scrum'],
  },
  {
    id: 'web',
    label: 'Web & Frameworks',
    icon: Globe,
    accentBg: 'bg-[#5856D6]',
    skills: ['React', 'Node.js', 'Tailwind CSS', 'HTML / CSS'],
  },
];

/* ── Skill chip ──────────────────────────────────────────────────── */
const SkillChip = ({ name }) => (
  <div className="glass-panel px-6 py-3 rounded-full flex items-center justify-center apple-interaction cursor-default">
    <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{name}</span>
  </div>
);

/* ── Section ─────────────────────────────────────────────────────── */
const Skills = () => {
  const [activeId, setActiveId] = useState('languages');
  const active = CATEGORIES.find(c => c.id === activeId);

  return (
    <section id="skills" className="w-full max-w-4xl mx-auto px-4 py-24">
      {/* Header */}
      <div className="text-center mb-10 reveal">
        <p className="section-label">Expertise</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Skills &amp; Capabilities</h2>
      </div>

      {/* iOS-style segmented control */}
      <div className="reveal flex justify-center mb-8">
        <div className="glass-panel inline-flex p-1 rounded-full gap-0.5">
          {CATEGORIES.map(({ id, label, icon: Icon }) => {
            const isActive = activeId === id;
            return (
              <button
                key={id}
                onClick={() => setActiveId(id)}
                className={`flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-semibold
                            transition-colors duration-200 ease-out
                  ${isActive
                    ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-sm'
                    : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200'
                  }`}
              >
                <Icon size={13} />
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Accent bar */}
      <div className={`reveal mx-auto w-8 h-0.5 rounded-full ${active.accentBg} mb-8 opacity-80`} />

      {/* Skill chips container */}
      <div className="flex flex-wrap justify-center gap-3">
        {active.skills.map((skill, idx) => (
          <div
            key={skill}
            style={{ animationDelay: `${idx * 50}ms`, animationFillMode: 'both' }}
            className="animate-in zoom-in-95 fade-in duration-300 ease-out"
          >
            <SkillChip name={skill} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
