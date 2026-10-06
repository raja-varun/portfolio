import React from 'react';
import { SITE_CONFIG } from '../config/site';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/[0.08] text-slate-400 text-xs font-mono">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
        
        {/* Brand identity */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="font-display font-extrabold text-white text-lg tracking-wider uppercase">
            Raja Varun
          </div>
          <div className="text-[11px] text-slate-400">
            AI / Machine Learning / Data Science Engineer &bull; Hyderabad, India
          </div>
        </div>

        {/* Action Controls & Socials */}
        <div className="flex items-center gap-4">
          <a
            href={SITE_CONFIG.LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 hover:bg-white/[0.04] transition-all"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
          </a>

          <a
            href={`https://github.com/${SITE_CONFIG.GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 hover:bg-white/[0.04] transition-all"
          >
            <GithubIcon className="w-3.5 h-3.5" />
          </a>

          <a
            href={`mailto:${SITE_CONFIG.EMAIL}`}
            aria-label="Email"
            className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-white/[0.04] transition-all"
          >
            <Mail className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-slate-300 hover:text-white hover:border-white/30 transition-all cursor-pointer text-xs"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* Editorial copyright strip */}
      <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
        <div>
          &copy; {new Date().getFullYear()} Raja Varun. All rights reserved.
        </div>
        <div>
          Editorial Creative Developer Aesthetic &bull; Grounded in verified credentials
        </div>
      </div>
    </footer>
  );
};
