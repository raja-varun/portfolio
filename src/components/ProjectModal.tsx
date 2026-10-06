import React, { useEffect } from 'react';
import type { Project } from '../data/resumeData';
import { X, ExternalLink, CheckCircle2, AlertCircle, Layers } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10">
        {/* Backdrop with blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-xl"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[88vh] overflow-y-auto bg-[#0c0e16] border border-white/15 rounded-3xl shadow-2xl z-10 p-6 sm:p-10"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-6 mb-8">
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-slate-400">
              <span className="text-cyan-400 font-bold">[CASE STUDY]</span>
              <span>&bull;</span>
              <span>{project.category}</span>
              <span>&bull;</span>
              <span>{project.date}</span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close case study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Title Area */}
          <div className="mb-8">
            <h3 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
              {project.title}
            </h3>
            <p className="text-base font-mono text-cyan-400/90 mt-2">
              {project.subtitle}
            </p>
          </div>

          {/* Key Metric Callout if available */}
          {project.keyMetric && (
            <div className="p-4 rounded-2xl bg-emerald-950/25 border border-emerald-800/40 text-emerald-300 text-xs sm:text-sm font-mono flex items-center gap-3 mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
              <span>Verified Benchmark Metric: <strong className="text-white">{project.keyMetric}</strong></span>
            </div>
          )}

          {/* Section: Overview */}
          <div className="space-y-3 mb-8">
            <div className="text-xs font-mono uppercase tracking-widest text-slate-400">
              01 &mdash; Project Overview
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Section: Problem & Solution Asymmetric Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2">
              <div className="flex items-center gap-2 text-rose-300 font-mono text-xs uppercase tracking-wider">
                <AlertCircle className="w-4 h-4 text-rose-400" />
                <span>The Challenge / Problem</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2">
                {project.problem}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2">
              <div className="flex items-center gap-2 text-cyan-300 font-mono text-xs uppercase tracking-wider">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>The Engineered Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Section: Implementation Highlights */}
          <div className="space-y-4 mb-8">
            <div className="text-xs font-mono uppercase tracking-widest text-slate-400">
              02 &mdash; Verified Implementation Highlights
            </div>
            <div className="space-y-3">
              {project.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Technologies */}
          <div className="space-y-3 mb-10">
            <div className="text-xs font-mono uppercase tracking-widest text-slate-400">
              03 &mdash; Technology Stack
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white/[0.05] text-slate-200 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Action Strip */}
          <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-[11px] font-mono text-slate-400">
              Source: Verified credentials from varun_resume_2.pdf
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-white text-xs font-mono uppercase tracking-wider transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Repository</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              )}
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-white hover:bg-slate-200 text-black text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer"
              >
                Close Case Study
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
