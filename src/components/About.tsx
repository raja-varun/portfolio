import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';


interface FocusArea {
  id: string;
  number: string;
  title: string;
  category: string;
  summary: string;
  tech: string[];
  blueprint: {
    steps: string[];
    highlight: string;
  };
}

export const About: React.FC = () => {
  const [activeArea, setActiveArea] = useState<string>('multimodal');

  const focusAreas: FocusArea[] = [
    {
      id: 'multimodal',
      number: '01',
      title: 'Multimodal Document Retrieval',
      category: 'Vision-Language & Vector Indexing',
      summary:
        'Eliminating lossy OCR parsers by encoding raw document layouts, charts, and tables directly into vision-language embeddings using Qwen2-VL, mapped into FAISS for sub-second retrieval.',
      tech: ['Qwen2-VL', 'FAISS', 'FastAPI', 'React.js', 'Vision-Language Embeddings'],
      blueprint: {
        steps: [
          'Document Upload & Page Rasterization',
          'Qwen2-VL Multi-Vector Encoding',
          'FAISS Sub-Second Indexing',
          'Cross-Modal Semantic Query Matching'
        ],
        highlight: 'Preserves visual diagrammatic and tabular context without text extraction failure.'
      }
    },
    {
      id: 'vision',
      number: '02',
      title: 'Deep Learning Computer Vision',
      category: 'Agricultural Pathology & CNNs',
      summary:
        'Designing and fine-tuning convolutional architectures with TensorFlow/Keras and OpenCV to classify plant pathology across 100,000+ agricultural images with 95%+ precision, served via multilingual Streamlit.',
      tech: ['TensorFlow', 'Keras', 'OpenCV', 'Streamlit', 'Multilingual Advisory'],
      blueprint: {
        steps: [
          'Image Preprocessing & Augmentation',
          'Deep Convolutional Feature Extraction',
          'Softmax Disease Classification (95%+ Acc)',
          'Multilingual Treatment Recommendation (TE/HI/EN)'
        ],
        highlight: 'Trained on 100,000+ images with actionable remediation advice for farmers.'
      }
    },
    {
      id: 'hci',
      number: '03',
      title: 'Touchless System Interfaces',
      category: 'Real-Time Edge Perception',
      summary:
        'Engineering camera-based human-computer interfaces using MediaPipe 21-point hand landmark tracking, transforming physical gestures into OS-level controls via PyAutoGUI and pycaw.',
      tech: ['MediaPipe', 'OpenCV', 'Python', 'PyAutoGUI', 'pycaw', 'Windows APIs'],
      blueprint: {
        steps: [
          '30+ FPS Webcam Stream Ingestion',
          '21-Point Landmark Geometric Parsing',
          'Dynamic Gesture State Machine',
          'OS Level API Dispatch (Volume / Brightness / Zoom)'
        ],
        highlight: 'Sub-millisecond landmark evaluation for latency-free touchless interaction.'
      }
    }
  ];

  const currentArea = focusAreas.find((a) => a.id === activeArea) || focusAreas[0];

  return (
    <section id="about" className="py-28 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      
      {/* Top Editorial Label */}
      <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-slate-400 mb-12">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>[PHILOSOPHY &amp; APPROACH]</span>
        </span>
        <span>ENGINEERING DISCIPLINE</span>
      </div>

      {/* Asymmetric Editorial Header: Big Statement Left + Narrative Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20 items-baseline">
        <div className="lg:col-span-7">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.08] text-balance">
            Models are only as powerful as the systems they inhabit.
          </h2>
        </div>

        <div className="lg:col-span-5 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
          <p>
            I am a B.Tech Computer Science and Engineering (Data Science) undergraduate at{' '}
            <strong className="text-white font-medium">Mahatma Gandhi Institute of Technology, Hyderabad</strong> (2024–2027).
          </p>
          <p className="text-slate-400">
            Rather than stopping at isolated Jupyter notebooks, I build complete, end-to-end intelligent systems: from vector embeddings that preserve document layout semantics, to high-precision convolutional models for agricultural diagnosis, to touchless interfaces that map computer vision directly to operating system controls.
          </p>
        </div>
      </div>

      {/* Interactive Technical Focus Areas Explorer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-8 border-t border-white/[0.08]">
        
        {/* Left Column: Interactive List */}
        <div className="lg:col-span-6 space-y-3">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
            Interactive Focus Areas &bull; Select to inspect architecture
          </div>

          {focusAreas.map((area) => {
            const isSelected = area.id === activeArea;
            return (
              <div
                key={area.id}
                onMouseEnter={() => setActiveArea(area.id)}
                onClick={() => setActiveArea(area.id)}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                  isSelected
                    ? 'bg-white/[0.06] border-white/20 shadow-xl'
                    : 'bg-transparent border-white/[0.05] hover:border-white/10 opacity-70 hover:opacity-100'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-cyan-400 font-bold">{area.number}</span>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                      {area.category}
                    </span>
                  </div>
                  <ArrowUpRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-cyan-400 translate-x-0.5 -translate-y-0.5' : 'text-slate-600'}`} />
                </div>

                <h3 className={`text-xl sm:text-2xl font-display font-bold tracking-tight transition-colors ${
                  isSelected ? 'text-white' : 'text-slate-300'
                }`}>
                  {area.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {area.summary}
                </p>
              </div>
            );
          })}
        </div>

        {/* Right Column: Dynamic Architectural Blueprint Panel */}
        <div className="lg:col-span-6">
          <div className="h-full p-8 rounded-2xl bg-[#0c0e15] border border-white/10 flex flex-col justify-between relative overflow-hidden">
            
            {/* Top Blueprint Title */}
            <div>
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-xs font-mono uppercase tracking-widest text-slate-300">
                    System Blueprint / {currentArea.number}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-400 uppercase">Live Architectural Flow</span>
              </div>

              <h4 className="text-2xl font-display font-bold text-white mb-2">
                {currentArea.title}
              </h4>
              <p className="text-xs font-mono text-cyan-400/90 mb-6">
                {currentArea.blueprint.highlight}
              </p>

              {/* Sequential Flow Steps */}
              <div className="space-y-3 my-6">
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Execution Pipeline:
                </div>
                {currentArea.blueprint.steps.map((step, idx) => (
                  <motion.div
                    key={`${currentArea.id}-${idx}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.08 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs font-mono text-slate-200"
                  >
                    <span className="w-5 h-5 rounded-md bg-white/[0.08] flex items-center justify-center text-[10px] text-cyan-400 font-bold shrink-0">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom Stack Chips */}
            <div className="pt-6 border-t border-white/[0.08]">
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                Core Technologies Applied:
              </div>
              <div className="flex flex-wrap gap-2">
                {currentArea.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.05] border border-white/[0.08] text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};
