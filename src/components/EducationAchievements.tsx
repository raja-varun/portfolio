import React from 'react';
import { EDUCATION, ACHIEVEMENTS_CERTIFICATIONS } from '../data/resumeData';
import { motion } from 'framer-motion';


export const EducationAchievements: React.FC = () => {
  return (
    <section id="education" className="py-28 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      
      {/* Top Editorial Label */}
      <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-slate-400 mb-16">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>[HONORS &amp; ACADEMICS]</span>
        </span>
        <span>VERIFIED CREDENTIALS</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Column: Achievements & Honors (7 cols) */}
        <div className="lg:col-span-7 space-y-12">
          <div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-[1.05]">
              Achievements &amp; Honors
            </h2>
            <p className="mt-3 text-slate-400 text-sm leading-relaxed">
              Competitive hackathon placement and recognized industry certifications in Artificial Intelligence.
            </p>
          </div>

          <div className="space-y-4">
            {ACHIEVEMENTS_CERTIFICATIONS.map((item, idx) => {
              const isHackathon = item.type === 'hackathon';
              const num = `0${idx + 1}`;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.08 }}
                  className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 ${
                    isHackathon
                      ? 'bg-amber-950/15 border-amber-500/30 hover:border-amber-400/50'
                      : 'bg-[#0a0c14] border-white/[0.08] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-slate-400">
                      HONOR / {num}
                    </span>
                    <span
                      className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded ${
                        isHackathon
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                          : 'bg-white/[0.04] text-slate-400 border border-white/[0.06]'
                      }`}
                    >
                      {item.type}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight leading-tight">
                    {item.title}
                  </h3>

                  <div className="mt-4 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>Issued by: <strong className="text-slate-200">{item.issuer}</strong></span>
                    {item.date && <span>{item.date}</span>}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Academic Track (5 cols) */}
        <div className="lg:col-span-5 space-y-12">
          <div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-[1.05]">
              Education
            </h2>
            <p className="mt-3 text-slate-400 text-sm leading-relaxed">
              Formal computer science foundations and data science training.
            </p>
          </div>

          <div className="space-y-4">
            {EDUCATION.map((edu, idx) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="p-6 sm:p-7 rounded-2xl bg-[#0a0c14] border border-white/[0.08] hover:border-white/20 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-cyan-400 font-semibold">
                    {edu.period}
                  </span>
                  {idx === 0 && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-800/40">
                      Current
                    </span>
                  )}
                </div>

                <h4 className="text-lg font-display font-bold text-white tracking-tight mb-1">
                  {edu.degree}
                </h4>
                <div className="text-xs sm:text-sm text-slate-300 mb-1">
                  {edu.institution}
                </div>
                {edu.field && (
                  <div className="text-[11px] font-mono text-slate-400">
                    Domain: {edu.field}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
};
