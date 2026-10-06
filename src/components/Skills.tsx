import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/resumeData';
import { Code2, Cpu, Wrench, Sparkles, Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface SkillContext {
  [key: string]: {
    domain: string;
    context: string;
    relatedProjects: string[];
  };
}

const SKILL_DETAILS: SkillContext = {
  Python: {
    domain: 'Core Programming',
    context: 'Primary language for deep learning models, computer vision pipelines, and FastAPI microservices.',
    relatedProjects: ['ColPali Retrieval', 'Plant Disease Detection', 'Gesture System Control']
  },
  Java: {
    domain: 'Core Programming',
    context: 'Object-oriented programming, data structures, and backend systems.',
    relatedProjects: ['Academic Core & Algorithms']
  },
  SQL: {
    domain: 'Data Architecture',
    context: 'Relational data modeling, querying, aggregations, and data ingestion pipelines.',
    relatedProjects: ['Data Science Specialization']
  },
  C: {
    domain: 'Systems Programming',
    context: 'Low-level memory management, pointers, and performance-critical computing fundamentals.',
    relatedProjects: ['Systems Architecture']
  },
  R: {
    domain: 'Statistical Analysis',
    context: 'Statistical modeling, hypothesis testing, and exploratory data analysis.',
    relatedProjects: ['Statistical Computing']
  },
  TensorFlow: {
    domain: 'Deep Learning',
    context: 'End-to-end deep learning framework used for convolutional model training and optimization.',
    relatedProjects: ['Plant Disease Detection System']
  },
  Keras: {
    domain: 'Neural Networks',
    context: 'High-level neural network API for rapid convolutional and recurrent network prototyping.',
    relatedProjects: ['Plant Disease Detection System']
  },
  PyTorch: {
    domain: 'Deep Learning Research',
    context: 'Dynamic computation graphs, modern vision-language models, and tensor manipulation.',
    relatedProjects: ['Multimodal & Neural Network Training']
  },
  OpenCV: {
    domain: 'Computer Vision',
    context: 'Image preprocessing, morphological operations, color space filtering, and video stream ingestion.',
    relatedProjects: ['Plant Disease Detection', 'Gesture System Control']
  },
  MediaPipe: {
    domain: 'Perception & Tracking',
    context: 'Google real-time 21-point hand landmark tracking with low CPU latency.',
    relatedProjects: ['Gesture-Based System Control']
  },
  FAISS: {
    domain: 'Vector Search',
    context: 'Facebook AI Similarity Search library for sub-second vector nearest-neighbor retrieval.',
    relatedProjects: ['ColPali: OCR-Free Document Retrieval']
  },
  FastAPI: {
    domain: 'Backend Services',
    context: 'Asynchronous Python web framework for high-throughput model inference endpoints.',
    relatedProjects: ['ColPali: OCR-Free Document Retrieval']
  },
  'React.js': {
    domain: 'Frontend Engineering',
    context: 'Component-driven web applications and interactive interfaces for AI system interaction.',
    relatedProjects: ['ColPali Document Retrieval UI', 'Personal Portfolio']
  },
  Streamlit: {
    domain: 'ML App Deployment',
    context: 'Rapid machine learning application deployment with multilingual UI support.',
    relatedProjects: ['Plant Disease Detection System']
  },
  Docker: {
    domain: 'Containerization',
    context: 'Containerized deployment of AI services ensuring repeatable runtime environments.',
    relatedProjects: ['Full-Stack AI Deployment']
  },
  n8n: {
    domain: 'Workflow Automation',
    context: 'Node-based workflow automation and API orchestration.',
    relatedProjects: ['Automation Pipelines']
  },
  Tableau: {
    domain: 'Data Visualization',
    context: 'Business intelligence dashboards and visual analytics.',
    relatedProjects: ['Data Science Analytics']
  },
  PyAutoGUI: {
    domain: 'OS Automation',
    context: 'Programmatic operating system control for mouse, keyboard, and screen automation.',
    relatedProjects: ['Gesture-Based System Control']
  },
  pycaw: {
    domain: 'Audio Core APIs',
    context: 'Python Core Audio Windows Library for direct hardware volume manipulation.',
    relatedProjects: ['Gesture-Based System Control']
  }
};

export const Skills: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<string>('Python');
  const [copiedSkill, setCopiedSkill] = useState<string | null>(null);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Programming Languages':
        return <Code2 className="w-4 h-4 text-cyan-400" />;
      case 'Machine Learning & Computer Vision':
        return <Cpu className="w-4 h-4 text-indigo-400" />;
      case 'Frameworks & Technologies':
        return <Wrench className="w-4 h-4 text-sky-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-cyan-400" />;
    }
  };

  const currentDetail = SKILL_DETAILS[selectedSkill] || {
    domain: 'Verified Technology',
    context: 'Technology applied within production AI applications and coursework.',
    relatedProjects: ['Applied Engineering Work']
  };

  const handleCopySkill = (name: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(name);
    setCopiedSkill(name);
    setTimeout(() => setCopiedSkill(null), 1500);
  };

  return (
    <section id="skills" className="py-28 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      
      {/* Top Editorial Label */}
      <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-slate-400 mb-16">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>[TOOLING &amp; ECOSYSTEM]</span>
        </span>
        <span>VERIFIED STACK</span>
      </div>

      <div className="mb-16 max-w-2xl">
        <h2 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.05]">
          Technical Capabilities &amp; System Tools
        </h2>
        <p className="mt-4 text-slate-400 text-base leading-relaxed">
          Technologies actively utilized across deep learning pipelines, vector similarity engines, and touchless operating system interfaces.
        </p>
      </div>

      {/* Main Interactive Skills Architecture Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left 8 Cols: Categorized Technology Matrix */}
        <div className="lg:col-span-8 space-y-8">
          {SKILL_CATEGORIES.map((categoryGroup) => (
            <div
              key={categoryGroup.category}
              className="p-6 sm:p-8 rounded-2xl bg-[#0a0c14] border border-white/[0.07]"
            >
              <div className="flex items-center gap-3 border-b border-white/[0.06] pb-4 mb-6">
                <div className="p-2 rounded-lg bg-white/[0.04] border border-white/10">
                  {getCategoryIcon(categoryGroup.category)}
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold text-white tracking-tight">
                    {categoryGroup.category}
                  </h3>
                  <div className="text-xs font-mono text-slate-400">
                    {categoryGroup.description}
                  </div>
                </div>
              </div>

              {/* Technology Tokens */}
              <div className="flex flex-wrap gap-2.5">
                {categoryGroup.skills.map((skill) => {
                  const isSelected = selectedSkill === skill.name;
                  return (
                    <button
                      key={skill.name}
                      onClick={() => setSelectedSkill(skill.name)}
                      className={`group relative px-4 py-2.5 rounded-xl text-xs font-mono transition-all duration-200 flex items-center gap-2 cursor-pointer border ${
                        isSelected
                          ? 'bg-white text-black border-white font-bold shadow-lg shadow-white/10 scale-105'
                          : 'bg-white/[0.03] text-slate-300 border-white/[0.08] hover:border-white/20 hover:bg-white/[0.06]'
                      }`}
                    >
                      <span>{skill.name}</span>
                      <span
                        onClick={(e) => handleCopySkill(skill.name, e)}
                        className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-slate-400 hover:text-white"
                        title="Copy skill name"
                      >
                        {copiedSkill === skill.name ? <Check className="w-3 h-3 text-emerald-400" /> : '#'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Right 4 Cols: Live Context & Application Card */}
        <div className="lg:col-span-4 sticky top-28">
          <motion.div
            key={selectedSkill}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="p-8 rounded-3xl bg-[#0d0f18] border border-white/15 shadow-2xl relative overflow-hidden"
          >
            {/* Top Indicator */}
            <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-slate-400 border-b border-white/[0.08] pb-4 mb-6">
              <span>ACTIVE INSPECTOR</span>
              <span className="text-cyan-400">{currentDetail.domain}</span>
            </div>

            <div className="mb-6">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                Selected Technology:
              </span>
              <h4 className="text-3xl font-display font-bold text-white tracking-tight">
                {selectedSkill}
              </h4>
            </div>

            <div className="space-y-4 mb-8">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1.5">
                  Engineering Application:
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {currentDetail.context}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.08]">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                  Applied in Projects:
                </span>
                <div className="space-y-1.5">
                  {currentDetail.relatedProjects.map((proj, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-xs font-mono text-cyan-300">
                      <ArrowRight className="w-3 h-3 text-cyan-400 shrink-0" />
                      <span>{proj}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.08] text-[10px] font-mono text-slate-400 flex items-center justify-between">
              <span>Verified Credential</span>
              <span className="text-slate-300">varun_resume_2.pdf</span>
            </div>
          </motion.div>
        </div>

      </div>

    </section>
  );
};
