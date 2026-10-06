import React, { useState } from 'react';
import { PROJECTS } from '../data/resumeData';
import type { Project } from '../data/resumeData';
import { ProjectModal } from './ProjectModal';
import { ProjectVisualizer } from './ProjectVisualizer';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { motion } from 'framer-motion';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-28 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      
      {/* Top Editorial Label */}
      <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-slate-400 mb-16">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>[ENGINEERED SYSTEMS]</span>
        </span>
        <span>INDEX 01 &mdash; 03</span>
      </div>

      <div className="mb-20 max-w-3xl">
        <h2 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.05]">
          Selected Works &amp; Architectural Implementations
        </h2>
        <p className="mt-4 text-slate-400 text-base leading-relaxed">
          Production-grade applications combining deep learning vision models, vector similarity indexing, and real-time interaction pipelines.
        </p>
      </div>

      {/* Editorial Vertical Showcase (Project by Project) */}
      <div className="space-y-24">
        {PROJECTS.map((project, index) => {
          const projectNum = `0${index + 1}`;
          return (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 sm:p-12 rounded-3xl bg-[#0a0c14] border border-white/10 hover:border-white/20 transition-all duration-500 shadow-2xl relative overflow-hidden group"
            >
              {/* Top Meta Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-6 mb-8 text-xs font-mono uppercase tracking-widest">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded bg-white/[0.06] text-cyan-400 font-bold border border-white/10">
                    PROJECT / {projectNum}
                  </span>
                  <span className="text-slate-400 font-medium">
                    {project.category}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-slate-400">
                  <span>{project.date}</span>
                  {project.keyMetric && (
                    <>
                      <span>&bull;</span>
                      <span className="text-emerald-400 font-medium">{project.keyMetric}</span>
                    </>
                  )}
                </div>
              </div>

              {/* Showcase Grid: Left Info & Right Visual Flow */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
                
                {/* Left 6 Columns: Editorial Content */}
                <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                  <div>
                    <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight leading-tight group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <div className="text-sm font-mono text-cyan-400/90 mt-1 mb-4">
                      {project.subtitle}
                    </div>

                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                      {project.overview}
                    </p>

                    {/* Problem / Solution Excerpt */}
                    <div className="space-y-3 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-xs font-mono leading-relaxed mb-6">
                      <div>
                        <span className="text-slate-400 uppercase tracking-wider block mb-0.5">Problem Solved:</span>
                        <span className="text-slate-300">{project.problem}</span>
                      </div>
                      <div className="pt-2 border-t border-white/[0.06]">
                        <span className="text-cyan-400 uppercase tracking-wider block mb-0.5">Architecture:</span>
                        <span className="text-slate-300">{project.solution}</span>
                      </div>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded text-[11px] font-mono bg-white/[0.04] border border-white/[0.07] text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Bar */}
                  <div className="pt-6 border-t border-white/[0.08] flex items-center gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-mono uppercase tracking-wider text-black bg-white hover:bg-slate-200 font-bold transition-all cursor-pointer active:scale-95 shadow-md"
                    >
                      <span>Inspect Architecture</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-3 rounded-full text-xs font-mono uppercase tracking-wider text-slate-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 transition-all cursor-pointer"
                        title="View GitHub Repository"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Repository</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Right 6 Columns: Concrete Technical Flow Schematic */}
                <div className="lg:col-span-6 flex flex-col justify-center">
                  <ProjectVisualizer projectId={project.id} />
                </div>

              </div>
            </motion.article>
          );
        })}
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </section>
  );
};
