import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, AlertCircle, Loader, Mail, Phone } from 'lucide-react';

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

/* LinkedIn SVG since it is removed in lucide-react */
const LinkedInIcon = ({ size = 18, className }) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

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

/* ── Field component ─────────────────────────────────────────── */
const Field = ({ label, id, children }) => (
  <div className="flex flex-col gap-1.5">
    <label htmlFor={id} className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 ml-1">
      {label}
    </label>
    {children}
  </div>
);

const inputCls =
  'w-full px-4 py-3 rounded-2xl bg-white/60 dark:bg-black/40 ' +
  'border border-black/8 dark:border-white/10 ' +
  'focus:outline-none focus:ring-2 focus:ring-[#007AFF]/50 focus:border-transparent ' +
  'placeholder:text-gray-400 dark:placeholder:text-gray-600 ' +
  'text-sm text-gray-900 dark:text-gray-100 transition-colors duration-200 backdrop-blur-sm';

/* ── Social Card Component ───────────────────────────────────── */
const ContactCard = ({ icon: Icon, title, value, href }) => (
  <a href={href} target={href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-3xl glass-panel apple-interaction group">
    <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center shrink-0">
      <Icon size={20} className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" />
    </div>
    <div className="overflow-hidden">
      <h4 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-0.5">{title}</h4>
      <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">{value}</p>
    </div>
  </a>
);

/* ── Section ─────────────────────────────────────────────────── */
const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus]   = useState('idle'); // idle | sending | success | error
  const [fields, setFields]   = useState({ name: '', email: '', message: '' });

  const handleChange = e =>
    setFields(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');
    try {
      const templateParams = {
        user_name: fields.name,
        user_email: fields.email,
        message: fields.message,
        reply_to: fields.email
      };

      await emailjs.send(
        SERVICE_ID, 
        TEMPLATE_ID, 
        templateParams,
        PUBLIC_KEY
      );
      setStatus('success');
      setFields({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="w-full max-w-6xl mx-auto px-4 py-24">
      {/* Header */}
      <div className="text-center mb-12 reveal">
        <p className="section-label">Say Hello</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-3">Let's Connect & Work Together</h2>
        <p className="text-base text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
          Whether you have a question, a project opportunity, or just want to say hi, I'll try my best to get back to you!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
        {/* Contact Info Cards */}
        <div className="lg:col-span-2 flex flex-col gap-4 reveal">
          <ContactCard 
            icon={Mail} 
            title="Email" 
            value="hassan.heshamelzomer@gmail.com" 
            href="mailto:hassan.heshamelzomer@gmail.com" 
          />
          <ContactCard 
            icon={Phone} 
            title="Phone" 
            value="+20 1008752855" 
            href="tel:+201008752855" 
          />
          <ContactCard 
            icon={LinkedInIcon} 
            title="LinkedIn" 
            value="Hassan Hesham" 
            href="https://linkedin.com/in/hassan-hesham-b54bb8426" 
          />
          <ContactCard 
            icon={GithubIcon} 
            title="GitHub" 
            value="@hassan-hesham" 
            href="https://github.com/hassan-hesham" 
          />
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-3 glass-panel rounded-3xl p-8 md:p-10 relative overflow-hidden reveal">
          {/* Corner glow */}
          <div aria-hidden className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-blue-500/15 dark:bg-blue-500/10 blur-3xl pointer-events-none" />

          <form ref={formRef} onSubmit={handleSubmit} className="relative z-10 space-y-5">
            {/* Name + Email row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field label="Name" id="name">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={fields.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={inputCls}
                />
              </Field>
              <Field label="Email" id="email">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={fields.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={inputCls}
                />
              </Field>
            </div>

            {/* Message */}
            <Field label="Message" id="message">
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={fields.message}
                onChange={handleChange}
                placeholder="Let's connect & work together!"
                className={`${inputCls} resize-none`}
              />
            </Field>

            {/* Submit */}
            <div className="flex justify-end pt-2">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[#007AFF] hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-semibold shadow-lg shadow-blue-500/25 apple-interaction transition-colors"
              >
                {status === 'sending' ? (
                  <>
                    <Loader size={16} className="animate-spin" /> Sending…
                  </>
                ) : (
                  <>
                    Send Message <Send size={14} />
                  </>
                )}
              </button>
            </div>

            {/* Feedback banners */}
            {status === 'success' && (
              <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-sm font-medium animate-in fade-in">
                <CheckCircle size={18} /> Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-700 dark:text-red-400 text-sm font-medium animate-in fade-in">
                <AlertCircle size={18} /> Something went wrong. Please try again or email me directly.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
