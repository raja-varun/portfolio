import React, { useState, useEffect } from 'react';
import { SITE_CONFIG } from '../config/site';
import { Menu, X, ArrowUpRight, FileDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onDownloadResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onDownloadResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'projects', 'skills', 'experience', 'github', 'education', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#hero', id: 'hero' },
    { label: 'Philosophy', href: '#about', id: 'about' },
    { label: 'Work', href: '#projects', id: 'projects' },
    { label: 'Tooling', href: '#skills', id: 'skills' },
    { label: 'Timeline', href: '#experience', id: 'experience' },
    { label: 'Open Source', href: '#github', id: 'github' },
    { label: 'Credentials', href: '#education', id: 'education' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 sm:py-6 px-4 sm:px-8 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        
        {/* Editorial Brand Mark */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="group flex items-center gap-3 text-white tracking-tight"
        >
          <div className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-all duration-300">
            <span className="font-mono text-xs font-semibold text-cyan-400">RV</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-wider uppercase text-slate-100 group-hover:text-white transition-colors">
              Raja Varun
            </span>
            <span className="font-mono text-[10px] text-slate-400 tracking-wider">
              AI / ML Engineer
            </span>
          </div>
        </a>

        {/* Floating Desktop Menu Bar */}
        <nav
          className={`hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full transition-all duration-500 ${
            isScrolled
              ? 'bg-[#0f111a]/85 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50'
              : 'bg-transparent border border-transparent'
          }`}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-3 py-1.5 text-xs font-mono transition-all duration-200 rounded-full ${
                  isActive
                    ? 'text-white font-medium'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-pill"
                    className="absolute inset-0 bg-white/[0.09] rounded-full -z-10 border border-white/[0.12]"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span>{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={SITE_CONFIG.LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 hover:bg-white/[0.04] transition-all"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
          </a>

          <a
            href={`https://github.com/${SITE_CONFIG.GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 hover:bg-white/[0.04] transition-all"
          >
            <GithubIcon className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onDownloadResume}
            className="group relative flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider text-white bg-white/[0.08] hover:bg-white/[0.14] border border-white/15 hover:border-white/30 transition-all duration-300 shadow-sm cursor-pointer"
          >
            <FileDown className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-y-0.5 transition-transform" />
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onDownloadResume}
            aria-label="Resume"
            className="p-2 rounded-lg bg-white/[0.08] border border-white/10 text-slate-200"
          >
            <FileDown className="w-4 h-4 text-cyan-400" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
            className="p-2 rounded-lg bg-white/[0.08] border border-white/10 text-slate-200"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-3 p-5 rounded-2xl bg-[#0d0f17]/95 border border-white/10 backdrop-blur-2xl pointer-events-auto space-y-3"
          >
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2 rounded-lg text-xs font-mono ${
                    activeSection === link.id
                      ? 'bg-white/10 text-cyan-400 font-semibold'
                      : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <a
                  href={SITE_CONFIG.LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 text-slate-300"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={`https://github.com/${SITE_CONFIG.GITHUB_USERNAME}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 text-slate-300"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              </div>

              <button
                onClick={onDownloadResume}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono uppercase bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-semibold"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Resume PDF</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
