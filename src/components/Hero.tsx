import React, { useState } from 'react';
import { SITE_CONFIG } from '../config/site';
import { ArrowDownRight, FileDown, Check, Copy, ArrowRight } from 'lucide-react';
import { motion, useMotionValue, useTransform } from 'framer-motion';


interface HeroProps {
  onDownloadResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDownloadResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Mouse tilt / parallax values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const tiltX = useTransform(mouseY, [-0.5, 0.5], [6, -6]);
  const tiltY = useTransform(mouseX, [-0.5, 0.5], [-6, 6]);

  const copyEmail = () => {
    navigator.clipboard.writeText(SITE_CONFIG.EMAIL);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-12 px-4 sm:px-8 max-w-7xl mx-auto"
    >
      {/* Top Technical Metadata Bar */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-5 text-[11px] font-mono uppercase tracking-widest text-slate-400"
      >
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-slate-300 font-medium">B.Tech CSE &bull; Data Science</span>
        </div>

        <div className="hidden sm:flex items-center gap-6 text-slate-400">
          <span>MGIT Hyderabad (2024&ndash;2027)</span>
          <span>&bull;</span>
          <span>Open to AI / ML Roles</span>
        </div>

        <div className="text-slate-400 font-mono">
          [SYS_INDEX / 01]
        </div>
      </motion.div>

      {/* Main Editorial Hero Canvas */}
      <div className="my-auto py-12 lg:py-16">
        <motion.div
          style={{ rotateX: tiltX, rotateY: tiltY, transformPerspective: 1000 }}
          className="transition-transform duration-200 ease-out"
        >
          {/* Sub-label */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 mb-6"
          >
            <span className="h-px w-8 bg-cyan-400/60" />
            <span>AI / Machine Learning / Data Science Engineer</span>
          </motion.div>

          {/* Large Display Typography Name */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl sm:text-8xl lg:text-[10rem] font-display font-extrabold tracking-[-0.04em] text-white leading-[0.9] select-none"
            >
              RAJA VARUN
            </motion.h1>
          </div>

          {/* Asymmetric Split: Professional Narrative + Live Key Indicators */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-8 pt-8 border-t border-white/[0.08]">
            
            {/* Statement strictly from resume */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-7 space-y-4"
            >
              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed text-balance">
                Specializing in end-to-end intelligent systems: from{' '}
                <span className="text-white font-medium underline decoration-cyan-400/40 underline-offset-4">
                  OCR-free multimodal document retrieval
                </span>{' '}
                (ColPali &bull; Qwen2-VL &bull; FAISS) and{' '}
                <span className="text-white font-medium underline decoration-cyan-400/40 underline-offset-4">
                  deep learning computer vision
                </span>{' '}
                (95%+ accuracy across 100,000+ agricultural images), to{' '}
                <span className="text-white font-medium underline decoration-cyan-400/40 underline-offset-4">
                  touchless human-computer interaction
                </span>{' '}
                via MediaPipe landmark tracking.
              </p>
            </motion.div>

            {/* Micro Technical Metadata Grid */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-5 grid grid-cols-2 gap-3 font-mono text-xs text-slate-400"
            >
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Architecture</div>
                <div className="text-slate-200 font-semibold">Vision-Language &amp; FAISS</div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Vision Benchmarks</div>
                <div className="text-slate-200 font-semibold">95%+ On 100K+ Dataset</div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Interface Engineering</div>
                <div className="text-slate-200 font-semibold">Real-Time MediaPipe HCI</div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Hackathon Honors</div>
                <div className="text-cyan-400 font-semibold">2nd Place &bull; AI Hackdays</div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>

      {/* Bottom Control Strip: Sophisticated CTAs & Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-white/[0.08]"
      >
        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={scrollToProjects}
            className="group relative inline-flex items-center gap-3 px-6 py-3.5 rounded-full text-xs font-mono uppercase tracking-wider text-black bg-white hover:bg-slate-200 transition-all duration-300 font-semibold cursor-pointer active:scale-95 shadow-lg shadow-white/10"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onDownloadResume}
            className="group inline-flex items-center gap-2.5 px-5 py-3.5 rounded-full text-xs font-mono uppercase tracking-wider text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer active:scale-95"
          >
            <FileDown className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-y-0.5 transition-transform" />
            <span>View Resume</span>
          </button>

          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 px-4 py-3.5 rounded-full text-xs font-mono text-slate-400 hover:text-white bg-transparent hover:bg-white/[0.04] border border-white/[0.08] transition-colors cursor-pointer"
            title="Click to copy email address"
          >
            {copiedEmail ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-400" />
                <span>{SITE_CONFIG.EMAIL}</span>
              </>
            )}
          </button>
        </div>

        {/* Minimalist Scroll Prompt */}
        <div
          onClick={scrollToProjects}
          className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-slate-400 hover:text-white transition-colors cursor-pointer group"
        >
          <span className="text-[10px]">Scroll Down</span>
          <div className="w-7 h-7 rounded-full border border-white/15 flex items-center justify-center group-hover:border-white/40 transition-colors">
            <ArrowDownRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>

      </motion.div>
    </section>
  );
};
