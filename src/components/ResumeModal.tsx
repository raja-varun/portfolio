import React, { useEffect } from 'react';
import { SITE_CONFIG } from '../config/site';
import { X, FileDown, ExternalLink, CheckCircle2, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-[#0c0e16] border border-white/15 rounded-3xl shadow-2xl z-10 p-6 sm:p-10 overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-cyan-300 text-xs font-mono mb-6">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>Verified Official Resume</span>
          </div>

          <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight mb-2">
            Raja Varun
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 font-mono mb-8">
            B.Tech CSE (Data Science) &bull; Mahatma Gandhi Institute of Technology, Hyderabad (2024&ndash;2027)
          </p>

          {/* Verified Snapshot Box */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-4 mb-8 text-xs text-slate-300 font-mono">
            <div className="text-[11px] font-mono text-slate-400 uppercase tracking-widest">
              Resume Key Indicators:
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>ColPali Multimodal Retrieval (Qwen2-VL)</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>Plant Disease Vision (95%+ On 100K+)</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>MediaPipe Touchless Interface (Windows API)</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>Oracle AI Foundations Certified Associate</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-[11px] font-mono text-slate-400">
              File: varun_resume_2.pdf
            </span>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <a
                href={SITE_CONFIG.RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-slate-200 text-xs font-mono uppercase tracking-wider transition-all"
              >
                <span>Preview PDF</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>

              <a
                href={SITE_CONFIG.RESUME_URL}
                download="Raja_Varun_Resume.pdf"
                className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white hover:bg-slate-200 text-black text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-md active:scale-95"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
