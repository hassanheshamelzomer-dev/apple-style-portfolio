import React from 'react';
import { Mail, Phone, ExternalLink } from 'lucide-react';

/* LinkedIn SVG (not in lucide v1.51 — using inline path) */
const LinkedInIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const LINKS = [
  {
    label: 'hassan.heshamelzomer@gmail.com',
    href: 'mailto:hassan.heshamelzomer@gmail.com',
    icon: Mail,
  },
  {
    label: '+20 1008752855',
    href: 'tel:+201008752855',
    icon: Phone,
  },
  {
    label: 'LinkedIn Profile',
    href: 'https://linkedin.com/in/hassan-hesham-b54bb8426',
    icon: LinkedInIcon,
    external: true,
  },
];

const Footer = () => (
  <footer className="relative z-10 w-full border-t border-black/5 dark:border-white/8 bg-white/30 dark:bg-black/30 backdrop-blur-xl">
    <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col items-center text-center gap-8">
      {/* Monogram */}
      <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-md shadow-blue-500/20">
        <span className="text-white text-sm font-bold tracking-tight">HZ</span>
      </div>

      {/* Name */}
      <div>
        <p className="text-base font-bold tracking-tight text-gray-900 dark:text-white">
          Hassan Hesham Hassan Zaki
        </p>
        <p className="text-xs font-medium text-gray-500 dark:text-gray-500 mt-0.5">
          Software QC Engineer & Developer
        </p>
      </div>

      {/* Social / contact links */}
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
        {LINKS.map(({ label, href, icon: Icon, external }) => (
          <a
            key={label}
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-[#007AFF] dark:hover:text-blue-400 transition-colors"
          >
            <Icon size={14} />
            {label}
            {external && <ExternalLink size={11} className="opacity-60" />}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <p className="text-[11px] text-gray-400 dark:text-gray-600 font-medium">
        © {new Date().getFullYear()} Hassan Hesham. Built with React & Tailwind CSS.
      </p>
    </div>
  </footer>
);

export default Footer;
