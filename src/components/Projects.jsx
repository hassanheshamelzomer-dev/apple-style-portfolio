import { ExternalLink, FileText, Code2, Bug, Globe, Cpu } from 'lucide-react';

/* GitHub SVG since it is removed in lucide-react */
const GithubIcon = ({ size = 18, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
  </svg>
);

/* ── CV-accurate project data ────────────────────────────────────────
   Subtle Apple palette:
   – Blue/Slate for dev projects
   – Teal/Cyan for QA projects
   – Indigo/Blue for web projects
   – Warm slate for algo projects
──────────────────────────────────────────────────────────────────── */
const PROJECTS = [
  {
    id: 'grade-mgmt',
    title: 'Student Grade Management System',
    subtitle: 'Console Application · C++',
    description:
      'A console-based C++ application implementing full CRUD operations for student records. Leverages OOP principles — classes, encapsulation, and file I/O — to persist data across sessions.',
    tech: ['C++', 'OOP', 'File I/O', 'CRUD'],
    icon: Cpu,
    /* Muted Apple-style gradient — slate/blue */
    cardBg: 'from-slate-700 to-blue-900',
    mockupBg: 'bg-slate-900',
    mockupText: 'text-blue-300',
    mockupLines: [
      '> Grade Management System v1.0',
      '  [1] Add Student',
      '  [2] View All Records',
      '  [3] Update Grade',
      '  [4] Delete Record',
      '  [5] Exit',
    ],
    links: [
      { label: 'GitHub', icon: GithubIcon, href: 'https://github.com/hassan-hesham' },
    ],
  },
  {
    id: 'bug-tracking',
    title: 'QA Bug Tracking Practice Suite',
    subtitle: 'Manual Testing · DEPI Training',
    description:
      'Structured manual test artefacts — test plans, test cases, defect reports, and execution sheets — produced during DEPI software testing training. Covers BVA, equivalence partitioning, and exploratory testing.',
    tech: ['Manual Testing', 'Test Cases', 'Bug Reporting', 'BVA'],
    icon: Bug,
    /* Muted teal/slate */
    cardBg: 'from-teal-900 to-slate-800',
    mockupBg: 'bg-slate-900',
    mockupText: 'text-teal-300',
    mockupLines: [
      '📋  Test Plan v1.0',
      '✅  TC-001  Login — Pass',
      '✅  TC-002  Search — Pass',
      '❌  TC-003  Checkout — FAIL',
      '🐛  BUG-007  Price mismatch',
      '📊  Coverage: 92%',
    ],
    links: [
      { label: 'Case Study', icon: FileText, href: '#' },
    ],
    badge: 'QA Artefact',
  },
  {
    id: 'portfolio',
    title: 'Apple-Style Portfolio Website',
    subtitle: 'React · Tailwind CSS · Vite',
    description:
      'This very portfolio — a fully responsive SPA following Apple Human Interface Guidelines. Features glassmorphism, scroll-reveal animations, an EmailJS contact form, and a Light/Dark theme system.',
    tech: ['React', 'Tailwind CSS', 'Vite', 'EmailJS'],
    icon: Globe,
    /* Muted indigo/slate */
    cardBg: 'from-indigo-900 to-slate-800',
    mockupBg: 'bg-slate-900',
    mockupText: 'text-indigo-300',
    mockupLines: [
      '// portfolio — vite + react',
      'import { ThemeProvider }',
      '  from "./context/ThemeContext"',
      '',
      '<App>',
      '  <Navbar /> <Hero />',
      '  <Projects /> <Contact />',
      '</App>',
    ],
    links: [
      { label: 'Live Site',   icon: ExternalLink, href: '#' },
      { label: 'GitHub',      icon: GithubIcon,       href: 'https://github.com/hassan-hesham' },
    ],
  },
  {
    id: 'oop-repo',
    title: 'OOP Problem-Solving Repository',
    subtitle: 'C++ · Python · Algorithms',
    description:
      'A curated collection of C++ and Python solutions to classic algorithmic challenges — sorting, searching, recursion, and data structures — demonstrating clean OOP design patterns.',
    tech: ['C++', 'Python', 'Algorithms', 'Data Structures'],
    icon: Code2,
    /* Muted warm slate/stone */
    cardBg: 'from-slate-700 to-stone-800',
    mockupBg: 'bg-stone-950',
    mockupText: 'text-amber-300',
    mockupLines: [
      '# OOP Collection',
      'class BinaryTree:',
      '  def insert(self, val):',
      '    ...',
      '',
      '// Linked List (C++)',
      'template<typename T>',
      'class LinkedList { ... }',
    ],
    links: [
      { label: 'GitHub', icon: GithubIcon, href: 'https://github.com/hassan-hesham' },
    ],
  },
];

/* ── Terminal / mockup preview ──────────────────────────────────── */
const MockupPreview = ({ bg, textColor, lines, badge }) => (
  <div className={`relative ${bg} rounded-2xl p-4 font-mono text-[11px] leading-5 overflow-hidden select-none`}>
    {/* Traffic-light dots */}
    <div className="flex gap-1.5 mb-3">
      <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
    </div>
    {lines.map((line, i) => (
      <div key={i} className={`${textColor} opacity-90`}>
        {line || <span>&nbsp;</span>}
      </div>
    ))}
    {badge && (
      <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full
                       bg-teal-500/20 border border-teal-500/30
                       text-[9px] font-bold text-teal-300 uppercase tracking-wider">
        {badge}
      </span>
    )}
  </div>
);

/* ── Tech pill ──────────────────────────────────────────────────── */
const TechPill = ({ label }) => (
  <span className="px-2.5 py-0.5 rounded-full
                   bg-black/5 dark:bg-white/8
                   border border-black/5 dark:border-white/8
                   text-[10px] font-semibold text-zinc-700 dark:text-zinc-300">
    {label}
  </span>
);

/* ── Project card ───────────────────────────────────────────────── */
const ProjectCard = ({ title, subtitle, description, tech, icon: Icon,
                       cardBg, mockupBg, mockupText, mockupLines, links, badge }) => (
  <div className="reveal glass-panel rounded-3xl overflow-hidden group apple-interaction flex flex-col">
    {/* Header strip — muted dark gradient */}
    <div className={`relative bg-gradient-to-br ${cardBg} p-5 overflow-hidden`}>
      {/* Subtle noise texture feel */}
      <div aria-hidden className="absolute inset-0 opacity-20"
        style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 60%)' }} />
      <MockupPreview bg={mockupBg} textColor={mockupText} lines={mockupLines} badge={badge} />
    </div>

    {/* Body */}
    <div className="flex flex-col flex-1 p-6 gap-3">
      {/* Title + subtitle */}
      <div>
        <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 leading-snug
                       group-hover:text-[#007AFF] transition-colors duration-200">
          {title}
        </h3>
        <p className="text-[11px] font-semibold text-zinc-500 dark:text-zinc-500 mt-0.5">{subtitle}</p>
      </div>

      <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed flex-1">
        {description}
      </p>

      {/* Tech pills */}
      <div className="flex flex-wrap gap-1.5 pt-1">
        {tech.map(t => <TechPill key={t} label={t} />)}
      </div>

      {/* Action links */}
      {links?.length > 0 && (
        <div className="flex gap-2 pt-1">
          {links.map(({ label, icon: LinkIcon, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full
                         bg-black/5 dark:bg-white/8 border border-black/5 dark:border-white/8
                         text-[11px] font-semibold text-zinc-700 dark:text-zinc-300
                         hover:text-[#007AFF] dark:hover:text-[#007AFF]
                         hover:border-blue-500/20 dark:hover:border-blue-500/20
                         transition-colors duration-200"
            >
              <LinkIcon size={12} />
              {label}
            </a>
          ))}
        </div>
      )}
    </div>
  </div>
);

/* ── Section ────────────────────────────────────────────────────── */
const Projects = () => (
  <section id="projects" className="w-full max-w-6xl mx-auto px-4 py-24">
    {/* Header */}
    <div className="text-center mb-14 reveal">
      <p className="section-label">Portfolio</p>
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-3">Projects</h2>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-md mx-auto leading-relaxed">
        Hands-on work spanning systems programming, QA practice artefacts, and web development.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      {PROJECTS.map(project => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  </section>
);

export default Projects;
