import React from 'react';
import { EXPERIENCES } from '../data/resumeData';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';


export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-28 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      
      {/* Top Editorial Label */}
      <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-slate-400 mb-16">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>[PRACTICE &amp; INTERNSHIPS]</span>
        </span>
        <span>CHRONOLOGICAL RECORD</span>
      </div>

      <div className="mb-20 max-w-2xl">
        <h2 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.05]">
          Work Experience &amp; Industry Roles
        </h2>
        <p className="mt-4 text-slate-400 text-base leading-relaxed">
          Applied artificial intelligence development, model validation, and interactive software engineering internships.
        </p>
      </div>

      {/* Editorial Timeline (Clean Left-Aligned Chronology) */}
      <div className="space-y-16">
        {EXPERIENCES.map((exp, index) => {
          const indexNum = `0${index + 1}`;
          return (
            <motion.article
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 sm:p-12 rounded-3xl bg-[#0a0c14] border border-white/[0.08] hover:border-white/20 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Metadata (4 cols) */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-cyan-400 px-2 py-0.5 rounded bg-white/[0.05] border border-white/10">
                      STAGE / {indexNum}
                    </span>
                    <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">
                      {exp.type}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                      {exp.company}
                    </h3>
                    <div className="text-sm font-mono text-cyan-400 mt-1 font-semibold">
                      {exp.role}
                    </div>
                  </div>

                  <div className="space-y-1 text-xs font-mono text-slate-400">
                    <div>Timeline: <strong className="text-slate-300">{exp.period}</strong></div>
                    <div>Location: <strong className="text-slate-300">{exp.location}</strong></div>
                  </div>

                  {/* Skills badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.skills.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.03] text-slate-300 border border-white/[0.06]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Bullet Responsibilities (8 cols) */}
                <div className="lg:col-span-8 space-y-4 lg:border-l lg:border-white/[0.08] lg:pl-10">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Key Responsibilities &amp; Outcomes:
                  </div>

                  {exp.points.map((pt, pIdx) => (
                    <div
                      key={pIdx}
                      className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04] text-xs sm:text-sm text-slate-300 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

              </div>
            </motion.article>
          );
        })}
      </div>

    </section>
  );
};
