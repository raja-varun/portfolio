import React, { useState } from 'react';
import { SITE_CONFIG } from '../config/site';
import { Mail, ArrowUpRight, Copy, Check, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [sentStatus, setSentStatus] = useState<string | null>(null);

  const copyEmail = () => {
    navigator.clipboard.writeText(SITE_CONFIG.EMAIL);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    const subject = encodeURIComponent(formData.subject || `Inquiry from Portfolio - ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Raja Varun,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
    );
    window.location.href = `mailto:${SITE_CONFIG.EMAIL}?subject=${subject}&body=${body}`;
    setSentStatus('Opening email client...');
    setTimeout(() => setSentStatus(null), 4000);
  };

  return (
    <section id="contact" className="py-28 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      
      {/* Top Editorial Label */}
      <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-slate-400 mb-16">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>[DIRECT INQUIRIES]</span>
        </span>
        <span>HYDERABAD, IN</span>
      </div>

      {/* Signature High-Impact Headline */}
      <div className="mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl sm:text-7xl lg:text-9xl font-display font-extrabold text-white tracking-[-0.04em] leading-[0.92] select-none"
        >
          LET&apos;S BUILD <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
            SOMETHING
          </span> <br />
          INTELLIGENT.
        </motion.h2>
      </div>

      {/* Asymmetric Contact Composition */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-8 border-t border-white/[0.08]">
        
        {/* Left Column: Direct Links & Coordinates (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Actively seeking AI / Machine Learning and Data Science roles. Always interested in technical inquiries, research conversations, and scalable system architectures.
          </p>

          {/* Email Action Card */}
          <div className="p-6 rounded-2xl bg-[#0a0c14] border border-white/[0.08] flex items-center justify-between gap-4 group hover:border-white/20 transition-all">
            <div className="overflow-hidden">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                Direct Email
              </span>
              <a
                href={`mailto:${SITE_CONFIG.EMAIL}`}
                className="text-sm sm:text-base font-mono font-semibold text-white hover:text-cyan-400 transition-colors truncate block"
              >
                {SITE_CONFIG.EMAIL}
              </a>
            </div>

            <button
              onClick={copyEmail}
              className="p-3 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white transition-colors shrink-0 cursor-pointer"
              title="Copy email address"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Social Profiles Grid */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <a
              href={SITE_CONFIG.LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#0a0c14] border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.03] transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <LinkedinIcon className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                <span className="text-xs font-mono text-slate-300 group-hover:text-white font-medium">LinkedIn</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href={`https://github.com/${SITE_CONFIG.GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#0a0c14] border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.03] transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <GithubIcon className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                <span className="text-xs font-mono text-slate-300 group-hover:text-white font-medium">GitHub</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          <div className="pt-4 text-xs font-mono text-slate-400">
            Location: <strong className="text-slate-300">{SITE_CONFIG.LOCATION}</strong>
          </div>
        </div>

        {/* Right Column: Direct Dispatch Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0a0c14] border border-white/[0.08]">
            <div className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>Initiate Conversation</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Alex Chen"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-slate-600 text-xs font-mono focus:outline-none focus:border-white/30 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-slate-600 text-xs font-mono focus:outline-none focus:border-white/30 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  placeholder="AI Engineering Opportunity / Technical Discussion"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-slate-600 text-xs font-mono focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe your inquiry, project scope, or opportunity..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-slate-600 text-xs font-mono focus:outline-none focus:border-white/30 transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                {sentStatus && (
                  <span className="text-xs font-mono text-cyan-400 animate-pulse">
                    {sentStatus}
                  </span>
                )}
                <button
                  type="submit"
                  className="ml-auto inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-black bg-white hover:bg-slate-200 transition-all cursor-pointer shadow-lg active:scale-95"
                >
                  <span>Transmit Message</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>

    </section>
  );
};
